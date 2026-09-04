---
id: ex-the-categorical-trace-of-a-linear-endomorphism-is-its-matrix-trace
kind: example
title: "The categorical trace of a linear endomorphism is its matrix trace"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-categorical-trace-of-a-morphism-into-the-double-dual, def-trace-of-an-endomorphism, def-canonical-map-to-the-double-dual, def-pivotal-structure]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Definition 4.7.1 and Example 4.7.10"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Example

For a finite-dimensional vector space $V$ and a linear endomorphism $T:V\to V$,
the categorical trace of $J_V\circ T:V\to V^{**}$ is the ordinary trace of $T$.

## Facts & Assumptions

**Given:** A finite-dimensional vector space $V$ and a linear endomorphism
$T:V\to V$.

[L1] The map $J_V:V\to V^{**}$ is the canonical comparison
([[def-canonical-map-to-the-double-dual]]).

[L2] The ordinary trace of $T$ is defined basis-independently by
[[def-trace-of-an-endomorphism]], and the categorical trace applies to
$J_V\circ T$ by [[def-the-categorical-trace-of-a-morphism-into-the-double-dual]].

## Verification

**Proof technique:** direct.

1.1 The canonical map $J_V:V\to V^{**}$ from [[def-canonical-map-to-the-double-dual]] is the standard pivotal comparison for finite-dimensional vector spaces, so $J_V\circ T$ is an input for the categorical trace of [[def-the-categorical-trace-of-a-morphism-into-the-double-dual]]. [given, L1, L2]

2.1 In a basis $(v_i)$ with dual basis $(v_i^*)$, write $T(v_j)=\sum_i a_{ij}v_i$. Then $$\operatorname{Tr}_L(J_VT)=\sum_i J_V(T(v_i))(v_i^*)=\sum_i v_i^*(T(v_i))=\sum_i a_{ii}.$$ [step 1.1, algebra]

3.1 The right-hand side is exactly the ordinary trace of $T$ by [[def-trace-of-an-endomorphism]]. So the categorical trace specializes to the matrix trace in finite-dimensional linear algebra. [step 2.1, L2] ∎
