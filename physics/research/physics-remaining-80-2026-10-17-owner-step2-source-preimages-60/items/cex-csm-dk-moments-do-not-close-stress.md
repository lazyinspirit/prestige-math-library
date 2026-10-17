---
id: cex-csm-dk-moments-do-not-close-stress
kind: counterexample
title: "Equal scalar kinetic fields with unequal covariance stress"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-csm-dk-kinetic-macroscopic-fields
  - thm-csm-dk-exact-kinetic-moments
  - lem-csm-dk-gaussian-mixture-regularity
  - thm-gaussian-integral
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
dependency_roles:
  def-csm-dk-kinetic-macroscopic-fields: mathematical-premise
  thm-csm-dk-exact-kinetic-moments: mathematical-premise
  lem-csm-dk-gaussian-mixture-regularity: mathematical-premise
  thm-gaussian-integral: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
---

## Statement refuted

For solutions in the setting of [[thm-csm-dk-exact-kinetic-moments]], any two velocity densities with the same scalar fields $n$, $u$, and $e$ have the same covariance stress $\Pi$.

## Facts & Assumptions

**Given:** a particle mass $m>0$, number density $n_0>0$, and positive velocity-squared parameters $\alpha,\beta,\gamma$ with $\alpha\ne\beta$.

[F1] [[def-csm-dk-kinetic-macroscopic-fields]]: $u=n^{-1}\int vF\,dv$, $\Pi=m\int(v-u)\otimes(v-u)F\,dv$, and $e=\tfrac12\operatorname{tr}\Pi$.

[F2] [[thm-csm-dk-exact-kinetic-moments]]: the local moment equations apply to periodic, sufficiently decaying $F$ solving the displayed kinetic equation with velocity-independent acceleration and a source whose number, momentum, and energy moments vanish.

[F3] [[lem-csm-dk-gaussian-mixture-regularity]]: $\gamma_{\Sigma,u}(v)=(2\pi)^{-3/2}(\det\Sigma)^{-1/2}\exp(-(v-u)^{\mathsf T}\Sigma^{-1}(v-u)/2)$ for positive covariance $\Sigma$.

[F4] [[thm-gaussian-integral]]: $\int_{\mathbb R}e^{-x^2}\,dx=\sqrt\pi$.

[F5] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative measurable product integrals may be evaluated iteratively on the stated sigma-finite factors.

## Counterexample

1.1 On any flat three-torus with positive periods and on $I=\mathbb R$, take $\mathbf a=0$ and $Q=0$. For $\Sigma_1=\operatorname{diag}(\alpha,\beta,\gamma)$ and $\Sigma_2=\operatorname{diag}(\beta,\alpha,\gamma)$, define $F_j(r,v,t)=n_0\gamma_{\Sigma_j,0}(v)$ using [F3]. Each $F_j$ is smooth and rapidly decreasing in velocity, is constant in $r,t$, and solves the kinetic equation with zero acceleration and zero source. Gaussian normalization follows from [F4] by scaling each coordinate, and [F5] permits the product integration. [F2, F3, F4, F5, algebra]

2.1 Each density has number density $n_0$ and mean $u=0$ by normalization and oddness. In one coordinate with variance $s^2$, differentiating $x\exp(-x^2/(2s^2))$ and integrating over $\mathbb R$ gives $\int x^2e^{-x^2/(2s^2)}dx=s^2\int e^{-x^2/(2s^2)}dx$; the boundary term vanishes because the Gaussian decays to zero. Applying this to each coordinate gives covariance matrices $\Sigma_1$ and $\Sigma_2$. Thus both have $e=mn_0(\alpha+\beta+\gamma)/2$, while $\Pi_1=mn_0\operatorname{diag}(\alpha,\beta,\gamma)$ and $\Pi_2=mn_0\operatorname{diag}(\beta,\alpha,\gamma)$. Since $\alpha\ne\beta$, $\Pi_1\ne\Pi_2$, contradicting determination of $\Pi$ by $(n,u,e)$. [F1, F4, step 1.1, algebra] ∎
