---
id: def-gl2-rankin-selberg-l-function
kind: definition
title: "Rankin–Selberg L-Function for a GL2 Pair"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-standard-l-function-of-a-gl2-eigenform
  - lem-full-level-holomorphic-cusp-form-coefficient-growth
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "S. D. Miller and W. Schmid, The Rankin–Selberg Method for Automorphic Distributions"
      url: "https://arxiv.org/pdf/math/0605783v1"
      locator: "§4, equation (4.36) and the preceding renormalization of Fourier coefficients, printed pp. 23–24."
    - title: "Avi Zeff, The Rankin–Selberg Method, Columbia graduate notes"
      url: "https://www.math.columbia.edu/~avizeff/quals/Rankin-Selberg.pdf"
      locator: "Theorem 3 and the completed Dirichlet series definition, PDF pp. 5–6."
forward_refs: []
---

## Definition

Let $f$ and $g$ be normalized full-level holomorphic Hecke cusp eigenforms,
of even weights $k_f$ and $k_g$. Write
$\lambda_f(n)=a_f(n)n^{-(k_f-1)/2}$ and
$\lambda_g(n)=a_g(n)n^{-(k_g-1)/2}$ for their unitary Hecke coefficients.
The **Rankin–Selberg L-function of the ordered pair $(f,g)$**, in the
Miller–Schmid Fourier-coefficient normalization, is

$$
L(s,f\times g):=\zeta(2s)\sum_{n\ge1}\lambda_f(n)\lambda_g(n)n^{-s},
\qquad \operatorname{Re}s>2.
$$

This definition uses no complex conjugation on the second coefficient
sequence. The coefficient-growth lemma makes the displayed series absolutely
convergent on this half-plane.

## Definition references

[[def-standard-l-function-of-a-gl2-eigenform|the standard L-function normalization]]

[[lem-full-level-holomorphic-cusp-form-coefficient-growth|absolute convergence of the coefficient series]]
