---
id: ex-parabola-is-affine-line
kind: example
title: "The parabola y=x^2 has coordinate ring k[t] and isomorphic intrinsic geometry to the affine line"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-coordinate-ring-affine-algebraic-set
  - thm-universal-property-of-a-polynomial-ring
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Example 2.29 and Chapter 3g"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, affine examples in Chapter 1"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
---

## Example

Let $k$ be an algebraically closed field and let
$$ X=V(y-x^2)\subseteq \mathbf A_k^2. $$
Division by the monic polynomial $y-x^2$ in the variable $y$ writes every
$f\in k[x,y]$ uniquely as
$$f=q(y-x^2)+r(x).$$
If $f$ vanishes on $X$, then $r(t)=f(t,t^2)=0$ for every $t\in k$. The field
$k$ is infinite, so $r=0$ and $f\in(y-x^2)$. Hence $I(X)=(y-x^2)$ and
$$ k[X]=k[x,y]/(y-x^2). $$
Define $\phi:k[t]\to k[X]$ by $\phi(t)=\overline x$. By the universal property
of the polynomial ring, this is a $k$-algebra homomorphism, and every element
of $k[X]$ can be written using only $\overline x$ because
$\overline y=\overline x^{\,2}$.

Conversely, define $\psi:k[X]\to k[t]$ on polynomial classes by substituting
$x\mapsto t$ and $y\mapsto t^2$. The relation $y-x^2$ maps to $0$, so $\psi$ is
well defined. The composites satisfy
$$ \psi(\phi(t))=t,\qquad \phi(\psi(\overline x))=\overline x,\qquad \phi(\psi(\overline y))=\phi(t^2)=\overline x^{\,2}=\overline y, $$
so $\phi$ and $\psi$ are inverse isomorphisms. Hence
$$ k[X]\cong k[t]=k[\mathbf A_k^1]. $$

Set-theoretically, the maps
$$ t\longmapsto (t,t^2),\qquad (x,y)\longmapsto x $$
identify $X$ with the affine line, showing that the parabola is cut out by a
nontrivial equation in the plane but has the same intrinsic affine geometry as
$\mathbf A_k^1$.
