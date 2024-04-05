document.write(`


    <!-- &&&&&&&&&&&&&&&&&&   -->
    <!-- footer section -->
    <!-- &&&&&&&&&&&&&&&&&&   -->


    <footer class="footer-main">
        <div class="footer-main-privacy">
            <div class="footer-main-privacy-head">
                <div class="footer-main-privacy-head-title">
                    Privacy Policy:
                </div>
                <div class="footer-main-privacy-head-closeBtn">
                </div>
            </div>
            
            <p class="footer-main-privacy-content"> 
                Privacy Policy governs the collection, use, and disclosure of personal information when you visit my website. It would be better to get information and usage data to enhance my site functionality and user experience. Additionally, any personal information voluntarily provided, such as name and email address, is used for communication purposes and to fulfill specific requests. I do not sell personal information including sharing it with trusted third-party service providers for operational purposes. I retain personal information only as long as necessary for the purposes outlined in this policy. You have the right to access, correct, or delete your personal information and to opt out of receiving promotional communications. This policy may be updated periodically to reflect changes in our practices. If you have any questions or concerns about this policy or wish to exercise your rights, please contact me.
            </p>
        </div>

        <div class="footer-main-disclaimer">
            <div class="footer-main-disclaimer-head">
                <div class="footer-main-disclaimer-head-title">
                Disclaimer:                
                </div>
                <div class="footer-main-disclaimer-head-closeBtn">

                </div>
            </div>
            <p class="footer-main-disclaimer-content"> 
                The information provided on this website is for general informational purposes only. While I strive to keep the information up to date and correct, there is no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. <br>
                In no event will I be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
            </p>

            

        </div>



        <div class="footer-main-sitemap">
            <ul class="footer-main-sitemap-first">
                <li><a href="index.html">HOME</a></li>
                <li><a class="footer-main-sitemap-01-gallery" href="gallery.html">GALLERY</a></li>
                <li><a class="footer-main-sitemap-01-aboutMe" href="aboutMe.html">ABOUT ME</a></li>
                <li><a class="footer-main-sitemap-01-contact" href="mailto:tjun@purdue.edu">CONTACT</a></li>
            </ul>
            <ul class="footer-main-sitemap-second">
                <li><a class="footer-main-sitemap-02-WD" href="##">Web Development</a></li>
                <li><a target="_blank" class="footer-main-sitemap-02-DV" href="https://github.com/TaesukJun/DCM_Viewer">DCM Viewer</a></li>
                <li><a class="footer-main-sitemap-02-gallery" href="gallery.html">Gallery</a></li>
                <li><a class="footer-main-sitemap-02-GD" href="##">Graphic Design</a></li>
            </ul>
            <ul class="footer-main-sitemap-copyright">
                <li><p id = "copyrightText"> Copyright© 2024 Jun </p>
                </li>
                <li><p > 1572 Maplewood Drive Cedar Grove, Evergreen State, 98109 </p>
            </ul>
            <ul>
                <li><a class="privacy-btn">Privacy</a></li>
                <li><a class="disclaimer-btn">Disclaimer</a></li>
                <li><a href="https://play.google.com/"> <img src="img/googleplay.png" alt="googleplay"> </a></li>
            

            </ul>


        </div>
    </footer>

    <script src="js/main.js"> </script>

`);


let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.getElementById('copyrightText').innerHTML = `Copyright© ${currentYear} Jun`;
