---
id: rem-finite-counting-measure-minkowski-agrees-with-the-published-finite-theorem
kind: remark
title: "On a finite counting space, Minkowski agrees with the published finite theorem for $p>1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-minkowski-inequality-for-integrals, thm-minkowski-finite-real-exponents, def-p-norms-on-rn, rem-ell-p-is-l-p-of-counting-measure]
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Chapter 8"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
---

Under the finite counting-measure identification of
[[rem-ell-p-is-l-p-of-counting-measure]], the integral Minkowski inequality of
[[thm-minkowski-inequality-for-integrals]] becomes the published finite-sum
theorem [[thm-minkowski-finite-real-exponents]] for real $p>1$ on the same
coordinates. The integral theorem's $p=1$ and $p=\infty$ clauses also specialize
to the corresponding elementary finite-sum inequalities, but those endpoints
are outside the cited theorem's statement. This is an agreement seam, not a
second construction.
