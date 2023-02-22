import axios from "axios";
import router from "@/router";
export default {
    namespaced: true,
    state:{
      data:[],
      keyword:"",
      userToken : localStorage.getItem("saui-app-user-token") ||'',
      userEmail : localStorage.getItem("saui-app-user-email")||'',
      userName :  localStorage.getItem("saui-app-user-name")||'',
      phone:localStorage.getItem("saui-app-user-phone")||''
      
  
    },
    mutations:{
      // keyword(state , payload){
      //       state.keyword = payload
      // },
      submitform(state ,payload){
        const myData = new FormData();
        myData.append("keyword" , payload);
         axios({
          method:"GET",
          url:`filter?keyword=${payload}`,
          data:myData
         })
         .then((res)=>{
          state.data= res.data.data;
          router.push('/searchPage');
         })
      },
      // start :: set cuent user data mutation
      setCurrentUserData(state ,payload){
        console.log(payload)
        if(payload.token){
        state.userToken=payload.token;
        localStorage.setItem("saui-app-user-token" , payload.token.access_token);
  
        }
        if(payload.name){
          state.userName=payload.name;
          localStorage.setItem("saui-app-user-name" , payload.name);
          } 
          if(payload.email){
            state.userName=payload.email;
            localStorage.setItem("saui-app-user-email" , payload.email);
      
            }
            if(payload.phone){
              state.userName=payload.phone;
              localStorage.setItem("saui-app-user-phone" , payload.phone);
        
              }
      }, 
      logout(state){
        state.userToken= null ;
        state.userEmail= null ;
        state.userName= null ;
      },
},
actions(){},
getters:{
  data(state){
    return state.data
  },
  isLoggedIn(state){
    return !!state.userToken
  },
  // start :: cuurrent  user data Getters
  currentUser(state){
    return{
      token:state.userToken,
      email:state.userEmail,
      userName:state.userName,
      phone:state.phone,
    }
  },
 
},
}