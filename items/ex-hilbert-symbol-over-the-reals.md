---
id: ex-hilbert-symbol-over-the-reals
kind: example
title: "Hilbert symbols over the real numbers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-equivalent-definitions-of-the-hilbert-symbol, thm-real-hilbert-symbol-formula]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 10"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes10.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Example

Over $\mathbb R$, the Hilbert symbol depends only on the signs of its two
arguments:

$$
(1,1)_\infty=(1,-1)_\infty=(-1,1)_\infty=1,\qquad (-1,-1)_\infty=-1.
$$

## Facts & Assumptions

**Given:** The real Hilbert-symbol formula and the equivalent solvability/norm
interpretation ([[thm-real-hilbert-symbol-formula]],
[[lem-equivalent-definitions-of-the-hilbert-symbol]]).

## Verification

**Proof technique:** direct.

1.1 The theorem [[thm-real-hilbert-symbol-formula]] gives value $1$ whenever at least one argument is positive, so $(1,1)_\infty=(1,-1)_\infty=(-1,1)_\infty=1$. [given, algebra]

2.1 The same theorem gives $(-1,-1)_\infty=-1$. Equivalently, the norm form from $\mathbb C=\mathbb R(\sqrt{-1})$ is $u^2+v^2$, which never represents $-1$ over $\mathbb R$, matching [[lem-equivalent-definitions-of-the-hilbert-symbol]]. [step 1.1, given, algebra] ∎
