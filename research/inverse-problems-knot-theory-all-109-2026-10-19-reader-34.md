# Step 3a reader report — batch 34

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader (`reader-34`)  
Reviewed: 2026-10-21

## Opened inventory

### Assigned pages

- `library/inverse-problems/compressed-sensing-with-noise-and-model-selection.md` (A): frontmatter inventory and requirements match the manifest; body is empty; `page_layout: compact-v1` is present.
- `library/inverse-problems/compressed-sensing-with-noise-and-model-selection-examples.md` (B): the example inventory and requirement on the A page match the manifest; body is empty; `page_layout: compact-v1` is present.

### Assigned items, by manifest dependency level

- Level 0: `lem-ip-bpdn-dual-certificates`; `lem-ip-bpdn-objectives-proper-closed-convex`.
- Level 1: `def-ip-best-s-term-l1-error`; `def-ip-robust-nullspace-property`; `lem-ip-bpdn-minimizer-exists`; `lem-ip-robust-nsp-block-tail-estimate`.
- Level 2: `alg-ip-basis-pursuit-denoising`; `lem-ip-best-s-term-l1-sparse-vector-formulation`; `lem-ip-largest-s-coordinates-attain-best-s-term-l1-error`.
- Level 3: `thm-ip-robust-nsp-noisy-recovery-bound`.
- Level 4: `ex-ip-34-scope-and-boundary-cases`.

All 11 listed item files were opened. Their statements/definitions have no hyperlinks interrupting the complete claim sections. No TikZ or other diagrams occur in the assigned items or page bodies.

### Page and item supplier context opened

- Required pages: `library/inverse-problems/sparse-recovery-and-nullspace-certificates.md` (draft, body-free) and `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/operator-splitting-admm-and-primal-dual-methods.md` (published; opened for the relevant PDHG context).
- Current-run, other-batch supplier: `items/def-ip-nullspace-property.md` (batch 33; matrix action, one-based labels and zero-extended coordinate restrictions).
- Published supplier interfaces used by assigned facts/proofs: `def-p-norms-on-rn`; `def-euclidean-inner-product`; `def-adjoint-of-a-linear-map-between-inner-product-spaces`; `thm-adjoint-exists-and-is-unique-in-finite-dimension`; `thm-cauchy-schwarz-and-the-euclidean-norm`; `def-fenchel-conjugate-on-finite-dimensional-euclidean-space`; `lem-finite-sum-laws`; `lem-p-norms-are-norms-and-induce-the-published-metrics`; `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`; `def-proper-closed-convex-function-on-rn`; `def-convex-and-strictly-convex-functionals-on-a-banach-space`; `def-convex-subset-of-euclidean-space`; `def-indicator-function-of-closed-convex-set`; `def-canonical-natural`; `lem-of-naturals-positive`; `lem-of-square-monotone`; `def-max-min`; `lem-finite-set-has-max`; `cor-cardinality-of-the-power-set`; `thm-subset-of-a-finite-set`; `def-countable`; `def-finite-cardinality`; `def-equinumerous`; `lem-nat-nonzero-is-successor`; `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`; `def-induced-matrix-p-norm`; `def-proximal-mapping`; `thm-proximal-operator-existence-resolvent-firm-nonexpansive`; `lem-fenchel-conjugate-is-proper-closed-convex`; and `alg-pdhg-primal-dual-hybrid-gradient`.
- The batch-34 proof-contract file was consulted for cited fact sources, quoted sections and step-use mappings. Contract entries were treated as navigation/evidence and checked against the current item text, not as verdicts.

## Review and evidence

- `lem-ip-bpdn-dual-certificates`: the residual-ball conjugate is the support function of the radius-`epsilon` Euclidean ball translated by `y`. Cauchy–Schwarz gives the upper bound, and `v = epsilon p / ||p||_2` (with the zero cases handled separately) attains it. The primal certificate supplies a lower bound for every feasible vector, and the equality hypothesis makes `x` optimal. The orthogonality/separation certificate rules out every point of the residual ball.
- `lem-ip-bpdn-objectives-proper-closed-convex`: the `l1` objective is finite, convex and continuous; the residual ball contains `y`, is convex and closed; hence its indicator has closed epigraph and is proper and convex. The epigraph-neighborhood arguments cover the boundary and `epsilon = 0` cases.
- `def-ip-best-s-term-l1-error`, `lem-ip-best-s-term-l1-sparse-vector-formulation`, and `lem-ip-largest-s-coordinates-attain-best-s-term-l1-error`: the finite coordinate-tail minimum is attained; the sparse-vector minimum equals it by restricting any sparse vector to its support and constructing the matching coordinate truncation; the sorted largest-`s` set minimizes the omitted `l1` mass, including ties and `s = n`.
- `def-ip-robust-nullspace-property`: the definition preserves the full quantifiers, `0 < rho < 1`, `tau > 0`, the tail-`l1`/head-`l2` convention, and the one-based/library coordinate correspondence.
- `lem-ip-bpdn-minimizer-exists`: the residual set is closed (including the zero-matrix case). A nonempty `l1` sublevel intersected with it is closed and bounded; finite-dimensional compactness and continuity yield a global minimizer. The proof fixes one feasible witness and does not require choice.
- `lem-ip-robust-nsp-block-tail-estimate`: the first block is bounded by the head block; each later block is bounded by the preceding full block's average magnitude. Summing the block norms gives the stated tail estimate, including `q = 0` and a short final block.
- `alg-ip-basis-pursuit-denoising`: the procedure gives exact inputs, caps, recurrence, branch order and failure statuses. The `success` and `infeasible` returns are gated by the explicit certificates; the definition makes no convergence or finite-certificate-discovery claim.
- `thm-ip-robust-nsp-noisy-recovery-bound`: feasibility of the truth gives minimizer existence. Minimality gives the cone estimate; separate largest-coordinate sets for the truth and error, robust NSP, Cauchy–Schwarz and the block-tail lemma yield the displayed `l2` and `l1` bounds. Substitution and simplification give the stated constants. The algorithm-success clause follows from the exact certificate lemma. No uniqueness or support-recovery claim is made.
- `ex-ip-34-scope-and-boundary-cases`: the identity matrix satisfies the stated robust property; the best-term values and rational substitutions give the two displayed examples. In the third case feasibility forces `z_1 = 0`, the unique `l1` minimizer is zero, and `h = (0,1), S = {2}` disproves the robust property.

### Source checks

- Foucart and Rauhut, *A Mathematical Introduction to Compressive Sensing*: §2.1 Definition 2.2 (printed p. 42) defines the best `s`-term error by distance to sparse vectors and states largest-coordinate attainment; the local sparse-vector lemma supplies the authored coordinate-tail equivalence. In §4.3, Definition 4.21 gives the `q`-robust nullspace condition, and Theorem 4.22 gives the corresponding stable recovery rates. The complete proof of Theorem 4.25 was opened as a comparison; the assigned theorem derives its own, weaker displayed constants. In §15.2, the primal-dual algorithm (PD1–PD3), the strict product step condition, and the quadratically constrained `l1` example match the assigned PDHG context (printed pp. 481–485).
- Mendelson, Rauhut and Ward, “Improved Bounds for Sparse Recovery from Subsampled Random Convolutions”: §2.1 Definition 2.1 states the tail-`l1`/head-`l2` robust NSP for all vectors and supports of size at most `s`; Theorem 2.2 states the best-term/noise rates and constants (printed pp. 4–5). The assigned proof independently establishes its displayed constants.
- The cited Chambolle–Pock Optimization Online PDF timed out in browser retrieval. The official Springer page confirms the article's title, authors and publication record, while Foucart–Rauhut §15.2 and the current published `alg-pdhg-primal-dual-hybrid-gradient` item provide the recurrence and step condition used here. No convergence guarantee is imported into the assigned algorithm.

## Repairs and uneditable defects

- No item or page prose was edited. There was no item change requiring a proof-contract update, judge-record removal, reflow, precheck or proof-layout run.
- No confirmed mathematical defect in an assigned item, required page or relevant supplier interface remained uneditable. No withdrawal is proposed.

## Page verdicts

- `compressed-sensing-with-noise-and-model-selection` (A): passes the assigned page review; inventory, title, requirements and empty body are consistent.
- `compressed-sensing-with-noise-and-model-selection-examples` (B): passes the assigned page review; inventory, title, requirement and empty body are consistent.

## Blocker and coverage limits

No mathematical blocker remains for batch 34. One process limitation: I first read the assigned items in manifest dependency-level order and opened their external suppliers afterward, then checked the dependent arguments against those suppliers; the chronology did not fully meet the requested supplier-first order. I did not independently re-audit every transitive proof underlying the published foundational suppliers. The cited Optimization Online PDF retrieval failure is recorded above; the relevant PDHG recurrence was verified against the opened textbook passage and published local supplier.
