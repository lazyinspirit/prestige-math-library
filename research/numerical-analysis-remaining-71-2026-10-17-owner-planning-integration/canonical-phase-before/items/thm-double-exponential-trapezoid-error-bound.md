---
id: thm-double-exponential-trapezoid-error-bound
kind: theorem
title: A finite double-exponential trapezoid has separate strip and tail errors
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [alg-double-exponential-trapezoid, thm-double-exponential-transforms-and-integral-identities, thm-analytic-strip-trapezoid-error, lem-double-exponential-truncated-tail-bound]
proof_strategy: direct
axiom_use: None. The estimate is a triangle-inequality decomposition.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Lloyd N. Trefethen and J. A. C. Weideman, The Exponentially Convergent Trapezoidal Rule, SIAM Review 56(3), 2014
      url: https://people.maths.ox.ac.uk/trefethen/publication/PDF/2014_149.pdf
      locator: §§5.1 and 6, strip discretization bound and separate truncation bound.
---

## Statement

Use one of the modes of [[alg-double-exponential-trapezoid]] and let $\Phi$ be its transformed real integrand. Suppose $\Phi$ has an extension $F$ satisfying all hypotheses of [[thm-analytic-strip-trapezoid-error]] for some $0<a<d$, with horizontal integrals $I_\pm=\int_{\mathbb R}|F(x\pm ia)|dx$. Also suppose $|\Phi(t)|\le A e^{-B e^{\kappa|t|}}$ for $|t|\ge T$, where $A,B,\kappa>0$, and $N_\pm h\ge T$. If $I$ is the target improper integral and $T_{h,N_-,N_+}$ is the finite sum in the algorithm, then it is absolutely convergent as an improper integral and
$$|I-T_{h,N_-,N_+}|\le\frac{I_++I_-}{e^{2\pi a/h}-1}+\frac{A}{\kappa B}\left(e^{-B e^{\kappa N_-h}}+e^{-B e^{\kappa N_+h}}\right).$$
The strip and tail hypotheses are separate assumptions; integrability alone implies neither estimate.

## Facts & Assumptions

**Given:** A mode and transformed function $\Phi$ from [[alg-double-exponential-trapezoid]], its target $I$, an analytic extension satisfying the strip hypotheses, and a double-exponential real-tail envelope with the stated cutoff conditions.

[F1] [[alg-double-exponential-trapezoid]]: the output is $h\sum_{k=-N_-}^{N_+}\Phi(kh)$.

[F2] [[thm-double-exponential-transforms-and-integral-identities]]: if $\Phi\in L^1(\mathbb R)$, the target exists absolutely and equals $\int_{\mathbb R}\Phi(t)dt$.

[F3] [[thm-analytic-strip-trapezoid-error]]: under the closed-substrip exponential bound and analyticity hypotheses, $\left|\int\Phi-h\sum_{k\in\mathbb Z}\Phi(kh)\right|\le(I_++I_-)/(e^{2\pi a/h}-1)$ and the infinite sum is absolutely convergent.

[F4] [[lem-double-exponential-truncated-tail-bound]]: the continuous and sampled omitted tails each have the stated one-sided envelope bound.

## Proof

1.1 The real-tail envelope makes $\Phi$ absolutely integrable outside $[-T,T]$ by [F4]. Continuity makes it bounded and integrable on $[-T,T]$, so $\Phi\in L^1(\mathbb R)$ and [F2] identifies $I=\int_{\mathbb R}\Phi$. [given, F2, F4, algebra]

1.2 By [F3], $h\sum_{k\in\mathbb Z}\Phi(kh)$ is absolutely convergent. Splitting its terms into $-N_-\le k\le N_+$ and the two omitted tails is therefore valid. [F1, F3, given]

2.1 Add and subtract the infinite trapezoid sum. The triangle inequality bounds the target-to-finite-sum error by the target-to-infinite-sum error plus the absolute omitted sample sum. [step 1.1, step 1.2, algebra]

2.2 Apply [F3] to the first term in step 2.1 and the sampled-tail estimate [F4] to the second. Their sum is the displayed bound. [F3, F4, step 2.1] ∎

