/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// --- DOM ELEMENTS ---
const gameContainer = document.getElementById('game-container') as HTMLDivElement;
const inputForm = document.getElementById('input-form') as HTMLFormElement;
const playerInput = document.getElementById('player-input') as HTMLInputElement;

// --- GAME DATA ---
interface GameStage {
  story?: string | string[];
  riddle?: string;
  hints: string[];
  answers: string[];
  successStory: string | string[];
}

const gameData: GameStage[] = [
  // Stage 0: Start Game
  {
    story: [
      `[注意事項]
1. 所有謎題都只會出現在圖書館開放區域,不需要前往禁止進入的地方(例如:辦公室)。
2. 線索都在伸手可及的範圍內,不需要爬高或進入危險區域。
3. 遇到的物品只需觀察或輕輕取用,不必大力拆卸或移動。若有拿起,請務必放回原處。
4. 請保持輕聲細語,不要影響到圖書館內的其他人。
5. 謎題不會要求任何破壞行為(如撕書、畫書等),請勿任意嘗試。
6. 若遇到困難,可以輸入「提示」來獲得協助:
- 第一次輸入「提示」會給予第一個線索。
- 第二次輸入「提示」會給予第二個線索。
- 第三次再輸入「提示」時,會直接提供答案。
7. 每道謎題請盡量自己思考,提示僅作輔助。
8. 當你完成最終謎題時,會有明確的提示告訴你遊戲結束。
注:本遊戲含有情感與性別議題,請玩家理性看待,並以尊重為前提。`,
      `[STORY]
身為建中生,圖書館對你而言再熟悉不過。平日裡,這裡是讀書、討論、借書的場所——安靜而規律。
然而今天卻不同。你手裡攥著一張來歷不明的邀請函,上面僅寫著一行字:
「1965.12.06 圖書館見。」
你抬頭望向熟悉的館舍,心頭卻湧上一股異樣的不安。現在分明是 2025 年,怎麼會有人在信上寫著六十年前的日期?這是一場惡作劇,還是某種隱藏的訊號?
好奇心終究戰勝了疑慮。於是,在這個距離信上日期整整六十年的今天,你推開圖書館的大門,準備揭開這份神秘邀請背後的真相。`
    ],
    riddle: `[START]
「請先確認你已閱讀[注意事項],然後輸入『建中圖書館解謎』開始遊戲。」`,
    hints: [],
    answers: ['建中圖書館解謎'],
    successStory: `[STORY]
陽光從高大的窗戶傾瀉進來,映照在整齊排列的書架上,空氣裡靜靜漂浮著灰塵的微粒,一切看似和平如常。
然而,迎接你的不是寂靜的空間,而是一隻小松鼠。
你愣住了。
沒錯,圖書館的吉祥物確實是松鼠,但那只是標誌與雕像,從未想過會在這裡遇見一隻活生生的。
就在你還驚訝之際,松鼠竟抬起頭,用清晰的語調開口:
「你終於來了。為了讓你真正找回遺失的記憶,你必須通過重重謎題......祝你幸運。」
話音剛落,牠的身影化作一縷煙霧般散去,只留下一張紙靜靜飄落在你眼前。`
  },
  // Stage 1: First Riddle
  {
    story: [], // No new story, just the riddle
    riddle: `紙上,寫著一行你不理解的謎語:
「有人從我身旁帶走清涼,
有人在我身體裡藏起秘密。
我們並肩而立」
「清涼應該是水，水旁邊的東西……」你如此思考著
請找到謎語的地點並根據題目回答正確答案`,
    hints: [
        '回歸到最初的起點',
        '有時候,數字的關係不是計算,而是象徵。',
        '答案是 1'
    ],
    answers: ['1'],
    successStory: `當你回答出 1 時,腦中忽然閃過一個聲音。
「......五根手指湊在一起就是一隻手,那為什麼 5 不能等於 1 呢?」
你下意識的小聲嘀咕:
「如果兩隻手牽起來,不就成了 10=1 了嗎?」
空氣一瞬間安靜下來。
下一秒,你耳邊響起了一聲輕笑,帶著熟悉的溫度。
那個記憶裡的男生站在你面前,眼神專注地望著你。
「......你是天才!!!」
他語氣裡帶著驚喜,幾乎要溢出笑意,伸手作勢要碰觸你。
你卻被這突如其來的動作嚇了一跳,急忙退開。
畫面像水面上的倒影般散開,他的身影逐漸模糊,只留下手心裡的一張紙條上面畫著你熟悉的圖像:`
  },
  // Stage 2: Image Riddle
  {
    story: [`<img src="https://drive.google.com/thumbnail?id=1tsAEFXajhvcWWJSxLTD_eKjewo06xzfy&sz=w1920-h946" alt="Riddle image" style="max-width: 100%; border-radius: 8px;">
你凝視著那張紙，上面的圖案似乎是某個地方的縮影。
「這裡……在哪裡見過？」你心中浮現熟悉感，卻一時說不上來。
忽然，你注意到圖中的幾串數字：
873.57
865
1058125`],
    riddle: `它像是一把鑰匙,指向你曾經走過的某個角落。
請找出並回答真正的名字。`,
    hints: [
        '在書背上常看到這種數字,它代表「書在哪裡」。',
        '找到那本書,把書名告訴我。',
        '答案是 正常人'
    ],
    answers: ['正常人'],
    successStory: '當你輸入「正常人」的瞬間,眼前的文字浮現並閃爍了一下。'
  },
  // Stage 3: The Friends Riddle
  {
    story: `那個記憶中的聲音再次響起,然而,這次的聲音沒有喜悅,反而帶著淡淡的哀傷:「要成為『正常人』,真的有這麼容易嗎?」
這句話,彷彿被鐫刻在你的腦海深處。你努力回想,記得他是個總愛埋首書堆的人。
如果他還在,一定會喜歡你手中這本書。
你低下頭,輕輕摩挲書封,卻在心裡生出一個無法迴避的疑問——
「他......是誰?」
來不及細想,在門口看到的小松鼠突然跑到你腳邊,說道:「嘿你怎麼還待在這裡,不要看書了,可以請你幫我找我其他三個朋友嗎?」`,
    riddle: '請找出松鼠的朋友。並回答他們的名字。',
    hints: [
        '牠們三個合在一起,不只是動物名稱。',
        '快速念出來,會變成另一個詞語。',
        '答案是 鷹熊鹿 / 鷹熊麋鹿 / 英雄路 / 英雄迷路'
    ],
    answers: ['鷹熊鹿', '鷹熊麋鹿', '英雄路', '英雄迷路'],
    successStory: `就在你說出答案的瞬間,眼前的空氣微微顫動,一個畫面忽然浮現。
這一次,是一間潔白的醫院病房。
你正緊緊握著他的手,他的臉色蒼白,但眼神依舊明亮。`
  },
  // Stage 4: The Hospital Riddle
  {
    story: `他低聲問:「你知道『英雄』這個詞,代表著兩種截然不同的特質嗎?」
「『英』指的是聰慧、出眾;『雄』則是膽識與力量。」
他頓了頓,露出一個淡淡的笑容:
「所以......『英』應該是我,『雄』就是你吧?」
你的心口像被什麼擊中,卻勉強笑著回答:
「只有你才會在意這種小事。」
他搖頭,神色突然認真:「這不是小事,你明明知道我——」
「我不知道」你急切地打斷他:「我不想和你湊成一對,也不想被當成同性戀。」
話音落下,他愣住了,隨即輕輕抽回自己的手,不再說話。
病房裡只剩下消毒水的氣味,和一種無法言說的空白。
你心裡十分難受,彷彿這並不是虛構的場景,而是你曾親身經歷過的真實記憶,隱隱約約你感受到好像快要知道答案了。`,
    riddle: `請前往圖書館小討論室,解完題目後輸入三位數字。`,
    hints: [
        '動動手,想想看。',
        '講話時會有動作嗎?',
        '答案是 125'
    ],
    answers: ['125'],
    successStory: `當你輸入正確答案的瞬間,房間四周微微顫動,彷彿一層薄霧被揭開。眼前浮現一段畫面
「明天就是校慶了。」他的聲音很輕,伴隨著病房裡機械規律的滴答聲。
「嗯。」你下意識地應了一聲。
「......你是不是,很討厭身為同性戀的我?」
你沉默了。那一刻,你心裡翻湧著什麼,卻始終沒有開口。
而那次,也成了你最後一次見到他。
畫面一閃而逝,像是從記憶深處被硬生生拉扯出來的片段。你還來不及細想,身後忽然傳來一個聲音:
「抱歉......明明我已經知道答案了,卻還是執意要問出口。」
你回過頭,看見的正是那個在記憶片段中反覆出現的少年。
你的腦海轟然一震,你想起來了——過去你們一起玩鬧、一起度過無數午後。
你一直知道他的心意,卻一次次裝作不懂,甚至傷害了他。
少年的眼神裡沒有責怪,只有淡淡的憂傷與執著。他繼續說:
「明明知道周圍的眼光異樣,還是讓你也承受了那些壓力。對不起。」
你的喉嚨發緊,話在嘴邊盤旋,卻怎麼樣都說不出來。腦中滿是翻飛的文字——
<img src="https://drive.google.com/thumbnail?id=1KgfqHANEIgGVA7QTRLO6AgyEcEcJSvBA&sz=w725-h162" alt="Scrambled text" style="max-width: 100%; display: block; margin: 1em auto;">`
  },
   // Stage 5: Final Riddle
  {
    story: [],
    riddle: '請輸入你想對少年說的話(不須標點)。',
    hints: [
        '像柵欄一樣的圖像。',
        '前面的圖案不是裝飾。',
        '答案是 對不起我不是故意要傷害你謝謝你喜歡我'
    ],
    answers: ['對不起我不是故意要傷害你謝謝你喜歡我'],
    successStory: `文字逐一拼湊,像是從心底被逼出來一般,終於凝成完整的句子——
「對不起,我不是故意要傷害你,謝謝你喜歡我。」
一股酸澀瞬間湧上心頭,彷彿時間倒轉,回到你們曾經最親近的日子。
此刻你才明白,這場遊戲從來不是為了謎題,而是一次遲到太久的告白。
聽到這句話,那個少年笑了,身影緩緩消逝在空白中。
隨著光影散去,你逐漸回到圖書館的現實。討論室的桌面上安靜無聲,只有一隻圖書館松鼠擺飾,正歪著頭望著你。`
  },
  // Stage 6: End Game
  {
    story: `[END]
遊戲結束，謝謝遊玩。請前往圖書館櫃臺出示遊戲結束畫面，並填寫完問卷後，即可領取小禮物。
若想重新體驗，請輸入「重來」。（輸入前請先至櫃臺領取禮物，否則遊戲結束畫面會被刪除喔！）`,
    riddle: '',
    hints: [],
    answers: ['重來'],
    successStory: ''
  }
];

// --- GAME STATE ---
let currentStageIndex = 0;
let hintCount = 0;

// --- GAME LOGIC ---

/**
 * Displays a message in the game container.
 * @param text The message text.
 * @param type The message type (e.g., 'story', 'riddle').
 * @param delay The delay before the message appears.
 */
function displayMessage(text: string, type: 'story' | 'riddle' | 'hint' | 'player' | 'system' | 'error', delay = 0) {
  if (!text) return;
  setTimeout(() => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', type);
    messageElement.innerHTML = text; // Use innerHTML to render the image tag
    gameContainer.appendChild(messageElement);
    messageElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, delay);
}

/**
 * Displays the current game stage.
 * @param stage The game stage to display.
 */
function displayStage(stage: GameStage) {
  if (stage.story) {
    if (Array.isArray(stage.story)) {
      stage.story.forEach((s, i) => displayMessage(s, 'story', i * 100));
    } else {
      displayMessage(stage.story, 'story');
    }
  }
  if (stage.riddle) {
    displayMessage(stage.riddle, 'riddle', Array.isArray(stage.story) ? stage.story.length * 100 : 100);
  }
}

/**
 * Handles the player's input.
 * @param input The player's input string.
 */
function handleInput(input: string) {
  const stage = gameData[currentStageIndex];

  // Handle hints
  if (input === '提示') {
    if (hintCount < stage.hints.length) {
      displayMessage(`提示 ${hintCount + 1}: ${stage.hints[hintCount]}`, 'hint');
      hintCount++;
    } else {
      displayMessage('沒有更多提示了。', 'system');
    }
    return;
  }

  // Check answers
  const isCorrect = stage.answers.some(answer => input.trim() === answer.trim());

  if (isCorrect) {
    // Special handling for restart
    if (stage.answers.includes('重來')) {
        resetGame();
        return;
    }
      
    if (stage.successStory) {
       if (Array.isArray(stage.successStory)) {
            stage.successStory.forEach((s, i) => displayMessage(s, 'story', i * 100));
        } else {
            displayMessage(stage.successStory, 'story');
        }
    }
    
    currentStageIndex++;
    hintCount = 0;

    if (currentStageIndex < gameData.length) {
      displayStage(gameData[currentStageIndex]);
    } else {
        displayMessage("遊戲結束。", "system");
    }

  } else {
    displayMessage('答案不對,再試一次。', 'error');
  }
}

/**
 * Resets the game to the initial state.
 */
function resetGame() {
    gameContainer.innerHTML = '';
    currentStageIndex = 0;
    hintCount = 0;
    displayStage(gameData[0]);
}


// --- INITIALIZATION ---
inputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = playerInput.value.trim();
  if (input) {
    displayMessage(`> ${input}`, 'player');
    handleInput(input);
    playerInput.value = '';
  }
});

// Start the game
displayStage(gameData[currentStageIndex]);