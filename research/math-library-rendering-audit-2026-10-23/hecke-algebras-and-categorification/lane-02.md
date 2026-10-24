# Hecke Algebras and Categorification — lane 02

## Scope and coverage

Reviewed all 23 items in `assignment-02.json`, including each frozen snapshot, its local HTML, the title, and the complete rendered ItemBody with its references. Opened each of the 55 assigned PNG tiles individually at original resolution. The per-item and per-tile record, with expected and observed hashes, is in [lane-02.json](lane-02.json).

All assigned source, snapshot, HTML, and screenshot hashes match the assignment and screenshot receipts. No hash drift or unreviewed tiles. All 23 capture receipts have zero KaTeX errors and zero TikZ render failures. No clipping was confirmed after checking consecutive original tiles. Inline reference-title links appear as intended; no reference-title leak was confirmed. No Scratch section or field appears in the assigned frozen snapshots.

| Item | Tiles | Visual status |
|---|---:|---|
| `cex-degenerate-q-ij-polynomials-destroy-the-faithful-basis-route` | 2 | clean |
| `cor-dj-bridge-specialization-and-composition-multiplicity-dictionary` | 3 | clean |
| `def-cellular-algebra-basis-and-cell-module` | 1 | clean |
| `def-graded-adjustment-polynomials-in-positive-characteristic` | 2 | clean |
| `def-minimal-parabolic-klr-diagram-proof-category` | 3 | clean |
| `def-type-a-affine-presentations-and-charged-cyclotomic-quotients` | 1 | clean |
| `ex-charge-reversal-and-fock-involution-in-a-small-example` | 3 | clean |
| `ex-murphy-cellular-basis-for-h3` | 2 | finding: raw title subscript |
| `lem-asymptotic-induction-identifies-leading-modular-simples` | 2 | clean |
| `lem-cyclotomic-hecke-bounded-ordered-monomials-span` | 3 | clean |
| `lem-cyclotomic-klr-word-traces-assemble-a-perfect-symmetric-form` | 3 | clean |
| `lem-degenerate-cyclotomic-hecke-center-is-the-symmetric-polynomial-image` | 3 | clean |
| `lem-extremal-word-characters-detect-normalized-cyclotomic-simple-labels` | 1 | finding: unparsed mathematical notation across body |
| `lem-hh-quantum-presentation-and-tensor-action-descent` | 2 | clean |
| `lem-klr-two-color-jump-formula-and-strict-elementary-embeddings` | 5 | clean |
| `lem-q-schur-central-hecke-jm-scalars-give-residue-separation` | 2 | clean |
| `lem-the-star-antiautomorphism-of-the-type-a-hecke-algebra` | 2 | clean |
| `prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one` | 2 | clean |
| `thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular` | 3 | clean |
| `thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module` | 3 | clean |
| `thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero` | 2 | clean |
| `thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations` | 3 | finding: raw math in technique banner |
| `thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis` | 2 | clean |

## Confirmed rendering defects

1. **Raw subscript in title.** `items/ex-murphy-cellular-basis-for-h3.md:4` titles the example “The Murphy cellular basis of H(S_3)”. The screenshot displays the underscore literally. Typeset it as `$H(S_3)$`. Evidence: `ex-murphy-cellular-basis-for-h3--01.png`.

2. **Statement and proof math are unparsed.** `items/lem-extremal-word-characters-detect-normalized-cyclotomic-simple-labels.md:27,39,41–42` contains mathematical notation as plain ASCII without math delimiters. The screenshot visibly prints notation such as `i_1^{r_1}...i_s^{r_s}`, `tilde f_{i_s}`, and `product_a [r_a]_{i_a}!` literally; the corresponding HTML has zero KaTeX nodes. Typeset the notation throughout the Statement, Facts, and Proof while preserving the formulas. Evidence: `lem-extremal-word-characters-detect-normalized-cyclotomic-simple-labels--01.png`.

3. **Raw LaTeX in technique banner.** `items/thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations.md:59` includes `$\gamma$` in the Proof technique text. The plain-text banner exposes the delimiters and command (uppercased by the banner styling). Replace that occurrence with plain “gamma” or remove the math delimiters in the banner. Evidence: `thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations--02.png`.

The all-caps technique-banner style itself and inline blue reference links are presentation choices, not defects.

## Diagram review

No assigned item contains TikZ markup or a rendered TikZ diagram; every receipt reports `tikz_count: 0` and `diagram_failures: []`. Thus there were no existing diagrams to validate. The following are **optional, source-supported candidates**, not confirmed rendering errors:

- **Minimal-parabolic KLR rank-one adjunction matrix** — `items/def-minimal-parabolic-klr-diagram-proof-category.md:57–75,89–105,108–140,158–214`. Kind: weighted oriented 2-category and rank-one matrix diagram. The prose specifies strand direction, region weights, cups/caps, and distinct `h ≥ 0` and `h < 0` decompositions, so an illustration could make source/target and grading conventions easier to verify. For the `h ≥ 0` panel, label outside weight `μ`, `P=G_iH_i`, `V=H_iG_i`, unit/counit maps `η_μ, ε_μ, η′_μ, ε′_μ`, sideways mates `T,S`, shifts `D_h=⊕_{k=0}^{h−1}1{d_i(1−h+2k)}`, columns `C_k=x^kη_μ`, and rows `R_k=Σ_{a+j=h−1−k}A_{μ,j}ε′_μx^a`. Show `ρ=(-T,(C_k)):P⊕D_h→V`, `σ=(S,(R_k)):V→P⊕D_h`, and both inverse equations with their component checks. If including `h<0`, use its distinct matrix and shifts from lines 127–139. Preserve the warning at line 140 that concrete flag bimodules still need their local realization proof.

- **Charge-reversal label maps** — `items/ex-charge-reversal-and-fock-involution-in-a-small-example.md:43–60,71–83,119–127`. Kind: finite label-permutation/involution diagram. The example carefully distinguishes the eight ambient labels from `Std` and `Rev`, rectification, ambient transpose, and the action on the highest constituent. Draw nodes `00,01,10,11,0R,R0,0C,C0`; mark `Std={00,01,11,0R,0C}` and `Rev={00,10,11,R0,C0}`; arrows `10→01`, `R0→0R`, `C0→0C` for rectification; and transpose pairs `01↔10`, `0R↔C0`, `R0↔0C`, fixing `00,11`. Show separately that the actual highest-constituent action fixes `P01/D01` and exchanges `P0R/D0R` with `P0C/D0C`; do not imply it swaps `P01` with ambient `P10` or maps `D01` to off-standard `D10`.

- **Serre contraction complex** — `items/thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations.md:42–45,63–65`. Kind: finite complex with contracting homotopy and Grothendieck-group relation. The proof compresses the terms, degree-zero maps, homotopy, and class calculation into dense prose. For fixed `i≠j`, draw `C_r=R E_r{s_r}` at words `i^r j i^{D−r}`, `r=0,…,D`, with `D=−a_ij+1`; arrows `a_r:C_r→C_{r+1}`, reverse maps `b_r`, `h_r=(−1)^r t^{-1}b_r`, `t=[u^d]Q_ij≠0`, and corner identity `a_rh_r+h_{r−1}a_{r−1}=E_r` (absent endpoint terms zero). Connect its alternating projective-class sum to `Σ_{a+b=D}(−1)^a[P_{i,a}][P_{j,1}][P_{i,b}]=0`. Keep the categorical complex distinct from the resulting class relation.
