import React, { useEffect, useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import WeatherApp from "../../components/weatherApp/weatherApp";
import "./shop.css";
import axios from 'axios';
import { AProduct } from "./productNoB";

export const Shop = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(
                'https://api.openweathermap.org/data/2.5/weather?q=Monterrey&appid=695ce9b917ff04e30ebdd72b95289dc2'
            )
            .then((response) => {
                setWeatherData(response.data);
            })
            .catch((error) => {
                setError(error.message); // Set error message
            });
    }, []);

    let temp = "";
    let hour = "";
    if (weatherData) {
        temp = (weatherData.main.temp - 273.15).toFixed(2);
        hour = new Date(weatherData.dt * 1000).getHours();
    }

    /* Filter the products by temperature and time, +-5 in temp and +-1 in hour */
    const filteredProducts = PRODUCTS.filter(product => {
        return (product.temp >= temp - 5 && product.temp <= temp + 5) && (product.time >= hour - 1 && product.time <= hour + 1)
    });

    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Catálogo</h1>
                <WeatherApp />
            </div>
            <h2>Productos Disponibles</h2>
            {filteredProducts.length === 0 ? (
                <p>No hay productos disponibles en este momento.</p>
            ) : (
                <div className="products">
                    {filteredProducts.map((product) => (
                        <Product data={product} key={product.id} />
                    ))}
                </div>
            )}
            <h2>Todos los productos</h2>
            <div className="Allproducts">
                {PRODUCTS.map((product) => (
                    <AProduct data={product} key={product.id} />
                ))}
            </div>
            {error && <p>Error fetching weather data: {error}</p>}
        </div>
    );
};
