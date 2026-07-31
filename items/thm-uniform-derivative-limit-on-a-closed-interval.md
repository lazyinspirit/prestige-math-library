---
id: thm-uniform-derivative-limit-on-a-closed-interval
kind: theorem
title: "If continuously differentiable functions converge at one point and their derivatives converge uniformly on a closed interval, then the functions converge uniformly to a differentiable function whose derivative is the derivative limit"
status: published
origin: session
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, def-real-limit, def-continuity-real, lem-real-and-metric-notions-agree, thm-uniform-limit-continuous-real-functions, thm-uniform-limit-interchanges-riemann-integration, thm-ftc-first-part, thm-ftc-second-part, def-derivative, def-function-limit, def-limit-point-r, def-interval, lem-uniform-integral-error-bound, thm-continuous-implies-integrable, lem-integrability-on-a-subinterval, def-oriented-integral, thm-additivity-over-subintervals, def-the-integral-function, thm-algebra-of-derivatives]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B, Real Analysis, Lectures 20–21"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
pipeline_run: null
---

## Statement

Let $a<b$ be reals and let $f_k:[a,b]\to\mathbb{R}$ be continuously
differentiable: each $f_k$ is differentiable on $[a,b]$ and each derivative
$f_k'$ is continuous there ([[def-continuity-real]]). Suppose there is
$c\in[a,b]$ such that the real
sequence $(f_k(c))$ converges to $A$, and suppose $f_k'\to g$ uniformly on
$[a,b]$. Then there is a differentiable function $f:[a,b]\to\mathbb{R}$ such
that

$$f_k\longrightarrow f\ \text{ uniformly},\qquad f'=g.$$

## Facts & Assumptions

**Given:** Reals $a<b$, a point $c\in[a,b]$, continuously differentiable functions $f_k:[a,b]\to\mathbb{R}$, convergence $f_k(c)\to A$, and uniform convergence $f_k'\to g$.

[L1] A uniform limit of continuous real-valued functions is continuous, and a continuous function on $[a,b]$ is Riemann integrable ([[thm-uniform-limit-continuous-real-functions]], [[thm-continuous-implies-integrable]]).

[L2] Uniform convergence of integrable functions preserves integrability and the limit of the integrals ([[thm-uniform-limit-interchanges-riemann-integration]]).

[L3] If $s<t$, $G$ is differentiable on $[s,t]$, and $G'$ is integrable there, then $\int_s^tG'=G(t)-G(s)$ ([[thm-ftc-second-part]]). Restriction to a closed subinterval preserves differentiability and the derivative at its limit points, and integrability on $[a,b]$ passes to every nondegenerate closed subinterval ([[def-derivative]], [[def-function-limit]], [[def-limit-point-r]], [[def-interval]], [[lem-integrability-on-a-subinterval]]). Finally $\int_t^s h=-\int_s^t h$ and $\int_s^s h=0$ whenever the displayed integrals are defined ([[def-oriented-integral]]).

[L4] If $g$ is continuous, its integral function $H(x)=\int_a^xg$ is differentiable with $H'=g$; oriented additivity gives $\int_c^xg=H(x)-H(c)$ ([[thm-ftc-first-part]], [[def-the-integral-function]], [[thm-additivity-over-subintervals]]).

[L5] Sums and scalar multiples of differentiable functions are differentiable, with the corresponding derivative rules ([[thm-algebra-of-derivatives]], [[def-derivative]]).

[L6] A uniform bound $|p-q|\le\eta$ on an interval gives $\left|\int_u^v p-\int_u^v q\right|\le\eta|v-u|$ ([[lem-uniform-integral-error-bound]]).

[L7] On a subset of $\mathbb R$ with its usual subspace metric, real-native continuity is equivalent to metric-space continuity ([[lem-real-and-metric-notions-agree]]).

## Proof

**Proof technique:** constructive.

1.1 By [L7], each real-continuous derivative $f_k'$ is metric-continuous. The uniform-limit clause of [L1] makes $g$ metric-continuous, and [L7] makes $g$ real-continuous. The integrability clause of [L1] therefore makes every $f_k'$ and $g$ Riemann integrable; [L2] also gives the integrability of the uniform limit. [L1, L2, L7]

1.2 Let $\varepsilon>0$. Choose $N_0$ such that $|f_k(c)-A|<\varepsilon/2$ for $k\ge N_0$, and choose $N_1$ such that $|f_k'(x)-g(x)|<\varepsilon/\bigl(2(b-a+1)\bigr)$ for $k\ge N_1$ and all $x\in[a,b]$. [given, choose]

2.1 Fix $k$ and $x\in[a,b]$. If $c<x$, restrict $f_k$ to $[c,x]$; its derivative is $f_k'$ there and that derivative is integrable there by steps 1.1 and [L3], so the first clause of [L3] gives $f_k(x)=f_k(c)+\int_c^x f_k'$. If $x<c$, apply that clause on $[x,c]$ and then use orientation; if $x=c$, use $\int_c^c f_k'=0$. Thus in every case $f_k(x)=f_k(c)+\int_c^x f_k'$. [step 1.1, L3]

2.2 Define $H(x):=\int_a^xg$ and construct $f:[a,b]\to\mathbb{R}$ by $f(x):=A+H(x)-H(c)=A+\int_c^xg$. [step 1.1, L4, construct]

3.1 By [L4] and [L5], $H$ is differentiable with $H'=g$, and therefore the constructed function $f=A+H-H(c)$ is differentiable with $f'=g$. [step 2.2, L4, L5]

3.2 Choose $N$ at least as large as $N_0,N_1$. For $k\ge N$ and $x\in[a,b]$, steps 2.2 and 2.1 with [L6] give $|f_k(x)-f(x)|\le |f_k(c)-A|+\left|\int_c^x f_k'-\int_c^xg\right|<\varepsilon/2+\varepsilon|x-c|/\bigl(2(b-a+1)\bigr)<\varepsilon$. [step 2.2, step 2.1, step 1.2, L6, choose, algebra]

4.1 The index $N$ in step 3.2 serves every $x\in[a,b]$, so $f_k\to f$ uniformly; step 3.1 gives $f'=g$. Thus the constructed $f$ has both asserted properties. [step 3.2, step 3.1, discharge-construct] ∎
