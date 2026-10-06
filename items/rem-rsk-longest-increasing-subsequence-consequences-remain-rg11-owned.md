---
id: rem-rsk-longest-increasing-subsequence-consequences-remain-rg11-owned
kind: remark
title: "The RSK and longest-increasing-subsequence consequences remain owned by the hook-length/RSK page"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: [thm-rsk-shape-of-a-uniform-random-permutation-has-plancherel-law, lem-rsk-union-bound-localizes-plancherel-profiles, thm-plancherel-young-diagrams-converge-to-the-limit-shape]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Dan Romik, The Surprising Mathematics of Longest Increasing Subsequences, Cambridge University Press 2015; author-hosted manuscript of 20 August 2014 (363 pp.)"
      url: "https://danromik.com/resources/books/the-surprising-mathematics-of-longest-increasing-subsequences.pdf"
      locator: "Chapter 2, especially §§2.1 and 2.11, printed pp. 79-82 and 143-148 (Tracy-Widom fluctuations and edge statistics, deliberately out of scope); §§1.18-1.20, pp. 62-70 (dimensions, growth, and the limit shape)"
---

## Remark

This page consumes the distribution of the Robinson-Schensted shape of a uniform permutation ([[thm-rsk-shape-of-a-uniform-random-permutation-has-plancherel-law]]) and Schensted's longest increasing and decreasing subsequence theorem only to localize Plancherel profiles ([[lem-rsk-union-bound-localizes-plancherel-profiles]]). It does not re-mint RSK, the LIS/LDS identities, the Baik-Deift-Johansson theorem, the Tracy-Widom distribution, determinantal point processes or edge statistics of Plancherel measure: those belong to the hook-length/RSK page and to separate analytic-probability suppliers, and the limit-shape theorem proved here ([[thm-plancherel-young-diagrams-converge-to-the-limit-shape]]) is the qualitative law of large numbers, not a fluctuation or edge result. In particular no sharp constant, rate or fluctuation-distribution statement is asserted: the localization lemma gives only the bound $\lambda_1,\lambda'_1\le C\sqrt n$ with probability tending to one, for each fixed $C>e$, and the limit-shape theorem gives only convergence in probability of the scaled profile to $\Omega$.
