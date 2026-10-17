---
id: ex-midpoint-underintegrated-p2-stiffness-loses-coercivity
kind: example
title: One midpoint sample destroys a quadratic stiffness coercivity bound
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-variational-crime-error-framework, thm-first-strang-lemma-for-conforming-perturbed-galerkin, alg-composite-midpoint-rule, thm-ftc-second-part, lem-derivative-of-a-power, cor-finite-dimensional-normed-spaces-are-banach, def-hilbert-space]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VI, Chapter 27, Error analysis with variational crimes
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap27.pdf
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
---

## Example

On the single interval $[0,1]$, let $\phi(x)=x(1-x)$ and let $V=V_h=\operatorname{span}_{\mathbb R}\{\phi\}$ with inner product $(c\phi,d\phi)_V:=cd$ and induced norm $\|c\phi\|_V=|c|$. Define $a(v,w)=\int_0^1v'w'\,dx$ and let $a_h(v,w)$ replace that integral by the one-panel midpoint rule. Exact integration gives $a(\phi,\phi)=1/3$, while the midpoint form gives zero. Thus $a$ is bounded and coercive in this one-dimensional Hilbert norm, but $a_h$ is not coercive and the first Strang theorem's discrete stability hypothesis fails.

## Facts & Assumptions

**Given:** The interval $[0,1]$, the nonzero trial function $\phi(x)=x(1-x)$, the real one-dimensional spaces $V=V_h=\operatorname{span}\{\phi\}$ with $(c\phi,d\phi)_V=cd$ and $\|c\phi\|_V=|c|$, the exact stiffness $a(v,w)=\int_0^1v'w'\,dx$, and its one-panel midpoint approximation $a_h$.

[F1] [[alg-composite-midpoint-rule]]: on one panel of width $1$, $Q_M(g)=g(1/2)$.

[F2] [[thm-first-strang-lemma-for-conforming-perturbed-galerkin]]: the first Strang estimate assumes a positive discrete coercivity constant $\alpha_h$.

[F3] [[thm-ftc-second-part]] and [[lem-derivative-of-a-power]]: a polynomial integral is the endpoint difference of an explicit antiderivative.

[F4] [[cor-finite-dimensional-normed-spaces-are-banach]] and [[def-hilbert-space]]: a finite-dimensional real inner-product space is complete and hence Hilbert.

## Verification

1.1 The space $V$ has finite dimension, so [F4] makes it Banach and hence Hilbert for the stated inner product. By the power rule, $\phi'(x)=1-2x$; the displayed polynomial is an antiderivative of $(1-2x)^2$ by the same rule, so [F3] gives $a(\phi,\phi)=\int_0^1(1-2x)^2dx=[x-2x^2+\tfrac43x^3]_0^1=1/3$. Bilinearity then gives $a(c\phi,d\phi)=cd/3=\tfrac13(c\phi,d\phi)_V$, verifying boundedness and coercivity with constant $1/3$. [F3, F4, given, algebra]

2.1 The midpoint is $1/2$, where $\phi'(1/2)=0$. Thus [F1] gives $a_h(\phi,\phi)=Q_M((\phi')^2)=0$, although $\phi\ne0$. [F1, step 1.1, algebra]

3.1 The stated norm gives $\|\phi\|_V=1$, so a coercivity constant $\alpha_h>0$ would require $0=a_h(\phi,\phi)\ge\alpha_h$, contradicting step 2.1. Therefore the first-Strang stability hypothesis [F2] is absent; the calculation asserts no error rate for the unstable discrete problem. [F2, given, step 2.1, algebra] ∎
