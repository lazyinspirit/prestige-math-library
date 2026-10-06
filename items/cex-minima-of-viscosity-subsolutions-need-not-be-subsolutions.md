---
id: cex-minima-of-viscosity-subsolutions-need-not-be-subsolutions
kind: counterexample
title: Minima of viscosity subsolutions need not be subsolutions
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- prop-maxima-of-subsolutions-and-minima-of-supersolutions
- def-viscosity-subsolution-and-supersolution
- lem-viscosity-testing-by-first-order-jets
- def-total-derivative-in-euclidean-space
- def-directional-and-partial-derivatives
- def-euclidean-local-extrema-and-critical-points
- thm-fermat-for-euclidean-local-extrema
justified_by: []
aliases: []
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations, Bulletin of the American Mathematical Society 27 (1992), 1--67 (complete article)
    url: https://arxiv.org/pdf/math/9207212
    locator: Introduction (0.1)--(0.3), printed p. 2 (properness); Section 4, Lemma 4.2, printed pp. 23--24 (supremum stability, with the dual infimum formulation). The two explicit affine profiles and failing test are computed here.
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 1 Section 8, the discussion following Lemma 1.25, printed p. 33
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

**False claim:** a finite minimum of finitely many viscosity subsolutions of a
first-order equation is again a viscosity subsolution.

Take the stationary proper equation
$$F(x,u,u'):=u+1-(u')^2=0\qquad\text{on }\Omega=(-1,1),$$
whose operator $F(r,p)=r+1-p^2$ is continuous and strictly increasing in $r$
(proper), and the two affine functions $u_1(x)=1-2x$ and $u_2(x)=1+2x$. Both
are classical subsolutions: $F(u_i,u_i')=u_i+1-4=u_i-3\le0$ on $\Omega$
because $u_i\le3$ there. Their pointwise minimum is $u(x)=1-2|x|$, a peak at
$x_0=0$ with value $1$. The $C^1$ test function $\phi\equiv1$ satisfies
$\phi\ge u$ on $\Omega$ with equality at $0$, so $u-\phi$ has a local maximum
at $0$; but $F(0,u(0),\phi'(0))=1+1-0=2>0$, so $u$ fails the subsolution test
at the corner. Hence the finite-minimum operation is not admissible for
subsolutions of a proper equation, while the finite maximum of subsolutions and
the finite minimum of supersolutions are, by the same active-index contact
argument as [[prop-maxima-of-subsolutions-and-minima-of-supersolutions]]:
the active function has the same value and the same test at the contact. The zero-order term contributes to this residual but is not essential to
failure of the minimum operation: for $F(p)=1-p^2$ the same two affine
functions have residual $-3$, while their minimum has the upper-test
residual $F(0)=1>0$.

## Facts & Assumptions

**Given:** The interval $\Omega=(-1,1)$, the proper operator $F(r,p)=r+1-p^2$, the functions $u_1=1-2x$, $u_2=1+2x$, their pointwise minimum $u=\min(u_1,u_2)=1-2|x|$, and the constant test $\phi\equiv1$.

[F1] For a proper operator $F(x,r,p)$ the viscosity subsolution inequality is $F(x_0,u(x_0),D\phi(x_0))\le0$ at every point $x_0$ where $u-\phi$ has a local maximum, $\phi\in C^1$ ([[def-viscosity-subsolution-and-supersolution]] for the test-function scheme; here this displayed inequality defines the zero-order stationary adaptation; the cited item itself treats only the evolutionary operator with no zero-order term).

[F2] A real-valued function has a local maximum at $x_0$ when its value near $x_0$ is at most its value at $x_0$; the total derivative of a $C^1$ function is computed from its partial derivatives; at a differentiable local extremum the derivative vanishes ([[thm-fermat-for-euclidean-local-extrema]], [[def-euclidean-local-extrema-and-critical-points]], [[def-total-derivative-in-euclidean-space]], [[def-directional-and-partial-derivatives]]).

## Counterexample

**Proof technique:** explicit touching test at the corner of the minimum.

1.1 The two affine functions are subsolutions. For $i=1,2$ and $x\in(-1,1)$ we have $u_i(x)=1\mp2x\le3$, and $u_i$ is $C^1$ with $u_i'=\mp2$, so $F(u_i,u_i')=u_i+1-4=u_i-3\le0$ pointwise on $\Omega$. Since at a local maximum of $u_i-\phi$ the differentiability of $u_i$ and $\phi$ forces $D\phi(x_0)=Du_i(x_0)$ by [F2], we get $F(x_0,u_i(x_0),D\phi(x_0))=u_i(x_0)-3\le0$; hence $u_1$ and $u_2$ are viscosity subsolutions. [F1, F2, algebra]

2.1 The minimum fails the test. The pointwise minimum is $u=1-2|x|$ with $u(0)=1$ and $u(x)<1$ for $x\ne0$; the constant $\phi\equiv1$ is $C^1$ with $\phi'=0$ and satisfies $\phi\ge u$ on $\Omega$ with equality exactly at $0$, so $u-\phi$ has a local maximum at $0$ by [F2]. The subsolution test of [F1] at $x_0=0$ would require $F(0,u(0),\phi'(0))=1+1-0=2\le0$, which is false. Hence the finite minimum of the two subsolutions is not a subsolution. [step 1.1, F1, F2, algebra]

3.1 Conclusion. Step 1.1 exhibits two viscosity subsolutions of the proper equation $u+1-(u')^2=0$ and step 2.1 shows their pointwise minimum fails the subsolution test at the peak; For this stationary operator, the finite-maximum and dual finite-minimum rules follow directly by choosing an active index at the contact: its function value is unchanged there and its test is the same. This is the argument of [[prop-maxima-of-subsolutions-and-minima-of-supersolutions]], whose stated operator has no zero-order term. The computation $F(p)=1-p^2$ with the same slopes and constant upper test also shows failure without a zero-order term. [step 1.1, step 2.1] ∎ 