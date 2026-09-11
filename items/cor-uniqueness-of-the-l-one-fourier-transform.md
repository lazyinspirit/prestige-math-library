---
id: cor-uniqueness-of-the-l-one-fourier-transform
kind: corollary
title: Uniqueness of the L1 Fourier transform
deps: ["thm-l-one-fourier-inversion", "thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions", "def-countable-choice"]
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
      locator: Theorem 14.7
---

## Statement

Assume countable choice. If $f,g\in L^1(\mathbb R^n;\mathbb C)$ and $\widehat f=\widehat g$, then $f=g$ almost everywhere. Equality of the transforms almost everywhere already suffices.

## Facts & Assumptions

**Given:** $n\ge1$, the stated inputs and [[def-countable-choice]].

[F1] The transform is linear and continuous as a function of frequency ([[thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]]).

[F2] A function and its integrable transform obey inversion almost everywhere ([[thm-l-one-fourier-inversion]]).

## Proof

1.1 Set $h=f-g$. By linearity, $\widehat h=0$. If equality was given only almost everywhere, continuity still implies this everywhere: a nonzero value would remain bounded away from zero on an open ball, which contains a positive-volume box and cannot be null. Thus the transform of h is the zero integrable function. [F1, given]

2.1 F2 applies to h, since both h and its zero transform are integrable. It gives $h(x)=\int0\,d\xi=0$ almost everywhere, so $f=g$ as classes. Countable choice is inherited from inversion (and the Euclidean measure interface in the optional almost-everywhere hypothesis). [F2, step 1.1] ∎
