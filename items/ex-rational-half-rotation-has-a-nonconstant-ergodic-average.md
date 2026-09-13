---
id: ex-rational-half-rotation-has-a-nonconstant-ergodic-average
kind: example
title: A rational half-rotation has a nonconstant ergodic limit
status: published
verification:
  audited: 2026-09-14
origin: pipeline
deps: [def-ergodic-partial-sums-time-averages-and-invariant-l-two-subspace, prop-circle-rotations-preserve-lebesgue-measure, thm-lebesgue-measure-of-a-box-of-every-kind, def-countable-choice]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "§§10.1 and 10.5, printed pp. 89–97"
proof_strategy: direct
---

## Example

Assume the Axiom of Countable Choice.  For $T=R_{1/2}$ on the circle and $f=\mathbf1_{[0,1/4)}$, the averages converge
at every point to

$$g=\frac12\mathbf1_{[0,1/4)\cup[1/2,3/4)},$$

a nonconstant invariant function.

## Facts & Assumptions

**Given:** Countable choice, Lebesgue probability on the circle,
$T=R_{1/2}$, and $f=\mathbf1_{[0,1/4)}$.

[F1] The half-rotation preserves Lebesgue probability ([[prop-circle-rotations-preserve-lebesgue-measure]]).

[F2] The average is $A_nf=n^{-1}\sum_{k<n}f\circ T^k$ ([[def-ergodic-partial-sums-time-averages-and-invariant-l-two-subspace]]).

[F3] Half-open intervals have Lebesgue measure equal to their length ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F4] Countable choice is the standing assumption required by the circle-measure and interval-measure suppliers ([[def-countable-choice]]).

## Verification

**Proof technique:** direct period-two calculation.

1.1 Since $T^2$ is the identity, the summands alternate between $f$ and $f\circ T$.  Moreover $f\circ T=\mathbf1_{[1/2,3/4)}$. [given, algebra]

2.1 For $n=2q$, $A_nf=(f+f\circ T)/2=g$.  For $n=2q+1$, the counts of the two summands differ by one, so $|A_nf-g|\leq1/n$ pointwise. [F2, step 1.1]

3.1 It follows that $A_nf\to g$ at every point.  The half-rotation interchanges the two support intervals, so $g\circ T=g$; by [F3] it takes both values $0$ and $1/2$ on sets of positive measure and is therefore nonconstant. [F1, F3, step 1.1, step 2.1]

4.1 Finally, [F3] gives $\int g\,d\lambda=(1/2)(1/4+1/4)=1/4=\int f\,d\lambda$. Thus the limit preserves the mean but need not equal the constant mean in this nonergodic example.  Countable choice is used only through [F1] and [F3]. [F1, F3, F4, step 3.1, algebra] ∎
