---
id: rem-agreement-with-the-existing-infinitude-of-primes
kind: remark
title: "The pole of zeta at $1$ recovers Euclid's infinitude of primes without reminting it on this page"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-euler-product-for-riemann-zeta, thm-euclid-infinitude-of-primes]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 6 §2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 11 §3"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

The existing arithmetic theorem [[thm-euclid-infinitude-of-primes]] already
proves that there are infinitely many primes. The Euler product
[[thm-euler-product-for-riemann-zeta]] shows why the zeta function sees the same
fact: once the later continuation theorem on this page identifies a simple pole
at $s=1$, the product
$$\prod_p (1-p^{-s})^{-1}$$
cannot be a finite product, so it encodes a second proof of infinitude. This
page records that agreement but does not duplicate the arithmetic theorem under
a new complex-analysis id.
