---
id: def-polynomial-identity-testing
kind: definition
title: "Polynomial identity testing"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-multivariate-polynomial-ring-by-iteration, def-monomials-multidegree-and-total-degree]
sources:
  scraped: []
  references:
    - title: "Eric Blais, Models of Computation, 15. P vs. BPP"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/P-and-BPP"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

Fix a field $F$ and a representation of multivariate polynomials over
$F[x_1,\dots,x_m]$ for which:

- the number of variables $m$ and a total-degree bound $d$ can be computed in
  polynomial time from the input representation, and
- evaluation at any chosen point of $F^m$ can be performed in polynomial time.

The corresponding **polynomial identity testing problem (PIT)** asks whether a
given represented polynomial is the zero polynomial of
[[def-multivariate-polynomial-ring-by-iteration]], with total degree understood
as in [[def-monomials-multidegree-and-total-degree]].

## Remarks

- The input is a representation of a polynomial, not its full value table.
- The later coRP classification uses random evaluation together with an
  explicit finite sample set whose size dominates the degree bound.
