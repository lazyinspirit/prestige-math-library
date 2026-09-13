---
id: cex-almost-sure-martingale-convergence-need-not-preserve-expectation
kind: counterexample
title: Almost-sure martingale convergence need not preserve expectation
status: published
origin: pipeline
deps: [cex-l1-bounded-martingale-need-not-converge-in-l1, thm-closed-martingale-characterization, def-axiom-of-choice]
proof_strategy: counterexample
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
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, martingale-convergence warnings in §§2.5 and 2.8", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Statement

Assume AC. On $([0,1],\mathcal B,\lambda)$ with $\mathcal F_0=\{\varnothing,[0,1]\}$ and $\mathcal F_n=\sigma((0,2^{-1}],\ldots,(0,2^{-n}])$, take $M_0=1$ and $M_n=2^n1_{(0,2^{-n}]}$ for $n\ge1$. This integrable martingale has $\mathbb EM_n=1$ for every $n$ but almost-sure limit $M_\infty=0$ with expectation zero. Thus almost-sure convergence need not preserve expectations.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[cex-l1-bounded-martingale-need-not-converge-in-l1]] verifies this process is a nonnegative martingale, computes its means, and proves its pointwise limit.

[F2] [[thm-closed-martingale-characterization]] explains the missing uniform-integrability hypothesis.

[F3] [[def-axiom-of-choice]] is inherited from the martingale construction.

## Counterexample

1.1 By F1, $M_n\to0$ almost surely while $\mathbb EM_n=1$ for every $n$. Therefore $$\lim_n\mathbb EM_n=1\ne0=\mathbb E[\lim_nM_n].$$ This is the required explicit failure. [F1]

2.1 If $(M_n)$ were uniformly integrable, F2 would force $L^1$ convergence to its almost-sure limit. That would imply $\mathbb E|M_n|\to0$, contradicting the computed value one. Thus the failure is exactly outside the closed/UI regime. AC has only the inherited role in F3. [F2, F3, step 1.1] ∎
