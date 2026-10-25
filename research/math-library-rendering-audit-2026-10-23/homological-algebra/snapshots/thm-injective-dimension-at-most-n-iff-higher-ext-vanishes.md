---
id: thm-injective-dimension-at-most-n-iff-higher-ext-vanishes
kind: theorem
title: "Injective dimension at most n iff higher Ext vanishes"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-injective-dimension-of-an-object, thm-ext-dimension-shifting-in-the-second-variable, prop-positive-ext-vanishes-on-an-injective-second-variable]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement

Assume enough injectives. For an object $N$ and $n\geq0$, $\operatorname{id}(N)\leq n$ if and only if $\operatorname{Ext}^k(M,N)=0$ for every object $M$ and every $k>n$.

## Facts & Assumptions

**Given:** An object $N$, an integer $n\geq0$, and enough injectives.

## Proof

**Proof technique:** direct.

1.1 If $\operatorname{id}(N)\leq n$, the $n$th cosyzygy is injective. Repeated second-variable shifting from [[thm-ext-dimension-shifting-in-the-second-variable]] reduces every $\operatorname{Ext}^k(M,N)$ with $k>n$ to positive Ext into that injective cosyzygy, which vanishes by [[prop-positive-ext-vanishes-on-an-injective-second-variable]]. [given, construct]

2.1 Conversely, repeated shifting makes $\operatorname{Ext}^1(M,\Sigma^nN)$ vanish for every $M$. The defining injective-dimension convention in [[def-injective-dimension-of-an-object]] and the splitting criterion for the final cosyzygy show it is injective, so the chosen resolution has length at most $n$. [step 1.1, algebra] ∎
