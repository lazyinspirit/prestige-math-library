---
id: thm-finite-markov-closed-class-decomposition-correctness
kind: theorem
title: "Correctness of finite Markov closed-class decomposition"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-finite-column-stochastic-matrix-and-law
  - alg-finite-markov-closed-class-decomposition
  - lem-finite-transient-block-geometric-escape
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used; every algorithmic loop and graph path is finite."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Charles M. Grinstead and J. Laurie Snell, Introduction to Probability, Chapter 11"
      url: "https://math.dartmouth.edu/~prob/prob/OLD/prob.pdf"
      locator: "§11.2, Theorem 11.3 and canonical form, printed pp. 416–420; finite paths to closed classes and finite-step escape, with the graph algorithm proved locally here."
verification:
  precheck: pass
---

## Statement

Let $P$ be a finite real column-stochastic matrix on $S=\{1,\ldots,n\}$, $n\ge1$, with exact comparisons that terminate as required by [[alg-finite-markov-closed-class-decomposition]], and put $K=P^{\mathsf T}$. The algorithm terminates and returns exactly the strongly connected components of the positive-transition graph; its reported closed classes are exactly the components with no outgoing edge. Let $U$ be the union of the other components. Every state in $U$ has a positive-probability path in $K$ to a closed class. Consequently, if $U\ne\varnothing$ and $T=K_{U,U}$, then $T$ satisfies the finite-step escape hypothesis of [[lem-finite-transient-block-geometric-escape]] and its powers decay geometrically as in that lemma. Thus the returned remainder is transient in the finite-state sense used by the hitting-statistic results.

## Facts & Assumptions

**Given:** A finite column-stochastic matrix $P$ with the exact comparison interface in the graph algorithm.

[F1] [[def-finite-column-stochastic-matrix-and-law]]: $P$ has nonnegative entries and unit column sums, and $K=P^{\mathsf T}$ is the corresponding row-stochastic transition matrix.

[F2] [[alg-finite-markov-closed-class-decomposition]]: the algorithm initializes reflexive reachability together with positive transitions, updates it by $R_{ij}\gets R_{ij}\lor(R_{ik}\land R_{kj})$ for each intermediate vertex $k$, groups mutually reachable states, and tests whether a component has an outgoing positive transition.

[F3] [[lem-finite-transient-block-geometric-escape]]: a finite nonnegative row-substochastic block whose every state has a positive path to a row with positive escape has some $L\le n$ and $\varepsilon>0$ with $T^L\mathbf1\le(1-\varepsilon)\mathbf1$; its powers then decay geometrically.

## Proof

**Given:** $P$, its row transition matrix $K$, and the finite graph procedure above.

**Proof technique:** verify the finite reachability recurrence, then use the acyclic component graph to obtain a uniform escape path.

1.1 Before processing vertex $k$, the Boolean relation records exactly the positive paths whose intermediate vertices lie among $1,\ldots,k-1$: this is true initially because the relation contains precisely zero-step paths and one-edge paths. A path with intermediate vertices among $1,\ldots,k$ either avoids $k$, or can have repeated visits to $k$ removed and be split at its single remaining visit into two paths whose intermediate vertices are among $1,\ldots,k-1$. Conversely, concatenating those two paths gives a path through $k$. Thus the update $R_{ij}\gets R_{ij}\lor(R_{ik}\land R_{kj})$ gives exactly the reachability relation after processing $k$. The three loops range over the finite set $S$ and all required comparisons terminate by hypothesis, so the algorithm terminates. [F1, F2, given, induction]

2.1 After $k=n$, $R_{ij}$ holds exactly when $j$ is reachable from $i$. Mutual reachability is reflexive, symmetric, and transitive by zero-step paths, reversal of the two reachability assertions, and path concatenation, respectively; hence the algorithm's grouping is exactly the strongly connected component partition. Its finite scan marks a component closed exactly when there is no edge from one of its vertices to a vertex outside it, which is precisely the definition of a closed component. [F2, step 1.1, algebra]

3.1 The directed graph obtained by contracting each strongly connected component is finite and has no directed cycle, since a cycle would make its components mutually reachable and therefore a single component. Starting from any component and following outgoing edges must therefore reach a sink after finitely many steps; sinks are exactly the closed components from step 2.1. Lift this component path to a state path by joining each consecutive pair of intercomponent-edge endpoints with a path inside the current strongly connected component. All edges on the resulting finite state path have positive transition probabilities. A path from a nonclosed component cannot enter a closed component and later leave it, so before its first entry into a closed class it stays in $U$. Therefore every state in $U$ has a positive path through $U$ to a row with positive escape probability into a closed class. [F1, F2, step 2.1, construct]

4.1 The block $T=K_{U,U}$ is nonnegative and row-substochastic because each row of $K$ sums to one. For every row reached at the end of the path in step 3.1, the positive transition into a closed class is omitted from $T$, so its escape probability $1-\sum_{j\in U}T_{ij}$ is positive. Thus every state of $U$ satisfies the path hypothesis of [F3], which gives the claimed finite-step escape bound and geometric decay. If $U=\varnothing$, there is no transient remainder and the same output description holds without a block $T$. [F1, F3, step 3.1, algebra] ∎
