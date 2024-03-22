export const LightSheme = {
   background: '#fff',
   standBackground: '#fff',
   font: '#000',
   ui: 'skyblue',
};

export const DarkSheme = {
   background: '#000',
   standBackground: '#000',
   font: '#fff',
   ui: 'tomato',
};

export const getColors = (_sheme) => {
   if (_sheme === 'light') return LightSheme;
   else return DarkSheme;
};
