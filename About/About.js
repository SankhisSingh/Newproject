document.getElementById('readMoreBtn').addEventListener('click', function () {
  const extraContent = document.getElementById('extraContent');
  const button = this;

  if (extraContent.style.display === 'none' || extraContent.style.display === '') {
    // Load additional content dynamically
    extraContent.innerHTML = `
      <h3>Our Vision</h3>
      <p>
        Our vision is to transform industries through innovative technology and exceptional customer experiences.
        We aim to build long-lasting relationships with our clients and provide a platform for creativity and growth.
      </p>
      <h3>Our Values</h3>
      <ul>
        <li>Integrity: We uphold the highest standards of honesty and transparency.</li>
        <li>Collaboration: Working together, we achieve more.</li>
        <li>Excellence: Striving for perfection in every project we undertake.</li>
      </ul>
    `;
    extraContent.style.display = 'block';
    button.textContent = 'Read Less';
  } else {
    extraContent.style.display = 'none';
    button.textContent = 'Read More';
  }
});
