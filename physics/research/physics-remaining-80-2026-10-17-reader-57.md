# Step 3a reader report — batch 57

Run: `physics-remaining-80-2026-10-17`  
Role: reader  
Scope: batches/pages/items assigned in `research/physics-remaining-80-2026-10-17-batch-57.pages.json`

## Review result

I reviewed the four assigned item claims and both assigned pages independently. One definition gap in the radiation-balance lemma was repaired in its assigned draft carrier. No uneditable mathematical defect was found. The A-page content is sound as written, with its PDE conclusions expressly conditional on the draft constant-coefficient supplier. The B-page example checks out by direct substitution and reports no observation or material-specific result.

## Opened inventory

Assigned pages:

- `library/thermodynamics-and-general-relativity-mathematics/tgr-mc04.md`
- `library/thermodynamics-and-general-relativity-mathematics/tgr-mc04-examples.md`

Assigned items, read in dependency order:

- `items/def-tgr-entropy-only-radiation-state.md`
- `items/lem-tgr-radiation-state-balance.md`
- `items/lem-tgr-cattaneo-stability-causality.md`
- `items/ex-tgrmath-cattaneo-damped-mode.md`

Claim suppliers opened:

- `items/def-countable-choice.md`
- `items/def-schwartz-space-and-its-seminorms.md`
- `items/thm-gr-nondegenerate-levi-civita-and-tensor-derivative.md`
- `items/lem-tgr-constant-linear-energy-causality.md` (draft supplier from batch 56)
- The draft supplier’s direct Fourier/divergence proof suppliers: `items/thm-divergence-theorem-for-bounded-c-one-euclidean-domains.md`, `items/thm-fourier-inversion-on-schwartz-space.md`, `items/thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms.md`, `items/thm-fourier-transform-maps-schwartz-space-continuously-to-itself.md`, and `items/thm-plancherel.md`.

Context opened:

- `library/thermodynamics-and-general-relativity-mathematics/tgr-mc03.md`, the current batch-57 cross-batch dependency rows, and `research/physics-remaining-80-2026-10-17-batch-57.proof-contracts.json`.
- `items/pthm-tgr-radiation-local-properties.md` (batch 61), the direct downstream consumer of the repaired lemma, to check its use of the unchanged entropy-current and linear-system conclusions.

## Findings and repair

In `lem-tgr-radiation-state-balance`, the Statement used “linearize” and the symbols `\delta\varepsilon` and `\delta u` without specifying the variation that defines them. The proof then relied on an unstated first-order normalization calculation. I defined a jointly smooth one-parameter family through the rest state, required it to preserve the normalization, defined `\delta` as its derivative at zero, and defined the linearized equation as the derivative of the stress-balance equation. The Statement now also gives the first-order coefficient matrices and directional matrix explicitly. Proof step 3.2 differentiates the normalization and stress formula using that definition. The mathematical system, characteristic eigenvalues, and all consuming conclusions are unchanged.

I reviewed the direct downstream consumer `pthm-tgr-radiation-local-properties`. It uses the same entropy-current conclusion, linear system, and characteristic values; the clarification changes no conclusion used there, so no consumer repair was needed. No other item consumer of the lemma was found in the current content search.

The batch-57 proof contract was updated at derivation step 3.2 to match the repaired calculation. The assigned item had no `verification.judge` record to remove, and I added no judgment or audit stamp.

The other assigned items passed the substantive review:

- The radiation state maps are explicit functions on positive temperature and entropy intervals. The inverse and differential identities in the lemma follow by differentiation and substitution. The perfect-stress divergence argument uses metric compatibility, normalization, and the chain rule exactly as stated.
- The Cattaneo matrices satisfy the positive-symmetrizer and damping hypotheses. Its entropy and Lyapunov identities follow directly from the two displayed PDEs. The flux estimate and speed threshold follow from the stated positive parameters. The periodic Fourier reconstruction and the componentwise temperature bound use the exact norm interface stated in the draft evolution supplier.
- The example’s exponential mode satisfies the scalar telegraph ODE and both first-order PDEs by direct substitution. Its positivity assertion is restricted to `t >= 0` and `|Theta| < T_0`.
- The assigned page summaries preserve the conditional mathematical scope and do not turn the model formulas into empirical claims.

## Source checks

The item references were checked at the cited passages, with source qualifications retained:

- Éric Gourgoulhon, *An Introduction to Relativistic Hydrodynamics*, arXiv:gr-qc/0603009v1: §4.3, equations (4.10)–(4.14), gives a general equation of state and first-law differential including particle-density terms; §5.2, equation (5.4), and §5.3, equations (5.5)–(5.11), give the perfect-stress balance and its energy projection. This supports model context; the local proof supplies the entropy-only deduction without particle-number premises. [PDF](https://arxiv.org/pdf/gr-qc/0603009)
- Nicolas Borghini, *Elements of Hydrodynamics* (2022): §X.3.2(a), equation (X.22) and proof, treats perfect-fluid entropy-current conservation under its stated perfect-fluid and conserved-charge framework. Section XI.2, equations (XI.17)–(XI.19), states `P = epsilon/3` for an ideal ultrarelativistic gas without conserved charge and derives the proportional scalings `epsilon ∝ T^4` and `s ∝ T^3`; it does not fix `a_R`. [PDF](https://www.physik.uni-bielefeld.de/~borghini/Teaching/Hydrodynamics22/Hydrodynamics2022.pdf)
- Andersson and Comer, *Variational multifluid dynamics and causal heat conductivity*, arXiv:0908.1707v1: §4, equations (4.9)–(4.11), derives the Cattaneo form after linearization near thermal equilibrium and a constant-parameter assumption; its footnote cautions that the parameter need not be constant physically. This is context for the stipulated subsystem, not evidence of a material realization. [PDF](https://arxiv.org/pdf/0908.1707)
- Lander and Andersson, *Heat conduction in rotating relativistic stars*, arXiv:1804.01520v1: §2.1, equations (1)–(3), presents the heat-balance and Cattaneo/telegrapher forms, describing the relaxation term as phenomenological. This likewise supplies context only. [PDF](https://arxiv.org/pdf/1804.01520)

No experiment, data set, statistical estimate, or physical realization is asserted by the assigned items.

## Validation

For the repaired item:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/lem-tgr-radiation-state-balance.md` — unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/lem-tgr-radiation-state-balance.md` — pass; 1 checked, 0 failing.
- `node tools/physics-support/proof-layout.mjs items/lem-tgr-radiation-state-balance.md` — 1 item, 7 steps, 0 defects.

## Page verdicts and blocker

- `tgr-mc04`: authored content passes. The current cross-batch dependency file still records the page edge `tgr-mc04 -> tgr-mc03` as `open`. I checked the MC03 page and the exact MC03 lemma used by this batch, but did not audit the other MC03 page items or adjudicate the separate upstream MC03-to-MC02 page status; the dependency metadata was not edited.
- `tgr-mc04-examples`: passes. Its sole example is an exact mathematical mode and is not presented as an experiment.

No mathematical blocker remains in the reviewed claims. The open page-edge review above is the remaining workflow blocker for the page dependency record. No uneditable defect remains to route.

## Coverage note

The full assigned item set, both assigned pages, the exact draft evolution supplier and its direct Fourier/divergence suppliers were opened. Published suppliers were used at their current exact statements; this review did not re-audit every transitive proof dependency of those published items. The MC03 page was read for prerequisite context, but its non-used items and its separate upstream page edge were outside this batch’s content review. The page-edge status remains explicit above.
