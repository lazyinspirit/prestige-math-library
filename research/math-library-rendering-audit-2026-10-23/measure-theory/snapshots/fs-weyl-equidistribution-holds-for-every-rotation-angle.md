---
id: fs-weyl-equidistribution-holds-for-every-rotation-angle
kind: false-statement
title: Weyl equidistribution fails for some rotation angles
status: published
origin: pipeline
deps: [def-equidistribution-mod-one, thm-weyl-equidistribution-for-irrational-rotations, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "§8.6, printed pp. 80–81"
proof_strategy: constructive
---

## Statement

Assume the Axiom of Countable Choice.  **False claim:** $({n\alpha})_{n\geq0}$ is equidistributed modulo one for every
real $\alpha$.

## Facts & Assumptions

**Given:** Countable choice and the angle $\alpha=0$.

[F1] Equidistribution requires the limiting frequency in $[a,c)$ to be $c-a$ ([[def-equidistribution-mod-one]]).

[F2] The valid Weyl theorem assumes that the angle is irrational ([[thm-weyl-equidistribution-for-irrational-rotations]]).

[F3] Countable choice is the standing assumption of [F2] ([[def-countable-choice]]).

## Refutation

**Proof technique:** constructive.

1.1 For every $n\geq0$, $\{n\alpha\}=0$. [given, construct, algebra]

2.1 Therefore the proportion of the first $N$ terms in $[0,1/2)$ is $1$ for every $N\geq1$, whereas the interval length is $1/2$. [step 1.1, algebra]

3.1 This violates [F1] and refutes the claim.  The counterexample is rational, so it does not meet—and does not challenge—the irrationality hypothesis in [F2].  The arithmetic refutation itself makes no choice; countable choice is present only to compare it with [F2]. [F1, F2, F3, step 2.1, discharge-construct] ∎
