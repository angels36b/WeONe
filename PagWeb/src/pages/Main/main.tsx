import React from "react";
import weOneImage from "../../assets/images/WeOne.png"


const MainPage: React.FC = () => {

    return (
        <>
            <main className="flex-grow ">
                <div className="md:shrink-0">

                    <img className="opacity-40 w-full " src={weOneImage} alt="background image of the company WeOne" />

                </div>
            </main>
        </>

    );
};

export default MainPage