---
id: cex-indicators-of-unit-interval-translates-show-egorov-needs-finite-measure
kind: counterexample
title: "The translated unit intervals show that Egorov needs finite total measure"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [cex-indicators-of-unit-interval-translates-converge-almost-everywhere-but-not-in-measure, thm-almost-uniform-convergence-implies-almost-everywhere-and-in-measure]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
---

## Statement refuted

Egorov's theorem holds on every measure space.

## Facts & Assumptions

**Given:** Lebesgue measure on $\mathbb R$ and the sequence $f_n:=\chi_{[n,n+1]}$.

[L1] This sequence converges almost everywhere to $0$ but not in measure. ([[cex-indicators-of-unit-interval-translates-converge-almost-everywhere-but-not-in-measure]])

[L2] Almost-uniform convergence implies convergence in measure. ([[thm-almost-uniform-convergence-implies-almost-everywhere-and-in-measure]])

## Counterexample

**Proof technique:** direct.

1.1 By [L1], the sequence $f_n=\chi_{[n,n+1]}$ converges almost everywhere to $0$. [L1]

2.1 If this convergence were almost uniform, then [L2] would force convergence in measure as well. But [L1] says that convergence in measure fails. So the convergence is not almost uniform. [L1, L2, discharge-contradiction] ∎
