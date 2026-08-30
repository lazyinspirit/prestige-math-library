---
id: thm-the-first-isomorphism-theorem-for-complexes
kind: theorem
title: "The first isomorphism theorem for complexes"
status: draft
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-first-isomorphism-theorem-in-an-abelian-category,
       prop-images-and-coimages-of-chain-maps-are-computed-degreewise,
       lem-the-kernel-of-a-chain-map-is-computed-degreewise]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-24
---

## Statement

For every chain map $f:C_\bullet\to D_\bullet$ in an abelian category, there is
a canonical isomorphism of complexes
$$C_\bullet/\ker(f)\cong\operatorname{im}(f).$$

## Facts & Assumptions

**Given:** A chain map $f:C_\bullet\to D_\bullet$.

[L1] In an abelian category, $C_n/\ker(f_n)\cong\operatorname{im}(f_n)$ canonically for every component map $f_n$ ([[thm-first-isomorphism-theorem-in-an-abelian-category]]).

[L2] The image and coimage of a chain map are computed degreewise ([[prop-images-and-coimages-of-chain-maps-are-computed-degreewise]]).

[L3] The kernel of $f$ is the degreewise kernel complex ([[lem-the-kernel-of-a-chain-map-is-computed-degreewise]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], the quotient complex $C/\ker(f)$ has $n$th term $C_n/\ker(f_n)$. By [L1], each of these terms is canonically isomorphic to $\operatorname{im}(f_n)$. [L1, L3]

2.1 By [L2], the complex $\operatorname{im}(f)$ has $n$th term $\operatorname{im}(f_n)$, and the component isomorphisms from step 1.1 are the coimage-to-image comparisons of the chain map $f$. Hence they commute with the differentials and assemble to the claimed isomorphism of complexes. [L1, L2, step 1.1] ∎
