/*
import('microFrontEnd4/MicroFrontEnd4Index')
    .then(module => { console.log('mfe4 loaded!'); return module; })
    .catch(() => console.log('Error: mfe4 not loaded'));
*/
import('microFrontEnd1/MicroFrontEnd1Index')
    .then(module => { console.log('mfe1 loaded!'); return module; })
    .catch(() => console.log('Error: mfe1'));

import('microFrontEnd2/MicroFrontEnd2Index')
    .then(module => { console.log('mfe2 loaded!'); return module; })
    .catch(() => console.log('Error: mfe2'));

import('microFrontEnd3/MicroFrontEnd3Index')
    .then(module => { console.log('mfe3 loaded!'); return module; })
    .catch(() => console.log('Error: mfe3'));

console.log('Container!');