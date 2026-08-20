---
id: fs-a-pointwise-bounded-sequence-of-continuous-functions-has-a-uniformly-convergent-subsequence
kind: false-statement
title: "FALSE: every pointwise bounded sequence of continuous functions has a uniformly convergent subsequence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-sine-harmonics-pointwise-bounded-without-uniform-subsequence,
       thm-sine-and-cosine-derivatives,
       cor-differentiable-implies-continuous,
       thm-algebra-of-continuous-functions,
       thm-composition-of-continuous-functions,
       thm-heine-borel-r,
       def-pi-via-first-positive-cosine-zero,
       thm-cosine-has-a-smallest-positive-zero]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John Hutchinson, Introduction to Analysis, §15.7, Remark 15.7.2"
      url: "https://maths-people.anu.edu.au/~john/Assets/Analysis%201.pdf"
pipeline_run: null
---

## Statement

**False claim:** every pointwise bounded sequence of continuous real functions
on a compact interval has a uniformly convergent subsequence.

## Facts & Assumptions

**Given:** The universal claim in the Statement.

[L1] For $f_k(x)=\sin((k+1)x)$ on $[0,\pi]$, the sequence $(f_k)$ is uniformly bounded, is not equicontinuous, and has no uniformly convergent subsequence ([[ex-sine-harmonics-pointwise-bounded-without-uniform-subsequence]]).

[L2] Sine is continuous, affine real functions are continuous, and composites of continuous real functions are continuous ([[thm-sine-and-cosine-derivatives]], [[cor-differentiable-implies-continuous]], [[thm-algebra-of-continuous-functions]], claim 5, [[thm-composition-of-continuous-functions]]).

[L3] The number $\pi=2\gamma$ is positive because the smallest positive zero of cosine satisfies $\gamma\in(0,2)$, and every closed bounded interval in $\mathbb R$ is compact ([[def-pi-via-first-positive-cosine-zero]], [[thm-cosine-has-a-smallest-positive-zero]], [[thm-heine-borel-r]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that every pointwise bounded sequence of continuous real functions on a compact interval has a uniformly convergent subsequence. [assume-contra]

1.2 Each function in [L1] is continuous by [L2], and the sequence is uniformly bounded by [L1], hence pointwise bounded, on the compact interval $[0,\pi]$ from [L3]. [L1, L2, L3]

2.1 The assumed claim gives this sequence a uniformly convergent subsequence, contradicting [L1]. Therefore the claim is false; the missing Arzelà–Ascoli hypothesis is equicontinuity. [step 1.1, step 1.2, L1, discharge-contradiction] ∎
