---
id: cex-optional-stopping-fails-for-unbounded-simple-random-walk-hitting-time
kind: counterexample
title: Optional stopping fails for an unbounded simple-random-walk hitting time
status: published
origin: pipeline
deps: [cor-gamblers-ruin-hitting-probability-from-optional-stopping, rem-optional-stopping-requires-a-passage-to-the-limit-hypothesis, def-axiom-of-choice]
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
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, warning after Theorem 2.42, p. 22", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Statement

Assume AC. For simple symmetric random walk $S_0=0$ and $\tau=\inf\{n\ge0:S_n=1\}$, define $S_\tau=0$ on $\{\tau=\infty\}$. Then $\tau$ is almost surely finite, but $S_\tau=1$ almost surely and
$$\mathbb ES_\tau=1\ne0=\mathbb ES_0.$$

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[cor-gamblers-ruin-hitting-probability-from-optional-stopping]] computes finite-interval hitting probabilities.

[F2] [[rem-optional-stopping-requires-a-passage-to-the-limit-hypothesis]] identifies the invalid limit passage.

[F3] [[def-axiom-of-choice]] is inherited from F1 and the martingale interface.

## Counterexample

1.1 For $a\ge1$, let $E_a$ be the event that the walk hits $1$ before $-a$. Translating the symmetric ruin interval to $\{0,a+1\}$ with starting point $a$, F1 gives $$P(E_a)=\frac a{a+1}.$$ The $E_a$ increase, and their union is $\{\tau<\infty\}$: a path that reaches $1$ has a finite minimum before that time and therefore belongs to some $E_a$. Continuity from below gives $P(\tau<\infty)=1$. [F1]

2.1 By definition, $S_\tau=1$ on this probability-one event, whereas $S_0=0$. Thus their expectations differ. This explicitly shows that almost-sure finiteness alone cannot justify passing from $\tau\wedge n$ to $\tau$ in bounded optional sampling, as F2 warns. AC has exactly the inherited role in F3. [F2, F3, step 1.1] ∎
