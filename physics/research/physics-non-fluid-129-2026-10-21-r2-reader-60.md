# Step 3a reader report — batch 60

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader (`reader-60`)

## Inventory reviewed

Assigned pages:

- `qftx-causal-renormalization` — [library/quantum-field-theory-mathematics/qftx-causal-renormalization.md](../library/quantum-field-theory-mathematics/qftx-causal-renormalization.md), draft A page; eight listed items.
- `qftx-causal-renormalization-examples` — [library/quantum-field-theory-mathematics/qftx-causal-renormalization-examples.md](../library/quantum-field-theory-mathematics/qftx-causal-renormalization-examples.md), draft B page; two listed examples.

Assigned items, all opened in their current source form:

- `def-qftx-off-shell-local-polynomial-functionals`
- `lem-qftx-local-polynomial-functionals-are-microcausal`
- `lem-qftx-balanced-local-functional-representatives`
- `lem-qftx-transverse-center-scaling-bound`
- `def-qftx-local-time-ordered-system`
- `lem-qftx-finite-graph-scaling-degree`
- `thm-qftx-scalar-eg-induction`
- `prop-qftx-finite-renormalization-composition`
- `cex-qftx-exact-differentiated-scaling-degree`
- `ex-qftx-two-vertex-log`

The assigned proof contracts, batch notes, coverage record, cross-batch dependency rows, and manifest were inspected as navigation/evidence rather than as verdicts. The directly used in-run suppliers inspected were `def-qftx-distributions-on-smooth-manifolds`, `def-qftx-local-wavefront-set`, `def-qftx-wavefront-hadamard`, `def-qftx-polynomial-microcausal-functionals`, `lem-qftx-wavefront-chart-invariance`, `thm-qftx-wavefront-product`, `lem-qftx-microcausal-star-product`, and `lem-qftx-finite-lorentz-cocycle-splitting`.

The mathematical suppliers inspected for the assigned proofs included `def-qft-distribution-scaling-degree`, `thm-qft-finite-scaling-degree-extension`, `prop-qft-local-counterterm-jet-classification`, `prop-qft-four-dimensional-log-scale-anomaly`, `thm-distributions-supported-at-one-point`, `lem-fixed-support-test-function-spaces-are-complete`, `thm-baire-category-for-complete-metric-spaces`, the cited Fourier transform and inversion results, `lem-test-function-cutoffs-and-euclidean-localization`, `lem-finite-sums-of-product-tests-are-dense-on-product-open-sets`, and the stated choice principles. The four direct page prerequisites (`qftx-microlocal-products`, `qftx-analytic-prerequisites`, `qft-ir04`, and `qft-ir05`) were also opened.

## Review and repair

The current local arguments were checked against their exact supplier statements, hypotheses, and proof uses. In particular, the finite-graph proof does not import Brunetti–Fredenhagen’s Lemma 6.6 as an ordinary-scaling estimate: that source states a product estimate for microlocal scaling degree. The assigned `lem-qftx-transverse-center-scaling-bound` instead supplies a local fixed-center argument from ordinary scaling bounds and wavefront transversality; the graph lemma applies it to the translation-invariant causal block factors. The scalar induction remains conditional on the free data in its definition and claims only a formal construction at each finite order. The counterexample’s massless Fourier witness and contact term calculation are internally consistent, and the Euclidean logarithm example does not identify its Euclidean kernel with the Lorentzian Feynman kernel.

One confirmed title defect was repaired in [items/lem-qftx-finite-graph-scaling-degree.md](../items/lem-qftx-finite-graph-scaling-degree.md): “Finite scalar graphs have finite scaling degree” became “Scalar graph coefficients have finite upper scaling bounds.” The Statement assumes a finite upper bound and permits scaling degree `-∞`; the schema defines finite scaling degree as a real value. This title correction leaves the mathematical statement and proof unchanged. The proof contract therefore required no claim or derivation changes, and the item had no `verification.judge` record to remove. Reflow reported the item unchanged; precheck passed; proof-layout reported one item, five steps, and zero defects.

No other confirmed repair was needed. The two-vertex TikZ diagram matches the stated two vertices, two parallel internal contractions, and two external scalar slots at each vertex. No other assigned exposition required an additional diagram.

## Page verdicts

- `qftx-causal-renormalization`: pass after the finite-scaling title correction. The draft A page has the eight current items in supplier-before-consumer order and the declared prerequisite pages. Its item claims are conditional mathematical results and do not make empirical claims.
- `qftx-causal-renormalization-examples`: pass. The draft B page lists the corrected-scaling counterexample and the two-vertex Euclidean logarithm. The page keeps the Euclidean calculation separate from any Lorentzian or empirical interpretation, and its diagram is accurate.

## Uneditable defects and blockers

No confirmed defect remains outside this reader’s edit scope. No blocker was found.

## Coverage limit

All ten assigned items, both assigned pages, their directly used item and page prerequisites, and the cited source passages needed for the reviewed arguments were inspected. The complete transitive proof closure of every mathematical supplier was not independently re-audited. One dependency-order deviation occurred: the wavefront-product theorem was opened before its chart-invariance supplier; the supplier was then opened and the relevant proof use checked. The external source review was limited to relevant passages, including Brunetti–Fredenhagen, §§6.2 and 7 (Lemma 6.6 and equations (54)–(56)); Fredenhagen–Rejzner, §7 (Theorem 7.2 and the graph/extension discussion); and Dütsch–Fredenhagen, §3.2, printed pp. 23–25 (balanced fields and derivative-compatible extension). No full-source reading beyond those passages is claimed.
