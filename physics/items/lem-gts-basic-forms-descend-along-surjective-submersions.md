---
id: lem-gts-basic-forms-descend-along-surjective-submersions
kind: lemma
title: Basic forms descend along surjective submersions
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 0
proof_strategy: direct
deps:
  - def-smooth-differential-k-form
dependency_roles:
  def-smooth-differential-k-form: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: M. K. Murray, Bundle Gerbes, arXiv:dg-ga/9407015v1
      url: https://arxiv.org/pdf/dg-ga/9407015v1
      locator: Section 7, local descent of the Dixmier–Douady three-form, PDF pp. 11–12.
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $\pi:Y\to M$ be a surjective smooth submersion that admits local smooth sections. If $\alpha\in\Omega^k(Y)$ satisfies $\operatorname{pr}_1^*\alpha=\operatorname{pr}_2^*\alpha$ on the fiber product $Y\times_M Y$, then there is a unique $\beta\in\Omega^k(M)$ with $\pi^*\beta=\alpha$.

## Statement references

[[def-smooth-differential-k-form]]

## Facts & Assumptions

**Given:** A surjective smooth submersion $\pi:Y\to M$, local smooth sections, and a form $\alpha$ with equal pullbacks on $Y\times_M Y$.

[F1] [[def-smooth-differential-k-form]]: a smooth $k$-form is a smooth section of the exterior cotangent bundle, and smooth pullback is defined pointwise by the differential.

## Proof

1.1 Choose an open cover $(U_i)$ of $M$ and smooth sections $s_i:U_i\to Y$ with $\pi s_i=\operatorname{id}_{U_i}$. Define $\beta_i=s_i^*\alpha$. If $x\in U_i\cap U_j$, the map $(s_i,s_j):U_i\cap U_j\to Y\times_M Y$ is smooth and its two projections are $s_i$ and $s_j$. Pulling the assumed identity back along this map gives $\beta_i=\beta_j$ on $U_i\cap U_j$. [F1, given, construct]

2.1 The forms $\beta_i$ therefore glue to a unique smooth form $\beta$ on $M$. Pullback along $s_i$ gives $s_i^*\pi^*\beta=\beta_i=s_i^*\alpha$; for any $y\in\pi^{-1}(U_i)$, the pair $(y,s_i(\pi(y)))$ lies in $Y\times_M Y$, so the assumed identity implies $\alpha_y=(s_i\circ\pi)^*\alpha_y=\pi^*s_i^*\alpha_y=\pi^*\beta_y$. Thus $\pi^*\beta=\alpha$. If $\beta'$ also pulls back to $\alpha$, then $s_i^*\alpha=s_i^*\pi^*\beta'=\beta'$ on each $U_i$, proving uniqueness. [F1, step 1.1, given] ∎
