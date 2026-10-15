# Batch 5 Step 3a adjudication

Run: `statistical-models-experiments-62`; group: `batch-5`. Scope has no touched/page/reader obligations and one refuter obligation, `refuter:5:1`. Pre/post snapshots report identical carriers; no reader repairs to accept. Initial risk-report ran successfully and routes ten HIGH/CRITICAL items. Reviews below proceed in the generated dependency order. Sources and dependencies are evidence, not certification.

### def-wishart-law

Reviewed the full Definition and actual Gaussian, probability/product, law, continuous-map and AC/countable-choice supplier statements. The finite product exists by sigma-finiteness, the outer-product sum is continuous, and its pushforward equals the independent-sum law. p,m>=1 exclude empty sums; m=1, p=1, singular scale and zero scale are admitted without claiming a density. AC is explicitly inherited for Gaussian construction and Borel measurability. No defect; no item edit.

### lem-standard-normal-matrix-has-full-row-rank-almost-surely

Reviewed both proof steps and all cited supplier statements. For each fixed independent k-tuple, a nonzero orthogonal normal gives a null Gaussian hyperplane; the dependent tuple set is Borel by minors, so product law and Tonelli integrate sections without requiring a measurable choice of normal. Finite induction includes p=1 and m=p. A single invertible first-p block proves simultaneous positive definiteness for every nonzero v, avoiding an uncountable intersection of probability-one events. AC supplies the stated Gaussian/measurability conventions. No defect; no item edit.

### def-multivariate-normal-sample-model-and-statistics

Reviewed the complete Definition and actual scientific-contract, experiment, parametric-model, statistic, Gaussian and product/measurability supplier interfaces. n>=2 makes S=R/(n-1) defined; M=R/n is distinguished, with no premature MLE claim. All finite polynomial statistic maps are continuous on the stated Euclidean product. Positive-definite parameter scale is distinct from potentially singular observed scatter. The abstract reference model explicitly records sampling/vector units, fixed parameters, observed random vectors, no latent/design/conditioning mechanism, identity observation and no empirical adequacy claim. No defect; no item edit.

### lem-standard-wishart-independent-normal-quadratic-form-is-f

Reviewed all five proof steps and exact cited supplier statements: Gaussian product invariance, grouping/measurable independence, rank, orthogonal projections, chi-square positivity, Fisher definition and Tonelli. A product realization may replace (W,Z) since their joint law is the product; it preserves the statistic law. Piecewise inversion and projection maps are Borel. Schur complement gives Q=(e1^T W^-1 e1)^-1; conditional sections of the residual projection have rank m-p+1. Orthogonal invariance makes the directional inverse-form law constant, and the displayed product integral proves independence from ||Z||^2 rather than assuming it. p=1 uses P=0; m=p still gives positive denominator degree one. All factors give (m-p+1) Z^T W^-1 Z/p ~ F(p,m-p+1). No defect; no item edit.

### thm-covariance-likelihood-ratio-asymptotic-chi-square

Reviewed all seven proof steps and every actual cited supplier statement, including the added orthonormal-basis and orthogonal-Gaussian invariance statements. Confirmed refuter:5:1 as nonfatal: the original rank citation omitted the centering reduction. Repaired F6 by the explicit orthogonal sample contrast construction (n-1>=p), with declared dependencies and contract citation quotes; no Statement, level or downstream interface changed. Product Gaussian density and affine Jacobian meet Borel/sigma-finite/AC hypotheses. The likelihood has unique maxima at mean Xbar and covariance R/n on the probability-one nonsingular event. Null whitening and finite Gaussian fourth moments give diagonal/off-diagonal CLT variances 2/1; mean correction is oP(n^-1/2), and the uniform Taylor remainder is n OP(n^-3/2)=oP(1) in fixed dimension. Half the squared Frobenius norm has p(p+1)/2 independent squares. p=1 and n=p+1 are covered; singular null and growing p are excluded. Repair confidence 1. No judge stamp was present.

### thm-multivariate-normal-sample-mean-scatter-independence-and-wishart

Reviewed all five proof steps and actual cited Gaussian, independence/grouping, orthogonal/basis, square-root, Wishart, rank and measurable-map supplier statements. Whitening preserves vector independence; rotating each independent coordinate row creates np independent standard-normal entries. The first contrast gives the sample mean; the remaining n-1 contrasts give scatter and are independent of the first. Congruence gives Wishart scale Sigma without a density assertion. n>=2 ensures positive degrees; n>p is used only for rank and inverse availability, covering n=p+1 and p=1. AC and measurability assumptions are explicit. No defect; no item edit.

### thm-hotelling-t2-exact-f-distribution

Reviewed all three steps and exact sample/Wishart, inverse-form, square-root, Fisher, positivity, measurability and Sylvester supplier interfaces. Positive-definiteness event is Borel; the stated zero extension defines a statistic globally. Under the null the whitened mean and whitened scatter are independent with laws N(0,I) and W(I,n-1). Direct substitution gives T^2=(n-1)Z^T W^-1 Z, hence factor (n-p)/(p(n-1)) and denominator degrees n-p>0. p=1 yields the squared Student normalization and n=p+1 yields degree one; no n<=p assertion. No defect; no item edit.

### thm-wishart-trace-statistic-is-chi-square

Reviewed all three steps and exact cited sample-scatter, Gaussian/product, square-root, Wishart and chi-square supplier statements. Null whitening makes each summand trace equal ||Z_j||^2, and the pm scalar independent entries give chi-square p(n-1). This needs inversion only of the fixed positive-definite Sigma0, never of S. Thus n<=p (including n=2 and p>1), p=1 and n-1=1 all remain valid; n=1 is excluded by the model convention. No density or finite-sample likelihood-ratio calibration is inferred. AC is inherited explicitly. No defect; no item edit.

### cor-exact-hotelling-one-sample-test

Reviewed all three proof steps and actual randomized-test/kernel, measurable-map, size/power, F-CDF, model and Sylvester supplier statements. The global Borel statistic defines the deterministic binary kernel pointwise. Positive degrees p,n-p and 0<alpha<1 give a unique positive quantile; continuity removes a boundary atom. Every null covariance yields rejection probability alpha, and the null set is nonempty (e.g. Sigma=I), so its supremum is exactly alpha. The p>=1 model also ensures the alternative is nonempty. No claim at alpha endpoints or singular covariance; no extra randomization or asymptotic step. No defect; no item edit.

### ex-hotelling-t2-two-dimensional-exact-test

Reviewed the full Example and all three verification steps against the five actual model/Hotelling/test/F suppliers. Direct arithmetic: sum x_i=0, sum x_i x_i^T=2I, S=2I/3, inverse=3I/2, displacement squared norm=2, T^2=4*(3/2)*2=12, multiplier=(4-2)/(2*(4-1))=1/3 and scaled statistic=4 with F(2,2). The example applies the declared Gaussian test rule to these data; it makes no empirical Gaussian-law claim and no rejection decision without alpha. The threshold uses 0<alpha<1 and a strict comparison. No defect; no item edit.

## Routed decision and repair

`refuter:5:1`: `confirmed_nonfatal`, route `flagged`, closed defect `statistical-models-experiments-62-batch-5-centered-scatter-rank-citation`, repair confidence 1. The original finding is upheld; the current corrected F6 is sound. Added only the missing centering reduction and its two published supplier dependencies, mirrored in the manifest and exact contract citation records. Pre/post reader snapshots have identical item/contract/manifest hash maps, so no reader delta is being accepted or reverted. Exactly one decision is owed and written. No Statement or Definition changed; therefore no consumer repair or propagation is required. No escalation or historical-byte uncertainty applies.

## Source evidence and limits

Read every routed carrier in full and every directly cited dependency Statement or Definition; additionally read relevant proofs for the Gaussian law, choice and orthogonal-decomposition suppliers. This does not audit every transitive published supplier. Independently checked local algebra and probability arguments rather than adopting reader/refuter verdicts. Online source checks: [Mukherjee Lecture 3](https://soumendu041.gitlab.io/teaching/courses/mva2021/lectures/scribes/lec-3.pdf), PDF pp. 2–5, Corollary 3.3, eq. 3.4, Theorem 3.7 and Corollary 3.8, agree with the centered-scatter degrees and Hotelling scaling after converting the source covariance denominator n to local n-1. [Lecture 7](https://soumendu041.gitlab.io/teaching/courses/mva2021/lectures/scribes/lec-7.pdf), PDF pp. 1–2, discusses covariance MLE and the fixed-parameter-dimension Wilks limit; its generic sketch is not used as a proof supplier. The local theorem supplies the covariance-coordinate CLT and Taylor proof. Other bibliography claims by the reader are not asserted here as independently fetched sources.

No defective published supplier was established; published items were left read-only, and no published-ledger entry is needed. No proposed withdrawal was added or removed. The existing cross-batch item interface remains valid; the frontier ledger records its actual current use.

## Local validation and handoff

All commands below exited 0. Initial `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-5.proof-contracts.json` routed ten HIGH/CRITICAL items; each complete review above is mirrored as a specific `risk_review` in the owning contract. The final run with `--require-reviewed` reports 0 errors across 12 items.

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-covariance-likelihood-ratio-asymptotic-chi-square.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-covariance-likelihood-ratio-asymptotic-chi-square.md`: 1 checked, 0 failing.
- `node tools/rendercheck.mjs items/thm-covariance-likelihood-ratio-asymptotic-chi-square.md`: 1 file OK, including real KaTeX and YAML parsing.
- Final item formatting check, after the final item edit and formatter: `node tools/proof-layout.mjs items/thm-covariance-likelihood-ratio-asymptotic-chi-square.md`: 1 item, 7 steps, 0 defects. This is the sole changed item.
- `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-5.proof-contracts.json --strict`: 0 errors, 0 warnings, 12/12 items checked.
- `node tools/frontier-dependency-ledger.mjs refresh --run statistical-models-experiments-62`: refreshed and deduplicated after the owned input update.
- `node tools/defect-ledger.mjs validate --run statistical-models-experiments-62`: 252 rows checked, 0 errors at the time of validation.
- Focused script checks confirmed current item/manifest dependency-set equality, exactly the one owed decision, and exactly one matching fixed defect row with its structured adjudication reference.

No blockers remain in this dispatch. Engine decision stamping, current-hash checks and full gate battery remain engine duties. No judge, stamp, certification or gate cycle was initiated.
