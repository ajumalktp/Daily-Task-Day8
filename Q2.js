function beeramid(bonus, price) {
    let levels = 0;
    let totalCans = 0;
    
    while (totalCans <= bonus) {
      const cansInLevel = Math.pow(levels + 1, 2);
      const costOfLevel = cansInLevel * price;
      
      if (totalCans + costOfLevel > bonus) {
        break;
      }
      
      levels++;
      totalCans += costOfLevel;
    }
    
    return levels;
  }
  console.log(beeramid(1500, 2));
  console.log(beeramid(5000, 3));
    