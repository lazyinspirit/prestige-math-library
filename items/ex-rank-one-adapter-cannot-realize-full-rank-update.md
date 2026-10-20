---
id: ex-rank-one-adapter-cannot-realize-full-rank-update
kind: example
title: "A rank-one adapter cannot realize a full-rank two-dimensional update"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [thm-low-rank-adapter-factorization-ambiguity]
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Example

Let $d=k=2$, $r=1$, $c=1$, and $W_0=0$. The target update $\Delta=I_2$ cannot be represented as $BA$ with $B\in\mathbb R^{2\times1}$ and $A\in\mathbb R^{1\times2}$.

## Facts & Assumptions

**Given:** The target matrix $I_2$ and the stated rank-one factor shapes.

[F1] [[thm-low-rank-adapter-factorization-ambiguity]]: every product $cBA$ with the stated factor shapes has rank at most $r$.

## Verification

1.1 The identity matrix $I_2$ maps $\mathbb R^2$ onto $\mathbb R^2$, so $\operatorname{rank}(I_2)=2$. [given, algebra]

2.1 For every $B\in\mathbb R^{2\times1}$ and $A\in\mathbb R^{1\times2}$, $\operatorname{im}(BA)\subseteq\operatorname{im}(B)$ and $\dim\operatorname{im}(B)\le1$; hence $\operatorname{rank}(BA)\le1$ by [F1]. This contradicts step 1.1 if $BA=I_2$, so no such factors represent the target. [given, F1, step 1.1, algebra] ∎
