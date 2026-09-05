---
id: ex-rational-parametrization-circle-conic
kind: example
title: "When char(k) is not 2, the affine circle x^2 + y^2 = 1 is birational to the affine line"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-birational-equivalence-varieties, def-rational-map-varieties, def-ring-characteristic]
justified_by: []
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, birational examples in Chapter 5l"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, rational-function examples in §3.1-§3.2"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
---

## Example

Assume $\operatorname{char}(k)\ne2$, and let
$$ C:=V(x^2+y^2-1)\subseteq \mathbf A_k^2. $$
The line through $(-1,0)$ of slope $t$ meets $C$ again at
$$ x=\frac{1-t^2}{1+t^2},\qquad y=\frac{2t}{1+t^2}. $$
This gives a rational map $\mathbf A^1 \dashrightarrow C$.

On the dense open subset of $C$ where $x\ne-1$, the inverse parameter is
$$ t=\frac{y}{x+1}. $$
Substituting the displayed parametrization shows that these two formulas are
mutually inverse on the common domain where $1+t^2\ne0$ and $x+1\ne0$. Thus the
affine circle is birational to the affine line.
