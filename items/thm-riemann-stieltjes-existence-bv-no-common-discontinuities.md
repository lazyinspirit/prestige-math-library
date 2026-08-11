---
id: thm-riemann-stieltjes-existence-bv-no-common-discontinuities
kind: theorem
title: "Two bounded-variation functions with no common discontinuity are Riemann–Stieltjes integrable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-bv-functions-are-regulated,
       cor-bv-discontinuities-are-countable-and-of-first-kind,
       lem-jumps-of-the-variation-function,
       lem-riemann-stieltjes-refinement-estimate,
       def-riemann-stieltjes-sum-and-integral,
       def-bounded-variation-and-total-variation,
       def-finite-sum, lem-finite-sum-laws, lem-of-triangle-inequality,
       thm-cauchy-criterion-via-lub, def-partition-and-refinement]
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
    - title: "W. Rudin, Principles of Mathematical Analysis, Ch. 6, Theorem 6.10"
      url: "https://archive.org/details/principlesofmath00rudi"
pipeline_run: null
---

## Statement

Let $f,\alpha:[a,b]\to\mathbb R$ have bounded variation. If no point is a discontinuity of both functions, then $\int_a^b f\,d\alpha$ exists.

## Facts & Assumptions

**Given:** BV functions $f$ and $\alpha$ with disjoint discontinuity sets.

[L1] The discontinuity set $D_\alpha$ is at most countable ([[cor-bv-discontinuities-are-countable-and-of-first-kind]]).

[L2] A BV function can be approximated uniformly by step functions whose breakpoints avoid a prescribed countable set of its continuity points ([[lem-bv-functions-are-regulated]]).

[L3] Direct subtraction of two Stieltjes sums and the finite-sum triangle inequality give $|S_\alpha(f)-S_\alpha(g)|\le\lVert f-g\rVert_\infty\operatorname{Var}(\alpha)$ ([[def-riemann-stieltjes-sum-and-integral]], [[def-bounded-variation-and-total-variation]], [[def-finite-sum]], [[lem-finite-sum-laws]], [[lem-of-triangle-inequality]]).

[L4] Every Cauchy sequence of reals converges ([[thm-cauchy-criterion-via-lub]]).

[L5] If $\alpha$ is continuous at a point, its variation function is continuous there; refinement errors are bounded by local variation times local oscillation ([[lem-jumps-of-the-variation-function]], [[lem-riemann-stieltjes-refinement-estimate]]).

## Proof

**Proof technique:** direct.

1.1 By the no-common-discontinuity hypothesis, $f$ is continuous at every point of $D_\alpha$. For each $n\ge1$, [L1] and [L2] provide a finite step function $s_n$ with $\lVert f-s_n\rVert_\infty<1/n$ and all interior breakpoints outside $D_\alpha$. If an endpoint belongs to $D_\alpha$, continuity of $f$ there permits the value on the adjacent open component to be changed to $f$ at that endpoint while retaining the same bound after beginning with tolerance $1/(2n)$. Thus $s_n$ is continuous at every point of $D_\alpha$. [L1, L2]

2.1 Each $s_n$ is integrable with respect to $\alpha$. Its finitely many discontinuities are points where $\alpha$ is continuous by step 1.1. By [L5], choose disjoint neighborhoods of those points whose total local variation is small. Outside them $s_n$ is locally constant, while inside them [L5] bounds differences between fine sums by the small local variation times the finite oscillation of $s_n$. Hence the fine sums are Cauchy. Choose a sequence of uniform tagged sums with mesh tending to zero; [L4] gives its limit, and comparison with a sufficiently late member of this sequence shows that every sufficiently fine tagged sum has the same limit. [step 1.1, L4, L5]

3.1 Given $\varepsilon>0$, choose $n$ so that $2\operatorname{Var}_{[a,b]}(\alpha)/n<\varepsilon/2$ (the zero-variation case is immediate), and then choose a mesh bound making any two sums of $s_n$ differ by less than $\varepsilon/2$. By [L3], replacing $s_n$ by $f$ in either sum changes it by at most $\operatorname{Var}(\alpha)/n$. Hence all sufficiently fine sums of $f$ are Cauchy. Choose uniform tagged sums with mesh tending to zero; their sums form a Cauchy sequence and converge by [L4]. Comparing an arbitrary sufficiently fine sum with a late uniform sum proves convergence of the whole mesh family to that sequential limit, which is exactly the defining Stieltjes integral. [step 2.1, L3, L4] ∎
