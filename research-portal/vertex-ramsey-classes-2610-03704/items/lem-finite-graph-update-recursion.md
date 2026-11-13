---
id: lem-finite-graph-update-recursion
kind: lemma
title: Recursion for deterministic finite graph updates
status: published
origin: pipeline
domain: mathematics
deps:
  - math:thm-recursion
  - math:thm-induction-principle
  - math:thm-omega-is-peano-system
  - math:def-finite-simple-graph
  - math:def-natural-numbers
  - math:def-power-set
  - math:def-cartesian-product
  - math:def-axiom-schema-of-separation
  - math:def-function
  - math:def-finite-cardinality
dependency_roles:
  math:thm-recursion: mathematical-premise
  math:thm-induction-principle: mathematical-premise
  math:thm-omega-is-peano-system: mathematical-premise
  math:def-finite-simple-graph: mathematical-premise
  math:def-natural-numbers: mathematical-premise
  math:def-power-set: mathematical-premise
  math:def-cartesian-product: mathematical-premise
  math:def-axiom-schema-of-separation: mathematical-premise
  math:def-function: mathematical-premise
  math:def-finite-cardinality: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

Let $X$ be the set of finite simple graphs whose vertex sets are finite ordinals, represented by their vertex and edge sets. Given $J_1\in X$ and a total function $T:X\to X$, there is a unique sequence $(J_r)_{r\geq1}$ in $X$ with first term $J_1$ and successive terms $J_{r+1}=T(J_r)$. Every term is finite. Any property of elements of $X$ that holds at $J_1$ and is preserved by $T$ holds at every stage.

## Facts & Assumptions

**Given:** $J_1\in X$ and a total function $T:X\to X$. A finite simple graph is a pair $(V,E)$ with finite vertex set $V$ and edge set $E$ consisting of two-element subsets of $V$ ([[math:def-finite-simple-graph]]). The finite ordinals are the natural numbers, with $0=\varnothing$ and successor $\sigma(n)=n\cup\{n\}$ ([[math:def-natural-numbers]]).

[F1] Power sets and Cartesian products of sets exist, and Separation selects the elements satisfying a specified condition from a set ([[math:def-power-set]], [[math:def-cartesian-product]], [[math:def-axiom-schema-of-separation]]).

[F2] The natural numbers form a Peano system; recursion on that system gives a unique function into a set with a prescribed initial value and total self-map ([[math:thm-omega-is-peano-system]], [[math:thm-recursion]]).

[F3] A property holding at $0$ and passing from each natural number to its successor holds for every natural number ([[math:thm-induction-principle]]).

[F4] A function $f:A\to B$ has domain exactly $A$ and assigns each element of $A$ a unique value in $B$; thus it is total on $A$. Here a sequence $(J_r)_{r\geq1}$ in $X$ means a function from the positive natural numbers to $X$, with value $J_r$ at $r$ ([[math:def-function]]).

[F5] Each natural number $n$, regarded as a von Neumann ordinal, is a finite set and has cardinality $n$ ([[math:def-finite-cardinality]], consequence (a)).

## Proof

**Given:** The graph $J_1$ and update $T$ above.

**Goal:** Construct the unique sequence and prove the preservation assertion.

1.1 By F5 every $n\in\mathbb N$ is finite. Every finite ordinal $n$ is a subset of $\mathbb N$, and every edge of a simple graph on $n$ is a subset of $\mathbb N$. Thus each such graph $(n,E)$ belongs to $\mathbb N\times\mathcal P(\mathcal P(\mathbb N))$. By Separation, the members of this product for which $E$ consists of two-element subsets of $n$ form a set $X$; these are exactly the stated graphs, since every selected vertex set $n$ is finite. [F1, F5, given, construct]

2.1 Apply recursion to the set $X$, initial value $J_1$, and self-map $T$. It yields a unique $g:\mathbb N\to X$ with $g(0)=J_1$ and $g(\sigma(n))=T(g(n))$. Define $J_{\sigma(n)}=g(n)$ for every $n\in\mathbb N$. The relation $\{(\sigma(n),g(n)):n\in\mathbb N\}$ exists by Separation inside $\mathbb N\times X$. Every positive natural number has a unique predecessor in the Peano system, so this relation is a function on precisely the positive indices in the sense of F4; its first term is $J_1$ and $J_{r+1}=T(J_r)$. [F1, F2, F4, step 1.1, given, construct]

3.1 Conversely, shifting any sequence satisfying those initial and update equations back by one index gives a function satisfying the recursion equations for $g$; uniqueness in recursion therefore makes the sequence unique. Every term is in $X$, so every term is a finite simple graph. [F2, F4, step 2.1]

4.1 Let $P$ be a property of elements of $X$ holding at $J_1$ and preserved by $T$. The property $P(g(n))$ holds at $0$ and, by the recursion equation and preservation, passes from $n$ to $\sigma(n)$. Induction gives $P(g(n))$ for every $n$, hence $P(J_r)$ for every positive stage $r$. This proves the assertions. [F3, step 2.1, given] ∎

## Remarks

An operation described only up to isomorphism must be made into an actual total function $T$ on the stated labelled graphs before this lemma applies; the lemma does not itself choose representatives or establish a graph invariant.
