import React from "react";
import HomeBanner from "./components/HomePage/HomeBanner";
import HomeLayout from "./layouts/HomeLayout";

const App: React.FC = () => {
    return (
        <HomeLayout>
            <HomeBanner />
        </HomeLayout>
    );
};

export default App;
