---
id: ex-hyperbola-is-multiplicative-group-variety
kind: example
title: "The hyperbola xy = 1 is isomorphic to the punctured affine line"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-principal-open-classical-variety, thm-coordinate-ring-principal-open, thm-affine-variety-prime-coordinate-ring]
justified_by: []
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Propositions 3.26 and 3.32"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Notes for a Course in Algebraic Geometry, §2.5"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
---

## Example

Assume the Axiom of Choice and let $k$ be an algebraically closed field. Let
$$ H:=V(xy-1)\subseteq \mathbf A_k^2. $$
The substitutions $x\mapsto t$, $y\mapsto t^{-1}$ and
$t\mapsto x$, $t^{-1}\mapsto y$ define inverse $k$-algebra homomorphisms
$$ k[H]=k[x,y]/(xy-1)\cong k[t,t^{-1}]. $$
The Laurent polynomial ring is a domain, so
[[thm-affine-variety-prime-coordinate-ring]] shows that $H$ is a classical
affine variety.

Give $D_{\mathbf A^1}(t)$ its principal-open regular-function structure.
Projection to the first coordinate gives a morphism
$$ p:H\to D_{\mathbf A^1}(t),\qquad (x,y)\mapsto x, $$
because the coordinate function $x$ is regular and can never be $0$ on $H$.

Conversely,
$$ q:D_{\mathbf A^1}(t)\to H,\qquad u\mapsto (u,u^{-1}) $$
is regular on the principal open $D_{\mathbf A^1}(t)$, since $u^{-1}$ is regular
there by [[thm-coordinate-ring-principal-open]], and its coordinates satisfy
$u\cdot u^{-1}=1$, so it lands in $H$. Direct substitution gives
$$ p(q(u))=u\qquad\text{and}\qquad q(p(x,y))=(x,x^{-1})=(x,y), $$
where the last equality uses $xy=1$. Thus $p$ and $q$ are inverse regular maps.
They exhibit $H$ as the affine model of the punctured line and realize the
displayed coordinate-ring isomorphism.
