---
id: alg-thick-and-implicitly-restarted-arnoldi-with-locking
kind: algorithm
title: "Finite-budget thick and implicitly restarted Arnoldi with residual acceptance and locking"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-arnoldi-process
  - thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization
  - def-ritz-values-and-ritz-vectors-from-arnoldi
  - prop-ritz-residual-formula-for-an-arnoldi-ritz-pair
  - def-real-and-complex-givens-transformations
  - def-full-reduced-and-column-pivoted-computational-qr-factorisations
  - def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift
  - prop-shifted-qr-preserves-upper-hessenberg-form
  - def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices
  - def-determinant-of-a-square-matrix
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Yousef Saad, Numerical Methods for Large Eigenvalue Problems, second edition, §§7.3 and 8.1.3"
      url: "https://www-users.cse.umn.edu/~saad/eig_book_2ndEd.pdf"
    - title: "Peter Arbenz, Lecture Notes on Solving Large Scale Eigenvalue Problems, §§11.2 and 11.7"
      url: "https://people.inf.ethz.ch/arbenz/ewp/Lnotes/lsevp.pdf"
---

## Definition

Let $A\in\mathbb C^{n\times n}$, let $v\ne0$, and choose integers
$1\le r<m\le n$, a residual tolerance $\tau\ge0$, a restart budget
$N_{\max}\ge1$, and a restart mode `thick` or `implicit`. All operations
below use the exact arithmetic model and projected-solver input specified next. The number $k$ of locked pairs is the number
of linearly independent locked vectors; it starts at zero. If a restart is
needed, a target rule may be supplied for thick mode and is required for an
implicit-mode restart after one or more pairs are locked. When invoked, it
must return $r-k$ current Ritz vectors independent modulo the span of all
locked vectors, or report `unavailable`; no rule, an unavailable selection,
or a wrong-size or dependent selection gives status `rank-loss`. For an implicit-mode
restart with no locked pairs, a shift rule supplies exactly $p=m-r$ complex
shifts for the current cycle or reports `unavailable`; an unavailable list or
a list of any other length gives status `shift-count-unavailable`. The shifts
may be chosen from unwanted Ritz values, but the procedure allows any
supplied list and asserts no convergence for an arbitrary schedule.

**Projected-solver input and exact operations.** Supply a projected eigensolver $S$. For every requested exact square matrix $H\in\mathbb C^{d\times d}$ with $1\le d\le m$, it must return in finite work either `unavailable` or `success` with an ordered list of exactly $d$ pairs $(\theta_j,y_j)$, $0\le j<d$, with $\theta_j\in\mathbb C$, $0\ne y_j\in\mathbb C^d$, $Hy_j=\theta_jy_j$, and
$$\det(zI_d-H)=\prod_{j=0}^{d-1}(z-\theta_j).$$
Thus eigenvalues are represented with their algebraic multiplicities; projected eigenvectors need not be independent when $H$ is defective. The procedure does not assert existence of an always-successful exact eigensolver in any fixed arithmetic or encoding. A provider may report `unavailable`; absent provider data give the same result without invoking a solver. Every original successful exact projected-eigensolve instance is retained by supplying its provider.

Outside $S$, use exact complex field operations, conjugation, nonnegative real square roots, and exact equality/order comparisons on the real quantities compared. Complex operations use their real and imaginary component formulas. The finite-return target and shift rules have the output contracts already stated. Exact rank tests can be performed by Gaussian elimination, scanning columns and choosing the first remaining row with nonzero pivot; normalization divides only by a checked positive Euclidean norm. This is an exact-operation model, not a bit-cost or machine floating-point claim.

At every projected solve, invoke $S$ on the current $H_d$. An absent provider or `unavailable` return gives status `projected-eigensolve-unavailable`. A provider status other than `success` or `unavailable`, wrong list/vector shape, zero vector, nonzero exact residual $H_dy_j-\theta_jy_j$, or failed characteristic-polynomial identity gives status `projected-eigensolve-invalid`. Check that identity by exact coefficient arithmetic: expand $\det(zI_d-H_d)$ by the finite permutation formula of [[def-determinant-of-a-square-matrix]], in lexicographic permutation order, multiplying each term's $d$ affine-or-constant entries in increasing column order and using the inversion parity for its sign; form the right side by successive multiplication of its $d$ linear factors in returned list order. Polynomial addition and multiplication mean finite coefficient-array sums and convolutions, and compare all coefficients through degree $d$ exactly. This finite check extracts no roots. All these failures preserve the locked outputs and the most recently completed valid unlocked Ritz list (initially empty), with the failing cycle and projected dimension. Only after the entire successful list passes these checks normalize the vectors, lift them and replace the current Ritz list. The supplied finite-return promise applies to $S$ itself; no timeout or generic eigensolver implementation is silently provided.

Initialize the restart counter $c=0$ before the first cycle. The initial cycle
is an $m$-step fully reorthogonalized Arnoldi run from $v_1=v/\|v\|_2$: each
step computes a matrix-vector product, performs two complete orthogonalization
passes against the current basis, and accumulates the coefficients in the
projected matrix. If a residual vanishes at step $j$, use the $j$-column basis
and mark its span invariant. If the residual after step $m$ is nonzero, retain
its normalized direction and coefficient as the Arnoldi residual data, but use
only the first $m$ columns in the projected eigensolve. Every later cycle uses
the restarted basis and projected matrix constructed in step 3 or 4. The output
is the locked Ritz pairs, the most recently computed unlocked Ritz pairs, and
one of `converged`, `budget-exhausted`,
`invariant-subspace-breakdown`, `rank-loss`, `shift-count-unavailable`, or
`filtered-breakdown`, `projected-eigensolve-unavailable`, or
`projected-eigensolve-invalid`.

1. For the initial cycle, start with $v_1=v/\|v\|_2$, no locked pairs, and run
   the $m$-step Arnoldi procedure described above. Let $d$ be the projected
   basis dimension, so $d=m$ unless exact breakdown occurs earlier; on a
   nonbreakdown cycle also retain the residual direction and coefficient from
   step $m$. For every cycle, invoke and validate the supplied projected
   eigensolver as specified above, returning its failure status before
   processing any pair if it fails. For each returned projected eigenvector
   $y$, normalize it so $\|y\|_2=1$ and lift it to $u=V_dy$. Process
   the Ritz pairs in the order returned by the projected eigensolve. For each
   pair $(\theta,u)$, compute the original residual $r_u=Au-\theta u$
   directly (on a standard Arnoldi cycle without breakdown it may be
   evaluated by [[prop-ritz-residual-formula-for-an-arnoldi-ritz-pair]]).
   If $\|r_u\|_2\le\tau$ and adding $u$ increases the exact rank of the
   locked-vector matrix, append $(\theta,u)$ to the locked outputs and
   increment $k$. A
   residual-accepted vector in the span of the locked vectors is not counted
   or appended again. Locked vectors are retained as a subspace at every
   later restart. If $k\ge r$, return `converged`.

2. If the current projected subspace is marked invariant and fewer than $r$
   pairs are locked, return `invariant-subspace-breakdown`. If the restart
   counter satisfies $c=N_{\max}$, return `budget-exhausted`.

3. For a thick restart, or for an implicit-mode restart when $k>0$, invoke
   the target rule. Form a target block from every locked vector and the
   selected $r-k$ wanted Ritz vectors. For either block to be rank-revealing,
   use the following exact column-pivoted orthogonalization: start with an
   empty orthonormal block $Q$ and all input columns remaining. For each
   remaining column $y_j$, compute $c_j=y_j-Q(Q^*y_j)$. Choose a column with
   largest $\|c_j\|_2$, breaking ties by original column order. If the largest
   norm is zero, stop; otherwise append $c_j/\|c_j\|_2$ to $Q$ and remove that
   pivot column. The columns appended to $Q$ form an ordered orthonormal basis
   of the input range. Apply this procedure first to the target block; if it
   fails to retain all locked and selected directions, return `rank-loss`.
   With its resulting orthonormal basis $U$, compute the residual block
   $R_U=(I-UU^*)AU$. Apply the same orthogonalization to $R_U$ to obtain an
   ordered orthonormal basis $F$ of its range. If $U$ has $s$ columns, retain
   only the first $\min(\dim\operatorname{range}(R_U),m-s)$ columns of $F$,
   so $[U,F]$ has at most $m$ columns. Set the ordered basis to $[U,F]$ and a
   queue to its columns in order. While the basis has fewer than $m$ columns
   and the queue is nonempty, remove the first queued column $q$, compute
   $w=Aq$, and orthogonalize $w$ against every current basis column in two
   complete passes. If the residual is nonzero, normalize it, append it to
   the basis, and append the new column to the queue; if it is zero, continue
   with the remaining queue. Set $V_d$ to the resulting basis and compute the
   projected matrix $H_d=V_d^*AV_d$ exactly. If the queue empties before the
   basis has dimension $m$, or if $d=n$, mark this subspace invariant; first
   process its Ritz pairs in step 5, then return `invariant-subspace-breakdown` at step 2
   if fewer than $r$ pairs have been locked. This projection is required
   because a thick restart can begin from several retained and residual
   directions rather than from a single Arnoldi starting vector.

4. For an implicit restart with no locked pairs, set $p=m-r$ and request a
   shift list $\mu_1,\ldots,\mu_p$ from the shift rule. If it reports
   `unavailable` or returns a list of the wrong length, return
   `shift-count-unavailable`.
   Starting from the no-breakdown $m$-step Arnoldi relation
   $AV_m=V_mH_m+\beta_m v_{m+1}e_m^*$, apply exact shifted QR steps to $H_m$
   using the transformations of [[def-real-and-complex-givens-transformations]].
   Set $H_0=H_m$ and
   $q(z)=\prod_{j=1}^{p}(z-\mu_j)$.
   For $j=1,\ldots,p$, initialize $R=H_{j-1}-\mu_jI$ and $Q_j=I_m$. For
   $\ell=1,\ldots,m-1$, generate a left factor from
   $(a,b)=(R_{\ell,\ell},R_{\ell+1,\ell})$ and apply it to rows $\ell,\ell+1$
   by setting $R\gets LR$, and update $Q_j\gets Q_jL^*$. Use the identity if
   $b=0$; if $b\ne0$,
   put $s_0=\sqrt{|a|^2+|b|^2}$ and choose the exact coefficients
   $(c,s)=(a/s_0,b/s_0)$ over $\mathbb R$, while over $\mathbb C$ choose
   $(c,s)=(0,\overline b/|b|)$ if $a=0$ and
   $(c,s)=(|a|/s_0,(a/|a|)\overline b/s_0)$ otherwise. Use
   $L=\begin{pmatrix}c&s\\-\overline s&c\end{pmatrix}$. At the end set
   $R_j=R$ and $H_j=R_jQ_j+\mu_jI=Q_j^*H_{j-1}Q_j$. Let
   $H^+=H_p$ and put $Q=Q_1\cdots Q_p$. Test the filtered Krylov dimension exactly by
   forming $w=q(A)v_1$ and the columns $w,Aw,\ldots,A^{r-1}w$. If their rank is
   below $r$, return `filtered-breakdown`. Otherwise retain
   $V_r^+=V_mQ(:,1:r)$ and set $H_r^+=H^+(1:r,1:r)$. Compute
   $g=A(V_r^+)_{:r}-V_r^+H_r^+e_r$, the residual of the last retained column;
   the first $r-1$ retained columns have zero residual by the upper-Hessenberg
   relation and shift count $p=m-r$. If $g=0$, use $V_r^+$ as the current
   invariant basis with dimension $r$. If $g\ne0$, set
   $v_{r+1}^+=g/\|g\|_2$ and $\beta_r^+=\|g\|_2$, initialize the continued
   Arnoldi relation with $(V_r^+,H_r^+,v_{r+1}^+,\beta_r^+)$, and continue
   Arnoldi with two complete orthogonalization passes until dimension $m$ or
   exact breakdown. On a nonbreakdown continuation, also compute the residual
   direction and coefficient after its $m$th Arnoldi step for the next
   implicit restart. Mark the current subspace invariant when this continuation
   breaks down.

5. Increment the restart counter by setting $c\gets c+1$, invoke and validate
   $S$ on the new projected matrix as in step 1, and return the stated
   projected-solve failure status if it fails. On success, recompute the lifted
   Ritz pairs and their original residuals, apply the acceptance rule in step 1,
   and return to step 2 unless a return status applies.
   No convergence is asserted for an arbitrary shift schedule. The residual
   acceptance test certifies only the computed residual size; it does not by
   itself give a forward eigenvalue bound for a nonnormal matrix.
