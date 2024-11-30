"use client";

import { useState, useEffect } from 'react';
import { CarCard, ShowMore } from '@/components';
import { fetchCars } from '@/utils';
import { CarProps } from '@/types';

const CarList = () => {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCars = async () => {
      try {
        const allCars = await fetchCars({
          manufacturer: "",
          year: 2022,
          fuel: "",
          limit: 10,
          model: "",
        });
        setCars(Array.isArray(allCars) ? allCars : []);
      } catch (error) {
        console.error('Error loading cars:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCars();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (cars.length === 0) {
    return (
      <div className="home__error-container">
        <h2 className="text-black text-xl font-bold">No cars found</h2>
      </div>
    );
  }

  return (
    <>
      <div className="home__cars-wrapper">
        {cars.map((car) => (
          <CarCard key={car.model} car={car} />
        ))}
      </div>
      <ShowMore
        pageNumber={1}
        isNext={false}
      />
    </>
  );
};

export default CarList;
