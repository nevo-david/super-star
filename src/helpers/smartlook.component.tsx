import Smartlook from 'smartlook-client'
import {useEffect} from "react";

const SmartlookComponent = () => {
    useEffect(() => {
        Smartlook.init('052305404b0a55d3e9bd69779b224b9170b45dbc');
    }, []);
}

export default SmartlookComponent;