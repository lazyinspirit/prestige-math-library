---
id: thm-levy-upward-convergence-of-conditional-expectations
kind: theorem
title: Levy upward convergence of conditional expectations
status: draft
origin: pipeline
deps: [lem-conditional-expectation-process-is-a-martingale, thm-uniform-integrability-of-conditional-expectations-of-one-variable, thm-closed-martingale-characterization, thm-monotone-class, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, Corollary 2.24 and proof, p. 16", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Statement

Assume AC. If $(\mathcal F_n)$ is increasing, $\mathcal F_\infty=\sigma(\bigcup_n\mathcal F_n)$, and $X\in L^1$, then
$$\mathbb E[X\mid\mathcal F_n]\longrightarrow\mathbb E[X\mid\mathcal F_\infty]$$
almost surely and in $L^1$.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[lem-conditional-expectation-process-is-a-martingale]] makes $M_n=\mathbb E[X\mid\mathcal F_n]$ a martingale.

[F2] [[thm-uniform-integrability-of-conditional-expectations-of-one-variable]] makes $(M_n)$ uniformly integrable.

[F3] [[thm-closed-martingale-characterization]] supplies an almost-sure and $L^1$ limit $Y$.

[F4] [[thm-monotone-class]] identifies a measure equality first checked on the algebra $\bigcup_n\mathcal F_n$.

[F5] [[def-axiom-of-choice]] is used only for the conditional expectations and countable representatives.

## Proof

1.1 By F1, F2, F3 there is $Y\in L^1$ such that $M_n\to Y$ almost surely and in $L^1$. As an almost-sure limit of $\mathcal F_\infty$-measurable variables, $Y$ has an $\mathcal F_\infty$-measurable version. [F1, F2, F3]

2.1 The union $\mathcal A=\bigcup_n\mathcal F_n$ is an algebra because the filtration is increasing. If $A\in\mathcal A$, then $A\in\mathcal F_N$ for some $N$, and for every $n\ge N$, $$\int_A M_n\,dP=\int_A X\,dP.$$ Passing to the $L^1$ limit yields $\int_A Y=\int_A X$. [step 1.1]

3.1 Let $\mathcal D=\{A\in\mathcal F_\infty:\int_A Y=\int_A X\}$. Integrability makes $\mathcal D$ a monotone class, and step 2.1 gives $\mathcal A\subseteq\mathcal D$. F4 yields $\sigma(\mathcal A)=\mathcal F_\infty\subseteq\mathcal D$. Thus $Y$ has exactly the defining event integrals of $\mathbb E[X\mid\mathcal F_\infty]$, proving the result. AC has the role stated in F5. [F4, F5, step 1.1, step 2.1] ∎