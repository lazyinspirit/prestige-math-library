# Batch 18 Step 3a adjudication

Run: mathematical-statistics-foundations-37. Group: batch-18. Review in generated dependency order.

## lem-binomial-support-count-bound

Reviewed all three steps and exact factorial/count, logarithm, derivative, FTC and integral-order interfaces. Natural indices 1<=m<=d ensure positive factors and no zero division. m=1 is separate, m=d remains valid; log factorial dominates integral on each [j,j+1], t log t-t has the required derivative, and monotone log transfers the positive lower bound. No AC or iff; reader repair accepted.

## lem-finite-support-projection-selection-is-borel

Reviewed all three steps and projection, norm, continuity, finite-minimum and Borel interfaces. Residual squared norms are continuous; strict comparisons for preceding indices and weak comparisons for later indices give exactly the least minimizer. A_i partition the domain, including N=1, coincident scores and zero subspaces. Open-set preimages extend to the Borel sigma-algebra via the explicit sigma-algebra argument. Finite enumeration requires no AC.

## lem-isotropic-gaussian-noise-is-subgaussian

Reviewed both steps and normal-law, density integration, normalization and C1 change-of-variables interfaces. For a=sigma||u||>0 completing the square and a translation with Jacobian one give the mgf for every real lambda. a=0 (including sigma=0 or u=0) is the Dirac law and yields one. Normal-law mean hypothesis supplies centeredness. AC is stated and discharges countable choice in change of variables; no independence beyond the normal functional law is assumed.

Remaining: producer citation findings, projection risks, selected-model upper risks, minimax lower bound, examples and matching rate; published projection finding; final decisions and checks.

## Read-only batch 17 producer

The full current Gaussian KL proof and its contract were read, and its actual batch-17 manifest entry inspected. Positive densities establish mutual absolute continuity; the affine log density ratio is integrable and its normal expectation gives (a-b)^2/(2 tau^2), including a=b. Both reader:18:2 and refuter:18:1 identify the same nonfatal citation defect: F6 only states inversion; thm-natural-logarithm-laws supplies the missing quotient identity. Required owner/batch-17 action: add that exact supplier to F6, deps, manifest and contract; no consumer statement change is needed. This producer remains read-only and its citation issue remains pending owner disposition; no substantial missing theorem blocks the formula.

## thm-gaussian-projection-risk

All five steps checked against projection, orthonormal-basis, second-moment and expectation interfaces. Bias is orthogonal to projected noise pointwise, eliminating the cross term without Gaussianity. |epsilon_a epsilon_b| <= (epsilon_a^2+epsilon_b^2)/2 supplies integrability for the finite moment expansion. The empty basis r=0 yields only bias; sigma^2=0 yields zero projected noise. Rank deficiency and arbitrary fixed mu are allowed; no AC or iff.

## thm-subgaussian-projection-risk

All six steps checked, including reader centering and capped-sum expectation repairs. Orthonormal coordinates preserve the MGF proxy; the net bound at epsilon=1/2 gives 5^r<=6^r and exponent 1/8. Positive threshold substitution gives delta. For capped T, t0+h sum_{j<N}1{T>t0+jh} is a pointwise upper bound even at grid endpoints; min(T,t0+Nh) increases to T. exp(1/2)>=1+1/2+1/8=13/8 gives q<=8/13 and h/(1-q)<=13c/10. r=0 and sigma=0 are separately discharged, with countable zero-tail union. Reader-post statement and proof accepted; universal constants follow for r>=1.

## thm-bic-fitted-risk-bound

All eight steps and finite scan, projection, count and logarithm suppliers checked. Strict incumbent update preserves earliest minimizer. Penalized comparison with true support yields Delta^2<=2<epsilon,Delta>+n tau^2(s-k); Young gives the stated 4 times projected-noise bound. k=0 is separate; for k>=1 union over binom(d,k), rank<=k+s and tau penalty leave (ed)^(-k), whose sum<=1/e. Two branches each have delta/2 after threshold substitution. C0 dominates all coefficients because s>=1 and log(ed)>=1. Arbitrary rank-deficient designs, zero columns, d=1, ties and sigma=0 are valid. No claim at s=0; no expected-risk claim. Reader logarithm citation repair accepted.

## thm-sparse-subset-risk-upper-bound

All seven steps and scan, projection, support-count, tail, logarithm and capped-sum suppliers checked. True support with <=s coordinates (including empty support) is admissible. Delta lies in a span indexed by <=2s coordinates, padded to exactly 2s using 2s<=d; deterministic Cauchy-Schwarz gives Delta^2<=4 max_T||P_T epsilon||^2. Binom(d,2s) union bound includes endpoint 2s=d. Log A<= (2+2 log6)s log(ed/s); capped-sum MCT yields c(log A+13/10), with c=32 sigma^2, dominated by C since s log(ed/s)>=1. sigma=0 makes observation exactly representable and selected residual zero. All measurable tie rules are finite; no AC. Reader-post expected and probability constants accepted.

## thm-gaussian-sparse-sequence-minimax-lower-bound

All five steps checked with exact current sparse packing, Gaussian KL/product KL, Fano, Pinsker, scalar Le Cam and deterministic-kernel statements. Packing log bound gives M>=2; scaling keeps exactly s nonzeros and squared separation>a^2s/2. For M>=3 the reference KL is log M/8 and log2/logM<2/3, giving >sigma^2 logM/(160n). For M=2, s log(ed/s)<=1024 and coordinatewise scalar testing with b=sigma/(2sqrt n), KL=1/8 and TV<=1/4 yields 3 sigma^2/(128n), dominating 1024/200000. Scalar action is T_1, not vector T. AC, positive sigma, integer n,d,s and s<=d/2 are explicit; d=2,s=1 works. Producer KL citation issue remains nonfatal owner/batch17 maintenance, while its formula and full proof were independently checked using the existing exact logarithm quotient law.

## ex-training-risk-versus-test-risk

All four verification steps checked with projection, variance, independence factorization, scalar MSE and risk interfaces. X=[1] has whole scalar space, so fitted Y has exactly zero residual, mean error variance sigma^2, and fresh response difference has expectation 2 sigma^2. Independence factorization explicitly supplies integrability of the cross product; centered second moments supply integrability of all squares. sigma^2>0 is essential for the stated distinctness; no Gaussianity or additional AC is assumed.

## cor-matching-minimax-rate

All four steps checked with current Gaussian realization/uniqueness, coordinate independence, affine normal law, measurable composition, sparse upper bound and sequence lower bound suppliers. Upper risk is uniform in theta and selected fitted vector is Borel. For arbitrary Borel T, S(z)=T(sqrt(n) z)/sqrt(n) is Borel; Z=Y/sqrt(n) has independent N(theta_j,sigma^2/n) coordinates. The pointwise identity n^{-1}||T(Y)-sqrt(n)theta||^2=||S(Z)-theta||^2 transfers every estimator lower bound before taking infimum. n=d>=2, integer 1<=s<=n/2 and sigma>0 satisfy both bounds; n=2,s=1 and zero truth are allowed. AC covers Gaussian/Fano prerequisites and the countable-choice hypothesis of the continuous-to-Borel supplier. The producer KL citation issue is nonfatal and retained for batch17 owner maintenance.

## Final routed decisions and repairs

- `touched:18:lem-binomial-support-count-bound`: **accepted_repair**, repair confidence 1. Natural binomial indices and the logarithm-integrability/product-rule support in steps 1.2 and 2.1 are sound. The current raw item equals the immutable reader-post hash. Checked both direct consumers: BIC uses natural k in 1..d, sparse upper bound uses m=2s<=d. Added missing supplier dependencies to the manifest and refreshed exact contract excerpts.
- `touched:18:thm-subgaussian-projection-risk`: **amended_repair**, repair confidence 1. Reader centering and capped-sum/MCT argument are sound, with expectation constant 13/10 verified from exp(1/2)>=13/8. Retained every Statement formula and proof step; removed the unused layer-cake fact F6 and its dependency after the reader replaced that argument. Mirrored dependencies and regenerated exact contract citations/use steps.
- `touched:18:thm-bic-fitted-risk-bound`: **accepted_repair**, repair confidence 1. Reader logarithm law repair in step 7.1 establishes log(ed)>=1. Finite scan, k=0 branch, selected-support union bound and zero-proxy branch are sound. Current raw item equals the immutable reader-post hash. Mirrored the new logarithm dependencies and refreshed exact contract citations/use steps.
- `touched:18:thm-sparse-subset-risk-upper-bound`: **amended_repair**, repair confidence 1. Reader natural count indices, logarithm estimate and capped-sum expectation proof are sound and preserve C=32(4+2log6). Retained every Statement formula and proof step; removed unused layer-cake fact F4 and dependency after the reader replaced that argument. Mirrored dependencies and regenerated exact contract citations/use steps.

The four current statements and proof steps are sound; only the two obsolete facts were removed locally. The binomial reader domain clarification has exactly two direct item/reference consumers, both owned and checked at their actual uses. The sub-Gaussian expected bound changes no bound used by BIC or sparse upper-bound consumers (both use its tail); the sparse expected constant and conclusion remain intact for the matching-rate corollary. No mathematical Statement or Definition changed during this adjudication, no outside consumer repair is required, and no judge stamp was present on either locally edited item.

## Published finding

Confirmed the original sentence fragment in the exact owner archived preimage. Independently reviewed the current Definition and its finite-dimensional orthogonal-decomposition supplier: unique components give the same projection for all subspaces, including zero/full spaces. The owner has inserted and in current bytes; def-fixed-design-projection-estimator still uses precisely that unique fitted vector. This historical finding is confirmed nonfatal and currently resolved, not false-positive. Published source was read-only in this assignment. Exact preimage and owner authorization: `research/mathematical-statistics-foundations-37-owner-s3-polish-preimages/def-orthogonal-projection.md`, `research/mathematical-statistics-foundations-37-owner-s3-polish-preimage-receipt.json`. Historical finding remains confirmed; the current wording is repaired.

## Outside-owner alert and limitations

Reader natural count indices, logarithm estimate and capped-sum expectation proof are sound and preserve C=32(4+2log6). Retained every Statement formula and proof step; removed unused layer-cake fact F4 and dependency after the reader replaced that argument. Mirrored dependencies and regenerated exact contract citations/use steps.

The same confirmed defect supplies reader:18:2 and refuter:18:1; its immutable routing fingerprints and dependency paths are preserved verbatim in the decisions. There is no substantial unmet mathematical prerequisite and no escalated risk review. The outside citation correction is still pending batch 17/owner maintenance. No source law, owner approval or file presence was treated as repaired-proof certification.

Reviewed local arguments and exact cited supplier statements, not every transitive foundation. No external full-text source was needed or claimed as newly read: all mathematical inferences were resolved by local statements and elementary derivations. Literature references remain provenance, not replacements for local proofs. Pre/post hashes and reader repair descriptions establish the four routed deltas; no missing historical proof text is reconstructed or assigned a fatal verdict. No page-only obligation was owed, no new page/item was added, no judge or engine transition was initiated, and stable IDs/proposed withdrawals were retained.

## Local validation and handoff

- Initial and required-reviewed risk reports: 0 errors, 16 routed items; all 10 HIGH/CRITICAL reviews complete.
- Strict proof contracts after reconciliation: 16/16 checked, 0 errors, 0 warnings. Initial 39 stale quote/use diagnostics and later two unused-fact diagnostics were resolved by exact excerpt/use regeneration and removing the two obsolete layer-cake facts; no mechanical diagnostic was entered as a new defect.
- Precheck: four routed reader-changed proofs checked, 0 failures.
- Rendercheck: the same four files passed actual renderer YAML and KaTeX checks.
- Finite smoke: 0 obligations in this contract; command reported 0 checks, not mathematical proof validation.
- Exact decision inventory: 7/7 owed obligations, each reader/refuter decision names exactly one closed ledger row. All 16 manifest dependency mirrors match actual items.

Only two draft item files changed locally (unused facts/dependencies removed). The four repaired manifest entries and seven contract citation/derivation entries were synchronized; all ten risk reviews recorded. Published source untouched; published ledger merged under an exclusive lock and its deduplicated index updated without altering historical owner repair markers. Consumer ledger updated; task-named report/decisions written. Engine owns hashing, gates, stamps and transitions. Batch17/owner still owes the nonfatal Gaussian KL exact-law citation correction.

Final proof-layout command (batched four routed changed proofs) passed: 4 items, 24 steps, 0 defects. Run-scoped defect-ledger validation checked 108 rows and failed only on outside-owned rows `msf37-batch24-3a-fixed-radius-truncation` (invalid subclass proof-step-overstatement) and `msf37-batch35-3a-test-supermartingale-source-locator` (invalid location sources). These are mechanical schema alerts for their owners, not mathematical defect findings; neither was edited. All six rows appended by batch18 have valid closed enum values and closed dispositions. Native gate battery was not run.

Focused validation of the six batch18 ledger rows (`defect-ledger validate --run mathematical-statistics-foundations-37 --ledger /tmp/msf37-b18-ledger.jsonl`) passed: 6 rows checked, 0 errors. The run-wide two outside schema alerts remain for their owners.
