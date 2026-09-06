---
id: def-one-dimensional-borel-module-of-weight-lambda
kind: definition
title: "The one-dimensional Borel module of weight lambda"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-triangular-decomposition-from-a-chosen-positive-root-system]
verification:
  audited: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I & II, Remark 25.8"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
---

## Definition

Fix the Borel subalgebra $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$ from
[[thm-triangular-decomposition-from-a-chosen-positive-root-system]].  For
$\lambda\in\mathfrak h^*$, let $\mathbb C_\lambda=\mathbb Cc_\lambda$ be the
one-dimensional $\mathfrak b$-module defined by

$$h c_\lambda=\lambda(h)c_\lambda\quad(h\in\mathfrak h),\qquad x c_\lambda=0\quad(x\in\mathfrak n^+).$$

This is well defined: $[\mathfrak h,\mathfrak n^+]\subseteq\mathfrak n^+$,
and $[\mathfrak n^+,\mathfrak n^+]\subseteq\mathfrak n^+$, so both sides of
the representation identity vanish on $c_\lambda$ whenever one input lies in
$\mathfrak n^+$.  The weight is unshifted.
