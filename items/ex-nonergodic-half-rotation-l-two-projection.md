---
id: ex-nonergodic-half-rotation-l-two-projection
kind: example
title: The invariant L2 projection for a half-rotation
status: draft
origin: pipeline
deps: [thm-von-neumann-mean-ergodic-theorem-in-l-two, thm-birkhoff-ergodic-theorem, prop-circle-rotations-preserve-lebesgue-measure, thm-lebesgue-measure-of-a-box-of-every-kind, def-axiom-of-choice]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "§§9.5–9.6 and 10.5, printed pp. 84–97"
proof_strategy: direct
---

## Example

Assume the Axiom of Choice.  For $T=R_{1/2}$ and
$f=\mathbf1_{[0,1/4)}$, the orthogonal projection onto the invariant
$L^2$ subspace is

$$P_Mf=\frac12\mathbf1_{[0,1/4)\cup[1/2,3/4)}.$$

Both the pointwise and $L^2$ ergodic averages converge to this nonconstant
function.

## Facts & Assumptions

**Given:** Full choice, Lebesgue probability on the circle, $T=R_{1/2}$, and $f=\mathbf1_{[0,1/4)}$.

[F1] The half-rotation preserves Lebesgue probability ([[prop-circle-rotations-preserve-lebesgue-measure]]).

[F2] Von Neumann's theorem says $A_nf\to P_Mf$ in complex $L^2$ ([[thm-von-neumann-mean-ergodic-theorem-in-l-two]]).

[F3] Birkhoff gives the pointwise almost-everywhere limit for this $L^1$ observable ([[thm-birkhoff-ergodic-theorem]]).

[F4] Full choice is the assumption recorded in [[def-axiom-of-choice]].

[F5] Half-open intervals have Lebesgue measure equal to their length ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

## Verification

**Proof technique:** direct period-two calculation and uniqueness of the norm limit.

1.1 Since $T^2$ is the identity, $f\circ T=\mathbf1_{[1/2,3/4)}$ and the summands in $A_nf$ alternate between $f$ and $f\circ T$. [given, algebra]

2.1 Put $g=(f+f\circ T)/2$.  For $n=2q$, $A_nf=g$ exactly; for $n=2q+1$, $|A_nf-g|\leq1/n$ everywhere.  Therefore $A_nf\to g$ both pointwise and in $L^2$, since the circle has measure one. [F1, step 1.1, algebra]

2.2 The function $g$ is $\frac12\mathbf1_{[0,1/4)\cup[1/2,3/4)}$.  The half-rotation interchanges its two support intervals, so $g\circ T=g$; it is nonconstant because [F5] gives positive measure to both its support and complement. [F1, F5, step 1.1]

3.1 By [F2], the same sequence $A_nf$ has $L^2$ limit $P_Mf$.  Uniqueness of limits in the $L^2$ norm and step 2.1 therefore give $P_Mf=g$.  Step 2.1 also strengthens the pointwise almost-everywhere conclusion of [F3] to convergence at every point in this example. [F2, F3, step 2.1, step 2.2]

4.1 Full choice is used only through the projection theorem [F2], as recorded by [F4]; the period-two computation itself is explicit. [F2, F4, step 3.1] ∎
