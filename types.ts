// types.ts
export type RootStackParamList = {
  SplashScreen: undefined;
  SubscriptionScreen: undefined;
  MainScreen: undefined;
  TipsScreen: undefined;
  UploadScreen: undefined;
  TipDetailScreen: { tipId: string };
  HistoryScreen: { screenshots: string[] }; // Обновление типов для HistoryScreen
};
