---
id: cor-symmetric-bounded-increment-azuma-bound
kind: corollary
title: Symmetric bounded-increment Azuma bound
status: draft
origin: pipeline
deps: [thm-azuma-hoeffding-inequality, thm-finite-union-bound, def-axiom-of-choice]
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
    - {title: "Roch, Notes 20: Azuma's Inequality, Theorem 20.8, pp. 3–4", url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes20.pdf"}
---

## Statement

Assume AC. If $(M_k,\mathcal F_k)_{k=0}^n$ is a martingale and $|M_k-M_{k-1}|\le c_k$ almost surely for deterministic $c_k\ge0$, then for every $t>0$,
$$\mathbb P(|M_n-M_0|\ge t) \le2\exp\!\left(-\frac{t^2}{2\sum_{k=1}^n c_k^2}\right),$$
again interpreting the right exponential as $0$ when every $c_k=0$.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[thm-azuma-hoeffding-inequality]] supplies both one-sided bounds with predictable endpoints.

[F2] [[thm-finite-union-bound]] combines the upper and lower deviations.

[F3] [[def-axiom-of-choice]] is the exact inherited conditional-expectation dependence from F1.

## Proof

1.1 Apply F1 with $A_k=-c_k$ and $B_k=c_k$. Their width is $2c_k$, so each one-sided probability is at most $$\exp\!\left(-\frac{2t^2}{\sum_k(2c_k)^2}\right) =\exp\!\left(-\frac{t^2}{2\sum_kc_k^2}\right).$$ [F1]

2.1 The event $\{|M_n-M_0|\ge t\}$ is the union of the upper and lower tail events. F2 gives twice the bound in step 1.1. If all $c_k=0$, all increments vanish almost surely and the event is empty. Zero-width individual terms otherwise simply contribute zero to the sum. AC is used exactly as stated in F3. [F2, F3, step 1.1] ∎