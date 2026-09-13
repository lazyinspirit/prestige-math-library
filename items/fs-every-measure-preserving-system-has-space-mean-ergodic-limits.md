---
id: fs-every-measure-preserving-system-has-space-mean-ergodic-limits
kind: false-statement
title: Ergodic averages need not equal the space mean without ergodicity
status: published
origin: pipeline
deps: [def-ergodic-partial-sums-time-averages-and-invariant-l-two-subspace, prop-circle-rotations-preserve-lebesgue-measure, thm-lebesgue-measure-of-a-box-of-every-kind, def-countable-choice]
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
      locator: "§§10.1 and 10.5, printed pp. 89–97"
proof_strategy: constructive
---

## Statement

Assume the Axiom of Countable Choice.  **False claim:** in every measure-preserving probability system, $A_nf$
converges almost everywhere to the constant $\int f\,d\mu$.

## Facts & Assumptions

**Given:** Countable choice, Lebesgue probability on the circle, $T=R_{1/2}$,
and $f=\mathbf1_E$ for $E=[0,1/4)\cup[1/2,3/4)$.

[F1] Every circle rotation preserves Lebesgue probability ([[prop-circle-rotations-preserve-lebesgue-measure]]).

[F2] The averages are $A_nf=n^{-1}\sum_{k<n}f\circ T^k$ ([[def-ergodic-partial-sums-time-averages-and-invariant-l-two-subspace]]).

[F3] Half-open intervals have Lebesgue measure equal to their length ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F4] Countable choice is the standing assumption required by the circle-measure and interval-measure suppliers ([[def-countable-choice]]).

## Refutation

**Proof technique:** constructive invariant witness.

1.1 Addition of $1/2$ modulo one interchanges the two component intervals of $E$.  Therefore $T^{-1}E=E$ and $f\circ T=f$. [given, construct, algebra]

2.1 It follows from [F2] that $A_nf=f$ at every point for every $n\geq1$. Yet $f$ is nonconstant, while $\int f\,d\lambda=1/4+1/4=1/2$ by [F3]. [F2, F3, step 1.1]

3.1 Thus this measure-preserving probability system has a bounded observable whose averages do not approach its constant space mean.  Ergodicity is the missing hypothesis.  Countable choice is used only through [F1] and [F3]. [F1, F3, F4, step 2.1, discharge-construct] ∎
