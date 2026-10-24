---
id: ex-cylinder-and-cone-volume-computations
kind: example
title: 'A radius-$2$, height-$3$ cylinder and cone have volumes $12\pi$ and $4\pi$'
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-volume-of-a-right-circular-cylinder, cor-volume-of-a-right-circular-cone]
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
    - title: "Sigurd Angenent, Math 221 lecture notes, Chapter 8 §3"
      url: "https://people.math.wisc.edu/~angenent/Free-Lecture-Notes/free221.pdf"
pipeline_run: null
---

## Example

A right circular cylinder and a right circular cone both have radius $2$ and height $3$. Their volumes are respectively $12\pi$ and $4\pi$, so the cone has one third of the cylinder's volume.

## Facts & Assumptions

**Given:** Radius $R=2$ and height $h=3$.

[F1] A right circular cylinder of radius $R\ge0$ and height $h\ge0$ has volume $\pi R^2h$ ([[cor-volume-of-a-right-circular-cylinder]]).

[F2] A right circular cone of radius $R\ge0$ and height $h\ge0$ has volume $\pi R^2h/3$ ([[cor-volume-of-a-right-circular-cone]]).

## Verification

**Proof technique:** direct.

1.1 By [F1], the cylinder volume is $\pi\cdot2^2\cdot3=12\pi$. [F1, algebra]

2.1 By [F2], the cone volume is $\pi\cdot2^2\cdot3/3=4\pi=(12\pi)/3$. [F2, step 1.1, algebra] ∎
