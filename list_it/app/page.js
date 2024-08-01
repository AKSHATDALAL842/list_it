'use client';
import * as React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Firestore } from '@/firestore';
import { Box, Typography } from '@mui/material';

const item = ['potato',  'tomato',  'carrot',  'onion',  'capsicum',  'peas',  'chili',  'pepper',]

export default function BoxBasic() {
  const [inventory, setInventory] = useState ([])
  const[open, setOpen] = useState(false)
  const[itemName, setItemName] = useState('')
  return (
    
    <Box>
      <Typography variant='h1'>
        Inventory Management
      </Typography>
    </Box>
  );
}
