document.getElementById('seoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun gönderimini engelle

    const productName = document.getElementById('productName').value;
    const productFeatures = document.getElementById('productFeatures').value.split(',');

    // Basit bir SEO önerisi oluştur
    const seoTitle = `Alınacak En İyi ${productName}`;
    const seoDescription = `${productName} için özellikler: ${productFeatures.join(', ')}.`;
    const seoTags = productFeatures.map(feature => feature.trim()).join(', ');

    // Sonuçları güncelle
    document.getElementById('seoTitle').innerText = `Başlık: ${seoTitle}`;
    document.getElementById('seoDescription').innerText = `Açıklama: ${seoDescription}`;
    document.getElementById('seoTags').innerText = `Etiketler: ${seoTags}`;
});
