---
id: thm-sigma-k-equals-pi-k-implies-ph-collapse
kind: theorem
title: "Sigma k equals pi k implies ph collapse"
status: published
origin: pipeline
deps: [lem-collapse-at-one-level-propagates]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arora–Barak, Computational Complexity, 2007 draft; §5.2.1 Theorem5.6, pp92–93."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

For fixed $k\ge1$, $\Sigma_k^p=\Pi_k^p$ implies $\mathrm{PH}=\Sigma_k^p=\Pi_k^p$. Also $P=NP$ implies $\mathrm{PH}=P$.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] If $k\ge1$ and $\Sigma_k^p=\Pi_k^p$, then $\Sigma_{k+1}^p=\Pi_{k+1}^p=\Sigma_k^p$. ([[lem-collapse-at-one-level-propagates]]).


## Proof

1.1 Start at level $k$ and repeatedly apply the propagation lemma. After each application the next two polarities equal the same class, so the hypothesis needed for the following application holds. By finite induction all levels at least $k$ equal $\Sigma_k^p$; lower levels embed by unused quantifier blocks. Taking their union proves the first assertion. [F1]

2.1 If $P=NP$, a one-block existential verifier defines a P language, and every P language has an unused existential witness. Deterministic P is complement closed by flipping a halting decider's bit, so $\Sigma_1^p=\Pi_1^p=P$. Apply the first assertion at level one. Empty inputs and unused witnesses cause no exception. [step 1.1, given] ∎
