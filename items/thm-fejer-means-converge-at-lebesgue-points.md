---
id: thm-fejer-means-converge-at-lebesgue-points
kind: theorem
title: "Fejer means converge at Lebesgue points"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cesaro-and-abel-means-of-a-fourier-series, lem-fejer-kernel-is-a-positive-approximate-identity, def-lebesgue-point-and-lebesgue-set, thm-almost-every-point-is-a-lebesgue-point]
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
---

## Statement

Assume the Axiom of Countable Choice.

Let $f:\mathbb R\to\mathbb C$ be one-periodic with $f|_{[0,1]}\in L^1([0,1])$.
If $x\in\mathbb R$ is a Lebesgue point of $f$, then

$$\sigma_Nf(x)\longrightarrow f(x) \qquad (N\to\infty).$$

In particular, $\sigma_Nf(x)\to f(x)$ for almost every $x$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a one-periodic function $f$ with $f|_{[0,1]}\in L^1([0,1])$, and a Lebesgue point $x$ of $f$.

[L1] The Cesaro means satisfy $\sigma_Nf=f*F_N$ ([[def-cesaro-and-abel-means-of-a-fourier-series]]).

[L2] The Fejer kernels are nonnegative, have integral $1$, and obey the square formula and tail estimate from [[lem-fejer-kernel-is-a-positive-approximate-identity]].

[L3] At a Lebesgue point,
$$\lim_{r\to0^+}\frac1{2r}\int_{-r}^r |f(x-t)-f(x)|\,dt=0$$
in the one-dimensional case of [[def-lebesgue-point-and-lebesgue-set]].

[L4] Assuming the Axiom of Countable Choice, almost every point is a Lebesgue point ([[thm-almost-every-point-is-a-lebesgue-point]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon>0$. By [L3], choose $\delta\in(0,1/2]$ so that $$\int_{-h}^h |f(x-t)-f(x)|\,dt < \frac{\varepsilon}{4}h \qquad (0<h\le\delta).$$ For $0<h\le\delta$, put $$G(h):=\int_0^h\bigl(|f(x+t)-f(x)|+|f(x-t)-f(x)|\bigr)\,dt.$$ Then $G(h)<\varepsilon h/4$ for $0<h\le\delta$. [L3, choose, construct, algebra]

2.1 Using [L1], pair the intervals $[0,1/2]$ and $[1/2,1]$ exactly as in the Dirichlet symmetric-difference formula. This gives $$|\sigma_Nf(x)-f(x)|\le\int_0^{1/2}\bigl(|f(x+t)-f(x)|+|f(x-t)-f(x)|\bigr)F_N(t)\,dt.$$ Set $a_N:=\min(\delta,(N+1)^{-1})$. Since step 1.1 gives $G(a_N)<\varepsilon a_N/4$ and the square formula in [L2] yields $F_N(t)\le N+1$, the interval $(0,a_N)$ contributes at most $\varepsilon/4$. If $a_N<( \delta )$, then for $t\in[a_N,\delta]$ one has $\sin(\pi t)\ge 2t$, so [L2] gives $$F_N(t)\le \frac{1}{4(N+1)t^2}.$$ Integration by parts with $G'(t)$ equal almost everywhere to the displayed integrand therefore gives $$\int_{a_N}^{\delta}\frac{G'(t)}{t^2}\,dt = \frac{G(\delta)}{\delta^2}-\frac{G(a_N)}{a_N^2}+2\int_{a_N}^{\delta}\frac{G(t)}{t^3}\,dt \le \frac{3\varepsilon}{4a_N},$$ so the interval $[a_N,\delta]$ contributes at most $3\varepsilon/16$. Consequently $$\int_0^\delta\bigl(|f(x+t)-f(x)|+|f(x-t)-f(x)|\bigr)F_N(t)\,dt \le \frac{7\varepsilon}{16}$$ for every $N$. [L1, L2, step 1.1, algebra]

3.1 On $[\delta,1/2]$, the integrand is integrable and [L2] gives $$\sup_{t\in[\delta,1-\delta]}F_N(t)\to0.$$ Hence $$\int_\delta^{1/2}\bigl(|f(x+t)-f(x)|+|f(x-t)-f(x)|\bigr)F_N(t)\,dt\to0.$$ Choose $N_0$ so large that this far contribution is $<9\varepsilon/16$ for all $N\ge N_0$. Then step 2.1 yields $$|\sigma_Nf(x)-f(x)|<\varepsilon \qquad (N\ge N_0).$$ Thus $\sigma_Nf(x)\to f(x)$. [L2, step 2.1, choose, algebra]

4.1 The first claim holds at every Lebesgue point by step 3.1. Applying [L4] therefore gives $\sigma_Nf(x)\to f(x)$ for almost every $x$. [L4, step 3.1] ∎
