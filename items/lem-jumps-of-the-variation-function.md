---
id: lem-jumps-of-the-variation-function
kind: lemma
title: "The jumps of a variation function equal the absolute jumps of the original function"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-variation-additive-on-subintervals,
       lem-basic-properties-of-total-variation,
       cor-bv-discontinuities-are-countable-and-of-first-kind,
       def-one-sided-limits, thm-algebra-of-function-limits,
       def-continuity-real, def-series,
       cor-monotone-converges-iff-bounded, lem-series-tail-invariance,
       lem-convergent-implies-cauchy, lem-geometric-sequence-null]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Christopher Heil, Absolute Continuity and the Banach-Zaretsky Theorem"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
pipeline_run: null
---

## Statement

Let $f:[a,b]\to\mathbb R$ have bounded variation and let $V_f(x)=\operatorname{Var}_{[a,x]}(f)$. At an interior point $c$,

$$V_f(c+)-V_f(c)=|f(c+)-f(c)|,\qquad V_f(c)-V_f(c-)=|f(c)-f(c-)|.$$

The corresponding one-sided formula holds at either endpoint. In particular,
$V_f$ is continuous at every point where $f$ is continuous.

## Facts & Assumptions

**Given:** A bounded-variation function $f:[a,b]\to\mathbb R$, its variation function $V_f$, and a point $c\in[a,b]$.

[L1] $V_f(y)-V_f(x)=\operatorname{Var}_{[x,y]}(f)$ whenever $x\le y$ ([[lem-variation-additive-on-subintervals]]).

[L2] $|f(y)-f(x)|\le\operatorname{Var}_{[x,y]}(f)$ ([[lem-basic-properties-of-total-variation]]).

[L3] Every relevant one-sided limit of a BV function exists ([[cor-bv-discontinuities-are-countable-and-of-first-kind]], [[def-one-sided-limits]]).

[L4] Finite sums and differences preserve existing one-sided limits ([[thm-algebra-of-function-limits]]).

[L5] Continuity is equality of the relevant limit with the function value ([[def-continuity-real]]).

[L6] A bounded nondecreasing sequence converges; its partial sums are therefore Cauchy, so the sums over all sufficiently remote finite tails are uniformly small ([[cor-monotone-converges-iff-bounded]], [[def-series]], [[lem-series-tail-invariance]], [[lem-convergent-implies-cauchy]]).

[L7] Geometric sequences with ratio in $(0,1)$ tend to zero ([[lem-geometric-sequence-null]]).

## Proof

**Proof technique:** direct.

1.1 Since $V_f$ is nondecreasing and bounded above by $V_f(b)$, its one-sided limits exist. By [L1] and [L2], $V_f(x)-V_f(c)\ge|f(x)-f(c)|$ for $x>c$; passage to the right limit gives $V_f(c+)-V_f(c)\ge|f(c+)-f(c)|$. [L1, L2, L3, L4]

1.2 For the reverse inequality, fix $x_0>c$ and put $x_n=c+(x_0-c)2^{-n}$. Let $a_n=\operatorname{Var}_{[x_{n+1},x_n]}(f)$. By repeated additivity, every partial sum of the nonnegative series $\sum_na_n$ is $\operatorname{Var}_{[x_N,x_0]}(f)$ for a suitable $N$, hence is bounded by $\operatorname{Var}_{[c,x_0]}(f)$. Its tails therefore tend to zero by [L6], while $x_n\downarrow c$ by [L7]. [L1, L6, L7]

2.1 Given $\varepsilon>0$, take $N$ so large that the series tail from $N$ is below $\varepsilon$ and $|f(y)-f(c+)|<\varepsilon$ whenever $c<y\le x_N$. For any partition $c=t_0<t_1<\cdots<t_k=x_N$, choose $m\ge N$ with $x_{m+1}<t_1\le x_m$. The part after its first increment is at most [step 1.2, L1, L2, L3, L6]
$$\operatorname{Var}_{[t_1,x_N]}(f)\le\operatorname{Var}_{[x_{m+1},x_N]}(f)=\sum_{n=N}^{m}a_n<\varepsilon,$$
while $|f(t_1)-f(c)|\le|f(c+)-f(c)|+\varepsilon$. Taking the supremum over partitions gives $\operatorname{Var}_{[c,x_N]}(f)\le|f(c+)-f(c)|+2\varepsilon$. Restriction gives the same bound for $c<x\le x_N$, and [L2] gives the reverse bound in the limit.

3.1 Thus $\lim_{x\downarrow c}\operatorname{Var}_{[c,x]}(f)=|f(c+)-f(c)|$, and [L1] proves the right-hand formula. Applying steps 1.2–2.1 to the reversed interval proves the left-hand formula. If $f$ is continuous at $c$, both absolute jumps vanish by [L5], so $V_f$ is continuous there. Endpoint cases use only the available side. [step 1.1, step 2.1, L1, L3, L5] ∎
