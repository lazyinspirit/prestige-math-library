---
id: alg-finite-budget-newton-kleinman-policy-iteration
kind: algorithm
title: "Finite-budget exact or safeguarded inexact Newton-Kleinman policy iteration"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-standard-continuous-and-discrete-riccati-equations
  - alg-bartels-stewart-sylvester-equation
  - thm-bartels-stewart-finite-status-and-local-pivot-uniqueness
  - def-verified-linear-residual-certificate-data
  - thm-uniform-linear-residual-solution-enclosure
  - thm-outward-rounded-operations-are-isotone-and-dag-sound
  - alg-point-verified-linear-system-certifier
  - thm-point-verified-linear-system-certifier-soundness
  - lem-sylvester-vectorization-isometry-and-kronecker-identity
  - thm-continuous-lyapunov-integral-and-positivity
  - lem-neumann-inverse-norm-bound
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
justified_by: [ lem-riccati-finite-budget-wrappers-return-a-status ]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Peter Benner and Lihong Feng, Model Reduction for Dynamical Systems,
        Lecture 8"
      url: "https://www.mpi-magdeburg.mpg.de/2943737/lecture8.pdf"
      locator: "slides 28–29, Newton-Kleinman iteration"
    - title: "Daniel Liberzon, Calculus of Variations and Optimal Control Theory: A
        Concise Introduction, Chapter 6"
      url: "https://liberzon.csl.illinois.edu/teaching/cvoc/node116.html"
      locator: "§6.2.2–6.2.4, value and stability identities"
verification:
  precheck: n/a
---

## Definition

Inputs are CARE data with $Q=C^*C\succeq0$, $R\succ0$, a supplied stabilizing gain $K_0$, a nonnegative integer outer budget $N$, and either exact or safeguarded-inexact solve mode. Each exact-mode pass takes an admissible control packet for [[alg-bartels-stewart-sylvester-equation]]: pivot threshold $\tau_{\rm BS}\ge0$, a fixed $c_0>0$, nonnegative integer Schur sweep budgets $N_A,N_B\le c_0n$, and Schur controls for each coefficient matrix (deflation tolerance, positive integer stagnation period, finite exceptional-shift tables, arithmetic/range controls, and any supplied encoding or evaluator). Use its bounded-controller mode with a supplied nonnegative integer instruction budget $K_{\rm BS}$ and its built-in discriminant-sign controller. In inexact mode, also supply a nonnegative integer line-search limit $L$; each pass takes a Hermitian proposal $\widetilde P_j$, a stored candidate $\widehat X_j$ and approximate inverses for the finite Lyapunov systems below, and finite factorization witnesses for each trial. Stored inputs and point-solve proposals in this mode are exact dyadics; derived gains and coefficients are retained as exact rational expressions. Every point call uses the operationwise controller of [[alg-point-verified-linear-system-certifier]]; every scalar enclosure uses a finite outward evaluator with a declared work budget. Write $S(K)=Q+K^*RK$ and $\mathcal L_A(P)=A^*P+PA$.

For $j=0,\ldots,N-1$, put $A_j=A-BK_j$. In exact mode, call [[alg-bartels-stewart-sylvester-equation]] with coefficient matrices $A_j^*,A_j$, right-hand side $-S(K_j)$, and that pass's complete control packet to solve
$$\mathcal L_{A_j}(X_j)=-S(K_j).$$
If it does not return success, stop with its status. Otherwise set $K_{j+1}=R^{-1}B^*X_j$, append the gain and residual, and continue.

In safeguarded-inexact mode, $X_j$ denotes the unique exact solution of $\mathcal L_{A_j}(X_j)=-S(K_j)$; it exists because $K_0$ is stabilizing and every previously accepted trial has a Hurwitz witness. Under column vectorization, use the point matrix $I_n\otimes A_j^*+A_j^T\otimes I_n$ for $\mathcal L_{A_j}$, as in [[lem-sylvester-vectorization-isometry-and-kronecker-identity]]. Before the current-cost point call, clear a common positive integer denominator $d_j$ from this exact rational coefficient matrix and from $-\operatorname{vec}(S(K_j))$. Call [[alg-point-verified-linear-system-certifier]] on the resulting dyadic system, with the supplied inverse proposal for the scaled coefficient and $\widehat X_j$ as the solution proposal. Scaling both sides by $d_j$ preserves the exact solution $X_j$; if the scaled entries cannot be stored exactly in the declared point format, return `range-failure`. A `range-failure` returns that status; an `inconclusive` result returns `safeguard-inconclusive`. Let its solution ball have center $\widehat X_j$ and radius $s_j$, replacing the center by its Hermitian part if needed. Set $D_j=\widetilde P_j-\widehat X_j$ and compute the outward Gershgorin upper bound
$$\eta_j=s_j+\max_i\left((D_j)_{ii}+\sum_{k\ne i}|(D_j)_{ik}|\right).$$
For Hermitian $D_j$, the maximum row bound above is at least $\lambda_{\max}(D_j)$, by applying the eigenvector equation at a coordinate of maximal modulus. Define $\widetilde K_j=R^{-1}B^*\widetilde P_j$ and inspect the finite line-search list $\theta_\ell=2^{-\ell}$, $0\le\ell\le L$. For each trial $K_\ell=K_j+\theta_\ell(\widetilde K_j-K_j)$, let $A_\ell=A-BK_\ell$ and use its supplied exact factor witnesses $W_\ell=L_\ell^*L_\ell$ with nonsingular $L_\ell$, and $Z_\ell$ satisfying
$$A_\ell^*W_\ell+W_\ell A_\ell\preceq-\mu_\ell I,$$
where $\mu_\ell>0$ and $-A_\ell^*W_\ell-W_\ell A_\ell-\mu_\ell I=Z_\ell^*Z_\ell$. Verify these exact factor identities; otherwise reject the trial and continue. Vectorize $\mathcal L_{A_\ell}$ using the same coefficient matrix as for $A_j$. Outward-evaluate $I-R_\ell\mathcal L_{A_\ell}$ and let $q_\ell$ be a Frobenius upper bound. If no finite enclosure is available or $q_\ell\ge1$, reject the trial and continue. Set $\kappa_\ell=\|R_\ell\|_F/(1-q_\ell)$; the Neumann estimate and $\|T\|_2\le\|T\|_F$ give $\kappa_\ell\ge\|\mathcal L_{A_\ell}^{-1}\|_{F\to F}$. Separately outward-evaluate the raw residual and set $r_\ell$ to an upper bound for
$$\mathcal L_{A_\ell}(\widetilde P_j)+Q+K_\ell^*RK_\ell,$$
with Frobenius norm. Accept the first trial satisfying $\eta_j+\kappa_\ell r_\ell\le0$; then set $K_{j+1}=K_\ell$, append the accepted gain and its certificates, and proceed to pass $j+1$. If no trial passes, return `safeguard-inconclusive` without changing $K_j$. Any unavailable outward bound is inconclusive. The inverse bound above follows from the Neumann estimate, and $r_\ell$ bounds the raw residual separately; the preconditioned residual in [[def-verified-linear-residual-certificate-data]] is a different quantity. All certificate witnesses and bounds use the finite outward evaluator; a non-finite operation returns its range status. After at most $N$ accepted updates return the gain sequence, solve residuals, cost-matrix data and terminal status. An arbitrary approximate Lyapunov solve is never accepted without the separate stability and descent checks above.

