---
id: def-ring-matrix-product-identity-and-transpose
kind: definition
title: "Entrywise ring-matrix operations, rectangular matrix products, identity matrices and transpose"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-matrices-over-a-commutative-ring, def-finite-sum-in-a-commutative-monoid, def-commutative-ring]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "S. New, MATH 146 Linear Algebra 1 Lecture Notes, Ch. 4"
      url: "https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf"
    - title: "P. Massot, Structures algébriques fondamentales, §6.4"
      url: "https://www.imo.universite-paris-saclay.fr/~patrick.massot/enseignement/poly_alg/cha-algebres.html"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring. Matrices of one shape are added and scaled entrywise. For $A\in M_{m\times n}(R)$ and $B\in M_{n\times p}(R)$, their **product** is $AB\in M_{m\times p}(R)$ with
$$ (AB)_{ik}:=\sum_{j<n}a_{ij}b_{jk}. $$
The sum is the finite sum in the additive commutative monoid of $R$, and is $0$ when $n=0$.

The **identity matrix** $I_n$ has entry $1$ on the diagonal and $0$ elsewhere. The **transpose** $A^{\mathsf T}\in M_{n\times m}(R)$ is defined by $(A^{\mathsf T})_{ji}:=a_{ij}$. The zero matrix has every entry $0$.

