# SEE Player Profile - Sports Performance Analysis Dashboard

A modern, dark-themed sports performance analysis dashboard built with React, TypeScript, and Vite. This application provides comprehensive player analytics, physical progress tracking, and video analysis capabilities.

## 🎯 Features

### Player Card Section
- **Dynamic Player Cards**: Stylized player cards with SVG graphics and Kensington font
- **Player Statistics**: PHY (Physical) and SKL (Skill) ratings display
- **Player Information**: Name, position, team, and live status indicators
- **Hover Animations**: Smooth zoom effects on player card interaction

### Physical Progress Tracking
- **Progress Gauges**: Circular progress indicators for physical metrics
- **Test Categories**: Vertical Jump, Broad Jump, 10m Run, 5-10-5, T-Agility
- **Performance Analytics**: Comprehensive tracking with team and league comparisons
- **Visual Charts**: Interactive line charts with gradient area fills

### Skills Development Analysis
- **Skill Categories**: Ball Control, Passing, 1v1, Running w/ Ball, Shooting
- **Progress Visualization**: Dual-circle progress indicators
- **Performance Metrics**: Current vs. Last Best comparisons

### Video Analysis
- **Physical Tests**: Video library for physical assessment
- **Skills Assessment**: Technical skills video collection
- **Interactive Interface**: Play buttons, duration indicators, and categorized sections

### Performance Analytics
- **Chart Visualizations**: Line charts with gradient fills
- **Metric Comparisons**: Your Average, Team Average, League Average
- **Interactive Filters**: Period-based data filtering

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with custom animations
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Fonts**: Kensington font family (custom)
- **Development**: ESLint, TypeScript configuration

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mahmoud2330/SEE-Player-Profile.git
   cd SEE-Player-Profile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
SEE-Player-Profile/
├── public/
│   └── fonts/
│       └── kensington-font-family-1751956222-0/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── PlayerCard.tsx
│   │   ├── PlayerOverview.tsx
│   │   ├── PerformanceChart.tsx
│   │   ├── SkillChart.tsx
│   │   ├── VideoAnalysis.tsx
│   │   ├── Sidebar.tsx
│   │   └── ...
│   ├── App.tsx
│   ├── App.css
│   └── index.css
├── package.json
└── README.md
```

## 🎨 Design Features

- **Dark Theme**: Modern dark interface with purple and green accents
- **Responsive Design**: Mobile-friendly layout
- **Smooth Animations**: Hover effects and transitions
- **Custom Typography**: Kensington font integration
- **Interactive Elements**: Hover states and click animations

## 🔧 Customization

### Adding New Players
1. Update the `playerData` object in `PlayerOverview.tsx`
2. Add player images to `src/assets/`
3. Configure player statistics and metrics

### Styling Modifications
- Main styles: `src/App.css`
- Component-specific styles: Individual component CSS files
- Global styles: `src/index.css`

## 📊 Data Structure

The application uses static data for demonstration. To integrate with real data:

1. Replace static data arrays with API calls
2. Update component props to accept dynamic data
3. Implement data fetching logic

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

