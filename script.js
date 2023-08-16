// Get the current date
const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();

const nameData = {
  8: {
    16: 'Gulmea',
    17: 'Heisenberg',
    18: 'Muzzled',
    22: 'Timi',
    23: 'Odins',
    24: 'WDM',
    25: 'Lego',
    28: 'War pro',
    29: 'INM',
    30: 'Gulmea',
    31: 'Heisenberg',
    // More August names
  },
  9: {
    5: 'Muzzled',
    6: 'Timi',
    7: 'Odins',
    8: 'WDM',
    11: 'Lego',
    12: 'War pro',
    13: 'INM',
    14: 'Gulmea',
    15: 'Heisenberg',
    18: 'Muzzled',
    19: 'Timi',
    20: 'Odins',
    21: 'WDM',
    22: 'Lego',
    25: 'War pro',
    26: 'INM',
    27: 'Gulmea',
    28: 'Heisenberg',
    29: 'Muzzled',
    // More September names
  },
  10: {
    2: 'Timi',
    3: 'Odins',
    4: 'WDM',
    5: 'Lego',
    6: 'War pro',
    9: 'INM',
    10: 'Gulmea',
    11: 'Heisenberg',
    12: 'Muzzled',
    13: 'Timi',
    17: 'Odins',
    18: 'WDM',
    19: 'Lego',
    20: 'War pro',
    23: 'INM',
    24: 'Gulmea',
    25: 'Heisenberg',
    26: 'Muzzled',
    27: 'Timi',
    31: 'Odins',
    // More October names
  },
  11: {
    2: 'WDM',
    3: 'Lego',
    6: 'War pro',
    7: 'INM',
    8: 'Gulmea',
    9: 'Heisenberg',
    10: 'Muzzled',
    13: 'Timi',
    14: 'Odins',
    15: 'WDM',
    16: 'Lego',
    17: 'War pro',
    20: 'INM',
    21: 'Gulmea',
    22: 'Heisenberg',
    23: 'Muzzled',
    24: 'Timi',
    27: 'Odins',
    28: 'WDM',
    29: 'Lego',
    30: 'War pro',
    // More November names
  },
  // other months
};

// Get the element to display the highlighted name
const highlightedNameElement = document.getElementById('highlightedName');

// Check if there's a name for the current date
if (nameData[currentMonth] && nameData[currentMonth][currentDay]) {
  const highlightedName = nameData[currentMonth][currentDay];
  highlightedNameElement.textContent = `${highlightedName}`;
  highlightedNameElement.classList.add('highlight');
}
