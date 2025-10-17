import { StyleSheet, Platform } from 'react-native';

// =========================================================
// DESIGN TOKENS (The single source of truth for the design)
// =========================================================
const COLOR = {
    PRIMARY: '#A37F5E', SECONDARY: '#E1C2A3', ACCENT_GOLD: '#FFD700',
    BG_DARK: '#2C231E', SURFACE_CARD: '#3A3029',
    TEXT_ON_DARK: '#F4EFE6', TEXT_MUTED: '#B5A698', TEXT_ON_LIGHT: '#1E1611',
    ERROR: '#D32F2F',
};
const SPACING = { XS: 4, S: 8, M: 16, L: 24, XL: 32, XXL: 40, };
const BORDER = { RADIUS_S: 8, RADIUS_L: 16, WIDTH: 1, WIDTH_FOCUS: 2, };

// =========================================================
// SHADOWS & PLATFORM EFFECTS
// =========================================================
const SHADOW = {
    CARD_SOFT_DEPTH: {
        ...Platform.select({
            ios: { shadowColor: COLOR.BG_DARK, shadowOffset: { width: 5, height: 5 }, shadowOpacity: 1, shadowRadius: 10, },
            android: { elevation: 10, },
        }),
    },
    BUTTON_LIFT_PRIMARY: {
        ...Platform.select({
            ios: { shadowColor: COLOR.PRIMARY, shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.6, shadowRadius: 10, },
            android: { elevation: 8, },
        }),
    },
};

// =========================================================
// TYPOGRAPHY BASE 
// =========================================================
const FONT = {
    H1: { fontSize: 28, fontWeight: '800', letterSpacing: 1.5, textTransform: 'uppercase', },
    BODY_STRONG: { fontSize: 16, fontWeight: '700', lineHeight: 22, },
    BODY: { fontSize: 16, lineHeight: 26, },
    LABEL: { fontSize: 15, fontWeight: '700', },
};

// =========================================================
// ABSTRACT BASE STYLES
// =========================================================
const _cardBase = {
    backgroundColor: COLOR.SURFACE_CARD,
    borderRadius: BORDER.RADIUS_L,
    borderWidth: BORDER.WIDTH,
    borderColor: COLOR.SECONDARY,
    width: '100%',
    maxWidth: 420,
    ...SHADOW.CARD_SOFT_DEPTH, 
};

const _buttonBase = {
    paddingVertical: SPACING.M,
    borderRadius: BORDER.RADIUS_S,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // This will be overridden by flex: 1 in the specific styles
    borderTopWidth: BORDER.WIDTH_FOCUS / 2, 
    borderTopColor: 'rgba(255,255,255,0.15)',
};

// =========================================================
// EXPORTS 
// =========================================================
export const Tokens = { COLOR, SPACING, BORDER, };

const styles = StyleSheet.create({
    // --- LAYOUT & CONTAINERS ---
    mainContainer: { flex: 1, backgroundColor: COLOR.BG_DARK, paddingHorizontal: SPACING.L, paddingTop: SPACING.XXL, paddingBottom: SPACING.XXL, justifyContent: 'center', alignItems: 'center', },
    screenContainer: { flex: 1, backgroundColor: COLOR.BG_DARK, },
    contentWrapperCenter: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: SPACING.XXL, },
    maxWidthContainer: { width: '100%', maxWidth: 420, },
    
    // --- TYPOGRAPHY ---
    title: { ...FONT.H1, color: COLOR.TEXT_ON_DARK, textAlign: 'center', marginBottom: SPACING.L, },
    homepageText: { ...FONT.BODY, color: COLOR.TEXT_MUTED, textAlign: 'center', marginBottom: SPACING.XL, },
    
    // --- CARD STYLES ---
    formCard: { ..._cardBase, padding: SPACING.L, marginBottom: SPACING.L, },
    reviewCard: { ..._cardBase, padding: SPACING.L, marginBottom: SPACING.L, },
    userCard: { ..._cardBase, padding: SPACING.M, marginBottom: SPACING.M, },
    
    // --- TEXT FIELDS & LABELS ---
    inputContainer: { marginBottom: SPACING.M, },
    label: { ...FONT.LABEL, color: COLOR.TEXT_MUTED, marginBottom: SPACING.S, },
    input: { height: 48, borderWidth: BORDER.WIDTH, borderColor: 'rgba(225, 194, 163, 0.3)', borderRadius: BORDER.RADIUS_S, paddingHorizontal: SPACING.M, ...FONT.BODY, backgroundColor: COLOR.BG_DARK, color: COLOR.TEXT_ON_DARK, },
    focusedInput: { borderColor: COLOR.PRIMARY, borderWidth: BORDER.WIDTH_FOCUS, },
    
    // --- CUSTOM BUTTONS (for TouchableOpacity) ---
    button: { ..._buttonBase, backgroundColor: COLOR.PRIMARY, borderRadius: BORDER.RADIUS_L, marginTop: SPACING.L, ...SHADOW.BUTTON_LIFT_PRIMARY, },
    submitButton: { ..._buttonBase, backgroundColor: COLOR.PRIMARY, ...SHADOW.BUTTON_LIFT_PRIMARY, },
    editButton: { ..._buttonBase, backgroundColor: COLOR.PRIMARY, flex: 1, marginRight: SPACING.S, ...SHADOW.BUTTON_LIFT_PRIMARY, },
    deleteButton: { ..._buttonBase, backgroundColor: COLOR.ERROR, flex: 1, marginLeft: SPACING.S, ...SHADOW.BUTTON_LIFT_PRIMARY, },
    
    // --- CUSTOM BUTTON TEXT ---
    buttonText: { color: COLOR.SURFACE_CARD, fontSize: 16, fontWeight: '700', textTransform: 'uppercase', },
    submitButtonText: { color: COLOR.SURFACE_CARD, fontSize: 17, fontWeight: 'bold', },
    secondaryButtonText: { color: COLOR.SURFACE_CARD, fontSize: 17, fontWeight: 'bold', letterSpacing: 0.5, },
    
    // --- DATA DISPLAY ---
    dataRow: { flexDirection: 'row', marginBottom: SPACING.M, alignItems: 'flex-start', },
    dataLabel: { ...FONT.BODY_STRONG, color: COLOR.TEXT_MUTED, marginRight: SPACING.S, minWidth: 90, },
    dataValue: { ...FONT.BODY_STRONG, color: COLOR.TEXT_ON_DARK, flexShrink: 1, },
    
    // --- BUTTON CONTAINERS ---
    buttonsContainer: { marginTop: SPACING.L, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', },
    listButtonRow: { marginTop: SPACING.M, width: '100%', flexDirection: 'row', }, // This is the correct container for the buttons
    submitButtonWrapper: { flex: 1, marginLeft: SPACING.S, },
    
    // --- UTILITIES ---
    loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: SPACING.XXL, },
    
    // =========================================================
    // 👇 STYLES FOR UserListPage.js
    // =========================================================
    container: {
        flex: 1,
        backgroundColor: COLOR.BG_DARK,
        paddingHorizontal: SPACING.M,
        paddingTop: SPACING.XL,
    },
    card: {
        ..._cardBase,
        padding: SPACING.M,
        marginBottom: SPACING.M,
        alignSelf: 'center',
    },
    listItemText: {
        ...FONT.BODY_STRONG, color: COLOR.TEXT_MUTED, marginRight: SPACING.S, minWidth: 90, 
    },
    // The complex "listButtonContainer" has been removed as it is no longer needed.
});

export default styles;