---
id: lem-exactness-at-the-homology-of-the-left-complex
kind: lemma
title: "Exactness at the homology of the left complex"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-connecting-morphism-in-homology,
       lem-the-cycle-boundary-diagram-associated-to-a-short-exact-sequence-of-complexes,
       thm-snake-lemma-under-the-weaker-stacks-hypotheses]
proof_strategy: direct
verification:
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
$$\operatorname{im}(\partial_{n+1}:H_{n+1}(C)\to H_n(A))=\ker(H_n(A)\to H_n(B)).$$

## Facts & Assumptions

**Given:** A short exact sequence $0\to A_\bullet\to B_\bullet\to C_\bullet\to0$ of complexes and an integer $n$.

[L1] Applying the weaker snake lemma to the quotient-kernel diagram in degree $n+1$ gives an exact segment
$$H_{n+1}(C)\xrightarrow{\partial_{n+1}}H_n(A)\to H_n(B)$$
under the canonical kernel and cokernel identifications ([[lem-the-cycle-boundary-diagram-associated-to-a-short-exact-sequence-of-complexes]], [[thm-snake-lemma-under-the-weaker-stacks-hypotheses]], [[def-connecting-morphism-in-homology]]).

## Proof

**Proof technique:** direct.

1.1 The three maps in [L1] are exactly the maps appearing in the statement. [L1, given]

2.1 Exactness of that categorical segment gives $$\operatorname{im}(\partial_{n+1})=\ker(H_n(A)\to H_n(B)),$$ which is the desired equality. [L1, step 1.1] ∎
