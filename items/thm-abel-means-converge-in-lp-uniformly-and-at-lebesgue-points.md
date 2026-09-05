---
id: thm-abel-means-converge-in-lp-uniformly-and-at-lebesgue-points
kind: theorem
title: "Abel means converge in L^p, uniformly, and at Lebesgue points"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cesaro-and-abel-means-of-a-fourier-series, lem-poisson-kernel-on-the-circle-is-a-positive-approximate-identity, def-lebesgue-point-and-lebesgue-set, thm-almost-every-point-is-a-lebesgue-point, thm-c-c-rn-is-dense-in-l-p-of-rn]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
---

## Statement

Assume the Axiom of Countable Choice.

Let $f:\mathbb R\to\mathbb C$ be one-periodic with $f|_{[0,1]}\in L^1([0,1])$.

1. If $1\le p<\infty$ and $f|_{[0,1]}\in L^p([0,1])$, then
   $$\|A_rf-f\|_{L^p([0,1])}\longrightarrow0 \qquad (r\uparrow1).$$
2. If $f$ is continuous, then
   $$\sup_{x\in\mathbb R}|A_rf(x)-f(x)|\longrightarrow0 \qquad (r\uparrow1).$$
3. If $x$ is a Lebesgue point of $f$, then
   $$A_rf(x)\longrightarrow f(x) \qquad (r\uparrow1).$$

In particular, $A_rf(x)\to f(x)$ for almost every $x$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a one-periodic function $f$ with $f|_{[0,1]}\in L^1([0,1])$.

[L1] The Abel means satisfy $A_rf=f*P_r$, so
$$A_rf(x)=\int_0^1 f(x-t)P_r(t)\,dt$$
for every $x$ and every $0\le r<1$ ([[def-cesaro-and-abel-means-of-a-fourier-series]]).

[L2] The Poisson kernels are nonnegative, have integral $1$, and their mass on $[\delta,1-\delta]$ tends to $0$ as $r\uparrow1$ ([[lem-poisson-kernel-on-the-circle-is-a-positive-approximate-identity]]).

[L3] At a Lebesgue point,
$$\lim_{h\to0^+}\frac1{2h}\int_{-h}^h |f(x-t)-f(x)|\,dt=0$$
([[def-lebesgue-point-and-lebesgue-set]]).

[L4] Assuming the Axiom of Countable Choice, almost every point is a Lebesgue point ([[thm-almost-every-point-is-a-lebesgue-point]]).

[L5] Assuming the Axiom of Countable Choice, $C_c(\mathbb R)$ is dense in $L^p(\mathbb R)$ for $1\le p<\infty$ ([[thm-c-c-rn-is-dense-in-l-p-of-rn]]).

## Proof

**Proof technique:** direct.

1.1 Let $g$ be one-periodic and in $L^p([0,1])$ for some $1\le p<\infty$. Using [L1] and the positivity and unit mass in [L2], Jensen's inequality gives $$|A_rg(x)|^p\le \int_0^1 |g(x-t)|^pP_r(t)\,dt.$$ Integrating in $x$ over $[0,1]$ shows $$\|A_rg\|_{L^p([0,1])}\le \|g\|_{L^p([0,1])},$$ and hence $$\|A_rg-A_rh\|_{L^p([0,1])}\le \|g-h\|_{L^p([0,1])}.$$ [L1, L2, algebra]

1.2 Assume now that $f$ is continuous, and let $\varepsilon>0$. Uniform continuity modulo $1$ gives $\delta\in(0,1/2]$ such that $$|f(x-t)-f(x)|<\varepsilon/2$$ whenever $t\in[0,\delta]\cup[1-\delta,1]$. Using [L1] and [L2] exactly as in the Fejer proof yields $$|A_rf(x)-f(x)|\le \varepsilon/2 + 2\|f\|_\infty\int_\delta^{1-\delta}P_r(t)\,dt.$$ By [L2], the far term is $<\varepsilon/2$ for all $r$ close enough to $1$, uniformly in $x$. Therefore $A_rf\to f$ uniformly. [L1, L2, given, choose, algebra]

1.3 Assume $x$ is a Lebesgue point of $f$, and let $\varepsilon>0$. By [L3], choose $\delta\in(0,1/2]$ so that $$\int_{-h}^h|f(x-t)-f(x)|\,dt<\frac{\varepsilon}{4}h \qquad (0<h\le\delta).$$ Define $$G(h):=\int_0^h\bigl(|f(x+t)-f(x)|+|f(x-t)-f(x)|\bigr)\,dt,$$ so $G(h)<\varepsilon h/4$ for $0<h\le\delta$. Pairing $[0,1/2]$ and $[1/2,1]$ in [L1] gives $$|A_rf(x)-f(x)|\le\int_0^{1/2}\bigl(|f(x+t)-f(x)|+|f(x-t)-f(x)|\bigr)P_r(t)\,dt.$$ Set $a_r:=\min(\delta,1-r)$. On $(0,a_r)$, the closed form in [L2] gives $P_r(t)\le 2/(1-r)$, so this interval contributes at most $\varepsilon/2$. If $a_r<\delta$ and $r\ge1/2$, then $\sin(\pi t)\ge2t$ on $[a_r,\delta]$, so [L2] gives $$P_r(t)\le \frac{1-r^2}{16rt^2}\le \frac{1-r}{4t^2}.$$ The same integration-by-parts estimate as in the Fejer proof shows that $[a_r,\delta]$ contributes at most $3\varepsilon/16$. Finally, $[\delta,1/2]$ contributes $o(1)$ as $r\uparrow1$ by [L2]. Hence $A_rf(x)\to f(x)$. [L1, L2, L3, choose, construct, algebra]

2.1 Let $1\le p<\infty$ and assume $f|_{[0,1]}\in L^p([0,1])$. Let $\varepsilon>0$. Repeating the construction from the Fejer $L^p$ theorem with [L5], one obtains a continuous one-periodic function $u$ such that $$\|f-u\|_{L^p([0,1])}<\varepsilon/3.$$ Then step 1.1 and the uniform convergence of step 1.2 give $$\|A_rf-f\|_{L^p([0,1])}\le \|A_r(f-u)\|_{L^p([0,1])}+\|A_ru-u\|_{L^p([0,1])}+\|u-f\|_{L^p([0,1])}<\varepsilon$$ for all $r$ sufficiently close to $1$. Hence $A_rf\to f$ in $L^p([0,1])$. [L5, step 1.1, step 1.2, choose, algebra]

3.1 Step 1.3 proves the pointwise conclusion at every Lebesgue point, and [L4] therefore gives the almost-everywhere convergence. [L4, step 1.3] ∎
