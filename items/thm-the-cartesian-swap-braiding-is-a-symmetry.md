---
id: thm-the-cartesian-swap-braiding-is-a-symmetry
kind: theorem
title: "The cartesian swap braiding is a symmetry"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-braiding, def-symmetric-monoidal-category, thm-a-category-with-finite-products-is-monoidal]
landmark: true
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
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Example 8.2.1"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 2"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Statement

Let $\mathcal C$ be a category with finite products, regarded as a monoidal
category under cartesian product. Then the swap maps

$$\tau_{X,Y}:X\times Y\longrightarrow Y\times X,\qquad \tau_{X,Y}(x,y)=(y,x),$$

form a braiding, and this braiding is symmetric.

## Facts & Assumptions

**Given:** A category $\mathcal C$ with finite products.

[L1] A category with finite products is monoidal under cartesian product ([[thm-a-category-with-finite-products-is-monoidal]]).

[L2] A symmetric monoidal category is a braided monoidal category whose braiding squares to the identity ([[def-symmetric-monoidal-category]]).

[L3] A braiding is a natural isomorphism satisfying the two hexagons ([[def-braiding]]).

## Proof

**Proof technique:** direct.

1.1 For each pair $X,Y$, the two coordinate projections from $X\times Y$ define a unique morphism $\tau_{X,Y}:X\times Y\to Y\times X$ with first projection $\pi_2$ and second projection $\pi_1$. The same universal property defines its inverse $\tau_{Y,X}$, so the family is a natural isomorphism. [given, L1, L3, construct]

2.1 To check the first hexagon, compare both composites from $X\times(Y\times Z)$ to $(Y\times Z)\times X$ after composing with the three product projections. Each route sends $(x,y,z)$ to $(y,z,x)$, so the two maps are equal. The second hexagon is the same coordinate permutation written on $((X\times Y)\times Z)$ and is checked in the same way. [step 1.1, L1, L3, algebra]

3.1 Swapping twice returns every pair to itself, so $\tau_{Y,X}\circ\tau_{X,Y}=1_{X\times Y}$. By [L2], the cartesian swap braiding is therefore a symmetry. [L2, step 1.1, step 2.1, algebra] ∎
