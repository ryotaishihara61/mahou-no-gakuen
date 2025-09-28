
import { useState } from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/logo.png" 
                alt="合同会社 魔法の学園 ロゴ" 
                className="h-10 w-auto"
              />
              <h1 className="text-xl font-bold text-gray-800">合同会社 魔法の学園</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://readdy.ai/api/search-image?query=Soft%20watercolor%20painting%20of%20blooming%20cherry%20blossoms%20and%20gentle%20flowers%2C%20pastel%20pink%20and%20purple%20tones%2C%20dreamy%20ethereal%20atmosphere%2C%20feminine%20and%20delicate%20artistic%20style%2C%20peaceful%20garden%20scene%20with%20soft%20lighting&width=1920&height=800&seq=hero_gentle&orientation=landscape)'
          }}
        ></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            自己愛が育む<br />
            <span className="text-pink-500">優しい世界</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            セルフラブ・ラボラトリーとして<br />
            小学生から誰でも自分を愛することを学べる世界を創造しています
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12">
        
        {/* Basic Information */}
        <section className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-pink-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">基本情報</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-gray-500 font-medium w-20 shrink-0 text-sm">会社名</span>
                <span className="text-gray-800 font-semibold">合同会社 魔法の学園</span>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-gray-500 font-medium w-20 shrink-0 text-sm">設立</span>
                <span className="text-gray-700">2020年12月22日</span>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-gray-500 font-medium w-20 shrink-0 text-sm">代表者</span>
                <span className="text-gray-700">石原 蘭</span>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-gray-500 font-medium w-20 shrink-0 text-sm">所在地</span>
                <span className="text-gray-700">東京都千代田区九段南一丁目5番6号<br />りそな九段ビル</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-md p-8 inline-block">
                <img 
                  src="/images/logo.png"
                  alt="合同会社 魔法の学園 ロゴ"
                  className="w-full max-w-xs mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Business History */}
        <section className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-pink-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">事業実績</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-200">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <i className="ri-heart-line text-pink-500 mr-2 w-5 h-5 flex items-center justify-center"></i>
                  自己愛革命®︎講座
                </h3>
                <p className="text-gray-600 text-sm mb-2">2019年8月〜2023年10月（1〜14期）</p>
                <p className="text-gray-700 text-sm">多くの方の人生変革をサポート</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <i className="ri-group-line text-purple-500 mr-2 w-5 h-5 flex items-center justify-center"></i>
                  人材育成実績
                </h3>
                <p className="text-gray-700 text-sm">講師8名、ファシリテーター11名を養成</p>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 border border-rose-200">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <i className="ri-user-heart-line text-rose-500 mr-2 w-5 h-5 flex items-center justify-center"></i>
                  サポート実績
                </h3>
                <p className="text-gray-700 text-sm">延べ200名以上に「自己受容・自己実現」のサポートを実施</p>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <i className="ri-star-line text-indigo-500 mr-2 w-5 h-5 flex items-center justify-center"></i>
                  代表実績
                </h3>
                <p className="text-gray-700 text-sm">20年間で延べ2万人以上のライフ＆ビジネスコンサルティング実績</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative group">
                  <img
                    src="/images/slrev-01.jpg"
                    alt="自己愛革命講座の様子"
                    className="w-full h-48 object-cover rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative group">
                  <img
                    src="/images/slrev-02.jpg"
                    alt="人生変革サポートの現場"
                    className="w-full h-48 object-cover rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-sm">参加者の皆様と共に学び、成長する貴重な時間</p>
              </div>
            </div>
          </div>
        </section>

        {/* New Activities */}
        <section className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-pink-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">セルフラブ活動</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <i className="ri-heart-3-line text-rose-500 mr-3 w-6 h-6 flex items-center justify-center"></i>
                セルフラブ・ラボラトリー
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="text-gray-700 text-sm"><span className="font-medium">活動開始：</span>2023年11月</p>
                  <p className="text-gray-700 text-sm"><span className="font-medium">理念：</span>小学生から誰でもセルフラブを実践できる優しい世界をつくる</p>
                </div>
                <div className="bg-white/50 rounded-xl p-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    より多くの方にセルフラブの大切さを伝えるため、絵本制作という新しい挑戦を決意しました。
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <i className="ri-book-open-line text-blue-500 mr-2 w-5 h-5 flex items-center justify-center"></i>
                  セルフラブ絵本『ビビアン』
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700 text-sm"><span className="font-medium">発刊：</span>2024年7月</p>
                  <p className="text-gray-700 text-sm">自己受容とセルフラブの大切さを優しく伝える絵本</p>
                  <div className="bg-blue-100/50 rounded-lg p-3 mb-3">
                    <p className="text-blue-800 text-xs">小学生でも理解できる優しい言葉で表現</p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://selflovelab.base.shop/items/87374284"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <i className="ri-shopping-cart-line mr-2 w-4 h-4"></i>
                      購入ページ
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <i className="ri-mic-line text-green-500 mr-2 w-5 h-5 flex items-center justify-center"></i>
                  『ビビアン』朗読ワーク
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700 text-sm"><span className="font-medium">開始：</span>2024年8月</p>
                  <p className="text-gray-700 text-sm">参加型朗読ワーク</p>
                  <div className="bg-green-100/50 rounded-lg p-3 mb-3">
                    <p className="text-green-800 text-xs">親子で一緒にセルフラブについて学べる機会</p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://vivian-selflove.site/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <i className="ri-external-link-line mr-2 w-4 h-4"></i>
                      詳細・お申し込み
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative group">
                  <img
                    src="/images/ws-04.jpg"
                    alt="セルフラブ絵本『ビビアン』の活動"
                    className="w-full h-48 object-cover rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative group">
                  <img
                    src="/images/ws-07.jpg"
                    alt="絵本朗読ワークの様子"
                    className="w-full h-48 object-cover rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-sm">『ビビアン』の朗読ワークで温かい時間を共有</p>
              </div>
            </div>
          </div>
        </section>

        {/* CEO Profile */}
        <section className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-pink-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">代表者プロフィール</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/images/ran-prof.jpg"
                alt="代表者 石原 蘭"
                className="w-48 h-60 object-cover object-top rounded-2xl mx-auto mb-4 shadow-md"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-1">石原 蘭</h3>
              <p className="text-gray-600 text-sm">合同会社 魔法の学園 代表</p>
              <p className="text-gray-500 text-xs mt-1">自己受容・セルフラブの専門家</p>
              <div className="mt-3">
                <a 
                  href="https://www.instagram.com/ranishihara/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                >
                  <i className="ri-instagram-line w-5 h-5 flex items-center justify-center"></i>
                </a>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <i className="ri-user-heart-line text-pink-500 mr-2 w-5 h-5 flex items-center justify-center"></i>
                  経歴・専門分野
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  自己受容・セルフラブの専門家として、20年以上にわたり延べ2万人以上の方々を支援。
                  個人の内面的成長とビジネス成功の両立をサポートしています。
                </p>
                <div className="bg-pink-50 rounded-lg p-3 border border-pink-200">
                  <p className="text-pink-800 text-xs">
                    <strong>支援実績：</strong>20年間で延べ2万人以上のライフ＆ビジネスコンサルティング
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <i className="ri-book-line text-purple-500 mr-2 w-5 h-5 flex items-center justify-center"></i>
                  著書・出版実績
                </h4>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h5 className="font-semibold text-gray-800 mb-2 text-sm">『食事は、最強のビジネス戦略である』</h5>
                  <p className="text-gray-600 text-xs mb-2">2013年 大和書房より出版</p>
                  <p className="text-gray-700 text-xs mb-2">日経ビジネス書評に掲載され、高い評価を獲得</p>
                  <p className="text-purple-800 text-xs">
                    <strong>国際展開：</strong>中国語版も出版され、台湾・香港・シンガポールなどでも展開
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <i className="ri-global-line text-indigo-500 mr-2 w-5 h-5 flex items-center justify-center"></i>
                  現在の活動
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 text-center border border-blue-200">
                    <i className="ri-presentation-line text-blue-500 mb-1 w-5 h-5 flex items-center justify-center mx-auto"></i>
                    <p className="text-blue-900 text-xs font-medium">研修</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3 text-center border border-green-200">
                    <i className="ri-mic-line text-green-500 mb-1 w-5 h-5 flex items-center justify-center mx-auto"></i>
                    <p className="text-green-900 text-xs font-medium">講演</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3 text-center border border-purple-200">
                    <i className="ri-quill-pen-line text-purple-500 mb-1 w-5 h-5 flex items-center justify-center mx-auto"></i>
                    <p className="text-purple-900 text-xs font-medium">執筆</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm py-8 border-t border-pink-100 mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <img 
                src="/images/logo.png" 
                alt="合同会社 魔法の学園 ロゴ" 
                className="h-8 w-auto"
              />
              <span className="text-lg font-bold text-gray-800">合同会社 魔法の学園</span>
            </div>
            <p className="text-gray-600 text-sm max-w-md mx-auto">
              自己受容・セルフラブを通じて、誰もが輝ける優しい世界を目指しています
            </p>
            <div className="space-y-2">
              <div className="text-xs text-gray-500">
                <p>東京都千代田区九段南一丁目5番6号 りそな九段ビル</p>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <i className="ri-mail-line w-4 h-4"></i>
                <span className="font-medium">お問い合わせ：</span>
                <a
                  href="mailto:mahounogakuen.21@gmail.com"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  mahounogakuen.21@gmail.com
                </a>
              </div>
            </div>
            <p className="text-gray-400 text-xs pt-4 border-t border-pink-100">
              &copy; 2024 合同会社 魔法の学園. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
