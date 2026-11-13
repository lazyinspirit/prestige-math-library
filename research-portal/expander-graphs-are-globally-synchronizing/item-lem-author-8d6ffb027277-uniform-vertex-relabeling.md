---
title: Vertex relabeling preserves the uniform regular graph law
status: published
research_item: lem-author-8d6ffb027277-uniform-vertex-relabeling
dependency_level: 2
---

## Prerequisites

- [def-expander-prereq-regular-pairing-conditioning](item-def-expander-prereq-regular-pairing-conditioning)
- [lem-author-8d6ffb027277-hamilton-cycle-encodings](item-lem-author-8d6ffb027277-hamilton-cycle-encodings)
- [math:def-symmetric-group](https://alphabetamath.cc/item/def-symmetric-group)
- [math:def-uniform-finite-probability-space](https://alphabetamath.cc/item/def-uniform-finite-probability-space)
- [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)


## Statement

Let $n$ be a positive integer and $d$ a nonnegative integer such that the set $\Omega_{n,d}$ of simple $d$-regular graphs on $[n]$ is nonempty, and equip it with the uniform law. For any permutation $\sigma$ of $[n]$, put $E(\sigma G)=\{\{\sigma u,\sigma v\}:\{u,v\}\in E(G)\}$. This map is a bijection of $\Omega_{n,d}$ preserving the uniform law, Hamiltonicity and every graph property invariant under relabeling.

For $n\ge3$, a candidate Hamiltonian cycle on $[n]$ is the edge set obtained by listing every vertex once and joining consecutive vertices, including the last and first. For $n=1,2$, there are no candidate Hamiltonian cycles, following the convention that a simple cycle has at least three distinct vertices. A graph is Hamiltonian when its edge set contains a candidate Hamiltonian cycle. For any two candidate Hamiltonian cycles $C,D$ there is a permutation $\sigma$ with $\sigma C=D$.

## Facts & Assumptions

[F1] [def-expander-prereq-regular-pairing-conditioning](item-def-expander-prereq-regular-pairing-conditioning) defines the nonempty uniform labelled simple regular graph model.

[F2] For $n\ge3$, [lem-author-8d6ffb027277-hamilton-cycle-encodings](item-lem-author-8d6ffb027277-hamilton-cycle-encodings) defines Hamiltonian cycles by vertex listings.

[F3] [math:def-symmetric-group](https://alphabetamath.cc/item/def-symmetric-group) defines a permutation of a set as a bijection from that set to itself.

[F4] [math:def-uniform-finite-probability-space](https://alphabetamath.cc/item/def-uniform-finite-probability-space) assigns each outcome of a nonempty finite set $\Omega$ weight $1/|\Omega|$, so an event $A$ has probability $|A|/|\Omega|$.

[F5] [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle) requires a simple cycle to have length at least three and distinct vertices before its closing repetition.

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Establish every assertion of the Statement.

1.1 By F3, each vertex has a unique preimage under $\sigma$; mapping a vertex to that preimage defines the inverse permutation $\sigma^{-1}$. Relabeling preserves distinct endpoints, and $v\mapsto\sigma v$ bijects the neighbors of $u$ with the neighbors of $\sigma u$. Thus $\sigma G$ remains simple and $d$-regular. Relabeling by $\sigma^{-1}$ inverts this construction, so $T_\sigma:G\mapsto\sigma G$ is a bijection of the finite set $\Omega_{n,d}$. For every event $A\subseteq\Omega_{n,d}$, its restriction is a bijection from $A$ onto $T_\sigma(A)$, so $\mathbb P(T_\sigma(A))=|T_\sigma(A)|/|\Omega_{n,d}|=|A|/|\Omega_{n,d}|=\mathbb P(A)$. Hence the uniform law is preserved. [F1, F3, F4, construct]

2.1 If $n\ge3$, applying $\sigma$ to a vertex listing defining a Hamiltonian cycle gives a listing defining a Hamiltonian cycle of $\sigma G$. Applying $\sigma^{-1}$ proves the converse. If $n=1,2$, no simple cycle exists by F5, so neither graph is Hamiltonian under the stated convention. Thus Hamiltonicity is preserved for every allowed $n$. A relabeling-invariant property is preserved by its defining invariance. [given, F2, F5, step 1.1, construct]

3.1 If candidate cycles $C,D$ exist, then $n\ge3$. Choose listings $(v_1,\ldots,v_n)$ and $(w_1,\ldots,w_n)$ defining them. Set $\sigma(v_i)=w_i$ for every $i$. Each listing contains every vertex exactly once, so this defines a bijection of $[n]$, with inverse $w_i\mapsto v_i$, hence a permutation. It carries every consecutive edge, including the closing edge, to the corresponding edge of $D$, giving $\sigma C=D$. For $n=1,2$ the assertion about pairs of candidate cycles is vacuous. [given, F2, F3, step 2.1, construct] ∎
