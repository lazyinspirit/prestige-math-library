---
page: sr-spacetime-primitives-examples
title: "Spacetime Primitives — Examples"
status: draft
library: physics
items: []
examples:
  - ex-sr-causal-classification-computation
  - ex-sr-orthogonal-complement-of-a-timelike-vector
  - ex-sr-affine-chart-transition
  - ex-sr-constructing-an-oriented-inertial-frame
  - ex-sr-volume-form-component-signs
  - cex-sr-lorentz-form-is-not-an-inner-product
  - cex-sr-causal-vectors-are-not-closed-under-addition
  - cex-sr-orthogonal-complement-of-a-null-vector-is-not-positive-definite
---

These examples and counterexamples work the spacetime primitives of
[[sr-spacetime-primitives]] on explicit numbers and signs. The five inertial
displacements $(1,1,0,0)$, $(2,1,0,0)$, $(1,2,0,0)$, $(-1,1,0,0)$ and
$e_0=(1,0,0,0)$ are classified as future null, future timelike, spacelike, past
null and future timelike ([[ex-sr-causal-classification-computation]]), and the
orthogonal complement of the timelike displacement $(2,1,0,0)$ is verified to
be positive definite ([[ex-sr-orthogonal-complement-of-a-timelike-vector]]).
The affine transition between two inertial charts is computed in general and
then on the boost family
$(\cosh r,\sinh r),(\sinh r,\cosh r)$ with all frame conditions checked
([[ex-sr-affine-chart-transition]]), and the sign and orientation adjustments
that turn an arbitrary orthonormal basis into a future-oriented inertial frame
are exhibited ([[ex-sr-constructing-an-oriented-inertial-frame]]). The volume
form components $\epsilon_{0123}=+1$, $\epsilon_{0213}=-1$,
$\epsilon_{2301}=\epsilon_{3210}=+1$ and $\epsilon^{0123}=-1$ are computed from
permutation signs ([[ex-sr-volume-form-component-signs]]).

Three refutations separate the Lorentz form from the positive-definite theory:
$\eta$ is not an inner product, because a nonzero basis vector has
$\eta(e_0,e_0)=-1$ ([[cex-sr-lorentz-form-is-not-an-inner-product]]); the
causal vectors are not closed under addition, the explicit future timelike
$(1,0,0,0)$ plus past timelike $(-1,9/10,0,0)$ being spacelike
([[cex-sr-causal-vectors-are-not-closed-under-addition]]); and the orthogonal
complement of the null vector $(1,1,0,0)$ is positive semidefinite with kernel
$\operatorname{span}(u)$ rather than positive definite
([[cex-sr-orthogonal-complement-of-a-null-vector-is-not-positive-definite]]).
Each witness is an explicit computation from the definitions of the A page,
and the last two are contrasted there with their timelike case.
