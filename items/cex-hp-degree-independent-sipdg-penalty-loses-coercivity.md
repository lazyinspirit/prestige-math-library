---
id: cex-hp-degree-independent-sipdg-penalty-loses-coercivity
kind: counterexample
title: A degree-independent SIPDG penalty loses coercivity
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - lem-reference-jacobi-weighted-endpoint-kernel
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Tim Warburton and Jan S. Hesthaven, On the Constants in hp-Finite Element Trace Inverse Inequalities
      url: https://infoscience.epfl.ch/server/api/core/bitstreams/a541b153-f562-48eb-baa1-b42f9335269d/content
      locator: "§§2–4, pp. 3–14: sharp p-dependent polynomial endpoint and face inverse trace constants."
    - title: Leszek F. Demkowicz, Mathematical Theory of Finite Elements
      url: https://users.oden.utexas.edu/~leszek/classes/EM394F/book.pdf
      locator: "§3.1.4, printed pp. 64–68: hierarchical p-version bases; the explicit SIPDG witness is proved locally."
---

## Statement refuted

For the symmetric interior penalty discontinuous Galerkin (SIPDG) form, choosing a penalty coefficient $\eta$ independent of polynomial degree always makes the form coercive on discontinuous piecewise polynomials.

## Facts & Assumptions

**Given:** Integer $p\ge2$, fixed $\eta>0$, the two unit intervals, and the stated interior jump, average, and bilinear form.

[F1] [[lem-reference-jacobi-weighted-endpoint-kernel]] for $d=1$ gives shifted orthogonal polynomials $\phi_n$ on $[0,1]$ with $\|\phi_n\|_2^2=1/(2n+1)$.

## Counterexample

Use the two-cell mesh $(-1,0)\cup(0,1)$ with cell size one, natural exterior boundary, degree $p$ on each cell, jump $[v]=v(0^-)-v(0^+)$, average derivative $\{v'\}=(v'(0^-)+v'(0^+))/2$, and symmetric interior penalty form
$$
a_h(v,v)=\sum_{K}\int_K|v'|^2-2\{v'\}[v]+\eta[v]^2,
$$
where $\eta>0$ is fixed independent of $p$.

1.1 For $d=1$, the Rodrigues polynomial in [F1] is $\phi_n(t)=(-1)^nD^n(t^n(1-t)^n)/n!$. Its value at $t=1$ is $1$: writing $s=1-t$, the first nonzero term of $t^n(1-t)^n=(1-s)^ns^n$ is $s^n$, and $D_t^n=(-1)^nD_s^n$. Define $K_{p-1}(t)=\sum_{n=0}^{p-1}(2n+1)\phi_n(t)$. Orthogonality, the norm in [F1], and $\phi_n(1)=1$ give $K_{p-1}(1)=\sum_{n=0}^{p-1}(2n+1)=p^2$, $\int_0^1K_{p-1}=1$, and $\|K_{p-1}-1\|_2^2=p^2-1$. [F1, given, algebra]

2.1 Put $q_p=(K_{p-1}-1)/2$. Then $\deg q_p\le p-1$, $\int_0^1q_p=0$, $q_p(1)=(p^2-1)/2$, and $\int_0^1q_p^2=(p^2-1)/4$. Define $v_p(x)=1+\int_0^{x+1}q_p(t)\,dt$ on $(-1,0)$ and $v_p(x)=0$ on $(0,1)$. Its cell restrictions have degree at most $p$, its jump is $1$, its left derivative at the interface is $q_p(1)$, and its right derivative is $0$. Therefore the broken derivative energy is $(p^2-1)/4$ and the interface flux term is $-2(q_p(1)/2)(1)=-(p^2-1)/2$. Substituting into the stated form yields $a_h(v_p,v_p)=\eta-(p^2-1)/4$, which is negative whenever $p^2>4\eta+1$. Meanwhile $\sum_K\|v_p'\|_2^2+[v_p]^2=(p^2-1)/4+1>0$. This disproves coercivity for every fixed $\eta$ once $p$ is sufficiently large. [F1, step 1.1, given, algebra] ∎
