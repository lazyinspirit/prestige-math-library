---
id: lem-qsmx-lattice-weight-convolution
kind: lemma
title: Summability and convolution control for lattice weights
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
deps:
  - def-qsmx-summable-interaction-norm
  - def-qsm-local-spin-algebras
dependency_roles:
  def-qsmx-summable-interaction-norm: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "S. Bachmann, S. Michalakis, B. Nachtergaele, and R. Sims, Automorphic Equivalence within Gapped Phases of Quantum Lattice Systems, §§4.1–4.2"
      url: "https://arxiv.org/pdf/1102.0842"
    - title: "Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §§4.1–4.2"
      url: "https://arxiv.org/pdf/1311.2717"
---

## Statement

Let $d\ge1$, $\Gamma=\mathbb Z^d$, and $d_\infty$ be the max-coordinate metric. For $F(r)=(1+r)^{-d-1}$, $F_a(r)=e^{-ar}F(r)$ with $a>0$, and $F_\rho(r)=(1+r)^{-\rho}$ with $\rho>d$, each weight $G\in\{F,F_a,F_\rho\}$ is summable on $\Gamma$. Its convolution constant

$$C_G:=\sup_{x,y\in\Gamma} \frac{\sum_{z\in\Gamma}G(d_\infty(x,z))G(d_\infty(z,y))} {G(d_\infty(x,y))},$$

where $C_F$ uses this same formula with the base weight $F=F_{d+1}$. Each such constant is finite and positive. In particular, for all $x,y\in\Gamma$,

$$\sum_{z\in\Gamma}G(d_\infty(x,z))G(d_\infty(z,y)) \le C_G\,G(d_\infty(x,y)).$$

The constant $C_{F_a}$ may be taken to be the convolution constant $C_F$ of $F$, independently of $a$.

## Statement references

[[def-qsmx-summable-interaction-norm]]

[[def-qsm-local-spin-algebras]]

## Facts & Assumptions

**Given:** $d\ge1$, $\Gamma=\mathbb Z^d$, the metric $d_\infty$, and the weights $F,F_a,F_\rho$ as stated.

[F1] [[def-qsm-local-spin-algebras]]: $d_\infty(x,y)=\max_{1\le j\le d}|x_j-y_j|$, and the site set is $\mathbb Z^d$.

[F2] [[def-qsmx-summable-interaction-norm]]: $F(r)=(1+r)^{-d-1}$, $F_a(r)=e^{-ar}F(r)$, and $F_\rho(r)=(1+r)^{-\rho}$.

## Proof

**Given:** [F1], [F2], $a>0$, and $\rho>d$.

1.1 For $k\ge1$, the $d_\infty$-shell of radius $k$ has $(2k+1)^d-(2k-1)^d\le c_d(k+1)^{d-1}$ sites, by factoring the difference of powers; the radius-zero shell has one site. Therefore $\sum_z F_\rho(d_\infty(x,z))\le c_d\sum_{k\ge0}(k+1)^{d-1-\rho}<\infty$, and $\sum_zF_a(d_\infty(x,z))\le\sum_zF(d_\infty(x,z))<\infty$. The bounds are independent of $x$ by translation invariance. [given, F1, F2, algebra]

2.1 Write $r=d_\infty(x,y)$. For $G=F_\rho$, the triangle inequality places every $z$ in at least one of the sets $d_\infty(x,z)\ge r/2$ or $d_\infty(z,y)\ge r/2$. On the first set, $G(d_\infty(x,z))\le2^\rho G(r)$; summing the other factor over all $z$ is bounded by the finite shell sum in step 1.1. The second set gives the same bound with $x,y$ exchanged. Hence $C_{F_\rho}\le2^{\rho+1}\sum_zF_\rho(d_\infty(0,z))<\infty$. For $F_a$, the triangle inequality gives $e^{-a(d(x,z)+d(z,y))}\le e^{-ar}$; the same splitting argument applied to $F=F_{d+1}$, for which $d+1>d$, yields $C_F<\infty$, and then $\sum_zF_a(d(x,z))F_a(d(z,y))\le C_FF_a(r)$. Positivity of each weight and the $z=x$ summand show $C_G>0$. [given, step 1.1, algebra] ∎
