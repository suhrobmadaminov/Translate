const LANGUAGES = [
  { code: 'uz', label: "O'zbek" },
  { code: 'en', label: 'Ingliz' },
  { code: 'ru', label: 'Rus' }
];

const STORAGE_KEYS = {
  history: 'polyglot_history_v1',
  favorites: 'polyglot_favorites_v1',
  stats: 'polyglot_stats_v1',
  cache: 'polyglot_cache_v1'
};

const MAX_HISTORY = 20;
const DEBOUNCE_DELAY = 500;
const API_DAILY_LIMIT = 500;

const offlineCorpus = [
  { uz: 'salom', en: 'hello', ru: 'привет' },
  { uz: 'rahmat', en: 'thank you', ru: 'спасибо' },
  { uz: 'iltimos', en: 'please', ru: 'пожалуйста' },
  { uz: 'ha', en: 'yes', ru: 'да' },
  { uz: "yo'q", en: 'no', ru: 'нет' },
  { uz: 'kechirasiz', en: 'sorry', ru: 'извините' },
  { uz: 'hayr', en: 'goodbye', ru: 'до свидания' },
  { uz: 'qayerda', en: 'where', ru: 'где' },
  { uz: 'qachon', en: 'when', ru: 'когда' },
  { uz: 'nega', en: 'why', ru: 'почему' },
  { uz: 'kim', en: 'who', ru: 'кто' },
  { uz: 'nima', en: 'what', ru: 'что' },
  { uz: 'uy', en: 'home', ru: 'дом' },
  { uz: 'ish', en: 'work', ru: 'работа' },
  { uz: 'kitob', en: 'book', ru: 'книга' },
  { uz: 'maktab', en: 'school', ru: 'школа' },
  { uz: 'talaba', en: 'student', ru: 'студент' },
  { uz: 'oila', en: 'family', ru: 'семья' },
  { uz: 'doʻst', en: 'friend', ru: 'друг' },
  { uz: 'ovqat', en: 'food', ru: 'еда' },
  { uz: 'suv', en: 'water', ru: 'вода' },
  { uz: 'choy', en: 'tea', ru: 'чай' },
  { uz: 'qahva', en: 'coffee', ru: 'кофе' },
  { uz: 'non', en: 'bread', ru: 'хлеб' },
  { uz: 'sut', en: 'milk', ru: 'молоко' },
  { uz: 'bozor', en: 'market', ru: 'рынок' },
  { uz: 'doʻkon', en: 'shop', ru: 'магазин' },
  { uz: 'telefon', en: 'phone', ru: 'телефон' },
  { uz: 'kompyuter', en: 'computer', ru: 'компьютер' },
  { uz: 'internet', en: 'internet', ru: 'интернет' },
  { uz: 'tungi', en: 'night', ru: 'ночь' },
  { uz: 'kunduzgi', en: 'day', ru: 'день' },
  { uz: 'bugun', en: 'today', ru: 'сегодня' },
  { uz: 'kecha', en: 'yesterday', ru: 'вчера' },
  { uz: 'ertaga', en: 'tomorrow', ru: 'завтра' },
  { uz: 'tez', en: 'fast', ru: 'быстро' },
  { uz: 'sekin', en: 'slow', ru: 'медленно' },
  { uz: 'yangi', en: 'new', ru: 'новый' },
  { uz: 'eski', en: 'old', ru: 'старый' },
  { uz: 'katta', en: 'big', ru: 'большой' },
  { uz: 'kichik', en: 'small', ru: 'маленький' },
  { uz: 'yaxshi', en: 'good', ru: 'хороший' },
  { uz: 'yomon', en: 'bad', ru: 'плохой' },
  { uz: 'issiq', en: 'hot', ru: 'горячий' },
  { uz: 'sovuq', en: 'cold', ru: 'холодный' },
  { uz: 'narx', en: 'price', ru: 'цена' },
  { uz: 'oy', en: 'month', ru: 'месяц' },
  { uz: 'hafta', en: 'week', ru: 'неделя' },
  { uz: 'soat', en: 'hour', ru: 'час' },
  { uz: 'daqiqalar', en: 'minutes', ru: 'минуты' },
  { uz: 'sekund', en: 'second', ru: 'секунда' },
  { uz: 'tong', en: 'morning', ru: 'утро' },
  { uz: 'kechqurun', en: 'evening', ru: 'вечер' },
  { uz: 'dushanba', en: 'monday', ru: 'понедельник' },
  { uz: 'seshanba', en: 'tuesday', ru: 'вторник' },
  { uz: 'chorshanba', en: 'wednesday', ru: 'среда' },
  { uz: 'payshanba', en: 'thursday', ru: 'четверг' },
  { uz: 'juma', en: 'friday', ru: 'пятница' },
  { uz: 'shanba', en: 'saturday', ru: 'суббота' },
  { uz: 'yakshanba', en: 'sunday', ru: 'воскресенье' },
  { uz: 'ota', en: 'father', ru: 'отец' },
  { uz: 'ona', en: 'mother', ru: 'мать' },
  { uz: 'aka', en: 'brother', ru: 'брат' },
  { uz: 'opa', en: 'sister', ru: 'сестра' },
  { uz: 'bola', en: 'child', ru: 'ребенок' },
  { uz: 'oʻgʻil', en: 'boy', ru: 'мальчик' },
  { uz: 'qiz', en: 'girl', ru: 'девочка' },
  { uz: 'erkak', en: 'man', ru: 'мужчина' },
  { uz: 'ayol', en: 'woman', ru: 'женщина' },
  { uz: 'shahar', en: 'city', ru: 'город' },
  { uz: 'qishloq', en: 'village', ru: 'деревня' },
  { uz: 'uygʻonish', en: 'wake up', ru: 'просыпаться' },
  { uz: 'uxlash', en: 'sleep', ru: 'спать' },
  { uz: 'yurish', en: 'walk', ru: 'идти' },
  { uz: 'yugurish', en: 'run', ru: 'бежать' },
  { uz: 'koʻrish', en: 'see', ru: 'видеть' },
  { uz: 'eshitish', en: 'hear', ru: 'слышать' },
  { uz: "gaplashish", en: 'speak', ru: 'говорить' },
  { uz: 'yozish', en: 'write', ru: 'писать' },
  { uz: 'oʻqish', en: 'read', ru: 'читать' },
  { uz: 'oʻyin', en: 'game', ru: 'игра' },
  { uz: 'musiqa', en: 'music', ru: 'музыка' },
  { uz: 'kino', en: 'movie', ru: 'фильм' },
  { uz: 'sayohat', en: 'travel', ru: 'путешествие' },
  { uz: 'muammo', en: 'problem', ru: 'проблема' },
  { uz: 'yechim', en: 'solution', ru: 'решение' },
  { uz: 'savol', en: 'question', ru: 'вопрос' },
  { uz: 'javob', en: 'answer', ru: 'ответ' },
  { uz: 'ishxonaga borish', en: 'go to work', ru: 'идти на работу' },
  { uz: 'uyga qaytish', en: 'return home', ru: 'возвращаться домой' },
  { uz: 'kutmoq', en: 'wait', ru: 'ждать' },
  { uz: 'umid', en: 'hope', ru: 'надежда' },
  { uz: 'sevgi', en: 'love', ru: 'любовь' },
  { uz: 'baxt', en: 'happiness', ru: 'счастье' },
  { uz: 'sogʻliq', en: 'health', ru: 'здоровье' },
  { uz: 'shifokor', en: 'doctor', ru: 'врач' },
  { uz: 'bemor', en: 'patient', ru: 'пациент' },
  { uz: 'dori', en: 'medicine', ru: 'лекарство' },
  { uz: 'transport', en: 'transport', ru: 'транспорт' },
  { uz: 'avtobus', en: 'bus', ru: 'автобус' },
  { uz: 'poyezd', en: 'train', ru: 'поезд' },
  { uz: 'samolyot', en: 'airplane', ru: 'самолет' },
  { uz: 'taksi', en: 'taxi', ru: 'такси' },
  { uz: 'yoq', en: 'not available', ru: 'нету' },
  { uz: 'bor', en: 'there is', ru: 'есть' },
  { uz: 'kerak', en: 'need', ru: 'нужно' },
  { uz: 'boraman', en: 'I will go', ru: 'я пойду' },
  { uz: 'kelaman', en: 'I will come', ru: 'я приду' },
  { uz: 'oʻqiyman', en: 'I study', ru: 'я учусь' }
];

const elements = {
  onlineStatus: document.getElementById('online-status'),
  totalTranslationsChip: document.getElementById('total-translations'),
  fromLanguage: document.getElementById('from-language'),
  toLanguage: document.getElementById('to-language'),
  autoDetect: document.getElementById('auto-detect'),
  inputText: document.getElementById('input-text'),
  translateButton: document.getElementById('translate-button'),
  loadingIndicator: document.getElementById('loading-indicator'),
  mainOutput: document.getElementById('main-output'),
  extraOutput: document.getElementById('extra-output'),
  clearInput: document.getElementById('clear-input'),
  copyOutput: document.getElementById('copy-output'),
  shareOutput: document.getElementById('share-output'),
  favoriteOutput: document.getElementById('favorite-output'),
  historyList: document.getElementById('history-list'),
  favoritesList: document.getElementById('favorites-list'),
  downloadHistory: document.getElementById('download-history'),
  clearHistory: document.getElementById('clear-history'),
  errorBanner: document.getElementById('error-banner'),
  detectedLanguage: document.getElementById('detected-language'),
  statsTotal: document.getElementById('stat-total'),
  statsToday: document.getElementById('stat-today'),
  statsTop: document.getElementById('stat-top'),
  statsApi: document.getElementById('stat-api'),
  swapLanguages: document.getElementById('swap-languages'),
  voiceInput: document.getElementById('voice-input'),
  currentYear: document.getElementById('current-year')
};

const state = {
  history: loadFromStorage(STORAGE_KEYS.history, []),
  favorites: loadFromStorage(STORAGE_KEYS.favorites, []),
  stats: loadFromStorage(STORAGE_KEYS.stats, {
    total: 0,
    todayCount: 0,
    todayDate: getToday(),
    languageUsage: { uz: 0, en: 0, ru: 0 },
    apiCallsToday: 0,
    apiDate: getToday()
  }),
  cache: new Map(),
  debounceTimer: null,
  lastInputValue: '',
  detectedLanguage: null
};

hydrateCache();
renderHistory();
renderFavorites();
renderStats();
updateOnlineStatus();
updateCurrentYear();

if (elements.autoDetect.checked) {
  elements.fromLanguage.setAttribute('disabled', 'true');
}

elements.inputText.addEventListener('input', handleDebouncedInput);
elements.translateButton.addEventListener('click', () => handleTranslate(false));
elements.toLanguage.addEventListener('change', () => handleTranslate(false));
elements.autoDetect.addEventListener('change', handleAutoDetectToggle);
elements.clearInput.addEventListener('click', clearInput);
elements.copyOutput.addEventListener('click', copyCurrentOutput);
elements.shareOutput.addEventListener('click', shareCurrentOutput);
elements.favoriteOutput.addEventListener('click', toggleFavoriteFromOutput);
elements.downloadHistory.addEventListener('click', downloadHistoryJson);
elements.clearHistory.addEventListener('click', clearHistory);
elements.swapLanguages.addEventListener('click', swapLanguages);
elements.inputText.addEventListener('keydown', e => {
  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
    handleTranslate(false);
  }
});

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

async function handleDebouncedInput() {
  const text = elements.inputText.value;
  if (!text.trim()) {
    resetOutputs();
    return;
  }

  state.lastInputValue = text;
  clearTimeout(state.debounceTimer);
  state.debounceTimer = setTimeout(() => handleTranslate(true), DEBOUNCE_DELAY);
}

async function handleTranslate(isAutoTriggered) {
  const text = elements.inputText.value.trim();
  hideError();

  if (!text) {
    showError("So'z yoki matn kiriting");
    resetOutputs();
    return;
  }

  const autoDetect = elements.autoDetect.checked;
  const fromLang = autoDetect ? 'auto' : elements.fromLanguage.value;
  const targetLang = elements.toLanguage.value;

  if (!autoDetect && fromLang === targetLang) {
    showError('Til tanlanmagan yoki bir xil');
    return;
  }

  try {
    showLoading(true);
    const mainResult = await fetchTranslation(text, fromLang, targetLang);
    state.detectedLanguage = mainResult.detectedLanguage;
    updateDetectedLanguage(state.detectedLanguage || fromLang);

    const extraLanguages = LANGUAGES.map(l => l.code).filter(code => {
      if (code === targetLang) return false;
      const baseLang = state.detectedLanguage || (fromLang === 'auto' ? null : fromLang);
      return code !== baseLang;
    });

    const extraPromises = extraLanguages.map(code =>
      fetchTranslation(text, state.detectedLanguage || fromLang, code, { skipHistory: true, skipStats: true })
    );

    const extraResults = await Promise.allSettled(extraPromises);

    renderOutputs(mainResult, extraLanguages, extraResults);

    if (!isAutoTriggered) {
      addToHistory(mainResult);
    }
  } catch (error) {
    console.error('Translation failed:', error);
    showError(error.message || 'Xatolik yuz berdi, qayta urinib ko‘ring');
  } finally {
    showLoading(false);
  }
}

function resetOutputs() {
  elements.mainOutput.innerHTML = `<p class="placeholder">Natija shu yerda paydo bo'ladi</p>`;
  elements.extraOutput.innerHTML = '';
  state.detectedLanguage = null;
  updateDetectedLanguage(null);
}

async function fetchTranslation(text, fromLang, toLang, options = {}) {
  const normalizedText = text.trim();
  const cacheKey = `${normalizedText}__${fromLang}__${toLang}`.toLowerCase();

  if (state.cache.has(cacheKey)) {
    return { ...state.cache.get(cacheKey), cached: true };
  }

  if (!navigator.onLine) {
    const offlineResult = offlineTranslate(normalizedText, fromLang, toLang);
    if (offlineResult) {
      const wrappedOffline = {
        originalText: normalizedText,
        translatedText: offlineResult,
        fromLang: resolveLanguage(fromLang),
        toLang,
        detectedLanguage: fromLang === 'auto' ? resolveLanguage(fromLang) : fromLang,
        quality: 0,
        offline: true,
        timestamp: Date.now()
      };
      cacheResult(cacheKey, wrappedOffline);
      if (!options.skipStats) {
        updateStats(wrappedOffline);
      }
      return wrappedOffline;
    }
    throw new Error('Internet aloqasi yo‘q, offline lug‘atda topilmadi');
  }

  const encodedText = encodeURIComponent(normalizedText);
  const url = `https://api.mymemory.translated.net/get?q=${encodedText}&langpair=${getLangForApi(fromLang)}|${toLang}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) {
      if (response.status === 429) {
        throw new Error('Kunlik limit tugadi, ertaga qayta urinib ko‘ring');
      }
      throw new Error('API xatosi yuz berdi');
    }

    const data = await response.json();
    if (data.responseStatus === 403) {
      throw new Error('Kunlik limit tugadi, ertaga qayta urinib ko‘ring');
    }

    const translatedText = data.responseData?.translatedText ?? '';
    const detectedLanguage = data.responseData?.detectedLanguage || fromLang;

    const result = {
      originalText: normalizedText,
      translatedText: translatedText || 'Tarjima topilmadi',
      fromLang: resolveLanguage(fromLang === 'auto' ? detectedLanguage : fromLang),
      toLang,
      detectedLanguage: detectedLanguage || null,
      quality: data.responseData?.match || 0,
      offline: false,
      timestamp: Date.now()
    };

    cacheResult(cacheKey, result);
    if (!options.skipStats) {
      updateStats(result);
    }

    return result;
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('So‘rov vaqti tugadi');
    }
    if (error.message === 'Failed to fetch') {
      const offlineResult = offlineTranslate(normalizedText, fromLang, toLang);
      if (offlineResult) {
        const fallback = {
          originalText: normalizedText,
          translatedText: offlineResult,
          fromLang: resolveLanguage(fromLang),
          toLang,
          detectedLanguage: fromLang,
          quality: 0,
          offline: true,
          timestamp: Date.now()
        };
        cacheResult(cacheKey, fallback);
        return fallback;
      }
      throw new Error('Internet aloqasi yo‘q yoki API ulanmagan');
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

function offlineTranslate(text, fromLang, toLang) {
  const normalizedFrom = resolveLanguage(fromLang);
  const normalizedText = text.toLowerCase();
  const entry = offlineCorpus.find(item => {
    const source = item[normalizedFrom];
    return source && source.toLowerCase() === normalizedText;
  });
  if (entry) {
    return entry[toLang] || null;
  }
  return null;
}

function cacheResult(key, value) {
  state.cache.set(key, value);
  persistCache();
}

function renderOutputs(mainResult, extraLanguages, extraResults) {
  const output = mainResult.translatedText.replace(/\n/g, '<br>');
  elements.mainOutput.innerHTML = `<div class="main-text">${output}</div>`;
  elements.mainOutput.classList.add('fade-in');
  setTimeout(() => elements.mainOutput.classList.remove('fade-in'), 450);

  const extraCards = extraLanguages.map((langCode, index) => {
    const label = getLanguageLabel(langCode);
    const settled = extraResults[index];
    if (settled.status === 'fulfilled') {
      const value = settled.value.translatedText || 'Tarjima topilmadi';
      return `<div class="extra-card">
        <strong>${label}</strong>
        <span>${value}</span>
      </div>`;
    }
    return `<div class="extra-card">
      <strong>${label}</strong>
      <span>Xatolik: ${settled.reason?.message || 'Offline'}</span>
    </div>`;
  });

  elements.extraOutput.innerHTML = extraCards.join('');
}

function updateDetectedLanguage(langCode) {
  if (!langCode) {
    elements.detectedLanguage.textContent = 'Aniqlangan til: —';
    return;
  }
  const label = getLanguageLabel(resolveLanguage(langCode));
  elements.detectedLanguage.textContent = `Aniqlangan til: ${label}`;
}

function showLoading(isLoading) {
  if (isLoading) {
    elements.loadingIndicator.classList.add('active');
    elements.translateButton.setAttribute('disabled', 'true');
  } else {
    elements.loadingIndicator.classList.remove('active');
    elements.translateButton.removeAttribute('disabled');
  }
}

function showError(message) {
  elements.errorBanner.textContent = message;
  elements.errorBanner.classList.remove('hidden');
}

function hideError() {
  elements.errorBanner.classList.add('hidden');
}

function clearInput() {
  elements.inputText.value = '';
  resetOutputs();
}

function copyCurrentOutput() {
  const text = elements.mainOutput.textContent.trim();
  if (!text) return;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      showTemporaryCheckmark(elements.copyOutput);
    })
    .catch(() => {
      showError('Nusxalash amalga oshmadi');
    });
}

function shareCurrentOutput() {
  const text = elements.mainOutput.textContent.trim();
  if (!text) return;
  if (navigator.share) {
    navigator
      .share({
        title: 'Polyglot Translator',
        text,
        url: window.location.href
      })
      .catch(() => {});
  } else {
    showError('Ulashish qurilmangizda mavjud emas');
  }
}

function toggleFavoriteFromOutput() {
  const text = elements.mainOutput.textContent.trim();
  if (!text) return;
  const lastHistory = state.history[0];
  if (!lastHistory || lastHistory.translatedText !== text) {
    showError('Avval tarjima qiling');
    return;
  }
  toggleFavorite(lastHistory);
}

function toggleFavorite(entry) {
  const exists = state.favorites.find(item => item.id === entry.id);
  if (exists) {
    state.favorites = state.favorites.filter(item => item.id !== entry.id);
  } else {
    state.favorites = [entry, ...state.favorites].slice(0, 50);
  }
  saveToStorage(STORAGE_KEYS.favorites, state.favorites);
  renderFavorites();
  showTemporaryCheckmark(elements.favoriteOutput);
}

function downloadHistoryJson() {
  if (!state.history.length) {
    showError('Tarix bo‘sh');
    return;
  }
  const blob = new Blob([JSON.stringify(state.history, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `polyglot-history-${Date.now()}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function clearHistory() {
  state.history = [];
  saveToStorage(STORAGE_KEYS.history, state.history);
  renderHistory();
}

function addToHistory(result) {
  const entry = {
    id: `${result.originalText}-${result.toLang}-${result.timestamp}`,
    originalText: result.originalText,
    translatedText: result.translatedText,
    fromLang: result.fromLang,
    toLang: result.toLang,
    timestamp: result.timestamp,
    offline: result.offline || false
  };
  state.history = [entry, ...state.history.filter(item => item.originalText !== entry.originalText || item.toLang !== entry.toLang)].slice(
    0,
    MAX_HISTORY
  );
  saveToStorage(STORAGE_KEYS.history, state.history);
  renderHistory();
}

function renderHistory() {
  if (!state.history.length) {
    elements.historyList.innerHTML = `<p class="history-empty">Tarix hozircha bo‘sh.</p>`;
    return;
  }

  elements.historyList.innerHTML = state.history
    .map(entry => {
      const fromLabel = getLanguageLabel(entry.fromLang);
      const toLabel = getLanguageLabel(entry.toLang);
      const time = new Date(entry.timestamp).toLocaleString();
      const offlineBadge = entry.offline ? '<span class="badge">Offline</span>' : '';
      return `<div class="history-item">
        <div class="meta">
          <span>${fromLabel} → ${toLabel} ${offlineBadge}</span>
          <span>${time}</span>
        </div>
        <div class="original">${entry.originalText}</div>
        <div class="translation">${entry.translatedText}</div>
        <button class="ghost-button" data-id="${entry.id}">★</button>
      </div>`;
    })
    .join('');

  elements.historyList.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      const entry = state.history.find(item => item.id === button.dataset.id);
      if (entry) {
        toggleFavorite(entry);
      }
    });
  });
}

function renderFavorites() {
  if (!state.favorites.length) {
    elements.favoritesList.innerHTML = `<p class="placeholder">Hozircha sevimli tarjima yo'q.</p>`;
    return;
  }

  elements.favoritesList.innerHTML = state.favorites
    .map(entry => {
      const fromLabel = getLanguageLabel(entry.fromLang);
      const toLabel = getLanguageLabel(entry.toLang);
      const time = new Date(entry.timestamp).toLocaleString();
      return `<div class="favorite-item">
        <div class="meta">
          <span>${fromLabel} → ${toLabel}</span>
          <span>${time}</span>
        </div>
        <div class="original">${entry.originalText}</div>
        <div class="translation">${entry.translatedText}</div>
      </div>`;
    })
    .join('');
}

function updateStats(result) {
  const today = getToday();
  if (state.stats.todayDate !== today) {
    state.stats.todayDate = today;
    state.stats.todayCount = 0;
  }
  if (state.stats.apiDate !== today) {
    state.stats.apiDate = today;
    state.stats.apiCallsToday = 0;
  }

  state.stats.total += 1;
  state.stats.todayCount += 1;
  if (!result.offline) {
    state.stats.apiCallsToday += 1;
  }

  const fromLang = resolveLanguage(result.fromLang);
  const toLang = resolveLanguage(result.toLang);
  state.stats.languageUsage[fromLang] = (state.stats.languageUsage[fromLang] || 0) + 1;
  state.stats.languageUsage[toLang] = (state.stats.languageUsage[toLang] || 0) + 1;

  saveToStorage(STORAGE_KEYS.stats, state.stats);
  renderStats();
}

function renderStats() {
  elements.statsTotal.textContent = state.stats.total;
  elements.statsToday.textContent = state.stats.todayCount;
  elements.totalTranslationsChip.textContent = state.stats.total;

  const topLang = Object.entries(state.stats.languageUsage).sort((a, b) => b[1] - a[1])[0];
  elements.statsTop.textContent = topLang && topLang[1] > 0 ? getLanguageLabel(topLang[0]) : '—';

  const remaining = Math.max(API_DAILY_LIMIT - state.stats.apiCallsToday, 0);
  elements.statsApi.textContent = `${remaining} dan ${API_DAILY_LIMIT}`;
}

function updateOnlineStatus() {
  const online = navigator.onLine;
  if (online) {
    elements.onlineStatus.classList.remove('offline');
    elements.onlineStatus.querySelector('.status-text').textContent = 'Online';
    elements.translateButton.removeAttribute('disabled');
  } else {
    elements.onlineStatus.classList.add('offline');
    elements.onlineStatus.querySelector('.status-text').textContent = 'Offline';
    showError("Offlayn rejimdasiz. Offline lug'at foydalanilmoqda");
  }
}

function updateCurrentYear() {
  const year = new Date().getFullYear();
  elements.currentYear.textContent = year;
}

function swapLanguages() {
  if (elements.autoDetect.checked) {
    showError('Tilni aniqlash yoqilganida almashtirib bo‘lmaydi');
    return;
  }
  const fromValue = elements.fromLanguage.value;
  elements.fromLanguage.value = elements.toLanguage.value;
  elements.toLanguage.value = fromValue;
  handleTranslate(false);
}

function handleAutoDetectToggle() {
  if (elements.autoDetect.checked) {
    elements.fromLanguage.setAttribute('disabled', 'true');
  } else {
    elements.fromLanguage.removeAttribute('disabled');
  }
}

function showTemporaryCheckmark(button) {
  const original = button.textContent;
  button.textContent = '✔';
  setTimeout(() => {
    button.textContent = original;
  }, 1200);
}

function resolveLanguage(lang) {
  if (!lang) return 'uz';
  if (lang === 'auto') {
    return state.detectedLanguage || 'uz';
  }
  return lang;
}

function getLangForApi(lang) {
  if (!lang) return 'uz';
  return lang === 'auto' ? 'auto' : lang;
}

function getLanguageLabel(code) {
  const found = LANGUAGES.find(lang => lang.code === code);
  return found ? found.label : code;
}

function loadFromStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (error) {
    console.warn('Storage read error', error);
    return fallback;
  }
}

function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn('Storage write error', error);
  }
}

function hydrateCache() {
  const cached = loadFromStorage(STORAGE_KEYS.cache, {});
  Object.entries(cached).forEach(([key, value]) => {
    state.cache.set(key, value);
  });
}

function persistCache() {
  const serialized = {};
  state.cache.forEach((value, key) => {
    serialized[key] = value;
  });
  saveToStorage(STORAGE_KEYS.cache, serialized);
}

function getToday() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

