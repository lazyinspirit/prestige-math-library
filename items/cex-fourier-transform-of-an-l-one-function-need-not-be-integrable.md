---
id: cex-fourier-transform-of-an-l-one-function-need-not-be-integrable
kind: counterexample
title: An L1 transform need not be integrable
deps: ["ex-fourier-transform-of-an-interval-indicator", "def-countable-choice"]
status: draft
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis (2017)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
      locator: §14.1
---

## Statement refuted

Every integrable function on $\mathbb R$ has an integrable Fourier transform.

## Facts & Assumptions

**Given:** [[def-countable-choice]].

[F1] The transform of $f=\mathbf1_{[-1/2,1/2]}$ is $\sin(\pi\xi)/(\pi\xi)$, with value one at zero ([[ex-fourier-transform-of-an-interval-indicator]]).

## Counterexample

1.1 Take the f in F1, whose integral and norm are one. For integer $k\ge1$ and $\xi\in[k+1/6,k+5/6]$, $|\sin(\pi\xi)|\ge1/2$. Consequently $|\widehat f(\xi)|\ge1/[2\pi(k+1)]$ on an interval of length $2/3$, and its integral there is at least $1/[3\pi(k+1)]$. [F1, given]

2.1 These intervals are disjoint. The sum of their lower bounds diverges: the block $2^m\le k<2^{m+1}$ contributes at least $2^m/[3\pi2^{m+1}]=1/(6\pi)$. Hence $\int|\widehat f|=\infty$, despite $\|f\|_1=1$. The failure concerns absolute integrability, not continuity or decay of the transform. Countable choice is inherited from F1 and Lebesgue interval measure. [F1, step 1.1] ∎
