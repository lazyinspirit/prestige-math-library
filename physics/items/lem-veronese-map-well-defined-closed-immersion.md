---
id: lem-veronese-map-well-defined-closed-immersion
kind: lemma
title: The Veronese map is a well-defined closed immersion
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-veronese-map, lem-projective-coordinate-morphisms-well-defined, thm-closed-projective-embedding-by-homogeneous-generators]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, 6.23
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
---

## Statement

For $d\ge1$, $\nu_{n,d}$ is a well-defined closed immersion of projective varieties.

## Proof

**Given:** $d\ge1$ and homogeneous coordinates $[x_0:\cdots:x_n]$.

1.1 Scaling $x$ by $\lambda$ scales every degree-$d$ monomial by $\lambda^d$; not all monomials vanish because some $x_i\ne0$. Thus the homogeneous-coordinate criterion makes $\nu_{n,d}$ a morphism. [given, algebra]

2.1 On the open where $x_i^d\ne0$, the ratios $x_jx_i^{d-1}/x_i^d=x_j/x_i$ recover the usual affine coordinates. These chart inverses show injectivity and regular local inverse maps. [step 1.1, algebra]

3.1 The relations $Z_\alpha Z_\beta-Z_\gamma Z_\delta$ whenever $\alpha+\beta=\gamma+\delta$ vanish on monomial coordinates. Repeatedly exchanging one variable between two degree-$d$ multi-indices gives $Z_\alpha^d=\prod_j Z_{d e_j}^{\alpha_j}$. Thus every point satisfying the relations has some $Z_{d e_i}\ne0$: otherwise every $Z_\alpha$ would vanish. On this chart the same exchanges give $Z_\alpha/Z_{d e_i}=\prod_j\left(Z_{(d-1)e_i+e_j}/Z_{d e_i}\right)^{\alpha_j}$. The chart is therefore precisely the image of the affine chart $x_i\ne0$, with inverse coordinates $x_j/x_i=Z_{(d-1)e_i+e_j}/Z_{d e_i}$. The common zero locus of the homogeneous relations is exactly the image, so the image is closed and these chart inverses make the map a closed immersion. [step 2.1, algebra] ∎
