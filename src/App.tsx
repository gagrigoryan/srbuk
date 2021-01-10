import React from "react";
import HomeBanner from "./components/HomePage/HomeBanner";
import HomeLayout from "./layouts/HomeLayout";
import HomeContent from "./components/HomePage/HomeContent";

const App: React.FC = () => {
    return (
        <HomeLayout>
            <HomeBanner />
            <HomeContent />
        </HomeLayout>
    );
};

export default App;
