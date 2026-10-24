---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-chebyshev-lobatto-interpolation-near-best-weighted-error.json
  precheck: pass
id: thm-chebyshev-lobatto-interpolation-near-best-weighted-error
kind: theorem
title: "Chebyshev–Lobatto interpolation inherits a weighted near-best bound"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps: [def-chebyshev-arcsine-weighted-l2-pairing, def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants, thm-chebyshev-interpolation-near-best-error-bound]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: "No choice axiom is used; the estimate follows from a finite measure bound."
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, §1.8"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 65–67 / PDF pp. 71–73; weighted interpolation error discussion and the Chebyshev analytic example."
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Ch. 5"
      url: "https://people.maths.ox.ac.uk/trefethen/ATAP/first6.pdf"
      locator: "Complete author-hosted first-six-chapter sample, Ch. 5, printed pp. 33–41; Chebyshev interpolation and best uniform approximation."
---
 
## Statement

For $f\in C[-1,1]$ and $N\ge0$, let $E_N(f)$ and $\Lambda_N^L$ be the best uniform error and the Lebesgue constant from [[def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants]]. Then
$$
\|f-I_N^Lf\|_C\le \sqrt{\pi}\,(1+\Lambda_N^L)E_N(f),
$$
where $\|\cdot\|_C$ is the arcsine-weighted norm of [[def-chebyshev-arcsine-weighted-l2-pairing]].

## Facts & Assumptions

**Given:** A continuous real function $f$ on $[-1,1]$ and $N\ge0$.

[F1] [[thm-chebyshev-interpolation-near-best-error-bound]]: $\|f-I_N^Lf\|_\infty\le(1+\Lambda_N^L)E_N(f)$.

[F2] [[def-chebyshev-arcsine-weighted-l2-pairing]]: $\|h\|_C^2=\int_0^\pi|h(\cos\theta)|^2d\theta$, so $\|h\|_C\le\sqrt{\pi}\|h\|_\infty$.

## Proof
1.1 For every $\theta\in[0,\pi]$, $|h(\cos\theta)|\le\|h\|_\infty$. Integrating its square in [F2] gives $\|h\|_C^2\le\pi\|h\|_\infty^2$ and hence $\|h\|_C\le\sqrt{\pi}\|h\|_\infty$. [given, F2, algebra]

2.1 Apply step 1.1 to $h=f-I_N^Lf$, then use the uniform near-best bound [F1]. The result is $\|f-I_N^Lf\|_C\le\sqrt{\pi}(1+\Lambda_N^L)E_N(f)$. [given, F1, step 1.1, algebra] ∎