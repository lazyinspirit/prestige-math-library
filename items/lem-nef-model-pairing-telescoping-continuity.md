---
dependency_level: 0
id: lem-nef-model-pairing-telescoping-continuity
kind: lemma
title: A telescoping continuity estimate for nef model pairings
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - thm-reals-cauchy-complete
proof_strategy: direct
axiom_use: No choice axiom is used; the sequences are given and all estimates use finite sums.
sources:
  references:
    - title: Alexander Carney, Heights and arithmetic dynamics over finitely generated fields
      url: https://arxiv.org/pdf/2010.07200v1
      locator: Section 3, Lemmas 3.1 and 3.3; explicit scalar telescoping estimate
---

## Statement

Let $r\ge0$ be an integer, let $W$ be a real vector space, and let $I:W^{r+1}\to\mathbb R$ be a symmetric multilinear map. Let $C,E\subseteq W$ be cones closed under addition and nonnegative real scaling. Define $x\le_E y$ to mean $y-x\in E$, and suppose
$$I(e,c_1,\ldots,c_r)\ge0\qquad(e\in E,\ c_j\in C).$$
Fix $D\in E$ and given sequences $a_{i,m}\in C$ for $0\le i\le r$ and $m\ge1$. Suppose nonnegative numbers $\epsilon_{m,l}$ tend to zero as $\min(m,l)\to\infty$, and
$$-\epsilon_{m,l}D\le_E a_{i,m}-a_{i,l}\le_E\epsilon_{m,l}D$$
for every $i,m,l$. Suppose also there is $M\ge0$ such that every mixed choice of the remaining $r$ entries from the sequences at indices $m$ and $l$ satisfies
$$0\le I(D,c_1,\ldots,c_r)\le M.$$
Then
$$|I(a_{0,m},\ldots,a_{r,m})-I(a_{0,l},\ldots,a_{r,l})|\le(r+1)M\epsilon_{m,l},$$
and these real pairings converge. A second family of sequences gives the same limit if the corresponding cross differences obey the same tending-to-zero order bounds and the mixed $D$-pairings between the two families have a uniform finite bound. This is an abstract estimate: existence, symmetry and positivity of a geometric intersection pairing are hypotheses, not conclusions.

## Statement references

[[thm-reals-cauchy-complete]]

[Carney, Section 3, Lemmas 3.1 and 3.3](https://arxiv.org/pdf/2010.07200v1)

## Facts & Assumptions

**Given:** The multilinear pairing, cones, boundary vector, sequences, bounds and convergence of the error bounds in the Statement.

[F1] Every Cauchy sequence of real numbers converges, without a choice assumption. ([[thm-reals-cauchy-complete]])

## Proof

1.1 Write $\Delta_i=a_{i,m}-a_{i,l}$. Positivity applied to $\epsilon_{m,l}D+\Delta_i$ and $\epsilon_{m,l}D-\Delta_i$, both in $E$, and to any mixed remaining entries in $C$, gives $-\epsilon_{m,l}I(D,c_1,\ldots,c_r)\le I(\Delta_i,c_1,\ldots,c_r)\le\epsilon_{m,l}I(D,c_1,\ldots,c_r)$. Hence each such term has absolute value at most $M\epsilon_{m,l}$. For $r=0$ this uses the stipulated positivity and bound with an empty list. [given, algebra]

2.1 Replace the $r+1$ entries of the first pairing one at a time by their entries at index $l$. Multilinearity expresses the total difference as the sum of $r+1$ terms, each with one entry $\Delta_i$ and all other entries chosen from the two original index lists. Symmetry puts the difference entry first, and step 1.1 bounds each term. The triangle inequality gives the displayed estimate. [given, step 1.1, algebra]

3.1 Given any positive tolerance, if $(r+1)M>0$, choose an index after which $\epsilon_{m,l}$ is smaller than that tolerance divided by $(r+1)M$. If $M=0$, step 2.1 already says all pairings are equal. Thus the real sequence is Cauchy in either case, and [F1] gives its convergence. [given, F1, step 2.1, algebra]

4.1 Apply precisely the same finite replacement argument to an entry list from the first family and one from the second. The assumed cross bounds make their pairing difference tend to zero as both indices increase. Taking the two real limits gives equality. No construction of the underlying geometric pairing or of model sequences has been used. [given, step 1.1, step 2.1, step 3.1, algebra] ∎
