$(function(){
  
  var html = $('#about').html();
  var data = {
    profile_name: "Костенко Ліна Василівна.",
    profile_image_url: "images/foto.jpg",
    profile_image_alt: "Фото Костенко Ліна Василівна.",
    profile_image_title: "Фото Костенко Ліна Василівна",
    profile_poetessa: "Yкраїнська письменниця-шістдесятниця.",
    profile_idea: "Лауреат Шевченківської премії, а також:",
    profile_idea_1: "Почесний професор Києво-Могилянської академії.",
    profile_idea_2: "Почесний доктор Львівського та Чернівецького університетів.",
    profile_idea_3: "Лауреат Шевченківської премії (1987), Премії Антоновичів (1989), премії Петрарки (1994).",
    profile_more_info: "Почесний професор Національного університету «Києво-Могилянська академія».",
    profile_more_info1: "Почесний доктор Львівського національного університету.",
    profile_text: "Більш детальна інформация є ось тут:",
    profile_link: "https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%BD%D0%BA%D0%BE_%D0%9B%D1%96%D0%BD%D0%B0_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%96%D0%B2%D0%BD%D0%B0",
    profile_link_text: "https://vk.com/l.v.kostenko",
    profile_interest: "Цікава інформація:",
    profile_interest_text: "Поема «Берестечко» з ілюстраціями Георгія Якутовича, видана видавництвом «Либідь» 2010 року, мала загальний тираж 14 тис. примірників, а збірка «Гіацинтове сонце», впорядкована Ольгою Богомолець, розійшлася тиражем 5 тис. примірників."
  };
  
  var content = tmpl(html, data);
  $('body').append(content);
 
  
});
