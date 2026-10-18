---
id: lem-half-order-kernel-translation-modulus-in-l1
kind: lemma
title: Translations of the half-order kernel are continuous in the improper L1 norm
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-riemann-stieltjes-sum-and-integral
  - thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators
  - thm-reals-cauchy-complete
  - thm-continuous-implies-integrable
  - thm-additivity-over-subintervals
  - thm-monotonicity-of-the-integral
  - thm-heine-cantor-metric
  - cor-cauchy-reals-lub-complete
  - thm-heine-borel-rn
justified_by: []
proof_strategy: direct
axiom_use: None. The improper tails are bounded explicitly and the smoothing
  argument uses only uniform continuity on a compact interval.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jiri Lebl, Basic Analysis I, §5.5 Improper Integrals"
      url: "https://www.jirka.org/ra/html/sec_impropriemann.html"
      locator: "Definition 5.5.1 and Proposition 5.5.2, the endpoint p-test for 0<p<1;
        specialize to p=1/2."
    - title: "Habib Ammari, Brian Fitzpatrick, and Sanghyeon Yu, Mathematical and
        Computational Methods in Photonics: Tutorial Notes, §1.4"
      url: "https://people.math.ethz.ch/~grsam/HS16/MCMP/Mathematical%20and%20Computa\
        tional%20Methods%20in%20Photonics%20-%20Tutorial%20Notes.pdf"
      locator: "Chapter 1, §1.4, printed p. 14: singular kernels require
        method-specific treatment; this item supplies the local L1 translation
        proof."
verification:
  precheck: pass
---

## Statement

Put $s(t):=|t|^{-1/2}$ for $t\in[-1,1]\setminus\{0\}$. For $x,x'\in[0,1]$,
define
$$T(x,x'):=\int_0^1|s(x-y)-s(x'-y)|\,dy$$
as an improper Riemann integral split at the distinct points among $x$ and
$x'$; an endpoint value at a singular point is omitted. If $x=x'$, set
$T(x,x)=0$. These improper integrals exist and are finite. The modulus
$$\tau(d):=\sup\{T(x,x'):x,x'\in[0,1],\ |x-x'|\le d\}$$
is finite and satisfies $\tau(d)\to0$ as $d\downarrow0$.

## Facts & Assumptions

**Given:** $x,x'\in[0,1]$, the singular function $s(t)=|t|^{-1/2}$ for $t\ne0$, and the improper Riemann integral convention in the Statement.

[F1] [[def-riemann-stieltjes-sum-and-integral]] defines the ordinary integrals on nonsingular closed intervals, with the identity as integrator. Here an improper integral means the limit of the truncated integrals, by the convention in the Statement; existence of that limit is proved below.

[F2] [[thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators]]: for $0<\delta<\eta$, $\int_\delta^\eta r^{-1/2}\,dr=2(\sqrt\eta-\sqrt\delta)$.

[F3] [[thm-reals-cauchy-complete]]: every Cauchy sequence of real numbers has a real limit.

[F4] [[thm-continuous-implies-integrable]]: a continuous function on a closed interval has an ordinary Riemann integral.

[F5] [[thm-additivity-over-subintervals]] and [[thm-monotonicity-of-the-integral]]: truncated interval integrals add, and pointwise bounds between integrable functions give the corresponding integral bounds.

[F6] [[thm-heine-cantor-metric]]: a continuous function on the compact interval $[-1,1]$ is uniformly continuous.

[F7] [[cor-cauchy-reals-lub-complete]]: every nonempty bounded set of reals has a finite supremum.

[F8] The interval $[-1,1]$ with its usual metric is a nonempty compact metric space ([[thm-heine-borel-rn]]).

## Proof


**Given:** The data in the Statement, $d:=|x-x'|$, and $0<\eta<1$.

1.1 If $x=x'$, then the integrand is zero away from the omitted singular point and $T(x,x')=0$. Suppose $x\ne x'$. Split $[0,1]$ at $x$ and $x'$. On the interior of each resulting interval the integrand is continuous by [F4]. Near a singular endpoint $c\in\{x,x'\}$, take a cutoff $\rho<|x-x'|/3$. The other singular term is bounded there by $(2|x-x'|/3)^{-1/2}$, while the term singular at $c$ has tail integral at most $2\sqrt\rho$ by [F2] after the lower cutoff tends to zero. Thus each omitted endpoint tail is at most $2\sqrt\rho+2\rho(2|x-x'|/3)^{-1/2}$, which tends to zero. Taking cutoffs $\rho_m=|x-x'|/(4(m+1))$ for integers $m\ge0$ gives a Cauchy sequence of truncated sums by additivity and comparison [F5]; [F3] gives a finite limit. The same tail bound compares any sufficiently small cutoff with this cofinal sequence, so the improper limit exists. The argument also applies when a singular point is 0 or 1, with only one adjacent interval. [given, F2, F3, F4, F5, algebra]

1.2 For $t\in[-1,1]$, define $s_\eta(t):=\min\{\eta^{-1/2},|t|^{-1/2}\}$ when $t\ne0$ and $s_\eta(0):=\eta^{-1/2}$. This is continuous. Direct integration using [F2] gives $\int_{-1}^1|s(t)-s_\eta(t)|\,dt =2\int_0^\eta(t^{-1/2}-\eta^{-1/2})\,dt=2\sqrt\eta.$ The two translated tails on $y\in[0,1]$ are each bounded by this full tail. [given, F1, F2, F4, algebra]

2.1 For every $y$ outside the finitely many singular points, the triangle inequality gives $|s(x-y)-s(x'-y)|\le|s(x-y)-s_\eta(x-y)|+|s_\eta(x-y)-s_\eta(x'-y)|+|s_\eta(x'-y)-s(x'-y)|.$ Integrating truncated intervals and taking the limits from step 1.1, the first and third terms each contribute at most $2\sqrt\eta$ by step 1.2. The middle term is at most $\omega_\eta(d):=\sup_{|t-t'|\le d}|s_\eta(t)-s_\eta(t')|$, since the interval has length one. Thus $T(x,x')\le4\sqrt\eta+\omega_\eta(d).$ By [F8], the domain $[-1,1]$ is compact, so [F6] gives $\omega_\eta(d)\to0$ as $d\downarrow0$ for fixed $\eta$; also $\omega_\eta(d)\le2\eta^{-1/2}$, so the preceding bound bounds every $T(x,x')$. The set in the definition of $\tau(d)$ is nonempty because it contains $T(x,x)=0$, so [F7] gives its finite supremum. Given $\epsilon>0$, first choose $\eta$ with $4\sqrt\eta<\epsilon/2$, then choose $d_0>0$ with $\omega_\eta(d_0)<\epsilon/2$. For every $d\le d_0$, the same bound gives $\tau(d)\le\epsilon$, proving $\tau(d)\to0$. [given, F1, F5, F6, F7, F8, step 1.1, step 1.2, algebra] ∎

