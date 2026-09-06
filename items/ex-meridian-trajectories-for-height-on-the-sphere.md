---
id: ex-meridian-trajectories-for-height-on-the-sphere
kind: example
title: "Meridian trajectories for height on the sphere"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: []
justified_by: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, §13.1"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
---

## Example

On the round $S^2\subset\mathbb R^3$, let $f(x,y,z)=z$. The intrinsic gradient
is $\operatorname{grad}f=e_z-z(x,y,z)$, so the negative gradient is
$z(x,y,z)-e_z$. Its nonconstant orbits are the meridians from the north pole to
the south pole.

## Verification

**Given:** The round unit sphere and the height function $f(x,y,z)=z$.

1.1 The tangential projection of $e_z$ is $e_z-z(x,y,z)$, so the displayed vector field is the negative gradient. Along it, $\dot z=z^2-1<0$ whenever $|z|<1$. [given, algebra]

2.1 The longitude is constant along the flow, while $z$ decreases from $1$ to $-1$. Therefore every nonpolar longitude gives a meridian from north to south, a one-parameter family before quotienting by time translation. [step 1.1] ∎
