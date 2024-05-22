import React, { useEffect, useState } from 'react';
import { fetchContent } from './store/branchSlice';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { fetchContent as ff } from './store/connectionStringSlice';
import { useNavigate } from 'react-router-dom';



const BranchSetting = () => {
   const navigate= useNavigate()
    const dispatch = useDispatch();
    const contents = useSelector(state => state.branch.contents);
    const isLoadingbranch = useSelector(state => state.branch.isLoading);
    const error = useSelector(state => state.branch.error);
    const [branch, setBranch] = useState([]);
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isLoadingg, setIsLoadingg] = useState(false);
    useEffect(() => {
        dispatch(fetchContent());
    }, []);
    useEffect(() => {
        setIsLoadingg(isLoadingbranch);
    }, [isLoadingbranch]);
    useEffect(() => {
        let arr = [];
        if (contents.length > 0) {
            contents.map(content => arr.push({ label: content.name, value: content.rms_id }))
            setBranch(arr);
        }

    }, [contents]);
    const onchangeHandler = (e) => {
        console.log("e", e.value);
        //call saeed Api .
        sessionStorage.setItem("item_key", [e.value , e.label]);
        // dispatch(ff( e.value));
        navigate('/price-scanner/Main')

    }
    console.log('arr', branch)
    return (
        <div className='branch h-screen relative flex items-center '>
            <div className="layer absolute top-0 bottom-0 left-0 right-0 bg-black opacity-60">
            </div>
            {
                error ? <div>something went wrong please try again later.. </div> : <form className='bg-main w-1/3 z-10 py-10 rounded-2xl mx-10 px-10' >
                    <label htmlFor="cars" className='text-white block text-3xl font-bold tracking-widest mb-5'>Choose the branch </label>
                    <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isLoading={isLoadingg}
                        isClearable={isClearable}
                        isSearchable={isSearchable}
                        name="rms_id"
                        options={branch}
                        onChange={onchangeHandler}
                    />


                </form>
            }
        </div>
    );
}

export default BranchSetting;
