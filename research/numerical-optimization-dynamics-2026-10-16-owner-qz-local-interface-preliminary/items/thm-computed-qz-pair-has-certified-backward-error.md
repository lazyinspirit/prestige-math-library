---
id: thm-computed-qz-pair-has-certified-backward-error
kind: theorem
title: "Certified QZ residuals give a backward error bound for both pencil matrices"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - alg-finite-budget-qz-iteration-with-deflation-and-residual
  - prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence
  - lem-two-sided-unitary-equivalence-errors-accumulate-for-pencil
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
  - lem-scaled-householder-step-meets-local-backward-error-premise
  - thm-computed-francis-schur-backward-error
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Daniel Kressner, Numerical Methods and Software for General and Structured Eigenvalue Problems (PhD dissertation, 2004), Chapter 2: The QZ Algorithm, §2.3"
      url: "https://pages.mtu.edu/~struther/Courses/OLD/Other/Sp2012/5627/BlockQR/Work/kressner_daniel.pdf"
    - title: "LAPACK Users' Guide, Error Bounds for the Generalized Nonsymmetric Eigenproblem"
      url: "https://www.netlib.org/lapack/lug/node102.html"
---

## Statement

Suppose [[alg-finite-budget-qz-iteration-with-deflation-and-residual]]
returns exact unitary factor products $Q,Z$, factors $S,T$, and exact local
arithmetic and deflation residuals as specified there. If each local residual
pair has a certified bound, then the accumulated theorem
[[lem-two-sided-unitary-equivalence-errors-accumulate-for-pencil]] gives
perturbations $\Delta_A,\Delta_B$ such that
$$Q^*(A+\Delta_A)Z=S,\qquad Q^*(B+\Delta_B)Z=T,$$
with combined Frobenius error bounded by the sum of the certified local pair
errors and deflation errors. This implication is conditional: it does not
assert that a concrete rounded QZ rotation generator or update satisfies a
particular $O(u)$ local bound.

Independently, if the exact raw residuals are
$$R_A=Q^*AZ-S,\qquad R_B=Q^*BZ-T,$$
then the choices $\Delta_A=-Q R_A Z^*$ and $\Delta_B=-Q R_B Z^*$ satisfy the
same equations and
$$\sqrt{\|\Delta_A\|_F^2+\|\Delta_B\|_F^2} =\sqrt{\|R_A\|_F^2+\|R_B\|_F^2}.$$
Certified upper bounds on the two residual norms therefore give an
a-posteriori backward-error certificate for the pair.

## Facts & Assumptions

**Given:** A run with exact unitary factor records, computed factors $(S,T)$,
local arithmetic/deflation residuals, and any claimed certified residual norm
upper bounds.

[F1] [[prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence]]:
the completed run has the stated accumulated perturbation representation
whenever all local residual certificates are available.

[F2] [[lem-two-sided-unitary-equivalence-errors-accumulate-for-pencil]]: the
global pair perturbation is bounded by the sum of the local pair and deflation
norms.

[F3] [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]:
left or right unitary multiplication preserves the Frobenius norm.

[A1] The local residual certificates are hypotheses. The inspected in-run
supplier [[lem-scaled-householder-step-meets-local-backward-error-premise]]
proves a one-sided Householder step bound, while
[[thm-computed-francis-schur-backward-error]] is conditional on a distinct
two-sided local premise. Neither proves the QZ local premise in this theorem.

## Proof

1.1 Under [A1], apply [F1] and [F2] to the finite list of left/right QZ updates, keeping each explicit deflation as its own local perturbation. This gives $Q^*(A+\Delta_A)Z=S$ and $Q^*(B+\Delta_B)Z=T$ with the asserted sum of local pair error bounds. This step claims no size bound beyond the supplied certificates. [given, F1, F2, A1]

2.1 From the definitions of $R_A,R_B$, set $\Delta_A=-QR_AZ^*$ and $\Delta_B=-QR_BZ^*$. Exact unitarity gives $Q^*\Delta_A Z=-R_A$ and $Q^*\Delta_B Z=-R_B$, so adding the residuals proves both displayed backward equations. By [F3], $\|\Delta_A\|_F=\|R_A\|_F$ and $\|\Delta_B\|_F=\|R_B\|_F$; squaring and adding proves the exact pair equality. [given, F3, algebra, construct] ∎
