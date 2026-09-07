---
id: cex-liouville-needs-one-sided-boundedness
kind: counterexample
title: "Liouville needs one sided boundedness"
status: published
origin: pipeline
deps: [thm-liouville-theorem-for-bounded-harmonic-functions]
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
    - title: "Gantumur, Harmonic functions"
      url: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf
      locator: "§5 Corollary 6 and Exercise 10, p.8, affine hypothesis test"
---

## Statement refuted

For $n\ge2$, an entire real harmonic function need not be constant without a one-sided bound. The coordinate function $u(x)=x_1$ is a counterexample.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement refuted.

[F1] An entire real harmonic function is constant if it is bounded above or bounded below. ([[thm-liouville-theorem-for-bounded-harmonic-functions]]).

## Counterexample

**Proof technique:** direct.

1.1 All second derivatives vanish, so $u$ is entire harmonic, and $u(e_1)=1\ne0=u(0)$. [given, algebra]

2.1 As $t\to\infty$, $u(te_1)=t\to\infty$ and $u(-te_1)=-t\to-\infty$. Thus neither global one-sided boundedness hypothesis of Liouville is present, and constancy fails. [F1, step 1.1, algebra] ∎
