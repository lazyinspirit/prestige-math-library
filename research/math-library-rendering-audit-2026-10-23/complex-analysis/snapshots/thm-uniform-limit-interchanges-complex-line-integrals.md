---
id: thm-uniform-limit-interchanges-complex-line-integrals
kind: theorem
title: "A uniformly convergent sequence of continuous integrands on a fixed contour permits passage of the limit through the complex line integral"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-ml-estimate-for-complex-line-integrals, thm-existence-of-complex-line-integrals-on-rectifiable-paths]
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "L. Ahlfors, Complex Analysis, 3rd ed., Ch. 4"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

Let $\gamma$ be a fixed rectifiable contour. If continuous functions $f_n$ on its trace converge uniformly to a continuous $f$, then
$$\int_\gamma f_n(z)\,dz\longrightarrow\int_\gamma f(z)\,dz.$$

## Facts & Assumptions

**Given:** A rectifiable contour $\gamma$ and uniformly convergent continuous functions $f_n\to f$ on its trace.

[L1] Continuous integrands have complex line integrals along every rectifiable path ([[thm-existence-of-complex-line-integrals-on-rectifiable-paths]]).

[L2] If $|g|\le M$ on the trace, then $|\int_\gamma g\,dz|\le M L(\gamma)$ ([[cor-ml-estimate-for-complex-line-integrals]]).

## Proof

**Proof technique:** cases.

1.1 If $L(\gamma)=0$, [L2] gives $\int_\gamma(f_n-f)\,dz=0$ for every $n$. [assume-case zero, L2]

1.2 If $L(\gamma)>0$, given $\varepsilon>0$ choose $N$ such that $|f_n-f|<\varepsilon/L(\gamma)$ on the trace for $n\ge N$. [assume-case positive, choose]

2.1 By [L1] all integrals exist, and [L2] applied to $f_n-f$ gives $|\int_\gamma f_n\,dz-\int_\gamma f\,dz|<\varepsilon$ for $n\ge N$. [step 1.2, L1, L2]

3.1 The two length cases are exhaustive and prove convergence without ever dividing by zero. [step 1.1, step 2.1, cases-exhaustive] ∎
