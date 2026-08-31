---
id: lem-exactness-at-the-homology-of-the-middle-complex
kind: lemma
title: "Exactness at the homology of the middle complex"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-the-cycle-boundary-diagram-associated-to-a-short-exact-sequence-of-complexes,
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
$$\operatorname{im}(H_n(A)\to H_n(B))=\ker(H_n(B)\to H_n(C)).$$

## Facts & Assumptions

**Given:** A short exact sequence $0\to A_\bullet\to B_\bullet\to C_\bullet\to0$ of complexes and an integer $n$.

[L1] Applying the weaker snake lemma to the quotient-kernel diagram in degree $n$ gives an exact segment
$$H_n(A)\to H_n(B)\to H_n(C)$$
under the canonical kernel identifications ([[lem-the-cycle-boundary-diagram-associated-to-a-short-exact-sequence-of-complexes]], [[thm-snake-lemma-under-the-weaker-stacks-hypotheses]]).

## Proof

**Proof technique:** direct.

1.1 The three maps in [L1] are exactly the maps appearing in the statement. [L1, given]

2.1 Exactness of that categorical segment gives $$\operatorname{im}(H_n(A)\to H_n(B))=\ker(H_n(B)\to H_n(C)),$$ as required. [L1, step 1.1] ∎
