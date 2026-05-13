# Application Architecture

## Tech Stack
- **Frontend:** Vanilla HTML5, CSS3.
- **Logic:** Vanilla JavaScript (ES6+).
- **Deployment:** GitHub Pages.

## Core Logic: The Audit Engine
The application uses a centralized logic function in `script.js` to process user inputs. 
1. **Data Normalization:** Takes raw inputs (Team Size and Total Spend).
2. **Comparison Logic:** Compares the user's "Spend per Seat" against industry standard benchmarks ($20/month for Individual Pro plans).
3. **Savings Calculation:** Identifies the "leakage" (overpayment) and suggests consolidation or seat optimization.

## Key Decisions
- **No Frameworks:** I chose Vanilla JS to minimize load times and avoid unnecessary dependencies, ensuring the tool remains high-performance.
- **Responsive Design:** Used CSS Flexbox to ensure the audit tool is usable on both mobile (for quick checks) and desktop (for deep analysis).
- **State Management:** The app handles state locally within the DOM to provide instant feedback without server-side latency.