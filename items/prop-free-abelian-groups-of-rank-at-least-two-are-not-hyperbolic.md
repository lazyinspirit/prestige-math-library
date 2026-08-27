---
id: prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic
kind: proposition
title: "Free abelian groups of rank at least two are not hyperbolic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-hyperbolic-group, def-rank-of-a-finite-rank-free-group, lem-thin-quadrilaterals-in-a-hyperbolic-space, thm-hyperbolic-group-definition-is-independent-of-finite-generating-set]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.5.4"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
---

## Statement

If $A$ is a free abelian group of rank at least $2$, then $A$ is not
hyperbolic.

## Facts & Assumptions

**Given:** A free abelian group $A$ of rank $n \ge 2$.

[L1] Hyperbolicity of a finitely generated group is independent of the chosen
finite generating set
([[thm-hyperbolic-group-definition-is-independent-of-finite-generating-set]]).

[L2] Hyperbolic spaces have uniformly thin geodesic quadrilaterals
([[lem-thin-quadrilaterals-in-a-hyperbolic-space]]).

[A1] With the standard basis of $\mathbb Z^n$, the Cayley graph contains
geodesic rectangles of arbitrarily large width inside the first two coordinate
directions.

## Proof

**Proof technique:** direct.

1.1 By the rank hypothesis, $A \cong \mathbb Z^n$ with $n \ge 2$. In the standard Cayley graph, the points $(0,0)$, $(m,0)$, $(m,m)$, and $(0,m)$ in the first two coordinates form a geodesic square of side length $m$ for every $m \ge 1$. [given, A1, algebra]

2.1 If the standard Cayley graph were hyperbolic, [L2] would give a uniform thinness constant for all geodesic quadrilaterals. But the midpoint of one side of the square from step 1.1 has distance $m/2$ from the union of the opposite sides, and $m$ is arbitrary. So the standard Cayley graph is not hyperbolic, and [L1] shows that $A$ itself is not hyperbolic. [A1, L1, L2, step 1.1] ∎
