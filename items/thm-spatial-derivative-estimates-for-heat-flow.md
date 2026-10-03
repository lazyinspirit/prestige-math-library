---
id: thm-spatial-derivative-estimates-for-heat-flow
kind: theorem
title: "Spatial derivative estimates for the heat flow"
status: draft
origin: pipeline
deps:
  - def-ck-and-multi-index-notation-in-several-variables
  - def-countable-choice
  - def-heat-evolution-of-initial-data
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time
  - thm-lp-to-lq-heat-kernel-estimate
  - thm-young-convolution-inequality
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
      locator: "Theorem 5.5, printed p. 131 (smoothness for $L^p$ data), and §5.1.1, printed pp. 129–130 (derivatives under the integral)"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "proof of Theorem 1.1, printed p. 6 (repeated differentiation under the integral in (1.1.17))"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "printed p. 152 (the convolution representation differentiated)"
---

## Statement

Assume Countable Choice, let $n\ge1$, $1\le p\le q\le\infty$, and let $Q$ and
the constants be as in [[thm-lp-to-lq-heat-kernel-estimate]]. For every
multi-index $\alpha$, every $f\in L^p(\mathbb R^n)$ and every $t>0$, the
function $x\mapsto\int_{\mathbb R^n}\Gamma(x-y,t)f(y)\,dy$ is $C^\infty$ on
$\mathbb R^n$, with $D^\alpha H_tf=(D^\alpha\Gamma(\cdot,t))*f$ as an
absolutely convergent integral, and
$$\|D^\alpha H_tf\|_q\le C_{n,p,q,\alpha}\,t^{-\frac{|\alpha|}{2}-\frac n2(\frac1p-\frac1q)}\|f\|_p,\qquad C_{n,p,q,\alpha}:=\|D^\alpha\Gamma(\cdot,1)\|_Q<\infty.$$

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $1\le p\le q\le\infty$ with exponent $Q$ determined by $1/Q=1+1/q-1/p$, a multi-index $\alpha$, $f\in L^p(\mathbb R^n)$ and $t>0$.

[A1] Countable Choice is the hypothesis carried by the convolution and integration suppliers below ([[def-countable-choice]]).

[F1] For every $s>0$: $\Gamma(\cdot,s)$ is smooth, unit mass holds, $\Gamma(\lambda x,\lambda^2s)=\lambda^{-n}\Gamma(x,s)$ for every $\lambda>0$, and $D^\beta\Gamma(x,s)=s^{-(n+|\beta|)/2}(D^\beta\Gamma)(x/\sqrt s,1)$ for every multi-index $\beta$; moreover $|D^\beta\Gamma(x,1)|\le C_{n,\beta}e^{-|x|^2/8}$ ([[lem-heat-kernel-normalisation-scaling-and-derivatives]]).

[F2] $H_tf$ has the everywhere-defined absolutely convergent representative $u(x,t)=\int_{\mathbb R^n}\Gamma(x-y,t)f(y)\,dy$, which is $C^\infty$ in $x$, and $D^\alpha H_tf=(D^\alpha\Gamma(\cdot,t))*f$ for every multi-index $\alpha$ ([[lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time]]).

[F3] For $1\le p,q,r\le\infty$ with $1/r=1/p+1/q-1$ and $f\in L^p$, $g\in L^q$, $\|f*g\|_r\le\|f\|_p\|g\|_q$ ([[thm-young-convolution-inequality]]).

[F4] With $Q$ as in the statement, $1/Q=1+1/q-1/p$ and the kernel estimate $\|H_tf\|_q\le C_{n,p,q}t^{-\frac n2(\frac1p-\frac1q)}\|f\|_p$ holds ([[thm-lp-to-lq-heat-kernel-estimate]]); the exponent range $1\le p\le q\le\infty$ makes $Q\in[1,\infty]$.



## Proof

**Proof technique:** direct.

1.1 Smoothness and derivative identity: by [F2] the representative $u$ is $C^\infty$ in $x$ for $t>0$ and $D^\alpha H_tf$ is the class of $(D^\alpha\Gamma(\cdot,t))*f$, an absolutely convergent integral by the derivative bounds of [F1] together with Hölder and $f\in L^p$. [A1, F1, F2, given]

2.1 Scaling of the derivative kernel norms: by the derivative scaling identity of [F1], $D^\alpha\Gamma(x,t)=t^{-(n+|\alpha|)/2}(D^\alpha\Gamma)(x/\sqrt t,1)$; for $Q<\infty$, substituting $x=\sqrt t\,z$ gives $\|D^\alpha\Gamma(\cdot,t)\|_Q^Q=t^{-(n+|\alpha|)Q/2}t^{n/2}\|D^\alpha\Gamma(\cdot,1)\|_Q^Q$, hence $\|D^\alpha\Gamma(\cdot,t)\|_Q=t^{-|\alpha|/2}t^{-\frac n2(1-\frac1Q)}\|D^\alpha\Gamma(\cdot,1)\|_Q$. For $Q=\infty$, taking essential suprema in the same scaling identity gives $\|D^\alpha\Gamma(\cdot,t)\|_\infty=t^{-(n+|\alpha|)/2}\|D^\alpha\Gamma(\cdot,1)\|_\infty$, the same formula with $1/Q=0$. The constant $C_{n,p,q,\alpha}=\|D^\alpha\Gamma(\cdot,1)\|_Q$ is finite because $|D^\alpha\Gamma(x,1)|\le C_{n,\alpha}e^{-|x|^2/8}$ by [F1] and the Gaussian $e^{-|\cdot|^2/8}$ lies in every $L^Q$, $1\le Q\le\infty$. [step 1.1, F1, given, algebra]

3.1 Young estimate for the derivative: applying Young's convolution inequality [F3] with the exponent triple $(p,Q,q)$, admissible because $1/Q=1+1/q-1/p$, gives $\|D^\alpha H_tf\|_q\le\|D^\alpha\Gamma(\cdot,t)\|_Q\|f\|_p$, and step 2.1 together with the identity $1-\frac1Q=\frac1p-\frac1q$ from [F4] turns this into $\|D^\alpha H_tf\|_q\le C_{n,p,q,\alpha}t^{-\frac{|\alpha|}{2}-\frac n2(\frac1p-\frac1q)}\|f\|_p$, which is the stated estimate. [step 1.1, step 2.1, F3, F4, given, algebra]

4.1 Steps 1.1, 2.1 and 3.1 prove the smoothness of the representative, the absolutely convergent convolution formula for $D^\alpha H_tf$ and the displayed derivative estimate with finite constant $C_{n,p,q,\alpha}=\|D^\alpha\Gamma(\cdot,1)\|_Q$. [step 1.1, step 3.1, given] ∎
