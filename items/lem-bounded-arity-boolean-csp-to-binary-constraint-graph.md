---
id: lem-bounded-arity-boolean-csp-to-binary-constraint-graph
kind: lemma
title: "Bounded-arity Boolean constraints become binary graph constraints"
status: draft
origin: pipeline
deps:
  - def-assignment-tester-and-rejection-ratio
  - def-constraint-graph-and-labeling-value
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: constructive
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP Theorem by Gap Amplification"
      url: https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

Fix $q\ge2$. Every finite explicit Boolean constraint system with $m$ listed
constraints, each of arity $k_i$ satisfying $1\le k_i\le q$, has a
deterministically constructible binary constraint graph over the fixed
alphabet
$$\widehat\Sigma=\{B(0),B(1)\}\sqcup\{T(a):a\in\{0,1\}^q\}$$
with at most $q$ edges per listed constraint. The original variables remain
shared graph vertices. The graph has perfect completeness, and
$$\operatorname{UNSAT}(G')\ge\frac{\operatorname{UNSAT}(C)}q.$$

## Facts & Assumptions

[F1] A bounded-arity constraint system is a finite list of ordered variable
tuples and their relations; repeated variables and repeated constraints are
allowed. ([[def-assignment-tester-and-rejection-ratio]])

[F2] A binary constraint graph is a finite multigraph whose edges carry
explicit relations in specified endpoint order. ([[def-constraint-graph-and-labeling-value]])

## Proof

**Given:** Let the input constraints be $C_i=(x_{i,1},\ldots,x_{i,k_i})$ with
relations $R_i\subseteq\{0,1\}^{k_i}$, for $i=1,\ldots,m$.

1.1 Keep one shared vertex for each old variable. For each listed constraint $i$, add a private tuple vertex $z_i$; for each occurrence $j=1,\ldots,k_i$, add a separate edge from $z_i$ to $x_{i,j}$ with relation $S_{i,j}=\{(T(a),B(b)):a\in\{0,1\}^q,\ (a_1,\ldots,a_{k_i})\in R_i,\ b=a_j\}$. Thus suffix coordinates after $k_i$ are ignored, and the graph has exactly $\sum_i k_i\le qm$ edge records. [F1, F2, given, construct]

2.1 If $\sigma$ satisfies the input, label each old vertex $x$ by $B(\sigma(x))$ and label $z_i$ by $T(a_i)$, where $a_i$ has first $k_i$ coordinates $(\sigma(x_{i,1}),\ldots,\sigma(x_{i,k_i}))$ and zero suffix. Then $a_i$'s prefix lies in $R_i$, so every edge relation $S_{i,j}$ is satisfied. This proves perfect completeness. [F1, step 1.1, construct]

2.2 For any output labeling, decode an old vertex carrying $B(b)$ as bit $b$, and decode any other old label as $0$. If an input constraint is violated by this decoded assignment, at least one edge in its star must fail: if all its star edges passed, their common tuple label would have an accepted $R_i$-prefix equal coordinate-by-coordinate to the decoded old labels, contradicting that violation. This argument also covers repeated variable occurrences (they use the same old label on distinct parallel edge records) and $R_i=\varnothing$. [F1, F2, step 1.1]

3.1 Distinct input constraints have disjoint edge stars because their tuple vertices are private, even when their variable tuples repeat. Thus every output labeling violates at least as many edges as its decoded input assignment violates constraints, hence at least $m\operatorname{UNSAT}(C)$. If $m>0$, the output has at most $qm$ edges, so its violated fraction is at least $\operatorname{UNSAT}(C)/q$. If $m=0$, both systems have unsatisfaction zero by the empty-list convention, and the inequality still holds. [F1, F2, step 2.1, step 2.2, algebra, discharge-construct] ∎
