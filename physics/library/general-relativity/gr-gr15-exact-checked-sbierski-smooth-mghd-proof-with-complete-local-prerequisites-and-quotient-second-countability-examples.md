---
requires:
  - gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability
  - gr-causal-and-initial-value-boundaries
  - gr-connections-and-free-fall
  - gr-framework-and-geometry
  - gr-gr13-convex-normal-neighborhoods
page: gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability-examples
title: "Gr15 Exact Checked Sbierski Smooth Mghd Proof With Complete Local
  Prerequisites And Quotient Second Countability — Examples"
status: draft
library: physics
items: []
examples:
  - ex-gr-minkowski-maximal-development
  - ex-gr-translated-minkowski-common-development
  - ex-gr-flat-restart-level-set
  - ex-gr-minkowski-rational-dense-and-basis
---

This page collects worked checks for
[[gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability]].

**Flat maximal development.** [[ex-gr-minkowski-maximal-development]] verifies
that the maximal development of the flat vacuum data is Minkowski spacetime:
the slice $\{t=0\}$ is a Cauchy surface with the prescribed data and the
maximality theorem supplies an embedding into the maximal development. Completeness of the explicit Minkowski geodesics and the target Cauchy surface show that this embedding is onto, giving the asserted unique data-fixing isometry.

**A nontrivial common development.** 
[[ex-gr-translated-minkowski-common-development]] computes the common
development of the same flat data embedded at two different times: the
common subdevelopment is the whole manifold via a time translation, it is the
maximal one, and the glued quotient of
[[lem-gr-development-pair-gluing]] is isometric to Minkowski spacetime itself.

**The restart hypersurface explicitly.** [[ex-gr-flat-restart-level-set]]
realizes the level set $S=\{\tau_q=\tau_0\}$ of the time separation from a
point in Minkowski spacetime and checks the structural clauses of
[[lem-gr-spacelike-restart-hypersurface]] in closed form.

**The countable basis.** 
[[ex-gr-minkowski-rational-dense-and-basis]] runs the dense-set recursion of
[[lem-gr-development-quotient-dense-set]] in flat coordinates and identifies
the resulting exponential family with the standard rational balls, the
countable basis underlying
[[lem-gr-development-quotient-second-countable]].
