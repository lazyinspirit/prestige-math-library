---
id: def-brownian-generator
kind: definition
title: "The Brownian differential generator"
status: draft
origin: pipeline
deps: [def-elementary-predictable-brownian-integrand, thm-multidimensional-ito-formula-for-brownian-driven-processes, thm-ito-formula-one-dimensional, thm-space-time-harmonic-functions-yield-brownian-local-martingales, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Sections 2.10.2 and 3.7"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Definition

Assume the Axiom of Choice and fix a finite integer $d\ge1$. For a function $f\in C^2(\mathbb R^d)$, where
$C^2(\mathbb R^d)$ means that all partial derivatives of order at most two
exist and are continuous, the **Brownian differential operator**, also
called the **Brownian generator** or the **Ito differential operator**, is
$$Lf:=\tfrac12\Delta f=\tfrac12\sum_{k=1}^d\partial^2_{x_k}f .$$
For a space-time function $f\in C^{1,2}([0,\infty)\times\mathbb R^d)$
(continuous together with its first time and first and second space
derivatives, using the right time derivative at zero), one writes
$Lf(t,x):=\tfrac12\Delta_xf(t,x)$, the Laplacian being taken in the space
variable only.

The following conventions are part of the definition and fix what the symbol
does and does not assert.

1. **Coefficient convention in Ito notation.** Whenever an Ito formula
   for $f(t,X_t)$ is valid with drift $b$ and dispersion matrix $\sigma$,
   its displayed second-order expression is
   $\tfrac12\sum_{i,j}(\sigma\sigma^{\mathsf T})^{ij}\partial_i\partial_jf$.
   If $\sigma\sigma^{\mathsf T}=I_d$, this expression equals $Lf$, since
   the off-diagonal coefficients vanish and each diagonal coefficient is one.
   The complete drift expression is then $\partial_tf+\sum_i b^i\partial_if+Lf$,
   evaluated at $(t,X_t)$. This is an algebraic identification of the
   coefficients, not an assertion that an Ito formula holds under AC alone.
   Applying [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]
   requires its stochastic hypotheses, including (H) of
   [[def-elementary-predictable-brownian-integrand]], and compatible versions
   and integrability conventions. The differential expression itself is
   defined independently of that application. For a constant covariance-rate
   matrix $\Sigma$, the corresponding second-order expression is
   $\tfrac12\sum_{i,j}\Sigma^{ij}\partial_i\partial_jf$; a single Gaussian
   random variable does not by itself specify a stochastic generator.
2. **$L$ acts on $C^2$ functions, and that is all that is defined here.** The
   definition assigns to each $f\in C^2(\mathbb R^d)$ the continuous function
   $Lf$, and for $f\in C^{1,2}$ the space-time function $Lf(t,x)$. It makes no
   assertion about semigroups: it does **not** claim that every $C^2$ function
   lies in the infinitesimal-generator domain of the heat semigroup on
   $C_0(\mathbb R^d)$, and it does not define a closed operator there. If
   semigroup-generator language is wanted, the actual domain must be stated and
   the assertion that $C_c^\infty$ is a core must be proved separately; neither
   statement is used or asserted on this page.
3. **Relation to the heat equation.** A $C^{1,2}$ function satisfies
   $\partial_tf+Lf=0$ on an open set exactly when it is space-time harmonic
   there in the sense of
   [[thm-space-time-harmonic-functions-yield-brownian-local-martingales]].
   This names the differential equation only; a martingale consequence
   requires a separate stochastic theorem. The later Dynkin formula uses
   this notation for its compensator. In dimension one $Lf=\tfrac12 f''$,
   the second-order expression appearing in
   [[thm-ito-formula-one-dimensional]].
4. **Constant and scaling conventions.** $L$ is linear, $Lf=0$ for affine
   functions, and $L(cf)=c\,Lf$; the operator is determined by the second
   derivatives only and is invariant under adding affine functions to $f$. All
   derivatives are ordinary partial derivatives; no weak or distributional
   interpretation is used, so every application of $L$ in this development
   verifies that the function is twice continuously differentiable where the
   operator is applied.

No choice principle is used in the definition itself: $L$ is an explicit
differential expression applied to given functions. The Axiom of Choice is
declared because the theorems that use $L$ on this page invoke the
conditional-expectation and $L^2$ interfaces, and the
inherited countable-choice obligations of those interfaces are declared as
dependencies of this item.
