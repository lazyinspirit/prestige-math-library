---
id: ex-zero-one-law-for-convergence-of-a-random-series
kind: example
title: "Convergence of an independent random series is a zero-one event"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event]
proof_strategy: direct
sources:
  references: []
verification:
  audited: 2026-09-05
  precheck: pass
---

## Example

If $(X_n)_{n\in\mathbb N}$ is an independent sequence of real random variables,
then the event
$$\left\{\sum_{n=0}^\infty X_n\text{ converges}\right\}$$
has probability either $0$ or $1$.

The zero-one law does not decide which value occurs; it says only that no
intermediate probability is possible.

## Facts & Assumptions

**Given:** An independent sequence of real random variables $(X_n)_{n\in\mathbb N}$.

[L1] Almost-sure convergence of an independent series is a tail event of
probability $0$ or $1$.
([[cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event]])

## Verification

**Proof technique:** direct.

1.1 The displayed event is exactly the convergence event covered by [L1].
[L1]

2.1 Therefore its probability belongs to $\{0,1\}$. [step 1.1, algebra] ∎
