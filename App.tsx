import app from "./app/src/main";

export default function App() {
  return app();
}






// import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import Icon from 'react-native-vector-icons/FontAwesome5';

// const App = () => {
//  const subscriptions= [ { description: 'Monthly Subscription',
//     discounts: [],
//     introductoryPriceNumberOfPeriodsIOS: '',
//     localizedPrice: '₹ 199.00',
//     type: 'subs',
//     title: 'Monthly Subscription',
//     introductoryPriceSubscriptionPeriodIOS: '',
//     productId: 'subscription_monthly_202301_1',
//     subscriptionPeriodUnitIOS: 'MONTH',
//     introductoryPriceAsAmountIOS: '',
//     currency: 'INR',
//     price: '199',
//     introductoryPricePaymentModeIOS: '',
//     countryCode: 'IND',
//     subscriptionPeriodNumberIOS: '1',
//     introductoryPrice: '',
//     platform: 'ios' } ]
//   return (
//     <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
//     <View style={{ paddingTop: 20 }}>
//       {
//         subscriptions?.map((item, index) => {          
//           return (
//             <View style={styles.main_view} key={index}>
//               <View style={styles.view2}>
//                 <View>
//                   <Icon color={'white'} name="crown" size={25} />
//                 </View>
//                 <View style={{}}>
//                   <Text style={styles.text}>{item?.title}</Text>
//                   <View style={{flexDirection:"row",justifyContent:"space-between",paddingTop:3}}>

//                   <Text style={styles.text2}>{1 + ' ' + item?.subscriptionPeriodUnitIOS }</Text>
//                   <Text style={styles.text2}>{item?.localizedPrice}</Text>
//                   </View>

//                 </View>
//                 <View>
//                   <TouchableOpacity  style={styles.touchable}>
//                     <Text style={styles.buy}>Buy Now</Text>
//                   </TouchableOpacity>

//                 </View>
//               </View>
//             </View>
//           )
//         })
//       }
    
//     </View>


//   </SafeAreaView>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   main_view: {
//     backgroundColor: "#00B8EC",
//     width: '90%',
//     borderRadius: 8,
//     justifyContent: "center",
//     alignSelf: "center",
//     paddingVertical: 20
//   },
//   view2: {
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     alignItems: "center"
//   },

//   text: {
//     fontSize: 16,
//     color: "white",
//     fontWeight: '500'
//   },
//   text2: {
//     fontSize: 14,
//      color: "white",
//   },
//   touchable:{
//     backgroundColor: '#9ECD3B',
//     paddingVertical:9,
//     paddingHorizontal:15,
//     borderRadius:5,
//     shadowOpacity:0.1,
//     shadowColor:"black",
//     shadowRadius:5
//   },
//   buy: {
//     fontSize: 13,
//     color: "white",
//     fontWeight: '600',
   
//   }
// })






















