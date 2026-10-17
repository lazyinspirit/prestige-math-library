---
id: def-qsm-bounded-finite-range-interaction
kind: definition
title: Uniformly bounded finite-range quantum spin interaction
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps: [def-qsm-local-spin-algebras]
dependency_roles:
  def-qsm-local-spin-algebras: mathematical-premise
dependency_level: 3
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.3.7–3.3.8, pp. 66–68
      url: https://arxiv.org/pdf/1311.2717
    - title: Bruno Nachtergaele and Robert Sims, Lieb-Robinson Bounds in Quantum Many-Body Physics, §3.1, pp. 18–20
      url: https://arxiv.org/pdf/1004.2086
---

## Definition

Use the lattice $\Gamma=\mathbb Z^d$, $d\ge1$, the finite spin dimension $q\ge1$, the local matrix algebras $\mathcal A_\Lambda$, and the max-coordinate metric $d_\infty$ of [[def-qsm-local-spin-algebras]]. For finite nonempty $Z\subset\Gamma$, write $\operatorname{diam}_\infty Z=\max_{x,y\in Z}d_\infty(x,y)$; for finite nonempty $X,Y\subset\Gamma$, write $\operatorname{dist}_\infty(X,Y)=\min_{x\in X,y\in Y}d_\infty(x,y)$.

A **uniformly bounded finite-range interaction** is a family $\Phi(Z)\in\mathcal A_Z$, indexed by finite nonempty $Z\subset\Gamma$, such that $\Phi(Z)^*=\Phi(Z)$ and there are an integer $M\ge1$, a finite $R\ge0$, and $\kappa<\infty$ satisfying

$$\Phi(Z)=0\quad\text{if }|Z|>M\text{ or }\operatorname{diam}_\infty Z>R,\qquad\kappa:=\sup_{x\in\Gamma}\sum_{Z\ni x}\|\Phi(Z)\|<\infty.$$

The norm in this sum is the operator norm in the local matrix algebra $\mathcal A_Z$. If a model lists several terms with the same support, first add them in that local algebra; the resulting single operator is $\Phi(Z)$, and $\kappa$ uses its norm. Thus no multiplicity is implicit.

For a finite region $\Lambda\subset\Gamma$, define the **free-boundary finite-volume Hamiltonian** by summing only terms whose complete support lies inside $\Lambda$; terms meeting $\Lambda$ but extending outside it are omitted:

$$H_\Lambda:=\sum_{\varnothing\ne Z\subseteq\Lambda}\Phi(Z)\in\mathcal A_\Lambda.$$

It is a finite sum of self-adjoint matrices. For a fixed scale $\hbar>0$ and any finite $\Omega\supseteq\Lambda$, embed $H_\Lambda$ in $\mathcal A_\Omega$ by the canonical factor inclusion and define

$$\alpha_t^\Lambda(A):=e^{itH_\Lambda/\hbar}Ae^{-itH_\Lambda/\hbar}\qquad(A\in\mathcal A_\Omega,\ t\in\mathbb R).$$

These actions are compatible as $\Omega$ increases, because the extra tensor factors carry the identity. On $\mathcal A_\Lambda$ this is the ordinary finite matrix Heisenberg dynamics.

In physical SI bookkeeping, when $\Phi(Z)$ is interpreted as an energy, $\Phi(Z)$, $\kappa$, and $H_\Lambda$ have units J, $t$ has units s, and $\hbar$ is the adopted reduced Planck constant with units J s. The mathematics below uses only $\hbar>0$ and asserts no measured parameter value.
