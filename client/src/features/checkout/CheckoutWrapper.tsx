import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "./CheckoutPage";
import { loadStripe } from "@stripe/stripe-js";
import { useAppDispatch } from "../../app/store/configureStore";
import { useEffect, useState } from "react";
import { setBasket } from "../basket/basketSlice";
import LoadingComponent from "../../app/layout/LoadingComponent";
import agent from "../../app/api/agents";

const stripePromise=loadStripe('pk_test_51O4ifEBLE3JxCn2qpOm0Bbi4IreiMewjllySNb2acY1p86v7wdI9rjm4Lhfem91EpGbRLFhw928XlefaI7NwAlvZ007rzathIs')

export default function CheckoutWrapper(){
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        agent.Payments.createPaymentIntent()
            .then(basket => dispatch(setBasket(basket)))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [dispatch]);

    if(loading) return <LoadingComponent message='Loading checkout...'/>

    return(
        <Elements stripe={stripePromise}>
            <CheckoutPage/>
        </Elements>
    )
}