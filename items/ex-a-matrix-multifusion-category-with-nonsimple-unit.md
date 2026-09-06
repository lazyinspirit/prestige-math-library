---
id: ex-a-matrix-multifusion-category-with-nonsimple-unit
kind: example
title: "A matrix multifusion category with nonsimple unit"
status: draft
origin: pipeline
deps: [def-fusion-and-multifusion-category, ex-finite-dimensional-vector-spaces-form-a-fusion-category]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Example 4.1.3"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Example

For $n>1$, finite $n\times n$ matrices of finite-dimensional vector spaces,
with matrix multiplication using $\oplus$ and $\otimes_k$, form a multifusion
category whose unit is not simple.

## Facts & Assumptions

**Given:** A field $k$ and an integer $n>1$.

[F1] $\mathbf{Vect}_{k}^{\mathrm{fd}}$ is fusion ([[ex-finite-dimensional-vector-spaces-form-a-fusion-category]]).

[F2] A multifusion category is finite semisimple multitensor category ([[def-fusion-and-multifusion-category]]).

## Verification

**Proof technique:** direct.

1.1 Let objects be $n\times n$ matrices $(V_{ij})$ and set $(V\otimes W)_{ij}=\bigoplus_rV_{ir}\otimes_kW_{rj}$. The matrix $I$ with $k$ on the diagonal and $0$ off it is a unit. [F1, given, construct]

2.1 Entrywise semisimplicity and finite direct sums from [F1] give the finite semisimple rigid structure required in [F2]. [step 1.1, F1, F2]

3.1 But $I=E_{11}\oplus\cdots\oplus E_{nn}$ is a nontrivial direct sum when $n>1$. Hence this is multifusion, not fusion. [step 1.1, F2] ∎
