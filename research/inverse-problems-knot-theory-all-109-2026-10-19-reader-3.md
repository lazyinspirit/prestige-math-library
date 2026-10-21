# Step 3a reader report — batch 3

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Batch: `3`  
Role: reader

## Verdict

No assigned page or item has an unresolved defect. Three proof clarifications were made in assigned items and recorded below. No uneditable finding or mathematical blocker remains.

## Opened inventory

Assigned pages, both draft and frontmatter-only:

- `deterministic-source-conditions-and-optimal-recovery` — seven assigned items; requires `linear-operators-pseudoinverses-and-picard-criteria` and `iterative-regularization-and-early-stopping`.
- `deterministic-source-conditions-and-optimal-recovery-examples` — two assigned examples; requires the A page above and `outward-rounded-interval-and-ball-arithmetic`.

All nine assigned items were opened in dependency order:

- Definitions: `def-ip-index-source-ball`, `def-ip-centered-modulus-of-continuity`, `def-ip-power-source-set`.
- Lemmas: `lem-ip-index-source-elements-are-minimum-norm`, `lem-ip-spectral-interpolation-for-power-source-balls`.
- Theorems: `thm-ip-deterministic-minimax-lower-bound-on-source-balls`, `thm-ip-source-ball-modulus-of-continuity`.
- Examples: `ex-ip-polynomial-singular-decay-source-balls`, `ex-ip-exponential-singular-decay-source-balls`.

Page prerequisites opened:

- `linear-operators-pseudoinverses-and-picard-criteria` at `library/inverse-problems/linear-operators-pseudoinverses-and-picard-criteria.md` (draft; its current carrier exists at this path).
- `iterative-regularization-and-early-stopping` (published).
- `outward-rounded-interval-and-ball-arithmetic` (published).

Relevant item supplier sections opened included `def-ip-compact-linear-inverse-model`, `def-absolute-value-and-singular-values-of-a-compact-operator`, `def-compact-spectral-filter-and-qualification`, `def-countable-choice`, `def-operator-norm`, `def-hilbert-space`, `def-real-and-complex-inner-product-space`, `cor-inner-product-induces-a-norm`, `def-bounded-linear-operator`, `def-kernel-and-image-of-a-linear-map`, `def-orthogonality-and-orthogonal-complement`, and `thm-singular-value-decomposition-for-compact-operators`. For the examples I also opened the relevant statements of `def-square-summable-family-on-an-arbitrary-index-set`, `lem-square-summable-sequences-form-a-hilbert-space`, `thm-cauchy-schwarz-in-an-inner-product-space`, `def-hilbert-space-adjoint`, `thm-hilbert-adjoint-properties`, `lem-finite-rank-operators-are-compact`, `thm-norm-limit-of-compact-operators-is-compact`, `lem-positive-square-root-of-a-compact-positive-operator`, `def-compact-linear-operator`, and `def-self-adjoint-positive-unitary-and-normal-operator`.

The calculus and scalar suppliers used in the interpolation proof and examples were checked at their cited statement/fact sections: `def-natural-logarithm`, `thm-natural-logarithm-laws`, `def-real-power`, `def-real-exponential-function-and-e`, `cor-exponential-reciprocal-and-positivity`, `thm-real-power-continuity-and-derivatives`, `thm-real-power-laws`, `cor-mean-value-theorem`, `lem-of-inverse-positive`, `cor-archimedean-reciprocal`, `thm-of-archimedean`, `thm-exponential-limits-and-range`, `thm-exponential-is-strictly-increasing`, and `def-complete-ordered-real-field`.

## Mathematical review and page verdicts

The source-index definition uses `S = K^*K`, `|K| = S^(1/2)`, and the compact spectral multiplier argument `sqrt(t)`, matching the positive spectrum of `|K|`. The power convention `|K|^nu = (K^*K)^(nu/2)` is consistent with the spectral-filter supplier. The centered modulus has a nonempty feasible set because it assumes `0 in M`. The minimum-norm and interpolation arguments preserve the kernel condition, singular-value indices, and all scalar-field hypotheses.

The minimax proof uses the single observation `0` for truths `x` and `-x`, with admissible noises `-Kx` and `Kx`; the triangle inequality gives the lower bound for arbitrary deterministic maps. The factor-two identity follows from symmetry and convexity of the power source ball. The conditional-modulus theorem handles `delta = 0`, zero operators, finite positive rank, and infinite rank separately; equality is asserted only at positive singular directions, and the null equality sequence is restricted to infinite rank.

Both diagonal examples have the claimed compactness, norm, injectivity, power/logarithmic coordinates, and singular-direction equality. In the growing-gap example, splitting coordinates at `j` gives the normalized estimate by `sqrt(r_j + r_j^nu)`, where `r_j = exp(-j) -> 0`; the stated sequence `delta*_j` also tends to zero. Thus the example proves failure of a uniform positive lower constant at every sufficiently small noise radius.

The A page inventory and prerequisites match the current frontmatter. Its batch-2 prerequisite page is present at the current `inverse-problems` path; an earlier note naming a different, absent path was not treated as current evidence. The B page correctly lists its two examples and both required pages. Both assigned page bodies are empty as required. No diagram occurs in the assigned carriers, and none is needed for these arguments.

The cited source sections were checked against the authored claims:

- Christian Clason, [*Regularization of Inverse Problems*](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf): Theorem 3.5, printed pp. 20–21, gives the minimum-norm solution in the orthogonal complement of the kernel; the compact SVD discussion in §3.2, printed pp. 21–26, supplies the singular-system context. Section 4.2, printed pp. 36–43, contains the centered-modulus lower bound (Theorem 4.10), power-ball upper bound (Theorem 4.11), and singular-direction equality (Theorem 4.12). Those source results have narrower stated settings in places; the assigned items give their own proofs for the stated extensions, including arbitrary deterministic reconstruction maps, δ=0, and finite-rank cases.
- Bernd Hofmann and Peter Mathé, [“A Note on the Modulus of Continuity for Ill-Posed Problems in Hilbert Space”](https://www.tu-chemnitz.de/mathematik/ip/fulltext/hofmann_b76.pdf): §1, equations (4), (6), and (7), PDF pp. 2–3, gives the spectral source-set, two-truth, and centered-modulus conventions. Its two moduli are not stated as the exact factor-two equality used here; the assigned minimax proof derives that equality directly for the symmetric convex power ball.

## Repairs and evidence

- `lem-ip-index-source-elements-are-minimum-norm`, Proof 1.1: made the kernel-orthogonality inference explicit by placing the multiplier output in the closed span of the positive right singular vectors, which the SVD supplier identifies with `N(K)^perp`. This avoids leaving continuity of the inner product as an unstated step.
- `ex-ip-polynomial-singular-decay-source-balls`, Fact F8 and Verification 2.1: recorded strict monotonicity of `log` as a supplied fact for the logarithmic-index bound; stated that each finite truncation has range exactly `span(e_1, ..., e_N)` because its retained diagonal coefficients are nonzero, which supplies the finite-rank hypothesis of the compactness lemma.
- `ex-ip-exponential-singular-decay-source-balls`, Fact F8 and Verification 2.1: made the same logarithm and finite-rank justifications explicit, using `s_j > 0` for the retained coordinates.
- Regenerated the affected entries in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-3.proof-contracts.json`. No `verification.judge` record was present on the changed items.

After the final item edits, reflow reported all three files unchanged. Precheck passed on each changed item; strict proof-contract validation passed for the three changed entries; the required final proof-layout command reported 3 items, 13 steps, and 0 defects.

## Uneditable defects and blockers

None found. The live autopilot run remains in `3a-read`; this reader report does not advance or certify the run.

## Coverage limits

The review covered all nine assigned item carriers and both assigned pages, the page-level prerequisites, the supplier statements and proof sections used by the displayed arguments, the current compact-SVD proof, and the cited source sections listed above. It did not audit the entire transitive library dependency closure or re-prove unrelated published foundational results; no assigned inference was left dependent on an unreviewed claim beyond the named supplier interfaces.
