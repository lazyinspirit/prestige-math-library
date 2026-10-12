---
id: cor-volume-of-a-closed-three-ball
kind: corollary
title: 'A closed three-dimensional ball of radius $r\ge0$ has volume $4\pi r^3/3$'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-volume-of-a-solid-of-revolution-by-discs, def-euclidean-spheres-and-closed-balls, def-jordan-inner-and-outer-content, lem-derivative-of-a-power, thm-ftc-second-part]
justified_by: []
aliases: []
landmark: true
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

## Statement

For $r\ge0$, put $\overline B_3(0,r):=\{x\in\mathbb R^3:\lVert x\rVert_2\le r\}$, extending the positive-radius notation of [[def-euclidean-spheres-and-closed-balls]] to $r=0$. This closed three-dimensional ball has volume $4\pi r^3/3$.

## Facts & Assumptions

**Given:** A radius $r\ge0$ and the closed ball $\overline B_3(0,r)$ defined in the Statement.

[F1] A solid of revolution with profile $f$ has volume $\pi\int_a^b f(x)^2\,dx$ ([[thm-volume-of-a-solid-of-revolution-by-discs]]).

[F2] If an integrable function is a derivative $G'$ on $[a,b]$, then its integral is $G(b)-G(a)$ ([[thm-ftc-second-part]]).

## Proof

**Proof technique:** direct.

1.1 If $r=0$, the ball is the singleton $\{0\}$, which is covered by a cube of arbitrarily small volume; its content and the displayed formula are both zero. [given, cases]

1.2 Suppose $r>0$. The ball is the solid of revolution of $f(x)=\sqrt{r^2-x^2}$ on $[-r,r]$, so [F1] gives $\operatorname{cont}(\overline B_3(0,r))=\pi\int_{-r}^{r}(r^2-x^2)\,dx$. [given, F1, cases]

2.1 A primitive is $G(x)=\pi(r^2x-x^3/3)$; by [F2], $G(r)-G(-r)=4\pi r^3/3$. [step 1.2, F2, algebra]

3.1 Steps 1.1 and 2.1 cover respectively $r=0$ and $r>0$, so the formula holds for every $r\ge0$. [step 1.1, step 2.1, cases-exhaustive] ∎

## Remarks

The independent Cavalieri comparison is [[thm-volume-of-a-closed-three-ball-cavalieri-proof]].
