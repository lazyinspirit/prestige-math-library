---
id: thm-heat-cauchy-solution-for-bounded-continuous-data
kind: theorem
title: "The heat Cauchy problem for bounded uniformly continuous data"
status: published
origin: pipeline
deps:
  - cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions
  - def-ck-and-multi-index-notation-in-several-variables
  - def-countable-choice
  - def-heat-evolution-of-initial-data
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Theorem 5.5, printed pp. 130–131 (smoothness and $L^p$ convergence, with $p<\\infty$ for convergence)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Theorem 6.9, printed p. 152 (bounded data: $C^\\infty((0,\\infty)\\times\\mathbb R^n)\\cap C([0,\\infty)\\times\\mathbb R^n)$)"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "Theorem 1.1, pp. 5–7 (representation, smoothness, initial recovery, growth class)"
---

## Statement

Assume Countable Choice and let $n\ge1$, and let
$u_0:\mathbb R^n\to\mathbb C$ be bounded and uniformly continuous. Define
$u(x,t):=\int_{\mathbb R^n}\Gamma(x-y,t)u_0(y)\,dy$ for $t>0$ and
$u(x,0):=u_0(x)$. Then $u$ is $C^\infty$ on
$\mathbb R^n\times(0,\infty)$, satisfies $\partial_tu=\Delta_xu$ there, is
bounded with $\|u(\cdot,t)\|_\infty\le\|u_0\|_\infty$, and converges locally
uniformly at the initial time:
$\sup_{x\in K}|u(x,t)-u_0(x)|\to0$ as $t\downarrow0^+$ for every compact
$K\subseteq\mathbb R^n$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, a bounded uniformly continuous $u_0:\mathbb R^n\to\mathbb C$, a multi-index $\alpha$, an integer $k\ge0$, and $0<\tau<T$ with $K\subseteq\mathbb R^n$ compact.

[A1] Countable Choice is the hypothesis carried by the differentiation and integration suppliers below ([[def-countable-choice]]).

[F1] For $p=\infty$ the heat evolution $H_t$ of [[def-heat-evolution-of-initial-data]] is defined on bounded measurable data $g$ by the everywhere absolutely convergent integral $(H_tg)(x)=\int_{\mathbb R^n}\Gamma(x-y,t)g(y)\,dy$, with $\|H_tg\|_\infty\le\|g\|_\infty$, and $H_0g=g$.

[F2] For every $t>0$ the kernel is $C^\infty$ with $\partial_t\Gamma=\Delta_x\Gamma$, for every multi-index $\beta$ there is $C_{n,\beta}<\infty$ with $|D^\beta\Gamma(z,t)|\le C_{n,\beta}t^{-(n+|\beta|)/2}e^{-|z|^2/(8t)}$, the unit-mass identity $\int\Gamma(z,t)\,dz=1$ holds, and for every $\delta>0$ $\int_{|z|>\delta}\Gamma(z,t)\,dz\to0$ as $t\downarrow0^+$ ([[lem-heat-kernel-normalisation-scaling-and-derivatives]]).

[F3] For $f\in L^p$, $1\le p\le\infty$, the absolutely convergent heat convolution is $C^\infty$ in space and time for $t>0$, every derivative passes through the integral, and $u_t=\Delta_xu$ ([[lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time]]).

[F4] If $(K_\varepsilon)$ is an $L^1$ approximate identity and $g$ is bounded and continuous, then $(g*K_\varepsilon)(x)\to g(x)$ uniformly on compact sets ([[cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions]]).

## Proof

**Proof technique:** direct.

1.1 Work under [A1] and put $M:=\|u_0\|_\infty<\infty$. For every $x$ and $t>0$ the integral defining $u(x,t)$ is absolutely convergent with $|u(x,t)|\le M\int\Gamma(x-y,t)\,dy=M$ by unit mass [F2], so $u$ is a bounded function with $\|u(\cdot,t)\|_\infty\le M=\|u_0\|_\infty$ and $u(\cdot,0)=u_0$ by the definition of $H_0$ in [F1]. [A1, F1, F2, given]

2.1 Since $u_0$ is bounded and measurable, it represents an $L^\infty$ class. Applying [F3] with $p=\infty$ gives the $C^\infty$ representative $u$ on $\mathbb R^n\times(0,\infty)$ and the heat equation $\partial_tu=\Delta_xu$. [step 1.1, F3, given]

3.1 Initial convergence: by the evenness of $\Gamma(\cdot,t)$ in its first argument, $u(x,t)=\int_{\mathbb R^n}\Gamma(x-y,t)u_0(y)\,dy=\int_{\mathbb R^n}\Gamma(y-x,t)u_0(y)\,dy=(u_0*\Gamma_t)(x)$ for every $t>0$; the datum $u_0$ is bounded and continuous and the family $(\Gamma_t)_{t>0}$ is an $L^1$ approximate identity by [F2], so the published approximate-identity corollary [F4] gives $\sup_{x\in K}|u(x,t)-u_0(x)|\to0$ as $t\downarrow0^+$ for every compact $K\subseteq\mathbb R^n$, which is the asserted local uniform convergence. [step 2.1, F2, F4, given]

4.1 Steps 1.1, 2.1 and 3.1 prove boundedness with the stated sup-norm bound, $C^\infty$ smoothness and the heat equation at positive time, and locally uniform recovery of the initial datum, which is the whole statement. [step 1.1, step 2.1, step 3.1, given] ∎
