import homeImg from './../../lib/const/дом (2).png'
import telegaImg from './../../lib/const/тележка (3).png'

export const DASHBOARD_SIDEBAR_LINKS=[
    {
        key:"dashboard",
        label:"Главная",
        path:"/",
        icon:<img src={homeImg} alt="" />
    },
    {
        key:"products",
        label:"Мои магазины",
        path:"/products",
        icon:<img src={telegaImg} alt=""/>
    },
    
      
]