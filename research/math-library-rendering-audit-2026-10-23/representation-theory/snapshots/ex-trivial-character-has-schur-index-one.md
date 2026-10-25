---
id: ex-trivial-character-has-schur-index-one
kind: example
title: "The trivial character has Schur index one"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-character-of-a-complex-representation, def-schur-index-of-an-irreducible-character, thm-schur-index-as-minimal-realization-multiplicity, def-axiom-of-choice]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-05-receipts.jsonl (ex-trivial-character-has-schur-index-one). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Gabor Wiese, Galois Representations, Corollary 2.5.10"
      url: "https://r.jina.ai/https://math.uni.lu/wiese/notes/GalRep.pdf"
---

## Example

For every finite group $G$, the trivial character $1_G$ has character field
$\mathbb Q$ and an explicit one-dimensional rational model with
scalar-extension multiplicity one. Under the Axiom of Choice, its Schur index
is $m_{\mathbb Q}(1_G)=1$.

## Facts & Assumptions

**Given:** A finite group $G$ and its one-dimensional trivial complex representation.

[L1] Under AC, the Schur index is the least positive multiplicity with a model over the character field ([[thm-schur-index-as-minimal-realization-multiplicity]]).

## Verification

**Proof technique:** direct.

1.1 Every value of $1_G$ is $1$, so its character field is $\mathbb Q$.  The one-dimensional representation on $\mathbb Q$ in which every element acts as $1$ is a $\mathbb Q$-model. [L1, algebra]

2.1 The rational one-dimensional model has scalar-extension multiplicity one by direct inspection, without any choice principle. Under AC, [L1] makes the Schur index $1$. [L1, step 1.1] ∎
