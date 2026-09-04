---
id: ex-coordinate-cross-reducible
kind: example
title: "The coordinate cross V(xy) is reducible and its coordinate ring has zero divisors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-coordinate-ring-affine-algebraic-set
  - thm-zariski-closed-sets-affine-space
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Example 2.29"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, affine-variety examples"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
---

## Example

Let $k$ be an algebraically closed field and let
$$ X=V(xy)\subseteq \mathbf A_k^2. $$
By [[thm-zariski-closed-sets-affine-space]],
$$ V(xy)=V(x)\cup V(y), $$
so $X$ is the union of the two coordinate axes. Each axis is a proper closed
subset of $X$, hence $X$ is reducible.

If a polynomial $f\in k[x,y]$ vanishes on $X$, then $f(x,0)$ vanishes at every
element of the infinite field $k$, so it is the zero polynomial and $y$ divides
$f$. Likewise, $f(0,y)=0$ identically, so $x$ divides $f$. Since $x$ and $y$
are coprime, $xy$ divides $f$. Thus $I(X)=(xy)$.

Its coordinate ring is
$$ k[X]=k[x,y]/(xy). $$
The classes $\overline x$ and $\overline y$ are both nonzero: for instance,
$x$ does not vanish at $(1,0)$ and $y$ does not vanish at $(0,1)$, so neither
lies in the ideal $(xy)$. But
$$ \overline x\,\overline y=\overline{xy}=0. $$
Thus $k[X]$ has zero divisors, exactly as the irreducible-domain criterion
predicts.
