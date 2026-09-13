---
id: def-scalar-curvature
kind: definition
title: Scalar curvature
status: published
origin: pipeline
deps: ["def-countable-choice","lem-ricci-curvature-is-symmetric-and-basis-independent","def-contraction-of-a-mixed-tensor","thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Definition 12.2.3, printed page 86
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 7, Ricci and Scalar Curvatures, printed pages 124–125
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[lem-ricci-curvature-is-symmetric-and-basis-independent]]; after those interfaces are fixed, the remaining local or finite argument makes no additional countable-family choice.

Use the inverse metric to raise the first covariant index of
$\operatorname{Ric}$, obtaining the endomorphism
$\operatorname{Ric}^{\sharp}:T_pM\to T_pM$ characterized by

$$g_p(\operatorname{Ric}^{\sharp}X,Y)=\operatorname{Ric}_p(X,Y).$$

The **scalar curvature** is the smooth function

$$S(p):=\operatorname{tr}(\operatorname{Ric}^{\sharp}_p)=\operatorname{tr}_g\operatorname{Ric}_p.$$

The musical isomorphism makes $\operatorname{Ric}^{\sharp}$ well-defined and
smooth, and tensor contraction makes its trace intrinsic. In any orthonormal
basis $(e_1,\ldots,e_n)$ of $T_pM$, the metric dual basis is
$(g_p(e_i,\mathord\cdot))$, so

$$S(p)=\sum_{i=1}^n\operatorname{Ric}_p(e_i,e_i).$$

Thus the displayed sum is independent of the orthonormal basis. In dimension
zero it is the empty sum $0$; on an empty manifold it is the unique empty
smooth function. The definition is unchanged in dimension one or at boundary
points. Positive definiteness excludes a degenerate metric, and fixing a
single finite basis at an arbitrary point requires no global choice.
