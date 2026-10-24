---
id: def-characteristic-polynomial-of-an-operator
kind: definition
title: 'The basis-independent characteristic polynomial $\chi_T$ of an endomorphism of a finite-dimensional space, including $\chi_T=1$ in dimension zero'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-characteristic-polynomial-of-a-matrix, thm-characteristic-polynomial-is-similarity-invariant, def-coordinate-column-and-matrix-of-a-linear-map, thm-similarity-is-an-equivalence-relation-and-models-basis-change]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, §§12.1–12.4'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., §9'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Definition

Let $T:V\to V$ be an endomorphism of a finite-dimensional vector space over $F$. Choose an ordered basis $\mathcal B$ and define

$$\chi_T(x):=\chi_{[T]_{\mathcal B}^{\mathcal B}}(x).$$

Matrices representing the same endomorphism in different ordered bases are similar, and similar matrices have the same characteristic polynomial. Hence $\chi_T$ is independent of $\mathcal B$. When $V=\{0_V\}$, the empty ordered basis gives $\chi_T=1$.
