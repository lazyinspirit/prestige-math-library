---
id: def-complex-line-integral-over-a-rectifiable-path
kind: definition
title: "The complex line integral over a rectifiable path as a componentwise Riemann–Stieltjes integral"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complex-contours-reversal-concatenation-and-closedness, def-riemann-stieltjes-sum-and-integral, def-complex-conjugate-real-imaginary-part-and-modulus]
justified_by: [thm-existence-of-complex-line-integrals-on-rectifiable-paths]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "L. Ahlfors, Complex Analysis, 3rd ed., Ch. 4"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Definition

Let $\gamma=x+iy:[a,b]\to\mathbb C$ be a rectifiable contour in the sense of [[def-complex-contours-reversal-concatenation-and-closedness]] and let $f=u+iv$ be continuous on its trace, with real and imaginary parts from [[def-complex-conjugate-real-imaginary-part-and-modulus]]. Define
$$\int_\gamma f(z)\,dz:=\int_a^b u(\gamma(t))\,dx(t)-\int_a^b v(\gamma(t))\,dy(t)+i\left(\int_a^b v(\gamma(t))\,dx(t)+\int_a^b u(\gamma(t))\,dy(t)\right),$$
where the four integrals are the real Riemann–Stieltjes integrals of [[def-riemann-stieltjes-sum-and-integral]]. Their existence is proved in [[thm-existence-of-complex-line-integrals-on-rectifiable-paths]]. On a singleton parameter interval the integral is $0$.
