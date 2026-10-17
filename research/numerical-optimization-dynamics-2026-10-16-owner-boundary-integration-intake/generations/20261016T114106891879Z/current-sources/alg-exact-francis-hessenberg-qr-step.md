---
id: alg-exact-francis-hessenberg-qr-step
kind: algorithm
title: "Exact finite Francis single- or double-shift Hessenberg QR step"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices
  - def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift
  - thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries
  - lem-francis-compact-bulge-support-propagation
  - lem-real-francis-double-shift-polynomial
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "James Demmel, Applied Numerical Linear Algebra, §4.4.8"
      url: https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_16.html
    - title: "David Bindel, CS 6210 Matrix Computations, Hessenberg QR iteration"
      url: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-29.html
---

## Definition

Input an exact upper-Hessenberg matrix $H\in\mathbb F^{n\times n}$, with $\mathbb F=\mathbb C$ or $\mathbb R$ and $n\ge1$, and exactly one shift descriptor:

1. **Complex single shift:** $\mathbb F=\mathbb C$ and $\mu\in\mathbb C$. Set $p(z)=z-\mu$ and $r=1$.
2. **Real double shift:** $\mathbb F=\mathbb R$, $n\ge2$, and $p(z)=z^2-sz+t$ with $s,t\in\mathbb R$. In the ordinary Francis branch, $s$ and $t$ are the trace and determinant of the trailing $2\times2$ block; a declared exceptional shift may supply another real pair. Set $r=2$.

Form $x=p(H)e_1$. For a Hessenberg $H$, $x$ is supported in its first $r+1$ entries; compute only those entries. If $x=0$, return $H_+=H$, $Q=I$, and status zero-shift-vector. Otherwise choose a Householder reflector $P_0$ on the first $\min(r+1,n)$ coordinates with $P_0x=\alpha e_1$, embed it in $\mathbb F^{n\times n}$, and set $H_1=P_0^*HP_0$, $Q=P_0$.

For $j=1,\ldots,\max(n-2,0)$, in increasing order, let $I_j=\{j+1,\ldots,\min(j+r+1,n)\}$. Thus $I_j$ has at most three indices in a real double shift and at most two in a complex single shift. Extract $y=(H_j)_{I_j,j}$. If $y=0$, use the identity on $I_j$; otherwise choose a Householder reflector $P_j$ on $I_j$ sending $y$ to a multiple of its first coordinate vector. Embed $P_j$ in the identity, update $H_{j+1}=P_j^*H_jP_j$, and append it to $Q$ on the right. After the finite chase, check the exact matrix zero pattern and the first-column condition. Return completed only if the output is upper Hessenberg and $Qe_1$ is proportional to $p(H)e_1$; otherwise return bulge-chase-invariant-failure with the partial similarity factors. The procedure makes no convergence claim.

## Facts & Assumptions

**Given:** An exact upper-Hessenberg $H$, a valid shift descriptor, and exact arithmetic.

[F1] [[def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices]]: entries below the first subdiagonal of $H$ vanish.

[F2] [[thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]]: a Householder reflector is unitary and maps each nonzero active vector to a multiple of the first coordinate vector.

[F3] [[lem-real-francis-double-shift-polynomial]]: the real double-shift polynomial from a trailing $2\times2$ block has real coefficients and factors over $\mathbb C$ as its two roots.

[F4] [[lem-francis-compact-bulge-support-propagation]]: length-2/3 Householder windows restore the Hessenberg pattern after the finite chase and preserve the initial vector direction.

## Proof

1.1 If $H$ is upper Hessenberg, then $He_1$ is supported in rows $1,2$; applying $H$ once more makes $H^2e_1$ supported in rows $1,2,3$. Thus the defined $p(H)e_1$ is supported in its first $r+1$ entries for either shift descriptor. [given, F1, algebra]

2.1 If the initial vector is zero, the algorithm returns the identity step. Otherwise [F2] supplies $P_0$. Each later active vector either is zero, in which case its identity branch is defined, or [F2] supplies $P_j$. The loop has at most $\max(n-2,0)$ iterations, so the step terminates. In the ordinary real branch [F3] identifies the trace/determinant polynomial with the conjugate-pair shifts when the trailing block has negative discriminant. [given, F2, F3, step 1.1, choose]

3.1 Every update is the exact similarity $H_{j+1}=P_j^*H_jP_j$. Hence the product $Q=P_0P_1\cdots P_j$ gives $H_{j+1}=Q^*HQ$ by induction on the finite update list; every factor is unitary by [F2]. [F2, step 2.1, algebra]

4.1 In the nonzero-vector branch, [F4] proves that the final matrix is upper Hessenberg and $Qe_1$ is proportional to $p(H)e_1$, so the exact checks return completed. The zero-vector branch already returned its explicit status. Hence the invariant-failure branch is unreachable for valid exact inputs, and every returned status and similarity factor is well-defined. [given, F4, step 3.1, algebra] ∎
