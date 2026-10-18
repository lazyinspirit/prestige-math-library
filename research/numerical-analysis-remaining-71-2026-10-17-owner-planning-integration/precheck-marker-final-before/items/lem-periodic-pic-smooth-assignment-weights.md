---
id: lem-periodic-pic-smooth-assignment-weights
kind: lemma
title: Smooth periodic PIC assignment weights have bounded derivatives
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-periodic-pic-shape-assignment-and-gather
  - thm-periodic-pic-continuum-regularized-poisson-kernel-is-smooth
proof_strategy: direct
axiom_use: No choice principle is used; compactness and finite sums suffice.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: R. W. Hockney and J. W. Eastwood, Computer Simulation Using Particles, Sections 2-2-3 and 5-2
      url: https://djvu.online/file/cjOfwRgltjv1g
---

## Statement

For fixed $\varepsilon>0$ and periodic grid, the smooth-branch weights $w_j^{\varepsilon,h}$ of [[def-periodic-pic-shape-assignment-and-gather]] are $C^\infty$ on $\mathbb T_L^d$. For every multi-index $\beta$, $\max_j\|\partial^\beta w_j^{\varepsilon,h}\|_\infty<\infty$. They are nonnegative and sum to one at every point.

## Facts & Assumptions

**Given:** The explicit smooth periodic kernel $\eta_\varepsilon$, its sampled normalizer $Z_{\varepsilon,h}$, and the displayed weights.

[F1] [[def-periodic-pic-shape-assignment-and-gather]]: $Z_{\varepsilon,h}(x)=h^d\sum_j\eta_\varepsilon(x_j-x)$ and $w_j^{\varepsilon,h}(x)=h^d\eta_\varepsilon(x_j-x)/Z_{\varepsilon,h}(x)$, where $Z_{\varepsilon,h}(x)>0$.

[F2] [[thm-periodic-pic-continuum-regularized-poisson-kernel-is-smooth]]: $\eta_\varepsilon$ is strictly positive and $C^\infty$ on the compact torus.

## Proof

1.1 By [F2], each numerator in [F1] is a smooth periodic function. The finite sum defining $Z_{\varepsilon,h}$ is smooth and strictly positive; compactness gives a positive minimum. The reciprocal of a positive smooth function is smooth, so every ratio $w_j^{\varepsilon,h}$ is $C^\infty$. Each derivative is continuous on the compact torus and hence bounded; there are finitely many indices $j$, so their maximum is finite. [F1, F2, algebra]

2.1 Each weight is nonnegative by [F1] and positivity of $\eta_\varepsilon$. Summing [F1] over $j$ gives $\sum_jw_j^{\varepsilon,h}(x)=Z_{\varepsilon,h}(x)/Z_{\varepsilon,h}(x)=1$. [F1, step 1.1, algebra] ∎
