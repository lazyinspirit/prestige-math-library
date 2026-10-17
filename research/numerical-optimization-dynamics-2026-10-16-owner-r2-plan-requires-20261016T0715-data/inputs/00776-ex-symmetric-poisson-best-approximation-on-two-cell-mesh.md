---
id: ex-symmetric-poisson-best-approximation-on-two-cell-mesh
kind: example
title: A two-cell linear finite element best approximation for Poisson
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - cor-symmetric-galerkin-best-approximation-in-energy-norm
  - def-axiom-of-choice
  - def-countable-choice
  - def-h-minus-one-as-the-dual-of-h-one-zero
  - def-sobolev-space-wkp-and-its-norm
  - def-wkp-zero-as-a-sobolev-closure
  - lem-classical-derivatives-are-weak-derivatives
  - lem-two-cell-hat-and-quadratic-functions-lie-in-h10
  - thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem
  - thm-holder-inequality-for-integrals
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {}
---

## Example

For $I=(0,1)$ and $-u''=1$ with zero endpoint values, the exact weak solution
is $u(x)=\frac12x(1-x)$. Take the mesh
$0,\frac12,1$ and the continuous piecewise-linear basis function
$$\phi(x)=\begin{cases}2x,&0\le x\le\frac12,\\2(1-x),&\frac12\le x\le1.\end{cases}$$
The Galerkin space is $V_h=\operatorname{span}\{\phi\}$. The unique discrete
solution is $u_h=\frac18\phi$, and the energy error is
$$\|u-u_h\|_a^2=\int_0^1|(u-u_h)'|^2\,dx=\frac1{48}.$$
By the Hermitian best-approximation result, $u_h$ is the energy-best element
of this one-dimensional space.

## Facts & Assumptions

**Given:** Countable Choice and the Axiom of Choice; $I=(0,1)$, $f=1$, the piecewise-linear function $\phi$, and the
standard Poisson form $a(v,w)=\int_0^1v'\overline{w'}\,dx$.

[F1] For a Hermitian coercive form on a Hilbert space, the conforming
Galerkin solution is the best approximant in the induced energy norm
([[cor-symmetric-galerkin-best-approximation-in-energy-norm]]).

[F2] The explicit hat function $\phi$ and the quadratic $p$ in this example
belong to $H^1_0(0,1)$
([[lem-two-cell-hat-and-quadratic-functions-lie-in-h10]]).
 
[F3] For $V=H^1_0(0,1)$ with its usual $H^1$ norm, the standard Poisson form
is bounded and coercive and $V$ is Hilbert; with Axiom of Choice and Countable
Choice, every bounded conjugate-linear datum has a unique weak solution
([[thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem]]).

[F4] The derivative inner-product form is Hermitian by conjugate symmetry of
the complex integral, and its energy norm is $\|v\|_a=\|v'\|_{L^2}$.

[F5] The classical second derivative of a smooth function is its weak second
derivative, with the bilinear test identity
([[lem-classical-derivatives-are-weak-derivatives]]).

[F6] An $L^2$ function defines a bounded conjugate-linear functional on
$H^1_0(0,1)$ by integration against the test function, using Cauchy--Schwarz;
$H^{-1}$ denotes this dual space
([[thm-holder-inequality-for-integrals]],
[[def-h-minus-one-as-the-dual-of-h-one-zero]]).

[A1] Countable Choice and the Axiom of Choice are retained from the cited
weak-Poisson and coercive-form suppliers ([[def-countable-choice]],
[[def-axiom-of-choice]]).

[F7] $H^1_0(0,1)$ is the closure of $C_c^\infty(0,1)$ in the $W^{1,2}$
norm ([[def-wkp-zero-as-a-sobolev-closure]]).

## Verification

1.1 The function $\phi$ is absolutely continuous, vanishes at $0$ and $1$, and has derivative $2$ on $(0,1/2)$ and $-2$ on $(1/2,1)$. Its derivative is in $L^2$, so [F2] gives $\phi\in H^1_0(0,1)$. [F2, A1, given]

1.2 Put $p(x)=\frac12x(1-x)$. It is absolutely continuous with zero endpoint values, $p'=\frac12-x\in L^2$, and $p''=-1$; [F2] gives $p\in H^1_0(0,1)$. [F2, A1, given, algebra]

1.3 For $v\in C_c^\infty(0,1)$, apply [F5] to $p'$ with test $\overline v$. Since $p''=-1$, it gives $a(p,v)=\int_0^1p'\overline{v'}\,dx=-\int_0^1p''\overline v\,dx=\int_0^1\overline v\,dx$. Both sides are continuous in the $H^1$ norm by Cauchy--Schwarz. Since $H^1_0$ is the $W^{1,2}$-closure of these tests, the identity extends to all $v\in H^1_0(0,1)$ by [F7]. By [F6], the datum $v\mapsto\int_0^1\overline v$ lies in $H^{-1}(0,1)$, so [F3] makes $p$ the unique weak solution. [F3, F5, F6, F7, A1, given, algebra]

2.1 Direct integration gives $a(\phi,\phi)=\int_0^{1/2}4\,dx+\int_{1/2}^1 4\,dx=4,\qquad \int_0^1\phi(x)\,dx=\frac12.$ For $u_h=c\phi$, the Galerkin equation tested with $\phi$ is $4c=\int_0^1\phi=\frac12$, hence $c=\frac18$ and $u_h=\frac18\phi$. [step 1.3, given, step 1.1, algebra]

3.1 On the first half interval, $(p-u_h)'=\frac14-x$; on the second, $(p-u_h)'=\frac34-x$. Therefore $\|p-u_h\|_a^2=\int_0^{1/2}(\tfrac14-x)^2\,dx+\int_{1/2}^1(\tfrac34-x)^2\,dx=\frac1{96}+\frac1{96}=\frac1{48}.$ By [F1], with the Hilbert and coercivity hypotheses verified in [F3] and the Hermitian property in [F4], this computed Galerkin solution is the energy-best approximation. [F1, F3, F4, A1, step 2.1, algebra] ∎
