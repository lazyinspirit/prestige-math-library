---
page: cm-math-continuum-examples
title: Cm Math Continuum — Examples
status: draft
items: []
examples:
  - ex-cm-transport-of-a-translating-uniform-flow
  - ex-cm-elastic-plane-wave-speeds-and-energy
  - ex-cm-string-modes-and-tail-constants
  - cex-cm-sine-tail-bound-fails-for-rough-data
  - ex-cm-burgers-riemann-checks
  - ex-cm-couette-poiseuille-numbers
  - ex-cm-spring-chain-mode-and-limit-check
requires:
  - cm-math-continuum
  - cm-math-geometry
---

Worked checks and one scope counterexample for the continuum layer. Each item
is a finite or parametric verification of a statement proved on
[[cm-math-continuum]]; none of them is a prerequisite of any result on that
page.

[[ex-cm-transport-of-a-translating-uniform-flow]] evaluates the transport
theorem on a uniform translation with a travelling profile,
[[ex-cm-elastic-plane-wave-speeds-and-energy]] checks the longitudinal
plane-wave dispersion and the two expressions for the strain energy at
explicit parameters, and [[ex-cm-couette-poiseuille-numbers]] substitutes
numbers into the channel-flow formulas. For the wave layer,
[[ex-cm-string-modes-and-tail-constants]] works the first sine mode with
matched velocity data and evaluates the general tail constant, while
[[cex-cm-sine-tail-bound-fails-for-rough-data]] refutes the hypothesis-free
$O(N^{-4})$ tail statement with a $C^1$ datum whose coefficients are $n^{-3}$.
[[ex-cm-burgers-riemann-checks]] inherits countable choice from the Lebesgue weak formulation and evaluates the shock entropy coefficient in
its interior and exterior cases and checks a rarefaction branch, and
[[ex-cm-spring-chain-mode-and-limit-check]] verifies the discrete dispersion
value and the continuum error bound at a four-node mode.
