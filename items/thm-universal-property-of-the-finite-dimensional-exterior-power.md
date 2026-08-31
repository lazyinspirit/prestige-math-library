---
id: thm-universal-property-of-the-finite-dimensional-exterior-power
kind: theorem
title: "Universal property of the finite-dimensional exterior power"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-dimensional-exterior-power-of-vectors,
       lem-wedge-monomials-in-a-dual-basis-form-a-basis]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Statement

Let $A:V^k\to W$ be an alternating $k$-linear map into a real vector space $W$.
Then there is a unique linear map

$$
\widetilde A:\bigwedge^kV\to W
$$

such that

$$
\widetilde A(v_1\wedge\cdots\wedge v_k)=A(v_1,\ldots,v_k)
$$

for all $v_1,\ldots,v_k\in V$.

## Facts & Assumptions

**Given:** An alternating $k$-linear map $A:V^k\to W$.

[F1] The $k$th exterior power is the dual space $\bigwedge^kV=\operatorname{Alt}^k(V)^*$, and $v_1\wedge\cdots\wedge v_k$ is the evaluation functional $\omega\mapsto\omega(v_1,\ldots,v_k)$ ([[def-finite-dimensional-exterior-power-of-vectors]]).

[L1] The wedges of a basis form a basis of $\operatorname{Alt}^k(V)$, so the corresponding decomposable $k$-vectors span $\bigwedge^kV$ by duality ([[lem-wedge-monomials-in-a-dual-basis-form-a-basis]]).

## Proof
**Proof technique:** direct.

1.1 Choose a basis $e_1,\ldots,e_n$ of $V$. Define $\widetilde A$ on the spanning set of decomposable wedges by $$ \widetilde A(e_{i_1}\wedge\cdots\wedge e_{i_k}):=A(e_{i_1},\ldots,e_{i_k}) $$ for $i_1<\cdots<i_k$, and extend linearly. This is possible because [L1] gives a basis indexed by those increasing tuples. [L1, given, choose, construct]

2.1 For arbitrary $v_1,\ldots,v_k$, expand each $v_j$ in the chosen basis. Multilinearity of $A$ and of the wedge, together with alternation on both sides, reduce both expressions to the same signed sum over increasing $k$-tuples. Hence $\widetilde A(v_1\wedge\cdots\wedge v_k)=A(v_1,\ldots,v_k)$. [F1, step 1.1, algebra]

3.1 If $L:\bigwedge^kV\to W$ is another linear map with the same property, then $L$ and $\widetilde A$ agree on every decomposable basis wedge, hence on all of $\bigwedge^kV$ by linearity and [L1]. So $\widetilde A$ is unique. [L1, step 2.1]

4.1 Therefore every alternating $k$-linear map factors uniquely through $\bigwedge^kV$. [step 1.1, step 2.1, step 3.1] ∎