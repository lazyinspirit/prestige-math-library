---
id: ex-an-infinite-separated-subset-of-the-unit-sphere
kind: example
title: "An infinite separated subset of the unit sphere"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-dependent-choice-riesz-separated-unit-sequence]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-29
---

## Example

Assume Dependent Choice. Let $X$ be a normed space that is not the span of any
finite list. Then the unit sphere of $X$ contains an infinite subset whose
distinct points are all more than $1/2$ apart.

## Facts & Assumptions

**Given:** Dependent Choice and a normed space $X$ that is not the span of any
finite list.

[L1] Under these hypotheses, for every $0<\alpha<1$ there is a sequence of unit
vectors $(x_n)$ with $\|x_n-x_m\|>\alpha$ for $n\ne m$
([[lem-dependent-choice-riesz-separated-unit-sequence]]).

## Verification

**Proof technique:** direct.

1.1 Apply [L1] with $\alpha=1/2$. This gives a sequence $(x_n)$ of unit vectors such that $\|x_n-x_m\|>1/2$ whenever $n\ne m$. [L1]

2.1 The set $\{x_n:n\in\mathbb N\}$ is therefore an infinite subset of the unit sphere whose distinct points are pairwise more than $1/2$ apart. [step 1.1] ∎
