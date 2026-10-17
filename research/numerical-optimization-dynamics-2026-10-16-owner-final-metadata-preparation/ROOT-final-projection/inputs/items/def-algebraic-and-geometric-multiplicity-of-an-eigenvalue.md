---
id: def-algebraic-and-geometric-multiplicity-of-an-eigenvalue
kind: definition
title: 'Algebraic multiplicity as the exponent of $x-\lambda$ in $\chi_T$, and geometric multiplicity as $\dim E_\lambda(T)$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-characteristic-polynomial-of-an-operator, def-eigenvalue-eigenvector-eigenspace-and-spectrum, cor-factor-theorem-over-a-commutative-ring, thm-polynomial-ring-over-a-field-is-a-ufd, def-dimension]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
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

Let $T:V\to V$ be an endomorphism of a finite-dimensional vector space over $F$, and let $\lambda\in\sigma_F(T)$. The **algebraic multiplicity** of $\lambda$ is the largest natural number $m\geq1$ such that $(x-\lambda)^m$ divides $\chi_T(x)$ in $F[x]$. This largest exponent exists because $\lambda$ is a root, the factor theorem gives one factor $x-\lambda$, and the nonzero polynomial $\chi_T$ has finite degree and unique factorization.

The **geometric multiplicity** of $\lambda$ is

$$\dim_F E_\lambda(T).$$

The eigenspace is a nonzero subspace of the finite-dimensional space $V$, so this dimension is defined and is at least $1$.
