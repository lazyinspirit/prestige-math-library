---
id: lem-boys-positive-midpoint-enclosure
kind: lemma
title: A positive midpoint enclosure for Boys functions on bounded arguments
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-boys-function-and-coulomb-auxiliary-recurrence, lem-mean-value-theorem-on-closed-interval]
proof_strategy: direct
axiom_use: None. This is a finite partition estimate on a compact interval.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Trygve Helgaker, Molecular Integral Evaluation, 10th Sostrup Summer School lecture notes (2008)"
      url: "https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf"
      locator: "Complete 41-page PDF; Boys-function numerical evaluation discussion, pp. 20–21. The source describes evaluation regimes; the midpoint enclosure and constant are proved here."
    - title: "L. E. McMurchie and E. R. Davidson, One and Two Electron Integrals over Cartesian Gaussian Functions, UCRL-13791 (1976)"
      url: "https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf"
      locator: "Complete 23-page report; §IV.B, pp. 17–18. The certified midpoint bound is derived locally."
---

## Statement

For $m\in\mathbb N_0$, $T\ge0$, and integer $N\ge1$, let $h=1/N$, $t_j=(j-\tfrac12)h$ for $1\le j\le N$, and
$$Q_{m,N}(T)=h\sum_{j=1}^N t_j^{2m}e^{-Tt_j^2}.$$
Then all quadrature weights and summands are positive and
$$|F_m(T)-Q_{m,N}(T)|\le\frac{m+T}{2N}.$$
Consequently, for $0\le T\le T_{\max}$, the same positive rule has the uniform enclosure error $(m+T_{\max})/(2N)$.

## Facts & Assumptions

**Given:** $F_m(T)$ as in [[def-boys-function-and-coulomb-auxiliary-recurrence]], $m\ge0$, $T\ge0$, and $N\ge1$.

[F1] [[def-boys-function-and-coulomb-auxiliary-recurrence]]: $F_m(T)=\int_0^1f(t)\,dt$ with $f(t)=t^{2m}e^{-Tt^2}$.

[F2] [[lem-mean-value-theorem-on-closed-interval]]: a differentiable function whose derivative has absolute value at most $L$ varies by at most $L$ times the distance between two points.

## Proof

1.1 For $m=0$, $f'(t)=-2Tt e^{-Tt^2}$, so $|f'(t)|\le2T$. For $m\ge1$, differentiation gives $f'(t)=2m t^{2m-1}e^{-Tt^2}-2Tt^{2m+1}e^{-Tt^2}$; since $0\le t\le1$ and $e^{-Tt^2}\le1$, $|f'(t)|\le2m+2T$. Thus the Lipschitz constant $L=2m+2T$ is valid in both cases by [F2]. [given, F1, F2, algebra]

2.1 On each subinterval of length $h$, the mean-value bound gives $|f(t)-f(t_j)|\le L|t-t_j|$. Integrating over that subinterval yields error at most $Lh^2/4$, because the integral of distance from its midpoint is $h^2/4$. Summing $N$ subintervals gives $L/(4N)=(m+T)/(2N)$. All midpoints and weights are positive and $f(t_j)>0$. [given, step 1.1, algebra]

3.1 If $T\le T_{\max}$, then $(m+T)/(2N)\le(m+T_{\max})/(2N)$; hence the stated uniform bound follows without changing the positive weights or nodes. [given, step 2.1, algebra] ∎
