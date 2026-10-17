---
id: cex-invalid-spatial-lower-bound-can-prune-global-minimum
kind: counterexample
title: An invalid lower bound can prune the true global minimizer
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound-examples
dependency_level: 4
deps: [alg-certified-spatial-branch-and-bound, def-spatial-box-bound-certificate, thm-spatial-bnb-gap-certificate-sound]
generation:
  role: counterexample
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Arnold Neumaier, Complete Search in Continuous Global Optimization and Constraint Satisfaction, §12"
      url: "https://optimization-online.org/wp-content/uploads/2003/10/765.pdf"
---

## Statement refuted

A branch-and-bound certificate remains sound even when a reported box lower bound can exceed the true infimum on that box.

## Construction

Take $D_0=[0,1]$, $f(x)=x$, $\varepsilon=1/2$, and the feasible witness $x=1$ with upper bound $U=1$. Suppose an invalid oracle reports $\ell(D_0)=1$.

## Verification

**Given:** The algorithm [[alg-certified-spatial-branch-and-bound]], except that its oracle violates the lower-bound condition in [[def-spatial-box-bound-certificate]].

[F1] A valid lower bound on a box must be at most the infimum of the feasible objective there. [[def-spatial-box-bound-certificate]]

[F2] If all terminal leaves have valid lower bounds, then a gap $U-L\le\varepsilon$ proves global epsilon-optimality. [[thm-spatial-bnb-gap-certificate-sound]]

1.1 The true infimum on $[0,1]$ is $f^*=0$, attained at $x=0$, whereas the reported value $1$ is not a lower bound because $1>0=f^*$. [given, algebra]

1.2 Since $1\ge U-\varepsilon=1/2$, the procedure would close the root and compute the spurious gap $U-\ell=0$, but its witness has error $f(1)-f^*=1>1/2$. [given, F1, algebra]

2.1 The claimed certificate contradicts the explicit objective difference, so the stated robustness to invalid lower bounds is false. This does not contradict [[thm-spatial-bnb-gap-certificate-sound]], whose hypothesis [F1] is violated. [F1, F2, step 1.2] ∎

