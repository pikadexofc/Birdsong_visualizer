# Birdsong Visualizer
### High-Fidelity Spectral Audio Analysis for Mobile Devices

Birdsong Visualizer is a professional-grade cross-platform application designed for real-time visualization and isolation of avian vocalizations. Built with React, Three.js, and Capacitor, it provides a high-performance native audio pipeline optimized for both Android and iOS.

## Key Features

- **Advanced Audio DSP**: Implements a dedicated dynamics compressor and biquad filtering for surgical audio isolation.
- **Spectral Noise Gate**: User-adjustable noise suppression to filter out environmental ambient hum and focus on high-frequency signals.
- **Native Performance**: Fully optimized for mobile with OpenGL-accelerated rendering and native audio hardware integration.
- **Offline Architecture**: Privacy-first, local-only processing with zero external data dependency.

## Technical Architecture

### Audio Pipeline
The application utilizes the Web Audio API bridged through Capacitor for native microphone access. The signal flow is as follows:
`Microphone -> Dynamics Compressor -> Biquad Filters -> 4096-sample FFT Analyser -> Render Engine`

### Rendering
The visualization is powered by an orbital particle system managed via Three.js, ensuring high-frame-rate feedback even on mid-range mobile hardware.

## Getting Started

### Prerequisites
- Node.js (v18+)
- Android Studio / Xcode (for native builds)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/pikadexofc/Birdsong_visualizer.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run in development mode:
   ```bash
   npm run dev
   ```

### Mobile Deployment
Sync with native platforms:
```bash
npx cap sync
```

---

## Production Builds
Stable release artifacts, including the Android App Bundle (.aab) and standalone APKs, are available in the [Releases](https://github.com/pikadexofc/Birdsong_visualizer/releases) section.

---

*Birdsong Visualizer - Precision Audio Visualization.*
