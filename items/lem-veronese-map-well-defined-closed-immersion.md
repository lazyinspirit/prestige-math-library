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
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

For $d\ge1$, $\nu_{n,d}$ is a well-defined closed immersion of projective varieties.

## Proof

**Given:** $d\ge1$ and homogeneous coordinates $[x_0:\cdots:x_n]$.

1.1 Scaling $x$ by $\lambda$ scales every degree-$d$ monomial by $\lambda^d$; not all monomials vanish because some $x_i\ne0$. Thus the homogeneous-coordinate criterion makes $\nu_{n,d}$ a morphism. [given, algebra]

2.1 On the open where $x_i^d\ne0$, the ratios $x_jx_i^{d-1}/x_i^d=x_j/x_i$ recover the usual affine coordinates. These chart inverses show injectivity and regular local inverse maps. [step 1.1, algebra]

3.1 The relations $Z_\alpha Z_\beta-Z_\gamma Z_\delta$ whenever $\alpha+\beta=\gamma+\delta$ vanish on monomial coordinates; on each $Z_{d e_i}\ne0$ chart they express every coordinate as a monomial in the recovered ratios. Hence they cut out exactly the image, which is closed, and step 2.1 makes the map a closed immersion. [step 2.1, algebra] ∎
