---
id: fs-continuity-of-the-derivative-implies-constant-rank
kind: false-statement
title: 'FALSE: continuity of the derivative implies constant rank'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-x-xy-has-nonconstant-rank-on-every-neighborhood-of-origin, thm-differential-rank-is-lower-semicontinuous]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, rank theorem discussion'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
    - title: 'L. W. Tu, An Introduction to Manifolds, Section 11.1'
      url: 'https://www.math.toronto.edu/~jeffrey/matd67/tu.pdf'
pipeline_run: null
---

## Statement

If a Euclidean map has continuous derivative, then its derivative has locally constant rank.

## Facts & Assumptions

**Given:** The polynomial map $f(x,y)=(x,xy)$.

[L1] Its derivative has continuous polynomial entries, rank $1$ on $x=0$, and rank $2$ on $x\ne0$; every neighbourhood of the origin meets both loci ([[ex-x-xy-has-nonconstant-rank-on-every-neighborhood-of-origin]]).

[L2] The correct general conclusion is lower semicontinuity: every rank-at-least-$r$ locus is open ([[thm-differential-rank-is-lower-semicontinuous]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], $Df$ is continuous but has two different ranks in every neighbourhood of the origin. [given, L1]

2.1 Hence continuity of the derivative does not imply locally constant rank. [step 1.1]

3.1 This does not contradict [L2]: the rank-$2$ locus $\{x\ne0\}$ is open, so rank jumps upward away from the vertical axis exactly as lower semicontinuity permits. [step 1.1, L2] ∎
