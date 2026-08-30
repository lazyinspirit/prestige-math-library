---
id: thm-the-left-unitor-of-a-tensor-product-is-determined
kind: theorem
title: "The left unitor of a tensor product is determined by the associator"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-monoidal-category]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Proposition 2.2.4"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Statement

In any monoidal category,

$$\lambda_{X\otimes Y}=(\lambda_X\otimes1_Y)\circ\alpha_{\mathbf 1,X,Y}$$

for all objects $X,Y$.

## Facts & Assumptions

**Given:** A monoidal category and objects $X,Y$.

[L1] The monoidal-category axioms are the pentagon and triangle from [[def-monoidal-category]].

[F1] Proposition 2.2.4 of EGNO proves that, under those axioms and with the same associator orientation as this page, the left unitor satisfies
$$\lambda_{X\otimes Y}=(\lambda_X\otimes1_Y)\circ\alpha_{\mathbf 1,X,Y}.$$

## Proof

**Proof technique:** direct.

1.1 The hypotheses of [F1] are exactly those in [L1], so [F1] applies to the present monoidal category. [given, L1, F1]

2.1 Therefore the displayed identity holds for every pair $X,Y$. [step 1.1, F1] ∎
