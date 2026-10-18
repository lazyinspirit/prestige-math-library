---
id: thm-it-error-exponent-zero-above-capacity
kind: theorem
title: The error exponent is zero above finite-DMC capacity
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps: [def-it-reliability-function, def-discrete-memoryless-channel, def-discrete-memoryless-channel-information-capacity, thm-discrete-memoryless-channel-alphabet-scoped-strong-converse, def-fixed-length-channel-code-errors]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; the strong converse supplier uses only finite DMC laws and finite sums.
provenance:
  statement: literature-derived
  proof: ai-generated
proof_obligations:
  - Apply the actual average-error strong converse to optimal finite-block codes.
  - Convert error probability tending to one into both liminf and limsup error exponents equal to zero.
  - Keep this error exponent separate from a success-probability exponent.
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 22 §22.1"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: Chapter 22, §22.1; strong converse for finite DMCs.
    - title: MIT 6.441 Information Theory, Lecture 11, Spring 2010
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2010/10b2f1e66d2d5b1240c92cf51d8b7b8a_MIT6_441S10_lec11.pdf
      locator: §§1–4, PDF pp. 1–4; strong coding theorem and DMC code/error conventions.
---

## Statement

For every finite unconstrained DMC and every $R>C(W)$,
$$E^-_{\rm av}(R)=E^+_{\rm av}(R)=E^-_{\rm max}(R)=E^+_{\rm max}(R)=0.$$
These are error-probability exponents; no success-probability exponent is asserted.

## Facts & Assumptions

**Given:** A finite DMC $W$, $R>C(W)$, and $M_n=\lceil e^{nR}\rceil$.

[F1] [[thm-discrete-memoryless-channel-alphabet-scoped-strong-converse]] and [[def-fixed-length-channel-code-errors]]: for any code sequence with liminf rate above $C(W)$, average success tends to zero, so both average and maximal errors tend to one; the two criteria are the uniform-message average and largest message error.

[F2] [[def-it-reliability-function]]: $E_k^\pm(R)$ are the liminf and limsup of $-n^{-1}\ln P_k^*(n,M_n)$, with $-\ln0=+\infty$.

[F3] [[def-fixed-length-channel-code-errors]]: maximal error is at least average error for every code.

## Proof
1.1 For each $n$, choose a code attaining $P^*_{\rm av}(n,M_n)$; the finite code space makes such a minimizer exist. Its rate is $n^{-1}\ln M_n\to R>C(W)$, so [F1] implies $P^*_{\rm av}(n,M_n)\to1$. [F1, F2, given]

1.2 Choose likewise a code attaining $P^*_{\rm max}(n,M_n)$. Its average error is no larger than its maximal error, and [F1] forces its average error to tend to one. Therefore its maximal error, bounded above by one and below by that average error, also tends to one; hence $P^*_{\rm max}(n,M_n)\to1$. [F1, F2, F3, given, algebra]

2.1 If $p_n\to1$ with $0<p_n\le1$ eventually, then $-\ln p_n\to0$ and $n^{-1}(-\ln p_n)\to0$. Applying this to both optimal error sequences from steps 1.1 and 1.2 makes their liminf and limsup exponents all zero. [F2, step 1.1, step 1.2] ∎
