---
id: thm-rank-nullity
kind: theorem
title: 'Rank-nullity: $\dim_F V=\operatorname{nullity}T+\operatorname{rank}T$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rank-and-nullity, lem-kernel-basis-extension-gives-image-basis,
       def-dimension, def-finite-cardinality, thm-sum-rule]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "UCLA Algebra Notes, rank-nullity theorem"
      url: "https://www.math.ucla.edu/~mattkowalski/documents/Algebra_Notes.pdf"
    - title: "Axler, Linear Algebra Done Right, 4th ed., Chapter 3"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Statement

Let $T:V\to W$ be a linear map of vector spaces over $F$, with $V$
finite-dimensional. Then

$$\dim_F V=\operatorname{nullity}T+\operatorname{rank}T.$$

Equivalently,

$$\dim_F V=\dim_F(\ker T)+\dim_F(\operatorname{im}T).$$

## Facts & Assumptions

**Given:** A linear map $T:V\to W$ with $V$ finite-dimensional over $F$.

[L1] Nullity and rank are the dimensions of the kernel and image
([[def-rank-and-nullity]]).

[L2] There are finite bases $K$ of $\ker T$ and $B$ of $V$ with $K\subseteq B$;
for $C=B\setminus K$, the set $C$ is finite, $T[C]$ is a basis of
$\operatorname{im}T$, and $T|_C:C\to T[C]$ is bijective
([[lem-kernel-basis-extension-gives-image-basis]]).

[L3] The dimension of a finite-dimensional vector space is the number of
elements in any finite basis ([[def-dimension]]).

[L4] If two finite sets are disjoint, the cardinality of their union is the
sum of their cardinalities ([[thm-sum-rule]], clause 1).

[L5] A bijection between finite sets transports their cardinality
([[def-finite-cardinality]], consequence (c)).

## Proof

**Proof technique:** direct.

1.1 Choose $K,B,C$ as in [L2]. Since $B=K\mathbin{\dot\cup}C$, [L4] gives $|B|=|K|+|C|$. The bijection $T|_C:C\to T[C]$ gives $|C|=|T[C]|$. [L2, L4, L5, given]

2.1 Since $B$, $K$, and $T[C]$ are bases of $V$, $\ker T$, and $\operatorname{im}T$, respectively, [L1] and [L3] turn step 1.1 into $\dim_F V=\operatorname{nullity}T+\operatorname{rank}T$. [step 1.1, L1, L2, L3]

3.1 The displayed equivalent form follows by unfolding the definitions of rank and nullity. [step 2.1, L1] ∎

## Remarks

- If $V=\{0_V\}$, all three dimensions are zero and the formula reads
  $0=0+0$; no positive-dimension hypothesis is hidden.
- No finite-dimensionality assumption is made on $W$. The image is
  finite-dimensional for the reason isolated in
  [[lem-kernel-basis-extension-gives-image-basis]].
