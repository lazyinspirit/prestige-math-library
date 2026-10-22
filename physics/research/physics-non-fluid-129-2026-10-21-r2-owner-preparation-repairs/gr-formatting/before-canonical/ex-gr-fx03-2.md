---
id: ex-gr-fx03-2
kind: example
title: "Finite-slab dependence need not have a uniform exponential constant"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - thm-gr-fx-finite-slab-stability
  - prop-gr-fx-geometric-observable-continuity
  - def-gr-periodic-symmetric-hyperbolic-system
  - def-real-exponential-function-and-e
  - thm-derivative-of-exponential
  - thm-exponential-addition-formula
  - def-factorial-and-falling-factorial
  - lem-of-naturals-positive
dependency_roles:
  thm-gr-fx-finite-slab-stability: mathematical-premise
  prop-gr-fx-geometric-observable-continuity: mathematical-premise
  def-gr-periodic-symmetric-hyperbolic-system: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-exponential-addition-formula: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
  lem-of-naturals-positive: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), Section 3.1, Remarks 1-6, and Section 5.3: common-time energy and stability estimates"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "J. K. Hunter, Notes on Partial Differential Equations, UC Davis lecture notes, revised 18 June 2014, Chapter 8, Sections 8.1 and 8.3: symmetric-system energy estimates on fixed intervals"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
verification:
  precheck: pending
---

## Statement

For the scalar symmetric-hyperbolic system on $\mathbb T^3_{2\pi}$
$$\partial_t z-2t z=0,\qquad A^0=1,\quad A^1=A^2=A^3=0,\quad B(t,x,z)=-2tz,$$
the spatially constant solution with initial value $z(0,x)=\delta$ is $z_\delta(t,x)=\delta\exp(t^2)$. For every fixed finite slab $[0,T]$, this solution depends continuously on $\delta$ and has a finite Sobolev bound. But no constants $C>0$ independent of $T$ can give
$$\|z_\delta(T)-z_0(T)\|_{H^{s-1}}\le C e^{CT}\|z_\delta(0)-z_0(0)\|_{H^{s-1}}$$
for all $T>0$ and all $\delta\ne0$. For each fixed $T$ the state and time-derivative ranges are bounded, but the compact bound may depend on $T$. This is a mathematical symmetric-hyperbolic illustration of the horizon qualification; the system is not an Einstein reduction and the example asserts no behavior of an Einstein solution.

## Statement references

[[thm-gr-fx-finite-slab-stability]]

[[prop-gr-fx-geometric-observable-continuity]]

[[def-gr-periodic-symmetric-hyperbolic-system]]

[[def-real-exponential-function-and-e]]

[[thm-derivative-of-exponential]]

[[thm-exponential-addition-formula]]

[[def-factorial-and-falling-factorial]]

[[lem-of-naturals-positive]]

## Facts & Assumptions

**Given:** A dimensionless time parameter $t\ge0$, an integer $s\ge5$, a fixed finite $T>0$, and a real initial amplitude $\delta$.

[F1] The symmetric-hyperbolic system is $A^0\partial_tz+\sum_iA^i\partial_i z+B=0$ with symmetric matrices and positive definite $A^0$ ([[def-gr-periodic-symmetric-hyperbolic-system]]).

[F2] The real exponential is defined by its power series. Every factorial is a nonzero natural, and positive canonical naturals have positive real image; thus for $y\ge0$ each series term is nonnegative and $\exp(y)\ge1+y>0$ ([[def-real-exponential-function-and-e]], [[def-factorial-and-falling-factorial]], [[lem-of-naturals-positive]]).

[F3] The real exponential is smooth with derivative $(\exp)'=\exp$ ([[thm-derivative-of-exponential]]).

[F4] The exponential satisfies $\exp(x+y)=\exp(x)\exp(y)$ ([[thm-exponential-addition-formula]]).

[F5] The finite-slab estimate permits its constant to depend on the selected compact slab and coefficient bounds ([[thm-gr-fx-finite-slab-stability]]).

[F6] The finite-domain geometric continuity conclusion is stated on a fixed slab and asserts no uniformity as $T\to\infty$ ([[prop-gr-fx-geometric-observable-continuity]]).

**Proof technique:** explicit solution and growth comparison.

## Proof

1.1 The coefficients in the Statement are smooth in $(t,x,z)$, each $A^\mu$ is symmetric, and $A^0=1$ is strictly positive. Thus [F1] makes this a symmetric-hyperbolic system. Its equation reduces to $\partial_tz=2tz$ and contains no spatial derivatives. [given, F1, algebra]

1.2 By [F3] and the chain rule, $z_\delta(t,x)=\delta\exp(t^2)$ satisfies $\partial_tz_\delta=2t\delta\exp(t^2)=2tz_\delta$ and $z_\delta(0,x)=\delta$. The zero solution corresponds to $\delta=0$. For each finite $T$, the function $\delta\exp(t^2)$ and its time derivative are bounded on $[0,T]$; its values lie between the endpoint values $\delta$ and $\delta\exp(T^2)$, hence in a compact interval. Since it is spatially constant, it has finite $H^s$ norm for every integer $s$. Its state and time-derivative bounds may depend on the selected finite $T$, as permitted by the finite-slab estimate [F5]. [given, step 1.1, F3, F5, algebra]

2.1 The difference from zero is exactly $\delta\exp(t^2)$. Homogeneity of the Sobolev norm on the spatially constant profile gives $$\frac{\|z_\delta(T)-z_0(T)\|_{H^{s-1}}}{\|z_\delta(0)-z_0(0)\|_{H^{s-1}}}=\frac{|\delta|\exp(T^2)\|\mathbf1\|_{H^{s-1}}}{|\delta|\|\mathbf1\|_{H^{s-1}}}=\exp(T^2).$$ Suppose one constant $C>0$ worked for all slab lengths in the displayed exponential estimate. Choose $T$ large enough that $y:=T^2-CT>C$. Then $y>0$, and [F2] gives $\exp(y)\ge1+y>C$. By [F4], $$\exp(T^2)=\exp(CT+y)=\exp(CT)\exp(y)>C\exp(CT),$$ since [F2] also gives $\exp(CT)>0$. This contradicts that uniform estimate. [step 1.2, F2, F4, algebra]

2.2 For each fixed $T$, the exact solution map is multiplication by $\exp(t^2)$ and is Lipschitz on $[0,T]$ with finite constant $\exp(T^2)$; this is consistent with [F5] and [F6], whose constants and conclusions are attached to a fixed finite slab. The calculation establishes only that finite-slab continuity alone does not supply a $T$-independent exponential constant for general symmetric-hyperbolic systems. [step 2.1, F5, F6, algebra] ∎ 