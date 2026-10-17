---
id: def-complex-conjugate-real-imaginary-part-and-modulus
kind: definition
title: 'Real and imaginary parts, complex conjugation, and modulus'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-complex-numbers-form-a-field, thm-of-square-roots, cor-cauchy-reals-lub-complete]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: frontier-11
---

## Definition

Every $z\in\mathbb C$ has unique coordinates $z=a+bi$
([[thm-complex-numbers-form-a-field]]). Define
$$\operatorname{Re}z=a,\qquad \operatorname{Im}z=b,\qquad \overline z=a-bi,$$
and define its **modulus** by
$$|z|=\sqrt{a^2+b^2}.$$
The real numbers are least-upper-bound complete
([[cor-cauchy-reals-lub-complete]]), so the nonnegative square root exists and
is unique by [[thm-of-square-roots]].
