---
id: lem-boys-small-taylor-remainder
kind: lemma
title: A monotone-range Taylor remainder for small Boys arguments
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-boys-function-and-coulomb-auxiliary-recurrence, thm-boys-integral-identities-series-and-incomplete-gamma]
proof_strategy: direct
axiom_use: None. The alternating tail estimate uses only a scalar convergent series.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Trygve Helgaker, Molecular Integral Evaluation, 10th Sostrup Summer School lecture notes (2008)"
      url: "https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf"
      locator: "Complete 41-page PDF; small-argument Boys series on p. 20. The monotone-term condition and explicit first-omitted-term bound are proved here."
    - title: "L. E. McMurchie and E. R. Davidson, One and Two Electron Integrals over Cartesian Gaussian Functions, UCRL-13791 (1976)"
      url: "https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf"
      locator: "Complete 23-page report; §IV.B, pp. 17–18. The certified small-$T$ remainder is proved here."
---

## Statement

Let $m,N\in\mathbb N_0$, $T\ge0$, and $N+2\ge T$. Then
$$\left|F_m(T)-\sum_{k=0}^N\frac{(-T)^k}{k!(2m+2k+1)}\right|\le\frac{T^{N+1}}{(N+1)!(2m+2N+3)}.$$
In particular, this is a valid finite Taylor certificate whenever $0\le T\le1$.

## Facts & Assumptions

**Given:** $F_m$ and its absolutely convergent series as in [[def-boys-function-and-coulomb-auxiliary-recurrence]] and [[thm-boys-integral-identities-series-and-incomplete-gamma]], with $m,N\ge0$, $T\ge0$, and $N+2\ge T$.

[F1] [[thm-boys-integral-identities-series-and-incomplete-gamma]]: $F_m(T)=\sum_{k\ge0}(-T)^k/[k!(2m+2k+1)]$.

## Proof

1.1 Set $a_k=T^k/[k!(2m+2k+1)]$. For $T>0$, $$\frac{a_{k+1}}{a_k}=\frac{T}{k+1}\frac{2m+2k+1}{2m+2k+3}\le\frac{T}{k+1}.$$ For every $k\ge N+1$, $k+1\ge N+2\ge T$, and the second factor is strictly less than one, so the positive terms decrease from the first omitted term onward. [given, F1, algebra]

2.1 The tail in [F1] after term $N$ is alternating with decreasing positive magnitudes by step 1.1; pairing consecutive terms shows its absolute value is at most $a_{N+1}$. That value is the displayed bound. If $T=0$, the tail and bound are both zero. [given, F1, step 1.1, algebra] ∎
