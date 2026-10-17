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

Input a candidate list $X=(c_1,\ldots,c_M)$, a horizon $N$, an initial-list length $s$, a real-mean candidate $m$, a kernel candidate $k$, an observation-variance candidate $\sigma^2$, coefficients $(b_t)_{0\le t<N}$, an initial data list $(x_i,y_i)_{i=1}^s$, an observation oracle $O$, and a selector that is either the exact rule below or a certified approximate rule below. For $N=0$, the coefficient list is empty. First validate that $X$ is nonempty, finite, and ordered; $N$ and $s$ are integers with $N\ge0$ and $0\le s\le N$; every initial site lies in $X$; all mean, kernel, noise, coefficient, and initial-observation values are finite reals; the kernel matrix on $X$ is symmetric positive semidefinite; $\sigma^2\ge0$; and each required $b_t$ is defined and nonnegative. If any validation fails, return `inadmissible-model` before computing a posterior. The observation oracle must finish each call in finite time and return either a finite real observation or `observation-unavailable`. For a true-posterior interpretation, the initial sites are fixed before their observations and each observation is $f(x_i)+\xi_i$ under this model, with errors independent centered Gaussian variables of variance $\sigma^2$ and independent of the entire process. In this interpretation, whether a call returns a value or `observation-unavailable` must be a deterministic measurable function of the already observed history and selected site, decided without inspecting the unobserved process or the fresh noise; thus availability conveys no additional information. Otherwise the procedure computes only the all-data-vector posterior kernel for the specified surrogate and makes no claim that it is the conditional law of an externally supplied data-generating process. The Axiom of Choice is included as required by [[thm-finite-gaussian-process-posterior-and-predictive-laws]].

Denote the sites in the accumulated observation trace, in observation order, by $x_1,\ldots,x_t$; these are not the candidate-list indices and may repeat. Write $X_t=(x_1,\ldots,x_t)$, $y=(y_1,\ldots,y_t)$, $m_{X_t}=(m(x_i))_{i\le t}$, and $k_t(x)=(k(x_i,x))_{i\le t}$. Initialize the trace with the given data and let its length be $t=s$. If $t=0$, the current state is the prior with $\mu_0(x)=m(x)$ and $v_0(x)=k(x,x)$, without a matrix solve. If $t\ge1$, form $K_t=(k(x_i,x_j))_{i,j\le t}$ and $C_t=K_t+\sigma^2 I$. If $C_t$ is not certified positive definite, or its Cholesky factorization or required solves are unavailable, return `posterior-solve-unavailable` with the initial trace and no posterior state. Otherwise compute the current posterior by the formulas below. At every later history length $t\ge1$, use the same rule to compute its state immediately after the new observation is appended. Never use a pseudoinverse or clip a negative variance. In particular, this state update is performed after the final observation at history length $N$, before a `complete` return.

If the initialized history already has length $t=N$, return `complete` with the initial trace, its computed posterior state, and the empty list of acquisition errors. Otherwise $t<N$, and for each candidate compute
$$\mu_t(x)=m(x)+k_t(x)^T C_t^{-1}(y-m_{X_t})$$
$$v_t(x)=k(x,x)-k_t(x)^T C_t^{-1}k_t(x),\qquad s_t(x)=\sqrt{v_t(x)}$$
where the observed covariance and solves satisfy the hypotheses of [[thm-finite-gaussian-process-posterior-and-predictive-laws]]. At $t=0$, use the prior formulas above. At $t\ge1$, its conditional covariance is positive semidefinite, so $v_t(x)\ge0$; [[thm-of-square-roots]] supplies the unique nonnegative square root used here. If nonnegativity of a computed $v_t(x)$ cannot be verified, return `posterior-solve-unavailable` with the current trace and last valid state. Form $a_t(x)=\mu_t(x)+b_t s_t(x)$ and inspect all $M$ candidates. The exact selector returns the least-index maximizer with $\delta_t=0$. A certified approximate selector must be a deterministic measurable function of the finite observation history and return a candidate $c_{j_t}$ with verified $\delta_t\ge0$ satisfying $a_t(c_{j_t})\ge\max_{x\in X}a_t(x)-\delta_t$. If no such comparison certificate is available, return `acquisition-inconclusive` with the current trace and state. Record every $\delta_t$.

Call $O$ at the selected candidate. If it returns `observation-unavailable`, return that status with the current trace and state, without appending a value. If it returns a finite real, append the pair $(x_{t+1},y_{t+1})=(c_{j_t},O(c_{j_t}))$, using the value from this single call, increment $t$ by one, and compute the new posterior state by the rule above; if this solve is unavailable, return `posterior-solve-unavailable` with the updated trace and last valid state. If $t=N$, return `complete` with the full trace, posterior state at history length $N$, and recorded acquisition errors. Otherwise continue to the next acquisition stage. For a deterministic simulator or a misspecified prior, these formulas describe only the chosen surrogate model; the algorithm asserts no generic regret, global-optimality, or model-truth result.

