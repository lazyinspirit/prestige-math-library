---
id: ex-cohomological-dimension-of-the-trivial-group-and-of-an-infinite-cyclic-group
kind: example
title: 'Cohomological dimensions of $1$ and $\mathbb Z$'
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cohomological-dimension-of-a-group, thm-group-cohomological-dimension-is-detected-by-cohomology-vanishing]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Löh, §4.2.1"
      url: "https://loeh.app.ur.de/teaching/grouphom_ss19/lecture_notes.pdf"
---

## Example

$\operatorname{cd}_{\mathbb Z}(1)=0$ and $\operatorname{cd}_{\mathbb Z}(\mathbb Z)=1$.

## Verification

**Given:** $\mathbb Z[\mathbb Z]=\mathbb Z[t,t^{-1}]$.

1.1 The trivial module for $1$ is free, so its projective dimension is zero. For $\mathbb Z$, $0\to\mathbb Z[t,t^{-1}]\xrightarrow{t-1}\mathbb Z[t,t^{-1}]\to\mathbb Z\to0$ is a free resolution. [given]

2.1 With trivial coefficients $\mathbb Z$, applying Hom sends $t-1$ to zero, so $H^1(\mathbb Z;\mathbb Z)=\mathbb Z\ne0$. Hence the resolution length one is minimal. [step 1.1] ∎
