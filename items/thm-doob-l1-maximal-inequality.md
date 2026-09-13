---
id: thm-doob-l1-maximal-inequality
kind: theorem
title: Doob L1 maximal inequality
status: draft
origin: pipeline
deps: [def-martingale-submartingale-and-supermartingale, lem-multistep-martingale-characterization, def-conditional-expectation-as-an-ae-class, thm-linearity-of-the-lebesgue-integral-on-l-one, def-axiom-of-choice]
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
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, Lemma 2.43, p. 22", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Statement

Assume AC. If $X$ is a nonnegative submartingale, $\lambda>0$, and $N\in\mathbb N_0$, then
$$\lambda\,\mathbb P\!\left(\max_{0\le k\le N}X_k\ge\lambda\right) \le \mathbb E\!\left[X_N1_{\{\max_{k\le N}X_k\ge\lambda\}}\right] \le \mathbb EX_N.$$

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[def-martingale-submartingale-and-supermartingale]] makes each first-crossing event measurable at its crossing time.

[F2] [[lem-multistep-martingale-characterization]] gives $X_k\le\mathbb E[X_N\mid\mathcal F_k]$ for $k\le N$.

[F3] [[def-conditional-expectation-as-an-ae-class]] supplies the integral identity on $\mathcal F_k$ events, and [[thm-linearity-of-the-lebesgue-integral-on-l-one]] sums the finite partition.

[F4] [[def-axiom-of-choice]] is used only through the chosen conditional-expectation representatives in F2, F3.

## Proof

1.1 Define the disjoint first-crossing events $$A_k=\{X_0<\lambda,\ldots,X_{k-1}<\lambda,\ X_k\ge\lambda\},\qquad 0\le k\le N,$$ with the preceding string empty for $k=0$. Each $A_k\in\mathcal F_k$, and their union is $A=\{\max_{j\le N}X_j\ge\lambda\}$. [F1]

1.2 On $A_k$, $X_k\ge\lambda$. By F2 and the conditional-expectation identity, $$\lambda\mathbb P(A_k)\le\mathbb E[X_k1_{A_k}] \le\mathbb E[X_N1_{A_k}].$$ [F2, F3]

2.1 Sum over the finite disjoint partition to get $$\lambda\mathbb P(A)\le\mathbb E[X_N1_A].$$ Since $X_N\ge0$, the latter is at most $\mathbb EX_N$. This finite-time proof does not presuppose stopping-time or optional-sampling results. AC has exactly the inherited use in F4. [F3, F4, step 1.1, step 1.2] ∎
