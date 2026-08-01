---
id: cor-prime-order-group-is-cyclic
kind: corollary
title: "A finite group of prime order is cyclic and every nonidentity element generates it"
status: published
origin: session
deps: [cor-order-of-element-divides-group-order, def-prime, def-order-in-a-group, lem-order-characterisation, def-generated-subgroup, lem-cyclic-subgroup-is-the-set-of-powers, thm-subset-of-a-finite-set, lem-nat-embeds-int]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, Lagrange's Theorem"
      url: "https://judsonbooks.org/abstract-algebra-theory-and-applications/"
pipeline_run: null
---

## Statement

Let $G$ be a finite group such that the positive integer $\iota(|G|)$ is prime.
Then every $g\ne e$ has order $|G|$, satisfies $\langle g\rangle=G$, and hence
generates $G$. In particular, $G$ is cyclic.

## Facts & Assumptions

**Given:** A finite group $G$ with identity $e$, with $\iota(|G|)$ prime, and an element $g\in G$ with $g\ne e$.

[F1] A prime integer $p$ satisfies $p>1$, and every positive divisor of $p$ is $1$ or $p$ ([[def-prime]]).

[L1] The natural $\operatorname{ord}(g)$ is positive, equals $1$ exactly when $g=e$, and its image in $\mathbb Z$ divides $\iota(|G|)$ ([[def-order-in-a-group]], [[cor-order-of-element-divides-group-order]], [[lem-nat-embeds-int]]).

[L2] The cyclic subgroup $\langle g\rangle$ is a subgroup with $|\langle g\rangle|=\operatorname{ord}(g)$ ([[def-generated-subgroup]], [[lem-cyclic-subgroup-is-the-set-of-powers]], [[lem-order-characterisation]]).

[L3] If $A\subseteq B$ are finite and $|A|=|B|$, then $A=B$ ([[thm-subset-of-a-finite-set]]).

## Proof

**Proof technique:** direct.

1.1 The positive integer $\iota(\operatorname{ord}(g))$ divides the prime $\iota(|G|)$, so it is $1$ or $\iota(|G|)$. It is not $1$ because $g\ne e$, hence $\operatorname{ord}(g)=|G|$ by injectivity of $\iota$. [given, F1, L1]

2.1 The subgroup $\langle g\rangle\subseteq G$ has cardinality $\operatorname{ord}(g)=|G|$, so $\langle g\rangle=G$. [step 1.1, L2, L3]

3.1 Thus every nonidentity element generates $G$, and the existence of a nonidentity element follows from $|G|>1$; consequently $G$ is cyclic. [step 2.1, F1] ∎
