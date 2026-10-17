# Batch 107 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`. Group: `batch-107`.

Scope owes four touched-item decisions and one page decision; reader/refuter findings are empty. Review proceeds in generated dependency order. No independent judge or engine gate is run.

## def-product-coordinate-projections

Reviewed the uncompleted finite product probability domain, real L2 representatives, measurable zero extension of exceptional integrable sections, empty one-point product and full-coordinate identity. Product existence, Fubini, Tonelli and Cauchy–Schwarz interfaces apply to finite probability spaces; the discharge lemma supplies representative independence. No choice is introduced.

## lem-uniform-interval-poincare-inequality

Reviewed both steps: reflected affine rescaling yields a periodic AC function with zero mean, norm squared Var(g(U)), and derivative norm squared 4L² E|g′(U)|². Integration by parts gives Fourier derivative coefficients; Parseval and n²≥1 yield the sharp L²/π² constant. The cosine attains equality, constants give zero, L>0 excludes the degenerate interval. CC/DC are explicitly inherited from the exact Fourier/IBP suppliers. Sobol–Kucherenko §4 Theorem 2, PDF pp.4–5, confirms the unit interval bound; Lamboni §3 is contextual rather than the uniform-law theorem.


## lem-product-coordinate-projections-commute-and-contract

Checked all four steps against current Fubini/Tonelli/Cauchy–Schwarz: probability mass one ensures L2⊂L1 on sections; null differences integrate to zero a.e.; contraction makes the two self-adjointness products integrable; successive complementary-coordinate integrations leave J∩K. Empty/full J,K and d=1 agree with identity/mean operators. All are class identities; no completed-product section assertion or choice is needed.

## thm-shapley-effects-are-nonnegative-and-efficient

Checked nested closed L2 conditional subspaces under the supplier’s AC hypothesis. Orthogonality yields v(T)−v(S)=||mT−mS||², endpoints 0,V follow from constants and Y=f(X), and permutation telescoping proves nonnegative normalized effects summing to one even for dependent or redundant coordinates. Finite algorithm invariant S=predecessors proves correctness and ≤2d d! exact calls; V>0 excludes division by zero. Current conditional-projection proof and exact algorithm were read.

## thm-monte-carlo-shapley-effects-clt-and-standard-errors

Reviewed all four steps and exact permutation procedure. Counting predecessor sets gives EΔi=Vφi; 0≤Δi≤V implies coordinate/product SLLNs and finite covariance. The AC multivariate iid CLT permits singular covariance; division by fixed V>0 preserves the limit. Sample covariance estimates the CLT scale, including identically zero variance at d=1. Added finite n≥2 termination, ≤2nd oracle calls and O(nd²) arithmetic exclude permutation/oracle costs and follow directly from finite loops. Exact pre-reader bytes recovered; the change is a sound audit enrichment, not repair of a false prior CLT.

## thm-product-hoeffding-anova-decomposition

Reviewed finite Möbius reconstruction including v=full-set coefficient 1, pairwise cancellation after averaging each i∈u, dependence Pufu=fu and mean-zero deduction. For distinct u,w, choosing i in their symmetric difference gives a self-adjoint projection fixing one and annihilating the other, proving orthogonality; finite Pythagoras proves variance decomposition. Empty component and d=1 are covered, constant outputs allowed, no density or AC assumption is hidden.

## ex-perfectly-correlated-inputs-and-shapley-allocation

Reviewed Rademacher mean 0 and variance 1; both singleton sigma-algebras reveal Y, so the game is (0,1,1,1). The two permutations give increments (1,0) and (0,1), hence effects 1/2 each. Independence is explicitly unavailable; AC is inherited only from conditional projection. Exact enumeration agrees with efficiency and does not claim an independent ANOVA.

## thm-complete-chaos-tensor-expansions-give-sobol-coefficients

Reviewed support projection on single tensors by finite Fubini, finite Möbius coefficient cancellation, and passage of finite-subset nets through the bounded finite sum Qu. Exact CC Parseval and L2-Hilbert hypotheses are satisfied; completeness is assumed explicitly, never inferred from finite chaos cutoffs. Constant coefficient is Ef and nonnegative support sums give variance and indices only for V>0. Constant output and trivial coordinate families cause no exception.

## thm-pick-freeze-sobol-covariance-identities

Reviewed first hybrid shares only Xi, total hybrid shares X−i, and both have law μ. L2 gives all cross-product/difference integrability; Fubini factors the first product into ||Pi f||² and the second half-square into ||f−P−i f||². Projection composition and coordinate centering retain only singleton/containing-i components respectively; d=1 gives V in both and constant outputs give zero numerators without normalized indices. Independence of all replacement coordinates is essential and stated.

## thm-poincare-bound-for-total-sobol-effect

Reviewed all three current steps and exact pre-reader delta: the newly fixed real product-measurable representative F is the object with AC sections and product-square-integrable derivative. Tonelli/Fubini restrict to a.e. sections with both L2 function and derivative; the interval lemma applies with L_i>0 and inherited CC/DC. Orthogonality identifies the residual norm with V S_Ti, integration yields L_i²/π² times the derivative moment, and V>0 licenses division. The same argument works for any stated valid section constant Ci. This resolves representative-level ambiguity without changing the intended mathematical inequality.

## ex-ishigami-function-sobol-decomposition

Reviewed every uniform moment and component formula: V1=(1+bπ⁴/5)²/2, V2=a²/8, V13=8b²π⁸/225, yielding the stated sum with b² coefficient 1/18. At a=0, b=0, or b=−5/π⁴ individual advertised components vanish. Reader corrected the overstrong title; Alpha additionally changed the Example to only possibly nonzero components, preserving all formulas and real parameter scope. V stays positive since b≠0 forces V13>0 and b=0 gives V1=1/2. All index formulas follow; mean a/2 is supplied by averaging. No judge stamp was present.

## ex-polynomial-chaos-coefficients-and-sobol-indices

Checked current batch-99 degree-one Gram and tensor definitions and their full-mass support convention. Symmetric two-point inputs give Gram I2; the four explicit orthogonal sign vectors span the four-point L2 space, giving completeness here without a general density theorem or CC Parseval. Exact coefficients 2,3,0,4 give centered variance 25 and ANOVA numerators 9,0,16. First/total ratios 9/25,0,1,16/25 follow, and the finite-cutoff caveat remains explicit.

## ex-zero-variance-sobol-indices-undefined

Reviewed constant output c, all projections equal c including empty/full subsets, and the alternating coefficient sum (1−1)^|u| vanishes for every nonempty u. V=0 and every numerator is zero; normalized indices are undefined under the exact definition, not assigned zero. No positivity, infinite expansion, choice, or uniqueness premise is silently invoked.

## ex-noisy-simulator-intrinsic-noise-and-input-sensitivity

Reviewed all three steps: testing centered independent noise against every σ(X) event constructs the conditional-mean version directly, without invoking conditional-expectation existence or AC. L2 products are integrable and independence kills cross terms. Output variance is Vf+τ²; fresh independent noise adds zero to first-hybrid covariance but τ² to the total half-square. Conditional-mean indices require Vf>0; raw-output normalization is likewise subject to F6’s selected-variance positivity, so Vf=τ²=0 admits no ratio. No shared-noise coupling or independent-input formula for dependent coordinates is claimed.

## thm-pick-freeze-sobol-ratio-joint-clt-and-mcse

Reviewed all five steps and the six-vector row procedure. Every hybrid has μ law; Cauchy–Schwarz on f² and (a−b)^4≤8(a⁴+b⁴) make row coordinates square-integrable under L4, giving mean η=(singleton variances,total variances,V). Finite-coordinate SLLN gives eventual positive denominator a.s.; the global Borel piecewise ratio is smooth near η with V>0. The AC CLT allows singular covariance; local derivative sends it to JΣJᵀ. Products of row coordinates are L1, so the integrable WLLN suffices for sample covariance with no L8 assumption. The plug-in limit is for nMn; arbitrary fixed extensions on the vanishing zero event preserve it and the CLT. Finite loops use ≤n(2d+5) f evaluations, covariance O(nd²), matrix products O(d³); added operation counts are sound audit enrichment, not a defect in the prior claim.

## Routed decisions and repairs

Exactly five obligations are decided in the companion decisions JSON:

- Monte Carlo Shapley and pick-freeze ratio CLTs: `reviewed_no_defect`, `change_kind: audit_enrichment`. The reader supplied correct finite-run cost/termination analyses. Their original limit theorems were already sound; no defect was invented to account for enrichment.
- Poincare theorem: `accepted_repair`, confidence 1. The fixed-representative clarification closes the nonfatal representative ambiguity, recorded as `numerical-optimization-dynamics-2026-10-16-3a-b107-poincare-representative`.
- Ishigami example: `amended_repair`, confidence 1. Accepted the reader title and corrected the remaining nonvanishing assertion in the Example. Recorded as `numerical-optimization-dynamics-2026-10-16-3a-b107-ishigami-nonvanishing`. The title and statement express the same parameter-sensitive overclaim, so they share one closed defect row. Manifest title and contract boundaries are synchronized. Statement/proof provenance remains ai-generated; no proof rewrite or judge-stamp invalidation was needed.
- Assigned A page: `reviewed_no_defect`, `change_kind: audit_enrichment`. Its fixed-representative summary is accurate. No further page edit was needed.

Reader findings and refuter flags are both empty. No additional decision is owed for the ten risk-only carriers. No escalation or proposed withdrawal is introduced or cleared.

## Historical bytes and current currency

The immutable pre/post hash files were compared with actual retained pre-reader source bytes, not inferred solely from the reader narrative. Exact pre-reader SHA256 matches were recovered at:

- Ishigami: `research/numerical-optimization-dynamics-2026-10-16-owner-finite-smoke-range99-107/source-before/items/ex-ishigami-function-sobol-decomposition.md`.
- Poincare: `research/numerical-optimization-dynamics-2026-10-16-owner-step1-gate-r1-binding-before/items/thm-poincare-bound-for-total-sobol-effect.md`.
- Both Monte Carlo CLTs: `research/numerical-optimization-dynamics-2026-10-16-owner-boundary-integration-intake/generations/20261016T114106891879Z/current-sources/<id>.md`.
- A page: `research/numerical-optimization-dynamics-2026-10-16-owner-final-metadata-preparation/ROOT-final-projection-r2/inputs/library/numerical-optimization-inverse-problems-and-uncertainty-quantification/global-sensitivity-anova-and-sobol-estimation.md`.

The three theorem source hashes still equal the frozen reader-post item hashes. Ishigami now differs from reader-post by the single word “possibly”; its current raw SHA256 is `4aef4377e2b1b28a7257e84ff395f801f75d5ecb76ee53abf2ce351e2750fd73`. The A page equals reader-post SHA256 `763ed1a027216fb2b94eaa9facbbfa89f02baf71e720fa0cd80b24219f3b11b5`. Contract risk-review updates and the Ishigami manifest-title synchronization are intentional current metadata changes; the engine must stamp actual current carriers. No historical uncertainty remains for these five changes.

## Consumers and prerequisite disposition

Searched actual item and library references to all four touched IDs. There are no outside item consumers: matches consist of theorem self-links and the two assigned pages. The B-page Ishigami summary says it computes an interaction and does not assert nonvanishing for every parameter; it needs no correction. The A-page Poincare convention agrees with the theorem, and its Monte Carlo summaries remain compatible with the finite-run additions. No dependency edge changes.

Independently read the current batch-99 finite product input, positive moment Gram, and tensor definitions used by the polynomial-chaos example. At cutoff one the symmetric sign law has Gram I2, and four-point completeness is proved locally. Existing batch-107 cross-batch dependency records remain accurate and were preserved. The required conditional-expectation, RQMC and chaos page summaries were checked within their actual use; the current b-adic Parseval statement/proof retains CC and the uniform-cube domain. Published context remains read-only. No defective published supplier was found, so no published-consumer ledger entry or lock was needed. The frontier dependency ledger records this owned-consumer review; no withdrawal was removed.

## Source checks

Local cited prerequisite statements were read at their actual carriers, including all direct suppliers of the fifteen high/critical items. This is a focused current-proof review, not a new audit of every transitive foundation. External sources were checked in these relevant passages:

- [Sobol–Kucherenko](https://www.andreasaltelli.eu/file/repository/DGSA_MATCOM_2009.pdf), §4 Theorem 2 and proof, PDF pp. 4–5: unit-interval derivative bound, section integration, sharpness example. The local interval lemma independently proves the AC-section version and rescaling.
- [Lamboni et al.](https://arxiv.org/pdf/1202.0943), §3, PDF pp. 6–7: product-law derivative/Poincare connection, with Boltzmann assumptions for its general bound. This is contextual; its Theorem 3.1 is not misapplied as the uniform-interval theorem.
- [Klein](https://perso.math.univ-toulouse.fr/klein/files/2014/07/cours_AS.pdf), §2.2.2 Theorem 2.1 and Corollary 2.1, PDF pp. 4–5: independent-input orthogonal decomposition and variance identity. The local finite-projection proof works on the explicitly stated general product probability domain.
- [Song–Nelson–Staum](https://users.iems.northwestern.edu/~nelsonb/Publications/SongNelsonStaum.pdf), §3.1 equations (4), (6), (7), Theorem 1; §4 and Theorem 3/Appendix A: permutation weighting, dual variance games and bounded exact-oracle increments. The local normalization divides effects by V and its joint CLT is derived from the local iid CLT supplier, not attributed to the paper’s variance-bound theorem.
- [Owen](https://arxiv.org/pdf/1205.1774), §§2–2.1, PDF pp. 3–5: coordinate ANOVA, support grouping, hybrid covariance formulas. The authored proofs explicitly retain their completeness, independence and normalization hypotheses.
- [Xiu–Karniadakis](https://www.sci.utah.edu/~dxiu/Papers/XiuK_SISC02.pdf), §§3–4, equations (3.3)–(4.2), PDF pp. 6–7: law-matched orthogonal expansions. The sign-input four-point example is verified directly; general polynomial completeness or spectral convergence is not inferred from this source.

## Local checks and handoff

- Initial `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-107.proof-contracts.json`: 22 items routed, 15 high/critical; zero tool errors.
- All fifteen required risk reviews now have specific independent Alpha evidence. Rerun with `--require-reviewed`: zero errors.
- `node tools/tsx-run.mjs tools/reflow.mts items/ex-ishigami-function-sobol-decomposition.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts` on the four touched item paths: 4 checked, 0 failing.
- `node tools/rendercheck.mjs items/ex-ishigami-function-sobol-decomposition.md`: 1 file, no YAML or KaTeX errors.
- `node tools/finite-smoke.mjs research/numerical-optimization-dynamics-2026-10-16-batch-107.proof-contracts.json`: 5 checks passed, zero errors. These are finite sanity checks, not proofs of general claims or analytic integration.
- Final post-edit/post-reflow `node tools/proof-layout.mjs items/ex-ishigami-function-sobol-decomposition.md`: 1 item, 4 steps, 0 defects. This is the only item edited by Alpha in this dispatch.
- Two closed defect rows appended through the serialized ledger tool, and its generated view refreshed.

No mathematical blocker remains in this dispatch. Decisions are unstamped; engine hashing, routing checks and the gate battery remain engine work. No judge cycle, publication, commit or run transition was initiated.
