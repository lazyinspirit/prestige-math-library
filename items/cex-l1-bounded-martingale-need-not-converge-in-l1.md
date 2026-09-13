---
id: cex-l1-bounded-martingale-need-not-converge-in-l1
kind: counterexample
title: An L1-bounded martingale need not converge in L1
status: draft
origin: pipeline
deps: [def-martingale-submartingale-and-supermartingale, def-conditional-expectation-given-a-sigma-algebra, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-axiom-of-choice]
proof_strategy: counterexample
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, martingale-convergence warnings in §§2.5 and 2.8", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Statement

Assume AC. On $([0,1],\mathcal B,\lambda)$ put $A_n=(0,2^{-n}]$ for $n\ge1$, let $\mathcal F_0=\{\varnothing,[0,1]\}$ and $\mathcal F_n=\sigma(A_1,\ldots,A_n)$, and define $M_0=1$ and $M_n=2^n1_{A_n}$ for $n\ge1$. Then $M$ is a nonnegative martingale with $\mathbb EM_n=1$ for every $n$, hence $\sup_n\mathbb E|M_n|=1$, but $M_n\to0$ almost surely and not in $L^1$.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[def-martingale-submartingale-and-supermartingale]] defines a martingale through conditional expectations.

[F2] [[def-conditional-expectation-given-a-sigma-algebra]] supplies the event-integral characterization of conditional expectation.

[F3] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]] evaluates the displayed simple variables.

[F4] [[def-axiom-of-choice]] is assumed because the conditional-expectation and martingale interfaces used here require it.

## Counterexample

1.1 The displayed process is nonnegative and $$\mathbb EM_n=2^n\lambda(A_n)=1$$ for $n\ge1$, while $\mathbb EM_0=1$. [F3]

2.1 For $n\ge1$, the atoms of $\mathcal F_n$ are $A_n$, the shells $A_j\setminus A_{j+1}$ for $1\le j<n$, and the outside atom $B=[0,1]\setminus A_1=\{0\}\cup(1/2,1]$. The singleton $\{0\}$ is not a separate atom of this sigma-algebra. On $A_n$, $A_{n+1}$ occupies half the measure and $$\frac1{\lambda(A_n)}\int_{A_n}M_{n+1}\,d\lambda =2^n=M_n|_{A_n};$$ on every shell and on $B$, both $M_n$ and $M_{n+1}$ vanish. For $n=0$ the same calculation uses total mean one. Thus the event-integral characterization in F2 and the definition in F1 give $\mathbb E[M_{n+1}\mid\mathcal F_n]=M_n$. [F1, F2, step 1.1]

3.1 The sets $A_n$ decrease to the empty set, so $M_n(x)$ is eventually zero for every $x\in[0,1]$ and $M_n\to0$ pointwise. But $\|M_n-0\|_1=1$ for every $n$. Hence the martingale is $L^1$-bounded without $L^1$ convergence. AC is used only as recorded in F4. [F3, F4, step 1.1, step 2.1] ∎
