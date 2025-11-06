# RMC Rate Calculator - Design Guidelines

## Design Approach
**System-Based Approach**: Enterprise-grade calculator inspired by Carbon Design and industrial dashboards. Professional, data-focused interface optimized for construction industry users requiring accuracy and efficiency.

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, and 8 consistently (p-4, gap-6, h-8, m-2)

**Container Strategy**:
- Main calculator: max-w-6xl centered with px-4 md:px-8 
- Form sections: Grid layout - 2 columns on desktop (grid-cols-1 md:grid-cols-2), single column mobile
- Results panel: Full-width card with internal padding of p-6
- Header: Full-width with max-w-7xl inner container

**Page Structure**:
- Header with Procon logo (left-aligned), company name, and navigation
- Hero section: Compact banner (h-32 md:h-40) with company logo and tagline - NO background image needed
- Two-tab interface: "Standard Mix Designs" and "Custom Calculator"
- Standard tab: Searchable data table showing all grades
- Custom tab: Split layout - left side inputs, right side live calculation results
- Footer: Minimal with company info and contact

## Typography

**Font Family**: Inter or Roboto from Google Fonts CDN

**Hierarchy**:
- Page title: text-3xl md:text-4xl font-bold
- Section headers: text-xl md:text-2xl font-semibold  
- Card titles: text-lg font-medium
- Labels: text-sm font-medium uppercase tracking-wide
- Input text: text-base
- Table headers: text-sm font-semibold
- Body/results: text-base
- Small print/units: text-sm

## Component Library

**Forms**:
- Select dropdowns: Full-width with border, rounded-lg, p-3, clear focus states
- Number inputs: Grouped with label + input + unit indicator
- Toggle switch: For GGBS yes/no selection
- Input groups: Label stacked above input, gap-2 between elements

**Data Display**:
- Pricing table: Striped rows, sticky header, bordered cells
- Results card: Elevated appearance with shadow-md, rounded-lg borders
- Calculation breakdown: Line items with label-value pairs, bold totals with separator line
- Comparison view: Side-by-side cards showing standard vs custom rates

**Navigation**:
- Tab switcher: Horizontal tabs with underline indicator for active state
- Minimal top navigation with logo placement

**Cards**: 
- Standard elevation: shadow-md with border, rounded-lg
- Inner padding: p-6
- Header sections within cards: border-b with pb-4 mb-4

**Buttons**:
- Primary action: Solid fill, rounded-lg, px-6 py-3, font-medium
- Secondary: Outline style with border-2
- Icon buttons: Square aspect ratio, p-2, for table actions

**Tables**:
- Sticky header row with stronger visual weight
- Alternating row background for readability
- Right-align numerical columns
- Compact cell padding: px-4 py-3
- Border-collapse with subtle borders

## Interactions

**Real-time Calculations**: 
- Results update immediately on input change
- Smooth transitions for value changes (duration-200)
- Loading states for calculations (minimal spinner)

**Form Validation**:
- Inline error messages below inputs in small text
- Input border state changes for errors
- Clear success indicators for valid calculations

**Responsive Behavior**:
- Mobile: Stack all columns vertically
- Tablet: 2-column grid where appropriate  
- Desktop: Full multi-column layout with side-by-side panels

## Key Design Principles

1. **Data Clarity**: Numerical values prominently displayed with clear units
2. **Professional Aesthetics**: Clean, industrial look appropriate for construction sector
3. **Efficiency**: Minimal clicks to complete calculations
4. **Scannable Tables**: Easy comparison of multiple mix designs
5. **Brand Presence**: Procon logo prominent but not overwhelming

## Images
No hero image required. Use the Procon logo (yellow and black) in header and compact hero banner only.