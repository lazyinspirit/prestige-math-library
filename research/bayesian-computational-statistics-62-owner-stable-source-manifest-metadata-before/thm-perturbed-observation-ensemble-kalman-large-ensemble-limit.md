---
id: thm-perturbed-observation-ensemble-kalman-large-ensemble-limit
kind: theorem
title: The perturbed-observation EnKF converges to the Kalman filter at fixed horizon
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - alg-ensemble-kalman-filter
  - alg-kalman-filter
  - thm-kalman-filter-is-exact-posterior
  - def-linear-gaussian-state-space-model-with-independent-noises
  - def-multivariate-normal-law
  - def-axiom-of-choice
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal
  - thm-factorization-of-expectations-for-independent-variables
  - thm-chebyshev-markov-inequality-for-the-integral
  - lem-near-iid-exchangeable-arrays-have-convergent-means
  - lem-near-iid-exchangeable-arrays-have-convergent-sample-covariances
  - lem-probability-convergence-plus-higher-moments-gives-lp-convergence
  - lem-ensemble-kalman-update-preserves-joint-exchangeability
  - lem-linear-gaussian-reference-ensemble-reproduces-kalman-filter
  - lem-perturbed-observation-ensemble-kalman-moment-bounds
proof_strategy: induction
axiom_use: Assume AC as inherited from the Gaussian model and exact Kalman supplier. The local finite-horizon convergence argument adds no choice.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jan Mandel, Loren Cobb, and Jonathan D. Beezley, On the Convergence of the Ensemble Kalman Filter, §§3–4 and Theorem 1 with proof"
      url: "https://arxiv.org/pdf/0901.2951v2"
    - title: "K. J. H. Law, A. M. Stuart, and K. C. Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 4 §4.2.3"
      url: "https://arxiv.org/pdf/1506.07825v1"
    - title: "Geir Evensen, Femke C. Vossepoel, and Peter Jan van Leeuwen, Data Assimilation Fundamentals, Chapter 8"
      url: "https://link.springer.com/content/pdf/10.1007/978-3-030-96709-3.pdf"
---

## Statement

Assume AC and a finite-horizon model from [[def-linear-gaussian-state-space-model-with-independent-noises]] with $X_k=F_kX_{k-1}+q_k$, $Y_k=H_kX_k+r_k$, positive-semidefinite $P_0,Q_k$, and positive-definite observation covariances $R_k$. Fix data values $y_{1:T}$. For each $N\ge2$, initialize the perturbed-observation EnKF of [[alg-ensemble-kalman-filter]] with iid $N(m_0,P_0)$ members, and at each $k$ use independent per-member draws $q_{N,i}^k\sim N(0,Q_k)$ and $\eta_{N,i}^k\sim N(0,R_k)$, independent across times and members and of the initial ensemble. Use the divisor-$N$ sample covariance specified in that algorithm. Write $\bar X_{N}^{a,k}$ and $C_{N}^{a,k}$ for the updated empirical mean and covariance, and $\pi_k(\cdot;y_{1:k})=N(m_{k|k},P_{k|k})$ for the exact Kalman filtering law. Then, for each fixed $k\le T$,
$$\bar X_{N}^{a,k}\xrightarrow{\mathbb P}m_{k|k},\qquad C_{N}^{a,k}\xrightarrow{\mathbb P}P_{k|k}.$$
Moreover, for every fixed bounded Lipschitz function $\varphi:\mathbb R^{d_k}\to\mathbb R$,
$$N^{-1}\sum_{i=1}^N\varphi(X_{N,i}^{a,k})\xrightarrow{\mathbb P}\int\varphi(x)\,\pi_k(dx;y_{1:k}).$$
The horizon is fixed while $N\to\infty$; no uniform-in-time error bound is asserted. The exact conclusion is restricted to linear-Gaussian dynamics and observations. It does not make nonlinear finite-ensemble EnKF exact.

## Facts & Assumptions

**Given:** AC, the finite-horizon linear-Gaussian model, $R_k\succ0$, fixed observations, and the independent per-member initial and perturbation draws in the Statement.

[A1] AC is used by the Gaussian-law and exact-filter suppliers. [[def-axiom-of-choice]]

[F1] The model has affine state and observation equations, independent Gaussian initial/process/observation noises, and positive-semidefinite state and process covariances. [[def-linear-gaussian-state-space-model-with-independent-noises]]

[F2] The perturbed-observation EnKF forms a common gain from the empirical forecast covariance and updates each member with its own perturbed datum. [[alg-ensemble-kalman-filter]]

[F3] The Kalman algorithm's forecast and analysis equations are $m^f=F_km$, $P^f=F_kPF_k^T+Q_k$, $m^a=m^f+K(y_k-H_km^f)$, and $P^a=P^f-KS_kK^T$. [[alg-kalman-filter]]

[F4] For the stated model and positive-definite innovations, those Kalman recursions give the exact Gaussian conditional law at every data history. [[thm-kalman-filter-is-exact-posterior]]

[F5] A real symmetric matrix has an orthonormal eigenbasis; if it dominates $R_k\succ0$ in quadratic form, its inverse operator norm is at most $1/\lambda_{\min}(R_k)$. [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]

[F6] Expectations of products of independent integrable random variables factor into products of expectations. [[thm-factorization-of-expectations-for-independent-variables]]

[F7] For a nonnegative measurable $W$ and $t>0$, $\mathbb P(W\ge t)\le t^{-1}\mathbb E W$. [[thm-chebyshev-markov-inequality-for-the-integral]]

[F8] A finite independent stack of Gaussian vectors is jointly Gaussian, including when its covariance blocks are singular. [[lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal]]

[L1] Jointly exchangeable input rows remain jointly exchangeable after the permutation-equivariant perturbed-observation update. [[lem-ensemble-kalman-update-preserves-joint-exchangeability]]

[L2] If an exchangeable row is close in $L^4$ to an iid row with finite fourth moment, its divisor-$N$ sample mean and covariance converge in probability to the iid moments. [[lem-near-iid-exchangeable-arrays-have-convergent-sample-covariances]]

[L3] The deterministic-gain perturbed-observation reference ensemble is iid with the exact Kalman filtering law at every fixed time. [[lem-linear-gaussian-reference-ensemble-reproduces-kalman-filter]]

[L4] The finite-horizon EnKF state and gain have moments of every finite order bounded uniformly in $N$ and member index when $R_k\succ0$. [[lem-perturbed-observation-ensemble-kalman-moment-bounds]]

[L5] Convergence in probability plus a uniform higher-moment bound implies convergence in every lower finite $L^p$. [[lem-probability-convergence-plus-higher-moments-gives-lp-convergence]]

## Proof

**Given:** The model, observations, and EnKF and Kalman procedures in the Statement.

1.1 Couple the EnKF members with a reference ensemble by using the same iid initial vectors, process-error draws, and perturbed observations. At time $0$, $X_{N,i}^{a,0}=U_{N,i}^{a,0}$, so the paired row is exchangeable and the memberwise difference is zero in every finite $L^p$. [A1, given, base]

2.1 Fix $k\in\{1,\ldots,T\}$ and assume the induction hypothesis: the paired analysis row $(X_{N,i}^{a,k-1},U_{N,i}^{a,k-1})_{i=1}^N$ is exchangeable and $\|X_{N,1}^{a,k-1}-U_{N,1}^{a,k-1}\|_p\to0$ for every finite $p$. Couple the forecasts with the same $q_{N,i}^k$; then $X_{N,i}^{f,k}-U_{N,i}^{f,k}=F_k(X_{N,i}^{a,k-1}-U_{N,i}^{a,k-1})$. Thus forecast differences tend to zero in every finite $L^p$. The independent iid process-error and observation-perturbation rows have permutation-invariant laws and are independent of the paired analysis row; their product with that row is permutation-invariant, and the same forecast map is applied to each member. Hence the forecast pair row with its perturbations is exchangeable. By [F8] and [F1], each reference forecast is Gaussian, with mean and covariance $m^f=F_km_{k-1|k-1}$ and $P^f=F_kP_{k-1|k-1}F_k^T+Q_k$ as in [F3]; independence across members follows from the independent per-member inputs. [F1, F2, F3, F8, L3, given, step 1.1, IH, algebra]

3.1 Apply [L2] to the forecast pair row with $p=4$. The reference forecast covariance is $P_{k|k-1}$ by [F1] and [F3], so $C_N^{f,k}\to P_{k|k-1}$ in probability. Since $R_k\succ0$, both $S_N=H_kC_N^{f,k}H_k^T+R_k$ and $S=H_kP_{k|k-1}H_k^T+R_k$ dominate $R_k$ in quadratic form. [F5] bounds both inverse operator norms by $1/\lambda_{\min}(R_k)$. The identity $S_N^{-1}-S^{-1}=S_N^{-1}(S-S_N)S^{-1}$ therefore gives $K_N^k=C_N^{f,k}H_k^TS_N^{-1}\to K_k=P_{k|k-1}H_k^TS^{-1}$ in probability. [F1, F2, F3, F5, L2, given, step 2.1, algebra]

4.1 Let $D_{N,i}^k=y_k+\eta_{N,i}^k$. Subtracting the reference update from the EnKF update yields $X_{N,i}^{a,k}-U_{N,i}^{a,k}=(I-K_N^kH_k)(X_{N,i}^{f,k}-U_{N,i}^{f,k})+(K_N^k-K_k)(D_{N,i}^k-H_kU_{N,i}^{f,k}).$ The first factor in the first product is bounded in probability because $K_N^k\to K_k$ in probability. The first factor in the second product tends to zero in probability, while $D_{N,i}^k-H_kU_{N,i}^{f,k}$ has a fixed finite-moment Gaussian law. Splitting on whether this latter norm exceeds an arbitrary $M$ shows the product tends to zero in probability. The same bounded-in-probability argument for the first product gives $X_{N,1}^{a,k}-U_{N,1}^{a,k}\to0$ in probability. By [L1], the updated paired row is exchangeable. [F2, L1, L3, given, step 2.1, step 3.1, algebra]

5.1 The uniform moment bounds [L4] and the Gaussian reference law [L3] give a uniform bound on $\mathbb E\|X_{N,1}^{a,k}-U_{N,1}^{a,k}\|^s$ for every finite $s$. Apply [L5] with any $s>p$ to the probability convergence in step 4.1; the memberwise difference tends to zero in $L^p$ for every finite $p$. Together, the preceding steps establish the induction hypothesis at time $k$. [L3, L4, L5, step 2.1, step 4.1, algebra]

6.1 At any fixed $k$, the paired row is exchangeable, the reference members are iid with law $\pi_k$ by [L3], and [F4] identifies that Kalman law with the exact filtering law at the fixed data. The memberwise difference tends to zero in $L^4$ by step 5.1. The sample-moment result [L2] gives the claimed mean and covariance convergence. For bounded Lipschitz $\varphi$, the empirical-average difference is at most $\operatorname{Lip}(\varphi)N^{-1}\sum_i\|X_{N,i}^{a,k}-U_{N,i}^{a,k}\|$; its expectation tends to zero by exchangeability and the $L^1$ convergence in step 5.1, so the pointwise bound $\mathbb P(W\ge t)\le t^{-1}\mathbb EW$ from [F7] makes it vanish in probability. For the iid reference average, independence [F6] makes all distinct centered cross terms have expectation zero, so its variance is $\operatorname{Var}(\varphi(U_{N,1}^{a,k}))/N\le\|\varphi\|_\infty^2/N$. Apply [F7] to its squared centered deviation at threshold $\epsilon^2$ to obtain convergence in probability to $\int\varphi\,d\pi_k$. This proves the limits for each fixed $k$. [A1, F4, F6, F7, L1, L2, L3, step 5.1, algebra]

7.1 Step 1.1 is the base case, and for every $k\ge1$ the four induction steps establish the induction hypothesis at time $k$ from time $k-1$. Thus the coupling bounds hold through $T$, and step 6.1 gives the three asserted limits for every fixed $k\le T$. [step 1.1, step 5.1, step 6.1, discharge-induction: step 1.1, step 5.1] ∎
