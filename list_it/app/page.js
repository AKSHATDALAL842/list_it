'use client';
import * as React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Firestore } from '@/firebase';
// import { initializeApp } from 'firebase/app';
import { Box, Typography } from '@mui/material';

export default function BoxBasic() {
  const [inventory, setInventory] = useState ([])
  const[open, setOpen] = useState(false)
  const[itemName, setItemName] = useState('')

  const UpdateInventory = async () =>{
    const snapshot = query (collection (firestore, 'inventory'))
    const docs = await getDocs (snapshot)
    const inventoryList = []
    docs. forEach ((doc) =>{
      inventoryList.push({
        name: doc.id, 
        ...doc.data(),
      })
    })
    setInventory(inventoryList)
  }

  const removeItem = async (itemName) => {
    const docRef = doc(collection(firestore, 'inventory'), item);
    const docsnap = await getDoc(docRef);
    if (docsnap.exists()) {
      const {quantity} = docSnap. data ()
      if(quantity === 1){
        await deleteDoc(docRef)
      }else{
        await setDoc(docRef, {quantity: quantity - 1})
      }
    }
    await updateInventory()
  };

  useEffect (() => {
    updateInventory()
  }, [])

  return (
    
    <Box>
      <Typography variant='h1'>Inventory Management</Typography>
      {inventory. forEach ( (item) =>{
        console.log(item)
        return (
          <Box>
            {item.name}
            {item.count}
          </Box>
        )
      })}
    </Box>
  );
}
