---
id: lem-exactness-at-the-target-of-the-connecting-map
kind: lemma
title: "Exactness at the target of the connecting map"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-connecting-morphism-in-homology,
       lem-the-cycle-boundary-diagram-associated-to-a-short-exact-sequence-of-complexes,
       thm-snake-lemma-under-the-weaker-stacks-hypotheses]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.13: Complexes"
      url: "https://stacks.math.columbia.edu/tag/010V"
pipeline_run: frontier-27
---

## Statement

For a short exact sequence of complexes
$$0\to A_\bullet\to B_\bullet\to C_\bullet\to0,$$
one has
$$\operatorname{im}(\partial_n:H_n(C)\to H_{n-1}(A))=\ker(H_{n-1}(A)\to H_{n-1}(B)).$$

## Facts & Assumptions

**Given:** A short exact sequence $0\to A_\bullet\to B_\bullet\to C_\bullet\to0$ of complexes and an integer $n$.

[L1] Applying the weaker snake lemma to the quotient-kernel diagram in degree $n$ gives an exact segment
$$H_n(C)\xrightarrow{\partial_n}H_{n-1}(A)\to H_{n-1}(B)$$
under the canonical kernel and cokernel identifications ([[lem-the-cycle-boundary-diagram-associated-to-a-short-exact-sequence-of-complexes]], [[thm-snake-lemma-under-the-weaker-stacks-hypotheses]], [[def-connecting-morphism-in-homology]]).

## Proof

**Proof technique:** direct.

1.1 The three maps in [L1] are exactly the maps appearing in the statement. [L1, given]

2.1 Exactness of that categorical segment gives $$\operatorname{im}(\partial_n)=\ker(H_{n-1}(A)\to H_{n-1}(B)),$$ as required. [L1, step 1.1] ∎
