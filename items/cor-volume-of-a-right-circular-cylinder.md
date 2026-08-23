---
id: cor-volume-of-a-right-circular-cylinder
kind: corollary
title: 'A right circular cylinder of radius $R$ and height $h$ has volume $\pi R^2h$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-volume-of-a-solid-of-revolution-by-discs, lem-integral-elementary-bounds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "Sigurd Angenent, Math 221 lecture notes, Chapter 8 §3"
      url: "https://people.math.wisc.edu/~angenent/Free-Lecture-Notes/free221.pdf"
pipeline_run: null
---

## Statement

A right circular cylinder of radius $R\ge0$ and height $h\ge0$ has volume $\pi R^2h$.

## Facts & Assumptions

**Given:** Nonnegative reals $R,h$, with the cylinder presented as the solid of revolution of the constant profile $R$ on $[0,h]$.

[F1] A solid of revolution with profile $f$ has volume $\pi\int_a^b f(x)^2\,dx$ ([[thm-volume-of-a-solid-of-revolution-by-discs]]).

## Proof

**Proof technique:** direct.

1.1 Apply [F1] to the constant profile $f(x)=R$ on $[0,h]$. [given, F1]

2.1 The integral of the constant $\pi R^2$ over an interval of length $h$ is $\pi R^2h$. This remains zero when $R=0$ or $h=0$. [step 1.1, algebra] ∎
