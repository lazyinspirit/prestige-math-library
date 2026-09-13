---
id: cor-gamblers-ruin-hitting-probability-from-optional-stopping
kind: corollary
title: Gambler's ruin hitting probability from optional stopping
status: published
origin: pipeline
deps: [lem-first-hitting-time-of-an-adapted-process-is-a-stopping-time, thm-optional-stopping-with-a-dominating-integrable-variable, lem-conditioning-a-known-variable-and-an-independent-variable, def-axiom-of-choice]
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
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, optional-stopping examples in §2.3", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Statement

Assume AC. Let $N\ge2$ and $i\in\{1,\ldots,N-1\}$ be integers, let $S_n=i+\sum_{k=1}^n\xi_k$, where the independent increments take $1$ and $-1$ with probability $1/2$, and use the natural filtration $\mathcal F_n=\sigma(\xi_1,\ldots,\xi_n)$, with $\mathcal F_0$ trivial. For
$$\tau=\inf\{n:S_n\in\{0,N\}\},$$
$\tau$ is almost surely finite; use the cemetery value $S_\tau=0$ on $\{\tau=\infty\}$. Then $\mathbb P(S_\tau=N)=i/N$.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[lem-first-hitting-time-of-an-adapted-process-is-a-stopping-time]] makes $\tau$ a stopping time.

[F2] [[lem-conditioning-a-known-variable-and-an-independent-variable]] verifies that $S$ is a martingale.

[F3] [[thm-optional-stopping-with-a-dominating-integrable-variable]] passes from the bounded stopped times to $\tau$.

[F4] [[def-axiom-of-choice]] is inherited from martingale conditioning and optional stopping.

## Proof

1.1 Adaptedness and F1 make $\tau$ a stopping time. At the start of any block of $N$ fresh increments, conditional on not yet having exited, the event that all $N$ increments are $+1$ has probability $2^{-N}$ and forces an upper exit within that block. Independence of successive increments therefore gives inductively $$\mathbb P(\tau>mN)\le(1-2^{-N})^m\longrightarrow0.$$ Thus $\tau<\infty$ almost surely. [F1]

2.1 Since $\mathbb E\xi_k=0$ and $\xi_k$ is independent of the past, F2 gives $\mathbb E[S_k\mid\mathcal F_{k-1}]=S_{k-1}$. Before and at exit the nearest-neighbour path stays in $[0,N]$, so $|S_{\tau\wedge n}|\le N$. F3 with dominator $N$ yields $\mathbb ES_\tau=\mathbb ES_0=i$. [F2, F3, step 1.1]

3.1 At the finite exit time, $S_\tau\in\{0,N\}$; the chosen value zero on the null event $\{\tau=\infty\}$ preserves this assertion everywhere. Therefore $$i=\mathbb ES_\tau=N\mathbb P(S_\tau=N),$$ which gives the result. AC is used exactly through F4. [F4, step 2.1] ∎
