---
id: def-legendre-polynomial-family-and-l2-pairing
kind: definition
title: "Legendre polynomials by Rodrigues' formula and their unweighted pairing"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-factorial-and-falling-factorial, def-higher-derivatives-and-smoothness, thm-algebra-of-continuous-functions, thm-continuous-implies-integrable]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "No choice axiom is used; each polynomial is given by a finite derivative formula."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, Ch. 3"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 105–118 / PDF pp. 111–124; Legendre bases and weighted Galerkin spaces."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 8"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 8, printed pp. 245–283 (complete book PDF); polynomial bases and spectral discretization context."
---

## Definition

For each integer $n\ge0$, define the Legendre polynomial
$$
P_n(x):=\frac{1}{2^n n!}\frac{d^n}{dx^n}(x^2-1)^n,
$$
with $n!$ as in [[def-factorial-and-falling-factorial]] and repeated derivatives as in [[def-higher-derivatives-and-smoothness]]. Define the unweighted pairing of real polynomials by
$$
\langle p,q\rangle_L:=\int_{-1}^1p(x)q(x)\,dx,\qquad \|p\|_L^2:=\langle p,p\rangle_L.
$$
The integral is the ordinary integral of a continuous function; polynomial products are continuous and hence integrable by [[thm-algebra-of-continuous-functions]] and [[thm-continuous-implies-integrable]]. The normalization and all polynomial identities needed for the orthogonal Galerkin scale are proved in [[lem-legendre-weighted-derivative-orthogonality-and-norm]].
