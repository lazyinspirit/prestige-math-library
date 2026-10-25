---
id: thm-reference-simplex-poincare-wirtinger
kind: theorem
title: Poincare–Wirtinger inequality on a reference simplex
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-matching-affine-simplicial-meshes, lem-smooth-density-on-reference-simplex, def-sobolev-space-wkp-and-its-norm, cor-vector-valued-ftc-and-lipschitz-bound, thm-holder-inequality-for-integrals, thm-tonelli-and-fubini-for-completed-product-measures, thm-jensens-integral-inequality, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 12
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap12.pdf
      locator: "§12.1, printed pp. 131–134: Poincare inequalities on the reference simplex."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 4
      url: https://jschoeberl.github.io/iFEM/_downloads/900feda304f95ee42fd24abe742d7564/numpde.pdf
      locator: "§4.2, printed pp. 56–57: reference-cell Poincare and Bramble–Hilbert estimates."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Statement

Assume Countable Choice. For every $1\le p<\infty$ there is
$C_{d,p}<\infty$ such that for all
$u\in W^{1,p}(\widehat S_d;\mathbb R)$,
$$\|u-u_{\widehat S_d}\|_{L^p(\widehat S_d)} \le C_{d,p}|u|_{W^{1,p}(\widehat S_d)},\qquad u_{\widehat S_d}:=|\widehat S_d|^{-1}\int_{\widehat S_d}u\,dx.$$

## Facts & Assumptions

**Given:** Countable Choice, the bounded convex reference simplex and $1\le p<\infty$.

[F1] Smooth functions on a neighbourhood of the closed simplex are dense in $W^{1,p}(\widehat S_d)$. ([[lem-smooth-density-on-reference-simplex]])

[F2] Along a segment, the fundamental theorem gives the integral of the directional derivative, bounded by segment length times the integral of $|\nabla u|$. ([[cor-vector-valued-ftc-and-lipschitz-bound]])

[F3] Jensen bounds the $p$th power of an average by the average of the $p$th powers; Tonelli/Fubini permits the pair and parameter integrals; Holder controls integrals on the finite-measure simplex; affine change of variables has its determinant factor. ([[thm-jensens-integral-inequality]], [[thm-tonelli-and-fubini-for-completed-product-measures]], [[thm-holder-inequality-for-integrals]], [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]])

[F4] The smooth-density supplier [F1] assumes Countable Choice. ([[def-countable-choice]])

## Proof

1.1 First take $u$ smooth. For $x,y\in\widehat S_d$, convexity keeps $z_t=tx+(1-t)y$ in the simplex. The segment identity and $|x-y|\le h:=\operatorname{diam}(\widehat S_d)$ give $$|u(x)-u(y)|^p\le h^p\int_0^1|\nabla u(tx+(1-t)y)|^p\,dt,$$ by [F2] and Jensen on the unit interval. Jensen again gives $$|u(x)-u_{\widehat S_d}|^p\le|\widehat S_d|^{-1} \int_{\widehat S_d}|u(x)-u(y)|^p\,dy.$$ [F2, F3, given]

2.1 Integrate the last bound over $x$. For $t\ge1/2$, fix $y$ and use $x\mapsto tx+(1-t)y$; its Jacobian is $t^d$, and its image is contained in the simplex, so its integral is at most $2^d\int_{\widehat S_d}|\nabla u|^p$. For $t\le1/2$, fix $x$ and use $y\mapsto tx+(1-t)y$, whose inverse Jacobian is at most $2^d$, giving the same bound. Tonelli [F3] therefore yields $$\|u-u_{\widehat S_d}\|_p^p\le2^dh^p\|\nabla u\|_p^p.$$ Taking $p$th roots proves the estimate for smooth $u$. [F3, step 1.1, algebra]

3.1 For arbitrary $u\in W^{1,p}$ choose smooth $u_j\to u$ in $W^{1,p}$ by [F1]. Holder on the finite-measure simplex gives $\int u_j\to\int u$, so $(u_j)_{\widehat S_d}\to u_{\widehat S_d}$; also $\|u_j-u\|_p\to0$ and $\|\nabla u_j\|_p\to\|\nabla u\|_p$. Passing to the limit in the smooth inequality of step 2.1 proves the statement. [F1, F4, step 2.1, algebra] ∎
