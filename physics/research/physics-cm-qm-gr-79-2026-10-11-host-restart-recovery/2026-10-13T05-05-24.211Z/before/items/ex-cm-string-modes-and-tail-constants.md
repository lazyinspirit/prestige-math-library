---
id: ex-cm-string-modes-and-tail-constants
kind: example
title: "The first sine mode with matched velocity data: exact solution and the numerical tail bound $8(N+1)^{-4}$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [thm-cm-smooth-string-fourier-series-solution, def-cm-sine-coefficients-of-periodic-functions, lem-cm-sine-coefficient-decay-by-integration-by-parts, lem-cm-cosine-sine-orthogonality-and-odd-extension, thm-cm-dalembert-formula-and-string-solutions, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-derivatives, thm-sine-cosine-zero-sets-and-fundamental-period, cor-trigonometric-parity-and-pythagorean-identity, def-ck-euclidean-maps-and-diffeomorphisms, thm-integral-test-for-series, def-integral-over-a-measurable-set]
dependency_roles:
  thm-cm-smooth-string-fourier-series-solution: mathematical-premise
  def-cm-sine-coefficients-of-periodic-functions: mathematical-premise
  lem-cm-sine-coefficient-decay-by-integration-by-parts: mathematical-premise
  lem-cm-cosine-sine-orthogonality-and-odd-extension: mathematical-premise
  thm-cm-dalembert-formula-and-string-solutions: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-integral-test-for-series: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 6.5 (standing waves of the fixed-end string)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "R. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845), Chapters 1–2 (Fourier coefficients and summability)"
      url: "https://arxiv.org/pdf/0903.3845"

  precheck: pass
proof_strategy: direct
---

## Example

Let $L>0$, $c>0$ and define the odd $2L$-periodic $C^\infty$ datum

$$F(x):=\sin\Bigl(\frac{\pi x}{L}\Bigr),\qquad G(x):=\frac{c\pi}{L}\sin\Bigl(\frac{\pi x}{L}\Bigr).$$

Then the sine coefficients of [the definition] are $b_1(F)=1$ and $b_n(F)=0$ for $n\ge2$, and $b_1(G)=c\pi/L$, $b_n(G)=0$ for $n\ge2$; the series solution of the string theorem is the finite expression

$$u(t,x)=\bigl[\cos(\omega_1t)+\sin(\omega_1t)\bigr]\sin\Bigl(\frac{\pi x}{L}\Bigr),\qquad \omega_1=\frac{c\pi}{L},$$

which solves $u_{tt}=c^2u_{xx}$ with $u(0,\cdot)=F$, $u_t(0,\cdot)=G$ and $u(t,0)=u(t,L)=0$; its tail beyond the first mode vanishes, and the numerical bound of the string theorem at these data is

$$|u(t,x)-u_1(t,x)|\le 8\,(N+1)^{-4}\qquad(N\ge2),$$

so the general bound is valid but far from sharp on this datum.

## Facts & Assumptions

**Given:** The period $L>0$, wave speed $c>0$, the data $F,G$ above, and $\omega_1=c\pi/L$.

[L1] Sine coefficients equal $(2/L)\int_0^L(\text{datum})\sin(n\pi x/L)dx$; for a single sine mode $\sin(\pi x/L)$ with the orthogonality of [[lem-cm-cosine-sine-orthogonality-and-odd-extension]] one gets $b_1=1$, $b_n=0$ for $n\ge2$, and the function is odd and $2L$-periodic ([[def-cm-sine-coefficients-of-periodic-functions]], [[def-sine-and-cosine-by-power-series]], [[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[L2] The string theorem: the series (S) with $a_n=b_n(F)$, $d_n=b_n(G)/\omega_n$ is $C^2$, solves $u_{tt}=c^2u_{xx}$ with the fixed-end conditions and the stated initial data, and obeys the tail bound with $C=2\bigl(\frac{2L^5M_5}{\pi^5}+\frac{2L^5M_4}{c\pi^5}\bigr)$ ([[thm-cm-smooth-string-fourier-series-solution]]).

[L3] Derivatives and values: $(\sin)'=\cos$, $(\cos)'=-\sin$, $\cos0=1$, $\sin0=0$, and the modes solve the wave equation for every $n$ ([[thm-cm-dalembert-formula-and-string-solutions]], [[thm-sine-and-cosine-derivatives]], [[def-sine-and-cosine-by-power-series]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

## Verification

**Proof technique:** direct; identify the coefficients and evaluate the constants of the theorem.

1.1 By [L1], $b_1(F)=1$, $b_n(F)=0$ for $n\ge2$; similarly $b_1(G)=c\pi/L$ and $b_n(G)=0$ for $n\ge2$. Hence $a_1=1$, $d_1=b_1(G)/\omega_1=1$, and all other coefficients vanish, so the series (S) collapses to $u(t,x)=[\cos\omega_1t+\sin\omega_1t]\sin(\pi x/L)$. [given, L1, algebra]

2.1 By [L3] and step 1.1, $\partial_t^2u=-\omega_1^2u$ and $\partial_x^2u=-(\pi/L)^2u$, so $u_{tt}=c^2u_{xx}$; $u(t,0)=u(t,L)=0$; $u(0,x)=\sin(\pi x/L)=F(x)$; and $u_t(0,x)=\omega_1\sin(\pi x/L)=G(x)$. [step 1.1, L3, algebra]

3.1 For the constant of the theorem, $M_5=\sup|F^{(5)}|=(\pi/L)^5$ and $M_4=\sup|G^{(4)}|=(c\pi/L)(\pi/L)^4=c\pi^5/L^5$. Hence $C=2\bigl(\frac{2L^5(\pi/L)^5}{\pi^5}+\frac{2L^5c\pi^5/L^5}{c\pi^5}\bigr)=2(2+2)=8$. Since the exact tail vanishes for $N\ge1$, the bound $|u-u_N|\le8(N+1)^{-4}$ holds trivially for every $N\ge1$. [step 1.1, L2, algebra] ∎

## Remarks

- The finite datum exercises the theorem without any infinite tail; the numerical bound $8(N+1)^{-4}$ is valid because the general constant is valid, and the example shows explicitly that the general bound is not claimed to be sharp.
