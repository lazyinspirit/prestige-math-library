---
id: lem-boys-incomplete-gamma-large-t-tail-bound
kind: lemma
title: A scaled incomplete-gamma tail bound for large Boys arguments
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-boys-function-and-coulomb-auxiliary-recurrence, def-euler-gamma-function, thm-boys-integral-identities-series-and-incomplete-gamma, cor-additivity-of-the-nonnegative-lebesgue-integral]
proof_strategy: direct
axiom_use: None. The bound is a scalar integral estimate with a convergent exponential tail.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Trygve Helgaker, Molecular Integral Evaluation, 10th Sostrup Summer School lecture notes (2008)"
      url: "https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf"
      locator: "Complete 41-page PDF; large-$T$ Boys approximation and incomplete-gamma context on p. 20. The finite tail bound is proved here."
    - title: "L. E. McMurchie and E. R. Davidson, One and Two Electron Integrals over Cartesian Gaussian Functions, UCRL-13791 (1976)"
      url: "https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf"
      locator: "Complete 23-page report; §IV.B, pp. 17–18. The certified scaled tail enclosure is proved here."
---

## Statement

Let $m\in\mathbb N_0$, $s=m+\tfrac12$, and $T>\max\{s-1,0\}$. Then
$$F_m(T)=\frac{\Gamma(s)-R_s(T)}{2T^s},\qquad R_s(T)=\int_T^\infty u^{s-1}e^{-u}\,du,$$
and
$$0\le R_s(T)\le\frac{T^{s-1}e^{-T}}{1-\max\{s-1,0\}/T}.$$
Consequently a certified enclosure of $\Gamma(s)$ and $e^{-T}$ gives the interval
$$\left[\frac{\Gamma(s)}{2T^s}-\frac{T^{s-1}e^{-T}}{2T^s(1-\max\{s-1,0\}/T)},\frac{\Gamma(s)}{2T^s}\right]$$
after intersecting its lower endpoint with zero. In the evaluator's large branch $T>2m+1$, the denominator is at least $1/2$.

## Facts & Assumptions

**Given:** $m\ge0$, $s=m+1/2$, $T>\max\{s-1,0\}$, and the definitions in [[def-boys-function-and-coulomb-auxiliary-recurrence]] and [[def-euler-gamma-function]].

[F1] [[thm-boys-integral-identities-series-and-incomplete-gamma]]: $F_m(T)=\gamma(s,T)/(2T^s)$.

[F2] [[def-euler-gamma-function]]: $\Gamma(s)=\int_0^\infty u^{s-1}e^{-u}\,du$ for $s>0$.

[F3] [[cor-additivity-of-the-nonnegative-lebesgue-integral]]: splitting a nonnegative integral over adjacent intervals adds the two integrals.

## Proof

1.1 By [F2]–[F3], $\Gamma(s)=\gamma(s,T)+R_s(T)$, so [F1] gives the scaled identity. The tail is nonnegative. [given, F1, F2, F3, algebra]

1.2 Substitute $u=T+v$ into $R_s(T)$. If $s\ge1$, then $(T+v)^{s-1}=T^{s-1}(1+v/T)^{s-1}\le T^{s-1}e^{(s-1)v/T}$ because $1+w\le e^w$ for $w\ge0$. Hence $R_s(T)\le T^{s-1}e^{-T}\int_0^\infty e^{-(1-(s-1)/T)v}dv$, whose integral is $1/(1-(s-1)/T)$. If $0<s<1$, then $(T+v)^{s-1}\le T^{s-1}$, yielding $R_s(T)\le T^{s-1}e^{-T}$. These are the combined bound. [given, algebra]

2.1 For $s=m+1/2$, $\max\{s-1,0\}\le m$; if $T>2m+1$, then $\max\{s-1,0\}/T<1/2$. Substitution into step 1.2 gives the evaluator's large-branch denominator bound and the interval enclosure. [given, step 1.1, step 1.2, algebra] ∎
