---
id: thm-a-decomposable-wedge-is-nonzero-exactly-for-independent-vectors
kind: theorem
title: "In a finite-dimensional vector space, a decomposable wedge is nonzero exactly when its vectors are linearly independent"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-increasing-basis-wedges-form-a-basis, def-linear-independence, thm-dimension-of-a-linear-subspace]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Exterior Powers"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/extmod.pdf"
---

## Statement

Let $V$ be a finite-dimensional vector space over $F$. For $v_1,\ldots,v_k\in V$,

$$v_1\wedge\cdots\wedge v_k\ne0\qquad\Longleftrightarrow\qquad v_1,\ldots,v_k\text{ are linearly independent}.$$

## Facts & Assumptions

**Given:** A finite-dimensional vector space $V$ over a field $F$ and a finite list $v_1,\ldots,v_k$.

[L1] A list is dependent exactly when one entry is a linear combination of the others ([[def-linear-independence]]).

[L2] The increasing-index wedges of a basis form a basis of $\Lambda^kV$ ([[thm-increasing-basis-wedges-form-a-basis]]).

[L3] In a finite-dimensional vector space, every linearly independent subset is contained in a basis, with no choice principle needed ([[thm-dimension-of-a-linear-subspace]]).

## Proof

**Proof technique:** direct.


1.1 If $v_1,\ldots,v_k$ are dependent, choose by [L1] an entry $v_j=\sum_{i\ne j}c_iv_i$. Expanding the wedge by the multilinearity of the wedge map gives $v_1\wedge\cdots\wedge v_k=\sum_{i\ne j}c_i\,(v_1\wedge\cdots\wedge v_i\wedge\cdots\wedge v_k)$ with $v_i$ in the $j$th slot, and every summand has the repeated entry $v_i$, so alternation kills it; hence the wedge is zero. [L1, algebra]

1.2 If $v_1,\ldots,v_k$ are independent, [L3] places the subset $\{v_1,\ldots,v_k\}$ inside a basis of $V$; ordering the remaining basis vectors after $v_1,\ldots,v_k$ gives a basis $(v_1,\ldots,v_k,u_{k+1},\ldots,u_n)$ of $V$. Then $v_1\wedge\cdots\wedge v_k$ is the basis wedge attached to the first $k$ indices, so by [L2] it is a basis vector and in particular nonzero. [L2, L3]

2.1 Steps 1.1 and 1.2 prove the two directions of the equivalence. [step 1.1, step 1.2] ∎
