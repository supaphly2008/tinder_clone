"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyAKPiONf8oQr_mVG5HpUMl1h6hdpEqJGuc",
  authDomain: "tinder-clone-b20bd.firebaseapp.com",
  databaseURL: "https://tinder-clone-b20bd.firebaseio.com",
  projectId: "tinder-clone-b20bd",
  storageBucket: "tinder-clone-b20bd.appspot.com",
  messagingSenderId: "1659849569",
  appId: "1:1659849569:web:38e50d7bc9a09a78689320",
  measurementId: "G-N3ZTE95MG0"
}; // Initialize Firebase

var firebaseApp = _firebase.default.initializeApp(firebaseConfig);

var database = firebaseApp.firestore();
var _default = database;
exports.default = _default;