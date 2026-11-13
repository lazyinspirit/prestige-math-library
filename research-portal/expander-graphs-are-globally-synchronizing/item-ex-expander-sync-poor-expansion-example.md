---
title: Two cliques joined by one edge synchronize despite poor expansion
status: draft
research_item: ex-expander-sync-poor-expansion-example
dependency_level: 10
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 7–8, Remark 1.7
      statement: A graph consisting of two cliques connected by an edge is globally
        synchronizing despite poor expansion.
      hypotheses: Two disjoint complete graphs are joined by one edge between their
        vertices.
      reading_limits: The supplied article text at Remark 1.7 was inspected for
        attribution. The article is not used as proof of this example; its cited
        underlying gluing source was not independently read.
---

PDF p. 7: ` Remark 1.7 `; PDF p. 8: ` Remark 1.7 `

## Prerequisites

- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-sync-energy](item-def-expander-sync-energy)
- [def-expander-sync-global-synchrony](item-def-expander-sync-global-synchrony)
- [prop-expander-prereq-complete-graph-psd-landscape](item-prop-expander-prereq-complete-graph-psd-landscape)
- [prop-expander-prereq-indicator-and-cut-calculus](item-prop-expander-prereq-indicator-and-cut-calculus)
- [prop-expander-sync-psd-criterion](item-prop-expander-sync-psd-criterion)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)


## Statement

Assume countable choice. Let $G$ consist of two disjoint finite nonempty cliques, with exactly one additional edge joining a vertex of one clique to a vertex of the other. A clique here is an unweighted graph with one edge between each pair of distinct vertices and no loops. Then $G$ is globally synchronizing: for normalized phase-volume almost every initial state, the rotating-frame homogeneous Kuramoto trajectory converges to a state whose phases are all equal modulo $2\pi$.

For two cliques of equal size $m\ge2$, the set $X$ of vertices of either clique has one edge to its complement, so $e(X,X^c)/|X|=1/m$. Thus this globally synchronizing family has edge expansion at most $1/m$, tending to zero. In particular, a uniform positive edge-expansion bound is not necessary for global synchronization.

## Facts & Assumptions

[F1] The Kuramoto energy of a finite undirected graph is the sum of $1-\cos(\theta_x-\theta_y)$ over its edges. Its equilibrium states are its critical points. Its Hessian is positive semidefinite when its real quadratic form is nonnegative on every real vector. See [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation) and [def-expander-sync-energy](item-def-expander-sync-energy).

[F2] On any finite nonempty complete graph, every critical point of this energy with positive-semidefinite Hessian has all phases equal modulo $2\pi$ ([prop-expander-prereq-complete-graph-psd-landscape](item-prop-expander-prereq-complete-graph-psd-landscape)).

[F3] Under countable choice, if every equilibrium with positive-semidefinite energy Hessian is fully synchronized, the graph is globally synchronizing in the sense stated above ([prop-expander-sync-psd-criterion](item-prop-expander-sync-psd-criterion), [def-expander-sync-global-synchrony](item-def-expander-sync-global-synchrony), [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)).

[F4] For a symmetric adjacency matrix, $e(X,X^c)$ is the sum of its entries indexed by $X\times X^c$; for an unweighted graph this counts crossing edges once ([prop-expander-prereq-indicator-and-cut-calculus](item-prop-expander-prereq-indicator-and-cut-calculus)).

## Proof

**Given:** The graph $G$ and countable choice as in the Statement.

**Goal:** Prove global synchrony and the stated cut bound.

1.1 Regard $G$ as the union of three complete graphs: the two cliques and the joining edge, the latter being a copy of $K_2$. Their edge sets are disjoint; the joining edge meets each clique at exactly its endpoint. By [F1], the energy of $G$ is the sum of their energies, each depending only on differences of phases within its own vertex set. [given, F1]

2.1 Let $\theta$ be a critical point of the energy of $G$ with positive-semidefinite Hessian. Write $V_1,V_2$ for the disjoint clique vertex sets, and $a\in V_1$, $b\in V_2$ for the joining endpoints. Fix either clique $C$, and let $c$ be its joining endpoint. For any real variation $h$ on $C$, set $k_x=h_x-h_c$ on $C$ and $k_x=0$ outside $C$. Along the path $\theta+tk$, every difference in $C$ changes by $t(h_x-h_y)$, while the joining edge and the other clique have constant differences. Thus the whole-graph energy along this path equals the energy of $C$ along its variation $h$, plus a constant. Its first derivative at $t=0$ is zero and its second derivative is nonnegative. Since $h$ was arbitrary, the restriction to each clique is critical with positive-semidefinite Hessian. This also covers a singleton clique, whose energy is constant. [given, F1, step 1.1]

3.1 For an arbitrary real variation $h$ on the joining edge $\{a,b\}$, instead set $k_x=h_a$ for every $x\in V_1$ and $k_x=h_b$ for every $x\in V_2$. Along $\theta+tk$, all within-clique differences remain constant, whereas the joining-edge difference changes by $t(h_a-h_b)$. Hence the whole-graph energy along this path equals the joining-edge energy along $h$, plus a constant. Whole-graph criticality and Hessian nonnegativity therefore make the first derivative zero and the second derivative nonnegative for every $h$. The joining-edge restriction is consequently critical with positive-semidefinite Hessian. [given, F1, step 1.1, step 2.1]

4.1 By [F2], each clique has a common phase and the endpoints of the joining edge have equal phases. Hence all vertices of $G$ have the same phase. Every equilibrium with Hessian nonnegative on real vectors is therefore fully synchronized. For the real symmetric Hessian $H$, writing $z=u+iv$ with real $u,v$ gives $z^*Hz=u^THu+v^THv$, so nonnegativity on real vectors is equivalent to nonnegativity on complex vectors as in [F3]. Thus [F3] gives global synchrony. [F2, F3, step 2.1, step 3.1, algebra]

5.1 For equal clique sizes $m\ge2$, let $X$ be one clique. Exactly the joining edge crosses from $X$ to $X^c$, so [F4] gives $e(X,X^c)=1$ and $|X|=m$. Defining edge expansion as the minimum of $e(S,S^c)/|S|$ over nonempty $S$ with $|S|\le |V|/2$, the admissible set $X$ gives the upper bound $1/m$, which tends to zero. This proves the stated contrast between global synchrony and a uniform positive edge-expansion bound. [F4, step 4.1, algebra] ∎

## Source notes

The example and its qualitative conclusion are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), Remark 1.7, PDF pp. 7–8. The proof above uses the declared mathematical suppliers; the article is attribution, not a premise of the proof.
