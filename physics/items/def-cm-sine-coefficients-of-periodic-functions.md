---
id: def-cm-sine-coefficients-of-periodic-functions
kind: definition
title: "Sine coefficients, sine series and the odd periodic extension"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-ck-euclidean-maps-and-diffeomorphisms, def-continuity-real, thm-continuous-implies-integrable, def-sine-and-cosine-by-power-series, thm-sine-cosine-zero-sets-and-fundamental-period, cor-trigonometric-parity-and-pythagorean-identity, def-interval, def-oriented-integral]
dependency_roles:
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-continuity-real: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-interval: mathematical-premise
  def-oriented-integral: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "R. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845), Chapter 1 (Fourier coefficients of periodic functions) and Theorem 5.4(c) (the orthonormal trigonometric basis of L²(T))"
      url: "https://arxiv.org/pdf/0903.3845"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 6.5 (standing waves of the fixed-end string: the sinusoidal modes)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"

  precheck: pass
---

## Definition

Let $L>0$. A function $F:\mathbb R\to\mathbb R$ is **$L$-periodic** when $F(x+L)=F(x)$ for all $x\in\mathbb R$, and **odd** when $F(-x)=-F(x)$ for all $x$.

**(a) Sine coefficients.** Let $F:[0,L]\to\mathbb R$ be continuous ([[def-continuity-real]]); a function on a larger domain is used through its restriction to $[0,L]$, with no periodicity required for the coefficient definition. In particular both $L$-periodic and odd $2L$-periodic functions are admissible. Then $\int_0^L|F|<\infty$ ([[thm-continuous-implies-integrable]]). For every integer $n\ge1$ the **$n$-th sine coefficient** of $F$ is

$$b_n(F):=\frac{2}{L}\int_0^LF(x)\sin\!\Bigl(\frac{n\pi x}{L}\Bigr)dx \qquad \in\mathbb R ,$$

an ordinary Riemann integral of a continuous function on a compact interval ([[def-oriented-integral]], [[def-sine-and-cosine-by-power-series]]). The **sine series** of $F$ is the series of functions

$$\sum_{n\ge1}b_n(F)\sin\!\Bigl(\frac{n\pi x}{L}\Bigr),$$

whose $N$-th **partial sum** is $S_N^{\rm s}F(x):=\sum_{n\le N}b_n(F)\sin(n\pi x/L)$.

**(b) Odd periodic extension.** Let $F:[0,L]\to\mathbb R$ be continuous with $F(0)=F(L)=0$. The **odd $2L$-periodic extension** of $F$ is the function on $\mathbb R$ defined by

$$F^{\rm odd}(x):=\begin{cases}F(x),&0\le x\le L,\\ -F(-x),&-L\le x\le 0,\end{cases}\qquad F^{\rm odd}(x+2L):=F^{\rm odd}(x).$$

Equivalently, $F^{\rm odd}$ is the unique $2L$-periodic odd function whose restriction to $[0,L]$ is $F$ (the two definitions agree at $0$ and $L$ because both values vanish; the extension is well defined and continuous).

(c) Given a specified wave speed $c>0$, the **angular frequency** of mode $n$ is $\omega_n:=cn\pi/L$; its fundamental ($n=1$) value is $c\pi/L$.

## Remarks

- All coefficients are ordinary integrals of continuous functions on compact intervals; no choice principle is needed, and no convergence of the sine series is asserted by the definition. Sine coefficients are real because $F$ and the sine functions are real-valued.

- The normalization in $b_n$ is the coefficient normalization for the orthogonal family $\{\sin(n\pi x/L)\}_{n\ge1}$ with squared norm $L/2$: $\int_0^L\sin(n\pi x/L)\sin(k\pi x/L)dx=(L/2)\delta_{nk}$, the factor $(2/L)$ being the inverse of the squared norm $L/2$; the orthogonality is proved in the companion lemma, not assumed here.

- A function that is odd and $2L$-periodic automatically satisfies $F(0)=F(L)=0$ by oddness and periodicity; the extension in (b) is a construction, not a claim that $F$ already has these symmetries.
