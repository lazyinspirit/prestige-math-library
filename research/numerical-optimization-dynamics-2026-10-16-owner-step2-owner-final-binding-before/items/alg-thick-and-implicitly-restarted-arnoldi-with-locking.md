---
id: alg-thick-and-implicitly-restarted-arnoldi-with-locking
kind: algorithm
title: "Finite-budget thick and implicitly restarted Arnoldi with residual acceptance and locking"
status: draft
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
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
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
below are in exact arithmetic. The number $k$ of locked pairs is the number
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

Initialize the restart counter $c=0$ before the first Arnoldi cycle. A cycle
consists of expanding the current Arnoldi basis to dimension $m$ or exact
breakdown, then computing Ritz pairs and testing their original residuals.
After the initial cycle in step 1, each restart in step 3 or 4 constructs the
next cycle. The output is the locked Ritz pairs, the current unlocked Ritz
pairs, and one of `converged`, `budget-exhausted`,
`invariant-subspace-breakdown`, `rank-loss`, `shift-count-unavailable`, or
`filtered-breakdown`.

1. Start with $v_1=v/\|v\|_2$, no locked pairs, and run fully reorthogonalized
   Arnoldi to dimension $m$, stopping earlier if the next Arnoldi residual is
   zero. Let $d$ be the number of basis columns actually constructed, so
   $d=m$ unless exact breakdown occurs earlier, and let $V_d,H_d$ be the
   resulting basis and projected matrix. Normalize every nonzero projected
   eigenvector $y$ of $H_d$ so $\|y\|_2=1$ and lift it to $u=V_dy$. Process
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

2. If the projected Arnoldi space is exactly invariant and fewer than $r$
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
   with the remaining queue. If the queue empties before the basis has
   dimension $m$, the retained subspace is invariant; when fewer than $r$
   pairs are locked, return `invariant-subspace-breakdown`.

4. For an implicit restart with no locked pairs, set $p=m-r$ and request a
   shift list $\mu_1,\ldots,\mu_p$ from the shift rule. If it reports
   `unavailable` or returns a list of the wrong length, return
   `shift-count-unavailable`.
   Starting from $AV_m=V_mH_m+\beta_m v_{m+1}e_m^*$, apply exact shifted QR
   steps to $H_m$ using the Givens transformations of
   [[def-real-and-complex-givens-transformations]] in top-down adjacent-row
   eliminations on pairs
   $(1,2),(2,3),\ldots,(m-1,m)$:
   $H_{j-1}-\mu_jI=Q_jR_j$ and $H_j=Q_j^*H_{j-1}Q_j=R_jQ_j+\mu_jI$.
   Put $Q=Q_1\cdots Q_p$, rotate $V_m$ by $Q$, retain its first $r$ columns,
   and continue Arnoldi to dimension $m$. If the polynomial
   $q(z)=\prod_{j=1}^p(z-\mu_j)$ annihilates the starting vector or the
   filtered Krylov space has dimension below $r$, return `filtered-breakdown`.

5. Increment the restart counter by setting $c\gets c+1$, recompute Ritz
   pairs and their original residuals, apply the acceptance rule in step 1,
   and return to step 2 unless a return status applies.
   No convergence is asserted for an arbitrary shift schedule. The residual
   acceptance test certifies only the computed residual size; it does not by
   itself give a forward eigenvalue bound for a nonnormal matrix.
