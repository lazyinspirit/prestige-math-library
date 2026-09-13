---
id: ex-doob-maximal-bound-for-a-centered-random-walk
kind: example
title: Doob maximal bounds for a centered random walk
status: draft
origin: pipeline
deps: [thm-doob-l1-maximal-inequality, thm-doob-lp-maximal-inequality, thm-convex-functions-of-martingales-are-submartingales, lem-conditioning-a-known-variable-and-an-independent-variable, def-axiom-of-choice]
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
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, §2.9, pp. 22–24", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Statement

Assume AC. Let $S_k=\sum_{j=1}^k\xi_j$, where the independent increments are centered and square-integrable, and put $\sigma_k^2=\mathbb E\xi_k^2$. Then for $\lambda>0$,
$$\mathbb P\!\left(\max_{0\le k\le n}|S_k|\ge\lambda\right) \le\lambda^{-2}\sum_{k=1}^n\sigma_k^2, \qquad \mathbb E\max_{0\le k\le n}|S_k|^2\le4\sum_{k=1}^n\sigma_k^2.$$

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[lem-conditioning-a-known-variable-and-an-independent-variable]] turns the centered independent next increment into conditional mean zero.

[F2] [[thm-convex-functions-of-martingales-are-submartingales]] makes $S_k^2$ and $|S_k|$ nonnegative submartingales.

[F3] [[thm-doob-l1-maximal-inequality]] and [[thm-doob-lp-maximal-inequality]] give the two maximal estimates.

[F4] [[def-axiom-of-choice]] is inherited from conditioning and the maximal inequalities.

## Proof

1.1 In the natural filtration, $S_{k-1}$ is known and $\xi_k$ is independent of the past with mean zero. Thus F1 gives $$\mathbb E[S_k\mid\mathcal F_{k-1}]=S_{k-1}+\mathbb E\xi_k=S_{k-1},$$ so $S$ is a square-integrable martingale. [F1]

2.1 Expanding the square gives $$\mathbb ES_n^2=\sum_{k=1}^n\mathbb E\xi_k^2 +2\sum_{j<k}\mathbb E(\xi_j\xi_k).$$ For $j<k$, independence and centering give $\mathbb E(\xi_j\xi_k)=\mathbb E\xi_j\mathbb E\xi_k=0$; hence $\mathbb ES_n^2=\sum_k\sigma_k^2$. [step 1.1]

3.1 Apply F3's $L^1$ inequality to the nonnegative submartingale $S_k^2$ at level $\lambda^2$. The event is exactly $\{\max_{k\le n}|S_k|\ge\lambda\}$, so the first bound follows from step 2.1. Apply the $p=2$ inequality to $|S_k|$ to get $$\|\max_{k\le n}|S_k|\|_2\le2\|S_n\|_2;$$ squaring and using step 2.1 gives the second. AC is used exactly through F4. [F2, F3, F4, step 2.1] ∎