---
id: thm-residue-evaluation-rational-real-integrals
kind: theorem
title: "Rational improper integrals without real poles are upper-half-plane residue sums"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-residue-theorem-null-homologous-cycle,
       lem-large-semicircle-vanishing,
       def-standard-residue-contours,
       thm-improper-p-test-rational]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §5.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "R. Howell and J. Mathews, Complex Analysis, Ch. 8 §8.3"
      url: "https://complexanalysis.org/web/ch_residue.html"
pipeline_run: null
---

## Statement

Let $R=p/q$ be a rational function with
$\deg q\ge\deg p+2$, and assume that $q$ has no real zero. Then

$\int_{-\infty}^{\infty}R(x)\,dx$

converges, and

$\int_{-\infty}^{\infty}R(x)\,dx =2\pi i\sum_{\Im a>0}\operatorname{Res}(R,a),$

where the sum runs over the poles of $R$ in the upper half-plane.

## Facts & Assumptions

**Given:** A rational function $R=p/q$ with $\deg q\ge\deg p+2$ and no real pole.

[L1] The residue theorem holds for the large upper semicircle contour ([[thm-residue-theorem-null-homologous-cycle]]).

[L2] If $\sup_{|z|=T,\ \Im z\ge0}|zR(z)|\to0$, then the upper semicircle integral tends to $0$ ([[lem-large-semicircle-vanishing]]).

[L3] The degree gap $\deg q\ge\deg p+2$ makes $R(x)=O(x^{-2})$ on the real line, so the improper integral converges by comparison with the rational $p$-test at exponent $2$ ([[thm-improper-p-test-rational]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], the real improper integral converges. The same degree gap implies $zR(z)\to0$ as $|z|\to\infty$, because the numerator degree is at least two less than the denominator degree. [given, L3]

2.1 Let $\Gamma_T$ be the contour formed by $[-T,T]$ and the upper semicircle [L1] $\gamma_T^+$. For all sufficiently large $T$, the contour avoids every pole of $R$ and encloses exactly the poles of $R$ with positive imaginary part. So gives $\int_{-T}^TR(x)\,dx+\int_{\gamma_T^+}R(z)\,dz =2\pi i\sum_{\Im a>0}\operatorname{Res}(R,a).$ [step 1.1, L1]

3.1 By step 1.1 and [L2], the arc integral tends to $0$ as $T\to\infty$. The straight-piece integral tends to $\int_{-\infty}^{\infty}R(x)\,dx$ by step 1.1. Passing to the limit in step 2.1 yields the residue formula. [step 2.1, L2, L3] ∎
