---
id: cex-a-continuous-map-need-not-be-simplicial-before-subdivision
kind: counterexample
title: "A continuous map need not be simplicial before subdivision"
status: published
origin: pipeline
deps: ["lem-the-open-star-criterion-produces-a-simplicial-map", "thm-finite-simplicial-approximation-for-maps-of-pairs"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "C. R. F. Maunder, Algebraic Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/maunder.pdf"
---

## Statement refuted

False assertion: every continuous self-map of a geometric edge is the realization of a simplicial self-map in the original triangulation.

## Source locators

2.5.1–2.5.6 pp.46–48.


## Facts & Assumptions

[F1] A star approximation is homotopic to the continuous map. [[lem-the-open-star-criterion-produces-a-simplicial-map]].

[F2] Finite-source approximation gives a simplicial representative after sufficient subdivision. [[thm-finite-simplicial-approximation-for-maps-of-pairs]].


## Counterexample

**Given:** The edge $[0,1]$ with vertices exactly $0,1$, and $f(x)=x^2$.

1.1 The map takes $[0,1]$ into itself, fixes both vertices, and is continuous: $|x^2-y^2|=|x-y||x+y|\leq2|x-y|$ on this interval. Any simplicial map whose realization equals $f$ must therefore send $0$ to $0$ and $1$ to $1$. Its affine realization on the single edge must be $(1-x)0+x1=x$. [given]

2.1 At $x=1/2$ this affine map equals $1/2$, while $f(1/2)=1/4$. Hence $f$ is not simplicial in the original triangulation, refuting the assertion. Nevertheless the identity vertex map is a star approximation: $f([0,1))\subseteq[0,1)$ and $f((0,1])\subseteq(0,1]$. The star criterion therefore gives a homotopy to the identity, consistent with finite simplicial approximation. Failure of exact simpliciality is not failure of a simplicial approximation. [F1, F2, step 1.1] ∎
