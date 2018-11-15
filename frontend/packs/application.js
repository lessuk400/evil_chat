import "init";
import "components/page/page";
import "components/auth-form/auth-form";
import "components/chat/chat";
import "emojionearea/dist/emojionearea.min"
import "emojionearea/dist/emojionearea.css"
import 'jquery-textcomplete/dist/jquery.textcomplete.min'

let App = App || {};

import Rails from 'rails-ujs'

window.App  = App;

Rails.start();