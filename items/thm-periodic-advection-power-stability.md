---
id: thm-periodic-advection-power-stability
kind: theorem
title: Scheme-specific periodic power stability for scalar advection
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [def-periodic-one-way-advection-schemes, lem-periodic-advection-amplification-symbols, def-operator-norm, def-complex-conjugate-real-imaginary-part-and-modulus, lem-complex-conjugation-and-modulus-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Endre Süli, B6.1 Numerical Solution of Partial Differential Equations"
      url: "https://people.maths.ox.ac.uk/suli/nspdes.pdf"
      locator: "§6.6, PDF pp. 99–104: periodic/infinite-grid upwind stability and CFL analysis."
    - title: "Benjamin Seibold, MIT 18.336 Lecture 15, Finite Difference Methods for the One-Way Wave Equation"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/286be9198204bea2f7e7d77f88e7b061_MIT18_336S09_lec15.pdf"
      locator: "Complete PDF pp. 2–4: scheme-specific Fourier stability calculations and CFL ranges."
---

## Statement

For the periodic schemes of [[def-periodic-one-way-advection-schemes]] with $a>0$, upwind powers are contractions in $\|\cdot\|_{2,h}$ for $0\le\nu\le1$ and grow for $\nu>1$. Lax--Friedrichs and Lax--Wendroff powers are contractions for $|\nu|\le1$; when $|\nu|>1$, Lax--Wendroff grows for $N\ge2$ and Lax--Friedrichs grows for $N\ge3$ (the $N=2$ Lax--Friedrichs stencil aliases its nonconstant mode). Downwind powers grow for every $\nu>0$ and $N\ge2$. Centered powers grow for every $\nu\ne0$ when $N\ge3$, while the $N=2$ centered stencil aliases to the identity. Reflection gives the same assertions for $a<0$ with $|\nu|$.

## Facts & Assumptions

**Given:** A finite periodic grid with $N\ge2$, fixed $a>0$, $h,k>0$, and the exact amplification formulas.

[F1] The $N$ periodic Fourier vectors form an orthogonal basis ([[lem-periodic-advection-amplification-symbols]]).

[F2] The five amplification factors and squared moduli are those of [[lem-periodic-advection-amplification-symbols]].

[F3] The five periodic updates and their indexing are defined in [[def-periodic-one-way-advection-schemes]].

[F4] For a bounded linear map, its operator norm is the supremum of $\|Tx\|$ over the unit ball ([[def-operator-norm]]).

[F5] For $z=C+iS$ with $|z|=1$, one has $C^2+S^2=1$ and hence $1-C\ge0$, $0\le S^2\le1$; complex conjugation and modulus obey their field laws ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[lem-complex-conjugation-and-modulus-laws]]).

## Proof

1.1 By [F5], $1-C_\ell\ge0$ and $0\le S_\ell^2\le1$. Thus for $0\le\nu\le1$, the upwind formula gives $|g_{\rm up}|^2\le1$; for $|\nu|\le1$, the Lax--Friedrichs formula gives $|g_{\rm LF}|^2\le1$, and the Lax--Wendroff formula gives $|g_{\rm LW}|^2\le1$. [F2, F3, F5, algebra]

1.2 If $\nu>1$, every nonconstant mode has $C_\ell<1$, so $|g_{\rm up}|^2=1+2\nu(\nu-1)(1-C_\ell)>1$. If $|\nu|>1$ and $N\ge2$, the Lax--Wendroff mode $\ell=1$ has $C_\ell<1$ and $|g_{\rm LW}|^2=1+\nu^2(\nu^2-1)(1-C_\ell)^2>1$. For Lax--Friedrichs with $|\nu|>1$ and $N\ge3$, some mode has $S_\ell\ne0$, so $|g_{\rm LF}|^2=1+(\nu^2-1)S_\ell^2>1$. Downwind has $|g_{\rm down}|^2>1$ for each nonconstant mode whenever $\nu>0$. Centered has $|g_{\rm centered}|^2>1$ on any mode with $S_\ell\ne0$, which exists exactly when $N\ge3$. [F2, F3, F5, algebra]

2.1 Write an arbitrary vector as $v=\sum_\ell c_\ell\psi_\ell$ in the orthonormal Fourier basis [F1]. The $m$-step update sends it to $\sum_\ell c_\ell g_\ell^m\psi_\ell$, so $\|T^mv\|_{2,h}^2=\sum_\ell|c_\ell|^2|g_\ell|^{2m}\le(\max_\ell|g_\ell|^m)^2\|v\|_{2,h}^2$. Since the finite set of modes has an index attaining this maximum and its basis vector is nonzero, equality is attained there; [F4] therefore gives $\|T^m\|=\max_\ell|g_\ell|^m$. The bounds and growing modes in steps 1.1 and 1.2 now give the claimed contraction and instability statements, including the $N=2$ aliasing cases. [F1, F2, F3, F4, F5, step 1.1, step 1.2] ∎
