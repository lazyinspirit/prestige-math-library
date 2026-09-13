---
id: fs-birkhoff-limit-is-always-constant
kind: false-statement
title: A Birkhoff limit need not be constant
status: draft
origin: pipeline
deps: [def-ergodic-partial-sums-time-averages-and-invariant-l-two-subspace, prop-circle-rotations-preserve-lebesgue-measure, thm-lebesgue-measure-of-a-box-of-every-kind, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
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

Assume the Axiom of Countable Choice.  **False claim:** the almost-everywhere Birkhoff limit is constant without an
ergodicity hypothesis.

## Facts & Assumptions

**Given:** Countable choice, Lebesgue probability on the circle,
$T=R_{1/2}$, and $f=\mathbf1_{[0,1/4)\cup[1/2,3/4)}$.

[F1] The rotation $R_{1/2}$ preserves Lebesgue probability ([[prop-circle-rotations-preserve-lebesgue-measure]]).

[F2] The time averages use the iterates $T^k$ ([[def-ergodic-partial-sums-time-averages-and-invariant-l-two-subspace]]).

[F3] Half-open intervals have their displayed positive Lebesgue lengths ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F4] Countable choice is the standing assumption required by the circle-measure and interval-measure suppliers ([[def-countable-choice]]).

## Refutation

**Proof technique:** constructive invariant witness.

1.1 The half-rotation interchanges $[0,1/4)$ and $[1/2,3/4)$, so the union is invariant and $f\circ T=f$. [given, construct, algebra]

2.1 Every summand in $A_nf$ is therefore $f$, so $A_nf=f$ everywhere for every $n\geq1$. [F2, step 1.1]

3.1 By [F3], the function $f$ is $1$ on a set of measure $1/2$ and $0$ on its complement, hence is not almost everywhere constant.  Its Birkhoff limit in step 2.1 is consequently nonconstant, refuting the claim.  Countable choice is used only through [F1] and [F3]. [F1, F3, F4, step 2.1, discharge-construct] ∎
