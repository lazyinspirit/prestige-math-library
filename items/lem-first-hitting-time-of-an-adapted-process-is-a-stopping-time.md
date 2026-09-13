---
id: lem-first-hitting-time-of-an-adapted-process-is-a-stopping-time
kind: lemma
title: First hitting time of an adapted process is a stopping time
status: published
origin: pipeline
deps: [lem-equivalent-event-tests-for-a-discrete-stopping-time, def-adapted-and-integrable-stochastic-process]
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
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, §2.3, pp. 9–11", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Statement

If $X$ is adapted and $B\subseteq\mathbb R$ is Borel, then
$$\tau=\inf\{n\ge0:X_n\in B\},\qquad \inf\varnothing=\infty,$$
is a stopping time.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[def-adapted-and-integrable-stochastic-process]] gives $\{X_k\in B\}\in\mathcal F_k$.

[F2] [[lem-equivalent-event-tests-for-a-discrete-stopping-time]] reduces the claim to the finite-horizon events.

## Proof

1.1 For each $n$, $$\{\tau\le n\}=\bigcup_{k=0}^n\{X_k\in B\}.$$ Every term is in $\mathcal F_k\subseteq\mathcal F_n$ by F1, and the union is finite. [F1]

2.1 Hence the event belongs to $\mathcal F_n$, so F2 proves that $\tau$ is a stopping time. If the path never enters $B$, it belongs to none of these events and the convention gives exactly $\tau=\infty$. [F2, step 1.1] ∎
