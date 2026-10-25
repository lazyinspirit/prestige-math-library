---
id: fs-every-rigid-k-linear-abelian-monoidal-category-is-a-tensor-category
kind: false-statement
title: "Every rigid k-linear abelian monoidal category is a tensor category"
status: published
origin: pipeline
deps: [def-tensor-and-multitensor-category, def-rigid-object-and-rigid-monoidal-category]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Definition 4.1.1"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

**False claim.** Every rigid $k$-linear abelian monoidal category is a tensor category.

## Facts & Assumptions

**Given:** The two definitions.

[F1] Rigidity says every object has left and right duals ([[def-rigid-object-and-rigid-monoidal-category]]).

[F2] A tensor category additionally has local finiteness, bilinear tensoring, and $\operatorname{End}(\mathbf1)\cong k$ ([[def-tensor-and-multitensor-category]]).

## Refutation

**Proof technique:** direct.

1.1 Take $\mathcal D=\mathbf{Vect}^{\mathrm{fd}}_k\times \mathbf{Vect}^{\mathrm{fd}}_k$ with componentwise tensor product.  It is $k$-linear and abelian, and $(V,W)$ has dual $(V^\vee,W^\vee)$, so it is rigid. [F1, construct]

2.1 Its unit is $(k,k)$, whose endomorphism algebra is $k\times k$, not $k$. Thus $\mathcal D$ fails the scalar-unit condition in [F2] and is not a tensor category. [step 1.1, F2] ∎
