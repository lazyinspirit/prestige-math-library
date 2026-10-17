---
id: ex-rotation-logarithm-branch-cut
kind: example
title: "A half-turn lies on the principal logarithm branch cut"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 9
deps:
  - alg-principal-matrix-logarithm-and-square-root
  - alg-finite-budget-francis-schur-reduction
  - cor-principal-logarithm-is-holomorphic-on-the-slit-plane
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Jan Zur, Matrix Functions, TU Berlin full lecture notes"
      url: "https://www.tu.berlin/fileadmin/www/40000110/Dauer-Wimis/Jan_Zur/matrix_functions_zur.pdf"
    - title: "Nicholas J. Higham, Functions of Matrices, Handbook of Linear Algebra, Chapter 17"
      url: "https://eprints.maths.manchester.ac.uk/2109/1/fm2_final_njh.pdf"
---

## Example

The planar half-turn $R_\pi=-I_2$ is invertible, and the principal logarithm
algorithm must return a branch-domain failure because its spectrum lies on the
removed negative-real axis.

## Facts & Assumptions

**Given:** $R_\pi=-I_2$, the principal logarithm request, and finite complex Francis controls with deflation tolerance $0$, sweep budget $0$, stagnation period $1$, and an empty exceptional-shift table for both Schur calls. The Schur–Parlett threshold is $0$, its initial partition is the two singletons, and its interval-keyed table contains the exact $1\times1$ Jordan certificate $Z=[1]$, $J=[-1]$ for each singleton. These block data are not used because the branch test fails first.

[F1] The holomorphic principal logarithm is defined on $S=\mathbb C\setminus(-\infty,0]$ ([[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]]).

[F2] The branch-aware procedure returns branch-domain-failure when an exact Schur diagonal eigenvalue lies in $(-\infty,0]$ ([[alg-principal-matrix-logarithm-and-square-root]]).

[F3] With sweep budget $0$, a complex Francis reduction returns Schur-computed when the initialized matrix is already upper triangular; when $n=2$ its Hessenberg initialization has no reflector columns ([[alg-finite-budget-francis-schur-reduction]]).

## Verification

1.1 The characteristic polynomial of $R_\pi$ is $(z+1)^2$, so its only eigenvalue is $-1$. This lies on the removed ray and hence outside $S$ by [F1]. [given, F1, algebra]

2.1 Here $n=2$, so [F3] performs no Hessenberg reflectors. The initialized matrix $-I_2$ is already upper triangular, and with zero sweeps the reduction returns the exact pair $Q=I_2$, $T=-I_2$; this pair passes $Q^*Q=I$ and $A=QTQ^*$. The branch test then sees the diagonal value $-1$ and returns branch-domain-failure by [F2]. This records only that the principal holomorphic branch is unavailable there. [F2, F3, step 1.1, algebra] ∎
