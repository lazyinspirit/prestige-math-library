# Batch 11 authoring notes — numerical-analysis-remaining-71-2026-10-17

Role: beta  
Pair: `randomized-low-rank-approximation` / `randomized-low-rank-approximation-examples`  
Coverage: batch 11, scheduled dependency level 0; no prerequisite batches  
Scheduling input: `a9c2867eaa03cf0691cfe311c2db2df06f2bb75d230effbc8a099369ec33749c`

## Controlling documents and conflicts

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, the assigned batch tasks, the current `plan-spec.json`, the batch dependency-level inventory, the complete NA-08 sections at `research/plan-numerical-analysis-track.md` L116 and `research/plan-numerical-linear-track.md` L1093, and the complete current owner direction at `research/numerical-analysis-remaining-71-2026-10-17-owner-authoring-direction.md`.

The current plan-spec NA-08 row controls page identity, order 2576, category, title, companion, and the two ordered page requirements (`sparse-matrix-models-and-kernel-costs`, `computed-singular-values-and-rank-revealing-factorizations`). Its `items` array is empty because the current run adds the scaffold inventory. Both listed page suppliers are published. The older general and specialist NA-08 prose specifies only real standard Gaussian input. This conflicts with the current owner direction, which explicitly preserves the exact expected spectral bound over real and normalized complex fields and overrides stale design/task text. Therefore the owner direction controls field scope; the plan-spec controls placement and page dependencies. The normalized complex convention is `z=(X+iY)/sqrt(2)` and `E|z|^2=1`. The owner direction also requires a separate power result with QR after every multiplication by `A` or `A*`. The batch retains both field branches and records the unresolved complex proof without weakening the target.

The older proof route calls for an additional concentration supplier. The authored proof uses inverse moments and direct Markov tails only, so it does not introduce an unused concentration claim. The exact spectral bound, deterministic SVD partition, local Gaussian prerequisites, and separate power-error transfer are retained.

## Inventory and dependency order

The scaffold contains 16 A-page items and 3 B-page items (19 total; below the 100-item cap). Item levels were recomputed from actual in-run dependencies; external published suppliers contribute no in-run level:

- Level 0: `def-standard-real-and-normalized-complex-gaussian-matrix-law`, `lem-orthogonal-projector-power-error-inequality`.
- Level 1: `alg-gaussian-randomized-range-finder`, `lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence`, `lem-finite-real-gaussian-increment-comparison`.
- Level 2: `alg-randomized-power-subspace-iteration-with-qr`, `lem-wide-gaussian-matrix-has-full-row-rank-almost-surely`, `lem-real-scaled-gaussian-product-expectation`, `lem-randomized-rangefinder-deterministic-svd-partition-error`.
- Level 3: `thm-randomized-power-rangefinder-error-transfer`, `lem-wide-gaussian-pseudoinverse-frobenius-moments`, `ex-power-rangefinder-loses-small-mode-without-qr`, `ex-gaussian-rangefinder-exact-on-rank-k-matrices`.
- Level 4: `lem-wide-gaussian-pseudoinverse-spectral-moments-and-tail`.
- Level 5: `thm-real-gaussian-rangefinder-expected-spectral-error`.
- Level 6: `thm-gaussian-rangefinder-expected-spectral-error`, `thm-real-gaussian-power-rangefinder-expected-error`, `ex-slow-singular-tail-rangefinder-error-term`.
- Level 7: `thm-gaussian-power-rangefinder-expected-error`.

## Proof audit and outcomes

The batch adds complete real and normalized-complex Gaussian laws, orthogonal/unitary invariance and block independence, a direct almost-sure full-row-rank proof, inverse-diagonal Gamma laws and exact pseudoinverse Frobenius moments, sphere-moment comparison and explicit spectral moment/tail estimates. It separately proves the finite real Gaussian increment comparison, the real scaled-product inequality, deterministic SVD-partition error, and the real expected spectral bound. The full-field expected bound retains its exact statement but the complex branch remains escalated. The QR power algorithm, projector-power inequality, general expectation transfer, real power bound, and full-field power target are also present; only the real power branch is proved.

The complex hold is exact and localized. Current proposed supplier: `lem-normalized-complex-scaled-gaussian-product-expectation`. It must prove for all fixed compatible complex matrices `S,T` and iid normalized complex Gaussian `G` the sharp bound `E||SGT||_2 <= ||S||_2||T||_F + ||S||_F||T||_2`, or provide a complete alternative argument that yields the exact assigned expectation. The real covariance interpolation proof is not asserted for complex phases. The owner cycle-2 source packet records the limitations of the attempted complex Slepian/Gordon/Chevet routes, including the unaccounted `sqrt(2)` factor in the available route and unsuccessful alternatives. No missing source excerpt, completed proof, or acceptance is fabricated. Affected claims are the normalized-complex branch of `thm-gaussian-rangefinder-expected-spectral-error` and the corresponding branch of `thm-gaussian-power-rangefinder-expected-error`; both require owner escalation.

The real moment tail proof uses the pointwise Markov estimate `t^r 1_{X>t} <= X^r`, stated in its proof. Gamma ratio and factorial estimates are derived locally. The deterministic partition proof does not invert a singular-value block and includes `rank(A)<k`. The power transfer is field-independent and assumes finite expected powered error; it is not presented as an expected Gaussian bound until the powered matrix bound is supplied.

The examples are finite and explicit: `diag(4,1,0,0)` with `k=p=2` is recovered exactly almost surely; the family `diag(j^{-1/2})` makes the tail-Frobenius contribution arbitrarily large relative to the leading singular-value term; a thresholded dyadic arithmetic model with `A=diag(1,2^-10)`, `q=4`, and threshold `2^-70` demonstrates why intermediate QR matters.

## Sources and harvested results

Four full texts were inspected; the coverage ledger lists exact locators, all harvested results and dispositions:

1. Halko–Martinsson–Tropp, *Finding Structure with Randomness*, full 74-page author-hosted PDF, especially §§4.1, 4.5, 8–10 and Appendix A.1–A.2, including the full proof of Theorem 10.6. The source's real product proposition invokes external Gaussian comparison, and the pseudoinverse tail results import external estimates; local proofs are supplied where consumed. The normalized-complex analog is not treated as proved by this source.
2. Martinsson–Tropp, *Randomized Numerical Linear Algebra: Foundations & Algorithms*, complete 116-page PDF, §§11.1.1–11.1.2, 11.4.1–11.4.2, 11.6.1–11.6.2. It independently confirms the exact-arithmetic range finder, deterministic error route and QR power transfer; the expected Gaussian theorem is real and its proof sketch cites earlier results.
3. Mahoney, *Lecture Notes on Randomized Linear Algebra*, complete 188-page PDF, §§14.1, 14.3 and 17.2. This distinct-author lecture-note treatment supports the Eckart–Young baseline and power-transform scope; its Lemma 38 proof is omitted, so it is not used as proof authority for the projector-power lemma.
4. Chevet, *Séries de variables aléatoires gaussiennes…*, complete 18-page scanned seminar text, §§2–3. The Sudakov–Fernique comparison is recorded as a route cross-check; the local finite comparison supplies its complete interpolation proof. The general Banach-tensor estimate is not substituted for the exact local real matrix constant.

There were no new failed retrievals among these four sources. The inherited complex-product search and source limitations are preserved in `research/numerical-analysis-remaining-71-2026-10-17-ROOT-gaussian-planning-cycle2/final-disposition.md` and its source files; they are not re-counted as new attempts and no `source_resolution.status=dropped` is asserted. `node tools/source-fetch-check.mjs --coverage research/numerical-analysis-remaining-71-2026-10-17-batch-11.coverage.json --stamp` reported 4/4 full-text sources fetch-verified and 4/4 resolved, with 4 newly stamped and no drops.

## Cross-batch interfaces

`research/numerical-analysis-remaining-71-2026-10-17-batch-11.cross-batch-dependencies.json` records the declared page edges and current item-level interfaces. Batch 16 (HIER) still has empty A/B item inventories and no page/item carriers, so no consumer item ID or claim can be verified. Batch 17 (SKETCH) now has 12 A items and 3 B items with page and item carriers; the current Gaussian squared-norm tail lemma and fixed-subspace OSE theorem were read with their complete proofs. The tail lemma consumes the NA-08 Gaussian-law definition; the OSE theorem consumes the orthogonal/unitary invariance lemma through right-unitary completion. Those supplier hypotheses match real and variance-one normalized complex Gaussians. This verifies interfaces only; no downstream pair acceptance is claimed.

HIER's planned objects are hierarchical block compression, recompression, matvec/product and factorization residuals. An expectation bound from NA-08 cannot certify a deterministic per-draw truncation, block propagation or solver residual. Any future item consuming an expectation must match the fixed-matrix iid Gaussian hypotheses and preserve the expectation-valued conclusion; complex use remains subject to the exact supplier hold above. SKETCH's Gaussian OSE proof derives its own scalar-tail, finite-net and Hermitian norm-transfer arguments. It does not consume the NA-08 expected rangefinder or power theorem; that expectation is not an embedding guarantee. No HIER or SKETCH downstream claim is accepted or inferred here.

## Gate record

Final scoped results:

| Check | Result |
|---|---|
| Normative precheck | 16/16 proof-bearing items pass; 0 failures. |
| `proof-layout` on all 19 changed item files | 19 items, 44 numbered proof steps, 0 defects. |
| `content-policy` on the assigned manifest | 19 scoped items, 0 errors, 0 warnings. |
| `manifest-deps` on the assigned manifest | 19 items, 0 missing dependency arrays, 0 errors. |
| Focused `depcheck` on all 19 assigned IDs | 0 errors, 0 warnings; 1,245 prerequisite items and 133 prerequisite pages traversed. |
| Batch-local dependency reconciliation | All 19 manifest/frontmatter dependency lists agree; all 19 levels recompute correctly, maximum level 7. |
| Whole-run `item-dependency-levels check --run numerical-analysis-remaining-71-2026-10-17` | Exit 1 from other batches: 74 empty scaffold inventories and 10 level mismatches. Exact mismatched items: `alg-incremental-planar-delaunay-edge-flips`, `alg-incremental-three-dimensional-regular-cavity-repair`, `alg-randomized-history-dag-point-location`, `thm-incremental-planar-delaunay-correctness-and-termination`, `thm-three-dimensional-lower-hull-coverage-empty-sphere-and-termination`, `thm-randomized-history-dag-expected-location-cost`, `thm-three-dimensional-delaunay-output-size-quadratic`, `ex-cocircular-four-site-lexicographic-tie`, `ex-collinear-sites-lower-dimensional-output`, `ex-scattered-linear-interpolation-over-delaunay-cell`. No batch-11 item appears in the error list. HIER remains empty; SKETCH has current carriers and its item-level interfaces are recorded above. No other batch was edited. |
| Coverage checklist | 1 A page, 27 harvested rows, 0 errors, 0 warnings. |
| Source fetch check | 4/4 source occurrences fetch-verified and resolved; 0 documented drops. |
| Strict proof contract | 16/16 proof-bearing items, 0 errors, 0 warnings. The three worked examples include explicit finite checks. |
| Step 1 records | 17 items recorded `ready`; the two full-field expectation targets are `escalated`. Their direct dependency lists are recorded and hash-current. Whole-run Step 1 check reports 689 items, 199 ready, and 564 open work rows; the only two unresolved records in this batch are the explicit complex-branch escalations. |

The latest autopilot status reports the run still `running` at `1-scaffold`, with 10/71 covered; batches 2, 3, 7, 8, 9, 12, 13 and 53 others remain missing, and native refresh is pending for batches 3 and 52. The owner blocker in `research/numerical-analysis-remaining-71-2026-10-17-step1-blockers.json` requires repair and recertification before transition. No autopilot state, shared plan, published content, owner verdict, or blocker file was modified. These Step 1 construction records do not constitute independent approval or publication.


## Owner-authorized continuation — 2026-10-17T17:44:50Z

The current owner direction and the full cycle-4 Gaussian proof packet were re-read before authoring. The continuation preserves the original 19 carriers and both original theorem Statements. The A page now has 18 items, including the two approved same-page suppliers; the B page retains its three original examples. No new pair or cross-batch item edge was introduced.

### Plan control and recorded conflicts

The current `plan-spec.json` row controls pair identity, order, category, companion and page-level `requires`: A order 2576, B order 2577, category `numerical-linear-algebra-and-approximation`, with the two published page prerequisites. Those `requires` entries are page context and are not mathematical premises unless an item cites them. For the detailed mathematical design, the current numerical-linear track NA-08 section at L1093 controls the assigned page inventory and proof route; the older numerical-analysis-track NA-08 paragraph at L116 states a real-field-only theorem. The later owner direction supersedes that field restriction and explicitly authorizes the normalized-complex theorem. The earlier cycle-2/3 proposal to require a sharp complex Chevet product supplier is superseded by the cycle-4 finite-moment and same-sketch rank-shift route. The published real sources remain contextual; no source is represented as proving the new complex estimates.

### Authored mathematical work

- `lem-normalized-complex-gaussian-block-affine-spectral-second-moments` (level 4) proves both affine bounds from the variance-one complex law, reciprocal Gamma moments, sphere moments, Jensen on finite Bernoulli subsets and the exact Frobenius-weight trace. It defines the Gamma and Beta conventions it uses, includes the null rank-loss version, and keeps Countable Choice explicit.
- `lem-normalized-complex-rangefinder-direct-spectral-expectation` (level 5) proves the complex expected spectral bound from the deterministic partition estimate and the block supplier. It uses the same sketch and output projector in all three tail regimes, shifting only the deterministic SVD analysis rank; p=2,3 and zero-tail cases are included.
- The unchanged Statement of `thm-gaussian-rangefinder-expected-spectral-error` now has complete real and normalized-complex branches. Its complex proof identifies the finite-scan projector with the projector from any orthonormal basis of the same range.
- The unchanged Statement of `thm-gaussian-power-rangefinder-expected-error` now has complete real and normalized-complex branches by applying the base theorem to \(B=(AA^*)^qA\) and then using the existing powered-error transfer.

The current manifest records the internal levels 4, 5, 6 and 7 in supplier order. All declared item dependencies match the carriers. Batch 11 remains dependency level 0 with no in-run prerequisite batch; `batch-11.cross-batch-dependencies.json` remains empty. The actual page inventories and original examples are retained.

### Sources and current evidence

The full HMT (74-page), Martinsson–Tropp (116-page), Mahoney lecture-note (188-page) and Chevet (18-page) texts and the prior reading limits/retrieval history remain recorded. The six new HMT/Martinsson–Tropp harvest rows explicitly mark the complex estimates out-of-scope for those real-field treatments. No new retrieval failed, no source was dropped, and no Alpha reading or concurrence is claimed. `source-fetch-check --coverage research/numerical-analysis-remaining-71-2026-10-17-batch-11.coverage.json --stamp` verified all 4/4 source occurrences (0 newly stamped, 0 documented drops).

Final scoped checks after the last proof edits:

| Check | Result |
|---|---|
| Normative precheck | 4/4 changed proof carriers pass. |
| `proof-layout` on the 4 changed item files | 4 items, 21 steps, 0 defects. |
| `content-policy` on the assigned manifest | 21 items, 0 errors, 0 warnings. |
| `manifest-deps` | 21 items, 0 missing dependency arrays. |
| Focused `depcheck` on all 21 assigned IDs | 0 errors, 0 warnings; 1,348 prerequisite items and 280 prerequisite pages traversed. |
| Batch-local item dependency levels and carrier/manifest dependency comparison | 21 items, 0 errors or mismatches; complex block 4, direct complex bound 5, shared base 6, power theorem 7; maximum 7. |
| Strict proof contract | 18/18 proof-bearing items, 0 errors, 0 warnings. Both changed theorem contracts include the actual complex steps and boundary cases. |
| Coverage checklist | 1 A page, 33 harvested rows, 0 errors. It retains the warning that 13/33 rows are scaffolded and requests Alpha confirmation of declines; no confirmation is claimed. |

The required whole-run `batch-dependency-levels check` returned `Stale batch dependency levels for numerical-analysis-remaining-71-2026-10-17; recompute before authoring`. Batch 11's own current row remains level 0 with `requires: []`, and no new cross-batch edge was added. The run-wide derived artifact was left to the owner, as required by the concurrent-author closeout direction.

Author readiness was recorded `ready` for the two new lemmas after checking their exact dependency lists, placement, supplier bodies, proof contracts, source coverage and local level ordering. The pre-existing owner-owned `escalated` records for the two Gaussian theorem items were not overwritten and no `--owner` flag was used. Their proof carriers/contracts are now complete; the owner retains the readiness/hash reconciliation. These records and all mechanical checks are authoring evidence only, not independent proof approval or a native gate.

## Final proof wording check — 2026-10-17T17:47:03Z

Clarified the rank-at-most-k, q=0 sentence in the powered theorem so it states the conclusion for the expected errors: the powered matrix tails vanish, the base bound makes the powered expected error zero, and the transfer gives zero target expectation. Refreshed the corresponding contract derivation. Reran the normative precheck (4/4 pass), proof-layout on all 4 changed item files (21 steps, 0 defects), and strict proof-contract validation (18/18, 0 errors/warnings). This proof-only wording edit changed no dependencies, source records, page inventories or levels; the other scoped results above remain current.
