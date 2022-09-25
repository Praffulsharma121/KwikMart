import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  imageObject = [
    {
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/layout-engine/2022-08/PG_RN_0.jpg',
      thumbImage: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/layout-engine/2022-08/PG_RN_0.jpg',
    },
    {
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/layout-engine/2022-08/4700-BC-_RN.jpg',
      thumbImage: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/layout-engine/2022-08/4700-BC-_RN.jpg',
    },
    {
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/layout-engine/2022-08/Parle_RN_0.jpg',
      thumbImage: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/layout-engine/2022-08/Parle_RN_0.jpg',
    },
    {
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/layout-engine/2022-08/chai-rn.jpeg',
      thumbImage: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/layout-engine/2022-08/chai-rn.jpeg',
    },
    {
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/layout-engine/2022-08/Daawat_RN_0.jpg',
      thumbImage: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/layout-engine/2022-08/Daawat_RN_0.jpg',
    },
    {
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/layout-engine/2022-04/kids-zone_zomato.jpg',
      thumbImage: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/layout-engine/2022-04/kids-zone_zomato.jpg',
    },
    {
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/layout-engine/2022-04/repllents_zomato.png',
      thumbImage: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=270/layout-engine/2022-04/repllents_zomato.png',
    },
  ]
  typesImages = [
    {
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/layout-engine/2022-05/Slice-4.png',
      type: 'fruit and vegs'
    },
    {
      image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/layout-engine/2022-05/Slice-1.png',
      type: 'dairy'
    },
    {
      image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/layout-engine/2022-05/Slice-9.png',
      type: 'snacks'
    },
    {
      image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/layout-engine/2022-05/Slice-6.png',
      type: 'bakery'
    },
    {
      image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/layout-engine/2022-05/Slice-2_0.png',
      type: 'breakfast'
    },
    {
      image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/layout-engine/2022-05/Slice-7.png',
      type: 'health-drinks'
    },
    {
      image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/layout-engine/2022-05/Slice-3.png',
      type: 'drinks'
    },
    {
      image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/layout-engine/2022-05/Slice-5.png',
      type: 'sweets'
    },
    {
      image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/layout-engine/2022-05/Slice-8.png',
      type: 'kirana'
    },
    {
      image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/layout-engine/2022-05/Slice-10_0.png',
      type: 'masalas'
    },
    {
      image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/layout-engine/2022-05/Slice-16.png',
      type: 'spreads'
    },
    {
      image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/layout-engine/2022-05/Slice-15.png',
      type: 'organic'
    },
    {
      image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/layout-engine/2022-05/Slice-16_0.png',
      type: 'paan'
    },
    {
      image:'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/layout-engine/2022-05/Slice-14.png',
      type: 'baby-care'
    },
    {
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/layout-engine/2022-05/Slice-13.png',
      type: 'pharams'
    },
    {
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/layout-engine/2022-05/Slice-17.png',
      type: 'cleaning'
    },
    {
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/layout-engine/2022-05/Slice-18.png',
      type: 'personal-care'
    },
    {
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=135/layout-engine/2022-05/Slice-20_0.png',
      type: 'pet-care'
    }
  ]

  allProducts = []
  seeMoreBrands = false;

  brands = [
    'Savemore',
    '24 Mantra',
    'Aashirvaad',
    'Act II',
    'Amul',
    'Axe',
    'Bambino',
    'Best Value',
    'Bingo',
    'Bisleri',
    'Boost',
    'Bournvita',
    'Britannia',
    'Brooke Bond',
    'Bru',
    'Cadbury',
    'Cheetos',
    'Cinthol',
    'Closeup',
    'Coca-Cola',
    'Colgate',
    'Dabur',
    'Danone',
    'Del Monte',
    'Dettol',
    'Dhara',
    'Dove',
    'Durex',
    'English Oven',
    'Everest',
    'Fiama Di Wills',
    'Garnier',
    'Gatorade',
    'Gillette',
    'Glucon-D',
    'Grocery',
    'Gowardhan',
    'Hajmola',
    `Haldiram's`,
    'Head & Shoulders',
    'Heinz',
    'Himalaya',
    'Horlicks',
    'India Gate',
    `Kellogg's`,
    'Kinley',
    'Kissan',
    'Knorr',
    `L'Oreal`,
    `Lay's`,
    'Lijjat',
    'Limca',
    'Lipton',
    'Maggi',
    'Madhur',
    'McCain',
    'MDH',
    'Minute Maid',
    'Mirinda',
    'Mother Dairy',
    'Mountain Dew',
    'MTR',
    'Nescafe',
    'Nestle',
    'Nivea',
    'Nutella',
    'Oral-B',
    'Oreo',
    'Palmolive',
    'Pantene',
    'Paper Boat',
    'Parachute',
    'Parle',
    'Patanjali',
    'Pears',
    'Pepsi',
    'Pepsodent',
    'Pillsbury',
    'Princeware',
    'Rajdhani',
    'Real',
    'Red Bull',
    'Safal',
    'Saffola',
    'Shakti Bhog',
    'Smith & Jones',
    'Sprite',
    'Stayfree',
    'Sundrop',
    'Sunfeast',
    'Sunsilk',
    'Taj Mahal',
    'Tang',
    'Tata sampann',
    'Tata tea',
    'Tetley',
    'Thums Up','Tropicana','Twinings','Uncle Chipps','Unibic','Vaseline','Veet','Wagh Bakri','Wai Wai','Whisper','Whole Farm'];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productsService.getAllProducts().subscribe(res => {
      console.log(res);
      this.allProducts = res.msg;
    })
  }

  onBrands(){
    this.seeMoreBrands = !this.seeMoreBrands;
    console.log(this.seeMoreBrands);
    
  }

}
