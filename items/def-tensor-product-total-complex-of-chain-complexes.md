---
id: def-tensor-product-total-complex-of-chain-complexes
title: "The tensor product of a right and a left chain complex is totalized on finite diagonals with the Koszul differential"
kind: definition
status: draft
origin: pipeline
deps: ["def-chain-complex-in-an-abelian-category", "def-tensor-product-of-modules-by-generators-and-relations"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Definition

Let $R$ be a ring, $P$ a chain complex of right $R$-modules and $Q$ a chain complex of left $R$-modules. Define $(P\otimes_RQ)_n=\bigoplus_{p+q=n}P_p\otimes_RQ_q$ (a finite-diagonal direct sum) and $d(p\otimes q)=d_Pp\otimes q+(-1)^pp\otimes d_Qq$.
