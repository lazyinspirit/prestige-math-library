# Batch 45 Step 3a adjudication

Run: `physics-remaining-80-2026-10-17`; group: `batch-45`. Draft-only local adjudication; no judge or publication stamp.

## Level 1 review

`lem-qsm-fock-occupation-basis-and-car-relations`: Read every step and exact tensor, permutation, adjoint, graph/core and Cauchy–Schwarz suppliers. Orbit multiplicities give the stated normalizations; projected dense tensor spans give completeness. Weighted-shift coordinate limits prove closedness, basis testing plus square-sum bounds gives the maximal adjoint, and finite configuration truncations are graph cores. CCR is restricted to the invariant finite span; bounded fermionic shifts extend CAR globally. Checked vacuum, empty I, finite mode sets, zero occupancy and distinct-mode signs. No defect; inherited countable choice is explicit in the Fock definition.

`thm-qsm-models-lattice-riemann-bose-bound`: Read all six steps and exact Lebesgue, box, Tonelli, monotone convergence and countable-choice statements, and the complete current draft Gaussian proof (only evaluation clause used). Compact-parameter Gaussian bounds and joint uniform continuity justify uniform Riemann convergence. Shell counting bounds the punctured small ball by C delta^(d-2) only for d>2. Nonnegative geometric partial sums and Gaussian products give the extended endpoint identity; the p-series diverges for d=1,2. Missing origin has no assigned value. Reader endpoint extension is sound and accepted. Consumer uses will be checked below before closure.

Sources are current `items/<id>.md` carriers and their exact cited Statement/Definition sections, plus reader-45, reader-findings-45, refute-45 and frozen pre/post hash inventories. No external textbook retrieval claimed. Next: diagonal trace supplier, then level-4 physical consumers.

## Level 2 review

`lem-qsm-models-diagonal-occupation-trace`: Read all eleven steps and every direct supplier Statement/Definition. Real multiplier adjoints use the maximal weighted domains; finite-mode products exhaust finite-support configurations; summable diagonal entries give compactness and trace class. Finite marginal factorization and increasing second-moment sums prove finite total variance. Beta and joint responses retain their separate second-moment envelopes. Empty mode set gives Xi=1; Fermi q>=1 handled directly; canonical laws require positive coefficient. Corrected the proof-only bound in 3.3 to Z_N<=z^(-N) Xi, since the omitted fugacity factor invalidated the literal bound. Statement unchanged. Oscillator uses published complete Hermite basis and exact self-adjoint domain. No unresolved gap.

Next: level-4 deductions. The proof-only fugacity correction does not change any supplier interface.

## Level 4 review

`pthm-qsm-dilute-occupation-limit`: All four steps checked directly: subtraction gives signed q^2/(1∓q) errors; integrals of x/(1∓x) give the one-half log remainders. Trace hypotheses already supply sum q_j<infinity, so differences of total finite sums and log products are defined. Summing nonnegative errors gives the stated aggregate bounds; q→0 and r<1 denominators checked. Reader replacement of the vague approximation by these exact bounds is accepted. Adopted preparation remains conditional, with no measured premise or high-temperature equivalence.


`pthm-qsm-oscillator-spin-ensembles`: Checked all five steps against complete Hermite and maximal diagonal oscillator statements. Geometric weights give finite oscillator moments and entropy; direct differentiation gives C_V. Taylor expansion cancels the half-energy term, leaving O(beta epsilon^2). Checked T→0, h negative and positive, and h=0: the degenerate spin entropy is k_B log 2, so no generic third-law conclusion. Units and conditional preparation preserved; no empirical data used.

`pthm-qsm-periodic-ideal-occupation`: Checked all three steps with exact trace and lattice suppliers. Gaussian q sums converge, Bose supremum is e^(beta mu)<1 and Fermi negative gaps are finite. Coordinate adjoint argument supports the stated one-particle domain and many-body maximal domains. s=0 and s=2 Riemann limits give number and energy densities with V^(-1)=(h/2pi)^d. Fixed admissible parameters, finite degeneracy, empty internal-mode case, and absence of a differential-domain identification checked. Reader changed only contract citation evidence; frozen pre/post item hashes agree, so reviewed_no_defect/audit_enrichment. No interface repair needed.

## Level 5 review

`pthm-qsm-fermi-zero-temperature`: Read all four steps and exact periodic/lattice statements. For g>=1, continuity and strict monotonicity plus the two chemical-potential endpoint bounds give unique fixed density. The beta→infinity filled-ball limit excludes a shrinking Fermi annulus and controls both weighted tails; monotone bracketing proves the moving chemical-potential energy limit. Radial integration by parts gives p=2u/3 with vanishing endpoint terms. Made positive integer g>=1 explicit: the zero-based N convention otherwise permits g=0, where density is identically zero and k_F divides by zero. Only reference consumers are ex-qsm-fermi-zero-temperature (g=2) and its owning A page; both remain valid without edits. Reader changed only citation-contract evidence; item pre/post hashes coincide. No measured premise.

`pthm-qsm-homogeneous-bose-condensation`: Read all six steps. Finite-volume monotone density has range (0,infinity); fixed-mu Riemann limits and monotone brackets give subcritical chemical-potential convergence. For rho>=rho_c and d>2 the upper endpoint punctured sum and lower fixed-mu bound squeeze excited density to rho_c, including equality. Gaussian geometric expansion yields rho_c finite exactly for d>2; checked d=1,2,3 and all units of lambda_T and T_c. Ground-mode geometric mean and tail imply scaled variance rho_0^2 and tail exp(-x/rho_0). Confirmed refuter nonfatal missing definition; added the exact epsilon-probability definition for varying laws and an explicit epsilon=rho_0/2 event bound in 4.1. Consumer ex-qsm-homogeneous-bose-condensation uses only unchanged mean/variance/tail conclusions; A-page summary remains valid. No empirical observation or canonical-equivalence claim.

Next: finalize two example decisions, ledger and scoped checks.

## Decisions and historical comparison

- `touched:45:thm-qsm-models-lattice-riemann-bose-bound`: **accepted_repair**. Accepted the reader endpoint extension: nonnegative geometric partial sums, Tonelli and the current Gaussian evaluation give the extended endpoint integral in all dimensions; p-series gives divergence for d<=2, and the shell estimate gives punctured lattice convergence only for d>2. Checked periodic, Fermi and Bose consumers; only Bose uses the newly explicit endpoint. Frozen pre/post raw item hashes: 633a0d9ebe6f59cfdf91cb5c9a8b9dbb4649d910419b3f64f28fbedcaf42f8eb / 66a24812a560b6d694df39d9064523bdc9de96df442e21dfd26d846470ea3469.

- `touched:45:pthm-qsm-dilute-occupation-limit`: **accepted_repair**. Accepted exact aggregate mean and log-partition bounds replacing the vague total approximation. Trace hypotheses guarantee summability of q; summing nonnegative q-squared remainders proves all bounds. The one-mode example uses only these unchanged mode means. Frozen pre/post raw item hashes: 5808b21c915c6f8d8aa3910e8f398f1f1c68e540d0da597ae5db0e440cb717b3 / 33bc4103404cb5971dd6ffce3deb4c1d485217f9b8bfab520d949099d9207553.

- `touched:45:pthm-qsm-periodic-ideal-occupation`: **reviewed_no_defect**. Item bytes are unchanged between frozen pre/post; touched status comes from citation-contract enrichment. Independently verified Gaussian trace conditions, maximal domains, mode laws and weighted Riemann limits. Synchronized stale endpoint quote in its contract. Frozen pre/post raw item hashes: f45665e9477dc1840302f33c5f67d1b81e5e40de189d5b8e36a58d664dcba402 / f45665e9477dc1840302f33c5f67d1b81e5e40de189d5b8e36a58d664dcba402.

- `touched:45:pthm-qsm-fermi-zero-temperature`: **amended_repair**. Original reader delta was citation-contract enrichment only. Independent boundary review found g=0 allowed by the zero-based natural-number convention: the density is zero and k_F divides by zero. Added explicit positive integer g>=1. Filled-ball bracketing and pressure integration are sound for that essential hypothesis. Actual consumers are ex-qsm-fermi-zero-temperature with g=2 and the A page; both require no repair. Frozen pre/post raw item hashes: e5cbdb0d0c0e89e79a4ba47e4161b96b9f329623441174c9f76392a466a778e0 / e5cbdb0d0c0e89e79a4ba47e4161b96b9f329623441174c9f76392a466a778e0.

- `touched:45:pthm-qsm-homogeneous-bose-condensation`: **amended_repair**. Accepted exact endpoint supplier repair; independently checked all finite-density and critical-dimension cases. Added the missing definition: X_L converges in probability to a iff P_L(|X_L-a|>epsilon) tends to zero for every epsilon>0. Step 4.1 now uses epsilon=rho_0/2 and the tail event at 2rho_0 with positive limiting probability. The definition works for the varying P_L laws. The example uses unchanged mean, variance and tail; the A page is compatible. Frozen pre/post raw item hashes: 75544d628b2d91eccba28a2b9a45b3ff473815aca2b0bada38745963b373332b / db09b275813d7bac8b7f72e5d26c49a158d83ce005313098f4ab7f9dd8bb2db3.

- `touched:45:ex-qsm-dilute-occupation-limit`: **accepted_repair**. Accepted the explicit normalized Poisson comparator and independently checked its factorial-moment derivation, Bose mean 1/variance 2 and Fermi mean 1/3/variance 2/9 at q=1/2. The comparison is expressly separate from the dilute theorem. Frozen pre/post raw item hashes: 9869e09aeca146f3ca2f4569fd3737e33de86b72cd8fa2c3995e9afe4e7cbedd / e77d370c396f3fe1b5c98e7aaccf36d9a397efb5001ab86ffe00efb6ba0a89fc.

- `touched:45:ex-qsm-periodic-ideal-occupation`: **accepted_repair**. Accepted the same-mode two-state canonical versus geometric grand comparison with mu below both energies. Positive finite Boltzmann weights give p1,p2>0 and covariance -p1p2<0; the normalized grand law factors. The periodic supplier is used only for its matching mechanism. Frozen pre/post raw item hashes: 5071a65d4138a24a26765d8ad32445ba4ed16595afd2f94c3b9ab02d5a2afc42 / e7f24ad6de275c0744984606e83fc0f5b42bd7d39e5294370ba2aed541510cbc.

- `refuter:45:1`: **confirmed_nonfatal**. The observed source had the correct geometric tail argument but omitted the definition of convergence in probability. Added the explicit epsilon-event definition for X_L under its varying laws P_L; step 4.1 now uses epsilon=rho_0/2 with liminf deviation probability at least e^(-2)>0. This repairs the stated definition requirement without altering any probability prediction. The pre-alpha text, obtained by reversing exactly these additions, hashes to the frozen post-reader raw hash db09b275813d7bac8b7f72e5d26c49a158d83ce005313098f4ab7f9dd8bb2db3.

All seven pre-alpha touched carriers matched the frozen post-reader raw hashes (for the two alpha-edited physical statements, reversing exactly the alpha changes reproduces that hash). Reader report evidence explains the substantive deltas; periodic and Fermi item bytes were identical pre/post and only their contracts changed. No historical-byte uncertainty is asserted for these authenticated current reader outputs.

## Risk-only discovery requiring owner routing

The routed risk review of `lem-qsm-models-diagonal-occupation-trace` found and completely repaired the proof-only fugacity bound in step 3.3. The closed row `physics-remaining-80-2026-10-17-3a-batch-45-canonical-fugacity-bound` records it. This carrier owes no touched/finding decision in the frozen dispatch. To preserve exactly the eight owed obligations, no extra gate decision was invented. **Owner action needed before engine closure:** route/reference this newly discovered fixed row through the normal disposition path. Its current mathematical repair is complete; its decision routing is outstanding.

## Supplier and consumer disposition

Exact direct supplier Statement/Definition sections were read for every risk carrier, including the published tensor/sector, adjoint/core, trace-class/singular-value, canonical differentiation/response and Hermite-realization statements. The complete draft CSM Gaussian proof was read, specifically steps 1.2, 2.1, 4.1 for the evaluation; QSM uses no parameter differentiation. No defective published supplier was found; none was edited and no published ledger entry was warranted. External textbook URLs were not retrieved; this review relies on the explicit local proofs and exact local supplier statements, not a claimed full-text source audit.

The historical M17 readiness escalation text remains in contracts and old notes. Current Gaussian proof contains no M17 premise. Owner evidence `research/physics-remaining-80-2026-10-17-owner-qsm-round2/resolution.json`, repair.batch45, explicitly states that M17 is not an actual supplier; its status also records native metadata/acceptance pending. This review neither clears historical escalation records nor issues native acceptance.

A targeted items/library reference search found no outside-batch consumers of the changed lattice, dilute, Fermi or Bose public interfaces. Direct uses: lattice -> periodic/Fermi/Bose; dilute -> its example; Fermi -> g=2 example; Bose -> its variance/tail example; owning A-page summaries remain accurate. The example page only lists the examples. No consumer repair required, no next-hop interface change, withdrawal or stable-ID deletion.

## Checks

- Reflow: three alpha-edited items unchanged by formatter.
- Precheck via `node tools/tsx-run.mjs tools/physics-support/precheck.mts` on those three: 3 checked, 0 failing. Direct Node invocation of the .mts help probe was unsupported; the proper runner succeeded.
- Rendercheck on those three: 3 files, zero errors.
- Strict proof-contract check: initial seven stale citation/use records corrected; final `node tools/physics-support/proof-contract.mjs research/physics-remaining-80-2026-10-17-batch-45.proof-contracts.json --strict`: 0 errors, 0 warnings, 15/15 checked. These mechanical corrections generated no defect rows.
- Final proof-layout, batched all three alpha-edited items: 3 items, 21 steps, 0 defects.
- Risk report run before review and with `--require-reviewed`: 15 routed, 0 errors; all eight HIGH/CRITICAL reviews complete.

No mathematical repair blocker remains. Outstanding handoff is the owner routing of the fixed risk-only discovery above. Engine owns stamping, gates and transitions; none initiated here.
