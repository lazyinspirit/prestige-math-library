---
id: ex-temperley-lieb-spencer-support-digits-eleven
kind: example
title: "The Spencer support set for rank label eleven in characteristic three"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-temperley-lieb-spencer-digit-support
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Robert A. Spencer, The Modular Temperley-Lieb Algebra"
      url: "https://arxiv.org/pdf/2011.01328"
      locator: "§§2.3 and 8, PDF pp. 7–8 and 22–24: the digit expansion and support-set formula."
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 2, §2, printed pp. 12–16: cellular decomposition data require a separate theorem; no decomposition conclusion is used in this arithmetic example."
---

## Example

In a field of characteristic $3$ with loop parameter $\delta=2$, the recurrence quantum characteristic is $\ell=3$. For rank label $N=11$, Spencer's support set is $\{11,5\}$.

## Facts & Assumptions

**Given:** $\operatorname{char}K=3$, $\delta=2\in K$, $\ell=3$, and $N=11$.

[F1] The recurrence is $[0]=0$, $[1]=1$, $[r+1]=\delta[r]-[r-1]$, and $\ell$ is the least positive index with $[\ell]=0$ ([[def-temperley-lieb-quantum-integers-and-quantum-characteristic]]).

[F2] If $\ell<\infty$, the digits are those of $N+1$ in the scales $s_0=1$, $s_i=\ell P^{i-1}$, and the support set uses a positive top sign and arbitrary lower signs ([[def-temperley-lieb-spencer-digit-support]]).

## Verification

**Given:** $K$ has characteristic $3$, $\delta=2$, and $N=11$.

1.1 In $K$, $[1]=1$, $[2]=2$, and $[3]=2\cdot2-1=3=0$, so the least positive vanishing index is $\ell=3$. Here $P=3$, and the scales are $s_0=1$, $s_1=3$, $s_2=9$. [F1, given, algebra]

2.1 The digits of $N+1=12$ are $N_0=0$, $N_1=1$, $N_2=1$, because $12=0\cdot1+1\cdot3+1\cdot9$. With highest index $2$, the support values are $1\cdot9\pm1\cdot3\pm0\cdot1-1$, namely $11$ and $5$. Both are nonnegative, so $\operatorname{Supp}_{3,3}(11)=\{11,5\}$. [F2, given, step 1.1, algebra]

3.1 This computation determines only the set in the definition; identifying its elements with actual composition factors requires the separate Spencer decomposition theorem and is not asserted by this example. [F2, step 2.1] ∎
