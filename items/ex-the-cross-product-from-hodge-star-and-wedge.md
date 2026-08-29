---
id: ex-the-cross-product-from-hodge-star-and-wedge
kind: example
title: "The cross product is recovered from $\\star(u\\wedge v)$ in $\\mathbb R^3$"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-cross-product-is-hodge-star-of-the-wedge]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Reyer Sjamaar, Manifolds and Differential Forms, §2.5"
      url: "https://pi.math.cornell.edu/~sjamaar/manifolds/manifold.pdf"
---

## Example

For $u=(1,0,2)$ and $v=(0,3,1)$ in oriented Euclidean $\mathbb R^3$,

$$u\wedge v=(e_1+2e_3)\wedge(3e_2+e_3)=3e_1\wedge e_2+e_1\wedge e_3-6e_2\wedge e_3,$$

and applying the Hodge star gives $3e_3-e_2-6e_1$, that is $(-6,-1,3)$, which is exactly the coordinate cross product $u\times v=(0\cdot1-2\cdot3,\ 2\cdot0-1\cdot1,\ 1\cdot3-0\cdot0)=(-6,-1,3)$.

## Facts & Assumptions

**Given:** The vectors $u=(1,0,2)$, $v=(0,3,1)$ and the standard oriented orthonormal basis of $\mathbb R^3$.

[L1] In oriented Euclidean three-space, the cross product is $u\times v=\star(u\wedge v)$ ([[cor-cross-product-is-hodge-star-of-the-wedge]]).

## Verification

**Proof technique:** direct.


1.1 Expanding the wedge gives $u\wedge v=(e_1+2e_3)\wedge(3e_2+e_3)=3e_1\wedge e_2+e_1\wedge e_3+6e_3\wedge e_2=3e_1\wedge e_2+e_1\wedge e_3-6e_2\wedge e_3$. [algebra]

1.2 The coordinate cross product is $u\times v=(u_2v_3-u_3v_2,\ u_3v_1-u_1v_3,\ u_1v_2-u_2v_1)=(-6,-1,3)$. [algebra]

2.1 Applying the star to step 1.1, with $\star(e_1\wedge e_2)=e_3$, $\star(e_1\wedge e_3)=-e_2$, $\star(e_2\wedge e_3)=e_1$, gives $\star(u\wedge v)=3e_3-e_2-6e_1=(-6,-1,3)$. [L1, step 1.1, algebra]

3.1 Steps 2.1 and 1.2 produce the same vector, in agreement with the identity of [L1]. [L1, step 1.2, step 2.1] ∎
