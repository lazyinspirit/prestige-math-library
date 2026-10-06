---
page: "plane-curves-local-intersection-multiplicity-and-bezout-examples"
title: "Plane Curves, Local Intersection Multiplicity, and Bézout — Examples"
status: published
items: []
examples:
  - cex-common-component-bezout-sum-not-finite
  - cex-real-bezout-needs-algebraic-closure
  - ex-cusp-line-intersection-multiplicities
  - ex-node-line-intersection-branches
  - cex-affine-bezout-misses-points-at-infinity
  - ex-line-conic-two-intersections
  - ex-two-plane-cubics-nine-points
  - ex-tangent-line-conic-double-intersection
  - cex-distinct-point-count-needs-multiplicity
  - ex-flex-cubic-contact-order-three
---

The examples and counterexamples compute local intersection multiplicities and
exhibit each hypothesis of Bézout's theorem as necessary. The line $x_0=0$ is a
common component of $V(x_0)$ and $V(x_0x_1)$, so the local multiplicities along
it are infinite and the intersection sum is not finite. The imaginary conic
$x_0^2+x_1^2+x_2^2$ meets the line $x_1=0$ in two conjugate non-real points, so
the count of real intersection points is zero while the complex count is the
full degree total. At the cusp $y^2=x^3$ the tangent line meets the curve with
multiplicity three and the transverse line $x=0$ with multiplicity two; at the
node $y^2=x^2(x+1)$ in characteristic $\ne2$ each tangent line has contact
multiplicity three and other
lines through the node meet it with multiplicity two. The parallel affine lines
$x=0$ and $x=1$ are disjoint while their projective closures meet at a point at
infinity, in characteristic $\ne3$ the cubic and triangle examples verify the
nine-point transverse count $3\cdot3$, and a tangent line to a conic shows a single distinct
intersection point carrying multiplicity two. The last item records the
flex $[1:-1:0]$ of the Fermat cubic in characteristic $\ne3$, where the
tangent line restricts to $x_2^3$ and contact order three is visible in homogeneous coordinates.
