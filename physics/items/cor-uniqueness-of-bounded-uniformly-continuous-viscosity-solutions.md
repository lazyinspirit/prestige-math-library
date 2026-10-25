---
id: cor-uniqueness-of-bounded-uniformly-continuous-viscosity-solutions
kind: corollary
title: Uniqueness and sup-norm contraction for the Cauchy problem
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- thm-comparison-for-first-order-hamilton-jacobi-equations
- def-discontinuous-viscosity-solution
justified_by: []
aliases: []
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 1, Corollary 1.20, printed pp. 26--29
  - title: Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations, Bulletin of the American Mathematical Society 27 (1992), 1--67 (complete article)
    url: https://arxiv.org/pdf/math/9207212
    locator: Section 5.B, estimates from comparison via constant shifts, printed pp. 30--31; parabolic constant-shift estimate following Theorem 8.2, printed p. 52. The local Cauchy contraction is proved here.
  - title: Alberto Bressan, Viscosity Solutions of Hamilton--Jacobi Equations and Optimal Control Problems, complete author lecture notes, Penn State University (PDF records Fall 2019 revision)
    url: https://sites.psu.edu/bressan/files/2025/05/HJlnotes24.pdf
    locator: Section 5, uniqueness consequences of comparison, printed pp. 14--20
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, $T>0$, and let
$H:\mathbb R^n\times[0,T]\times\mathbb R^n\to\mathbb R$ satisfy the Lipschitz
conditions of part (a) of
[[thm-comparison-for-first-order-hamilton-jacobi-equations]]. (1) If $u,v$ are
bounded viscosity solutions of the Cauchy problem in
$Z=\mathbb R^n\times(0,T)$ with the same bounded continuous initial datum
$u_0$, then $u=v$ on $Z$; in particular the classical and the Hopf--Lax
solutions of later sections are the unique ones in the bounded class whenever
$H$ satisfies those conditions. (2) More generally, if $u,v$ are bounded
viscosity solutions with initial data $u_0,v_0$, then for every $T>0$
$$\sup_{z\in Z}(u-v)\le\max\Bigl(0,\ \sup_{x\in\mathbb R^n}(u_0(x)-v_0(x))\Bigr),$$
and applying the same bound to $v-u$ gives
$\sup_Z|u-v|\le\sup_{\mathbb R^n}|u_0-v_0|$ when the initial difference is
bounded. In particular the solution operator is a contraction in the supremum
norm on the bounded initial data. No choice principle is used.

## Facts & Assumptions

**Given:** A Hamiltonian $H$ satisfying the Lipschitz conditions of comparison case (a), $T>0$, bounded viscosity solutions $u,v$ of the Cauchy problem in $Z=\mathbb R^n\times(0,T)$ with bounded continuous data $u_0,v_0$.

[F1] Comparison, case (a): if $U$ is a bounded upper semicontinuous subsolution and $V$ a bounded lower semicontinuous supersolution on the closed slab with $U(x,0)\le V(x,0)$ pointwise, then $U\le V$ on $Z$ ([[thm-comparison-for-first-order-hamilton-jacobi-equations]]).

[F2] For a bounded viscosity solution $u$, its upper envelope $u^*$ is a bounded upper semicontinuous subsolution and its lower envelope $u_*$ is a bounded lower semicontinuous supersolution, each satisfying the corresponding relaxed initial inequality ([[def-discontinuous-viscosity-solution]]). Adding a constant $K$ shifts both envelopes by $K$ and preserves their one-sided viscosity inequalities because $H$ is independent of the unknown ([[def-discontinuous-viscosity-solution]], [[thm-comparison-for-first-order-hamilton-jacobi-equations]] for the equation class).

[F3] Boundedness of $u,v$ and of their continuous initial data is assumed in the statement and Given, so the displayed suprema are finite. The relaxed joint initial limsup/liminf conditions are part of [[def-discontinuous-viscosity-solution]], as recorded in [F2]. No uniform-continuity hypothesis is needed for this comparison consequence.

## Proof

**Proof technique:** comparison applied twice, plus the constant-shift invariance of the equation.

1.1 Uniqueness. Let $u,v$ be bounded viscosity solutions with the same datum $u_0$. By [F2], $u^*$ is a bounded upper semicontinuous subsolution and $v_*$ is a bounded lower semicontinuous supersolution. Extend them to the initial face by $U(x,0)=u_0(x)$ and $V(x,0)=u_0(x)$. Their relaxed initial inequalities and continuity of $u_0$ make $U$ upper semicontinuous and $V$ lower semicontinuous on the closed slab, with ordered pointwise initial values. Comparison [F1] gives $u^*\le v_*$ on $Z$. Since $u\le u^*$ and $v_*\le v$, this yields $u\le v$. Applying the same argument to $(v,u)$ gives $v\le u$, hence $u=v$ on $Z$; in fact all four envelopes and functions coincide. In particular, whenever a classical or Hopf--Lax solution is known to be a bounded viscosity solution of the same Cauchy problem, it is the unique bounded solution. [F1, F2, F3]

1.2 The one-sided bound for general data. Put $K:=\max\{0,\sup_{\mathbb R^n}(u_0-v_0)\}<\infty$. By [F2], $u^*$ is a bounded upper semicontinuous subsolution and $(v+K)_*=v_*+K$ is a bounded lower semicontinuous supersolution. Extend these envelopes to $t=0$ by $u_0$ and $v_0+K$, respectively; their relaxed initial inequalities and continuity of the data make the extensions semicontinuous on the closed slab with ordered pointwise initial values. Comparison [F1] gives $u^*\le v_*+K$ on $Z$. Since $u\le u^*$ and $v_*\le v$, this implies $u-v\le K$; taking the supremum over $Z$ gives $\sup_Z(u-v)\le K$. [F1, F2, F3, algebra]

2.1 Conclusion. Applying step 1.2 to the pair $(u,v)$ and to the exchanged pair $(v,u)$ gives $\sup_Z(u-v)\le\max(0,\sup(u_0-v_0))$ and $\sup_Z(v-u)\le\max(0,\sup(v_0-u_0))$; when the initial difference is bounded, both right-hand sides are at most $\sup_{\mathbb R^n}|u_0-v_0|$, hence $\sup_Z|u-v|\le\sup_{\mathbb R^n}|u_0-v_0|$ and the solution operator is a contraction in the supremum norm. [step 1.1, step 1.2] ∎

## Remarks

- **Domain.** The corollary is stated on $O=\mathbb R^n$ because comparison case (a) is; on a bounded domain without lateral data uniqueness fails, as the companion counterexample shows.
- **Choice.** Only comparison and the constant shift are used, both choice-free.
