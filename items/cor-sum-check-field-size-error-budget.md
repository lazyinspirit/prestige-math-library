---
id: cor-sum-check-field-size-error-budget
kind: corollary
title: "Choosing a sum-check error budget"
status: published
origin: pipeline
deps: [thm-sum-check-soundness]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct calculation
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Justin Thaler, Proofs, Arguments, and Zero-Knowledge (2023), Proposition 4.1 and degree/field-size discussion pp.35\u201338"
      url: "https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf"
---

## Statement

Let $\varepsilon>0$. For a supplied sum-check instance with a field satisfying $|F|\geq (\sum_i d_i)/\varepsilon$, every prover's probability of acceptance on a false initial claim is at most $\varepsilon$. This assumes the stated field and trusted evaluation are already supplied; it does not construct a field.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] False initial claims have acceptance probability at most min(1,sum_i d_i/|F|) for every adaptive prover ([[thm-sum-check-soundness]]).

## Proof

1.1 The soundness theorem bounds the false-claim acceptance probability by $\min(1,\sum_i d_i/|F|)$. [F1, given]

2.1 Since $|F|>0$ and $\varepsilon>0$, the size hypothesis implies $\sum_i d_i/|F|\leq\varepsilon$. Combining gives the result, including $\sum_i d_i=0$ (zero error) and $\varepsilon\geq1$ (a possibly trivial guarantee). Equality in the field-size inequality is allowed. [step 1.1, given, algebra] ∎
