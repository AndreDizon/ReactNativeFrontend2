import { StyleSheet, Platform } from 'react-native';

// =========================================================
// DESIGN TOKENS (The single source of truth for the design)
// =========================================================
const COLOR = {
    // Brand & Intent
    PRIMARY: '#A37F5E',             // Warm Caramel Brown (Main CTA, Focus)
    SECONDARY: '#E1C2A3',           // Foamy Cream (Secondary surface/border)
    ACCENT_GOLD: '#FFD700',         // Shimmering Gold (Keeping as an option, but not used on the button text here)
    
    // Backgrounds & Surfaces
    BG_DARK: '#2C231E',             // Deep Espresso Brown (Page Background)
    SURFACE_CARD: '#3A3029',        // Darker Coffee/Taupe (Card/Modal Surface)
    
    // Typography & Accessibility
    TEXT_ON_DARK: '#F4EFE6',        // Creamy Off-White (Primary text on dark BG)
    TEXT_MUTED: '#B5A698',          // Soft Muted Beige (Secondary/Helper text, Placeholder)
    TEXT_ON_LIGHT: '#1E1611',       // Near-Black (Dark text on light elements)
    
    // System Feedback
    ERROR: '#D32F2F',               // Standard Red
};

const SPACING = {
    XS: 4,
    S: 8,
    M: 16,
    L: 24,
    XL: 32,
    XXL: 40,
};

const BORDER = {
    RADIUS_S: 8,        
    RADIUS_L: 16,       
    WIDTH: 1,
    WIDTH_FOCUS: 2,     
};

// =========================================================
// SHADOWS & PLATFORM EFFECTS (Static properties only)
// =========================================================
const SHADOW = {
    // 1. Dual-Shadow for soft depth on dark cards (Neumorphism effect)
    CARD_SOFT_DEPTH: {
        ...Platform.select({
            ios: {
                shadowColor: COLOR.BG_DARK,
                shadowOffset: { width: 5, height: 5 },
                shadowOpacity: 1,
                shadowRadius: 10,
            },
            android: {
                elevation: 10,
            },
        }),
    },
    
    // 2. Button Glow/Lift (Used for all primary/formal buttons)
    BUTTON_LIFT_PRIMARY: {
        ...Platform.select({
            ios: {
                shadowColor: COLOR.PRIMARY, 
                shadowOffset: { width: 0, height: 6 }, 
                shadowOpacity: 0.6,
                shadowRadius: 10,
            },
            android: {
                elevation: 8, 
            },
        }),
    },
};

// =========================================================
// TYPOGRAPHY BASE 
// =========================================================
const FONT = {
    H1: {
        fontSize: 28, 
        fontWeight: '800', 
        letterSpacing: 1.5,
        textTransform: 'uppercase',
    },
    BODY_STRONG: {
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 22,
    },
    BODY: {
        fontSize: 16,
        lineHeight: 26,
    },
    LABEL: {
        fontSize: 15,
        fontWeight: '700',
    },
};

// =========================================================
// ABSTRACT BASE STYLES (DEFINED OUTSIDE OF StyleSheet.create)
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
    width: '100%',
    borderTopWidth: BORDER.WIDTH_FOCUS / 2, 
    borderTopColor: 'rgba(255,255,255,0.15)',
};

// =========================================================
// EXPORTS 
// =========================================================
export const Tokens = {
    COLOR,
    SPACING,
    BORDER,
};

// =========================================================
// STYLESHEET (CONCRETE STYLES)
// =========================================================
const styles = StyleSheet.create({
    // --- LAYOUT & CONTAINERS ---

    mainContainer: {
        flex: 1,
        backgroundColor: COLOR.BG_DARK,
        paddingHorizontal: SPACING.L,
        paddingTop: SPACING.XXL,
        paddingBottom: SPACING.XXL,
        justifyContent: 'center', 
        alignItems: 'center',    
    },

    screenContainer: {
        flex: 1,
        backgroundColor: COLOR.BG_DARK,
    },

    contentWrapperCenter: {
        flexGrow: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: SPACING.XXL,
    },

    maxWidthContainer: {
        width: '100%',
        maxWidth: 420,
    },
    
    // --- TYPOGRAPHY ---

    title: {
        ...FONT.H1,
        color: COLOR.TEXT_ON_DARK,
        textAlign: 'center',
        marginBottom: SPACING.L,
    },

    homepageText: { 
        ...FONT.BODY,
        color: COLOR.TEXT_MUTED,
        textAlign: 'center',
        marginBottom: SPACING.XL,
    },

    // --- CARD STYLES ---

    card: { 
        ..._cardBase, 
        padding: SPACING.L,
        marginBottom: SPACING.L,
    },
    formCard: { 
        ..._cardBase,
        padding: SPACING.L,
        marginBottom: SPACING.L,
    },
    reviewCard: { 
        ..._cardBase,
        padding: SPACING.L,
        marginBottom: SPACING.L,
    },
    userCard: { 
        ..._cardBase,
        padding: SPACING.M,
        marginBottom: SPACING.M,
    },


    // --- TEXT FIELDS & LABELS ---
    inputContainer: {
        marginBottom: SPACING.M,
    },

    label: {
        ...FONT.LABEL,
        color: COLOR.TEXT_MUTED,
        marginBottom: SPACING.S,
    },

    input: {
        height: 48,
        borderWidth: BORDER.WIDTH,
        borderColor: 'rgba(225, 194, 163, 0.3)', 
        borderRadius: BORDER.RADIUS_S,
        paddingHorizontal: SPACING.M,
        ...FONT.BODY,
        backgroundColor: COLOR.BG_DARK,
        color: COLOR.TEXT_ON_DARK,
    },
    
    focusedInput: {
        borderColor: COLOR.PRIMARY, 
        borderWidth: BORDER.WIDTH_FOCUS,
    },


    // --- BUTTONS ---

    button: { 
        ..._buttonBase,
        backgroundColor: COLOR.PRIMARY,
        borderRadius: BORDER.RADIUS_L, 
        marginTop: SPACING.L,
        ...SHADOW.BUTTON_LIFT_PRIMARY, 
    },

    submitButton: { 
        ..._buttonBase,
        backgroundColor: COLOR.PRIMARY,
        ...SHADOW.BUTTON_LIFT_PRIMARY, 
    },

    // 👇 MODIFIED for consistent, formal styling
    editButton: { 
        ..._buttonBase,
        backgroundColor: COLOR.PRIMARY, // Match Primary button color
        flex: 1, 
        marginRight: SPACING.S,
        ...SHADOW.BUTTON_LIFT_PRIMARY, // Match Primary button shadow
    },

    // Button Text Styles
    buttonText: { 
        color: COLOR.SURFACE_CARD,
        fontSize: 18,
        fontWeight: '700',
    },

    submitButtonText: { 
        color: COLOR.SURFACE_CARD,
        fontSize: 17,
        fontWeight: 'bold',
    },
    
    secondaryButtonText: { 
        // MODIFIED: Use the light color for text on the primary-themed button
        color: COLOR.SURFACE_CARD, 
        fontSize: 17,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
    
    // --- REVIEW / DATA DISPLAY SECTIONS ---

    dataRow: {
        flexDirection: 'row',
        marginBottom: SPACING.M,
        alignItems: 'flex-start',
    },

    dataLabel: {
        ...FONT.BODY_STRONG,
        color: COLOR.TEXT_MUTED,
        marginRight: SPACING.S,
        minWidth: 90, 
    },

    dataValue: {
        ...FONT.BODY,
        color: COLOR.TEXT_ON_DARK,
        flexShrink: 1,
    },
    
    // --- USER LIST (UserListPage.js) ---

    userListWrapper: {
        width: '100%',
        alignItems: 'center',
        paddingBottom: SPACING.L, 
    },

    userRow: {
        flexDirection: 'row',
        marginBottom: SPACING.S,
    },

    userLabel: {
        fontWeight: '600',
        color: COLOR.TEXT_MUTED,
        width: 90,
    },

    userValue: {
        color: COLOR.TEXT_ON_DARK,
        flexShrink: 1,
    },

    // --- BUTTON CONTAINER (ReviewPage.js) ---

    buttonsContainer: {
        marginTop: SPACING.L,
        width: '100%',
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    
    submitButtonWrapper: { 
        flex: 1, 
        marginLeft: SPACING.S,
    },

    // --- UTILITIES / FEEDBACK STATES ---

    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: SPACING.XXL,
    }
});

export default styles;