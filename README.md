# AIJOE - Your AI Best Friend

## 🐕 Welcome to AIJOE

AIJOE is an interactive AI companion app featuring Joey, a friendly Boston Terrier avatar. Users can chat with AIJOE, receive daily Bible verses, and enjoy a personalized AI friendship experience.

## 🎯 Features

### Core Functionality
- **🎤 TALK** - Voice-activated chat with AIJOE
- **🧠 SMART** - AI intelligence and question answering
- **📍 GPS** - Location-based services and nearby recommendations
- **🛡️ PROTECT** - Safety and security features
- **💬 CHAT** - Text-based conversations
- **❤️ CARE** - Wellness and daily check-ins

### Special Features
- **🐾 Joey Avatar** - Animated Boston Terrier with mouth sync and tail wagging
- **📖 Daily Bible Verse** - 365 verses for daily inspiration
- **🎨 Orange Glow Theme** - Beautiful, modern UI design
- **🔊 Voice Recognition** - Speak naturally to AIJOE
- **😊 Friendly Responses** - Short, clear, helpful answers

## 📁 Project Structure

```
aijoe2x/
├── frontend/                 # React web/mobile UI
│   ├── src/
│   │   ├── components/
│   │   │   ├── HomeScreen.jsx      # Main home screen
│   │   │   ├── HomeScreen.css      # Home styling
│   │   │   ├── JoeyAvatar.jsx      # Joey avatar component
│   │   │   └── JoeyAvatar.css      # Avatar animations
│   │   ├── App.jsx                 # Main app
│   │   ├── App.css                 # Global styles
│   │   └── index.js                # Entry point
│   ├── public/
│   │   └── assets/
│   │       └── joey-avatar/        # Joey images & animations
│   └── package.json
│
├── backend/                  # Express.js API
│   ├── src/
│   │   ├── routes/          # API endpoints
│   │   ├── services/        # Business logic
│   │   └── index.js         # Server entry
│   └── package.json
│
├── assets/                   # Shared assets
│   └── joey-avatar/         # Joey avatar files
│
├── bible-verses/            # Scripture database
│   └── data.json           # 365 daily verses
│
├── docs/                    # Documentation
│   ├── DEVELOPMENT.md      # Dev setup
│   └── DEPLOYMENT.md       # Deploy to Google Play
│
├── README.md               # This file
└── .gitignore             # Git config
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager
- Git for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/aijoebaby/aijoe2x.git
cd aijoe2x

# Install dependencies
npm install

# Add Joey avatar image
mkdir -p frontend/public/assets/joey-avatar/
cp your-joey-image.png frontend/public/assets/joey-avatar/joey-main.png

# Start development server
npm run dev
```

### Development

```bash
# Run frontend
cd frontend
npm run dev

# Run backend (in another terminal)
cd backend
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 UI Features

### Loading Screen
- Animated "AIJOE HELLO LOADING..." text
- Bouncing paw print animation
- Progress bar effect
- 3-second loading duration

### Home Screen
- **Joey Avatar** with glowing halo ring
- **Greeting Bubble** with voice introduction
- **6 Action Buttons** with intuitive icons
- **Daily Bible Verse** button with cross icon
- **Responsive Design** for all device sizes
- **Orange Glow Theme** with smooth animations

### Joey Avatar Animations
- 🐕 Tail wagging continuously
- 😊 Mouth opens/closes when speaking (lip-sync)
- ✨ Sound wave indicators while talking
- 🌟 Glowing halo pulses around avatar
- 💫 Expression changes (happy, thinking, excited, listening)

## 📱 Mobile Support

The app is fully responsive and optimized for:
- **Phones** (320px - 480px)
- **Tablets** (481px - 768px)
- **Web** (769px and up)

## 🔊 Voice Features

- Speech-to-text recognition
- Text-to-speech output with friendly male voice
- Real-time voice activity detection
- Audio visualization during speaking

## 📖 Bible Verses

- 365 daily verses
- Random selection or date-based
- Share functionality
- Multiple Bible translations
- Search and favorites

## 🛠️ Technologies

### Frontend
- React 18+
- CSS3 with animations
- Responsive design
- Web Audio API

### Backend
- Node.js
- Express.js
- RESTful API
- Database integration

### Voice & AI
- Web Speech API
- OpenAI Integration (optional)
- Text-to-speech synthesis

## 📝 Configuration

Create `.env` file in root directory:

```env
# Backend
REACT_APP_API_URL=http://localhost:5000
REACT_APP_VOICE_API_KEY=your_key_here

# AI Settings
REACT_APP_AI_MODEL=gpt-3.5-turbo
REACT_APP_RESPONSE_LENGTH=short

# Bible API
REACT_APP_BIBLE_API=your_bible_api_key
```

## 🚀 Deployment

### Google Play Store

```bash
# 1. Build Android APK
npm run build:android

# 2. Sign APK
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 \
  -keystore release.keystore app-release-unsigned.apk \
  alias_name

# 3. Submit to Google Play Console
# See docs/DEPLOYMENT.md for detailed steps
```

### Web Deployment

```bash
# Build for web
npm run build

# Deploy to hosting
# (Netlify, Vercel, Firebase Hosting, etc.)
```

## 📚 Documentation

- **[Development Guide](docs/DEVELOPMENT.md)** - Setup and development
- **[Deployment Guide](docs/DEPLOYMENT.md)** - Publishing to app stores
- **[API Documentation](docs/API.md)** - Backend endpoints
- **[Contributing](CONTRIBUTING.md)** - How to contribute

## 🐛 Known Issues

- Voice recognition works best on Chrome/Edge
- iOS requires native wrapper (React Native)
- Bible API rate limits (free tier)

## 🔐 Privacy & Security

- No personal data collection
- Local voice processing when possible
- HTTPS encryption required
- Compliant with GDPR/CCPA

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 👤 Author

**Created by:** aijoe (John Ward)  
**Project:** AIJOE - Your AI Best Friend  
**Dedicated to:** Joey, the Boston Terrier 🐕

## 🙏 Acknowledgments

- Joey the Boston Terrier for inspiration
- Open source community
- Bible API providers
- AI/ML developers and researchers

## 📞 Support

For issues, questions, or feedback:
- GitHub Issues: [Create an issue](https://github.com/aijoebaby/aijoe2x/issues)
- Email: aijoebaby@example.com
- Discord: [Join community](https://discord.gg/aijoe)

## 🎉 Coming Soon

- [ ] Dark/Light mode toggle
- [ ] Multiple avatar styles
- [ ] Custom voice selection
- [ ] Advanced personality modes
- [ ] Prayer request logging
- [ ] Community features
- [ ] AR avatar display
- [ ] Smart home integration

---

**Made with ❤️ for Joey and AIJOE users everywhere!** 🐾
