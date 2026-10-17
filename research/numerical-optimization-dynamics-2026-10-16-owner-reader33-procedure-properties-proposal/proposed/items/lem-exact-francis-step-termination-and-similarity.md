---
id: lem-exact-francis-step-termination-and-similarity
kind: lemma
title: "An exact Francis step terminates with unitary similarity and its stated status"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - alg-exact-francis-hessenberg-qr-step
  - def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices
  - def-householder-reflector
  - thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries
  - lem-francis-compact-bulge-support-propagation
  - lem-real-francis-double-shift-polynomial
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references: []
---

## Statement

For every admitted exact input and shift descriptor of [[alg-exact-francis-hessenberg-qr-step]], and every allowed choice of its reflectors, the procedure terminates. If $x=p(H)e_1=0$, it returns zero-shift-vector with $H_+=H$ and $Q=I$. Otherwise it returns completed after one initial reflector and at most $\max(n-2,0)$ chase reflectors; its output satisfies
$$H_+=Q^*HQ,\qquad Q^*Q=I,$$
is upper Hessenberg, and obeys $Qe_1=x/\alpha$, where $P_0x=\alpha e_1$ and $\alpha\ne0$. Thus bulge-chase-invariant-failure is unreachable for valid exact inputs. Real double-shift input gives real factors and matrices, including exceptional real quadratic descriptors. No convergence or nonsingular-shift assumption is asserted.

## Facts & Assumptions

**Given:** The exact finite-dimensional input and one valid complex-single or real-double shift descriptor.

[F1] [[alg-exact-francis-hessenberg-qr-step]] specifies the zero return, initial factor, ordered chase, similarity updates and final exact checks.

[F2] [[def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices]] gives $h_{ij}=0$ for $i>j+1$.

[F3] [[thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]] supplies a real or complex self-adjoint unitary reflector mapping any nonzero active vector to the first coordinate, with output modulus its norm.

[F4] [[lem-francis-compact-bulge-support-propagation]], applied with each chase factor mapping its active segment into the first-coordinate line (identity for a zero segment), supplies the final Hessenberg pattern and initial-direction identity.

[F5] [[lem-real-francis-double-shift-polynomial]] supplies the real trace/determinant polynomial and, when its discriminant is negative, its nonreal conjugate roots in the ordinary real branch; an exceptional real coefficient pair is admitted directly by [F1].

[F6] [[def-householder-reflector]] defines the self-adjoint reflector $I-2vv^*$ for a unit normal; its square is the identity by direct multiplication.

## Proof

1.1 By [F2], $He_1$ is supported in its first two coordinates and $H^2e_1$ in its first three. Hence either admitted polynomial vector is supported in its first $r+1$ coordinates, truncated by $n$. Its finite construction therefore equals the full $p(H)e_1$. A zero vector returns precisely the identity record of [F1]. [given, F1, F2, algebra]

1.2 If the vector is nonzero, [F3] supplies the initial reflector with $|\alpha|=\|x\|_2>0$. At every later finite chase index the active vector is zero, so its identity is specified, or is nonzero, so [F3] supplies the required reflector. There are at most $\max(n-2,0)$ such indices and finitely many exact entry operations and checks, proving termination. Real input and a real polynomial use real vectors and may use the real reflectors prescribed in the real branch. [given, F1, F3, F5, step 1.1, choose]

2.1 Every appended factor is unitary, with the identity included. If the partial factor product is $Q_j$ and the current matrix is $Q_j^*HQ_j$, the next prescribed update gives $P_j^*Q_j^*HQ_jP_j=(Q_jP_j)^*H(Q_jP_j)$. Starting from the initial factor, finite induction proves the asserted final similarity. The adjoint of the product reverses the factors and cancels them pairwise, so $Q^*Q=I$. [F1, F3, step 1.2, induction, algebra]

2.2 The actual [F1] choices satisfy [F4]: every nonzero active vector is aligned by its reflector, and every zero active vector by the identity. Therefore the final matrix is upper Hessenberg. Each later factor fixes $e_1$ and the self-adjoint initial reflector obeys $P_0e_1=x/\alpha$; hence $Qe_1=x/\alpha$. Both final exact checks in [F1] succeed. Together with the zero case in step 1.1, this excludes invariant-failure and proves all stated output properties. [F1, F3, F4, F6, step 1.1, step 2.1, algebra] ∎

## Remarks

This extracts and states the existing exact procedure's properties, reusing the compact support/direction proof. No new external full-text reading is claimed.
