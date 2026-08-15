---
id: thm-fundamental-inequality-for-complex-line-integrals
kind: theorem
title: "The fundamental inequality: the modulus of the integral is at most the absolute line integral for rectifiable contours"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-existence-of-complex-line-integrals-on-rectifiable-paths, lem-complex-conjugation-and-modulus-laws, cor-chord-length-is-at-most-arc-length]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Ahlfors, Complex Analysis, 3rd ed., Ch. 4"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

For a continuous $f$ on the trace of a rectifiable contour $\gamma$,
$$\left|\int_\gamma f(z)\,dz\right|\le\int_\gamma|f(z)|\,|dz|.$$

## Facts & Assumptions

**Given:** A rectifiable contour $\gamma$ and a continuous integrand $f$.

[L1] Both the complex and absolute line integrals exist ([[thm-existence-of-complex-line-integrals-on-rectifiable-paths]]).

[L2] Complex modulus satisfies $|z+w|\le|z|+|w|$ and $|zw|=|z||w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L3] Every chord of a rectifiable path is at most the length of the corresponding subpath ([[cor-chord-length-is-at-most-arc-length]]).

## Proof

**Proof technique:** direct.

1.1 For a tagged partition $P$, the complex polygonal sum $S_P=\sum f(\gamma(\xi_j))(\gamma(t_{j+1})-\gamma(t_j))$ satisfies $|S_P|\le\sum|f(\gamma(\xi_j))|\,|\gamma(t_{j+1})-\gamma(t_j)|$ by [L2]. [L2]

2.1 By [L3], each chord in step 1.1 is at most $s_\gamma(t_{j+1})-s_\gamma(t_j)$. The resulting tagged arc-length sums converge to the existing absolute line integral from [L1]. [step 1.1, L1, L3]

3.1 Letting the mesh tend to $0$, [L1] identifies the limit of $S_P$ with the complex line integral and step 2.1 identifies the majorant limit with the absolute integral, proving the inequality with sharp constant $1$. The same argument includes a constant contour: every chord and arc-length increment is $0$, so both sides vanish. [step 1.1, step 2.1, L1] ∎
