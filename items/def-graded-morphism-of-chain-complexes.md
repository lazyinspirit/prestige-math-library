---
id: def-graded-morphism-of-chain-complexes
kind: definition
title: "A graded morphism of chain complexes"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-chain-complex-in-an-abelian-category, thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Joseph J. Rotman, An Introduction to Homological Algebra, 2nd ed."
      url: "https://dokumen.pub/an-introduction-to-homological-algebra-2nbsped-9780387245270-9780387683249.html"
    - title: "The Stacks Project, Section 12.16: Graded objects"
      url: "https://stacks.math.columbia.edu/tag/09MF"
pipeline_run: frontier-25
---

## Definition

Let $C_\bullet$ and $D_\bullet$ be chain complexes in an abelian category
$\mathcal A$, and let $r\in\mathbb Z$. A **graded morphism of degree $r$**
$u:C_\bullet\to D_\bullet$ is a family of morphisms
$$u_n:C_n\to D_{n+r}\qquad(n\in\mathbb Z).$$

Thus degree $0$ graded morphisms are exactly degreewise families
$u_n:C_n\to D_n$, while degree $1$ graded morphisms shift the target one place
to the left in homological degree.
