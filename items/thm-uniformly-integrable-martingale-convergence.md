---
id: thm-uniformly-integrable-martingale-convergence
kind: theorem
title: Uniformly integrable martingale convergence
status: draft
origin: pipeline
deps: [thm-doob-submartingale-convergence, def-uniformly-integrable-family, thm-almost-sure-convergence-implies-convergence-in-probability, thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence, def-axiom-of-choice]
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
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, Theorem 2.23 and proof, pp. 15–16", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Statement

Assume AC. A uniformly integrable martingale $M$ converges almost surely and in $L^1$ to an integrable random variable $M_\infty$.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[def-uniformly-integrable-family]] implies uniform $L^1$ boundedness.

[F2] [[thm-doob-submartingale-convergence]] gives an integrable almost-sure limit under the resulting positive-part bound.

[F3] [[thm-almost-sure-convergence-implies-convergence-in-probability]] and [[thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence]] upgrade convergence to $L^1$.

[F4] [[def-axiom-of-choice]] is inherited from F2's martingale conditional expectations and their countable representatives.

## Proof

1.1 Uniform integrability implies $\sup_n\mathbb E|M_n|<\infty$ by F1, hence $\sup_n\mathbb E M_n^+<\infty$. Apply F2 to obtain a finite integrable $M_\infty$ with $M_n\to M_\infty$ almost surely. [F1, F2]

2.1 Almost-sure convergence implies convergence in probability. The family $\{M_n:n\ge0\}$ is uniformly integrable by hypothesis, so F3 yields $\mathbb E|M_n-M_\infty|\to0$. Mere $L^1$ boundedness was not substituted for uniform integrability. AC is used exactly as described in F4. [F3, F4, step 1.1] ∎