export class Product  {
    availableForPickup : boolean
    categories : [ 
      {
        code : string,
        name : string
      },
      {
        code : string,
        name : string
      }
    ]
    code : string
    description : string
    manufacturer : string
    name : string
    price : {
      currencyIso : string,
      formattedValue : string,
      priceType : string,
      value : number
    }
    stock : {
      stockLevel : number,
      stockLevelStatus : string
    }
    summary : string
}