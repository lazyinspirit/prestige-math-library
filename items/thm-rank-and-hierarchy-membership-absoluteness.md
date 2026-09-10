---
id: thm-rank-and-hierarchy-membership-absoluteness
kind: theorem
title: "Ranks agree and hierarchy membership is absolute"
status: draft
origin: pipeline
deps: [thm-ordinals-and-omega-are-absolute-in-transitive-models, lem-bounded-definitions-of-basic-set-operations, def-membership-rank-of-a-set, thm-membership-rank-and-hierarchy-levels]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Geschke, Models of Set Theory — §3 end pp9–10, hierarchy-membership absoluteness; local explicit rank induction"
      url: "https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf"
---


## Statement

If $M\subseteq N$ are transitive models of ZF and $x\in M$, then $\operatorname{rank}^M(x)=\operatorname{rank}^N(x)$. For every $\alpha\in M\cap\operatorname{Ord}$, $(V_\alpha)^M=M\cap(V_\alpha)^N$. Equality of the two internal power sets or stage sets is not asserted.

## Facts & Assumptions

[F1] [[thm-ordinals-and-omega-are-absolute-in-transitive-models]]: In ambient ZF, ordinalhood is absolute between transitive membership domains containing the parameter. A transitive set model of ZF contains precisely the real finite ordinals as its natural numbers and has $\omega^M=\omega$. Its ordinals form an initial segment of the actual ordinals.

[F2] [[def-membership-rank-of-a-set]]: Now assume ZF, including Foundation. Membership on the universe is well-founded and setlike, so its ordinal rank is defined for every set. Write

$$\operatorname{rank}(x)=\sup\{\operatorname{rank}(y)+1:y\in x\}.$$

The empty supremum is $0$, so $\operatorname{rank}(\varnothing)=0$. If $y\in x$, then $\operatorname{rank}(y)<\operatorname{rank}(x)$. This is the Foundation-dependent special case of relation rank. The earlier construction of $V_\alpha$ did not require Foundation.

Conventions and prerequisites: def-rank-of-a-well-founded-relation, thm-foundation-equivalent-to-hierarchy-exhaustion.

[F3] [[lem-bounded-definitions-of-basic-set-operations]]: The graphs of empty set, subset, unordered pair, singleton, union, intersection (with $\bigcap\varnothing=\varnothing$), difference, Kuratowski ordered pair, Cartesian product, relation domain/range, functionhood, evaluation and injection have $\Delta_0$ definitions. Thus their values agree between transitive membership structures whenever the input and output sets are in the smaller domain. This is graph agreement, not an assertion that an arbitrary transitive domain is closed under these operations.

[F4] [[thm-membership-rank-and-hierarchy-levels]]: In ZF, for every set $x$ and ordinal $\alpha$,

$$x\in V_\alpha\iff\operatorname{rank}(x)<\alpha,\qquad x\subseteq V_\alpha\iff\operatorname{rank}(x)\le\alpha.$$

Thus $\operatorname{rank}(x)$ is the least $\alpha$ with $x\subseteq V_\alpha$, and $\operatorname{rank}(x)=\alpha$ iff $x\in V_{\alpha+1}\setminus V_\alpha$.

## Proof

**Given:** $M\subseteq N$ are transitive ZF models; $x,\alpha\in M$ and $\alpha$ is an ordinal.

1.1 Each model has its rank function by its ZF axioms; F1 identifies its ordinal values with actual ordinals. Suppose by external membership induction that both ranks agree on every $y\in x$. Transitivity ensures these are exactly the predecessors considered inside either model. [F1, given]

2.1 By F2, each rank of $x$ is the supremum of the predecessor ranks plus one. Ordinal successor and union have their actual values by F3, so both suprema are the same actual ordinal. For $x=\varnothing$ both are the empty supremum $0$. Foundation validates this external induction, proving rank agreement for every $x\in M$. [F2, F3, step 1.1]

3.1 For $x\in M$, F4 applied inside the two ZF models gives $x\in(V_\alpha)^M\leftrightarrow\operatorname{rank}^M(x)<\alpha\leftrightarrow\operatorname{rank}^N(x)<\alpha\leftrightarrow x\in(V_\alpha)^N$. Also every element of $(V_\alpha)^M$ belongs to $M$ by transitivity. These two statements give precisely the displayed intersection equality. [F4, step 2.1] ∎

