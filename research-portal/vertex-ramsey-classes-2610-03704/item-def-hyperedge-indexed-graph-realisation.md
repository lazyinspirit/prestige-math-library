---
title: Graph realisations with possibly different hyperedge pieces
status: draft
research_item: def-hyperedge-indexed-graph-realisation
dependency_level: 0
---

## Prerequisites

- [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)
- [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)
- [math:def-union-of-a-set-and-binary-union](https://alphabetamath.cc/item/def-union-of-a-set-and-binary-union)
- [math:def-indexed-family](https://alphabetamath.cc/item/def-indexed-family)
- [math:def-indexed-union-and-intersection](https://alphabetamath.cc/item/def-indexed-union-and-intersection)


## Definition

A finite hypergraph here is a pair $(V,\mathcal E)$ where $V$ is a finite set and $\mathcal E$ is a set of subsets of $V$; its members are called hyperedges. For each $e\in\mathcal E$, let $J_e=(e,E_e)$ be a finite simple graph with vertex set exactly $e$. The hyperedge-indexed graph realisation of these specified pieces is the finite simple graph $R=(V,E_R)$, where $E_R=\bigcup_{e\in\mathcal E}E_e$. Each $J_e$ is called the piece indexed by $e$.

If a piece is specified by a template graph $T_e=(W_e,F_e)$ and a bijection $f_e:W_e\to e$, its transported edge set is $E_e=\{\{f_e(x),f_e(y)\}:\{x,y\}\in F_e\}$. The specified bijection is part of this construction. The induced graph $R[e]$ has vertex set $e$ and consists of all edges of $R$ with both endpoints in $e$; the definition does not assert that $R[e]=J_e$.

## Definition references

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

[math:def-union-of-a-set-and-binary-union](https://alphabetamath.cc/item/def-union-of-a-set-and-binary-union)

[math:def-indexed-family](https://alphabetamath.cc/item/def-indexed-family)

[math:def-indexed-union-and-intersection](https://alphabetamath.cc/item/def-indexed-union-and-intersection)

## Justification

Each edge in $E_e$ is a two-element subset of $e$, hence of $V$. The union therefore contains only two-element subsets of $V$, and so defines a finite simple graph on $V$; if $\mathcal E$ is empty, the union is empty. For a transported piece, injectivity of $f_e$ preserves the distinctness of the endpoints and its codomain places them in $e$. The formula uniquely specifies its edge set, and the union uniquely specifies $E_R$. Edges contributed by other pieces may have both endpoints in $e$, so equality with the induced graph is a separate assertion.
