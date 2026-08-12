---
id: ex-dense-jump-integrand-with-dense-nondifferentiability
kind: example
title: "A bounded increasing integrand discontinuous at every rational has an integral function nondifferentiable at every rational in $(0,1)$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-rationals-countable, lem-q-and-irrationals-dense-r, thm-monotone-with-prescribed-discontinuity-set, thm-monotone-implies-integrable, thm-one-sided-ftc-at-points-with-one-sided-limits, thm-ftc-first-part]
justified_by: []
aliases: []
landmark: false
proof_strategy: specialization
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I & II, Exercise 5.3.12"
      url: "https://www.jirka.org/ra/html/sec_ftc.html"
pipeline_run: null
---

## Example

There is a bounded nondecreasing function $f:\mathbb R\to[0,1]$ whose discontinuity set is exactly $\mathbb Q$. On every nondegenerate compact interval $[a,b]$, the restriction of $f$ is Riemann integrable. Its integral function $F(x)=\int_a^x f$ is differentiable at every irrational point, but at every rational $c\in(a,b)$ its left and right derivatives exist and are unequal. Thus $F$ is nondifferentiable on the dense countable set $\mathbb Q\cap(a,b)$.

## Facts & Assumptions

**Given:** A nondegenerate interval $[a,b]$.

[L1] The rationals are countably infinite ([[thm-rationals-countable]]).

[L2] For every at-most-countable set $E$ there is a bounded nondecreasing function whose discontinuity set is exactly $E$, with unequal finite left and right limits at every point of $E$ ([[thm-monotone-with-prescribed-discontinuity-set]]).

[L3] Every monotone function on a compact interval is bounded and Riemann integrable ([[thm-monotone-implies-integrable]]).

[L4] At a continuity point the integral function has derivative equal to the integrand ([[thm-ftc-first-part]]); at a point with one-sided limits, its one-sided derivatives equal those limits ([[thm-one-sided-ftc-at-points-with-one-sided-limits]]).

[L5] The rationals are dense in the reals ([[lem-q-and-irrationals-dense-r]]).

## Verification

**Proof technique:** specialization.

1.1 Apply [L2] to $E=\mathbb Q$, which is permitted by [L1], and call the resulting function $f$. [L1, L2]

2.1 Its restriction to $[a,b]$ is nondecreasing and therefore integrable by [L3]. [step 1.1, L3]

2.2 At every irrational point of $[a,b]$, $f$ is continuous, so [L4] gives $F'=f$. [step 1.1, L4]

2.3 At every rational $c\in(a,b)$, [L2] gives unequal left and right limits. By [L4] these are the left and right derivatives of $F$, so the two-sided derivative does not exist. [step 1.1, L2, L4]

3.1 The rational points in $(a,b)$ are countable by [L1] and dense in every nondegenerate real interval by [L5], so the asserted nondifferentiability set is dense and countable. [step 2.3, L1, L5] ∎
