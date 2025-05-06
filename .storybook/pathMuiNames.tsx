import * as Mui from '@mui/material';

const componentsList = Object.keys(Mui).filter(item => {
  return item[0] === item[0].toUpperCase();
});

for (const componentName of componentsList) {
  // NOTE: Check if Mui[componentName] is a React component by the presence of "render"
  if (Mui[componentName].render) {
    Mui[componentName].displayName = componentName;
  }
}