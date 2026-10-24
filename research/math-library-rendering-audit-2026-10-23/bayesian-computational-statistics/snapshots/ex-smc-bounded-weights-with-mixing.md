---
id: ex-smc-bounded-weights-with-mixing
kind: example
title: "A bounded-weight mixing filter has bounded asymptotic variance"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 7
deps:
  - def-smc-clt-function-classes-and-variance-recursions
  - def-dobrushin-coefficient-for-probability-kernels
  - lem-dobrushin-contraction-from-density-ratios
  - lem-smc-centered-filtering-feynman-kac-contraction
  - thm-smc-time-uniform-variance-bound-under-uniform-incremental-weights
proof_strategy: direct
axiom_use: "No choice axiom is used; the two-state filter and all variance calculations are finite."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let $\mathsf X=\{0,1\}$, set the initial target and proposal to the uniform law, and use at every step the true transition and proposal kernel $K(x,\cdot)=(1/2,1/2)$, with constant likelihood one. Thus all incremental weights equal one. For $\phi(x_{0:t})=\mathbf1_{\{x_t=1\}}$, compute the asymptotic variance and verify the time-uniform bound.

## Facts & Assumptions

**Given:** The two-state model, its uniform transition/proposal kernel, unit likelihood and test in the Example.

[F1] [[def-smc-clt-function-classes-and-variance-recursions]]: If target and proposal transitions agree and likelihood is one, then $\upsilon_s=1$, and for last-state tests $h(x_{0:s})=h_s(x_s)$ the restricted operator is $E_sh_s=K h_s$.

[F2] [[def-dobrushin-coefficient-for-probability-kernels]]: $\delta(K)$ is the supremum total-variation distance between two transition rows.

[F3] [[lem-dobrushin-contraction-from-density-ratios]]: A common density ratio bound $C$ implies $\delta(K)\le1-C^{-1}$.

[F4] [[lem-smc-centered-filtering-feynman-kac-contraction]]: the stated filtering density row bound $C$ gives a centered last-state image estimate with $A=C$ and $\rho=1-C^{-2}$.

[F5] [[thm-smc-time-uniform-variance-bound-under-uniform-incremental-weights]]: bounded weights and the multistep centered-image bound give $V_t(\phi)\le A^2B^2(\Delta\phi)^2/(1-\rho^2)$.

## Verification

**Given:** The finite two-state filtering model in the Example.

1.1 Every transition row is $(1/2,1/2)$, so the target and proposal transitions coincide and the likelihood contributes no correction. By [F1], $\upsilon_s=1$, hence $B=1$, and $\pi_s$ is uniform for every $s\ge0$. Since the row does not depend on its predecessor, [F2] gives $\delta(K)=0$; its density rows are identical, so [F3] also applies with $C=1$. [F1, F2, F3, given, algebra]

1.2 On the closed last-state subspace the forward operator is $E_sh_s=Kh_s$, which maps a last-state test to its uniform average. The true transition and proposal density versions relative to counting measure are all $1/2$, so [F4] applies with $C=1$, $A=1$, and $\rho=0$. No contraction of arbitrary path-history functions is asserted. The test has $\Delta\phi=1$ and is centered by $1/2$. Every earlier backward image is zero; the final $k=t$ term in the variance expansion is $\operatorname{Var}_{\pi_t}(\phi)=1/4$. Hence $V_t(\phi)=1/4$ for every $t$. [F1, F4, given, algebra]

2.1 Applying [F5] with $A=B=1$, $\rho=0$ and $\Delta\phi=1$ gives $V_t(\phi)\le1$, uniformly in $t$; the exact variance $1/4$ from step 1.2 satisfies the bound. This verifies a time-uniform asymptotic-variance result under explicit mixing and weight conditions. [F5, step 1.1, step 1.2] ∎
