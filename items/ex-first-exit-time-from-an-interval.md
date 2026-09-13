---
id: ex-first-exit-time-from-an-interval
kind: example
title: First exit time from an interval
status: published
origin: pipeline
deps: [lem-first-hitting-time-of-an-adapted-process-is-a-stopping-time]
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

If $X$ is an adapted real process and $a<b$, then
$$\tau=\inf\{n\ge0:X_n\notin(a,b)\}$$
is a stopping time. It may equal infinity, and no integrability conclusion follows from the stopping-time property alone.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[lem-first-hitting-time-of-an-adapted-process-is-a-stopping-time]] treats first hits of Borel sets.

## Proof

1.1 The exit target $(-\infty,a]\cup[b,\infty)$ is Borel, so F1 applies. Explicitly, $$\{\tau\le n\}=\bigcup_{k=0}^n \bigl(\{X_k\le a\}\cup\{X_k\ge b\}\bigr)\in\mathcal F_n.$$ [F1]

2.1 If a path remains in $(a,b)$ forever, the defining set of indices is empty and $\tau=\infty$. Thus the result asserts neither almost-sure finiteness nor integrability and leaves the cemetery convention relevant. [step 1.1] ∎