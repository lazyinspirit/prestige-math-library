# Batch 44 authoring notes

Run `machine-learning-all-101-2026-10-19`; assigned pair `implicit-bias-of-gradient-training` / `implicit-bias-of-gradient-training-examples`.

## Current live run state

`autopilot status` was read from the actual `.autopilot/machine-learning-all-101-2026-10-19` state at 2026-10-18 22:13:54 UTC. The run remains at `1-scaffold`, with 47/101 pairs covered, no in-flight workers, and the existing owner repair/recertification hold in `research/machine-learning-all-101-2026-10-19-step1-blockers.json`. The current HEAD observed was `50139bdcb6`. No runtime state, verdict, shared plan, or published content was changed.

The dispatch dependency-order task records input SHA `a3345c87fc1145673e947d512be7a8cc05b58afe8dc315843a1a152c65917a34` and batch 44 prerequisite batch 38 only. At the first authoring check, the on-disk artifact had input SHA `f0276843fc1db70c8225584e620d88028c9dc9e5eaf7b3ade1d324d197e0ec16` and batch 44 level 2 with prerequisites 31 and 38. The shared artifact was subsequently refreshed by its owner to input SHA `69025dde350f98b7148b6e768b5696a275290fe171748be48746b2924054386b`; it still records batch 44 level 2 with prerequisites 31 and 38. After the assigned manifest edits, `batch-dependency-levels.mjs check` cannot recompute the input because a foreign item has malformed YAML (exact blocker is recorded below). I leave the shared artifact to the owner.

## Plan reconciliation

The dispatch pointer to `research/plan-machine-learning-track.md` line 370 is stale; ML-43 is now at lines 382–384. The assigned page IDs, title, and five page-level `requires` entries agree with the current ML-43 section and `plan-spec.json`. “Batch 44” is the scheduling batch number; the pair is the plan’s ML-43 pair.

The plan’s prose-level `Requires` also names ML-30 for homogeneous-model notation. The current batch pages list does not contain that page edge, but the actual refreshed batch-level dependency artifact now includes batch 31. The manifest therefore declares the actual item-level dependency `def-homogeneous-classifier-margin-and-exponential-risk` → `def-feedforward-neural-network` (batch 31, level 0); the local definition states the full use. Batch 44 remains level 2 because batch 38 is level 1. The five page-level requirements remain as assigned.

The source’s MFCQ convention has a sign inconsistency, recorded below. The local KKT definition uses the correct positive-margin convention for constraints `q_i >= 1`; no proof relies on the source’s inconsistent generic `g_i <= 0` sign.

## Item inventory and levels before carriers

Levels are computed from actual in-run item suppliers only. External/published suppliers do not raise item level. The dependency graph is acyclic.

| Item | Role | Direct dependencies | Level | Planned status |
|---|---|---|---:|---|
| `def-clarke-subdifferential-and-gradient-flow` | Clarke generalized derivative, chain rule, and global flow terminology | none | 0 | draft definition |
| `def-linear-separable-margin-and-hard-margin-svm` | Bias-free linear sample, margins, strict separability, and hard-margin problem | none | 0 | draft definition |
| `def-tight-exponential-tail` | Exact two-sided source definition of a tight exponential tail | none | 0 | draft definition |
| `thm-zero-initialized-gd-selects-minimum-norm-least-squares` | Exact linear least-squares GD selector for nonunique solutions | `alg-gradient-descent`; `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`; `thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution`; `thm-least-squares-solutions-and-normal-equation` | 0 | complete proof |
| `def-homogeneous-classifier-margin-and-exponential-risk` | Finite feedforward score, signed margins, degree, and exponential empirical risk | `def-feedforward-neural-network`; `def-clarke-subdifferential-and-gradient-flow` | 1 | draft definition |
| `lem-hard-margin-svm-has-unique-minimizer` | Existence and uniqueness of the feasible bias-free hard-margin vector | `def-linear-separable-margin-and-hard-margin-svm`; `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values` | 1 | complete proof |
| `lem-logistic-and-exponential-losses-have-tight-exponential-tail` | Verification of the two losses’ source tail bounds | `def-tight-exponential-tail` | 1 | complete proof |
| `ex-underdetermined-linear-system-gd-minimum-norm` | Exact two-parameter underdetermined GD orbit | `thm-zero-initialized-gd-selects-minimum-norm-least-squares` | 1 | complete verification |
| `def-margin-kkt-and-mfcq` | Margin-form KKT and MFCQ for `q_i >= 1` | `def-clarke-subdifferential-and-gradient-flow`; `def-homogeneous-classifier-margin-and-exponential-risk` | 2 | draft definition |
| `lem-clarke-euler-identity-for-homogeneous-margins` | Homogeneity scaling and Euler identity for every Clarke subgradient | `def-clarke-subdifferential-and-gradient-flow` | 1 | complete proof |
| `lem-clarke-sum-chain-rule-for-exponential-risk` | Finite Clarke sum rule and exponential outer-chain representation | `def-clarke-subdifferential-and-gradient-flow`; `def-homogeneous-classifier-margin-and-exponential-risk`; `thm-strict-separation-of-a-point-from-a-closed-convex-set` | 2 | complete proof |
| `thm-separable-logistic-gd-selects-hard-margin-direction` | Source-preserving all-data linear-classification claim, including residual caveats | `alg-gradient-descent`; `def-linear-separable-margin-and-hard-margin-svm`; `def-tight-exponential-tail`; `lem-hard-margin-svm-has-unique-minimizer`; `lem-logistic-and-exponential-losses-have-tight-exponential-tail` | 2 | statement retained; full local proof review is unresolved and must be escalated |
| `ex-degenerate-hard-margin-support-vector` | Strictly separable sample with a tight zero-multiplier constraint | `def-linear-separable-margin-and-hard-margin-svm`; `lem-hard-margin-svm-has-unique-minimizer`; `def-margin-kkt-and-mfcq`; `def-clarke-subdifferential-and-gradient-flow` | 3 | complete verification |
| `lem-homogeneous-margin-constraints-satisfy-mfcq` | Euler direction verifies positive-margin MFCQ | `def-margin-kkt-and-mfcq`; `def-homogeneous-classifier-margin-and-exponential-risk`; `lem-clarke-euler-identity-for-homogeneous-margins` | 3 | complete proof |
| `lem-homogeneous-clarke-flow-margin-monotonicity` | Smoothed margin monotonicity, zero-loss and diverging-radius claims | Clarke/homogeneous definitions; Euler and exponential-risk chain-rule lemmas; Euclidean compactness | 3 | complete proof |
| `lem-approximate-margin-kkt-limit-under-mfcq` | Limit of approximate margin-KKT points under MFCQ | Clarke and margin-KKT definitions; Euclidean Heine–Borel compactness | 3 | complete proof |
| `lem-local-margin-minimum-satisfies-kkt-under-mfcq` | Local-minimum Clarke-KKT necessity under the correct MFCQ sign | Clarke and margin-KKT definitions; Euclidean Heine–Borel; strict separation | 3 | complete proof |
| `lem-homogeneous-clarke-flow-produces-approximate-margin-kkt-points` | Explicit residual and complementarity bounds along the trajectory | Clarke/homogeneous/KKT definitions; Euler and exponential-risk sum-rule lemmas; flow monotonicity; Euclidean compactness | 4 | complete proof |
| `thm-homogeneous-gradient-flow-limit-satisfies-margin-kkt` | Every parameter-direction limit point normalizes to a margin-KKT point | Homogeneous/KKT definitions; flow, MFCQ, approximate-KKT and limit lemmas | 5 | complete proof |
| `ex-homogeneous-kkt-point-not-global-margin-maximizer` | Quadratic homogeneous network with a nonglobal KKT point | feedforward graph, homogeneous-classifier, and margin-KKT definitions | 3 | complete verification |

The inventory is on the A page except the three `ex-` items, which are on the B page. Page bodies will remain empty YAML-only carriers. The discrete-GD theorem remains present as a draft statement with `provenance.proof: not-supplied`, no proof contract, and an escalated Step-1 decision; it is not used as a supplier by any item.

## Supplier and hypothesis audit

- The five assigned page suppliers were inspected at their current page carriers. The AD page is the actual batch-38 draft; its relevant local items specify finite real-arithmetic C1 graph evaluation and explicitly refuse classical derivatives at ReLU branch boundaries. No flow proof treats AD’s branch convention as a classical derivative.
- Batch 38’s actual `alg-backpropagation-through-shared-parameter-recurrence` and `thm-shared-parameter-backpropagation-gradient-formula` bodies and current ready records were read. They supply finite C1 recurrence notation only. The current full-run Step-1 snapshot will be checked before any dependent item is marked ready.
- `thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution` is published for real or complex finite matrices, with minimum norm measured by the Euclidean norm. `thm-least-squares-solutions-and-normal-equation` is published for finite-dimensional inner-product spaces and characterizes minimizers by `T*(Tx-b)=0`; both statements and proofs were read. The local least-squares theorem restricts to real matrices and the objective `1/2 ||Xw-y||^2`.
- `cor-real-spectral-theorem-for-self-adjoint-endomorphisms` is published and supplies an orthonormal eigenbasis for the real symmetric matrix `X^T X`. `alg-gradient-descent` is published and fixes the Euclidean gradient update; the local theorem states its fixed step explicitly.
- `def-feedforward-neural-network` is a current batch-31 draft definition with a ready record at hash `333e7598d0a71b9c11221ce27d1949f9fe678ca9f399d687da2d7322431d3904`; its exact current currency remains subject to the ordinary full-run snapshot. It supplies only finite graph and score notation; positive homogeneity and the no-bias/parameter conventions are stated locally.
- `thm-lagrange-multipliers-for-regular-level-set-constraints` is published only for C1 regular equality constraints with surjective derivative. It is not a supplier for nonsmooth active inequalities. `def-subgradient-and-subdifferential` defines the convex subdifferential only; the flow proof uses the separately defined Clarke generalized gradient and never conflates them.
- `thm-strict-separation-of-a-point-from-a-closed-convex-set` is a published finite-dimensional strict-separation result; its actual statement/proof were inspected. It is used only to infer a Clarke sum-subdifferential inclusion from support-function inequalities. This is a convex-geometric separation use, not a convex-subgradient proxy for the Clarke calculus.
- `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values` is published and proves closed-bounded Euclidean sets are compact and continuous functions attain extrema; its proof explicitly uses no choice principle. It supplies hard-margin attainment together with the local finite-dimensional feasible-set construction.
- No choice principle is used in the finite-dimensional spectral, hard-margin, Clarke-Euler, or multiplier arguments. The homogeneous flow is assumed to exist globally as the plan requires; no pointwise derivative is chosen at a kink.

## Full-text source reading and disposition

1. Hastie, Montanari, Rosset, and Tibshirani, *Surprises in High-Dimensional Ridgeless Least Squares Interpolation*, full arXiv PDF `https://arxiv.org/pdf/1903.08560`, §2.2, Proposition 1, PDF p. 9. The complete proposition proof was read: it identifies the GD limit as a least-squares solution in the row space and hence the minimum-norm solution, but it does not expand the spectral convergence argument. The local proof supplies that argument. Disposition: included for the theorem’s scope; its omitted convergence details are supplied locally.
2. Cornell CS 3780, *Linear Regression*, Lecture 12, full two-page PDF `https://www.cs.cornell.edu/courses/cs3780/2026sp/slides/lec12.pdf`, complete PDF pp. 1–2 read. Page 2 states the column-space invariant and the zero-initialization minimum-norm consequence. Disposition: independent treatment/context; the local proof supplies the step-size convergence calculation.
3. Soudry, Hoffer, Nacson, Gunasekar, and Srebro, *The Implicit Bias of Gradient Descent on Separable Data*, full JMLR PDF `https://jmlr.csail.mit.edu/papers/volume19/18-188/18-188.pdf`, §§2–3, Theorems 3–4, Appendix A.4, Appendix B Lemma 12, and all of Appendix C (Theorem 13, Lemmas 14–18, and the residual bound), PDF pp. 2–44. The complete relevant reasoning was inspected. The all-data proof recursively projects zero-multiplier support vectors and controls several logarithmic residual terms through integrability and auxiliary existence/uniqueness arguments. The claim is retained; this local proof is not yet independently reconstructed, so its source result is not treated as a proof supplier. Disposition: owner escalation for `thm-separable-logistic-gd-selects-hard-margin-direction`; no source was dropped.
4. Lyu and Li, *Gradient Descent Maximizes the Margin of Homogeneous Neural Networks*, full ICLR/arXiv PDF `https://arxiv.org/pdf/1906.05890`, assumptions A1–A4, Theorems 4.1/4.4, Appendix A.7–A.8, Appendix B.1/B.6, Appendix C.1–C.4/C.6, and Appendix I.2–I.3, PDF pp. 5–8, 18–26, 44. The complete gradient-flow monotonicity and approximate-KKT route was inspected. Appendix C.1 uses `g_i<=0` but states MFCQ with a positive directional derivative; Appendix C.7’s homogeneous direction has the opposite sign for `g_i=1-q_i`. The local MFCQ is stated in the consistent margin form `q_i>=1`, and local Fritz-John/separation and approximate-KKT limit proofs replace the inconsistent sign-dependent invocation.
5. Matus Telgarsky, *Deep Learning Theory* lecture notes, full notes `https://mjt.cs.illinois.edu/dlt/`, §§7.2, 9.1, 10.1–10.2. The complete relevant least-squares, margin, time-rescaling, Clarke-flow, and homogeneous-flow proof passages were inspected. This is the full lecture-notes treatment used as an independent cross-check, not a proof supplier.

`source-fetch-check --stamp` and the exact source coverage entries will be recorded after all source rows and carriers are written. There were no retrieval failures. The complete Cornell two-page PDF reading has a hash-bound short-document receipt in the coverage record.

## Scope and evidence status

The library theorem for the separator uses the bias-free score `w^T x`; the separate SVM definition in the library includes an unpenalized bias and is not used. The least-squares statement includes the `X=0` case separately because `1/lambda_max(X^T X)` is otherwise undefined. Examples prove their finite calculations locally and do not use the escalated discrete-GD theorem as a premise.

Scoped precheck, proof-layout, dependency, renderer, content-policy, proof-contract, source-fetch, and ordinary Step-1 readiness results will be appended after final item/page edits. No result is claimed before its actual command runs.

### Completed item: `def-clarke-subdifferential-and-gradient-flow`

Defined the generalized directional derivative, Clarke generalized gradient, its support-function convention, chain-rule property, and global absolutely continuous flow terminology. No existence claim is included; global flow existence remains a hypothesis of the consuming theorem. Sources read: Lyu–Li Appendix I.2–I.3 and Telgarsky lecture-note §9.1. Dependencies: none; item level 0. Next: the bias-free linear margin and hard-margin SVM definition.

### Completed item: `def-linear-separable-margin-and-hard-margin-svm`

Defined the finite labeled sample, signed bias-free margins, strict separability, and the exact Euclidean hard-margin problem. The Soudry convention has no intercept; the separate library SVM definition with an unpenalized bias is not used. Dependencies: none; item level 0. Sources read: Soudry equations (1), (4), and Telgarsky §10.1. Next: the finite-dimensional existence/uniqueness lemma for the hard-margin vector.

### Completed item: `thm-zero-initialized-gd-selects-minimum-norm-least-squares`

Proved the zero-design boundary, finite spectral recurrence, convergence under `0 < eta <= 1/lambda_max(X^T X)`, normal-equation minimization, and orthogonality to the null space. The proof covers the nonunique case and uses no choice axiom. Direct dependencies: the real spectral theorem, the least-squares normal equation, the published pseudoinverse minimum-norm selector, and the fixed-step GD definition; level 0. Sources read: Hastie et al. §2.2 Proposition 1 (whose proof omits the spectral convergence calculation) and Cornell Lecture 12 pp. 1–2; the local proof supplies the omitted calculation. Next: the unique hard-margin existence lemma.

### Completed item: `lem-hard-margin-svm-has-unique-minimizer`

Proved feasibility by scaling a strict separator, attainment by finite-dimensional compactness of bounded minimizing sequences, and uniqueness by strict convexity of squared Euclidean norm on the convex feasible set. Direct dependency: local bias-free margin/SVM definition; level 1. This definition is not the library’s SVM-with-unpenalized-bias formulation. Next: the finite homogeneous-model margin definition and the standalone underdetermined least-squares example at their assigned levels.

`lem-hard-margin-svm-has-unique-minimizer` uses the published ZF Heine–Borel/extreme-value theorem for compactness and attainment; the source statement/proof were inspected. The existence proof was written using a nonempty closed bounded sublevel set, so it does not select a countable sequence and remains choice-free. Its manifest dependencies now include `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`; level remains 1 because this supplier is outside the run.

### Completed item: `def-homogeneous-classifier-margin-and-exponential-risk`

Defined the finite feedforward score interface, signed sample margins, positive parameter homogeneity, empirical exponential loss, normalized margin, and smoothed normalized margin. Its only direct supplier is the actual batch-31 `def-feedforward-neural-network` body/ready record; level 1. The current full-run Step-1 snapshot will determine whether that ready record is still current before this dependent item is marked ready. Sources read: Lyu–Li §§3–4 and Telgarsky §§10.1–10.2. Next: margin-form KKT/MFCQ definitions and Clarke Euler/chain-rule lemmas at level 2.

### Completed item: `ex-underdetermined-linear-system-gd-minimum-norm`

For the one-row matrix `[1 1]`, verified the spectral step threshold, derived the exact scalar recurrence and closed-form orbit, and computed all least-squares minimizers and the unique smallest-norm member. Direct dependency: the level-0 least-squares selector theorem; example level 1. Next: the level-1 homogeneous model definition and the independent hard-margin degeneracy example.

### Completed item: `def-margin-kkt-and-mfcq`

Defined feasible and active margins, the nonsmooth Clarke KKT stationarity/complementarity conditions, margin-form MFCQ, and the approximate KKT residual/slackness measure. Its sign is fixed for lower constraints `q_i >= 1` and translates to negative directional derivatives for `g_i=1-q_i <= 0`. Direct dependencies are the local Clarke and homogeneous-margin definitions; level 2. Next: prove the homogeneous Clarke Euler identity and the finite exponential-risk chain-rule representation.

### Completed item: `lem-clarke-euler-identity-for-homogeneous-margins`

Proved both Clarke-subgradient scaling and Euler’s identity from differentiability-point limits and the local Clarke definition. The statement is restricted to nonzero parameters, exactly the region used by feasible margin points and the flow after loss drops below one. Its direct dependency is the Clarke definition; level 1. Next: prove the exponential-risk Clarke sum rule and local MFCQ consequences.

### Completed item: `lem-clarke-sum-chain-rule-for-exponential-risk`

Proved the smooth exponential outer-chain rule from the local Clarke definition, the finite-sum directional-derivative inequality, the Clarke subgradient-sum inclusion via the published strict-separation theorem, and the trajectory energy identity. Direct dependencies: local Clarke and homogeneous-risk definitions plus the published separation theorem; item level 2. Its separation use is convex geometry only; the convex subdifferential definition is not used for the nonsmooth flow. Next: homogeneous margin MFCQ and the margin-monotonicity lemma.

### Completed item: `def-tight-exponential-tail`

Copied the exact two-sided tail convention for `f=-ell'` into a local definition, including the positive constants and separate upper/lower thresholds. Source: Soudry et al. Definition 2, read in full. No dependencies; item level 0. Next: verify the logistic and exponential derivatives against this definition.

### Completed item: `lem-logistic-and-exponential-losses-have-tight-exponential-tail`

Differentiated both losses and verified the two-sided Soudry tail bounds with `c=a=mu_+=mu_-=1` and threshold 1. Direct dependency: local tail definition; level 1. This verifies the tail hypothesis for the two named losses but does not supply Soudry’s discrete-GD asymptotic proof.

### Drafted but escalated item: `thm-separable-logistic-gd-selects-hard-margin-direction`

The full source-preserving statement is retained, including the bias-free SVM convention, exact logistic step bound, explicit local-smoothness branch for exponential loss, all-data `O(log log t)` residual, almost-everywhere bounded residual, and possible degenerate iterated-log terms. No local proof or proof contract is supplied and the item is not a proof supplier. Exact unresolved route: reconstruct Soudry Theorem 13 (Appendix C) locally, including its recursive zero-dual-support projections, residual Lemma 14, auxiliary Lemmas 17–18, and Lemma 15. The full relevant source text was inspected; the gap is local proof verification, not retrieval. The independent B-page degenerate-support example proves only its finite hard-margin geometry and does not cite this theorem as a premise.

### Completed item: `ex-degenerate-hard-margin-support-vector`

Verified the two-point strictly separable sample, unique hard-margin vector `(1,0)`, both active margins, and the unique nonnegative KKT coefficients `(1,0)`. The second active point has zero multiplier, so the example is independent of and does not cite the escalated discrete-GD theorem as a premise. Direct dependencies include the margin, hard-margin, KKT, and Clarke definitions/results; item level 3. Next: finish the remaining level-2 Clarke definitions and lemmas, then the level-3 flow/KKT lemmas.

### Completed item: `lem-homogeneous-margin-constraints-satisfy-mfcq`

Proved that the parameter vector itself is a strict MFCQ direction for every active lower margin constraint; if no constraint is active the condition is vacuous. The proof uses the corrected margin-sign convention and the local Clarke-Euler identity. Direct dependencies: homogeneous margins, margin MFCQ, and Euler; level 3. Next: prove the generalized KKT necessary condition and the flow monotonicity/decay lemma.

### Completed item: `lem-local-margin-minimum-satisfies-kkt-under-mfcq`

Proved nonsmooth KKT necessity locally: strict directional descent would contradict constrained local minimality; finite-dimensional convex separation yields Fritz-John multipliers; the corrected positive-margin MFCQ direction excludes an abnormal zero objective multiplier. Direct suppliers are the Clarke and margin-KKT definitions, Euclidean compactness, and strict separation; item level 3. This proof does not invoke Lyu–Li’s sign-inconsistent MFCQ statement or Dutta’s theorem as an unproved shortcut. Next: the exponential-risk Clarke sum rule and the flow margin monotonicity proof.

## Authoring checkpoints — 2026-10-18 22:37 UTC

The following rows record current carrier text, exact local dependency interfaces, and source locators. Earlier item checkpoints remain above; the added results below use complete local arguments rather than treating cited source results as suppliers.

### Completed item: `lem-homogeneous-clarke-flow-margin-monotonicity`

Claim: for a global absolutely continuous Clarke-flow trajectory of the finite exponential risk with locally Lipschitz degree-$L>0$ margins admitting the source’s every-subgradient chain rule, a loss below one implies loss decay to zero, norm divergence, monotonicity of the smoothed normalized margin, and convergence of it and the normalized margin to the same positive limit. Dependencies: Clarke-flow definition, homogeneous-risk definition, Clarke Euler identity, finite exponential-risk sum/flow chain rule, and the published Euclidean compactness/extreme-value supplier; item level 3. Local proof derives the smoothed-margin derivative from $\mu=\sum_i p_iq_i\ge-\log\mathcal L$, bounds the normalized margin on the unit sphere, then rules out a positive loss limit and bounded radius. Sources: Lyu–Li, *Gradient Descent Maximizes the Margin of Homogeneous Neural Networks*, assumptions A1–A4 and Theorem 4.1 / Appendix A.7, PDF pp. 5–7, `https://arxiv.org/pdf/1906.05890`; Telgarsky, *Deep Learning Theory*, §§9.1 and 10.3, `https://mjt.cs.illinois.edu/dlt/`.

### Completed item: `lem-approximate-margin-kkt-limit-under-mfcq`

Claim: if MFCQ holds at a feasible point and, for every tolerance, there is a nearby feasible approximate margin-KKT witness with both errors below that tolerance, then the point is an exact Clarke KKT point. Dependencies: Clarke local boundedness, closed graph and upper semicontinuity; margin-KKT/MFCQ/approximate-KKT definitions; finite-dimensional compactness; level 3. The local proof bounds all multipliers uniformly and obtains an exact witness from nested nonempty compact sets. It avoids selecting a countable sequence of approximate witnesses and does not invoke Theorem C.4 as an unproved shortcut. Source: Lyu–Li Appendix C.1, Theorem C.4, PDF pp. 22–23; Telgarsky §9.1.

### Completed item: `lem-homogeneous-clarke-flow-produces-approximate-margin-kkt-points`

Claim: for every normalized-direction cluster point and every tolerance, construct one nearby feasible rescaling with stationarity and aggregate complementarity errors below that tolerance. Dependencies: Clarke and homogeneous-risk definitions, margin-KKT definition, Clarke Euler scaling, exponential-risk chain rule, flow monotonicity, and Euclidean compactness; level 4. The local derivation bounds homogeneous subgradients on the sphere, integrates a radial-angle inequality to find one time with velocity nearly radial for the requested tolerance, and computes the stationarity residual and complementarity bound $(N/e)/(L\bar\gamma^{2/L}\mu)$. This tolerance-wise statement feeds the nested compact-set limit lemma without a countable choice of flow times. Sources: Lyu–Li Appendix C.3–C.4, Lemmas C.8–C.12, PDF pp. 23–26; Telgarsky §§9.1, 10.2–10.3. The proof uses the corrected margin MFCQ sign only downstream and makes no choice of a pointwise derivative at a kink.

### Completed item: `thm-homogeneous-gradient-flow-limit-satisfies-margin-kkt`

Claim: every limit point of $\theta(t)/\|\theta(t)\|$ under the stated global-flow and loss-below-one hypotheses is proportional to a feasible Clarke KKT point for the homogeneous margin problem. Dependencies: homogeneous-risk and margin-KKT definitions, approximate-KKT limit lemma, flow-generated approximate-KKT lemma, and homogeneous-margin MFCQ lemma; level 5. The proof applies the two local lemmas in sequence and chooses scale $q_{\min}(u_*)^{-1/L}$. Source: Lyu–Li Theorem 4.4 and Appendix C.4, PDF pp. 7, 25–26; Telgarsky §§9.1 and 10.3.

### Completed item: `lem-local-margin-minimum-satisfies-kkt-under-mfcq`

Claim and convention: a constrained local minimum of $\frac12\|\theta\|^2$ under locally Lipschitz lower constraints $q_i\ge1$ satisfies Clarke KKT if one direction pairs strictly positively with every active margin subgradient. Dependencies: Clarke and margin-KKT/MFCQ definitions, Euclidean compactness, and published strict separation; level 3. The proof forms a compact convex hull of the objective and active constraint generalized gradients, separates it if it omits zero to obtain a feasible descent, derives Fritz–John multipliers, and uses the margin-form MFCQ direction to exclude an abnormal objective coefficient. Sources: Lyu–Li Appendix C.1–C.2, PDF pp. 22–23; Telgarsky §9.1. Exact sign audit: source Appendix C.1 defines $g_i\le0$ but states MFCQ with a positive pairing; local constraints remain $q_i\ge1$ and all local multiplier arguments use positive active-margin directions.

### Completed item: `ex-degenerate-hard-margin-support-vector`

Claim: for the positive examples $(1,0)$ and $(1,1)$, $w_*=(1,0)$ is the unique hard-margin vector, both margins are active, and KKT multipliers $(1,0)$ show the second active constraint has zero multiplier. Dependencies: bias-free margin/SVM definition, unique-hard-margin lemma, margin-KKT definition, and Clarke definition; level 3. This finite example does not depend on the escalated discrete-GD theorem. Sources: Soudry et al., Appendix B support-vector discussion, `https://jmlr.csail.mit.edu/papers/volume19/18-188/18-188.pdf`; Telgarsky §10.1.

### Completed item: `ex-homogeneous-kkt-point-not-global-margin-maximizer`

Claim: a square-activation two-unit graph with fixed output weights 1 and 4 gives $q(\theta)=\theta_1^2+4\theta_2^2$; $(1,0)$ is KKT with multiplier $1/2$, but feasible $(0,1/2)$ has smaller norm. Dependencies: finite feedforward graph definition, homogeneous-margin definition, and margin-KKT definition; item level 3. Sources: Lyu–Li discussion after Theorem 4.4, PDF p. 7; Telgarsky §§9.1 and 10.3.

### Page carriers and dependency reconciliation

Created `library/machine-learning/implicit-bias-of-gradient-training.md` and `library/machine-learning/implicit-bias-of-gradient-training-examples.md` with YAML frontmatter only and empty Markdown bodies. The A page has all 17 A items in ascending item level, preserving all five assigned `requires`; the B page has the three example items and requires the A page. The direct dependency `def-homogeneous-classifier-margin-and-exponential-risk` includes both the batch-31 feedforward-graph supplier and the local Clarke-flow definition; the homogeneous counterexample directly cites the graph definition. The flow monotonicity and flow-approximation rows include the compactness and exponential-risk sum-rule suppliers actually used in their arguments. The A page is below the 100-item cap. No summary or `page_layout` was added.

Proof-format adoption used the canonical `REPAIR` output from `node tools/tsx-run.mjs tools/precheck.mts` because `adopt-repair.mjs` could not consume its nested `npx --prefix worker tsx` output in this environment. The scoped step-text mapping adopted only canonical phase numbers and corresponding in-item step references; it did not change claim prose. Final scoped format results are recorded below.

## Final Step-1 evidence — 2026-10-18 22:56 UTC

### Pair authoring and decisions

The batch manifest has 17 A items and 3 B examples. Assigned item levels were recomputed from the actual in-run item edges and match every carrier label, with maximum level 5 and no assigned-pair cycle. The 20 scoped item dependency check reports no errors. The A/B page carriers remain YAML-only, with no body summary or `page_layout` flag; all five A-page requirements are retained. `research/machine-learning-all-101-2026-10-19-batch-44.cross-batch-dependencies.json` records three verified cross-batch edges: the A-page AD prerequisite to batch 38, and the batch-31 feedforward definition used by the homogeneous model definition and its B-page example.

`node tools/step1-decisions.mjs record` wrote 19 `ready` records and one `escalated` record without `--owner`. A subsequent scoped `step1Decision` hash check reports 19 ready records current and the discrete separable-classification theorem escalated. The escalation retains `thm-separable-logistic-gd-selects-hard-margin-direction` as a source-derived statement, but does not supply a proof contract or use it as a premise. The unresolved local proof route is Soudry Appendix C Theorem 13 and the associated recursive support-set/residual bounds, including Lemmas 14–18 and Lemma 15; the full relevant source text was read and retrieval succeeded.

### Scoped checks

- `node tools/tsx-run.mjs tools/author-check.mts machine-learning-all-101-2026-10-19 44`: pass. Its current evidence is `research/machine-learning-all-101-2026-10-19-author-check-44.json`, fingerprint `e27e3a132d028047b3861201e127f09cc5e608069a2cbf99251c7c958df7ba5f`. Precheck, renderer, content-policy, and strict proof-contract subchecks all pass.
- Explicit `node tools/proof-layout.mjs` on all 20 assigned item files: 20 items, 47 steps, 0 defects. Explicit precheck: 14 proof-bearing items, 14 pass. The statement-first AST check inspected all 20 assigned statements/definitions/examples and reported 0 hyperlink-placement defects.
- Focused `node tools/depcheck.mjs --items-file /tmp/ml43-batch44-items.json --json --quiet`: 20 scoped items, 0 errors and 0 warnings; item/page dependency closure checks also passed. The assigned-only dependency-level calculation found no errors and the A-page levels run from 0 to 5.
- `content-policy` on the batch manifest: 20 items, 0 errors/warnings. Strict proof-contract validation: 14/14 proof-bearing items, 0 errors/warnings.
- `source-fetch-check --stamp` fetched/stamped all five sources; check mode subsequently reports 5/5 verified, 0 drops, 0 failures. Coverage harvest check: one A page, 35 harvested source/canonical results, 19 `included`, 9 `inline`, 7 `out-of-scope`, 0 errors/warnings. The Cornell two-page full-document receipt matches its fetched SHA-256.
- Full-run `proof-contract-coverage` is blocked before it reaches this batch: `distribution-shift-and-domain-adaptation` has an empty inventory in batch 10. Full-run item-dependency check reports 44 empty inventories in other batches and an unrelated `def-pac-mdp-known-state-action-mdp` dependency-level mismatch (declared 3, computed 4). The 20 assigned item labels were separately checked and are consistent.

### Owner-managed run blockers left untouched

The live `.autopilot/machine-learning-all-101-2026-10-19` status at 22:57 UTC remains `1-scaffold`, 63/101 pairs covered, no in-flight workers, and the existing owner hold in `research/machine-learning-all-101-2026-10-19-step1-blockers.json`. The current Git HEAD remains `50139bdcb6` (`2026-10-19`, “Defer compact construction artifact scans until author drain”). This pair’s records do not claim owner acceptance or publication.

The dispatch task snapshot has input SHA `a3345c87fc1145673e947d512be7a8cc05b58afe8dc315843a1a152c65917a34`. The shared on-disk batch dependency artifact most recently records input SHA `69025dde350f98b7148b6e768b5696a275290fe171748be48746b2924054386b` and batch 44 at level 2 with prerequisites 31 and 38. A current recomputation/check cannot complete because the app YAML parser rejects the double-quoted `\gamma` escape in the foreign batch-84 item `items/thm-policy-gradient-theorem.md`, frontmatter line 38, column 146. I did not write the shared artifact; its owner must repair/recompute it. The entire frontier dependency ledger is blocked by the same malformed item. Independently, six reviews in batch 48’s cross-batch input still name consumers whose current manifest owner is batch 47; this foreign input also needs its owner’s rehome refresh. The assigned batch-44 input itself has three verified rows and no edits were made to batch 48 or batch 84.

No source retrieval failed, so no source was dropped and no `source_resolution` failure record was fabricated. Remaining work is owner reconciliation of the listed foreign inventory/scheduling/cross-batch blockers and independent review of this pair; no acceptance is inferred from the authoring records.

## Final results and exact external blockers — 2026-10-18 22:57 UTC

`research/machine-learning-all-101-2026-10-19-author-check-44.json` is current and successful (fingerprint `e27e3a132d028047b3861201e127f09cc5e608069a2cbf99251c7c958df7ba5f`). The final explicit proof-layout run covers 20 assigned items and 47 numbered proof steps with zero defects; scoped precheck passes all 14 supplied arguments. The AST statement-first check reports 20 items and zero link-placement defects. Focused depcheck reports zero errors/warnings over the 20 assigned items and their dependency closure. Scoped content policy reports 20 items with zero errors/warnings. The source fetch check reports 5/5 stamped sources, zero drops/failures. Coverage reports 35 harvested results with dispositions 19 included, 9 inline, and 7 out of scope, with zero errors/warnings. Strict proof-contract validation covers 14/14 supplied proof-bearing items with zero errors/warnings. Assigned-only dependency-level computation confirms the levels in the inventory table, maximum level 5.

The live autopilot status was refreshed after the records were written: run `machine-learning-all-101-2026-10-19` remains at Step 1 scaffold, 63/101 pairs covered, no in-flight worker, with the pre-existing owner hold in `research/machine-learning-all-101-2026-10-19-step1-blockers.json`. The current Git HEAD is still `50139bdcb6` (`Defer compact construction artifact scans until author drain`). The scoped decision audit reports 19 current `ready` records and one current `escalated` record for this pair.

Whole-run checks remain owner-blocked, with exact current findings:

- `item-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` reports 44 empty inventory pages belonging to other batches and the unrelated `def-pac-mdp-known-state-action-mdp` level mismatch (declared 3, computed 4). The assigned 20-item subset has no errors.
- `proof-contract-coverage.mjs` stops at the empty batch-10 page inventory `distribution-shift-and-domain-adaptation`; no batch-44 proof-contract error is reported.
- `batch-dependency-levels.mjs check --run ...` and the read-only frontier dependency-ledger collection cannot recompute because the foreign item `items/thm-policy-gradient-theorem.md` (batch 84) has an invalid YAML escape `\g` in a double-quoted locator at line 38, column 146 (`$\gamma^t$`). The recorded shared artifact still lists batch 44 at level 2 with prerequisites 31 and 38, but its current-input hash is stale after manifest edits; I left the shared artifact untouched.
- The batch-48 cross-batch review input contains six rows whose consumer IDs now belong to batch 47, not batch 48. This is a separate rehome/review refresh for its owner; no other batch input was edited.

The plan conflict and sign-convention repair remain as stated above. No shared plan, published item, shared batch-level artifact, engine state, or verdict was changed. Batch 44 has no remaining authoring item or local check obligation; owner review of the escalation and reconciliation of the exact whole-run blockers remain open.
