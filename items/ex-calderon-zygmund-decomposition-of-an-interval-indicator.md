---
id: ex-calderon-zygmund-decomposition-of-an-interval-indicator
kind: example
title: "Calderón–Zygmund decomposition of an interval indicator"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-countable-choice, def-dyadic-cube-in-rn-all-generations, lem-calderon-zygmund-decomposition-at-height-lambda, lem-dyadic-cubes-all-generations-partition-and-nesting]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Theorem 5.3.1 scope, printed pp. 355–357; the computation is direct"
---

## Example

Assume Countable Choice. Take $f=\mathbf 1_{(0,1]}$ on $\mathbb R$ with the
half-open all-generation dyadic grid $(a,b]$ of
[[def-dyadic-cube-in-rn-all-generations]] and $\lambda=1/4$. The unique maximal
dyadic interval with average of $|f|$ above $\lambda$ is $(0,2]$, whose average
is $1/2=2\lambda$; the bad part is
$b=\frac12\mathbf 1_{(0,1]}-\frac12\mathbf 1_{(1,2]}$ and the good part is
$g=\frac12\mathbf 1_{(0,2]}$, so $|g|=2\lambda$ on $(0,2]$, $\int b=0$ and
$\sum|Q|=2\le\lambda^{-1}\|f\|_1=4$. The parent $(0,4]$ of the maximal bad
interval has average exactly $\lambda$ and is therefore good, which is how the
$2\lambda$ average bound is attained.

## Facts & Assumptions

**Given:** Countable Choice ([[def-countable-choice]]); the function $f=\mathbf 1_{(0,1]}$ on $\mathbb R$; the all-generation half-open dyadic intervals $(m2^{-k},(m+1)2^{-k}]$ of [[def-dyadic-cube-in-rn-all-generations]]; the height $\lambda=1/4$; the decomposition of [[lem-calderon-zygmund-decomposition-at-height-lambda]].

[F1] The dyadic intervals of all generations are nested or disjoint, at each generation they partition $\mathbb R$, and the interval $(m2^{-k},(m+1)2^{-k}]$ has length $2^{-k}$ ([[lem-dyadic-cubes-all-generations-partition-and-nesting]]).

[F2] Decomposition at height $\lambda$: for $f\in L^1(\mathbb R)$ the maximal bad dyadic intervals $Q$, those with $|Q|^{-1}\int_Q|f|>\lambda$ that are maximal under inclusion, are pairwise disjoint, and with $b=\sum_j(f-|Q_j|^{-1}\int_{Q_j}f)\mathbf1_{Q_j}$ and $g=f-b$ one has $\int b=0$, $|g|\le2^n\lambda=2\lambda$ on the bad intervals, and $\sum_j|Q_j|\le\lambda^{-1}\|f\|_1$ ([[lem-calderon-zygmund-decomposition-at-height-lambda]]).



## Verification

**Proof technique:** direct.

1.1 By [F1], a dyadic interval meeting $(0,1]$ is either contained in it or contains it. The former have average $1$. A containing interval of length $2^a$, $a\ge0$, has average $2^{-a}$, exceeding $\lambda=1/4$ exactly when $a=0$ or $a=1$. The unique ancestors of these lengths are $(0,1]$ and $(0,2]$, while $(0,4]$ has average exactly $\lambda$ and every coarser ancestor has smaller average. Intervals disjoint from $(0,1]$ have average zero. Thus all bad intervals are contained in $(0,2]$, which is itself bad and is the unique maximal bad interval, with average $1/2=2\lambda$. [F1, F2, given, algebra]

2.1 Reading off the formulas of the decomposition [F2] for the single maximal bad interval $Q=(0,2]$: $|Q|=2$, $|Q|^{-1}\int_Qf=1/2$, so $b=f-\frac12\mathbf 1_{(0,2]}=\frac12\mathbf 1_{(0,1]}-\frac12\mathbf 1_{(1,2]}$ and $g=\frac12\mathbf 1_{(0,2]}$. [F2, step 1.1, given, algebra]

3.1 The checks: $f=\mathbf 1_{(0,1]}$ has $\|f\|_1=1$ and $\lambda^{-1}\|f\|_1=4$; $\sum|Q|=|(0,2]|=2\le4$; $|g|=1/2=2\lambda$ on its support; and $\int b=\frac12\lambda((0,1])-\frac12\lambda((1,2])=\frac12-\frac12=0$. This is the asserted finite verification of maximality, of the $2\lambda$ average bound, and of the parent-good property. [step 1.1, step 2.1, algebra] ∎
