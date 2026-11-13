---
title: Connected component notation [I,a]
status: draft
research_item: def-connected-support-artin-tits-normalisers
dependency_level: 3
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 10, Notation 3.13
      statement: For I contained in the vertex set and a outside I, the notation [I,a]
        denotes the vertices in the connected component containing a of the
        subgraph induced on I together with a.
      hypotheses: Γ is a Coxeter diagram, I is a subset of its vertex set Γ₀, and a
        belongs to Γ₀ minus I.
      reading_limits: The frozen extracted article text at Notation 3.13 was read for
        attribution. The article is not used to justify the underlying graph
        constructions.
---

PDF p. 10: ` Notation 3.13 `

## Prerequisites

- [def-set-notation-artin-tits-normalisers](item-def-set-notation-artin-tits-normalisers)
- [math:def-cg-coxeter-diagram-components-and-finite-type](https://alphabetamath.cc/item/def-cg-coxeter-diagram-components-and-finite-type)
- [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)
- [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)
- [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)


## Definition

Let $\Gamma$ be a Coxeter diagram with vertex set $\Gamma_0$, let $I\subseteq\Gamma_0$, and let $a\in I^c=\Gamma_0\setminus I$. As in [def-set-notation-artin-tits-normalisers](item-def-set-notation-artin-tits-normalisers), put $I+a=I\cup\{a\}$. Write $\Gamma(I+a)$ for the induced subgraph of $\Gamma$ on $I+a$: its vertices are exactly those in $I+a$, and it contains exactly the edges of $\Gamma$ whose endpoints both lie in $I+a$, with their labels retained.

The notation $[I,a]$ denotes the vertex set of the connected component of $\Gamma(I+a)$ containing $a$. Explicitly, $[I,a]$ consists of the vertices $v\in I+a$ for which a path in $\Gamma(I+a)$ has endpoints $a$ and $v$; a path of length zero is allowed. In particular, $a\in[I,a]\subseteq I+a$.

## Definition references

[def-set-notation-artin-tits-normalisers](item-def-set-notation-artin-tits-normalisers)

[math:def-cg-coxeter-diagram-components-and-finite-type](https://alphabetamath.cc/item/def-cg-coxeter-diagram-components-and-finite-type)

[math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)

[math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)

[def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)

## Justification

The complement and union notation are well-defined by [def-set-notation-artin-tits-normalisers](item-def-set-notation-artin-tits-normalisers), and $a\in I+a\subseteq\Gamma_0$. The diagram of [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers) permits an arbitrary vertex set. Restrict its edge set to the pairs with both endpoints in $I+a$, and restrict the label function to those edges. These are sets and define the specified induced labelled graph, without any finiteness assumption.

For this possibly infinite graph, the path recipe used in the Definition means a finite sequence $(v_0,\ldots,v_k)$ of pairwise distinct vertices, with each consecutive pair an edge, and with length $k$ and endpoints $v_0,v_k$. The sequence $(a)$ has length zero. This directly extends the finite-graph definitions in [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle) and [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component); the induced labelled graph agrees with [math:def-cg-coxeter-diagram-components-and-finite-type](https://alphabetamath.cc/item/def-cg-coxeter-diagram-components-and-finite-type) when $\Gamma_0$ is finite. Those suppliers are used only for this finite specialization, not to infer an infinite-graph theorem.

For completeness the finite-path recipe determines a component at arbitrary rank. Every finite walk can be shortened to a path with the same endpoints by deleting the portion between two occurrences of a repeated vertex; each deletion strictly decreases its finite length, so iteration terminates. Length-zero paths give reflexivity of reachability, reversal gives symmetry, and concatenation followed by these deletions gives transitivity. The set of vertices reachable from $a$ is consequently its unique reachability class. The induced graph on that class is connected: paths from $a$ have every intermediate vertex in the same class, and reversing and concatenating two such paths joins any two vertices of the class. Any connected subgraph containing $a$ has every vertex reachable from $a$ and is contained in this induced graph. It is therefore the unique maximal connected subgraph containing $a$. Thus its vertex set is precisely the specified $[I,a]$, and the length-zero path gives $a\in[I,a]\subseteq I+a$.
