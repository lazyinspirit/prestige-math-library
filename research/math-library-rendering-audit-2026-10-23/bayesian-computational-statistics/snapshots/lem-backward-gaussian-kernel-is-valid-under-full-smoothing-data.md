---
id: lem-backward-gaussian-kernel-is-valid-under-full-smoothing-data
kind: lemma
title: The backward Gaussian kernel remains valid after future observations
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-linear-gaussian-state-space-model-with-independent-noises
  - def-multivariate-normal-law
  - def-state-space-filtering-laws
  - alg-kalman-filter
  - lem-independent-noise-extends-a-conditional-law
  - lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal
  - thm-kalman-filter-is-exact-posterior
  - thm-linear-gaussian-state-space-path-law-is-jointly-gaussian
  - thm-measurability-of-integration-against-a-kernel
  - thm-multivariate-normal-conditional-law
justified_by: []
proof_strategy: direct
axiom_use: Assume AC through the linear-Gaussian model, multivariate-normal laws, and the conditional-Gaussian supplier. The finite kernel factorization and the local conditional-independence argument use no stronger choice principle.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing, Chapter 8, §§8.1–8.2"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
    - title: "Kody Law, Andrew M. Stuart, and Konstantinos Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 3, §3.1"
      url: "https://arxiv.org/pdf/1506.07825"
---

## Statement

Assume AC. Let $(X_0,\ldots,X_T,Y_1,\ldots,Y_T)$ follow a finite-horizon
linear-Gaussian model as in
[[def-linear-gaussian-state-space-model-with-independent-noises]]. Suppose
the Kalman filter of [[alg-kalman-filter]] is admissible: every innovation
covariance $S_j$ it solves is positive definite. Fix $0\le k<T$, and let
$m_{k|k},P_{k|k}$ and $m_{k+1|k},P_{k+1|k}$ be the corresponding filtered
and one-step predicted quantities. Assume in addition that
$P_{k+1|k}\succ0$. Put
$$C_k=P_{k|k}F_{k+1}^TP_{k+1|k}^{-1},\qquad V_k=P_{k|k}-C_kP_{k+1|k}C_k^T.$$
Then $V_k\succeq0$, and the formula
$$Q_k(y_{1:k},x_{k+1},\cdot)=N\!\left(m_{k|k}(y_{1:k})+C_k(x_{k+1}-m_{k+1|k}(y_{1:k})),V_k\right)$$
defines an everywhere probability kernel. It is a conditional law of $X_k$
given $(Y_{1:k},X_{k+1})$ and also a version of the conditional law of
$X_k$ given $(Y_{1:T},X_{k+1})$ under the full finite-horizon model. Thus
future observations do not change this backward kernel once $X_{k+1}$ is
also given. The inverse is the ordinary inverse of the positive-definite
forecast covariance; no singular-forecast extension is asserted.

## Facts & Assumptions

**Given:** AC, the finite-horizon model in the Statement, admissible filter
histories, and $P_{k+1|k}\succ0$.

[A1] AC is the Axiom of Choice assumed by the Gaussian-law and
conditional-Gaussian suppliers. [[def-axiom-of-choice]].

[F1] The model has affine state and observation equations; its initial,
process, and measurement Gaussian vectors are mutually independent, and the
process covariance $Q_{k+1}$ is positive semidefinite.
[[def-linear-gaussian-state-space-model-with-independent-noises]].

[F2] The Kalman algorithm predicts $m_{k+1|k}=F_{k+1}m_{k|k}$ and
$P_{k+1|k}=F_{k+1}P_{k|k}F_{k+1}^T+Q_{k+1}$.
[[alg-kalman-filter]].

[F3] For every observation history, the filtered law of $X_k$ is the
probability kernel $N(m_{k|k},P_{k|k})$; its covariance is positive
semidefinite. [[thm-kalman-filter-is-exact-posterior]].

[F4] An independent process noise extends the supplied filtering kernel to
the joint conditional law, and measurable pushforwards remain conditional
laws. [[lem-independent-noise-extends-a-conditional-law]].

[F5] A finite independent stack of Gaussian vectors is jointly Gaussian even
when covariance blocks are singular. [[lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal]].

[F6] For a jointly Gaussian pair with positive-semidefinite block covariance
and positive-definite observed covariance $B$, the everywhere conditional
kernel is Gaussian with the Schur-complement covariance, which is positive
semidefinite. [[thm-multivariate-normal-conditional-law]].

[F7] The finite linear-Gaussian path law is the ordered product of its
transition and observation kernels. [[thm-linear-gaussian-state-space-path-law-is-jointly-gaussian]].

[F8] Integration of a nonnegative product-measurable function against a
finite probability kernel is measurable in its parameter.
[[thm-measurability-of-integration-against-a-kernel]].

[F9] A data-indexed state-space conditional law is an everywhere probability
kernel whose composition with the data vector is an RCD; its values on
null-data sets may vary. [[def-state-space-filtering-laws]].

[F10] Under AC, $N_d(m,P)$ is defined for every finite-dimensional symmetric
positive-semidefinite $P$, including singular $P$.
[[def-multivariate-normal-law]].

## Proof

**Given:** The hypotheses in the Statement.

1.1 Fix a history $h=y_{1:k}$. By [F3], the conditional law of $X_k$ is $N(m_{k|k}(h),P_{k|k})$. The next process noise is independent of the past by [F1], so [F4] extends this filtering kernel by $q_{k+1}$ and pushes it forward through $(x,q)\mapsto(x,F_{k+1}x+q)$. By [F5], $(X_k,q_{k+1})$ is jointly Gaussian, and the projection characterization in [F10] makes its linear image $(X_k,X_{k+1})$ jointly Gaussian. Its mean is $(m_{k|k},F_{k+1}m_{k|k})$, its state covariance is $P_{k|k}$, its cross-covariance is $P_{k|k}F_{k+1}^T$, and its next-state covariance is $P_{k+1|k}$. The latter block is positive definite by hypothesis. Apply [F6] with that observed block: the conditional mean and covariance are exactly the displayed $Q_k$ parameters, so $V_k\succeq0$. The history mean is affine by [F2], and representing each Gaussian section as a translate of fixed $N(0,V_k)$ plus [F8] gives joint measurability in $(h,x_{k+1})$. Thus $Q_k$ is an everywhere probability kernel. [A1, F1, F2, F3, F4, F5, F6, F8, F10, given, algebra]

2.1 Write $H=Y_{1:k}$, $V=X_{k+1}$, and $Z=Y_{k+1:T}$. By [F7], the full path law factors by taking the law of $(H,X_k)$, applying the transition kernel at $k+1$, and then a future observation kernel $R(V,dz)$ formed by the remaining transition and observation kernels. The first two factors disintegrate as $\pi_k(h,dx_k)K_{k+1}(x_k,dv)=\rho_k(h,dv)Q_k(h,v,dx_k)$ by step 1.1, where $\rho_k$ is the one-step predictive law. Substitution gives the joint factorization as the law of $H$ followed by $\rho_k$, $Q_k$, and $R$. The future kernel depends on the past only through $V$, and its iterated integrals are measurable by [F8]. [F1, F3, F4, F7, F8, F9, step 1.1, construct]

3.1 For any Borel set $A$ of $X_k$ and any Borel set $D$ in the product space of $(H,V,Z)$, integrate $1_A(x_k)1_D(h,v,z)$ in the factorization from step 2.1. This gives $\mathbb P(X_k\in A,(H,V,Z)\in D)=\int_D Q_k(h,v,A)\,\mathbb P_{(H,V,Z)}(dh,dv,dz)$. This is the RCD event identity for $Q_k$ given $(H,V,Z)$; its kernel properties were established in step 1.1. Since $(H,Z)=Y_{1:T}$, it is also a version of the conditional law given $(Y_{1:T},X_{k+1})$. The factorization uses model kernels rather than observation densities, and the only inverse is of $P_{k+1|k}\succ0$. [F7, F8, F9, step 1.1, step 2.1, algebra] ∎
