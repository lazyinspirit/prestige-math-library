---
id: rem-ell-p-is-l-p-of-counting-measure
kind: remark
title: "$\\ell^p$ is the $L^p$ space of counting measure"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-l-p-space-as-a-quotient-by-null-functions, def-counting-measure, prop-counting-measure-is-a-measure, def-nonnegative-lebesgue-integral, cor-beppo-levi-theorem]
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Chapter 8"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Example 2.55 and Chapter 7"
      url: "https://measure.axler.net/MIRA.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
---

## Remark

On $(\mathbb N,\mathcal P(\mathbb N),\#)$ with counting measure, every function
$f:\mathbb N\to\mathbb R$ is measurable. Writing $a_k:=f(k)$, one has

$$\int |f|^p\,d\#=\sum_{k=0}^\infty |a_k|^p\qquad(0<p<\infty),$$

by the counting-measure integral dictionary, so $\mathcal L^p(\#)$ is exactly
the usual sequence class $\ell^p$. Also

$$\|f\|_\infty=\sup_{k\in\mathbb N}|a_k|,$$

because a subset of $\mathbb N$ has counting measure zero only when it is empty.
Hence the quotient by almost-everywhere equality does nothing: for counting
measure on $\mathbb N$, equality almost everywhere means equality everywhere.
