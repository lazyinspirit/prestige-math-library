# Step 3a reader report — batch 46

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: independent reader  
Scope: `nrqmx-semiclassical-calculus` and its examples page

## Opened inventory

Assigned pages:

- `library/non-relativistic-quantum-mechanics-mathematics/nrqmx-semiclassical-calculus.md` — A page, draft.
- `library/non-relativistic-quantum-mechanics-mathematics/nrqmx-semiclassical-calculus-examples.md` — B page, draft.

Assigned items, opened in dependency order:

- A page: `def-nrqmx-weyl-symbol-wigner`, `lem-nrqmx-scaled-plancherel`, `lem-nrqmx-weyl-hilbert-schmidt-bound`, `thm-nrqmx-wigner-marginals`, `lem-nrqmx-bounded-symbol-estimate`, `thm-nrqmx-schwartz-moyal-remainder`, `lem-nrqmx-cubic-moyal-commutator-remainder`, `thm-nrqmx-quadratic-egorov`.
- B page: `ex-nrqmx-gaussian-wigner-flow`, `cex-nrqmx-wigner-negative`.

Mathematical supplier items opened for the assigned claims:

- `def-complex-lp-and-euclidean-test-function-conventions`, `def-schwartz-space-and-its-seminorms`, `def-countable-choice`, `def-symmetric-self-adjoint-and-essentially-self-adjoint`.
- `thm-algebra-of-derivatives`, `thm-plancherel`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, `thm-cauchy-schwarz-in-an-inner-product-space`.
- `thm-fourier-transform-maps-schwartz-space-continuously-to-itself`, `thm-fourier-inversion-on-schwartz-space`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `cor-c-one-change-of-variables-for-l-one-functions`, `lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization`, `lem-complex-integration-by-parts-on-intervals-and-decaying-lines`, `lem-schwartz-space-is-dense-in-l-two`, `thm-riesz-representation-for-hilbert-space`.
- `thm-ftc-second-part`, `thm-chain-rule-for-total-derivatives`, `thm-chain-rule`, `thm-mean-value-inequality-for-total-derivatives`, `thm-gronwall-integral-inequality`, `lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves`.
- `thm-exact-hamiltonian-flow-preserves-energy-and-volume`, `lem-c1-euclidean-maximal-flow-with-c2-upgrade`, `thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution`, `thm-nrqm-oscillator-oscillator-scaling-and-exact-realization`, `thm-nrqm-oscillator-hermite-recurrence`, `thm-dominated-convergence`.

The four A-page prerequisites were opened at their page carriers: `qm-math-controlled-dynamics`, `schwartz-space-and-the-plancherel-theorem`, `hamiltonian-monte-carlo-and-leapfrog`, and `codimension-one-foliations-and-secondary-classes`. The cited item suppliers relevant to those page edges were also opened above. Root mathematics pages and items remained read-only.

## Review findings and source checks

The assigned items are mathematical. The Weyl kernel, scaled Fourier transform, Wigner integral, inner-product convention, operator commutator, and Poisson-bracket orientation are explicit. The Fourier, Fubini, change-of-variables, Gaussian, bounded-symbol, and kernel-norm arguments state the needed regularity and integrability hypotheses. The Moyal sign agrees with the stated ([Q_j,P_k]=i\epsilon\delta_{jk}I) convention; the cited Nonnenmacher bracket orientation is opposite and the local proof recomputes the sign. The cubic commutator proof supplies the local extension for the unbounded kinetic-plus-potential Hamiltonian. The Egorov result is conditional on its stated self-adjoint extension and Schwartz-core hypothesis; it makes no claim to derive that operator realization for every potential in the displayed class. The Gaussian example verifies the oscillator core premise and the Wigner calculation. The first-excited-state item computes its normalization and negative Wigner value explicitly.

The cited source sections were opened and checked:

- [Nonnenmacher, *Introduction to Semiclassical Analysis*](https://www.imo.universite-paris-saclay.fr/~stephane.nonnenmacher/enseign/Cours-Semiclassical-Analysis2019-lecture1-8.pdf): the scaled Fourier normalization is at §1.1.2, printed p. 4; Weyl quantization is Definition 3.10, printed pp. 16–17; composition and Moyal expansion are Theorems 4.2 and 4.7, printed pp. 33–37; the commutator result is Corollary 4.11, printed pp. 36–38; the main-order Egorov theorem is Theorem 4.14, printed pp. 40–42; and the Calderón–Vaillancourt estimate is Theorem 5.26, printed pp. 53–55. The source's Poisson-bracket orientation is opposite to this batch's definition. The local bounded-symbol and unbounded-potential arguments establish the stronger finite derivative count and the stated local hypotheses.
- [Evans and Zworski, *Lectures on Semiclassical Analysis*](https://math.mit.edu/~vwg/semiclassicalEvansZworski.pdf): Theorem 4.16 gives an (L^2) bounded-symbol estimate, Theorem 4.17 treats composition, and Theorem 8.2 gives an (O(h)) weak Egorov comparison. The assigned (O(\epsilon^2)) and exact quadratic claims are established by their local proofs.
- [Dell’Antonio, *Lectures on the Mathematics of Quantum Mechanics, Volume II*](https://people.sissa.it/~gianfa/sito-web/%20Dell%27Antonio%20%20Mathematics%20of%20Quantum%20Mechanics%20II%20.pdf): the Wigner definition appears on printed p. 15; Lemma 1.2 states the two marginal formulas on printed p. 18 and explicitly leaves the proof to the reader; the local proof supplies the complete Schwartz-space argument. Lecture 2 gives the Weyl-kernel conventions and Hilbert–Schmidt formula on printed pp. 41–43, Theorem 2.2 gives the bounded-symbol result on pp. 43–47, and §2.6 treats commutators and evolution on pp. 53–54.

No experimental observation, uncertainty estimate, or physical inference is asserted by these mathematics-domain items. No TikZ or tikzcd diagram occurs in the assigned items, and the arguments do not require one.

## Repairs

- `def-nrqmx-weyl-symbol-wigner`: replaced the undefined word “normalized” with the exact condition \(\int_{\mathbb R^d}|u(x)|^2\,dx=1\). Expanded the complex-coordinate commutator calculation so the real-valued product-rule supplier is explicitly applied componentwise. Checked all assigned uses: the marginal theorem states unit (L^2) norm, and the two examples verify their vectors have unit norm. Updated the matching Definition excerpt in all nine proof-bearing contracts, covering sixteen citation and supplier-excerpt records. No stale `verification.judge` record was present.
- `thm-nrqmx-wigner-marginals`: corrected the Nonnenmacher locator from §3.3 to Definition 3.10 (Weyl quantization), printed pp. 16–17. The Wigner marginal result itself remains attributed to Dell’Antonio Lemma 1.2, whose proof is omitted there and is supplied locally. No stale judge record was present.
- `lem-nrqmx-cubic-moyal-commutator-remainder`: corrected the Nonnenmacher result label from “Theorem 4.11” to “Corollary 4.11.” No proof-contract field mirrors this bibliography locator, and no stale judge record was present.
- `thm-nrqmx-quadratic-egorov`: specified the sign of the unitary group in both branches by giving (U(0)=I), domain preservation, and the strong equation (i\partial_tU(t)y=\epsilon^{-1}HU(t)y). This matches the exact common-domain evolution supplier and the Heisenberg derivative in the proof. Updated the current Egorov statement excerpt in the Gaussian example's proof contract; the current source excerpt and citation copies now match. No stale judge record was present.
- `ex-nrqmx-gaussian-wigner-flow`: limited the Nonnenmacher locator to Definition 3.10 and Theorem 4.14; the Wigner/Gaussian calculation is proved locally and compared with Dell’Antonio. Reflow completed; precheck passed. No stale judge record was present.
- `cex-nrqmx-wigner-negative`: limited the Nonnenmacher locator to Definition 3.10; the Wigner formula and negativity calculation are proved locally. Reflow completed; precheck passed. No stale judge record was present.

## Uneditable findings

The following published dependencies are outside batch 46's edit scope. Physics `SCHEMA.md` requires a published proved-here item to carry `verification.audited` or `verification.verified`; a formatting precheck or judge stamp alone does not meet that publication condition.

- `thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution` — frontmatter marks a proved theorem `published` and `provenance.proof: ai-altered`, but has no verification record. It is a direct dependency of assigned `thm-nrqmx-quadratic-egorov`.
- `thm-exact-hamiltonian-flow-preserves-energy-and-volume` — frontmatter marks a proved theorem `published` and `provenance.proof: ai-generated`, but has no verification record. It is a direct dependency of `thm-nrqmx-quadratic-egorov`.
- `lem-c1-euclidean-maximal-flow-with-c2-upgrade` — frontmatter marks a proved lemma `published`; its only verification entry is `precheck: pass`. It is a direct dependency of `thm-nrqmx-quadratic-egorov`.
- `lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves` — frontmatter marks a proved lemma `published`; it has `precheck: pass` and a `verification.judge` record, with no `audited` or `verified` record. It is a direct dependency of `thm-nrqmx-quadratic-egorov`.
- `thm-nrqm-oscillator-oscillator-scaling-and-exact-realization` — frontmatter marks a proved theorem `published` and `provenance.proof: ai-altered`, but has no verification record. It is a direct dependency of `ex-nrqmx-gaussian-wigner-flow` and `cex-nrqmx-wigner-negative`.
- `thm-nrqm-oscillator-hermite-recurrence` — frontmatter marks a proved theorem `published` and `provenance.proof: ai-altered`, but has no verification record. It is a direct dependency of `ex-nrqmx-gaussian-wigner-flow` and `cex-nrqmx-wigner-negative`.

Each is reported as `ill-formed`, severity `fatal`, with an exact assigned consumer in the returned findings JSON. Their published carriers were not edited.

## Page verdicts

- `nrqmx-semiclassical-calculus`: **pass with reported external-supplier findings**. Its eight A items match the assigned manifest. Its four page prerequisites resolve and connect to the Weyl/Fourier, flow, and operator suppliers used by the assigned items. The page is a frontmatter-only A page under the selected statement-first layout.
- `nrqmx-semiclassical-calculus-examples`: **pass with reported external-supplier findings**. Its two examples match the assigned manifest and its sole prerequisite is the A page. The page is frontmatter-only under the selected layout.

## Scoped checks and blocker

- Reflow and precheck ran for each of the six changed items. All reflows completed; proof-bearing changed items passed precheck, and the definition produced `0 checked, 0 failing`.
- The final proof-layout command covered all six changed paths: 6 items, 22 proof steps, 0 defects.
- No local reader blocker remains. The six published-supplier verification findings require owner disposition.

## Coverage note

All ten assigned items, both assigned pages, the direct mathematical supplier statements and the page prerequisites listed above were opened. The cited source sections needed to resolve conventions and locator questions were retrieved and inspected. I did not re-audit every upstream proof in the transitive closure of all published mathematical suppliers; the six uneditable findings concern the current publication-verification records of direct suppliers used by the assigned claims.
