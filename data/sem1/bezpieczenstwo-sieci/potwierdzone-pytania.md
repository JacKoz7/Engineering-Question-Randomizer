# CCNA Security - POTWIERDZONE pytania z egzaminu

Pytania, które realnie pojawiły się na egzaminach BSK (zrzuty od Jacka, kilka różnych zestawów). To najpewniejszy materiał do nauki, bo wiadomo, że padły. Część z nich **nie jest omawiana na wykładach** (pochodzi z zakresu CCNA), więc nie znajdziesz ich w pliku „w wykładach" - dlatego zebrane są tutaj osobno. Poprawne odpowiedzi odwzorowane ze zrzutów (zaznaczenia).

**Legenda:** ✅ = poprawna · ❌ = błędna. Adnotacja „[w wykładzie: ...]" wskazuje, czy temat jest na slajdach.

---

## Spis treści
1. [AAA i kontrola dostępu](#1-aaa-i-kontrola-dostępu)
2. [Hardening, SSH, widoki RBAC, baner, logowanie](#2-hardening-ssh-widoki-rbac-baner-logowanie)
3. [Warstwa 2 (port security, VLAN, STP, DHCP, ARP, CDP)](#3-warstwa-2-port-security-vlan-stp-dhcp-arp-cdp)
4. [Listy ACL](#4-listy-acl)
5. [Kryptografia, VPN, IPsec](#5-kryptografia-vpn-ipsec)
6. [Cisco ASA](#6-cisco-asa)
7. [Ogólne (ataki, testy, OSI)](#7-ogólne-ataki-testy-osi)

---

## 1. AAA i kontrola dostępu

### Z powodu wdrożonych kontroli użytkownik może uzyskać dostęp tylko do serwera z FTP. Który komponent AAA to zapewni?
- ❌ dostępność · niezawodność · ewidencjonowanie · audyt · uwierzytelnianie
- ✅ **autoryzacja**

[w wykładzie: TAK, W2 - autoryzacja = przydzielanie praw dostępu do zasobów]

### Użytkownicy wprowadzają poświadczenia (nazwa użytkownika i hasło), które weryfikuje serwer. Który serwer zapewni taką usługę?
- ❌ AAA · NAT · SNMP · TACACS+ · 802.1X
- ✅ **RADIUS**

[w wykładzie: tylko pojęciowo, W6 wymienia RADIUS/TACACS+ jako serwery AAA]

### Użytkownik nie może uzyskać dostępu do urządzenia z AAA. Jakie polecenie ustali, czy dostęp logowania dla konta jest wyłączony (zablokowany)?
- ✅ **`show aaa local user lockout`**
- ❌ `show running-config` · `show aaa sessions` · `show aaa user`

[w wykładzie: NIE - szczegół AAA z CCNA]

---

## 2. Hardening, SSH, widoki RBAC, baner, logowanie

### Które trzy typy widoków są dostępne podczas konfigurowania dostępu CLI opartego na rolach? *(wybierz 3)*
- ✅ **superview** · ✅ **root view** · ✅ **CLI view**
- ❌ admin view · superuser view · config view

[w wykładzie: tylko wzmianka „RBAC CLI" w W6, bez nazw widoków - de facto z CCNA]

### Student używa `show parser view all`. Exhibit: Views/SuperViews: SHOWVIEW, VERIFYVIEW, REBOOTVIEW oraz `JR-ADMIN *`. Co oznacza `*` obok JR-ADMIN?
- ❌ To jest root view · widok CLI bez poleceń · To jest CLI view
- ✅ **To jest superview**

[w wykładzie: NIE - z CCNA. Gwiazdka `*` = superview]

### Które trzy stwierdzenia opisują ograniczenia w korzystaniu z poziomów uprawnień do autoryzacji poleceń? *(wybierz 3)*
- ✅ **Utworzenie konta wymagającego dostępu do większości, ale nie wszystkich poleceń, bywa żmudne.**
- ✅ **Polecenia na wyższym poziomie uprawnień nie są dostępne dla użytkowników o niższych uprawnieniach.**
- ✅ **Nie ma kontroli dostępu do konkretnych interfejsów na routerze.**
- ❌ Widoki są niezbędne do zdefiniowania poleceń CLI... · Wymagane 16 poziomów... · Użytkownikowi root przypisać każdy poziom

[w wykładzie: NIE - poziomy uprawnień z CCNA]

### Jaki jest domyślny poziom uprawnień kont użytkowników tworzonych na routerach Cisco?
- ✅ **1** ❌ 0 · 2 · 3 · 4 · 5 · 10 · 15

[w wykładzie: NIE - z CCNA]

### Jakie trzy kroki konfiguracyjne muszą być wykonane, aby wdrożyć dostęp SSH do routera? *(wybierz 3)*
- ✅ **ustawić unikalną nazwę hosta** · ✅ **ustawić nazwę domeny IP** · ✅ **dodać konto użytkownika**
- ❌ ustawić unikalne hasło · hasło trybu uprzywilejowanego · hasło na linii konsoli

[w wykładzie: TAK, W6/W12 - SSH wymaga nazwy hosta, domeny IP, konta i kluczy RSA]

### Jaki jest cel używania baneru informacyjnego na urządzeniu sieciowym Cisco?
- ❌ większe bezpieczeństwo przez spowolnienie ataków · okres ciszy · uniemożliwia atakującym dostęp
- ✅ **Może chronić organizację z prawnego punktu widzenia.**

[w wykładzie: NIE - z CCNA]

### Które polecenie zablokuje próby logowania na RouterA na 30 sekund, jeśli w ciągu 10 sekund wystąpią 2 nieudane próby?
- ✅ **`RouterA(config)# login block-for 30 attempts 2 within 10`**
- ❌ `login block-for 10 attempts 2 within 30` · `... 2 attempts 30 within 10` · `... 30 attempts 10 within 2`

[w wykładzie: NIE - z CCNA. Składnia: block-for SEKUNDY attempts PRÓBY within OKNO]

### Które dwie praktyki są związane z zabezpieczaniem funkcji i wydajności systemów operacyjnych routerów? *(wybierz 2)*
- ✅ **Przechowuj kopię obrazów systemu operacyjnego routera.**
- ✅ **Zmniejsz liczbę portów, które mogą być używane do dostępu do routera.**
- ❌ Zainstaluj UPS · Skonfiguruj maks. pamięć · Włącz domyślne usługi routera

[w wykładzie: TAK, W6 - kopie zapasowe, ograniczenie dostępu]

---

## 3. Warstwa 2 (port security, VLAN, STP, DHCP, ARP, CDP)

### Administrator konfiguruje port security. Polityka: w razie naruszenia odrzucać pakiety o nieznanych adresach źródłowych i nie wysyłać żadnych powiadomień. Który tryb naruszenia?
- ❌ off · restrict · shutdown
- ✅ **protect**

[w wykładzie: TAK, W5 - protect odrzuca cicho (bez syslog), restrict odrzuca + syslog, shutdown wyłącza port]

### Exhibit (Fa0/2: telefon IP + PC). Która konfiguracja portu spełni: nikt nie odłączy/podłączy innych urządzeń, port wyłączony przy obcym urządzeniu, MAC telefonu i PC wykryte automatycznie?
- ✅ **`switchport port-security` + `switchport port-security maximum 2` + `switchport port-security mac-address sticky` + `switchport port-security violation restrict`**
- ❌ warianty bez maximum 2 / bez sticky

[w wykładzie: TAK, W5 - maximum, sticky, violation]

### Exhibit (S1 Fa0/12, `port-security maximum 1`, skonfigurowany MAC 000d.bd1b.0245, PC1 ma 000d.bd1b.05ae). Co nastąpi, gdy podłączony jest PC1?
- ✅ **Ramki z PC1 spowodują natychmiastowe wyłączenie interfejsu i wpis dziennika.** (domyślny tryb shutdown)
- ❌ odrzucone bez dziennika · przekazane · przesłane dalej

[w wykładzie: TAK, W5 - domyślny tryb naruszenia = shutdown (err-disabled)]

### Jaki plan ograniczania skutków jest najlepszy, aby udaremnić atak DoS powodujący przepełnienie tablic adresów MAC?
- ✅ **Włącz zabezpieczenia portu (port security).**
- ❌ Wyłącz DTP/VTP/STP · umieść porty w nieużywanej VLAN · Włącz BPDU

[w wykładzie: TAK, W5]

### Który atak warstwy 2 spowoduje, że uprawnieni użytkownicy nie otrzymają prawidłowych adresów IP?
- ✅ **zagłodzenie DHCP (DHCP starvation)**
- ❌ fałszowanie IP/ARP/MAC · zalewanie adresami MAC

[w wykładzie: TAK, W5]

### Które dwa rozwiązania Cisco pomagają zapobiegać atakom zagłodzenia DHCP? *(wybierz 2)*
- ✅ **Zabezpieczenie portu** · ✅ **DHCP Snooping**
- ❌ IP Source Guard · Web Security · Dynamiczna inspekcja ARP

[w wykładzie: TAK, W5]

### Administrator konfiguruje DAI poleceniem `ip arp inspection validate src-mac`. Jaki jest cel?
- ✅ **Sprawdza źródłowy adres MAC w nagłówku Ethernet z adresem MAC nadawcy w treści ARP.**
- ❌ z tablicą MAC · z ACL dla ARP · z docelowym MAC w treści ARP

[w wykładzie: TAK, W5.11 - `ip arp inspection validate {src-mac|dst-mac|ip}`]

### Który atak warstwy 2 spowoduje, że użytkownicy komunikują się z fałszywą bramą domyślną?
- ✅ **fałszowanie ARP (ARP spoofing)**
- ❌ fałszowanie IP/MAC · zalewanie MAC · zagłodzenie DHCP

[w wykładzie: TAK, W5 - ARP spoofing = atakujący podaje swój MAC jako bramę (MITM)]

### Jakiemu rodzajowi ataku z przeskokiem VLAN można zapobiec, wyznaczając nieużywaną sieć VLAN jako natywną?
- ✅ **podwójne znakowanie VLAN (double-tagging)**
- ❌ fałszowanie DTP/DHCP · zagłodzenie DHCP

[w wykładzie: TAK, W5]

### Jakie są trzy techniki ograniczania ataków VLAN? *(wybierz 3)*
- ✅ **Wyłączyć DTP** · ✅ **Włącz trunki ręcznie** · ✅ **Zmień VLAN natywny na nieużywany**
- ❌ BPDU guard · Source guard · prywatne VLAN

[w wykładzie: TAK, W5]

### Jakie są zalecane najlepsze praktyki przy korzystaniu z natywnej sieci VLAN?
- ✅ **Przypisz ją do nieużywanej sieci VLAN.**
- ❌ port security · wyłącz DTP · ten sam numer co VLAN zarządzania

[w wykładzie: TAK, W5]

### Jakie korzyści w zakresie bezpieczeństwa daje włączenie BPDU guard na interfejsach PortFast?
- ✅ **zapobieganie dodaniu obcych przełączników do sieci**
- ❌ ochrona przed pętlami L2 · egzekwowanie lokalizacji mostów głównych · przepełnienie bufora

[w wykładzie: TAK, W5]

### Na których portach przełącznika należy włączyć PortFast, aby zwiększyć stabilność STP?
- ✅ **wszystkie porty urządzeń końcowych**
- ❌ tylko zaufane · trunk nie-główne · do sąsiedniego przełącznika

[w wykładzie: TAK, W5]

### Która usługa jest domyślnie włączona na przełączniku i może ujawnić znaczące informacje o routerze?
- ✅ **CDP**
- ❌ FTP · LLDP · HTTP · TFTP · NLDP

[w wykładzie: TAK, W5/W11 - CDP domyślnie włączony, rekonesans]

### Która usługa NIE jest domyślnie włączona na przełączniku i może ujawnić informacje o routerze?
- ✅ **LLDP**
- ❌ FTP · HTTP · TFTP · CDP · NLDP

[w wykładzie: TAK - to wariant; LLDP domyślnie wyłączony, CDP włączony]

### Która warstwa OSI jest uważana za najsłabsze ogniwo w systemie sieciowym?
- ✅ **warstwa 2**
- ❌ 1 · 3 · 4 · 5 · 6 · 7

[w wykładzie: TAK, W5 - „warstwa 2 najsłabsze ogniwo, jej naruszenie wpływa na wyższe"]

### Administrator musi zagwarantować, że lokalne komputery nie mogą komunikować się ze sobą za pomocą ping. Które ustawienia pomogą?
- ✅ **ustawienia zapory**
- ❌ systemu plików · interfejsów · adresów MAC · AAA

[w wykładzie: pośrednio - zapora/ACL filtruje ICMP]

---

## 4. Listy ACL

### Technik użył `ip access-group 101 in`. W jakim celu?
- ✅ **aby zastosować rozszerzoną ACL na interfejsie**
- ❌ wyświetlić ruch · dostęp administracyjny · ruch zarządzania

[w wykładzie: TAK, W7-W8]

### Technik użył `40 deny host 192.168.23.8`. W jakim celu?
- ✅ **aby utworzyć wpis w numerowanej ACL**
- ❌ zastosować do wszystkich interfejsów · usunąć ACL · dostęp administracyjny · ruch zarządzania · wyświetlić ruch

[w wykładzie: TAK, W7 - numer 40 = standardowa ACL numerowana]

### Które dwa słowa kluczowe zastępują maskę blankietową lub parę adres + maska blankietowa? *(wybierz 2)*
- ✅ **host** (= 0.0.0.0) · ✅ **any** (= 255.255.255.255)
- ❌ most · some · gt · all · lt

[w wykładzie: TAK, W7]

### Które dwie informacje są wymagane podczas tworzenia standardowej ACL? *(wybierz 2)*
- ✅ **adres źródłowy i maska odwrotna** · ✅ **numer listy dostępu od 1 do 99**
- ❌ maska podsieci i odwrotna · adres docelowy i odwrotna · numer 100-199

[w wykładzie: TAK, W7]

### Standardowa ACL ma zezwolić tylko urządzeniom z sieci podłączonej do R2 G0/0 na dostęp do sieci R1. Które polecenie?
- ✅ **`access-list 1 permit 192.168.10.96 0.0.0.31`**
- ❌ `... 192.168.10.0 0.0.0.255` · `... 192.168.10.128 0.0.0.63` · `... 192.168.10.0 0.0.0.63`

[w wykładzie: TAK, W7 - dobór maski blankietowej do podsieci]

### Administrator pisze standardową ACL odmawiającą ruchu z sieci 172.16.0.0/16, ale zezwalającą na resztę. Które dwa polecenia? *(wybierz 2)*
- ✅ **`access-list 95 deny 172.16.0.0 0.0.255.255`** · ✅ **`access-list 95 permit any`**
- ❌ `deny any` · `95 172.16.0.0 255.255.255.255` · `95 host 172.16.0.0`

[w wykładzie: TAK, W7 - trzeba dodać permit, inaczej niejawne deny utnie wszystko]

### Który wpis ACE odmawia ruchu IP z podsieci 172.23.16.0/20?
- ✅ **`5 deny 172.23.16.0 0.0.15.255`**
- ❌ `30 deny 172.23.16.0 0.0.15.255` · `15 deny ...` · `5 deny 172.23.16.0 0.0.255.255`

[w wykładzie: TAK, W7 - /20 → maska blankietowa 0.0.15.255]

### Która maska blankietowa pasuje do sieci od 172.16.0.0 do 172.19.0.0?
- ✅ **0.3.255.255**
- ❌ 0.0.0.251 · 0.252.255.255 · 0.0.255.255 · 0.0.3.255

[w wykładzie: TAK, W7 - cztery sieci /16 (16,17,18,19) → 0.3.255.255]

### ACL skonfigurowana na R1: odmowa ruchu z 172.16.4.0/24 do 172.16.3.0/24, reszta dozwolona. Ta standardowa ACL zastosowana wychodząco na Fa0/0. Jaki wniosek?
- ✅ **Cały ruch zostanie zablokowany, a nie tylko ruch z 172.16.4.0/24.** (standardowa ACL filtruje po źródle, więc obetnie cały ruch wychodzący)
- ❌ należy zastosować rozszerzoną · tylko .4.0 zablokowany · stosować na wyjściu wszystkich interfejsów · zastosować na wejściu Fa0/0

[w wykładzie: TAK, W7 - standardowa ACL = tylko źródło, umieszczać blisko celu]

### Jaki efekt dałoby `Router1(config-ext-nacl)# permit tcp 172.16.4.0 0.0.0.255 any eq www` dla ruchu przychodzącego na f0/0?
- ✅ **Ruch z 172.16.4.0/24 jest dozwolony do wszystkich miejsc docelowych na porcie TCP 80.**
- ❌ polecenie odrzucone · cały ruch z .4.0 dozwolony · cały TCP dozwolony

[w wykładzie: TAK, W8 - rozszerzona ACL, www = port 80]

### Administrator konfiguruje ACL. Które stwierdzenie opisuje wynik (exhibit z ruchem SSH/Telnet)?
- ✅ **Połączenie SSH jest dozwolone ze stacji 192.168.25.18 do urządzenia 172.16.45.16.**
- ❌ warianty Telnet / odwrotne kierunki

[w wykładzie: TAK, W8]

### Inter-VLAN: standardowa ACL ma zezwolić PC z VLAN10 na drukowanie na P1, a zablokować VLAN20. Na którym interfejsie i w którym kierunku? *(wybierz 2)*
- ✅ **R1 Gi0/1.12** · ✅ **outbound**
- ❌ R1 S0/0/0 · R2 Gi0/1.20 · inbound · R2 S0/0/1

[w wykładzie: TAK, W7 - standardowa ACL blisko celu (subinterfejs VLAN drukarki), wychodząco]

### Przyjrzyj się ilustracji. Administrator (192.168.11.10) potrzebuje dostępu do zarządzania R1. Jaki najlepszy typ ACL i umieszczenie?
- ✅ **standardowa ACL na wejściu linii vty R1**
- ❌ standardowa na WAN R2 · na wyjściu R2 S0/0/0 · rozszerzona na wejściu R2 S0/0/0

[w wykładzie: TAK, W8 - dostęp administracyjny = `access-class` na vty]

### Które dwa kroki zapewniają najszybszy sposób całkowitego usunięcia ACL z routera? *(wybierz 2)*
- ✅ **Użyj `no access-list`, aby usunąć całą ACL.** · ✅ **Usuń odwołanie (in/out) do ACL z interfejsu.**
- ❌ jeden krok = usunięcie ACE · `no` + numer sekwencyjny każdego ACE · kopiuj do edytora i dodaj `no` · zmień numer ACL

[w wykładzie: TAK, W8]

---

## 5. Kryptografia, VPN, IPsec

### Co jest negocjowane podczas ustanawiania tunelu IPsec między dwoma hostami w fazie 1 IKE?
- ✅ **Polityka ISAKMP SA**
- ❌ zestawy transformacji · klucze RSA · grupy DH

[w wykładzie: TAK, W11 - faza 1 IKE = bezpieczny kanał, polityka ISAKMP/IKE SA]

### Które trzy stwierdzenia opisują ramy protokołu IPsec? *(wybierz 3)*
- ✅ **ESP zapewnia szyfrowanie, uwierzytelnianie i integralność.** · ✅ **AH używa protokołu IP 51.** · ✅ **AH zapewnia integralność i uwierzytelnianie.**
- ❌ ESP używa UDP 50 · AH zapewnia szyfrowanie i integralność · ESP wymaga zarówno uwierzytelniania, jak i szyfrowania

[w wykładzie: TAK, W11 - AH = IP 51 (integralność+uwierzytelnianie, bez szyfrowania), ESP = IP 50 (wszystko)]

### Który zestaw transformacji (transform set) zapewnia najlepszą ochronę?
- ✅ **`crypto ipsec transform-set ESP-DES-SHA esp-aes-256 esp-sha-hmac`**
- ❌ esp-aes esp-des esp-sha-hmac · esp-3des esp-sha-hmac · esp-des esp-sha-hmac

[w wykładzie: TAK, W11 - AES-256 najsilniejszy]

### Jakie trzy protokoły muszą być dozwolone przez firmową zaporę, aby ustanowić site-to-site IPsec? *(wybierz 3)*
- ✅ **ESP** · ✅ **AH** · ✅ **ISAKMP**
- ❌ HTTPS · PTP · NTP

[w wykładzie: TAK, W11 - ESP (IP 50), AH (IP 51), ISAKMP/IKE (UDP 500)]

### Które stwierdzenie opisuje funkcję VPN typu site-to-site?
- ✅ **Hosty wewnętrzne wysyłają normalne, nieenkapsulowane pakiety** (szyfrowanie robią bramy VPN).
- ❌ VPN niezdefiniowane statycznie · klient VPN na każdym hoście · hosty włączają/wyłączają VPN

[w wykładzie: TAK, W11 - site-to-site szyfruje tylko między bramami, hosty nieświadome]

### Które rozwiązanie Cisco VPN zapewnia ograniczony dostęp do wewnętrznych zasobów przez Cisco ASA i tylko przez przeglądarkę?
- ✅ **Clientless SSL VPN**
- ❌ IPSec · klient VPN SSL · Clientless IPSec · SSL · klient VPN IPSec

[w wykładzie: TAK, W11/W13 - clientless SSL = przeglądarka, bez klienta]

---

## 6. Cisco ASA

### Administrator tworzy trzy strefy (A, B, C) w ASA. Ruch A→C jest odrzucany, ruch B→C jest odrzucany. Jaki możliwy scenariusz?
- ✅ **A – DMZ, B – Na zewnątrz, C – Wewnątrz**
- ❌ A-DMZ, B-wewnątrz, C-na zewnątrz · A-na zewnątrz, B-wewnątrz, C-DMZ · A-wewnątrz, B-DMZ, C-na zewnątrz

[w wykładzie: TAK, W12 - ruch z niższego poziomu do wyższego (inside=C) domyślnie blokowany]

### Które dwa stwierdzenia o standardowych ACL ASA są prawdziwe? *(wybierz 2)*
- ✅ **Identyfikują tylko docelowy adres IP.** · ✅ **(zwykle używane tylko dla tras OSPF)**
- ❌ Są stosowane w interfejsach do sterowania ruchem · najczęstszy typ · źródłowy i docelowy MAC

[w wykładzie: TAK, W13]

### Jaki typ szyfrowania jest stosowany do współdzielonych kluczy i haseł, gdy opcja głównego hasła jest włączona przez ASDM dla ASA?
- ✅ **AES**
- ❌ 3DES · klucz publiczny/prywatny · TKIP · 128-bitowy RSA

[w wykładzie: TAK, W12 - „password encryption aes" dla głównego hasła ASA]

---

## 7. Ogólne (ataki, testy, OSI)

### Dział IT zgłasza, że firmowy serwer WWW rejestruje nadzwyczaj wysoką liczbę zapytań z wielu różnych lokalizacji jednocześnie. Z jakim atakiem mamy do czynienia?
- ✅ **DDoS**
- ❌ socjotechniczny · adware · phishing · spyware

[w wykładzie: TAK, W2/W9 - rozproszony DoS z wielu źródeł]

### Jaki jest cel testów penetracyjnych sieci?
- ✅ **określenie wykonalności i potencjalnych konsekwencji udanego ataku**
- ❌ wykrywanie potencjalnych słabości systemów (to skanowanie podatności) · wykrywanie zmian konfiguracji · słabych haseł

[w wykładzie: TAK, W1/W2 - uwaga na dystraktor „wykrywanie słabości" = to skanowanie podatności, nie pentest]

### Projektowanie ZPF: który krok obejmuje dyktowanie liczby urządzeń między strefami i urządzeń nadmiarowych (redundancja)?
- ✅ **zaprojektować infrastrukturę fizyczną**
- ❌ określić strefy · identyfikować podzbiory · ustalać zasady między strefami

[w wykładzie: TAK, W10 - projektowanie fizycznej infrastruktury to krok trudny, po określeniu stref i polityk]

### Które obszary bezpieczeństwa routera należy zachować, aby zabezpieczyć router brzegowy? *(wybierz 2)*
- ✅ **bezpieczeństwo zdalnego dostępu** · ✅ **bezpieczeństwo fizyczne**
- ❌ zabezpieczanie programowe routera · izolacja strefy · zabezpieczenia flasha

[w wykładzie: TAK, W6 - kroki zabezpieczania routera (fizyczny dostęp, bezpieczny dostęp zdalny)]
