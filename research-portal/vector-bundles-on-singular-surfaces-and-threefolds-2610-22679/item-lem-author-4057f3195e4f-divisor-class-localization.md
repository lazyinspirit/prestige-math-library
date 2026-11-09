---
title: Localization of a presented divisor class group
status: published
research_item: lem-author-4057f3195e4f-divisor-class-localization
dependency_level: 1
---

PDF p. 13: Divisibility of the normalization Picard group

## Prerequisites

- [lem-author-4057f3195e4f-free-boundary](item-lem-author-4057f3195e4f-free-boundary)
- [lem-author-4057f3195e4f-quotient-restriction](item-lem-author-4057f3195e4f-quotient-restriction)

## Statement
Let $S$ be a set, $B\subseteq S$, $K$ an abelian group, and $d:K\to\mathbb Z^{(S)}$ a homomorphism. Let $r$ be restriction to $S\setminus B$ and put $d'=r\circ d$. Then the natural sequence $\mathbb Z^{(B)}\to\operatorname{coker}(d)\to\operatorname{coker}(d')\to0$ is exact. Here $\operatorname{coker}(d)$ denotes $\mathbb Z^{(S)}/d(K)$, and the first map extends by zero and passes to the quotient.

## Facts & Assumptions

[F1] Restriction $r:\mathbb Z^{(S)}\to\mathbb Z^{(S\setminus B)}$ is surjective with kernel the extensions by zero of $\mathbb Z^{(B)}$ ([lem-author-4057f3195e4f-free-boundary](item-lem-author-4057f3195e4f-free-boundary)).

[F2] A surjective homomorphism $r:A\to D$ induces a surjection $A/P\to D/r(P)$ with kernel $(\ker r+P)/P$ for every subgroup $P$ ([lem-author-4057f3195e4f-quotient-restriction](item-lem-author-4057f3195e4f-quotient-restriction)).

**Given:** The data in the statement.

**Goal:** Prove the stated cokernel sequence exact.

## Proof

1.1 Apply [F2] to $A=\mathbb Z^{(S)}$, $D=\mathbb Z^{(S\setminus B)}$, and $P=d(K)$. Since $r(P)=d'(K)$, the induced map is the displayed map of cokernels and is surjective. [F1, F2, given]

2.1 By [F1] and the kernel formula in [F2], its kernel consists exactly of classes represented by divisors supported in $B$. These are the image of $\mathbb Z^{(B)}$, proving exactness. [F1, F2, step 1.1] ∎
