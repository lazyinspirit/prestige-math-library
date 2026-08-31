---
id: ex-the-cone-long-exact-sequence-for-multiplication-by-m
kind: example
title: "The cone long exact sequence for multiplication by m"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-cone-long-exact-sequence]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-27
---

## Example

Fix a nonzero integer $m$ and consider the chain map
$$\times m:\mathbb Z[0]\to\mathbb Z[0].$$
Its cone long exact sequence contains the exact segment
$$0\to H_1(\operatorname{Cone}(\times m))\to \mathbb Z\xrightarrow{\times m}\mathbb Z\to H_0(\operatorname{Cone}(\times m))\to0.$$
Hence
$$H_1(\operatorname{Cone}(\times m))=0,\qquad H_0(\operatorname{Cone}(\times m))\cong\mathbb Z/m.$$

## Facts & Assumptions

**Given:** A nonzero integer $m$.

[L1] The cone of a chain map fits into a long exact homology sequence whose outer maps are the homology maps of the original chain map ([[thm-the-cone-long-exact-sequence]]).

## Verification

**Proof technique:** direct.

1.1 Since both source and target are stalk complexes in degree $0$, their only nonzero homology group is $H_0\cong\mathbb Z$. Applying [L1] to $\times m$ gives the displayed exact segment. [L1, given, algebra]

2.1 The map in the middle is multiplication by $m$, so its kernel is $0$ and its cokernel is $\mathbb Z/m$. Exactness identifies these with $H_1(\operatorname{Cone}(\times m))$ and $H_0(\operatorname{Cone}(\times m))$ respectively. [L1, step 1.1, algebra] ∎

