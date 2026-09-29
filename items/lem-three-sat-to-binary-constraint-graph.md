---
id: lem-three-sat-to-binary-constraint-graph
kind: lemma
title: "A three-CNF formula as a fixed-alphabet binary constraint graph"
status: published
origin: pipeline
deps:
  - def-boolean-formula-cnf-and-sat
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
  audited: 2026-09-30
---

## Statement

For a three-CNF formula $F$ with $m$ clauses, each having exactly three
literal occurrences, there is a polynomial-time binary constraint graph over
the fixed alphabet
$$\widehat\Sigma=\{B(0),B(1)\}\sqcup\{T(a):a\in\{0,1\}^3\}$$
with exactly $3m$ edges. Its value is one exactly when $F$ is satisfiable. If
$F$ is unsatisfiable and $m\ge1$, then
$$\operatorname{UNSAT}(G_F)\ge\frac1{3m}.$$
The zero-clause formula maps to an edgeless graph.

## Facts & Assumptions

[F1] A CNF clause is a disjunction of literals, and each literal is a variable
or its negation. ([[def-boolean-formula-cnf-and-sat]])

[F2] A binary constraint graph carries a finite nonempty alphabet, explicit
binary edge relations, and has value one when it is edgeless.
([[def-constraint-graph-and-labeling-value]])

## Proof

**Given:** Write each clause as $C_i=\ell_{i1}\lor\ell_{i2}\lor\ell_{i3}$,
where each $\ell_{ij}$ is a literal on an old Boolean variable.

1.1 For each old variable add one shared bit vertex. For each clause $C_i$ add a private tuple vertex $z_i$ and put $A_i=\{a\in\{0,1\}^3:C_i\text{ evaluates to true on }(a_1,a_2,a_3)\}$. For each occurrence $j=1,2,3$, add a separate edge from $z_i$ to the old variable in $\ell_{ij}$ with relation $S_{ij}=\{(T(a),B(a_j)):a\in A_i\}$. Thus every clause contributes exactly three edges, including parallel edges when variables repeat, for a total of $3m$. [F1, F2, given, construct]

2.1 If $F$ is satisfied by an assignment $\sigma$, label each old vertex by $B(\sigma(x))$ and each $z_i$ by the tuple of the three variable values at its occurrences. That tuple lies in $A_i$, so all three edges of every clause star pass and $\operatorname{val}(G_F)=1$. [F1, step 1.1, construct]

2.2 Conversely, if all graph edges pass, each clause tuple vertex has a label $T(a)$ with $a\in A_i$, and each edge forces its occurrence coordinate to equal the corresponding old bit label. A repeated variable uses the same old vertex on every occurrence edge, so the equalities are consistent. Therefore each original clause is true under the old bit labels; hence $F$ is satisfiable. [F1, F2, step 1.1]

3.1 The two implications prove $\operatorname{val}(G_F)=1$ exactly when $F$ is satisfiable. If $m=0$, the graph is edgeless, has value one by convention, and the empty conjunction is true. If $m\ge1$ and $F$ is unsatisfiable, step 2.2 shows no graph labeling can satisfy all $3m$ edges, so every labeling violates at least one and $\operatorname{UNSAT}(G_F)\ge1/(3m)$. The alphabet and each edge table have constant size, so the explicit construction is polynomial time. [F2, step 1.1, step 2.1, step 2.2, algebra, discharge-construct] ∎
