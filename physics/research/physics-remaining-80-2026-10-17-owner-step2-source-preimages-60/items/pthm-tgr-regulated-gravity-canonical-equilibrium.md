---
id: pthm-tgr-regulated-gravity-canonical-equilibrium
kind: physics-theorem
title: "Constructed finite canonical gravitational equilibrium"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
deps:
  - post-tgr-finite-newton-gravity-preparation
  - lem-tgr-finite-gravitational-gibbs
  - thm-tgr-finite-gravitational-entropy-optimum
  - thm-tgr-gravitational-canonical-response
dependency_roles:
  post-tgr-finite-newton-gravity-preparation: physical-assumption
  lem-tgr-finite-gravitational-gibbs: mathematical-premise
  thm-tgr-finite-gravitational-entropy-optimum: mathematical-premise
  thm-tgr-gravitational-canonical-response: mathematical-premise
justified_by: []
physical_scope: "Conditional on the finite equal-mass softened Newtonian model with bounded positive-volume box and fixed a>0; proves normalization, the stated Gibbs variational optimum, and nonnegative fixed-Hamiltonian canonical response, not thermalization or stability of a changing/self-consistent background."
empirical_premises: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joseph Katz, Thermodynamics and Self-Gravitating Systems, Foundations of Physics 33 (2003), author manuscript"
      url: "https://arxiv.org/pdf/astro-ph/0212295"
      locator: "Complete 41-page manuscript retrieved; §2(c), PDF pp. 9–10, distinguishes a fixed-β canonical preparation and cutoff-dependent equilibrium claims; §3, PDF pp. 13–17, discusses ensemble-dependent heat capacity. The finite phase integral and identities here are proved from exact local suppliers."
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
      locator: "Complete 191-page notes retrieved; §§1.3.1–1.3.3, PDF pp. 24–30, for canonical weights, energy variance, response and entropy; no thermodynamic-limit equivalence is imported."
proof_strategy: direct
verification:
  precheck: pass
---


## Statement

Fix $N\ge2$, a bounded measurable box $B\subset\mathbb R^3$ with $0<|B|<\infty$, $m,G,a,k_B,h_*>0$, $a>0$, and $\beta>0$. Adopt the physical preparation in [[post-tgr-finite-newton-gravity-preparation]] with its fixed Hamiltonian $H_{N,a}$ and reference measure $\nu_N$. Conditional on the exact current mathematical interfaces in [[lem-tgr-finite-gravitational-gibbs]], [[thm-tgr-finite-gravitational-entropy-optimum]], and [[thm-tgr-gravitational-canonical-response]], the partition function $Z_N(\beta)=\int e^{-\beta H_{N,a}}d\nu_N$ is finite and positive, and $p_\beta=Z_N^{-1}e^{-\beta H_{N,a}}$ is a normalized density.

For a measurable function $g$ with finite expectation, write $\langle g\rangle_\rho:=\int g\rho\,d\nu_N$ and $\langle g\rangle_\beta:=\int gp_\beta\,d\nu_N$; define $\operatorname{Var}_\beta(H_{N,a}):=\int(H_{N,a}-\langle H_{N,a}\rangle_\beta)^2p_\beta\,d\nu_N$. For every measurable probability density $\rho$ relative to $\nu_N$ with $0\log0:=0$, $\int|\rho\log\rho|d\nu_N<\infty$, and $\int|H_{N,a}|\rho d\nu_N<\infty$, its reference-relative entropy $S(\rho)=-k_B\int\rho\log\rho d\nu_N$ satisfies
$$S(\rho)-k_B\beta\langle H_{N,a}\rangle_\rho\le k_B\log Z_N.$$
Equality holds exactly at $\rho=p_\beta$ almost everywhere; among densities with the same mean energy as $p_\beta$, this is the unique entropy maximizer. With $T_K=(k_B\beta)^{-1}$ and the Hamiltonian, box, and regulator held fixed,
$$C_K:=\frac{d\langle H_{N,a}\rangle_\beta}{dT_K}=k_B\beta^2\operatorname{Var}_\beta(H_{N,a})\ge0.$$
These are deductions about the specified model and density class. They do not assert dynamical equilibration, a self-consistent relativistic solution, or a thermodynamic limit.

## Facts & Assumptions

**Given:** The finite regulated Newtonian preparation, $\beta>0$, and the fixed-parameter temperature convention $T_K=(k_B\beta)^{-1}$.

[A1] The physical model adopts $N\ge2$, equal positive masses, a bounded finite-positive-volume box, softening $a>0$, and the fixed Hamiltonian/reference measure stated in the Postulate. ([[post-tgr-finite-newton-gravity-preparation]])

[F1] For these hypotheses and every $\beta>0$, $0<Z_N(\beta)<\infty$ and $p_\beta=Z_N^{-1}e^{-\beta H_{N,a}}$ is positive and normalized; all energy moments are finite. ([[lem-tgr-finite-gravitational-gibbs]])

[F2] In the stated density class, the relative-entropy inequality is sharp exactly at $p_\beta$, giving the unique equal-mean-energy entropy maximizer. ([[thm-tgr-finite-gravitational-entropy-optimum]])

[F3] For a fixed softened Hamiltonian, $C_K=k_B\beta^2\operatorname{Var}_\beta(H_{N,a})\ge0$. ([[thm-tgr-gravitational-canonical-response]])

## Proof

1.1 The hypotheses in [A1] are those required by [F1]. Therefore $Z_N(\beta)$ is finite and strictly positive and $p_\beta=Z_N^{-1}e^{-\beta H_{N,a}}$ defines a normalized probability density relative to $\nu_N$. This normalization is a mathematical deduction for the adopted finite model. [given, A1, F1]

1.2 For every $\rho$ in the density class of the Statement, [F2] gives $S(\rho)-k_B\beta\langle H_{N,a}\rangle_\rho\le k_B\log Z_N$, with equality only if $\rho=p_\beta$ almost everywhere. Restricting to densities with $\langle H_{N,a}\rangle_\rho=\langle H_{N,a}\rangle_\beta$ makes the left side differ from $S(\rho)$ by the same constant; hence $p_\beta$ is the unique entropy maximizer in that class. [given, F1, F2, algebra]

2.1 Since [F1] supplies the finite moments and differentiable partition function and [F3] gives the fixed-Hamiltonian response identity, the canonical response is $C_K=k_B\beta^2\operatorname{Var}_\beta(H_{N,a})$. A variance is an expectation of a nonnegative square, and $k_B\beta^2>0$, so $C_K\ge0$. [F1, F3, algebra] ∎
