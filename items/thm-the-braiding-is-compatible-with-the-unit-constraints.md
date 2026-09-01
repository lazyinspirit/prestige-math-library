---
id: thm-the-braiding-is-compatible-with-the-unit-constraints
kind: theorem
title: "The braiding is compatible with the unit constraints"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-braiding, thm-the-inverse-braiding-is-a-braiding, thm-the-left-unitor-of-a-tensor-product-is-determined, thm-the-right-unitor-of-a-tensor-product-is-determined]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Exercise 8.1.6"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

Let $c$ be a braiding on a monoidal category $\mathcal C$. Then for every
object $X$,

$$\rho_X\circ c_{\mathbf 1,X}=\lambda_X,\qquad \lambda_X\circ c_{X,\mathbf 1}=\rho_X,$$

and consequently

$$c_{\mathbf 1,X}=c_{X,\mathbf 1}^{-1}.$$

## Facts & Assumptions

**Given:** A braided monoidal category with braiding $c$.

[F1] In any braided monoidal category, Exercise 8.1.6 of EGNO derives the identities $$\rho_X\circ c_{\mathbf 1,X}=\lambda_X,\qquad \lambda_X\circ c_{X,\mathbf 1}=\rho_X.$$

[L1] A braiding is, in particular, a family of isomorphisms satisfying the hexagons ([[def-braiding]]).

## Proof

**Proof technique:** direct.

1.1 The present hypotheses are exactly those of [F1], so the two displayed unit-compatibility identities hold for every object $X$. [given, F1]

2.1 By [L1], the morphisms $c_{\mathbf 1,X}$ and $c_{X,\mathbf 1}$ are isomorphisms. Step 1.1 therefore gives $$c_{\mathbf 1,X}=\rho_X^{-1}\lambda_X,\qquad c_{X,\mathbf 1}=\lambda_X^{-1}\rho_X.$$ These two formulas are inverse to each other, so $c_{\mathbf 1,X}=c_{X,\mathbf 1}^{-1}$. [L1, step 1.1, algebra] ∎
