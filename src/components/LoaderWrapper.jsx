"use client";

import { useState } from "react";
import Loader from "./Loader";


const LoaderWrapper = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    return <>{isLoading ? <Loader setHideLoader={setIsLoading} /> : children}</>;
};

export default LoaderWrapper;
