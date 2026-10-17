---
id: lem-exact-francis-step-termination-and-similarity
kind: lemma
title: "An exact Francis step terminates with unitary similarity and its stated status"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-exact-francis-hessenberg-qr-step
  - def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices
  - def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift
  - thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries
  - lem-francis-compact-bulge-support-propagation
  - lem-real-francis-double-shift-polynomial
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "James Demmel, Applied Numerical Linear Algebra, §4.4.8"
      url: https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_16.html
    - title: "David Bindel, CS 6210 Matrix Computations, Hessenberg QR iteration"
      url: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-29.html
---

## Statement

For every valid input of [[alg-exact-francis-hessenberg-qr-step]], and every allowed choice of its reflectors, the procedure terminates. If $x=p(H)e_1=0$, it returns $H_+=H$, $Q=I$ and `zero-shift-vector`. Otherwise it returns `completed`, with $H_+=Q^*HQ$ upper Hessenberg, $Q$ unitary, and $Qe_1=x/\alpha$, where $P_0x=\alpha e_1$ and $\alpha\ne0$. The `bulge-chase-invariant-failure` branch is unreachable for valid exact inputs. These claims include real exceptional quadratic descriptors and make no convergence assertion.

## Facts & Assumptions

**Given:** An exact upper-Hessenberg $H$, a valid shift descriptor, and exact arithmetic.

[F1] [[def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices]]: entries below the first subdiagonal of $H$ vanish.

[F2] [[thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]]: a Householder reflector is unitary and maps each nonzero active vector to a multiple of the first coordinate vector.

[F3] [[lem-real-francis-double-shift-polynomial]]: the real double-shift polynomial from a trailing $2\times2$ block has real coefficients and factors over $\mathbb C$ as its two roots.

[F4] [[lem-francis-compact-bulge-support-propagation]]: length-2/3 windows restore the Hessenberg pattern and preserve the initial direction when every chosen factor aligns its active vector. The algorithm uses the identity only for zero vectors and otherwise chooses an aligning reflector.

## Proof

1.1 If $H$ is upper Hessenberg, then $He_1$ is supported in rows $1,2$; applying $H$ once more makes $H^2e_1$ supported in rows $1,2,3$. Thus the defined $p(H)e_1$ is supported in its first $r+1$ entries for either shift descriptor. [given, F1, algebra]

2.1 If the initial vector is zero, the algorithm returns the identity step. Otherwise [F2] supplies $P_0$. Each later active vector either is zero, in which case its identity branch is defined, or [F2] supplies $P_j$. The loop has at most $\max(n-2,0)$ iterations, so the step terminates. In the ordinary real branch [F3] identifies the trace/determinant polynomial with the conjugate-pair shifts when the trailing block has negative discriminant. [given, F2, F3, step 1.1, choose]

3.1 Every update is the exact similarity $H_{j+1}=P_j^*H_jP_j$. Hence the product $Q=P_0P_1\cdots P_j$ gives $H_{j+1}=Q^*HQ$ by induction on the finite update list; every factor is unitary by [F2]. [F2, step 2.1, algebra]

4.1 In the nonzero-vector branch, [F4] proves that the final matrix is upper Hessenberg and $Qe_1$ is proportional to $p(H)e_1$, so the exact checks return completed. The zero-vector branch already returned its explicit status. Hence the invariant-failure branch is unreachable for valid exact inputs, and every returned status and similarity factor is well-defined. [given, F4, step 3.1, algebra] ∎
