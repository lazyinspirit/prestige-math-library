---
id: ex-cm-averaging-oscillatory-deviation-check
kind: example
title: "Averaging estimate on $[0,100]$ for the scalar equation $x'=\\varepsilon\\cos t$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [thm-cm-averaging-for-fast-periodic-oscillations, def-cm-averaging-data-and-averaged-field, cor-primitives-of-a-continuous-function, thm-sine-and-cosine-derivatives, def-pi-via-first-positive-cosine-zero, thm-cosine-has-a-smallest-positive-zero]
dependency_roles:
  thm-cm-averaging-for-fast-periodic-oscillations: mathematical-premise
  def-cm-averaging-data-and-averaged-field: mathematical-premise
  cor-primitives-of-a-continuous-function: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-pi-via-first-positive-cosine-zero: mathematical-premise
  thm-cosine-has-a-smallest-positive-zero: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (complete 252-page volume), Chapter 5 Section 5.3, Eqs. (5.52)-(5.57): first-order averaging of a fast periodic term, printed pages 12-14 of Chapter 5 (PDF pages 99-101)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09 Fall 2014, complete course text), Chapter 5 Sections 5.2-5.3, Eqs. (5.25)-(5.26): a perturbation whose one-period average vanishes produces only a periodic change, printed pages 96-97"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
proof_strategy: direct
---

## Example

Take $n=1$, $P=2\pi$, $O=\mathbb R$, $f(t,x)=\cos t$ (independent of $x$), $x_0=0$, and the trapping data $R=1$, $\rho=\tfrac12$, $A=1$. Then $f$ is continuous, $C^1$ in $x$ with $D_xf=0$, and $2\pi$-periodic in $t$; on $\mathbb R\times\overline B(0,1)$ one may take $M=1$ and $L=0$. The average and deviation of [[def-cm-averaging-data-and-averaged-field]] are

$$\bar f=0,\qquad g(t,x)=\sin t\quad(0\le t\le2\pi,\ \text{extended }2\pi\text{-periodically}).$$

The averaged system is $y'=0$, so $y(t)\equiv0$ solves it and stays in $\overline B(0,\tfrac12)$. With $B=2MP=4\pi$, $B_1=2LP=0$ and $K=e^{LA}[B+(LB+B_1M)A]=4\pi$, the smallness hypothesis reads $\varepsilon\cdot4\pi<\tfrac12$; for $\varepsilon=\tfrac1{100}$ it holds because $\varepsilon K=\tfrac{\pi}{25}<\tfrac12$. The averaging theorem then gives

$$|x(t)-y(t)|=|x(t)|\le\frac{\pi}{25}\qquad(0\le t\le100).$$

The exact solution is $x(t)=\tfrac1{100}\sin t$, whose modulus is at most $\tfrac1{100}$; the theorem's bound is valid but not sharp here.

## Facts & Assumptions

**Given:** The data above and the scalar ODE $x'=\varepsilon\cos t$, $x(0)=0$.

[L1] For this $f$, $\bar f(x)=\frac1{2\pi}\int_0^{2\pi}\cos s\,ds=0$ and $g(t,x)=\int_0^t\cos s\,ds=\sin t$ on $[0,2\pi]$, extended periodically; this is the construction of [[def-cm-averaging-data-and-averaged-field]], evaluated with the fundamental theorem for continuous integrands ([[cor-primitives-of-a-continuous-function]], [[thm-sine-and-cosine-derivatives]]). [given]

[L2] The averaging theorem ([[thm-cm-averaging-for-fast-periodic-oscillations]]): under its hypotheses with a solution $y:[0,A/\varepsilon]\to\overline B(x_0,R-\rho)$ of the averaged system and $\varepsilon K<\rho$, the solution $x$ of $x'=\varepsilon f(t,x)$, $x(0)=x_0$ exists on $[0,A/\varepsilon]$ and satisfies $\|x(t)-y(t)\|_2\le\varepsilon K$ there, with $K=e^{LA}[B+(LB+B_1M)A]$, $B=2MP$, $B_1=2LP$. [given]

[L3] The definition $\pi=2\gamma$ and theorem $0<\gamma<2$ give $0<\pi<4$ ([[def-pi-via-first-positive-cosine-zero]], [[thm-cosine-has-a-smallest-positive-zero]]).

## Verification

**Proof technique:** direct; evaluate the averaging data, check the hypotheses, and compare the bound with the exact solution.

1.1 By [L1], $\bar f=0$ and $g(t,x)=\sin t$, so the averaged system is $y'=0$; the constant curve $y\equiv0$ is its solution with $y(0)=0$ on $[0,100]$, and $\|y(t)-0\|=0\le R-\rho=\tfrac12$. The constants are $M=1$, $L=0$, $B=4\pi$, $B_1=0$, $K=e^{0}[4\pi+0]=4\pi$, and with $\varepsilon=\tfrac1{100}$, [L3] gives $\varepsilon K=\tfrac{\pi}{25}<\tfrac4{25}<1/2=\rho$. [given, L1, L3, algebra]

2.1 By [L2] the solution $x$ of $x'=\tfrac1{100}\cos t$, $x(0)=0$ exists on $[0,100]$ and satisfies $|x(t)|\le\tfrac{\pi}{25}$ there. Directly, the primitive $\sin t$ gives $x(t)=\tfrac1{100}\sin t$ by [L1], so $|x(t)|\le\tfrac1{100}$; the stated bound holds and is not attained. [step 1.1, L1, L2, algebra] ∎
