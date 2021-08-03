const db = require('./connection');
const { User, Product } = require('../models');

db.once('open', async () => {

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Travel Folding Soft Toothbrush',
      description:
        'A folding soft troothbrush that is perfect for travels',
      image: 'cookie-tin.jpg',//change this
      price: 5.99,
      quantity: 200
    },
    {
      name: 'Dove White Bar Soap',
      description:
        '#1 cleansing bar recommended by dermatologists. Ideal for infant and long-term care. Non-irritating, non-soap moisturizing formula contains one quarter moisturizing cream and is milder to skin than any soap.',
      image: 'canned-coffee.jpg',//change this
      price: 4.99,
      quantity: 100
    },
    {
      name: '100% cotton Towel set',
      description:
        '100% cotton towel set comes with a hand and a bath towel made right here in the US of A.',
      image: 'toilet-paper.jpg',//change this
      price: 19.99,
      quantity: 50
    },
    {
      name: 'Cup Noodles',
      description:
        'Ready in 3 minutes noodles. All you need is hot water. Perfect for traveling and anywhere',
      image: 'soap.jpg',//change this
      price: 0.99,
      quantity: 500
    },
    {
      name: 'Phone charger 5ft cord',
      description:
        '5 ft tangle free nylon braided cable is more durable, more flexible and sturdier than standard cables.',
      image: 'wooden-spoons.jpg',//change this
      price: 14.99,
      quantity: 200
    },
    {
      name: 'Canon 20.3 Megapixel Digital Camera',
      description:
        'Capture the moment with this Canon PowerShot SX740 digital camera. The 40x optical zoom feature lets you capture faraway subjects, while the intelligent image stabilization technology ensures clear, stable images and videos.',
      image: 'camera.jpg',//change this
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Travel neck pillow',
      description:
        'Made from 100% viscoelastic foam that provides comfort for sleeping and resting. Memory foam responds to body heat to better conform to the unique shape of your head and neck, helping to comfortably stabilize an existing condition.',
      image: 'tablet.jpg',//change this
      price: 19.99,
      quantity: 100
    },
    {
      name: 'Wireless Earbuds',
      description:
        'Wireless earbuds with the latest technology that provide execptional sound with upto 50 hrs of audiotime.',
      image: 'bedtime-book.jpg',//change this
      price: 49.99,
      quantity: 100
    },
    {
      name: 'People We Meet on Vacation',
      description: 'Two best friends. Ten summer trips. One last chance to fall in love.',
      image: 'spinning-top.jpg',//change this
      price: 10.99,
      quantity: 100
    },
    {
      name: 'Harry Potter Paperback Boxed Set, Books 1-7',
      description:
        'Now for the first time ever, J.K. Rowlings seven bestselling Harry Potter books are available in a stunning paperback boxed set.',
      image: 'plastic-horses.jpg',//change this
      price: 89.99,
      quantity: 40
    },
    {
      name: 'YETI RAMBLER 20 OZ TUMBLER WITH MAGSLIDER LID',
      description:
        'The YETI Rambler family is tough as hell, and will keep your drinks as cold (or hot) as science allows. With stainless steel construction, double-wall vacuum insulation, and No Sweat Design, they’re perfect for on-the-move adventures in the backcountry and long days on the water alike. Plus they’re dishwasher safe. From insulated Bottles and Tumblers to Mugs and Jugs, get the Rambler Drinkware that suits your next day out.',
      image: 'teddy-bear.jpg',//change this
      price: 27.99,
      quantity: 100
    },
    {
      name: 'Purell Advanced Hand Sanitizer Refreshing Gel',
      description:
        'Purell Advanced Hand Sanitizer Refreshing Gel, 1 Fl Oz (3-Pack)',
      image: 'alphabet-blocks.jpg',//change this
      price: 9.99,
      quantity: 300
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Mary',
    lastName: 'Jane',
    email: 'maryjane@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
