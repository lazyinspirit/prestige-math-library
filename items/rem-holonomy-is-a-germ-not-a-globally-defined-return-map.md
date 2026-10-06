---
id: rem-holonomy-is-a-germ-not-a-globally-defined-return-map
kind: remark
title: "Holonomy is a germ, not a globally defined return map"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 5
deps:
  - lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism
  - lem-holonomy-germ-is-independent-of-the-foliation-chart-chain
  - def-holonomy-representation-and-holonomy-group-of-a-leaf
  - def-countable-choice
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes)"
      url: "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf"
    - title: "Eckhard Meinrenken, Lie Groupoids and Lie Algebroids, lecture notes (University of Toronto MAT1341, Fall 2017)"
      url: "https://www.math.toronto.edu/mein/teaching/MAT1341_LieGroupoids/Groupoids.pdf"
verification:
  precheck: n/a
---

## Remark

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). The
holonomy of a leafwise path is a germ of a local diffeomorphism between local
transversals, not a globally defined return map: a representative is defined
only on some open neighbourhood of the base point in the transversal, and
different representatives of the same germ may differ arbitrarily far from that
point. Indeed, the construction of
[[lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism]] composes
finitely many chart transports, each of which is produced by the inverse
function theorem on a neighbourhood of one point of the path; the resulting
map is defined only on a neighbourhood of the base point, and
[[lem-holonomy-germ-is-independent-of-the-foliation-chart-chain]] compares only
germs, so nothing in the construction defines values away from the base point,
and no global continuation is asserted.

The Poincaré return map of a periodic orbit of a flow is the special case in
which the first-return construction defines a map on a fixed section; that is
additional structure, not part of the general definition. Statements about
"the" return map along a leaf loop must therefore be read as statements about
the holonomy germ, as in
[[def-holonomy-representation-and-holonomy-group-of-a-leaf]], where only the
germ $\rho_x([a])=h_{a^{-1}}(T,T)$ is used.
