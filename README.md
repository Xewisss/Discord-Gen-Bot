Bot Code

.create [hizmet adı] - seçtiğiniz adla bir .txt dosyası oluşturur. Kullanıcılar artık bu hizmetin bir hesabını oluşturabilecekler.
.add [kimlik bilgileri][hizmet adı] - bu, yazdığınız hesabı seçtiğiniz hizmetin .txt dosyasına ekleyecektir.
.gen [hizmet adı] - bu, söz konusu hizmetin ilk hesabını alıp dms'ye gönderecektir
.restock [hizmet adı] - bu, tüm sunucuya hizmetin bir yönetici tarafından yeniden stoklandığını belirten bir bildirim gönderecektir.

Nasıl çalışır?

Öncelikle "| .create SERVICENAME" kullanarak bir servis oluşturmanız gerekiyor, bu bir SERVICENAME.txt dosyası oluşturacaktır, bunu manuel olarak da oluşturabilirsiniz.
Daha sonra manuel olarak veya "add mail:password SERVICENAME" komutuyla hesapları buna ekleyin; bu, SERVICENAME.txt dosyasının ilk satırını alıp kullanıcının DM'sine gönderecektir. Kaynak kodunda, if (message.channel.id === "Channel_ID") satırındaki "Kanal Kimliği"ni, botun çalışmasını istediğiniz kanalın kimliğiyle değiştirmeyi unutmayın.

Support

Mail: xewisbusiness@gmail.com
Discord: xewisss
Discord Server : https://discord.gg/NJRHD44hpb

Botun Prefix

( . )

Değiştirmeniz Gereken Yerler

İndex.js Dosyasını Düzenle Yapıp 

28. Satırdaki Channel_ID | Gen Yapacağı Kanal ID Giriniz
163. Satırdaki "TOKEN" | Bot Tokeninizi Giriniz

🌟 Star Vermeyi Unutma Güzellik
