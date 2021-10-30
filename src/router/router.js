import HotelReserve from "@/components/HotelReserve"
import Hotels from "@/components/Hotels"
import Form from "@/components/Form"
import Payment from "@/components/Payment"


export const routes = [
    {path: '/otel', component: Hotels},
    {path: '/reserve/:id?', component: HotelReserve},
    {path: '/form',component: Form},
    {path: "/payment",component: Payment},
]

