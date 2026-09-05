---
id: def-leaf-of-a-regular-foliation
kind: definition
title: "Leaves of a regular foliation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-regular-foliation-atlas]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Definition

Given a regular foliation atlas on $M$, call each connected component of a
slice

$$\varphi^{-1}\bigl(\varphi(U)\cap(\mathbb R^k\times\{c\})\bigr)$$

an **atlas plaque**. Declare two points equivalent when they can be joined by a
finite chain of atlas plaques in which consecutive plaques intersect. A
**leaf** is an equivalence class for this plaque-chain relation. Thus a leaf is
the underlying subset obtained by continuing one local plaque through
overlapping foliation charts, not an arbitrary connected union of distinct
leaves. This item defines only that underlying subset; it does not yet assign
the subset an intrinsic smooth manifold structure.
