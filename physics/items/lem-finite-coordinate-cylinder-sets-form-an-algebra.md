---
id: lem-finite-coordinate-cylinder-sets-form-an-algebra
kind: lemma
title: "Finite-coordinate cylinder sets form an algebra"
status: published
origin: pipeline
deps: [def-coordinate-maps-and-cylinder-sigma-algebra, def-algebra-of-subsets]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Kajino, Probability Theory, proof of Theorem 3.65"
      url: "https://www.kurims.kyoto-u.ac.jp/~nkajino/lectures/2011/Prob2011/Prob2011.pdf"
---

## Statement

The family $\mathcal A_I$ of all finite-coordinate cylinders in $E$ is an algebra of subsets of $E$.

## Facts & Assumptions

**Given:** Cylinders $\pi_F^{-1}(A)$ and $\pi_G^{-1}(B)$.

[F1] A finite product sigma-algebra is closed under complements, inverse images under coordinate projections, and finite unions.

## Proof

1.1 The empty-support cylinders give $\varnothing,E\in\mathcal A_I$. Also $E\setminus\pi_F^{-1}(A)=\pi_F^{-1}((\prod_F E_i)\setminus A)\in\mathcal A_I$. [F1]

2.1 For $H=F\cup G$, pull both bases to $\prod_H E_i$; their union is measurable and its inverse image is $\pi_F^{-1}(A)\cup\pi_G^{-1}(B)$. Thus $\mathcal A_I$ has the three algebra operations. [F1] ∎
