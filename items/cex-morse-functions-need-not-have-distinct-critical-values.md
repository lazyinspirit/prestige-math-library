---
id: cex-morse-functions-need-not-have-distinct-critical-values
kind: counterexample
title: "A Morse function can have two different critical points with the same critical value"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-morse-function-and-excellent-morse-function, rem-morse-does-not-mean-distinct-critical-values]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct computation
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Shintaro Fushida-Hardy, Morse theory"
      url: "https://www.scribd.com/document/488533132/morse"
---

## Statement refuted

Every Morse function has pairwise distinct critical values.

## Facts & Assumptions

**Given:** The torus function $f([x],[y])=\cos(2\pi x)+\cos(2\pi y)$ on $T^2=\mathbb R^2/\mathbb Z^2$.

[F1] Morse and excellent Morse functions differ exactly by whether distinct critical points are allowed to share a critical value ([[def-morse-function-and-excellent-morse-function]]).

[L1] The A-page remark records that Morse does not by itself mean distinct critical values ([[rem-morse-does-not-mean-distinct-critical-values]]).

## Counterexample

**Proof technique:** direct computation.

1.1 The partial derivatives are $\partial f/\partial x=-2\pi\sin(2\pi x)$ and $\partial f/\partial y=-2\pi\sin(2\pi y)$, so the critical points are exactly the four points with $x,y\in\{0,\tfrac12\}$ modulo $\mathbb Z$. [given, algebra]

2.1 The Hessian is diagonal with entries $-4\pi^2\cos(2\pi x)$ and $-4\pi^2\cos(2\pi y)$. At each of the four critical points these entries are nonzero, so every critical point is nondegenerate. By [F1], the function $f$ is Morse. [F1, step 1.1, algebra]

3.1 The two saddle points $(0,\tfrac12)$ and $(\tfrac12,0)$ both have critical value $0$, so distinct critical points can share one critical level. This is exactly the boundary described in [L1], and by [F1] it shows that $f$ is not excellent. Therefore the displayed universal claim is false. [F1, L1, step 2.1, algebra] ∎
