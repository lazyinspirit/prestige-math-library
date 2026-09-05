# Frontier 30 contract audit

Date: Friday, September 4, 2026.
Dispatch: `contract-audit-6`
Run: `frontier-30`

## Reproduced detector state before repair

- `boundary-audit` on `research/frontier-30-proof-contracts.json` reported `46` template clusters (`682` clustered rows) and `51` contradicted dispositions.
- `citation-fidelity` on `research/frontier-30-proof-contracts.json` reported `1095` citations checked, `0` missing quotes, and `0` widening candidates.
- `gate-liveness` reported `VACUOUS finite-smoke 0 checks`.

## Template-cluster repairs

- Batch `1`: `5` checked-row clusters / `31` clustered rows. Replaced repeated `step 1.1` and `step 3.1` evidence with item-specific step text for the zero, one, nonempty-choice, and biconditional-direction rows.
- Batch `2`: `4` checked-row clusters / `70` clustered rows. Replaced the generic `Handled in step 2.1.` and related witness-direction strings with case-specific step evidence, then split the last two residual same-item clusters inside `cor-spectrum-connected-iff-no-nontrivial-idempotents` and `cor-closed-points-dense-in-affine-spectra`.
- Batch `3`: `5` not-applicable clusters / `36` clustered rows. Rewrote the repeated `not an iff` and `no unit case` rationales so each row now names its own item.
- Batch `5`: `3` not-applicable clusters / `11` clustered rows. Rewrote the repeated example/nonempty-choice rationales with item-specific text.
- Batch `9`: `2` checked-row clusters / `14` clustered rows. Replaced the repeated singleton/choice evidence with item-specific cited-step text.
- Batch `11`: `8` not-applicable clusters / `171` clustered rows. Rewrote the repeated spectrum-and-sheaf boundary rationales item by item.
- Batch `12`: `4` not-applicable clusters / `20` clustered rows. Rewrote the repeated biconditional and endpoint rationales item by item.
- Batch `15`: `8` clusters / `293` clustered rows. Rewrote the repeated foliation/distribution rationales item by item and replaced the repeated checked `iff-forward` evidence with the actual proving step text.
- Batch `16`: `1` checked-row cluster / `3` clustered rows. Replaced the bare `step 1.1` evidence with case-specific step text.
- Batch `18`: `6` not-applicable clusters / `27` clustered rows. Rewrote the repeated Morse-theory biconditional and endpoint rationales item by item.

Changed records for this part:

- `research/frontier-30-batch-1.proof-contracts.json`
- `research/frontier-30-batch-2.proof-contracts.json`
- `research/frontier-30-batch-3.proof-contracts.json`
- `research/frontier-30-batch-5.proof-contracts.json`
- `research/frontier-30-batch-9.proof-contracts.json`
- `research/frontier-30-batch-11.proof-contracts.json`
- `research/frontier-30-batch-12.proof-contracts.json`
- `research/frontier-30-batch-15.proof-contracts.json`
- `research/frontier-30-batch-16.proof-contracts.json`
- `research/frontier-30-batch-18.proof-contracts.json`

## Contradicted-candidate adjudications

| Candidate | Disposition | Evidence | Changed record |
| --- | --- | --- | --- |
| `lem-p-regular-elements-are-preserved-by-conjugacy-and-coprime-powers [iff-forward]` | repaired | Step `2.1` explicitly uses step `1.1` and `[F1]` to prove the conjugacy biconditional. | Batch `1` row changed from `not_applicable` to `checked`. |
| `lem-p-regular-elements-are-preserved-by-conjugacy-and-coprime-powers [iff-reverse]` | repaired | The same step `2.1` proves the reverse direction of claim `1`. | Batch `1` row changed from `not_applicable` to `checked`. |
| `fs-equivalent-extensions-mean-only-that-the-middle-groups-are-isomorphic [iff-forward]` | upheld | The refutation attacks only the converse direction; the forward implication is not the branch under refutation in this false-statement item. | Batch `1` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `fs-equivalent-extensions-mean-only-that-the-middle-groups-are-isomorphic [iff-reverse]` | repaired | Step `3.1` records that the two extensions share the middle group but are not equivalent by step `2.1`, so the converse direction is explicitly refuted. | Batch `1` row changed from `not_applicable` to `checked`. |
| `lem-every-zariski-closed-set-has-a-radical-defining-ideal [empty]` | repaired | Step `1.1` covers `Z = ∅` by choosing `J = R`, so `I(Z)` is the empty intersection `V(R)` and equals `√R = R`. | Batch `2` row changed from `not_applicable` to `checked`. |
| `lem-distinguished-opens-cover-every-open [empty]` | upheld | The union is indexed by the ideal `I` itself, and every ideal contains `0`, so the family `{D(f)}_{f in I}` is never empty. | Batch `2` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `lem-spectrum-compactness-open-cover-to-unit-ideal [empty]` | repaired | If the index set were empty, the proof still closes: either `R = 0` and the empty-generated ideal is already `R`, or steps `1.1` and `2.1` produce a maximal ideal outside the empty union. | Batch `2` row changed from `not_applicable` to `checked`. |
| `lem-union-of-a-chain-of-dominated-extensions [empty]` | upheld | The Statement explicitly assumes a nonempty chain `C`, so the empty-chain union lies outside the written hypotheses. | Batch `4` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `thm-pi-system-criterion-for-independent-sigma-algebras [empty]` | upheld | `[L1]` reduces independence checks to finite subfamilies with `n ≥ 1`; the detector is reacting to the word `family`, not to a missing empty-family branch. | Batch `5` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `thm-rectangle-criterion-for-independent-random-elements [empty]` | upheld | Clause `2` already quantifies only over `n ≥ 1`, so the displayed rectangle product never ranges over an empty family. | Batch `5` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `cor-finite-random-variable-independence-agreement [empty]` | upheld | The item compares two independence notions for one fixed finite family of variables; it does not introduce a separate optional empty-family parameter. | Batch `5` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `thm-independent-random-elements-have-product-joint-law [empty]` | upheld | The Statement begins with `n ≥ 1`, so the product space and product measure are formed only for a nonempty finite list of factors. | Batch `5` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `thm-factorization-of-expectations-for-independent-variables [empty]` | upheld | The Statement fixes `n ≥ 1`, so the displayed products are over a nonempty finite list. | Batch `5` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `thm-pairwise-independent-borel-cantelli-frequency-law [empty]` | upheld | The theorem is about one fixed infinite sequence `(A_n)_{n≥1}`, not an optional empty family of events. | Batch `5` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `cor-second-borel-cantelli-lemma-under-pairwise-independence [empty]` | upheld | The corollary is indexed by the whole sequence `(A_n)_{n∈N}`; the detector is only seeing the summation sign. | Batch `5` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event [empty]` | upheld | The event is defined from one fixed infinite series, not from an optional empty family of coordinates. | Batch `5` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `lem-fejer-kernel-is-a-positive-approximate-identity [empty]` | upheld | The sums run from `0` to `N` with `N ≥ 0`, so the indexed family always contains at least the `j = 0` term. | Batch `6` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `thm-fejer-means-converge-at-lebesgue-points [zero]` | upheld | Step `1.1` chooses `δ > 0`, and step `2.1` uses `a_N = min(δ,(N+1)^{-1}) > 0`, so the later divisions by `t^2` and `δ^2` occur only for positive denominators. | Batch `6` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `lem-poisson-kernel-on-the-circle-is-a-positive-approximate-identity [empty]` | upheld | The Fourier series is indexed by all integers `k ∈ Z`, not by an optional empty family. | Batch `6` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `thm-abel-means-converge-in-lp-uniformly-and-at-lebesgue-points [zero]` | upheld | Step `1.3` enters the tail estimate only with `r ≥ 1/2` and `t ∈ [a_r,δ]` where `a_r > 0`, so the denominators `16rt^2` and `4t^2` are already positive when used. | Batch `6` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `thm-gibbs-overshoot-at-a-piecewise-c-one-jump [zero]` | upheld | Step `1.1` works with `x_N = 1/(2N+1) > 0`; the displayed denominators occur only as removable singularities inside the same integral formula, not as free zero parameters. | Batch `6` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `ex-fejer-summation-of-the-square-wave [zero]` | upheld | The denominator `2m+1` comes from odd Fourier modes with `m ≥ 0`, so it is always a positive odd integer. | Batch `6` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `cex-abel-summability-does-not-imply-ordinary-convergence [zero]` | upheld | Step `2.1` works only for `0 ≤ r < 1`, so the denominator `1+r` is strictly positive throughout the witness computation. | Batch `6` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `lem-principal-symbol-under-a-c-one-coordinate-change [empty]` | upheld | The multi-index set `{α : |α| ≤ m}` is nonempty even when `m = 0` because it contains `α = 0`. | Batch `7` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `lem-transport-equation-along-a-characteristic [zero]` | upheld | The detector is reading derivative notation `d/ds` as division; the proof never divides by a free scalar `s` or by `0`. | Batch `7` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `lem-transport-characteristics-depend-c-one-on-initial-position [zero]` | upheld | Step `2.1` explicitly fixes a nonzero scalar `h` before forming the difference quotient `Z_h`. | Batch `7` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `thm-dirichlet-character-orthogonality [empty]` | upheld | The character sum is over all Dirichlet characters modulo `q` and is never empty because the principal character always exists. | Batch `8` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `cor-dirichlet-character-residue-class-indicator [empty]` | upheld | The average is again over all Dirichlet characters modulo `q`, so the family is nonempty for the same reason. | Batch `8` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `lem-nonprincipal-dirichlet-character-complete-sum [empty]` | upheld | A complete residue system modulo `q` has `q` representatives and `q ≥ 1`, so the displayed sum is not over an optional empty family. | Batch `8` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `lem-nonprincipal-dirichlet-character-partial-sums [empty]` | upheld | The sum is over `1 ≤ n ≤ x` with `x ≥ 1`, so the index range is nonempty on the written hypotheses. | Batch `8` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `thm-principal-dirichlet-l-factorization [empty]` | repaired | Step `1.1` already covers `q = 1`: then there are no primes dividing `q`, so the factor product is the empty product `1` and the formula reduces to `L(s,χ_0)=ζ(s)`. | Batch `8` row changed from `not_applicable` to `checked`. |
| `thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane [empty]` | upheld | The Dirichlet series starts at `n ≥ 1`, so the detector is reacting to series notation rather than to an omitted empty family. | Batch `8` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `lem-positive-log-dirichlet-series-nonvanishing [empty]` | upheld | The logarithmic Dirichlet series begins at `n ≥ 2` and is not an optional empty-family parameter. | Batch `8` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `thm-product-dirichlet-l-nonvanishing-line-one [empty]` | upheld | The product ranges over all Dirichlet characters modulo `q` and includes the principal character, so it is nonempty. | Batch `8` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `thm-primes-residue-class-dirichlet-density [empty]` | upheld | The prime sum is the arithmetic set whose density is being computed, not an optional family parameter that can simply be omitted. | Batch `8` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `thm-mertens-primes-arithmetic-progressions [empty]` | upheld | The prime sum is the specific residue-class counting function under study, not a free empty-family choice. | Batch `8` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `thm-mertens-primes-arithmetic-progressions [zero]` | upheld | The denominators `p` and `p^m` are positive prime powers, and the logarithmic derivative is used only where the Euler product keeps `L(s,χ)` nonzero. | Batch `8` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `lem-equivalent-definitions-of-the-hilbert-symbol [zero]` | repaired | Step `1.1` splits the `z = 0` and `z ≠ 0` cases before dividing by `z^2`, and step `2.1` likewise splits the `y = 0` and `y ≠ 0` cases before dividing by `y^2`. | Batch `8` row changed from `not_applicable` to `checked`. |
| `thm-hilbert-reciprocity-over-the-rationals [empty]` | upheld | The product is over all places of `Q`, which always includes the real place and therefore is not an optional empty family. | Batch `8` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `thm-hasse-minkowski-for-ternary-forms-over-q [zero]` | repaired | Step `1.1` normalizes to nonzero squarefree integers `a,b`, and step `4.1` explicitly separates the `Y = 0` and `Y ≠ 0` branches before dividing by `y`. | Batch `8` row changed from `not_applicable` to `checked`. |
| `lem-global-square-class-approximation [zero]` | upheld | Step `2.1` chooses `ℓ` to be an odd prime outside `S ∪ P`, so the denominator `ℓ` in `M/ℓ` is automatically nonzero. | Batch `8` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `thm-rational-maps-to-affine-variety-function-field [zero]` | upheld | Step `1.2` explicitly writes `σ(\overline y_i)=a_i/d_i` with `d_i ≠ 0` in the domain `k[X]`. | Batch `12` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `thm-gluing-sheaves [empty]` | repaired | Steps `1.1` and `2.1` define and glue compatible families on the cover; when the cover is empty those are just the unique empty family, so the empty-cover case is already absorbed by the same construction. | Batch `13` row changed from `not_applicable` to `checked`. |
| `prop-local-frame-characterization-of-a-smooth-distribution [empty]` | repaired | Steps `1.1` and `1.2` already cover rank `0`: the first `0` frame vectors form the empty local frame, and their span is the zero subbundle. | Batch `15` row changed from `not_applicable` to `checked`. |
| `prop-sections-of-a-distribution-form-a-locally-free-module [empty]` | repaired | Step `1.2` already covers rank `0`: an empty local frame expresses the unique local section as the empty sum, namely the zero section. | Batch `15` row changed from `not_applicable` to `checked`. |
| `prop-local-diffeomorphisms-carry-distributions-and-integral-manifolds [empty]` | upheld | The displayed family is indexed by the points of the fixed open set `U`, and if `U = ∅` both conclusions are vacuous on that neighborhood. | Batch `15` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `fs-every-constant-dimensional-family-of-tangent-subspaces-is-a-smooth-distribution [empty]` | upheld | The refutation fixes one explicit one-dimensional family of lines on `R^2`; the detector is reacting to the word `family`, not to a missing empty-family branch. | Batch `15` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `fs-frobenius-applies-to-any-variable-rank-family-of-subspaces [empty]` | upheld | The refutation uses one explicit variable-rank family on `R`, so there is no optional empty family or empty index set to certify separately. | Batch `15` row kept `not_applicable`; added item-specific `reviewed.upheld`. |
| `thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights [empty]` | repaired | Step `2.1` identifies the highest weight as a dominant integral combination of the fundamental weights, and when `r = 0` that combination is the empty sum `λ = 0`; step `3.1` then gives the unique simple module `L(0)`. | Batch `16` row changed from `not_applicable` to `checked`. |
| `lem-rho-shift-intertwines-the-dot-and-ordinary-weyl-actions [iff-forward]` | repaired | Step `1.1` proves that dot-invariance of `f` implies ordinary `W`-invariance of `Tf`. | Batch `16` row changed from `not_applicable` to `checked`. |
| `lem-rho-shift-intertwines-the-dot-and-ordinary-weyl-actions [iff-reverse]` | repaired | Step `1.2` proves that ordinary `W`-invariance of `Tf` implies dot-invariance of `f`. | Batch `16` row changed from `not_applicable` to `checked`. |

No item-text repair was licensed or needed in this dispatch, so no new `research/defect-ledger.jsonl` row was written.

## Finite-smoke repair

Candidate: `gate-liveness` reported `VACUOUS finite-smoke 0 checks`.

Disposition: repaired by adding one applicable `cyclic-subgroup-lagrange` obligation to `lem-cyclic-generator-class-functions-by-moebius-inversion` in batch `17`.

Evidence:

- Step `1.1` states: `For each divisor m of |C|, the subgroup <g^{|C|/m}> has order m`.
- The registered `cyclic-subgroup-lagrange` check is an honest bounded countermodel search for the subgroup-size-by-divisor claim in finite cyclic groups.

Changed record:

- `research/frontier-30-batch-17.proof-contracts.json`

Post-fix `finite-smoke` result:

- `1` check over `1/527` items carrying obligations, passing.

## Post-merge reruns

- `node tools/merge-proof-contracts.mjs --level frontier-30 research/frontier-30-proof-contracts.json research/frontier-30-batch-*.proof-contracts.json`
  - pass; wrote the merged run contract with `527` scoped items.
- `node tools/proof-contract.mjs research/frontier-30-proof-contracts.json --strict`
  - pass; `0 error(s), 1 warning(s), 527/527 item(s) checked`.
  - standing warning only: `shotgun-bracket` on `lem-clopen-subset-gives-idempotent-decomposition`.
- `node tools/finite-smoke.mjs research/frontier-30-proof-contracts.json`
  - pass; `0 error(s), 1 check(s) over 1/527 item(s) carrying obligations`.
- `node tools/boundary-audit.mjs research/frontier-30-proof-contracts.json --fail-on-contradicted --fail-on-template`
  - pass; `0` template clusters, `0` contradicted candidates, `37` upheld rows.
- `node tools/citation-fidelity.mjs research/frontier-30-proof-contracts.json --fail-on-missing-quote`
  - pass; `1095` citations checked, no missing quote, no widening candidate.
- `node tools/gate-liveness.mjs --run frontier-30 --contracts research/frontier-30-proof-contracts.json --checklists research/frontier-30-batch-1.coverage.json,...,research/frontier-30-batch-20.coverage.json --min-checks 1`
  - pass; `finite-smoke 1`, `proof-contract 527`, `coverage-checklist 1002`, `precheck 10264`.
- `node tools/risk-report.mjs research/frontier-30-proof-contracts.json --require-reviewed`
  - pass; `0 error(s), 527 item(s) routed`.

## Remaining blocker

- None in this dispatch scope.
