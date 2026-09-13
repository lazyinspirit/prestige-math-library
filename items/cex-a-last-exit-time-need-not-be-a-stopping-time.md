---
id: cex-a-last-exit-time-need-not-be-a-stopping-time
kind: counterexample
title: A last exit time need not be a stopping time
status: draft
origin: pipeline
deps: [def-discrete-stopping-time, def-independent-random-elements]
proof_strategy: counterexample
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
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, stopping-time discussion in §2.3", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Statement

A last-visit time generally is not a stopping time. For two independent fair coin tosses $X_1,X_2$ and $\mathcal F_n=\sigma(X_1,\ldots,X_n)$, let
$$\rho=\max\bigl(\{k\in\{1,2\}:X_k=1\}\cup\{0\}\bigr).$$
Then $\rho$ is not a stopping time.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[def-discrete-stopping-time]] requires $\{\rho\le1\}\in\mathcal F_1$.

[F2] [[def-independent-random-elements]] makes the second toss independent of $\mathcal F_1=\sigma(X_1)$.

## Counterexample

1.1 The last success occurs no later than time $1$ exactly when the second toss fails. Hence $$\{\rho\le1\}=\{X_2=0\}.$$ This event has probability $1/2$. [F1]

2.1 If it belonged to $\mathcal F_1$, F2 would make it independent of itself, because it is also an event determined by $X_2$. That would give $1/2=P(A)=P(A)^2=1/4$, impossible. Thus $\{\rho\le1\}\notin\mathcal F_1$, violating F1. The counterexample is finite and choice-free. [F1, F2, step 1.1] ∎