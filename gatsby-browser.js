export const onClientEntry = (_, pluginOptions) => {

  // Inject styles.
  const styles = `
    .modal {
      opacity: 0;
      position: fixed; 
      top: -100%;
      z-index: -1;
      padding-top: 80px; /* Location of the box */
      left: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow:auto;
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
      transition: top 0.4s, opacity 0.6s, z-index 0.8s;
    }

    .modal.show {
      top: 0;
      opacity: 1;
      z-index: 350;
    }

    .modal.show:hover {
      cursor: zoom-out;
    }

    .gatsby-resp-image-wrapper:hover {
      cursor: zoom-in;
    }

    .modal-content picture {
      margin: auto;
    }

    .modal-content img {
      max-width: 100%;
      max-height: 90vh;
      position: relative !important;
    }
    .modal-content {
      margin: auto;
      display: grid;
      width: 80%;
      max-width: 90%;
      height: 90%;
    }

      #caption {
        margin: auto;
        display: block;
        width: 80%;
        max-width: 700px;
        text-align: center;
        color: #ccc;
        padding: 10px 0;
        height: 8%;
      }

      .close {
        position: absolute;
        top: 15px;
        right: 35px;
        color: #f1f1f1;
        font-size: 40px;
        font-weight: bold;
        transition: 0.3s;
      }

      .close:hover,
      .close:focus {
        color: #bbb;
        text-decoration: none;
        cursor: pointer;
      }

      /* 100% Image Width on Smaller Screens */
      @media only screen and (max-width: 700px){
        .modal-content {
          width: 100%;
        }
      }
  `;

  const node = document.createElement(`div`);
  node.id = `zoom-modal`;
  node.classList = `modal`;
  node.innerHTML = `
  <span class="close">&times;</span>
  <div class="modal-content" id="img01"></div>
  <div id="caption"></div>`
  document.body.append(node)
  const styleEl = document.createElement(`style`);
  styleEl.id = `zoom-style`
  styleEl.innerHTML = styles
  document.head.appendChild(styleEl);
};

export const onRouteUpdate = (_, pluginOptions) => {
  runZoom();
};

function runZoom(){
  var modal = document.getElementById("zoom-modal");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  var isModalVisible = false;
  let children = [...document.querySelectorAll(".gatsby-resp-image-wrapper")];
  if (children.length == 0) {
    let spans = document.getElementsByTagName('span');
    for (let i = 0; i < spans.length; ++i) {
      if (spans[i].className == "gatsby-resp-image-wrapper") {
        children.push(spans[i])
      };
    }
    if (children.length == 0){
      console.log(document.getElementsByTagName('span'))
      console.log(document)
      console.log(children)
      console.log("Nie moge znalezc obrazkow!")
      return;
    }
  }
  children.map(
    (element) => {
      element.onclick = function (e) {
        let picture = this.getElementsByTagName("picture")[0]
        modalImg.innerHTML = picture.outerHTML
        captionText.innerHTML = this.alt ? this.alt : '';
        isModalVisible = true;
        modal.classList.add('show');
        e.stopPropagation();
      }
    })

  let span = document.getElementsByClassName("close")[0];
  window.onclick = function (e) {
    if (isModalVisible) {
      hideModal();
    }
  }
  window.onscroll = function () {
    if (isModalVisible) {
      hideModal();
    }
  }

  function hideModal() {
    modal.classList.remove('show');
    isModalVisible = false;
  }
}