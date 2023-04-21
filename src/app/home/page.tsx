import {FC} from "react";
import Card from "@components/Card";
import Search from "@components/Search";

const PageHome: FC = () => {

    return (
        <main className={'h-screen flex flex-col items-center   '}>
            <Search />
            <Card className={'mt-20'}/>
        </main>
    )
}

export default PageHome
