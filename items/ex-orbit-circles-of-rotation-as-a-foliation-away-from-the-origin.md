---
id: ex-orbit-circles-of-rotation-as-a-foliation-away-from-the-origin
kind: example
title: "Orbit circles of rotation as a foliation away from the origin"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-frobenius-local-coordinate-theorem,
       thm-regular-foliations-and-integrable-distributions-correspond,
       prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure,
       thm-fundamental-theorem-on-flows]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Example

On $\mathbb R^2 \setminus \{0\}$, the rotation field
$$X = -y\partial_x + x\partial_y$$
is nowhere zero. Its flow is rotation about the origin, so its leaves are the
circles centered at the origin. The origin is excluded because there the field
vanishes and the rank drops.

## Facts & Assumptions

**Given:** The rotation vector field on the punctured plane.

[A1] Its flow preserves the radius function $r^2 = x^2 + y^2$.

## Verification

**Proof technique:** direct.

1.1 The field is nowhere zero on $\mathbb R^2 \setminus \{0\}$, so it defines a [given]
regular one-dimensional distribution there. [given]

1.2 Along the flow, [given]
$$X(x^2 + y^2) = 2x(-y) + 2y(x) = 0,$$
so the radius is constant on every orbit. The orbits are therefore contained in
circles about the origin, and conversely each such circle is an orbit. [given,
algebra]

1.3 Hence the punctured plane is foliated by the rotation circles. At the [given]
origin the field vanishes, so the regular rank-one hypothesis fails there.
[given] ∎
