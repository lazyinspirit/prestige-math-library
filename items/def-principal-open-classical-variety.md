---
id: def-principal-open-classical-variety
kind: definition
title: "A principal open subset of a classical affine variety"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-affine-variety-classical
  - def-coordinate-ring-affine-algebraic-set
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Definition 3.8"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, localization discussion after Lemma 1.6.3"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
---

## Definition

Let $X$ be a classical affine variety over an algebraically closed field $k$,
and let $\overline f\in k[X]$. The **principal open subset** determined by
$\overline f$ is
$$ D_X(\overline f):=\{x\in X:\overline f(x)\ne0\}. $$

If $f\in k[x_1,\ldots,x_n]$ is any representative of $\overline f$, then
$D_X(\overline f)$ depends only on the class $\overline f$, not on the chosen
representative. Its boundary cases are
$$ D_X(0)=\varnothing \qquad\text{and}\qquad D_X(1)=X. $$
