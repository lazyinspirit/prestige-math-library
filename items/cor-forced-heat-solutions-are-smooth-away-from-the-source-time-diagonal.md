---
id: cor-forced-heat-solutions-are-smooth-away-from-the-source-time-diagonal
kind: corollary
title: Spatial smoothing of forcing separated from the observation time
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps:
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-bochner-integrability-criterion
  - thm-young-convolution-inequality
  - lem-heat-kernel-semigroup-identity
  - thm-bounded-linear-maps-commute-with-bochner-integration
  - def-countable-choice
  - def-duhamel-heat-potential
  - thm-duhamel-lone-in-time-lp-forcing-estimate
  - thm-spatial-derivative-estimates-for-heat-flow
  - lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time
  - thm-differentiation-under-the-integral-sign
  - thm-holder-inequality-for-integrals
  - lem-bochner-integral-norm-inequality
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Sung-Jin Oh, Lecture Notes for Math 222A (19 March 2024)"
      url: "https://math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf"
      locator: "§5.3, printed pp. 83–84, forward solution formula and regularity (Proposition 5.5)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§6.2, printed pp. 152–153, (6.44), (6.47)"
---

## Statement

Assume Countable Choice. Let $1\le p\le q\le\infty$,
$f\in L^1([0,T];L^p(\mathbb R^n))$ in the Bochner sense,
$0<\varepsilon\le t\le T$, and suppose $f(s)=0$ for almost every
$s>t-\varepsilon$. Then the Duhamel contribution at $t$ has a spatial
$C^\infty$ representative, and for every multi-index $\alpha$,
$$D^\alpha Df(t)=\int_0^{t-\varepsilon}D^\alpha H_{t-s}f(s)\,ds\qquad\text{with}\qquad\|D^\alpha Df(t)\|_q\le C_{\alpha,n,p,q}\,\varepsilon^{-\frac{|\alpha|}{2}-\frac n2(\frac1p-\frac1q)}\int_0^{t-\varepsilon}\|f(s)\|_p\,ds .$$
This asserts spatial regularity at the chosen time, not differentiability across
an active forcing time diagonal.

## Facts & Assumptions

**Given:** Countable Choice, $1\le p\le q\le\infty$, a Bochner integrable $f:[0,T]\to L^p(\mathbb R^n)$ vanishing a.e. after $t-\varepsilon$, and times $0<\varepsilon\le t\le T$.

[A1] Countable Choice is the ambient hypothesis ([[def-countable-choice]]).

[F1] The heat potential exists for Bochner $L^1$ forcing, including $p=\infty$, and obeys the contraction estimate ([[thm-duhamel-lone-in-time-lp-forcing-estimate]], [[def-duhamel-heat-potential]]). The real kernels satisfy $\Gamma_a*\Gamma_b=\Gamma_{a+b}$ ([[lem-heat-kernel-semigroup-identity]]); thus $H_aH_b=H_{a+b}$ for all $p$ by Fubini and Young ([[thm-tonelli-and-fubini-for-completed-product-measures]], [[thm-young-convolution-inequality]]).

[F2] Bounded linear maps commute with Bochner integrals ([[thm-bounded-linear-maps-commute-with-bochner-integration]]); strong measurability and integrability of the norm imply Bochner integrability ([[thm-bochner-integrability-criterion]]), with its norm estimate ([[lem-bochner-integral-norm-inequality]]).

[F3] Positive-time heat flow has a smooth representative and $D^\alpha H_ag=(D^\alpha\Gamma_a)*g$, with $\|D^\alpha H_ag\|_q\le C_{n,p,q,\alpha}a^{-|\alpha|/2-n(1/p-1/q)/2}\|g\|_p$ ([[thm-spatial-derivative-estimates-for-heat-flow]], [[lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time]]).

## Proof

**Given:** Countable Choice, $1\le p\le q\le\infty$, $f$ Bochner integrable and vanishing a.e. after $t-\varepsilon$, and $0<\varepsilon\le t\le T$.

1.1 Let $a=\varepsilon/2$ and put $g:=\int_0^{t-\varepsilon}H_{t-s-a}f(s)ds\in L^p$. This integral exists by the forcing estimate [F1], applied at observation time $t-a$ to the forcing cut off after $t-\varepsilon$. Since $f=0$ a.e. on the omitted interval and $H_aH_{t-s-a}=H_{t-s}$, [F2] gives $Df(t)=H_ag$. By [F3], it therefore has a spatial $C^\infty$ representative, without choosing joint scalar representatives of the original forcing. [A1, F1, F2, F3, given]

2.1 The bounded map $D^\alpha H_a:L^p\to L^q$ commutes with the integral defining $g$. Differentiating $H_aH_bh=H_{a+b}h$ in space (both sides have the smooth representatives of [F3]) gives $D^\alpha H_aH_bh=D^\alpha H_{a+b}h$. Consequently $D^\alpha Df(t)=D^\alpha H_ag=\int_0^{t-\varepsilon}D^\alpha H_{t-s}f(s)ds$ in $L^q$. Strong measurability of this integrand follows by applying the bounded map to the strongly measurable integrand defining $g$, and its norm is integrable by the next estimate. [step 1.1, F2, F3, given]

3.1 For $s\le t-\varepsilon$, [F3] gives $\|D^\alpha H_{t-s}f(s)\|_q\le C_{n,p,q,\alpha}\varepsilon^{-|\alpha|/2-n(1/p-1/q)/2}\|f(s)\|_p$. Integrating and applying [F2] proves the stated bound. This includes $p=\infty$ and $q=\infty$, since every map used is bounded between the indicated Banach spaces; if $t=\varepsilon$ the interval is empty and $Df(t)=0$. The argument proves spatial regularity at the chosen time and makes no assertion across an active forcing diagonal. [step 2.1, F2, F3, given] ∎
