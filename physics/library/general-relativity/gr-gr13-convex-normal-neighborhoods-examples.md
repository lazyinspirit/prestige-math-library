---
requires:
  - gr-gr13-convex-normal-neighborhoods
  - gr-causal-and-initial-value-boundaries
  - gr-connections-and-free-fall
  - gr-framework-and-geometry
page: gr-gr13-convex-normal-neighborhoods-examples
title: "Gr13 Convex Normal Neighborhoods — Examples"
status: published
library: physics
items: []
examples:
  - ex-gr-flat-cone-bump-explicit
  - ex-gr-null-legs-corner-push-up
  - ex-gr-flat-slab-explicit-splitting
  - cex-gr-flat-slab-coordinate-time-flow-incomplete
---

This page collects worked computations and one countermodel for
[[gr-gr13-convex-normal-neighborhoods]], all in the flat model of the earlier
causal page.

**Explicit cone bump.** [[ex-gr-flat-cone-bump-explicit]] computes the
cone-bump construction of [[lem-gr-cone-bump-functions]] in inertial
coordinates: the exponential cone function $Q$, the smoothed bump
$f=\varphi\circ Q$, its past timelike gradient on the chronological future of
the base point, and the normalized compactly supported bump
$h_p=\chi f/f(p)$.

**Push-up and null corners.** [[ex-gr-null-legs-corner-push-up]] composes two
non-parallel null legs into a future timelike displacement and verifies the
strict conclusion of the push-up rule [[lem-gr-push-up-rule]] by an explicit
future timelike curve, contrasting the parallel case in which the composite
displacement stays null.

**Explicit smooth splitting.** [[ex-gr-flat-slab-explicit-splitting]] exhibits
the rational temporal function $T=t/(1-t)-1/t+1$ on the flat slab
$(0,1)\times\mathbb R^3$, computes its past timelike gradient, its Cauchy
levels, the complete flow of its normalized gradient field
$X=\nabla T/g(\nabla T,\nabla T)$ with explicit inverse and the orthogonal
product $g=-\beta\,dT\otimes dT+h_T$, verifying the conclusions of
[[thm-gr-smooth-cauchy-temporal-splitting]] in a model.

**Completeness is not automatic.**
[[cex-gr-flat-slab-coordinate-time-flow-incomplete]] shows that the
coordinate time on the same globally hyperbolic slab has Cauchy levels but an
incomplete normalized gradient flow, so the completeness clause of the splitting theorem
is a property of the constructed temporal function and not of an arbitrary
one.
