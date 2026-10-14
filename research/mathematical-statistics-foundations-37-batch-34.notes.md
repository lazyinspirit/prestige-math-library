# Batch 34 authoring notes - Robust Covariance and Sparse Robust Estimation

Run mathematical-statistics-foundations-37, dispatch batch 34, pair robust-covariance-and-high-dimensional-stability and its examples page. The controlling track labels this pair MSF-33; the batch number is not the track label. Only this pair's draft items, A/B pages, and batch-34 evidence are edited.

## Controlling design and reconciliation

The current MSF-33 row at research/plan-mathematical-statistics-track.md:115 controls scope. It requires the dense all-regime lower rate to be capped by min{1,(p/n) vee epsilon^2}, alongside the retained small-ratio packing, zero-padded block argument, and bounded-sample rank-one testing branch. The former uncapped clause is superseded by this current plan row; its false version remains recorded in the B counterexample. The original design material and plan-spec.json do not provide a competing item inventory: plan-spec page metadata agrees, and its empty items arrays are scaffold placeholders. No plan file was edited.

The dispatch scheduling input was dd05d82b8e5bf49626aa96d504293f4afc76b61792a92c3d8eaa81be00ba597c; the shared batch-dependency record currently records input hash 6e1c86944ecd4ef6db1a3278746ff762bf62c176309acd6c8da4e73df54b6f80 and batch 34 level 6 with prerequisites 17, 31, and 33. This authoring pass changed the assigned manifest, so the shared input hash now requires owner recomputation; the shared scheduling file was not edited. The last recomputed .autopilot status reported 36/37 scaffold batches covered, with batch 34 missing and Step 1 held for owner repair/recertification; this is engine status, not a claim that the draft artifact is absent from the workspace. No RESUME file was used as run-state evidence, and no engine transition was attempted.

The broader foundations-06 dossier also discusses weak-lq covariance; the controlling MSF-33 row assigns that topic to MSF-23 and defines this page's sparse class as one common correlated block of size at most s. Batch 34 keeps the dense and single-block Huber results separate from the clean heavy-tail procedure. The design and current plan agree on this class boundary.

## Inventory and levels

The assigned inventory has 31 A items and 6 B examples/counterexamples, 37 total and below the 100-item page cap. Item levels were recomputed over the run graph after removing the pilot's unnecessary direct dependency on the batch-33 finite-variance mean theorem. Manifest, item frontmatter, and library page lists now use those levels and place suppliers before consumers.

| Level | Batch-34 items |
|---:|---|
| 0 | def-covariance-matrix-of-a-random-vector; lem-finite-dimensional-golden-thompson-trace-inequality; lem-matrix-depth-gaussian-scale-constant-exists-uniquely; lem-projection-slab-uniform-deviation |
| 1 | def-bounded-spectrum-covariance-class; def-matrix-variance-of-a-random-vector; lem-bounded-independent-matrix-bernstein-via-trace-exponential; lem-finite-second-moment-covariance-matrix-is-well-defined |
| 2 | alg-adaptive-truncated-covariance-estimator; def-block-sparse-covariance-class; def-huber-covariance-model; lem-covariance-median-pilot-exact-block-budget; lem-matrix-variance-intrinsic-dimension-at-least-one; lem-oracle-truncated-covariance-and-vector-concentration; cex-matrix-variance-does-not-dominate-trace-covariance-product; ex-clean-heavy-tailed-finite-matrix-variance |
| 3 | def-matrix-depth-covariance-estimator; lem-adaptive-truncated-covariance-estimator-is-total; lem-fixed-scale-truncated-covariance-deviation; lem-huber-covariance-mixture-is-a-probability-measure; cex-bounded-spectrum-covariance-lower-rate-must-be-capped; cex-intrinsic-variance-alone-does-not-control-covariance-pilot |
| 4 | lem-adaptive-covariance-lepski-scale-reduction; lem-gaussian-kullback-leibler-covariance-formula; lem-matrix-depth-maximizer-exists-on-compact-classes; lem-scaled-gaussian-covariance-has-depth-at-least-half; ex-block-sparse-huber-covariance-model; ex-dense-huber-covariance-model |
| 5 | lem-huber-covariance-ambient-action-tail-lower-bound; lem-huber-covariance-contamination-modulus-lower-bound; lem-huber-matrix-depth-estimator-operator-error; lem-measurable-matrix-depth-maximizer-selection; thm-heavy-tailed-covariance-bound |
| 6 | lem-clean-block-sparse-gaussian-covariance-minimax-lower-bound; lem-clean-dense-gaussian-covariance-minimax-lower-bound |
| 7 | thm-huber-covariance-upper-and-lower-risk; thm-huber-sparse-covariance-upper-and-lower-risk |

The matrix-depth argmax proof uses finite-dimensional closedness, compactness, and upper-semicontinuous maximization. At tied empirical projections, each observation belongs to both weak tails; the minimum of the two finite tail counts is upper semicontinuous. Selector measurability is proved separately with finite depth-level hit sets, lexicographic dyadic subdivision, and a sample-dependent cap for global classes.

## Supplier interfaces and open checks

research/mathematical-statistics-foundations-37-batch-34.cross-batch-dependencies.json records 23 direct active-run item edges and four page prerequisites. Supplier bodies were inspected for the used hypotheses and conventions; this is interface evidence, not independent acceptance. The batch-15 sign-MGF result is not a dependency because the scalar bound is proved locally.

- Batch 17: KL is directional and requires absolute continuity; Pinsker uses event-supremum total variation with no extra factor; product KL applies to finite products. The dense/sparse packing proofs use the actual Fano risk statement with a discrete classifier metric and the actual squared-risk two-point Le Cam statement with binary targets.
- Batch 31: Huber contamination is iid mixture contamination; the modulus uses the event-supremum TV threshold epsilon/(1-epsilon) for epsilon<1 and all pairs at epsilon=1. The generic robust-risk definition uses Theta-valued actions, so the local ambient-action lemma carries the lower bounds to arbitrary Borel matrix-valued estimators. The contamination-modulus edge is recorded as interface-compatible with review still pending, not accepted.
- Batch 33: The pilot uses the actual deterministic geometric-median algorithm, Borel minimum-norm selector, and Hilbert-space majority-radius lemma. Its local block-budget lemma derives k=floor(3.5 beta)+1 and failure e^(-beta) directly from block moments and Chernoff. It has no dependency edge to thm-finite-variance-geometric-median-mean-bound; that theorem's confidence convention remains separate context.
- Batch 14: The unit-sphere net at radius 1/4 supplies the 9^p cardinality used in the dense packing argument.
- Batch 2: The randomized-procedure definition supplies probability kernels; finite nearest-code rules are Borel deterministic kernels.
- Spectral prerequisites: The published spectral page supplies the real self-adjoint spectral theorem and operator-norm conventions for covariance classes, truncation, and the operator-error reduction.

## Mathematical proof obligations and escalations

1. The local measurable-selector lemma proves joint upper semicontinuity, closed finite-depth hit sets, a dyadic Borel selector on compact classes, and a data-dependent cap for global dense and single-block sparse maximizers. Both global and bounded-class estimator versions are retained; the continuous-section theorem is not invoked.
2. The clean heavy-tail fixed-scale and adaptive proofs are complete. Local Golden-Thompson, bounded matrix Bernstein, and oracle covariance/vector lemmas replace the omitted source trace-MGF route. A uniform-in-center perturbation bound handles the same-sample pilot without conditioning it into iid data. With D=max{d,(tr Sigma/sigma0)^2} and m>=10^16 D beta, the trace-aware guarantee applies to every clean finite-fourth-moment law. Known-mean bounds hold for every m>=1; no coordinate independence or bounded-kurtosis premise is added.
3. The original d beta-only unknown-mean pilot guarantee is false. The two-axis counterexample refutes the source trace comparison; the growing-axis family independently refutes the estimator guarantee, even with a nonvacuous ambient-dimension failure factor. These examples do not refute the retained trace-aware theorem.
4. The dense all-regime lower theorem now uses the plan-approved cap. The clean small-ratio proof remains; the zero-padded block and bounded-sample rank-one branches extend it to all p,n. The ambient-action contamination reduction yields the capped Huber rate. The block-sparse upper proof treats the estimator-minus-target matrix as block diagonal on the union of the two off-diagonal supports and handles ties by choosing a norm-attaining vector in the diagonal complement where needed.
5. The heavy-tail result is clean-sample only. No Huber or replacement guarantee follows from finite matrix variance. The source's unsupported trace comparison and trace-MGF argument are not used as proof suppliers.

## Sources and retrieval history

The A page has four inspected full-text treatments: Chen-Gao-Ren (complete 53-page paper and supplement), Minsker-Wei (complete 21-page paper and supplement), Rigollet's complete 131-page MIT lecture notes, and Tropp's complete 163-page matrix-concentration notes. The B page has those two papers plus the Rigollet lecture notes as a primary context for the clean covariance example. The lecture notes provide an independent book/full-lecture-notes treatment. URLs, locators, item support, dispositions, recovery history, and fetch stamps are recorded in batch-34.coverage.json; Tropp's full-text PDF is stamped at 1,602,164 bytes, 163 pages, SHA prefix 8989dc217ae3c603. All 7 page-source records are fetch-verified; there were no retrieval failures, drops, or source_resolution escalations.

## Scoped checks and readiness

Final scoped checks:

- Item dependency levels: 486 run items across 74 pages, maximum level 12; zero errors.
- Manifest deps: all 37 assigned items have explicit dependency arrays; zero errors. Item frontmatter, manifest deps/levels, A/B page lists, and the 23 direct cross-batch item edges agree; four external page prerequisites are recorded.
- Focused depcheck: 37 selected items; 1,825 items and 214 pages in prerequisite closure; zero errors or warnings.
- Content policy: 37 assigned items; zero errors or warnings. Rendercheck: 39 assigned item/page files; zero errors or warnings.
- Precheck: 30 proof-bearing items checked; zero failures. Proof-layout: 37 assigned items, 127 numbered steps; zero defects.
- Strict proof contracts: 31/31 supplied entries; zero errors and three nonfatal shotgun-bracket warnings in the sparse lower bound, dense lower bound, and slab-deviation proof.
- Run-wide proof-contract coverage: 486 items, 367/367 supplied arguments covered. Citation fidelity: 258 citations, no missing quotes or widening candidates. Boundary audit: 248 rows, zero contradicted dispositions and no template clusters.
- Coverage checklist: two pages, 30 harvested results, zero errors and one low-yield warning. The warning is 9/24 A-page results scaffolded and asks Alpha to confirm the declines; the source records carry dispositions and reasons. Source-fetch-check: 7/7 page-source records verified, one newly stamped Rigollet record for the B page.

Step1 records: all 37 items have a ready decision, with 24 hash-current records and 13 owner-owned records whose hashes became stale after assigned content/manifest edits. Twenty missing records were recorded ready using the exact deps plus justified_by/forward_refs examined; four existing owner records remain closed. The stale owner-owned records were not overwritten and no --owner flag was used. Re-certification remains with the owner for: lem-finite-dimensional-golden-thompson-trace-inequality, lem-bounded-independent-matrix-bernstein-via-trace-exponential, lem-covariance-median-pilot-exact-block-budget, lem-oracle-truncated-covariance-and-vector-concentration, def-matrix-depth-covariance-estimator, lem-fixed-scale-truncated-covariance-deviation, lem-huber-matrix-depth-estimator-operator-error, lem-measurable-matrix-depth-maximizer-selection, thm-heavy-tailed-covariance-bound, lem-clean-dense-gaussian-covariance-minimax-lower-bound, thm-huber-covariance-upper-and-lower-risk, thm-huber-sparse-covariance-upper-and-lower-risk, and cex-intrinsic-variance-alone-does-not-control-covariance-pilot. No batch-34 item is escalated; these are owner-owned hash refreshes, not mathematical gaps.

## Owner E23 round-1 selector resolution

Root isolated the native batch34 writer before this integration. The selector lemma now supplies a complete local argument rather than an unproved fallback. Weak-tail ties are preserved: empirical depth takes the full grid `{0,1/n,...,1}`, and the all-zero sample can have depth one. Joint upper semicontinuity makes fixed-level graphs closed; compact matrix-factor projections make fixed dyadic hit predicates closed. Finite first-child rules and coordinatewise limits yield Borel compact-class selectors without another choice principle.

The controlling MSF33 global scope is restored alongside the existing bounded correspondences. A matrix whose operator norm exceeds `max_i ||x_i||²` has zero empirical depth; for sparse matrices choose a norm-attaining vector in the support block or diagonal complement, hence in `U_s`. Integer data-cap strata therefore give Borel global selectors, without claiming global argmax fibers compact. The operator-error lemma now assumes precisely the empirical-depth comparison used by its proof, covering global and bounded maximizers. Its proof retains the actual vanishing deficit `rho=n2/n1+2e`, bounds it by `C(epsilon+sqrt(q/n))`, and uses `5/12` only for a fixed inverse-CDF interval. All upper rates, confidence/model restrictions, lower claims, and separate AC branches remain intact.

The five changed items passed mandatory final explicit-path proof-layout: five items, nineteen steps, zero defects. Matching manifest/contract mirrors and the page summary were updated. No optional tests, hashing, readiness or native-state changes were performed. All actual direct/transitive consumers of the changed definition were checked by the same owner reviewer; no outside consumer was found. The separate clean-heavy-tail obligations remain unresolved under their own escalation; E25 separately owns the dense lower bound across all dimension/sample regimes, and E23 does not alter that lower clause.

## E24 owner completion — clean heavy-tail covariance

The same-sample radial procedure is unchanged; its computational input domain is separated from statistical hypotheses. Full local finite-dimensional Golden–Thompson, bounded matrix Bernstein and oracle covariance/vector lemmas replace the omitted source MGF proof. The uniform-in-center deterministic ratio expansion handles the dependent pilot without sample splitting or conditioning it into iid data. The exact pilot block count has failure e^-beta. With D=max{d,(trSigma/sigma0)^2}, the explicit universal sufficient m>=10^16 D beta gives constants3/18; known-mean concentration holds for every m>=1, and the general pilot-accuracy formula remains available for sharper pilots. All clean finite-fourth-moment distributions remain in scope.

The source probability dimension is ambient p, distinct from its intrinsic dbar. The corrected adaptive proof shares the pilot event and uses per-scale confidence beta+log2 to obtain [1+(3p+1)Nplus/2]e^-beta<=5p log2(2sigma_max/sigma_min)e^-beta. The actual cardinality is ceil(log2(2sigma_max/sigma_min)). The new finite-support axis family proves the d-only sample condition false even with a nonvacuous ambient failure factor; the earlier two-axis counterexample has a different auxiliary target and remains unchanged.

Read all relevant Minsker–Wei main/supplement arguments and actual Tropp Laplace/MGF/Bernstein/dilation passages; both local concentration proofs are complete, and no external omitted lemma is treated as proved. Existing totality proof now correctly infers Borel rather than continuous dependence through the pilot. No matrix-depth selector or dense/block-sparse Huber mathematical claim was altered by E24. Root serializes the heavy-tail-only scaffold clause and all metadata recertification; original native decision records remain historical. Only final explicit-path proof-layout is run; no optional tests, hashes, readiness/state/gates or commits.

## Owner E25 round-1 dense all-regime lower bound

The original MSF33 uncapped all-dimension dense lower rate is false on a bounded-spectrum class: the Borel zero estimator has squared operator loss at most M² under every observation law. Root corrected only the dense clause of the shared plan atomically. A new B counterexample records this failure explicitly.

The existing clean small-p/n proof and assertion are retained. Its all-regime extension uses the same positive probability constant c and threshold a_M min(1,p/n), where a_M=min(b_M c/2,M²c/64). For large samples with p/n>c, a zero-padded k=floor(c n) covariance block transfers the existing bound through principal-block compression for arbitrary Borel matrix actions. For n<2/c, a positive-definite rank-one pair has product KL<1/8 and TV<=1/4; applying the actual expected-risk LeCam result to a binary nearest-covariance classifier yields the required fixed tail probability. The ambient-action contamination reduction then gives the capped Huber rate min{1,(p/n)∨epsilon²} for every p,n>=1. The old valid small-ratio claims, E23 global/bounded upper estimators, upper confidence conditions, sparse regime and all E24 additions remain intact.

The selector lemma also received the requested prose range correction to steps1.1–5.1, matching its already-correct final dependency tag. No optional tests, hashes, readiness, native state or shared plan were edited by this agent. Mandatory final explicit-path proof-layout is recorded in the unique E25 receipt.
