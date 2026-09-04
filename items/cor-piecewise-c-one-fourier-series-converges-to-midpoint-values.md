---
id: cor-piecewise-c-one-fourier-series-converges-to-midpoint-values
kind: corollary
title: "Piecewise C^1 Fourier series converges to midpoint values"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-dirichlet-jordan-pointwise-convergence, thm-c1-lipschitz-ac-bv-hierarchy]
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

Assume the Axiom of Countable Choice.

Let $f:\mathbb R\to\mathbb R$ be one-periodic. Assume there is a partition
$0=x_0<x_1<\cdots<x_m=1$ such that, for each $j$, the restriction of $f$ to
$(x_{j-1},x_j)$ extends to a $C^1$ function on $[x_{j-1},x_j]$. Then for every
$x\in\mathbb R$,

$$S_Nf(x)\to\frac{f(x+)+f(x-)}2 \qquad \text{as } N\to\infty.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a one-periodic real function $f$ and a partition $0=x_0<\cdots<x_m=1$ such that each restriction $f|_{(x_{j-1},x_j)}$ extends to a $C^1$ function on $[x_{j-1},x_j]$.

[L1] Assuming the Axiom of Countable Choice, a one-periodic bounded-variation function satisfies the Dirichlet-Jordan convergence theorem ([[thm-dirichlet-jordan-pointwise-convergence]]).

[L2] A $C^1$ function on a compact interval is of bounded variation ([[thm-c1-lipschitz-ac-bv-hierarchy]]).

## Proof

**Proof technique:** direct.

1.1 For each $j$, let $f_j$ denote the $C^1$ extension of $f|_{(x_{j-1},x_j)}$ to $[x_{j-1},x_j]$. By [L2], each $f_j$ has bounded variation on its interval. Summing those finitely many variations and adding the finitely many endpoint jumps shows that the one-period representative of $f$ has bounded variation on $[0,1]$, including the periodic seam between $1-$ and $0+$. [L2, given, algebra]

2.1 Apply [L1] to that one-period bounded-variation representative. It yields $$S_Nf(x)\to\frac{f(x+)+f(x-)}2$$ for every $x\in\mathbb R$, which is the claimed midpoint-value convergence. [L1, step 1.1] ∎
