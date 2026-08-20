---
id: ex-sine-harmonic-series-pointwise-not-uniform
kind: example
title: "$\\sum_{n=1}^{\\infty}\\sin(nx)/n$ converges pointwise but not uniformly"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-finite-sine-harmonic-sums, thm-dirichlet-test,
       cor-uniform-cauchy-criterion-function-series,
       lem-sine-positive-and-cosine-decreasing-on-zero-two,
       thm-sine-cosine-zero-sets-and-fundamental-period,
       cor-archimedean-reciprocal]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "NCSU MA 401 course text, Chapter 5, Example 5.18"
      url: "https://zhilin.math.ncsu.edu/TEACHING/MA401/pde_book_chap1_5.pdf"
pipeline_run: null
---

## Example

The function series

$$\sum_{n=1}^{\infty}\frac{\sin(nx)}{n}$$

converges at every real $x$, but it does not converge uniformly on $[0,2]$ and
therefore does not converge uniformly on $\mathbb R$.

## Facts & Assumptions

**Given:** The zero-based function series $\sum_{k=0}^{\infty}f_k(x)$ with $f_k(x):=\sin((k+1)x)/(k+1)$.

[L1] If $x\notin2\pi\mathbb Z$, then for every positive integer $N$, $|\sum_{n=1}^N\sin(nx)|\le1/|\sin(x/2)|$ ([[lem-finite-sine-harmonic-sums]]).

[L2] If the partial sums of $(a_k)$ are bounded and $(b_k)$ is nonincreasing with limit zero, then $\sum a_kb_k$ converges ([[thm-dirichlet-test]]).

[L3] Sine vanishes at every integer multiple of $\pi$ and has period $2\pi$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[L4] Uniform convergence of a function series is equivalent to the uniform Cauchy condition on every sufficiently late finite tail ([[cor-uniform-cauchy-criterion-function-series]]).

[L5] For $0<t\le2$, $\sin t\ge t/3>0$ ([[lem-sine-positive-and-cosine-decreasing-on-zero-two]]).

[L6] For every real $\varepsilon>0$, there is a positive integer $N$ with $1/N<\varepsilon$ ([[cor-archimedean-reciprocal]]).

## Verification

**Proof technique:** direct.

1.1 If $x\in2\pi\mathbb Z$, every term $f_k(x)$ is zero by [L3], so the series converges there. [L3]

1.2 If $x\notin2\pi\mathbb Z$, [L1] bounds the partial sums of $a_k:=\sin((k+1)x)$ independently of the partial-sum index. The weights $b_k:=1/(k+1)$ are positive, nonincreasing, and tend to zero by [L6], so [L2] proves convergence at this $x$. [L1, L2, L6, algebra]

1.3 Let $K$ be a positive integer and put $x:=1/K$. For the indices $k=K$ through $2K-1$, the angles $(k+1)x$ lie in $(1,2]$, so [L5] gives $\sin((k+1)x)\ge1/3$, while $1/(k+1)\ge1/(2K)$. These $K$ terms have sum at least $1/6$. [L5, construct, algebra]

2.1 Steps 1.1 and 1.2 cover all real $x$, so the series converges pointwise on $\mathbb R$. [step 1.1, step 1.2]

2.2 Given any proposed uniform-Cauchy threshold $N$, choose a positive $K>N+1$. The tail from $k=K$ to $k=2K-1$ lies beyond $N$ but has value at least $1/6$ at $x=1/K$ by step 1.3. Therefore [L4] fails for $\varepsilon=1/7$, and the series is not uniform on $[0,2]$. [step 1.3, L4, algebra]

3.1 Pointwise convergence is step 2.1. Nonuniformity on $[0,2]$ is step 2.2, and uniform convergence on $\mathbb R$ would restrict to uniform convergence on that interval, so the series is not uniform on $\mathbb R$. [step 2.1, step 2.2] ∎
