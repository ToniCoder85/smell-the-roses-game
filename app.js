let flowerCount = 0;
document.getElementById(pickFlower).addEventListener('click',() => {
    flowerCount++; 
    document.getElementById('flowerCount').textContent = flowerCount;
});