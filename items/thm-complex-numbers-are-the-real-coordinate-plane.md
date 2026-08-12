---
id: thm-complex-numbers-are-the-real-coordinate-plane
kind: theorem
title: '$\mathbb C$ is the real coordinate plane, with coordinate arithmetic'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-complex-numbers-form-a-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "R. K. Srivastava, Complex Analysis lecture notes"
      url: "https://fac.iitg.ac.in/rksri/MA547%20Complex%20Analysis%20lecture%20notes%202025.pdf"
pipeline_run: frontier-11
---

## Statement

The map
$$\Phi:\mathbb C\longrightarrow\mathbb R^2,\qquad \Phi(a+bi)=(a,b),$$
is a bijection. Under it,
$$\Phi((a+bi)+(u+vi))=(a+u,b+v)$$
and
$$\Phi((a+bi)(u+vi))=(au-bv,av+bu).$$

## Facts & Assumptions

**Given:** The complex field in its quotient construction.

[F1] Every complex number has a unique form $a+bi$, and addition and multiplication have the displayed coordinate formulas ([[thm-complex-numbers-form-a-field]]).

## Proof

**Proof technique:** direct.

1.1 Uniqueness in [F1] makes $\Phi$ well-defined and injective. [F1]

1.2 For every $(a,b)\in\mathbb R^2$, the complex number $a+bi$ maps to $(a,b)$, so $\Phi$ is surjective. [F1]

2.1 Applying $\Phi$ to the addition formula in [F1] gives the first coordinate identity. [F1, step 1.1]

3.1 Applying $\Phi$ to the multiplication formula in [F1] gives the second coordinate identity. [F1, step 1.1] ∎
