---
id: rem-chebyshev-collocation-conditioning-and-spectral-radius-scope
kind: remark
title: "Chebyshev collocation spectral-radius growth is setup-specific conditioning context"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps: [alg-chebyshev-gauss-lobatto-differentiation-matrix, thm-chebyshev-gauss-lobatto-differentiation-is-exact, alg-chebyshev-dirichlet-bvp-collocation-boundary-elimination]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "No proof is asserted; the remark records the scope of the cited spectral-radius observation."
verification:
  precheck: n/a
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, Ch. 2"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 68–104 / PDF pp. 74–110; the Chebyshev second-derivative matrix and its Dirichlet spectral-radius growth."
---

## Scope note

For the cited Chebyshev–Gauss–Lobatto second-derivative collocation matrix with the Dirichlet boundary rows treated as in the source, Shen and Tang report spectral-radius growth of order $N^4$. This is a source-specific conditioning observation for that matrix and boundary treatment. It is not a stability estimate for every BVP discretization, a convergence theorem for the algorithm [[alg-chebyshev-dirichlet-bvp-collocation-boundary-elimination]], or evidence about any continuum PDE regularity question. This carrier records the source's reported scope and does not claim to prove the spectral-radius asymptotic.
