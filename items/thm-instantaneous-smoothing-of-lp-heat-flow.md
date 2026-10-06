---
id: thm-instantaneous-smoothing-of-lp-heat-flow
kind: theorem
title: Instantaneous smoothing of the Lp heat flow
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
  - def-countable-choice
  - lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time
  - thm-lp-to-lq-heat-kernel-estimate
  - thm-spatial-derivative-estimates-for-heat-flow
  - def-heat-evolution-of-initial-data
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - def-ck-and-multi-index-notation-in-several-variables
  - thm-young-convolution-inequality
  - thm-clairaut-schwarz-mixed-partials
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
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: 'Chapter 5, §5.1.2, printed p. 131 (smoothing of $L^p$ data for $t>0$)'
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§6.3, printed p. 160, Theorem 6.20 (smoothness of solutions)"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "§1.1, printed pp. 5–7, the derivative estimates in the proof of Theorem 1.1"
---

## Statement

Assume Countable Choice, let $n\ge1$, $1\le p\le q\le\infty$ and let $Q$ be the
Young exponent of [[thm-lp-to-lq-heat-kernel-estimate]]. For every
$f\in L^p(\mathbb R^n)$ the integral representative
$$u(x,t):=\int_{\mathbb R^n}\Gamma(x-y,t)f(y)\,dy$$
is $C^\infty$ on $\mathbb R^n\times(0,\infty)$ and satisfies $u_t=\Delta u$
there; moreover for every multi-index $\alpha$ and every integer $m\ge0$,
$$D_x^\alpha\partial_t^mu=(\Delta_x^mD_x^\alpha\Gamma_t)*f,\qquad \|D_x^\alpha\partial_t^mu(\cdot,t)\|_q\le C_{n,\alpha,m,Q}\,t^{-\frac{2m+|\alpha|}{2}-\frac n2(\frac1p-\frac1q)}\|f\|_p$$
for every $t>0$, with $C_{n,\alpha,m,Q}$ the constant produced by the derivative
bounds of
[[lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time]]
and [[thm-lp-to-lq-heat-kernel-estimate]]. No strong continuity of $H_tf$ at
$t=0$ is asserted for $q=\infty$ or $p=\infty$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $1\le p\le q\le\infty$, the Young
exponent $Q$ with $\frac1Q=1+\frac1q-\frac1p$, $f\in L^p(\mathbb R^n)$, a
multi-index $\alpha$, an integer $m\ge0$, and $t>0$.

[A1] Countable Choice is the ambient hypothesis ([[def-countable-choice]]).

[F1] The absolutely convergent representative
$u(x,t)=\int\Gamma(x-y,t)f(y)\,dy$ is $C^\infty$ for $t>0$, and
$D_x^\alpha\partial_t^ku=(D_x^\alpha\partial_t^k\Gamma_t)*f$, with the Gaussian
bound $|D_x^\alpha\partial_t^k\Gamma(x,t)|\le C_{n,\alpha,k}t^{-(n+|\alpha|+2k)/2}e^{-|x|^2/(8t)}$
([[lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time]]).

[F2] For the Young exponent $Q$ and every $t>0$,
$\|H_tf\|_q\le C_{n,p,q}t^{-\frac n2(\frac1p-\frac1q)}\|f\|_p$, and for every
multi-index $\alpha$, $\|D^\alpha H_tf\|_q\le C_{n,p,q,\alpha}t^{-\frac{|\alpha|}{2}-\frac n2(\frac1p-\frac1q)}\|f\|_p$
([[thm-lp-to-lq-heat-kernel-estimate]],
[[thm-spatial-derivative-estimates-for-heat-flow]]).

[F3] $\Gamma$ is $C^\infty$ on $\mathbb R^n\times(0,\infty)$, solves
$\partial_t\Gamma=\Delta_x\Gamma$ there, and satisfies the parabolic scaling
$\Gamma(\lambda x,\lambda^2t)=\lambda^{-n}\Gamma(x,t)$ for $\lambda>0$
([[lem-heat-kernel-normalisation-scaling-and-derivatives]]).

[F4] Mixed partial derivatives of a sufficiently smooth function commute
([[thm-clairaut-schwarz-mixed-partials]]), and Young's convolution inequality
$\|K*f\|_q\le\|K\|_Q\|f\|_p$ holds when $\frac1Q=1+\frac1q-\frac1p$
([[thm-young-convolution-inequality]]).

[F5] The representative is the one defining $H_tf$, and $u$ is written in the
multi-index notation of [[def-ck-and-multi-index-notation-in-several-variables]]
([[def-heat-evolution-of-initial-data]]).

## Proof

**Given:** Countable Choice, $n\ge1$, $1\le p\le q\le\infty$, the Young exponent $Q$, $f\in L^p(\mathbb R^n)$, a multi-index $\alpha$, an integer $m\ge0$, and $t>0$.

1.1 By [F1] the representative $u$ is $C^\infty$ on $\mathbb R^n\times(0,\infty)$ and $D_x^\alpha\partial_t^mu=(D_x^\alpha\partial_t^m\Gamma_t)*f$ for every $t>0$, the integral being absolutely convergent. [A1, F1, F5, given]

2.1 Since $\partial_t\Gamma=\Delta_x\Gamma$ on $\mathbb R^n\times(0,\infty)$ by [F3] and all partial derivatives of the $C^\infty$ function $\Gamma$ commute by [F4], induction on $m$ gives $\partial_t^m\Gamma_t=\Delta_x^m\Gamma_t$; substituting into step 1.1 gives $D_x^\alpha\partial_t^mu=(\Delta_x^mD_x^\alpha\Gamma_t)*f$, and taking $\alpha=0$, $m=1$ gives $u_t=\Delta u$. [step 1.1, F3, F4, given]

3.1 For every $t>0$ the scaling identity of [F3], differentiated $|\alpha|$ times in space and $2m$ times in space (equivalently $m$ times in time through the equation), gives $\Delta_x^mD_x^\alpha\Gamma(y,t)=t^{-\frac n2-m-\frac{|\alpha|}2}\bigl(\Delta_x^mD_x^\alpha\Gamma\bigr)(t^{-1/2}y,1)$; substituting $y=t^{1/2}z$ in the $L^Q$ integral and using $\frac1Q=1+\frac1q-\frac1p$ yields $\|\Delta_x^mD_x^\alpha\Gamma(\cdot,t)\|_Q=t^{-\frac{2m+|\alpha|}2-\frac n2(\frac1p-\frac1q)}C_{n,\alpha,m,Q}$ with $C_{n,\alpha,m,Q}:=\|\Delta_x^mD_x^\alpha\Gamma(\cdot,1)\|_Q$, which is finite because the bound of [F1] at $t=1$ majorises the integrand by a multiple of $e^{-|y|^2/8}$. [step 2.1, F1, F3, given]

4.1 Applying Young's inequality [F4] with the kernel $K=\Delta_x^mD_x^\alpha\Gamma_t$ and the exponent relation $\frac1Q=1+\frac1q-\frac1p$, and inserting the norm identity of step 3.1, gives $\|D_x^\alpha\partial_t^mu(\cdot,t)\|_q=\|(\Delta_x^mD_x^\alpha\Gamma_t)*f\|_q\le\|\Delta_x^mD_x^\alpha\Gamma_t\|_Q\|f\|_p\le C_{n,\alpha,m,Q}t^{-\frac{2m+|\alpha|}2-\frac n2(\frac1p-\frac1q)}\|f\|_p$. [step 2.1, step 3.1, F4, given]

5.1 Steps 1.1 and 2.1 give the $C^\infty$ smoothness, the equation $u_t=\Delta u$ and the representation $D_x^\alpha\partial_t^mu=(\Delta_x^mD_x^\alpha\Gamma_t)*f$, while step 4.1 gives the displayed $L^q$ bound with constant $C_{n,\alpha,m,Q}$ built from the derivative bounds of [F1] and [F2]; nothing in the argument uses or asserts continuity of $H_tf$ at $t=0$, so the caveat for $q=\infty$ or $p=\infty$ is preserved. [step 4.1, F2, given] ∎ 