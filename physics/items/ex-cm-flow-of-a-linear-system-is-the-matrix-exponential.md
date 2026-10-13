---
id: ex-cm-flow-of-a-linear-system-is-the-matrix-exponential
kind: example
title: "The flow and variational equation of a linear system: Phi(t,a)=e^{tA}a"
status: published
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, thm-euclidean-space-complete, def-operator-norm, def-cm-local-flow-of-an-autonomous-system, lem-cm-local-flow-composition-law, thm-cm-smooth-dependence-and-the-variational-equation, def-variational-equation-along-an-ode-solution, lem-exponential-series-of-a-bounded-operator, lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval, thm-existence-and-uniqueness-of-a-maximal-ode-solution, def-maximal-ode-solution, def-first-order-ode-initial-value-problem-and-solution, def-matrix-product-and-identity-matrix]
dependency_roles:
  def-euclidean-inner-product: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  thm-euclidean-space-complete: mathematical-premise
  def-operator-norm: mathematical-premise
  def-cm-local-flow-of-an-autonomous-system: mathematical-premise
  lem-cm-local-flow-composition-law: mathematical-premise
  thm-cm-smooth-dependence-and-the-variational-equation: mathematical-premise
  def-variational-equation-along-an-ode-solution: mathematical-premise
  lem-exponential-series-of-a-bounded-operator: mathematical-premise
  lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  def-maximal-ode-solution: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 3.2 (the matrix exponential and linear systems), printed pages 62-67, and Section 2.4 (variational equation), printed pages 45-47"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "J. Arino, MATH 8430 Fundamental Theory of Ordinary Differential Equations (University of Manitoba), Section 1.4 (the variational equation for a linear system), printed pages 32-40"
      url: "https://julien-arino.github.io/assets/pdf/courses/math8430_lecture_notes.pdf"
verification:
  precheck: pass
---

## Example

Let $n\ge1$ and let $A\in M_n(\mathbb R)$. Consider the linear autonomous field $F:\mathbb R^n\to\mathbb R^n$, $F(x)=Ax$, with local flow $\Phi:\Omega\to\mathbb R^n$ ([[def-cm-local-flow-of-an-autonomous-system]]) and exponential series $e^{tA}=\sum_{m\ge0}\frac{t^m}{m!}A^m$ ([[lem-exponential-series-of-a-bounded-operator]]). Then

$$\Omega=\mathbb R\times\mathbb R^n,\qquad \Phi(t,a)=e^{tA}a,$$

the exponential family satisfies the composition law $e^{(s+t)A}=e^{sA}e^{tA}$, and for every $a$ the derivative of $b\mapsto\Phi(t,b)$ at $a$ is $D_a\Phi(t,a)=e^{tA}$; the variational equation along $t\mapsto e^{tA}a$,

$$Y'=AY,\qquad Y(0)=I_n,$$

has the unique solution $Y(t)=e^{tA}$ on every compact interval ([[def-variational-equation-along-an-ode-solution]], [[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]).

## Facts & Assumptions

**Given:** $n\ge1$, a matrix $A\in M_n(\mathbb R)$ and the linear field $F(x)=Ax$. Coordinates are zero-based; a matrix acts on a column vector by $(Ax)_i=\sum_{j<n}A_{ij}x_j$. Vector norms are Euclidean ([[def-euclidean-inner-product]]), and $\|A\|$ is the subordinate Euclidean operator norm ([[def-operator-norm]]).

[F1] Euclidean $\mathbb R^n$ is complete ([[thm-euclidean-space-complete]]). Rowwise Cauchy-Schwarz gives $\|Ax\|_2^2\le(\sum_{i,j<n}A_{ij}^2)\|x\|_2^2$, so $A$ is bounded and $F$ is globally Lipschitz ([[thm-cauchy-schwarz-and-the-euclidean-norm]]). The exponential series defines a $C^\infty$ group $t\mapsto e^{tA}$ with $\frac{d}{dt}e^{tA}=Ae^{tA}=e^{tA}A$, $e^{0}=I_n$ and $e^{(s+t)A}=e^{sA}e^{tA}$ ([[lem-exponential-series-of-a-bounded-operator]], [[def-matrix-product-and-identity-matrix]]).

[F2] Every initial value problem of $x'=Ax$ has a unique maximal solution, and every solution through the same initial data is a restriction of it ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]], [[def-maximal-ode-solution]], [[def-first-order-ode-initial-value-problem-and-solution]], [[def-cm-local-flow-of-an-autonomous-system]]).

[F3] The variational equation along a solution $x$ of an autonomous $C^1$ field is the linear matrix ODE $Y'=D F(x(t))Y$; for the linear field it is $Y'=AY$, and it has a unique solution on every compact interval for every prescribed initial matrix at a time in that interval ([[def-variational-equation-along-an-ode-solution]], [[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]). For $a_0\in\mathbb R^n$, $R,T>0$, $M:=\sup_{\overline B(a_0,R)}\|Ax\|_2$ and $0<\rho<R-MT$, the smooth-dependence theorem identifies $D_a\Phi(t,a)h$ with $Y_a(t)h$ for $a\in B(a_0,\rho)$ and $t\in[0,T]$, with the derivative bound $L=\|A\|$ and the trapping bound $\|\Phi(t,a)-a_0\|_2\le\rho+Mt<R$ ([[thm-cm-smooth-dependence-and-the-variational-equation]]).

## Verification

**Proof technique:** direct; verify the explicit solution, its maximality and the derivative identity.

1.1 For fixed $a$, the curve $x(t):=e^{tA}a$ is defined on all of $\mathbb R$ and satisfies $x'(t)=Ae^{tA}a=Ax(t)$ and $x(0)=a$ by [F1]. Hence it is a solution of the initial value problem on $\mathbb R$, and by [F2] it is the unique maximal solution through $(0,a)$; therefore $I_a=\mathbb R$ and $\Phi(t,a)=x(t;a)=e^{tA}a$ for every $t\in\mathbb R$. As $a$ was arbitrary, $\Omega=\mathbb R\times\mathbb R^n$. [given, F1, F2]

2.1 For fixed $t$, the map $b\mapsto\Phi(t,b)=e^{tA}b$ is linear, and its derivative at every point is itself: $\Phi(t,a+h)-\Phi(t,a)-e^{tA}h=0$, so $D_a\Phi(t,a)=e^{tA}$ with zero remainder; this holds for every real $t$. [step 1.1, F1, algebra]

2.2 The composition law for the flow follows from [F1]: $\Phi(s+t,a)=e^{(s+t)A}a=e^{sA}e^{tA}a=\Phi(s,\Phi(t,a))$, in agreement with the general identity of [[lem-cm-local-flow-composition-law]]. [step 1.1, F1]

3.1 The function $Y(t):=e^{tA}$ satisfies $Y'(t)=AY(t)$ and $Y(0)=I_n$ by [F1]; by the uniqueness clause of [F3] it is the unique solution of the variational initial value problem on every compact interval containing $0$, and every compact interval is contained together with $0$ in one such interval. In particular the conclusion of the smooth-dependence theorem for the derivative of $a\mapsto\Phi(t,a)$ is achieved exactly, with no error term. [step 1.1, 2.1, F1, F3] ∎

## Remarks

- For a linear system the continuous-dependence estimate of [[lem-cm-continuous-dependence-on-initial-data]] is an identity in the difference: $\Phi(t,a)-\Phi(t,b)=e^{tA}(a-b)$, and its norm is bounded by $e^{\|A\||t|}\|a-b\|$ via the operator-norm estimate for the exponential series.
