# Step 3a reader report — batch 21

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: reader  
Scope: batch `21`

## Assigned inventory opened

Pages:

- `qftx-yang-mills-instanton-physics` (A page).
- `qftx-yang-mills-instanton-physics-examples` (B page).

Items, read in dependency order:

1. `post-qftx-euclidean-yang-mills-model`.
2. `def-qftx-euclidean-yang-mills-sector`.
3. `ex-qftx-euclidean-trivial-vacuum-sector`.
4. `ex-qftx-bpst-instanton-formal-sector-weight`.

Both page files contain frontmatter only, retain `page_layout: compact-v1`, and have no summary body.

## Supplier and source review

Opened the mathematical and physical suppliers needed for the assigned formulations and deductions: `def-countable-choice`, `def-axiom-of-choice`, `def-qftx-nonabelian-gauge-data`, `lem-qftx-su2-compact-nonabelian-invariant-form`, `def-qftx-principal-connection-form`, `def-qftx-lie-algebra-valued-form-bracket`, `lem-qftx-principal-curvature-cartan-bianchi`, `def-gauge-group-of-a-smooth-principal-bundle`, `def-qftx-instanton-number-and-asd-sector`, `thm-qftx-yang-mills-selfdual-action-bound`, `prop-qftx-su2-bpst-explicit-connection-on-s4`, `thm-general-stokes-theorem`, `lem-qftx-hodge-star-decomposition-four-dimensions`, `lem-qftx-two-chart-principal-bundle-gluing`, `ex-unitary-and-special-unitary-lie-groups`, `thm-heine-borel-rn`, and the cited Lorentzian context item `post-qftx-nonabelian-yang-mills-model`. The three published mathematical definitions used here are listed in `research/math-imports.json`.

The two diagrams encountered in the mathematical supplier context were checked against their text. The principal-curvature square expresses the right-action local-potential transition and induced adjoint curvature transition; the BPST square expresses the corresponding chart transition. Both commute with the stated conventions. The four assigned items themselves contain no diagrams.

Source checks:

- David Tong, *TASI Lectures on Solitons: Instantons, Monopoles, Vortices and Kinks*, §§1.1–1.1.1, printed pp. 6–9, especially action (1.1), the generator-convention footnote, the square completion and the Bianchi implication (1.8). The notes use Hermitian generators; the postulate's anti-Hermitian normalization gives the same positive quadratic action after the stated generator conversion. [Source](https://www.damtp.cam.ac.uk/user/tong/tasi/instanton.pdf)
- Stefan Vandoren and Peter van Nieuwenhuizen, *Lectures on instantons*, §2, printed pp. 7–10, equations (2.1), (2.6), (2.9)–(2.10), and (2.12)–(2.15). These give the anti-Hermitian trace convention, charge and bound normalization, theta factor, and regular charge-one SU(2) field/curvature. [Source](https://arxiv.org/pdf/0802.1862)
- Belavin, Polyakov, Schwartz, and Tyupkin, “Pseudoparticle Solutions of the Yang-Mills Equations,” printed pp. 85–87, equations (3)–(18), for the charge and explicit finite-action self-dual solution. The assigned consumer's detailed two-chart calculation is supplied by the local proposition and was checked directly. [Source](https://strings.itp.ac.ru/Papers/belavin1975.pdf)
- Stefan Haller, *The Atiyah–Singer Index Theorem*, §II.4.1 and Example II.4.5, printed pp. 88–92, for the determinant convention `c(E,∇)=det(I−R/(2πi))` and the trace formula for `c₂`. For trace-free rank-two curvature this yields `c₂=tr(R∧R)/(8π²)`, so the assigned `B_top=−tr₂` convention gives `q_B=−⟨c₂,[X]⟩`. [Source](https://www.mat.univie.ac.at/~stefan/files/ASIT/ASIT.pdf)

The assigned material reports no experiment, measured input, statistical inference, or empirical result. The Yang–Mills action is explicitly adopted as a classical Euclidean model assumption. The BPST example's exponential is only a formal sector factor; it is not presented as an evaluated continuum integral or measurement.

## Repairs and validation

- `post-qftx-euclidean-yang-mills-model`: specified that the compactified field `\bar A` is the smooth principal connection one-form, identified its compact and restricted flat-branch connections, and defined `F_{\bar A}` and `F_A` through the local curvature representatives. This closes the prior ambiguity between the extension data and the later symbol `\bar\omega`. The exact earlier invariant-form lemma title and its relevant basis/positivity/invariance content are now stated in the Postulate.
- `def-qftx-euclidean-yang-mills-sector`: removed the duplicated model title; identified the exact earlier Euclidean postulate and its relevant physical content; identified the curvature supplier by its exact title; and gave `B_top` the explicit domain `\mathfrak{su}(2)\times\mathfrak{su}(2)`. These edits preserve the adopted model, charge sign, action normalization, and claim strength.
- Updated the postulate supplier excerpt in `research/advanced-qft-supersymmetry-build-2026-10-23-batch-21.proof-contracts.json` to match the current Postulate. Neither changed item had a `verification.judge` record to remove.
- The direct consuming Definition and both assigned examples were rechecked against the clarified connection/curvature notation. No other current-run manifest names either changed item as a consumer.
- Reflow reported both changed items unchanged. Precheck passed for the Postulate; the Definition's nonproof precheck reported `0 checked, 0 failing — all clean`. The final proof-layout command reported `2 items, 0 steps, 0 defects`.

## Uneditable finding

`def-gauge-group-of-a-smooth-principal-bundle` is a published mathematical dependency and is read-only here. Its `Definition` embeds wikilinks to `def-smooth-principal-g-bundle`, `def-diffeomorphism-and-local-diffeomorphism-of-manifolds`, `prop-identity-maps-and-composites-of-smooth-maps-are-smooth`, and `def-group` within the continuous definition. The required uninterrupted-definition policy calls for plain wording in the complete definition and those links in a following `Definition references` section. The assigned Postulate depends on this item directly. The exact routed finding is in the companion JSON artifact.

## Page verdicts and blocker

- `qftx-yang-mills-instanton-physics`: **pass after repair**. Its A-page inventory and prerequisites match the assigned Postulate and Definition; its frontmatter-only presentation is correct.
- `qftx-yang-mills-instanton-physics-examples`: **pass**. Its B-page inventory places both assigned examples correctly; its frontmatter-only presentation is correct.
- Blocker: none for completing this batch review. The published dependency issue remains outside this reader's write scope.

## Coverage note

All assigned pages and items were opened, along with the direct claim suppliers and relevant cited source passages listed above. I did not independently audit every lower-level dependency in the transitive Chern–Weil/de Rham proof chain; the charge supplier's local proof, exact normalization, and cited characteristic-form convention were checked for the uses made by this batch.
