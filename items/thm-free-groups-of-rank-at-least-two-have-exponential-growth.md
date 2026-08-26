---
id: thm-free-groups-of-rank-at-least-two-have-exponential-growth
kind: theorem
title: "Free groups of rank at least two have exponential growth"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-word-length-in-a-free-group-with-respect-to-a-free-basis-is-reduced-word-length, def-growth-function-of-a-finitely-generated-group, def-polynomial-subexponential-exponential-and-intermediate-growth, def-rank-of-a-finite-rank-free-group, thm-free-groups-unique-up-to-unique-isomorphism, thm-reduced-words-form-the-free-group]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory, Sections 5.1-5.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "C. Drutu and M. Kapovich, Lectures on Geometric Group Theory, Chapter 5"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
pipeline_run: null
---

## Statement

Let $F_r$ be a free group of rank $r \ge 2$. Then $F_r$ has exponential
growth.

## Facts & Assumptions

**Given:** A free group $F_r$ of rank $r \ge 2$ together with a free basis $X$ of size $r$.

[L1] In the word metric defined by a free basis, word length is exactly reduced-word length ([[cor-word-length-in-a-free-group-with-respect-to-a-free-basis-is-reduced-word-length]]).

[L2] The growth function counts elements with bounded word length ([[def-growth-function-of-a-finitely-generated-group]]).

[L3] Exponential growth means that $a^n \preccurlyeq \beta_G$ for some real $a>1$ ([[def-polynomial-subexponential-exponential-and-intermediate-growth]]).

[L4] A free group of rank $r$ has a free basis with $r$ elements ([[def-rank-of-a-finite-rank-free-group]]).

[L5] Reduced words form a free group on the basis alphabet, and any two free groups on that alphabet are uniquely isomorphic compatibly with their generators; hence distinct reduced words represent distinct elements of $F_r$ ([[thm-reduced-words-form-the-free-group]], [[thm-free-groups-unique-up-to-unique-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 For each $n \ge 1$, the reduced words of length exactly $n$ on $X \cup X^{-1}$ number $2r(2r-1)^{n-1}$: there are $2r$ choices for the first letter and, after that, $2r-1$ choices at each step to avoid immediate cancellation. [L4, algebra]

2.1 By [L1] and [L5], those reduced words represent distinct elements of word length exactly $n$. Therefore the ball of radius $n$ contains at least $2r(2r-1)^{n-1}$ elements, so $\beta_{F_r,X}(n) \ge (2r-1)^n$ for every $n \ge 1$. [L1, L2, L5, step 1.1, algebra]

3.1 Because $r \ge 2$, the real number $a := 2r-1$ satisfies $a > 1$. Step 2.1 gives $a^n \le \beta_{F_r,X}(n)$ for all $n$, so $a^n \preccurlyeq \beta_{F_r,X}$ and [L3] makes the growth exponential. [L3, step 2.1] ∎
