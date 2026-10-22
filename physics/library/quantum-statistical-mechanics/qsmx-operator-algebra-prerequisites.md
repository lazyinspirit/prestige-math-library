---
page: qsmx-operator-algebra-prerequisites
title: Von Neumann closure, standard vectors and modular analytic tools
status: published
library: physics
items:
  - def-qsmx-von-neumann-algebra
  - def-qsmx-conjugate-hilbert-space-and-antilinear-adjoint
  - lem-qsmx-trace-class-duality
  - lem-qsmx-linear-closed-polar-decomposition
  - lem-qsmx-bicommutant-and-commutant-cyclicity
  - lem-qsmx-monotone-bounded-positive-net
  - lem-qsmx-closed-antilinear-polar-calculus
  - lem-qsmx-von-neumann-predual
examples: []
requires:
  - qsm-quasilocal-states
  - unbounded-self-adjoint-operators-and-stones-theorem
  - measurable-hilbert-fields-and-direct-integral-operators
  - relations-functions-and-quotients
  - direct-integral-decomposition-and-type-i-groups
  - compact-self-adjoint-hilbert-schmidt-and-trace-class-operators
  - banach-alaoglu-goldstine-and-krein-milman
  - weak-and-weak-star-topologies
  - peter-weyl-theory-for-general-compact-groups
  - dual-spaces-adjoint-operators-and-annihilators
  - filters-and-ultrafilters
companion: qsmx-operator-algebra-prerequisites-examples
---

This page fixes the concrete representation conventions used by the later
modular-equilibrium page. Hilbert-space inner products are linear in the first
argument, commutants are taken in the bounded operators, and the Axiom of
Choice is stated where the double-commutant, projection, and compactness
arguments use it. A cyclic GNS vector is not assumed to be separating.

The A page supplies the local operator algebra needed for those claims. It
proves the finite-tuple projection argument for strong closure and the
cyclic-separating duality between an algebra and its commutant. It also proves
bounded monotone strong convergence in a concrete von Neumann algebra, then
constructs its predual as a quotient of trace-class operators. The polar
calculus first proves the closed densely defined linear case from the graph
projection and spectral theorem, then transfers it to antilinear operators.

The antilinear polar statement is applied to the graph closure of a closable
operator. No identity between an operator and its closure is asserted for a
merely closable operator. The Tomita operator on $M\Omega$ is proved
well-defined, densely defined, and closable from cyclic-separating hypotheses;
its later modular data use this closure.
