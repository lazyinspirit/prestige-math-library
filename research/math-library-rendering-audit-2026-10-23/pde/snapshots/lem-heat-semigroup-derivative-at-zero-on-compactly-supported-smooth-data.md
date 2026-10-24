---
id: lem-heat-semigroup-derivative-at-zero-on-compactly-supported-smooth-data
kind: lemma
title: "Heat generator at zero on compactly supported smooth data"
status: published
origin: pipeline
deps:
  - def-countable-choice
  - def-heat-evolution-of-initial-data
  - def-test-function-space-d-of-an-open-set
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time
  - thm-heat-cauchy-solution-for-lp-data
  - thm-heat-cauchy-solution-for-bounded-continuous-data
  - thm-integration-by-parts-with-interior-derivatives
  - thm-minkowski-integral-inequality
  - thm-newton-leibniz-with-interior-derivative
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for lem-heat-semigroup-derivative-at-zero-on-compactly-supported-smooth-data and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-3; completed reader repair plus item-specific Alpha disposition. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"0530c47ee5af8f80ffce4063aac1700f97dd22a7f30aeffc0101a9ac78f1f8ad","evidence":["research/frontier-38-owner-30-reader-3.md","research/frontier-38-owner-30-reader-findings-3.json","research/frontier-38-owner-30-dispatch/reader-reader-3.result.json","research/frontier-38-owner-30-step5-hash-3-post-5a.json","research/frontier-38-owner-30-alpha-batch-3-5a-decisions.json","research/frontier-38-owner-30-dispatch/alpha-5a-batch-3.result.json"],"historical_binding":{"commit":"d90f26208","file":"items/lem-heat-semigroup-derivative-at-zero-on-compactly-supported-smooth-data.md","historical_raw_sha256":"d2d145397f0b7e2f2d9bfbe0f5a47135e897dcf418f2951e1876adb09396f5b4","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:40:30.387Z"}}
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§5.1.1–5.1.2, printed pp. 129–131, (5.6)–(5.9), Theorem 5.5"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "Definition 1.0.1, p. 1, formula (1.0.2), and §1.1, pp. 4–5"
---

## Statement

Assume Countable Choice. For $n\ge1$, $\varphi\in C_c^\infty(\mathbb R^n)$ and
$1\le p<\infty$, $\|(H_t\varphi-\varphi)/t-\Delta\varphi\|_p\to0$ as
$t\downarrow0$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $\varphi\in C_c^\infty(\mathbb R^n)$, $1\le p<\infty$, and $0<\varepsilon<t$.

[A1] Countable Choice is the hypothesis carried by the differentiation, integration and evolution suppliers below ([[def-countable-choice]]).

[F1] $C_c^\infty(\mathbb R^n)$ is the test-function space of [[def-test-function-space-d-of-an-open-set]]; $\varphi$ and every derivative of it is smooth with compact support, so $\Delta\varphi\in C_c^\infty(\mathbb R^n)$ and in particular $\Delta\varphi\in L^p(\mathbb R^n)$. In this item $H_s\psi$ denotes the evolution of the class $\psi$ as in [[def-heat-evolution-of-initial-data]].

[F2] For $s>0$ the function $H_s\varphi$ is $C^\infty$ on $\mathbb R^n$ and every spatial and time derivative passes through the convolution, $D^\alpha\partial_s^kH_s\varphi=(D^\alpha\partial_s^k\Gamma_s)*\varphi$ ([[lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time]]).

[F3] The kernel satisfies $\partial_s\Gamma=\Delta_x\Gamma$ on $\mathbb R^n\times(0,\infty)$ ([[lem-heat-kernel-normalisation-scaling-and-derivatives]]).

[F4] For continuous $F,G$ on $[a,b]$ differentiable on $(a,b)$ with $F'=f$, $G'=g$ Riemann integrable there, $\int_a^bFg+\int_a^bfG=F(b)G(b)-F(a)G(a)$ ([[thm-integration-by-parts-with-interior-derivatives]]).

[F5] If $G$ is continuous on $[a,b]$, differentiable on $(a,b)$ and $f=G'$ is Riemann integrable, then $\int_a^bf=G(b)-G(a)$ ([[thm-newton-leibniz-with-interior-derivative]]).

[F6] For $1\le p<\infty$ and $\psi\in L^p(\mathbb R^n)$, $\|H_s\psi-\psi\|_p\to0$ as $s\downarrow0^+$, and $\|H_s\psi\|_p\le\|\psi\|_p$ ([[thm-heat-cauchy-solution-for-lp-data]]).

[F7] Let $1\le p<\infty$ and let $F(x,s)$ be measurable with $\int_0^t\|F(\cdot,s)\|_{L^p}\,ds<\infty$; then $\bigl\|\int_0^t|F(x,s)|\,ds\bigr\|_{L^p}\le\int_0^t\|F(\cdot,s)\|_{L^p}\,ds$ ([[thm-minkowski-integral-inequality]]).

[F8] Bounded uniformly continuous data are recovered locally uniformly at $t=0$ by their heat convolution ([[thm-heat-cauchy-solution-for-bounded-continuous-data]]). This applies to both $\varphi$ and $\Delta\varphi$, which are smooth with compact support.

## Proof

**Proof technique:** direct.

1.1 Derivative identity: fix $x\in\mathbb R^n$ and $s>0$. By [F2] with $\alpha=0$, $k=1$ and $f=\varphi$ the function $s\mapsto H_s\varphi(x)$ is differentiable with $\partial_sH_s\varphi(x)=\int\partial_s\Gamma(x-y,s)\varphi(y)\,dy$; by [F3] and $\partial_{x_i}\partial_{x_i}\Gamma(x-y,s)=\partial_{y_i}\partial_{y_i}\Gamma(x-y,s)$, applying the scalar integration by parts [F4] twice in each coordinate (the boundary terms vanish because $\varphi$ has compact support, and this works for every $n\ge1$ including $n=1$) turns the last integral into $\int\Gamma(x-y,s)\Delta\varphi(y)\,dy=H_s\Delta\varphi(x)$; hence $\partial_sH_s\varphi(x)=H_s\Delta\varphi(x)$ for every $x$ and $s>0$. [A1, F1, F2, F3, F4, given]

2.1 Newton–Leibniz: by step 1.1 the map $s\mapsto H_s\varphi(x)$ is continuous on $[\varepsilon,t]$ with derivative $H_s\Delta\varphi(x)$ on $(\varepsilon,t)$, for its real and imaginary parts separately; the fundamental theorem [F5] applied on $[\varepsilon,t]$ gives $H_t\varphi(x)-H_\varepsilon\varphi(x)=\int_\varepsilon^tH_s\Delta\varphi(x)\,ds$ for every $x$. [step 1.1, F5, given]

3.1 Both $H_\varepsilon\varphi(x)\to\varphi(x)$ and $H_s\Delta\varphi(x)\to\Delta\varphi(x)$ hold at every $x$ by [F8]. Thus the integrand in step 2.1 extends continuously to $s=0$, and letting $\varepsilon\downarrow0$ gives $H_t\varphi(x)-\varphi(x)=\int_0^tH_s\Delta\varphi(x)\,ds$. Dividing by $t$ and subtracting $\Delta\varphi(x)$ yields $\frac{H_t\varphi(x)-\varphi(x)}{t}-\Delta\varphi(x)=\frac1t\int_0^t(H_s\Delta\varphi(x)-\Delta\varphi(x))\,ds$. The integrand is jointly continuous for $s>0$ by [F2] applied to $\Delta\varphi$, hence measurable as required for [F7]. [step 2.1, F1, F2, F7, F8, given]

4.1 $L^p$ bound and limit: applying the Minkowski integral inequality [F7] to $F(x,s):=H_s\Delta\varphi(x)-\Delta\varphi(x)$ on $\mathbb R^n\times(0,t)$ — whose hypothesis holds because $\|F(\cdot,s)\|_p\le2\|\Delta\varphi\|_p$ by the contraction clause of [F6] — gives $\bigl\|\frac{H_t\varphi-\varphi}{t}-\Delta\varphi\bigr\|_p\le\frac1t\int_0^t\|H_s\Delta\varphi-\Delta\varphi\|_p\,ds$. Given $\eta>0$, the strong convergence clause of [F6] applied to $\Delta\varphi\in L^p$ supplies $\delta>0$ with $\|H_s\Delta\varphi-\Delta\varphi\|_p<\eta$ for every $0<s<\delta$; for every $0<t<\delta$ the right-hand side is then at most $\eta$. Hence $\|(H_t\varphi-\varphi)/t-\Delta\varphi\|_p\to0$ as $t\downarrow0^+$. [step 3.1, F6, F7, given]

5.1 Steps 1.1, 2.1, 3.1 and 4.1 prove the stated generator limit for compactly supported smooth data in every $L^p$, $1\le p<\infty$. [step 1.1, step 4.1, given] ∎
