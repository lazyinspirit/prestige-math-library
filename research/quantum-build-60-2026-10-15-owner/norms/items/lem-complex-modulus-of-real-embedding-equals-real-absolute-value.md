---
id: lem-complex-modulus-of-real-embedding-equals-real-absolute-value
kind: lemma
title: "Complex modulus restricts to real absolute value"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-complex-numbers-and-arithmetic, def-complex-conjugate-real-imaginary-part-and-modulus, def-abs-value, lem-of-abs-value, thm-of-square-roots]
proof_strategy: direct
sources:
  references:
    - title: "Tomasz Kochanek, Functional analysis, Lecture 1, Definition 1.1 and Example 1.2"
      url: "https://www.impan.pl/~tkoch/FA_lecturenotes/lecture1.pdf"
---

## Statement

For every real $r$, its canonical complex embedding $\iota(r)=r+0i$ satisfies $|\iota(r)|_{\mathbb C}=|r|_{\mathbb R}$.

## Facts & Assumptions

**Given:** $r\in\mathbb R$ and the canonical embedding of [[def-complex-numbers-and-arithmetic]].

[F1] $|a+bi|_{\mathbb C}=\sqrt{a^2+b^2}$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F2] Real absolute value is nonnegative and $|r|_{\mathbb R}^2=r^2$ ([[def-abs-value]], [[lem-of-abs-value]]); a nonnegative real has a unique nonnegative square root ([[thm-of-square-roots]]).

## Proof

1.1 By [F1], $|\iota(r)|_{\mathbb C}=\sqrt{r^2}$, the nonnegative square root of $r^2+0^2$. [F1, algebra]

2.1 By [F2], $|r|_{\mathbb R}$ is another nonnegative square root of $r^2$. Uniqueness identifies it with step 1.1, including $r=0$. [F2, step 1.1] ∎
