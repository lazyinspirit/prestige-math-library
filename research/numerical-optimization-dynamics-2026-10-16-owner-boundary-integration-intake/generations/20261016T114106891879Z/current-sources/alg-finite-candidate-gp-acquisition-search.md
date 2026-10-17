---
id: alg-finite-candidate-gp-acquisition-search
kind: algorithm
title: Finite-candidate Gaussian-process acquisition search with explicit statuses
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 1
deps: [def-axiom-of-choice, def-cholesky-factorisation-with-positive-diagonal, def-forward-and-back-substitution-for-triangular-systems, def-gaussian-process, def-independent-random-elements, lem-positive-noise-regularizes-observed-covariance, thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost, thm-finite-gaussian-process-posterior-and-predictive-laws, thm-of-square-roots]
axiom_use: "AC is inherited from the stated finite Gaussian-process prior and posterior interfaces. Finite candidate maximization uses an ordered list and a least-index tie rule, so it adds no choice principle."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Carl Edward Rasmussen and Christopher K. I. Williams, Gaussian Processes for Machine Learning, Chapter 2"
      url: "https://gaussianprocess.org/gpml/chapters/RW2.pdf"
    - title: "Peter I. Frazier, A Tutorial on Bayesian Optimization, §§2–5"
      url: "https://arxiv.org/pdf/1807.02811"
    - title: "Niranjan Srinivas et al., Gaussian Process Optimization in the Bandit Setting, §3"
      url: "https://arxiv.org/pdf/0912.3995"
---

## Definition

Input a candidate list $X=(x_1,\ldots,x_M)$, a horizon parameter $N$, an initial-list length $s$, a real-mean candidate $m$, a kernel candidate $k$, an observation-variance candidate $\sigma^2$, acquisition-coefficient candidates $b_t$, an initial data list $(x_i,y_i)_{i=1}^s$, an observation oracle $O$, and a deterministic candidate-selection routine. First validate that $X$ is nonempty, finite and ordered, $N$ and $s$ are integers with $N\ge0$ and $0\le s\le N$, every initial site lies in $X$, all mean, kernel, noise, coefficient and observation values are finite reals, the kernel matrix on $X$ is symmetric positive semidefinite, $\sigma^2\ge0$, and every $b_t\ge0$. If any validation fails, return inadmissible-model before computing a posterior. The observation oracle must finish each call in finite time and return either a finite real observation or observation-unavailable. For a true-posterior interpretation, the initial sites are fixed before their observations and each observation is $f(x_i)+\xi_i$ under this model, with errors independent centered Gaussian variables of variance $\sigma^2$ and independent of the entire process. Otherwise the procedure computes only the all-data-vector posterior kernel for the specified surrogate and makes no claim that it is the conditional law of an externally supplied data-generating process. The Axiom of Choice is included as required by [[thm-finite-gaussian-process-posterior-and-predictive-laws]].

Write $X_t=(x_1,\ldots,x_t)$, $y=(y_1,\ldots,y_t)$, $m_{X_t}=(m(x_i))_{i\le t}$, and $k_t(x)=(k(x_i,x))_{i\le t}$. The initial data list has length $s$, so the current history length starts at $t=s$ and the procedure selects at stages $t=s,\ldots,N-1$, stopping when the total history length reaches $N$. The output is the finite selected-site/observation trace, its current posterior state, and every verified acquisition error $\delta_t$. For $t=0$, use prior mean $\mu_0(x)=m(x)$ and variance $v_0(x)=k(x,x)$, with no matrix inverse. For $t\ge1$, form $K_t=(k(x_i,x_j))_{i,j\le t}$ and $C_t=K_t+\sigma^2 I$. If $C_t$ is not certified positive definite, return posterior-solve-unavailable with the last valid state and no posterior or acquisition at stage $t$. If $C_t$ is positive definite, compute the required solves by a Cholesky factorization $C_t=L_tL_t^T$ and forward/back substitution as in [[def-cholesky-factorisation-with-positive-diagonal]] and [[def-forward-and-back-substitution-for-triangular-systems]]. If a factorization or solve is unavailable, return the same status; never use a pseudoinverse or clip a negative variance.

For each candidate, compute
$$\mu_t(x)=m(x)+k_t(x)^T C_t^{-1}(y-m_{X_t})$$
$$v_t(x)=k(x,x)-k_t(x)^T C_t^{-1}k_t(x),\qquad s_t(x)=\sqrt{v_t(x)}$$
where the observed covariance and solves satisfy the hypotheses of [[thm-finite-gaussian-process-posterior-and-predictive-laws]]. Its conditional covariance is positive semidefinite, so $v_t(x)\ge0$; [[thm-of-square-roots]] supplies the unique nonnegative square root used here. If nonnegativity of a computed $v_t(x)$ cannot be verified, return posterior-solve-unavailable. Form the acquisition value $a_t(x)=\mu_t(x)+b_t s_t(x)$ and inspect all $M$ candidates. The default routine returns the exact least-index maximizer with $\delta_t=0$. An optional approximate routine must be a deterministic measurable function of the finite observation history and return a candidate $x_{j_t}$ with a verified $\delta_t\ge0$ satisfying $a_t(x_{j_t})\ge\max_{x\in X}a_t(x)-\delta_t$. If no such comparison certificate is available, return acquisition-inconclusive. Record every $\delta_t$.

Call $O$ at the selected candidate. If it returns observation-unavailable, return that status with the current trace and last valid posterior state, without appending a value. Otherwise append the returned observation and repeat until the finite horizon is reached. A finite budget exhaustion returns the current trace and no unearned posterior status. For a deterministic simulator or a misspecified prior, these formulas describe only the chosen surrogate model; the algorithm asserts no generic regret, global-optimality, or model-truth result.

