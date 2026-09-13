---
id: ex-nonnegative-martingale-converges-almost-surely
kind: example
title: A nonnegative martingale converges almost surely
status: draft
origin: pipeline
deps: [thm-doob-submartingale-convergence, thm-fatou-lemma, def-axiom-of-choice]
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
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, Exercise 2.22, p. 15", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Statement

Assume AC. Every nonnegative martingale $M$ has an almost-sure finite integrable limit $M_\infty$, with $\mathbb EM_\infty\le\mathbb EM_0$. Equality and $L^1$ convergence are not asserted without uniform integrability.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[thm-doob-submartingale-convergence]] gives a finite integrable almost-sure limit from bounded positive-part expectations.

[F2] [[thm-fatou-lemma]] compares its expectation with the constant martingale expectations.

[F3] [[def-axiom-of-choice]] states AC, assumed here because F1 and the martingale interface require it.

## Proof

1.1 Since $M_n\ge0$, $M_n^+=M_n$, and the martingale identity gives $\mathbb EM_n=\mathbb EM_0$ for every $n$. Thus F1 applies and gives $M_n\to M_\infty$ almost surely with $M_\infty$ finite and integrable. [F1]

2.1 Fatou gives $$\mathbb EM_\infty\le\liminf_n\mathbb EM_n=\mathbb EM_0.$$ The inequality can be strict, so neither equality nor $L^1$ convergence follows from nonnegativity alone. AC has only the role in F3. [F2, F3, step 1.1] ∎
