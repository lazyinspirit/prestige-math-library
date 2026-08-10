---
id: thm-riemann-stieltjes-existence-bv-no-common-discontinuities
kind: theorem
title: "Two bounded-variation functions with no common discontinuity are Riemann–Stieltjes integrable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-bv-functions-are-regulated,
       cor-bv-discontinuities-are-countable-and-of-first-kind,
       thm-riemann-stieltjes-existence-finitely-discontinuous,
       cor-riemann-stieltjes-integral-bound,
       def-riemann-stieltjes-sum-and-integral,
       def-bounded-variation-and-total-variation,
       thm-cauchy-criterion-via-lub]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
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

[L3] Stieltjes sums satisfy $|S_\alpha(f)-S_\alpha(g)|\le\lVert f-g\rVert_\infty\operatorname{Var}(\alpha)$ ([[cor-riemann-stieltjes-integral-bound]]).

[L4] A Cauchy net in $\mathbb R$ converges ([[thm-cauchy-criterion-via-lub]]).

## Proof

**Proof technique:** direct.

1.1 By the no-common-discontinuity hypothesis, $f$ is continuous at every point of $D_\alpha$. For each $n\ge1$, [L1] and [L2] provide a finite step function $s_n$ with $\lVert f-s_n\rVert_\infty<1/n$ and all interior breakpoints outside $D_\alpha$. [L1, L2]

1.2 Each $s_n$ is integrable with respect to $\alpha$. Indeed, after a partition contains its breakpoints, $s_n$ is constant on every remaining open subinterval; the only tag-dependent terms are adjacent to a breakpoint, and continuity of $\alpha$ there makes their total contribution tend to zero as the mesh tends to zero. [step 1.1]

2.1 Given $\varepsilon>0$, choose $n$ so that $2\operatorname{Var}_{[a,b]}(\alpha)/n<\varepsilon/2$ (the zero-variation case is immediate), and then choose a mesh bound making any two sums of $s_n$ differ by less than $\varepsilon/2$. By [L3], replacing $s_n$ by $f$ in either sum changes it by at most $\operatorname{Var}(\alpha)/n$. Hence all sufficiently fine sums of $f$ are Cauchy. Completeness [L4] and the definition of the Stieltjes integral give the claimed integral. [step 1.2, L3, L4] ∎
