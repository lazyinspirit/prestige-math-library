---
id: thm-lp-bounded-martingale-convergence
kind: theorem
title: Lp-bounded martingale convergence
status: published
origin: pipeline
deps: [thm-doob-submartingale-convergence, thm-doob-lp-maximal-inequality, thm-monotone-convergence-for-the-integral, thm-dominated-convergence, cor-conditional-lp-contraction, lem-multistep-martingale-characterization, def-axiom-of-choice]
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
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, Theorem 2.25 and §2.9, pp. 16, 23–24", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Statement

Assume AC. Let $p>1$. If $M$ is a martingale and $C:=\sup_n\mathbb E|M_n|^p<\infty$, then some $M_\infty\in L^p$ satisfies $M_n\to M_\infty$ almost surely and in $L^p$. Moreover
$$M_n=\mathbb E[M_\infty\mid\mathcal F_n]\quad\text{a.s.},\qquad \left\|\sup_n|M_n|\right\|_p\le\frac p{p-1}\sup_n\|M_n\|_p.$$

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[thm-doob-submartingale-convergence]] gives almost-sure convergence from a uniform positive-part bound.

[F2] [[thm-doob-lp-maximal-inequality]] gives the finite-horizon maximal estimate.

[F3] [[thm-monotone-convergence-for-the-integral]] and [[thm-dominated-convergence]] pass respectively to the infinite maximum and to the $L^p$ limit.

[F4] [[cor-conditional-lp-contraction]] and [[lem-multistep-martingale-characterization]] identify the terminal conditional expectations.

[F5] [[def-axiom-of-choice]] is inherited from the martingale and conditional-expectation interfaces.

## Proof

1.1 Since the underlying measure is a probability measure, Hölder gives $\sup_n\mathbb E|M_n|\le C^{1/p}$. In particular $\sup_n\mathbb E(M_n)^+\le C^{1/p}$. The martingale $M$ is also a submartingale, so F1 applies directly to $M$ and gives $M_n\to M_\infty$ almost surely for a finite integrable $M_\infty$. [F1]

1.2 For each $N$, F2 gives $$\left\|\max_{k\le N}|M_k|\right\|_p\le q\sup_n\|M_n\|_p,\qquad q=\frac p{p-1}.$$ The maxima increase to $M^*=\sup_n|M_n|$, so F3 yields the displayed infinite-horizon bound and $M^*\in L^p$. In particular $|M_\infty|\le M^*$ almost surely, hence $M_\infty\in L^p$. [F2, F3]

2.1 We have $|M_n-M_\infty|^p\le (2M^*)^p$ and pointwise convergence to zero. Dominated convergence gives $\|M_n-M_\infty\|_p\to0$. [F3, step 1.1, step 1.2]

3.1 Fix $n$ and take $m\ge n$. F4 gives $M_n=\mathbb E[M_m\mid\mathcal F_n]$. Conditional $L^p$ contraction and step 2.1 imply $$\|\mathbb E[M_m-M_\infty\mid\mathcal F_n]\|_p \le\|M_m-M_\infty\|_p\longrightarrow0.$$ The left conditional expectations therefore converge to zero while $M_n$ is fixed, proving $M_n=\mathbb E[M_\infty\mid\mathcal F_n]$ almost surely. AC has only the inherited role in F5. [F4, F5] ∎
