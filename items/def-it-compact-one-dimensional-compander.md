---
id: def-it-compact-one-dimensional-compander
kind: definition
title: Positive C1 compact one-dimensional compander
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-it-finite-squared-error-quantizer
  - def-it-point-density-cumulative-map
  - lem-it-point-density-cumulative-map-is-c2-diffeomorphism
justified_by:
  - lem-it-compact-compander-quantizer-is-borel-and-finite-distortion
aliases: []
axiom_use: No choice principle is used.
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Robert M. Gray, Source Coding Theory, first edition
      url: https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf
      locator: Chapter 5, §§5.1–5.2, printed pp. 115–120, scalar partitions and high-rate companding.
    - title: Robert M. Gray and David L. Neuhoff, Quantization, IEEE Transactions on Information Theory 44(6) (1998)
      url: https://www.csd.uoc.gr/~hy438/lectures/Quantization.pdf
      locator: §II and §IV-A, printed pp. 2328–2329 and 2344–2346, compander maps and point densities.
---

## Definition

Let $a<b$. Let $f,g:[a,b]\to(0,\infty)$ be $C^1$ probability densities, so $\int_a^bf=\int_a^bg=1$. Write $G_g$ for [[def-it-point-density-cumulative-map]] and $\phi=G_g^{-1}$ for the $C^2$ inverse established by [[lem-it-point-density-cumulative-map-is-c2-diffeomorphism]]. For each integer $N\ge1$, define boundaries

$$\beta_j:=\phi(j/N)\quad(0\le j\le N),$$

and reproduction points

$$r_j:=\phi((j-\tfrac12)/N)\quad(1\le j\le N).$$

The cells are $[\beta_{j-1},\beta_j)$ for $j<N$ and $[\beta_{N-1},b]$ for $j=N$. The compander quantizer maps every point in cell $j$ to $r_j$. It is a finite measurable quantizer in the sense of [[def-it-finite-squared-error-quantizer]], with source law of density $f$ on $[a,b]$ and squared-error distortion

$$D_N(f,g):=\sum_{j=1}^N\int_{\beta_{j-1}}^{\beta_j}f(x)(x-r_j)^2\,dx.$$

Its cells are uniform in the cumulative coordinate of $g$; the definition does not assert that they are nearest-center cells in the original $x$ coordinate. Since the source is supported on the fixed compact interval and the cells cover it, there is no overload region in this model.
