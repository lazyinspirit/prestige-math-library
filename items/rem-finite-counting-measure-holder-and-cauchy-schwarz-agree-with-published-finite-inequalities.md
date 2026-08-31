---
id: rem-finite-counting-measure-holder-and-cauchy-schwarz-agree-with-published-finite-inequalities
kind: remark
title: "Finite counting measure recovers finite Holder and implies the signed Cauchy-Schwarz inequality"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [cor-cauchy-schwarz-inequality-for-l-two, thm-holder-inequality-for-integrals, thm-holder-finite-real-exponents, thm-cauchy-schwarz-finite, thm-cauchy-schwarz-and-the-euclidean-norm, def-p-norms-on-rn, rem-ell-p-is-l-p-of-counting-measure]
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Chapter 8"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
verification:
  precheck: n/a
---

Via [[rem-ell-p-is-l-p-of-counting-measure]], the measure space
$\{0,\dots,n-1\}$ with counting measure identifies $L^p$ with the published
$p$-norm structure of [[def-p-norms-on-rn]]. Under that identification,
[[thm-holder-inequality-for-integrals]] becomes
[[thm-holder-finite-real-exponents]] for $p,q>1$. At $p=q=2$,
[[cor-cauchy-schwarz-inequality-for-l-two]] gives the stronger absolute-product
estimate

$$\sum_{k<n}|x_ky_k|\le\|x\|_2\|y\|_2.$$

The real triangle inequality then gives
$|\sum_{k<n}x_ky_k|\le\sum_{k<n}|x_ky_k|$, recovering the signed estimates in
[[thm-cauchy-schwarz-finite]] and
[[thm-cauchy-schwarz-and-the-euclidean-norm]]. Thus the integral and finite
forms are compatible, but the absolute-product and signed left sides are not
identical.
