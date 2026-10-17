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
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-integral-over-a-measurable-set
  - def-nonnegative-lebesgue-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-ftc-second-part
  - thm-lebesgue-measure-of-a-box-of-every-kind
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

**Given:** Countable Choice and the Axiom of Choice; $I=(0,1)$; a scalar
field $\mathbb K\in\{\mathbb R,\mathbb C\}$; $f=1$, the piecewise-linear
function $\phi$, and the standard Poisson form
$a(v,w)=\int_0^1v'\overline{w'}\,dx$ (with conjugation the identity over
$\mathbb R$).

[F1] For a Hermitian coercive form on a Hilbert space, the conforming
Galerkin solution is the best approximant in the induced energy norm
([[cor-symmetric-galerkin-best-approximation-in-energy-norm]]).

[F2] The lemma gives explicit real $C_c^\infty$ approximants for $\phi$ and
$p$; these are test functions over either scalar field, so both functions
belong to the corresponding $H^1_0(0,1;\mathbb K)$
([[lem-two-cell-hat-and-quadratic-functions-lie-in-h10]]).
 
[F3] The weak Dirichlet Poisson theorem applies on an open nonempty domain
bounded in one direction when a Poincar\'e constant for $W^{1,2}_0$ is
specified; under Axiom of Choice and Countable Choice it gives a unique weak
solution for each bounded conjugate-linear datum
([[thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem]]).

[F4] The real or complex $L^2$ integral pairing is well defined, symmetric or
conjugate symmetric, and satisfies Cauchy--Schwarz
([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

[F5] The classical second derivative of a smooth function is its weak second
derivative, with the bilinear test identity
([[lem-classical-derivatives-are-weak-derivatives]]).

[F6] The constant function $1$ has $L^2(0,1)$ norm $1$; its integral pairing
defines a bounded conjugate-linear functional on $H^1_0(0,1)$ by
Cauchy--Schwarz and $\|v\|_{L^2}\le\|v\|_{H^1}$
([[thm-lebesgue-measure-of-a-box-of-every-kind]],
[[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]],
[[def-sobolev-space-wkp-and-its-norm]],
[[def-h-minus-one-as-the-dual-of-h-one-zero]]).

[A1] Countable Choice and the Axiom of Choice are retained from the cited
weak-Poisson and coercive-form suppliers ([[def-countable-choice]],
[[def-axiom-of-choice]]).

[F7] $H^1_0(0,1)$ is the closure of $C_c^\infty(0,1)$ in the $W^{1,2}$
norm, and test functions have their classical derivatives as weak derivatives
([[def-wkp-zero-as-a-sobolev-closure]],
[[def-sobolev-space-wkp-and-its-norm]]).

[F8] The real second fundamental theorem evaluates the integral of a
continuous derivative, continuous real functions on compact intervals are
Riemann integrable, and a bounded Riemann-integrable function has the same
Lebesgue integral ([[thm-ftc-second-part]],
[[thm-continuous-on-a-rectangle-is-riemann-integrable]],
[[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).
For integrable real or complex functions, restricting the integral to a
measurable set corresponds to multiplying by its indicator; this follows
componentwise from the positive/negative-part definition
([[def-integral-over-a-measurable-set]],
[[def-integrable-real-and-complex-functions-and-their-integrals]]).

[F9] $\lambda_1([0,x])=x$ for $0\le x\le1$ and $\lambda_1((0,1))=1$; the
integral of an indicator is the measure of its set
([[thm-lebesgue-measure-of-a-box-of-every-kind]],
[[def-nonnegative-lebesgue-integral]]).

[F10] The nonnegative integral is monotone
([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

## Verification

1.1 The function $\phi$ is absolutely continuous, vanishes at $0$ and $1$, and has derivative $2$ on $(0,1/2)$ and $-2$ on $(1/2,1)$. Its derivative is in $L^2$, so [F2] gives $\phi\in H^1_0(0,1)$. [F2, A1, given]

1.2 Put $p(x)=\frac12x(1-x)$. It is absolutely continuous with zero endpoint values, $p'=\frac12-x\in L^2$, and $p''=-1$; [F2] gives $p\in H^1_0(0,1)$. [F2, A1, given, algebra]

1.3 Poincar\'e constant for this interval. Let $v\in H^1_0(0,1;\mathbb K)$ and $\delta>0$. By [F7], choose $\varphi\in C_c^\infty(0,1;\mathbb K)$ with $\|v-\varphi\|_{H^1}<\delta$. For $0<x\le1$, apply the real second fundamental theorem to the real and imaginary parts of $\varphi$ on $[0,x]$; their derivatives are continuous and hence Riemann integrable by [F8]. The Riemann--Lebesgue equality in [F8] and the definition of the integral over a set give $\varphi(x)=(\varphi',\mathbf1_{[0,x]})_{L^2(0,1)}$, since $\varphi(0)=0$. By [F9], $\|\mathbf1_{[0,x]}\|_2=\sqrt{x}$, so [F4] gives $|\varphi(x)|\le\sqrt{x}\|\varphi'\|_2\le\|\varphi'\|_2$; this also holds at $x=0$. Integrating the squared bound over $(0,1)$ and using $\lambda_1((0,1))=1$ and [F10] yields $\|\varphi\|_2\le\|\varphi'\|_2$. Therefore $\|v\|_2\le\|\varphi\|_2+\delta\le\|\varphi'\|_2+\delta\le\|v'\|_2+2\delta$. Since $\delta$ is arbitrary, $\|v\|_2\le\|v'\|_2$ for every $v\in H^1_0(0,1;\mathbb K)$, so the required Poincar\'e constant is $C_P=1$. [F4, F7, F8, F9, F10, given, algebra]

2.1 For $v\in C_c^\infty(0,1)$, apply [F5] to $p'$ with test $\overline v$. Since $p''=-1$, it gives $a(p,v)=\int_0^1p'\overline{v'}\,dx=-\int_0^1p''\overline v\,dx=\int_0^1\overline v\,dx$. Both sides are continuous in the $H^1$ norm by [F4]. Since $H^1_0$ is the $W^{1,2}$-closure of these tests, the identity extends to all $v\in H^1_0(0,1)$ by [F7]. By [F6], the datum $v\mapsto\int_0^1\overline v$ lies in $H^{-1}(0,1)$. The interval $I$ is open and nonempty, is bounded in direction $e=1$ between $a=0$ and $b=1$, and step 1.3 supplies $C_P=1$; [A1] supplies the required axioms. Thus [F3] applies and makes $p$ the unique weak solution. [F3, F5, F6, F7, A1, step 1.3, given, algebra]

2.2 Direct integration gives $a(\phi,\phi)=\int_0^{1/2}4\,dx+\int_{1/2}^1 4\,dx=4,\qquad \int_0^1\phi(x)\,dx=\frac12.$ For $u_h=c\phi$, the Galerkin equation tested with $\phi$ is $4c=\int_0^1\phi=\frac12$, hence $c=\frac18$ and $u_h=\frac18\phi$. [step 1.3, given, step 1.1, algebra]

3.1 On the first half interval, $(p-u_h)'=\frac14-x$; on the second, $(p-u_h)'=\frac34-x$. Therefore $\|p-u_h\|_a^2=\int_0^{1/2}(\tfrac14-x)^2\,dx+\int_{1/2}^1(\tfrac34-x)^2\,dx=\frac1{96}+\frac1{96}=\frac1{48}.$ By [F1], with the Hilbert and coercivity hypotheses verified in [F3] and the Hermitian property in [F4], this computed Galerkin solution is the energy-best approximation. [F1, F3, F4, A1, step 2.2, algebra] ∎

