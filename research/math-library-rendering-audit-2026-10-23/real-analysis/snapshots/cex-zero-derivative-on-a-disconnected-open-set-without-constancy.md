---
id: cex-zero-derivative-on-a-disconnected-open-set-without-constancy
kind: counterexample
title: "Zero derivative need not give constancy on a disconnected open set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-total-derivative-in-euclidean-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "S. Cañez, Northwestern Math 320-2 lecture notes"
      url: "https://sites.math.northwestern.edu/~scanez/courses/320/notes/lecture-notes-320-2.pdf"
pipeline_run: null
---

## Statement refuted

If a differentiable real function has derivative zero at every point of an open domain, then it is constant on that domain.

The counterexample below establishes the true witness clause: The total derivative of $f$ is zero at every point of $U$, but $f$ is not constant on $U$.

## Facts & Assumptions

**Given:** Let $U=(-2,-1)\cup(1,2)$ and define $f:U\to\mathbb R$ to equal $1$ on $(-2,-1)$ and $-1$ on $(1,2)$.

[L1] The total derivative $Df(a)$ is the linear map whose remainder in the first-order approximation is little-oh of the displacement ([[def-total-derivative-in-euclidean-space]]).

## Counterexample

**Proof technique:** direct.

1.1 Every point of $U$ has a neighbourhood contained in exactly one component, and $f$ is constant there. The zero linear map therefore leaves a zero remainder in [L1], so $Df(a)=0$ for every $a\in U$. [L1, given]

2.1 The values at $-3/2$ and $3/2$ are respectively $1$ and $-1$. Thus the total derivative of $f$ is zero at every point of $U$, but $f$ is not constant on $U$. [step 1.1, given] ∎
