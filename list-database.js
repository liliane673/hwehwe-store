let allElectronicsData=[
    {
        id: 1,
        title: 'Lenovo ThinkPhone',
        brand: 'Lenovo',
        type: 'Handphone',
        price: 1_000_000,
        image: 'https://i.gadgets360cdn.com/products/large/lenovo-thinkphone-db-709x800-1672984720.jpg?downsize=*:180'
    },
    {
        id:2,
        title: 'Lenovo Legion Y70',
        brand: 'Lenovo',
        type: 'Handphone',
        price: 1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/lenovo-legion-y70-db-390x800-1660848391.jpg?downsize=*:180'
    },
    {
        id:3,
        title:'Lenovo IdeaPad Pro 5i',
        brand: 'Lenovo',
        type: 'Laptop',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/Screenshot-2024-04-23-191033-800x800-1713879678.png?downsize=*:180'
    },
    {
        id:4,
        title:'Lenovo Yoga Book 9i',
        brand: 'Lenovo',
        type: 'Laptop',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/Lenovo-Yoga-Book-9i-DB-709x800-1690292461.jpg?downsize=*:180'
    },
    {
        id:5,
        title:'Mi Watch Lite',
        brand: 'Xiaomi',
        type: 'SmartWatch',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/miwatchlite-db-808x800-1607576869.jpg?downsize=*:180'
    },
    {
        id:6,
        title:'Mi 77 Inch OLED Ultra HD TV',
        brand: 'Xiaomi',
        type: 'TV',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/mi-77-inch-oled-ultra-hd-tv-master-1327x800-1628664442.jpg?downsize=*:180'
    },
    {
        id: 7,
        title:'Mi 55 Inch Ultra HD TV',
        brand: 'Xiaomi',
        type: 'TV',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/mi-65-inch-ultra-hd-tv-6-1305x800-1628663541.jpg?downsize=*:180'
    },
    {
        id: 8,
        title:'Samsung Galaxy C55',
        brand: 'Samsung',
        type: 'Handphone',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/Galaxy-C55-DB-709x800-1713850892.jpg?downsize=*:180'
    },
    {
        id:9,
        title:'Samsung Galaxy S23 Ultra',
        brand: 'Samsung',
        type: 'Handphone',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/Samsung-Galaxy-S23-Ultra-782x800-1675282446.jpg?downsize=*:180'
    },
    {
        id:10,
        title:'Samsung Galaxy Watch 6',
        brand: 'Samsung',
        type: 'SmartWatch',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/galaxy-watch6-samsung-db-445x800-1690436632.jpg?downsize=*:180'
    },
    {
        id:11,
        title:'Samsung Galaxy Watch Active 2 4G',
        brand: 'Samsung',
        type: 'SmartWatch',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/samsung-galaxy-watch-active-2-419x800-1577105214.jpg?downsize=*:180'
    },
    {
        id:12,
        title:'Samsung Samsung Neo QLED 8K Smart TV QN800D',
        brand: 'Samsung',
        type: 'TV',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/QN800D-Neo-QLED-8K-DB-709x800-1713360660.jpg?downsize=*:180'
    },
    {
        id:13,
        title:'Samsung OLED 4K Smart TV ',
        brand: 'Samsung',
        type: 'TV',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/S95D-db-709x800-1713348154.jpg?downsize=*:180'
    },
    {
        id:14,
        title:'Apple iPhone 15 Pro',
        brand: 'Apple',
        type: 'Handphone',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/iphone-15-pro-600x800-1694549252.jpg?downsize=*:180,'
    },
    {
        id:15,
        title:'iPhone 13',
        brand: 'Apple',
        type: 'Handphone',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/iphone-13-1-396x800-1631648728.jpg?downsize=*:180'
    },
    {
        id:16,
        title:'iPhone 14',
        brand: 'Apple',
        type: 'Handphone',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/iphone-14-db-400x800-1662580923.jpg?downsize=*:180'
    },
    {
        id:17,
        title:'MacBook Pro 14-inch',
        brand: 'Apple',
        type: 'Laptop',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/macbook-pro-m3-max-1200x675-1703308976.jpg?downsize=*:180'
    },
    {
        id:18,
        title:'Apple MacBook Air 15',
        brand: 'Apple',
        type: 'Laptop',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/MacBook-Air-15-709x800-1686030035.jpg?downsize=*:180'
    },
    {
        id:19,
        title:'Apple Watch Ultra 2',
        brand: 'Apple',
        type: 'SmartWatch',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/Apple-Watch-Ultra-2-DB-709x800-1694545977.jpg?downsize=*:180'
    },
    {
        id:20,
        title:'Apple Watch Series 9 GPS',
        brand: 'Apple',
        type: 'SmartWatch',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/Apple-Watch-Series-9-DB-709x800-1694545691.jpg?downsize=*:180'
    },
    {
        id:21,
        title:'LG 65-inch G2 evo 4K Smart OLED TV',
        brand: 'LG',
        type: 'TV',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/lg-g2-oled-1418x800-1653554634.jpg?downsize=*:180',
    },
    {
        id:22,
        title:'LG 83-inch C2 evo 4K Smart OLED TV',
        brand: 'LG',
        type: 'TV',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/lg-c2-oled-1262x800-1653554513.jpg?downsize=*:180'
    },
    {
        id:23,
        title:'LG W41 Pro',
        brand: 'LG',
        type: 'Handphone',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/lg-w41-pro-378x800-1613982892.jpg?downsize=*:180'
    },
    {
        id:24,
        title:'LG K52',
        brand: 'LG',
        type: 'Handphone',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/lg-k52-370x800-1600921325.jpg?downsize=*:180'
    },
    {
        id:25,
        title:'LG Ultra PC 16',
        brand: 'LG',
        type: 'Laptop',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/lg-ultra-pc-16-launched-lg-db-1491x800-1663676085.jpg?downsize=*:180'
    },
    {
        id:26,
        title:'LG Ultra PC 17',
        brand: 'LG',
        type: 'Laptop',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/lg-ultra-pc-17-launched-lg-db-1456x800-1663675528.jpg?downsize=*:180'
    },
    {
        id:27,
        title:'Oppo A60',
        brand: 'Oppo',
        type: 'Handphone',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/oppo-a60-purple-609x800-1714215076.jpg?downsize=*:180'
    },
    {
        id:28,
        title:'Oppo K12',
        brand: 'Oppo',
        type: 'Handphone',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/oppo-k12-oppo-db-660x800-1714034407.jpg?downsize=*:180'
    },
    {
        id:29,
        title:'Oppo Band Vitality Edition',
        brand: 'Oppo',
        type: 'SmartWatch',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/oppo-a60-purple-609x800-1714215076.jpg?downsize=*:180'
    },
    {
        id:30,
        title:'Oppo Band Style',
        brand: 'Oppo',
        type: 'SmartWatch',
        price:1_000_000,
        image:'https://i.gadgets360cdn.com/products/large/oppo-band-style-288x800-1615214008.jpg?downsize=*:180'
    },
]