'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function BasicStack() {
//   return (
//     <Box sx={{ width: '800px', height: '500px', spacing: 2, overflow:"auto"}}>
//       <Stack spacing={2}>
//         <Item>Item 1</Item>
//         <Item>Item 2</Item>
//         <Item>Item 3</Item>
//       </Stack>
//     </Box>
//   );
// }

const item = ['potato',  'tomato',  'carrot',  'onion',  'capsicum',  'peas',  'chili',  'pepper',]

export default function BoxBasic() {
  return (
    <Box width="100vw"
    height = "100vh"
    display = {"flex"}
    justifyContent = {"center"}
    alignItems = {"center"}
    backgroundColor = {"white"}
    color={"black"}>
      <stack width="800px" height="500px" spacing= {2} overflow={"auto"}>
        {item.map((i) => (
          <box
            key={i}
            width="100%"
            height="300px"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            backgroundColor={"#f0f0f0"}
          >
            {i}
          </box>
        ))}
      </stack>
      
    </Box>
  );
}
