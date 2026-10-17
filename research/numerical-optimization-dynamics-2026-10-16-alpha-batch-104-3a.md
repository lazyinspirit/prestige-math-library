# Batch 104 Step 3a adjudication

Run: numerical-optimization-dynamics-2026-10-16. Group: batch-104. Covers: 104.

## Scope and result

Read the dispatched scope/order, reader report and empty findings, refuter report with empty flagged list, current carriers and their relevant cited supplier statements. Four obligations are owed: three touched items and one page. Eight HIGH/CRITICAL risk reviews were completed in the generated dependency order. No reader/refuter finding requires a separate decision.

The two integral-proof edits are sound audit enrichment of valid elementary estimates. The global-error repair supplies an unmet comparison-run hypothesis; its metadata is amended below. The page repair corrects a stale description of batch 98. No item or page source was edited by Alpha; all remain byte-identical to reader-post.

## Historical source evidence

All four historical preimages were recovered and their raw SHA256 values checked against step3-hash-104-pre.json. No historical uncertainty or owner-resolution exception is needed. The three item preimages are in research/numerical-optimization-dynamics-2026-10-16-owner-boundary99-107-proposals/sub103-107/source-before/items/. The page preimage is research/numerical-optimization-dynamics-2026-10-16-owner-final-metadata-preparation/ROOT-final-projection/inputs/library/numerical-differential-equations-and-stochastic-dynamics/multirate-and-partitioned-time-integration.md. Full diffs were compared with current sources.

| Carrier | Pre-reader raw SHA256 | Current = reader-post raw SHA256 |
|---|---|---|
| lem-frozen-slow-euler-variation-bounds | 57d794331dd52f8b9a10c87d5476b91ca43167fc45c25272cbdd3b0b66de2569 | 1f1d3e824bf697d80228776841b7e95c4d02129e3a84e4fabf16df091c519d39 |
| lem-frozen-slow-euler-local-defect-bound | 9b5b32fb049c7b1499032786ed394fb296444bcaa63e03d3baa905cfba356cc0 | ac0cba47c051f6e54c1e7317b0cfe7cca570979f4b4fa70449e4ffb74aa6ddbc |
| thm-frozen-slow-euler-global-first-order-error | a0455bea4619dcdb4778afc241e27ea94270ed21b5eaea8d736b4f7c696fd80b | d6693e57212e4639a98f0c7360ce2ef0672cb3a732e8eddd551b8a8074e36534 |
| multirate-and-partitioned-time-integration | 61348f1eec57abae78dd33f43aba86baba897b3c161c24f9b9b093f421f81203 | ab142145826272a4f9db8fccefc4bea4d09c3e5d380394f474f153bed08548f4 |

## Dependency-ordered mathematical review

- **lem-frozen-slow-euler-one-step-stability**: Independently checked all four steps against the successful algorithm runs and each cited norm/exponential statement. Joint K-Lipschitzness bounds each block; finite recurrence gives exp(KH); eta_H <= K exp(KT) and the Frobenius bound yield exactly L_T. K=0 handled separately without division; m=1 and H=T allowed, no convexity or AC required. Reader/refuter contain no findings; no defect found.

- **lem-frozen-slow-euler-variation-bounds**: Independently checked both steps and exact Volterra, vector integral and scalar monotonicity statements. Continuous F along the differentiable solution supplies componentwise integrability via the Volterra supplier; vector norm integrability is clause 1 of the norm theorem. Increasing a<b uses monotonicity claim 3; a=b, M=0, j=0,m and m=1 all hold. Finite increments need only pre-update states, not macro success. Reader citation enrichment is sound; no AC or outstanding reader/refuter finding.

- **thm-waveform-relaxation-contraction-and-error-bound**: Reviewed every step, waveform procedure, curve completeness, closed-subspace claim 2, Banach quantitative claim 3 and Volterra equivalence. Nonempty constant curve; evaluation at 0 and radius constraints are closed (their violation persists under a small sup-norm perturbation), so no sequential-closure converse or AC is needed. Continuous integrands give invariance M Delta<=R and contraction q=K Delta<1. Banach tail limit gives precisely q^k delta_0/(1-q). R=0 forces M=0; q=0 gives exact first sweep; B=0 has no certificate; epsilon=0 does not promise finite convergence. No reader/refuter finding or defect.

- **ex-coupled-fast-mode-destabilizes-frozen-slow-euler**: Checked explicit solutions by differentiation and initial values; integrating factors also show arbitrary solutions have this form, an immediate elementary closure. Positive reciprocal exponential estimates prove decay for every real initial pair. Recomputed x+=2/5, z1=-11/10, z2=46/25 at H=3/5,m=2 and fast perturbation factor -7/5 versus exp(-8h) in (0,1). Whole-space linear domain means success. No AC, unsupported speedup claim or reader/refuter finding.

- **ex-frozen-slow-interpolation-limits-order**: Checked both finite sums: frozen increments H*nH give z_N=T^2/2-TH/2; midpoint increments H*x_n+H^2/2 exactly telescope to exact macro values. T>0,N>=1,m>=1 ensure all divisions; N=1,m=1 valid. Terminal error TH/2 positive and independent of m. Alternative explicitly model-specific, no general second-order composition claim. No AC or reader/refuter finding.

- **ex-linear-electromechanical-multirate-block-cost**: Differentiated stipulated energy: qv+v(-q-v+i)+i(v-8i)=-(v-i)^2-7i^2. MVT applies to energy along differentiable solution on any closed subinterval, including endpoint equality. Recomputed mechanical output (1/10,9/10) and fast recurrence i_next=(4/5)i+1/40: 1/40,9/200,61/1000,369/5000. One f/four g calls with frozen v support cache description only. Zero energy and whole-space domain unproblematic; no AC or reader/refuter finding.

- **lem-frozen-slow-euler-local-defect-bound**: Reviewed all four steps after level-1 variation/stability reviews. Continuous difference integrands are componentwise integrable via F7, and their norms via the norm-integral theorem clause 1. Joint Lipschitz comparisons use only points in S, no convexity. Slow defect <=KMH^2, fast distances <=MH+2MH and m*h=H give fast defect <=3KMH^2, hence stated 4KMH^2 independently of m. K=0 or M=0 gives zero, m=1 and endpoints valid. Exact preimage matches frozen pre; current matches reader-post. Added citations and simpler bound enrich a sound proof; no reader/refuter findings or AC.

- **thm-frozen-slow-euler-global-first-order-error**: Completed after lower-level estimates: reviewed all three steps and full batch-28 recurrence proof. Reader adds success and S-containment of every exact-start comparison run; these supply the previously unmet application hypotheses of stability and local defect in step 1.1. Triangle splitting yields e_next<=(1+L_T H)e+4KMH^2, recurrence p=1,C0=0,C=4KM gives exactly both C_T branches. Fast-stage displacement <=HM plus exact displacement <=HM gives (C_T+2M)H, including j=m where slow remains frozen. K=0 gives L_T=0 without division; M=0 gives zero macro error even if K>0; N=1,m_n=1 valid. No AC; no item consumers found by exact-ID search. Reader/refuter findings empty; historical missing-hypothesis repair accepted.

The waveform closedness argument needs no choice: evaluation at 0 is continuous, and a violation of the radius bound at a fixed time persists in a sufficiently small sup-norm ball. Thus the constrained set is actually closed, beyond sequential closedness, and the choice-free closed-subspace direction suffices. Scalar comparison of its integrals is immediate from the same elementary integral monotonicity reviewed for the variation lemma. No unnecessary proof expansion was made.

## Decisions and defects

- **touched:104:lem-frozen-slow-euler-variation-bounds — reviewed_no_defect** (audit_enrichment): Recovered source-before preimage matches frozen pre-reader SHA256; current raw source matches reader-post. The original Volterra/norm-integral estimate was sound with an immediate scalar comparison. Reader makes norm integrability, a=b and monotonicity claim 3 explicit. Independently checked both steps, projection bounds, j=0,m, M=0 and domain-exit semantics. Preserve the enrichment; reconcile the added dependency in the manifest. No mathematical defect is asserted. Defect IDs: none.

- **touched:104:lem-frozen-slow-euler-local-defect-bound — reviewed_no_defect** (audit_enrichment): Recovered preimage matches pre-reader hash; current item equals reader-post. Original integration and KMH²/2 bound were valid elementary consequences of continuity; reader explicitly supplies integrability and monotonicity and uses the sufficient KMH² bound. Four current steps give slow KMH² plus fast 3KMH² = 4KMH², uniformly in m, including K=0,M=0,m=1. Preserve sound enrichment; synchronize manifest dependencies/strategy and correct contract quote mirrors and F7 uses. No mathematical defect is asserted. Defect IDs: none.

- **touched:104:thm-frozen-slow-euler-global-first-order-error — amended_repair**: Exact preimage matches pre-reader hash and current item equals reader-post. Original step 1.1 invoked stability/local defect on exact-node algorithm runs without ensuring their success or containment in S; A1 asserted that admission beyond the Statement. Reader adds the required explicit comparison-step hypothesis. Independently reviewed all three steps and the complete finite recurrence supplier: p=1,C0=0,C=4KM,L=L_T yields both constants, and finite stage/path displacements give (C_T+2M)H. Accept source repair; amend manifest condition summary and contract F3 quote and zero-case evidence (M=0 need not imply L_T=0). Exact-ID search finds no item consumers; owning page is compatible. Defect IDs: nod-20261016-3a-b104-comparison-admissibility.

- **page:104:multirate-and-partitioned-time-integration — accepted_repair**: Recovered page preimage matches frozen pre-reader raw hash; current page matches reader-post. The old summary described batch-98 composition and defect/stability verification as still open despite its current finite-dimensional Lie/Strang suppliers. Independently read batch-98 split Definition, local expansion and global theorem/proof: C3/common compact tube and separate approximate-map stability remain essential. Revised summary accurately distinguishes that established splitting result from the uninstantiated coupled multirate interpolation application. The conditional order-two corollary proves its result from cubic defect and stability, with no inference from symmetry alone; page inventory/order retained. Defect IDs: nod-20261016-3a-b104-splitting-summary.

Exactly two closed rows were appended through tools/defect-ledger.mjs, owned at caught_at_stage 3a-adjudicate: nod-20261016-3a-b104-comparison-admissibility (missing hypothesis, fatal to the supplied historical argument) and nod-20261016-3a-b104-splitting-summary (nonfatal inaccurate page status). Both repairs have repair_confidence 1. The first row does not assert a counterexample to every possible proof of the old theorem. Integral citation enrichment and mechanical contract failures do not create defect rows.

## Consumer and page review

An exact-ID search across current items and library pages found no item consumer of the changed global theorem. Its only page placement remains compatible. The variation and local-defect Statements did not change, so their existing local consumer uses retain the same hypotheses and conclusions. No supplier interface repair outside batch 104 is required.

The conditional cubic-defect corollary was read for the page obligation: its triangle inequality yields the recurrence with p=2, and it does not derive defect order from symmetry. The batch-28 recurrence proof was checked by finite geometric induction, positive exponential comparison and its separate L=0 branch; it applies at p=1 and p=2. The current global-ode-and-density-error page supplies background only; no density or measure-choice premise is imported.

For the summary's batch-98 reference, read def-exact-split-flows-lie-strang-and-bracket, lem-lie-strang-local-error-expansions and thm-lie-strang-global-orders-and-subflow-error, including their current arguments. Finite-dimensional C3 fields, common tube/stage containment, uniform cubic Strang defect and separately controlled approximate-map stability are retained. These results do not instantiate a coupled multirate interpolant. The revised summary accurately preserves that distinction. Page order and inventory remain unchanged.

## Metadata reconciliation

Updated only the owning batch's proof contracts, manifest and cross-batch dependency input, plus the named report/decisions and required defect-ledger appends. Manifest dependencies now include scalar integral monotonicity for the variation lemma and all three reader-added suppliers for the local-defect lemma. Its strategy matches the current KMH² slow estimate. The global theorem manifest summary now states exact-start comparison success and containment.

The initial strict contract check exposed stale exact quotation mirrors (recurrence, variation, vector integral definition and continuous integrability), missing F7 use mappings at local-defect step 2.1, and an unanchored amended zero-case record. Reconciled those against the actual source sections and step tags. The global zero-case evidence now correctly separates K=0 from M=0; positive K is allowed when M=0. The conditional corollary received only a current exact recurrence quotation mirror, with no source change or new carrier obligation. These were mechanical evidence repairs, not mathematical defects.

All four owned cross-batch input rows retain verified status with current independent interface evidence; refreshed the unified ledger with the prescribed tool. No published item was found defective; no published source or published-consumer ledger change was necessary. No prior judge stamp was present in the touched item sources, and no judge or stamp was added.

## External sources checked

External citations were checked for identity and relevant scope, not used in place of the local proofs.

- [Günther–Sandu, CSL-TR-25-5](https://vtechworks.lib.vt.edu/bitstreams/107ab78d-834d-44a8-9cc8-566d7f2a2911/download), §4.1.1, PDF pp. 12–13 (zero-based page 12), equations (4.2a–c): macro forward Euler, fast microsteps and constant slow interpolation. These match the defined procedure.
- [Günther lecture notes](https://acm.uni-wuppertal.de/fileadmin/mathe/www-num/teaching/ode_1819/script_1819.pdf), §4.3.1, printed pp. 78–79 / PDF pages 81–82, equations (4.17a–b): partitioned macro/micro Euler and the need to approximate intermediate slow states.
- [Embree lecture notes](https://personal.math.vt.edu/embree/math5466/nanotes.pdf), Lecture 34 §5.3, printed pp. 191–193 / PDF zero-based pages 190–192: one-step stability plus local truncation error gives a finite geometric recurrence and fixed-time global convergence. The batch-specific constants and zero branch were checked locally.
- [Lelarasmee report M82/40](https://www2.eecs.berkeley.edu/Pubs/TechRpts/1982/Archive/ERL-82-40.pdf), Chapter 5 §5.1, PDF zero-based pages 61–62, Definition/Theorem 5.1: functional-space contraction framework. The assigned synchronous Picard map and finite-sweep certificate are proved locally; no identity with the report's canonical subsystem algorithm is asserted.

## Local checks and handoff

All final focused commands exited 0:

- proof-contract.mjs on batch-104.proof-contracts.json --strict: 9/9 checked, 0 errors, 0 warnings (after correcting the initial nine metadata diagnostics).
- risk-report.mjs on the owning contract, first without --require-reviewed and then with it: eight required reviews complete, 0 errors; nine contract items routed in total.
- finite-smoke.mjs on the owning contract: all three exact finite fixtures passed. These are bounded checks, not proofs.
- manifest-deps.mjs on batch-104.pages.json: 11 items, 0 errors.
- frontier-dependency-ledger.mjs refresh --run numerical-optimization-dynamics-2026-10-16: refreshed and deduplicated.
- defect-ledger.mjs append --file /tmp/prestige-b104-defect-rows.json: appended two rows and refreshed the generated view.
- precheck.mts on the three reader-edited items in one command: 3 checked, 0 failing.
- rendercheck.mjs on those three items and the routed A page: four files, all math and YAML parsed.
- Final single proof-layout.mjs command on items/lem-frozen-slow-euler-variation-bounds.md, items/lem-frozen-slow-euler-local-defect-bound.md and items/thm-frozen-slow-euler-global-first-order-error.md: 3 items, 9 steps, 0 defects. No subsequent item edit or formatter ran.

No unresolved obligations, published findings, proposed withdrawals or blockers remain in this dispatch. No agents were dispatched and no judge cycle, stamping or engine gate battery was initiated. Current run status was read from .autopilot via the native status command; historical RESUME files were not used. The engine owns sealing and subsequent gates. This review checked the actual relevant supplier claims and necessary arguments, not the full transitive foundational corpus.
