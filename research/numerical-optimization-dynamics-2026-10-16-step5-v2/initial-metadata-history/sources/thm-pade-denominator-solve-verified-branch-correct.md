---
id: thm-pade-denominator-solve-verified-branch-correct
kind: theorem
title: "An exact residual check certifies the Padé denominator solve"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-pade-denominator-solve-by-householder-qr
  - def-diagonal-pade-approximant-for-exponential
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Awad H. Al-Mohy and Nicholas J. Higham, A New Scaling and Squaring Algorithm for the Matrix Exponential"
      url: "https://eprints.maths.manchester.ac.uk/1217/1/paper9.pdf"
    - title: "Jan Zur, Matrix Functions, TU Berlin full lecture notes"
      url: "https://www.tu.berlin/fileadmin/www/40000110/Dauer-Wimis/Jan_Zur/matrix_functions_zur.pdf"
---

## Statement

If [[alg-pade-denominator-solve-by-householder-qr]] returns
verified-solution with output $X$ for exact complex matrices $M,C$ in its declared exact-controller model, then
$MX=C$ exactly. If $M$ is invertible, this solution is unique; in particular,
when used with an invertible Padé denominator, it is the exact denominator solve. This includes the original rational-input
instance and its finite exact rational audit whenever the adapter encodings
are supplied.

## Facts & Assumptions

**Given:** Exact complex matrices $M,C$ and a verified-solution output $X$.

[F1] The algorithm returns verified-solution only after exact controller
evaluation of $MX-C$ gives the zero matrix
([[alg-pade-denominator-solve-by-householder-qr]]).

[F2] The Padé numerator and denominator are $p_m(z)$ and
$q_m(z)=p_m(-z)$, and $r_m=p_m/q_m$ where the denominator is nonzero
([[def-diagonal-pade-approximant-for-exponential]]).

## Proof

1.1 By [F1], the exact residual $MX-C$ is zero, so the returned matrix satisfies $MX=C$. [given, F1]

2.1 If $M$ is invertible, left multiplication by $M^{-1}$ gives $X=M^{-1}C$, which is the unique solution. In the Padé use, take $M=Q_m(B)=q_m(B)$ and $C=P_m(B)=p_m(B)$ by [F2]; the conclusion applies whenever this denominator matrix is invertible. [F2, step 1.1, algebra] ∎
