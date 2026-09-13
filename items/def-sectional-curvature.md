---
id: def-sectional-curvature
kind: definition
title: Sectional curvature
status: draft
origin: pipeline
deps: ["def-countable-choice","def-riemann-curvature-four-tensor","thm-algebraic-symmetries-of-the-riemann-tensor"]
justified_by: ["lem-sectional-curvature-is-independent-of-the-basis-of-the-plane"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Definition 12.1.3 and Example 12.1.4, printed pages 82–83
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 8, Proposition 8.8, printed page 146
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[thm-algebraic-symmetries-of-the-riemann-tensor]]; after those interfaces are fixed, the remaining local or finite argument makes no additional countable-family choice.

Let $\sigma\subseteq T_pM$ be a two-dimensional linear subspace and let
$(X,Y)$ be any ordered basis of $\sigma$. Its **sectional curvature** is

$$K(\sigma):=\frac{\operatorname{Rm}(X,Y,Y,X)}{g(X,X)g(Y,Y)-g(X,Y)^2}.$$

The denominator is the Gram determinant of the independent pair $(X,Y)$ and
is strictly positive because $g$ is positive definite. The next lemma proves
that the quotient is unchanged by the chosen ordered basis. With the sign
convention fixed above, an orthonormal tangent two-plane in the unit round
sphere has sectional curvature $+1$.

There are no tangent two-planes in dimensions zero or one, so the definition
has empty domain there rather than assigning a spurious value. No plane exists
on an empty manifold either. The same fibrewise definition applies at a
boundary point.
