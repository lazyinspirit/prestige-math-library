---
id: lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time
kind: lemma
title: "Spatial and time derivatives pass through heat convolution for positive time"
status: draft
origin: pipeline
deps:
  - def-countable-choice
  - def-heat-evolution-of-initial-data
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - thm-clairaut-schwarz-mixed-partials
  - thm-differentiation-under-the-integral-sign
  - thm-dominated-convergence
  - thm-holder-inequality-for-integrals
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
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
      locator: "§5.1.1–5.1.2, printed pp. 129–131, (5.6)–(5.9), Theorem 5.5"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "Definition 1.0.1, p. 1, formula (1.0.2), and Theorem 1.1, p. 5"
---

## Statement

Assume Countable Choice. Let $n\ge1$, $1\le p\le\infty$, and
$f\in L^p(\mathbb R^n)$ (bounded measurable data are included). The absolutely
convergent representative
$u(x,t)=\int_{\mathbb R^n}\Gamma(x-y,t)f(y)\,dy$ is $C^\infty$ for $t>0$, and
for every multi-index $\alpha$ and $k\ge0$
$D_x^\alpha\partial_t^ku=(D_x^\alpha\partial_t^k\Gamma_t)*f$. Moreover
$|D_x^\alpha\partial_t^k\Gamma(x,t)|\le C_{n,\alpha,k}t^{-(n+|\alpha|+2k)/2}e^{-|x|^2/(8t)}$.
Domination is uniform on compact subsets $x\in K$, $\tau\le t\le T$ with
$0<\tau<T<\infty$; $u_t=\Delta u$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $1\le p\le\infty$, $f\in L^p(\mathbb R^n)$, a multi-index $\alpha$, an integer $k\ge0$, and $0<\tau<T$ with $K\subseteq\mathbb R^n$ compact.

[A1] Countable Choice is the hypothesis carried by the differentiation and integration suppliers below ([[def-countable-choice]]).

[F1] For $1\le p\le\infty$ and $f\in L^p(\mathbb R^n)$ the heat evolution $H_tf$ is the $L^p$ class of $x\mapsto\int_{\mathbb R^n}\Gamma(x-y,t)f(y)\,dy$, defined almost everywhere with the contraction bound $\|H_tf\|_p\le\|f\|_p$ ([[def-heat-evolution-of-initial-data]]).

[F2] For every $t>0$ the kernel is $C^\infty$ on $\mathbb R^n\times(0,\infty)$, satisfies $\partial_t\Gamma=\Delta_x\Gamma$, and for every multi-index $\beta$ there is $C_{n,\beta}<\infty$ with $|D^\beta\Gamma(z,t)|\le C_{n,\beta}t^{-(n+|\beta|)/2}e^{-|z|^2/(8t)}$; also $\int_{\mathbb R^n}\Gamma(z,t)\,dz=1$ ([[lem-heat-kernel-normalisation-scaling-and-derivatives]]).

[F3] A $C^2$ function on an open set has equal mixed partials, $\partial_i\partial_j\phi=\partial_j\partial_i\phi$ ([[thm-clairaut-schwarz-mixed-partials]]).

[F4] If $f_k\to f$ almost everywhere and $|f_k|\le g$ almost everywhere with $g$ integrable, then $\int f_k\to\int f$ ([[thm-dominated-convergence]]).

[F5] For conjugate exponents $p,q\in[1,\infty]$ and measurable $F,G$ with $F\in\mathcal L^p$, $G\in\mathcal L^q$, the product is integrable and $\int|FG|\le\|F\|_p\|G\|_q$ ([[thm-holder-inequality-for-integrals]]).

[F6] Let $I$ be an open interval and $F:X\times I\to\mathbb C$ satisfy: for each $t\in I$, $x\mapsto F(x,t)$ is integrable; for almost every $x$, $t\mapsto F(x,t)$ is differentiable; the $t$-derivative is measurable in $x$; and the derivative is dominated by one integrable function of $x$ uniformly in $t$. Then $t\mapsto\int F(x,t)\,dx$ is differentiable on $I$ with derivative $\int\partial_tF(x,t)\,dx$ ([[thm-differentiation-under-the-integral-sign]]).



## Proof

**Proof technique:** direct.

1.1 Work under [A1]; let $u(x,t)=\int_{\mathbb R^n}\Gamma(x-y,t)f(y)\,dy$ be the everywhere-defined representative of the evolution $H_tf$ of [F1]. Kernel derivatives and their $L^{p'}$ bounds: by [F2] the identity $\partial_t\Gamma=\Delta_x\Gamma$ holds on $\mathbb R^n\times(0,\infty)$, and $\Gamma$ is $C^\infty$, so Clairaut–Schwarz [F3] lets the time and space derivatives be interchanged; iterating the heat equation gives $\partial_t^k\Gamma=\Delta_x^k\Gamma$ and therefore $D_x^\alpha\partial_t^k\Gamma=\Delta_x^kD_x^\alpha\Gamma$, a finite sum of terms $D^\beta\Gamma$ with $|\beta|=|\alpha|+2k$, so [F2] yields $|D_x^\alpha\partial_t^k\Gamma(x,t)|\le C_{n,\alpha,k}t^{-(n+|\alpha|+2k)/2}e^{-|x|^2/(8t)}$ for a finite constant. Writing $p'$ for the conjugate exponent and $m:=|\alpha|+2k$, for $1<p\le\infty$ (so $p'<\infty$) the function $z\mapsto e^{-p'|z|^2/(8t)}$ is $e^{-|z|^2/(4t')}= (4\pi t')^{n/2}\Gamma(z,t')$ with $t'=2t/p'$, so its integral is $(4\pi t')^{n/2}=(8\pi t/p')^{n/2}$ by unit mass in [F2], while for $p=1$ the function $z\mapsto e^{-|z|^2/(8t)}$ is bounded by $1$; in every case $D_x^\alpha\partial_t^k\Gamma(\cdot,t)\in L^{p'}$ with norm at most $C_{n,\alpha,k}t^{-(n+m)/2}(8\pi t/p')^{n/(2p')}$ when $p>1$, and at most $C_{n,\alpha,k}t^{-(n+m)/2}$ when $p=1$. [A1, F1, F2, F3, given, algebra]

2.1 Absolute convergence and compact domination: fix $x\in\mathbb R^n$ and $t>0$; by Hölder [F5] and step 1.1, $\int|D_x^\alpha\partial_t^k\Gamma(x-y,t)f(y)|\,dy\le\|D_x^\alpha\partial_t^k\Gamma(\cdot,t)\|_{p'}\|f\|_p<\infty$, so every derivative integral converges absolutely and defines $u_\alpha^k(x,t):=\int D_x^\alpha\partial_t^k\Gamma(x-y,t)f(y)\,dy$. If $K\subseteq B_R$ and $0<\tau\le t\le T$, then $|x-y|^2\ge|y|^2/2-R^2$ gives $|D_x^\alpha\partial_t^k\Gamma(x-y,t)|\le C_{n,\alpha,k}\tau^{-(n+m)/2}e^{R^2/(8\tau)}e^{-|y|^2/(16T)}$ for every $x\in K$ and $t\in[\tau,T]$, an $x$-independent, $t$-independent bound whose product with $|f|$ is integrable by [F5] because the Gaussian $e^{-|y|^2/(16T)}$ is in every $L^q$. [step 1.1, F5, given, algebra]

3.1 Differentiation under the integral sign: for fixed $x$ apply [F6] on any open parameter interval $I=(\tau,T)$ with $0<\tau<T$ to $F(y,t)=\Gamma(x-y,t)f(y)$, whose $t$-derivative is dominated uniformly on $I$ by the integrable function from step 2.1 with $\alpha=0,k=1$; this gives $\partial_tu(x,t)=\int\partial_t\Gamma(x-y,t)f(y)\,dy$, and the same argument with $\partial_{x_i}$ in place of $\partial_t$ gives $\partial_{x_i}u(x,t)=\int\partial_{x_i}\Gamma(x-y,t)f(y)\,dy$. Reapplying [F6] to the resulting integral representations, whose integrands are dominated on each compact set exactly as in step 2.1 for the next multi-index, produces every mixed derivative $D_x^\alpha\partial_t^ku$ as the corresponding convolution integral; the domination of step 2.1 is uniform in $(x,t)$ on $K\times[\tau,T]$, and dominated convergence [F4] makes each such integral a continuous function of $(x,t)$ there, so $u$ is $C^\infty$ on $\mathbb R^n\times(0,\infty)$ and $D_x^\alpha\partial_t^ku=(D_x^\alpha\partial_t^k\Gamma_t)*f$. [step 1.1, step 2.1, F4, F6, given]

4.1 Heat equation: by step 3.1 with $\alpha=0$, $k=1$ and with the spatial derivatives, $\partial_tu=(\partial_t\Gamma_t)*f$ and $\Delta_xu=(\Delta_x\Gamma_t)*f$; the kernel identity $\partial_t\Gamma=\Delta_x\Gamma$ of [F2] makes the two convolution integrands equal, so $\partial_tu=\Delta_xu$ on $\mathbb R^n\times(0,\infty)$. [step 3.1, F2, given, algebra]

5.1 Steps 1.1 and 2.1 give the derivative bounds of the kernel, absolute convergence of the representative and the uniform compact domination; steps 3.1 and 4.1 give the $C^\infty$ property, the derivative identity $D_x^\alpha\partial_t^ku=(D_x^\alpha\partial_t^k\Gamma_t)*f$ and the heat equation $u_t=\Delta u$, which is the whole statement. [step 1.1, step 2.1, step 3.1, step 4.1, given] ∎
