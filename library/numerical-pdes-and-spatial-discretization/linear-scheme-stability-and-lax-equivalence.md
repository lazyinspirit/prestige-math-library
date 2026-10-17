---
page: linear-scheme-stability-and-lax-equivalence
title: "Linear scheme stability and Lax equivalence"
status: published
items:
  - def-common-space-linear-scheme-interface
  - thm-diagonal-heat-semigroup-on-c-zero
  - def-finite-grid-common-space-lift
  - thm-lax-equivalence-for-common-banach-space-schemes
  - lem-grid-stability-transfers-under-uniform-norm-comparison
examples: []
---

This page defines a common Banach-space interface for a well-posed autonomous
linear initial-value problem and its time-stepping family. Consistency is
checked on a dense invariant subspace; convergence and stability use one common
norm and uniform finite-time bounds. The Lax equivalence proof gives the
Duhamel error sum in the stable-to-convergent direction and uses the
DC-qualified Banach–Steinhaus theorem in the reverse direction. Finite-grid
restriction and reconstruction are explicit: a grid-norm stability claim
reaches the common space under the sufficient uniform operator and
norm-comparison bounds of the transfer lemma. Spectral-radius or CFL tests
alone do not replace that power bound.
