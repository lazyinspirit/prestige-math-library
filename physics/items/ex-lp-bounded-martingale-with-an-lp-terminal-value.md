---
id: ex-lp-bounded-martingale-with-an-lp-terminal-value
kind: example
title: An Lp-bounded martingale with an Lp terminal value
status: published
origin: pipeline
deps: [thm-lp-bounded-martingale-convergence, thm-levy-upward-convergence-of-conditional-expectations, cor-conditional-lp-contraction, lem-conditional-expectation-process-is-a-martingale, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, Theorems 2.23–2.25, pp. 15–16", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Statement

Assume AC. If $p>1$, $X\in L^p$, $(\mathcal F_n)$ is a filtration, and $\mathcal F_\infty$ is a sigma-algebra containing every $\mathcal F_n$, then $M_n=\mathbb E[X\mid\mathcal F_n]$ is $L^p$-bounded and converges almost surely and in $L^p$ to an $\mathcal F_\infty$-measurable $M_\infty$. If $\mathcal F_\infty=\sigma(\bigcup_n\mathcal F_n)$, then $M_\infty=\mathbb E[X\mid\mathcal F_\infty]$.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[lem-conditional-expectation-process-is-a-martingale]] makes $(M_n)$ a martingale.

[F2] [[cor-conditional-lp-contraction]] gives $\|M_n\|_p\le\|X\|_p$.

[F3] [[thm-lp-bounded-martingale-convergence]] gives almost-sure and $L^p$ convergence.

[F4] [[thm-levy-upward-convergence-of-conditional-expectations]] identifies the generated-$\sigma$-algebra limit.

[F5] [[def-axiom-of-choice]] states AC, assumed here because F1--F4 use conditional expectations and chosen representatives.

## Proof

1.1 F1 makes $(M_n)$ a martingale, and F2 gives $\sup_n\|M_n\|_p\le\|X\|_p<\infty$. F3 therefore supplies $M_\infty\in L^p$ with both asserted modes of convergence. As a pointwise limit of variables measurable for $\mathcal F_\infty$, it has an $\mathcal F_\infty$-measurable version. [F1, F2, F3]

2.1 When $\mathcal F_\infty=\sigma(\bigcup_n\mathcal F_n)$, F4 gives almost-sure and $L^1$ convergence of the same sequence to $\mathbb E[X\mid\mathcal F_\infty]$. Limits in probability are unique, so it equals the $L^p$ limit $M_\infty$ almost surely. AC is used exactly through F5. [F4, F5, step 1.1] ∎
