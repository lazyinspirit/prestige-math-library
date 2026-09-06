---
id: fs-projective-dimension-is-the-length-of-any-projective-resolution
kind: false-statement
title: "FALSE: projective dimension is the length of any projective resolution"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-projective-dimension-of-an-object, thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective]
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

FALSE: projective dimension is the length of any projective resolution

## Facts & Assumptions

**Given:** $M=\mathbb Z/n\mathbb Z$ with $n\ge2$ as a $\mathbb Z$-module.

## Refutation

**Proof technique:** direct.

1.1 The two-term resolution $0\to\mathbb Z\xrightarrow{n}\mathbb Z\to M\to0$ has length one, and $\operatorname{Ext}^1(M,\mathbb Z)\cong\mathbb Z/n\mathbb Z\ne0$, so the projective dimension of $M$ is exactly one. [given, algebra]

2.1 Yet $0\to\mathbb Z\xrightarrow{c\mapsto(0,c)}\mathbb Z^2\xrightarrow{(a,b)\mapsto na}\mathbb Z\to M\to0$ is also exact and consists of projectives, but has length two. Hence projective dimension is the least possible length, not the length of every resolution. [step 1.1, algebra] ∎
