---
id: thm-azuma-hoeffding-inequality
kind: theorem
title: Azuma-Hoeffding inequality
status: draft
origin: pipeline
deps: [lem-conditional-hoeffding-bound-for-bounded-martingale-differences, thm-tower-property-of-conditional-expectation, thm-taking-out-what-is-known, cor-markov-inequality-for-random-variables, def-axiom-of-choice]
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
    - {title: "Roch, Notes 20: Azuma's Inequality, Theorem 20.8 and proof, pp. 3–4", url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes20.pdf"}
---

## Statement

Assume AC. Let $(M_k,\mathcal F_k)_{k=0}^n$ be a martingale. Suppose finite $\mathcal F_{k-1}$-measurable $A_k,B_k$ and deterministic $c_k\ge0$ satisfy
$$A_k\le M_k-M_{k-1}\le B_k,\qquad B_k-A_k\le c_k$$
almost surely. Then for every $t>0$,
$$\mathbb P(M_n-M_0\ge t)\le \exp\!\left(-\frac{2t^2}{\sum_{k=1}^n c_k^2}\right),$$
and the analogous lower-tail bound holds, with the zero-denominator expression interpreted as $0$.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[lem-conditional-hoeffding-bound-for-bounded-martingale-differences]] controls each conditional exponential moment.

[F2] [[thm-tower-property-of-conditional-expectation]] iterates those controls through the filtration.

[F3] [[cor-markov-inequality-for-random-variables]] supplies the exponential Markov bound.

[F4] [[def-axiom-of-choice]] is inherited from the conditional-expectation and martingale interfaces.

[F5] [[thm-taking-out-what-is-known]] permits the bounded $\mathcal F_{k-1}$-measurable accumulated exponential to be taken outside conditional expectation.

## Proof

1.1 Let $D_k=M_k-M_{k-1}$ and $V=\sum_{k=1}^n c_k^2$. For $\lambda>0$, F1, F2, and F5 give $$\begin{aligned} \mathbb Ee^{\lambda\sum_{k=1}^nD_k} &=\mathbb E\!\left[e^{\lambda\sum_{k<n}D_k} \mathbb E(e^{\lambda D_n}\mid\mathcal F_{n-1})\right]\\ &\le e^{\lambda^2c_n^2/8}\mathbb Ee^{\lambda\sum_{k<n}D_k} \le e^{\lambda^2V/8}. \end{aligned}$$ The final inequality follows by finite induction, with the empty sum at time $0$. [F1, F2, F5]

2.1 Markov applied to $e^{\lambda(M_n-M_0)}$ yields $$\mathbb P(M_n-M_0\ge t)\le \exp(-\lambda t+\lambda^2V/8).$$ If $V>0$, the quadratic is minimized at $\lambda=4t/V$, giving $\exp(-2t^2/V)$. [F3, step 1.1]

3.1 If $V=0$, every $c_k=0$. F1's hypotheses then force every $D_k=0$ almost surely, so the event is empty for $t>0$, agreeing with the stated convention. Apply step 1.1, step 2.1 to $-M$, whose endpoints are $-B_k,-A_k$, to obtain the lower-tail bound. AC has exactly the inherited role in F4. [F1, F4, step 1.1, step 2.1] ∎
