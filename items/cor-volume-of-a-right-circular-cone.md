---
id: cor-volume-of-a-right-circular-cone
kind: corollary
title: 'A right circular cone of radius $R$ and height $h$ has volume $\pi R^2h/3$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-volume-of-a-solid-of-revolution-by-discs, lem-derivative-of-a-power, thm-ftc-second-part]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sigurd Angenent, Math 221 lecture notes, Chapter 8 §3"
      url: "https://people.math.wisc.edu/~angenent/Free-Lecture-Notes/free221.pdf"
pipeline_run: null
---

## Statement

A right circular cone of radius $R\ge0$ and height $h\ge0$ has volume $\pi R^2h/3$.

## Facts & Assumptions

**Given:** Nonnegative reals $R,h$ and a right circular cone.

[F1] A solid of revolution with profile $f$ has volume $\pi\int_a^b f(x)^2\,dx$ ([[thm-volume-of-a-solid-of-revolution-by-discs]]).

[F2] If an integrable function is a derivative $G'$ on $[a,b]$, then its integral is $G(b)-G(a)$ ([[thm-ftc-second-part]]).

## Proof

**Proof technique:** direct.

1.1 If $h=0$ or $R=0$, the cone is degenerate and both sides are zero. Otherwise apply [F1] to $f(x)=Rx/h$ on $[0,h]$. [given, F1, cases]

2.1 The function $G(x)=\pi R^2x^3/(3h^2)$ has derivative $\pi R^2x^2/h^2$, so [F2] evaluates the volume as $G(h)-G(0)=\pi R^2h/3$. [step 1.1, F2, algebra]

3.1 The positive-height computation and the zero-parameter case together prove the formula for all $R,h\ge0$. [step 1.1, step 2.1, cases-exhaustive] ∎
