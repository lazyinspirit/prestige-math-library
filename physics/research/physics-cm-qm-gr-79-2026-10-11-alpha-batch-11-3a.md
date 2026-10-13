# Batch 11 Step 3a adjudication

Run: physics-cm-qm-gr-79-2026-10-11. Group: batch-11. Scope original group o is unchanged.

Read workspace instructions, schema, workflow, physics content model, order task, Alpha brief, scope, reader report/findings, refuter report, and pre/post inventories. There are 13 touched obligations, no page obligations and no routed reader/refuter findings. The refuter coverage correction retains an independently actionable native open defect for the statistical-test definition.

## Level 0 checkpoint

- Covariance definition: accepted corrected domain/codomain, one-based aliases of zero-based coordinates, square-integrability bound, finite products, symmetry, PSD, and both directions of the zero-variance characterization. Chebyshev at 1/r and countable union justify the latter; no independence or arbitrary choice is needed.
- Likelihood definition: accepted explicit trace measurable target and infinite log convention. Densities and dominating measure are fixed model data; no parameter probability or measurability in the parameter is asserted. Zero/infinite likelihoods are expressly covered.
- Measurement definition: accepted corestriction to U, relative-Borel preimage calculation and translated error measurability. No moments or physical measurements are asserted.
- Statistical-test definition: amended the source-only reader correction by removing the false claim that size depends on the null set alone. It depends on R and the model family; changing these need not change its value. Changing the null set leaves the power function unchanged and may change size. Nonempty null and probabilities in [0,1] supply a unique real supremum. Repair confidence: 1. Consumer review pending.
- Uniform Hessian remainder: reviewed all four steps, exact Taylor and Clairaut suppliers, finite matrix action norm, Cauchy–Schwarz, convex segment containment and v=0/B=0/m=1 cases. Empty U gives a vacuous all-pairs assertion, contrary to the old contract boundary prose; the theorem is sound.
- Chebyshev finite example: independently enumerated four equiprobable sign pairs; mean zero, variance 1/2 and both stated tail probabilities 1/2 are exact. The pointwise indicator inequality proves the bound for every a>0; no measurement or infinite extension is used.

Next: finish level 1, then covariance error and level 3 consumers.

## Level 1 checkpoint

Finite IID and affine covariance lemmas: accepted the reader repairs after checking every step and exact dependencies; reindexing and finite second moments suffice. n=1, zero variances, zero derivative rows and singular covariance cause no exception.

Confidence counterexample (risk-only scope, no additional decision obligation): corrected step 2.1 at theta=14, where C(13,13) is empty, not {12}; coverage remains 3/4 at every parameter. Step 3.1 now defines the finite twelve-element sample space W explicitly, so the finite conditional-probability supplier applies literally. pi(16)>0 yields posterior 1 at (15,17). Statement unchanged; repair confidence 1; proof derivations synchronized. No consumer interface changes.

Remainder example: quadratic remainder attains B=2 for every y in (-1,3); cubic at mu=1/2, y=1 gives 1/2 < 3/2. The reader changed the contract only; current content matches both pre and post hashes. Audit enrichment accepted without inventing a defect. All level-1 risk reviews complete.

Next: level 2 covariance bound and level 3 examples.

## Level 2 checkpoint

The error corollary is sound. The quadratic proof supplies covariance Cauchy–Schwarz including b=0. Pointwise Hessian domination gives remainder L1 from second moments and L2 from fourth moments. The stated centered second moment also implies E|X|² finite by |X|² ≤ 2|X−mu|²+2|mu|². Expanding Cov(L+R) yields exactly the three bounded cross terms; no independence is assumed. Scalar specialization and B=0 are valid. Contract-only reader enrichment is reviewed_no_defect; every step and risk review is complete.

## Level 3 review

Inference remark: the sufficient equality condition is now exactly h(x)=h(mu)+Dh(mu)(x−mu) for every x in U. Finite-sample hypotheses are not inferred from physical data, infinite-sequence convergence is separate, and size, coverage and likelihood carry no prior or posterior assertion. Reader correction accepted.

Cubic counterexample: mean 1, input variance 3/2, exact cubic variance 267/2 versus affine variance 27/2; B=24 is valid on (-1,4), remainder mean 6 < 18 and second moment 102 < 648. Refutation correctly concerns a nonlinear extension of the affine lemma. Reader repair accepted.

Quadratic example: exact variance 57/4 versus affine variance 6; both mean and squared-remainder bounds attained at 3/2 and 9/2. Carrier unchanged at pre/post; contract-only enrichment is reviewed_no_defect.

Period–length example: all first/second and iterated derivatives checked, cross term −64pi⁴ l0/T0⁵ checked, operator bound proved by row Cauchy–Schwarz and box keeps T away from zero. Bounded box supplies M4 and all error bounds. Removed a literal backslash-n between the display and following paragraph (formatting only); mathematically accepted source/regularity repair. Repair confidence 1. All ten required risk reviews now complete.

## Consumer checks and scope

Searched item and page references for every reader-changed public interface. Owned consumers checked in dependency order above. Outside uses: def-cm18-observable-model uses additive translate measurability; def-cm18-sampling-model and ex-cm18-uniform-motion-sampling-check use the finite one-based family and positive-threshold bound; ex-cm18-frame-change-of-an-observation-model uses affine rotation covariance; ex-cm18-pendulum-calibration-proposal uses the scalar covariance and induced operator norm with permuted (l,T) coordinates, box fourth moments and separately qualified physical idealization. rem-cm18-model-test and rem-cm18-primary-report-contract expressly include model family and rejection region in test size. The two mathematical page summaries and physical cm18 summary use the same exact formulas. No affected consumer requires a Statement/Definition change or surgical repair; no outside item was edited. Confidence witness correction is proof-only. Owned cross-batch supplier rows remain empty: prerequisites are local batch 11 or imported mathematics. Stable IDs and pages retained; no withdrawal.

## Sources and retrieval limits

Read the exact direct supplier Definition/Statement sections, including the 54 direct imported mathematical suppliers and the additional word-derivative multi-index definition. Checked source hypotheses locally; published proof bodies were not comprehensively re-audited.

- JCGM 100:2008, https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf: fetched PDF; 5.1.2 (PDF p31) identifies first-order Taylor propagation and need for higher-order terms, and 5.2.2 (p33) gives correlated-input covariance terms. These support metrological motivation; exact bounds are local deductions.
- Bryan, https://www.rose-hulman.edu/~bryan/lottamath/mtaylor.pdf: read second-order equations (8)–(10), PDF p3, and matrix form p4. Used only under local C2 hypotheses, stronger than the notes' informal all-partials wording; no weaker differentiability assertion is imported.
- Wasserman, https://egrcc.github.io/docs/math/all-of-statistics.pdf: browser retrieval failed; direct PDF download and PyMuPDF extraction succeeded. Read Definition 9.7 (PDF p138), Definition 10.1 (p166), Example 6.14 and surrounding posterior warning (p109), and delta-method discussion (p95). Finite parameter/prior witness and extended-density conventions are local elaborations.
- Durrett, https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf: browser retrieval failed; direct PDF download and PyMuPDF extraction succeeded. Read variance-sum/weak-law argument pp65–66 and covariance definition in Theorem 3.10.7 p208 with quadratic positivity discussion p209. Finite IID deduction uses only finite pairwise factorization and variance algebra, not the infinite limit.
- NIST §7.1.3 browser fetch succeeded; Technical Note 1297 PDF fetched. Greenland PMC page returned a browser challenge, so no full-text reading is claimed for that secondary reference. Its interpretive role is corroborating, while local definitions and Wasserman supply the checked claims.

No defective published supplier was identified; published/imported content remains read-only. No substantial unmet prerequisite or owner blocker remains in this batch. The historical native refuter row is preserved and will be superseded by an evidenced fixed disposition; its transfer to touched adjudication does not turn the finding into a false positive. No judgment, stamping or engine gate was performed.

## Decisions, metadata and routing handoff

Exactly 13 decisions are recorded: 9 amended repairs (reader correction retained and manifest/contract synchronized), 1 accepted repair (inference remark), and 3 reviewed_no_defect audit enrichments (unchanged error corollary, quadratic example and remainder example carriers). Reader pre/post raw hashes compared; all carriers still unedited at comparison matched post; the statistical-size carrier already contained the documented local amendment. This supports the current repair review, not a claim that full historical preimage bytes were retrieved. Source and prerequisites are taken from current carriers.

Manifest statements, dependency roles, added suppliers and source locators were synchronized for touched carriers only. Contract derivation claims/inputs and citation uses were synchronized with actual steps, including post-QED L3 prose that the contract parser attributes to final steps. Initial strict contract check reported stale use records; corrected as metadata, with no invented mechanical defect.

Native statistical-size open row is preserved and superseded by fixed row `physics-cm-qm-gr-79-2026-10-11-3a-batch-11-size-null-set-repaired`, referenced by its touched decision. Other confirmed reader repairs have separate closed rows and exact decision references.

Owner/engine routing obligation: the newly found confidence endpoint error was repaired during its explicitly routed risk review, with closed row `physics-cm-qm-gr-79-2026-10-11-3a-batch-11-confidence-endpoint-computation`. This item was untouched/unflagged in the immutable scope, so the dispatch owes no decision for it. The decision file therefore retains exactly its 13 routed obligations. The engine/owner must adopt a supplemental native decision route for this closed risk-review finding before its ledger-ownership gate; Alpha did not modify scope or invent a routed obligation. This is an integration hold, not an unresolved mathematical prerequisite.

## Final local checks

- risk-report on the owning contract, without require-reviewed: 10 high/critical items routed. Final rerun with --require-reviewed: 0 errors, all 10 complete.
- proof-contract --strict on the owning contract: final 0 errors, 0 warnings, 10/10 checked. Earlier stale-use diagnostics were corrected and the check rerun; no mechanical failure was classified as a mathematical defect.
- precheck on all 18 owned item paths: 10 proof-bearing items checked, 0 failing.
- rendercheck on all three Alpha-edited item paths: 3 files, no errors; actual KaTeX and renderer YAML parsing performed.
- Final proof-layout, after reflow and item edits, in one command on all three edited item paths: 3 items, 12 steps, 0 defects. No item edit followed it.
- Artifact assertions: exactly 13 unique touched obligations matching immutable scope; all decision defect references resolve to fixed rows with correct subject and caught_at_stage.

No engine gate, judge cycle, stamps, publication or commit was initiated. Remaining handoff action is engine/owner adoption of the repaired risk-only confidence finding's supplemental decision route, as described above.

## Owner adoption of the authentic risk-only confidence finding

Root authorized this narrow integration after the native source11 writer drained. The native `step3-scope.mjs` supplement mechanism explicitly accepts `gate:DEFECT_ID` with route `gate`, an owned manifest subject, one exact closed defect reference and a normal finding verdict. This route name performs no gate and requires no immutable scope edit. Added exactly one supplemental decision `gate:physics-cm-qm-gr-79-2026-10-11-3a-batch-11-confidence-endpoint-computation`, confirmed_nonfatal, referencing that authentic existing fixed nonfatal row and preserving all original13 native decisions unchanged. The original row/report/risk evidence and mathematical source remain unchanged; no new defect or repair history was invented. Root owns the current-carrier hash stamp.

Independent current six-step review confirms the actual theta14 correction C(13,13)=empty, the three-of-four coverage at every declared parameter, the positive conditioning probability pi16/4, finite twelve-element W and posterior1 at(15,17). Exact scope/manifest ownership and closed-row severity/subject bindings were checked. Scoped strict confidence proof-contract passes1/1,0 errors/0 warnings. No global ledger write, gate, controls or commit occurred.

The separate original native statistical-size OPEN row is correctly superseded by the existing native fixed fatal size-null-set-repaired row. Native subject-local taxonomyOwnership has0 errors, excludes the original OPEN row from active ownership and resolves the fixed ID used by the touched11 decision. Independent current Definition and actual consumer formulas retain family, rejection region and null-set dependence, with may-change wording. No further source/consumer or ledger correction is needed. Detailed evidence and exact remaining OPEN inventory are in `research/physics-cm-qm-gr-79-2026-10-11-owner-escalation-investigations/statistical-size-and-open-owner-inventory.md`.
