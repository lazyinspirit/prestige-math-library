---
id: def-expander-sync-cheeger-constant
title: Edge isoperimetric constant convention
kind: definition
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-sync-graph-notation
  - def-expander-sync-edge-count
  - math:def-finite-cardinality
  - math:cor-cardinality-of-the-power-set
  - math:thm-subset-of-a-finite-set
  - math:lem-finite-set-has-max
  - math:def-max-min
dependency_roles:
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-sync-edge-count: mathematical-premise
  math:def-finite-cardinality: mathematical-premise
  math:cor-cardinality-of-the-power-set: mathematical-premise
  math:thm-subset-of-a-finite-set: mathematical-premise
  math:lem-finite-set-has-max: mathematical-premise
  math:def-max-min: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 20, Remark 3.5, following Lemma 3.4
      statement: Remark 3.5 calls the isometric constant the Cheeger constant and
        states the lower bound (1+c−)d*/2 for the article's expanders.
      hypotheses: The graph is an (n, d*, α, c−, c+)-expander in the article's sense.
      reading_limits: Lemma 3.4 and Remark 3.5 were inspected in the extracted article
        text. The remark does not display a definition of the constant; the
        formula below records the cut normalization consistent with the
        preceding lemma. This citation is attribution, not proof of the
        definition or its well-definedness.
dependency_level: 3
---

## Definition

Let $G=(V,E)$ be a finite undirected graph with at most one edge between any pair of vertices, possible self-loops, and $n=|V|\ge 2$. For $X\subseteq V$, write $X^c=V\setminus X$ and let $e(X,X^c)$ count edges between $X$ and $X^c$, each once. The edge isoperimetric constant, or Cheeger constant, in the unnormalized cut convention is

$$h(G):=\min_{\substack{X\subseteq V\\0<|X|\le n/2}}\frac{e(X,X^c)}{|X|}.$$

Thus the minimum ranges over all nonempty vertex subsets of size at most half of $n$. For $n=1$ this convention leaves $h(G)$ undefined, since there is no admissible subset.

## Definition references

[[def-expander-sync-graph-notation]]

[[def-expander-sync-edge-count]]

[[math:def-finite-cardinality]]

[[math:def-max-min]]

## Facts & Assumptions

[F1] For subsets of the vertex set, the ordered adjacency count $e(X,Y)$ is well defined; when $X$ and $Y$ are disjoint it counts each edge between them once. The complement $X^c$ consists of the vertices outside $X$ ([[def-expander-sync-edge-count]]).

[F2] A finite set has a well-defined natural-number cardinality $m$ and a bijection with $\{0,\ldots,m-1\}$; its power set is finite, and every subset of a finite set is finite ([[math:def-finite-cardinality]], [[math:cor-cardinality-of-the-power-set]], [[math:thm-subset-of-a-finite-set]]).

[F3] For every integer $m\ge1$ and real numbers $r_0,\ldots,r_{m-1}$, the set $\{r_0,\ldots,r_{m-1}\}$ has a minimum ([[math:lem-finite-set-has-max]]).

[F4] For $S\subseteq\mathbb R$, a minimum is an element $q\in S$ with $q\le s$ for every $s\in S$. Such an element is unique when it exists; the empty set has no minimum ([[math:def-max-min]]).

## Justification

**Given:** A graph $G$ as in the definition, with $n\ge 2$.

**Goal:** Show that the displayed minimum is a well-defined real number.

1.1 The admissible subsets form a subset of the finite power set of $V$, so they are finite by [F2]. Since $n\ge 2$, $V$ contains a vertex $v$ and the singleton $\{v\}$ has cardinality $1\le n/2$; hence the admissible family is nonempty. For each admissible $X$, its positive cardinality makes the quotient $e(X,X^c)/|X|$ a well-defined real number by [F1] and [F2]. [given, F1, F2, algebra]

2.1 Let $\mathcal C$ be the admissible family from step 1.1 and put $m=|\mathcal C|\ge1$. By [F2], a bijection from $\{0,\ldots,m-1\}$ onto $\mathcal C$ lists its members as $X_0,\ldots,X_{m-1}$. Set $r_i=e(X_i,X_i^c)/|X_i|$; these are real numbers by step 1.1. The quotient values are exactly $\{r_0,\ldots,r_{m-1}\}$, so the finite-list assertion [F3] gives an attained minimum $q$. Every admissible cut is some $X_i$, hence $q$ is at most every cut ratio and equals one such ratio. It is unique: two such minimum values are each at most the other, and therefore equal. This is the value assigned to $h(G)$, independent of the chosen enumeration. If $n=1$, every nonempty subset is $V$ and has size $1>n/2$, so the indexing family is empty and the displayed minimum supplies no value. [F2, F3, F4, step 1.1, choose, construct, algebra] ∎

## Source notes

[Remark 3.5 of the article](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf) names the isometric or Cheeger constant and states a lower bound. It does not display its definition; the unnormalized cut convention above is consistent with the cut estimate in the preceding Lemma 3.4.
