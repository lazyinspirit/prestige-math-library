---
id: lem-clopen-finite-constant-maps
kind: lemma
title: Maps to finite disjoint unions of the base
status: published
domain: mathematics
deps:
  - math:def-scheme-over-base
  - math:def-morphism-of-schemes
  - math:lem-noetherian-space-has-finitely-many-irreducible-components
  - math:def-axiom-of-choice
dependency_roles:
  math:def-scheme-over-base: mathematical-premise
  math:def-morphism-of-schemes: mathematical-premise
  math:lem-noetherian-space-has-finitely-many-irreducible-components: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
Assume the Axiom of Choice. Let $k$ be a field, $A$ a finite set, and $X$ a Noetherian $k$-scheme. Put $Y_A=\coprod_{a\in A}\operatorname{Spec}k$. There are natural bijections between $k$-morphisms $X\to Y_A$, decompositions $X=\coprod_{a\in A}X_a$ into pairwise disjoint open-and-closed subsets, and functions $\pi_0(X)\to A$. Here empty $X_a$ are allowed and $\pi_0(X)$ is the set of connected components of the underlying topological space. If $U\subseteq X$ is dense, restriction from locally constant integer-valued functions on $X$ to such functions on $U$ is injective. In particular this holds when $U$ is dense and meets every component.

A subset is open-and-closed, or clopen, if it is both open and closed. A connected component is a maximal connected subset; connected means that the subspace cannot be partitioned into two nonempty open subsets. A function is locally constant if every point has an open neighbourhood on which it is constant. Noetherian means that descending chains of closed subsets stabilize. Density means that every nonempty open subset of $X$ meets $U$.

## Statement references
[[math:def-scheme-over-base]]

[[math:lem-noetherian-space-has-finitely-many-irreducible-components]]

[[math:def-axiom-of-choice]]

## Facts & Assumptions
[A1] The Axiom of Choice is assumed; it is used through the finite decomposition supplier below. [[math:def-axiom-of-choice]]

[F1] Under the Axiom of Choice, a Noetherian topological space is a finite union of irreducible closed subsets. An irreducible space is nonempty and cannot be expressed as a union of two proper closed subsets. [[math:lem-noetherian-space-has-finitely-many-irreducible-components]]

[F2] A $k$-scheme has a structure morphism to $\operatorname{Spec}k$, and a $k$-morphism is a scheme morphism commuting with the structure morphisms. Scheme morphisms are morphisms of the underlying locally ringed spaces. [[math:def-scheme-over-base]] [[math:def-morphism-of-schemes]]

[F3] The scheme $Y_A$ is the disjoint union of copies of $\operatorname{Spec}k$: each copy is open and closed, and its structure morphism to $\operatorname{Spec}k$ is the identity. Morphisms of locally ringed spaces glue uniquely over an open cover when their restrictions agree on overlaps; this follows by gluing their continuous maps and compatible sheaf maps, with locality checked on stalks. [F2]

## Proof
**Given:** A field $k$, a finite set $A$, a Noetherian $k$-scheme $X$, and the Axiom of Choice.

**Goal:** Establish the stated bijections and injectivity of restriction.

1.1 By [F1], write $X$ as a finite union of irreducible closed subsets $C_1,\ldots,C_n$, allowing $n=0$. Each $C_i$ is connected: a separation by two nonempty relatively open subsets would express it as a union of two proper relatively closed subsets. Form the finite graph with vertices $i$ and an edge whenever $C_i\cap C_j\ne\varnothing$. For each graph component, the union of its $C_i$ is connected, since a finite chain of intersecting connected sets has connected union. These unions are pairwise disjoint, closed, and cover $X$; each is also open because its complement is a finite union of the other closed unions. Any connected subset meeting one such union lies entirely inside it, since otherwise the two clopen parts would separate that subset. Thus these unions are exactly the connected components of $X$, and they are clopen. The empty-space case has no components. [F1, A1, given]

1.2 Let $f:X\to Y_A$ be a $k$-morphism. The inverse images $X_a=f^{-1}(\operatorname{Spec}k\text{ in summand }a)$ are pairwise disjoint clopen subsets covering $X$. Conversely, given such a decomposition, the restriction of the structure morphism $X\to\operatorname{Spec}k$ to $X_a$, followed by the inclusion of summand $a$, is a $k$-morphism $X_a\to Y_A$. These morphisms glue uniquely because the open sets are disjoint. On each $X_a$ any $k$-morphism landing in summand $a$ must equal this composite: commuting with the structure map forces its map to that copy of $\operatorname{Spec}k$ to be the structure morphism. The two constructions are therefore inverse, including when $A$ or $X$ is empty. [F2, F3, given]

2.1 A clopen decomposition assigns each connected component to exactly one $X_a$: the intersections of a connected component with the $X_a$ are disjoint open subsets covering it, so two nonempty intersections would separate it. Conversely, by [step 1.1], the union of components assigned to each $a$ is clopen: there are only finitely many components, each clopen. These constructions are inverse. Pullback of the decomposition shows the bijections are natural in $X$; relabelling summands shows naturality in $A$. [step 1.1, step 1.2]

3.1 Let $f,g:X\to\mathbb Z$ be locally constant and agree on dense $U$. The set $D=\{x:f(x)\ne g(x)\}$ is open: at each point, intersect neighbourhoods on which $f$ and $g$ are respectively constant. If $D$ were nonempty it would meet $U$, contradicting agreement there. Thus $D$ is empty and $f=g$; restrictions remain locally constant in the subspace topology. In particular, a dense subset meets every nonempty clopen connected component by [step 1.1], so the stated special case follows. [given, step 1.1] ∎
