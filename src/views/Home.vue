<template>
  <div id="outer-div">
    <div id="section-bg">
      <iframe
        src="https://www.youtube.com/embed/8_4JRK4QkqU?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=8_4JRK4QkqU"
        id="header-iframe"
        allowfullscreen
        frameborder="0"
      ></iframe>
      <div id="youtube-img"></div>
      <img id="img-logo-home" src="../assets/logo.png" />
      <button id="start-btn"><span>START YOUR PROJECT</span></button>
      <div class="menu-btn" @click="toggleMenu()">
        <div class="btn-line"></div>
        <div class="btn-line"></div>
        <div class="btn-line"></div>
      </div>
      <div id="slogan-div">
        WE CREATE<br />
        AMAZING<br />
        <span class="slogan-text-highlight-green">DIGITAL EXPERIENCES</span
        ><img class="img-reddot" src="../assets/reddot.png" /><br />
      </div>
      <img id="img-veg" src="../assets/vegetable.png" />
      <span class="subslogan-text">TASTE US NOW!<br /></span>
      <div class="white-hr-top" />
    </div>
    <div id="section-second">
      <div>
        <div class="white-hr-down" />
        <span class="section-title-sapn-black" style="margin-top: 40px"
          >ABOUT DIGISALAD<img class="img-reddot" src="../assets/reddot.png"
        /></span>
        <img
          class="wave-hr"
          src="../assets/green-wave-hr.png"
          style="margin-bottom: 73px"
        />
        <iframe
          id="img-viedo"
          src="https://www.youtube-nocookie.com/embed/IeIRJ9jZ5Ro?rel=0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <!-- <img id="img-viedo" src="../assets/video-thumbnail.png" /> -->
        <span id="span-description" style="margin: 30px auto"
          >Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
          ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
          Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.
          Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci.
          Donec id dignissim nunc. Donec elit ante, eleifend a dolor et,
          venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem
          elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc
          leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis
          molestie faucibus.</span
        >
        <button id="viewmore-btn" style="margin-bottom: 70px">
          <span>VIEW MORE</span>
          <hr class="white-hr" />
        </button>
      </div>
    </div>
    <div id="section-white">
      <div id="white-retangle">
        <div class="row no-gutter retangle-row">
          <div class="col-xl-4 col-lg-12">
            <div
              style="
                width: 181.61px;
                display: flex;
                flex-direction: column;
                margin: 0px 0 31.7px 0;
              "
            >
              <span
                class="section-title-sapn-black"
                style="margin-bottom: 8.7px"
                >AWARDS<img class="img-reddot" src="../assets/reddot.png"
              /></span>
              <img src="../assets/green-wave-hr-short.png" />
            </div>
            <span
              >Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
              ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
              porta. Nam condimentum vitae ligula vel ornare. Phasellus at
              semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl,
              vitae sagittis orci. Donec id dignissim nunc.
            </span>
          </div>
          <div
            class="
              col-xl-7 col-lg-12
              row
              justify-content-sm-center
              justify-content-md-start
              justify-content-lg-start
            "
          >
            <img src="../assets/award.png" />
            <img src="../assets/award.png" />
            <img src="../assets/award.png" />
            <img src="../assets/award.png" />
          </div>
        </div>
      </div>
    </div>
    <div id="section-third">
      <div
        class="row no-gutters justify-content-center"
        style="margin: auto 15%"
      >
        <div
          class="col-sm-12 row justify-content-sm-center"
          style="margin: 65px 0 31.7px 0"
        >
          <div
            style="
              width: 369px;
              display: flex;
              flex-direction: column;
              align-items: center;
            "
          >
            <span class="section-title-sapn-black" style="margin-bottom: 8.7px"
              >OUR INGRADIENTS<img
                class="img-reddot"
                src="../assets/reddot.png"
            /></span>
            <img src="../assets/purple-wave-hr.png" />
          </div>
        </div>
        <div class="col-sm-12 row">
          <span class="ingradient-items-content-span"
            >Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
            ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
            porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper
            turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae
            sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a
            dolor et, venenatis facilisis dolor. In feugiat orci odio, sed
            lacinia sem elementum quis. Aliquam consectetur, eros et vulputate
            euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus.
            Cras lobortis molestie faucibus.
          </span>
        </div>
        <div
          class="col-sm-12 row justify-content-sm-between container-animation"
        >
          <div
            v-for="(item, index) in ingradientList"
            :key="index"
            class="
              col-sm-4
              row
              no-gutters
              align-items-center
              ingradient-items-div
            "
          >
            <div class="ingradient-items-vector-div">
              <img :src="require('../assets/' + item.vector)" />
            </div>
            <div class="ingradient-items-title-div">
              <span class="ingradient-items-title-span">{{ item.title }}</span>
            </div>
            <span class="ingradient-items-content-span"
              >{{ item.content }}.</span
            >

            <button class="ingradient-items-btn">
              <span>VIEW MORE</span>
            </button>
          </div>
        </div>
        <span class="ingradients-viewmore-highlight-yellow"
          >VIEW MORE DIGISALAD’S INGRADIENTS</span
        >
      </div>
      <div id="ingradients-viewmore-div"></div>
    </div>
    <div id="section-purple">
      <div id="purple-retangle">
        <div class="row no-gutters retangle-row">
          <div
            class="col-xl-5 col-lg-12"
            id="purple-retangle-content-left"
            style="display: flex; flex-direction: column; align-items: center"
          >
            <img
              src="../assets/TonyNg.png"
              width="200"
              style="margin-bottom: 39px"
            />
            <span style="margin-bottom: 8px">TONY NG</span>
            <span>Founder & Creative Director</span>
          </div>
          <div
            class="col-xl-7 col-lg-12 row justify-content-center"
            id="purple-retangle-content-right"
            style="display: flex; flex-direction: column"
          >
            <div class="row justify-content-center" style="margin: 26px 0">
              <img
                src="../assets/apostrophe.png"
                style="margin-left: 5px"
              /><img src="../assets/apostrophe.png" style="margin-right: 5px" />
            </div>
            <span
              >A great digital work isn’t about designing beautiful pages
              purely. It is about context - how do we deliver the
              <span
                >right experience to the right person at the right time.</span
              ><span></span>
              The most important thing is that your work can engage customers at
              anytime, anywhere and let users experience an entire amazing
              digital journey.
            </span>
          </div>
        </div>
      </div>
    </div>
    <div id="section-fourth">
      <div
        class="row no-gutters justify-content-center retangle-row"
        style="margin: auto 15%"
      >
        <span class="section-title-sapn-black" id="section-fourth-title"
          >OUR BRAND EXPERIENCE<img
            class="img-reddot"
            src="../assets/reddot.png"
        /></span>
        <span id="section-fourth-content"
          >Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
          ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
          Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.
          Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci.
          Donec id dignissim nunc. Donec elit ante, eleifend a dolor et,
          venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem
          elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc
          leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis
          molestie faucibus.</span
        >
        <img src="../assets/client-list.png" id="client-list-img" />
      </div>
    </div>
    <div id="section-fifth">
      <div class="row no-gutter" id="section-fifth-row">
        <div class="col-10 offset-1 row no-gutter justify-content-end">
          <div id="carousel-index">
            <span>{{ carouselActiveIndex + 1 }}</span
            ><span>{{ carouselList.length }}</span>
          </div>
        </div>
        <div class="col-1" />
        <div class="col-1">
          <button
            @click="carouselActive('left')"
            style="background: transparent; border: none"
          >
            <img
              src="../assets/right.png"
              width="53px"
              height="53px"
              style="transform: rotate(180deg)"
            />
          </button>
        </div>
        <div class="carousel-outer col-10">
          <div
            v-bind:id="'carousel-div-' + index"
            class="carousel-div col-12"
            v-for="(item, index) in carouselList"
            :key="index"
          >
            <div class="row no-gutter">
              <div class="col-sm-12 col-md-6 carousel-image">
                <img
                  :src="require('../assets/' + item.img)"
                  style="width: 100%; height: auto; border-radius: 50px"
                />
                <button class="viewproject-btn">
                  <span>VIEW PROJECT</span>
                  <hr class="white-hr" />
                </button>
              </div>
              <div class="col-sm-12 col-md-6 carousel-text">
                <div class="carousel-title-highlight-green">
                  <span>{{ item.title }}</span>
                </div>
                <div class="carousel-content-highlight-green">
                  <span>{{ item.subTitle }}</span
                  ><img
                    class="img-reddot"
                    src="../assets/reddot.png"
                    width="10px"
                    height="10px"
                  />
                </div>
                <span class="section-fourth-content">{{ item.content }} </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-1">
          <button
            @click="carouselActive('right')"
            style="background: transparent; border: none"
          >
            <img src="../assets/right.png" width="53px" height="53px" />
          </button>
        </div>
      </div>
    </div>
    <div id="sidemenu" v-show="onSidemenu">
      <div class="row">
        <div class="col-12 row">
          <img id="img-logo-sidemenu" src="../assets/logo.png" />
          <div id="close-btn" @click="toggleMenu()"></div>
        </div>
      </div>
      <div class="row justify-content-center" id="sidemenu-btn-row">
        <div class="col-sm">
          <div id="sidemenu-aboutus">
            <div>
              <img src="../assets/leaf.png" style="margin-right: 27px" />
              <div class="sidemenu-btn-text">
                <span>EMPOWERING BRANDS</span>
                <div>
                  <span>ABOUT US</span
                  ><img
                    class="img-reddot"
                    src="../assets/reddot.png"
                    width="10px"
                    height="10px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="sidemenu-works">
            <div>
              <img src="../assets/tomato.png" style="margin-right: 27px" />
              <div class="sidemenu-btn-text">
                <span>CASE STUDIES</span>
                <div>
                  <span>WORKS</span
                  ><img
                    class="img-reddot"
                    src="../assets/reddot.png"
                    width="10px"
                    height="10px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div id="sidemenu-careers">
            <div>
              <img
                src="../assets/cheese.png"
                style="margin: 27px 0; width: 82px"
              />
              <div class="sidemenu-btn-text">
                <span>BE COOL WITH US</span>
                <div>
                  <span>CAREERS</span
                  ><img
                    class="img-reddot"
                    src="../assets/reddot.png"
                    width="10px"
                    height="10px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="sidemenu-insights">
            <div>
              <img
                src="../assets/crumber-single.png"
                style="margin: 27px 0; width: 25px"
              />
              <div class="sidemenu-btn-text">
                <span>OUR STRATEGIES</span>
                <div>
                  <span>INSIGHTS</span
                  ><img
                    class="img-reddot"
                    src="../assets/reddot.png"
                    width="10px"
                    height="10px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div id="sidemenu-services">
            <div>
              <img src="../assets/carrot.png" style="margin-right: 27px" />
              <div class="sidemenu-btn-text">
                <span>AREAS OF EXPERTISE</span>
                <div>
                  <span>SERVICES</span
                  ><img
                    class="img-reddot"
                    src="../assets/reddot.png"
                    width="10px"
                    height="10px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="sidemenu-contact">
            <div>
              <div class="sidemenu-btn-text">
                <span style="color: #000000 !important"
                  >START YOUR JOURNEY WITH US</span
                >
                <div>
                  <span style="color: #26c6d0 !important">CONTACT</span
                  ><img
                    class="img-reddot"
                    src="../assets/reddot.png"
                    width="10px"
                    height="10px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      onSidemenu: false,
      ingradientList: [
        {
          vector: 'leaf.png',
          title: 'UX Design',
          content:
            'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Crasullamcorper bibendum bibendum. Duis tincidunt urna non pretiumporta. Nam condimentum vitae ligula vel ornare.',
        },
        {
          vector: 'tomato.png',
          title: 'UI Design',
          content:
            'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Crasullamcorper bibendum bibendum. Duis tincidunt urna non pretiumporta. Nam condimentum vitae ligula vel ornare.',
        },
        {
          vector: 'cheese.png',
          title: 'website development',
          content:
            'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Crasullamcorper bibendum bibendum. Duis tincidunt urna non pretiumporta. Nam condimentum vitae ligula vel ornare.',
        },
        {
          vector: 'crumber.png',
          title: 'mobile app development',
          content:
            'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Crasullamcorper bibendum bibendum. Duis tincidunt urna non pretiumporta. Nam condimentum vitae ligula vel ornare.',
        },
        {
          vector: 'orange.png',
          title: 'ecommerce',
          content:
            'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Crasullamcorper bibendum bibendum. Duis tincidunt urna non pretiumporta. Nam condimentum vitae ligula vel ornare.',
        },
        {
          vector: 'kiwi.png',
          title: 'customer loyalty',
          content:
            'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Crasullamcorper bibendum bibendum. Duis tincidunt urna non pretiumporta. Nam condimentum vitae ligula vel ornare.',
        },
        {
          vector: 'watermelon.png',
          title: 'digital transformation',
          content:
            'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Crasullamcorper bibendum bibendum. Duis tincidunt urna non pretiumporta. Nam condimentum vitae ligula vel ornare.',
        },
        {
          vector: 'corn.png',
          title: 'digital marketing',
          content:
            'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Crasullamcorper bibendum bibendum. Duis tincidunt urna non pretiumporta. Nam condimentum vitae ligula vel ornare.',
        },
        {
          vector: 'apple.png',
          title: 'BRANDING',
          content:
            'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Crasullamcorper bibendum bibendum. Duis tincidunt urna non pretiumporta. Nam condimentum vitae ligula vel ornare.',
        },
      ],
      carouselList: [
        {
          img: 'lp-small.png',
          title: 'HIGHLIGHTED SHOWCASE',
          subTitle: 'LP CLUB MOBILE APP',
          content:
            'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.',
        },
        {
          img: 'lp-small.png',
          title: 'HIGHLIGHTED SHOWCASE',
          subTitle: 'LP CLUB MOBILE APP',
          content:
            'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.',
        },
        {
          img: 'lp-small.png',
          title: 'HIGHLIGHTED SHOWCASE',
          subTitle: 'LP CLUB MOBILE APP',
          content:
            'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.',
        },
        {
          img: 'lp-small.png',
          title: 'HIGHLIGHTED SHOWCASE',
          subTitle: 'LP CLUB MOBILE APP',
          content:
            'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.',
        },
      ],
      carouselActiveIndex: 0,
    }
  },
  created() {},
  mounted() {
    const container = document.querySelector('.outer-div')
    const ingradientItems = document.querySelectorAll('.ingradient-items-div')
    const retangleItems = document.querySelectorAll('.retangle-row')
    const sloganItem = document.querySelector('#slogan-div')
    const logoItem = document.querySelector('#img-logo-home')
    const options = {
      root: container,
      rootMargin: '100px',
      threshold: 0,
    }

    let callbackIngradient = (entries) => {
      let delay = 0
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('vector-animation')
          }, delay)
        }
        delay += 80
      })
    }

    let callbackRetangle = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('retangle-animation')
        }
      })
    }

    let callbackSlogan = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slogan-animation')
        }
      })
    }
    let callbackLogo = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('logo-animation')
        }
      })
    }
    const observerIngradient = new IntersectionObserver(
      callbackIngradient,
      options
    )
    const observerRetangle = new IntersectionObserver(callbackRetangle, options)
    const observerSlogan = new IntersectionObserver(callbackSlogan, options)
    const observerLogo = new IntersectionObserver(callbackLogo, options)
    observerSlogan.observe(sloganItem)
    observerLogo.observe(logoItem)
    ingradientItems.forEach((target) => observerIngradient.observe(target))
    retangleItems.forEach((target) => observerRetangle.observe(target))
  },
  methods: {
    toggleMenu() {
      const menuBtn = document.querySelector('.menu-btn')
      const sideMenu = document.querySelector('#sidemenu')
      if (!this.onSidemenu) {
        menuBtn.classList.add('active')
        sideMenu.classList.remove('close')
        sideMenu.classList.add('open')
        this.onSidemenu = true
      } else {
        sideMenu.classList.remove('open')
        sideMenu.classList.add('close')
        menuBtn.classList.remove('active')
        setTimeout(() => {
          this.onSidemenu = false
        }, 1500)
      }
    },
    carouselActive(direct) {
      const carouselItems = document.querySelectorAll('.carousel-div')
      console.log('carouselItems', carouselItems)
      if (direct === 'right') {
        // 原本的
        const carousePre = document.querySelector(
          '#carousel-div-' + this.carouselActiveIndex
        )
        this.carouselActiveIndex++
        const carouseNext = document.querySelector(
          '#carousel-div-' + this.carouselActiveIndex
        )
        carousePre.classList.remove('right-to-show')
        carousePre.classList.remove('left-to-show')
        carouseNext.classList.remove('right-to-none')
        carousePre.classList.add('left-to-none')
        carouseNext.classList.add('left-to-show')
      } else {
        const carouseNext = document.querySelector(
          '#carousel-div-' + this.carouselActiveIndex
        )
        this.carouselActiveIndex--
        const carousePre = document.querySelector(
          '#carousel-div-' + this.carouselActiveIndex
        )
        carousePre.classList.remove('left-to-none')
        carousePre.classList.add('right-to-show')
        carouseNext.classList.remove('left-to-show')
        carouseNext.classList.add('right-to-none')
      }
    },
  },
}
</script>
<style lang="scss">
@media (min-aspect-ratio: 16/9) {
  #header-iframe {
    // height: 56.25vw;
  }
}
@media (max-aspect-ratio: 16/9) {
  #header-iframe {
    // width: 177.78vh;
  }
}
#header-iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  // height: 940px;
  height: 100%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.menu-btn {
  position: absolute;
  left: 93.75%;
  right: 4.17%;
  top: 4.98%;
  bottom: 92.88%;
  cursor: pointer;
  transition: all 0.5s ease-out;
}

/* Styling the hamburger lines */
.menu-btn .btn-line:not(:nth-child(3)) {
  width: 30px;
  height: 3px;
  margin: 0 0 7px 0;
  background: #ffffff;
  transition: all 0.5s ease-out;
}
.menu-btn .btn-line:nth-child(3) {
  width: 26px;
  height: 3px;
  margin: 0 0 7px 4px;
  background: #ffffff;
  transition: all 0.5s ease-out;
}
/* Adding transform to the X */
.menu-btn.active {
  transform: rotate(180deg);
}

/* Styling the three lines to make it an X */
.menu-btn.active .btn-line:nth-child(1) {
  transform: rotate(45deg) translate(9px, 5px);
}

.menu-btn.active .btn-line:nth-child(2) {
  opacity: 0;
}

.menu-btn.active .btn-line:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px) scale(1.15);
}
.sidemenu-btn-text {
  display: flex;
  flex-direction: column;
  > span:nth-child(1) {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 1.8px;
    color: #ffffff;
  }
  div > span {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: 3.63636px;
    color: #ffffff;
  }
}
#sidemenu-btn-row {
  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  > div:nth-child(3) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
}
#sidemenu-aboutus {
  width: 380px;
  height: 210px;
  margin-bottom: 35px;
  border-radius: 30px;
  background-image: url('../assets/aboutus-bg.png'),
    linear-gradient(0deg, #26c6d0e6, #26c6d0e6);
}
#sidemenu-aboutus > div {
  display: flex;
  position: relative;
  top: 83.4px;
  left: 41px;
}
#sidemenu-works {
  width: 380px;
  height: 320px;
  border-radius: 30px;
  background-image: url('../assets/works-bg.png'),
    linear-gradient(0deg, #ee6c8ae6, #ee6c8ae6);
}
#sidemenu-works > div {
  display: flex;
  position: relative;
  top: 198px;
  left: 28px;
}
#sidemenu-careers {
  width: 290px;
  height: 430px;
  margin-bottom: 35px;
  border-radius: 30px;
  background-image: url('../assets/careers-bg.png'),
    linear-gradient(0deg, #e6a94ee6, #e6a94ee6);
}
#sidemenu-careers > div {
  display: flex;
  flex-direction: column;
  position: relative;
  top: 240px;
  left: 31px;
}
#sidemenu-insights {
  width: 290px;
  height: 282px;
  margin-bottom: 35px;
  border-radius: 30px;
  background-image: url('../assets/insights-bg.png'),
    linear-gradient(0deg, #26d0a8e6, #26d0a8e6);
}
#sidemenu-insights > div {
  display: flex;
  flex-direction: column;
  position: relative;
  top: 73px;
  left: 31px;
}
#sidemenu-services {
  width: 380px;
  height: 320px;
  margin-bottom: 35px;
  border-radius: 30px;
  background-image: url('../assets/services-bg.png'),
    linear-gradient(0deg, #585880e6, #585880e6);
}
#sidemenu-services > div {
  display: flex;
  position: relative;
  top: 133px;
  left: 48px;
}
#sidemenu-contact {
  width: 380px;
  height: 210px;
  border-radius: 30px;
  background-image: url('../assets/contact-bg.png');
}
#sidemenu-contact > div {
  display: flex;
  position: relative;
  top: 72px;
  left: 48px;
}
#close-btn {
  width: 22px;
  height: 3px;
  background: #ffffff;
  font-size: 0;
  margin: auto 64px auto auto;
  transform: rotate(45deg);
}
#close-btn:hover {
  cursor: pointer;
}
#close-btn::after {
  content: '/';
  display: block;
  width: 22px;
  height: 3px;
  background: #ffffff;
  transform: rotate(-90deg);
}
#sidemenu {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  background-image: url('../assets/Rectangle.png'), url('../assets/BG.png');
  background-repeat: no-repeat;
}
#sidemenu.open {
  -webkit-animation: sidemenu-open 1.5s ease-in-out both;
  animation: sidemenu-open 1.5s ease-in-out both;
}
#sidemenu.close {
  -webkit-animation: sidemenu-close 1.5s ease-in-out;
  animation: sidemenu-close 1.5s ease-in-out;
}
@keyframes sidemenu-open {
  0% {
    width: 0%;
    opacity: 0;
  }

  100% {
    width: 100%;
    opacity: 1;
  }
}
@keyframes sidemenu-close {
  0% {
    width: 100%;
    opacity: 1;
  }

  100% {
    width: 0%;
    opacity: 0;
  }
}
#carousel-index {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  background: linear-gradient(
    135deg,
    transparent 49.5%,
    #26c6d0 49.5%,
    #26c6d0 50.5%,
    transparent 50.5%
  );
}
#carousel-index span:nth-child(1) {
  margin: 0 auto auto 0;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.22222px;
  color: #ffffff;
}
#carousel-index span:nth-child(2) {
  margin: auto 0 0 auto;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.22222px;
  color: #ffffff;
}
#carousel-index span::before {
  content: '0';
}
$n: 5;
@for $i from 1 to $n {
  .carousel-outer .carousel-div:nth-child(#{$i}).right-to-show {
    transition: transform 0.3s linear;
    transform: translateX(($i - 1) * (-100%));
    background: pink;
  }
  .carousel-outer .carousel-div:nth-child(#{$i}).right-to-none {
    transition: transform 0.3s linear;
    transform: translateX(($i + 1) * (100%));
  }
  .carousel-outer .carousel-div:nth-child(#{$i}).left-to-show {
    transition: transform 0.3s linear;
    transform: translateX(($i - 1) * (-100%));
    background: blue;
  }
  .carousel-outer .carousel-div:nth-child(#{$i}).left-to-none {
    transition: transform 0.3s linear;
    transform: translateX(($i + 1) * (-100%));
  }
}
.carousel-outer {
  display: flex;
  overflow: hidden;
}
#section-fifth-row {
  padding: 100px 0;
}
.carousel-div .row {
  padding-bottom: 100px;
}
#section-fifth .row .col-1 {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0%;
  margin: 0%;
}
.section-fourth-content {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1px;
  color: #ffffff;
}
#section-fifth {
  background: url('../assets/lp-bg.png');
  background-size: cover;
  /* border-radius: 0 0 50px; */
}
#section-fourth-content {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 1px;
  color: #262626;
}
#section-fourth-title {
  position: relative;
  z-index: 1;
  margin-top: 6%;
  margin-bottom: 5%;
}
#section-fourth-title::before {
  content: '';
  z-index: -1;
  position: absolute;
  height: 13px;
  top: 105%;
  left: -8%;
  background: url(../assets/green-wave-hr-long.png);
  width: 115%;
}
.ingradient-items-btn {
  border-radius: 50px;
  border: #ffffff 1px solid;
  background: transparent;
  padding: 20px 0;
  margin: 20px auto auto auto;
}
.ingradient-items-btn:hover {
  background: #ffffff;
}
.ingradient-items-btn span {
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2.22222px;
  color: #ffffff;
  margin: 20px 35px;
}
.ingradient-items-btn:hover span {
  color: #26c6d0;
}
#section-white {
  background: linear-gradient(180deg, #e5e5e5 60%, #26c6d0 60%);
}
#section-purple {
  background: linear-gradient(180deg, #26c6d0 40%, #ffffff 40%);
}
.ingradient-items-title-div {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0 20px 0;
}
.ingradient-items-title-span {
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  margin: 20px auto 15px auto;
}
.ingradient-items-content-span {
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 1px;
  color: #ffffff;
}
.ingradient-items-vector-div {
  width: 100px;
  height: 100px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px auto auto auto;
}
.ingradient-items-vector-div:not(:nth-child(3)) img {
  width: auto;
  height: 68px;
}
.ingradient-items-vector-div:hover {
  transform: scale(1.2);
}
.ingradient-items-div {
  width: 369px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* cheese vetor */
.container-animation
  .ingradient-items-div:nth-child(3)
  .ingradient-items-vector-div
  img {
  width: 68px;
  height: auto;
}
#span-description {
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 1px;
  color: #262626;
  width: 71%;
}
.wave-hr {
  height: 13px;
  width: 369px;
}
#img-viedo {
  width: 66.7%;
  height: 37vw;
}
#section-second div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
}
#section-third {
  background: #26c6d0;
}
#section-fourth {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: #ffffff;
}
#white-retangle {
  background: #ffffff;
  width: 93%;
  border-radius: 50px 0 50px 50px;
  margin-right: 0;
  margin-left: auto;
  padding: 65px 220px 99px 69px;
  height: 30%;
  position: relative;
  z-index: 1;
}
#white-retangle::before {
  content: '';
  z-index: -1;
  position: absolute;
  height: 10%;
  top: 50%;
  left: -8%;
  background: #26c6d0;
  width: 8%;
  border-top-left-radius: 50px;
}
#white-retangle .section-title-sapn-black {
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 3.63636px;
  color: #262626;
  text-align: center;
}
#purple-retangle {
  background-image: url('../assets/purple-bg.png');
  background-size: cover;
  width: 90.2%;
  border-radius: 0 50px 50px 50px;
  margin-right: auto;
  margin-left: 0;
  padding: 100px 65px;
  position: relative;
  z-index: 1;
}
#purple-retangle::after {
  content: '';
  z-index: -1;
  position: absolute;
  height: 10%;
  top: 40%;
  right: -11%;
  background: #26c6d0;
  width: 11%;
  border-bottom-right-radius: 50px;
}
#purple-retangle-content-left span:nth-child(2) {
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 8px;
}
#purple-retangle-content-left span:nth-child(3) {
  font-style: italic;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 2px;
  color: #ffffff;
}
#purple-retangle-content-right span {
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 48px;
  letter-spacing: 2px;
  color: #ffffff;
}
#purple-retangle-content-right span span {
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 48px;
  letter-spacing: 2px;
  color: #ffbc58;
}
.section-title-sapn-black {
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 3.63636px;
  color: #262626;
  text-align: center;
}
.img-reddot {
  margin-left: 11px;
}
#white-hr-45deg {
  height: 2px;
  transform: rotate(45deg);
}
.white-hr-top {
  position: absolute;
  border-left: 1px solid #ffffff;
  height: 45px !important;
  left: 50%;
  top: 95.2%;
  transform: translate(-50%, 0%);
}
.white-hr-down {
  position: absolute;
  border-left: 1px solid #ffffff;
  height: 86px !important;
  top: 0%;
  transform: translate(-50%, 0%);
}
#outer-div {
  background: #e5e5e5;
}
#youtube-img {
  position: absolute;
  width: 100vw;
  aspect-ratio: 1440/810;
  height: auto;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
}
#section-bg {
  // border-radius: 0 0 50px 50px;
  // background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
  //   url('../assets/BG.png');
  // background-size: cover;

  height: auto;
  left: 0px;
  top: 0px;
  position: relative;
  width: 100vw;
  aspect-ratio: 1440/810;
}
#sidemenu-btn {
  position: absolute;
  left: 93.75%;
  right: 4.17%;
  top: 4.98%;
  bottom: 92.88%;
  width: 30px;
  height: 22px;
  border: none;
  background: transparent;
}
#sidemenu-btn:focus,
#start-btn:focus,
#viewmore-btn:focus,
.ingradient-items-btn:focus,
.viewproject-btn:focus,
#close-btn:focus {
  outline: none;
}
#sidemenu-btn div div:not(:nth-child(3)) {
  width: 30px;
  height: 3px;
  background: #ffffff;
  margin-bottom: 7px;
}
#sidemenu-btn div div:nth-child(3) {
  width: 26px;
  height: 3px;
  background: #ffffff;
  margin-left: 4px;
}
#start-btn {
  position: absolute;
  /* left: 76.81%; */
  right: 9.31%;
  top: 4%;
  bottom: 92%;
  background: linear-gradient(90deg, #4ee5ea 3.94%, #26d0a8 94.73%);
  border-radius: 24px;
  border: none;
}
.carousel-image {
  position: relative;
}
.carousel-text {
  padding: 0 7%;
}
.viewproject-btn {
  position: absolute;
  background: #26c6d0;
  width: 300px;
  height: 140px;
  border: none;
  position: absolute;
  right: -12%;
  top: 90%;
}
.viewproject-btn span {
  position: absolute;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.22222px;
  text-align: center;
  color: #ffffff;
  left: 11%;
  top: calc(50% - 19px / 2 - 0.5px);
}
#viewmore-btn {
  background: #26c6d0;
  width: 223px;
  height: 86px;
  border: none;
  position: relative;
}
#viewmore-btn span {
  position: absolute;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.22222px;
  text-align: center;
  color: #ffffff;
  left: 11%;
  top: calc(50% - 19px / 2 - 0.5px);
}
.white-hr {
  position: absolute;
  width: 52px;
  left: 65.67%;
  right: 11%;
  top: 49.29%;
  bottom: 49.29%;
  margin: 0;
  border: 0;
  height: 2px;
  background: #ffffff;
}
#start-btn span {
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 1.14286px;
  color: #ffffff;
  margin: 13px 9px 12px 11px;
}
#img-veg {
  position: absolute;
  width: 65px;
  height: 65px;
  left: 50%;
  transform: translate(-50%, 0%);
  top: 76%;
}
.subslogan-text {
  position: absolute;
  width: 129px;
  height: 17px;
  left: 50%;
  transform: translate(-50%, 0%);
  top: 88%;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
}
#img-logo-home {
  position: absolute;
  width: 198.71px;
  height: 88px;
  left: 15.69%;
  top: 17.8%;
}
#img-logo-sidemenu {
  margin-left: 60px;
  margin-top: 47px;
}
#slogan-div {
  position: absolute;
  left: 15.69%;
  top: 34.56%;
  font-size: 38px;
  line-height: 70px;
  letter-spacing: 9.16667px;
  color: #ffffff;
}

.target-element {
  width: 100px;
  height: 100px;
  background: orange;
  margin: 450px auto;
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes wipe-enter {
  0% {
    -webkit-transform: scale(0, 0.025);
    transform: scale(0, 0.025);
  }
  50% {
    -webkit-transform: scale(1, 0.025);
    transform: scale(1, 0.025);
  }
}
@keyframes slide-right-to-none {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes slide-left-to-none {
  0% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes drop-down {
  0% {
    top: 0%;
  }
  60% {
    top: 34.56%;
  }
  80% {
    top: 25%;
  }
  100% {
    top: 34.56%;
  }
}
@keyframes drop-left-down {
  0% {
    left: 0%;
    top: 0%;
  }
  100% {
    top: 17.8%;
    left: 15.69%;
  }
}
.logo-animation {
  -webkit-animation: drop-left-down 1.5s ease-in 1;
  animation: drop-left-down 1.5s ease-in 1;
}
.slogan-animation {
  -webkit-animation: drop-down 1.5s ease-in 1;
  animation: drop-down 1.5s ease-in 1;
}
.vector-animation {
  -webkit-animation: wipe-enter 2s ease-in 1;
  animation: wipe-enter 2s ease-in 1;
}
.retangle-animation {
  -webkit-animation: fade-in 1s ease-in-out both;
  animation: fade-in 1s ease-in-out both;
}
.carousel-title-highlight-green {
  margin-bottom: 20px;
}
.carousel-title-highlight-green span {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.22222px;
  color: #ffffff;
}
.carousel-content-highlight-green {
  margin-bottom: 40px;
}
.carousel-content-highlight-green {
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 3.63636px;
  color: #ffffff;
  position: relative;
  z-index: 1;
}
.carousel-content-highlight-green span::before {
  content: '';
  z-index: -1;
  position: absolute;
  height: 8px;
  top: 23px;
  right: 11%;
  background: #26c6d0;
  width: 92%;
}
.slogan-text-highlight-green {
  position: relative;
  z-index: 1;
}
/* 標語-強調 */
.slogan-text-highlight-green::before {
  content: '';
  z-index: -1;
  position: absolute;
  height: 8px;
  top: 38px;
  right: 0%;
  background: #26c6d0;
  width: 103%;
  opacity: 0.8;
}
.ingradients-viewmore-highlight-yellow {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  position: relative;
  z-index: 1;
  margin: 102px 0 129px 0;
}
/* 標語-強調 */
.ingradients-viewmore-highlight-yellow::before {
  content: '';
  z-index: -1;
  position: absolute;
  height: 10px;
  top: 12px;
  right: -2%;
  background: #ffbc58;
  width: 104%;
}
</style>
