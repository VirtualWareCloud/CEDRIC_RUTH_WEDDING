document.getElementById('hamburger').addEventListener('click', function() {
  const nav = document.getElementById('navLinks');
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});
document.getElementById('shareBtn').addEventListener('click', async () => {
  if (navigator.share) {
    await navigator.share({
      title: 'Cedric & Ruth Royal Wedding',
      text: 'Celebrate our big day with us!',
      url: window.location.href
    });
  } else {
    alert('Sharing not supported on this device.');
  }
});
