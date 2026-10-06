---
id: lem-c2-leaf-intersection-with-a-box-transversal-is-countable
kind: lemma
title: A C² leaf meets a local box transversal in at most countably many points
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- def-c1-regular-codimension-one-foliation-and-transverse-orientation
- def-countable-choice-principle-for-foliation-pair
- thm-second-countable-implies-lindelof
- cor-components-of-open-subsets-of-rn-are-polygonally-connected
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 1
verification:
  precheck: pass
sources:
  scraped: []
  references:
  - title: Danny Calegari, Foliations and the Geometry of 3-Manifolds (local C² plaque-chain adaptation)
    url: https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf
    locator: §4.2 chart/plaque/holonomy pattern; coded countability and relative perturbation supplied locally
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $F$ be a $C^2$ foliation on a second-countable smooth
manifold, let $L$ be a leaf, and let $\tau:J\to Q$ be a vertical transverse interval in
one foliation box. Then $\tau^{-1}(L)$ is at most countable. If a countable foliation-
box atlas is supplied as part of the data, the countability conclusion uses no choice
principle. Dense and nonembedded leaves are allowed.

## Facts & Assumptions
**Given:** Assume $\mathrm{AC}_\omega$. A $C^2$ foliation $F$ on a second-countable smooth manifold $M$, a leaf $L$, and a vertical transverse interval $\tau:J\to Q$ in one foliation box $Q$.

[F1] A second-countable space is Lindelof: every open cover has a countable subcover. ([[thm-second-countable-implies-lindelof]]).

[F2] The connected components of an open subset of $\mathbb R^n$ are open and polygonally connected. ([[cor-components-of-open-subsets-of-rn-are-polygonally-connected]]).

[F3] For nonnegative integers the pairing $p(a,b)=(a+b)(a+b+1)/2+b$ is injective: pairs with $a+b=d$ occupy the disjoint consecutive interval from $d(d+1)/2$ to $(d+1)(d+2)/2-1$, and the offset recovers $b$ and hence $a$. Starting with $b_0=0$, put $b_j=p(b_{j-1},a_j)$ and encode a word $(a_1,\ldots,a_k)$ by $p(k,b_k)$. Decoding the outer pair recovers $k$, and recursively decoding the inner pairs recovers the word. Thus finite natural-number words admit this explicit injection into $\mathbb N$, without using later computability theory.



## Proof

**Proof technique:** direct.

1.1 Fix the second-countable $C^2$ foliated manifold, the leaf $L$, the foliation box $Q$ and the vertical transverse interval $\tau$, and if the leaf dimension is zero, every plaque and hence every leaf is a singleton, so the intersection has at most one point and the conclusion is immediate. Otherwise fix one plaque $P_0$ of $L$ inside the recorded atlas; a vertical interval meets each plaque of $Q$ in at most one point, because the transverse coordinate is constant on a plaque while $\tau$ varies only in the transverse direction. [given]

1.2 By [F1] the second-countable manifold has a countable cover by foliation boxes; selecting one foliation chart for each member of that countable subcover uses the stated countable choice, and adjoin the specified box $Q$ and the box of the initial plaque $P_0$ to that countable atlas (a finite addition), and record this enlarged countable atlas as fixed data for the rest of the argument. [F1, given]

2.1 Say a plaque is reached when it can be joined to $P_0$ by a finite chain of plaques of the recorded atlas in which consecutive plaques intersect; every plaque of $L$ is reached by definition of the plaque-chain relation, and it suffices to count the reached plaques contained in $Q$. [given, step 1.1]

2.2 Let $P$ be a reached plaque in a box $U$ and let $V$ be a next box of the recorded atlas; in plaque coordinates the trace of $P$ inside $V$ is an open subset of the plaque coordinate space $\mathbb R^{\dim L}$, whose connected components are open and polygonally connected by [F2]; each nonempty component lies in a single plaque of $V$, because the plaques of $V$ partition the open set $L\cap V$ into pairwise disjoint open subsets of the leaf, so a connected subset of $L\cap V$ cannot meet two of them; code each nonempty component by the least rational-box basis index contained in it, so distinct components, being disjoint, receive distinct codes, and given the current plaque $P$ and the next box $V$ the component code therefore determines at most one successor plaque. [F2, step 1.2]

3.1 Encode each finite chain of successor data by the natural-number coding of finite sequences from [F3], and assign to each reached plaque in $Q$ the least code of a finite chain reaching it; this is a well-defined injection of the reached plaques of $Q$ into $\mathbb N$ and does not select a chain at each plaque. [F3, step 2.2]

4.1 The reached plaques of $L$ inside $Q$ are therefore at most countable, and by step 1.1 each of them meets $\tau$ in at most one point, so $\tau^{-1}(L)$ injects into a countable set and is at most countable; a countable box atlas already supplied as data removes the only countable choice of step 1.2, and dense or nonembedded leaves are allowed since only plaque chains were used. [step 1.1, step 3.1] ∎
