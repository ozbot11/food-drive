// Import TensorFlow.js
import * as tf from '@tensorflow/tfjs';

// Define and compile a simple linear regression model
function createModel() {
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
  model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });
  return model;
}

// Train the model using the provided data
async function trainModel(model, data) {
  const { totalFoodUsed, totalOrders, foodWasted } = data;
  const xs = tf.tensor2d([totalFoodUsed, totalOrders], [2, 1]);
  const ys = tf.tensor2d([foodWasted], [1, 1]);

  await model.fit(xs, ys, { epochs: 1000 });
}

// Predict food waste based on new data
async function predictFoodWaste(model, newData) {
  const input = tf.tensor2d([newData.totalFoodUsed, newData.totalOrders], [1, 2]);
  const prediction = await model.predict(input);
  const foodWasted = prediction.dataSync()[0];
  return foodWasted;
}

// Example data
const trainingData = {
  totalFoodUsed: 1000, // Total food used in pounds
  totalOrders: 200,    // Total number of orders
  foodWasted: 50,      // Actual food wasted in pounds (for training)
};

// Create and train the model
const model = createModel();
await trainModel(model, trainingData);

// New data for prediction
const newData = {
  totalFoodUsed: 1200, // New total food used in pounds
  totalOrders: 250,    // New total number of orders
};

// Predict food waste based on new data
const predictedWaste = await predictFoodWaste(model, newData);

console.log(`Predicted food waste: ${predictedWaste.toFixed(2)} pounds`);