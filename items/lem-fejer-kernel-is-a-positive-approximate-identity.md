---
id: lem-fejer-kernel-is-a-positive-approximate-identity
kind: lemma
title: "The Fejer kernel is a positive approximate identity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-dirichlet-and-fejer-kernels]
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

For every $N \ge 0$, the Fejer kernel satisfies

$$F_N(t)=\frac{1}{N+1}\left|\sum_{j=0}^N e_j(t)\right|^2.$$

Hence, for $t \notin \mathbb Z$,

$$F_N(t)=\frac{1}{N+1}\left(\frac{\sin((N+1)\pi t)}{\sin(\pi t)}\right)^2,$$

so $F_N(t)\ge0$ for all $t$, $\int_0^1F_N(t)\,dt=1$, and for every
$\delta\in(0,1/2]$,

$$\int_\delta^{1-\delta}F_N(t)\,dt \le \frac{1}{(N+1)\sin^2(\pi\delta)}.$$

In particular,

$$\int_\delta^{1-\delta}F_N(t)\,dt \longrightarrow 0 \qquad (N\to\infty).$$

## Facts & Assumptions

**Given:** An integer $N \ge 0$ and a real $\delta \in (0,1/2]$.

[L1] The Fejer kernel is $F_N(t)=\frac{1}{N+1}\sum_{m=0}^N D_m(t)$, where $D_m(t)=\sum_{|k|\le m}e_k(t)$ and $\int_0^1 D_m(t)\,dt=1$ ([[def-dirichlet-and-fejer-kernels]]).

## Proof

**Proof technique:** direct.

1.1 Expanding the average in [L1] gives $$\sum_{m=0}^N D_m(t)=\sum_{m=0}^N\sum_{|k|\le m}e_k(t)=\sum_{|k|\le N}(N+1-|k|)e_k(t).$$ On the other hand, $$\left|\sum_{j=0}^N e_j(t)\right|^2=\sum_{j=0}^N\sum_{\ell=0}^N e_{j-\ell}(t)=\sum_{|k|\le N}(N+1-|k|)e_k(t).$$ Therefore $$F_N(t)=\frac{1}{N+1}\left|\sum_{j=0}^N e_j(t)\right|^2.$$ [L1, algebra]

2.1 If $t\notin\mathbb Z$, the finite geometric-series formula gives $$\sum_{j=0}^N e_j(t)=\sum_{j=0}^N e^{2\pi ijt}=e^{\pi iNt}\frac{\sin((N+1)\pi t)}{\sin(\pi t)},$$ so step 1.1 yields the displayed square formula. This proves $F_N(t)\ge0$ for every $t\notin\mathbb Z$, and at integers the same formula extends by continuity to $F_N(0)=N+1$. Also [L1] gives $$\int_0^1F_N(t)\,dt=\frac{1}{N+1}\sum_{m=0}^N \int_0^1 D_m(t)\,dt=1.$$ [L1, step 1.1, algebra]

3.1 For $t\in[\delta,1-\delta]$, one has $|\sin(\pi t)|\ge\sin(\pi\delta)$. Using step 2.1 and $|\sin((N+1)\pi t)|\le1$ therefore gives $$F_N(t)\le \frac{1}{(N+1)\sin^2(\pi\delta)}.$$ Integrating over an interval of length at most $1$ yields $$\int_\delta^{1-\delta}F_N(t)\,dt \le \frac{1}{(N+1)\sin^2(\pi\delta)}\to0.$$ [step 2.1, algebra] ∎
