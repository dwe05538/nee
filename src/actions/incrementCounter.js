'use server';
import { connectToDatabase } from '../utils/mongodb';
import Counter from '../models/Counter';

export async function incrementCounter() {
  await connectToDatabase();

  let counter = await Counter.findOne();
  if (!counter) counter = await Counter.create({ count: 0 });

  counter.count += 1;

  if (counter.count >= 100) {
    console.log('🎯 Count reached 100!');
    counter.count = 0;
  }

  await counter.save();

  return { success: true, currentCount: counter.count };
}

export async function getCounter() {
  await connectToDatabase();

  let counter = await Counter.findOne();
  if (!counter) counter = await Counter.create({ count: 0 });

  return { success: true, currentCount: counter.count };

}

