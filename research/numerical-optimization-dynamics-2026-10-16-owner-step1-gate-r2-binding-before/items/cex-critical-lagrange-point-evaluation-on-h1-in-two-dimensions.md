---
id: cex-critical-lagrange-point-evaluation-on-h1-in-two-dimensions
kind: counterexample
title: Point evaluation is unbounded at the two-dimensional H1 threshold
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-matching-affine-simplicial-meshes, def-reference-finite-element-and-unisolvent-dofs, def-sobolev-space-wkp-and-its-norm, lem-test-function-cutoffs-and-euclidean-localization, def-countable-choice]
proof_strategy: counterexample
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 11
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap11.pdf
      locator: "§11.4, printed pp. 123–125: point-value degrees of freedom require Sobolev embedding."
    - title: Juha Kinnunen, Sobolev Spaces (Aalto University, 2026)
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: "Chapter 3 §3.5, printed pp. 83–84: strict supercritical embedding threshold."
verification: {}
---

## Statement

Assume Countable Choice. For any interior point $c$ of the reference triangle, point evaluation
$u\mapsto u(c)$ is not bounded on smooth functions equipped with the
$W^{1,2}(\widehat S_2)$ norm. Thus the critical case $\ell=d/p=1$ cannot
be added to the supercritical point-evaluation conclusion.

## Facts & Assumptions

**Given:** An interior point $c\in\widehat S_2$ and the $W^{1,2}$ norm convention of [[def-sobolev-space-wkp-and-its-norm]].

[F1] The reference simplex is open, and smooth cutoffs supported in a prescribed open set and equal to one near a compact subset exist. ([[def-matching-affine-simplicial-meshes]], [[lem-test-function-cutoffs-and-euclidean-localization]])

[F2] A degree of freedom is a linear functional on its finite-element space; the point evaluation considered here is the candidate nodal functional at $c$. ([[def-reference-finite-element-and-unisolvent-dofs]])

[F3] The Sobolev-space norm convention used for $H^1$ assumes Countable Choice. ([[def-countable-choice]])

## Proof

1.1 Choose $R>0$ with $\overline{B(c,R)}\subset\widehat S_2$, and choose $\chi\in C_c^\infty(B(c,R))$ equal to one on $B(c,R/2)$. For $0<\epsilon<R/4$, put $L_\epsilon=\log(R/\epsilon)$ and $$u_\epsilon(x)=\chi(x)\, \frac{\log\!\left(R/\sqrt{|x-c|^2+\epsilon^2}\right)}{L_\epsilon}.$$ This is smooth and compactly supported in the simplex, and $u_\epsilon(c)=1$. [F1, given, algebra]

2.1 In polar coordinates about $c$, $r\ge0$ and [step 1.1] gives $\epsilon>0$, so $r^2+\epsilon^2\ge\epsilon^2>0$ and the radial derivative has no zero denominator. the undivided logarithm has uniformly bounded squared $L^2$ integral on $B(c,R)$: its absolute value is bounded by $\log(R/r)+C$ for $0<r<R$ and small $\epsilon$, and $\int_0^R r(\log(R/r)+C)^2dr<\infty$. Its radial derivative has magnitude $r/(r^2+\epsilon^2)$, so $$\int_0^R\frac{r^3}{(r^2+\epsilon^2)^2}\,dr \le C+\log(R/\epsilon)=C+L_\epsilon,$$ by splitting at $r=\epsilon$. After division by $L_\epsilon$, these estimates show the $L^2$ norm and the gradient contribution from $\chi\nabla\log(R/\sqrt{r^2+\epsilon^2})$ tend to zero. The term $\nabla\chi$ is supported where $R/2\le r<R$, on which the logarithm is uniformly bounded; its divided $L^2$ norm also tends to zero. Therefore $\|u_\epsilon\|_{W^{1,2}(\widehat S_2)}\to0$. [F1, step 1.1, algebra]

3.1 If point evaluation at $c$ were bounded, some finite $C$ would satisfy $|u(c)|\le C\|u\|_{W^{1,2}}$ for every smooth $u$. By [F2] this is the boundedness condition for the candidate nodal functional. Applying it to $u_\epsilon$ gives $1\le C\|u_\epsilon\|_{W^{1,2}}\to0$, a contradiction. Hence evaluation is unbounded at the critical exponent. [F2, F3, step 1.1, step 2.1, contradiction] ∎
