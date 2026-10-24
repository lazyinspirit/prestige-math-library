---
id: thm-orders-have-integral-bases-and-finite-index
kind: theorem
title: "Orders have integral bases and finite index"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-order-in-a-number-field, def-integral-basis-and-power-integral-basis, thm-ring-of-integers-free-of-rank-degree, thm-simultaneous-basis-theorem-for-pid-submodules]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Milne, Bases section"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

Every order has an integral basis and finite additive index in $\mathcal O_K$.

## Facts & Assumptions

**Given:** An order $\mathcal O\subseteq\mathcal O_K$.

[F1] $\mathcal O_K$ is free of rank $n$ ([[thm-ring-of-integers-free-of-rank-degree]]).

[F2] Full-rank PID submodules admit simultaneous bases ([[thm-simultaneous-basis-theorem-for-pid-submodules]]).

## Proof

**Proof technique:** direct.

1.1 The order has full rank by definition, so [F1] makes it a rank-$n$ submodule of a free rank-$n$ group. [F1, given]

2.1 Apply [F2]: the quotient is a finite direct sum of $\mathbb Z/a_i\mathbb Z$, and the resulting basis of $\mathcal O$ is integral. [F2, step 1.1] ∎
