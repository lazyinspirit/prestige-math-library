---
id: thm-finite-budget-shift-invert-and-harmonic-procedures-return-a-status
kind: theorem
title: "Finite-budget shift-invert and harmonic extraction return a status under finite-return primitives"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - alg-shift-invert-and-harmonic-ritz-extraction
  - alg-finite-budget-qz-iteration-with-deflation-and-residual
  - prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Yousef Saad, Numerical Methods for Large Eigenvalue Problems, second edition, §§8.1.1–8.1.3"
      url: "https://www-users.cse.umn.edu/~saad/eig_book_2ndEd.pdf"
    - title: "Peter Arbenz, Lecture Notes on Solving Large Scale Eigenvalue Problems, §12.6"
      url: "https://people.inf.ethz.ch/arbenz/ewp/Lnotes/lsevp.pdf"
---

## Statement

Consider a valid shift-invert or harmonic-extraction execution of
[[alg-shift-invert-and-harmonic-ritz-extraction]]. Assume each invoked solve,
projected eigensolve, finite-dimensional arithmetic or orthogonalization
operation returns its value or prescribed failure status after finitely
many operations. On the harmonic branch, also assume the finite-budget QZ
run satisfies the operationwise arithmetic hypotheses of
[[prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence]].
Then the execution returns one of the statuses listed by the algorithm after
finitely many operations.

## Facts & Assumptions

**Given:** A valid input to one branch of the shift-invert and harmonic
extraction procedure, its finite Arnoldi dimension and QZ sweep budget, and
the finite-return conditions in the statement.

[F1] [[alg-shift-invert-and-harmonic-ritz-extraction]]: the shift-invert
branch uses at most $m$ Arnoldi solves and at most one additional solve per
Ritz candidate.

[F2] [[alg-shift-invert-and-harmonic-ritz-extraction]]: the harmonic branch
tests the rank of $W$ before its finite QZ call; full column rank makes the
projected pencil regular, and the algorithm maps every QZ status and checks
finitely many diagonal pairs.

[F3] [[alg-finite-budget-qz-iteration-with-deflation-and-residual]]: QZ takes
a finite sweep budget and processes finite-dimensional input using finite
index loops.

[F4] [[prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence]]:
under the QZ algorithm's stated operationwise arithmetic hypotheses, every
finite-budget QZ run returns a declared status.

[A1] Every solve request, projected eigensolve, finite-dimensional
arithmetic, QR, and other non-QZ operation invoked by the shift-invert and
harmonic procedure returns a value or its prescribed failure status in
finite work.

## Proof

1.1 In the shift-invert branch, the Arnoldi loop has exactly $m$ requested solves unless an earlier solve failure or exact breakdown returns. The Ritz extraction has finitely many candidates (at most $m$); each candidate invokes at most one additional solve. By [A1], each such operation and each residual calculation returns in finite work, and every failure branch explicitly returns a listed status. Therefore this branch terminates. [given, F1, A1, algebra]

1.2 In the harmonic branch, forming $W,G,C$ and computing the rank of $W$ use finite-dimensional operations by [A1]. If the rank is below $k$, the algorithm returns `projected-pencil-unresolved` before QZ. If the rank is $k$, its statement gives a regular projected pencil and calls QZ with the finite budget $N$; [F3, F4] then give a QZ status after finitely many operations under the assumed QZ hypotheses. [given, F2, F3, F4, A1, cases]

2.1 After a QZ return, the algorithm maps each possible QZ status to one of its own listed statuses. On `qz-computed`, it inspects only the finitely many diagonal pairs of the finite projected pencil and either returns on an unresolved pair or completes the candidate list. Thus the harmonic branch also terminates, proving the assertion for both branches. [F2, step 1.2, cases] ∎
