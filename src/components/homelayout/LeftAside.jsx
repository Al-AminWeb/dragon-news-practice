import React, {Suspense} from 'react';
import Categories from "../Categories.jsx";

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-infinity loading-lg"></span>}>
                <Categories/>
            </Suspense>

        </div>
    );
};

export default LeftAside;
