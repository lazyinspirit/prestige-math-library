---
id: lem-homogeneous-polynomial-zero-locus-well-defined
kind: lemma
title: "homogeneous polynomial zero locus well defined"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-projective-space-points, def-homogeneous-polynomial-and-homogeneous-ideal]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Algebraic Geometry, Chapter 3"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

For homogeneous $F\in k[x_0,\ldots,x_n]$, whether $F(a)=0$ depends only on $[a]\in\mathbf P_k^n$.

## Proof

**Given:** $F$ is homogeneous of degree $d$, and $b=\lambda a$ for $\lambda\in k^\times$.

1.1 Each monomial of $F$ scales by $\lambda^d$, so $F(b)=\lambda^dF(a)$. [given, algebra]

2.1 Since $\lambda^d\ne0$, $F(b)=0$ if and only if $F(a)=0$. [step 1.1, algebra] ∎
