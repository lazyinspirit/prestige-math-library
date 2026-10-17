---
id: prop-sparse-unrestarted-gmres-work-and-storage
kind: proposition
title: "Unrestarted GMRES has a sparse matvec plus orthogonalization work bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-arnoldi-process,
       thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization,
       def-gmres-iterate,
       def-csr-matrix-with-stored-entry-semantics,
       alg-csr-matrix-vector-product-with-validation,
       thm-csr-storage-and-exact-matvec-cost]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §§6.3–6.4, printed pp. 179–190"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
      locator: "Arnoldi orthogonalization, GMRES projected least squares, and incremental Givens updates. Operation counts are derived locally."
---

## Statement

Let $A\in\mathbb R^{n\times n}$ have a canonical CSR representation, with
$n\ge1$, at least one stored entry in every row, and
$s=\operatorname{nnz}(A)$. Let $r_0=b-Ax_0\ne0$ and $1\le m\le n$. Run
unrestarted GMRES in exact arithmetic for at most $m$ Arnoldi columns. At
column $j$, compute one CSR matrix-vector product, orthogonalize against the
$j$ existing vectors by either one or two complete modified Gram–Schmidt
passes, and update the projected least-squares problem by applying prior
Givens rotations and forming one new rotation. Each Givens rotation is an
orthogonal $2\times2$ matrix on adjacent rows chosen to zero the current
subdiagonal entry. If Arnoldi completes $m$
columns without breakdown, solve the resulting upper-triangular least-squares
factor; if it breaks down earlier, stop at that column and make no claim about
a separate rank-deficient fallback solve. Count field arithmetic and index
work, and exclude the stored input matrix. The total work in the no-breakdown
branch is $O(ms+m^2n)$ and the Krylov working storage is $O(mn)$. The same
bounds cover all matvec, orthogonalization, and projected-rotation work
actually performed before an earlier breakdown. These are operation and
storage bounds, not convergence or runtime claims.

## Facts & Assumptions

**Given:** The canonical square CSR matrix, dimensions $n,s$, nonzero initial
residual, step bound $m$, and algorithm specified in the Statement.

[F1] [[def-csr-matrix-with-stored-entry-semantics]]: canonical storage has
$s=\operatorname{nnz}(A)$; CSR row intervals partition the stored entries.

[F2] [[alg-csr-matrix-vector-product-with-validation]]: a valid CSR matvec
visits each stored entry once and performs one multiply and one addition at
each visit.

[F3] [[thm-csr-storage-and-exact-matvec-cost]]: for a square record of order
$n\ge1$ with a nonempty stored row pattern, one exact matvec uses $O(s)$ work.

[F4] [[def-arnoldi-process]]: Arnoldi orthogonalizes each $Av_j$ against the
existing vectors and breaks down when its exact residual is zero.

[F5] [[thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization]]:
without breakdown, Arnoldi forms an orthonormal Krylov basis and its projected
matrix is upper Hessenberg with positive subdiagonal entries.

[F6] [[def-gmres-iterate]]: GMRES minimizes the true residual over the affine
Krylov space, represented in exact Arnoldi coordinates by the projected
least-squares problem.

## Proof

1.1 The canonical convention [F1] identifies the stored count with $s=\operatorname{nnz}(A)$. Each of at most $m$ columns uses one sparse matvec, which costs $O(s)$ by [F2] and [F3]. Summing over the columns gives $O(ms)$ work; if breakdown stops the run at $d<m$, the sum through $d$ is no larger. [given, F1, F2, F3, algebra]

1.2 At column $j$, one complete MGS pass computes $j$ length-$n$ inner products and $j$ length-$n$ vector updates, hence $O(jn)$ arithmetic; two passes multiply this by the fixed factor two. Therefore total orthogonalization work through $m$ columns is $O(n\sum_{j=1}^m j)=O(m^2n)$, and stopping earlier only reduces it. [given, F4, algebra]

1.3 In the no-breakdown branch, [F5] gives a projected matrix $\bar H_m\in\mathbb R^{(m+1)\times m}$ with nonzero subdiagonal entries $h_{j+1,j}$. For orthonormal $Q_{m+1}$ and $r_0=\beta q_1$, each candidate $x_0+Q_my$ has residual $$b-A(x_0+Q_my)=Q_{m+1}(\beta e_1-\bar H_my).$$ Therefore [F6] reduces GMRES minimization to this projected least-squares problem. The submatrix formed by rows $2,\ldots,m+1$ is upper triangular with diagonal $h_{2,1},\ldots,h_{m+1,m}$, so its columns are linearly independent. Thus $\bar H_m$ has full column rank. Applying one plane Givens rotation to each row pair eliminates one subdiagonal entry while preserving the Euclidean least-squares norm; the rotations create an upper-triangular $m\times m$ factor with nonzero diagonal. At column $j$, applying the previous at most $j-1$ rotations and forming the new rotation takes $O(j)$ scalar operations; all columns cost $O(m^2)$. Back substitution in the nonsingular triangular factor takes $O(m^2)$ operations, and forming the Krylov correction costs $O(mn)$. By [F6] this solves the specified GMRES projected least-squares problem. [given, F5, F6, algebra]

2.1 Since $n\ge1$ and $m\le n$, $m^2\le m^2n$ and $mn\le m^2n$. Adding steps 1.1, 1.2, and 2.1 gives $O(ms+m^2n)$. Storing at most $m+1$ length-$n$ basis vectors takes $O(mn)$ slots; the Hessenberg and Givens data take $O(m^2)$ slots; temporary vectors use $O(n)$ slots. Since $m\le n$, both $m^2$ and $n$ are at most $mn$, proving the storage bound. If breakdown occurs at column $d<m$, the already formed basis and projected data use at most the same bounds with $d$ in place of $m$, and no fallback least-squares solve is included. [given, step 1.1, step 1.2, step 1.3, algebra] ∎
