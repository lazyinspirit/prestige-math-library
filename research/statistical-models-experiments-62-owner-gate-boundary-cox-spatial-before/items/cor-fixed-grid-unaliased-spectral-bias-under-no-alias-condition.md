---
id: cor-fixed-grid-unaliased-spectral-bias-under-no-alias-condition
kind: corollary
title: "Unaliased fixed-grid spectral bias under the exact no-alias condition"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
deps:
  - lem-fixed-grid-sampling-spectral-alias-identity
  - thm-regular-grid-smoothed-periodogram-bias-vanishes
  - def-regular-grid-periodogram-and-smoother
  - def-axiom-of-choice
  - def-dependent-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Evgeny Spodarev, Spatial Statistics: Lecture Notes (2024), Lemmas 2.10(b) and 2.14, PDF pp. 20–21 and 24; fixed-spacing continuous target supplied with its exact alias condition"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/mitarbeiter/spodarev/publications/scripts/SpatialStatistics_2024.pdf"
dependency_level: 6
---

## Statement

Assume the model and AC/DC of [[lem-fixed-grid-sampling-spectral-alias-identity]]. Fix $\omega_0\in\mathbb R^d$, and put $\lambda_0=\delta\omega_0$ modulo $2\pi$. Suppose the pointwise periodized sum $g_\delta$ has a bounded torus representative continuous at $\lambda_0$, agreeing with that sum at $\lambda_0$. Use the kernel and bandwidths of [[thm-regular-grid-smoothed-periodogram-bias-vanishes]]. Define the physically normalized estimates at $\omega_0$ by
$$ \widehat f_n^{\rm raw}(\omega_0)=\delta^d I_n(\delta\omega_0),\qquad \widehat f_n^{\rm sm}(\omega_0)=\delta^d\widetilde f_{n,b_n}(\delta\omega_0). $$
Then the smoother is defined eventually and both expectations converge to
$$ a_\delta(\omega_0):=\sum_{k\in\mathbb Z^d}f(\omega_0+2\pi k/\delta). $$
In particular, both have vanishing bias for the unaliased value $f(\omega_0)$ if and only if
$$ f(\omega_0+2\pi k/\delta)=0\qquad\text{for every }k\ne0. $$
This exact pointwise condition does not restrict the general aliased-target theorem. A sufficient global condition is that $f$ is continuous and supported in a compact subset of the open Nyquist cube $(-\pi/\delta,\pi/\delta)^d$, with $\omega_0$ in that cube. No variance, consistency or CLT conclusion is asserted.

## Facts & Assumptions

**Given:** The fixed-spacing continuous-space model, a bounded periodized density representative continuous at the target and agreeing there with its sum, the kernel/bandwidth assumptions, and AC/DC.

[F1] [[lem-fixed-grid-sampling-spectral-alias-identity]]: $g_\delta$ is the torus density of the sampled field and its pointwise sum is $\delta^{-d}\sum_k f((\lambda+2\pi k)/\delta)$.

[F2] [[thm-regular-grid-smoothed-periodogram-bias-vanishes]]: for a bounded torus density continuous at the chosen target, both raw and smoothed periodogram expectations converge to that density value; smoothing denominators are eventually positive.

[F3] [[def-regular-grid-periodogram-and-smoother]]: the normalized Fourier-grid smoother is the specified finite nonnegative weighted sum of angular periodogram ordinates.

[A1] [[def-axiom-of-choice]] and [[def-dependent-choice]]: AC and DC are inherited through the lattice spectral representation and its bias theorem.

## Proof

1.1 By [F1] the sampled field has torus density $g_\delta$, and the assumed representative meets all hypotheses of [F2]. Thus the denominator in [F3] is eventually positive and both angular expectations tend to $g_\delta(\lambda_0)$. Multiplying by $\delta^d$ and reindexing the convergent nonnegative sum at the target gives $\delta^d g_\delta(\lambda_0)=\sum_k f(\omega_0+2\pi k/\delta)=a_\delta(\omega_0)$. This proves the general aliased limit for both physically normalized estimates. [A1, F1, F2, F3, given, algebra]

2.1 Every alias summand is nonnegative. Therefore $a_\delta(\omega_0)-f(\omega_0)=\sum_{k\ne0}f(\omega_0+2\pi k/\delta)$ is zero if and only if every summand is zero. This proves both directions of the stated exact condition. Under the sufficient global condition, only the central translate is nonzero for frequencies in the Nyquist cube; its support stays away from the boundary. Hence the periodic density is bounded and continuous across the boundary as well, and has no noncentral alias at the stated target. All hypotheses and the exact condition are then verified. [F1, step 1.1, given, algebra] ∎
