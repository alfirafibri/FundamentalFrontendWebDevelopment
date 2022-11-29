class HeaderContent extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <div>
        <div class="text-center">
        <div class="text-center">
        <h1 class="text-white header-text pt-2"><span class="text-blue">Covid-19 Ternyata Masih Ada? Waspada?</span></h1>
        <br><br>

        <h3><span class="text-purple">Puncak Gelombang Covid-19 Varian Baru Terjadi Dua Bulan Lagi?</span> </h3>
        <p>Subvarian Omicron XBB mulai terdeteksi di Tanah Air. Hal ini diprediksikan bahwa puncak gelombang varian baru Covid-19 akan terjadi dalam satu hingga dua bulan ke depan. Prediksi ini dianggap sah karena pandemi Covid-19 sangat dinamis dan tidak dapat diprediksi karena variabilitasnya yang tinggi. 
        Jika dilihat studi kasus naik-turunnya Covid-19 di Singapura yang jumlah kasus per bulannya meningkat hampir 10 kali lipat di bulan September namun sebulan setelahnya kembali turun. Tren kasus Covid-19 tersebut juga dialami di Indonesia, sehingga tidak dapat ditentukan dalam satu atau dua bulan ke depan. 
        Karenanya mungkin saja Indonesia mengalami tren penurunan kasus corona. Oleh sebab itu, Prof Tjandra mengusulkan agar pemerintah Indonesia bisa mengikuti langkah program vaksinasi Singapura dengan jenis vaksin booster yang digunakan Bivalen Cominarty Pfizer. 
        Vaksin jenis tersebut dapat melindungi terhadap varian-varian yang lama dan bisa juga melindungi terhadap varian-varian Omicron. Selain meningkatkan program vaksinasi booster Covid-19, pemerintah dan masyarakat perlu bersama-sama kembali patuh menerapkan protokol kesehatan dan melakukan isolasi mandiri jika terjangkit virus corona. 
        </p>
        <a href="https://www.merdeka.com/peristiwa/puncak-gelombang-covid-19-varian-baru-terjadi-dua-bulan-lagi.html">Detail Information : Merdeka.com</a>
        </div>
        </div>
       </div>`;
    }
}

customElements.define('header-content', HeaderContent);