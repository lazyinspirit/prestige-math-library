---
id: thm-kalman-filter-is-exact-posterior
kind: theorem
title: The finite-horizon linear-Gaussian Kalman filter is exact
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - alg-kalman-filter
  - def-axiom-of-choice
  - def-conditional-law-given-a-random-element
  - def-linear-gaussian-state-space-model-with-independent-noises
  - def-measure-kernel-and-probability-kernel
  - def-multivariate-normal-law
  - def-regular-conditional-distribution
  - def-state-space-filtering-laws
  - lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal
  - lem-independent-noise-extends-a-conditional-law
  - lem-one-step-kalman-gaussian-conditioning
  - thm-dynkin-pi-lambda
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
  - thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost
  - thm-linear-gaussian-state-space-path-law-is-jointly-gaussian
  - thm-measurability-of-integration-against-a-kernel
  - thm-multivariate-normal-conditional-law
  - thm-non-negative-square-root-exists-and-is-unique
  - thm-state-space-filtering-and-smoothing-laws-exist
justified_by: []
proof_strategy: induction
axiom_use: Assume AC as in the SME-44 linear-Gaussian model, the Gaussian-law construction, and the supplied conditional-law results. The local induction and kernel identities introduce no stronger choice principle.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing, Chapter 4, §§4.1–4.3 and Appendix A.1"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
    - title: "Kody Law, Andrew M. Stuart, and Konstantinos Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 4, §4.1"
      url: "https://arxiv.org/pdf/1506.07825"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Assume AC. Fix a finite-horizon model from
[[def-linear-gaussian-state-space-model-with-independent-noises]] with
state and observation equations
$$X_k=F_kX_{k-1}+q_k,\qquad Y_k=H_kX_k+r_k\qquad (1\le k\le T),$$
where $X_0\sim N_{d_0}(m_0,P_0)$, the centered Gaussian noises $q_k,r_k$ are
mutually independent across times and from $X_0$, and $P_0,Q_k,R_k$ are
symmetric positive semidefinite. Let the parameters and observations be
admissible for [[alg-kalman-filter]], so the recursively formed innovation
covariances
$$S_k=H_kP_{k|k-1}H_k^T+R_k$$
are positive definite for every $1\le k\le T$. Run that algorithm from
$m_{0|0}=m_0$ and $P_{0|0}=P_0$. Then, for each $0\le k\le T$, the map
$$\pi_k(y_{1:k},\cdot)=N_{d_k}(m_{k|k}(y_{1:k}),P_{k|k})$$
is an everywhere-defined filtering kernel for $X_k$ given $Y_{1:k}$ in the
sense of [[def-state-space-filtering-laws]]. The empty history at $k=0$ is a
singleton, and $\pi_0=N_{d_0}(m_0,P_0)$. In particular, these recursions
give an exact Gaussian conditional-law version at every observation history;
each $P_{k|k}$ is positive semidefinite. Singular initial, process,
measurement, predicted-state, and filtered-state covariances are allowed.
Equivalently, the covariance update can be written in Joseph form
$$P_{k|k}=(I-K_kH_k)P_{k|k-1}(I-K_kH_k)^T+K_kR_kK_k^T.$$
Only the innovation matrices being solved must be positive definite. No
pointwise uniqueness of a conditional-law version on null histories,
observation-density assumption, or numerical-stability claim is made.

## Facts & Assumptions

**Given:** AC and the finite-horizon linear-Gaussian model and positive
innovation hypotheses in the Statement.

[A1] AC is the Axiom of Choice used by the Gaussian and conditional-law
suppliers. [[def-axiom-of-choice]].

[F1] The linear-Gaussian model has the stated affine equations, mutually
independent centered Gaussian process and measurement noises, and
positive-semidefinite $P_0,Q_k,R_k$; its Gaussian laws permit singular
covariances. [[def-linear-gaussian-state-space-model-with-independent-noises]].

[F2] The finite interleaved state-observation path has a jointly Gaussian
law, which may have singular covariance. [[thm-linear-gaussian-state-space-path-law-is-jointly-gaussian]].

[F3] A filtering kernel is a probability kernel whose composition with the
observation history is a regular conditional distribution; the empty-history
filter is the initial law. [[def-state-space-filtering-laws]].

[F4] Under AC, a finite-horizon model on standard-Borel state and observation
spaces has data-indexed filtering and predictive kernels.
[[thm-state-space-filtering-and-smoothing-laws-exist]].

[F5] If a supplied conditional law is extended by independent noise, the
product kernel is a conditional law of the pair; measurable pushforwards
remain conditional laws. [[lem-independent-noise-extends-a-conditional-law]].

[F6] For independent Gaussian $U,q,r$ with positive-semidefinite
covariances, linear prediction and observation give the joint Gaussian block
and the exact one-step conditional update whenever $S\succ0$.
[[lem-one-step-kalman-gaussian-conditioning]].

[F7] A jointly Gaussian pair with positive-semidefinite block covariance and
positive-definite observed covariance has, for every observation value, a
conditional Gaussian law whose Schur-complement covariance is
positive-semidefinite; the state block may be singular.
[[thm-multivariate-normal-conditional-law]].

[F8] A real symmetric positive-definite matrix has a unique Cholesky factor
with positive diagonal. [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]].

[F9] Under AC, $N_d(m,P)$ is defined for every symmetric
positive-semidefinite $P$, including singular $P$.
[[def-multivariate-normal-law]].

[F10] Integrating a nonnegative product-measurable function against a
probability kernel gives a measurable evaluation.
[[thm-measurability-of-integration-against-a-kernel]].

[F11] Equality of finite measures on a generating pi-system extends to the
generated sigma-algebra by the pi-lambda theorem.
[[thm-dynkin-pi-lambda]].

[F12] A finite-dimensional positive-semidefinite covariance operator has a
positive-semidefinite square root. [[thm-non-negative-square-root-exists-and-is-unique]].

[F13] The model's initial, process, and measurement Gaussian vectors are
mutually independent, with each new noise independent of all preceding
noises. [[def-linear-gaussian-state-space-model-with-independent-noises]].

[F14] Forward and backward substitution produce the unique solutions of
lower- and upper-triangular systems with nonzero diagonal, respectively; for a
matrix right-hand side the result applies column by column.
[[thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost]].

## Proof

**Given:** The hypotheses in the Statement.

1.1 The Euclidean state and observation spaces are standard Borel. By [F1], the finite path model uses Gaussian laws with the declared positive-semidefinite covariances; [F2] identifies its path law as jointly Gaussian, including when singular. The general existence result [F4] supplies the conditional-law setting, and [F3] fixes the initial filtering kernel as $\pi_0(*)=N_{d_0}(m_0,P_0)$ on the singleton empty history. This is a probability by [F9] and [F12], and is an RCD of $X_0$ given the trivial history because its event integral is exactly the $X_0$ marginal. The initial covariance is positive semidefinite by hypothesis. At every later step the algorithm is defined on its stated domain: $S_k\succ0$ has the Cholesky factor required by [F8]. [A1, F1, F2, F3, F4, F8, F9, F12, given, base]

2.1 Fix $k\in\{1,\ldots,T\}$ and assume inductively that the algorithm's $\pi_{k-1}$ is a filtering kernel with deterministic covariance $P_{k-1|k-1}\succeq0$. The vectors $X_{k-1}$ and $Y_{1:k-1}$ are measurable functions of $X_0,q_1,r_1,\ldots,q_{k-1},r_{k-1}$; by [F1,F13], the new pair $(q_k,r_k)$ is independent of that past. Apply [F5] with this past conditional law and push forward by $(x,q,r)\mapsto(F_kx+q,H_k(F_kx+q)+r)$. For each history $h$, the resulting conditional law of $(X_k,Y_k)$ is the one-step Gaussian block in [F6] with $m=m_{k-1|k-1}(h)$ and $P=P_{k-1|k-1}$. Its predicted covariance is positive semidefinite because $u^TP_{k|k-1}u=(F_k^Tu)^TP_{k-1|k-1}(F_k^Tu)+u^TQ_ku\ge0$. The positive-definite condition on $S_k$ allows [F7] to condition this block, for every $y_k$, with mean $m_{k|k-1}+P_{k|k-1}H_k^TS_k^{-1}v_k$ and covariance $P_{k|k-1}-P_{k|k-1}H_k^TS_k^{-1}H_kP_{k|k-1}$, exactly the algorithm's gain and update. The covariance is positive semidefinite by [F7]. To identify the computed gain, put $B_k=H_kP_{k|k-1}$. The algorithm's two triangular solves, applied columnwise, give $L_kU_k=B_k$ and $L_k^TK_k^T=U_k$. The diagonal entries of $L_k$ and $L_k^T$ are positive, so [F14] gives the unique solution of each column system. Therefore $S_kK_k^T=L_k(L_k^TK_k^T)=L_kU_k=B_k$; since $S_k\succ0$, this yields $K_k^T=S_k^{-1}B_k$, the gain in [F6]. The updated mean is affine in $(h,y_k)$ and the covariance is deterministic, so [F10] makes the Gaussian sections a measurable probability kernel. [F1, F5, F6, F7, F8, F10, F13, F14, given, step 1.1, ih, algebra]

3.1 Let $J_k(h,\cdot)$ be the conditional law of $(X_k,Y_k)$ given the previous history constructed in step 2.1, and let $M_k(h,\cdot)$ be its observation marginal. The one-step conditional identity [F7] gives $J_k(h,A\times B)=\int_B\pi_k(h,y_k,A)\,M_k(h,dy_k)$ for Borel state $A$ and observation set $B$. Integrating this identity over any Borel set $D$ of previous histories yields $\mathbb P(X_k\in A,Y_{1:k-1}\in D,Y_k\in B)=\int_D\int_B\pi_k(h,y_k,A)\,M_k(h,dy_k)\,\mathbb P_{Y_{1:k-1}}(dh)$. Since $M_k$ is the observation marginal of $J_k$, the iterated kernel is the joint law of $(Y_{1:k-1},Y_k)$ integrated against $\pi_k$. Thus this is the RCD identity on every rectangle $D\times B$; these rectangles form a pi-system generating the product history sigma-algebra, so [F11] extends the identity to all Borel history events. Therefore $\pi_k$ is a filtering kernel by [F3]. [F3, F5, F6, F7, F11, step 2.1, algebra]

4.1 The base case is step 1.1, and steps 2.1–3.1 establish the induction step for every $k$, preserving positive semidefiniteness of the updated covariance. For $T=0$ only the base case applies. Hence the stated recursions give a conditional-law version at every history, with no inversion except of positive-definite innovation matrices. Different RCD versions may still differ on observation histories of probability zero. [F3, step 1.1, step 2.1, step 3.1, discharge-induction] ∎
