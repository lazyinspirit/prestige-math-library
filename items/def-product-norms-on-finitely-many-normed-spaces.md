---
id: def-product-norms-on-finitely-many-normed-spaces
kind: definition
title: "The standard product norms on a finite product of normed spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-norm-and-normed-space, def-finite-sum, def-canonical-natural]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-01
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-27
---

## Definition

Let $n\in\mathbb{N}$ with $n\ge 1$, and let $E_0,\dots,E_{n-1}$ be normed
spaces. On the Cartesian product
$$E:=\prod_{k<n}E_k$$
write $x=(x_0,\dots,x_{n-1})$. The three standard product norms on $E$ are

$$\|x\|_{\max}:=\max_{k<n}\|x_k\|,$$
$$\|x\|_1:=\sum_{k<n}\|x_k\|,$$
$$\|x\|_2:=\Bigl(\sum_{k<n}\|x_k\|^2\Bigr)^{1/2}.$$

The finite sum is that of [[def-finite-sum]], and the symbol $n$ in the
displayed upper bound is the canonical natural of [[def-canonical-natural]]
when it is read inside real inequalities.

## Remarks

- The hypothesis $n\ge 1$ is used only for the maximum norm, since the maximum
  of an empty family is not defined here.
- For $n=1$ all three product norms reduce to the original norm on the single
  factor.
