import React from "react";
import HomeBanner from "./components/HomePage/HomeBanner";
import HomeLayout from "./layouts/HomeLayout";
import HomeContent from "./components/HomePage/HomeContent";
import HomeFeatured from "./components/HomePage/HomeFeatured";

const App: React.FC = () => {
    return (
        <HomeLayout>
            <HomeBanner />
            <HomeContent />
            <HomeFeatured />
        </HomeLayout>
    );
};

export default App;
