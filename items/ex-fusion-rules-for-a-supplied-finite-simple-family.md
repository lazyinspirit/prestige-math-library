---
id: ex-fusion-rules-for-a-supplied-finite-simple-family
kind: example
title: "Fusion rules for a supplied finite simple family"
status: published
origin: pipeline
deps: [ex-finite-dimensional-vector-spaces-form-a-fusion-category, def-fusion-rules]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Remark 4.5.3"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Example

For the supplied simple family $(k)$ of $\mathbf{Vect}_{k}^{\mathrm{fd}}$, the
only fusion coefficient is $N_{11}^{1}=1$.

## Facts & Assumptions

**Given:** The one-term family $(k)$.

[F1] $\mathbf{Vect}_{k}^{\mathrm{fd}}$ is a fusion category ([[ex-finite-dimensional-vector-spaces-form-a-fusion-category]]). Every finite-dimensional vector space is a finite direct sum of copies of the simple object $k$, so $k$ is its sole simple class.

[F2] Fusion coefficients are defined by products of simple classes ([[def-fusion-rules]]).

## Verification

**Proof technique:** direct.

1.1 The unit isomorphism $k\otimes_k k\cong k$ gives $[k][k]=[k]$. [F1, given]

2.1 Comparing this with the defining expansion in [F2] for the supplied one-element family yields $N_{11}^{1}=1$. [step 1.1, F2] ∎
