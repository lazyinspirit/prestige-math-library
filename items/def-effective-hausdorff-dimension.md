---
id: def-effective-hausdorff-dimension
kind: definition
title: "Effective Hausdorff dimension"
status: published
origin: session
deps: [def-effectively-open-set-in-cantor-space]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Franklin and Porter, §4.5"
      url: "https://arxiv.org/pdf/2004.02851"
---
## Definition
For $s\ge0$, an **effective $s$-gale** is a lower-semicomputable function $d:\{0,1\}^*\to\mathbb R_{\ge0}$ satisfying
$$ d(\sigma)=2^{-s}\bigl(d(\sigma0)+d(\sigma1)\bigr) $$
for every binary string $\sigma$; it succeeds on $X$ when $\sup_n d(X\upharpoonright n)=\infty$. The effective dimension $\dim(X)$ is the infimum of $s$ for which some effective $s$-gale succeeds on $X$. Equivalently it is characterized by effective covers made from the cylinders of [[def-effectively-open-set-in-cantor-space]].
