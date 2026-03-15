const heart = document.getElementById("heart");
const totalFlowers = 99;

for (let i = 0; i < totalFlowers; i++) {
    const t = (Math.PI * 2 * i) / totalFlowers;

    const x = 16 * Math.pow(Math.sin(t), 3);
    const y =
        13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t);

    const flower = document.createElement("div");
    flower.className = "flower";
    flower.textContent = "🌹";

    const scale = 16.5;
    const posX = 50 + (x * scale) / 10;
    const posY = 48 - (y * scale) / 10;

    flower.style.left = posX + "%";
    flower.style.top = posY + "%";
    flower.style.animationDelay = (Math.random() * 2.5) + "s";

    heart.appendChild(flower);
}

const floatingBg = document.getElementById("floatingBg");
const symbols = ["🌸", "💖", "💕", "🌹", "✨"];

for (let i = 0; i < 28; i++) {
    const item = document.createElement("span");
    item.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    item.style.left = Math.random() * 100 + "vw";
    item.style.fontSize = (18 + Math.random() * 20) + "px";
    item.style.animationDuration = (7 + Math.random() * 8) + "s";
    item.style.animationDelay = Math.random() * 6 + "s";
    floatingBg.appendChild(item);
}

const fireworks = document.getElementById("fireworks");
function heartFirework() {
    const centerX = Math.random() * window.innerWidth;
    const centerY = Math.random() * (window.innerHeight * 0.45) + 80;

    const totalParticles = 180;

    for (let i = 0; i < totalParticles; i++) {
        const t = (Math.PI * 2 * i) / totalParticles;

        // Phương trình trái tim
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y =
            13 * Math.cos(t) -
            5 * Math.cos(2 * t) -
            2 * Math.cos(3 * t) -
            Math.cos(4 * t);

        const spark = document.createElement("div");
        spark.className = "heart-spark";

        // scale để trái tim pháo hoa to hơn
        const scale = 12 + Math.random() * 4;
        const moveX = x * scale;
        const moveY = -y * scale;

        spark.style.left = centerX + "px";
        spark.style.top = centerY + "px";
        spark.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;
        spark.style.boxShadow = `0 0 12px hsl(${Math.random() * 360}, 100%, 70%)`;

        spark.animate(
            [
                {
                    transform: "translate(0,0) scale(0.3)",
                    opacity: 1
                },
                {
                    transform: `translate(${moveX}px, ${moveY}px) scale(1)`,
                    opacity: 1,
                    offset: 0.7
                },
                {
                    transform: `translate(${moveX}px, ${moveY}px) scale(0.2)`,
                    opacity: 0
                }
            ],
            {
                duration: 1800,
                easing: "ease-out"
            }
        );

        document.body.appendChild(spark);
        setTimeout(() => spark.remove(), 1800);
    }
}

// bắn liên tục
setInterval(heartFirework, 2200);

function createPetal(){
    const petal=document.createElement("div");
    petal.className="petal";
    petal.innerHTML="🌸";

    petal.style.left=Math.random()*100+"vw";
    petal.style.animationDuration=(5+Math.random()*5)+"s";

    document.body.appendChild(petal);

    setTimeout(()=>petal.remove(),10000);
}

setInterval(createPetal,500);

 const bgMusic = document.getElementById("bgMusic");

    window.addEventListener("load", () => {
        bgMusic.play().catch(() => {});
    });

    document.addEventListener("click", () => {
        bgMusic.play().catch(() => {});
    }, { once: true });