---
id: ex-polynomial-map-coordinate-pullback
kind: example
title: "A polynomial map and its pullback on coordinate rings"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-coordinate-ring-affine-algebraic-set, def-morphism-classical-varieties, thm-affine-morphisms-coordinate-ring-anti-equivalence]
justified_by: []
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Examples 3.29-3.30"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Example

Let $X=\mathbf A_k^2$ with coordinates $s,t$, and let
$$ Y=V(y-x^2)\subseteq \mathbf A_k^3. $$
Define
$$ \varphi:X\to Y,\qquad (s,t)\longmapsto (s,s^2,t). $$

The point lies in $Y$ because its coordinates satisfy $y-x^2=s^2-s^2=0$.
Therefore $\varphi$ is a morphism. Since
$$ k[Y]=k[x,y,z]/(y-x^2), $$
the induced pullback sends
$$ x\mapsto s,\qquad y\mapsto s^2,\qquad z\mapsto t. $$
The defining relation pulls back to $s^2-s^2=0$, so the homomorphism respects
the quotient relation exactly as the affine-morphism theorem predicts.
