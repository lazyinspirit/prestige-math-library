---
id: cex-hopf-conclusion-needs-a-strict-nonconstant-extremum
kind: counterexample
title: "Hopf conclusion needs a strict nonconstant extremum"
status: draft
origin: pipeline
deps: [thm-hopf-boundary-point-lemma-for-the-laplacian]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Gantumur, Harmonic functions"
      url: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf
      locator: "§8 Exercise 14, pp.14–15"
---

## Statement refuted

For $n\ge2$, a boundary maximum and an interior sphere alone do not force a strictly positive outward derivative. On $\overline B_1(0)$, the harmonic function $u\equiv0$ attains its maximum at every boundary point and has outward derivative zero there.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement refuted.

[F1] Hopf assumes a strict interior inequality below the boundary maximum as well as an interior tangent ball and the specified continuity and derivative conditions. ([[thm-hopf-boundary-point-lemma-for-the-laplacian]]).

## Counterexample

**Proof technique:** direct.

1.1 The function is smooth with zero Laplacian and zero boundary values. At each $p\in\partial B_1$, the ball itself is an interior tangent ball and its outward direction is $p$. [given, algebra]

2.1 For $0<t<2$, $(u(p)-u(p-tp))/t=0$, so the outward derivative is zero. The strict condition $u(x)<u(p)$ inside the domain, required by Hopf, fails; all its other stated conditions are satisfied. [F1, step 1.1, algebra] ∎
