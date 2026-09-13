---
id: thm-levy-downward-convergence-of-conditional-expectations
kind: theorem
title: Levy downward convergence of conditional expectations
status: draft
origin: pipeline
deps: [thm-reverse-martingale-convergence, thm-tower-property-of-conditional-expectation, def-axiom-of-choice]
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
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, Theorem 2.30 and Exercise 2.31, pp. 17–18", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Statement

Assume AC. If $(\mathcal G_n)$ is decreasing, $\mathcal G_\infty=\bigcap_n\mathcal G_n$, and $X\in L^1$, then
$$\mathbb E[X\mid\mathcal G_n]\longrightarrow\mathbb E[X\mid\mathcal G_\infty]$$
almost surely and in $L^1$.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[thm-tower-property-of-conditional-expectation]] verifies the reverse-martingale identities.

[F2] [[thm-reverse-martingale-convergence]] identifies the reverse limit.

[F3] [[def-axiom-of-choice]] states AC, assumed here because F1 and F2 use conditional expectations and chosen representatives.

## Proof

1.1 Put $X_n=\mathbb E[X\mid\mathcal G_n]$. If $m\le n$, then $\mathcal G_n\subseteq\mathcal G_m$, and F1 gives $$\mathbb E[X_m\mid\mathcal G_n] =\mathbb E[\mathbb E[X\mid\mathcal G_m]\mid\mathcal G_n] =\mathbb E[X\mid\mathcal G_n]=X_n.$$ Thus $(X_n,\mathcal G_n)$ is a reverse martingale. [F1]

2.1 F2 gives convergence almost surely and in $L^1$ to $\mathbb E[X_0\mid\mathcal G_\infty]$. Since $X_0=\mathbb E[X\mid\mathcal G_0]$ and $\mathcal G_\infty\subseteq\mathcal G_0$, another tower identity identifies this with $\mathbb E[X\mid\mathcal G_\infty]$. AC is used exactly through F3. [F1, F2, F3] ∎
