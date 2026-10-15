# Batch 23 Step 3a adjudication

Run: `bayesian-computational-statistics-62`. Group: `batch-23` (scope retains original group `g`). Covers: batch 23 only.

## Disposition

Exactly one obligation is owed: `refuter:23:1`, route `flagged`, item `thm-observed-density-is-latent-marginal-under-tonelli`. Verdict: **confirmed_nonfatal**, repaired with confidence 1. The accompanying decisions JSON has exactly this one decision. There are no reader findings, touched carriers or page obligations in the dispatch. Untouched, unflagged risk-review subjects receive no fabricated decisions.

Proof 4.1 referred in prose to nonexistent step 1.4. Replaced that reference with 3.1 and synchronized the contract derivation. Step 3.1 already proves the exchange clause by Fubini under absolute integrability and was correctly cited in the final tags. Thus this is a real inaccurate citation, with no missing mathematical argument; the refuter's fatal classification is not adopted. Closed ledger row: `bcs62-3a-batch-23-marginal-final-citation`.

The pre-edit raw item SHA256 was `a00b6002c36f500729fe27a8e8c6dcd4c7bdbbe507886cc42ec08dabcc90ae0e`, matching both frozen reader snapshots. Canonically hashing the snapshot's item/contract/manifest carrier reproduces the routed observed fingerprint `c5083c96eebd6ea0a1f12105dee0563f93466a430f35df1cdf01a33c8768895c`. These are different hash representations, not evidence of an unknown historical delta. The entire pre/post snapshot item hash maps agree. No reader repair acceptance or historical-disposition exception is needed.

Supplementary risk-review repair: KL fact F23 attributed the triangle inequality directly to `lem-of-abs-value`, whose exact Statement supplies absolute-value bounds. F23 now explicitly adds those bounds and derives the triangle inequality. The contract already quotes the exact supplier Statement, so its citation quote remains correct. This is nonfatal citation imprecision, repaired with confidence 1, closed as `bcs62-3a-batch-23-kl-triangle-attribution`. It adds no routed obligation. Both existing provenance fields already classify these proofs as `ai-altered`; no provenance change is required. Neither item had a judge record to invalidate.

## Mathematical review and risk closure

All eleven HIGH/CRITICAL items were reviewed in the generated dependency order. Complete item-specific `risk_review` records are in `research/bayesian-computational-statistics-62-batch-23.proof-contracts.json`. Every proof step and every direct cited supplier Statement/Definition was checked; this is not a claim to have re-audited the transitive published library.

| Level | Item | Checked argument and boundaries |
|---|---|---|
| 0 | `alg-damped-newton` | C2 symmetric Hessian, positive-definite Cholesky and unique triangular solves, stationary/unavailable/decrement branches, strictly descending Newton direction, domain checks before line-search evaluations; infinite execution is explicit. |
| 0 | `def-latent-variable-joint-and-observed-data-factorization` | One supplied product-measurable p, sigma-finite product measure, normalization for each parameter, quotient only for 0<m<infinity. Separate likelihood versions imply no joint measurability. No choice use; empty parameter space is vacuous, while a nonempty parameter family cannot normalize over empty data spaces. |
| 0 | `thm-kullback-leibler-is-nonnegative` | Complete published directional KL definition and all 28 direct suppliers checked. AC covers RN selection; finite probabilities satisfy RN exhaustion. Infinite divergence handled separately; finite negative part makes finite divergence integrable for Jensen. Convexity extends at zero; g(t)=t log t-t+1 has unique zero 1, proving equality of laws in both directions. Density identity constructs probability laws and RN ratio and checks support and absolute log integrability, including zero-density conventions. F23 repaired as above. |
| 1 | `lem-armijo-backtracking-terminates-for-strict-descent-directions` | Actual algorithms, strict descent in both branches, openness and Frechet remainder give accepted small-step interval; Bernoulli with beta^{-1}-1>0 and Archimedean cofinality prove geometric trials eventually enter it. Zero gradients stop before search. |
| 1 | `thm-gradient-descent-rate-under-strong-convexity-and-smoothness` | Scalar line chain rule/Newton-Leibniz, Lipschitz-gradient descent estimate, strong-convexity square completion, and nonnegative-factor induction. Attained minimizer is supplied. mu=L handled at k>=1 without 0^0; caller/stationary stops assert no later iterate. |
| 1 | `thm-newton-local-quadratic-convergence-under-lipschitz-hessian` | Positive least eigenvalue persists; coordinate integration gives valid sqrt(d) constants and inverse norm bound. Chosen rho contains each Taylor segment, ensures unit-step Armijo, and makes quadratic error invariant. K=0 uses no division by K. Only attempted updates after decrement test are bounded; stationary points locally equal x*. |
| 1 | `thm-observed-density-is-latent-marginal-under-tonelli` | Measurable fixed-parameter sections; constant kernel has common finite-mass exhaustion. Tonelli normalizes and indicator bounds make infinite p/m fibres null for each fixed parameter. Borel reciprocal and projection/product rules give valid-fibre measurability. Finite-density representative handles complex hp on the product-null infinite-p set; absolute integrability permits Fubini with exceptional section conventions. No uniform null set over parameters is asserted. |
| 1 | `ex-gaussian-location-kl` | Actual published Gaussian-KL lemma and its affine log-density-ratio computation checked, as well as all four direct suppliers. AC, real means, positive variance and KL direction match. Equality at a=b concerns laws. |
| 1 | `ex-multimodal-nonconvex-objective` | Nonnegative quartic factorization gives distinct minima at ±1; 0<abs(x)<1 gives f(x)<f(0)=1. Both algorithm Definitions inspected; no trajectory or global convergence claim is imported. |
| 2 | `ex-finite-mixture-latent-factorization` | J>=1, positive normalized weights, measurable normalized components, finite counting measure; finite sums prove joint measurability and total mass one, and division only on positive finite fibres. J=1 is valid. |
| 2 | `ex-zero-normalizer-latent-fiber` | Four-point density has total mass one and marginal (1,0). At x=1 the quotient is 0/0. Claim excludes this formula there, without denying arbitrary conditional versions on observation-null fibres. |

The reader report/findings were read as evidence, not acceptance. The original refuter report's omitted quartic subject and the fresh native coverage-correction report were distinguished: the latter lists all 15 subjects and preserves the concrete citation finding. No other finding was invented from these reports.

## Source evidence

- Figueiredo, [Lecture Notes on the EM Algorithm](https://www2.stat.duke.edu/courses/Spring06/sta376/Support/EM/EM.Mixtures.Figueiredo.2004.pdf), §1 equation (1), PDF pp. 1–2: observed density is a latent integral. §2 equations (7)–(9), PDF p. 5: conditional KL direction. Its parameter-identifiability assertion is not adopted. The authored measure qualifications and quartic/finite examples were checked locally, not assumed from informal source prose.
- Boyd–Vandenberghe, [Convex Optimization](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf), §9.2 Algorithm 9.2 and §9.3/Algorithm 9.3, PDF pp. 477–483; §9.5/Algorithm 9.5 and §9.5.3, PDF pp. 498–505. These complete ranges were read from the official downloaded PDF using PyMuPDF after web PDF extraction failed. The source gives geometric search, decrement-before-search, and full-step/quadratic analysis. Local C1 fixed-step and local nonconvex hypotheses are independently checked in the authored proofs.
- Rigollet–Hütter, [High-Dimensional Statistics v1](https://arxiv.org/pdf/2310.19244v1), Example 4.7, PDF page 106: equal-covariance multivariate Gaussian KL formula, specialized to dimension one. The item's PDF-p.105 locator is an adjacent-page navigation imprecision; the exact Example number locates the statement, and the local supplier proves the calculation.

## Consumers, published content, and scope

No Statement/Definition, dependency list, or mathematical contract changed; both repairs concern internal citation explanations. Consequently no consumer interface repair is necessary. The batch manifest remains accurate. The finite-mixture and zero-fibre examples use the marginal theorem with precisely its finite-positive restriction.

The sole cross-batch page record was checked against the current owned page, batch-5 posterior-propriety page, `def-posterior-evidence-normalizer-and-fiberwise-update` Definition, and `prop-fiberwise-posterior-propriety-iff-finite-positive-evidence` Statement. Fixed-fibre normalization requires finite positive evidence and supplies neither joint likelihood measurability nor a posterior kernel. Batch 23 independently assumes its joint function, so this interface creates no missing supplier. These context items remain outside edit scope and are not certified here.

Updated `briefs/tasks/frontier-dependency-ledger.md` for the owned consumer. No defective published item was found in the reviewed supplier interfaces; published content and its ledger were left unchanged. No withdrawal was removed or proposed, and no new item/page was added.

## Local checks and remaining work

- Initial `node tools/risk-report.mjs research/bayesian-computational-statistics-62-batch-23.proof-contracts.json`: 0 errors; eleven HIGH/CRITICAL reviews required and subsequently recorded.
- Same command with `--require-reviewed`: 0 errors, 13 items routed.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-kullback-leibler-is-nonnegative.md items/thm-observed-density-is-latent-marginal-under-tonelli.md`: 2 checked, 0 failing.
- `node tools/rendercheck.mjs` on those two paths: both pass YAML and actual KaTeX checks.
- `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-23.proof-contracts.json --strict`: 13/13 checked, 0 errors, one existing `shotgun-bracket` warning on Newton step 2.1. Its cited facts are actually used for coordinate differentiation, integration and bounds; no artificial citation edits made.
- After all item edits, one batched `node tools/proof-layout.mjs items/thm-kullback-leibler-is-nonnegative.md items/thm-observed-density-is-latent-marginal-under-tonelli.md`: 2 items, 17 steps, 0 defects.
- Canonical defect-ledger append accepted both closed rows and regenerated its view.

No mathematical blocker or open escalation remains for this dispatch. A read-only autopilot status attempt could not recompute live state because `tools/step6-finalize.mjs` is missing; it explicitly fell back to a cached report showing this dispatch in flight. This operational limitation is reported to the owner, not repaired outside scope and not treated as a mathematical defect. Git's latest commit is `e77f041841`; no RESUME-file claim was used to infer live-run state.

No judge, stamp, certification, agent dispatch or gate battery was initiated. Engine work remaining: stamp decisions and run its normal gate battery against current carriers.
