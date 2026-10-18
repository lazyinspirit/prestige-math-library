---
id: lem-erfcx-moment-recurrence
kind: lemma
title: Moment recurrence for the scaled complementary error function
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-erfcx-moment-sequence, def-fresnel-erf-and-hypergeometric-series, lem-erf-series-geometric-tail, thm-gaussian-integral, thm-integration-by-parts, thm-substitution-for-improper-integrals, def-euler-gamma-function, lem-gamma-integral-converges-locally-uniformly]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §7.2, definitions and elementary properties
      url: https://dlmf.nist.gov/7.2
    - title: DLMF, §§7.2 and 7.12(i)
      url: https://dlmf.nist.gov/7.12
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§3 and 5
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
---

## Statement

For $x>0$ and integer $k\ge0$, the moments in
[[def-erfcx-moment-sequence]] are finite and positive. They satisfy

$$2xM_0+2M_1=1, \qquad kM_{k-1}=2xM_k+2M_{k+1}\quad(k\ge1).$$

With $r_k=M_{k+1}/M_k$, it follows that

$$r_k=\frac{k+1}{2(x+r_{k+1})},\qquad 0<r_k<\frac{k+1}{2x},\qquad \operatorname{erfcx}(x)=\frac{1}{\sqrt\pi(x+r_0)}.$$

## Facts & Assumptions

**Given:** Real $x>0$, integer $k\ge0$, and the moment and scaled-error
definitions in [[def-erfcx-moment-sequence]].

[F1] [[def-erfcx-moment-sequence]]:
$M_k(x)=\int_0^\infty t^ke^{-t^2-2xt}\,dt$ and
$\operatorname{erfcx}(x)=e^{x^2}\operatorname{erfc}(x)$.

[F2] [[def-fresnel-erf-and-hypergeometric-series]]:
$\operatorname{erfc}(x)=1-\operatorname{erf}(x)$.

[F3] [[lem-erf-series-geometric-tail]]: for real $x$,
$\operatorname{erf}(x)=2\pi^{-1/2}\int_0^x e^{-u^2}\,du$.

[F4] [[thm-gaussian-integral]]:
$\int_{-\infty}^{\infty}e^{-u^2}\,du=\sqrt\pi$.

[F5] [[thm-integration-by-parts]]: on compact intervals, if its hypotheses
hold, $\int u v'=uv|_{\partial}-\int u'v$.

[F6] [[thm-substitution-for-improper-integrals]]: an admissible increasing
$C^1$ substitution preserves convergence and value of an improper integral.

[F7] [[def-euler-gamma-function]] and
[[lem-gamma-integral-converges-locally-uniformly]]: for $a>0$,
$\int_0^\infty s^{a-1}e^{-s}ds=\Gamma(a)<\infty$.

## Proof
1.1 The integrands in [F1] are positive. Near $0$ they are bounded by $t^k$. For $t\ge1$, $e^{-2xt}\le1$; the substitution $s=t^2$ and [F6] bound the tail by $\frac12\int_1^\infty s^{(k-1)/2}e^{-s}ds$, which is finite by [F7]. Thus each $M_k$ is finite; it is strictly positive because its integrand is positive on $[1,2]$. [given, F1, F6, F7, algebra]

2.1 Apply [F5] on $[\varepsilon,R]$ to $w(t)=e^{-t^2-2xt}$ and to $t^kw(t)$. The boundary terms tend to $0$ at $R\to\infty$; for $k\ge1$ they also tend to $0$ at $\varepsilon\downarrow0$, while for $k=0$ the lower boundary tends to $1$. For the infinite endpoint, choose an integer $m>k/2$; the exponential series gives $e^{t^2/2}\ge (t^2/2)^m/m!$, so $t^ke^{-t^2-2xt}\le 2^m m!t^{k-2m}e^{-t^2/2}\to0$. Passing to the limits in the integration-by-parts identities gives $2xM_0+2M_1=1$ and, for $k\ge1$, $kM_{k-1}=2xM_k+2M_{k+1}$. [F1, F5, step 1.1, algebra]

3.1 Divide the recurrence with index $k+1$ by $2M_k>0$. Since $r_k=M_{k+1}/M_k$ and $r_{k+1}=M_{k+2}/M_{k+1}$, this gives $(k+1)/2=xr_k+r_kr_{k+1}$ and hence $r_k=(k+1)/(2(x+r_{k+1}))$. Positivity gives $0<r_k<(k+1)/(2x)$. [step 2.1, algebra]

4.1 The integrand in [F4] is even, so $\int_0^\infty e^{-u^2}du=\sqrt\pi/2$. Subtract the integral identity in [F3] and use the definition in [F2] to get $$\operatorname{erfc}(x)=\frac2{\sqrt\pi}\int_x^\infty e^{-u^2}\,du.$$ The increasing substitution $u=t+x$ from [F6] then gives $$\operatorname{erfcx}(x)=\frac{2}{\sqrt\pi}\int_0^\infty e^{-t^2-2xt}\,dt=\frac{2M_0}{\sqrt\pi}.$$ The first identity in step 2.1 gives $2M_0(x+r_0)=1$; substitution proves $\operatorname{erfcx}(x)=1/(\sqrt\pi(x+r_0))$. [F1, F2, F3, F4, F6, step 2.1, algebra] ∎