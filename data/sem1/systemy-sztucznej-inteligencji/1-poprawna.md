Jaki jest sens eksperymentu myślowego „chiński pokój” (Searle’a) w dyskusji o definicji SI?
Definicja agenta racjonalnego w SI mówi, że agent:
Działanie (akcja) w pętli agent–środowisko:
Które z poniższych najlepiej oddaje ogólną definicję sztucznej inteligencji (SI)?
Jaki jest sens testu Turinga w kontekście definiowania SI?
(Python) Które polecenia tworzą środowisko?
(Python/NumPy) Jak utworzyć wektor [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]?
(Python/pandas) Jak odczytać plik CSV people.csv do pandas.DataFrame i zobaczyć podstawowe statystyki?
(Python/NumPy) Który zapis poprawnie tworzy macierz 2 × 3 z liczb 0, . . . , 5?
(Python) Co zwróci poniższy kod? lst = [1,2,3]; lst.append([4,5]); lst
(Python/NumPy) Jak wybrać tylko liczby parzyste z a = numpy.arange(10)?
Ordinal encoding jest właściwy, gdy:
Czym jest standaryzacja z-score?
Label encoding cechy kategorycznej:
Transformacja Yeo–Johnson względem Box–Coxa:
Dyskretyzacja (binning) cechy numerycznej polega na:
(Python/sklearn) RobustScaler w scikit-learn:
W jakich scenariuszach semi-supervised jest szczególnie uzasadnione?
Krzywe uczenia (learning curves) dla underfittingu zwykle pokazują:
Uczenie przez transfer (Transfer Learning) polega na:
Która definicja najlepiej opisuje uczenie maszynowe (ML)?
Uczenie samonadzorowane (Self-Supervised Learning) polega na:
W Reinforcement Learning (RL), w porównaniu do supervised, różnica w sygnale nadzoru polega na tym, że:
Jak rozpoznać nadmierną wariancję modelu (high variance)?
Czym różnią się selekcja cech od redukcji wymiarowości?
Czym różnią się parametry od hiperparametrów w ML?
Uczenie nienadzorowane (Unsupervised Learning) najlepiej opisuje:
W którym paradygmacie nie korzysta się z ręcznie nadanych etykiet podczas pre-treningu, ale wykorzystuje się je często przy fine-tuningu?
(Python/sklearn) Co oznacza hiperparametr α w Ridge i Lasso?
(Python/sklearn) Po co stosować zagnieżdżoną walidację krzyżową przy strojeniu hiperparametrów?
(Python/sklearn) Jak poprawnie zbudować regresję wielomianową?
Które elementy są charakterystyczne dla sieci semantycznych?
Czym charakteryzuje się wiedza deklaratywna w systemach SI?
Czym różnią się grafy semantyczne od ram (frames)?
Co dodaje logika predykatów względem logiki zdań?
(Python) Kiedy unifikacja parent(’?x’,’ola’) ze zmienną ’?x’ z parent(’eva’,’ola’) powiedzie się i jaką da substytucję?
(Python) Które zdania o duplikatach faktów są prawdziwe?
(Python) Czym jest atom w reprezentacji wiedzy wykorzystywanej w regułach Horna?
(Python) Które z poniższych stwierdzeń o regułach z dwiema przesłankami jest poprawne?
(Python) Wskaż różnicę między forward i backward chaining.
(Python) Dla relacji ancestor wskaż poprawny zestaw reguł.
(Python) W łańcuchowaniu w przód (forward chaining):
Czym w kontekście AI jest problem deterministyczny przeszukiwania?
Które stwierdzenia o czynniku rozgałęzienia i głębokości rozwiązania są sensowne?
Algorytm iteracyjnego przeszukiwania z heurystyką — na czym polega aktualizacja progu i kiedy algorytm kończy?
Checklista: kiedy STRIPS jest naturalnym wyborem?
W problemie deterministycznym graf AND-OR jest:
Kiedy Przeszukiwanie z kosztami i Przeszukiwanie wszerz zachowują się identycznie?
Jakie warunki muszą zachodzić, aby przeszukiwanie wszerz było zupełne i optymalne w problemie deterministycznym?
Algorytm iteracyjnego przeszukiwania z heurystyką (IDA*), gdzie g(n) to koszt ścieżki od startu, a h(n) to heurystyka do celu – wskaż poprawny opis.
Kiedy warto wybrać algorytm iteracyjnego przeszukiwania z heurystyką zamiast algorytmu A*?
Warunki optymalności algorytmu A* — które są właściwe?
Dla którego typu problemu deterministyczny, wieloetapowy czy niedeterministyczny, wieloetapowy klasyczne A* (f=g+h) jest naturalnym wyborem bez modyfikacji?
(Python) Kiedy algorytm Dijkstry gwarantuje optymalność znalezionej ścieżki?
(Python) Kiedy odległość Manhattan jest naturalną heurystyką?
(Python) Softmax i entropia krzyżowa. Logity z = (1, 0, 0); prawdopodobieństwa Softmax pᵢ = e^(zᵢ) / Σⱼ e^(zⱼ); ∂L/∂zᵢ = pᵢ − yᵢ; prawdziwa etykieta to pierwsza klasa y = (1, 0, 0). Podaj przybliżony gradient dL/dz.
Co oznacza, że sieć neuronowa jest warstwowa?
(Python) Dwuwarstwowy model liniowy bez nieliniowości: y_hat = W2 * (W1 * x) (skalary). Strata: L = 0.5*(y_hat − y)**2. Dla x=2, W1=3, W2=4, y=10 oblicz dL/dW1 i dL/dW2.
Dlaczego funkcja prostująca (ReLU) może prowadzić do zjawiska „martwych neuronów"?
Jak normalizacja lub standaryzacja wejść może oddziaływać na wybór funkcji aktywacji?
Do czego służy funkcja miękka maksymalizacja (Softmax) w warstwie wyjściowej?
Jak w prostym ujęciu zbudowana jest warstwa w sieci neuronowej?
Jaką rolę pełni funkcja straty w uczeniu sieci neuronowych?
Wskaż prawidłowy opis obliczenia w neuronie sztucznym.
Jakie wady może mieć funkcja sigmoidalna w głębokich sieciach?
Neuron z wyciekającą funkcją prostującą: z = w*x + b, y_hat = LeakyReLU(z) z alpha = 0.1, L = 0.5*(y_hat − y)**2. Dla x=5, w=−0.2, b=0, y=1 oblicz dL/dw i dL/db.
Neuron z sigmoidą i MSE: z = w*x + b, y_hat = sigmoid(z), L = 0.5*(y_hat − y)**2. Dla x=2, w=−1, b=0, y=0.5 oblicz dL/dw i dL/db. (Użyj: sigmoid(−2) = 0.1192, pochodna w tym punkcie 0.105.)
Co w prostym ujęciu oznacza głębokość sieci neuronowej?
Momentum: jaki jest jego główny cel?
Dany jest neuron liniowy: y_hat = w*x + b. Funkcja straty: L = 0.5*(y_hat − y)**2. Dla x=3, w=2, b=1, y=5 oblicz dL/dw i dL/db.
Neuron z funkcją prostującą: y_hat = ReLU(z), z = w*x. Strata: L = 0.5*(y_hat − y)**2. Dla x=5, w=−1, y=1 oblicz dL/dw.
Po co w neuronie sztucznym stosuje się funkcję aktywacji?
Kiedy funkcja wyciekająca prostująca (Leaky ReLU) bywa lepsza niż funkcja prostująca (ReLU)?
Neuron z sigmoidą: z = w*x + b, y_hat = sigmoid(z). Strata: L = 0.5*(y_hat − y)**2. Dla x=1, w=0, b=0, y=1 oblicz dL/dw oraz dL/db. (Użyj faktu: sigmoid(0)=0.5, pochodna sigmoidy w 0 to 0.25.)
Czym w ogólnym ujęciu są sieci neuronowe w sztucznej inteligencji?
Oblicz pochodne dla neuronu liniowego: y_hat = w*x + b, L = 0.5*(y_hat − y)**2. Dla x=4, w=1.5, b=−2, y=3 podaj dL/dw i dL/db.
Aktualizacja biasu metodą spadku gradientowego: b := b − eta * dL/db. Dla b=0.5, dL/db = −0.2, eta=0.1 oblicz nowe b.
Jak wybór funkcji aktywacji w warstwach ukrytych wpływa na głębokość i zbieżność uczenia?

Liczba pytań: 78
