---
id: ex-a-five-conjugacy-classes-and-split-five-cycles
kind: example
title: 'The conjugacy classes of $A_5$: sizes $1,20,15,12,12$ and the split $5$-cycles'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-symmetric-group-class-equation-by-cycle-type, thm-centralizer-cardinality-from-cycle-type, cor-sign-from-disjoint-cycle-structure, thm-alternating-conjugacy-class-splitting-criterion, cor-alternating-group-is-normal-and-has-half-the-elements]
justified_by: []
aliases: []
landmark: false
proof_strategy: counting
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Conjugacy Classes"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/conjclass.pdf"
pipeline_run: frontier-11
---

## Example

The five conjugacy classes of $A_5$ have representatives and sizes
$$
1:1,\qquad (123):20,\qquad (12)(34):15,
$$
$$
(12345):12,\qquad (13524):12.
$$
The last two classes are the two halves of the $S_5$ class of $5$-cycles.

## Facts & Assumptions

**Given:** The alternating group $A_5$.

[F1] Symmetric conjugacy classes are indexed by cycle types and have sizes given by the class equation and centralizer formula ([[cor-symmetric-group-class-equation-by-cycle-type]], [[thm-centralizer-cardinality-from-cycle-type]]).

[F2] Sign determines which cycle types lie in $A_5$ ([[cor-sign-from-disjoint-cycle-structure]]).

[F3] An even class splits into two equal $A_n$-classes exactly for distinct odd cycle lengths ([[thm-alternating-conjugacy-class-splitting-criterion]]).

[F4] $|A_5|=5!/2=60$ ([[cor-alternating-group-is-normal-and-has-half-the-elements]]).

## Verification

**Proof technique:** counting.

1.1 By [F1] and [F2], the even $S_5$ types are $1^5$, $3,1^2$, $2^2,1$, and $5$, with symmetric class sizes $1,20,15,24$. [F1, F2, algebra]

2.1 By [F3], the first three stay single classes, while the $5$-cycle class splits into two equal classes of size $12$. [F3, step 1.1]

3.1 Put $s=(12345)$. The permutation $q=(2\,3\,5\,4)$ satisfies $qsq^{-1}=s^2=(13524)$ and is odd by [F2]. Every other conjugator from $s$ to $s^2$ differs from $q$ by an element centralizing $s$; such a centralizer element is determined by the image of $1$ and is therefore a power of the even $5$-cycle $s$. Thus every conjugator is odd, so $s$ and $s^2$ lie in the two different halves from step 2.1. [F2, step 2.1, algebra]

4.1 The total $1+20+15+12+12=60$ agrees with [F4]. [F4, step 1.1, step 2.1] ∎
