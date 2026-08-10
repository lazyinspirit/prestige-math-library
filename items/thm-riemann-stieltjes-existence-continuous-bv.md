---
id: thm-riemann-stieltjes-existence-continuous-bv
kind: theorem
title: "A continuous integrand is Riemann-Stieltjes integrable against every bounded-variation integrator"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-riemann-stieltjes-refinement-estimate,
       lem-riemann-stieltjes-integral-unique,
       def-riemann-stieltjes-sum-and-integral,
       def-bounded-variation-and-total-variation, thm-heine-cantor-r,
       def-continuity-real, thm-cauchy-criterion-via-lub,
       def-real-limit, def-sequence, def-partition-and-refinement]
justified_by: []
aliases: []
landmark: true
short: '$f\in C,\ \alpha\in BV\Rightarrow\int f\,d\alpha$'
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, Ch. 6, Theorem 6.8"
      url: "https://archive.org/details/principlesofmath00rudi"
    - title: "William F. Trench, Introduction to Real Analysis, Exercise 3.2.9"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

If $f:[a,b]\to\mathbb R$ is continuous and
$\alpha:[a,b]\to\mathbb R$ has bounded variation, then
$\int_a^b f\,d\alpha$ exists.

## Facts & Assumptions

**Given:** A continuous $f:[a,b]\to\mathbb R$ and a BV function $\alpha:[a,b]\to\mathbb R$.

[L1] The refinement estimate bounds differences of tagged sums by oscillation times total variation ([[lem-riemann-stieltjes-refinement-estimate]]).

[L2] A Stieltjes mesh limit, when it exists, is unique ([[lem-riemann-stieltjes-integral-unique]], [[def-riemann-stieltjes-sum-and-integral]]).

[L3] Total variation is finite for a BV function ([[def-bounded-variation-and-total-variation]]).

[L4] A continuous real function on a compact interval is uniformly continuous ([[thm-heine-cantor-r]], [[def-continuity-real]]).

[L5] Every Cauchy sequence of reals converges ([[thm-cauchy-criterion-via-lub]], [[def-real-limit]], [[def-sequence]]).

[L6] Uniform partitions of arbitrarily small mesh exist, and common refinements exist ([[def-partition-and-refinement]]).

## Proof

**Proof technique:** direct.

1.1 Put $V=\operatorname{Var}_{[a,b]}(\alpha)$. If $V=0$, every integrator increment is $0$, so every Stieltjes sum is $0$ and the integral exists. Assume $V>0$. Given $\varepsilon>0$, uniform continuity gives $\delta>0$ such that $|x-y|<\delta$ implies $|f(x)-f(y)|<\varepsilon/(4V)$. Any two tagged partitions of mesh below $\delta$ have all local oscillations below $\varepsilon/(4V)$; comparing both with their common refinement through [L1] makes their sums differ by less than $\varepsilon$. [L1, L3, L4, L6]

2.1 Choose one tagged uniform partition with mesh tending to $0$ for each natural index and call its sum $s_n$. Step 1.1 makes $(s_n)$ Cauchy, so [L5] gives a real limit $I$. [step 1.1, L5, L6, choose]

3.1 Given $\varepsilon>0$, choose the threshold in step 1.1 for error $\varepsilon/2$ and then a uniform sum $s_n$ beyond that threshold with $|s_n-I|<\varepsilon/2$. Every arbitrary tagged sum with sufficiently small mesh differs from $s_n$ by less than $\varepsilon/2$, hence is within $\varepsilon$ of $I$. This is the mesh-limit definition, and [L2] identifies the unique value. [step 1.1, step 2.1, L1, L2, L5, L6] ∎
