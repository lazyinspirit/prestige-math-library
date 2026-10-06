---
id: lem-product-cobordisms-have-critical-point-free-presentations
kind: lemma
title: "Product cobordisms have critical-point-free presentations"
status: draft
origin: pipeline
dependency_level: 2
deps: [def-smooth-cobordism-triad-for-morse-theory, def-morse-function-adapted-to-a-cobordism, def-handle-decomposition-relative-to-the-incoming-boundary, prop-deformation-lemma-for-a-critical-point-free-slab, thm-collar-neighborhood-theorem, def-closed-sublevel-and-level-set-of-a-smooth-function, def-countable-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156), Sections 5.1-5.4, printed pp. 129-148"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Sections 2-4, printed pp. 10-48"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
proof_strategy: "submersion projection and the regular interval theorem"
---


## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a compact smooth manifold without boundary, including the empty manifold. For the triad $W=M\times[0,1]$, $M_0=M\times\{0\}$, $M_1=M\times\{1\}$, the projection $\pi$ is adapted excellent with no critical points. The cylinder has the empty handle decomposition relative to $M_0$.

## Facts & Assumptions

[F1] [[def-smooth-cobordism-triad-for-morse-theory]] requires $\partial W=M_0\sqcup M_1$.

[F2] [[def-morse-function-adapted-to-a-cobordism]] uses completeness on a boundaryless collar extension.

[F3] [[def-handle-decomposition-relative-to-the-incoming-boundary]] permits the empty list, presenting the incoming collar.

## Proof

**Given:** The compact boundaryless $M$ and its cylinder.

1.1 The product is a smooth manifold with exactly the two boundary faces. Its projection has differential $dt\ne0$, endpoint fibres exactly $M_0,M_1$, and no critical points. The field $X=-\partial_t$ is descending, outward at $M_0$ and inward at $M_1$; the complete translation field on $M\times\mathbb R$ restricts to $X$. Thus the pair is adapted and excellence is vacuous. [F1, F2, given, construct]

2.1 The map $(x,t)\mapsto((x,0),t)$ identifies $W$ with the incoming collar, fixing $M_0$. Rescaling the interval gives any positive collar length in [F3], so the empty handle list presents $W$. The same formulas give the empty presentation when $M=\varnothing$. A product with $\partial M\ne\varnothing$ has an additional side face and is outside this triad convention. [F3, step 1.1, construct] ∎
