# Fourier Analysis visual LaTeX audit — lane 05

- Scope: 44 assigned published items. All revision-2 full-page SSR/CSS screenshot tiles were opened at original resolution, including continuation tiles. All rendered sections, including proofs, were checked. No Scratch sections occur in this lane.
- Coverage: 34 visually clean items and 10 items with findings. The per-item ledger, screenshot paths, and checked headings are in lane-05.json.
- Diagram note: no TikZ diagrams appeared in the assigned SSR pages.
- This is a read-only rendering audit, not a mathematical review. No item content was edited.

## Findings

Confirmed malformed math/raw notation is listed separately from optional typography. Source lines and excerpts refer to the audit snapshots under snapshots/. Screenshot paths are relative to this audit directory.

### 1. cex-an-lone-function-with-nonzero-integral-is-not-in-real-hone — typography

- Page: real-hardy-spaces-maximal-functions-and-atoms-examples
- Section: Statement refuted; source line 31
- Source excerpt: Assume Countable Choice ([[def-countable-choice]]).
- Visual symptom: The linked display title breaks the sentence into three visual lines: the opening parenthesis remains after “Choice,” the link title occupies its own line, and the closing “).” drops to a third line. The mathematical text itself renders correctly.
- Screenshot evidence: screenshots/cex-an-lone-function-with-nonzero-integral-is-not-in-real-hone--01.png
- Suggested future repair: Move the linked reference to a following references paragraph or use a shorter inline label so the sentence does not break around a parenthetical title.

### 2. cex-linear-and-cyclic-convolution-are-not-the-same-without-zero-padding — typography

- Page: finite-fourier-analysis-and-the-fast-fourier-transform-examples
- Section: Statement refuted; source line 41
- Source excerpt: ... the cyclic convolution $f*g$ of [[def-cyclic-convolution-on-z-mod-n]] has the **linear convolution values** ...
- Visual symptom: The full linked item title is inserted into the middle of the statement and wraps to a separate line between “of” and “has”; formula glyphs around it render correctly.
- Screenshot evidence: screenshots/cex-linear-and-cyclic-convolution-are-not-the-same-without-zero-padding--01.png
- Suggested future repair: Move the definition link to a following references paragraph or use a short in-sentence label.

### 3. cor-hilbert-transform-is-bounded-on-lp — confirmed

- Page: calderon-zygmund-decomposition-and-singular-integrals
- Section: Title; source line 6
- Source excerpt: title: "The Hilbert transform is bounded on Lp"
- Visual symptom: The title displays “Lp” as ordinary baseline text, with no superscript p.
- Screenshot evidence: screenshots/cor-hilbert-transform-is-bounded-on-lp--01.png
- Suggested future repair: Write the title notation as $L^p$ so the exponent renders as mathematics.

### 4. cor-piecewise-c-one-fourier-series-converges-to-midpoint-values — confirmed

- Page: dirichlet-kernel-localisation-and-pointwise-fourier-convergence
- Section: Title; source line 4
- Source excerpt: title: "Piecewise C^1 Fourier series converges to midpoint values"
- Visual symptom: The title displays the caret sequence “C^1” literally instead of a superscript 1.
- Screenshot evidence: screenshots/cor-piecewise-c-one-fourier-series-converges-to-midpoint-values--01.png
- Suggested future repair: Write the title notation as $C^1$.

### 5. ex-john-nirenberg-tail-integration — confirmed

- Page: bmo-john-nirenberg-and-h1-duality-examples
- Section: Title; source line 4
- Source excerpt: title: "Integrating the John-Nirenberg tail recovers the Lq oscillation bound"
- Visual symptom: The title displays “Lq” as ordinary baseline text, with no superscript q.
- Screenshot evidence: screenshots/ex-john-nirenberg-tail-integration--01.png
- Suggested future repair: Write the title notation as $L^q$.

### 6. lem-a-p-dual-weight-and-nesting-properties — confirmed

- Page: muckenhoupt-weights-and-weighted-estimates
- Section: Title; source line 4
- Source excerpt: title: Duality and nesting of the A_p classes
- Visual symptom: The title displays “A_p” literally, including the underscore, instead of a subscript p.
- Screenshot evidence: screenshots/lem-a-p-dual-weight-and-nesting-properties--01.png
- Suggested future repair: Write the title notation as $A_p$.

### 7. lem-bessel-potentials-shift-sobolev-order-isometrically — confirmed

- Page: fourier-multipliers-and-sobolev-characterisations
- Section: Proof technique; source line 126
- Source excerpt: **Proof technique:** transport the two Fourier multipliers through the canonical identifications $H^\sigma\cong\mathcal W_\sigma$ and compare the resulting frequency weights.
- Visual symptom: The proof-technique line displays the inline-math delimiters and LaTeX commands literally (for example, `$H^\SIGMA\CONG\MATHCAL W_\SIGMA$`) instead of rendering the expression.
- Screenshot evidence: screenshots/lem-bessel-potentials-shift-sobolev-order-isometrically--02.png
- Suggested future repair: Use the renderer’s math-enabled field for this note or rewrite the identification in plain prose.

### 8. lem-stationary-phase-decay-for-spherical-surface-measure — confirmed

- Page: fourier-restriction-and-the-stein-tomas-theorem
- Section: Proof technique; source line 66
- Source excerpt: ... with the polar caps contributing the exponent $(n-1)/2$.
- Visual symptom: The proof-technique line displays the dollar delimiters around $(n-1)/2$ literally instead of formatting the exponent as math.
- Screenshot evidence: screenshots/lem-stationary-phase-decay-for-spherical-surface-measure--02.png
- Suggested future repair: Use a math-enabled renderer for the proof-technique line or write the exponent in plain prose.

### 9. lem-random-signed-dyadic-sums-have-uniform-mihlin-bounds — confirmed

- Page: littlewood-paley-theory-and-square-functions
- Section: Title; source line 4
- Source excerpt: title: "Random signed dyadic sums have uniform Mihlin and Lp multiplier bounds"
- Visual symptom: The title displays “Lp” as ordinary baseline text, with no superscript p.
- Screenshot evidence: screenshots/lem-random-signed-dyadic-sums-have-uniform-mihlin-bounds--01.png
- Suggested future repair: Write the title notation as $L^p$.

### 10. thm-bmo-defines-a-bounded-functional-on-hone — confirmed

- Page: bmo-john-nirenberg-and-h1-duality
- Section: Title; source line 4
- Source excerpt: title: "BMO classes define bounded functionals on H1"
- Visual symptom: The title displays “H1” as ordinary baseline text, with no superscript 1.
- Screenshot evidence: screenshots/thm-bmo-defines-a-bounded-functional-on-hone--01.png
- Suggested future repair: Write the title notation as $H^1$.
