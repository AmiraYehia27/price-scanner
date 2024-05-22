import React, { useEffect } from 'react';
import product from '../src/assets/product.webp'
import { useSelector } from 'react-redux';


const Item = () => {

    let { prices, imageName } = useSelector((state) => state.product.contents);

    console.log(prices[0].Description)
    return (
        <div className='flex justify-evenly items-center'>

            <div className="product-img w-2/6">
                <img
                    src={`https://gourmetegypt.com/media/catalog/product${imageName}`}
                    alt="new"
                />
            </div>
            <div className="product-data w-3/6 text-left ">


                {/* No Sale Case..... */}
                {
                    prices[0].SalePrice ? <>
                        <span className='bg-red text-white py-1 px-3 rounded-md font-bold text-xs sale'>{100 - Math.round((Number(prices[0].SalePrice) / Number(prices[0].Price) * 100))}%</span>
                        <h1 className='text-3xl font-bold my-5 '>{prices[0].Description}</h1>
                        <ul className='flex justify-between flex-wrap'>
                            {
                                prices[0].PriceA >= prices[0].SalePrice && prices[0].PriceC >= prices[0].SalePrice ? <>
                                    <li className='line-through text-main font-bold w-1/2 grow leading-10'> <span>Main Price : </span>{Math.round(prices[0].Price)} </li>
                                    <li className='text-main font-bold w-1/2 grow leading-10 '> <span className='text-red text-2xl'>Sale Price : </span>{Math.round(prices[0].SalePrice)} </li>
                                </>
                                    : prices[0].PriceA <= prices[0].SalePrice && prices[0].PriceC <= prices[0].SalePrice ? <>
                                        <li className='line-through text-main font-bold w-1/2 grow leading-10'> <span>Main Price : </span>{Math.round(prices[0].Price)} </li>
                                        <li className='text-main font-bold w-1/2 grow leading-10 '> <span className='text-red text-2xl'>Sale Price : </span>{Math.round(prices[0].SalePrice)} </li>
                                        <li className='text-main font-bold w-1/2 grow leading-10'> <span className='text-black'>Orange Gold/VIP Price : </span>{Math.round(prices[0].PriceA)} </li>
                                        <li className='text-main font-bold w-1/2 grow leading-10' > <span className='text-black'>Gourmet Gold/VIP Price : </span>{Math.round(prices[0].PriceC)} </li>
                                    </>
                                        : prices[0].PriceA >= prices[0].SalePrice && prices[0].PriceC <= prices[0].SalePrice ? <>
                                            <li className='line-through text-main font-bold w-1/2 grow leading-10'> <span>Main Price : </span>{prices[0].Price} </li>
                                            <li className='text-main font-bold w-1/2 grow leading-10 '> <span className='text-red text-2xl'>Sale Price : </span>{Math.round(prices[0].SalePrice)} </li>
                                            <li className='text-main font-bold w-1/2 grow leading-10' > <span className='text-black'>Gourmet Gold/VIP Price : </span>{Math.round(prices[0].PriceC)} </li>

                                        </> : <>
                                            <li className='line-through text-main font-bold w-1/2 grow leading-10'> <span>Main Price : </span>{prices[0].Price} </li>
                                            <li className='text-main font-bold w-1/2 grow leading-10 '> <span className='text-red text-2xl'>Sale Price : </span>{Math.round(prices[0].SalePrice)} </li>
                                            <li className='text-main font-bold w-1/2 grow leading-10'> <span className='text-black'>Orange Gold/VIP Price : </span>{Math.round(prices[0].PriceA)} </li>
                                        </>
                            }





                        </ul>








                    </> :
                        <>
                            <h1 className='text-3xl font-bold my-5 '>{prices[0].Description}</h1>

                            <ul className='flex justify-between flex-wrap'>
                                {
                                    prices[0].price == prices[0].PriceA && prices[0].price == prices[0].PriceC ? <li className='text-main font-bold w-1/2 grow leading-10'> <span className='underline'>Main Price : </span>{Math.round(prices[0].Price)} </li> : prices[0].price == prices[0].PriceA ? <> <li className='text-main font-bold w-1/2 grow leading-10 '> <span className='text-black'>Main Price : </span>{prices[0].Price} </li>
                                        <li className='text-main font-bold w-1/2 grow leading-10'> <span className='text-black'>Orange Gold/VIP Price : </span>{Math.round(prices[0].PriceA)} </li></> : prices[0].price == prices[0].PriceC ? <>
                                            <li className='text-main font-bold w-1/2 grow leading-10'> <span className='text-black'>Main Price : </span>{Math.round(prices[0].Price)} </li>
                                            <li className='text-main font-bold w-1/2 grow leading-10'> <span className='text-black'>Orange Gold/VIP Price : </span>{Math.round(prices[0].PriceA)} </li>
                                        </> : <>
                                        <li className='text-main font-bold w-1/2 grow leading-10'> <span className='text-black'>Main Price : </span>{Math.round(prices[0].Price)} </li>
                                        <li className='text-main font-bold w-1/2 grow leading-10'> <span className='text-black'>Orange Gold/VIP Price : </span>{Math.round(prices[0].PriceA)} </li>
                                        <li className='text-main font-bold w-1/2 grow leading-10' > <span className='text-black'>Gourmet Gold/VIP Price : </span>{Math.round(prices[0].PriceC)} </li>
                                    </>
                                }

                            </ul>
                        </>
                }

              

            </div>
        </div>
    );
};


Item.propTypes = {

};


export default Item;
