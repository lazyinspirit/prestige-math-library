---
id: thm-incidence-algebra-invertibility-criterion
kind: theorem
title: "An incidence function is convolution-invertible if and only if every diagonal value is a unit"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-incidence-convolution-inverses-by-recursion, def-delta-and-zeta-incidence-functions, def-invertible-element, lem-ring-units-form-a-group]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "F. Gotti, Incidence Algebras, MIT 18.211 notes"
      url: "https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/38.%20Mobius%20Inversion%20Formula/Incidence%20Algebras.pdf"
    - title: "Y. Guan and Y. Zhang, Additive Biderivations of Incidence Algebras, §2.1"
      url: "https://arxiv.org/abs/2412.18049"
    - title: "Hameister–Rao–Simpson, Proposition 2.8"
      url: "https://www-users.cse.umn.edu/~reiner/REU/HameisterRaoSimpson2017.pdf"
pipeline_run: null
---

## Statement

Let $P$ be any locally finite poset, possibly infinite, let $R$ be a commutative ring, and let $f\in I(P,R)$. Then $f$ is invertible under convolution if and only if $f(x,x)$ is a unit of $R$ for every $x\in P$.

## Facts & Assumptions

**Given:** A locally finite poset $P$, a commutative ring $R$, and $f\in I(P,R)$.

[L1] If every diagonal value of $f$ is a unit, the recursive interval formulas construct a two-sided convolution inverse ([[lem-incidence-convolution-inverses-by-recursion]]).

[F1] An invertible element has a two-sided inverse ([[def-invertible-element]]), and a unit in a ring has a unique inverse ([[lem-ring-units-form-a-group]]).

[F2] The convolution identity satisfies $\delta(x,x)=1_R$ ([[def-delta-and-zeta-incidence-functions]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $f$ has a convolution inverse $g$. Evaluating $f*g=\delta$ at $(x,x)$ gives $f(x,x)g(x,x)=1_R$, and evaluating $g*f=\delta$ gives $g(x,x)f(x,x)=1_R$. Thus $f(x,x)$ is a unit for every $x$. [F1, F2]

1.2 Conversely, if every $f(x,x)$ is a unit, [L1] constructs a two-sided convolution inverse of $f$. [L1]

2.1 Steps 1.1 and 1.2 prove both directions of the criterion. [step 1.1, step 1.2] ∎
