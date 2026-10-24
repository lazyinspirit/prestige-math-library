---
id: fs-bounded-variation-implies-absolute-continuity
kind: false-statement
title: "FALSE: every function of bounded variation is absolutely continuous"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-cantor-function-is-continuous, def-absolutely-continuous-function, def-bounded-variation-and-total-variation, def-cantor-function, def-cantor-set, def-monotone-function, lem-geometric-sequence-null, thm-cantor-function-properties, thm-cantor-set-ternary-description]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Christopher Heil, Absolute Continuity and the Banach-Zaretsky Theorem"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
    - title: "A. M. Bruckner, J. B. Bruckner, and B. S. Thomson, Real Analysis, 2nd ed."
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
---

## Statement

Every function of bounded variation on a compact interval is absolutely
continuous.

## Facts & Assumptions

**Given:** The statement above.

[A1] We refute it with the Cantor function.

## Refutation

**Proof technique:** direct.

1.1 The Cantor function $c$ is nondecreasing by [[thm-cantor-function-properties]], so for every partition $0=x_0<\cdots<x_m=1$ the variation sum telescopes to $\sum_{j=1}^{m} |c(x_j)-c(x_{j-1})| = \sum_{j=1}^{m} \bigl(c(x_j)-c(x_{j-1})\bigr) = c(1)-c(0)=1$. Hence $c$ has bounded variation. [given, algebra]

2.1 Iterating the two affine branches in [[def-cantor-set]], the stage-$n$ set consists of $2^n$ pairwise disjoint closed intervals indexed by the $n$-digit words in $\{0,2\}^n$, each of length $3^{-n}$. Their total length is therefore $(2/3)^n$, which tends to $0$ by [[lem-geometric-sequence-null]]. For the interval indexed by a word $w$, its endpoints have ternary digits $w$ followed respectively by all $0$'s and all $2$'s ([[thm-cantor-set-ternary-description]]). The identity $c=\gamma$ on the Cantor set from claim 1 of [[thm-cantor-function-properties]], together with the binary-digit formula in [[def-cantor-function]], therefore gives endpoint increment $\sum_{k\ge n}2^{-k-1}=2^{-n}$. Thus the sum of the endpoint increments over the stage-$n$ intervals is always $2^n2^{-n}=1$. The total input length can be arbitrarily small while this increment sum stays $1$, so $c$ fails the defining $\varepsilon$-$\delta$ condition of [[def-absolutely-continuous-function]]. Hence $c$ is not absolutely continuous and the statement is false. [step 1.1, algebra] ∎
