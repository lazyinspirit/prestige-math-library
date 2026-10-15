# Batch 21 Step 3a adjudication

Run: statistical-models-experiments-62. Group: batch-21.

## Completed lower-level reviews

`lem-conditional-treatment-indicator-factorization`: Reviewed steps 1.1–3.1 against the bounded-product conditional-independence definition, conditional-expectation order/linearity/L1 contraction, and dominated convergence. Truncations are measurable and bounded by |Z|; I and e are bounded by one. Both conditional sides converge in L1, so uniqueness of the L1 limit proves the equality. Zero Z, empty C, e=0 or 1 and constant conditioning cause no exception. AC is declared only for CE existence. No defect or additional hypothesis.

`ex-positivity-failure-prevents-standardization-and-ipw-identification`: Reviewed all three verification steps and both algorithm domains, potential-outcome consistency and equal-observed-law identifiability definition. Deterministic potential outcomes given L ensure exchangeability. Both observed laws have masses 1/2,1/4,1/4 at the stated triples, while target means are 1/2 and 3/2. e(0)=0 on mass 1/2 excludes both strict-positivity algorithms and leaves the missing counterfactual unobserved. No assertion that every positivity failure entails nonidentification is made; this is a two-law witness. No defect.

Evidence: current item carriers and their cited local supplier statements; batch-21 reader/refuter reports and pre/post snapshots. No source web consultation or external source verification claimed. Next: read-only batch-19 finding, then the two touched theorems and remaining examples in generated order.

## Read-only producer and IPW

Batch-19 producer current proof, contract and pages manifest independently reviewed, including its 21 exact local prerequisite statements. Stratum Y integrability, RCD existence for real Y with standard-Borel L, equivalence of covariate laws, event-integral uniqueness, target mean and observed Q_a argument are sound. Proof 2.2 uses v_a under P_a before the immediate bound in 3.1. Both reader:21:1 and refuter:21:1 are confirmed_nonfatal for one ordering defect; no substantial missing prerequisite. Owner batch-19 should move the estimate before 2.2; no producer edit here. This is a recorded nonfatal polish alert, not a false-positive or an unresolved mathematical prerequisite.

`thm-inverse-probability-weighting-identifies-a-causal-mean`: accepted_repair. Reviewed all five steps and exact cited supplier statements. The rational-sublevel construction factors each real sigma(L)-measurable version even for arbitrary covariate spaces: inf on the range equals V, and nonfinite values off the range have measurable zero fill. Declared AC covers countably many choices of B_r as well as CE existence. Change of variables makes both propensity functions integrable under the common L law; event-integral uniqueness equates them. Truncated inverse propensities are bounded; nonnegative MCT and DCT with E[|Y^a||G] prove absolute integrability before signed DCT. Atom consistency and observed-coordinate pushforward then transfer the finite integral from P to Q. Equal observed laws yield the same functional; no converse causal-assumption claim is made. e=1, zero outcomes and constant L work; e=0 is excluded only almost surely and no uniform lower bound is used. General atom formulation needs no global Y^A. Reader repair is sound, no new defect.

Current touched raw hashes equal reader-post hashes. Pre/post item and contract hashes differ; manifests are unchanged. The earlier owner-step2-source-format before carriers also expose the precise missing explicit factorization and cross-law transfer. They are supporting historical evidence, not assumed to be exact pre-reader bytes. Next: standardization risk review, then capping and two-stratum examples.

## thm-standardization-identifies-a-causal-mean

Reviewed all five steps and all 15 cited dependencies, including the independently reviewed current batch-19 proof/contract/manifest. Consistency makes IY integrable; coordinate independence and factorization yield q=e*mu. Rational-sublevel factorization works for arbitrary measurable L spaces, with countably many B_r choices covered by declared AC. Change of variables puts all five functions in L1 of the common L law; event-integral uniqueness equates P and Q numerator/propensity versions. Positive propensity makes their ratio equal mu, hence integrable without uniform overlap. The common-law integral and tower give the target and identifiability; the RCD comparison is restricted to countable treatments containing 0,1 and standard-Borel L. e=1, zero outcomes, constant L and null strata are handled; there is no continuous-treatment pointwise or converse causal-assumption claim. Batch-19 delayed integrability estimate is immediate nonfatal polish, recorded for its owner, and does not invalidate the overlapping-domain result. Reader repair is sound.

Evidence: current carrier, local supplier statements and reader/refuter artifacts. No mathematical repair needed beyond retaining the reader theorem repairs.

## ex-weight-truncation-changes-the-ipw-target

Reviewed all four steps, algorithm and repaired IPW theorem prerequisites. Potential outcomes are bounded deterministic functions of L, so consistency, exchangeability, integrability and positive propensities hold. True IPW and target both equal 1. Capping reciprocal weights at 3/2 gives raw numerator (1/8)(3/2)2=3/8; treated normalization is 3/16+1/2=11/16>0, giving 6/11. The second stratum reciprocal 4/3 is below the cap. Neither capped value is asserted to obey the unmodified theorem. This explicit population example makes no general or asymptotic estimator claim. No defect.

Evidence: current carrier, local supplier statements and reader/refuter artifacts. No mathematical repair needed beyond retaining the reader theorem repairs.

## ex-standardization-and-ipw-two-strata-calculation

Reviewed all three steps and both algorithms/theorems with the supplied finite law. Deterministic potential outcomes given L ensure exchangeability, consistency is explicit, outcomes bounded and both propensities 1/4,3/4 positive. Treated conditional means 1,3 average to 2. Joint treated masses 1/8,3/8 yield weighted contributions 1/2,3/2, summing to target 2. All denominators are nonzero; this is the stated population calculation, no estimator or unsupported-stratum claim. No defect.

Evidence: current carrier, local supplier statements and reader/refuter artifacts. No mathematical repair needed beyond retaining the reader theorem repairs.

## Exact historical comparison and dispositions

The pre-reader carriers were recovered exactly in memory from `.autopilot/statistical-models-experiments-62/owner-step2-source-format/<id>.before.md`: repeatedly join each numbered step to its immediately following nonblank continuation line with one space. This is proof paragraph reflow only. The resulting SHA-256 values are `47642581580fd60c87782353e96b9e1ae46f8803622fac47abfe0e02739b20e1` (standardization) and `887b29d6abd956eeba07670136eb8a0337ccb88c36f43c06fac5b81afb1ee332` (IPW), exactly the frozen pre-reader hashes. Current raw hashes equal the respective frozen reader-post hashes `8125c88a6dcff47453823264b060a79190d1bf68505ed7216d1218270aeba4ee` and `fabd783c4b8701e02d39c2e19fa1393c40f28083deecc4da298c5b55276755a4`. Thus no missing historical preimage disposition is needed. The original notation implicitly treated P conditional versions as functions of L without establishing factorization, and did not explicitly justify the observed-law transfer; both are immediate nonfatal gaps fully closed by the reader. Both repairs are accepted with repair_confidence 1. No Statement or Definition changed; no consumer repair is required.

Metadata synchronization: copied the actual reader-added dependency lists into the two owning manifest entries; refreshed three stale citation quotations from exact current local Statement sections (the producer Statement and change-of-variables Statement); documented the countably many rational-sublevel choices under declared AC. These changes do not assert new mathematical defects or judge coverage. No item or published carrier was edited. No withdrawal is proposed or removed.

## Sources and review limits

Mathematical source evidence is the actual local carrier Statements/Definitions and proofs, not prior verdicts. Reviewed all direct suppliers of the six required risk items and all 21 producer dependencies. In particular: conditional-expectation ae classes and uniqueness; bounded-product independence and measurable-map preservation; order/L1 contraction; take-out, tower, MCT, DCT; observed-law pushforward/change of variables; potential outcomes, positivity, exchangeability, ATE/CATE; identifiability and its set-theoretic factorization; standard-Borel RCD existence, kernel factorization, conditional integration and simultaneous uniqueness. Exact source paths are in the carriers and contracts. No external source reading or independent audit of unrelated transitive foundational proofs is claimed. The general real-version factorization is proved locally, so the real-conditioning-only Doob–Dynkin theorem is not invoked.

## Owner alert and current state

The sole outside-scope alert is the batch-19 nonfatal ordering defect at producer Proof 2.2/3.1. Its bound follows at once from positive P(A=a) and the CE definition, so no substantial unmet prerequisite blocks batch 21. The immutable producer pre-reader fingerprint, routing-time carrier, dependency path and original consumer_id remain verbatim in both finding decisions. Current producer raw SHA-256 equals the routed observed `f9b892e1cef7d3c724e11ae2bde016fe1a48da16113efb5ed8c4f99a99b1830f`. Owner batch-19 should move the existing integrability estimate before the signed integral; no outside repair or owner resolution is claimed. Both reports share one nonfatal-recorded defect row; the two retained reader repairs have one fixed row each. No defective published item found.

## Local checks and handoff

- Initial risk-report without --require-reviewed identified six HIGH/CRITICAL items; all six now have specific complete risk_review records. Final --require-reviewed: 0 errors, 9 scoped items.
- proof-contract --strict: initially exposed three stale quotation records; refreshed only those quotes from exact current supplier Statements. Final: 0 errors, 0 warnings, 9/9 items checked.
- Scoped precheck on both retained theorem repairs: 2 checked, 0 failing.
- Final proof-layout, batching both routed theorem paths: 2 items, 10 steps, 0 defects. No item bytes were edited by this adjudicator.
- Producer manifest dependencies match its current carrier. Batch-21 theorem manifest dependency lists now include exactly the reader-added suppliers. Other manifest entries remain unchanged.
- Appended three closed defect-ledger rows using the serialized append tool (--no-render); no row for metadata/check failures. Four decisions cover exactly the routed obligations. Current finding bindings and immutable producer identities are preserved.
- Updated owned consumer evidence and the frontier-dependency ledger with the batch-19 owner alert. No other batch or published content edited, no judge/stamp/cycle or engine gate initiated.

No substantial mathematical blocker remains for this batch. Engine owns stamping and all gate/transition work. Batch-19 retains the nonfatal ordering polish action described above.
