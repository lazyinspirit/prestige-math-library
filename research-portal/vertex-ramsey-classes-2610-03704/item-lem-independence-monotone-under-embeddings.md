---
title: Independence is monotone under induced embeddings
status: published
research_item: lem-independence-monotone-under-embeddings
dependency_level: 0
---

## Prerequisites

- [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)
- [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)
- [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)
- [math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers)
- [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)


## Statement

Let $J$ and $G$ be finite simple graphs. If $J$ has an induced embedding into $G$, then $\alpha(J)\leq\alpha(G)$. In particular, $\alpha(G)<\alpha(J)$ excludes an induced copy of $J$ in $G$.

## Statement references

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)

[math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers)

## Facts & Assumptions

[F1] An induced embedding is an injection on vertices that preserves adjacency and nonadjacency between distinct vertices; an induced copy arises from such an embedding. See [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy).

[F2] An independent set has no adjacent distinct vertices. For a finite simple graph, its independence number is the maximum cardinality of an independent vertex set, and this maximum is attained. See [math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers).

[F3] A bijection from a finite set to another set makes their cardinalities equal. See [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality).

[F4] An injection satisfies $f(x)=f(y)\Rightarrow x=y$; a surjection takes every value in its codomain; a bijection has both properties. The image $f(S)$ consists of the values $f(s)$ for $s\in S$. See [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection).

## Proof

**Given:** Finite simple graphs $J$ and $G$ and an induced embedding $f:V(J)\to V(G)$.

**Goal:** Show $\alpha(J)\leq\alpha(G)$ and the stated exclusion of an induced copy.

1.1 Choose an independent set $S\subseteq V(J)$ with $|S|=\alpha(J)$. If two distinct vertices of $f(S)$ were adjacent, their distinct preimages in $S$ would be adjacent by the defining equivalence for an induced embedding, contrary to independence. Thus $f(S)$ is independent in $G$. [F1, F2, F4, choose]

2.1 The restriction $f:S\to f(S)$ is injective because $f$ is injective, and it is surjective by the definition of $f(S)$. Hence it is a bijection, so $|f(S)|=|S|=\alpha(J)$. By maximality of $\alpha(G)$, $\alpha(J)\leq\alpha(G)$. Consequently, if $\alpha(G)<\alpha(J)$, no induced embedding, and hence no induced copy of $J$ in $G$, can exist. [F1, F2, F3, F4, step 1.1] ∎
