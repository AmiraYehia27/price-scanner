
import Item from './Item';
import logo from './assets/website logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContent } from './store/lookupSlice';
import { useEffect, useState } from 'react';
import useScanDetection from 'use-scan-detection';
import { useRef } from 'react';
import BranchSetting from './BranchSetting';
import { useNavigate } from 'react-router-dom';


function Main() {
    const [store, setStore] = useState('')
    let navigate = useNavigate()
    const [value, setValue] = useState("");
    useScanDetection({
        onComplete: setValue,
    });
    const dispatch = useDispatch()
    let contents = useSelector((state) => state.product.contents)
    let isLoading = useSelector((state) => state.product.isLoading)
    let error = useSelector((state) => state.product.error);
    console.log('ggggggggggggggg' + value);
    console.log("contents", contents, "isLoading", isLoading, 'error', error)

    useEffect(() => {
        if (!sessionStorage.getItem("item_key")) {
            navigate('/price-scanner', { replace: true })
        } else {
            setStore(sessionStorage.getItem("item_key").split(',')[1])
        }
    }, [])
    useEffect(() => {
        console.log(value)
        if (value) {
            dispatch(fetchContent(value));
            const timer = setTimeout(() => setValue(''), 60000);
        }
    }, [value]);


    return (


        <div className='App bg-main'>
            <div className=''>
                <div className='header flex justify-between items-center'>
                    <img src={logo} alt='Gourmet logo' className='my-10  ms-5' />
                    <p className='me-5 text-3xl text-white font-bold'>{store}</p>
                </div>


                <div className='sign w-11/12 bg-white rounded-lg m-auto  p-10'>
                    {
                        value ? error ? <p className='text-3xl font-bold text-red'>Something went wrong please try again ! </p> : isLoading ? <i className="fa-solid fa-spinner fa-spin-pulse text-9xl m-32 text-gray-300"></i> : contents.message ? <Item /> : '' : <> <p className='text-6xl font-bold animate-bounce mt-16 mb-32 text-red'>Any Help !</p>
                            <p className='text-6xl font-medium mb-16 text-gray-400'>
                                Use the Barcode scanner.
                            </p></>

                    }
                </div>
            </div>
        </div>


    );
}

export default Main;
