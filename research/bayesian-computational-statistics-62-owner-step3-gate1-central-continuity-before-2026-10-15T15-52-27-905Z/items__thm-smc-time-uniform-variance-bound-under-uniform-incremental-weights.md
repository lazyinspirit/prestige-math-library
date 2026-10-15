---
id: thm-smc-time-uniform-variance-bound-under-uniform-incremental-weights
kind: theorem
title: "Time-uniform SMC asymptotic variance under uniform weight and operator bounds"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - lem-smc-centered-filtering-feynman-kac-contraction
  - def-axiom-of-choice
  - def-smc-clt-function-classes-and-variance-recursions
  - lem-smc-multinomial-variance-unrolls
  - lem-smc-backward-operator-oscillation-bound
proof_strategy: direct
axiom_use: "AC is inherited through the finite-horizon SMC flow; the variance estimate is an algebraic geometric-series bound."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, §3.3 and Appendix A.4"
      url: "https://arxiv.org/pdf/math/0508594"
    - title: "Hans R. Künsch, Recursive Monte Carlo Filters: Algorithms and Theoretical Analysis, §4.3.1"
      url: "https://arxiv.org/pdf/math/0602211"
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §3.6"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
---

## Statement

Use multinomial offspring resampling and the covariance $V_t$ of [[def-smc-clt-function-classes-and-variance-recursions]]. Suppose all normalized incremental weights satisfy $\upsilon_s\le B<\infty$ almost everywhere under their proposals, including $s=0$. For a chosen bounded real terminal test $\phi$ and every $0\le k\le t$, assume the bounded versions of its centered backward images satisfy
$$\|E_{k+1:t}(\phi-\pi_t\phi)\|_\infty\le A\rho^{t-k}\Delta\phi,$$
with fixed $A\ge1$ and $0\le\rho<1$, uniformly over the horizons considered; use $\rho^0=1$. Then
$$V_t(\phi)\le\frac{A^2B^2(\Delta\phi)^2}{1-\rho^2}.$$
The one-step centered oscillation condition of [[lem-smc-backward-operator-oscillation-bound]] gives the original specialization $A=1$, $\rho=\beta$ and bound $B^2(\Delta\phi)^2/(1-\beta^2)$.

There is a separate filtering-density sufficient branch. Use the strictly positive finite density versions, true-transition row-ratio bound $C\ge1$, likelihood bounds $0<a\le f_s\le b<\infty$ and normalized filtering operators in [[lem-smc-centered-filtering-feynman-kac-contraction]]. Additionally require strictly positive finite proposal densities $q_s(z\mid x)$ with $g_s(z\mid x)\le Dq_s(z\mid x)$ uniformly for a finite $D$, and an initial normalized weight $\upsilon_0\le B_{\rm init}<\infty$ under its proposal. Put $B=\max(B_{\rm init},Db/a)$ and $\rho=1-C^{-2}$. For bounded last-state tests $\phi(x_{0:t})=\psi(x_t)$, the bound holds with $A=C$:
$$V_t(\psi)\le\frac{B^2C^2(\operatorname{osc}\psi)^2}{1-(1-C^{-2})^2}.$$
This branch concerns the closed last-state test subspace and its backward images, not all path observables. Both bounds concern fixed-horizon CLT variances, uniform in the time index; neither is a finite-particle time-uniform error bound.

## Facts & Assumptions

**Given:** The multinomial SMC flow, the uniform incremental-weight bound $B$, and the stated multistep centered-image constants $A,\rho$; for the filtering branch, the explicit density, domination and initial-weight hypotheses.

[A1] [[def-axiom-of-choice]]: AC is inherited through the finite-horizon SMC path-law and Radon–Nikodym construction.

[F1] [[def-smc-clt-function-classes-and-variance-recursions]]: $V_t$ is the weighted-estimator covariance, $\upsilon_s$ is the normalized incremental Radon–Nikodym weight, and $\Phi_s,\Psi_s$ are the recursive moment classes.

[F2] [[lem-smc-multinomial-variance-unrolls]]: $V_t(\phi)$ is the sum over $k=0,\ldots,t$ of $\widetilde\pi_k[\upsilon_k^2(E_{k+1:t}(\phi-\pi_t\phi))^2]$.

[F3] [[lem-smc-backward-operator-oscillation-bound]]: the stated one-step centered contraction gives the multistep image bound with $A=1$ and $\rho=\beta$.

[F4] [[lem-smc-centered-filtering-feynman-kac-contraction]]: for the stated filtering density model and bounded last-state tests, the multistep image bound holds with $A=C$ and $\rho=1-C^{-2}$.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Put $h_t=\phi-\pi_t(\phi)$ and $h_k=E_{k+1:t}h_t$ for $0\le k<t$, with $h_t$ itself at $k=t$. The multistep hypothesis supplies bounded versions of these centered images. By [F1], $\pi_k(h_k)=0$ and $E_kh_k=h_{k-1}$ for $1\le k\le t$. At $k=0$, boundedness and $\upsilon_0\le B$ almost everywhere give $h_0\in\Psi_0$. If $h_{k-1}\in\Psi_{k-1}$, then boundedness of $h_k$ and $\upsilon_k\le B$ almost everywhere give $\widetilde\pi_k(|\upsilon_k h_k|^{2+\delta})<\infty$ and $E_kh_k=h_{k-1}\in\Phi_{k-1}$, so $h_k\in\Phi_k$. Also $\pi_k(h_k^2)<\infty$ and $E_kh_k=h_{k-1}\in\Psi_{k-1}$, hence $h_k\in\Psi_k$. Induction gives $h_t\in\Psi_t$, so [F2] applies to $V_t(h_t)=V_t(\phi)$. Its summands are nonnegative and finite because $\upsilon_k\le B$ almost everywhere and each $h_k$ has a bounded version. [A1, F1, F2, given]

2.1 The multistep bound in the Statement makes the $k$th summand at most $B^2A^2\rho^{2(t-k)}(\Delta\phi)^2$. Summing the geometric series gives $V_t(\phi)\le A^2B^2(\Delta\phi)^2/(1-\rho^2)$. Applying [F3] yields the original one-step specialization. [F2, F3, step 1.1, given, algebra]

3.1 In the filtering branch, the actual increment is $\upsilon_s(x,z)=g_s(z\mid x)f_s(z)/(c_sq_s(z\mid x))$, with $c_s=\eta_{s-1}(g_sf_s)\in[a,b]$. Hence $\upsilon_s\le Db/a$ for $s\ge1$; the initial bound gives $\upsilon_s\le B$ at every time. The last-state subspace is preserved by the filtering operators, and [F4] supplies its centered-image estimate with $A=C$, $\rho=1-C^{-2}$. Step 2.1 proves the displayed filtering bound; when $C=1$, all earlier images vanish and the same formula applies. [F1, F4, step 2.1, given, algebra] ∎

## Remarks

Uniform predecessor ratios for $g_s$ and $q_s$ alone do not bound $g_s/q_s$ or the incremental weights when proposals vary with time. The B-page finite-state counterexample refutes that displayed source/design implication. The additional domination and initial-weight assumptions above are explicit corrections, not consequences ascribed to those predecessor ratios. The abstract branch remains available under its own actual operator assumptions.
