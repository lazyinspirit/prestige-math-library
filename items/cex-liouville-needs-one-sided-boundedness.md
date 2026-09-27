---
id: cex-liouville-needs-one-sided-boundedness
kind: counterexample
title: "Liouville needs one sided boundedness"
status: published
origin: pipeline
deps: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-08-receipts.jsonl (cex-liouville-needs-one-sided-boundedness). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Gantumur, Harmonic functions"
      url: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf
      locator: "§5 Corollary 6 and Exercise 10, p.8, affine hypothesis test"
---

## Statement refuted

For $n\ge2$, an entire real harmonic function need not be constant without a one-sided bound. The coordinate function $u(x)=x_1$ is a counterexample.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement refuted.

## Counterexample

**Proof technique:** direct.

1.1 All second derivatives vanish, so $u$ is entire harmonic, and $u(e_1)=1\ne0=u(0)$. [given, algebra]

2.1 As $t\to\infty$, $u(te_1)=t\to\infty$ and $u(-te_1)=-t\to-\infty$. Thus it has neither a global upper nor a global lower bound, while step 1.1 already shows it is nonconstant. [step 1.1, algebra] ∎
