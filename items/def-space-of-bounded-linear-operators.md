---
id: def-space-of-bounded-linear-operators
kind: definition
title: "The spaces \\(\\mathcal B(X,Y)\\) and \\(\\mathcal B(X)\\) of bounded linear operators"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-bounded-linear-operator, def-vector-space-of-linear-maps]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis"
      url: "https://ocw-preview.odl.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
pipeline_run: frontier-28
---

## Definition

Let $X$ and $Y$ be normed spaces over the same scalar field. Write

$$\mathcal B(X,Y) := \{T:X\to Y : T \text{ is a bounded linear operator}\}.$$

This is a subspace of the vector space $\mathcal L(X,Y)$ of
[[def-vector-space-of-linear-maps]], with the same pointwise operations:

$$(S+T)(x) := Sx+Tx,\qquad (\lambda T)(x) := \lambda\,Tx.$$

If $X=Y$, write

$$\mathcal B(X) := \mathcal B(X,X).$$

## Remarks

- Boundedness is preserved by the two pointwise operations, because the
  triangle inequality and absolute homogeneity combine the corresponding
  bounds.
- The operator norm of [[def-operator-norm]] is defined on $\mathcal B(X,Y)$,
  not on all of $\mathcal L(X,Y)$.
