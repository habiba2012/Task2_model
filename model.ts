// User information
type User = {
    email: string;
    name: string;
  };
  //User login satus and error
  type LoginState = {
    loggedIn: true;
    loading: boolean;
    error: 'user' | 'server' | 'timeout' | null;
    user: User | null;
  };
  //User not logged in status, display a loading spinner until the user is logged in
  type NotLoggedInState = {
    loggedIn: false;
    loading: boolean;
  };

/** Accounts Page**/

  // Account types
  type AccountType = "regular" | "pocket";
  
  // Currency types
  type Currency = "DKK" | "SEK" | "NOK" | "USD" | "EUR";
  
  // Account
  type Account = {
    name: string;
    IBAN: string;
    currency: Currency; // Currency for regular accounts is always DKK
    amount: number; // Amount can be positive or negative
  };
  
  // Pocket
  type Pocket = {
    currency: Currency;
    amount: number;
  };
  
  // Pocket Account
  type PocketAccount = {
    name: string;
    IBAN: string;
    pockets: Pocket[]; // Array of pockets
  };

/** Support Page**/
  // Chat window state
  type ChatWindowState = "minimized" | "open" | "full-screen";
  
  // Chat message
  type ChatMessage = {
    sender: string; // Can be 'user' or 'agent'
    message: string;
  };
  
  // Chat state
  type ChatState = {
    isConnected: boolean;
    queuePosition?: number;
    queueLength?: number;
    chatMessages: ChatMessage[];
    chatWindowState: ChatWindowState;
    busyTimes?: string[]; // Information about busy times in the week
  };
  
  // Page states
  type AccountsPageState = {
    isLoading: boolean;
    isError: boolean;
    accounts: (Account | PocketAccount)[];
  };
  
  type SupportPageState = {
    isChatConnecting: boolean;
    chatState: ChatState;
  };
  
  // Application state
  type AppState = {
    isLoggedIn: boolean;
    user?: User;
    isLoadingUserData: boolean;
    isErrorFetchingUserData: boolean;
    activePage: "accounts" | "support";
    accountsPage: AccountsPageState;
    supportPage: SupportPageState;
    isChatFloating: boolean; // Indicates if chat window is floating on all screens
  };
  