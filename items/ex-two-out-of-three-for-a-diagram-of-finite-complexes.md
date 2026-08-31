---
id: ex-two-out-of-three-for-a-diagram-of-finite-complexes
kind: example
title: "Two-out-of-three for a diagram of finite complexes"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-two-out-of-three-for-quasi-isomorphisms-in-a-short-exact-sequence-diagram]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-27
---

## Example

Compare the cone sequences of $\times2$ and $\times(-2)$ on $\mathbb Z[0]$:
$$0\to \mathbb Z[0]\to \operatorname{Cone}(\times2)\to \mathbb Z[1]\to0,$$
$$0\to \mathbb Z[0]\to \operatorname{Cone}(\times(-2))\to \mathbb Z[1]\to0.$$
Take the vertical maps to be $-1_{\mathbb Z[0]}$ on the left,
$1_{\mathbb Z[1]}$ on the right, and the middle map that is multiplication by
$1$ in degree $1$ and by $-1$ in degree $0$. The outer maps are obvious
quasi-isomorphisms, so the middle one is too.

## Facts & Assumptions

**Given:** The morphism of short exact sequences described in the example.

[L1] In a morphism of short exact sequences, any two quasi-isomorphisms force the third ([[cor-two-out-of-three-for-quasi-isomorphisms-in-a-short-exact-sequence-diagram]]).

## Verification

**Proof technique:** direct.

1.1 The left and right vertical maps are isomorphisms of stalk complexes, hence quasi-isomorphisms. With the left map also equal to $-1$, the middle vertical map commutes with the canonical inclusion $j_n(y)=(y,0)$ and the projection to $C[1]$, so it is a morphism of short exact sequences; it is a chain map because it changes the sign in degree $0$ exactly as needed to compare the differentials $2$ and $-2$. [L1, given, construct]

2.1 Both cone complexes have homology $\mathbb Z/2$ in degree $0$ and $0$ elsewhere, so the middle vertical map induces an isomorphism on homology. This agrees with the prediction of [L1]: once the outer two maps are quasi-isomorphisms, the third must be as well. [L1, step 1.1, algebra] ∎
