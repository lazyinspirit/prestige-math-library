---
id: prop-the-cone-connecting-map-agrees-with-the-shifted-identity-up-to-the-declared-sign
kind: proposition
title: "The cone connecting map agrees with the shifted identity up to the declared sign"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-elementwise-formula-for-the-connecting-map-in-module-categories,
       thm-the-cone-long-exact-sequence,
       prop-homology-of-a-shift-is-shifted-homology]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-27
---

## Statement

For the canonical short exact sequence
$$0\to D_\bullet\to\operatorname{Cone}(f)_\bullet\to C[1]_\bullet\to0$$
of a chain map $f:C_\bullet\to D_\bullet$ in a module category, the connecting
morphism
$$\partial_n:H_n(C[1])\to H_{n-1}(D)$$
corresponds under the shift isomorphism
$$H_n(C[1])\xrightarrow{\sim}H_{n-1}(C)$$
to the homology map $H_{n-1}(f)$. In particular, when $f=1_C$, the connecting
morphism is the shifted identity up to the sign built into the shift
convention.

## Facts & Assumptions

**Given:** A chain map $f:C_\bullet\to D_\bullet$ of module complexes and an integer $n$.

[L1] The cone long exact sequence is obtained from the canonical short exact cone sequence ([[thm-the-cone-long-exact-sequence]]).

[L2] In module categories, the connecting map is computed by lifting a cycle and taking its boundary class ([[prop-elementwise-formula-for-the-connecting-map-in-module-categories]]).

[L3] The shift isomorphism identifies $H_n(C[1])$ with $H_{n-1}(C)$ using the sign convention fixed for shifts ([[prop-homology-of-a-shift-is-shifted-homology]]).

## Proof

**Proof technique:** direct.

1.1 A class in $H_n(C[1])$ is represented by a cycle $x\in C_{n-1}$. In the canonical cone sequence, the element $(0,x)\in\operatorname{Cone}(f)_n$ lifts that class, and its boundary is $$(f_{n-1}(x),0).$$ By [L2], the connecting morphism sends $[x]$ to $[f_{n-1}(x)]\in H_{n-1}(D)$. [L2, L3, given, algebra]

2.1 Step 1.1 is exactly the formula for $H_{n-1}(f)$ after identifying $H_n(C[1])$ with $H_{n-1}(C)$ via [L3]. Hence the connecting map of the cone sequence agrees with $H_{n-1}(f)$ under that shift identification. When $f=1_C$, this becomes the shifted identity with precisely the sign encoded in [L3]. [L1, L3, step 1.1, algebra] ∎

