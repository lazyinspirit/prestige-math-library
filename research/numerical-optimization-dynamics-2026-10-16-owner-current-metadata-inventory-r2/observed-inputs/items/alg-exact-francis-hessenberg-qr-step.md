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
justified_by: [lem-exact-francis-step-termination-and-similarity]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
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
