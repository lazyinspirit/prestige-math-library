---
id: cor-projective-variety-product-exists
kind: corollary
title: Products of nonempty projective varieties exist as projective varieties
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-product-varieties-universal-property, thm-affine-variety-product-coordinate-ring, thm-segre-image-rank-one-minors, def-projective-variety-classical]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, §5g and 6.26
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

Nonempty projective varieties $X\subseteq\mathbf P^m_k$ and $Y\subseteq\mathbf P^n_k$ have a product, realized as their Segre image, and that product is a projective variety.

## Facts & Assumptions

**Given:** Nonempty projective varieties $X\subseteq\mathbf P^m$ and $Y\subseteq\mathbf P^n$.

## Proof

1.1 Inside the rank-one locus, the opens $z_{i_0j_0}\ne0$ cover. On each such open, the regular inverse coordinates from the Segre theorem identify the desired subset with the product of the corresponding affine pieces of $X$ and $Y$, hence with a closed subset of that chart. Closedness is local on this finite open cover, so the restricted Segre image is a closed projective algebraic set. [given]

2.1 The inverse coordinate recovery in the Segre theorem identifies this set with pairs $(x,y)\in X\times_{\mathrm{set}}Y$; the displayed regular ratios show on every chart that both coordinate projections are morphisms. Thus the Segre point map and its inverse are morphisms for this constructed structure. [step 1.1]

3.1 A pair of morphisms into $X,Y$ has on each inverse-image product chart the Segre coordinate formula $[f_i g_j]$. These local formulas are regular and agree on overlaps, so they give a morphism into the closed model. The coordinate projections recover the given maps, and the point-pair identification makes the factorization unique. Hence this model has the product universal property. [step 2.1]

4.1 The nonempty standard affine opens of $X$ and $Y$ are affine varieties. Their pairwise products are affine varieties by the affine-product theorem, and they cover the Segre model. Any two such product opens meet: their factor opens meet by irreducibility of $X$ and $Y$, and choosing one point from each of those two nonempty intersections gives a point of both product opens. Thus the covering affine opens all meet, so their union is irreducible. The model is therefore a nonempty projective variety. [step 3.1] ∎
