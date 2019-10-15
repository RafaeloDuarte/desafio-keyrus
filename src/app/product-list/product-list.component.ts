import { Component, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../product.model';
import { Observable } from 'rxjs'
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:Product[] 
  product:Product

  constructor(private dataService:DataService, private router:Router) { }

  ngOnInit() {
    this.carregaDoisProdutos()
  }

  irParaProduto(product:Product){
    this.dataService.setProduct(product)
    this.router.navigateByUrl('/produto')
  }

  adicionarAoCarrinho(product:Product){
    this.dataService.adicionarAoCarrinho(product)
    alert('item adicionado ao carrinho')
  }

  carregaDoisProdutos(){
    this.productList = [
          {
            "availableForPickup": true,
            "categories": [
              {
                "code": "5761",
                "name": "Digital Compacts V1"
              },
              {
                "code": "brand_26",
                "name": "Samsung"
              }
            ],
            "code": "5536371",
            "description": "<b>10.1 mega-pixel 1/1.8\"\"CCD high resolution</b><br/>The NV10 comes in an 18.5mm thin black aluminium body with Samsung's unique blue ring on its expendable lens barrel, and a pop-up flash. A 10.1 mega pixels, 1/1.8\"\" CCD, not normally used in slim cameras, is used to give better detail.<br/><br/><b>Smart Touch + Large 2.5\"\" LCD</b><br/>The new Smart Touch user interface makes it possible to quickly navigate and set menu items or view pictures. The unique makeup of the Smart Touch buttons with large 2.5 inch LCD on the back of the camera is expected to be great fun for users, giving them an experience unlike anything they have tried before.<br/><br/><b>The superior Schneider-KREUZNACH lens</b><br/>The superior Schneider-KREUZNACH lens produces crystal clear images. <br/>Bright lens that start at f2.8 delivers even resolution from the centre to the edges. For more natural-looking pictures, each lens surface is multi-coated to minimize the \"\"ghost\"\" or \"\"flare\"\" phenomenon.<br/><br/><b>Pop-Up Flash</b><br/>The most distinctive feature of the new NV Series is the built-in pop-up flash. The use of a pop-up mechanism made the overall design simple yet luxurious, and its location, right above the lens, hugely improved light diffusion angles and transmission rates. The lens location is also ideal for delivering the flashlight as intended, since it prevents accidental blocking of the flash by a hand.<br/><br/><b>Advanced Shake Reduction</b><br/>The ASR technology prevents the degradation of image clarity and colour common to flash photography. With ASR the effects of camera shake are reduced in lower light conditions. You can even take well exposed, sharper pictures in low light without using a flash at all. It guarantees brighter and more natural pictures.<br/><br/><b>ISO1000 Standards in Action</b><br/>NV series has an auto sensitivity feature that automatically adjusts sensitivity according to the ambient exposure conditions up to ISO 1000. The high sensitivity setting of ISO 1000 enables you to take clear indoor pictures in the dark without camera shake and the resulting image blurring.<br/><br/><b>Photo Gallery function</b><br/>This is an upgraded version of the photo album, which used to let you access the Menu only from Play Back. Now, this new UI lets you go directly to the album. Pictures are grouped and stored by date for easier access.<br/><br/><b>Multiple ways to Recharge</b><br/>Recharging can be done using a cradle or a 24 pin USB cable, as well as by using a detachable cable. Connect the camera to a PC using a 24 pin USB cable, use the adaptor cable to plug it into a power supply, or use any other convenient method to recharge your camera. <br/><br/><b>Advanced Movie Function</b><br/>The NV series supports MPEG-4 VGA (640x480, 30fps) and TVD (720x480, 20fps - NV3) size for an enhanced video shooting experience. You can even edit your movies on the camera itself, making these clever models brilliantly portable but powerful movie-makers.<br/><br/><b>Scene Mode</b><br/>11 Scene Modes and Text Recognition capability NV series have various scene modes to obtain the best picture result in a variety of settings.<br/>The scene modes provided are Night Scene, Portrait, Children, Landscape, Text Recognition, Sunset, Dawn, Backlight, Fireworks, Beach and Snow.",
            "manufacturer": "Samsung1",
            "name": "NV10",
            "price": {
              "currencyIso": "USD",
              "formattedValue": "$264.69",
              "priceType": "BUY",
              "value": 264.69
            },
            "stock": {
              "stockLevel": 0,
              "stockLevelStatus": "outOfStock"
            },
            "summary": "The NV10 comes in an 18.5mm thin black aluminium body with Samsung's unique blue ring on its extendable lens barrel, and a pop-up flash."
          },
          {
            "availableForPickup": true,
            "categories": [
              {
                "code": "576",
                "name": "Digital Compacts2"
              },
              {
                "code": "brand_262",
                "name": "Samsung2"
              }
            ],
            "code": "445812",
            "description": "<b>10.1 mega-pixel 1/1.8\"\"CCD high resolution</b><br/>The NV10 comes in an 18.5mm thin black aluminium body with Samsung's unique blue ring on its expendable lens barrel, and a pop-up flash. A 10.1 mega pixels, 1/1.8\"\" CCD, not normally used in slim cameras, is used to give better detail.<br/><br/><b>Smart Touch + Large 2.5\"\" LCD</b><br/>The new Smart Touch user interface makes it possible to quickly navigate and set menu items or view pictures. The unique makeup of the Smart Touch buttons with large 2.5 inch LCD on the back of the camera is expected to be great fun for users, giving them an experience unlike anything they have tried before.<br/><br/><b>The superior Schneider-KREUZNACH lens</b><br/>The superior Schneider-KREUZNACH lens produces crystal clear images. <br/>Bright lens that start at f2.8 delivers even resolution from the centre to the edges. For more natural-looking pictures, each lens surface is multi-coated to minimize the \"\"ghost\"\" or \"\"flare\"\" phenomenon.<br/><br/><b>Pop-Up Flash</b><br/>The most distinctive feature of the new NV Series is the built-in pop-up flash. The use of a pop-up mechanism made the overall design simple yet luxurious, and its location, right above the lens, hugely improved light diffusion angles and transmission rates. The lens location is also ideal for delivering the flashlight as intended, since it prevents accidental blocking of the flash by a hand.<br/><br/><b>Advanced Shake Reduction</b><br/>The ASR technology prevents the degradation of image clarity and colour common to flash photography. With ASR the effects of camera shake are reduced in lower light conditions. You can even take well exposed, sharper pictures in low light without using a flash at all. It guarantees brighter and more natural pictures.<br/><br/><b>ISO1000 Standards in Action</b><br/>NV series has an auto sensitivity feature that automatically adjusts sensitivity according to the ambient exposure conditions up to ISO 1000. The high sensitivity setting of ISO 1000 enables you to take clear indoor pictures in the dark without camera shake and the resulting image blurring.<br/><br/><b>Photo Gallery function</b><br/>This is an upgraded version of the photo album, which used to let you access the Menu only from Play Back. Now, this new UI lets you go directly to the album. Pictures are grouped and stored by date for easier access.<br/><br/><b>Multiple ways to Recharge</b><br/>Recharging can be done using a cradle or a 24 pin USB cable, as well as by using a detachable cable. Connect the camera to a PC using a 24 pin USB cable, use the adaptor cable to plug it into a power supply, or use any other convenient method to recharge your camera. <br/><br/><b>Advanced Movie Function</b><br/>The NV series supports MPEG-4 VGA (640x480, 30fps) and TVD (720x480, 20fps - NV3) size for an enhanced video shooting experience. You can even edit your movies on the camera itself, making these clever models brilliantly portable but powerful movie-makers.<br/><br/><b>Scene Mode</b><br/>11 Scene Modes and Text Recognition capability NV series have various scene modes to obtain the best picture result in a variety of settings.<br/>The scene modes provided are Night Scene, Portrait, Children, Landscape, Text Recognition, Sunset, Dawn, Backlight, Fireworks, Beach and Snow.",
            "manufacturer": "Samsung2",
            "name": "NV10",
            "price": {
              "currencyIso": "USD",
              "formattedValue": "$270.13",
              "priceType": "BUY",
              "value": 270.13
            },
            "stock": {
              "stockLevel": 400,
              "stockLevelStatus": "inStock"
            },
            "summary": "The NV10 comes in an 18.5mm thin black aluminium body with Samsung's unique blue ring on its extendable lens barrel, and a pop-up flash."
          },
          {
            "availableForPickup": true,
            "categories": [
              {
                "code": "5763",
                "name": "Digital Compacts3"
              },
              {
                "code": "brand_26",
                "name": "Samsung"
              }
            ],
            "code": "635876",
            "description": "<b>10.1 mega-pixel 1/1.8\"\"CCD high resolution</b><br/>The NV10 comes in an 18.5mm thin black aluminium body with Samsung's unique blue ring on its expendable lens barrel, and a pop-up flash. A 10.1 mega pixels, 1/1.8\"\" CCD, not normally used in slim cameras, is used to give better detail.<br/><br/><b>Smart Touch + Large 2.5\"\" LCD</b><br/>The new Smart Touch user interface makes it possible to quickly navigate and set menu items or view pictures. The unique makeup of the Smart Touch buttons with large 2.5 inch LCD on the back of the camera is expected to be great fun for users, giving them an experience unlike anything they have tried before.<br/><br/><b>The superior Schneider-KREUZNACH lens</b><br/>The superior Schneider-KREUZNACH lens produces crystal clear images. <br/>Bright lens that start at f2.8 delivers even resolution from the centre to the edges. For more natural-looking pictures, each lens surface is multi-coated to minimize the \"\"ghost\"\" or \"\"flare\"\" phenomenon.<br/><br/><b>Pop-Up Flash</b><br/>The most distinctive feature of the new NV Series is the built-in pop-up flash. The use of a pop-up mechanism made the overall design simple yet luxurious, and its location, right above the lens, hugely improved light diffusion angles and transmission rates. The lens location is also ideal for delivering the flashlight as intended, since it prevents accidental blocking of the flash by a hand.<br/><br/><b>Advanced Shake Reduction</b><br/>The ASR technology prevents the degradation of image clarity and colour common to flash photography. With ASR the effects of camera shake are reduced in lower light conditions. You can even take well exposed, sharper pictures in low light without using a flash at all. It guarantees brighter and more natural pictures.<br/><br/><b>ISO1000 Standards in Action</b><br/>NV series has an auto sensitivity feature that automatically adjusts sensitivity according to the ambient exposure conditions up to ISO 1000. The high sensitivity setting of ISO 1000 enables you to take clear indoor pictures in the dark without camera shake and the resulting image blurring.<br/><br/><b>Photo Gallery function</b><br/>This is an upgraded version of the photo album, which used to let you access the Menu only from Play Back. Now, this new UI lets you go directly to the album. Pictures are grouped and stored by date for easier access.<br/><br/><b>Multiple ways to Recharge</b><br/>Recharging can be done using a cradle or a 24 pin USB cable, as well as by using a detachable cable. Connect the camera to a PC using a 24 pin USB cable, use the adaptor cable to plug it into a power supply, or use any other convenient method to recharge your camera. <br/><br/><b>Advanced Movie Function</b><br/>The NV series supports MPEG-4 VGA (640x480, 30fps) and TVD (720x480, 20fps - NV3) size for an enhanced video shooting experience. You can even edit your movies on the camera itself, making these clever models brilliantly portable but powerful movie-makers.<br/><br/><b>Scene Mode</b><br/>11 Scene Modes and Text Recognition capability NV series have various scene modes to obtain the best picture result in a variety of settings.<br/>The scene modes provided are Night Scene, Portrait, Children, Landscape, Text Recognition, Sunset, Dawn, Backlight, Fireworks, Beach and Snow.",
            "manufacturer": "Samsung3",
            "name": "NV103",
            "price": {
              "currencyIso": "USD",
              "formattedValue": "150.69",
              "priceType": "BUY",
              "value": 150.69
            },
            "stock": {
              "stockLevel": 780,
              "stockLevelStatus": "inStock"
            },
            "summary": "The NV10 comes in an 18.5mm thin black aluminium body with Samsung's unique blue ring on its extendable lens barrel, and a pop-up flash."
          },
          {
            "availableForPickup": true,
            "categories": [
              {
                "code": "5764",
                "name": "Digital Compacts4"
              },
              {
                "code": "brand_264",
                "name": "Samsung4"
              }
            ],
            "code": "489661",
            "description": "<b>10.1 mega-pixel 1/1.8\"\"CCD high resolution</b><br/>The NV10 comes in an 18.5mm thin black aluminium body with Samsung's unique blue ring on its expendable lens barrel, and a pop-up flash. A 10.1 mega pixels, 1/1.8\"\" CCD, not normally used in slim cameras, is used to give better detail.<br/><br/><b>Smart Touch + Large 2.5\"\" LCD</b><br/>The new Smart Touch user interface makes it possible to quickly navigate and set menu items or view pictures. The unique makeup of the Smart Touch buttons with large 2.5 inch LCD on the back of the camera is expected to be great fun for users, giving them an experience unlike anything they have tried before.<br/><br/><b>The superior Schneider-KREUZNACH lens</b><br/>The superior Schneider-KREUZNACH lens produces crystal clear images. <br/>Bright lens that start at f2.8 delivers even resolution from the centre to the edges. For more natural-looking pictures, each lens surface is multi-coated to minimize the \"\"ghost\"\" or \"\"flare\"\" phenomenon.<br/><br/><b>Pop-Up Flash</b><br/>The most distinctive feature of the new NV Series is the built-in pop-up flash. The use of a pop-up mechanism made the overall design simple yet luxurious, and its location, right above the lens, hugely improved light diffusion angles and transmission rates. The lens location is also ideal for delivering the flashlight as intended, since it prevents accidental blocking of the flash by a hand.<br/><br/><b>Advanced Shake Reduction</b><br/>The ASR technology prevents the degradation of image clarity and colour common to flash photography. With ASR the effects of camera shake are reduced in lower light conditions. You can even take well exposed, sharper pictures in low light without using a flash at all. It guarantees brighter and more natural pictures.<br/><br/><b>ISO1000 Standards in Action</b><br/>NV series has an auto sensitivity feature that automatically adjusts sensitivity according to the ambient exposure conditions up to ISO 1000. The high sensitivity setting of ISO 1000 enables you to take clear indoor pictures in the dark without camera shake and the resulting image blurring.<br/><br/><b>Photo Gallery function</b><br/>This is an upgraded version of the photo album, which used to let you access the Menu only from Play Back. Now, this new UI lets you go directly to the album. Pictures are grouped and stored by date for easier access.<br/><br/><b>Multiple ways to Recharge</b><br/>Recharging can be done using a cradle or a 24 pin USB cable, as well as by using a detachable cable. Connect the camera to a PC using a 24 pin USB cable, use the adaptor cable to plug it into a power supply, or use any other convenient method to recharge your camera. <br/><br/><b>Advanced Movie Function</b><br/>The NV series supports MPEG-4 VGA (640x480, 30fps) and TVD (720x480, 20fps - NV3) size for an enhanced video shooting experience. You can even edit your movies on the camera itself, making these clever models brilliantly portable but powerful movie-makers.<br/><br/><b>Scene Mode</b><br/>11 Scene Modes and Text Recognition capability NV series have various scene modes to obtain the best picture result in a variety of settings.<br/>The scene modes provided are Night Scene, Portrait, Children, Landscape, Text Recognition, Sunset, Dawn, Backlight, Fireworks, Beach and Snow.",
            "manufacturer": "Samsung5",
            "name": "NV105",
            "price": {
              "currencyIso": "USD",
              "formattedValue": "380.45",
              "priceType": "BUY",
              "value": 380.45
            },
            "stock": {
              "stockLevel": 90,
              "stockLevelStatus": "inStock"
            },
            "summary": "The NV10 comes in an 18.5mm thin black aluminium body with Samsung's unique blue ring on its extendable lens barrel, and a pop-up flash."
          },
          {
            "availableForPickup": true,
            "categories": [
              {
                "code": "577",
                "name": "Digital Compacts7"
              },
              {
                "code": "brand_267",
                "name": "Samsung7"
              }
            ],
            "code": "9156797",
            "description": "<b>10.1 mega-pixel 1/1.8\"\"CCD high resolution</b><br/>The NV10 comes in an 18.5mm thin black aluminium body with Samsung's unique blue ring on its expendable lens barrel, and a pop-up flash. A 10.1 mega pixels, 1/1.8\"\" CCD, not normally used in slim cameras, is used to give better detail.<br/><br/><b>Smart Touch + Large 2.5\"\" LCD</b><br/>The new Smart Touch user interface makes it possible to quickly navigate and set menu items or view pictures. The unique makeup of the Smart Touch buttons with large 2.5 inch LCD on the back of the camera is expected to be great fun for users, giving them an experience unlike anything they have tried before.<br/><br/><b>The superior Schneider-KREUZNACH lens</b><br/>The superior Schneider-KREUZNACH lens produces crystal clear images. <br/>Bright lens that start at f2.8 delivers even resolution from the centre to the edges. For more natural-looking pictures, each lens surface is multi-coated to minimize the \"\"ghost\"\" or \"\"flare\"\" phenomenon.<br/><br/><b>Pop-Up Flash</b><br/>The most distinctive feature of the new NV Series is the built-in pop-up flash. The use of a pop-up mechanism made the overall design simple yet luxurious, and its location, right above the lens, hugely improved light diffusion angles and transmission rates. The lens location is also ideal for delivering the flashlight as intended, since it prevents accidental blocking of the flash by a hand.<br/><br/><b>Advanced Shake Reduction</b><br/>The ASR technology prevents the degradation of image clarity and colour common to flash photography. With ASR the effects of camera shake are reduced in lower light conditions. You can even take well exposed, sharper pictures in low light without using a flash at all. It guarantees brighter and more natural pictures.<br/><br/><b>ISO1000 Standards in Action</b><br/>NV series has an auto sensitivity feature that automatically adjusts sensitivity according to the ambient exposure conditions up to ISO 1000. The high sensitivity setting of ISO 1000 enables you to take clear indoor pictures in the dark without camera shake and the resulting image blurring.<br/><br/><b>Photo Gallery function</b><br/>This is an upgraded version of the photo album, which used to let you access the Menu only from Play Back. Now, this new UI lets you go directly to the album. Pictures are grouped and stored by date for easier access.<br/><br/><b>Multiple ways to Recharge</b><br/>Recharging can be done using a cradle or a 24 pin USB cable, as well as by using a detachable cable. Connect the camera to a PC using a 24 pin USB cable, use the adaptor cable to plug it into a power supply, or use any other convenient method to recharge your camera. <br/><br/><b>Advanced Movie Function</b><br/>The NV series supports MPEG-4 VGA (640x480, 30fps) and TVD (720x480, 20fps - NV3) size for an enhanced video shooting experience. You can even edit your movies on the camera itself, making these clever models brilliantly portable but powerful movie-makers.<br/><br/><b>Scene Mode</b><br/>11 Scene Modes and Text Recognition capability NV series have various scene modes to obtain the best picture result in a variety of settings.<br/>The scene modes provided are Night Scene, Portrait, Children, Landscape, Text Recognition, Sunset, Dawn, Backlight, Fireworks, Beach and Snow.",
            "manufacturer": "Samsung7",
            "name": "NV107",
            "price": {
              "currencyIso": "USD",
              "formattedValue": "$350.11",
              "priceType": "BUY",
              "value": 350.11
            },
            "stock": {
              "stockLevel": 10,
              "stockLevelStatus": "outOfStock"
            },
            "summary": "The NV10 comes in an 18.5mm thin black aluminium body with Samsung's unique blue ring on its extendable lens barrel, and a pop-up flash."
          },
          {
            "availableForPickup": true,
            "categories": [
              {
                "code": "5768",
                "name": "Digital Compacts"
              },
              {
                "code": "brand_26",
                "name": "Samsung"
              }
            ],
            "code": "553637",
            "description": "<b>10.1 mega-pixel 1/1.8\"\"CCD high resolution</b><br/>The NV10 comes in an 18.5mm thin black aluminium body with Samsung's unique blue ring on its expendable lens barrel, and a pop-up flash. A 10.1 mega pixels, 1/1.8\"\" CCD, not normally used in slim cameras, is used to give better detail.<br/><br/><b>Smart Touch + Large 2.5\"\" LCD</b><br/>The new Smart Touch user interface makes it possible to quickly navigate and set menu items or view pictures. The unique makeup of the Smart Touch buttons with large 2.5 inch LCD on the back of the camera is expected to be great fun for users, giving them an experience unlike anything they have tried before.<br/><br/><b>The superior Schneider-KREUZNACH lens</b><br/>The superior Schneider-KREUZNACH lens produces crystal clear images. <br/>Bright lens that start at f2.8 delivers even resolution from the centre to the edges. For more natural-looking pictures, each lens surface is multi-coated to minimize the \"\"ghost\"\" or \"\"flare\"\" phenomenon.<br/><br/><b>Pop-Up Flash</b><br/>The most distinctive feature of the new NV Series is the built-in pop-up flash. The use of a pop-up mechanism made the overall design simple yet luxurious, and its location, right above the lens, hugely improved light diffusion angles and transmission rates. The lens location is also ideal for delivering the flashlight as intended, since it prevents accidental blocking of the flash by a hand.<br/><br/><b>Advanced Shake Reduction</b><br/>The ASR technology prevents the degradation of image clarity and colour common to flash photography. With ASR the effects of camera shake are reduced in lower light conditions. You can even take well exposed, sharper pictures in low light without using a flash at all. It guarantees brighter and more natural pictures.<br/><br/><b>ISO1000 Standards in Action</b><br/>NV series has an auto sensitivity feature that automatically adjusts sensitivity according to the ambient exposure conditions up to ISO 1000. The high sensitivity setting of ISO 1000 enables you to take clear indoor pictures in the dark without camera shake and the resulting image blurring.<br/><br/><b>Photo Gallery function</b><br/>This is an upgraded version of the photo album, which used to let you access the Menu only from Play Back. Now, this new UI lets you go directly to the album. Pictures are grouped and stored by date for easier access.<br/><br/><b>Multiple ways to Recharge</b><br/>Recharging can be done using a cradle or a 24 pin USB cable, as well as by using a detachable cable. Connect the camera to a PC using a 24 pin USB cable, use the adaptor cable to plug it into a power supply, or use any other convenient method to recharge your camera. <br/><br/><b>Advanced Movie Function</b><br/>The NV series supports MPEG-4 VGA (640x480, 30fps) and TVD (720x480, 20fps - NV3) size for an enhanced video shooting experience. You can even edit your movies on the camera itself, making these clever models brilliantly portable but powerful movie-makers.<br/><br/><b>Scene Mode</b><br/>11 Scene Modes and Text Recognition capability NV series have various scene modes to obtain the best picture result in a variety of settings.<br/>The scene modes provided are Night Scene, Portrait, Children, Landscape, Text Recognition, Sunset, Dawn, Backlight, Fireworks, Beach and Snow.",
            "manufacturer": "Samsung",
            "name": "NV10",
            "price": {
              "currencyIso": "USD",
              "formattedValue": "$377.69",
              "priceType": "BUY",
              "value": 377.69
            },
            "stock": {
              "stockLevel": 390,
              "stockLevelStatus": "intStock"
            },
            "summary": "The NV10 comes in an 18.5mm thin black aluminium body with Samsung's unique blue ring on its extendable lens barrel, and a pop-up flash."
          }      
    ]
  }

}
