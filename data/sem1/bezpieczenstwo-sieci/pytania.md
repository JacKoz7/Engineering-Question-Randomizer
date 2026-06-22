# CCNA Security - pytania, na które odpowiedzi SĄ w wykładach (PL + EN)

W tym pliku zebrano 269 pytań egzaminacyjnych CCNA Security v2.0 (z testów, z których wykładowca czerpie pytania na egzamin), przetłumaczonych na polski wraz z oryginalnym brzmieniem angielskim. Są to **pytania, na które odpowiedzi znajdują się w materiale z wykładów**, uporządkowane według wykładów (W1–W13). Każde pytanie ma zaznaczoną poprawną odpowiedź, a pytania z exhibitami mają osadzone obrazy.

**Legenda:** ✅ = poprawna · ❌ = błędna · 🖼️ = pytanie ze zdjęciem · *EN:* = oryginał angielski.

---

## Spis treści

- [Wykład 1: Wstęp i współczesne zagrożenia bezpieczeństwa](#wykład-1-wstęp-i-współczesne-zagrożenia-bezpieczeństwa) — 18 pyt.
- [Wykład 2: Polityka bezpieczeństwa i kontrola dostępu (AAA)](#wykład-2-polityka-bezpieczeństwa-kontrola-dostępu-i-aaa) — 13 pyt.
- [Wykłady 3 i 6: Zabezpieczanie urządzeń sieciowych](#wykłady-3-i-6-zabezpieczanie-urządzeń-sieciowych) — 15 pyt.
- [Wykłady 4–5: Bezpieczeństwo sieci LAN (warstwa 2)](#wykłady-45-bezpieczeństwo-sieci-lan-warstwa-2) — 47 pyt.
- [Wykłady 7–10: Listy ACL i zapory sieciowe](#wykłady-710-listy-acl-i-zapory-sieciowe) — 49 pyt.
- [Wykład 11: Kryptografia i VPN](#wykład-11-kryptografia-i-vpn) — 67 pyt.
- [Wykłady 12–13: Cisco ASA](#wykłady-1213-cisco-asa) — 54 pyt.
- [Różne: pytania ogólnosieciowe (z egzaminów zbiorczych)](#różne-pytania-ogólnosieciowe-z-egzaminów-zbiorczych) — 6 pyt.

## Wykład 1: Wstęp i współczesne zagrożenia bezpieczeństwa

Odpowiada rozdziałowi 1 CCNA Security (zagrożenia, ataki, malware, podstawy bezpieczeństwa).

### 1.1 Jaką metodą można ograniczyć skanowanie pingiem (ping sweep)?
- ❌ stosowanie szyfrowanych lub haszowanych protokołów uwierzytelniania
- ❌ instalacja oprogramowania antywirusowego na hostach
- ❌ wdrożenie oprogramowania antysniffer na wszystkich urządzeniach sieciowych
- ✅ **blokowanie pakietów ICMP echo i echo-reply na brzegu sieci**

*EN:* What method can be used to mitigate ping sweeps? → *blocking ICMP echo and echo-replies at the network edge*

### 1.3 Które stwierdzenie trafnie opisuje ewolucję zagrożeń bezpieczeństwa sieci?
- ✅ **Zagrożenia wewnętrzne mogą wyrządzić nawet większe szkody niż zewnętrzne.**
- ❌ Zagrożenia stały się mniej wyrafinowane, a wiedza techniczna potrzebna napastnikowi wzrosła.
- ❌ Pierwsi użytkownicy Internetu często angażowali się w działania szkodzące innym.
- ❌ Architekci Internetu od początku planowali bezpieczeństwo sieci.

*EN:* Which statement accurately characterizes the evolution of threats to network security? → *Internal threats can cause even greater damage than external threats.*

### 1.5 Co zwykle motywuje cyberprzestępców do atakowania sieci (w porównaniu z haktywistami czy hakerami sponsorowanymi przez państwo)?
- ❌ status wśród rówieśników
- ❌ poszukiwanie sławy
- ✅ **korzyść finansowa**
- ❌ powody polityczne

*EN:* What commonly motivates cybercriminals…? → *financial gain*

### 1.8 Napastnik używa laptopa jako fałszywego punktu dostępowego (rogue AP), by przechwycić cały ruch sieciowy wybranego użytkownika. Jaki to typ ataku?
- ❌ wykorzystanie zaufania (trust exploitation)
- ❌ przepełnienie bufora
- ✅ **człowiek pośrodku (man in the middle)**
- ❌ przekierowanie portów (port redirection)

*EN:* …Which type of attack is this? → *man in the middle*

### 1.9 Który obszar funkcjonalny frameworka Cisco NFP odpowiada za pakiety generowane przez urządzenie, niezbędne do działania sieci (np. wymiana ARP, ogłoszenia routingu)?
- ❌ płaszczyzna danych (data plane)
- ✅ **płaszczyzna sterowania (control plane)**
- ❌ płaszczyzna zarządzania (management plane)
- ❌ płaszczyzna przekazywania (forwarding plane)

*EN:* What functional area of the Cisco NFP framework is responsible for device-generated packets…? → *control plane*

### 1.10 Jakie są trzy składniki bezpieczeństwa informacji zapewniane przez kryptografię? *(wybierz 3)*
- ❌ zapobieganie zagrożeniom
- ❌ autoryzacja
- ✅ **poufność (confidentiality)**
- ❌ środki zaradcze
- ✅ **integralność (integrity)**
- ✅ **dostępność (availability)**

*EN:* What are the three components of information security ensured by cryptography? → *confidentiality; integrity; availability*

### 1.11 Jaka jest podstawowa metoda ograniczania szkodliwego oprogramowania (malware)?
- ❌ stosowanie szyfrowanych lub haszowanych protokołów uwierzytelniania
- ✅ **instalacja oprogramowania antywirusowego na wszystkich hostach**
- ❌ blokowanie ICMP echo i echo-reply na brzegu sieci
- ❌ wdrożenie systemów IPS w całej sieci

*EN:* What is the primary method for mitigating malware? → *installing antivirus software on all hosts*

### 1.15 Jak przeprowadzany jest atak smurf?
- ❌ przez wysłanie wielu pakietów, by przepełnić bufor pamięci celu
- ✅ **przez wysłanie wielu żądań ICMP na adresy rozgłoszeniowe (directed broadcast) ze sfałszowanego adresu źródłowego w tej samej sieci**
- ❌ przez wysłanie wielu pakietów TCP SYN do celu ze sfałszowanego adresu źródłowego
- ❌ przez wysłanie echo request w pakiecie IP większym niż maksymalny rozmiar 65 535 bajtów

*EN:* How is a smurf attack conducted? → *by sending a large number of ICMP requests to directed broadcast addresses from a spoofed source address*

### 1.17 Jaki jest pierwszy krok w procesie zarządzania ryzykiem wg ISO/IEC?
- ❌ Stwórz politykę bezpieczeństwa.
- ✅ **Przeprowadź ocenę ryzyka (risk assessment).**
- ❌ Zinwentaryzuj i sklasyfikuj zasoby IT.
- ❌ Stwórz model zarządzania bezpieczeństwem (governance).

*EN:* What is the first step in the risk management process specified by ISO/IEC? → *Conduct a risk assessment.*

### 1.21 Niezadowolony pracownik używa Wiresharka, by odkryć nazwy użytkowników i hasła administracyjne Telnet. Jaki to typ ataku sieciowego?
- ❌ wykorzystanie zaufania
- ❌ odmowa usługi (DoS)
- ✅ **rozpoznanie (reconnaissance)**
- ❌ przekierowanie portów

*EN:* …What type of network attack does this describe? → *reconnaissance*

### 1.22 Jaka jest rola systemu IPS?
- ❌ łączenie globalnych informacji o zagrożeniach z urządzeniami Cisco
- ❌ uwierzytelnianie i walidacja ruchu
- ✅ **wykrywanie i blokowanie ataków w czasie rzeczywistym**
- ❌ filtrowanie szkodliwych stron WWW

*EN:* What is the role of an IPS? → *detecting and blocking of attacks in real time*

### 1.24 Czym jest ping sweep (skanowanie pingiem)?
- ❌ technika skanowania badająca zakres portów TCP/UDP hosta w celu wykrycia usług nasłuchujących
- ❌ aplikacja umożliwiająca przechwytywanie wszystkich pakietów w sieci LAN
- ❌ protokół zapytań i odpowiedzi identyfikujący informacje o domenie
- ✅ **technika skanowania sieci wskazująca aktywne hosty w zakresie adresów IP**

*EN:* What is a ping sweep? → *a network scanning technique that indicates the live hosts in a range of IP addresses*

### 1.25 Uzupełnij: Jako dedykowane narzędzie bezpieczeństwa, system zapobiegania włamaniom (intrusion ______ system) zapewnia wykrywanie i blokowanie ataków w czasie rzeczywistym.
- ❌ Detection (to byłby IDS — tylko wykrywa, nie blokuje)
- ✅ **Prevention (Intrusion Prevention System — IPS)**
- ❌ Protection
- ❌ Recovery

*EN (fill in the blank):* …an intrusion **Prevention** system can provide detection and blocking of attacks in real time.

### 1.27 Kiedy UDP jest preferowany zamiast TCP?
- ❌ gdy klient wysyła segment do serwera
- ❌ gdy wszystkie dane muszą być w pełni odebrane, zanim cokolwiek będzie użyteczne
- ✅ **gdy aplikacja toleruje pewną utratę danych podczas transmisji**
- ❌ gdy segmenty muszą docierać w ściśle określonej kolejności

*EN:* When is UDP preferred to TCP? → *when an application can tolerate some loss of data during transmission*

### 1.31 Która technologia antyspoofingowa ogranicza ataki DoS?
- ❌ szyfrowanie
- ❌ skanowanie portów
- ❌ infrastruktura przełączana
- ✅ **port-security na przełączniku (switch port-security)**
- ❌ silne uwierzytelnianie

*EN:* Which antispoofing technology is used to mitigate DoS attacks? → *switch port-security*

### 1.33 Które dwie opcje mogą ograniczyć informacje uzyskiwane ze skanowania portów? *(wybierz 2)*
- ✅ **system zapobiegania włamaniom (IPS)**
- ✅ **firewall**
- ❌ uwierzytelnianie
- ❌ hasła
- ❌ szyfrowanie

*EN:* Which two options can limit the information discovered from port scanning? → *intrusion prevention system; firewall*

### 1.36 Który środek bezpieczeństwa najlepiej ogranicza skuteczność ataku rozpoznawczego z wnętrza sieci kampusowej?
- ❌ Wprowadzenie ograniczeń stosowania komunikatów ICMP echo-reply.
- ❌ Wdrożenie firewalla na brzegu sieci.
- ❌ Wdrożenie list dostępu na routerze brzegowym.
- ✅ **Wdrożenie szyfrowania ruchu wrażliwego.**

*EN:* Which security measure best limits a reconnaissance attack from within a campus area network? → *Implement encryption for sensitive traffic.*

### 1.37 Do którego tematu najlepiej nadaje się sesja podnosząca świadomość bezpieczeństwa (security awareness)?
- ❌ wymagane kroki przy zgłaszaniu naruszenia bezpieczeństwa
- ❌ główny cel i zastosowanie polityk haseł
- ❌ kroki konfiguracji automatycznych aktualizacji Windows
- ✅ **jak zainstalować i utrzymywać ochronę antywirusową**

*EN:* A security awareness session is best suited for which topic? → *how to install and maintain virus protection*

---

## Wykład 2: Polityka bezpieczeństwa i kontrola dostępu (AAA)

Łączy rozdziały 3 (AAA, TACACS+/RADIUS, autoryzacja) i 11 (polityka bezpieczeństwa, zarządzanie, narzędzia testowe) CCNA — wykład 2 obejmował kontrolę dostępu (DAC/MAC/RBAC), autoryzację i politykę bezpieczeństwa.

### 2.6 Dzięki wdrożonym zabezpieczeniom użytkownik może uzyskać dostęp do serwera tylko przez FTP. Który komponent AAA to realizuje?
- ❌ rozliczanie (accounting)
- ❌ dostępność
- ❌ audyt
- ✅ **autoryzacja (authorization)**
- ❌ uwierzytelnianie

*EN:* Which AAA component accomplishes this? → *authorization* (określa, do jakich zasobów użytkownik ma dostęp)

### 2.12 Która cecha jest ważnym aspektem autoryzacji w urządzeniu z AAA?
- ❌ Funkcja autoryzacji zwiększa wydajność sieci.
- ✅ **Dostęp użytkownika jest ograniczony do określonych usług.**
- ❌ Działania użytkownika są rejestrowane do audytów.
- ❌ Użytkownik musi zostać zidentyfikowany przed przyznaniem dostępu.

*EN:* Which characteristic is an important aspect of authorization? → *User access is restricted to certain services*

### 2.16 Który komponent AAA pozwala administratorowi śledzić osoby uzyskujące dostęp do zasobów i zmiany w tych zasobach?
- ✅ **rozliczanie (accounting)**
- ❌ dostępność
- ❌ uwierzytelnianie
- ❌ autoryzacja

*EN:* Which component of AAA allows tracking individuals and changes…? → *accounting*

### 2.24 Kiedy w procesie AAA realizowana jest autoryzacja?
- ❌ natychmiast po wysłaniu informacji uwierzytelniających do serwera centralnego
- ❌ natychmiast po ustaleniu, do jakich zasobów użytkownik ma dostęp
- ✅ **natychmiast po pomyślnym uwierzytelnieniu względem źródła danych AAA**
- ❌ natychmiast po otrzymaniu przez accounting/audyt szczegółowych raportów

*EN:* During the AAA process, when will authorization be implemented? → *immediately after successful authentication against an AAA data source*

### 2.25 Jaki jest cel rozliczania AAA (accounting)?
- ❌ udowodnienie, że użytkownicy są tym, za kogo się podają
- ❌ ustalenie, jakie operacje użytkownik może wykonać
- ❌ ustalenie, do jakich zasobów użytkownik ma dostęp
- ✅ **zbieranie i raportowanie danych o użyciu**

*EN:* What is the purpose of AAA accounting? → *to collect and report data usage*

### 2.39 W sieci z AAA użytkownik wydaje `configure terminal` z trybu uprzywilejowanego. Jaka funkcja AAA działa, jeśli polecenie zostanie odrzucone?
- ✅ **autoryzacja (authorization)**
- ❌ uwierzytelnianie
- ❌ audyt
- ❌ rozliczanie

*EN:* What AAA function is at work if this command is rejected? → *authorization* (użytkownik nie jest uprawniony do wykonania polecenia)

### 2.48 Użytkownik loguje się do sieci firmowej przez VPN. Która część procesu AAA rejestruje, że dany użytkownik wykonał konkretną operację o określonej dacie i godzinie?
- ❌ uwierzytelnianie
- ✅ **rozliczanie (accounting)**
- ❌ dostęp
- ❌ autoryzacja

*EN:* Which part of the AAA process records that a user performed a specific operation at a particular date and time? → *accounting*

### 2.51 Jak skanowanie sieci (network scanning) pomaga ocenić operations security?
- ❌ Może symulować ataki ze złośliwych źródeł.
- ❌ Może logować nietypową aktywność.
- ✅ **Może wykrywać otwarte porty TCP w systemach sieciowych.**
- ❌ Może wykrywać słabe lub puste hasła.

*EN:* How does network scanning help assess operations security? → *It can detect open TCP ports on network systems*

### 2.54 Jaki jest cel kampanii świadomości bezpieczeństwa (security awareness campaign)?
- ❌ nauczyć umiejętności, by pracownicy mogli wykonywać zadania bezpieczeństwa
- ✅ **skupić uwagę pracowników na kwestiach bezpieczeństwa**
- ❌ zapewnić program szkoleniowy prowadzący do formalnego stopnia
- ❌ zintegrować wszystkie umiejętności bezpieczeństwa w jeden zbiór wiedzy

*EN:* What is the purpose of a security awareness campaign? → *to focus the attention of employees on security issues*

### 2.55 Jaki jest cel testów penetracyjnych sieci?
- ❌ wykrywanie zmian konfiguracji w systemach
- ❌ wykrywanie potencjalnych słabości w systemach
- ✅ **określenie wykonalności i potencjalnych konsekwencji udanego ataku**
- ❌ wykrywanie słabych haseł

*EN:* What is the goal of network penetration testing? → *determining the feasibility and the potential consequences of a successful attack*

### 2.63 Który program bezpieczeństwa jest skierowany do wszystkich poziomów organizacji, w tym użytkowników i kadry zarządzającej?
- ❌ programy edukacyjne ze stopniem
- ❌ programy certyfikacyjne
- ✅ **kampanie świadomości (awareness campaigns)**
- ❌ kursy szkoleniowe z wdrażania firewalla

*EN:* Which security program is aimed at all levels of an organization…? → *awareness campaigns*

### 2.64 Co wdraża administracja, by poinstruować użytkowników, jak skutecznie i bezpiecznie prowadzić działalność w organizacji?
- ✅ **program świadomości bezpieczeństwa (security awareness program)**
- ❌ polityka nadrzędna (governing policy)
- ❌ konsekwencje niezgodności
- ❌ polityka techniczna

*EN:* What is implemented…to instruct end users in how to effectively conduct business safely…? → *security awareness program*

### 2.65 Jakie są dwa główne komponenty programu świadomości bezpieczeństwa? *(wybierz 2)*
- ❌ polityka techniczna
- ❌ dokumenty procedur
- ✅ **kampanie świadomości**
- ❌ dokumenty wytycznych
- ✅ **edukacja i szkolenia**

*EN:* What are two major components of a security awareness program? → *awareness campaigns; education and training*

---

## Wykłady 3 i 6: Zabezpieczanie urządzeń sieciowych

Odpowiada rozdziałowi 2 CCNA. Wykład 3 = zabezpieczenia fizyczne, VoIP, dostęp, sieci bezprzewodowe; Wykład 6 = hardening routera, poziomy bezpieczeństwa, uwierzytelnianie OSPF (MD5/SHA). Pytania CCNA dotyczą głównie hardeningu CLI (SSH, privilege levels, syslog, AutoSecure) i uwierzytelniania routingu.

### 3-6.4 Co dzieje się po wygenerowaniu kluczy RSA na routerze Cisco w ramach przygotowania do bezpiecznego zarządzania?
- ❌ Klucze trzeba wyzerować (zeroize), by zresetować SSH przed konfiguracją innych parametrów.
- ❌ Wszystkie porty vty są automatycznie konfigurowane do SSH.
- ❌ Trzeba podać rozmiar klucza ogólnego przeznaczenia poleceniem `crypto key generate rsa general-keys modulus`.
- ✅ **Wygenerowane klucze mogą być użyte przez SSH (SSH włącza się automatycznie).**

*EN:* What occurs after RSA keys are generated…? → *The generated keys can be used by SSH*

### 3-6.7 Administrator zdefiniował lokalne konto z hasłem secret na R1 do SSH. Które trzy dodatkowe kroki są wymagane, by R1 akceptował tylko szyfrowane połączenia SSH? *(wybierz 3)*
- ✅ **Włącz przychodzące sesje SSH na vty.**
- ❌ Wygeneruj dwukierunkowe klucze pre-shared.
- ❌ Skonfiguruj DNS na routerze.
- ✅ **Skonfiguruj nazwę domeny IP na routerze.**
- ❌ Włącz przychodzące sesje Telnet na vty.
- ✅ **Wygeneruj klucze SSH.**

*EN:* …Which three additional steps are required…? → *Enable inbound vty SSH sessions; Configure the IP domain name; Generate the SSH keys*

### 3-6.8 Który zestaw poleceń tworzy użytkownika `admin`, haszuje hasło (MD5) i wymusza dostęp do lokalnej bazy użytkowników przy logowaniu na konsoli?
- ❌ `username admin password Admin01pa55` / `line con 0` / `login local`
- ✅ **`username admin secret Admin01pa55` / `line con 0` / `login local`**
- ❌ `username admin Admin01pa55 encr md5` / `line con 0` / `login local`
- ❌ `username admin password Admin01pa55` / `line con 0` / `login`
- ❌ `username admin secret Admin01pa55` / `line con 0` / `login`

*EN:* …Which set of commands…? → *username admin **secret** … + line con 0 + login local* (`secret` = hasło haszowane, `login local` = baza lokalna)

### 3-6.11 Które trzy obszary bezpieczeństwa routera trzeba utrzymywać, by zabezpieczyć router brzegowy na obrzeżu sieci? *(wybierz 3)*
- ❌ bezpieczeństwo dostępu zdalnego
- ❌ izolacja stref
- ✅ **hardening routera (router hardening)**
- ✅ **bezpieczeństwo systemu operacyjnego**
- ❌ bezpieczeństwo flash
- ✅ **bezpieczeństwo fizyczne**

*EN:* Which three areas of router security must be maintained…? → *router hardening; operating system security; physical security*

### 3-6.12 Która zalecana praktyka zapobiega odzyskiwaniu hasła (password recovery) przez napastników w celu uzyskania trybu uprzywilejowanego EXEC?
- ✅ **Umieszczenie routera w bezpiecznym, zamkniętym pomieszczeniu dostępnym tylko dla upoważnionych osób.**
- ❌ Skonfigurowanie bezpiecznej kontroli administracyjnej.
- ❌ Przechowywanie bezpiecznej kopii obrazu IOS i pliku konfiguracji.
- ❌ Wyposażenie routera w maksymalną ilość pamięci.
- ❌ Wyłączenie wszystkich nieużywanych portów i interfejsów.

*EN:* Which recommended security practice prevents password recovery…? → *Locate the router in a secure locked room* (procedura password recovery wymaga dostępu fizycznego)

### 3-6.16 Jakie są dwa powody włączania uwierzytelniania protokołu routingu OSPF? *(wybierz 2)*
- ❌ zapewnienie bezpieczeństwa danych przez szyfrowanie
- ❌ szybsza zbieżność (convergence) sieci
- ❌ bardziej efektywny routing
- ✅ **zapobieganie przekierowaniu ruchu i jego odrzucaniu**
- ✅ **zapobieganie przekierowaniu ruchu do niezabezpieczonego łącza**

*EN:* What are two reasons to enable OSPF routing protocol authentication? → *to prevent data traffic from being redirected and then discarded; to prevent redirection of data traffic to an insecure link*

### 3-6.18 Które trzy funkcje zapewnia usługa logowania syslog? *(wybierz 3)*
- ❌ ustawianie rozmiaru bufora logowania
- ✅ **określanie, gdzie przechowywane są przechwycone informacje**
- ✅ **gromadzenie informacji o zdarzeniach**
- ❌ uwierzytelnianie i szyfrowanie danych wysyłanych przez sieć
- ✅ **rozróżnianie informacji do przechwycenia od tych do zignorowania**
- ❌ zachowywanie komunikatów po restarcie routera

*EN:* Which three functions are provided by the syslog logging service? → *specifying where captured information is stored; gathering logging information; distinguishing between info to capture and ignore*

### 3-6.23 Które dwa polecenia wymuszają uwierzytelnianie hasłem `1A2b3C` na wszystkich interfejsach OSPF w obszarze szkieletowym (backbone)? *(wybierz 2)*
- ✅ **`area 0 authentication message-digest`**
- ✅ **`ip ospf message-digest-key 1 md5 1A2b3C`**
- ❌ `username OSPF password 1A2b3C`
- ❌ `enable password 1A2b3C`
- ❌ `area 1 authentication message-digest`

*EN:* …Which two commands…? → *area 0 authentication message-digest; ip ospf message-digest-key 1 md5 1A2b3C* (Area 0 = backbone)

### 3-6.24 Jaki jest cel poleceń `ip ospf message-digest-key key md5 password` oraz `area area-id authentication message-digest`?
- ✅ **globalna konfiguracja uwierzytelniania OSPF MD5 na routerze**
- ❌ włączenie uwierzytelniania OSPF MD5 per interfejs
- ❌ ułatwienie nawiązywania sąsiedztw (adjacencies)
- ❌ szyfrowanie aktualizacji routingu OSPF

*EN:* What is the purpose of using the ip ospf message-digest-key … and the area … authentication message-digest commands? → *to configure OSPF MD5 authentication globally on the router*

### 3-6.26 Która implementacja zabezpieczeń zapewni ochronę płaszczyzny sterowania (control plane) urządzenia sieciowego?
- ❌ szyfrowanie połączeń dostępu zdalnego
- ❌ AAA do uwierzytelniania dostępu zarządzania
- ✅ **uwierzytelnianie protokołu routingu**
- ❌ NTP dla spójnych znaczników czasu w logach

*EN:* Which security implementation will provide control plane protection? → *routing protocol authentication*

### 3-6.31 Przy bezpiecznym zarządzaniu siecią — które dwie usługi/funkcje płaszczyzny zarządzania routera Cisco należy skonfigurować? *(wybierz 2)*
- ✅ **bezpieczne loginy i hasła**
- ✅ **bezpieczny dostęp SSH**
- ❌ Cisco Express Forwarding
- ❌ filtrowanie ruchu listami ACL
- ❌ inspekcja firewalla Cisco IOS

*EN:* …two services or functions of the management plane…? → *secure logins and passwords; secure SSH access* (CEF, ACL, firewall to płaszczyzna forwardingu)

### 3-6.32 Inżynier wydał polecenia `login local` i `transport input ssh` na liniach vty. Które trzy dodatkowe działania konfiguracyjne dokończą konfigurację SSH? *(wybierz 3)*
- ✅ **Utworzyć poprawną lokalną bazę nazw użytkowników i haseł.**
- ✅ **Wygenerować asymetryczne klucze RSA.**
- ❌ Ustawić poziomy uprawnień użytkowników.
- ❌ Skonfigurować dostęp CLI oparty na rolach.
- ✅ **Skonfigurować poprawną nazwę domeny IP.**
- ❌ Ręcznie włączyć SSH po wygenerowaniu kluczy RSA.

*EN:* …What three additional configuration actions…? → *create local username/password database; generate RSA keys; configure IP domain name* (SSH włącza się automatycznie po wygenerowaniu kluczy)

### 3-6.33 Które dwie praktyki wiążą się z zabezpieczaniem funkcji i wydajności systemów operacyjnych routerów? *(wybierz 2)*
- ❌ Zainstaluj UPS.
- ✅ **Trzymaj bezpieczną kopię obrazów systemu routera.**
- ✅ **Skonfiguruj router z maksymalną możliwą ilością pamięci.**
- ❌ Wyłącz domyślne, niepotrzebne usługi routera.
- ❌ Zmniejsz liczbę portów do dostępu do routera.

*EN:* Which two practices are associated with securing the features and performance of router operating systems? → *Keep a secure copy of router OS images; Configure the router with the maximum amount of memory* (uwaga: dwie pozostałe to praktyki bezpieczeństwa, ale nie dot. „funkcji i wydajności OS")

### 3-6.35 Które dwie opcje zapewniają bezpieczny dostęp zdalny do routera? *(wybierz 2)*
- ❌ HTTP
- ✅ **HTTPS**
- ❌ CHAP
- ❌ Telnet
- ✅ **SSH**

*EN:* Which two options provide secure remote access to a router? → *HTTPS; SSH*

### 3-6.47 Jaka jest bezpieczna opcja konfiguracji dostępu zdalnego do urządzenia sieciowego?
- ❌ Skonfiguruj 802.1x.
- ❌ Skonfiguruj Telnet.
- ✅ **Skonfiguruj SSH.**
- ❌ Skonfiguruj ACL i zastosuj na liniach VTY.

*EN:* What is a secure configuration option for remote access to a network device? → *Configure SSH* (szyfrowane połączenie zarządzające, zamiennik Telnet)

---

## Wykłady 4–5: Bezpieczeństwo sieci LAN (warstwa 2)

Odpowiada rozdziałowi 6 CCNA. Wykład 4a = podstawy warstwy 2 (MAC, przełącznik); Wykład 5 = ataki i ochrona L2 (port security, VLAN hopping, PVLAN, DHCP snooping, DAI, STP, CDP).

### 4-5.1 Który typ ataku VLAN-hopping można zapobiec, wyznaczając nieużywany VLAN jako natywny (native VLAN)?
- ❌ DTP spoofing
- ❌ DHCP spoofing
- ✅ **VLAN double-tagging (podwójne tagowanie)**
- ❌ DHCP starvation

*EN:* Which type of VLAN-hopping attack may be prevented by designating an unused VLAN as the native VLAN? → *VLAN double-tagging*

### 4-5.5 Który protokół wyłączyć, by ograniczyć ataki VLAN hopping?
- ❌ STP
- ❌ ARP
- ❌ CDP
- ✅ **DTP (Dynamic Trunking Protocol)**

*EN:* What protocol should be disabled to help mitigate VLAN hopping attacks? → *DTP*

### 4-5.6 Który atak sieciowy tworzy DoS dla klientów, uniemożliwiając im uzyskanie dzierżawy DHCP?
- ❌ DHCP spoofing
- ❌ atak na tablicę CAM
- ❌ IP address spoofing
- ✅ **DHCP starvation (głodzenie DHCP)**

*EN:* What network attack seeks to create a DoS for clients by preventing them from obtaining a DHCP lease? → *DHCP starvation* (wysyła wiele DHCPDISCOVER, wyczerpuje pulę adresów)

### 4-5.7 Do jakiego jedynego typu portu port izolowany może przekazywać ruch w prywatnym VLAN (PVLAN)?
- ❌ port community
- ✅ **port promiscuous**
- ❌ inny port izolowany
- ❌ dowolny port dostępowy w tym samym PVLAN

*EN:* What is the only type of port that an isolated port can forward traffic to on a private VLAN? → *a promiscuous port*

### 4-5.8 Który środek zaradczy skutecznie zapobiega atakom przepełnienia tablicy CAM?
- ❌ DHCP snooping
- ❌ Dynamic ARP Inspection
- ❌ IP source guard
- ✅ **port security**

*EN:* What security countermeasure is effective for preventing CAM table overflow attacks? → *port security*

### 4-5.9 W jakiej sytuacji administrator najprawdopodobniej wdroży root guard?
- ❌ na wszystkich portach (używanych i nieużywanych)
- ❌ na wszystkich portach łączących się z urządzeniem warstwy 3
- ❌ na wszystkich portach łączących się z hostami
- ❌ na wszystkich portach łączących się z innym przełącznikiem
- ✅ **na wszystkich portach łączących się z innym przełącznikiem, który nie jest root bridge**

*EN:* In what situation would a network administrator most likely implement root guard? → *on all switch ports that connect to another switch that is not the root bridge*

### 4-5.10 🖼️ Interfejs Fa0/2 na S1 ma `switchport port-security mac-address 0023.189d.6456`, podłączono stację. Dlaczego Fa0/2 jest wyłączony (shutdown)?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/CCNA-Security-Chapter-6-Exam-Answer-v2-001-1.png)

- ❌ Połączenie S1–PC1 jest kablem crossover.
- ❌ Fa0/24 ma ten sam MAC co Fa0/2.
- ❌ S1 ma `switchport port-security aging`.
- ✅ **MAC adres PC1 podłączonego do Fa0/2 to nie skonfigurowany MAC adres.**

*EN:* …reason that the Fa0/2 interface is shutdown? → *The MAC address of PC1 is not the configured MAC address*

### 4-5.11 Dwa urządzenia podłączone do tego samego przełącznika muszą być całkowicie odizolowane. Która funkcja zapewni tę izolację?
- ✅ **PVLAN Edge (porty chronione / protected ports)**
- ❌ DTP
- ❌ SPAN
- ❌ BPDU guard

*EN:* Which Cisco switch security feature will provide this isolation? → *PVLAN Edge*

### 4-5.13 Które ulepszenie spanning-tree zapobiega zmianie topologii, blokując port, który odbiera lepszy (superior) BPDU?
- ❌ BPDU filter
- ❌ PortFast
- ❌ BPDU guard
- ✅ **root guard**

*EN:* Which spanning-tree enhancement prevents the topology from changing by blocking a port that receives a superior BPDU? → *root guard*

### 4-5.17 Którą funkcję włączyć, by zapobiec przepełnieniu tablicy MAC przełącznika przez napastnika?
- ❌ root guard
- ✅ **port security**
- ❌ storm control
- ❌ BPDU filter

*EN:* Which security feature should be enabled to prevent overflowing the MAC address table? → *port security*

### 4-5.18 Jakie jest zachowanie przełącznika w wyniku udanego ataku na tablicę CAM?
- ✅ **Przełącznik przekazuje wszystkie odebrane ramki do wszystkich pozostałych portów.**
- ❌ Przełącznik odrzuca wszystkie odebrane ramki.
- ❌ Interfejsy przełącznika przechodzą w stan error-disabled.
- ❌ Przełącznik się wyłącza.

*EN:* What is the behavior of a switch as a result of a successful CAM table attack? → *The switch will forward all received frames to all other ports* (działa jak hub — napastnik przechwytuje ruch)

### 4-5.19 Jaki dodatkowy środek bezpieczeństwa musi być włączony razem z IP Source Guard, by chronić przed spoofingiem adresów?
- ❌ port security
- ❌ BPDU Guard
- ❌ root guard
- ✅ **DHCP snooping**

*EN:* What additional security measure must be enabled along with IP Source Guard? → *DHCP snooping* (IPSG używa bazy powiązań zbudowanej przez DHCP snooping)

### 4-5.20 Która technika zapobiega podawaniu przez fałszywe serwery błędnych parametrów IP klientom?
- ✅ **włączenie DHCP snooping**
- ❌ implementacja port security
- ❌ port-security na portach brzegowych
- ❌ wyłączenie CDP na portach brzegowych

*EN:* Which mitigation technique would prevent rogue servers from providing false IP configuration parameters? → *turning on DHCP snooping*

### 4-5.21 Jakie są trzy techniki ograniczania ataków VLAN hopping? *(wybierz 3)*
- ✅ **Ustaw native VLAN na nieużywany VLAN.**
- ✅ **Wyłącz DTP.**
- ❌ Włącz Source Guard.
- ✅ **Włącz trunking ręcznie.**
- ❌ Włącz BPDU guard.
- ❌ Użyj prywatnych VLAN.

*EN:* What are three techniques for mitigating VLAN hopping attacks? → *Set the native VLAN to an unused VLAN; Disable DTP; Enable trunking manually*

### 4-5.22 Jakie dwa mechanizmy wykorzystuje Dynamic ARP Inspection (DAI) do walidacji pakietów ARP? *(wybierz 2)*
- ✅ **powiązania MAC-adres → IP-adres**
- ❌ RARP
- ✅ **ARP ACL**
- ❌ IP ACL
- ❌ Source Guard

*EN:* What two mechanisms are used by Dynamic ARP inspection to validate ARP packets? → *MAC-address-to-IP-address bindings; ARP ACLs*

### 4-5.23 Który mechanizm stabilności STP zapobiega temu, by fałszywy przełącznik został przełącznikiem root?
- ❌ Source Guard
- ❌ BPDU guard
- ✅ **root guard**
- ❌ loop guard

*EN:* Which STP stability mechanism is used to prevent a rogue switch from becoming the root switch? → *root guard*

### 4-5.25 Jaką korzyść bezpieczeństwa daje włączenie BPDU guard na interfejsach z PortFast?
- ❌ wymuszanie umiejscowienia root bridge
- ❌ zapobieganie atakom przepełnienia bufora
- ✅ **zapobieganie dodawaniu fałszywych przełączników do sieci**
- ❌ ochrona przed pętlami warstwy 2

*EN:* What security benefit is gained from enabling BPDU guard on PortFast enabled interfaces? → *preventing rogue switches from being added to the network*

### 4-5.26 Uzupełnij: DHCP ______ to technika zapobiegająca podawaniu przez fałszywe serwery DHCP błędnych parametrów konfiguracji IP.
- ✅ **snooping (DHCP snooping)**
- ❌ spoofing
- ❌ relay
- ❌ filtering

*EN (fill in the blank):* DHCP **snooping** is a mitigation technique to prevent rogue DHCP servers…

### 4-5.27 🖼️ PC1 wysłał ramkę do PC3 (którego brak w tablicy MAC). Co przełącznik zrobi z ramką?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/i275394v1n1_207267.jpg)

- ❌ Odrzuci ramkę.
- ❌ Przekaże ramkę tylko na port 2.
- ✅ **Przekaże ramkę do wszystkich portów oprócz portu 4.**
- ❌ Przekaże ramkę do wszystkich portów.
- ❌ Przekaże ramkę tylko na porty 1 i 3.

*EN:* What will the switch do with the frame? → *forward the frame to all ports except port 4* (MAC PC3 nieznany → flooding, oprócz portu wejściowego)

### 4-5.28 🖼️ Na podstawie `show monitor session 1` — jak SPAN będzie działać na przełączniku?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/i272118v1n1_28957.jpg)

- ✅ **Cały ruch odebrany na VLAN 10 lub wysłany z VLAN 20 jest przekazywany do FastEthernet 0/1.**
- ❌ Ruch native VLAN wysłany z VLAN 10 lub odebrany na VLAN 20…
- ❌ Cały ruch wysłany z VLAN 10 lub odebrany na VLAN 20…
- ❌ Ruch native VLAN odebrany na VLAN 10 lub wysłany z VLAN 20…

*EN:* …how will SPAN operate on the switch? → *All traffic received on VLAN 10 or transmitted from VLAN 20 is forwarded to FastEthernet 0/1*

### 4-5.29 Na które porty port izolowany w PVLAN może przekazywać ruch?
- ❌ inne porty izolowane i community
- ✅ **tylko porty promiscuous**
- ❌ wszystkie porty w tej samej community
- ❌ tylko porty izolowane

*EN:* What ports can receive forwarded traffic from an isolated port…? → *only promiscuous ports*

### 4-5.30 Na których portach włączyć PortFast, by poprawić stabilność STP?
- ❌ tylko porty wybrane jako designated
- ❌ tylko porty łączące się z sąsiednim przełącznikiem
- ❌ wszystkie porty trunk niebędące root
- ✅ **wszystkie porty użytkowników końcowych (end-user)**

*EN:* On what switch ports should PortFast be enabled? → *all end-user ports*

### 4-5.31 Która cecha polityki bezpieczeństwa definiuje cel standardów (standards)?
- ❌ szczegóły krok po kroku dot. metod wdrażania przełączników
- ❌ zalecane najlepsze praktyki rozmieszczenia przełączników
- ✅ **wymagane kroki zapewniające spójną konfigurację wszystkich przełączników**
- ❌ lista sugestii, jak szybko skonfigurować przełączniki

*EN:* Which security policy characteristic defines the purpose of standards? → *required steps to ensure consistent configuration*

### 4-5.32 Na którym porcie należy skonfigurować Dynamic ARP Inspection (DAI)?
- ✅ **na porcie uplink do innego przełącznika**
- ❌ na dowolnym porcie z wyłączonym DHCP snooping
- ❌ na dowolnym porcie niezaufanym
- ❌ tylko na portach dostępowych

*EN:* On which port should DAI be configured? → *an uplink port to another switch* (zaufany interfejs; porty dostępowe są niezaufane)

### 4-5.33 🖼️ Na podstawie wyniku `show port-security interface fa 0/2` — jakie trzy wnioski? *(wybierz 3)*
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/Q53.jpg)

- ✅ **Port jest obecnie aktywny (up).**
- ❌ Port jest skonfigurowany jako trunk.
- ❌ Brak urządzenia podłączonego do portu.
- ❌ Wykryto trzy naruszenia bezpieczeństwa.
- ✅ **Tryb portu to access mode.**
- ✅ **Naruszenia spowodują natychmiastowe wyłączenie portu (shutdown).**

*EN:* …what can be concluded from the output? → *This port is currently up; switch port mode is access; security violations will cause this port to shut down immediately*

### 4-5.34 Który atak sieciowy ogranicza włączenie BPDU guard?
- ❌ MAC address spoofing
- ✅ **fałszywe przełączniki (rogue switches) w sieci**
- ❌ ataki przepełnienia tablicy CAM
- ❌ fałszywe serwery DHCP

*EN:* Which network attack is mitigated by enabling BPDU guard? → *rogue switches on a network*

### 4-5.35 🖼️ Polecenie `ip verify source` zastosowano na niezaufanych interfejsach. Jaki typ ataku jest ograniczany?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/2022-07-11_113131.jpg)

- ❌ DHCP spoofing
- ❌ DHCP starvation
- ❌ STP manipulation
- ✅ **MAC i IP address spoofing**

*EN:* …Which type of attack is mitigated by using this configuration? → *MAC and IP address spoofing* (IP Source Guard)

### 4-5.36 🖼️ Administrator konfiguruje routing inter-VLAN. Jaki jest brakujący parametr (znak zapytania)?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/CCNA2-v7-Modules-1-4-Switching-Concepts-VLANs-and-InterVLAN-Routing-Exam-Answers-74.png)

- ❌ Identyfikuje subinterfejs.
- ✅ **Identyfikuje numer VLAN.**
- ❌ Identyfikuje numer native VLAN.
- ❌ Identyfikuje typ enkapsulacji.
- ❌ Identyfikuje liczbę dozwolonych hostów.

*EN:* …What is the missing parameter…? → *It identifies the VLAN number* (`encapsulation dot1q 7` — 7 = numer VLAN)

### 4-5.37 Jaki atak warstwy 2 jest ograniczany przez wyłączenie DTP?
- ✅ **VLAN hopping**
- ❌ DHCP spoofing
- ❌ ARP poisoning
- ❌ ARP spoofing

*EN:* What Layer 2 attack is mitigated by disabling Dynamic Trunking Protocol? → *VLAN hopping*

### 4-5.38 Jak można ograniczyć ataki DHCP spoofing?
- ❌ wyłączając negocjacje DTP na portach nietrunkowych
- ❌ wdrażając port security
- ❌ stosując `ip verify source` na portach niezaufanych
- ✅ **wdrażając DHCP snooping na portach zaufanych**

*EN:* How can DHCP spoofing attacks be mitigated? → *by implementing DHCP snooping on trusted ports*

### 4-5.39 Co pomoże ograniczyć zagrożenie przejęcia roli root bridge przez fałszywy przełącznik w domenie STP?
- ❌ Source Guard
- ✅ **root guard**
- ❌ BPDU guard
- ❌ loop guard

*EN:* What can help mitigate a rogue switch becoming the root bridge? → *root guard*

### 4-5.41 Które dwie najlepsze praktyki warstwy 2 pomogą zapobiec atakom VLAN hopping? *(wybierz 2)*
- ✅ **Zmień numer native VLAN na inny niż wszystkie VLAN użytkowników i inny niż VLAN 1.**
- ❌ Zmień VLAN zarządzania na osobny, niedostępny dla zwykłych użytkowników.
- ❌ Skonfiguruj statycznie wszystkie porty do hostów jako trunk.
- ✅ **Wyłącz autonegocjację DTP na portach użytkowników.**
- ❌ Używaj SSH do całego zdalnego zarządzania.

*EN:* Which two Layer 2 security best practices would help prevent VLAN hopping…? → *Change the native VLAN to a distinct unused VLAN (not VLAN 1); Disable DTP autonegotiation on end-user ports*

### 4-5.43 Jakie działanie ogranicza zagrożenie atakami VLAN hopping?
- ✅ **Wyłączenie automatycznej negocjacji trunkingu.**
- ❌ Wyłączenie VTP.
- ❌ Włączenie PortFast na wszystkich portach.
- ❌ Skonfigurowanie wszystkich portów jako członków VLAN 1.

*EN:* What action can help mitigate VLAN hopping attacks? → *Disable automatic trunking negotiation*

### 4-5.44 Port Fa0/24 był trunkiem, teraz ma podłączyć hosta. Jak go ponownie skonfigurować?
- ✅ **Użyć `switchport mode access` w trybie konfiguracji interfejsu.**
- ❌ Wpisać `switchport nonegotiate`.
- ❌ Wyłączyć i ponownie włączyć interfejs, by wrócił do domyślnego.
- ❌ Użyć `switchport access vlan <numer>`, by usunąć port z trunka.

*EN:* How should the network administrator reconfigure switch port Fa0/24? → *Use the switchport mode access command*

### 4-5.45 Tablica ARP w przełączniku mapuje które dwa typy adresów?
- ✅ **adres warstwy 3 do adresu warstwy 2**
- ❌ adres warstwy 3 do adresu warstwy 4
- ❌ adres warstwy 4 do adresu warstwy 2
- ❌ adres warstwy 2 do adresu warstwy 4

*EN:* The ARP table in a switch maps which two types of address together? → *Layer 3 address to a Layer 2 address* (IP → MAC)

### 4-5.46 Który plan ograniczania jest najlepszy przeciw atakowi DoS powodującemu przepełnienie bufora przełącznika?
- ✅ **Włączyć port security.**
- ❌ Wyłączyć STP.
- ❌ Wyłączyć DTP.
- ❌ Umieścić nieużywane porty w nieużywanym VLAN.

*EN:* What mitigation plan is best for thwarting a DoS attack that is creating a switch buffer overflow? → *Enable port security*

### 4-5.47 Która metoda ograniczania jest skuteczna przeciw atakom przepełnienia tablicy CAM?
- ✅ **port security**
- ❌ DHCP snooping
- ❌ Dynamic ARP Inspection
- ❌ Source Guard

*EN:* What mitigation method is effective against CAM table overflow attacks? → *port security*

### 4-5.48 Które polecenie najlepiej zastosować na nieużywanym porcie przełącznika wg najlepszych praktyk Cisco?
- ✅ **`shutdown`**
- ❌ `ip dhcp snooping`
- ❌ `switchport port-security mac-address sticky`
- ❌ `switchport port-security violation shutdown`
- ❌ `switchport port-security mac-address sticky mac-address`

*EN:* Which command would be best to use on an unused switch port…? → *shutdown* (Cisco zaleca wyłączanie nieużywanych portów)

### 4-5.49 Które stwierdzenie opisuje funkcję narzędzia SPAN w przełączniku Cisco?
- ❌ Zapewnia połączenie między VLAN na wielu przełącznikach.
- ❌ To bezpieczny kanał do wysyłania logów do serwera syslog.
- ✅ **Kopiuje ruch z jednego portu przełącznika i wysyła go na inny port podłączony do urządzenia monitorującego.**
- ❌ Wspiera operację SNMP trap.

*EN:* Which statement describes the function of the SPAN tool? → *It copies the traffic from one switch port and sends it to another switch port connected to a monitoring device* (mirroring)

### 4-5.50 Które dwa porty mogą wysyłać i odbierać ruch warstwy 2 z portu community w PVLAN? *(wybierz 2)*
- ❌ porty community należące do innych community
- ✅ **porty promiscuous**
- ❌ porty izolowane w tej samej community
- ❌ porty chronione PVLAN edge
- ✅ **porty community należące do tej samej community**

*EN:* Which two ports can send and receive Layer 2 traffic from a community port? → *promiscuous ports; community ports belonging to the same community*

### 4-5.51 Które dwie funkcje skonfigurować na portach użytkowników, by zapobiec atakom manipulacji STP? *(wybierz 2)*
- ❌ root guard
- ❌ UDLD
- ✅ **BPDU guard**
- ❌ loop guard
- ✅ **PortFast**

*EN:* Which two features should be configured on end-user ports to prevent STP manipulation attacks? → *BPDU guard; PortFast*

### 4-5.52 Która procedura jest zalecana do ograniczenia ryzyka ARP spoofing?
- ✅ **Włączyć DHCP snooping na wybranych VLAN.**
- ❌ Włączyć IP Source Guard na portach zaufanych.
- ❌ Włączyć DAI na VLAN zarządzania.
- ❌ Włączyć port security globalnie.

*EN:* Which procedure is recommended to mitigate the chances of ARP spoofing? → *Enable DHCP snooping on selected VLANs* (DAI wymaga tabeli DHCP snooping)

### 4-5.53 Na których portach włączyć BPDU guard, by poprawić stabilność STP?
- ❌ tylko porty łączące się z sąsiednim przełącznikiem
- ✅ **wszystkie porty z włączonym PortFast**
- ❌ wszystkie porty trunk niebędące root
- ❌ tylko porty wybrane jako designated

*EN:* On what switch ports should BPDU guard be enabled? → *all PortFast-enabled ports*

### 4-5.54 Jaki jest domyślny, prekonfigurowany interfejs dla sieci zewnętrznej (outside) na Cisco ASA 5505?
- ✅ **VLAN 2**
- ❌ Ethernet 0/2
- ❌ Ethernet 0/1
- ❌ VLAN 1

*EN:* What is the default preconfigured interface for the outside network on a Cisco ASA 5505? → *VLAN 2* (VLAN 1 = inside)

### 4-5.55 Co decyduje o tym, który przełącznik zostaje root bridge STP dla danego VLAN?
- ✅ **najniższy bridge ID (BID)**
- ❌ najwyższy MAC adres
- ❌ najwyższy priorytet
- ❌ najniższy adres IP

*EN:* What determines which switch becomes the STP root bridge? → *the lowest bridge ID* (BID = priorytet + extended system ID + MAC)

### 4-5.56 Co decyduje o wyborze root bridge, gdy priorytety przełączników są takie same?
- ❌ MAC adres o najwyższej wartości szesnastkowej
- ❌ najniższy adres IP
- ✅ **adres warstwy 2 (MAC) o najniższej wartości szesnastkowej**
- ❌ najwyższy BID

*EN:* What is used to determine the root bridge when the priority of the switches are the same? → *the layer 2 address with the lowest hexadecimal value* (najniższy MAC)

### 4-5.58 🖼️ Administrator chce włączyć port security, ale polecenie zostało odrzucone. Jaki wniosek?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/The-administrator-wants-to-enable-port-security-on-an-interface-on-switch-S1.jpg)

- ❌ Interfejs musi być najpierw skonfigurowany jako trunk.
- ❌ Interfejs potrzebuje najpierw adresu IP.
- ❌ Interfejs musi mieć wcześniej `no shutdown`.
- ✅ **Interfejs musi być najpierw skonfigurowany jako access (`switchport mode access`).**

*EN:* …Which conclusion can be drawn? → *The interface must be initially configured with the switchport mode access command* (domyślnie porty są dynamic auto = trunking)

---

## Wykłady 7–10: Listy ACL i zapory sieciowe

Odpowiada rozdziałowi 4 CCNA. Wykłady 7–9 = listy ACL (standardowe, rozszerzone, dynamiczne, time-based, IPv6, filtrowanie pakietów); Wykład 10 = zapory sieciowe (stanowa, CBAC, ZPF, UTM/NGFW).

### 7-10.1 Oprócz kryteriów rozszerzonych ACL, jakie warunki stosuje klasyczny firewall do filtrowania ruchu?
- ❌ numery portów źródłowych/docelowych TCP/UDP
- ❌ numery protokołów TCP/IP
- ❌ adresy IP źródłowe i docelowe
- ✅ **informacje o sesji protokołu warstwy aplikacji**

*EN:* …what conditions are used by a classic firewall to filter traffic? → *application layer protocol session information* (inspekcja stanowa, np. FTP, H.323)

### 7-10.2 Router skonfigurowano jako klasyczny firewall z ACL przychodzącym na interfejsie zewnętrznym. Co robi router po zinspekowaniu ruchu wewnątrz→na zewnątrz i utworzeniu wpisu w tabeli stanu?
- ❌ Gdy ruch wraca z celu, jest ponownie inspekcjonowany i dodawany jest nowy wpis.
- ❌ ACL interfejsu wewnętrznego jest rekonfigurowany, by dać hostowi dostęp do Internetu.
- ❌ Wpis pozostaje w tabeli po zakończeniu sesji, by host mógł go ponownie użyć.
- ✅ **Dynamiczny wpis ACL jest dodawany na interfejs zewnętrzny w kierunku przychodzącym.**

*EN:* …Which action does the router take…? → *A dynamic ACL entry is added to the external interface in the inbound direction* (by ruch zwrotny mógł wrócić)

### 7-10.3 🖼️ Co firewall Cisco IOS robi z pakietem od hakera (src 172.30.1.50, dst 10.0.0.3, src port 23, dst port 2447)?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/CCNA-Security-Chapter-4-Exam-Answer-v2-001.jpg)

- ❌ Pierwszy pakiet jest odrzucany, ale kolejne są przekazywane.
- ❌ Pakiet jest przekazywany i generowany jest alert.
- ❌ Pakiet jest przekazywany bez alertu.
- ✅ **Pakiet jest odrzucany (dropped).**

*EN:* …what does the Cisco IOS firewall do with the packet? → *The packet is dropped* (ACL blokuje cały ruch TCP/IP na interfejs zewnętrzny)

### 7-10.4 Jaka jest jedna zaleta firewalla stanowego (stateful) zamiast serwera proxy?
- ❌ zdolność do uwierzytelniania użytkowników
- ✅ **lepsza wydajność**
- ❌ zdolność do filtrowania pakietów
- ❌ zapobieganie atakom warstwy 7

*EN:* What is one benefit of using a stateful firewall instead of a proxy server? → *better performance*

### 7-10.5 Jakie jest jedno ograniczenie firewalla stanowego?
- ❌ słabe uwierzytelnianie użytkowników
- ❌ nie może filtrować zbędnego ruchu
- ✅ **mniej skuteczny z ruchem opartym na UDP lub ICMP**
- ❌ słabe informacje w logach

*EN:* What is one limitation of a stateful firewall? → *not as effective with UDP- or ICMP-based traffic* (UDP/ICMP nie są stanowe)

### 7-10.6 Które stwierdzenie opisuje typową politykę bezpieczeństwa konfiguracji firewalla z DMZ?
- ❌ Ruch z interfejsu wewnętrznego jest zwykle całkowicie blokowany lub bardzo selektywnie przepuszczany na zewnątrz.
- ✅ **Ruch pochodzący z interfejsu DMZ jest selektywnie przepuszczany na interfejs zewnętrzny.**
- ❌ Ruch z interfejsu zewnętrznego jest przepuszczany do wewnętrznego prawie bez ograniczeń.
- ❌ Ruch zwrotny z wewnątrz (powiązany z ruchem z zewnątrz) jest przepuszczany z wewnątrz na zewnątrz.
- ❌ Ruch zwrotny z zewnątrz (powiązany z ruchem od wewnątrz) jest przepuszczany z zewnątrz do DMZ.

*EN:* Which statement describes a typical security policy for a DMZ firewall configuration? → *Traffic that originates from the DMZ interface is selectively permitted to the outside interface*

### 7-10.7 🖼️ Które stwierdzenie opisuje funkcję tych wpisów ACE?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/CCNA-Security-Chapter-4-Exam-Answer-v2-002.jpg)

- ✅ **Te ACE zezwalają na ruch odkrywania sąsiadów IPv6 (neighbor discovery).**
- ❌ Pojawiają się automatycznie na końcu każdego ACL IPv6, by umożliwić routing.
- ❌ To opcjonalne ACE dodawane na końcu ACL IPv6, by zezwolić na ICMP zdefiniowane w grupach obiektów nd-na i nd-ns.
- ❌ Muszą być ręcznie dodawane na końcu każdego ACL IPv6, by umożliwić routing.

*EN:* …function of the ACEs? → *These ACEs allow for IPv6 neighbor discovery traffic* (neighbor advertisement i solicitation)

### 7-10.8 Przy wdrażaniu ACL dla ruchu przychodzącego z Internetu — co dodać, by zapobiec spoofingowi sieci wewnętrznych?
- ✅ **ACE blokujące ruch z przestrzeni adresów prywatnych**
- ❌ ACE blokujące ruch adresów rozgłoszeniowych
- ❌ ACE blokujące ruch ICMP
- ❌ ACE blokujące ruch HTTP
- ❌ ACE blokujące ruch SNMP

*EN:* …what should be included to prevent the spoofing of internal networks? → *ACEs to prevent traffic from private address spaces* (oraz 127.0.0.0/8, multicast)

### 7-10.9 By ułatwić diagnostykę, który przychodzący komunikat ICMP powinien być dozwolony na interfejsie zewnętrznym?
- ❌ echo request
- ❌ time-stamp request
- ✅ **echo reply**
- ❌ time-stamp reply
- ❌ router advertisement

*EN:* …which inbound ICMP message should be permitted on an outside interface? → *echo reply* (by użytkownicy wewnętrzni mogli pingować na zewnątrz)

### 7-10.10 Które polecenie aktywuje ACL IPv6 o nazwie ENG_ACL na interfejsie, by router filtrował ruch przed dostępem do tablicy routingu?
- ❌ `ipv6 access-class ENG_ACL in`
- ❌ `ipv6 traffic-filter ENG_ACL out`
- ✅ **`ipv6 traffic-filter ENG_ACL in`**
- ❌ `ipv6 access-class ENG_ACL out`

*EN:* Which command activates an IPv6 ACL on an interface…? → *ipv6 traffic-filter ENG_ACL in* (odpowiednik `access-group` w IPv4)

### 7-10.11 Przy konfiguracji ZPF (Zone-Based Policy Firewall) przez CLI — który krok wykonać po utworzeniu stref?
- ❌ Przypisać interfejsy do stref.
- ✅ **Ustalić polityki między strefami.**
- ❌ Zidentyfikować podzbiory w strefach.
- ❌ Zaprojektować infrastrukturę fizyczną.

*EN:* …which step must be taken after zones have been created? → *Establish policies between zones* (kroki: określ strefy → polityki → infrastruktura → podzbiory)

### 7-10.12 Administrator wdraża jednocześnie Classic Firewall i Zone-Based Firewall na routerze. Które stwierdzenie najlepiej to opisuje?
- ❌ Interfejs musi być przypisany do strefy, zanim nastąpi inspekcja IP.
- ❌ Oba modele muszą być na wszystkich interfejsach.
- ✅ **Tych dwóch modeli nie można wdrożyć na jednym interfejsie.**
- ❌ Classic Firewall i ZPF nie mogą być używane jednocześnie.

*EN:* …Which statement best describes this implementation? → *The two models cannot be implemented on a single interface*

### 7-10.13 Które dwie reguły dotyczące interfejsów są prawdziwe przy wdrażaniu ZPF? *(wybierz 2)*
- ❌ Jeśli jeden interfejs jest członkiem strefy, a drugi nie — cały ruch przejdzie.
- ✅ **Jeśli żaden interfejs nie jest członkiem strefy — akcją jest przepuszczenie ruchu.**
- ✅ **Jeśli oba interfejsy są w tej samej strefie — cały ruch przejdzie.**
- ❌ Jeśli jeden interfejs jest w strefie i istnieje para stref — cały ruch przejdzie.
- ❌ Jeśli oba interfejsy są w tej samej parze stref i istnieje polityka — cały ruch przejdzie.

*EN:* Which two rules about interfaces are valid…? → *If neither interface is a zone member, the action is to pass; If both interfaces are members of the same zone, all traffic is passed* (jeden w strefie, drugi nie = drop)

### 7-10.14 Jeśli podane ACE są w tym samym ACL, który powinien być wymieniony jako pierwszy wg najlepszych praktyk?
- ✅ **`permit udp 172.16.0.0 0.0.255.255 host 172.16.1.5 eq snmptrap`**
- ❌ `deny udp any host 172.16.1.5 eq snmptrap`
- ❌ `deny tcp any any eq telnet`
- ❌ `permit ip any any`
- ❌ `permit udp any any range 10000 20000`
- ❌ `permit tcp 172.16.0.0 0.0.3.255 any established`

*EN:* …which ACE should be listed first…? → najbardziej szczegółowy ACE na górze (SNMP jest bardziej szczegółowy niż zakres portów)

### 7-10.15 Które narzędzie monitoruje ruch wpływający i wypływający z organizacji i ustala, czy pakiety należą do istniejącego połączenia, czy pochodzą z nieautoryzowanego źródła?
- ❌ web security appliance
- ❌ system zapobiegania włamaniom (IPS)
- ❌ proxy aplikacyjne
- ✅ **firewall stanowy (stateful firewall)**

*EN:* Which security tool monitors network traffic…and determines whether packets belong to an existing connection? → *stateful firewall* (analizuje warstwy 4 i 5 OSI)

### 7-10.16 Router brzegowy ma trzy interfejsy: S0/0/0 → ISP, Gi0/0 → DMZ, Gi0/1 → wewnętrzna sieć prywatna. Który ruch otrzyma najmniej inspekcji (największą swobodę)?
- ✅ **ruch z sieci prywatnej do DMZ**
- ❌ ruch wracający z DMZ po zainicjowaniu z sieci prywatnej
- ❌ ruch z sieci publicznej do DMZ
- ❌ ruch wracający z sieci publicznej po zainicjowaniu z sieci prywatnej

*EN:* Which type of traffic would receive the least amount of inspection? → *traffic that is going from the private network to the DMZ*

### 7-10.17 🖼️ ACL to jedyny jawnie skonfigurowany na routerze. Które dwa wnioski o połączeniach dostępu zdalnego można wyciągnąć? *(wybierz 2)*
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/CCNA-Security-Chapter-4-Exam-Answer-v2-003.jpg)

- ❌ Połączenia SSH z 192.168.2.0/24 do 192.168.1.0/24 są dozwolone.
- ❌ Połączenia Telnet z 192.168.1.0/24 do 192.168.2.0/24 są dozwolone.
- ✅ **Połączenia Telnet z 192.168.1.0/24 do 192.168.2.0/24 są blokowane.**
- ✅ **Połączenia SSH z 192.168.1.0/24 do 192.168.2.0/24 są dozwolone.**
- ❌ Połączenia SSH z 192.168.1.0/24 do 192.168.2.0/24 są blokowane.
- ❌ Połączenia Telnet z 192.168.2.0/24 do 192.168.1.0/24 są dozwolone.

*EN:* …which two conclusions…? → *Telnet from 192.168.1.0/24 to 192.168.2.0/24 is blocked; SSH from 192.168.1.0/24 to 192.168.2.0/24 is allowed* (ACL zezwala tylko SSH; reszta = niejawny deny)

### 7-10.18 Dla ACL: `permit ip host 192.168.10.1 any` / `deny icmp 192.168.10.0 0.0.0.255 any echo` / `permit ip any any` zastosowanego przychodząco na Gi (IP 192.168.10.254) — które dwie akcje nastąpią? *(wybierz 2)*
- ❌ Tylko urządzenie 192.168.10.1 ma dostęp do routera.
- ❌ Urządzenia 192.168.10.0/24 nie mogą odpowiadać na żadne ping.
- ❌ Tylko połączenia warstwy 3 są dozwolone od routera do innych urządzeń.
- ✅ **Urządzenia z 192.168.10.0/24 nie mogą pingować urządzeń w sieci 192.168.11.0.**
- ✅ **Sesja Telnet lub SSH jest dozwolona z dowolnego urządzenia w 192.168.10.0 do tego routera.**

*EN:* Which two actions are taken…? → *devices on 192.168.10.0/24 cannot ping other devices on 192.168.11.0; a Telnet/SSH session is allowed from any device on 192.168.10.0 into the router*

### 7-10.19 Jaka jest funkcja akcji `pass` w ZPF (Cisco IOS)?
- ❌ logowanie odrzuconych pakietów
- ❌ inspekcja ruchu między strefami w celu kontroli
- ❌ śledzenie stanu połączeń między strefami
- ✅ **przekazywanie ruchu z jednej strefy do drugiej**

*EN:* What is the function of the pass action…? → *forwarding traffic from one zone to another* (jak `permit` w ACL)

### 7-10.20 Które polecenie zweryfikuje konfigurację ZPF?
- ❌ `show interfaces`
- ❌ `show zones`
- ✅ **`show running-config`**
- ❌ `show protocols`

*EN:* Which command will verify a ZPF configuration? → *show running-config* (także `show policy-map`, `show zone security`, `show zone-pair security`)

### 7-10.21 🖼️ Sieć „A" zawiera serwery korporacyjne dostępne dla hostów z Internetu. Jakim terminem ją opisać?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/CCNA-Security-Chapter-4-Exam-Answer-v2-005.jpg)

- ❌ sieć wewnętrzna
- ❌ sieć niezaufana
- ❌ granica bezpieczeństwa perymetru
- ✅ **DMZ (strefa zdemilitaryzowana)**

*EN:* What term is used to describe the network marked as "A"? → *DMZ*

### 7-10.22 Który typ pakietu nie może być filtrowany przez ACL wychodzący (outbound)?
- ❌ pakiet multicast
- ❌ pakiet ICMP
- ❌ pakiet rozgłoszeniowy
- ✅ **pakiet wygenerowany przez router**

*EN:* Which type of packet is unable to be filtered by an outbound ACL? → *router-generated packet* (ruch z samego routera nie podlega ACL wychodzącym)

### 7-10.23 Przy konfiguracji ZPF — które dwie akcje można zastosować do klasy ruchu? *(wybierz 2)*
- ✅ **drop**
- ❌ log
- ❌ forward
- ❌ hold
- ✅ **inspect**
- ❌ copy

*EN:* …which two actions can be applied to a traffic class? → *drop; inspect* (trzy akcje: inspect, drop, pass)

### 7-10.24 Uzupełnij: Firewall ______ monitoruje stan połączeń, gdy ruch wpływa i wypływa z organizacji.
- ✅ **stateful (stanowy)**
- ❌ stateless (bezstanowy)
- ❌ proxy (pośredniczący)
- ❌ pakietowy (packet-filtering)

*EN (fill in the blank):* A **stateful** firewall monitors the state of connections…

### 7-10.25 Uzupełnij: Akcja ______ w ZPF jest podobna do instrukcji `permit` w ACL.
- ✅ **pass**
- ❌ inspect
- ❌ drop
- ❌ log

*EN (fill in the blank):* The **pass** action in a ZPF is similar to a permit statement in an ACL.

### 7-10.26 Które stwierdzenie trafnie opisuje działanie ZPF?
- ✅ **Akcja `pass` działa tylko w jednym kierunku.**
- ❌ Polityki usług (service policies) są stosowane w trybie konfiguracji interfejsu.
- ❌ Interfejs routera może należeć do wielu stref.
- ❌ Interfejsy zarządzania trzeba ręcznie przypisać do self zone.

*EN:* Which statement accurately describes ZPF operation? → *The pass action works in only one direction*

### 7-10.27 Jaka jest zaleta firewalla nowej generacji (NGFW) nad stanowym?
- ❌ reaktywna ochrona przed atakami internetowymi
- ✅ **szczegółowa kontrola wewnątrz aplikacji (granularność)**
- ❌ wsparcie filtrowania pakietów opartego na TCP
- ❌ wsparcie logowania

*EN:* What is a benefit of using a next-generation firewall rather than a stateful firewall? → *granularity control within applications*

### 7-10.28 Jakie są dwie zalety ZPF nad Classic Firewall? *(wybierz 2)*
- ❌ ZPF pozwala umieszczać interfejsy w strefach do inspekcji IP.
- ✅ **ZPF nie zależy od ACL.**
- ❌ W ZPF używa się wielu akcji inspekcji.
- ✅ **Polityki ZPF są łatwe do czytania i diagnozowania.**
- ❌ W ZPF router przepuszcza pakiety, chyba że są jawnie zablokowane.

*EN:* What are two benefits of using a ZPF rather than a Classic Firewall? → *The ZPF is not dependent on ACLs; ZPF policies are easy to read and troubleshoot* (domyślnie blokuje, chyba że jawnie dozwolone)

### 7-10.29 🖼️ ACL rozszerzony ma blokować HR przed dostępem do serwera księgowości, reszta dozwolona. Na którym routerze, interfejsie i w jakim kierunku zastosować ACL?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/2021-01-06_214355.jpg)

- ❌ R1, S0/1/0, wychodząco
- ✅ **R1, Gi0/0/0, przychodząco**
- ❌ R1, Gi0/0/0, wychodząco
- ❌ R2, S0/1/1, przychodząco
- ❌ R2, Gi0/0/1, przychodząco
- ❌ R2, Gi0/0/1, wychodząco

*EN:* …on which router, interface, and direction should the access list be applied? → *router R1, interface Gi0/0/0, inbound* (ACL rozszerzony jak najbliżej źródła)

### 7-10.30 Administrator chce skonfigurować standardowy ACL, by tylko stacja 192.168.15.23 miała dostęp do terminala wirtualnego routera. Które dwa polecenia to osiągną? *(wybierz 2)*
- ✅ **`access-list 10 permit host 192.168.15.23`**
- ✅ **`access-list 10 permit 192.168.15.23 0.0.0.0`**
- ❌ `access-list 10 permit 192.168.15.23 0.0.0.255`
- ❌ `access-list 10 permit 192.168.15.23 255.255.255.0`
- ❌ `access-list 10 permit 192.168.15.23 255.255.255.255`

*EN:* …Which two configuration commands can achieve the task? → *permit host 192.168.15.23; permit 192.168.15.23 0.0.0.0* (maska blankietowa 0.0.0.0 = jeden host)

### 7-10.31 Jakie są dwie cechy firewalla stanowego? *(wybierz 2)*
- ✅ **używa informacji o połączeniu z tabeli stanu**
- ❌ używa technik statycznego filtrowania pakietów
- ✅ **analizuje ruch w warstwach 3, 4 i 5 modelu OSI**
- ❌ używa złożonych ACL trudnych w konfiguracji
- ❌ zapobiega atakom warstwy 7

*EN:* What are two characteristics of a stateful firewall? → *uses connection information maintained in a state table; analyzes traffic at Layers 3, 4 and 5*

### 7-10.32 Który typ ruchu podlega filtrowaniu na urządzeniu ASA 5505?
- ❌ publiczny Internet → wewnątrz
- ❌ publiczny Internet → DMZ
- ✅ **wewnątrz → DMZ**
- ❌ DMZ → wewnątrz

*EN:* Which type of traffic is subject to filtering on an ASA 5505 device? → *inside to DMZ* (filtrowanie dotyczy ruchu z wyższego poziomu bezpieczeństwa do niższego)

### 7-10.33 Który typ ACL oferuje większą elastyczność i kontrolę nad dostępem do sieci?
- ❌ flexible
- ❌ named standard
- ✅ **extended (rozszerzony)**
- ❌ numbered standard

*EN:* What type of ACL offers greater flexibility and control over network access? → *extended*

### 7-10.34 Które urządzenie pełni funkcję wyznaczania ścieżki, którą wiadomości powinny przejść przez sieci?
- ✅ **router**
- ❌ firewall
- ❌ serwer WWW
- ❌ modem DSL

*EN:* Which device performs the function of determining the path that messages should take…? → *a router*

### 7-10.35 Co jest cechą strefy DMZ?
- ❌ Ruch z sieci wewnętrznej do DMZ nie jest dozwolony.
- ✅ **Ruch z sieci zewnętrznej do DMZ jest selektywnie dozwolony.**
- ❌ Ruch z DMZ do sieci wewnętrznej jest dozwolony.
- ❌ Ruch z sieci wewnętrznej do DMZ jest selektywnie dozwolony.

*EN:* What is a characteristic of a DMZ zone? → *Traffic originating from the outside network going to the DMZ network is selectively permitted* (wewnątrz→DMZ dozwolony; DMZ→wewnątrz blokowany)

### 7-10.38 Jaki mechanizm pozwala ASA 5505 na powrót zinspekowanego ruchu wychodzącego do nadawcy w sieci wewnętrznej?
- ❌ NAT
- ❌ listy kontroli dostępu
- ❌ strefy bezpieczeństwa
- ✅ **stanowa inspekcja pakietów (stateful packet inspection)**

*EN:* What mechanism is used by an ASA 5505 to allow inspected outbound traffic to return…? → *stateful packet inspection*

### 7-10.39 Która implementacja zabezpieczeń zapewni ochronę płaszczyzny zarządzania (management plane) urządzenia?
- ❌ antyspoofing
- ❌ uwierzytelnianie protokołu routingu
- ✅ **kontrola dostępu oparta na rolach (role-based access control)**
- ❌ listy kontroli dostępu

*EN:* Which security implementation will provide management plane protection? → *role-based access control*

### 7-10.40 Która funkcja jest specyficzna dla licencji Security Plus w ASA 5505 i zwiększa dostępność?
- ✅ **redundantne łącza ISP**
- ❌ tryb transparentny
- ❌ tryb routowany
- ❌ stanowa inspekcja pakietów

*EN:* Which feature is specific to the Security Plus upgrade license of an ASA 5505 and provides increased availability? → *redundant ISP connections*

### 7-10.42 W których dwóch przypadkach ruch zostanie zablokowany na ASA 5505? *(wybierz 2)*
- ❌ ruch z sieci wewnętrznej do DMZ
- ❌ ruch z sieci wewnętrznej na zewnątrz
- ❌ ruch z sieci zewnętrznej do DMZ
- ✅ **ruch z DMZ do sieci wewnętrznej**
- ✅ **ruch z sieci zewnętrznej do sieci wewnętrznej**

*EN:* In which two instances will traffic be denied as it crosses the ASA 5505? → *DMZ to inside; outside to inside* (ruch z niższego do wyższego poziomu blokowany, chyba że to odpowiedź)

### 7-10.43 Jaka jest funkcja konfiguracji policy map przy konfiguracji firewalla ASA?
- ✅ **wiązanie class map z akcjami**
- ❌ identyfikowanie interesującego ruchu
- ❌ wiązanie service policy z interfejsem
- ❌ używanie ACL do dopasowania ruchu

*EN:* What is the function of a policy map configuration when an ASA firewall is being configured? → *binding class maps with actions* (class map identyfikuje ruch, service policy podpina do interfejsu)

### 7-10.44 Jak wdrożenie firewalla Cisco ASA różni się od routera Cisco IOS?
- ❌ Urządzenia ASA nie obsługują niejawnego deny w ACL.
- ❌ Urządzenia ASA używają ACL z maską blankietową (wildcard).
- ✅ **Urządzenia ASA obsługują poziomy bezpieczeństwa interfejsów (security levels).**
- ❌ ACL na ASA są zawsze numerowane.

*EN:* …how does the deployment of a Cisco ASA firewall differ from a Cisco IOS router? → *ASA devices support interface security levels*

### 7-10.45 Jak ACL na ASA różnią się od ACL Cisco IOS?
- ❌ Routery IOS używają nazwanych i numerowanych ACL, a ASA tylko numerowanych.
- ✅ **ACL IOS konfiguruje się maską blankietową (wildcard), a ACL ASA maską podsieci (subnet mask).**
- ❌ ACL IOS są przetwarzane sekwencyjnie z góry na dół, a ASA nie.
- ❌ ACL IOS kończą się niejawnym deny, a ASA niejawnym permit all.

*EN:* …how do ASA ACLs differ from Cisco IOS ACLs? → *Cisco IOS ACLs use a wildcard mask and ASA ACLs use a subnet mask*

### 7-10.46 🖼️ Na podstawie poziomów bezpieczeństwa interfejsów ASA — które stwierdzenie poprawnie opisuje dozwolony przepływ ruchu?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/Q27.jpg)

- ❌ Ruch z LAN i Internetu do DMZ jest uznawany za przychodzący (inbound).
- ❌ Ruch z DMZ i Internetu do LAN jest uznawany za wychodzący (outbound).
- ❌ Ruch z LAN do DMZ jest uznawany za przychodzący.
- ❌ (powtórzenie) Ruch z LAN do DMZ jest uznawany za przychodzący.
- ✅ **Ruch z DMZ i LAN do Internetu jest uznawany za wychodzący (outbound).**

*EN:* …what statement correctly describes the flow of traffic? → *Traffic sent from the DMZ and the LAN to the Internet is considered outbound* (wyższy→niższy poziom = outbound)

### 7-10.47 Jaka jest zaleta firewalla filtrującego pakiety (packet filtering) nad zaawansowanym urządzeniem firewall?
- ✅ **Filtry pakietów wykonują prawie wszystkie zadania zaawansowanego firewalla ułamkiem kosztu.**
- ❌ Filtry pakietów zapewniają początkowy stopień bezpieczeństwa w warstwie łącza i sieci.
- ❌ Filtry pakietów stanowią kompletne rozwiązanie firewall.
- ❌ Filtry pakietów nie są podatne na IP spoofing.

*EN:* What is an advantage in using a packet filtering firewall…? → *Packet filters perform almost all the tasks of a high-end firewall at a fraction of the cost*

### 7-10.48 Co jest cechą ZPF (Cisco IOS Zone-Based Policy Firewall)?
- ✅ **Interfejs routera może należeć tylko do jednej strefy naraz.**
- ❌ Polityki usług są stosowane w trybie konfiguracji interfejsu.
- ❌ Interfejsy zarządzania trzeba ręcznie przypisać do self zone.
- ❌ Akcja `pass` działa w wielu kierunkach.

*EN:* What is a feature of a Cisco IOS Zone-Based Policy Firewall? → *A router interface can belong to only one zone at a time* (akcja `pass` działa tylko w jednym kierunku)

### 7-10.49 Administrator skonfigurował listę dostępu na R1, aby umożliwić administracyjny dostęp SSH z hosta 172.16.1.100. Które polecenie poprawnie stosuje tę listę kontroli dostępu (ACL)?
- ✅ **`R1(config-line)# access-class 1 in`**
- ❌ `R1(config-if)# ip access-group 1 out`
- ❌ `R1(config-line)# access-class 1 out`
- ❌ `R1(config-if)# ip access-group 1 in`

*EN:* An administrator has configured an access list on R1 to allow SSH administrative access from host 172.16.1.100. Which command correctly applies the ACL? → *R1(config-line)# access-class 1 in* (ACL ograniczającą zdalny dostęp stosuje się na liniach vty poleceniem `access-class`, w kierunku `in`)

### 7-10.50 Na którym routerze należy wykonać polecenie `show access-lists`?
- ❌ na dowolnym routerze, przez który przechodzi pakiet wskazany na liście kontroli dostępu (ACL)
- ❌ na routerze, który kieruje pakiet wskazany na liście kontroli dostępu (ACL) z sieci źródłowej
- ❌ na routerze, który kieruje pakiet wskazany na liście kontroli dostępu (ACL) do sieci docelowej
- ✅ **na routerze, na którym skonfigurowano listę kontroli dostępu (ACL)**

*EN:* On which router should the show access-lists command be executed? → *on the router on which the ACL is configured* (polecenie pokazuje ACL skonfigurowane lokalnie na tym routerze)

### 7-10.51 Jaki jest skutek skonfigurowania listy ACL zawierającej wyłącznie elementy ACE blokujące ruch (deny)?
- ✅ **Lista ACL zablokuje cały ruch.**
- ❌ Listę ACL należy stosować wyłącznie w ruchu przychodzącym.
- ❌ Listę ACL należy stosować wyłącznie w ruchu wychodzącym.
- ❌ Lista ACL będzie zezwalać na każdy ruch, który nie został wyraźnie zabroniony.

*EN:* What is the effect of configuring an ACL that contains only deny ACEs? → *The ACL will block all traffic* (na końcu każdej ACL działa niejawne `deny any`, więc same wpisy `deny` blokują całość)

### 7-10.52 W której konfiguracji umieszczenie listy ACL wychodzącej (outbound) będzie preferowane względem przychodzącej (inbound)?
- ✅ **gdy ACL jest stosowana na interfejsie wychodzącym, by filtrować pakiety napływające z wielu interfejsów wejściowych zanim opuszczą interfejs**
- ❌ gdy interfejs jest filtrowany przez ACL wychodzącą, a sieć dołączona do interfejsu jest siecią źródłową filtrowaną w ACL
- ❌ gdy router ma więcej niż jedną listę kontroli dostępu (ACL)
- ❌ gdy lista ACL wychodząca znajduje się bliżej źródła przepływu ruchu

*EN:* In which configuration would an outbound ACL placement be preferred over an inbound ACL placement? → *when an ACL is applied to an outbound interface to filter packets coming from multiple inbound interfaces before the packets exit the interface*

---

## Wykład 11: Kryptografia i VPN

Łączy rozdziały 7 (kryptografia: szyfrowanie symetryczne/asymetryczne, hash, Diffie-Hellman, certyfikaty) i 8 (VPN, IPsec, GRE, IKE) CCNA — wykład 11 obejmował technologię VPN, IPsec, integralność i Diffie-Hellmana.

### 11.1 Jaki jest cel usługi niezaprzeczalności (nonrepudiation) w bezpiecznej komunikacji?
- ❌ zapewnienie, że szyfrowanej komunikacji nie da się odkodować
- ❌ potwierdzenie tożsamości odbiorcy
- ❌ zapewnienie najwyższego możliwego poziomu szyfrowania
- ✅ **zapewnienie, że źródło komunikacji jest potwierdzone**

*EN:* What is the purpose of a nonrepudiation service? → *to ensure that the source of the communications is confirmed*

### 11.2 Który cel bezpiecznej komunikacji osiąga się przez szyfrowanie danych?
- ❌ integralność
- ❌ uwierzytelnianie
- ✅ **poufność (confidentiality)**
- ❌ dostępność

*EN:* Which objective of secure communications is achieved by encrypting data? → *confidentiality*

### 11.3 Który protokół szyfrowania zapewnia poufność w warstwie sieciowej?
- ✅ **zestaw protokołów IPsec**
- ❌ Transport Layer Security
- ❌ Secure Hash Algorithm 1
- ❌ Secure Sockets Layer
- ❌ Keyed MD5
- ❌ Message Digest 5

*EN:* Which encryption protocol provides network layer confidentiality? → *IPsec protocol suite* (SSL/TLS = warstwa sesji; MD5/SHA = funkcje skrótu)

### 11.4 🖼️ Który algorytm szyfrowania opisano na rysunku?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/CCNA-Security-Chapter-7-Exam-Answer-v2-001-2.png)

- ❌ RC4
- ❌ AES
- ✅ **3DES**
- ❌ DES
- ❌ SEAL

*EN:* Which encryption algorithm is described in the exhibit? → *3DES*

### 11.5 Sklep internetowy potrzebuje usługi wspierającej niezaprzeczalność transakcji. Który komponent się do tego używa?
- ❌ klucz prywatny sklepu
- ❌ unikalny współdzielony sekret znany tylko sklepowi i klientowi
- ❌ klucz publiczny sklepu
- ✅ **podpisy cyfrowe (digital signatures)**

*EN:* …Which component is used for this service? → *the digital signatures*

### 11.6 W której sytuacji używany jest algorytm klucza asymetrycznego?
- ❌ Dwa routery Cisco uwierzytelniają się wzajemnie przez CHAP.
- ❌ Dane użytkownika są przesyłane przez sieć po ustanowieniu VPN.
- ❌ Kierownik biura szyfruje pliki przed zapisem na nośniku wymiennym.
- ✅ **Administrator łączy się z routerem Cisco przez SSH.**

*EN:* In which situation is an asymmetric key algorithm used? → *A network administrator connects to a Cisco router with SSH* (CHAP i szyfrowanie plików = symetryczny)

### 11.7 Dlaczego algorytm 3DES jest często preferowany nad AES?
- ✅ **3DES jest bardziej zaufany, bo był sprawdzany jako bezpieczny dłużej niż AES.**
- ❌ AES jest droższy we wdrożeniu niż 3DES.
- ❌ 3DES działa lepiej w środowiskach o wysokiej przepustowości i niskim opóźnieniu.
- ❌ Główni producenci sprzętu (np. Cisco) nie przyjęli jeszcze AES.

*EN:* Why is the 3DES algorithm often preferred over AES? → *3DES is more trusted because it has been proven secure for a longer period* (dojrzały algorytm = bardziej zaufany)

### 11.8 Jakie jest najczęstsze zastosowanie algorytmu Diffie-Hellman w bezpieczeństwie komunikacji?
- ❌ tworzenie skrótów haseł do uwierzytelniania
- ❌ uwierzytelnianie protokołów routingu między routerami
- ❌ szyfrowanie danych do bezpiecznego e-commerce
- ✅ **bezpieczna wymiana kluczy używanych do szyfrowania danych**

*EN:* What is the most common use of the Diffie-Hellman algorithm? → *to secure the exchange of keys used to encrypt data* (DH nie szyfruje danych — wymienia klucze)

### 11.10 Ilu bitów używa Data Encryption Standard (DES) do szyfrowania danych?
- ❌ 40 bitów
- ✅ **56 bitów**
- ❌ 64 bity
- ❌ 72 bity

*EN:* How many bits does DES use for data encryption? → *56 bits* (klucz 64-bit, 8 bitów na parzystość)

### 11.11 Które stwierdzenie opisuje SEAL (Software-Optimized Encryption Algorithm)?
- ✅ **SEAL to szyfr strumieniowy (stream cipher).**
- ❌ Używa klucza 112-bitowego.
- ❌ To przykład algorytmu asymetrycznego.
- ❌ Wymaga więcej zasobów CPU niż programowy AES.

*EN:* Which statement describes SEAL? → *SEAL is a stream cipher* (symetryczny, klucz 160-bit, niskie obciążenie CPU)

### 11.12 Który algorytm szyfrowania jest asymetryczny?
- ✅ **DH (Diffie-Hellman)**
- ❌ SEAL
- ❌ 3DES
- ❌ AES

*EN:* Which encryption algorithm is an asymmetric algorithm? → *DH* (AES, 3DES, SEAL = symetryczne)

### 11.13 Który typ algorytmu szyfrowania używa kluczy publicznego i prywatnego, by zapewnić uwierzytelnianie, integralność i poufność?
- ❌ symetryczny
- ❌ współdzielony sekret
- ❌ IPsec
- ✅ **asymetryczny**

*EN:* Which type of encryption algorithm uses public and private keys…? → *asymmetric*

### 11.14 Jak współcześni kryptografowie bronią się przed atakami brute-force?
- ❌ Używają analizy statystycznej do eliminacji najczęstszych kluczy.
- ✅ **Używają przestrzeni kluczy (keyspace) na tyle dużej, że atak zajmuje zbyt dużo czasu i pieniędzy.**
- ❌ Używają algorytmu wymagającego od napastnika i szyfrogramu, i tekstu jawnego.
- ❌ Używają analizy częstotliwości, by najpopularniejsze litery nie były używane.

*EN:* How do modern cryptographers defend against brute-force attacks? → *Use a keyspace large enough that it takes too much money and time*

### 11.15 Które stwierdzenie opisuje algorytmy szyfrowania asymetrycznego?
- ❌ Mają długości kluczy od 80 do 256 bitów.
- ❌ Obejmują DES, 3DES i AES.
- ❌ Nazywane są też algorytmami współdzielonego sekretu.
- ✅ **Są stosunkowo wolne, bo opierają się na trudnych obliczeniowo algorytmach.**

*EN:* Which statement describes asymmetric encryption algorithms? → *They are relatively slow because they are based on difficult computational algorithms*

### 11.16 Które dwie niejawne liczby są początkowo uzgadniane przy użyciu algorytmu Diffie-Hellman? *(wybierz 2)*
- ❌ współczynnik dwumianowy
- ✅ **generator**
- ❌ niezmiennik krzywej eliptycznej
- ✅ **moduł będący liczbą pierwszą (prime modulus)**
- ❌ indeks topologiczny
- ❌ pseudolosowy nome

*EN:* Which two non-secret numbers are initially agreed upon when DH is used? → *generator; prime modulus*

### 11.17 Który typ algorytmu szyfrowania używa tego samego klucza do szyfrowania i deszyfrowania danych?
- ❌ Diffie-Hellman
- ✅ **współdzielony sekret (shared-secret / symetryczny)**
- ❌ klucz publiczny
- ❌ asymetryczny

*EN:* What type of encryption algorithm uses the same key to encrypt and decrypt data? → *Shared-secret* (symetryczny)

### 11.18 W jakiej sytuacji najprawdopodobniej użyty zostanie algorytm asymetryczny?
- ❌ logowanie do komputera
- ✅ **dokonywanie zakupu online**
- ❌ wysyłanie rozdziału książki przez FTP
- ❌ przesyłanie dużego strumienia danych między lokalizacjami firmy

*EN:* In what situation would an asymmetric algorithm most likely be used? → *making an online purchase* (wolne, więc transakcje o małym wolumenie)

### 11.19 Dlaczego zarządzanie kluczami algorytmu asymetrycznego jest prostsze niż symetrycznego?
- ❌ Używa mniej bitów.
- ❌ Używany jest tylko jeden klucz.
- ❌ Do wymiany kluczy używane są dwa klucze publiczne.
- ✅ **Jeden z kluczy może być upubliczniony.**

*EN:* Why is asymmetric algorithm key management simpler…? → *One of the keys can be made public*

### 11.21 Który algorytm może zapewnić poufność danych?
- ❌ MD5
- ❌ PKI
- ❌ RSA
- ✅ **AES**

*EN:* Which algorithm can ensure data confidentiality? → *AES* (poufność = szyfrowanie symetryczne: DES, 3DES, AES)

### 11.22 Jaki jest cel certyfikatu cyfrowego?
- ❌ Gwarantuje, że strona nie została zhakowana.
- ✅ **Uwierzytelnia stronę i ustanawia bezpieczne połączenie do wymiany poufnych danych.**
- ❌ Stanowi dowód, że dane mają tradycyjny podpis.
- ❌ Zapewnia, że osoba uzyskująca dostęp do urządzenia jest uprawniona.

*EN:* What is the purpose of a digital certificate? → *It authenticates a website and establishes a secure connection to exchange confidential data*

### 11.23 Uzupełnij: Współdzielony sekret (shared secret) to klucz symetryczny używany w algorytmie szyfrowania ______.
- ✅ **symetrycznym (symmetric)**
- ❌ asymetrycznym (asymmetric)
- ❌ haszującym (hashing)
- ❌ z kluczem publicznym (public-key)

*EN (fill in the blank):* A shared secret is a symmetric key used in a **symmetric** encryption algorithm.

### 11.24 Jaka jest podstawowa funkcja algorytmu Diffie-Hellman?
- ❌ zapewnienie integralności danych
- ❌ zapobieganie atakom man-in-the-middle
- ❌ generowanie i udostępnianie kluczy publicznych
- ✅ **wymiana współdzielonych kluczy tajnych przez niezaufane sieci**

*EN:* What is the primary function of the Diffie-Hellman algorithm? → *to exchange shared secret keys over untrusted networks*

### 11.26 Które dwa stwierdzenia opisują użycie algorytmów asymetrycznych? *(wybierz 2)*
- ❌ Klucze publiczny i prywatny można stosować zamiennie.
- ❌ Jeśli kluczem publicznym zaszyfrowano dane, kluczem publicznym trzeba je odszyfrować.
- ✅ **Jeśli kluczem prywatnym zaszyfrowano dane, kluczem publicznym trzeba je odszyfrować.**
- ✅ **Jeśli kluczem publicznym zaszyfrowano dane, kluczem prywatnym trzeba je odszyfrować.**
- ❌ Jeśli kluczem prywatnym zaszyfrowano dane, kluczem prywatnym trzeba je odszyfrować.

*EN:* Which two statements describe the use of asymmetric algorithms? → *private key encrypts → public key decrypts; public key encrypts → private key decrypts*

### 11.28 Jaki typ algorytmów wymaga, by nadawca i odbiorca wymienili tajny klucz zapewniający poufność wiadomości?
- ❌ algorytmy haszujące
- ❌ algorytmy klucza publicznego
- ✅ **algorytmy symetryczne**
- ❌ algorytmy asymetryczne

*EN:* What type of algorithms require sender and receiver to exchange a secret key…? → *symmetric algorithms*

### 11.29 Technik szyfruje wiadomości algorytmem asymetrycznym kluczem prywatnym i przekazuje dane innemu technikowi. Jakiego klucza użyć do odszyfrowania?
- ❌ klucza publicznego odbiorcy
- ✅ **klucza publicznego nadawcy**
- ❌ klucza prywatnego odbiorcy
- ❌ klucza prywatnego nadawcy

*EN:* …What key must be used to decrypt this data? → *The public key of the sender* (zaszyfrowano kluczem prywatnym nadawcy → odszyfruje pasujący klucz publiczny nadawcy)

### 11.30 Jaka jest funkcja algorytmu HMAC przy ustanawianiu IPsec VPN?
- ❌ uwierzytelnia peery IPsec
- ✅ **gwarantuje integralność wiadomości**
- ❌ chroni klucze IPsec podczas negocjacji sesji
- ❌ tworzy bezpieczny kanał do negocjacji kluczy

*EN:* What is the function of the HMAC algorithm in setting up an IPsec VPN? → *guarantees message integrity*

### 11.31 Jaki algorytm zapewnia integralność danych wiadomości przez obliczoną wartość skrótu (hash)?
- ❌ RSA
- ❌ DH
- ❌ AES
- ✅ **HMAC**

*EN:* What algorithm provides data integrity through a calculated hash value? → *HMAC*

### 11.32 Jak szyfrowanie asymetryczne zapewnia poufność ruchu VPN?
- ✅ **Nadawca szyfruje ruch kluczem publicznym odbiorcy, a odbiorca odszyfrowuje własnym kluczem prywatnym.**
- ❌ Nadawca szyfruje kluczem prywatnym odbiorcy, odbiorca odszyfrowuje kluczem prywatnym nadawcy.
- ❌ Nadawca szyfruje kluczem prywatnym odbiorcy, odbiorca odszyfrowuje kluczem publicznym nadawcy.
- ❌ Nadawca szyfruje kluczem publicznym odbiorcy, odbiorca odszyfrowuje kluczem publicznym nadawcy.

*EN:* How is asymmetric encryption used to provide confidentiality for VPN traffic? → *sender encrypts with the public key of the receiver; receiver decrypts with its private key*

### 11.33 Jaki algorytm jest używany z IPsec do zapewnienia poufności danych?
- ✅ **AES**
- ❌ RSA
- ❌ MD5
- ❌ Diffie-Hellman
- ❌ SHA

*EN:* What algorithm is used with IPsec to provide data confidentiality? → *AES* (MD5/SHA = integralność, DH = wymiana kluczy)

### 11.34 Technik ma zaprojektować VPN między dwoma routerami oddziałów. Jaki typ klucza kryptograficznego użyć?
- ❌ klucz asymetryczny
- ❌ podpis cyfrowy
- ❌ klucz haszujący
- ✅ **klucz symetryczny**

*EN:* …Which type of cryptographic key should be used? → *symmetric key* (oba routery mają dostęp do tajnego klucza)

### 11.35 Co może być alternatywą dla HMAC?
- ❌ SHA
- ❌ MD5
- ❌ symetryczne algorytmy szyfrowania
- ✅ **podpisy cyfrowe**

*EN:* What can be used as an alternative to HMAC? → *digital signatures* (oba gwarantują autentyczność wiadomości)

### 11.36 Jakie dwa zapewnienia o kodzie pobranym z Internetu daje podpis cyfrowy? *(wybierz 2)*
- ❌ Kod nie zawiera błędów.
- ❌ Kod nie zawiera wirusów.
- ✅ **Kod nie został zmodyfikowany od opuszczenia wydawcy oprogramowania.**
- ✅ **Kod jest autentyczny i faktycznie pochodzi od wydawcy.**
- ❌ Kod zaszyfrowano kluczem prywatnym i publicznym.

*EN:* What two assurances does digital signing provide about code…? → *The code has not been modified since it left the publisher; The code is authentic and actually sourced by the publisher*

### 11.37 Dlaczego algorytm Diffie-Hellman jest zwykle unikany do szyfrowania danych?
- ❌ DH działa zbyt szybko, by wdrożyć go z wysokim poziomem bezpieczeństwa.
- ❌ Większość ruchu szyfruje się algorytmami asymetrycznymi.
- ✅ **Duże liczby używane przez DH czynią go zbyt wolnym do masowego transferu danych.**
- ❌ DH wymaga współdzielonego klucza łatwo wymienianego między stronami.

*EN:* Why is Diffie-Hellman typically avoided for encrypting data? → *The large numbers used by DH make it too slow for bulk data transfers* (DH generuje klucze dla algorytmów symetrycznych)

### 11.40 Które dwa algorytmy mogą być częścią polityki IPsec, by zapewnić szyfrowanie i haszowanie ruchu? *(wybierz 2)*
- ❌ PSK
- ❌ DH
- ❌ RSA
- ✅ **AES**
- ✅ **SHA**

*EN:* What two algorithms can be part of an IPsec policy to provide encryption and hashing? → *AES (szyfrowanie); SHA (haszowanie)*

### 11.41 Dlaczego haszowanie jest kryptograficznie silniejsze niż CRC (cyclical redundancy check)?
- ❌ Hashe nigdy nie są wysyłane jawnym tekstem.
- ❌ Łatwo wygenerować dane o tym samym CRC.
- ❌ Trudno wygenerować dane o tym samym CRC.
- ✅ **Praktycznie niemożliwe jest, by dwa różne zestawy danych dały ten sam hash.**
- ❌ Haszowanie zawsze używa 128-bitowego skrótu, a CRC może mieć zmienną długość.

*EN:* Why is hashing cryptographically stronger compared to CRC? → *It is virtually impossible for two different sets of data to calculate the same hash output*

### 11.42 Co jest cechą algorytmów asymetrycznych?
- ❌ Zarządzanie kluczami jest trudniejsze niż w symetrycznych.
- ✅ **Używane są bardzo długie klucze.**
- ❌ Nadawca i odbiorca znają klucz przed komunikacją.
- ❌ Algorytmy asymetryczne są łatwiejsze do akceleracji sprzętowej.

*EN:* What is a characteristic of asymmetric algorithms? → *Very long key lengths are used* (długie klucze = wolniejsze działanie)

### 11.43 Uzupełnij: Jaki typ algorytmu chroni dane w tranzycie (integralność)?
- ✅ **algorytm haszujący (hashing algorithm)**
- ❌ algorytm symetryczny
- ❌ algorytm asymetryczny
- ❌ algorytm kompresji

*EN (fill in the blank):* …algorithm-type to protect the data in transit → *Hashing algorithm*

### 11.44 Kiedy tworzone jest powiązanie bezpieczeństwa (SA) przy tunelu IPsec VPN między dwoma lokalizacjami?
- ❌ po utworzeniu tunelu, ale przed wysłaniem ruchu
- ❌ tylko podczas Fazy 2
- ❌ tylko podczas Fazy 1
- ✅ **podczas Fazy 1 i Fazy 2**

*EN:* When is a security association (SA) created…? → *during both Phase 1 and 2* (IKE SA w Fazie 1, IPsec SA w Fazie 2)

### 11.46 Które dwa stwierdzenia trafnie opisują cechy IPsec? *(wybierz 2)*
- ❌ IPsec działa w warstwie transportowej i chroni dane w warstwie sieciowej.
- ❌ IPsec to framework zastrzeżonych standardów zależnych od algorytmów Cisco.
- ❌ IPsec to framework opracowany przez Cisco oparty na algorytmach OSI.
- ✅ **IPsec to framework otwartych standardów oparty na istniejących algorytmach.**
- ✅ **IPsec działa w warstwie sieciowej i działa nad wszystkimi protokołami warstwy 2.**
- ❌ IPsec działa w warstwie aplikacji i chroni wszystkie dane aplikacji.

*EN:* Which two statements accurately describe characteristics of IPsec? → *framework of open standards relying on existing algorithms; works at the network layer over all Layer 2 protocols*

### 11.47 Jaką akcję podejmują peery IPsec podczas wymiany IKE Faza 2?
- ❌ wymiana kluczy DH
- ✅ **negocjacja polityki IPsec**
- ❌ negocjacja zestawów polityki IKE
- ❌ weryfikacja tożsamości peera

*EN:* Which action do IPsec peers take during the IKE Phase 2 exchange? → *negotiation of IPsec policy* (Faza 1 = polityka IKE, uwierzytelnienie, kanał; Faza 2 = SA)

### 11.48 Która technika jest niezbędna do zapewnienia prywatnego transferu danych przez VPN?
- ✅ **szyfrowanie**
- ❌ autoryzacja
- ❌ wirtualizacja
- ❌ skalowalność

*EN:* Which technique is necessary to ensure a private transfer of data using a VPN? → *encryption*

### 11.49 Które stwierdzenie opisuje VPN?
- ❌ VPN używa otwartego oprogramowania wirtualizacyjnego do tworzenia tunelu przez Internet.
- ✅ **VPN używa wirtualnych połączeń, by stworzyć sieć prywatną przez sieć publiczną.**
- ❌ VPN używa dedykowanych fizycznych połączeń do transferu danych.
- ❌ VPN używa logicznych połączeń, by tworzyć sieci publiczne przez Internet.

*EN:* Which statement describes a VPN? → *VPNs use virtual connections to create a private network through a public network*

### 11.50 Który transform set zapewnia najlepszą ochronę?
- ✅ **`esp-aes-256 esp-sha-hmac`**
- ❌ `esp-3des esp-sha-hmac`
- ❌ `esp-des esp-sha-hmac`
- ❌ `esp-aes esp-des esp-sha-hmac`

*EN:* Which transform set provides the best protection? → *esp-aes-256…* (AES-256 = najsilniejszy)

### 11.52 🖼️ Jak router potraktuje ruch niepasujący do listy dostępu 101?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/CCNA-Security-Chapter-8-Exam-Answer-v2-001-1.png)

- ✅ **Zostanie wysłany nieszyfrowany (plain text).**
- ❌ Zostanie wysłany szyfrowany.
- ❌ Zostanie zablokowany.
- ❌ Zostanie odrzucony.

*EN:* How will traffic that does not match access list 101 be treated? → *It will be sent unencrypted* (ACL definiuje „interesting traffic" do szyfrowania)

### 11.54 Które stwierdzenie opisuje wpływ długości klucza na utrudnienie złamania klucza szyfrowania?
- ❌ Długość klucza nie wpływa na stopień bezpieczeństwa.
- ❌ Im krótszy klucz, tym trudniej go złamać.
- ❌ Długość klucza nie różni się między algorytmami.
- ✅ **Im dłuższy klucz, tym więcej możliwych kombinacji.**

*EN:* Which statement describes the effect of key length…? → *The longer the key, the more key possibilities exist*

### 11.55 Jaki jest cel konfigurowania wielu crypto ACL przy budowaniu VPN między lokalizacjami zdalnymi?
- ❌ Stosując ACL na interfejsie publicznym, można zapobiec łączeniu się użytkowników publicznych.
- ❌ Wiele crypto ACL może definiować wiele zdalnych peerów.
- ❌ Wiele crypto ACL można skonfigurować, by blokować konkretny ruch przez VPN.
- ✅ **Gdy wybiera się różne kombinacje ochrony IPsec, wiele crypto ACL może definiować różne typy ruchu.**

*EN:* What is the purpose of configuring multiple crypto ACLs…? → *multiple crypto ACLs can define different traffic types when multiple combinations of IPsec protection are chosen*

### 11.56 Jaki jest cel polecenia `crypto ipsec transform-set ESP-DES-SHA esp-des esp-sha-hmac` na ASA?
- ❌ zdefiniowanie parametrów ISAKMP do ustanowienia tunelu
- ✅ **zdefiniowanie algorytmów szyfrowania i integralności do budowy tunelu IPsec**
- ❌ zdefiniowanie, jaki ruch jest dozwolony i chroniony przez tunel
- ❌ zdefiniowanie tylko dozwolonych algorytmów szyfrowania

*EN:* What is the purpose of this command? → *to define the encryption and integrity algorithms used to build the IPsec tunnel* (negocjowane w Fazie 2)

### 11.57 Który protokół zapewnia uwierzytelnianie, integralność i poufność oraz jest typem VPN?
- ❌ ESP
- ✅ **IPsec**
- ❌ MD5
- ❌ AES

*EN:* Which protocol provides authentication, integrity, and confidentiality services and is a type of VPN? → *IPsec*

### 11.58 Które trzy stwierdzenia opisują framework protokołów IPsec? *(wybierz 3)*
- ✅ **AH zapewnia integralność i uwierzytelnianie.**
- ✅ **ESP zapewnia szyfrowanie, uwierzytelnianie i integralność.**
- ✅ **AH używa protokołu IP 51.**
- ❌ AH zapewnia szyfrowanie i integralność.
- ❌ ESP używa protokołu UDP 50.
- ❌ ESP wymaga zarówno uwierzytelniania, jak i szyfrowania.

*EN:* Which three statements describe the IPsec protocol framework? → *AH provides integrity and authentication; ESP provides encryption, authentication, and integrity; AH uses IP protocol 51* (ESP = protokół 50)

### 11.59 Które stwierdzenie trafnie opisuje cechę IPsec?
- ❌ IPsec działa w warstwie aplikacji i chroni wszystkie dane aplikacji.
- ❌ IPsec to framework standardów Cisco oparty na algorytmach OSI.
- ❌ IPsec to framework zastrzeżonych standardów zależnych od Cisco.
- ❌ IPsec działa w warstwie transportowej i chroni dane w warstwie sieciowej.
- ✅ **IPsec to framework otwartych standardów oparty na istniejących algorytmach.**

*EN:* Which statement accurately describes a characteristic of IPsec? → *IPsec is a framework of open standards that relies on existing algorithms*

### 11.60 Które dwa protokoły/algorytmy IPsec zapewniają integralność danych? *(wybierz 2)*
- ✅ **SHA**
- ❌ AES
- ❌ DH
- ✅ **MD5**
- ❌ RSA

*EN:* Which two IPsec protocols are used to provide data integrity? → *SHA; MD5* (AES = poufność, DH = wymiana kluczy, RSA = uwierzytelnianie)

### 11.61 Jaka jest funkcja algorytmu Diffie-Hellman w frameworku IPsec?
- ❌ zapewnia uwierzytelnianie
- ✅ **pozwala peerom wymienić współdzielone klucze**
- ❌ gwarantuje integralność wiadomości
- ❌ zapewnia silne szyfrowanie danych

*EN:* What is the function of the Diffie-Hellman algorithm within the IPsec framework? → *allows peers to exchange shared keys*

### 11.62 🖼️ Jaki algorytm HMAC zapewnia integralność danych?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/CCNA-Security-Chapter-8-Exam-Answer-v2-002.png)

- ❌ MD5
- ❌ AES
- ✅ **SHA**
- ❌ DH

*EN:* What HMAC algorithm is being used to provide data integrity? → *SHA* (`hash sha`)

### 11.63 Co jest potrzebne do zdefiniowania interesującego ruchu przy tworzeniu tunelu IPsec?
- ❌ powiązania bezpieczeństwa (SA)
- ❌ algorytm haszujący
- ✅ **lista dostępu (access list)**
- ❌ transform set

*EN:* What is needed to define interesting traffic in the creation of an IPsec tunnel? → *access list*

### 11.64 🖼️ Jaki algorytm zapewni poufność?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/2022-07-11_090617.jpg)

- ❌ RSA
- ❌ Diffie-Hellman
- ❌ DES
- ✅ **AES**

*EN:* What algorithm will be used for providing confidentiality? → *AES*

### 11.65 Które dwa protokoły muszą być dozwolone, by tunel IPsec VPN działał poprawnie? *(wybierz 2)*
- ❌ 501
- ❌ 500
- ✅ **51 (AH)**
- ❌ 168
- ✅ **50 (ESP)**
- ❌ 169

*EN:* Which two protocols must be allowed for an IPsec VPN tunnel to operate? → *51 (AH); 50 (ESP)* (ISAKMP = UDP 500)

### 11.68 Jaka jest ważna cecha VPN dostępu zdalnego (remote-access)?
- ❌ Konfiguracja VPN jest identyczna między urządzeniami zdalnymi.
- ❌ Hosty wewnętrzne nie wiedzą o VPN.
- ❌ Informacje do ustanowienia VPN muszą pozostawać statyczne.
- ✅ **Połączenie VPN jest inicjowane przez zdalnego użytkownika.**

*EN:* What is an important characteristic of remote-access VPNs? → *The VPN connection is initiated by the remote user*

### 11.72 Jaki jest następny krok w ustanawianiu IPsec VPN po zakończeniu IKE Faza 1?
- ❌ negocjacja polityki ISAKMP
- ✅ **negocjacja polityki IPsec SA**
- ❌ wykrycie interesującego ruchu
- ❌ uwierzytelnienie peerów

*EN:* What is the next step after IKE Phase 1 is complete? → *negotiation of the IPsec SA policy* (Faza 2)

### 11.75 🖼️ Jaki wniosek z wyniku `show crypto map` na R1?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/Q19-1.jpg)

- ✅ **Crypto map nie został jeszcze zastosowany do interfejsu.**
- ❌ Bieżący adres IP peera powinien być 172.30.2.1.
- ❌ Niezgodność transform setów.
- ❌ Konfiguracja tunelu została ustanowiona i można ją testować ping.

*EN:* Which conclusion can be made from the show crypto map output? → *The crypto map has not yet been applied to an interface*

### 11.76 Które stwierdzenie opisuje cechę protokołu IKE?
- ✅ **Używa portu UDP 500 do wymiany informacji IKE między bramami bezpieczeństwa.**
- ❌ IKE Faza 1 może działać w trzech trybach: main, aggressive lub quick.
- ❌ Pozwala na przesyłanie kluczy bezpośrednio przez sieć.
- ❌ Celem IKE Faza 2 jest negocjacja SA między dwoma peerami IKE.

*EN:* Which statement describes a characteristic of the IKE protocol? → *It uses UDP port 500…* (uwaga: Faza 1 ma tryby main i aggressive, „quick" to Faza 2)

### 11.77 🖼️ Konfigurując site-to-site VPN przez ASDM między CCNAS-ASA a R3 — jakiego adresu IP użyć jako adres peera na ASA?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/Q26.jpg)

- ✅ **209.165.201.1**
- ❌ 192.168.1.3
- ❌ 172.16.3.1
- ❌ 172.16.3.3
- ❌ 192.168.1.1

*EN:* …which IP address would the administrator use for the peer IP address…? → *209.165.201.1* (zewnętrzny adres R3)

### 11.80 Które dwa protokoły można wybrać w Cisco AnyConnect VPN Wizard, by chronić ruch wewnątrz tunelu VPN? *(wybierz 2)*
- ❌ Telnet
- ❌ SSH
- ✅ **SSL**
- ❌ ESP
- ✅ **IPsec**

*EN:* Which two protocols can be selected using the Cisco AnyConnect VPN Wizard…? → *SSL; IPsec*

### 11.81 Który typ połączenia ASDM zapewnia bezpieczny dostęp zdalny dla użytkowników do sieci firmowych?
- ❌ ASDM Launcher
- ✅ **AnyConnect SSL VPN**
- ❌ site-to-site VPN
- ❌ Java Web Start VPN

*EN:* Which type of ASDM connection would provide secure remote access for remote users? → *AnyConnect SSL VPN*

### 11.82 Które dwa punkty końcowe mogą być po drugiej stronie site-to-site VPN ASA konfigurowanego przez ASDM? *(wybierz 2)*
- ✅ **inny ASA**
- ❌ przełącznik Frame Relay
- ❌ przełącznik wielowarstwowy
- ❌ przełącznik DSL
- ✅ **router ISR**

*EN:* Which two end points can be on the other side of an ASA site-to-site VPN…? → *another ASA; ISR router*

### 11.84 Co jest cechą site-to-site VPN na ASA?
- ❌ Tworzy bezpieczne połączenie pojedynczy-użytkownik-do-LAN.
- ✅ **Protokół IPsec chroni dane przesyłane przez tunel site-to-site.**
- ❌ ASA site-to-site VPN można ustanowić tylko między urządzeniami ASA.
- ❌ Pierwszy pakiet echo request testujący tunel zawsze się udaje.

*EN:* What is a characteristic of an ASA site-to-site VPN? → *The IPsec protocol protects the data transmitted through the site-to-site tunnel* (pierwszy ping zwykle zawodzi — negocjacja tunelu)

### 11.87 Jaka jest funkcja protokołu GRE?
- ❌ konfiguracja algorytmów szyfrowania i haszowania (transform set)
- ❌ zapewnienie szyfrowania przez tunel IPsec
- ❌ konfiguracja czasu życia tunelu IPsec
- ✅ **enkapsulacja wielu typów pakietów warstwy 3 OSI wewnątrz tunelu IP**

*EN:* What is a function of the GRE protocol? → *to encapsulate multiple OSI Layer 3 protocol packet types inside an IP tunnel* (GRE nie szyfruje)

### 11.88 Jaki typ ACL jest przeznaczony do konfiguracji ASA wspierającej filtrowanie dla bezklienckiego (clientless) SSL VPN?
- ✅ **Webtype**
- ❌ Standard
- ❌ Ethertype
- ❌ Extended

*EN:* What type of ACL is designed for use in the configuration of an ASA to support clientless SSL VPNs? → *Webtype*

---

## Wykłady 12–13: Cisco ASA

Łączy rozdziały 9 (ASA: poziomy bezpieczeństwa, NAT, ASDM, tryby) i 10 (zaawansowane ASA: ASDM, MPF, ASA VPN, AnyConnect SSL, AAA na ASA) CCNA.

### 12-13.1 🖼️ Jaka jest najlepsza praktyka przypisania poziomów bezpieczeństwa do trzech interfejsów ASA?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/ccnasec4.png)

- ❌ Outside 40, Inside 100, DMZ 0
- ❌ Outside 0, Inside 35, DMZ 90
- ❌ Outside 100, Inside 10, DMZ 40
- ✅ **Outside 0, Inside 100, DMZ 50**

*EN:* …best practice for assigning the security level on the three interfaces? → *Outside 0, Inside 100, DMZ 50* (0 = niezaufany, 100 = w pełni zaufany)

### 12-13.2 Jaka jest różnica między ACL IPv4 na ASA a na IOS?
- ❌ ACL ASA są zawsze nazwane, a IOS zawsze numerowane.
- ❌ Wiele ACL ASA można zastosować na interfejsie przychodząco, a IOS tylko jeden.
- ✅ **ACL ASA używają maski podsieci do definiowania sieci, a IOS maski blankietowej (wildcard).**
- ❌ ACL ASA nie mają niejawnego deny any na końcu, a IOS mają.
- ❌ ACL ASA używają forward/drop, a IOS permit/deny.

*EN:* What is a difference between ASA IPv4 ACLs and IOS IPv4 ACLs? → *ASA ACLs use the subnet mask…whereas IOS ACLs use the wildcard mask*

### 12-13.4 Które polecenie definiuje pulę DHCP używającą maksymalnej liczby adresów klientów na ASA 5505 z licencją Base?
- ❌ `dhcpd address 192.168.1.20-192.168.1.50 inside`
- ❌ `dhcpd address 192.168.1.10-192.168.1.100 inside`
- ✅ **`dhcpd address 192.168.1.25-192.168.1.56 inside`**
- ❌ `dhcpd address 192.168.1.30-192.168.1.79 inside`

*EN:* …command defines a DHCP pool that uses the maximum number…(Base license)? → *…1.25-1.56…* (licencja Base = 10 użytk., max 32 klientów DHCP = zakres 32 adresów)

### 12-13.5 🖼️ Ruch z Zone A do Zone C jest blokowany, ruch z Zone B do Zone C jest blokowany. Możliwy scenariusz dla stref A, B, C?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/CCNA-Security-Chapter-9-2.png)

- ❌ A – DMZ, B – Inside, C – Outside
- ❌ A – Inside, B – DMZ, C – Outside
- ❌ A – Outside, B – Inside, C – DMZ
- ✅ **A – DMZ, B – Outside, C – Inside**

*EN:* …possible scenario for Zones A, B, and C? → *A – DMZ, B – Outside, C – Inside* (Inside chroniony przed dostępem z DMZ i Outside)

### 12-13.6 Które dwa stwierdzenia są prawdziwe o standardowych ACL na ASA? *(wybierz 2)*
- ❌ Są najczęstszym typem ACL.
- ❌ Są stosowane na interfejsach do kontroli ruchu.
- ✅ **Są zwykle używane tylko dla tras OSPF.**
- ❌ Określają zarówno źródłowy, jak i docelowy MAC adres.
- ✅ **Identyfikują tylko docelowy adres IP.**

*EN:* Which two statements are true about ASA standard ACLs? → *typically only used for OSPF routes; identify only the destination IP address*

### 12-13.7 Co jest cechą poziomów bezpieczeństwa ASA?
- ✅ **Trzeba skonfigurować ACL, by jawnie zezwolić na ruch z interfejsu o niższym poziomie do interfejsu o wyższym poziomie.**
- ❌ Każdy interfejs musi mieć nazwę i poziom bezpieczeństwa od 0 do 200.
- ❌ Im niższy poziom bezpieczeństwa, tym bardziej zaufany interfejs.
- ❌ Ruch przychodzący to ruch z interfejsu o wyższym poziomie do niższego.

*EN:* What is a characteristic of ASA security levels? → *An ACL needs to be configured to explicitly permit traffic from a lower to a higher security level* (poziomy 0–100; wyższy→niższy = outbound)

### 12-13.8 Co trzeba skonfigurować na ASA, by wspierać uwierzytelnianie lokalne?
- ✅ **AAA**
- ❌ adres IP serwera RADIUS/TACACS+
- ❌ szyfrowane hasła
- ❌ SSHv2
- ❌ klucze RSA

*EN:* What must be configured on a Cisco ASA device to support local authentication? → *AAA*

### 12-13.9 Która różnica występuje między CLI ASA a CLI routera IOS?
- ❌ ASA używa `?`, a router `help` do pomocy o składni.
- ✅ **Aby użyć polecenia show w trybie konfiguracji ogólnej, ASA może użyć go bezpośrednio, a router musi poprzedzić je poleceniem `do`.**
- ❌ Do uzupełnienia polecenia ASA używa Ctrl+Tab, a router Tab.
- ❌ ASA oznacza tryb EXEC symbolem %, a router symbolem #.

*EN:* …a difference between the Cisco ASA CLI and the router CLI? → *ASA can use a show command directly in config mode whereas a router needs `do`* (oba używają # dla trybu uprzywilejowanego)

### 12-13.10 Jakie są dwie domyślne fabryczne konfiguracje na ASA 5505? *(wybierz 2)*
- ❌ VLAN 2 jest skonfigurowany z nazwą inside.
- ❌ Wewnętrzny serwer WWW jest wyłączony.
- ❌ Usługa DHCP jest włączona dla hostów wewnętrznych.
- ✅ **PAT jest skonfigurowany, by hosty wewnętrzne miały dostęp do sieci zdalnych przez interfejs Ethernet.**
- ✅ **VLAN 1 ma przypisany poziom bezpieczeństwa 100.**

*EN:* What are two factory default configurations on an ASA 5505? → *PAT is configured to allow internal hosts to access remote networks; VLAN 1 is assigned a security level of 100*

### 12-13.11 🖼️ Skonfigurowano dwa interfejsy VLAN na ASA 5505 z licencją Base. Administrator chce skonfigurować trzeci VLAN o ograniczonej funkcjonalności. Co zrobić?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/CCNA-Security-Chapter-9-Exam-Answer-v2-002-3.png)

- ❌ ASA 5505 nie wspiera trzeciego interfejsu, więc nie da się go skonfigurować.
- ✅ **Administrator musi wpisać `no forward interface vlan` przed poleceniem `nameif` na trzecim interfejsie.**
- ❌ Skonfigurować trzeci VLAN tak samo jak dwa pozostałe (Base to wspiera).
- ❌ Trzeba nabyć licencję Security Plus.

*EN:* …Which action should be taken to configure the third interface? → *enter the no forward interface vlan command before the nameif command*

### 12-13.12 Jaki jest cel ACL typu webtype na ASA?
- ❌ inspekcja ruchu wychodzącego do określonych stron WWW
- ❌ ograniczanie ruchu do ASDM
- ❌ monitorowanie ruchu zwrotnego z serwerów WWW
- ✅ **filtrowanie ruchu dla użytkowników bezklienckiego (clientless) SSL VPN**

*EN:* What is the purpose of the webtype ACLs in an ASA? → *to filter traffic for clientless SSL VPN users*

### 12-13.13 🖼️ Administrator skonfigurował NAT na ASA. Jaki typ NAT jest używany?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/CCNA-Security-Chapter-9-Exam-Answer-v2-002-3-1.png)

- ✅ **inside NAT**
- ❌ static NAT
- ❌ bidirectional NAT
- ❌ outside NAT

*EN:* What type of NAT is used? → *inside NAT* (host z interfejsu o wyższym poziomie → niższy, adres wewnętrzny tłumaczony na globalny)

### 12-13.14 🖼️ Które słowo kluczowe użyć po nazwie grupy obiektów SERVICE1?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/CCNA-Security-Chapter-9-Exam-Answer-v2-006-1.png)

- ❌ icmp
- ❌ ip
- ❌ udp
- ✅ **tcp**

*EN:* Which configuration keyword should be used after the object group name SERVICE1? → *tcp* (WWW, FTP, SMTP używają TCP)

### 12-13.15 Przy konfiguracji dynamicznego NAT na ASA — które dwa parametry muszą określać obiekty sieciowe? *(wybierz 2)*
- ✅ **zakres adresów prywatnych, które będą tłumaczone**
- ❌ poziom bezpieczeństwa interfejsu
- ✅ **pula publicznych adresów globalnych**
- ❌ wewnętrzny interfejs NAT
- ❌ zewnętrzny interfejs NAT

*EN:* …what two parameters must be specified by network objects? → *a range of private addresses to be translated; the pool of public global addresses*

### 12-13.16 Jaką funkcję pełni class map w Cisco Modular Policy Framework (MPF)?
- ✅ **identyfikowanie interesującego ruchu**
- ❌ stosowanie polityki do interfejsu
- ❌ stosowanie polityki do interesującego ruchu
- ❌ ograniczanie ruchu przez interfejs

*EN:* What function is performed by the class maps in the MPF? → *identifying interesting traffic* (class map = identyfikacja, policy map = akcja, service policy = podpięcie)

### 12-13.17 🖼️ Na podstawie poziomów bezpieczeństwa interfejsów ASA1 — jaki ruch będzie dozwolony?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/CCNA-Security-Chapter-9-Exam-Answer-v2-007-1.png)

- ❌ Ruch z Internetu i DMZ może uzyskać dostęp do LAN.
- ❌ Ruch z Internetu i LAN może uzyskać dostęp do DMZ.
- ❌ Ruch z Internetu może uzyskać dostęp do DMZ i LAN.
- ✅ **Ruch z LAN i DMZ może uzyskać dostęp do Internetu.**

*EN:* …what traffic will be allowed on the interfaces? → *Traffic from the LAN and DMZ can access the Internet* (wyższy poziom → niższy domyślnie dozwolony)

### 12-13.18 Jakie są trzy cechy trybu routowanego (routed mode) ASA? *(wybierz 3)*
- ❌ Ten tryb nazywany jest „bump in the wire".
- ❌ W tym trybie ASA jest niewidoczny dla napastnika.
- ✅ **Interfejsy ASA oddzielają sieci warstwy 3 i wymagają różnych adresów IP w różnych podsieciach.**
- ✅ **To tradycyjny tryb wdrożenia firewalla.**
- ❌ Ten tryb nie wspiera VPN, QoS ani DHCP Relay.
- ✅ **NAT można wdrożyć między połączonymi sieciami.**

*EN:* What are three characteristics of the ASA routed mode? → *interfaces separate Layer 3 networks and require different IP addresses; traditional firewall deployment mode; NAT can be implemented* („bump in the wire" = tryb transparentny)

### 12-13.19 🖼️ Skonfigurowano ASA 5505, ale wciąż nie można pingować interfejsu inside z hosta wewnętrznego. Przyczyna?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/CCNA-Security-Chapter-9-Exam-Answer-v2-008-1.png)

- ✅ **Należy wpisać `no shutdown` na interfejsie Ethernet 0/1.**
- ❌ VLAN 1 powinien być outside, a VLAN 2 inside.
- ❌ VLAN 1 powinien być przypisany do e0/0, a VLAN 2 do e0/1.
- ❌ Poziom inside powinien być 0, a outside 100.
- ❌ Należy skonfigurować adres IP na e0/0 i e0/1.

*EN:* …What is the cause of this problem? → *The no shutdown command should be entered on interface Ethernet 0/1* (interfejs nieaktywowany)

### 12-13.20 🖼️ Które trzy stwierdzenia są prawdziwe o opcjach DHCP wprowadzonych na ASA 5505? *(wybierz 3)*
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/CCNA-Security-Chapter-9-Exam-Answer-v2-009-1.png)

- ❌ `dhcpd address […] inside` włączono, by uruchomić klienta DHCP.
- ❌ `dhcpd auto-config outside` włączono, by uruchomić serwer DHCP.
- ✅ **`dhcpd address […] inside` włączono, by uruchomić serwer DHCP.**
- ✅ **`dhcpd auto-config outside` włączono, by uruchomić klienta DHCP.**
- ❌ `dhcpd enable inside` włączono, by uruchomić klienta DHCP.
- ✅ **`dhcpd enable inside` włączono, by uruchomić serwer DHCP.**

*EN:* …which three statements are true about the DHCP options? → *dhcpd address…inside = serwer; dhcpd auto-config outside = klient; dhcpd enable inside = serwer*

### 12-13.21 🖼️ Co wyświetli `show running-config object` po wprowadzeniu pokazanych poleceń na ASA 5505?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/CCNA-Security-Chapter-9-Exam-Answer-v2-010-1.png)

- ❌ host 192.168.1.4
- ❌ host .3, host .4 i range .10–.20
- ❌ host .4 i range .10–.20
- ❌ host .3 i host .4
- ✅ **range 192.168.1.10 192.168.1.20**
- ❌ host 192.168.1.3

*EN:* What will be displayed…? → *range 192.168.1.10 192.168.1.20* (obiekt sieciowy ma tylko jeden wpis — kolejny zastępuje poprzedni)

### 12-13.22 Który typ NAT zastosować na ASA, gdy adresy wewnętrzne 10.0.1.0/24 mają być tłumaczone tylko, gdy ruch jest kierowany do sieci 198.133.219.0/24?
- ✅ **policy NAT**
- ❌ dynamic NAT
- ❌ static NAT
- ❌ dynamic PAT

*EN:* Which type of NAT would be used…only if traffic is destined for a specific network? → *policy NAT*

### 12-13.23 Które stwierdzenie opisuje cechę AAA na ASA?
- ✅ **Accounting może być używany samodzielnie.**
- ❌ Autoryzacja jest domyślnie włączona.
- ❌ Jeśli autoryzacja jest wyłączona, wszyscy uwierzytelnieni użytkownicy mają bardzo ograniczony dostęp.
- ❌ Zarówno autoryzacja, jak i accounting wymagają wcześniejszego uwierzytelnienia.

*EN:* Which statement describes a feature of AAA in an ASA device? → *Accounting can be used alone* (autoryzacja wymaga uwierzytelnienia, ale accounting nie)

### 12-13.24 Administrator wdraża Cisco MPF na ASA i wydaje polecenie `clear service-policy`. Jaki jest efekt?
- ❌ Usuwane są wszystkie konfiguracje class map.
- ✅ **Usuwane są wszystkie dane statystyk service policy.**
- ❌ Usuwane są wszystkie service policy.
- ❌ Usuwane są wszystkie konfiguracje policy map.

*EN:* What is the effect after the clear service-policy command? → *All service policy statistics data are removed* (`clear configure service-policy` usuwa same polityki)

### 12-13.25 Co jest potrzebne, by zezwolić konkretnemu ruchowi z sieci zewnętrznej ASA dotrzeć do sieci wewnętrznej?
- ✅ **ACL**
- ❌ NAT
- ❌ protokoły routingu dynamicznego
- ❌ zewnętrzna strefa bezpieczeństwa poziom 0

*EN:* What is needed to allow specific traffic sourced on the outside network to reach an internal network? → *ACL* (domyślnie ruch płynie tylko z wyższego do niższego poziomu)

### 12-13.26 Które dwie cechy muszą być zgodne między urządzeniami ASA, by wdrożyć konfigurację failover? *(wybierz 2)*
- ✅ **model urządzenia**
- ❌ konfiguracja oprogramowania
- ❌ źródłowy adres IP
- ✅ **ilość pamięci RAM**
- ❌ następny przeskok (next-hop)

*EN:* What two features must match between ASA devices to implement a failover configuration? → *device model; amount of RAM*

### 12-13.27 Które dwa warunki muszą być spełnione, by zdalnie zarządzać wieloma ASA przez Cisco ASDM? *(wybierz 2)*
- ✅ **Wszystkie ASA muszą używać tej samej wersji ASDM.**
- ❌ Każdy ASA musi mieć to samo hasło enable secret.
- ❌ Każdy ASA musi mieć włączoną tę samą master passphrase.
- ❌ ASA muszą być połączone przez co najmniej jeden interfejs inside.
- ✅ **ASDM musi działać jako aplikacja lokalna.**

*EN:* Which two conditions must be met to remotely manage multiple ASAs with ASDM? → *all running the same ASDM version; ASDM must be run as a local application*

### 12-13.28 Które ustawienie interfejsu można skonfigurować w ASDM przez zakładkę Device Setup?
- ❌ port-security
- ❌ EtherChannel
- ❌ NAT
- ✅ **poziom bezpieczeństwa (security level)**

*EN:* Which interface setting can be configured in ASDM through the Device Setup tab? → *security level*

### 12-13.29 Jaka technologia oddziela fizyczne interfejsy ASA 5505 na różne strefy bezpieczeństwa?
- ❌ NAT
- ❌ quality of service
- ✅ **wirtualne sieci lokalne (VLAN)**
- ❌ listy kontroli dostępu

*EN:* What technology is used to separate physical interfaces on the ASA 5505 into different security zones? → *virtual local-area networks (VLANs)*

### 12-13.30 Jaki jest domyślny prekonfigurowany poziom bezpieczeństwa interfejsu sieci zewnętrznej (outside) na ASA 5505?
- ❌ 255
- ❌ 1
- ✅ **0**
- ❌ 100

*EN:* What is the default preconfigured security level for the outside network interface on a Cisco ASA 5505? → *0* (inside = 100)

### 12-13.31 Która opcja konfiguracji ASDM służy do ustawienia hasła enable secret ASA?
- ✅ **Device Setup**
- ❌ Monitoring
- ❌ Interfaces
- ❌ Device Management

*EN:* Which ASDM configuration option is used to configure the ASA enable secret password? → *Device Setup*

### 12-13.32 🖼️ Która opcja menu ASDM Device Setup służy do skonfigurowania ASA dla serwera NTP?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/CCNA-Security-Chapter-10-Exam-Answer-v2-002.png)

- ❌ Startup Wizard
- ❌ Device Name/Password
- ❌ Routing
- ❌ Interfaces
- ✅ **System Time**

*EN:* Which Device Setup ASDM menu option would be used to configure the ASA for an NTP server? → *System Time*

### 12-13.33 Prawda czy fałsz? ASA można skonfigurować przez ASDM jako serwer DHCP.
- ❌ fałsz
- ✅ **prawda**

*EN:* True or False? The ASA can be configured through ASDM as a DHCP server. → *true* (Device Management → DHCP)

### 12-13.34 Która opcja interfejsu ASDM służy do skonfigurowania ASA jako serwera DHCP dla lokalnych urządzeń firmowych?
- ❌ DMZ
- ❌ outside
- ❌ local
- ✅ **inside**

*EN:* Which ASDM interface option would be used to configure an ASA as a DHCP server for local corporate devices? → *inside*

### 12-13.36 Które rozwiązanie VPN pozwala użyć przeglądarki do ustanowienia bezpiecznego tunelu remote-access VPN do ASA?
- ✅ **clientless SSL (bezklienckie SSL)**
- ❌ site-to-site z ACL
- ❌ site-to-site z preshared key
- ❌ client-based SSL

*EN:* Which VPN solution allows the use of a web browser to establish a remote-access VPN tunnel? → *clientless SSL* (nie wymaga instalacji klienta VPN)

### 12-13.37 Co trzeba skonfigurować na ASA, zanim będzie dostępny przez ASDM?
- ✅ **dostęp do serwera WWW (web server access)**
- ❌ Telnet lub SSH
- ❌ port Ethernet inny niż 0/0
- ❌ adres IP Ethernet 0/0

*EN:* What must be configured on an ASA before it can be accessed by ASDM? → *web server access* (włączony serwer WWW ASA + uprawnienia + interfejs zarządzania)

### 12-13.38 Jak skonfigurować interfejs ASA jako outside w ASDM?
- ❌ Zaznaczyć pole z opcji Interface Type (inside, outside, DMZ).
- ❌ Wybrać outside z listy rozwijanej Interface Type.
- ✅ **Wpisać nazwę „outside" w polu Interface Name.**
- ❌ Przeciągnąć interfejs do portu „outside" na rysunku ASA.

*EN:* How is an ASA interface configured as an outside interface when using ASDM? → *Enter the name "outside" in the Interface Name text box*

### 12-13.39 🖼️ Która pozycja menu Device Management daje dostęp do wiersza poleceń ASA z poziomu ASDM?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/CCNA-Security-Chapter-10-Exam-Answer-v2-001-1.png)

- ❌ Licensing
- ❌ System Image/Configuration
- ✅ **Management Access**
- ❌ Advanced

*EN:* Which Device Management menu item would be used to access the ASA command line from within ASDM? → *Management Access* (→ Command Line (CLI) → CLI Prompt)

### 12-13.40 Które połączenie remote-access VPN pozwala połączyć się przez przeglądarkę?
- ❌ IPsec (IKEv2) VPN
- ❌ site-to-site VPN
- ✅ **clientless SSL VPN**
- ❌ IPsec (IKEv1) VPN

*EN:* Which remote-access VPN connection allows the user to connect by using a web browser? → *clientless SSL VPN*

### 12-13.43 Którą funkcję daje administratorowi ASDM uruchomiony jako aplikacja Java Web Start?
- ✅ **Administrator może połączyć się i zarządzać pojedynczym ASA.**
- ❌ …zarządzać wieloma urządzeniami ASA.
- ❌ …zarządzać wieloma ASA i routerami Cisco.
- ❌ …zarządzać wieloma ASA, routerami i przełącznikami Cisco.

*EN:* …function provided…using ASDM as a Java Web Start application? → *The administrator can connect to and manage a single ASA*

### 12-13.44 Jaka jest jedna zaleta używania ASDM zamiast CLI do konfiguracji ASA?
- ❌ Nie wymaga żadnej początkowej konfiguracji urządzenia.
- ✅ **Ukrywa złożoność poleceń bezpieczeństwa.**
- ❌ Zapewnia zwiększone bezpieczeństwo konfiguracji.
- ❌ Nie wymaga zdalnego połączenia z urządzeniem Cisco.

*EN:* What is one benefit of using ASDM compared to using the CLI…? → *It hides the complexity of security commands*

### 12-13.45 Jaki typ zabezpieczenia jest wymagany do początkowego dostępu do ASDM przez opcję aplikacji lokalnej?
- ✅ **SSL**
- ❌ WPA2 corporate
- ❌ biometryczne
- ❌ AES

*EN:* Which type of security is required for initial access to ASDM by using the local application option? → *SSL*

### 12-13.46 Jaka minimalna konfiguracja jest wymagana na większości ASA, zanim można użyć ASDM?
- ❌ SSH
- ✅ **dedykowany interfejs zarządzania warstwy 3**
- ❌ logiczny interfejs VLAN i port Ethernet inny niż 0/0
- ❌ Ethernet 0/0

*EN:* Which minimum configuration is required on most ASAs before ASDM can be used? → *a dedicated Layer 3 management interface* (na ASA 5505: logiczny VLAN + port inny niż 0/0)

### 12-13.47 Konfigurując ISR pod site-to-site VPN przez CLI — które dwie rzeczy trzeba podać, by włączyć politykę crypto map? *(wybierz 2)*
- ❌ hash
- ✅ **peer**
- ❌ szyfrowanie
- ❌ polityka ISAKMP
- ✅ **poprawna lista dostępu (ACL)**
- ❌ adresy IP na wszystkich aktywnych interfejsach

*EN:* …which two items must be specified to enable a crypto map policy? → *the peer; a valid access list*

### 12-13.48 Jaki jest cel ACL w konfiguracji site-to-site VPN na ISR?
- ❌ zezwalanie tylko na bezpieczne protokoły
- ❌ logowanie odrzuconego ruchu
- ❌ identyfikacja peera
- ✅ **zdefiniowanie interesującego ruchu**

*EN:* What is the purpose of the ACL in the configuration of an ISR site-to-site VPN? → *to define interesting traffic*

### 12-13.49 Które połączenie remote-access VPN pozwala połączyć się przez Cisco AnyConnect?
- ✅ **IPsec (IKEv2) VPN**
- ❌ site-to-site VPN
- ❌ clientless SSL VPN
- ❌ IPsec (IKEv1) VPN

*EN:* Which remote-access VPN connection allows the user to connect using Cisco AnyConnect? → *IPsec (IKEv2) VPN* (klient VPN Cisco = IKEv1, przeglądarka = clientless SSL)

### 12-13.50 Które stwierdzenie opisuje dostępne metody uwierzytelniania użytkowników na ASA 5505?
- ✅ **ASA 5505 może użyć serwera AAA lub bazy lokalnej.**
- ❌ ASA 5505 używa tylko serwera AAA.
- ❌ ASA 5505 używa tylko bazy lokalnej.
- ❌ ASA 5505 musi użyć i serwera AAA, i bazy lokalnej.

*EN:* Which statement describes available user authentication methods when using an ASA 5505? → *The ASA 5505 can use either a AAA server or a local database*

### 12-13.51 Które połączenie remote-access VPN potrzebuje listy zakładek (bookmark list)?
- ❌ IPsec (IKEv1) VPN
- ❌ IPsec (IKEv2) VPN
- ❌ site-to-site VPN
- ✅ **clientless SSL VPN**

*EN:* Which remote-access VPN connection needs a bookmark list? → *clientless SSL VPN* (zestaw URL w portalu WWW)

### 12-13.52 Co dzieje się, gdy użytkownik wylogowuje się z portalu WWW przy clientless SSL VPN?
- ❌ Czyszczony jest cache przeglądarki.
- ❌ Usuwane są pobrane pliki.
- ✅ **Użytkownik traci dostęp do VPN.**
- ❌ Portal WWW wygasa (timeout).

*EN:* What occurs when a user logs out of the web portal on a clientless SSL VPN? → *The user no longer has access to the VPN*

### 12-13.53 Jeśli host zewnętrzny nie ma preinstalowanego klienta Cisco AnyConnect, jak uzyska dostęp do obrazu klienta?
- ❌ Inicjuje bezklienckie połączenie z serwerem TFTP, by pobrać klienta.
- ✅ **Inicjuje bezklienckie połączenie VPN przez zgodną przeglądarkę, by pobrać klienta.**
- ❌ Cisco AnyConnect jest domyślnie zainstalowany na większości systemów.
- ❌ Inicjuje bezklienckie połączenie z serwerem FTP.

*EN:* …how would the host gain access to the client image? → *initiates a clientless VPN connection using a compliant web browser to download the client*

### 12-13.55 Które stwierdzenie opisuje wsparcie bezpiecznych protokołów przez Cisco AnyConnect?
- ❌ ani SSL, ani IPsec
- ❌ tylko SSL
- ✅ **zarówno SSL, jak i IPsec**
- ❌ tylko IPsec

*EN:* Which item describes secure protocol support provided by Cisco AnyConnect? → *both SSL and IPsec*

### 12-13.56 Jaki jest cel skonfigurowania puli adresów IP dla połączeń client-based SSL VPN?
- ❌ przypisanie adresów do interfejsów ASA
- ❌ identyfikacja, którzy użytkownicy mogą pobrać obraz klienta
- ✅ **przypisywanie adresów IP klientom, gdy się łączą**
- ❌ identyfikacja, którzy klienci mogą się łączyć

*EN:* What is the purpose of configuring an IP address pool for client-based SSL VPN connections? → *to assign IP addresses to clients when they connect*

### 12-13.57 Mała firma ma serwer WWW (192.168.10.15) dostępny z Internetu. Co jest wymagane w konfiguracji NAT?
- ❌ pula adresów IPv4
- ❌ ACL identyfikujący lokalny adres serwera WWW
- ❌ słowo kluczowe `overload` dla `ip nat inside source`
- ✅ **polecenie `ip nat inside source static` łączące adres inside local i inside global**

*EN:* Which item is required in the NAT configuration? → *the ip nat inside source command to link the inside local and inside global addresses* (statyczny NAT dla serwera dostępnego z Internetu)

### 12-13.59 🖼️ Co trzeba zrobić, by dokończyć konfigurację statycznego NAT na R1?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/2020-01-25_222653.png)

- ❌ Skonfigurować R1: `ip nat inside source static 209.165.200.1 192.168.11.11`.
- ❌ Skonfigurować R1: `ip nat inside source static 209.165.200.200 192.168.11.11`.
- ✅ **Skonfigurować interfejs S0/0/0 poleceniem `ip nat outside`.**
- ❌ Skonfigurować interfejs Fa0/0 poleceniem `no ip nat inside`.

*EN:* What has to be done to complete the static NAT configuration on R1? → *Interface S0/0/0 should be configured with the command ip nat outside* (NAT wymaga interfejsu inside i outside)

### 12-13.60 Które stwierdzenie trafnie opisuje dynamiczny NAT?
- ❌ Zawsze mapuje prywatny adres IP na publiczny.
- ✅ **Zapewnia automatyczne mapowanie adresów inside local na inside global.**
- ❌ Zapewnia mapowanie nazw hostów na adresy IP.
- ❌ Dynamicznie przydziela adresy IP hostom wewnętrznym.

*EN:* Which statement accurately describes dynamic NAT? → *It provides an automated mapping of inside local to inside global IP addresses*

---

## Różne: pytania ogólnosieciowe (z egzaminów zbiorczych)

> Pytania o ogólne podstawy sieciowe (adresacja, routing, OSPF, DHCP) z egzaminów zbiorczych — tylko częściowo związane z bezpieczeństwem.

### R.1 Które dwie maski blankietowe (wildcard) są wymagane w rozszerzonym ACL blokującym ruch z sieci 192.168.20.0/26 do 172.16.32.0/28? *(wybierz 2)*
- ❌ 0.0.63.255
- ✅ **0.0.0.63** (dla /26)
- ❌ 0.0.0.31
- ✅ **0.0.0.15** (dla /28)
- ❌ 0.0.0.0

*EN:* Which two wildcard masks are required…? → *0.0.0.63 (/26); 0.0.0.15 (/28)*

### R.3 Jaki jest skutek ataku DHCP starvation?
- ✅ **Legalni klienci nie mogą wydzierżawić adresów IP.**
- ❌ Adresy IP przypisane legalnym klientom są przejmowane.
- ❌ Napastnik dostarcza klientom błędne DNS i bramę domyślną.
- ❌ Klienci otrzymują adresy od fałszywego serwera DHCP.

*EN:* What is the result of a DHCP starvation attack? → *Legitimate clients are unable to lease IP addresses*

### R.5 🖼️ Interfejs szeregowy R1 jest „administratively down". Jakie polecenie go włączy?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/i209408v1n1_209408.jpg)

- ❌ `IPv6 enable`
- ❌ `clockrate 128000`
- ❌ `end`
- ✅ **`no shutdown`**

*EN:* What additional command must be entered…to bring the interface up? → *no shutdown*

### R.9 🖼️ Host na Fa0/0 nie może uzyskać adresu IP z serwera DHCP. `debug ip dhcp server` pokazuje „there is no address pool for 192.168.1.1". Problem?
🖼️ **Pytanie ze zdjęciem:**

![exhibit](obrazy_ccna/16318.jpg)

- ❌ Adres 192.168.1.1 nie został wykluczony z puli DHCP.
- ✅ **Pula adresów dla „192Network" jest nieprawidłowa.**
- ❌ Brama domyślna dla „192Network" jest nieprawidłowa.
- ❌ Adres 192.168.1.1 jest już skonfigurowany na Fa0/0.

*EN:* What is the problem? → *The pool of addresses for the 192Network pool is incorrect*

### R.12 Jaka jest najlepsza praktyka dotycząca protokołów odkrywania (CDP, LLDP) na urządzeniach sieciowych?
- ❌ Włączyć CDP na urządzeniach brzegowych, a LLDP na wewnętrznych.
- ❌ Używać domyślnych ustawień routera dla CDP i LLDP.
- ❌ Używać otwartego standardu LLDP zamiast CDP.
- ✅ **Wyłączyć oba protokoły na wszystkich interfejsach, gdzie nie są wymagane.**

*EN:* What represents a best practice concerning discovery protocols such as CDP and LLDP? → *Disable both protocols on all interfaces where they are not required* (mogą ujawnić wrażliwe info; CDP jest domyślnie włączony)

### R.13 Technik diagnozuje NAT na ASA i pinguje z hosta wewnętrznego do zewnętrznego. Które polecenie weryfikuje, że adresy są tłumaczone na ASA?
- ❌ `show ip nat translation`
- ❌ `show running-config`
- ✅ **`show xlate`**
- ❌ `show ip address`

*EN:* Which command verifies that addresses are being translated on the ASA? → *show xlate* (na ASA; na routerze IOS byłoby `show ip nat translations`)
