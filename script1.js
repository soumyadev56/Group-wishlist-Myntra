document.addEventListener('DOMContentLoaded', () => {
    const wishlistBtn = document.getElementById('wishlistBtn');
    const wishlistModal = document.getElementById('wishlistModal');
    const closeWishlistModal = document.getElementById('closeWishlistModal');
    const ownWishlistBtn = document.getElementById('ownWishlistBtn');
    const groupWishlistBtn = document.getElementById('groupWishlistBtn');
    const groupWishlistModal = document.getElementById('groupWishlistModal');
    const closeGroupWishlistModal = document.getElementById('closeGroupWishlistModal');
    const groupList = document.getElementById('groupList');

    wishlistBtn.addEventListener('click', () => {
        wishlistModal.style.display = 'block';
    });

    closeWishlistModal.addEventListener('click', () => {
        wishlistModal.style.display = 'none';
    });

    ownWishlistBtn.addEventListener('click', () => {
        wishlistModal.style.display = 'none';
        alert('Item added to your own wishlist');
    });

    groupWishlistBtn.addEventListener('click', () => {
        wishlistModal.style.display = 'none';
        groupWishlistModal.style.display = 'block';
        loadGroups();
    });

    closeGroupWishlistModal.addEventListener('click', () => {
        groupWishlistModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == wishlistModal) {
            wishlistModal.style.display = 'none';
        }
        if (event.target == groupWishlistModal) {
            groupWishlistModal.style.display = 'none';
        }
    });

    function loadGroups() {
        const groups = ['Fashion Buddies', 'WeStylish', 'Our Genz World']; // Example groups
        groupList.innerHTML = '';
        groups.forEach(group => {
            const li = document.createElement('li');
            li.textContent = group;
            li.addEventListener('click', () => {
                alert(`Item added to ${group}`);
                groupWishlistModal.style.display = 'none';
            });
            groupList.appendChild(li);
        });
    }
});
