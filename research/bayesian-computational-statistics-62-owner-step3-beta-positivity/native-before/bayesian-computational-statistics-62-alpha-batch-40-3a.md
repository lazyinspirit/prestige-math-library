# Step 3a adjudication — batch 40

Run: `bayesian-computational-statistics-62`; group: `batch-40`; owned batch: 40.

## Supplier review checkpoint

Reviewed the complete current `items/lem-beta-density-normalization.md`, its batch 6 proof contract and manifest, all ten cited supplier statements, the finite-endpoint definition, and the three proposed measurability suppliers. The current producer source still equals the routed/pre-reader raw SHA256 `fb3a1987f9d54b3ced7a45c46f70a412a51eabc9afecd607510f3053b9982701`. Batch 6's earlier review is evidence, not a resolution of batch 40's later findings.

Reader/refuter findings 1: the omitted continuous-to-measurable and indicator-product interfaces are routine nonfatal proof gaps. On each compact interior interval F4 gives measurability; zero extension is measurable since inverse images split into a measurable subset of the interval and possibly its complement. Their increasing pointwise limit is measurable, so MCT applies. The claimed integral is not refuted. Record nonfatal omissions without pretending source edits occurred.

Reader/refuter findings 2: the diagonal exhaustion identity is a routine nonfatal omission: for m>=3 split the proper integral at 1/2; each summand tends to its separately defined endpoint integral, and the sum tends to B(alpha,beta). Positive parameters ensure both finite limits. Record this omitted derivation, without changing the outside producer.

Reader/refuter findings 3: F3 inaccurately attributes strict positivity to `thm-real-gamma-euler-integral-convergence`, whose Statement asserts convergence iff s>0. The exact citation does not supply positivity. The claim itself is true: for s>0 and t in [1,2], t^(s-1)e^(-t)>=min(1,2^(s-1))e^(-2)>0, so its integral is positive. This attempted closure needs the relevant proper/improper integral comparison and exponential/power suppliers incorporated by the batch 6 owner. Escalate the still-inaccurate citation; do not mark it repaired or certify the consumer's prerequisite closure. Required owner action: route a batch 6 supplier-first proof/fact/contract repair and independent current review, then revisit the quantile consumer. No producer files were edited.

The reader observations are explicitly unbound. The dispatch authorizes their adjudication while retaining historical uncertainty; the present matching producer fingerprint and the unchanged finding text permit current mathematical review but cannot certify the original observed bytes. Preserve the routing/pre-reader carrier objects and `historical_delta_unknown: true` in decisions. No historical finding is dismissed merely because current contents differ.

## def-blom-rank-normalization-for-pooled-draws

Reviewed the Definition and four direct suppliers. Finite average ranks satisfy 1<=r<=S; (r-3/8)/(S+1/4) lies strictly in (0,1), so the AC-qualified normal quantile supplier gives a unique finite score. For S=1 and for an all-tied sample the probability is 1/2 and score zero by symmetry. Averaging ranks precedes the nonlinear transform. Empty input is excluded. No edit or decision is owed; complete risk review recorded.

Checkpoint completed in the following dependency-ordered reviews.

## def-standard-cauchy-law

Completed all four steps and nineteen dependency statements. The continuous positive density defines a measure under Countable Choice; the compact integral is 2 arctan(n)/pi, its limit is one using the explicitly complete ordered real field, and MCT applies to the interval cutoffs. No evaluation at the tangent endpoints occurs. The unchanged Definition continues to supply the same probability law to all consumers. The reader added exactly the two real-field suppliers and the essential premise in F10; all other pre/post differences are line reflow. An exact pre-reader carrier was recovered in memory from the genuine reader attempt log and hashes to `94210b5e9dad08934dd674267cfc1de6ce0d2a890ff0e1c413dea42b3833fd1b`; the initial current source matches frozen post `782585b9285ffdcb4d4d122f8d8836040e14a6060eb1485e143cbf35266eca42`. Amended repair: restored the missing closing math delimiter in F10 and synchronized the two added dependencies into the manifest. The logical completeness-premise omission is nonfatal and repaired; no defect row is created for the delimiter/manifest mechanical correction. Repair confidence 1. Risk review complete.

## ex-thinning-can-mask-sticky-mcmc-output

Reviewed four Verification steps and all eight direct supplier statements. The uniform law is invariant, the gap-product formula proves strict stationarity, and the sign observable has mean zero, variance one and conditional eigenvalue .8. Therefore rho(k)=.8^k and tau=9. Keeping every tenth state yields tau_10=(1+.8^10)/(1-.8^10), approximately 1.24058, and ESS per original transition approximately .08061 rather than 1/9. This is the theoretical ESS convention from the cited definition, with the stated asymptotic/approximate transition count; it does not claim an exact finite-sample variance identity. No edit, no decision owed. Risk review complete.

## alg-quantile-monte-carlo-standard-error

Reviewed the complete operational Definition and eleven direct supplier interfaces. For N=2,3 the procedure returns before the length>=4 ESS call. Zero split variance and nonpositive tau are caught by the ESS supplier. A returned E is positive and finite; both Beta shapes exceed one. For u=.16,.84, continuity from above on the finite probability measure and real-field reciprocal cofinality give F(1/n)->0. Thus the defining level set is nonempty (1 belongs), bounded below by a positive 1/n, and has a real infimum. Its infimum belongs to (0,1], the domain of the empirical left quantile. Nested level sets give v_-<=v_+, so the interval is ordered and the returned half-width nonnegative. Constant/tied data, alpha near either endpoint, odd chain lengths and the not-estimable branch preserve the input domains. AC is inherited through rank scores, Countable Choice through Beta normalization. No correctness, coverage or CLT theorem is asserted in the procedure.

The exact pre-reader source reconstructed in memory from the genuine reader log matches `3f1e5bae5bb19aabf2c1683453d8393fcbb6f56fe1355736a3d96865c7fd2d40`. Current source matches frozen post `889dbca393515b0686f2ae7225473e23db41367466c84afff1eeb705b513fffe`. The reader changes only the two real-field dependencies and their essential completeness premise in the endpoint justification. That local correction is sound; the manifest now mirrors the current dependencies and Definition. Nevertheless the touched verdict is `escalated`: the inaccurate producer F3 remains unresolved, so risk review and prerequisite closure remain open. No algorithm source edit was made. Completing the local repair does not certify the outside producer. Required owner action is the supplier-first repair described above, not a new quantile theorem or an MCSE coverage guarantee.

External source: [Vehtari et al., arXiv v5](https://arxiv.org/pdf/1903.08008v5), §§3.1–3.2 and 4.1–4.4, PDF pp. 5–11, equations (1)–(4), (10)–(15), (16), (20). Read the complete relevant text. The finite variance and adjusted autocorrelation formulas, paired truncation with odd/even averaging and software cap, pooled average-rank transform, folded maximum and Beta .16/.84 half-width agree. The local item explicitly uses a left empirical quantile convention; the paper uses outward rounding for error interval endpoints. The convention is explicit and no exact coverage is claimed.

The remaining same-level example reviews follow; the quantile risk review remains blocked pending owner resolution.

## ex-cauchy-heavy-tail-and-location-shift-rhat

Reviewed the full Example, six Verification steps, all seventeen direct dependency interfaces, reader/refuter evidence and Vehtari v5 Sections 1.2 and 4.1-4.2. The measurable nonnegative second-moment integrand dominates 1/(2 pi) on [1,R], whose integral is (R-1)/(2 pi), forcing infinite second moment under AC_omega. Raw split means 0,0,2,2 give W=4/3 and B=16/3, so R=sqrt(7/4). Average ranks 2.5,8.5,14.5 give complementary normal scores -a,0,a, a>0, with the same ratio. Folded scores are an affine image with positive scale of folds 0,2, with W>0 and B=0, hence sqrt(3/4). The maximum is sqrt(7/4). All Blom probabilities are strictly interior and the finite arrays are distinct from replicated source simulations. AC is carried for normal quantiles; no extra choice or population-variance claim is made. No source edit or decision owed.

## ex-shared-funnel-region-missed-by-all-chains

Reviewed full Example, all four Verification steps, six direct supplier interfaces and reader/refuter evidence. The 17-state target sums to 1; K fixes the half-mass narrow state and cycles 16 equally weighted broad states, preserving pi. Refresh also preserves pi, hence so does P=.99K+.01Pi. Four independent 31-transition branch sequences all choose K with probability .99^124. With the initial state, each 32-draw sequence is two broad cycles, so splitting gives eight identical 16-draw arrays. Both coordinates and their folds at medians 2.5 and 0 are nonconstant: W>0 and B=0 before and after normal ranking. Every returned component equals sqrt(15/16), while the unvisited target region has mass 1/2. No stationarity of the initial law or general convergence certification is assumed. AC is inherited only by general-chain/normal-score interfaces. No source edit or decision owed.

Independent finite recomputation (Python standard-library average ranks, inverse-normal scores and sample variances) checked raw/rank/folded R-hat on both examples and both funnel coordinates; all asserted squared ratios agree to 1e-12. Thinning recomputation gives .8^10=.1073741824, tau_10=1.2405804992 and ESS per transition .08060742537. The existing source approximation 1.240 is coarse; the four significant digits relevant to .0806 and .1111 are correct. No proof relies on a visualization or on external simulation output. Published prerequisites were checked at their exact relevant Statements/Definitions, not re-audited through all transitive proofs. No defective published item was established.

## Decisions, ledgers and owner handoff

The companion decisions JSON has exactly eight owed obligations and no extra obligations: four `confirmed_nonfatal` findings (paired reader/refuter measurability and exhaustion omissions), three `escalated` obligations (paired reader/refuter positivity citations and the quantile touched carrier), and one `amended_repair` (Cauchy touched carrier). Both completed local real-field corrections have confidence 1. The escalated quantile decision expressly limits that confidence to its completed local correction; whole-carrier prerequisite acceptance remains withheld. All six producer findings retain the exact producer batch, consumer, dependency path, immutable producer pre-reader fingerprint and producer carrier at routing. The three unbound reader observations retain explicit historical uncertainty and the dispatch-authorized historical disposition. No decision hashes were stamped.

The serialized defect-ledger append added five distinct rows at `3a-adjudicate` and refreshed its generated view:

- `bcs62-b40-3a-beta-measurability`: nonfatal, `nonfatal-recorded`; paired reader/refuter finding 1.
- `bcs62-b40-3a-beta-exhaustion`: nonfatal, `nonfatal-recorded`; paired reader/refuter finding 2.
- `bcs62-b40-3a-beta-gamma-positivity`: fatal inaccurate citation, `open`; paired reader/refuter finding 3. This is intentionally not represented by a closed row or a completed repair.
- `bcs62-b40-3a-cauchy-real-field`: nonfatal, `fixed`; touched Cauchy correction.
- `bcs62-b40-3a-quantile-real-field`: nonfatal, `fixed`; completed local quantile correction, distinct from its open supplier hold.

Only the Cauchy source was edited in this adjudication (F10 closing delimiter); its final raw SHA256 is `15d3a1f0c7c615f6a531186e2693467ca43e203c10823545105d166fd869186d`. Quantile and Beta producer sources remain byte-identical to the checked frozen/current fingerprints. The batch manifest mirrors both reader dependency additions and the current quantile Definition. Six owned risk entries are synchronized into the consolidated proof contract; five are complete and quantile is expressly blocked. The producer's prior batch-6 risk review was not altered or treated as owner resolution. The owned dependency input now records the Beta edge as open, preserves all stable rows and contextual caveats, and corrects two inherited evidence descriptions (full AC, seventeen funnel states). The dependency-ledger refresh succeeded; the canonical frontier ledger retains all IDs and proposed withdrawals.

A direct dependency/reference search found no item consumer of the quantile algorithm: its only outside reference is its A-page inventory. The complete current page summary asserts only finite procedures and empirical guidance, so the reader's additional real-field justification requires no page or downstream repair. The Cauchy Definition is unchanged. No published source was edited, and no defective published item was established; no published-ledger entry or lock was needed.

## Checks actually run

- `node tools/risk-report.mjs research/bayesian-computational-statistics-62-batch-40.proof-contracts.json`: final run exits 0, fourteen items routed, six HIGH/CRITICAL items.
- Same command with `--require-reviewed`: exits 1 with exactly one `risk-review-missing` diagnostic for quantile. Its blocked prerequisite review is intentionally not marked complete. This is a handoff blocker, not a passing check.
- `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-40.proof-contracts.json --strict`: fourteen checked, zero errors/warnings. The selected six owned risk entries in the consolidated contract also pass strict checking, six checked and zero errors/warnings.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-standard-cauchy-law.md items/alg-quantile-monte-carlo-standard-error.md`: one proof checked, zero failures; the algorithm has no proof phase.
- `node tools/rendercheck.mjs items/def-standard-cauchy-law.md items/alg-quantile-monte-carlo-standard-error.md`: two files pass renderer YAML/math checks.
- Final required `node tools/proof-layout.mjs items/def-standard-cauchy-law.md`: one changed item, four numbered steps, zero defects. No item edit or formatter followed it.
- `node tools/frontier-dependency-ledger.mjs refresh --run bayesian-computational-statistics-62`: refreshed and deduplicated successfully.
- Explicit obligation/routing/hash checks: exactly eight owed decisions, all immutable producer routing objects preserved, current quantile and Beta producer hashes unchanged. Independent finite recomputation results are recorded above.

The live status command could not recompute because this checkout lacks `tools/step6-finalize.mjs`, imported by the engine stage module; it displayed a cached report instead. That cached report was not used to infer current run state. The downloaded paper PDF was read with PyMuPDF after `pdftotext` proved unavailable; no source-reading claim relies on that failed extraction. These mechanical/environment limitations did not become mathematical defect rows.

Required next action: the owner routes the batch-6 Gamma-positivity fact/proof/contract correction, obtains an independent current proof review and resolves the two producer-finding escalations. Then this batch's quantile touched decision and risk review can be revisited against the actual corrected supplier. Until then the citation defect, quantile risk review and prerequisite closure remain open. No judge cycle, certification, stamping, agent dispatch, scheduling, gate battery, publication, commit or run transition was initiated.
