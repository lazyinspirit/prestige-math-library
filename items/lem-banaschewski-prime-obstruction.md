---
id: lem-banaschewski-prime-obstruction
kind: lemma
title: Banaschewski's prime obstruction
status: published
origin: pipeline
deps: [lem-hyperelementary-permutation-subring-reduction, thm-character-of-a-permutation-representation-counts-fixed-points]
proof_strategy: contrapositive
verification:
  audited: 2026-09-06
sources:
  references:
    - title: Wen-Wei Li, Yanqi Lake Lectures on Algebra I, Lemma 14.3.4
      url: https://www.wwli.asia/downloads/YAlg1.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

Let $X$ be finite and let $A\subseteq\mathbb Z^X$ be a subring. If $1_X\notin A$, then there are $x\in X$ and a prime $p$ such that $a(x)\in p\mathbb Z$ for every $a\in A$. In particular, this applies to the integer-valued hyperelementary permutation subring evaluated on conjugacy classes.

## Facts & Assumptions

[F1] The cited prerequisite is [[thm-character-of-a-permutation-representation-counts-fixed-points]].

## Proof

**Given:** $A$ is closed under pointwise multiplication and addition.

1.1 For $x\in X$, the value set $A_x=\{a(x):a\in A\}$ is an ideal $n_x\mathbb Z$. If every $A_x$ contained $1$, choose $a_x\in A$ with $a_x(x)=1$ and form $\prod_{x\in X}(1_X-a_x)=0$. [F1, given, assume-hyp, contrapositive-reduce]

2.1 Expanding the finite product would put $1_X$ in $A$, a contradiction. Hence some $A_x=n_x\mathbb Z$ has $n_x>1$; any prime divisor $p$ of $n_x$ has the stated property. Permutation characters are integer-valued fixed-point counts, so their span is a subring of this form. ∎ [step 1.1, discharge-contrapositive]
