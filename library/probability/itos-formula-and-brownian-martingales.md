---
page: itos-formula-and-brownian-martingales
title: Itos Formula and Brownian Martingales
status: published
items:
  - def-continuous-brownian-ito-process
  - def-quadratic-covariation-of-brownian-ito-processes
  - thm-quadratic-covariation-of-brownian-ito-processes
  - thm-integration-by-parts-for-brownian-ito-processes
  - thm-ito-formula-one-dimensional
  - thm-multidimensional-ito-formula-for-brownian-driven-processes
  - cor-brownian-square-martingale
  - cor-exponential-brownian-martingale
  - thm-space-time-harmonic-functions-yield-brownian-local-martingales
  - cor-heat-semigroup-martingale
  - lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t
  - thm-levy-characterization-of-brownian-motion
  - cor-vector-levy-characterization
  - def-brownian-generator
  - thm-dynkin-formula-for-bounded-brownian-stopping
  - rem-ito-versus-stratonovich-boundary
  - rem-general-semimartingale-calculus-is-outside-this-block
  - lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two
  - thm-brownian-filtration-martingale-representation
  - cor-square-integrable-brownian-terminal-variables-have-ito-representations
  - cor-brownian-filtration-local-martingales-have-continuous-versions
examples: []
---

The page fixes the class of continuous Brownian Ito processes
[[def-continuous-brownian-ito-process]] and defines their quadratic
covariation along deterministic partition sequences
[[def-quadratic-covariation-of-brownian-ito-processes]]. The covariation
theorem [[thm-quadratic-covariation-of-brownian-ito-processes]] computes
$[X^i,X^j]_t=\int_0^t(\sigma\sigma^{\mathsf T})^{ij}_sds$ and shows that
finite-variation parts contribute nothing, after which integration by parts
[[thm-integration-by-parts-for-brownian-ito-processes]] and the one- and
multidimensional Ito formulas
[[thm-ito-formula-one-dimensional]]
[[thm-multidimensional-ito-formula-for-brownian-driven-processes]] express the
increment of a composed process through the drift, the Hessian term and the
stochastic integral. The square and exponential identities
[[cor-brownian-square-martingale]] [[cor-exponential-brownian-martingale]] are
the first consequences, and the space-time harmonic and heat-semigroup
statements [[thm-space-time-harmonic-functions-yield-brownian-local-martingales]]
[[cor-heat-semigroup-martingale]] exhibit the martingales produced by the
generator.

The characteristic exponential of a continuous local martingale with
deterministic clock [[lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t]]
produces the Levy and vector Levy characterizations
[[thm-levy-characterization-of-brownian-motion]]
[[cor-vector-levy-characterization]], the Brownian generator is defined as the
differential operator $Lf=\tfrac12\Delta f$
[[def-brownian-generator]], and Dynkin's formula
[[thm-dynkin-formula-for-bounded-brownian-stopping]] integrates that operator
along a bounded stopping window. Two remarks delimit the scope of the block:
the Ito--Stratonovich convention boundary
[[rem-ito-versus-stratonovich-boundary]] and the exclusion of jumps, general
semimartingales, change of measure, stochastic differential equations, local
time and stochastic geometry
[[rem-general-semimartingale-calculus-is-outside-this-block]].

The closing items prove Brownian-filtration martingale representation. A closed
$L^2$ subspace with trivial orthogonal complement fills the space
[[lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two]]; the
representation theorem [[thm-brownian-filtration-martingale-representation]]
identifies the range of the terminal Ito integral with the mean-zero
$L^2(\mathcal F_T)$ and represents every cadlag local martingale by
$M_0+\int H\,dB$ for a predictable locally square-integrable $H$. The
square-integrable terminal representation and the continuity of local
martingales in the usual Brownian filtration are the corollaries
[[cor-square-integrable-brownian-terminal-variables-have-ito-representations]]
[[cor-brownian-filtration-local-martingales-have-continuous-versions]].
