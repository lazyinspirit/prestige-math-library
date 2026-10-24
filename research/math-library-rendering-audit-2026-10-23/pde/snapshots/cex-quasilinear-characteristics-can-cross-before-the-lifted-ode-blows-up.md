---
id: cex-quasilinear-characteristics-can-cross-before-the-lifted-ode-blows-up
kind: counterexample
title: "Quasilinear characteristics can cross before the lifted ODE blows up"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-characteristic-crossing-and-caustic-for-first-order-pde, lem-local-solvability-of-the-augmented-characteristic-ode, thm-inviscid-burgers-characteristic-formula-and-first-crossing-time]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "First order PDE: The Methods of Characteristics"
      url: "https://www.kth.se/social/files/560a55b6f276543ece51692f/Lectures_Method_of_Characteristics.pdf"
---

## Statement refuted

If the lifted characteristic ODE continues, then the quasilinear PDE remains a single-valued classical graph.

## Counterexample

**Given:** Burgers data $u_0(\xi)=-\tanh\xi$.

**Proof technique:** direct.

1.1 The lifted characteristic is $Z(t,\xi)=-\tanh\xi$ and $X(t,\xi)=\xi-t\tanh\xi$, both defined for every $t\ge0$. [given, algebra]

2.1 Yet $X_\xi(1,0)=0$, so the projected map has a caustic at $t=1$. [step 1.1, algebra]

3.1 Thus the lifted ODE persists while inverse projection to a graph fails, refuting the statement. [step 2.1, given] ∎
