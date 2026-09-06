---
id: ex-trivial-character-has-schur-index-one
kind: example
title: "The trivial character has Schur index one"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-character-of-a-complex-representation, def-schur-index-of-an-irreducible-character, thm-schur-index-as-minimal-realization-multiplicity]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Gabor Wiese, Galois Representations, Corollary 2.5.10"
      url: "https://r.jina.ai/https://math.uni.lu/wiese/notes/GalRep.pdf"
---

## Example

For every finite group $G$, the trivial character $1_G$ has character field
$\mathbb Q$ and Schur index $m_{\mathbb Q}(1_G)=1$.

## Facts & Assumptions

**Given:** A finite group $G$ and its one-dimensional trivial complex representation.

[L1] The Schur index is the least positive multiplicity with a model over the character field ([[thm-schur-index-as-minimal-realization-multiplicity]]).

## Verification

**Proof technique:** direct.

1.1 Every value of $1_G$ is $1$, so its character field is $\mathbb Q$.  The one-dimensional representation on $\mathbb Q$ in which every element acts as $1$ is a $\mathbb Q$-model. [L1, algebra]

2.1 Thus multiplicity $1$ is attainable, and [L1] makes the Schur index $1$. [L1, step 1.1] ∎
