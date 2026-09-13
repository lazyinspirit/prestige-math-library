---
id: thm-closed-martingale-characterization
kind: theorem
title: Closed martingale characterization
status: draft
origin: pipeline
deps: [thm-uniformly-integrable-martingale-convergence, lem-multistep-martingale-characterization, cor-conditional-lp-contraction, thm-uniform-integrability-of-conditional-expectations-of-one-variable, def-axiom-of-choice]
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
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, Theorem 2.23 and discussion, pp. 15–16", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Statement

Assume AC. For a martingale $M$, the following are equivalent:

1. $\{M_n:n\ge0\}$ is uniformly integrable;
2. $M_n$ converges in $L^1$ to some $M_\infty$;
3. there is $X\in L^1$ with $M_n=\mathbb E[X\mid\mathcal F_n]$ almost surely for every $n$.

In this case one may take $X=M_\infty$, and $M_n\to M_\infty$ almost surely.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[thm-uniformly-integrable-martingale-convergence]] proves almost-sure and $L^1$ convergence from uniform integrability.

[F2] [[lem-multistep-martingale-characterization]] gives $M_n=\mathbb E[M_m\mid\mathcal F_n]$ for $m\ge n$.

[F3] [[cor-conditional-lp-contraction]] at $p=1$ makes conditioning an $L^1$ contraction.

[F4] [[thm-uniform-integrability-of-conditional-expectations-of-one-variable]] says that the conditional expectations of one fixed $L^1$ variable are uniformly integrable.

[F5] [[def-axiom-of-choice]] states AC, assumed here because F1--F4 use conditional expectations and, when displayed simultaneously, chosen countable families of representatives.

## Proof

1.1 Assume (1). F1 supplies $M_\infty\in L^1$ with convergence both almost surely and in $L^1$, proving (2) and the final convergence assertion. [F1]

1.2 Assume (2) and fix $n$. For every $m\ge n$, F2 gives $M_n=\mathbb E[M_m\mid\mathcal F_n]$. By F3, $$\|\mathbb E[M_m\mid\mathcal F_n]-\mathbb E[M_\infty\mid\mathcal F_n]\|_1 \le\|M_m-M_\infty\|_1\to0.$$ Consequently $M_n=\mathbb E[M_\infty\mid\mathcal F_n]$ almost surely. Thus (3) holds with $X=M_\infty$. [F2, F3]

1.3 Assume (3). F4 applied to the single variable $X$ makes $\{\mathbb E[X\mid\mathcal F_n]:n\ge0\}$ uniformly integrable. These variables are the $M_n$, so (1) follows. [F4]

2.1 Steps 1.1, 1.2, and 1.3 prove every direction, including the claimed choice of terminal variable. AC is used exactly through F5; no stronger limiting assertion is made for a merely $L^1$-bounded martingale. [F5, step 1.1, step 1.2, step 1.3] ∎
