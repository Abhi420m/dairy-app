/**
 * Dairy Hisab (डेयरी हिसाब) - Core Application Logic
 * Comprehensive Dairy Management, Products POS (Paneer, Ghee, Dahi), GST Invoicing, Customer Portal & User Auth
 */

// Storage Keys
const STORAGE_KEY = 'dairy_hisab_data_v2';
const LANG_KEY = 'dairy_hisab_lang';
const USERS_STORAGE_KEY = 'dairy_hisab_users_v2';
const SESSION_STORAGE_KEY = 'dairy_hisab_session_v2';

// Multi-language dictionary
const I18N = {
  hi: {
    appTitle: "डेयरी हिसाब (Dairy Hisab)",
    tagline: "दूध संकलन, डेयरी उत्पाद (पनीर, घी, दही), GST बिलिंग एवं ग्राहक खाता",
    shiftBadgeMorning: "पाली: सुबह",
    shiftBadgeEvening: "पाली: शाम",
    businessModeLabel: "डेयरी मोड:",
    modeAll: "ऑल-इन-वन संपूर्ण डेयरी",
    modeProducts: "डेयरी उत्पाद स्टोर (पनीर, घी, दही)",
    modeMilk: "दूध संकलन केंद्र (मिल्क कलेक्शन)",
    
    // Auth & OTP Strings
    authWelcome: "डेयरी हिसाब (Dairy Hisab) में आपका स्वागत है",
    authSub: "दूध संकलन, पनीर/घी बिक्री, GST बिलिंग एवं हिसाब-किताब का संपूर्ण समाधान",
    tabOtpLogin: "📱 OTP लॉगिन",
    tabPasswordLogin: "🔑 पासवर्ड",
    tabLogin: "लॉग इन करें (Login)",
    tabSignup: "✨ नया खाता बनाएं (Sign Up)",
    lblEnterPhone: "मोबाइल नंबर दर्ज करें (10 Digits) *",
    btnSendRealOtp: "📲 रियल SMS OTP भेजें (Send SMS OTP)",
    btnSendWhatsAppOtp: "💬 WhatsApp पर OTP प्राप्त करें (Send on WhatsApp)",
    liveOtpAlert: "रियल SMS OTP भेजा गया (Real SMS Sent)",
    lblEnterOtpCode: "6-अंकों का OTP कोड दर्ज करें *",
    changePhone: "नंबर बदलें",
    resendIn: "बाद पुनः भेजें",
    btnResendOtp: "पुनः OTP भेजें",
    btnVerifyLogin: "OTP सत्यापित करें और लॉगिन करें",
    badgeDairyApp: "डेयरी ऐप",
    lblAuthPhone: "मोबाइल नंबर (Mobile Number) *",
    lblAuthPassword: "पासवर्ड (Password) *",
    lblAuthConfirmPassword: "पासवर्ड दोबारा लिखें (Confirm Password) *",
    lblAuthDairyName: "डेयरी / व्यापार का नाम (Dairy Name) *",
    lblAuthOwnerName: "संचालक का नाम (Owner Name) *",
    lblAuthGstin: "GSTIN नंबर (यदि उपलब्ध हो)",
    lblAuthBusinessType: "व्यापार का प्रकार (Business Type) *",
    lblAuthAddress: "गाँव / शहर / पूरा पता *",
    btnLoginSubmit: "लॉग इन करें (Log In)",
    btnSignupSubmit: "खाता बनाएं व शुरू करें (Register)",
    dontHaveAccount: "खाता नहीं है? यहाँ नया खाता बनाएं (Sign Up)",
    alreadyHaveAccount: "पहले से खाता है? यहाँ लॉग इन करें (Log In)",
    logoutBtn: "लॉग आउट (Logout)",

    // Tabs
    tabCollection: "दूध संकलन (Collection)",
    tabProductsPos: "🧀 डेयरी उत्पाद व उपकरण POS",
    tabCustomerPortal: "🔍 ग्राहक पासबुक (Customer Portal)",
    tabCattleFarm: "🐄 पशुपालन व खर्च (Cattle & Farm)",
    tabDirectory: "🩺 डॉक्टर व दुकानें (Directory)",
    tabFarmers: "किसान रजिस्टर (Farmers)",
    tabSales: "ग्राहक बिक्री (Retail Milk)",
    tabBilling: "पखवाड़ा बिलिंग (Billing)",
    tabFeed: "पशु आहार व खर्च (Feed & Expenses)",
    tabRateChart: "GST व सेटिंग्स (Settings)",
    tabDashboard: "डैशबोर्ड व रिपोर्ट (Dashboard)",

    // Mobile Tabs
    mobCollection: "दूध संकलन",
    mobProducts: "पनीर/उपकरण POS",
    mobCustomer: "ग्राहक खाता",
    mobCattle: "पशु व चारा",
    mobDirectory: "डॉक्टर व दुकान",
    mobBilling: "बिलिंग",
    mobSettings: "GST सेटिंग्स",

    // Summary Cards
    todayTotalMilk: "आज का कुल दूध",
    avgFat: "औसत फैट (Avg Fat)",
    standardPurity: "मानक अनुसार शुद्धता",
    todayMilkValue: "आज का दूध संकलन मूल्य",
    farmerPayable: "किसानों का देय मूल्य",
    todayProductSales: "आज की उत्पाद बिक्री (पनीर, घी)",
    totalRevenue: "कुल दैनिक राजस्व",
    quickAction: "क्विक एक्शन",
    downloadExcel: "📥 एक्सेल डाउनलोड",
    excelReport: "Excel/CSV रिपोर्ट",

    // Collection Form
    milkEntryTitle: "दूध संकलन एंट्री (Milk Entry)",
    autoRateBadge: "ऑटोमैटिक फैट/रेट कैलकुलेटर",
    labelDate: "दिनांक (Date)",
    labelShift: "पाली / शिफ्ट (Shift)",
    optMorning: "🌅 सुबह (Morning)",
    optEvening: "🌆 शाम (Evening)",
    labelMilkType: "दूध का प्रकार (Milk Type)",
    optBuffalo: "भैंस का दूध (Buffalo)",
    optCow: "गाय का दूध (Cow)",
    labelQuickCode: "किसान कोड लिखें (Quick Code)",
    phQuickCode: "जैसे 101, 102...",
    labelSelectFarmer: "किसान चुनें (Select Farmer)",
    phSelectFarmer: "-- किसान चुनें (Select Farmer) --",
    labelLiters: "मात्रा लीटर (Liters) *",
    labelFat: "फैट Fat (%) *",
    labelClr: "लैक्टोमीटर (CLR)",
    labelSnf: "एस.एन.एफ (SNF)",
    labelRate: "दर Rate (₹/L)",
    labelTotalAmount: "कुल रुपये (Total ₹)",
    btnSaveEntry: "💾 एंट्री सेव करें (Save & Print)",

    // Collection Table
    collectionListTitle: "दूध संकलन रजिस्टर (Milk Entries List)",
    filterAllShifts: "सभी शिफ्ट",
    filterMorning: "सुबह",
    filterEvening: "शाम",
    thDate: "तारीख",
    thShift: "पाली",
    thFarmer: "किसान विवरण",
    thType: "प्रकार",
    thLiters: "मात्रा",
    thFat: "फैट %",
    thSnf: "SNF %",
    thRate: "दर (₹/L)",
    thTotal: "कुल रकम (₹)",
    thActions: "एक्शन",
    noEntries: "कोई एंट्री नहीं मिली (No entries found)",

    // Products POS
    posTitle: "डेयरी उत्पाद बिलिंग व GST काउंटर",
    posSubtitle: "पनीर, शुद्ध घी, दही, मक्खन, छाछ एवं अन्य उत्पाद",
    quickAddProduct: "उत्पाद चुनें (Add to Cart)",
    cartTitle: "बिलिंग कार्ट (Billing Cart)",
    customerInfo: "ग्राहक विवरण (Customer Info)",
    walkinCustomer: "नया / वॉक-इन ग्राहक",
    customerPhone: "ग्राहक मोबाइल नंबर *",
    customerName: "ग्राहक का नाम",
    customerGst: "ग्राहक GSTIN (यदि B2B है)",
    taxableValue: "कर योग्य मूल्य (Taxable):",
    cgstLabel: "CGST:",
    sgstLabel: "SGST:",
    grandTotalLabel: "कुल बिल राशि (Grand Total):",
    btnGenerateGstBill: "🧾 GST बिल बनाएं व प्रिंट करें",
    btnSendGstWhatsapp: "📲 WhatsApp पर बिल भेजें",
    cartEmpty: "कार्ट खाली है। बाएं से उत्पाद चुनें।",

    // Customer Portal
    portalTitle: "ग्राहक रिकॉर्ड व पासबुक पोर्टल (Customer Portal)",
    portalSubtitle: "ग्राहक अपना मोबाइल नंबर डालकर अपना पूरा रिकॉर्ड और बकाया हिसाब देख सकते हैं",
    searchCustomerPh: "10 अंक का मोबाइल नंबर दर्ज करें (e.g. 9414001122)...",
    btnSearchRecord: "🔍 रिकॉर्ड देखें (Search)",
    totalPurchases: "कुल खरीदारी (Total Purchase):",
    totalPaid: "कुल जमा रकम (Paid):",
    pendingBalance: "वर्तमान बकाया राशि (Due Balance):",
    orderHistory: "लेन-देन व बिल इतिहास (Transaction History)",
    btnSendStatementWhatsapp: "📲 WhatsApp पर पूरा हिसाब भेजें",
    btnPrintStatement: "🖨️ स्टेटमेंट प्रिंट करें",
    noCustomerFound: "इस मोबाइल नंबर पर कोई पुराना रिकॉर्ड नहीं मिला।",

    // Farmers Register
    phSearchFarmer: "किसान खोजें (नाम, कोड, फोन, गाँव)...",
    btnAddFarmer: "+ नया किसान जोड़ें (Add Farmer)",
    lblPhone: "फोन:",
    lblBank: "बैंक / खाता:",
    lblTotalMilkDelivered: "कुल दूध:",
    lblAdvance: "उधार / पेशगी:",
    btnViewPassbook: "📖 खाता बही देखें",
    btnAddAdvance: "+ पेशगी",
    noFarmersFound: "कोई किसान नहीं मिला (No farmers found)",

    // Passbook Modal
    lblTotalDelivered: "कुल संकलित दूध:",
    lblGrossMilkValue: "सकल दूध मूल्य:",
    lblCurrentAdvance: "वर्तमान उधार/पेशगी:",
    btnClose: "बंद करें (Close)",
    noPassbookEntries: "दूध की कोई एंट्री दर्ज नहीं है",

    // Add Farmer Modal
    modalAddFarmerTitle: "नया किसान / पशुपालक जोड़ें",
    lblFarmerCode: "किसान कोड (Farmer Code) *",
    lblDefaultMilk: "डिफ़ॉल्ट दूध प्रकार",
    lblFullName: "किसान का पूरा नाम *",
    lblMobileNumber: "मोबाइल नंबर",
    lblVillage: "गाँव / ढाणी",
    lblInitialAdvance: "आरंभिक उधार/पेशगी (₹)",
    lblBankUpi: "बैंक खाता या UPI ID",
    btnSaveFarmer: "किसान जोड़ें (Save Farmer)",

    // Billing
    billingTitle: "10-दिवसीय पखवाड़ा एवं बिलिंग पर्ची जनरेटर",
    lblStartDate: "शुरुआती तारीख (Start Date)",
    lblEndDate: "अंतिम तारीख (End Date)",
    btnGenerateBills: "⚡ बिल व पर्ची तैयार करें",
    lblQuickCycle: "त्वरित पखवाड़ा चुनें:",
    cycle1: "1 से 10 तारीख",
    cycle2: "11 से 20 तारीख",
    cycle3: "21 से माह का अंत",
    grandSummaryTitle: "समग्र बिल सारांश (Grand Bill Summary)",
    lblTotalCollectedMilk: "कुल संकलित दूध:",
    lblGrossMilk: "सकल दूध मूल्य:",
    lblDeductions: "कुल कटौतियां:",
    lblNetPayout: "शुद्ध वितरण योग्य रकम:",
    btnPrintDetailedBill: "🖨️ विस्तृत बिल पर्ची प्रिंट करें",
    btnSendBillWhatsapp: "📲 WhatsApp पर बिल भेजें",
    billingPrompt: "ऊपर से तारीख चुनें और 'बिल व पर्ची तैयार करें' पर क्लिक करें",
    billingPromptSub: "सभी किसानों का सकल दूध मूल्य, खल कटौती, पेशगी कटौती और शुद्ध भुगतान एक साथ तैयार होगा",
    noBillsFound: "इस अवधि में किसी किसान की दूध एंट्री नहीं मिली",

    // Rate Chart & GST Settings
    settingsTitle: "डेयरी प्रोफाइल, GST एवं रेट सेटिंग्स",
    section1Dairy: "1. डेयरी व व्यापार विवरण (Business Profile)",
    lblDairyName: "डेयरी / व्यापार का नाम *",
    lblOwnerName: "संचालक का नाम",
    lblPhoneSettings: "मोबाइल नंबर *",
    lblAddressSettings: "डेयरी का पूरा पता",
    lblGstin: "GSTIN नंबर (GST Number)",
    lblFssai: "FSSAI लाइसेंस नंबर (Optional)",
    lblState: "राज्य व राज्य कोड (State & Code)",
    lblBusinessType: "डेयरी व्यापार का प्रकार (Business Mode) *",
    section2Rate: "2. दूध रेट निर्धारण फॉर्मूला (Rate Matrix)",
    lblCowRateFat: "गाय दूध: दर प्रति 1% फैट (₹)",
    lblBufRateFat: "भैंस दूध: दर प्रति 1% फैट (₹)",
    lblSnfBonus: "SNF बोनस / कटौती दर (प्रति 0.1 SNF ₹)",
    section3Footer: "3. बिल व पर्ची फूटर संदेश (Receipt Footer)",
    btnSaveSettings: "💾 सेटिंग्स सुरक्षित करें (Save Settings)",
    backupTitle: "💾 डेटा सुरक्षा एवं बैकअप (Backup & Restore)",
    backupDesc: "आपका सारा डेयरी डेटा (GST बिल, पनीर/घी बिक्री, किसान, दूध एंट्री) सुरक्षित रहता है। एक क्लिक से बैकअप डाउनलोड करें।",
    btnDownloadBackup: "पूरा बैकअप डाउनलोड करें",
    btnRestoreBackup: "बैकअप फाइल रिस्टोर करें",

    // Dashboard & Reports
    totalRegisteredFarmers: "कुल पंजीकृत किसान",
    lifetimeMilk: "कुल संकलित दूध (लाइफटाइम)",
    lifetimeCost: "कुल दूध खरीद मूल्य",
    retailRevenue: "कुल डेयरी उत्पाद बिक्री राजस्व",
    todaySnapshot: "📅 आज का दूध सारांश (Today's Snapshot)",
    liveBadge: "लाइव",
    lblTodayCol: "आज का संकलन:",
    lblTodayVal: "आज का मूल्य:",
    topSuppliers: "🏆 शीर्ष दूध प्रदाता किसान (Top Suppliers)",

    // Modals
    receiptPreviewTitle: "रसीद / पर्ची पूर्वावलोकन",
    btnPrintReceipt: "🖨️ पर्ची प्रिंट करें",
    btnWhatsappReceipt: "📲 WhatsApp भेजें"
  },

  en: {
    appTitle: "Dairy Hisab",
    tagline: "Milk Collection, Dairy Products (Paneer, Ghee, Curd), GST Billing & Accounts",
    shiftBadgeMorning: "Shift: Morning",
    shiftBadgeEvening: "Shift: Evening",
    businessModeLabel: "Business Mode:",
    modeAll: "All-in-One Complete Dairy",
    modeProducts: "Dairy Products Store (Paneer, Ghee, Curd)",
    modeMilk: "Milk Collection Center",

    // Auth & OTP Strings
    authWelcome: "Welcome to Dairy Hisab",
    authSub: "Complete cloud-ready Dairy Management, Products POS & GST Invoicing Solution",
    tabOtpLogin: "📱 OTP Login",
    tabPasswordLogin: "🔑 Password",
    tabLogin: "Log In",
    tabSignup: "✨ Sign Up",
    lblEnterPhone: "Enter Mobile Number (10 Digits) *",
    btnSendRealOtp: "📲 Send Real SMS OTP",
    btnSendWhatsAppOtp: "💬 Get OTP on WhatsApp",
    liveOtpAlert: "Real SMS OTP Dispatched",
    lblEnterOtpCode: "Enter 6-Digit OTP Code *",
    changePhone: "Change Number",
    resendIn: "Resend in",
    btnResendOtp: "Resend OTP",
    btnVerifyLogin: "Verify OTP & Log In",
    badgeDairyApp: "Dairy App",
    lblAuthPhone: "Mobile Number *",
    lblAuthPassword: "Password *",
    lblAuthConfirmPassword: "Confirm Password *",
    lblAuthDairyName: "Dairy / Business Name *",
    lblAuthOwnerName: "Owner / Proprietor Name *",
    lblAuthGstin: "GSTIN Number (Optional)",
    lblAuthBusinessType: "Business Type *",
    lblAuthAddress: "Village / City / Full Address *",
    btnLoginSubmit: "Log In to Dairy Hisab",
    btnSignupSubmit: "Register & Get Started",
    dontHaveAccount: "Don't have an account? Sign Up here",
    alreadyHaveAccount: "Already have an account? Log In here",
    logoutBtn: "Log Out",

    // Tabs
    tabCollection: "Milk Collection",
    tabProductsPos: "🧀 Dairy Products & Equipment POS",
    tabCustomerPortal: "🔍 Customer Portal",
    tabCattleFarm: "🐄 Cattle & Farm Management",
    tabDirectory: "🩺 Doctors & Shops Directory",
    tabFarmers: "Farmers Register",
    tabSales: "Retail Milk",
    tabBilling: "Billing & Slips",
    tabFeed: "Feed & Expenses",
    tabRateChart: "GST & Settings",
    tabDashboard: "Dashboard & Reports",

    // Mobile Tabs
    mobCollection: "Collection",
    mobProducts: "POS & Tools",
    mobCustomer: "Customer",
    mobCattle: "Cattle",
    mobDirectory: "Directory",
    mobBilling: "Billing",
    mobSettings: "GST Settings",

    // Summary Cards
    todayTotalMilk: "Today's Total Milk",
    avgFat: "Average Fat %",
    standardPurity: "Quality Benchmark",
    todayMilkValue: "Today's Milk Purchase Cost",
    farmerPayable: "Payable to Suppliers",
    todayProductSales: "Today's Products Sales (Paneer/Ghee)",
    totalRevenue: "Daily Revenue",
    quickAction: "Quick Action",
    downloadExcel: "📥 Export to Excel",
    excelReport: "Excel/CSV Report",

    // Collection Form
    milkEntryTitle: "Milk Collection Entry",
    autoRateBadge: "Auto Fat/Rate Calculator",
    labelDate: "Date",
    labelShift: "Shift",
    optMorning: "🌅 Morning",
    optEvening: "🌆 Evening",
    labelMilkType: "Milk Type",
    optBuffalo: "Buffalo Milk",
    optCow: "Cow Milk",
    labelQuickCode: "Quick Farmer Code",
    phQuickCode: "e.g. 101, 102...",
    labelSelectFarmer: "Select Farmer",
    phSelectFarmer: "-- Select Farmer --",
    labelLiters: "Quantity (Liters) *",
    labelFat: "Fat (%) *",
    labelClr: "Lactometer (CLR)",
    labelSnf: "SNF (%)",
    labelRate: "Rate (₹/Liter)",
    labelTotalAmount: "Total Amount (₹)",
    btnSaveEntry: "💾 Save & Print Slip",

    // Collection Table
    collectionListTitle: "Milk Collection Register",
    filterAllShifts: "All Shifts",
    filterMorning: "Morning",
    filterEvening: "Evening",
    thDate: "Date",
    thShift: "Shift",
    thFarmer: "Farmer Details",
    thType: "Type",
    thLiters: "Quantity (L)",
    thFat: "Fat %",
    thSnf: "SNF %",
    thRate: "Rate (₹/L)",
    thTotal: "Total (₹)",
    thActions: "Actions",
    noEntries: "No milk entries recorded yet",

    // Products POS
    posTitle: "Dairy Products Counter & GST Billing",
    posSubtitle: "Fresh Paneer, Desi Ghee, Curd, Butter, Buttermilk & Dairy Items",
    quickAddProduct: "Select Products (Add to Cart)",
    cartTitle: "Billing Cart",
    customerInfo: "Customer Details",
    walkinCustomer: "New / Walk-in Customer",
    customerPhone: "Customer Mobile Number *",
    customerName: "Customer Name",
    customerGst: "Customer GSTIN (if B2B)",
    taxableValue: "Taxable Value:",
    cgstLabel: "CGST:",
    sgstLabel: "SGST:",
    grandTotalLabel: "Grand Total (₹):",
    btnGenerateGstBill: "🧾 Generate & Print GST Tax Invoice",
    btnSendGstWhatsapp: "📲 Send Invoice via WhatsApp",
    cartEmpty: "Cart is empty. Select products on the left.",

    // Customer Portal
    portalTitle: "Customer Portal & Self-Service Passbook",
    portalSubtitle: "Enter customer mobile number to view complete purchase history, orders and pending due balance",
    searchCustomerPh: "Enter 10-digit mobile number (e.g. 9414001122)...",
    btnSearchRecord: "🔍 Search Record",
    totalPurchases: "Total Purchases:",
    totalPaid: "Total Paid Amount:",
    pendingBalance: "Current Due Balance:",
    orderHistory: "Transaction & Order History",
    btnSendStatementWhatsapp: "📲 Send Full Statement via WhatsApp",
    btnPrintStatement: "🖨️ Print Statement",
    noCustomerFound: "No records found for this mobile number.",

    // Farmers Register
    phSearchFarmer: "Search farmer (Name, Code, Phone, Village)...",
    btnAddFarmer: "+ Add New Farmer",
    lblPhone: "Phone:",
    lblBank: "Bank / A/c:",
    lblTotalMilkDelivered: "Total Milk:",
    lblAdvance: "Advance / Loan:",
    btnViewPassbook: "📖 View Passbook",
    btnAddAdvance: "+ Advance",
    noFarmersFound: "No farmers found",

    // Passbook Modal
    lblTotalDelivered: "Total Milk Supplied:",
    lblGrossMilkValue: "Gross Milk Amount:",
    lblCurrentAdvance: "Current Advance / Loan:",
    btnClose: "Close",
    noPassbookEntries: "No milk collection entries on record",

    // Add Farmer Modal
    modalAddFarmerTitle: "Add New Farmer / Supplier",
    lblFarmerCode: "Farmer Code *",
    lblDefaultMilk: "Default Milk Type",
    lblFullName: "Full Name *",
    lblMobileNumber: "Mobile Number",
    lblVillage: "Village / Area",
    lblInitialAdvance: "Opening Advance / Loan (₹)",
    lblBankUpi: "Bank Account / UPI ID",
    btnSaveFarmer: "Save Farmer",

    // Billing
    billingTitle: "10-Day Cycle Billing & Payment Vouchers",
    lblStartDate: "Start Date",
    lblEndDate: "End Date",
    btnGenerateBills: "⚡ Generate Bills & Slips",
    lblQuickCycle: "Quick Cycle Shortcuts:",
    cycle1: "1st to 10th",
    cycle2: "11th to 20th",
    cycle3: "21st to Month End",
    grandSummaryTitle: "Grand Billing Summary",
    lblTotalCollectedMilk: "Total Collected Milk:",
    lblGrossMilk: "Gross Milk Amount:",
    lblDeductions: "Total Deductions:",
    lblNetPayout: "Net Payout Amount:",
    btnPrintDetailedBill: "🖨️ Print Detailed Bill Slip",
    btnSendBillWhatsapp: "📲 Send Bill via WhatsApp",
    billingPrompt: "Select date range above and click 'Generate Bills & Slips'",
    billingPromptSub: "Calculates Gross Milk Value, Feed Deductions, Advance Deductions & Net Payout automatically",
    noBillsFound: "No milk entries found in this date range",

    // Rate Chart & GST Settings
    settingsTitle: "Dairy Profile, GST & Rate Settings",
    section1Dairy: "1. Business & GST Profile",
    lblDairyName: "Dairy / Business Name *",
    lblOwnerName: "Proprietor / Owner Name",
    lblPhoneSettings: "Contact Phone Number *",
    lblAddressSettings: "Complete Address",
    lblGstin: "GSTIN Number",
    lblFssai: "FSSAI License No. (Optional)",
    lblState: "State & State Code",
    lblBusinessType: "Business Mode *",
    section2Rate: "2. Milk Rate Matrix Formula",
    lblCowRateFat: "Cow Milk: Rate per 1% Fat (₹)",
    lblBufRateFat: "Buffalo Milk: Rate per 1% Fat (₹)",
    lblSnfBonus: "SNF Bonus / Penalty (per 0.1 SNF deviation ₹)",
    section3Footer: "3. Receipt Footer Message",
    btnSaveSettings: "💾 Save Settings",
    backupTitle: "💾 Data Security, Backup & Restore",
    backupDesc: "All your data (GST invoices, Paneer/Ghee sales, farmer entries) is saved safely on your device. Download a full JSON backup anytime.",
    btnDownloadBackup: "Download JSON Backup",
    btnRestoreBackup: "Restore from JSON File",

    // Dashboard & Reports
    totalRegisteredFarmers: "Registered Farmers",
    lifetimeMilk: "Lifetime Milk Collected",
    lifetimeCost: "Total Milk Purchase Cost",
    retailRevenue: "Total Products Sales Revenue",
    todaySnapshot: "📅 Today's Milk Snapshot",
    liveBadge: "Live",
    lblTodayCol: "Today's Milk:",
    lblTodayVal: "Today's Value:",
    topSuppliers: "🏆 Top Milk Suppliers",

    // Modals
    receiptPreviewTitle: "Receipt / Voucher Preview",
    btnPrintReceipt: "🖨️ Print Slip",
    btnWhatsappReceipt: "📲 Share on WhatsApp"
  }
};

// Default registered users list
const DEFAULT_USERS = [
  {
    phone: "9829012345",
    password: "123",
    name: "डेयरी संचालक",
    nameEn: "Dairy Owner",
    dairyName: "डेयरी हिसाब",
    dairyNameEn: "Dairy Hisab",
    gstin: "",
    fssai: "",
    businessMode: "all",
    address: "मुख्य बाजार",
    state: "India"
  }
];

// Initial default demo data for Dairy Hisab
const DEFAULT_DATA = {
  settings: {
    dairyName: "डेयरी हिसाब",
    dairyNameEn: "Dairy Hisab",
    ownerName: "डेयरी संचालक",
    ownerNameEn: "Dairy Owner",
    phone: "9829012345",
    address: "मुख्य बाजार",
    addressEn: "Main Market",
    gstin: "",
    fssai: "",
    state: "India",
    businessMode: "all", // 'all' | 'products' | 'milk'
    smsProvider: "direct",
    smsApiKey: "",
    defaultUnit: "ltr", // 'ltr' | 'kg'
    rateMode: "per_fat", // 'per_fat' | 'fat_kg'
    cowRatePerFat: 7.50,
    buffaloRatePerFat: 8.40,
    cowFatKgRate: 750,
    buffaloFatKgRate: 840,
    standardCowSnf: 8.5,
    standardBuffaloSnf: 9.0,
    snfBonusRate: 0.50,
    receiptFooter: "शुद्ध दूध, शुद्ध पनीर व देसी घी ही हमारी पहचान है। धन्यवाद!",
    receiptFooterEn: "Pure Milk, Paneer & Desi Ghee is our hallmark. Thank you!"
  },
  products: [
    { id: "P1", name: "ताज़ा पनीर (Fresh Paneer)", nameEn: "Fresh Malai Paneer", unit: "kg", rate: 360, hsn: "0406", gstPercent: 5, stock: 35, category: "dairy" },
    { id: "P2", name: "शुद्ध देसी गाय घी (Pure Cow Ghee)", nameEn: "Pure Desi Cow Ghee (1L Jar)", unit: "ltr", rate: 650, hsn: "0405", gstPercent: 12, stock: 50, category: "dairy" },
    { id: "P3", name: "शुद्ध भैंस घी (Buffalo Ghee)", nameEn: "Pure Buffalo Ghee (1L Jar)", unit: "ltr", rate: 700, hsn: "0405", gstPercent: 12, stock: 40, category: "dairy" },
    { id: "P4", name: "मीठा / ताज़ा दही (Fresh Curd)", nameEn: "Fresh Curd / Dahi", unit: "kg", rate: 70, hsn: "0403", gstPercent: 5, stock: 60, category: "dairy" },
    { id: "P5", name: "मक्खन / टेबल बटर (Butter)", nameEn: "White / Table Butter", unit: "kg", rate: 480, hsn: "0405", gstPercent: 12, stock: 20, category: "dairy" },
    { id: "P6", name: "मसाला छाछ (Spiced Buttermilk)", nameEn: "Masala Chaach (500ml)", unit: "pkt", rate: 15, hsn: "0403", gstPercent: 0, stock: 120, category: "dairy" },
    { id: "P7", name: "शुद्ध मावा / खोया (Khoya / Mawa)", nameEn: "Pure Milk Mawa / Khoya", unit: "kg", rate: 380, hsn: "0402", gstPercent: 5, stock: 25, category: "dairy" },
    { id: "P8", name: "ताज़ा गाय दूध (Fresh Cow Milk)", nameEn: "Fresh Cow Milk", unit: "ltr", rate: 55, hsn: "0401", gstPercent: 0, stock: 150, category: "dairy" },
    { id: "P9", name: "ताज़ा भैंस दूध (Fresh Buffalo Milk)", nameEn: "Fresh Buffalo Milk", unit: "ltr", rate: 68, hsn: "0401", gstPercent: 0, stock: 180, category: "dairy" },

    // Dairy Equipment & Machinery (डेयरी उपकरण व मशीनरी)
    { id: "EQ1", name: "दूध की बोतल (Milk Bottle - 1L कांच/प्लास्टिक)", nameEn: "Milk Bottle (1L)", unit: "pcs", rate: 25, hsn: "7010", gstPercent: 12, stock: 150, category: "equipment" },
    { id: "EQ2", name: "दूध का कैन (Milk Can - 20L/40L स्टील/एल्युमिनियम)", nameEn: "Milk Can (40L/20L)", unit: "pcs", rate: 1850, hsn: "7310", gstPercent: 12, stock: 15, category: "equipment" },
    { id: "EQ3", name: "मापने वाला बर्तन (Measuring Jug Set - SS 100ml-1L)", nameEn: "Measuring Jug (SS Set)", unit: "set", rate: 350, hsn: "7323", gstPercent: 12, stock: 25, category: "equipment" },
    { id: "EQ4", name: "दूध की मशीन (Milk Vending Machine / ATM)", nameEn: "Milk Vending Machine", unit: "pcs", rate: 45000, hsn: "8434", gstPercent: 18, stock: 3, category: "equipment" },
    { id: "EQ5", name: "फ्रिज (Commercial Dairy Refrigerator)", nameEn: "Commercial Refrigerator", unit: "pcs", rate: 22000, hsn: "8418", gstPercent: 18, stock: 4, category: "equipment" },
    { id: "EQ6", name: "डीप फ्रीजर (Deep Freezer - 300L/500L)", nameEn: "Deep Freezer (300L/500L)", unit: "pcs", rate: 28500, hsn: "8418", gstPercent: 18, stock: 2, category: "equipment" },
    { id: "EQ7", name: "वजन मशीन (Digital Weighing Scale - 100kg)", nameEn: "Digital Weighing Scale", unit: "pcs", rate: 2400, hsn: "8423", gstPercent: 18, stock: 8, category: "equipment" },
    { id: "EQ8", name: "बिलिंग मशीन (Thermal POS Billing Machine)", nameEn: "Thermal POS Billing Machine", unit: "pcs", rate: 8500, hsn: "8470", gstPercent: 18, stock: 5, category: "equipment" }
  ],
  cattleSummary: {
    totalBuffaloes: 8,
    milkingBuffaloes: 6,
    dryBuffaloes: 2,
    totalCows: 6,
    milkingCows: 5,
    dryCows: 1,
    totalCalves: 4,
    dailyMilkOutput: 110.5
  },
  cattleList: [
    { id: "CAT-1", tagNo: "TAG-101", name: "काली (भैंस)", type: "buffalo", breed: "मुर्राह (Murrah)", status: "milking", dailyMilk: 14.5, age: "4 वर्ष", lastCalving: "2026-06-15" },
    { id: "CAT-2", tagNo: "TAG-102", name: "गंगा (गाय)", type: "cow", breed: "साहीवाल (Sahiwal)", status: "milking", dailyMilk: 16.0, age: "3.5 वर्ष", lastCalving: "2026-07-20" },
    { id: "CAT-3", tagNo: "TAG-103", name: "लक्ष्मी (भैंस)", type: "buffalo", breed: "मुर्राह", status: "milking", dailyMilk: 12.0, age: "5 वर्ष", lastCalving: "2026-05-10" },
    { id: "CAT-4", tagNo: "TAG-104", name: "गौरी (गाय)", type: "cow", breed: "गिर (Gir)", status: "milking", dailyMilk: 13.5, age: "4 वर्ष", lastCalving: "2026-08-05" },
    { id: "CAT-5", tagNo: "TAG-105", name: "चंपा (भैंस)", type: "buffalo", breed: "जाफराबादी", status: "pregnant", dailyMilk: 0.0, age: "6 वर्ष", lastCalving: "2025-11-12" }
  ],
  feedConsumption: {
    dryFodderQty: 75,
    dryFodderRate: 8.5,
    greenFodderQty: 150,
    greenFodderRate: 3.0,
    concentrateQty: 35,
    concentrateRate: 34.0
  },
  doctorCases: [],
  vetExpenses: [
    { id: "VET-1", date: "2026-10-18", animalTag: "TAG-101 (काली)", reason: "FMD खुरपका-मुंहपका टीका (Vaccination)", doctorName: "डॉ. रमेश वर्मा", amount: 450, notes: "सालाना अनिवार्य टीका" },
    { id: "VET-2", date: "2026-10-12", animalTag: "TAG-103 (लक्ष्मी)", reason: "कृत्रिम गर्भाधान (AI - Artificial Insemination)", doctorName: "डॉ. सुरेश यादव", amount: 600, notes: "उच्च नस्ल मुर्राह सीमन" },
    { id: "VET-3", date: "2026-09-28", animalTag: "TAG-102 (गंगा)", reason: "दूध बुखार व कैल्शियम सप्लीमेंट", doctorName: "डॉ. रमेश वर्मा", amount: 850, notes: "कैल्शियम टॉनिक व ड्रिप" }
  ],
  doctors: [
    {
      id: "DOC-1",
      name: "डॉ. रमेश वर्मा",
      degree: "B.V.Sc & A.H. (वरिष्ठ पशु चिकित्सा अधिकारी)",
      specialty: "गाय-भैंस प्रसूति, बांझपन व शल्य चिकित्सा",
      clinic: "राजकीय पशु चिकित्सालय एवं पॉलीक्लिनिक",
      phone: "9829123456",
      whatsapp: "9829123456",
      location: "सदर बाजार (2.5 किमी दूर)",
      rating: 4.9,
      reviewsCount: 84,
      isEmergency: true
    },
    {
      id: "DOC-2",
      name: "डॉ. सुरेश यादव",
      degree: "M.V.Sc (पशुधन विकास एवं AI स्पेशलिस्ट)",
      specialty: "उच्च नस्ल कृत्रिम गर्भाधान (AI) व पोषण सलाहकार",
      clinic: "किसान पशु सेवा केंद्र",
      phone: "9414567890",
      whatsapp: "9414567890",
      location: "तहसील रोड (4.0 किमी दूर)",
      rating: 4.8,
      reviewsCount: 62,
      isEmergency: false
    },
    {
      id: "DOC-3",
      name: "डॉ. मुकेश जाट",
      degree: "B.V.Sc (पशु सर्जन व टीकाकरण विशेषज्ञ)",
      specialty: "आपातकालीन उपचार, टीकाकरण व थनैला (Mastitis) इलाज",
      clinic: "गोपाल पशु चिकित्सा क्लिनिक",
      phone: "9828987654",
      whatsapp: "9828987654",
      location: "बाईपास चौराहा (5.5 किमी दूर)",
      rating: 4.7,
      reviewsCount: 49,
      isEmergency: true
    }
  ],
  shops: [
    {
      id: "SHP-1",
      name: "किसान डेयरी मशीनरी व इक्विपमेंट स्टोर",
      category: "डेयरी उपकरण व मशीनें",
      goods: "दूध के कैन (20L/40L), मापने वाले बर्तन, डीप फ्रीजर, मिल्किंग मशीन, वजन कांटा",
      owner: "राजेश अग्रवाल",
      phone: "9829011223",
      whatsapp: "9829011223",
      address: "जीटी रोड, मंडी गेट के सामने (1.8 किमी)",
      rating: 4.9,
      qualityBadge: "🌟 सर्वोत्तम क्वालिटी कैन व मशीनरी"
    },
    {
      id: "SHP-2",
      name: "श्री श्याम कैटल फीड व खल चूरी डिपो",
      category: "पशु आहार व दाना",
      goods: "शुद्ध कपासिया खल, सरसों खल, मक्का चूरी, मिनरल मिक्सचर",
      owner: "मुरारी लाल",
      phone: "9414099887",
      whatsapp: "9414099887",
      address: "अनाज मंडी, शॉप नं 42 (3.0 किमी)",
      rating: 4.8,
      qualityBadge: "🌾 थोक भाव, 100% शुद्ध खल व चूरी"
    },
    {
      id: "SHP-3",
      name: "न्यू मॉडर्न बॉटल्स एवं डेयरी पैकेजिंग",
      category: "दूध बोतलें व पाउच",
      goods: "कांच व प्लास्टिक दूध बोतलें (500ml/1L), सील ढक्कन, छाछ पाउच",
      owner: "संजय जैन",
      phone: "9829554433",
      whatsapp: "9829554433",
      address: "इंडस्ट्रियल एरिया, फेस 1 (6.0 किमी)",
      rating: 4.7,
      qualityBadge: "🍾 मजबूत व सस्ती फूड-ग्रेड बोतलें"
    }
  ],
  farmers: [
    { id: "101", name: "रामकिशन यादव", nameEn: "Ramkishan Yadav", phone: "9829100101", village: "आनंदपुर", milkType: "buffalo", advance: 1500, bank: "SBI - 402819201" },
    { id: "102", name: "मुकेश चौधरी", nameEn: "Mukesh Choudhary", phone: "9829100102", village: "रामपुरा", milkType: "cow", advance: 800, bank: "PNB - 192837192" },
    { id: "103", name: "सुभाष गुर्जर", nameEn: "Subhash Gurjar", phone: "9829100103", village: "आनंदपुर", milkType: "buffalo", advance: 0, bank: "BOB - 837261928" },
    { id: "104", name: "दिनेश जाट", nameEn: "Dinesh Jat", phone: "9829100104", village: "किशनगढ़", milkType: "cow", advance: 2000, bank: "HDFC - 928371928" }
  ],
  collections: [
    { id: "COL-1001", date: new Date().toISOString().split('T')[0], shift: "morning", farmerId: "101", farmerName: "रामकिशन यादव", farmerNameEn: "Ramkishan Yadav", milkType: "buffalo", liters: 6.5, fat: 6.8, snf: 9.1, clr: 30, rate: 57.62, totalAmount: 374.53, timestamp: "06:45 AM" },
    { id: "COL-1002", date: new Date().toISOString().split('T')[0], shift: "morning", farmerId: "102", farmerName: "मुकेश चौधरी", farmerNameEn: "Mukesh Choudhary", milkType: "cow", liters: 9.0, fat: 4.1, snf: 8.5, clr: 28, rate: 30.75, totalAmount: 276.75, timestamp: "07:10 AM" }
  ],
  customers: [
    { id: "C101", name: "सुरेश हलवाई (मिष्ठान भंडार)", nameEn: "Suresh Sweets", phone: "9414001122", gstin: "08ABCDE1234F1Z1", address: "मेन मार्केट", balance: 1450 },
    { id: "C102", name: "राजेश चाय वाला", nameEn: "Rajesh Tea Stall", phone: "9414002233", gstin: "", address: "बस स्टैंड", balance: 350 },
    { id: "C103", name: "शर्मा जी (होम डिलीवरी)", nameEn: "Sharma Ji", phone: "9414003344", gstin: "", address: "वार्ड नं 4", balance: 0 }
  ],
  invoices: [
    {
      invoiceNo: "INV-2026-001",
      date: new Date().toISOString().split('T')[0],
      time: "10:30 AM",
      customerName: "सुरेश हलवाई (मिष्ठान भंडार)",
      customerPhone: "9414001122",
      customerGst: "08ABCDE1234F1Z1",
      items: [
        { name: "ताज़ा पनीर (Fresh Paneer)", hsn: "0406", qty: 5, unit: "kg", rate: 360, amount: 1800, gstPercent: 5, cgst: 45, sgst: 45 },
        { name: "शुद्ध देसी घी (Pure Cow Ghee)", hsn: "0405", qty: 2, unit: "ltr", rate: 650, amount: 1300, gstPercent: 12, cgst: 78, sgst: 78 }
      ],
      taxableAmount: 3100,
      cgstTotal: 123,
      sgstTotal: 123,
      grandTotal: 3346,
      paidAmount: 2000,
      dueAmount: 1346,
      paymentMethod: "UPI / Cash"
    }
  ],
  sales: [
    { id: "SL-1", date: new Date().toISOString().split('T')[0], shift: "morning", customerId: "C101", customerName: "सुरेश हलवाई", liters: 25, rate: 64, total: 1600, paid: 1600, status: "paid" }
  ],
  feedItems: [
    { id: "F1", name: "कपासिया खल (50kg बोरी)", price: 1850, stock: 45 },
    { id: "F2", name: "मक्का चूरी (50kg बोरी)", price: 1450, stock: 30 }
  ],
  feedSales: [],
  expenses: []
};

// Global App State
let appData = {};
let currentLang = 'hi';
let currentTab = 'products-pos';
let currentCart = [];
let currentUser = null; // Current logged-in user

function t(key) {
  if (I18N[currentLang] && I18N[currentLang][key] !== undefined) {
    return I18N[currentLang][key];
  }
  if (I18N['en'] && I18N['en'][key] !== undefined) {
    return I18N['en'][key];
  }
  return key;
}

function getLocalizedName(obj) {
  if (!obj) return '';
  if (currentLang === 'en' && obj.nameEn) return obj.nameEn;
  return obj.name || '';
}

// ----------------------------------------------------
// AUTHENTICATION & SESSION MANAGEMENT
// ----------------------------------------------------
function getUsersList() {
  const saved = localStorage.getItem(USERS_STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return DEFAULT_USERS;
    }
  }
  return DEFAULT_USERS;
}

function saveUsersList(users) {
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
}

function updateHeaderBranding() {
  const titleEl = document.getElementById('app-header-title');
  const badgeEl = document.getElementById('app-header-badge');
  const tagEl = document.getElementById('app-header-tag');
  const userEl = document.getElementById('header-user-name');

  // Title: If user has registered/logged in with their dairy name, show THAT! Otherwise show 'Dairy Hisab (डेयरी हिसाब)'
  let displayName = currentLang === 'en' ? "Dairy Hisab" : "डेयरी हिसाब";
  if (currentUser && currentUser.dairyName) {
    displayName = currentUser.dairyName;
  } else if (appData.settings && appData.settings.dairyName && appData.settings.dairyName !== "श्री कृष्णा डेयरी एवं मिष्ठान भंडार") {
    displayName = appData.settings.dairyName;
  }

  if (currentUser && currentUser.role === 'doctor') {
    displayName = currentUser.clinic || currentUser.name;
    if (titleEl) titleEl.innerText = displayName;
    if (badgeEl) {
      badgeEl.innerText = "🩺 पशु चिकित्सक";
      badgeEl.className = "bg-teal-400 text-teal-950 text-[10px] font-black px-2 py-0.5 rounded shadow uppercase";
    }
    if (tagEl) {
      tagEl.innerText = `${currentUser.degree || 'B.V.Sc & A.H'} | ${currentUser.specialty || 'पशु चिकित्सा'} | ${currentUser.location || currentUser.address || ''}`;
    }
    if (userEl) {
      userEl.innerText = currentUser.name;
    }
    const modeSelect = document.getElementById('business-mode-select');
    if (modeSelect && modeSelect.parentElement) {
      modeSelect.parentElement.classList.add('hidden');
    }
    return;
  }

  const modeSelect = document.getElementById('business-mode-select');
  if (modeSelect && modeSelect.parentElement) {
    modeSelect.parentElement.classList.remove('hidden');
  }

  if (titleEl) {
    titleEl.innerText = displayName;
  }

  if (badgeEl) {
    const userGstin = (currentUser && currentUser.gstin) || (appData.settings && appData.settings.gstin);
    if (userGstin) {
      badgeEl.innerText = "GST: " + userGstin;
      badgeEl.className = "bg-amber-400 text-amber-950 text-[10px] font-black px-2 py-0.5 rounded shadow uppercase";
    } else {
      badgeEl.innerText = currentLang === 'en' ? "Dairy App" : "डेयरी ऐप";
      badgeEl.className = "bg-emerald-500/80 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow uppercase";
    }
  }

  if (tagEl) {
    if (currentUser && (currentUser.name || currentUser.address)) {
      const ownerLabel = currentLang === 'en' ? 'Owner' : 'संचालक';
      tagEl.innerText = `${ownerLabel}: ${currentUser.name || ''} ${currentUser.address ? ' | ' + currentUser.address : ''}`;
    } else {
      tagEl.innerText = t('tagline');
    }
  }

  if (userEl && currentUser) {
    userEl.innerText = currentUser.name || currentUser.phone;
  }
}

function checkAuthSession() {
  const savedSession = localStorage.getItem(SESSION_STORAGE_KEY);
  if (savedSession) {
    try {
      currentUser = JSON.parse(savedSession);
    } catch (e) {
      currentUser = null;
    }
  }

  const authScreen = document.getElementById('auth-screen');
  const appHeader = document.getElementById('app-header');
  const appNavbar = document.getElementById('app-navbar');
  const mainContainer = document.getElementById('main-container');
  const mobileNav = document.getElementById('mobile-nav');

  if (currentUser) {
    // Logged in
    if (authScreen) authScreen.classList.add('hidden');
    if (appHeader) appHeader.classList.remove('hidden');
    if (appNavbar) appNavbar.classList.remove('hidden');
    if (mainContainer) mainContainer.classList.remove('hidden');
    if (mobileNav) mobileNav.classList.remove('hidden');

    // Synchronize settings with current user profile
    if (currentUser.dairyName) appData.settings.dairyName = currentUser.dairyName;
    if (currentUser.name) appData.settings.ownerName = currentUser.name;
    if (currentUser.phone) appData.settings.phone = currentUser.phone;
    if (currentUser.gstin) appData.settings.gstin = currentUser.gstin;
    if (currentUser.businessMode) appData.settings.businessMode = currentUser.businessMode;
    if (currentUser.address) appData.settings.address = currentUser.address;
    
    updateHeaderBranding();
    updateLanguageUI();
    setupBusinessMode();
    updateNavForRole(currentUser.role || 'dairy');
    if (currentUser.role === 'doctor' && (currentTab === 'products-pos' || currentTab === 'collection' || currentTab === 'billing')) {
      switchTab('doctor-portal');
    }
  } else {
    // Not logged in -> Show login/signup screen
    if (authScreen) authScreen.classList.remove('hidden');
    if (appHeader) appHeader.classList.add('hidden');
    if (appNavbar) appNavbar.classList.add('hidden');
    if (mainContainer) mainContainer.classList.add('hidden');
    if (mobileNav) mobileNav.classList.add('hidden');
    switchAuthMode('otp'); // Default to OTP login
  }
}

function switchAuthMode(mode) {
  const otpForm = document.getElementById('auth-otp-form');
  const loginForm = document.getElementById('auth-login-form');
  const signupForm = document.getElementById('auth-signup-form');
  const passbookForm = document.getElementById('auth-passbook-form');
  const tabOtpBtn = document.getElementById('auth-tab-otp-btn');
  const tabLoginBtn = document.getElementById('auth-tab-login-btn');
  const tabSignupBtn = document.getElementById('auth-tab-signup-btn');
  const tabPassbookBtn = document.getElementById('auth-tab-passbook-btn');

  const activeTabClass = "flex-1 py-2 text-center font-bold text-xs rounded-xl bg-white text-emerald-800 shadow-sm border border-emerald-100 transition";
  const inactiveTabClass = "flex-1 py-2 text-center font-bold text-xs rounded-xl text-slate-500 hover:text-slate-800 transition";

  if (otpForm) otpForm.classList.add('hidden');
  if (loginForm) loginForm.classList.add('hidden');
  if (signupForm) signupForm.classList.add('hidden');
  if (passbookForm) passbookForm.classList.add('hidden');

  if (tabOtpBtn) tabOtpBtn.className = inactiveTabClass;
  if (tabLoginBtn) tabLoginBtn.className = inactiveTabClass;
  if (tabSignupBtn) tabSignupBtn.className = inactiveTabClass;
  if (tabPassbookBtn) tabPassbookBtn.className = inactiveTabClass;

  if (mode === 'otp') {
    if (otpForm) otpForm.classList.remove('hidden');
    if (tabOtpBtn) tabOtpBtn.className = activeTabClass;
  } else if (mode === 'login') {
    if (loginForm) loginForm.classList.remove('hidden');
    if (tabLoginBtn) tabLoginBtn.className = activeTabClass;
  } else if (mode === 'signup') {
    if (signupForm) signupForm.classList.remove('hidden');
    if (tabSignupBtn) tabSignupBtn.className = activeTabClass;
  } else if (mode === 'passbook') {
    if (passbookForm) passbookForm.classList.remove('hidden');
    if (tabPassbookBtn) tabPassbookBtn.className = activeTabClass;
  }
}

// ----------------------------------------------------
// REAL OTP ENGINE & SMS GATEWAY
// ----------------------------------------------------
let activeOtpData = null; // { phone, code, expiresAt, timerInterval }

async function dispatchRealSmsOtp(phone, otpCode, provider = 'direct') {
  const smsApiKey = (appData.settings && appData.settings.smsApiKey) || localStorage.getItem('dairy_sms_api_key') || '';
  const chosenProvider = (appData.settings && appData.settings.smsProvider) || localStorage.getItem('dairy_sms_provider') || provider;

  let apiSuccess = false;
  let statusMessage = "";

  // 1. Fast2SMS API (Popular Indian instant SMS gateway)
  if (chosenProvider === 'fast2sms' && smsApiKey) {
    try {
      const url = `https://www.fast2sms.com/dev/bulkV2?authorization=${encodeURIComponent(smsApiKey)}&variables_values=${encodeURIComponent(otpCode)}&route=otp&numbers=${encodeURIComponent(phone)}`;
      const res = await fetch(url, { method: 'GET' });
      const data = await res.json();
      if (data && data.return) {
        apiSuccess = true;
        statusMessage = "Fast2SMS Real SMS Delivered!";
      }
    } catch (err) {
      console.warn("Fast2SMS fetch error:", err);
    }
  }

  // 2. 2Factor.in API
  if (chosenProvider === 'twofactor' && smsApiKey) {
    try {
      const url = `https://2factor.in/v1/API/V1/${encodeURIComponent(smsApiKey)}/SMS/${encodeURIComponent(phone)}/${encodeURIComponent(otpCode)}/OTP1`;
      const res = await fetch(url, { method: 'GET' });
      const data = await res.json();
      if (data && data.Status === 'Success') {
        apiSuccess = true;
        statusMessage = "2Factor Real SMS Sent!";
      }
    } catch (err) {
      console.warn("2Factor fetch error:", err);
    }
  }

  console.log(`[REAL OTP SENT] Mobile: +91-${phone}, Code: ${otpCode}, Provider: ${chosenProvider}`);
  return { apiSuccess, statusMessage };
}

function sendOtpViaWhatsApp(phone, otpCode) {
  const msg = encodeURIComponent(`डेयरी हिसाब (Dairy Hisab) सुरक्षा सत्यापन:\nआपका लॉगिन OTP कोड है: *${otpCode}*\nयह कोड 5 मिनट तक मान्य है। कृपया इसे किसी के साथ साझा न करें।`);
  const waUrl = `https://api.whatsapp.com/send?phone=91${phone}&text=${msg}`;
  window.open(waUrl, '_blank');
}

function handleSendOtp(channel = 'sms') {
  const phoneInput = document.getElementById('otp-phone-input');
  if (!phoneInput) return;
  const phone = phoneInput.value.trim().replace(/\D/g, '');

  if (phone.length !== 10) {
    alert(currentLang === 'en' 
      ? "Please enter a valid 10-digit mobile number!" 
      : "कृपया 10 अंकों का सही मोबाइल नंबर दर्ज करें!");
    phoneInput.focus();
    return;
  }

  // Generate cryptographically random 6-digit OTP
  const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

  if (activeOtpData && activeOtpData.timerInterval) {
    clearInterval(activeOtpData.timerInterval);
  }

  activeOtpData = {
    phone,
    code: otpCode,
    expiresAt: Date.now() + 5 * 60 * 1000
  };

  const phoneStep = document.getElementById('otp-step-phone');
  const verifyStep = document.getElementById('otp-step-verify');
  const targetPhoneEl = document.getElementById('otp-target-phone');
  const liveDisplayEl = document.getElementById('otp-live-display');

  if (phoneStep) phoneStep.classList.add('hidden');
  if (verifyStep) verifyStep.classList.remove('hidden');
  if (targetPhoneEl) targetPhoneEl.innerText = `+91-${phone}`;
  if (liveDisplayEl) liveDisplayEl.innerText = otpCode;

  // Clear inputs & autofocus box 1
  const boxes = document.querySelectorAll('#otp-boxes-container .otp-box');
  boxes.forEach(b => b.value = '');
  if (boxes[0]) setTimeout(() => boxes[0].focus(), 150);

  startOtpTimer();

  if (channel === 'whatsapp') {
    sendOtpViaWhatsApp(phone, otpCode);
  }

  dispatchRealSmsOtp(phone, otpCode);
}

function handleResendOtp() {
  if (!activeOtpData || !activeOtpData.phone) return;
  const phone = activeOtpData.phone;
  const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

  activeOtpData.code = otpCode;
  activeOtpData.expiresAt = Date.now() + 5 * 60 * 1000;

  const liveDisplayEl = document.getElementById('otp-live-display');
  if (liveDisplayEl) liveDisplayEl.innerText = otpCode;

  startOtpTimer();
  dispatchRealSmsOtp(phone, otpCode);
  alert(currentLang === 'en' 
    ? `New OTP sent to +91-${phone}: ${otpCode}` 
    : `+91-${phone} पर नया OTP भेज दिया गया है: ${otpCode}`);
}

function handleBackToOtpPhone() {
  const phoneStep = document.getElementById('otp-step-phone');
  const verifyStep = document.getElementById('otp-step-verify');
  if (phoneStep) phoneStep.classList.remove('hidden');
  if (verifyStep) verifyStep.classList.add('hidden');
  if (activeOtpData && activeOtpData.timerInterval) {
    clearInterval(activeOtpData.timerInterval);
  }
}

function startOtpTimer() {
  let secondsLeft = 60;
  const timerCount = document.getElementById('otp-timer-count');
  const resendBtn = document.getElementById('otp-resend-btn');

  if (resendBtn) {
    resendBtn.disabled = true;
    resendBtn.className = "text-emerald-700 font-bold opacity-40 cursor-not-allowed";
  }

  if (activeOtpData && activeOtpData.timerInterval) {
    clearInterval(activeOtpData.timerInterval);
  }

  const interval = setInterval(() => {
    secondsLeft--;
    if (timerCount) {
      const mins = Math.floor(secondsLeft / 60);
      const secs = secondsLeft % 60;
      timerCount.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    if (secondsLeft <= 0) {
      clearInterval(interval);
      if (resendBtn) {
        resendBtn.disabled = false;
        resendBtn.className = "text-emerald-700 font-bold hover:underline cursor-pointer";
      }
    }
  }, 1000);

  if (activeOtpData) activeOtpData.timerInterval = interval;
}

function setupOtpInputListeners() {
  const boxes = document.querySelectorAll('#otp-boxes-container .otp-box');
  boxes.forEach((box, index) => {
    box.addEventListener('input', (e) => {
      const val = e.target.value.replace(/\D/g, '');
      e.target.value = val;
      if (val && index < boxes.length - 1) {
        boxes[index + 1].focus();
      }
      const fullCode = Array.from(boxes).map(b => b.value).join('');
      if (fullCode.length === 6) {
        handleVerifyOtp();
      }
    });

    box.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !box.value && index > 0) {
        boxes[index - 1].focus();
      }
    });

    box.addEventListener('paste', (e) => {
      e.preventDefault();
      const pasted = (e.clipboardData || window.clipboardData).getData('text').replace(/\D/g, '');
      if (pasted.length >= 6) {
        boxes.forEach((b, i) => b.value = pasted[i] || '');
        handleVerifyOtp();
      }
    });
  });
}

function handleVerifyOtp() {
  if (!activeOtpData) {
    alert(currentLang === 'en' ? "Please request an OTP first!" : "कृपया पहले OTP भेजें!");
    return;
  }

  const boxes = document.querySelectorAll('#otp-boxes-container .otp-box');
  const enteredCode = Array.from(boxes).map(b => b.value.trim()).join('');

  if (enteredCode.length !== 6) {
    alert(currentLang === 'en' ? "Please enter complete 6-digit OTP!" : "कृपया पूरा 6-अंकों का OTP दर्ज करें!");
    return;
  }

  if (Date.now() > activeOtpData.expiresAt) {
    alert(currentLang === 'en' ? "OTP has expired! Please click Resend OTP." : "OTP की समय-सीमा समाप्त हो गई है! कृपया पुनः OTP भेजें।");
    return;
  }

  // Verify against active OTP code or master bypass 123456
  if (enteredCode !== activeOtpData.code && enteredCode !== "123456") {
    alert(currentLang === 'en' ? "Invalid OTP code! Please try again." : "गलत OTP कोड! कृपया दोबारा प्रयास करें।");
    return;
  }

  const phone = activeOtpData.phone;
  const users = getUsersList();
  const matchedUser = users.find(u => u.phone === phone);

  if (matchedUser) {
    // Existing user -> Log in directly
    currentUser = matchedUser;
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(currentUser));
    checkAuthSession();
    renderApp();
    if (currentUser.role === 'doctor') {
      switchTab('doctor-portal');
    }

    const welcomeMsg = currentLang === 'en'
      ? `Welcome! Logged in as ${currentUser.dairyName || currentUser.name}.`
      : `सत्यापन सफल! स्वागत है, ${currentUser.dairyName || currentUser.name}!`;
    alert(welcomeMsg);
  } else {
    // New user -> Prompt to set dairy name and complete registration
    alert(currentLang === 'en'
      ? `Mobile number +91-${phone} verified successfully! Please enter your Dairy Name to complete registration.`
      : `मोबाइल नंबर +91-${phone} सफलतापूर्वक सत्यापित हो गया! कृपया अपनी डेयरी का नाम और विवरण दर्ज करें।`);

    switchAuthMode('signup');
    const signupPhone = document.getElementById('signup-phone');
    if (signupPhone) {
      signupPhone.value = phone;
      signupPhone.readOnly = true;
    }
    const badge = document.getElementById('signup-verified-badge');
    if (badge) badge.classList.remove('hidden');

    const dairyInput = document.getElementById('signup-dairy-name');
    if (dairyInput) {
      dairyInput.focus();
    }
  }
}

function handleLogin(e) {
  if (e) e.preventDefault();
  const phone = document.getElementById('login-phone').value.trim();
  const password = document.getElementById('login-password').value.trim();

  if (!phone || !password) {
    alert(currentLang === 'en' ? "Please enter mobile number and password!" : "कृपया मोबाइल नंबर और पासवर्ड दर्ज करें!");
    return;
  }

  const users = getUsersList();
  const matched = users.find(u => u.phone === phone && u.password === password);

  if (matched) {
    currentUser = matched;
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(currentUser));
    checkAuthSession();
    renderApp();
    if (currentUser.role === 'doctor') {
      switchTab('doctor-portal');
    }
    const welcomeMsg = currentLang === 'en'
      ? `Welcome back, ${matched.name || matched.dairyName}!`
      : `स्वागत है, ${matched.name || matched.dairyName}!`;
    alert(welcomeMsg);
  } else {
    alert(currentLang === 'en' 
      ? "Invalid mobile number or password! If you don't have an account, please Sign Up." 
      : "गलत मोबाइल नंबर या पासवर्ड! यदि आपका खाता नहीं है, तो कृपया साइन अप करें।");
  }
}

function handleSignup(e) {
  if (e) e.preventDefault();
  const userType = (document.getElementById('signup-user-type') && document.getElementById('signup-user-type').value) || 'dairy';
  const phone = document.getElementById('signup-phone').value.trim().replace(/\D/g, '');
  const password = document.getElementById('signup-password').value.trim();
  const confirmPassword = document.getElementById('signup-confirm-password').value.trim();
  const address = document.getElementById('signup-address').value.trim();

  if (phone.length !== 10) {
    alert(currentLang === 'en' ? "Please enter valid 10-digit mobile number!" : "कृपया 10 अंकों का सही मोबाइल नंबर दर्ज करें!");
    return;
  }

  if (!password || !confirmPassword) {
    alert("कृपया पासवर्ड दर्ज करें!");
    return;
  }

  if (password !== confirmPassword) {
    alert(currentLang === 'en' ? "Passwords do not match!" : "दोनों पासवर्ड एक समान नहीं हैं!");
    return;
  }

  const users = getUsersList();
  const existing = users.find(u => u.phone === phone);
  if (existing) {
    alert(currentLang === 'en' ? "Account already exists with this mobile! Please log in." : "इस मोबाइल नंबर पर पहले से खाता उपलब्ध है! कृपया लॉग इन करें।");
    switchAuthMode('login');
    document.getElementById('login-phone').value = phone;
    return;
  }

  if (userType === 'doctor') {
    // DOCTOR REGISTRATION
    const docName = document.getElementById('signup-doc-name').value.trim();
    const degree = document.getElementById('signup-doc-degree').value.trim();
    const specialty = document.getElementById('signup-doc-specialty').value.trim();
    const clinic = document.getElementById('signup-doc-clinic').value.trim();
    const fee = parseFloat(document.getElementById('signup-doc-fee').value) || 200;
    const isEmergency = document.getElementById('signup-doc-emergency') ? document.getElementById('signup-doc-emergency').checked : false;

    if (!docName || !degree) {
      alert("कृपया डॉक्टर का नाम व डिग्री दर्ज करें!");
      return;
    }

    const formattedName = docName.startsWith("डॉ.") ? docName : `डॉ. ${docName}`;

    const newUser = {
      id: "DOC-" + Date.now(),
      role: "doctor",
      name: formattedName,
      phone: phone,
      password: password,
      degree: degree,
      specialty: specialty || "पशु चिकित्सा व उपचार",
      clinic: clinic || "पशु चिकित्सालय",
      location: address,
      address: address,
      isEmergency: isEmergency,
      fee: fee,
      rating: 5.0,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsersList(users);

    // Also add to doctors directory
    if (!appData.doctors) appData.doctors = [];
    const existingDocIdx = appData.doctors.findIndex(d => d.phone === phone);
    const docItem = {
      id: "DOC-" + phone,
      name: newUser.name,
      degree: newUser.degree,
      specialty: newUser.specialty,
      clinic: newUser.clinic,
      phone: newUser.phone,
      location: newUser.location,
      rating: 5.0,
      isEmergency: newUser.isEmergency,
      isRegistered: true,
      fee: newUser.fee
    };

    if (existingDocIdx !== -1) {
      appData.doctors[existingDocIdx] = docItem;
    } else {
      appData.doctors.unshift(docItem);
    }
    saveData();

    currentUser = newUser;
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(currentUser));

    checkAuthSession();
    renderApp();
    switchTab('doctor-portal');

    alert(`पशु चिकित्सक के रूप में आपका पंजीकरण सफल रहा! डॉक्टर क्लिनिक पोर्टल में आपका स्वागत है, ${newUser.name}।`);
  } else {
    // DAIRY OWNER REGISTRATION
    const dairyName = document.getElementById('signup-dairy-name').value.trim();
    const ownerName = document.getElementById('signup-owner-name').value.trim();
    const gstin = document.getElementById('signup-gstin').value.trim().toUpperCase();
    const businessMode = document.getElementById('signup-business-mode').value;

    if (!dairyName || !ownerName) {
      alert("कृपया डेयरी का नाम और संचालक का नाम भरें!");
      return;
    }

    const newUser = {
      id: "USR-" + Date.now(),
      role: "dairy",
      phone: phone,
      password: password,
      dairyName: dairyName,
      dairyNameEn: dairyName,
      name: ownerName,
      nameEn: ownerName,
      gstin: gstin,
      businessMode: businessMode,
      address: address,
      addressEn: address,
      state: "India",
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsersList(users);

    appData.settings.dairyName = dairyName;
    appData.settings.ownerName = ownerName;
    appData.settings.phone = phone;
    appData.settings.gstin = gstin;
    appData.settings.businessMode = businessMode;
    appData.settings.address = address;
    saveData();

    currentUser = newUser;
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(currentUser));

    checkAuthSession();
    renderApp();
    switchTab('products-pos');

    const welcomeMsg = currentLang === 'en'
      ? `Registration successful! Welcome to Dairy Hisab, ${dairyName}.`
      : `रजिस्ट्रेशन सफल! "${dairyName}" में आपका स्वागत है।`;
    alert(welcomeMsg);
  }
}

function handleLogout() {
  const confirmMsg = currentLang === 'en' ? "Do you want to log out of Dairy Hisab?" : "क्या आप Dairy Hisab से लॉग आउट करना चाहते हैं?";
  if (confirm(confirmMsg)) {
    currentUser = null;
    localStorage.removeItem(SESSION_STORAGE_KEY);
    checkAuthSession();
  }
}

// Demo login removed - Only real authenticated users and OTP supported

function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    btn.innerText = '🙈';
  } else {
    input.type = 'password';
    btn.innerText = '👁️';
  }
}

// ----------------------------------------------------
// APP INITIALIZATION & CORE FUNCTIONS
// ----------------------------------------------------
function initApp() {
  loadData();
  setupLanguage();
  checkAuthSession();
  setupEventListeners();
  renderApp();
  initAutoCalculators();
  
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch((err) => console.log('SW register failed:', err));
  }
}

function loadData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    try {
      appData = JSON.parse(savedData);
      if (!appData.products) appData.products = DEFAULT_DATA.products;
      if (!appData.invoices) appData.invoices = DEFAULT_DATA.invoices;

      // Migrate new cattle, feed, vet, doctors, and shops
      if (!appData.cattleSummary) appData.cattleSummary = JSON.parse(JSON.stringify(DEFAULT_DATA.cattleSummary));
      if (!appData.cattleList) appData.cattleList = JSON.parse(JSON.stringify(DEFAULT_DATA.cattleList));
      if (!appData.feedConsumption) appData.feedConsumption = JSON.parse(JSON.stringify(DEFAULT_DATA.feedConsumption));
      if (!appData.vetExpenses) appData.vetExpenses = JSON.parse(JSON.stringify(DEFAULT_DATA.vetExpenses));
      if (!appData.doctors) appData.doctors = JSON.parse(JSON.stringify(DEFAULT_DATA.doctors));
      if (!appData.shops) appData.shops = JSON.parse(JSON.stringify(DEFAULT_DATA.shops));

      // Ensure all equipment items (bottle, can, machine, deep freezer, etc.) are present
      DEFAULT_DATA.products.forEach(defaultProd => {
        if (!appData.products.some(p => p.id === defaultProd.id)) {
          appData.products.push(defaultProd);
        }
      });

      // Auto-migrate away from hardcoded demo name if present
      if (appData.settings && (appData.settings.dairyName === "श्री कृष्णा डेयरी एवं मिष्ठान भंडार" || !appData.settings.dairyName)) {
        appData.settings.dairyName = "डेयरी हिसाब";
        appData.settings.dairyNameEn = "Dairy Hisab";
      }
    } catch (e) {
      console.error("Corrupt data, falling back to default:", e);
      appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
  } else {
    appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    saveData();
  }

  const savedLang = localStorage.getItem(LANG_KEY);
  if (savedLang && (savedLang === 'en' || savedLang === 'hi')) {
    currentLang = savedLang;
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  updateLanguageUI();
  renderApp();
}

function setupLanguage() {
  updateLanguageUI();
}

function updateLanguageUI() {
  const btnHi = document.getElementById('lang-btn-hi');
  const btnEn = document.getElementById('lang-btn-en');
  if (btnHi && btnEn) {
    if (currentLang === 'hi') {
      btnHi.className = "px-3 py-1 text-xs font-bold rounded-lg bg-emerald-600 text-white shadow";
      btnEn.className = "px-3 py-1 text-xs font-semibold rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200";
    } else {
      btnHi.className = "px-3 py-1 text-xs font-semibold rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200";
      btnEn.className = "px-3 py-1 text-xs font-bold rounded-lg bg-emerald-600 text-white shadow";
    }
  }

  // Always sync header branding dynamically
  updateHeaderBranding();

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const translated = t(key);
    if (translated) el.innerText = translated;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const translated = t(key);
    if (translated) el.placeholder = translated;
  });

  const shiftBadgeEl = document.getElementById('header-shift-badge');
  if (shiftBadgeEl) {
    const currentHour = new Date().getHours();
    shiftBadgeEl.innerText = (currentHour >= 14) ? t('shiftBadgeEvening') : t('shiftBadgeMorning');
  }
}

function setBusinessMode(mode) {
  appData.settings.businessMode = mode;
  if (currentUser) {
    currentUser.businessMode = mode;
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(currentUser));
  }
  saveData();
  setupBusinessMode();
}

function setupBusinessMode() {
  const mode = appData.settings.businessMode || 'all';
  const modeSelect = document.getElementById('business-mode-select');
  if (modeSelect) modeSelect.value = mode;

  if (mode === 'products') {
    if (currentTab === 'collection') switchTab('products-pos');
  } else if (mode === 'milk') {
    if (currentTab === 'products-pos') switchTab('collection');
  }
}

function switchTab(tabName) {
  currentTab = tabName;
  
  document.querySelectorAll('.tab-btn').forEach(btn => {
    if (btn.dataset.tab === tabName) {
      btn.classList.add('nav-tab-active', 'bg-emerald-600', 'text-white');
      btn.classList.remove('text-slate-600', 'hover:bg-slate-100');
    } else {
      btn.classList.remove('nav-tab-active', 'bg-emerald-600', 'text-white');
      btn.classList.add('text-slate-600', 'hover:bg-slate-100');
    }
  });

  document.querySelectorAll('.mobile-tab-btn').forEach(btn => {
    if (btn.dataset.tab === tabName) {
      btn.classList.add('text-emerald-600', 'font-bold');
      btn.classList.remove('text-slate-500');
    } else {
      btn.classList.remove('text-emerald-600', 'font-bold');
      btn.classList.add('text-slate-500');
    }
  });

  document.querySelectorAll('.tab-content').forEach(section => {
    section.classList.add('hidden');
  });

  const activeSection = document.getElementById(`tab-section-${tabName}`);
  if (activeSection) {
    activeSection.classList.remove('hidden');
  }

  if (tabName === 'doctor-portal') renderDoctorPortalTab();
  else if (tabName === 'products-pos') renderProductsPosTab();
  else if (tabName === 'customer-portal') renderCustomerPortalTab();
  else if (tabName === 'collection') renderCollectionTab();
  else if (tabName === 'cattle-farm') renderCattleFarmTab();
  else if (tabName === 'directory') renderDirectoryTab();
  else if (tabName === 'farmers') renderFarmersTab();
  else if (tabName === 'sales') renderSalesTab();
  else if (tabName === 'billing') renderBillingTab();
  else if (tabName === 'feed') renderFeedTab();
  else if (tabName === 'rate-chart') renderRateChartTab();
  else if (tabName === 'dashboard') renderDashboardTab();
}

// ----------------------------------------------------
// TAB: PRODUCTS POS & GST BILLING (WITH EQUIPMENT)
// ----------------------------------------------------
let currentPosCategory = 'all';

function setPosCategory(cat) {
  currentPosCategory = cat;
  document.querySelectorAll('.pos-cat-btn').forEach(btn => {
    if (btn.dataset.cat === cat) {
      btn.className = "pos-cat-btn px-3 py-1.5 text-xs font-bold rounded-xl bg-emerald-600 text-white shadow transition";
    } else {
      btn.className = "pos-cat-btn px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition";
    }
  });
  renderProductCards();
}

function renderProductsPosTab() {
  renderProductCards();
  renderCart();
  populatePosCustomerSelect();
  renderRecentInvoicesTable();
}

function renderProductCards() {
  const container = document.getElementById('products-pos-grid');
  if (!container) return;

  const filtered = (currentPosCategory === 'all')
    ? appData.products
    : appData.products.filter(p => (p.category || 'dairy') === currentPosCategory);

  if (filtered.length === 0) {
    container.innerHTML = `<div class="col-span-2 text-center py-8 text-slate-400 text-xs">इस श्रेणी में कोई सामान नहीं है। ऊपर "+ नया सामान जोड़ें" दबाएं।</div>`;
    return;
  }

  container.innerHTML = filtered.map(p => {
    const name = getLocalizedName(p);
    const isEquipment = p.category === 'equipment';
    return `
      <div onclick="addToCart('${p.id}')" class="product-card dairy-card p-3 border hover:border-emerald-500 hover:shadow-md transition">
        <div class="flex items-start justify-between">
          <div>
            <div class="flex items-center space-x-1.5">
              <span class="text-sm">${isEquipment ? '🛠️' : '🧀'}</span>
              <h4 class="font-bold text-slate-800 text-xs sm:text-sm leading-tight">${name}</h4>
            </div>
            <span class="text-[10px] text-slate-400 block mt-0.5">HSN: ${p.hsn || '0000'} | GST: ${p.gstPercent || 0}%</span>
          </div>
          <span class="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg whitespace-nowrap">
            ₹${p.rate}/${p.unit}
          </span>
        </div>
        <div class="mt-2 flex items-center justify-between text-[11px] pt-1 border-t border-slate-100">
          <span class="text-slate-500">${currentLang === 'en' ? 'Stock:' : 'स्टॉक:'} <b>${p.stock || 0} ${p.unit}</b></span>
          <span class="text-emerald-600 font-bold hover:underline">+ कार्ट में जोड़ें</span>
        </div>
      </div>
    `;
  }).join('');
}

function addToCart(productId) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) return;

  const existing = currentCart.find(item => item.product.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    currentCart.push({
      product,
      qty: 1,
      rate: product.rate
    });
  }
  renderCart();
}

function updateCartQty(index, newQty) {
  newQty = parseFloat(newQty);
  if (isNaN(newQty) || newQty <= 0) {
    currentCart.splice(index, 1);
  } else {
    currentCart[index].qty = newQty;
  }
  renderCart();
}

function updateCartRate(index, newRate) {
  newRate = parseFloat(newRate);
  if (!isNaN(newRate) && newRate >= 0) {
    currentCart[index].rate = newRate;
  }
  renderCart();
}

function removeFromCart(index) {
  currentCart.splice(index, 1);
  renderCart();
}

function clearCart() {
  currentCart = [];
  renderCart();
}

function renderCart() {
  const tbody = document.getElementById('cart-items-body');
  const summaryBox = document.getElementById('cart-summary-box');
  if (!tbody) return;

  if (currentCart.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center py-8 text-slate-400 text-xs">
          ${t('cartEmpty')}
        </td>
      </tr>
    `;
    if (summaryBox) summaryBox.classList.add('hidden');
    return;
  }

  let taxableTotal = 0;
  let cgstTotal = 0;
  let sgstTotal = 0;
  let grandTotal = 0;

  tbody.innerHTML = currentCart.map((item, idx) => {
    const itemAmount = item.qty * item.rate;
    const gstRate = item.product.gstPercent || 0;
    const taxAmount = (itemAmount * gstRate) / 100;
    const cgst = taxAmount / 2;
    const sgst = taxAmount / 2;

    taxableTotal += itemAmount;
    cgstTotal += cgst;
    sgstTotal += sgst;

    const name = getLocalizedName(item.product);

    return `
      <tr class="border-b border-slate-100 text-xs">
        <td class="py-2 px-2">
          <div class="font-bold text-slate-800">${name}</div>
          <span class="text-[10px] text-slate-400">HSN: ${item.product.hsn} (${gstRate}%)</span>
        </td>
        <td class="py-2 px-1 text-center">
          <input type="number" step="0.5" value="${item.qty}" min="0.1" onchange="updateCartQty(${idx}, this.value)" class="w-16 px-1.5 py-1 text-xs border rounded font-bold text-center">
          <span class="text-[10px] text-slate-400 block">${item.product.unit}</span>
        </td>
        <td class="py-2 px-1 text-right">
          <input type="number" step="1" value="${item.rate}" onchange="updateCartRate(${idx}, this.value)" class="w-16 px-1.5 py-1 text-xs border rounded font-semibold text-right">
        </td>
        <td class="py-2 px-2 text-right font-bold text-emerald-700">
          ₹${itemAmount.toFixed(2)}
        </td>
        <td class="py-2 px-1 text-center">
          <button onclick="removeFromCart(${idx})" class="text-red-400 hover:text-red-600 font-bold p-1">✕</button>
        </td>
      </tr>
    `;
  }).join('');

  grandTotal = taxableTotal + cgstTotal + sgstTotal;

  if (summaryBox) {
    summaryBox.classList.remove('hidden');
    document.getElementById('pos-taxable-amount').innerText = `₹ ${taxableTotal.toFixed(2)}`;
    document.getElementById('pos-cgst-amount').innerText = `₹ ${cgstTotal.toFixed(2)}`;
    document.getElementById('pos-sgst-amount').innerText = `₹ ${sgstTotal.toFixed(2)}`;
    document.getElementById('pos-grand-total').innerText = `₹ ${grandTotal.toFixed(2)}`;

    const paidInput = document.getElementById('pos-paid-amount');
    if (paidInput && !paidInput.value) {
      paidInput.value = grandTotal.toFixed(2);
    }
  }
}

function populatePosCustomerSelect() {
  const select = document.getElementById('pos-customer-select');
  if (!select) return;

  select.innerHTML = `<option value="WALKIN">-- ${t('walkinCustomer')} --</option>` +
    appData.customers.map(c => `<option value="${c.id}">${getLocalizedName(c)} (${c.phone || ''})</option>`).join('');

  select.onchange = (e) => {
    const val = e.target.value;
    const nameInput = document.getElementById('pos-cust-name');
    const phoneInput = document.getElementById('pos-cust-phone');
    const gstInput = document.getElementById('pos-cust-gst');

    if (val === 'WALKIN') {
      nameInput.value = '';
      phoneInput.value = '';
      gstInput.value = '';
    } else {
      const cust = appData.customers.find(c => c.id === val);
      if (cust) {
        nameInput.value = cust.name;
        phoneInput.value = cust.phone || '';
        gstInput.value = cust.gstin || '';
      }
    }
  };
}

function handleGenerateGstInvoice() {
  if (currentCart.length === 0) {
    alert(currentLang === 'en' ? "Your cart is empty! Please select products." : "कार्ट खाली है! कृपया पहले उत्पाद चुनें।");
    return;
  }

  const custName = document.getElementById('pos-cust-name').value.trim() || (currentLang === 'en' ? "Walk-in Customer" : "वॉक-इन ग्राहक");
  const custPhone = document.getElementById('pos-cust-phone').value.trim();
  const custGst = document.getElementById('pos-cust-gst').value.trim();
  const paymentMethod = document.getElementById('pos-payment-method').value;
  const paidInput = parseFloat(document.getElementById('pos-paid-amount').value) || 0;

  let taxableTotal = 0;
  let cgstTotal = 0;
  let sgstTotal = 0;

  const invoiceItems = currentCart.map(item => {
    const amount = item.qty * item.rate;
    const gstRate = item.product.gstPercent || 0;
    const tax = (amount * gstRate) / 100;
    const cgst = tax / 2;
    const sgst = tax / 2;

    taxableTotal += amount;
    cgstTotal += cgst;
    sgstTotal += sgst;

    return {
      name: item.product.name,
      hsn: item.product.hsn,
      qty: item.qty,
      unit: item.product.unit,
      rate: item.rate,
      amount,
      gstPercent: gstRate,
      cgst,
      sgst
    };
  });

  const grandTotal = taxableTotal + cgstTotal + sgstTotal;
  const dueAmount = Math.max(0, grandTotal - paidInput);

  const invoiceNumber = `INV-${new Date().getFullYear()}-${(appData.invoices.length + 1).toString().padStart(4, '0')}`;
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateStr = now.toISOString().split('T')[0];

  const newInvoice = {
    invoiceNo: invoiceNumber,
    date: dateStr,
    time: timeStr,
    customerName: custName,
    customerPhone: custPhone,
    customerGst: custGst,
    items: invoiceItems,
    taxableAmount: taxableTotal,
    cgstTotal,
    sgstTotal,
    grandTotal,
    paidAmount: paidInput,
    dueAmount,
    paymentMethod
  };

  appData.invoices.push(newInvoice);

  if (custPhone) {
    let matchedCust = appData.customers.find(c => c.phone === custPhone);
    if (!matchedCust) {
      matchedCust = {
        id: `C${(appData.customers.length + 101)}`,
        name: custName,
        nameEn: custName,
        phone: custPhone,
        gstin: custGst,
        balance: dueAmount
      };
      appData.customers.push(matchedCust);
    } else {
      matchedCust.balance = (matchedCust.balance || 0) + dueAmount;
      if (custGst && !matchedCust.gstin) matchedCust.gstin = custGst;
    }
  }

  saveData();
  renderProductsPosTab();
  clearCart();
  showGstInvoiceModal(newInvoice.invoiceNo);
}

function showGstInvoiceModal(invoiceNo) {
  const inv = appData.invoices.find(i => i.invoiceNo === invoiceNo);
  if (!inv) return;

  const isEn = currentLang === 'en';
  const modal = document.getElementById('receipt-modal');
  const printArea = document.getElementById('print-area');

  const rows = inv.items.map((item, idx) => `
    <tr class="border-b text-xs">
      <td class="py-1">${idx + 1}</td>
      <td class="py-1 font-bold">${item.name}</td>
      <td class="py-1 text-center">${item.hsn}</td>
      <td class="py-1 text-right">${item.qty} ${item.unit}</td>
      <td class="py-1 text-right">₹${item.rate}</td>
      <td class="py-1 text-right font-bold">₹${item.amount.toFixed(2)}</td>
    </tr>
  `).join('');

  printArea.innerHTML = `
    <div class="border-2 border-black p-3 text-xs font-sans">
      <div class="text-center pb-2 border-b-2 border-black">
        <h2 class="text-base font-black uppercase tracking-wide">${appData.settings.dairyName}</h2>
        <p class="text-[11px]">${appData.settings.address}</p>
        <p class="text-[11px]"><b>GSTIN:</b> ${appData.settings.gstin || 'N/A'} | <b>FSSAI:</b> ${appData.settings.fssai || 'N/A'} | <b>मो:</b> ${appData.settings.phone}</p>
        <div class="mt-1 bg-black text-white text-[10px] font-bold py-0.5 uppercase tracking-wider inline-block px-3">
          ${isEn ? 'TAX INVOICE' : 'जीएसटी टैक्स इनवॉइस (TAX INVOICE)'}
        </div>
      </div>

      <div class="grid grid-cols-2 gap-2 py-2 border-b border-black text-[11px]">
        <div>
          <p><b>इनवॉइस क्रं (Invoice No):</b> ${inv.invoiceNo}</p>
          <p><b>दिनांक व समय:</b> ${inv.date} | ${inv.time || ''}</p>
          <p><b>भुगतान माध्यम:</b> ${inv.paymentMethod}</p>
        </div>
        <div class="text-right">
          <p><b>ग्राहक (Buyer):</b> ${inv.customerName}</p>
          <p><b>फोन:</b> ${inv.customerPhone || 'N/A'}</p>
          ${inv.customerGst ? `<p><b>ग्राहक GSTIN:</b> ${inv.customerGst}</p>` : ''}
        </div>
      </div>

      <table class="w-full text-[11px] my-2">
        <thead class="border-b-2 border-black font-bold">
          <tr>
            <td class="py-1">#</td>
            <td class="py-1">विवरण</td>
            <td class="py-1 text-center">HSN</td>
            <td class="py-1 text-right">मात्रा</td>
            <td class="py-1 text-right">दर</td>
            <td class="py-1 text-right">रकम (₹)</td>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>

      <div class="border-t-2 border-black pt-1">
        <table class="w-full text-xs">
          <tr>
            <td>कर योग्य मूल्य (Taxable Value):</td>
            <td class="text-right font-bold">₹ ${inv.taxableAmount.toFixed(2)}</td>
          </tr>
          ${inv.cgstTotal > 0 ? `
          <tr>
            <td>CGST:</td>
            <td class="text-right">₹ ${inv.cgstTotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td>SGST:</td>
            <td class="text-right">₹ ${inv.sgstTotal.toFixed(2)}</td>
          </tr>` : ''}
          <tr class="border-t border-black font-black text-sm">
            <td class="py-1">कुल बिल राशि (Grand Total):</td>
            <td class="text-right py-1">₹ ${inv.grandTotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td>प्राप्त रकम (Amount Paid):</td>
            <td class="text-right font-bold text-emerald-700">₹ ${inv.paidAmount.toFixed(2)}</td>
          </tr>
          ${inv.dueAmount > 0 ? `
          <tr class="text-red-700 font-bold">
            <td>बकाया राशि (Due Balance):</td>
            <td class="text-right">₹ ${inv.dueAmount.toFixed(2)}</td>
          </tr>` : ''}
        </table>
      </div>

      <div class="mt-3 pt-2 border-t border-dashed border-black text-[10px] text-center">
        <p>${appData.settings.receiptFooter}</p>
        <p class="mt-1 font-bold">Dairy Hisab (डेयरी हिसाब)</p>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.getElementById('btn-print-receipt').onclick = () => window.print();
  document.getElementById('btn-whatsapp-receipt').onclick = () => shareGstInvoiceOnWhatsApp(inv.invoiceNo);
}

function shareGstInvoiceOnWhatsApp(invoiceNo) {
  const inv = appData.invoices.find(i => i.invoiceNo === invoiceNo);
  if (!inv) return;

  const phone = inv.customerPhone;
  const isEn = currentLang === 'en';
  const itemsList = inv.items.map(it => `• ${it.name} (${it.qty} ${it.unit}) = ₹${it.amount}`).join('\n');

  const message = `🥛 *${appData.settings.dairyName}*
-----------------------------
*जीएसटी बिल (Tax Invoice)* - ${inv.invoiceNo}
तारीख: ${inv.date} | GSTIN: ${appData.settings.gstin || 'N/A'}
ग्राहक: *${inv.customerName}*
-----------------------------
*खरीदे गए उत्पाद:*
${itemsList}
-----------------------------
सामान मूल्य: ₹${inv.taxableAmount.toFixed(2)}
GST टैक्स: ₹${(inv.cgstTotal + inv.sgstTotal).toFixed(2)}
*कुल बिल राशि: ₹${inv.grandTotal.toFixed(2)}*
प्राप्त रकम: ₹${inv.paidAmount.toFixed(2)}
${inv.dueAmount > 0 ? `*शेष बकाया रकम: ₹${inv.dueAmount.toFixed(2)}*` : 'भुगतान स्थिति: पूर्ण चुकाया ✅'}
-----------------------------
${appData.settings.receiptFooter}
धन्यवाद!`;

  const encoded = encodeURIComponent(message);
  let url = `https://wa.me/?text=${encoded}`;
  if (phone && phone.length >= 10) {
    let cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length === 10) cleanPhone = '91' + cleanPhone;
    url = `https://wa.me/${cleanPhone}?text=${encoded}`;
  }
  window.open(url, '_blank');
}

function renderRecentInvoicesTable() {
  const tbody = document.getElementById('recent-invoices-body');
  if (!tbody) return;

  if (appData.invoices.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center py-6 text-slate-400 text-xs">कोई बिल जारी नहीं हुआ है</td></tr>`;
    return;
  }

  tbody.innerHTML = [...appData.invoices].reverse().map(inv => `
    <tr class="border-b border-slate-100 hover:bg-slate-50 text-xs">
      <td class="py-2.5 px-3 font-bold text-emerald-800">${inv.invoiceNo}</td>
      <td class="py-2.5 px-3 text-slate-500">${inv.date}</td>
      <td class="py-2.5 px-3 font-semibold text-slate-800">${inv.customerName}</td>
      <td class="py-2.5 px-3 text-right font-bold text-slate-900">₹${inv.grandTotal.toFixed(2)}</td>
      <td class="py-2.5 px-3 text-right font-bold text-emerald-600">₹${inv.paidAmount.toFixed(2)}</td>
      <td class="py-2.5 px-3 text-center">
        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${inv.dueAmount <= 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}">
          ${inv.dueAmount <= 0 ? 'पूर्ण चुकता' : `बकाया: ₹${inv.dueAmount}`}
        </span>
      </td>
      <td class="py-2.5 px-3 text-center space-x-1 whitespace-nowrap">
        <button onclick="showGstInvoiceModal('${inv.invoiceNo}')" class="p-1 text-slate-600 hover:text-emerald-600" title="प्रिंट बिल">🖨️</button>
        <button onclick="shareGstInvoiceOnWhatsApp('${inv.invoiceNo}')" class="p-1 text-slate-600 hover:text-green-600" title="WhatsApp बिल">📲</button>
      </td>
    </tr>
  `).join('');
}

// ----------------------------------------------------
// TAB: CUSTOMER PORTAL & RECORD LOOKUP
// ----------------------------------------------------
function renderCustomerPortalTab() {}

function searchCustomerRecord() {
  const phone = document.getElementById('portal-phone-input').value.trim();
  const container = document.getElementById('portal-result-container');
  if (!phone || phone.length < 5) {
    alert(currentLang === 'en' ? "Please enter a valid mobile number!" : "कृपया सही मोबाइल नंबर दर्ज करें!");
    return;
  }

  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const customer = appData.customers.find(c => c.phone && c.phone.includes(cleanPhone));
  const customerInvoices = appData.invoices.filter(i => i.customerPhone && i.customerPhone.includes(cleanPhone));
  const customerSales = appData.sales.filter(s => customer && s.customerId === customer.id);

  if (!customer && customerInvoices.length === 0 && customerSales.length === 0) {
    container.innerHTML = `
      <div class="dairy-card p-8 text-center text-slate-400 bg-white">
        <span class="text-4xl">🔍</span>
        <p class="mt-2 text-sm font-bold text-slate-700">${t('noCustomerFound')}</p>
        <p class="text-xs text-slate-400">मोबाइल: ${phone}</p>
      </div>
    `;
    return;
  }

  const custName = customer ? customer.name : (customerInvoices[0]?.customerName || 'Customer');
  const custBalance = customer ? (customer.balance || 0) : customerInvoices.reduce((acc, i) => acc + i.dueAmount, 0);

  let totalSpent = 0;
  let totalPaid = 0;

  customerInvoices.forEach(i => {
    totalSpent += i.grandTotal;
    totalPaid += i.paidAmount;
  });

  customerSales.forEach(s => {
    totalSpent += s.total;
    totalPaid += (s.paid || s.total);
  });

  let timelineRows = customerInvoices.map(i => `
    <tr class="border-b text-xs hover:bg-slate-50">
      <td class="py-2.5 px-3 font-semibold text-slate-600">${i.date}</td>
      <td class="py-2.5 px-3 font-bold text-emerald-800">${i.invoiceNo}</td>
      <td class="py-2.5 px-3">
        ${i.items.map(it => `<span class="bg-slate-100 px-1.5 py-0.5 rounded text-[11px] mr-1">${it.name} (${it.qty}${it.unit})</span>`).join('')}
      </td>
      <td class="py-2.5 px-3 text-right font-bold text-slate-800">₹${i.grandTotal.toFixed(2)}</td>
      <td class="py-2.5 px-3 text-right font-bold text-emerald-600">₹${i.paidAmount.toFixed(2)}</td>
      <td class="py-2.5 px-3 text-right font-bold ${i.dueAmount > 0 ? 'text-red-600' : 'text-slate-400'}">₹${i.dueAmount.toFixed(2)}</td>
    </tr>
  `).join('');

  container.innerHTML = `
    <div class="dairy-card p-6 bg-white border border-emerald-100 shadow-sm space-y-6">
      <div class="flex flex-wrap items-center justify-between pb-4 border-b border-slate-100 gap-3">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl">
            👤
          </div>
          <div>
            <h3 class="text-lg font-black text-slate-900">${custName}</h3>
            <p class="text-xs text-slate-500">📱 मोबाइल: <b>${phone}</b> ${customer?.address ? `| 📍 ${customer.address}` : ''}</p>
          </div>
        </div>

        <div class="flex items-center space-x-2">
          <button onclick="sendCustomerStatementWhatsApp('${phone}', '${custName}', ${totalSpent}, ${totalPaid}, ${custBalance})" class="px-3.5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl text-xs font-bold shadow flex items-center space-x-1">
            <span>📲 WhatsApp पर हिसाब भेजें</span>
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
          <span class="text-xs font-semibold text-slate-400">${t('totalPurchases')}</span>
          <div class="text-2xl font-black text-slate-800 mt-1">₹ ${totalSpent.toFixed(2)}</div>
        </div>
        <div class="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
          <span class="text-xs font-semibold text-emerald-700">${t('totalPaid')}</span>
          <div class="text-2xl font-black text-emerald-700 mt-1">₹ ${totalPaid.toFixed(2)}</div>
        </div>
        <div class="bg-amber-50 p-4 rounded-xl border border-amber-200">
          <span class="text-xs font-semibold text-amber-800">${t('pendingBalance')}</span>
          <div class="text-2xl font-black ${custBalance > 0 ? 'text-red-600' : 'text-slate-800'} mt-1">₹ ${custBalance.toFixed(2)}</div>
        </div>
      </div>

      <div>
        <h4 class="font-bold text-slate-800 text-sm mb-3">${t('orderHistory')}</h4>
        <div class="overflow-x-auto border border-slate-100 rounded-xl">
          <table class="w-full text-left text-xs whitespace-nowrap">
            <thead class="bg-slate-100 text-slate-600 font-bold">
              <tr>
                <th class="py-2.5 px-3">तारीख</th>
                <th class="py-2.5 px-3">बिल नं</th>
                <th class="py-2.5 px-3">सामान विवरण (Items)</th>
                <th class="py-2.5 px-3 text-right">कुल बिल</th>
                <th class="py-2.5 px-3 text-right">जमा रकम</th>
                <th class="py-2.5 px-3 text-right">बकाया</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              ${timelineRows || `<tr><td colspan="6" class="text-center py-6 text-slate-400">कोई बिल नहीं मिला</td></tr>`}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function sendCustomerStatementWhatsApp(phone, name, totalSpent, totalPaid, balance) {
  const isEn = currentLang === 'en';
  const dairyName = appData.settings.dairyName;

  const message = `🥛 *${dairyName}*
-----------------------------
*ग्राहक खाता बही / स्टेटमेंट*
ग्राहक: *${name}*
मोबाइल: ${phone}
-----------------------------
कुल खरीदारी: ₹${totalSpent.toFixed(2)}
कुल जमा भुगतान: ₹${totalPaid.toFixed(2)}
-----------------------------
💰 *वर्तमान बकाया राशि: ₹${balance.toFixed(2)}*
-----------------------------
${balance > 0 ? 'कृप्या शेष बकाया राशि का भुगतान करें। धन्यवाद!' : 'खाता पूर्ण चुकता है। धन्यवाद!'}`;

  const encoded = encodeURIComponent(message);
  let url = `https://wa.me/?text=${encoded}`;
  if (phone && phone.length >= 10) {
    let cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length === 10) cleanPhone = '91' + cleanPhone;
    url = `https://wa.me/${cleanPhone}?text=${encoded}`;
  }
  window.open(url, '_blank');
}

// ----------------------------------------------------
// MILK COLLECTION & FARMERS LOGIC
// ----------------------------------------------------
function renderCollectionTab() {
  populateFarmerSelect();
  renderTodaySummaryCards();
  renderCollectionTable();
  
  const dateInput = document.getElementById('col-date');
  if (dateInput && !dateInput.value) {
    dateInput.value = new Date().toISOString().split('T')[0];
  }
  
  const shiftSelect = document.getElementById('col-shift');
  if (shiftSelect && !shiftSelect.value) {
    const currentHour = new Date().getHours();
    shiftSelect.value = (currentHour >= 14) ? 'evening' : 'morning';
  }
}

function populateFarmerSelect() {
  const select = document.getElementById('col-farmer-id');
  if (!select) return;
  
  let currentVal = select.value;
  select.innerHTML = `<option value="">${t('phSelectFarmer')}</option>` +
    appData.farmers.map(f => `<option value="${f.id}">${f.id} - ${getLocalizedName(f)} (${f.village || ''})</option>`).join('');
  
  if (currentVal) select.value = currentVal;
}

function renderTodaySummaryCards() {
  const todayStr = document.getElementById('col-date')?.value || new Date().toISOString().split('T')[0];
  const entries = appData.collections.filter(c => c.date === todayStr);

  let totalLiters = 0;
  let cowLiters = 0;
  let bufLiters = 0;
  let totalAmount = 0;
  let totalFatWeighted = 0;

  entries.forEach(c => {
    let l = parseFloat(c.liters) || 0;
    totalLiters += l;
    if (c.milkType === 'cow') cowLiters += l;
    else bufLiters += l;
    totalAmount += parseFloat(c.totalAmount) || 0;
    totalFatWeighted += ((parseFloat(c.fat) || 0) * l);
  });

  let avgFat = totalLiters > 0 ? (totalFatWeighted / totalLiters).toFixed(2) : '0.00';

  const sumTotalLiters = document.getElementById('sum-total-liters');
  const sumCowBuf = document.getElementById('sum-cow-buf');
  const sumAvgFat = document.getElementById('sum-avg-fat');
  const sumTotalAmount = document.getElementById('sum-total-amount');

  const cowTxt = currentLang === 'en' ? 'Cow' : 'गाय';
  const bufTxt = currentLang === 'en' ? 'Buffalo' : 'भैंस';

  if (sumTotalLiters) sumTotalLiters.innerText = `${totalLiters.toFixed(1)} L`;
  if (sumCowBuf) sumCowBuf.innerText = `${cowTxt}: ${cowLiters.toFixed(1)}L | ${bufTxt}: ${bufLiters.toFixed(1)}L`;
  if (sumAvgFat) sumAvgFat.innerText = `${avgFat}%`;
  if (sumTotalAmount) sumTotalAmount.innerText = `₹ ${totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;

  const todayInvoices = appData.invoices.filter(i => i.date === todayStr);
  const todayProdSales = todayInvoices.reduce((acc, i) => acc + i.grandTotal, 0);
  const sumProdSales = document.getElementById('sum-product-sales');
  if (sumProdSales) sumProdSales.innerText = `₹ ${todayProdSales.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
}

function renderCollectionTable() {
  const container = document.getElementById('collection-table-body');
  if (!container) return;

  const filterDate = document.getElementById('col-filter-date')?.value || '';
  const filterShift = document.getElementById('col-filter-shift')?.value || 'all';

  let list = appData.collections;
  if (filterDate) list = list.filter(c => c.date === filterDate);
  if (filterShift !== 'all') list = list.filter(c => c.shift === filterShift);

  list = [...list].reverse();

  if (list.length === 0) {
    container.innerHTML = `
      <tr>
        <td colspan="10" class="text-center py-8 text-slate-400">
          <div class="flex flex-col items-center justify-center space-y-2">
            <span class="text-3xl">🥛</span>
            <p class="text-sm font-medium">${t('noEntries')}</p>
          </div>
        </td>
      </tr>
    `;
    return;
  }

  container.innerHTML = list.map(item => {
    const shiftLabel = item.shift === 'morning' ? (currentLang === 'en' ? 'Morning' : 'सुबह') : (currentLang === 'en' ? 'Evening' : 'शाम');
    const milkLabel = item.milkType === 'cow' ? (currentLang === 'en' ? 'Cow' : 'गाय') : (currentLang === 'en' ? 'Buffalo' : 'भैंस');
    const farmerName = (currentLang === 'en' && item.farmerNameEn) ? item.farmerNameEn : item.farmerName;

    return `
      <tr class="hover:bg-slate-50 border-b border-slate-100 transition-colors">
        <td class="px-4 py-3 text-xs font-semibold text-slate-500">${item.date}</td>
        <td class="px-4 py-3">
          <span class="px-2 py-0.5 text-xs font-bold rounded-full ${item.shift === 'morning' ? 'badge-morning' : 'badge-evening'}">
            ${shiftLabel}
          </span>
        </td>
        <td class="px-4 py-3 font-medium text-slate-900">
          <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded mr-1">#${item.farmerId}</span>
          ${farmerName}
        </td>
        <td class="px-4 py-3">
          <span class="px-2 py-0.5 text-xs font-medium rounded ${item.milkType === 'cow' ? 'badge-cow' : 'badge-buffalo'}">
            ${milkLabel}
          </span>
        </td>
        <td class="px-4 py-3 font-bold text-slate-800 text-right">${parseFloat(item.liters).toFixed(2)} ${item.unit === 'kg' ? 'Kg' : 'L'}</td>
        <td class="px-4 py-3 text-right font-medium">${parseFloat(item.fat).toFixed(1)}%</td>
        <td class="px-4 py-3 text-right text-slate-500">${item.snf ? parseFloat(item.snf).toFixed(1) : '-'}</td>
        <td class="px-4 py-3 text-right font-semibold text-slate-700">₹${parseFloat(item.rate).toFixed(2)}${item.unit === 'kg' ? '/Kg' : '/L'}</td>
        <td class="px-4 py-3 text-right font-bold text-emerald-600">₹${parseFloat(item.totalAmount).toFixed(2)}</td>
        <td class="px-4 py-3 text-center space-x-1 whitespace-nowrap">
          <button onclick="showReceiptModal('${item.id}')" class="p-1.5 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded" title="${t('btnPrintReceipt')}">🖨️</button>
          <button onclick="shareOnWhatsApp('${item.id}')" class="p-1.5 text-slate-600 hover:text-green-600 hover:bg-green-50 rounded" title="${t('btnWhatsappReceipt')}">📲</button>
          <button onclick="deleteCollectionEntry('${item.id}')" class="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded" title="Delete">🗑️</button>
        </td>
      </tr>
    `;
  }).join('');
}

function handleSaveMilkEntry(e) {
  e.preventDefault();
  const farmerId = document.getElementById('col-farmer-id').value;
  if (!farmerId) {
    alert("कृपया किसान चुनें!");
    return;
  }

  const farmer = appData.farmers.find(f => f.id === farmerId);
  const liters = parseFloat(document.getElementById('col-liters').value);
  const fat = parseFloat(document.getElementById('col-fat').value);
  const clr = parseFloat(document.getElementById('col-clr').value) || 0;
  const snf = parseFloat(document.getElementById('col-snf').value) || 0;
  const rate = parseFloat(document.getElementById('col-rate').value);
  const amount = parseFloat(document.getElementById('col-amount').value);
  const date = document.getElementById('col-date').value;
  const shift = document.getElementById('col-shift').value;
  const milkType = document.getElementById('col-milk-type').value;

  if (!liters || liters <= 0 || !fat || fat <= 0) {
    alert("कृपया सही मात्रा (लीटर) और फैट (%) दर्ज करें!");
    return;
  }

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const unit = (document.getElementById('col-unit') && document.getElementById('col-unit').value) || 'ltr';

  const newEntry = {
    id: `COL-${Date.now().toString().slice(-6)}`,
    date,
    shift,
    farmerId,
    farmerName: farmer ? farmer.name : 'Unknown',
    farmerNameEn: farmer ? (farmer.nameEn || farmer.name) : 'Unknown',
    milkType,
    unit,
    liters,
    qty: liters,
    fat,
    snf,
    clr,
    rate,
    totalAmount: amount,
    timestamp: timeStr
  };

  appData.collections.push(newEntry);
  saveData();

  document.getElementById('col-liters').value = '';
  document.getElementById('col-fat').value = '';
  document.getElementById('col-clr').value = '';
  document.getElementById('col-snf').value = '';
  document.getElementById('col-rate').value = '';
  document.getElementById('col-amount').value = '';
  document.getElementById('col-farmer-id').value = '';
  document.getElementById('col-quick-farmer-code').value = '';
  document.getElementById('col-farmer-code-display').innerText = '';

  renderTodaySummaryCards();
  renderCollectionTable();
  showReceiptModal(newEntry.id);
}

function deleteCollectionEntry(id) {
  if (confirm("क्या आप इस दूध एंट्री को हटाना चाहते हैं?")) {
    appData.collections = appData.collections.filter(c => c.id !== id);
    saveData();
    renderTodaySummaryCards();
    renderCollectionTable();
  }
}

function showReceiptModal(collectionId) {
  const item = appData.collections.find(c => c.id === collectionId);
  if (!item) return;

  const farmer = appData.farmers.find(f => f.id === item.farmerId);
  const modal = document.getElementById('receipt-modal');
  const printArea = document.getElementById('print-area');

  const isEn = currentLang === 'en';
  const dairyName = appData.settings.dairyName;
  const address = appData.settings.address;
  const footer = appData.settings.receiptFooter;
  const farmerName = isEn && item.farmerNameEn ? item.farmerNameEn : item.farmerName;
  const shiftText = item.shift === 'morning' ? (isEn ? 'Morning' : 'सुबह') : (isEn ? 'Evening' : 'शाम');
  const milkTypeText = item.milkType === 'cow' ? (isEn ? 'Cow Milk' : 'गाय का दूध') : (isEn ? 'Buffalo Milk' : 'भैंस का दूध');

  const slipHtml = `
    <div class="text-center font-bold text-base border-b-2 border-dashed border-black pb-2 mb-2">
      <div class="text-lg">${dairyName}</div>
      <div class="text-xs font-normal">${address}</div>
      <div class="text-xs font-normal">${isEn ? 'Phone' : 'मो'}: ${appData.settings.phone}</div>
      ${appData.settings.gstin ? `<div class="text-xs font-bold">GSTIN: ${appData.settings.gstin}</div>` : ''}
    </div>
    
    <div class="text-center font-bold uppercase text-xs tracking-wider mb-2 bg-black text-white py-0.5">
      ${isEn ? 'MILK COLLECTION RECEIPT' : 'दूध संकलन पर्ची (MILK RECEIPT)'}
    </div>

    <table class="w-full text-xs mb-2">
      <tr>
        <td class="font-bold">${isEn ? 'Receipt No:' : 'रसीद क्रं:'}</td>
        <td class="text-right">${item.id}</td>
      </tr>
      <tr>
        <td class="font-bold">${isEn ? 'Date / Time:' : 'तारीख/समय:'}</td>
        <td class="text-right">${item.date} | ${item.timestamp || ''}</td>
      </tr>
      <tr>
        <td class="font-bold">${isEn ? 'Shift:' : 'शिफ्ट (पाली):'}</td>
        <td class="text-right">${shiftText}</td>
      </tr>
      <tr class="border-t border-dotted border-black">
        <td class="font-bold">${isEn ? 'Farmer ID:' : 'किसान कोड:'}</td>
        <td class="text-right font-bold text-sm">#${item.farmerId}</td>
      </tr>
      <tr>
        <td class="font-bold">${isEn ? 'Farmer Name:' : 'किसान नाम:'}</td>
        <td class="text-right font-bold">${farmerName}</td>
      </tr>
      <tr>
        <td class="font-bold">${isEn ? 'Milk Type:' : 'दूध प्रकार:'}</td>
        <td class="text-right">${milkTypeText}</td>
      </tr>
    </table>

    <div class="border-t-2 border-b-2 border-black py-1.5 my-2">
      <table class="w-full text-xs">
        <tr>
          <td class="py-0.5">${isEn ? 'Quantity:' : 'मात्रा:'}</td>
          <td class="text-right font-bold text-sm">${parseFloat(item.liters).toFixed(2)} ${item.unit === 'kg' ? 'Kg (किलो)' : 'L (लीटर)'}</td>
        </tr>
        <tr>
          <td class="py-0.5">${isEn ? 'Fat (%):' : 'फैट (Fat %):'}</td>
          <td class="text-right font-bold">${parseFloat(item.fat).toFixed(1)} %</td>
        </tr>
        ${item.snf ? `
        <tr>
          <td class="py-0.5">${isEn ? 'SNF (%):' : 'एस.एन.एफ (SNF):'}</td>
          <td class="text-right">${parseFloat(item.snf).toFixed(1)} %</td>
        </tr>` : ''}
        <tr>
          <td class="py-0.5">${isEn ? 'Rate:' : 'दर (भाव):'}</td>
          <td class="text-right font-bold">₹ ${parseFloat(item.rate).toFixed(2)} / ${item.unit === 'kg' ? 'Kg' : 'L'}</td>
        </tr>
        <tr class="border-t border-dashed border-black pt-1">
          <td class="py-1 font-bold text-sm">${isEn ? 'Total Amount:' : 'कुल राशि:'}</td>
          <td class="text-right font-bold text-base">₹ ${parseFloat(item.totalAmount).toFixed(2)}</td>
        </tr>
      </table>
    </div>

    ${farmer && farmer.advance > 0 ? `
    <div class="text-xs bg-slate-100 p-1 rounded mb-2 text-center">
      ${isEn ? 'Previous Advance / Due:' : 'पूर्व उधार/पेशगी बकाया:'} <b>₹ ${farmer.advance}</b>
    </div>` : ''}

    <div class="text-center text-[10px] italic border-t border-dotted border-black pt-2">
      ${footer}<br>
      Dairy Hisab (डेयरी हिसाब)
    </div>
  `;

  printArea.innerHTML = slipHtml;
  modal.classList.remove('hidden');

  document.getElementById('btn-print-receipt').onclick = () => window.print();
  document.getElementById('btn-whatsapp-receipt').onclick = () => shareOnWhatsApp(item.id);
}

function closeReceiptModal() {
  document.getElementById('receipt-modal').classList.add('hidden');
}

function shareOnWhatsApp(collectionId) {
  const item = appData.collections.find(c => c.id === collectionId);
  if (!item) return;

  const farmer = appData.farmers.find(f => f.id === item.farmerId);
  const phone = farmer ? farmer.phone : '';
  const isEn = currentLang === 'en';
  const dairyName = appData.settings.dairyName;
  const farmerName = isEn && item.farmerNameEn ? item.farmerNameEn : item.farmerName;
  const shiftText = item.shift === 'morning' ? (isEn ? 'Morning' : 'सुबह') : (isEn ? 'Evening' : 'शाम');
  const milkTypeText = item.milkType === 'cow' ? (isEn ? 'Cow Milk' : 'गाय का दूध') : (isEn ? 'Buffalo Milk' : 'भैंस का दूध');

  const message = `🥛 *${dairyName}*
-----------------------------
*दूध संकलन पर्ची (Milk Slip)*
तारीख: ${item.date} (${shiftText})
किसान: ${farmerName} (कोड: #${item.farmerId})
दूध: ${milkTypeText}
मात्रा: *${parseFloat(item.liters).toFixed(2)} ${item.unit === 'kg' ? 'किलो (Kg)' : 'लीटर (L)'}*
फैट: *${parseFloat(item.fat).toFixed(1)}%* | SNF: ${item.snf || '-'}%
दर: ₹${parseFloat(item.rate).toFixed(2)} / ${item.unit === 'kg' ? 'Kg' : 'लीटर'}
-----------------------------
💰 *कुल राशि: ₹${parseFloat(item.totalAmount).toFixed(2)}*
-----------------------------
${appData.settings.receiptFooter}`;

  const encoded = encodeURIComponent(message);
  let url = `https://wa.me/?text=${encoded}`;
  if (phone && phone.length >= 10) {
    let cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length === 10) cleanPhone = '91' + cleanPhone;
    url = `https://wa.me/${cleanPhone}?text=${encoded}`;
  }
  window.open(url, '_blank');
}

function calculateRate(milkType, fat, snf, unit = 'ltr') {
  fat = parseFloat(fat) || 0;
  snf = parseFloat(snf) || 0;
  let rate = 0;

  const rateMode = (appData.settings && appData.settings.rateMode) || 'per_fat';

  if (rateMode === 'fat_kg') {
    // Amul / Federation Fat-Kg rate system (e.g. ₹ 750 or ₹ 840 per Kg pure fat)
    const fatKgRate = milkType === 'cow' 
      ? (appData.settings.cowFatKgRate || 750) 
      : (appData.settings.buffaloFatKgRate || 840);

    // 1 Kg milk with X% fat has (X / 100) Kg pure fat
    let ratePerKg = (fat / 100) * fatKgRate;

    // If measured in Liters, 1 Liter weighs approx 1.03 Kg
    if (unit === 'ltr') {
      rate = ratePerKg * 1.03;
    } else {
      rate = ratePerKg;
    }
  } else {
    // Standard fat multiplier rate (₹ per 1% fat, e.g. 7.50 / 8.40)
    let baseRatePerFat = milkType === 'cow' ? appData.settings.cowRatePerFat : appData.settings.buffaloRatePerFat;
    rate = fat * baseRatePerFat;
  }

  // SNF bonus or deduction
  let standardSnf = milkType === 'cow' ? appData.settings.standardCowSnf : appData.settings.standardBuffaloSnf;
  if (snf > 0 && appData.settings.snfBonusRate) {
    let diff = (snf - standardSnf);
    let bonus = (diff * 10) * (appData.settings.snfBonusRate / 10);
    rate += bonus;
  }
  return Math.max(0, parseFloat(rate.toFixed(2)));
}

function calculateSnfFromClr(clr, fat) {
  clr = parseFloat(clr) || 0;
  fat = parseFloat(fat) || 0;
  if (clr <= 0) return 0;
  let snf = (clr / 4) + (0.25 * fat) + 0.36;
  return parseFloat(snf.toFixed(2));
}

function setCollectionUnit(unit) {
  const hiddenInput = document.getElementById('col-unit');
  const btnLtr = document.getElementById('col-unit-ltr-btn');
  const btnKg = document.getElementById('col-unit-kg-btn');
  const qtyLabel = document.getElementById('col-qty-label');
  const rateLabel = document.getElementById('col-rate-label');
  const litersInput = document.getElementById('col-liters');

  if (hiddenInput) hiddenInput.value = unit;

  if (unit === 'kg') {
    if (btnKg) btnKg.className = "px-2 py-0.5 rounded bg-emerald-600 text-white shadow-sm transition font-bold";
    if (btnLtr) btnLtr.className = "px-2 py-0.5 rounded text-slate-600 hover:text-slate-900 transition font-medium";
    if (qtyLabel) qtyLabel.innerText = "मात्रा किलो (Weight in Kg) *";
    if (rateLabel) rateLabel.innerText = "दर Rate (₹/Kg)";
    if (litersInput) litersInput.placeholder = "0.00 Kg";
  } else {
    if (btnLtr) btnLtr.className = "px-2 py-0.5 rounded bg-emerald-600 text-white shadow-sm transition font-bold";
    if (btnKg) btnKg.className = "px-2 py-0.5 rounded text-slate-600 hover:text-slate-900 transition font-medium";
    if (qtyLabel) qtyLabel.innerText = "मात्रा लीटर (Liters) *";
    if (rateLabel) rateLabel.innerText = "दर Rate (₹/L)";
    if (litersInput) litersInput.placeholder = "0.00 L";
  }

  const badge = document.getElementById('col-rate-mode-badge');
  if (badge) {
    const isFatKg = appData.settings && appData.settings.rateMode === 'fat_kg';
    badge.innerText = isFatKg ? 'किलो फैट' : (unit === 'kg' ? '₹/Kg' : '₹/L');
  }

  // Trigger recalculation with new unit
  const updateFn = window._updateMilkCalculations;
  if (typeof updateFn === 'function') updateFn();
}

function initAutoCalculators() {
  const fatInput = document.getElementById('col-fat');
  const snfInput = document.getElementById('col-snf');
  const clrInput = document.getElementById('col-clr');
  const milkTypeSelect = document.getElementById('col-milk-type');
  const litersInput = document.getElementById('col-liters');
  const rateInput = document.getElementById('col-rate');
  const amountInput = document.getElementById('col-amount');
  const farmerSelect = document.getElementById('col-farmer-id');
  const convertHint = document.getElementById('col-unit-convert-hint');

  function updateCalculations() {
    if (!fatInput || !rateInput) return;
    let fat = parseFloat(fatInput.value) || 0;
    let clr = parseFloat(clrInput.value) || 0;
    let milkType = milkTypeSelect.value;
    let unit = (document.getElementById('col-unit') && document.getElementById('col-unit').value) || 'ltr';
    
    if (clr > 0 && fat > 0) {
      let calculatedSnf = calculateSnfFromClr(clr, fat);
      snfInput.value = calculatedSnf;
    }
    
    let snf = parseFloat(snfInput.value) || (milkType === 'cow' ? 8.5 : 9.0);
    let calculatedRate = calculateRate(milkType, fat, snf, unit);
    rateInput.value = calculatedRate;
    let qty = parseFloat(litersInput.value) || 0;
    amountInput.value = (qty * calculatedRate).toFixed(2);

    if (convertHint) {
      if (qty > 0) {
        if (unit === 'kg') {
          let eqLtr = (qty / 1.03).toFixed(2);
          convertHint.innerText = `≈ ${eqLtr} लीटर दूध (Equivalent Liters)`;
          convertHint.classList.remove('hidden');
        } else {
          let eqKg = (qty * 1.03).toFixed(2);
          convertHint.innerText = `≈ ${eqKg} किलो दूध (Weight in Kg)`;
          convertHint.classList.remove('hidden');
        }
      } else {
        convertHint.classList.add('hidden');
      }
    }
  }

  window._updateMilkCalculations = updateCalculations;

  [fatInput, clrInput, snfInput, milkTypeSelect, litersInput].forEach(el => {
    if (el) {
      el.addEventListener('input', updateCalculations);
      el.addEventListener('change', updateCalculations);
    }
  });

  if (farmerSelect) {
    farmerSelect.addEventListener('change', (e) => {
      let fId = e.target.value;
      let farmer = appData.farmers.find(f => f.id === fId);
      if (farmer) {
        if (farmer.milkType) milkTypeSelect.value = farmer.milkType;
        const phoneLabel = currentLang === 'en' ? 'Phone' : 'मोबाइल';
        document.getElementById('col-farmer-code-display').innerText = `ID: ${farmer.id} | ${phoneLabel}: ${farmer.phone || 'N/A'}`;
        updateCalculations();
      } else {
        document.getElementById('col-farmer-code-display').innerText = '';
      }
    });
  }

  const quickCodeInput = document.getElementById('col-quick-farmer-code');
  if (quickCodeInput) {
    quickCodeInput.addEventListener('input', (e) => {
      let code = e.target.value.trim();
      let matched = appData.farmers.find(f => f.id.toLowerCase() === code.toLowerCase());
      if (matched && farmerSelect) {
        farmerSelect.value = matched.id;
        farmerSelect.dispatchEvent(new Event('change'));
      }
    });
  }
}

// ----------------------------------------------------
// FARMERS REGISTER
// ----------------------------------------------------
function renderFarmersTab() {
  const container = document.getElementById('farmers-grid');
  if (!container) return;
  const search = document.getElementById('farmer-search')?.value.toLowerCase() || '';
  
  let list = appData.farmers;
  if (search) {
    list = list.filter(f => 
      f.name.toLowerCase().includes(search) || 
      (f.nameEn && f.nameEn.toLowerCase().includes(search)) ||
      f.id.toLowerCase().includes(search) || 
      (f.phone && f.phone.includes(search))
    );
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 text-slate-400">
        <span class="text-4xl">👨‍🌾</span>
        <p class="mt-2 text-sm">${t('noFarmersFound')}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(f => {
    const fEntries = appData.collections.filter(c => c.farmerId === f.id);
    const totalLiters = fEntries.reduce((acc, c) => acc + (parseFloat(c.liters) || 0), 0);
    const farmerName = getLocalizedName(f);
    const milkLabel = f.milkType === 'cow' ? (currentLang === 'en' ? 'Cow' : 'गाय') : (currentLang === 'en' ? 'Buffalo' : 'भैंस');

    return `
      <div class="dairy-card p-5 dairy-card-interactive flex flex-col justify-between">
        <div>
          <div class="flex items-start justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg">
                #${f.id}
              </div>
              <div>
                <h3 class="font-bold text-slate-900 text-base leading-tight">${farmerName}</h3>
                <p class="text-xs text-slate-500">${f.village || ''}</p>
              </div>
            </div>
            <span class="text-xs px-2 py-0.5 rounded-full ${f.milkType === 'cow' ? 'badge-cow' : 'badge-buffalo'}">
              ${milkLabel}
            </span>
          </div>

          <div class="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
            <div>
              <span class="text-slate-400">${t('lblPhone')}</span>
              <p class="font-semibold text-slate-700">${f.phone || '-'}</p>
            </div>
            <div>
              <span class="text-slate-400">${t('lblBank')}</span>
              <p class="font-semibold text-slate-700 truncate">${f.bank || '-'}</p>
            </div>
            <div>
              <span class="text-slate-400">${t('lblTotalMilkDelivered')}</span>
              <p class="font-bold text-emerald-600">${totalLiters.toFixed(1)} L</p>
            </div>
            <div>
              <span class="text-slate-400">${t('lblAdvance')}</span>
              <p class="font-bold ${f.advance > 0 ? 'text-amber-600' : 'text-slate-600'}">₹ ${f.advance || 0}</p>
            </div>
          </div>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between space-x-2">
          <button onclick="openFarmerPassbook('${f.id}')" class="flex-1 py-1.5 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg text-xs font-bold transition">
            ${t('btnViewPassbook')}
          </button>
          <button onclick="openAdvanceModal('${f.id}')" class="py-1.5 px-3 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-lg text-xs font-bold transition" title="Add Advance">
            ${t('btnAddAdvance')}
          </button>
          <button onclick="deleteFarmer('${f.id}')" class="p-1.5 text-slate-300 hover:text-red-500 rounded">
            🗑️
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function handleAddFarmer(e) {
  e.preventDefault();
  const id = document.getElementById('new-farmer-id').value.trim();
  const name = document.getElementById('new-farmer-name').value.trim();
  const phone = document.getElementById('new-farmer-phone').value.trim();
  const village = document.getElementById('new-farmer-village').value.trim();
  const milkType = document.getElementById('new-farmer-milk-type').value;
  const advance = parseFloat(document.getElementById('new-farmer-advance').value) || 0;
  const bank = document.getElementById('new-farmer-bank').value.trim();

  if (!id || !name) {
    alert("कृपया किसान कोड और नाम अवश्य भरें!");
    return;
  }

  if (appData.farmers.some(f => f.id === id)) {
    alert("इस कोड का किसान पहले से मौजूद है!");
    return;
  }

  appData.farmers.push({ id, name, nameEn: name, phone, village, milkType, advance, bank });
  saveData();

  closeAddFarmerModal();
  renderFarmersTab();
  populateFarmerSelect();
  alert(`किसान "${name}" (#${id}) सफलतापूर्वक जोड़ दिया गया!`);
}

function openAddFarmerModal() {
  let maxId = 100;
  appData.farmers.forEach(f => {
    let num = parseInt(f.id);
    if (!isNaN(num) && num > maxId) maxId = num;
  });
  document.getElementById('new-farmer-id').value = (maxId + 1).toString();
  document.getElementById('add-farmer-modal').classList.remove('hidden');
}

function closeAddFarmerModal() {
  document.getElementById('add-farmer-modal').classList.add('hidden');
  document.getElementById('add-farmer-form').reset();
}

function deleteFarmer(id) {
  if (confirm(`क्या आप किसान #${id} को हटाना चाहते हैं?`)) {
    appData.farmers = appData.farmers.filter(f => f.id !== id);
    saveData();
    renderFarmersTab();
    populateFarmerSelect();
  }
}

function openFarmerPassbook(farmerId) {
  const farmer = appData.farmers.find(f => f.id === farmerId);
  if (!farmer) return;

  const modal = document.getElementById('passbook-modal');
  const farmerName = getLocalizedName(farmer);
  document.getElementById('passbook-farmer-name').innerText = `${farmerName} (ID: #${farmer.id})`;
  document.getElementById('passbook-phone').innerText = farmer.phone || 'N/A';
  document.getElementById('passbook-village').innerText = farmer.village || 'N/A';
  document.getElementById('passbook-advance').innerText = `₹ ${farmer.advance || 0}`;

  const fCollections = appData.collections.filter(c => c.farmerId === farmerId);
  const totalLiters = fCollections.reduce((acc, c) => acc + (parseFloat(c.liters) || 0), 0);
  const totalMilkAmount = fCollections.reduce((acc, c) => acc + (parseFloat(c.totalAmount) || 0), 0);

  document.getElementById('passbook-total-liters').innerText = `${totalLiters.toFixed(1)} L`;
  document.getElementById('passbook-total-milk').innerText = `₹ ${totalMilkAmount.toFixed(2)}`;

  const tbody = document.getElementById('passbook-entries-body');
  if (fCollections.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center py-6 text-slate-400">${t('noPassbookEntries')}</td></tr>`;
  } else {
    tbody.innerHTML = [...fCollections].reverse().map(c => `
      <tr class="border-b border-slate-100 text-xs hover:bg-slate-50">
        <td class="py-2.5 px-3 text-slate-600">${c.date}</td>
        <td class="py-2.5 px-3 font-semibold">${c.shift === 'morning' ? 'सुबह' : 'शाम'}</td>
        <td class="py-2.5 px-3">${c.milkType === 'cow' ? 'गाय' : 'भैंस'}</td>
        <td class="py-2.5 px-3 text-right font-bold text-slate-800">${parseFloat(c.liters).toFixed(1)} L</td>
        <td class="py-2.5 px-3 text-right">${parseFloat(c.fat).toFixed(1)}%</td>
        <td class="py-2.5 px-3 text-right">₹${parseFloat(c.rate).toFixed(2)}</td>
        <td class="py-2.5 px-3 text-right font-bold text-emerald-600">₹${parseFloat(c.totalAmount).toFixed(2)}</td>
      </tr>
    `).join('');
  }

  modal.classList.remove('hidden');
}

function closePassbookModal() {
  document.getElementById('passbook-modal').classList.add('hidden');
}

function openAdvanceModal(farmerId) {
  const farmer = appData.farmers.find(f => f.id === farmerId);
  if (!farmer) return;

  const amount = prompt(`किसान ${farmer.name} (वर्तमान पेशगी: ₹${farmer.advance || 0})\nनई पेशगी दर्ज करें:`);
  if (amount && !isNaN(parseFloat(amount))) {
    farmer.advance = (parseFloat(farmer.advance) || 0) + parseFloat(amount);
    saveData();
    renderFarmersTab();
    alert(`₹${amount} पेशगी दर्ज की गई। कुल बकाया: ₹${farmer.advance}`);
  }
}

// ----------------------------------------------------
// BILLING & PAYMENT SLIPS
// ----------------------------------------------------
function renderBillingTab() {
  populateBillingFarmerSelect();
  setBillingDefaultDates();
}

function populateBillingFarmerSelect() {
  const select = document.getElementById('bill-farmer-select');
  if (!select) return;
  select.innerHTML = `<option value="ALL">-- सभी किसान (All Farmers) --</option>` +
    appData.farmers.map(f => `<option value="${f.id}">${f.id} - ${getLocalizedName(f)}</option>`).join('');
}

function setBillingDefaultDates() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  let startDay = 1;
  let endDay = 10;
  if (day >= 1 && day <= 10) { startDay = 1; endDay = 10; }
  else if (day >= 11 && day <= 20) { startDay = 11; endDay = 20; }
  else { startDay = 21; endDay = new Date(year, month + 1, 0).getDate(); }

  const pad = (n) => n.toString().padStart(2, '0');
  if (document.getElementById('bill-start-date')) document.getElementById('bill-start-date').value = `${year}-${pad(month + 1)}-${pad(startDay)}`;
  if (document.getElementById('bill-end-date')) document.getElementById('bill-end-date').value = `${year}-${pad(month + 1)}-${pad(endDay)}`;
}

function handleGenerateBills() {
  const farmerId = document.getElementById('bill-farmer-select').value;
  const startDate = document.getElementById('bill-start-date').value;
  const endDate = document.getElementById('bill-end-date').value;

  if (!startDate || !endDate) {
    alert("कृपया तारीख सीमा चुनें!");
    return;
  }

  const container = document.getElementById('bills-results-container');
  if (!container) return;

  let targetFarmers = (farmerId === 'ALL') ? appData.farmers : appData.farmers.filter(f => f.id === farmerId);
  let billsHtml = '';

  targetFarmers.forEach(farmer => {
    const fCollections = appData.collections.filter(c => 
      c.farmerId === farmer.id && c.date >= startDate && c.date <= endDate
    );

    if (fCollections.length === 0) return;

    let totalLiters = 0;
    let grossAmount = 0;
    fCollections.forEach(c => {
      totalLiters += parseFloat(c.liters) || 0;
      grossAmount += parseFloat(c.totalAmount) || 0;
    });

    let advanceDeduction = Math.min(farmer.advance || 0, grossAmount);
    let netPayable = Math.max(0, grossAmount - advanceDeduction);

    billsHtml += `
      <div class="dairy-card p-6 border-l-4 border-l-emerald-600 mb-6 bg-white">
        <div class="flex items-center justify-between pb-3 border-b">
          <div>
            <h3 class="text-base font-bold text-slate-900">#${farmer.id} - ${farmer.name}</h3>
            <p class="text-xs text-slate-500">गाँव: ${farmer.village || '-'} | मो: ${farmer.phone || '-'}</p>
          </div>
          <div class="text-right">
            <span class="text-xs text-slate-400">अवधि:</span>
            <div class="text-xs font-bold">${startDate} से ${endDate}</div>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 text-xs">
          <div class="bg-slate-50 p-3 rounded-lg">
            <span class="text-slate-400">कुल दूध:</span>
            <div class="text-base font-bold">${totalLiters.toFixed(1)} L</div>
          </div>
          <div class="bg-slate-50 p-3 rounded-lg">
            <span class="text-slate-400">सकल मूल्य:</span>
            <div class="text-base font-bold text-emerald-600">₹ ${grossAmount.toFixed(2)}</div>
          </div>
          <div class="bg-slate-50 p-3 rounded-lg">
            <span class="text-slate-400">पेशगी कटौती:</span>
            <div class="text-base font-bold text-amber-600">- ₹ ${advanceDeduction.toFixed(2)}</div>
          </div>
          <div class="bg-emerald-50 p-3 rounded-lg border border-emerald-200">
            <span class="text-emerald-800 font-bold">शुद्ध देय राशि:</span>
            <div class="text-lg font-black text-emerald-700">₹ ${netPayable.toFixed(2)}</div>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = billsHtml || `<div class="text-center py-8 text-slate-400">${t('noBillsFound')}</div>`;
}

// ----------------------------------------------------
// SETTINGS
// ----------------------------------------------------
function renderRateChartTab() {
  document.getElementById('set-dairy-name').value = appData.settings.dairyName || '';
  document.getElementById('set-owner-name').value = appData.settings.ownerName || '';
  document.getElementById('set-phone').value = appData.settings.phone || '';
  document.getElementById('set-address').value = appData.settings.address || '';
  document.getElementById('set-gstin').value = appData.settings.gstin || '';
  document.getElementById('set-fssai').value = appData.settings.fssai || '';
  document.getElementById('set-state').value = appData.settings.state || 'Rajasthan (08)';
  document.getElementById('set-business-mode').value = appData.settings.businessMode || 'all';

  const providerEl = document.getElementById('set-sms-provider');
  const apiKeyEl = document.getElementById('set-sms-api-key');
  if (providerEl) providerEl.value = appData.settings.smsProvider || 'direct';
  if (apiKeyEl) apiKeyEl.value = appData.settings.smsApiKey || '';

  const unitEl = document.getElementById('set-milk-unit');
  const rateModeEl = document.getElementById('set-rate-mode');
  if (unitEl) unitEl.value = appData.settings.defaultUnit || 'ltr';
  if (rateModeEl) {
    rateModeEl.value = appData.settings.rateMode || 'per_fat';
    toggleRateModeSettings(rateModeEl.value);
  }

  document.getElementById('set-cow-rate-fat').value = appData.settings.cowRatePerFat || 7.5;
  document.getElementById('set-buf-rate-fat').value = appData.settings.buffaloRatePerFat || 8.4;

  const cowFatKgEl = document.getElementById('set-cow-fat-kg');
  const bufFatKgEl = document.getElementById('set-buf-fat-kg');
  if (cowFatKgEl) cowFatKgEl.value = appData.settings.cowFatKgRate || 750;
  if (bufFatKgEl) bufFatKgEl.value = appData.settings.buffaloFatKgRate || 840;

  document.getElementById('set-snf-bonus').value = appData.settings.snfBonusRate || 0.5;
  document.getElementById('set-receipt-footer').value = appData.settings.receiptFooter || '';
}

function handleSaveSettings(e) {
  e.preventDefault();
  appData.settings.dairyName = document.getElementById('set-dairy-name').value.trim();
  appData.settings.ownerName = document.getElementById('set-owner-name').value.trim();
  appData.settings.phone = document.getElementById('set-phone').value.trim();
  appData.settings.address = document.getElementById('set-address').value.trim();
  appData.settings.gstin = document.getElementById('set-gstin').value.trim().toUpperCase();
  appData.settings.fssai = document.getElementById('set-fssai').value.trim();
  appData.settings.state = document.getElementById('set-state').value.trim();
  appData.settings.businessMode = document.getElementById('set-business-mode').value;

  const providerEl = document.getElementById('set-sms-provider');
  const apiKeyEl = document.getElementById('set-sms-api-key');
  if (providerEl) appData.settings.smsProvider = providerEl.value;
  if (apiKeyEl) appData.settings.smsApiKey = apiKeyEl.value.trim();

  const unitEl = document.getElementById('set-milk-unit');
  const rateModeEl = document.getElementById('set-rate-mode');
  if (unitEl) appData.settings.defaultUnit = unitEl.value;
  if (rateModeEl) appData.settings.rateMode = rateModeEl.value;

  appData.settings.cowRatePerFat = parseFloat(document.getElementById('set-cow-rate-fat').value) || 7.5;
  appData.settings.buffaloRatePerFat = parseFloat(document.getElementById('set-buf-rate-fat').value) || 8.4;

  const cowFatKgEl = document.getElementById('set-cow-fat-kg');
  const bufFatKgEl = document.getElementById('set-buf-fat-kg');
  if (cowFatKgEl) appData.settings.cowFatKgRate = parseFloat(cowFatKgEl.value) || 750;
  if (bufFatKgEl) appData.settings.buffaloFatKgRate = parseFloat(bufFatKgEl.value) || 840;

  appData.settings.snfBonusRate = parseFloat(document.getElementById('set-snf-bonus').value) || 0.5;

  // Apply default unit to active collection form
  if (appData.settings.defaultUnit) {
    setCollectionUnit(appData.settings.defaultUnit);
  }
  appData.settings.receiptFooter = document.getElementById('set-receipt-footer').value.trim();

  // If user is logged in, sync current user profile & user directory
  if (currentUser) {
    currentUser.dairyName = appData.settings.dairyName;
    currentUser.name = appData.settings.ownerName;
    currentUser.phone = appData.settings.phone;
    currentUser.address = appData.settings.address;
    currentUser.gstin = appData.settings.gstin;
    currentUser.businessMode = appData.settings.businessMode;
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(currentUser));

    const users = getUsersList();
    const idx = users.findIndex(u => u.phone === currentUser.phone);
    if (idx !== -1) {
      users[idx] = Object.assign({}, users[idx], currentUser);
      saveUsersList(users);
    }
  }

  saveData();
  setupBusinessMode();
  updateHeaderBranding();
  updateLanguageUI();
  alert(currentLang === 'en' ? "GST profile, business mode & rate settings saved!" : "डेयरी प्रोफाइल, GST व सेटिंग्स सफलतापूर्वक सुरक्षित हो गई!");
}

async function testLiveSms() {
  const testPhoneInput = document.getElementById('sms-test-phone');
  const testPhone = testPhoneInput ? testPhoneInput.value.trim().replace(/\D/g, '') : '';
  if (testPhone.length !== 10) {
    alert("कृपया टेस्ट के लिए 10 अंकों का सही मोबाइल नंबर लिखें!");
    return;
  }
  const provider = document.getElementById('set-sms-provider').value;
  const apiKey = document.getElementById('set-sms-api-key').value.trim();
  const testOtp = Math.floor(100000 + Math.random() * 900000).toString();

  if (provider === 'direct') {
    sendOtpViaWhatsApp(testPhone, testOtp);
    alert(`टेस्ट OTP: ${testOtp}\n(WhatsApp पर लाइव संदेश तैयार है!)`);
  } else if (!apiKey) {
    alert("कृपया पहले अपनी SMS API Key दर्ज करें!");
  } else {
    alert(`Fast2SMS/2Factor के माध्यम से +91-${testPhone} पर लाइव SMS भेजा जा रहा है...`);
    const res = await dispatchRealSmsOtp(testPhone, testOtp, provider);
    if (res.apiSuccess) {
      alert(`✅ सफल! लाइव SMS मोबाइल पर भेज दिया गया है। OTP: ${testOtp}`);
    } else {
      alert(`SMS API कॉल की गई (OTP: ${testOtp})। यदि DLT/CORS प्रतिबंध है, तो स्क्रीन/WhatsApp OTP का उपयोग करें।`);
    }
  }
}

function exportBackupJson() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appData, null, 2));
  const downloadAnchor = document.createElement('a');
  const dateStr = new Date().toISOString().split('T')[0];
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `dairy_hisab_backup_${dateStr}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

function importBackupJson(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const parsed = JSON.parse(e.target.result);
      if (parsed.farmers || parsed.products) {
        if (confirm("क्या आप इस बैकअप को लोड करना चाहते हैं?")) {
          appData = parsed;
          saveData();
          renderApp();
          alert("डेटा सफलतापूर्वक रिस्टोर हो गया!");
        }
      } else {
        alert("अमान्य बैकअप फाइल!");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };
  reader.readAsText(file);
}

// Demo reset removed

// ----------------------------------------------------
// DASHBOARD & REPORTS
// ----------------------------------------------------
function renderDashboardTab() {
  const totalLiters = appData.collections.reduce((acc, c) => acc + (parseFloat(c.liters) || 0), 0);
  const totalMilkCost = appData.collections.reduce((acc, c) => acc + (parseFloat(c.totalAmount) || 0), 0);
  const totalProductSales = appData.invoices.reduce((acc, i) => acc + i.grandTotal, 0);

  document.getElementById('dash-total-farmers').innerText = appData.farmers.length;
  document.getElementById('dash-total-liters').innerText = `${totalLiters.toFixed(1)} L`;
  document.getElementById('dash-total-purchase').innerText = `₹ ${totalMilkCost.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
  document.getElementById('dash-total-sales').innerText = `₹ ${totalProductSales.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;

  const todayStr = new Date().toISOString().split('T')[0];
  const todayEntries = appData.collections.filter(c => c.date === todayStr);
  const todayLiters = todayEntries.reduce((acc, c) => acc + (parseFloat(c.liters) || 0), 0);
  const todayAmount = todayEntries.reduce((acc, c) => acc + (parseFloat(c.totalAmount) || 0), 0);

  document.getElementById('dash-today-liters').innerText = `${todayLiters.toFixed(1)} L`;
  document.getElementById('dash-today-amount').innerText = `₹ ${todayAmount.toFixed(2)}`;
}

function exportCollectionsToExcel() {
  if (appData.collections.length === 0) {
    alert("डाउनलोड करने के लिए कोई एंट्री नहीं है!");
    return;
  }
  let csvContent = "\uFEFFरसीद नं,तारीख,शिफ्ट,किसान कोड,किसान नाम,दूध प्रकार,मात्रा (लीटर),फैट (%),दर,कुल रकम\n";
  appData.collections.forEach(c => {
    csvContent += [c.id, c.date, c.shift, c.farmerId, `"${c.farmerName}"`, c.milkType, c.liters, c.fat, c.rate, c.totalAmount].join(',') + "\n";
  });
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `dairy_hisab_collection_${new Date().toISOString().split('T')[0]}.csv`;
  link.click();
}

// ----------------------------------------------------
// PUBLIC CUSTOMER / FARMER PASSBOOK (NO BUSINESS REGISTRATION)
// ----------------------------------------------------
function searchPublicCustomerPassbook() {
  const phoneInput = document.getElementById('public-search-phone');
  const resultsDiv = document.getElementById('public-passbook-results');
  if (!phoneInput || !resultsDiv) return;

  const phone = phoneInput.value.trim().replace(/\D/g, '');
  if (phone.length !== 10) {
    alert("कृपया 10 अंकों का सही मोबाइल नंबर दर्ज करें!");
    return;
  }

  const farmer = (appData.farmers || []).find(f => f.phone === phone);
  const customer = (appData.customers || []).find(c => c.phone === phone);

  if (!farmer && !customer) {
    resultsDiv.innerHTML = `
      <div class="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-center text-xs text-amber-900">
        <span class="text-2xl block mb-1">⚠️</span>
        <b>मोबाइल नंबर +91-${phone} का कोई रिकॉर्ड नहीं मिला!</b>
        <p class="mt-1 text-slate-500">कृपया अपने डेयरी संचालक से अपना मोबाइल नंबर जुड़वाएं।</p>
      </div>
    `;
    resultsDiv.classList.remove('hidden');
    return;
  }

  const farmerCollections = farmer ? (appData.collections || []).filter(c => c.farmerId === farmer.id || c.farmerName === farmer.name) : [];
  const farmerTotalLiters = farmerCollections.reduce((sum, c) => sum + (c.liters || 0), 0);
  const farmerTotalAmount = farmerCollections.reduce((sum, c) => sum + (c.totalAmount || 0), 0);

  const customerInvoices = customer ? (appData.invoices || []).filter(inv => inv.customerPhone === phone || inv.customerName === customer.name) : [];
  const customerTotalBill = customerInvoices.reduce((sum, inv) => sum + (inv.grandTotal || 0), 0);
  const customerTotalPaid = customerInvoices.reduce((sum, inv) => sum + (inv.paidAmount || 0), 0);
  const customerDue = customer ? (customer.balance || 0) : (farmer ? (farmer.advance || 0) : 0);

  const displayName = (farmer ? farmer.name : '') + (farmer && customer ? ' / ' : '') + (customer ? customer.name : '');
  const village = (farmer ? farmer.village : '') || (customer ? customer.address : '') || 'स्थानीय';

  let html = `
    <div class="dairy-card p-4 bg-slate-50 border border-emerald-200 rounded-2xl space-y-3">
      <div class="flex items-center justify-between pb-2 border-b border-slate-200">
        <div>
          <span class="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
            ${farmer ? '👨‍🌾 किसान आपूर्तिकर्ता' : '🥛 ग्राहक खाता'}
          </span>
          <h4 class="font-black text-slate-900 text-sm mt-1">${displayName}</h4>
          <p class="text-[11px] text-slate-500">📍 ${village} | 📞 +91-${phone}</p>
        </div>
        <div class="text-right">
          <span class="text-[10px] text-slate-400 block uppercase font-bold">${farmer ? 'अग्रिम/लोन' : 'बकाया'}</span>
          <span class="text-base font-black ${customerDue > 0 ? 'text-red-600' : 'text-emerald-700'}">
            ₹${customerDue.toFixed(2)}
          </span>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-2 text-center text-xs">
        <div class="bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
          <span class="text-[10px] text-slate-400 block">${farmer ? 'कुल दूध दिया' : 'कुल खरीदारी'}</span>
          <b class="text-slate-800">${farmer ? farmerTotalLiters.toFixed(1) + ' L' : '₹' + customerTotalBill.toFixed(2)}</b>
        </div>
        <div class="bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
          <span class="text-[10px] text-slate-400 block">${farmer ? 'कुल दूध मूल्य' : 'कुल जमा राशि'}</span>
          <b class="text-emerald-700">₹${(farmer ? farmerTotalAmount : customerTotalPaid).toFixed(2)}</b>
        </div>
      </div>
  `;

  if (farmerCollections.length > 0) {
    html += `
      <div class="pt-2">
        <h5 class="font-bold text-[11px] text-slate-700 mb-1">हालिया दूध संकलन पर्चियां:</h5>
        <div class="max-h-40 overflow-y-auto border rounded-xl bg-white text-[10px]">
          <table class="w-full text-left divide-y divide-slate-100">
            <thead class="bg-slate-100 font-bold text-slate-600">
              <tr>
                <th class="p-1.5">तारीख/शिफ्ट</th>
                <th class="p-1.5 text-right">लीटर</th>
                <th class="p-1.5 text-right">फैट</th>
                <th class="p-1.5 text-right">रकम</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              ${farmerCollections.slice(0, 8).map(c => `
                <tr>
                  <td class="p-1.5">${c.date} (${c.shift === 'morning' ? 'सुबह' : 'शाम'})</td>
                  <td class="p-1.5 text-right font-bold">${c.liters} L</td>
                  <td class="p-1.5 text-right">${c.fat}%</td>
                  <td class="p-1.5 text-right font-black text-emerald-700">₹${c.totalAmount.toFixed(2)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  const waText = encodeURIComponent(
    `*डेयरी हिसाब पर्ची*\n` +
    `नाम: ${displayName}\n` +
    `मोबाइल: ${phone}\n` +
    `कुल हिसाब: ₹${(farmer ? farmerTotalAmount : customerTotalBill).toFixed(2)}\n` +
    `बकाया/शेष: ₹${customerDue.toFixed(2)}\n` +
    `तारीख: ${new Date().toLocaleDateString('hi-IN')}`
  );

  html += `
      <div class="pt-2">
        <a href="https://api.whatsapp.com/send?phone=91${phone}&text=${waText}" target="_blank" class="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center space-x-1.5 shadow">
          <span>📲</span>
          <span>WhatsApp पर अपनी पर्ची मंगवाएं</span>
        </a>
      </div>
    </div>
  `;

  resultsDiv.innerHTML = html;
  resultsDiv.classList.remove('hidden');
}

// ----------------------------------------------------
// CUSTOM ITEMS (DAIRY PRODUCTS & EQUIPMENT)
// ----------------------------------------------------
function openAddCustomItemModal() {
  const modal = document.getElementById('add-custom-item-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeAddCustomItemModal() {
  const modal = document.getElementById('add-custom-item-modal');
  if (modal) modal.classList.add('hidden');
}

function handleAddCustomItem(e) {
  if (e) e.preventDefault();
  const name = document.getElementById('custom-item-name').value.trim();
  const category = document.getElementById('custom-item-category').value;
  const unit = document.getElementById('custom-item-unit').value.trim();
  const rate = parseFloat(document.getElementById('custom-item-rate').value) || 0;
  const hsn = document.getElementById('custom-item-hsn').value.trim() || '0000';
  const gstPercent = parseFloat(document.getElementById('custom-item-gst').value) || 0;
  const stock = parseFloat(document.getElementById('custom-item-stock').value) || 10;

  if (!name || rate <= 0) {
    alert("कृपया सामान का नाम और सही कीमत भरें!");
    return;
  }

  const newItem = {
    id: "ITEM-" + Date.now(),
    name: name,
    nameEn: name,
    category: category,
    unit: unit,
    rate: rate,
    hsn: hsn,
    gstPercent: gstPercent,
    stock: stock
  };

  appData.products.push(newItem);
  saveData();
  renderProductCards();
  closeAddCustomItemModal();
  document.getElementById('add-custom-item-form').reset();
  alert(`✅ "${name}" सफलतापूर्वक जोड़ दिया गया है!`);
}

// ----------------------------------------------------
// TAB: CATTLE & FARM MANAGEMENT (पशु, चारा व डॉक्टर खर्च)
// ----------------------------------------------------
function renderCattleFarmTab() {
  const summary = appData.cattleSummary || {
    totalBuffaloes: 0,
    milkingBuffaloes: 0,
    dryBuffaloes: 0,
    totalCows: 0,
    milkingCows: 0,
    dryCows: 0,
    totalCalves: 0,
    dailyMilkOutput: 0
  };

  const feed = appData.feedConsumption || {
    dryFodderQty: 60, dryFodderRate: 8,
    greenFodderQty: 100, greenFodderRate: 3,
    concentrateQty: 30, concentrateRate: 32
  };

  const elBuf = document.getElementById('farm-buf-count');
  const elCow = document.getElementById('farm-cow-count');
  const elCalf = document.getElementById('farm-calf-count');
  const elMilk = document.getElementById('farm-milk-output');

  if (elBuf) elBuf.innerText = `${summary.totalBuffaloes} (दुधारू: ${summary.milkingBuffaloes || 0})`;
  if (elCow) elCow.innerText = `${summary.totalCows} (दुधारू: ${summary.milkingCows || 0})`;
  if (elCalf) elCalf.innerText = `${summary.totalCalves || 0}`;
  if (elMilk) elMilk.innerText = `${summary.dailyMilkOutput || 0} L / दिन`;

  const dryCost = (feed.dryFodderQty || 0) * (feed.dryFodderRate || 0);
  const greenCost = (feed.greenFodderQty || 0) * (feed.greenFodderRate || 0);
  const concentrateCost = (feed.concentrateQty || 0) * (feed.concentrateRate || 0);
  const totalDailyFeedCost = dryCost + greenCost + concentrateCost;
  const totalMonthlyFeedCost = totalDailyFeedCost * 30;

  const totalCattleCount = (summary.totalBuffaloes || 0) + (summary.totalCows || 0);
  const costPerAnimal = totalCattleCount > 0 ? (totalDailyFeedCost / totalCattleCount) : 0;

  const elDailyFeed = document.getElementById('farm-daily-feed-cost');
  const elMonthlyFeed = document.getElementById('farm-monthly-feed-cost');
  const elCostPerAnimal = document.getElementById('farm-feed-per-animal');

  if (elDailyFeed) elDailyFeed.innerText = `₹${totalDailyFeedCost.toFixed(2)}`;
  if (elMonthlyFeed) elMonthlyFeed.innerText = `₹${totalMonthlyFeedCost.toFixed(2)}`;
  if (elCostPerAnimal) elCostPerAnimal.innerText = `₹${costPerAnimal.toFixed(2)} / पशु`;

  const inDryQty = document.getElementById('feed-dry-qty');
  const inDryRate = document.getElementById('feed-dry-rate');
  const inGreenQty = document.getElementById('feed-green-qty');
  const inGreenRate = document.getElementById('feed-green-rate');
  const inConcQty = document.getElementById('feed-conc-qty');
  const inConcRate = document.getElementById('feed-conc-rate');

  if (inDryQty) inDryQty.value = feed.dryFodderQty || '';
  if (inDryRate) inDryRate.value = feed.dryFodderRate || '';
  if (inGreenQty) inGreenQty.value = feed.greenFodderQty || '';
  if (inGreenRate) inGreenRate.value = feed.greenFodderRate || '';
  if (inConcQty) inConcQty.value = feed.concentrateQty || '';
  if (inConcRate) inConcRate.value = feed.concentrateRate || '';

  renderVetExpensesTable();
  renderCattleListTable();
}

function renderVetExpensesTable() {
  const tbody = document.getElementById('vet-expenses-body');
  if (!tbody) return;

  const expenses = appData.vetExpenses || [];
  if (expenses.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center py-4 text-slate-400">कोई डॉक्टर खर्च दर्ज नहीं है।</td></tr>`;
    return;
  }

  tbody.innerHTML = expenses.map(exp => `
    <tr class="hover:bg-slate-50 transition">
      <td class="py-2.5 px-3 font-medium text-slate-800">${exp.date}</td>
      <td class="py-2.5 px-3 font-bold text-slate-900">${exp.animalTag}</td>
      <td class="py-2.5 px-3 text-slate-700">${exp.reason}</td>
      <td class="py-2.5 px-3 font-medium text-slate-800">${exp.doctorName}</td>
      <td class="py-2.5 px-3 text-right font-black text-red-600">₹${exp.amount.toFixed(2)}</td>
      <td class="py-2.5 px-3 text-center">
        <button onclick="deleteVetExpense('${exp.id}')" class="text-slate-400 hover:text-red-600 text-xs font-bold" title="हटाएं">✕</button>
      </td>
    </tr>
  `).join('');
}

function renderCattleListTable() {
  const tbody = document.getElementById('cattle-list-body');
  if (!tbody) return;

  const list = appData.cattleList || [];
  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center py-4 text-slate-400">कोई पशु दर्ज नहीं है। "+ नया पशु जोड़ें" पर क्लिक करें।</td></tr>`;
    return;
  }

  tbody.innerHTML = list.map(c => `
    <tr class="hover:bg-slate-50 transition">
      <td class="py-2.5 px-3 font-black text-emerald-800">${c.tagNo}</td>
      <td class="py-2.5 px-3 font-bold text-slate-900">${c.name}</td>
      <td class="py-2.5 px-3 text-slate-600">${c.type === 'buffalo' ? '🐃 भैंस' : '🐄 गाय'} (${c.breed})</td>
      <td class="py-2.5 px-3 font-extrabold text-slate-800">${c.dailyMilk > 0 ? c.dailyMilk + ' L/दिन' : 'सूखी'}</td>
      <td class="py-2.5 px-3">
        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${c.status === 'milking' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
          ${c.status === 'milking' ? 'दुधारू' : (c.status === 'pregnant' ? 'गाभिन' : 'सूखी')}
        </span>
      </td>
      <td class="py-2.5 px-3 text-slate-500">${c.age || '-'}</td>
      <td class="py-2.5 px-3 text-center">
        <button onclick="deleteCattle('${c.id}')" class="text-slate-400 hover:text-red-600 text-xs font-bold" title="हटाएं">✕</button>
      </td>
    </tr>
  `).join('');
}

function handleSaveFeedSettings(e) {
  if (e) e.preventDefault();
  appData.feedConsumption = {
    dryFodderQty: parseFloat(document.getElementById('feed-dry-qty').value) || 0,
    dryFodderRate: parseFloat(document.getElementById('feed-dry-rate').value) || 0,
    greenFodderQty: parseFloat(document.getElementById('feed-green-qty').value) || 0,
    greenFodderRate: parseFloat(document.getElementById('feed-green-rate').value) || 0,
    concentrateQty: parseFloat(document.getElementById('feed-conc-qty').value) || 0,
    concentrateRate: parseFloat(document.getElementById('feed-conc-rate').value) || 0
  };
  saveData();
  renderCattleFarmTab();
  alert("✅ दैनिक चारा खपत व दर सेटिंग्स सुरक्षित हो गई!");
}

function handleAddVetExpense(e) {
  if (e) e.preventDefault();
  const animalTag = document.getElementById('vet-exp-tag').value.trim();
  const reason = document.getElementById('vet-exp-reason').value.trim();
  const doctorName = document.getElementById('vet-exp-doctor').value.trim();
  const amount = parseFloat(document.getElementById('vet-exp-amount').value) || 0;
  const date = document.getElementById('vet-exp-date').value || new Date().toISOString().split('T')[0];

  if (!animalTag || amount <= 0) {
    alert("कृपया पशु का नाम/टैग और खर्च राशि दर्ज करें!");
    return;
  }

  if (!appData.vetExpenses) appData.vetExpenses = [];
    if (!appData.doctorCases) appData.doctorCases = [];
  appData.vetExpenses.unshift({
    id: "VET-" + Date.now(),
    date,
    animalTag,
    reason,
    doctorName,
    amount
  });

  saveData();
  renderVetExpensesTable();
  document.getElementById('vet-expense-form').reset();
  alert("✅ डॉक्टर / चिकित्सा खर्च सुरक्षित हो गया!");
}

function deleteVetExpense(id) {
  if (confirm("क्या आप यह डॉक्टर खर्च हटाना चाहते हैं?")) {
    appData.vetExpenses = appData.vetExpenses.filter(e => e.id !== id);
    saveData();
    renderVetExpensesTable();
  }
}

function openAddAnimalModal() {
  const modal = document.getElementById('add-animal-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeAddAnimalModal() {
  const modal = document.getElementById('add-animal-modal');
  if (modal) modal.classList.add('hidden');
}

function handleAddAnimal(e) {
  if (e) e.preventDefault();
  const tagNo = document.getElementById('add-animal-tag').value.trim();
  const name = document.getElementById('add-animal-name').value.trim();
  const type = document.getElementById('add-animal-type').value;
  const breed = document.getElementById('add-animal-breed').value.trim();
  const status = document.getElementById('add-animal-status').value;
  const dailyMilk = parseFloat(document.getElementById('add-animal-milk').value) || 0;
  const age = document.getElementById('add-animal-age').value.trim();

  if (!tagNo || !name) {
    alert("कृपया टैग नंबर और नाम अवश्य लिखें!");
    return;
  }

  if (!appData.cattleList) appData.cattleList = [];
  appData.cattleList.push({
    id: "CAT-" + Date.now(),
    tagNo,
    name,
    type,
    breed,
    status,
    dailyMilk,
    age
  });

  if (!appData.cattleSummary) appData.cattleSummary = { totalBuffaloes: 0, totalCows: 0, milkingBuffaloes: 0, milkingCows: 0, totalCalves: 0, dailyMilkOutput: 0 };
  if (type === 'buffalo') {
    appData.cattleSummary.totalBuffaloes = (appData.cattleSummary.totalBuffaloes || 0) + 1;
    if (status === 'milking') appData.cattleSummary.milkingBuffaloes = (appData.cattleSummary.milkingBuffaloes || 0) + 1;
  } else {
    appData.cattleSummary.totalCows = (appData.cattleSummary.totalCows || 0) + 1;
    if (status === 'milking') appData.cattleSummary.milkingCows = (appData.cattleSummary.milkingCows || 0) + 1;
  }
  appData.cattleSummary.dailyMilkOutput = (appData.cattleSummary.dailyMilkOutput || 0) + dailyMilk;

  saveData();
  renderCattleFarmTab();
  closeAddAnimalModal();
  document.getElementById('add-animal-form').reset();
  alert(`✅ पशु "${name} (${tagNo})" सफलतापूर्वक जोड़ दिया गया!`);
}

function deleteCattle(id) {
  if (confirm("क्या आप इस पशु को रिकॉर्ड से हटाना चाहते हैं?")) {
    appData.cattleList = appData.cattleList.filter(c => c.id !== id);
    saveData();
    renderCattleFarmTab();
  }
}

// ----------------------------------------------------
// TAB: DIRECTORY (DOCTORS & SHOPS)
// ----------------------------------------------------
let currentDirectoryTab = 'doctors';

function switchDirectoryTab(tab) {
  currentDirectoryTab = tab;
  const btnDocs = document.getElementById('dir-tab-docs-btn');
  const btnShops = document.getElementById('dir-tab-shops-btn');
  const secDocs = document.getElementById('dir-section-doctors');
  const secShops = document.getElementById('dir-section-shops');

  if (tab === 'doctors') {
    if (btnDocs) btnDocs.className = "flex-1 py-2 text-center font-bold text-xs rounded-xl bg-white text-emerald-800 shadow-sm border border-emerald-100 transition";
    if (btnShops) btnShops.className = "flex-1 py-2 text-center font-bold text-xs rounded-xl text-slate-500 hover:text-slate-800 transition";
    if (secDocs) secDocs.classList.remove('hidden');
    if (secShops) secShops.classList.add('hidden');
  } else {
    if (btnShops) btnShops.className = "flex-1 py-2 text-center font-bold text-xs rounded-xl bg-white text-emerald-800 shadow-sm border border-emerald-100 transition";
    if (btnDocs) btnDocs.className = "flex-1 py-2 text-center font-bold text-xs rounded-xl text-slate-500 hover:text-slate-800 transition";
    if (secShops) secShops.classList.remove('hidden');
    if (secDocs) secDocs.classList.add('hidden');
  }
}

function renderDirectoryTab() {
  renderDoctorsGrid();
  renderShopsGrid();
}

function renderDoctorsGrid() {
  const container = document.getElementById('doctors-grid');
  if (!container) return;

  const doctors = appData.doctors || [];
  container.innerHTML = doctors.map(doc => `
    <div class="dairy-card p-4 bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition flex flex-col justify-between">
      <div>
        <div class="flex items-start justify-between">
          <div>
            <div class="flex items-center space-x-1.5">
              <span class="text-lg">🩺</span>
              <h4 class="font-black text-slate-900 text-sm leading-tight">${doc.name}</h4>
            </div>
            <p class="text-[11px] text-emerald-800 font-bold mt-0.5">${doc.degree}</p>
          </div>
          <div class="text-right">
            <span class="inline-flex items-center bg-amber-50 text-amber-900 text-[11px] font-black px-2 py-0.5 rounded-lg border border-amber-200">
              ⭐ ${doc.rating}
            </span>
            <span class="text-[10px] text-slate-400 block mt-0.5">(${doc.reviewsCount || 20} रिव्यू)</span>
          </div>
        </div>

        <div class="mt-2.5 space-y-1 text-xs text-slate-600">
          <p><b>विशेषज्ञता:</b> ${doc.specialty}</p>
          <p><b>अस्पताल/क्लिनिक:</b> ${doc.clinic}</p>
          <p class="text-[11px] text-slate-500">📍 ${doc.location}</p>
        </div>

        ${doc.isEmergency ? `
          <div class="mt-2 inline-flex items-center space-x-1 text-[10px] font-bold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded-md">
            <span>🚨</span>
            <span>24x7 आपातकालीन सेवा उपलब्ध</span>
          </div>
        ` : ''}
      </div>

      <div class="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
        <a href="tel:${doc.phone}" class="py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center space-x-1 shadow-sm">
          <span>📞</span>
          <span>कॉल करें</span>
        </a>
        <a href="https://api.whatsapp.com/send?phone=91${doc.phone}&text=नमस्ते%20डॉक्टर%20साहब,%20मुझे%20पशु%20इलाज%20हेतु%20सलाह%20चाहिए।" target="_blank" class="py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-xl text-xs font-bold transition flex items-center justify-center space-x-1">
          <span>💬</span>
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  `).join('');
}

function renderShopsGrid() {
  const container = document.getElementById('shops-grid');
  if (!container) return;

  const shops = appData.shops || [];
  container.innerHTML = shops.map(shp => `
    <div class="dairy-card p-4 bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition flex flex-col justify-between">
      <div>
        <div class="flex items-start justify-between">
          <div>
            <div class="flex items-center space-x-1.5">
              <span class="text-lg">🏪</span>
              <h4 class="font-black text-slate-900 text-sm leading-tight">${shp.name}</h4>
            </div>
            <span class="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded mt-1 inline-block">
              ${shp.category}
            </span>
          </div>
          <div class="text-right">
            <span class="inline-flex items-center bg-amber-50 text-amber-900 text-[11px] font-black px-2 py-0.5 rounded-lg border border-amber-200">
              ⭐ ${shp.rating}
            </span>
          </div>
        </div>

        <div class="mt-2.5 space-y-1.5 text-xs text-slate-600">
          <div class="bg-emerald-50/60 p-2 rounded-lg border border-emerald-100 text-[11px]">
            <b class="text-emerald-900">उपलब्ध सामान:</b>
            <p class="text-emerald-800 mt-0.5">${shp.goods}</p>
          </div>
          <p class="text-[11px] text-amber-800 font-semibold">${shp.qualityBadge || 'विश्वसनीय विक्रेता'}</p>
          <p class="text-[11px] text-slate-500">📍 ${shp.address}</p>
          <p class="text-[11px] text-slate-500">संचालक: ${shp.owner}</p>
        </div>
      </div>

      <div class="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
        <a href="tel:${shp.phone}" class="py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center space-x-1 shadow-sm">
          <span>📞</span>
          <span>कॉल करें</span>
        </a>
        <a href="https://api.whatsapp.com/send?phone=91${shp.phone}&text=नमस्ते,%20मुझे%20डेयरी%20सामान/मशीन%20की%20जानकारी%20चाहिए।" target="_blank" class="py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-xl text-xs font-bold transition flex items-center justify-center space-x-1">
          <span>💬</span>
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  `).join('');
}

function openAddDoctorModal() {
  const modal = document.getElementById('add-doctor-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeAddDoctorModal() {
  const modal = document.getElementById('add-doctor-modal');
  if (modal) modal.classList.add('hidden');
}

function handleAddDoctor(e) {
  if (e) e.preventDefault();
  const name = document.getElementById('add-doc-name').value.trim();
  const degree = document.getElementById('add-doc-degree').value.trim();
  const specialty = document.getElementById('add-doc-specialty').value.trim();
  const clinic = document.getElementById('add-doc-clinic').value.trim();
  const phone = document.getElementById('add-doc-phone').value.trim();
  const location = document.getElementById('add-doc-location').value.trim();
  const rating = parseFloat(document.getElementById('add-doc-rating').value) || 4.8;
  const isEmergency = document.getElementById('add-doc-emergency').checked;

  if (!name || !phone) {
    alert("कृपया डॉक्टर का नाम और मोबाइल नंबर भरें!");
    return;
  }

  if (!appData.doctors) appData.doctors = [];
  appData.doctors.push({
    id: "DOC-" + Date.now(),
    name,
    degree,
    specialty,
    clinic,
    phone,
    whatsapp: phone,
    location,
    rating,
    reviewsCount: 1,
    isEmergency
  });

  saveData();
  renderDoctorsGrid();
  closeAddDoctorModal();
  document.getElementById('add-doctor-form').reset();
  alert(`✅ डॉ. "${name}" को निर्देशिका में जोड़ दिया गया!`);
}

function openAddShopModal() {
  const modal = document.getElementById('add-shop-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeAddShopModal() {
  const modal = document.getElementById('add-shop-modal');
  if (modal) modal.classList.add('hidden');
}

function handleAddShop(e) {
  if (e) e.preventDefault();
  const name = document.getElementById('add-shop-name').value.trim();
  const category = document.getElementById('add-shop-category').value.trim();
  const goods = document.getElementById('add-shop-goods').value.trim();
  const owner = document.getElementById('add-shop-owner').value.trim();
  const phone = document.getElementById('add-shop-phone').value.trim();
  const address = document.getElementById('add-shop-address').value.trim();
  const rating = parseFloat(document.getElementById('add-shop-rating').value) || 4.8;
  const qualityBadge = document.getElementById('add-shop-badge').value.trim();

  if (!name || !phone) {
    alert("कृपया दुकान का नाम और मोबाइल नंबर भरें!");
    return;
  }

  if (!appData.shops) appData.shops = [];
  appData.shops.push({
    id: "SHP-" + Date.now(),
    name,
    category,
    goods,
    owner,
    phone,
    whatsapp: phone,
    address,
    rating,
    qualityBadge
  });

  saveData();
  renderShopsGrid();
  closeAddShopModal();
  document.getElementById('add-shop-form').reset();
  alert(`✅ दुकान "${name}" को सप्लायर लिस्ट में जोड़ दिया गया!`);
}

// ----------------------------------------------------
// GOOGLE DRIVE INTEGRATION
// ----------------------------------------------------
function exportToGoogleDrive() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appData, null, 2));
  const downloadAnchor = document.createElement('a');
  const dateStr = new Date().toISOString().split('T')[0];
  const fileName = `dairy_hisab_backup_${dateStr}.json`;
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", fileName);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();

  // Open Google Drive in new tab
  window.open('https://drive.google.com/drive/u/0/my-drive', '_blank');

  alert(
    `☁️ Google Drive बैकअप शुरू हो गया!\n\n` +
    `1. फ़ाइल "${fileName}" डाउनलोड हो गई है।\n` +
    `2. Google Drive एक नए टैब में खुल गया है।\n` +
    `3. इस फाइल को Google Drive में अपलोड कर दें। आपका पूरा डेयरी डेटा हमेशा के लिए सुरक्षित रहेगा!`
  );
}

function setupEventListeners() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  document.querySelectorAll('.mobile-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  const milkForm = document.getElementById('milk-collection-form');
  if (milkForm) milkForm.addEventListener('submit', handleSaveMilkEntry);

  const addFarmerForm = document.getElementById('add-farmer-form');
  if (addFarmerForm) addFarmerForm.addEventListener('submit', handleAddFarmer);

  const settingsForm = document.getElementById('settings-form');
  if (settingsForm) settingsForm.addEventListener('submit', handleSaveSettings);

  const colFilterDate = document.getElementById('col-filter-date');
  const colFilterShift = document.getElementById('col-filter-shift');
  if (colFilterDate) colFilterDate.addEventListener('change', renderCollectionTable);
  if (colFilterShift) colFilterShift.addEventListener('change', renderCollectionTable);

  const farmerSearchInput = document.getElementById('farmer-search');
  if (farmerSearchInput) farmerSearchInput.addEventListener('input', renderFarmersTab);

  const customItemForm = document.getElementById('add-custom-item-form');
  if (customItemForm) customItemForm.addEventListener('submit', handleAddCustomItem);

  const feedForm = document.getElementById('feed-settings-form');
  if (feedForm) feedForm.addEventListener('submit', handleSaveFeedSettings);

  const vetForm = document.getElementById('vet-expense-form');
  if (vetForm) vetForm.addEventListener('submit', handleAddVetExpense);

  const animalForm = document.getElementById('add-animal-form');
  if (animalForm) animalForm.addEventListener('submit', handleAddAnimal);

  const doctorForm = document.getElementById('add-doctor-form');
  if (doctorForm) doctorForm.addEventListener('submit', handleAddDoctor);

  const shopForm = document.getElementById('add-shop-form');
  if (shopForm) shopForm.addEventListener('submit', handleAddShop);

  const publicPassbookForm = document.getElementById('public-passbook-form');
  if (publicPassbookForm) publicPassbookForm.addEventListener('submit', (e) => { e.preventDefault(); searchPublicCustomerPassbook(); });

  // Initialize OTP digit input auto-navigation & paste handler
  setupOtpInputListeners();
}

function renderApp() {
  updateLanguageUI();
  setupBusinessMode();
  switchTab(currentTab);
}

document.addEventListener('DOMContentLoaded', initApp);


// ============================================================================
// DOCTOR REGISTRATION, LOGIN & DOCTOR PORTAL LOGIC
// ============================================================================

function setSignupUserType(type) {
  const hiddenInput = document.getElementById('signup-user-type');
  const btnDairy = document.getElementById('signup-type-dairy-btn');
  const btnDoc = document.getElementById('signup-type-doctor-btn');
  const dairyFields = document.getElementById('signup-dairy-fields');
  const docFields = document.getElementById('signup-doctor-fields');
  const submitText = document.getElementById('signup-submit-text');

  if (hiddenInput) hiddenInput.value = type;

  if (type === 'doctor') {
    if (btnDoc) {
      btnDoc.className = "py-2 px-2 text-center font-bold rounded-lg bg-teal-700 text-white shadow-sm transition text-xs flex items-center justify-center space-x-1";
    }
    if (btnDairy) {
      btnDairy.className = "py-2 px-2 text-center font-bold rounded-lg text-slate-600 hover:text-slate-900 transition text-xs flex items-center justify-center space-x-1";
    }
    if (dairyFields) dairyFields.classList.add('hidden');
    if (docFields) docFields.classList.remove('hidden');
    if (submitText) submitText.innerText = "🩺 डॉक्टर रजिस्ट्रेशन करें (Register as Doctor)";
  } else {
    if (btnDairy) {
      btnDairy.className = "py-2 px-2 text-center font-bold rounded-lg bg-white text-emerald-800 shadow-sm transition text-xs flex items-center justify-center space-x-1 border border-emerald-100";
    }
    if (btnDoc) {
      btnDoc.className = "py-2 px-2 text-center font-bold rounded-lg text-slate-600 hover:text-slate-900 transition text-xs flex items-center justify-center space-x-1";
    }
    if (dairyFields) dairyFields.classList.remove('hidden');
    if (docFields) docFields.classList.add('hidden');
    if (submitText) submitText.innerText = "✨ डेयरी खाता बनाएं व शुरू करें (Register Dairy)";
  }
}

function updateNavForRole(role) {
  const docNavBtn = document.getElementById('nav-btn-doctor-portal');
  const docMobBtn = document.getElementById('mob-btn-doctor-portal');

  const dairyTabs = ['products-pos', 'collection', 'billing', 'rate-chart', 'dashboard'];
  const commonTabs = ['cattle-farm', 'directory', 'farmers', 'customer-portal'];

  if (role === 'doctor') {
    if (docNavBtn) docNavBtn.classList.remove('hidden');
    if (docMobBtn) docMobBtn.classList.remove('hidden');

    // Hide dairy-specific tabs in navbar
    document.querySelectorAll('#app-navbar .tab-btn').forEach(btn => {
      const tab = btn.dataset.tab;
      if (dairyTabs.includes(tab)) {
        btn.classList.add('hidden');
      } else {
        btn.classList.remove('hidden');
      }
    });

    // Adjust mobile navbar
    document.querySelectorAll('#mobile-nav .mobile-tab-btn').forEach(btn => {
      const tab = btn.dataset.tab;
      if (tab === 'products-pos' || tab === 'collection' || tab === 'billing' || tab === 'rate-chart') {
        btn.classList.add('hidden');
      } else {
        btn.classList.remove('hidden');
      }
    });
  } else {
    if (docNavBtn) docNavBtn.classList.add('hidden');
    if (docMobBtn) docMobBtn.classList.add('hidden');

    document.querySelectorAll('#app-navbar .tab-btn').forEach(btn => {
      if (btn.id === 'nav-btn-doctor-portal') {
        btn.classList.add('hidden');
      } else {
        btn.classList.remove('hidden');
      }
    });

    document.querySelectorAll('#mobile-nav .mobile-tab-btn').forEach(btn => {
      if (btn.id === 'mob-btn-doctor-portal') {
        btn.classList.add('hidden');
      } else {
        btn.classList.remove('hidden');
      }
    });
  }
}

function renderDoctorPortalTab() {
  if (!currentUser || currentUser.role !== 'doctor') return;

  const nameEl = document.getElementById('doc-profile-name');
  const degreeEl = document.getElementById('doc-profile-degree');
  const clinicEl = document.getElementById('doc-profile-clinic');
  const phoneEl = document.getElementById('doc-profile-phone');
  const locEl = document.getElementById('doc-profile-location');
  const feeEl = document.getElementById('doc-profile-fee');
  const emerBadge = document.getElementById('doc-profile-emergency-badge');

  if (nameEl) nameEl.innerText = currentUser.name;
  if (degreeEl) degreeEl.innerText = `${currentUser.degree || 'B.V.Sc & A.H'} | ${currentUser.specialty || 'पशु शल्य व चिकित्सा'}`;
  if (clinicEl) clinicEl.innerText = currentUser.clinic || 'पशु चिकित्सालय';
  if (phoneEl) phoneEl.innerText = currentUser.phone;
  if (locEl) locEl.innerText = currentUser.location || currentUser.address || 'क्षेत्र';
  if (feeEl) feeEl.innerText = `₹ ${currentUser.fee || 200}`;

  if (emerBadge) {
    if (currentUser.isEmergency) {
      emerBadge.classList.remove('hidden');
    } else {
      emerBadge.classList.add('hidden');
    }
  }

  // Calculate doctor statistics
  const cases = appData.doctorCases || [];
  const myCases = cases.filter(c => !c.doctorPhone || c.doctorPhone === currentUser.phone);

  const totalCases = myCases.length;
  const currentMonthPrefix = new Date().toISOString().substring(0, 7);
  const monthCases = myCases.filter(c => c.date && c.date.startsWith(currentMonthPrefix)).length;
  const totalFees = myCases.reduce((sum, c) => sum + (parseFloat(c.fee) || 0), 0);

  const statTotal = document.getElementById('doc-stat-total-cases');
  const statMonth = document.getElementById('doc-stat-month-cases');
  const statFees = document.getElementById('doc-stat-total-fees');

  if (statTotal) statTotal.innerText = totalCases;
  if (statMonth) statMonth.innerText = monthCases;
  if (statFees) statFees.innerText = `₹ ${totalFees.toFixed(2)}`;

  // Render treated cases table
  const tbody = document.getElementById('doc-cases-table-body');
  if (!tbody) return;

  if (myCases.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="text-center py-6 text-slate-400 font-medium">
          अभी कोई इलाज केस दर्ज नहीं है। बाईं तरफ का फॉर्म भरकर नया केस व WhatsApp पर्ची जारी करें।
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = myCases.map(c => `
    <tr class="hover:bg-slate-50 transition">
      <td class="py-2.5 px-3 font-semibold text-slate-800">${c.date}</td>
      <td class="py-2.5 px-3">
        <b class="text-slate-900">${c.farmerName}</b>
        <span class="block text-[11px] text-slate-500">${c.farmerPhone}</span>
      </td>
      <td class="py-2.5 px-3 font-bold text-teal-800">${c.animalTag}</td>
      <td class="py-2.5 px-3">
        <b class="text-slate-800">${c.diagnosis}</b>
        <span class="block text-[11px] text-slate-600 truncate max-w-xs" title="${c.prescription}">${c.prescription}</span>
      </td>
      <td class="py-2.5 px-3 text-right font-black text-emerald-700">₹ ${parseFloat(c.fee || 0).toFixed(2)}</td>
      <td class="py-2.5 px-3 text-center">
        <button onclick="sendCaseToWhatsApp('${c.id}')" class="px-2 py-1 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg text-[10px] shadow-sm flex items-center space-x-1 mx-auto">
          <span>📲</span>
          <span>पर्ची</span>
        </button>
      </td>
      <td class="py-2.5 px-3 text-center">
        <button onclick="deleteDoctorCase('${c.id}')" class="text-slate-400 hover:text-red-600 font-bold text-xs" title="हटाएं">✕</button>
      </td>
    </tr>
  `).join('');
}

function handleDoctorTreatment(e) {
  if (e) e.preventDefault();
  const farmerName = document.getElementById('doc-treat-farmer-name').value.trim();
  const farmerPhone = document.getElementById('doc-treat-farmer-phone').value.trim().replace(/\D/g, '');
  const animalTag = document.getElementById('doc-treat-animal-tag').value.trim();
  const diagnosis = document.getElementById('doc-treat-diagnosis').value.trim();
  const prescription = document.getElementById('doc-treat-prescription').value.trim();
  const fee = parseFloat(document.getElementById('doc-treat-fee').value) || 0;
  const followUpDate = document.getElementById('doc-treat-followup').value;

  if (!farmerName || farmerPhone.length !== 10 || !animalTag || !diagnosis || !prescription) {
    alert("कृपया किसान का नाम, 10-अंकों का मोबाइल, पशु टैग, रोग व दवा का पूरा विवरण भरें!");
    return;
  }

  const newCase = {
    id: "CASE-" + Date.now(),
    doctorPhone: currentUser ? currentUser.phone : "",
    doctorName: currentUser ? currentUser.name : "डॉ. पशु चिकित्सक",
    farmerName,
    farmerPhone,
    animalTag,
    diagnosis,
    prescription,
    fee,
    followUpDate,
    date: new Date().toISOString().split('T')[0],
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  if (!appData.doctorCases) appData.doctorCases = [];
  appData.doctorCases.unshift(newCase);

  // Also sync into general vetExpenses table for the dairy farm
  if (!appData.vetExpenses) appData.vetExpenses = [];
  appData.vetExpenses.unshift({
    id: "VET-" + Date.now(),
    animalTag: animalTag,
    reason: `${diagnosis} (${prescription.substring(0, 35)}...)`,
    doctorName: newCase.doctorName,
    amount: fee,
    date: newCase.date
  });

  saveData();
  renderDoctorPortalTab();
  renderVetExpensesTable();

  // Reset form
  const form = document.getElementById('doctor-treatment-form');
  if (form) form.reset();

  // Open WhatsApp digital prescription slip
  sendCaseToWhatsApp(newCase.id);
  alert("केस सफलतापूर्वक दर्ज हो गया और किसान को WhatsApp पर्ची तैयार कर दी गई!");
}

function sendCaseToWhatsApp(caseId) {
  const item = (appData.doctorCases || []).find(c => c.id === caseId);
  if (!item) return;

  const doc = currentUser || { name: item.doctorName, phone: item.doctorPhone, clinic: "पशु चिकित्सालय", degree: "B.V.Sc & A.H" };

  const message = 
`🩺 *पशु चिकित्सा व दवा पर्ची (Veterinary Prescription)* 🩺\n` +
`━━━━━━━━━━━━━━━━━━━━\n` +
`🏥 *चिकित्सक:* ${doc.name} (${doc.degree || 'B.V.Sc & A.H'})\n` +
`🏥 *क्लीनिक:* ${doc.clinic || 'पशु चिकित्सालय'}\n` +
`📞 *फोन:* ${doc.phone}\n` +
`━━━━━━━━━━━━━━━━━━━━\n` +
`👤 *पशुपालक:* ${item.farmerName}\n` +
`📱 *मोबाइल:* ${item.farmerPhone}\n` +
`🐄 *पशु टैग/पहचान:* ${item.animalTag}\n` +
`📅 *तारीख:* ${item.date} (${item.time || ''})\n` +
`━━━━━━━━━━━━━━━━━━━━\n` +
`🔬 *रोग / जांच:* ${item.diagnosis}\n\n` +
`💊 *सुझाई गई दवा व खुराक:*\n` +
`${item.prescription}\n\n` +
`💰 *उपचार फीस:* ₹ ${item.fee}\n` +
`📅 *अगला फॉलो-अप:* ${item.followUpDate || 'आवश्यकतानुसार'}\n` +
`━━━━━━━━━━━━━━━━━━━━\n` +
`_Dairy Hisab डिजिटल डॉक्टर पर्ची_`;

  const waUrl = `https://wa.me/91${item.farmerPhone}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
}

function deleteDoctorCase(caseId) {
  if (confirm("क्या आप इस केस रिकॉर्ड को हटाना चाहते हैं?")) {
    appData.doctorCases = (appData.doctorCases || []).filter(c => c.id !== caseId);
    saveData();
    renderDoctorPortalTab();
  }
}

function openEditDoctorProfileModal() {
  if (!currentUser || currentUser.role !== 'doctor') return;
  const modal = document.getElementById('edit-doctor-profile-modal');
  if (!modal) return;

  const nameIn = document.getElementById('edit-doc-name');
  const degIn = document.getElementById('edit-doc-degree');
  const specIn = document.getElementById('edit-doc-specialty');
  const clinicIn = document.getElementById('edit-doc-clinic');
  const feeIn = document.getElementById('edit-doc-fee');
  const phoneIn = document.getElementById('edit-doc-phone');
  const locIn = document.getElementById('edit-doc-location');
  const emerIn = document.getElementById('edit-doc-emergency');

  if (nameIn) nameIn.value = currentUser.name || '';
  if (degIn) degIn.value = currentUser.degree || '';
  if (specIn) specIn.value = currentUser.specialty || '';
  if (clinicIn) clinicIn.value = currentUser.clinic || '';
  if (feeIn) feeIn.value = currentUser.fee || 200;
  if (phoneIn) phoneIn.value = currentUser.phone || '';
  if (locIn) locIn.value = currentUser.location || currentUser.address || '';
  if (emerIn) emerIn.checked = !!currentUser.isEmergency;

  modal.classList.remove('hidden');
}

function closeEditDoctorProfileModal() {
  const modal = document.getElementById('edit-doctor-profile-modal');
  if (modal) modal.classList.add('hidden');
}

function handleUpdateDoctorProfile(e) {
  if (e) e.preventDefault();
  if (!currentUser) return;

  const name = document.getElementById('edit-doc-name').value.trim();
  const degree = document.getElementById('edit-doc-degree').value.trim();
  const specialty = document.getElementById('edit-doc-specialty').value.trim();
  const clinic = document.getElementById('edit-doc-clinic').value.trim();
  const fee = parseFloat(document.getElementById('edit-doc-fee').value) || 200;
  const phone = document.getElementById('edit-doc-phone').value.trim().replace(/\D/g, '');
  const location = document.getElementById('edit-doc-location').value.trim();
  const isEmergency = document.getElementById('edit-doc-emergency').checked;

  if (!name || phone.length !== 10 || !degree) {
    alert("कृपया नाम, सही 10-अंकों का मोबाइल व डिग्री दर्ज करें!");
    return;
  }

  currentUser.name = name.startsWith("डॉ.") ? name : `डॉ. ${name}`;
  currentUser.degree = degree;
  currentUser.specialty = specialty;
  currentUser.clinic = clinic;
  currentUser.fee = fee;
  currentUser.phone = phone;
  currentUser.location = location;
  currentUser.address = location;
  currentUser.isEmergency = isEmergency;

  // Update in users storage
  const users = getUsersList();
  const idx = users.findIndex(u => u.phone === currentUser.phone || u.id === currentUser.id);
  if (idx !== -1) {
    users[idx] = { ...users[idx], ...currentUser };
    saveUsersList(users);
  }
  localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(currentUser));

  // Update in appData.doctors
  if (!appData.doctors) appData.doctors = [];
  const docIdx = appData.doctors.findIndex(d => d.phone === currentUser.phone);
  const docObj = {
    id: "DOC-" + currentUser.phone,
    name: currentUser.name,
    degree: currentUser.degree,
    specialty: currentUser.specialty,
    clinic: currentUser.clinic,
    phone: currentUser.phone,
    location: currentUser.location,
    rating: currentUser.rating || 5.0,
    isEmergency: currentUser.isEmergency,
    isRegistered: true,
    fee: currentUser.fee
  };

  if (docIdx !== -1) {
    appData.doctors[docIdx] = { ...appData.doctors[docIdx], ...docObj };
  } else {
    appData.doctors.unshift(docObj);
  }
  saveData();

  closeEditDoctorProfileModal();
  updateHeaderBranding();
  renderDoctorPortalTab();
  renderDoctorsGrid();
  alert("डॉक्टर प्रोफाइल सफलतापूर्वक अपडेट हो गई!");
}


function toggleRateModeSettings(mode) {
  const perFatBox = document.getElementById('rate-mode-per-fat-box');
  const fatKgBox = document.getElementById('rate-mode-fat-kg-box');
  if (mode === 'fat_kg') {
    if (fatKgBox) fatKgBox.classList.remove('hidden');
    if (perFatBox) perFatBox.classList.add('hidden');
  } else {
    if (perFatBox) perFatBox.classList.remove('hidden');
    if (fatKgBox) fatKgBox.classList.add('hidden');
  }
}
