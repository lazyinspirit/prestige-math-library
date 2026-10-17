---
id: ex-box-muller-zero-endpoint
kind: example
title: "A raw zero uniform breaks Box–Muller but the midpoint avoids it"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - lem-box-muller-product-density-and-radius-moment
  - thm-independent-fair-bit-streams-produce-uniforms
  - thm-midpoint-bit-stream-coupling-and-error
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Luc Devroye, Non-Uniform Random Variate Generation, Chapter V §4.4"
      url: "https://luc.devroye.org/chapter_five.pdf"
    - title: "E. M. Raz, Lecture Notes in Probability, Chapter 5, Exercise 5.2"
      url: "https://ma.huji.ac.il/~razk/Teaching/LectureNotes/LectureNotesProbability.pdf"
---

## Example

A raw grid value $K/2^b$ can equal zero, so the Box–Muller logarithm is undefined on that input. Its midpoint version $(K+1/2)2^{-b}$ is always strictly positive; an ideal uniform input equals zero only on a null event.

## Facts & Assumptions

**Given:** An integer $K$ uniform on $\{0,\ldots,2^b-1\}$ and the Box–Muller radius formula $r(u)=\sqrt{-2\log u}$ for $u>0$.

[F1] The midpoint value is $(K+1/2)2^{-b}$ and belongs to $(0,1)$. [[thm-midpoint-bit-stream-coupling-and-error]]

[F2] An ideal bit-stream uniform has CDF $t$ on $[0,1]$ and hence assigns probability zero to $\{0\}$. [[thm-independent-fair-bit-streams-produce-uniforms]]

[F3] For $0<u<1$, the exact Box–Muller reference radius is $r(u)=\sqrt{-2\log u}$. [[lem-box-muller-product-density-and-radius-moment]]

[A1] The countable fair-bit product supplying [F2] assumes Countable Choice and Dependent Choice. [[def-countable-choice]], [[def-dependent-choice]]

## Verification

1.1 The raw endpoint event is exactly $K=0$, which has probability $2^{-b}$; the radius expression [F3] has an undefined logarithm at that input. [given, F3, algebra]

2.1 By [F1], the midpoint input is at least $2^{-b-1}>0$ and is less than $1$, so its logarithm is finite. By [F2], the ideal stream hits $0$ with probability zero; a software interface still needs an explicit endpoint convention if it accepts closed-interval inputs. [F1, F2, F3, A1, algebra] ∎
