---
id: lem-symmetric-difference-formula-for-fourier-partial-sums
kind: lemma
title: "Symmetric difference formula for Fourier partial sums"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-fourier-partial-sums-are-dirichlet-convolutions, def-dirichlet-and-fejer-kernels, lem-closed-form-and-size-bounds-for-the-dirichlet-kernel]
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
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Statement

Let $f$ be a one-period integrable function, let $x,s\in\mathbb R$, and let
$N\ge0$. Then

$$S_Nf(x)-s=\int_0^{1/2}\bigl(f(x+t)+f(x-t)-2s\bigr)D_N(t)\,dt.$$

Equivalently,

$$S_Nf(x)-s=\int_0^{1/2}\bigl(f(x+t)+f(x-t)-2s\bigr)\frac{\sin((2N+1)\pi t)}{\sin(\pi t)}\,dt.$$

## Facts & Assumptions

**Given:** A one-period integrable function $f$, reals $x,s$, and an integer $N \ge 0$.

[L1] Fourier partial sums are Dirichlet convolutions: $S_Nf(x)=\int_0^1 f(x-t)D_N(t)\,dt$ ([[lem-fourier-partial-sums-are-dirichlet-convolutions]]).

[L2] The Dirichlet kernel is even and $\int_0^1D_N(t)\,dt=1$ ([[def-dirichlet-and-fejer-kernels]]).

[L3] For $t\notin\mathbb Z$, $D_N(t)=\sin((2N+1)\pi t)/\sin(\pi t)$ ([[lem-closed-form-and-size-bounds-for-the-dirichlet-kernel]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $$S_Nf(x)-s=\int_0^1 \bigl(f(x-t)-s\bigr)D_N(t)\,dt,$$ because [L2] gives $\int_0^1 D_N(t)\,dt=1$. [L1, L2, algebra]

2.1 Split the integral in step 1.1 at $1/2$ and substitute $u=1-t$ on $[1/2,1]$. Since $f$ is one-periodic and $D_N(1-u)=D_N(-u)=D_N(u)$ by [L2], this yields $$S_Nf(x)-s=\int_0^{1/2}\bigl(f(x-t)+f(x+t)-2s\bigr)D_N(t)\,dt.$$ [step 1.1, L2, algebra]

3.1 The first displayed formula is step 2.1 with the two summands reordered. Replacing $D_N(t)$ by the closed form from [L3] gives the second displayed formula. [step 2.1, L3, algebra] ∎
