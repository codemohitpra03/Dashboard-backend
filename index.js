const express = require('express');
const app = express();
var cors=require('cors')
// Sample data for the bar chart
const barChartData = [
  {
      week:1,
      user:10,
      guest:150
  },
  {
      week:2,
      user:70,
      guest:25
  },
  {
      week:3,
      user:130,
      guest:87
  },
  {
      week:4,
      user:45,
      guest:67
  },
  {
      week:5,
      user:40,
      guest:67
  },
  {
      week:6,
      user:37,
      guest:29
  },
  
]


// Sample data for the pie chart
const pieChartData = [
  {
    name:"Basic Trees",
    color:"#98D89E",
    percentage:55
  },
  {
    name:"Custom Short Pants",
    color:"#F6DC7D",
    percentage:31
  },
  {
    name:"Super Hoodies",
    color:"#EE8484",
    percentage:14
  }
];



app.use(cors())
app.use(express.json())

// Endpoint to get bar chart data
app.get('/api/barchartdata', (req, res) => {
  setTimeout(() => {
    try {
      if (!barChartData.length) {
        throw new Error('No data available for the bar chart.');
      }

      res.status(200).json(barChartData);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },2000)
});

// Endpoint to get pie chart data
app.get('/api/piechartdata', (req, res) => {
  setTimeout(() => {
    try {
      if (!pieChartData.length) {
        throw new Error('No data available for the pie chart.');
      }

      res.json(pieChartData);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },2000)
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start the Express server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
