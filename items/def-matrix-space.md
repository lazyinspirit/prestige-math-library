---
id: def-matrix-space
kind: definition
title: "The vector space $M_{m \\times n}(F) := F^{\\,m \\times n}$ of $m$ by $n$ matrices over a field, with entrywise operations"
status: published
origin: session
deps: [def-function-space, def-vector-space, def-field, def-natural-numbers, lem-nat-order-is-membership]
justified_by: []
aliases: [def-matrix]
landmark: false
short: "$M_{m \\times n}(F)$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Matrix (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Matrix_(mathematics)"
    - title: "Examples of vector spaces (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Examples_of_vector_spaces"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]) and let $m, n \in \mathbb{N}$. Recall that a
natural number is a von Neumann natural ([[def-natural-numbers]]), so
$m = \{0, \dots, m-1\}$ and $n = \{0, \dots, n-1\}$
([[lem-nat-order-is-membership]]), and let $m \times n$ be their cartesian
product. An **$m$ by $n$ matrix over $F$** is an element of the function space
$F^{\,m \times n}$ ([[def-function-space]]), that is a function
$a : m \times n \to F$; we write

$$a_{ij} \;:=\; a(i,j) \qquad (i < m,\; j < n)$$

for its **entries**, $i$ being the **row index** and $j$ the **column index**.
Write

$$M_{m \times n}(F) \;:=\; F^{\,m \times n},$$

and $M_n(F) := M_{n \times n}(F)$ for the square case.

Since $M_{m \times n}(F)$ *is* the function space $F^{\,m \times n}$, it is a
vector space over $F$ with the pointwise operations of [[def-function-space]],
which read **entrywise**:

$$(a + b)_{ij} = a_{ij} + b_{ij}, \qquad (\lambda a)_{ij} = \lambda\, a_{ij} \qquad (i < m,\; j < n),$$

and the zero of $M_{m \times n}(F)$ is the matrix all of whose entries are $0_F$.
No verification is needed beyond that already carried out in
[[def-function-space]] for an arbitrary index set: this is the case
$X = m \times n$.

**Both indices start at $0$.** The rows are indexed by $i \in m = \{0,\dots,m-1\}$
and the columns by $j \in n = \{0,\dots,n-1\}$, so the entries of a $2$ by $3$
matrix are $a_{00}, a_{01}, a_{02}, a_{10}, a_{11}, a_{12}$.

**The degenerate shapes.** $\mathbb{N}$ contains $0$, so $m = 0$ and $n = 0$ are
genuine cases. If $m = 0$ or $n = 0$ then $m \times n = \varnothing$, so
$M_{m \times n}(F)$ has exactly one element, the empty function, and is the zero
space; there is no matrix of shape $0$ by $n$ other than that one.

## Remarks

- **This item introduces the vector-space structure and the notation, and nothing
  else.** There is no matrix product here, no identity matrix, no ring
  $M_n(F)$, no determinant and no matrix of a linear map. Those belong to a later
  page, which must add the product to *this* object rather than introduce a second
  notion of matrix; the addition and the scalar multiplication used there are the
  entrywise ones defined above.

- **A matrix is a function, so equality of matrices is equality of functions**:
  $a = b$ exactly when $a_{ij} = b_{ij}$ for all $i < m$ and $j < n$. Nothing
  below relies on a matrix being written as a rectangular array; the array is a
  way of displaying the function.

- **Why the shape is a pair of naturals rather than a pair of finite index sets.**
  Taking the index set to be $m \times n$ with $m$ and $n$ natural numbers keeps
  the coordinates of a matrix, of a tuple in $F^{n}$ ([[def-function-space]]) and
  the finite sums of [[def-monoid-finite-product]] all indexed by the same kind of
  object, which is what makes the boundary cases above statable at all.
