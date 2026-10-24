---
id: lem-the-kunneth-cross-product-map-is-well-defined-and-natural
title: "The Kunneth cross-product map is well defined and natural"
kind: lemma
status: published
origin: pipeline
deps: ["def-homology-cross-product-for-tensor-complexes"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
---

## Statement

Let $R$ be commutative and let $C,D$ be chain complexes of $R$-modules. Then
$[x]\otimes[y]\mapsto[x\otimes y]$ defines a natural map
$\bigoplus_{p+q=n}H_pC\otimes_RH_qD\to H_n(C\otimes_RD)$.

## Proof

**Given:** cycles $x\in Z_pC$, $y\in Z_qD$.

1.1 The signed tensor differential gives $d(x\otimes y)=d x\otimes y+(-1)^px\otimes d y=0$. [given]

2.1 Replacing $x$ or $y$ by a boundary changes $x\otimes y$ by a signed boundary; chain maps commute with the formula, proving well-definedness and naturality. [step 1.1, algebra] ∎
