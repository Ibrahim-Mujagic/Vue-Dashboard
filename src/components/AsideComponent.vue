<script>
import { store } from "../data/store";
export default {
  name: "AsideComponent",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <aside>
    <div class="aside-header">
      <div class="title">
        <h5>-Dashboard-</h5>
      </div>
      <div class="active-user">
        <div class="user-image">
          <img :src="store.getImg('user-image.jpeg')" alt="Mario Rossi" />
        </div>
        <div class="user-name">
          <p>Welcome</p>
          <h5>Mario Rossi</h5>
        </div>
      </div>
    </div>
    <!-- FINE ASIDE HEADER -->
    <div class="aside-body">
      <div class="title">
        <h5>GENERAL</h5>
        <div class="separator"></div>
        <div class="body-content">
          <ul>
            <li>
              <div class="link-name">
                <i class="fa-solid fa-house"></i>
                <a href="#">Home</a>
              </div>
              <i class="fa-solid fa-chevron-up"></i>
            </li>
            <li>
              <div class="link-name">
                <i class="fa-solid fa-map"></i>
                <a href="#">Maps</a>
              </div>
              <i class="fa-solid fa-chevron-up"></i>
            </li>
            <li>
              <div class="link-name">
                <i class="fa-solid fa-gear"></i>
                <a href="#">Config</a>
              </div>
              <i class="fa-solid fa-chevron-up"></i>
            </li>
            <li>
              <div class="link-name">
                <i class="fa-solid fa-envelope"></i>
                <a href="#">Contacts</a>
              </div>
              <i class="fa-solid fa-chevron-up"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
@use "../style/_vars" as *;

aside {
  background-color: $aside-bg;
  color: #fff;
  padding: 13px;
  .title {
    margin-bottom: 10px;
  }
  .active-user {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    .user-image {
      img {
        width: 60px;
        border-radius: 50%;
        border: 2px solid #fff;
      }
    }
  }
  // FINE ASIDE HEADER
  .aside-body {
    .title {
      .separator {
        margin: 10px 0px;
        height: 3px;
        width: 100%;
        background: #fff;
      }
    }
    .body-content {
      ul {
        list-style: none;
        li {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          &:hover {
            cursor: pointer;
            text-shadow: 0px 0px 1px #fff;
          }
          .link-name {
            display: flex;
            align-items: center;
            gap: 10px;
            a {
              color: #fff;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
}
</style>
