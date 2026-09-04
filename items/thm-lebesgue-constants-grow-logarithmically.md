---
id: thm-lebesgue-constants-grow-logarithmically
kind: theorem
title: "Lebesgue constants grow logarithmically"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-closed-form-and-size-bounds-for-the-dirichlet-kernel, lem-sine-positive-and-cosine-decreasing-on-zero-two]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
---

## Statement

There are absolute constants $c,C>0$ such that, for every $N\ge1$,

$$c\log(N+1)\le\int_0^1 |D_N(t)|\,dt\le C\log(N+1).$$

## Facts & Assumptions

**Given:** An integer $N \ge 1$.

[L1] For $t\notin\mathbb Z$, $$D_N(t)=\frac{\sin((2N+1)\pi t)}{\sin(\pi t)},$$ and in particular $D_N(1-t)=D_N(t)$ for $0<t<1$ ([[lem-closed-form-and-size-bounds-for-the-dirichlet-kernel]]).

[L2] For $0<u\le2$, $\sin u\ge u/3>0$ ([[lem-sine-positive-and-cosine-decreasing-on-zero-two]]).

## Proof

**Proof technique:** direct.

1.1 For $0<t<1$, [L1] gives $D_N(1-t)=D_N(t)$, so $$\int_0^1 |D_N(t)|\,dt=2\int_0^{1/2}|D_N(t)|\,dt.$$ Split the last integral at $1/(2N+1)$. On $(0,1/(2N+1)]$, [L1] and the bound $|D_N(t)|\le2N+1$ give a contribution at most $1$. On $[1/(2N+1),1/2]$, one has $0<\pi t\le\pi/2<2$, so [L2] implies $\sin(\pi t)\ge\pi t/3$. Using [L1], $$|D_N(t)|\le\frac{1}{\sin(\pi t)}\le\frac{3}{\pi t}.$$ Therefore $$\int_0^1 |D_N(t)|\,dt\le2+\frac{6}{\pi}\int_{1/(2N+1)}^{1/2}\frac{dt}{t}\le C\log(N+1)$$ for a universal $C$. [L1, L2, algebra]

1.2 For $m=0,\dots,N-1$, let $$J_m:=\left[\frac{m+1/6}{2N+1},\frac{m+5/6}{2N+1}\right].$$ These intervals lie in $(0,1/2)$ and are disjoint. If $t\in J_m$, then $(2N+1)\pi t\in[(m+1/6)\pi,(m+5/6)\pi]$, so $|\sin((2N+1)\pi t)|\ge1/2$. Also $\sin(\pi t)\le\pi t$. Hence [L1] gives $$|D_N(t)|\ge\frac{1}{2\pi t} \qquad (t\in J_m).$$ [L1, algebra]

2.1 Integrating the lower bound from step 1.2 over each $J_m$ and summing yields $$\int_0^{1/2}|D_N(t)|\,dt\ge\frac{1}{2\pi}\sum_{m=0}^{N-1} \int_{J_m}\frac{dt}{t}=\frac{1}{2\pi}\sum_{m=0}^{N-1} \log\!\left(\frac{m+5/6}{m+1/6}\right).$$ Since $$\log\!\left(\frac{m+5/6}{m+1/6}\right)\ge\frac{2/3}{m+5/6}\ge\frac{2}{3(m+1)},$$ one gets $$\int_0^{1/2}|D_N(t)|\,dt\ge\frac{1}{3\pi}\sum_{m=0}^{N-1}\frac{1}{m+1}\ge\frac{1}{3\pi}\int_1^{N+1}\frac{dt}{t}=\frac{1}{3\pi}\log(N+1).$$ Using step 1.1 once more, $$\int_0^1 |D_N(t)|\,dt\ge\frac{2}{3\pi}\log(N+1).$$ [step 1.1, step 1.2, algebra]

3.1 Steps 1.1 and 2.1 give the two-sided logarithmic bound. [step 1.1, step 2.1] ∎
