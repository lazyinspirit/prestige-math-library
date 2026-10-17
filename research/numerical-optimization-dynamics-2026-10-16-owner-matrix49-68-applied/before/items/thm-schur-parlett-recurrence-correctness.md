---
id: thm-schur-parlett-recurrence-correctness
kind: theorem
title: "Separated Schur–Parlett blocks reconstruct the analytic matrix function"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps:
  - alg-schur-parlett-matrix-function
  - thm-analytic-primary-matrix-function-jordan-contour-agreement
  - thm-sylvester-unique-solvability-spectral-separation
  - thm-bartels-stewart-sylvester-exact-correctness
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jan Zur, Matrix Functions, TU Berlin full lecture notes"
      url: "https://www.tu.berlin/fileadmin/www/40000110/Dauer-Wimis/Jan_Zur/matrix_functions_zur.pdf"
    - title: "Philip I. Davies and Nicholas J. Higham, A Schur–Parlett Algorithm for Computing Matrix Functions"
      url: "https://eprints.maths.manchester.ac.uk/156/1/paper.pdf"
---

## Statement

If [[alg-schur-parlett-matrix-function]] returns parlett-success for an exact
Schur pair $A=QTQ^*$, then its returned factored matrix $QFQ^*$ equals the
analytic primary matrix function $f(A)$. This is a conditional exact
correctness result, not a stability bound for the rounded Schur candidate
generation.

## Facts & Assumptions

**Given:** A successful algorithm output, its exact Schur certificate, its
diagonal Jordan evaluations, and its exact Sylvester block solves.

[F1] Success requires exact identities $Q^*Q=I$ and $A=QTQ^*$, diagonal blocks
$F_{ii}=f(T_{ii})$, and the block Parlett Sylvester equations
([[alg-schur-parlett-matrix-function]]).

[F2] The analytic primary function is a polynomial in its matrix, commutes
with it, and preserves block upper triangular form with diagonal blocks
$f(T_{ii})$
([[thm-analytic-primary-matrix-function-jordan-contour-agreement]]).

[F3] A Sylvester equation has a unique solution when the two coefficient
spectra are disjoint
([[thm-sylvester-unique-solvability-spectral-separation]]).

[F4] A successful Bartels–Stewart substitution returns the exact local
Sylvester solution ([[thm-bartels-stewart-sylvester-exact-correctness]]).

## Proof

1.1 Let $G=f(T)$. By [F2], $G$ is block upper triangular with diagonal blocks $G_{ii}=f(T_{ii})$. By [F1], the algorithm's diagonal blocks equal these blocks. [F1, F2]

1.2 Expanding $GT=TG$ in block $(i,j)$ for $i<j$ gives $T_{ii}G_{ij}-G_{ij}T_{jj} =G_{ii}T_{ij}-T_{ij}G_{jj} +\sum_{i<k<j}(G_{ik}T_{kj}-T_{ik}G_{kj}).$ This is the recurrence solved by the algorithm. [F1, F2, algebra]

2.1 Induct on the block distance $j-i$. At distance one, the recurrence right-hand side in step 1.2 uses only the matching diagonal blocks from step 1.1. The successful local solve from [F4] returns its exact solution, which is unique by [F3]; hence $F_{ij}=G_{ij}$. At larger distance, all shorter blocks on the right-hand side already agree by induction, so the same uniqueness argument gives $F_{ij}=G_{ij}$. [F1, F3, F4, step 1.1, step 1.2, induction]

3.1 Steps 1.1 and 2.1 show $F=G=f(T)$. By [F1], $A=QTQ^*$ with $Q$ unitary; similarity invariance in [F2] gives $QFQ^*=Qf(T)Q^*=f(A)$, which is the returned factored value. [F1, F2, step 1.1, step 2.1] ∎
