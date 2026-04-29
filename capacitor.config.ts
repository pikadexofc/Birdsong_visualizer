import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.birdsong.visualizer',
  appName: 'Birdsong Visualizer',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
