# Step 3a adjudication — batch 69

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-69`.

Scope: five touched items, one touched A page, no reader/refuter findings; fourteen required risk reviews. No judging, stamping or engine transitions performed.

## Completed review in dependency order

### def-spatial-global-optimization-problem

Checked the full Definition and all eight dependency statements. Finite ordered endpoints and n>=1 give a nonempty compact box; compactness of the continuous real image supplies a finite lower bound for any nonempty C. Infimum existence is invoked only for nonempty C, and attainment is expressly not asserted for arbitrary C. Empty C, singleton boxes, zero objective and an empty constraint list are allowed without a spurious infeasibility certificate or AC use.

### lem-positive-noise-regularizes-observed-covariance

Read both proof steps and the exact positive-definiteness Definition. For nonzero v, v^TKv>=0 and sigma^2||v||^2>0 prove SPD for positive noise even if K is singular. At zero noise C=K proves both iff directions; n=1 is included and n=0 excluded. This gives no pseudoinverse or factorization existence beyond the cited interfaces. Reader/refuter have no finding.

### alg-finite-candidate-gp-acquisition-search

Read the complete procedure, all nine supplier statements and the posterior supplier proof. Validation handles empty X, N=0 and s=N; t=0 uses the prior, while nonempty observed lists require SPD and Cholesky solves, allowing singular prior/predictive blocks and zero noise only with SPD observed Gram. Finite least-index argmax is Borel in the history and adds no AC; declared AC is inherited. Every successful append, including N, now updates the posterior. Initial failure has no state and later failure preserves the last valid state. Checked coefficient indices, repeated sites, finite observations, certificate errors and all statuses; no regret or true-model assertion for an external simulator.

### lem-mccormick-envelope-equals-graph-convex-hull

Read all six steps and both actual Definitions. Four nonnegative product identities give graph inclusion; affine inequalities give convex closure. For positive widths the invertible affine normalization yields four nonnegative barycentric weights summing to one, with exactly the claimed normalized coordinates, proving the reverse inclusion. Either zero width forces the exact affine graph, including both widths zero and zero endpoints. No division by a zero width or arbitrary choice is used.


### thm-adaptive-finite-candidate-gp-search-posterior-correct

Read all four induction steps, all six dependency interfaces and the full finite GP posterior supplier proof. Fixed initial sites give the base, including an empty prior history. A deterministic history-measurable site adds no conditioning information; fresh errors remain independent of the process/history, so each conditional one-coordinate Gaussian update is valid. SPD augmented C gives a positive Schur complement, and block elimination recovers the full selected-list formula. Repeated sites are allowed with positive noise; zero noise requires SPD, and terminal/failed updates assert only computed states. AC is explicitly inherited; no adaptive-history joint-Gaussian or regret assertion is made. The added one-step explanation closes an immediate nonfatal exposition gap.

### thm-finite-candidate-gp-search-terminates

Both proof steps and the full algorithm checked. At most N-s calls: each successful call appends once; a failed call returns before a further iteration, and can occur only while t<N. N=0 and s=N make zero calls. Finitely terminating validation, certification, solves and observation calls are explicit hypotheses. The final update can fail with its declared status. Exact archived preimages for all five touched items match pre-reader hashes; all current raw bytes match post-reader hashes.

### thm-spatial-bnb-eventual-epsilon-termination

Read all five proof steps, the full spatial procedure and all eleven dependency statements. Nonempty compact-box continuous image has an attained infimum by closedness and infimum approximation. An infinite binary expansion tree admits the deterministic left-if-infinitely-many-descendants branch; finitely many longest-side halvings above each fixed width force all coordinates to shrink. The nested interval supplier then gives x. Along expanded boxes ell<U-epsilon; consistent ell and exact midpoint evaluations tending to f(x), with decreasing incumbent U bounded below, contradict the fixed positive gap. Closed leaves stay closed as U falls. Positive-diameter roots cannot produce singleton children in finitely many exact midpoint splits, and the singleton-root exception gives an immediate exact certificate. The algorithm includes finite-time report calls; this is an unconstrained, exact-arithmetic conditional termination theorem, not a fixed-precision or arbitrary-constrained guarantee.

### thm-spatial-bnb-gap-certificate-sound

Read every proof step and both full dependencies. Finite replacement by covering midpoint children preserves all feasible points, including shared split boundaries. Certified-empty leaves cannot contain feasible points; closed leaves and their lower bounds remain in the complete ledger. For any feasible x choose its finite covering leaf, then L<=ell_B<=f(x); the feasible witness ensures C nonempty and f(xhat)<=U. Thus f(xhat)-inf f[C]<=U-L<=epsilon. All-empty leaves give C empty without forming an empty infimum. No attainment or convergent branch is required.

### alg-factorable-mccormick-box-relaxation

Read the whole Definition and all five dependencies. A finite topological traversal adds exact affine equations, certified-domain McCormick polyhedra for products, and only supplied convex graph enclosures for other nonlinear nodes. Original feasible points retain their exact node values and final constraint values <=0; the objective underestimator is explicitly required. Zero-width operand boxes are handled by the hull lemma. Unsupported domains, nonfinite enclosures, invalid coefficients or failed convexity checks return unavailable/inconclusive, rather than claiming a relaxation. A dual-feasible pair alone is insufficient: a verified lower bound on its dual value is separately required. No algorithmic convergence or complexity is asserted.

### ex-noisy-biological-simulator-finite-candidate-gp-acquisition

All three verification steps checked. K=I and noise variance 1 give posterior variances 1/2 and 1 after observing a=0. The strict acquisition comparison selects b, and C_2=2I supports the added final posterior return. The least-index wording now agrees with the supplier; the example retains its surrogate-model qualification and makes no biological model-truth claim.

### thm-factorable-dual-certificate-is-valid-box-lower-bound

Read the three steps and six exact prerequisites, including current convex-program domains and weak duality. Exact-node embedding is feasible in the certified convex relaxation, with phi(iota(x))<=f(x); graph and arithmetic enclosures supply containment. Dual feasibility plus independently verified ell<=q gives ell<=q<=phi(iota(x))<=f(x), for every original feasible x. Nonempty B intersection C and the compact-box objective ensure a real infimum. No Slater, dual attainment, solver residual guarantee, arbitrary choice or strong-duality premise is used.

### thm-interval-lipschitz-bound-sound-consistent

Read all four steps and all seven exact supplier interfaces. Real input endpoints and singleton midpoints are first rounded outward, so finite dyadic DAG enclosures apply. Fixed exponent range and growing precision give vanishing absolute rounding error including subnormals. Finite topological induction handles continuous sum/product endpoint extrema; division only uses denominators eventually separated from zero. Constant enclosures converge by explicit hypothesis. For fixed certified L, ell<=q_- - Lr^+<=f(x) on the box; along shrinking boxes q_- tends to f(x), r^+ tends to zero and final rounding error vanishes. Singleton, zero radius/L, rational constants, overflow and zero-denominator statuses checked; no fixed-precision convergence claim.

### alg-bounded-mixed-integer-branch-and-bound

Read the full operational Definition and all four suppliers. Bounded integer intervals give finite Z; r=0 gives one empty-coordinate assignment. Median integer children partition exactly, and longest-side continuous children cover, with closed-node bounds retained. Every queued evaluation charges one call; unavailable bounds never prune. Enumeration restarts over all assignments only if at least one remaining call per assignment, divides the residual budget deterministically, and requires complete continuous ledgers with valid bounds before aggregating a finite gap. All-empty and mixed singleton branches are explicit; no unproved convergence or polynomial-complexity claim. Dual certificates use the stated verified-lower-bound interface.

### ex-multimodal-polynomial-spatial-bnb-gap-certificate

Read all four verification steps and six prerequisites. Square completion gives minimum -1/4 at the distinct interior points +/-sqrt(1/2); nonnegative square monotonicity checks they lie in [-1,1]. The given DAG uses multiplication rather than a specialized square hull: root t,u in [-1,1] yield f in [-2,2]. After a split each t,u lies in [0,1], yielding lower -1; exact midpoint value -3/16 gives gap 13/16<9/10 and actual suboptimality 1/16. A budget of at least three calls realizes these reports; dyadic arithmetic can be exact with adequate precision/exponent range. Both leaves and their bounds remain in the certificate.

### thm-bounded-mixed-integer-gap-certificate-sound

Read all three steps and four complete prerequisites. Integer median branches partition all integer values and continuous midpoint children cover their parent; only certified emptiness discards feasible points. Thus any feasible pair belongs to a terminal node with its valid lower bound, including closed nodes. Enumeration covers every bounded assignment and requires complete continuous ledgers, so the same pointwise argument gives L<=f* and witness f<=U<=L+epsilon. r=0, singleton integer boxes, overlapping continuous boundaries, exact zero gap and all-empty ledgers checked; no empty infimum or attainment is needed for the gap claim.

### thm-uniform-constraint-margin-enables-empty-box-detection

Read all seven steps, full emptiness procedure and fourteen supplier statements. For m>=1, finite maxima exist and |max g_i(x)-max g_i(y)|<=max |g_i(x)-g_i(y)| gives continuity. Nonempty compact h-image attains its real infimum; emptiness means its attained minimum is strictly positive, proving the converse. Infinite splitting yields a deterministic infinite binary branch with shrinking widths and one limit x; some fixed constraint at x is >=delta. Depth-driven precision tends to infinity and the assumed consistent sound lower bound becomes positive, contradicting further splitting. A singleton is instead requeried with refinement index tending to infinity; consistency again closes it. FIFO gives each finite-depth/refinement task service; finite queries each terminate. Zero margin, empty constraint list, unavailable reports and fixed precision are excluded from this conclusion. The proof uses its explicitly stated oracle consistency (the arithmetic-DAG A1/F8 realization is sufficient); objective continuity alone supplies no emptiness test.

### ex-bounded-engineering-design-mixed-integer-gap-certificate

All three steps independently checked. For z=0,1,2 the nonnegative square gives exact minima 2/5, 1/10, 0 attained at x=z/2 in [0,1]. One failed root relaxation call triggers enumeration; N=4 leaves exactly three calls, allocated one per assignment. Each exact root report supplies both its lower bound and its attaining feasible point, so the complete fallback has L=U=0. Epsilon=1/10 is positive. No complexity claim or automatic availability of an exact continuous solver is asserted.

## Dispositions and exact history

- `touched:69:alg-finite-candidate-gp-acquisition-search`: **accepted_repair**. The old Definition stopped immediately after the final append and did not define the terminal posterior or the initial s=N state. The reader supplies finite coefficient indexing, initialization, post-append updates including N, explicit complete/failure returns and last-state handling. Full procedure and nine prerequisites independently reviewed; N=0, s=N, zero noise and singular prior cases are sound. Exact full pre-reader source at research/numerical-optimization-dynamics-2026-10-16-owner-boundary-integration-intake/integration-current-sources/alg-finite-candidate-gp-acquisition-search.md hashes to 6a9ccb45ea744f91d2297b4424ede5fe8951420f050f712f7adb1e41e6f0dc83. Current raw source equals the reader-post fingerprint 0166a5b4cd987b8fc26b922dcdaa0f2ac9229999c127e394d7853f3351c72d88. No Alpha source edit.

- `touched:69:ex-bounded-engineering-design-mixed-integer-gap-certificate`: **accepted_repair**. The old worked fallback lacked its triggering unavailable relaxation and sufficient total budget. The reader specifies epsilon=1/10, N=4, one root bound-unavailable call and three exact fixed-assignment root reports. Square completion proves minima 2/5,1/10,0 at x=z/2, and the complete ledger gives L=U=0. Both direct procedure/certificate suppliers reviewed. Exact full pre-reader source at research/numerical-optimization-dynamics-2026-10-16-owner-boundary-integration-intake/integration-current-sources/ex-bounded-engineering-design-mixed-integer-gap-certificate.md hashes to 6927ff0b8572daed8a1bb69d144d735bf80f93d810add07f6c93db7fb6a39282. Current raw source equals the reader-post fingerprint 10046378a5ec8c564cd5894c3cea5045aa22b10b4ecaca348168702f4dd144bd. No Alpha source edit.

- `touched:69:ex-noisy-biological-simulator-finite-candidate-gp-acquisition`: **reviewed_no_defect**. The original numerical computation and surrogate qualification were already sound. Reader replaces least-error with the exact least-index terminology and adds the new supplier terminal-state calculation C_2=2I_2. Independently checked all three verification steps and the actual three prerequisites: posterior variances 1/2 and 1 yield strict acquisition selection of b, and positive noise supports the final update. This is audit enrichment and consumer alignment, not a newly confirmed mathematical defect. Exact full pre-reader source at research/numerical-optimization-dynamics-2026-10-16-owner-boundary-integration-intake/integration-current-sources/ex-noisy-biological-simulator-finite-candidate-gp-acquisition.md hashes to e133b7a114ddddc65e2c76c5f5298b2e322ec8e8b4354d35c977eb2e2ac02546. Current raw source equals the reader-post fingerprint f193f8062cf4f181661667f5432f08718ab1454a8b2ba6469fd1982d8ce642a1. No Alpha source edit.

- `touched:69:thm-adaptive-finite-candidate-gp-search-posterior-correct`: **accepted_repair**. The prior proof implicitly identified the conditional adaptive update with fixed-list Gaussian conditioning. The new one-step argument uses history-measurable selection, independence of the fresh error and a positive scalar Schur complement; block elimination yields the full selected-list formula. This is nonfatal proof clarification, with initial/terminal state claims aligned to the corrected procedure. All four steps and six suppliers checked. Exact full pre-reader source at research/numerical-optimization-dynamics-2026-10-16-owner-boundary-integration-intake/integration-current-sources/thm-adaptive-finite-candidate-gp-search-posterior-correct.md hashes to 5070d6304abeca8f87ec4c7d2c1819774e8542ed9cc41ab2902f0a8245533eb0. Current raw source equals the reader-post fingerprint b064ac587cd6253dab94c82ca214de43f0740067a891c9c2ea9ac509e1208e5d. No Alpha source edit.

- `touched:69:thm-finite-candidate-gp-search-terminates`: **accepted_repair**. The prior termination hypothesis covered solves and observations while its proof also assumed terminating validation/certification and acquisition checks. The reader states every required finite-time operation, the actual return statuses and the sharp N-s observation-call bound. Every failed call returns immediately, every successful call appends once, and N=0/s=N make no calls; the final state update is included. Exact full pre-reader source at research/numerical-optimization-dynamics-2026-10-16-owner-boundary-integration-intake/integration-current-sources/thm-finite-candidate-gp-search-terminates.md hashes to f6dcbf2a1973bc6bf0dc4d5116a9af847d9897f938d57cafbfefa0a51619e2da. Current raw source equals the reader-post fingerprint 959bc740b70d421ab41553d3a11e09a03fdf850fbd9c2f23dbcb8a0b008386d4. No Alpha source edit.

- `page:69:global-optimization-and-certified-branch-and-bound`: **accepted_repair**. Reviewed all three summary paragraphs against the current local procedures and theorem hypotheses. Reader adds exact midpoint and singleton-report requirements for eventual unconstrained termination, a verified lower bound on the dual value, and finite-continuous-constraint/compact-box/finite-time consistency conditions for emptiness detection. The qualifiers prevent overreading the summaries; inventories, page requirements and claims remain coherent. Inverting the three exact native reader patch hunks at log character 1638965 reconstructs full pre-reader page bytes with SHA256 2c4236bd8c5bffa7e6e8980ee13a1b77a045c2506e0384ec5eb54a68456be712; current raw page equals reader-post 7a10d5e0111956b6d50a86cca0af07ecc154559cb967307ad43fe02b47282899. No historical preimage uncertainty or Alpha page edit.

## Current prerequisites, consumer maintenance and sources

The review read every current routed carrier and its actual direct prerequisites, covering the fourteen risk items and all five touched items. The thirty distinct outside supplier Statements/Definitions were read; the finite Gaussian posterior proof was also read in full. The six required-page summaries were read for page context. Review does not assert an audit of transitive published proofs. The local McCormick, spatial, interval, relaxation, mixed-integer and emptiness procedures were read in full as prerequisites; the A-page summary matches their qualified statements.

The changed GP Definition has three direct item/reference consumers: `thm-adaptive-finite-candidate-gp-search-posterior-correct`, `thm-finite-candidate-gp-search-terminates`, and `ex-noisy-biological-simulator-finite-candidate-gp-acquisition`. Their actual uses were checked and the reader's necessary alignments retained. The posterior theorem's only direct item/reference consumer is that example, whose surrogate qualification remains sound. The termination theorem has no item consumer. The engineering example has no logical consumer. Searches of current items and library prose found no outside-batch affected consumer requiring repair. Stable IDs, complete inventories and withdrawal proposals are preserved.

Updated the owned batch-69 cross-batch dependency input to current direct dependencies and claim uses. Retained the two obsolete extreme-value-theorem edges as `removed`: the current spatial and constraint-margin proofs instead prove attainment locally from compact-image closedness and infimum approximation. Added missing current supplier edges and retained existing page-prerequisite records; native refresh merged/deduplicated inputs. No unified-ledger hand edits were made.

Authoritative external cross-checks: [Rasmussen–Williams, Chapter 2](https://gaussianprocess.org/gpml/chapters/RW2.pdf), §2.2, printed p.16, equations (2.22)–(2.24), supplies the finite noisy-Gaussian regression mean/covariance; the local supplier proves the nonzero-mean and singular-block qualifications. [Neumaier](https://optimization-online.org/wp-content/uploads/2003/10/765.pdf), §12 pp.33–35, §16 pp.47–48 and §20 pp.63–65, covers box-cover branching, outer relaxations, bilinear graph inequalities and rigorous bound/feasibility certificates. These source passages were read; the local proofs, rather than citations alone, establish the particular termination and gap claims. No claim is made to have newly read every other bibliography entry or the whole books/papers.

## Additional repair and defect ledger

Alpha changed no item or page source. Added complete, item-specific `risk_review` records to all fourteen HIGH/CRITICAL contract entries. Strict contract checking also exposed the obsolete F3 quotation in `thm-interval-lipschitz-bound-sound-consistent`; synchronized that quote with the current exact real-interval operation paragraph. The stale part concerned complex reciprocal arithmetic outside this real-DAG proof. This is the only citation repair made by Alpha; it changes no claim or prerequisite. No extra decision is owed for this untouched risk-only carrier, so its closed citation defect is recorded directly in this report and the ledger rather than inventing an obligation.

Confirmed historical reader defects and the current stale contract citation are recorded as six closed rows in `research/defect-ledger.jsonl`, caught at `3a-adjudicate`, with confidence 1. The GP example receives audit enrichment with no defect row. No defective published supplier was identified, so the published ledger and published content remain untouched. No substantial unmet prerequisite, escalation or owner blocker remains.

## Local validation

- Initial `risk-report` on the owning contract without `--require-reviewed`: 27 routed items, zero tool errors; fourteen HIGH/CRITICAL reviews owed.
- `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-69.proof-contracts.json --require-reviewed`: zero errors, all fourteen required reviews complete.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-69.proof-contracts.json --strict`: initially one stale F3 citation mismatch; after synchronization, 27/27 checked, zero errors and warnings.
- `node tools/frontier-dependency-ledger.mjs refresh --run numerical-optimization-dynamics-2026-10-16`: refreshed and deduplicated.
- `node tools/tsx-run.mjs tools/precheck.mts` on the five reader-touched item paths: four proof-bearing items checked, zero failures; the algorithm has no phase proof.
- `node tools/rendercheck.mjs` on those five items and the touched A page: six files, all math and YAML parsed, zero defects.
- Final batched `node tools/proof-layout.mjs` on the same five item paths: five items, twelve steps, zero defects. No item edits or formatters followed.

Operational notes: a preliminary direct `node tools/precheck.mts --help` failed because Node requires the repository TypeScript launcher; the launcher does not implement `--help` as an option and treated it as a filename. Correct scoped invocation above passed. An exploratory rendercheck `--help` was interrupted because it would select the full corpus; no completion or pass is claimed for it. These invocation failures are not mathematical defects. No judge, stamp, certification, dispatch or gate battery was initiated.

Handoff: six exact decisions are authored, reviews complete, item/page sources retain reader-post bytes. The engine owns current hash stamping and subsequent gates.
