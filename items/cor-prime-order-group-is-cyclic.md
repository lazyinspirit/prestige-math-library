---
id: cor-prime-order-group-is-cyclic
kind: corollary
title: "A finite group of prime order is cyclic and every nonidentity element generates it"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-order-of-element-divides-group-order, def-prime, def-order-in-a-group,
       lem-order-characterisation, def-generated-subgroup,
       lem-cyclic-subgroup-is-the-set-of-powers, thm-subset-of-a-finite-set,
       lem-nat-embeds-int, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, Lagrange's Theorem"
      url: "https://judsonbooks.org/abstract-algebra-theory-and-applications/"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §6.2: Lagrange's Theorem"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/06%3A_Cosets_and_Lagrange%27s_Theorem/6.02%3A_Lagrange%27s_Theorem"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §4.1: Cyclic Subgroups"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/04%3A_Cyclic_Groups/4.01%3A_Cyclic_Subgroups"
pipeline_run: null
---

## Statement

Let $G$ be a finite group such that the positive integer $\iota(|G|)$ is prime.
Then every $g\ne e$ has order $|G|$, satisfies $\langle g\rangle=G$, and hence
generates $G$. In particular, $G$ is cyclic.

## Facts & Assumptions

**Given:** A finite group $G$ with identity $e$, with $\iota(|G|)$ prime, and an element $g\in G$ with $g\ne e$.

[F1] A prime integer $p$ satisfies $p>1$, and every positive divisor of $p$ is $1$ or $p$ ([[def-prime]]).

[L1] The natural $\operatorname{ord}(g)$ is positive, equals $1$ exactly when $g=e$, and its image in $\mathbb Z$ divides $\iota(|G|)$; the embedding $\iota:\mathbb N\to\mathbb Z$ is injective and preserves order ([[def-order-in-a-group]], [[cor-order-of-element-divides-group-order]], [[lem-nat-embeds-int]]).

[L2] The cyclic subgroup $\langle g\rangle$ is a subgroup with $|\langle g\rangle|=\operatorname{ord}(g)$ ([[def-generated-subgroup]], [[lem-cyclic-subgroup-is-the-set-of-powers]], [[lem-order-characterisation]]).

[L3] If $A\subseteq B$ are finite and $|A|=|B|$, then $A=B$ ([[thm-subset-of-a-finite-set]]).

[F2] If a finite set $G$ contains $e$ and $|G|\ne1$, then some element of $G$ differs from $e$: otherwise $G=\{e\}$, whose cardinality is $1$ ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 The positive integer $\iota(\operatorname{ord}(g))$ divides the prime $\iota(|G|)$, so it is $1$ or $\iota(|G|)$. It is not $1$ because $g\ne e$, hence $\operatorname{ord}(g)=|G|$ by injectivity of $\iota$. [given, F1, L1]

2.1 The subgroup $\langle g\rangle\subseteq G$ has cardinality $\operatorname{ord}(g)=|G|$, so $\langle g\rangle=G$. [step 1.1, L2, L3]

3.1 Thus every nonidentity element generates $G$. Since $\iota(|G|)>1=\iota(1)$ by [F1], these two integers differ; injectivity in [L1] gives $|G|\ne1$, and [F2] supplies a nonidentity element. Consequently $G$ is cyclic. [step 2.1, F1, F2, L1] ∎
