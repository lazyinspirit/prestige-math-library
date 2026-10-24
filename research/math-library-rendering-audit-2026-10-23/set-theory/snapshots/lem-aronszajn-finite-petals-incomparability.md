---
id: lem-aronszajn-finite-petals-incomparability
kind: lemma
title: "Two finite disjoint petals can be made cross-incomparable"
status: published
origin: pipeline
deps: [def-aronszajn-suslin-and-special-tree, lem-cocountable-ultrafilter-on-uncountable-set, lem-ultrafilter-prime, lem-tree-predecessors-and-common-extensions, thm-countable-union-of-countable, def-filter, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Lemma 16.36, printed pp331–332; bounded-level exclusion and maximal-branch argument expanded locally"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Statement

In ZFC, if $T$ is an Aronszajn tree and $\mathcal W$ is an uncountable family of pairwise disjoint finite subsets of $T$, then distinct $S,R\in\mathcal W$ satisfy: every node in $S$ is incomparable with every node in $R$.

## Facts & Assumptions

**Given:** Such $T$ and $\mathcal W$; assume AC. Here a family is a set of distinct finite subsets, and “comparable” includes equality.

[F1] Aronszajn trees have height $\omega_1$, countable levels and no cofinal branch. [[def-aronszajn-suslin-and-special-tree]]

[F2] On every uncountable set there is an ultrafilter all of whose members are uncountable and containing every cocountable subset. [[lem-cocountable-ultrafilter-on-uncountable-set]]

[F3] If a finite union belongs to an ultrafilter, one of its terms belongs to it. [[lem-ultrafilter-prime]]

[F4] Nodes with a common tree extension are comparable, and strict tree order strictly increases height; predecessors at a specified smaller height are unique. [[lem-tree-predecessors-and-common-extensions]]

[F5] Countable unions of countable sets are countable under countable choice. [[thm-countable-union-of-countable]]

[F6] Filters are closed under pairwise intersections, omit the empty set, and are upward closed. [[def-filter]]

[A1] Assume AC. [[def-axiom-of-choice]]

## Proof

1.1 If $\varnothing\in\mathcal W$, pair it with any other member; the conclusion is vacuous and there is another member because $\mathcal W$ is uncountable. Otherwise every member has positive size. Partition $\mathcal W$ by its finite sizes. F5 and A1 imply that some size $m>0$ occurs uncountably often; restrict to that subfamily, still denoted $\mathcal W$. Use AC to fix for each $S\in\mathcal W$ an enumeration $(x_i^S)_{i<m}$. [F5, A1, given]

2.1 Fix an ultrafilter $\mathcal U$ on $\mathcal W$ as in F2. Suppose the conclusion fails. For $x\in T$ and $i<m$ let $Y(x,i)=\{R\in\mathcal W:x\text{ is comparable with }x_i^R\}$. For fixed $S\in\mathcal W$, failure supplies a comparable pair between $S$ and every $R\ne S$, so the finite union of $Y(x,i)$ over $x\in S,i<m$ contains $\mathcal W\setminus\{S\}$. This cocountable set belongs to $\mathcal U$, and upward closure F6 puts the union in $\mathcal U$. F3 gives a pair $(x_S,i_S)$ with $x_S\in S$ and $Y(x_S,i_S)\in\mathcal U$. Use the already fixed finite enumeration and the usual order on $m\times m$ to take its first such pair. [F2, F3, F6, step 1.1]

3.1 Some $k<m$ occurs as $i_S$ on an uncountable subfamily $\mathcal Z$: otherwise its finitely many fibers would all be countable and F5 would make $\mathcal W$ countable. For distinct $S,R\in\mathcal Z$, F6 gives $V=Y(x_S,k)\cap Y(x_R,k)\in\mathcal U$, so F2 says $V$ is uncountable. Put $\gamma=\max\{\operatorname{ht}(x_S),\operatorname{ht}(x_R)\}+1<\omega_1$. The set $T_{<\gamma}$ is countable by F1 and F5, since $\gamma$ is countable. The map $H\mapsto x_k^H$ is injective on $\mathcal W$ because its members are disjoint. Consequently only countably many $H\in V$ can have $x_k^H\in T_{<\gamma}$. Choose an $H$ outside those exceptions. Its $k$th node is comparable with $x_S,x_R$ and strictly higher than both, so F4 forces it to extend both. Hence $x_S,x_R$ are comparable. [F1, F2, F4, F5, F6, A1, step 1.1, step 2.1]

4.1 The set $C=\{x_S:S\in\mathcal Z\}$ is therefore an uncountable chain: injectivity follows from disjointness, and comparability from step 3.1. Its heights are unbounded in $\omega_1$, since any bounded collection of levels is countable by the same F1/F5 argument. Its downward closure $B=\{t:\exists c\in C\ (t\le_Tc)\}$ is a chain: compare two witnesses in $C$ and use F4 to compare both predecessors below the higher witness. It is cofinal. It is also maximal: if a node $u$ is comparable with every member of $B$, take $c\in C$ of height above $u$; F4 forces $u<_Tc$, whence $u\in B$. Thus $B$ is a cofinal branch, contradicting F1. The failure assumed in step 2.1 is impossible, proving the assertion. [F1, F4, F5, A1, step 2.1, step 3.1] ∎
