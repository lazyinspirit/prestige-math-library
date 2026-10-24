---
id: cex-consistent-marginals-alone-do-not-specify-joint-laws
kind: counterexample
title: "One-dimensional marginals alone do not specify a joint law"
status: published
origin: pipeline
deps: [def-consistent-family-of-finite-dimensional-distributions, def-stochastic-process-and-finite-dimensional-distributions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Biskup, MATH 275D notes, Section 2.1"
      url: "https://math.ucla.edu/~biskup/275d.1.25f/PDFs/ch2.pdf"
---

## Statement refuted

The one-dimensional marginals of a process determine all its finite-dimensional laws.

## Counterexample

Let $Z$ be a fair bit. The pair $(Z,Z)$ and a pair $(Z,W)$ of independent fair bits have the same one-dimensional marginals.

**Given:** Fair bits $Z$ and $W$, with $Z,W$ independent in the second pair.

1.1 Each displayed coordinate has Bernoulli$(1/2)$ law in both pairs. [given]

2.1 But $\mathbb P(Z=Z)=1$ for the first pair, whereas $\mathbb P(Z=W)=1/2$ for the independent pair. Their two-dimensional laws differ, refuting the statement. [algebra] ∎
