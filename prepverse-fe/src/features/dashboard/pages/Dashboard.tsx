import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { useEffect } from "react";
import { setCurrentItem } from "@/features/globalFeatures/slices/configSlice";

const Dashboard = () => {
    const currentItem = useSelector((state: RootState) => state.config?.currentItem);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleBeforeUnload = (event: any) => {
            if (event.currentTarget.performance.navigation.type === 1) {
                dispatch(setCurrentItem("dashboard"));
            }
        };

        window.addEventListener("load", handleBeforeUnload);
        return () => {
            window.removeEventListener("load", handleBeforeUnload);
        };
    }, [dispatch]);

    const renderCurrentContent = () => {
        switch (currentItem) {
            case "dashboard":
                return <span>Dashboard</span>;
            case "community":
                return <span>Community</span>
            case "chats":
                return <span>Chats</span>
            case "challengebetting":
                return <span>Challenge Betting</span>
            case "achievements":
                return <span>Achievements</span>
            case "notifications":
                return <span>Notifications</span>
            case "settings":
                return <span>Settings</span>
            default:
                return null;
        }
    }

    return (
        <div className="w-full bg-slate-600 flex box-border" style={{minHeight: 'calc(100vh)'}} >
            <Sidebar />
            <div style={{width: 'calc(100vw - 15rem)' }} className="ml-64 mr-2 mt-4 mb-4 rounded-xl bg-slate-950 text-white">
                {renderCurrentContent()}
            </div>
        </div>
    )
}

export default Dashboard;