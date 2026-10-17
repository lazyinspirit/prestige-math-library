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
$N_{\max}\ge1$, a target rule, and a restart mode `thick` or `implicit`.
All operations below are in exact arithmetic. In thick mode, the target rule
selects $r-k$ linearly independent current Ritz vectors, where $k$ denotes
the number of already locked pairs; if it cannot do so, the procedure returns
`rank-loss`. In implicit
mode, a shift rule supplies exactly $p=m-r$ complex shifts for the current
cycle, or reports that the shift list is unavailable. The shifts may be chosen
from unwanted Ritz values, but the procedure allows any supplied list and
asserts no convergence for an arbitrary schedule. Initialize the restart
counter $c=0$ before the first Arnoldi cycle. A cycle consists of expanding
the current Arnoldi basis to dimension $m$ or exact breakdown, then computing
Ritz pairs and testing their original residuals. After the initial cycle in
step 1, each restart in step 3 or 4 constructs the next cycle. The output is
the locked Ritz pairs, the current unlocked Ritz pairs, and one of `converged`,
`budget-exhausted`, `invariant-subspace-breakdown`, `rank-loss`,
`shift-count-unavailable`, or `filtered-breakdown`.

1. Start with $v_1=v/\|v\|_2$, no locked pairs, and run fully reorthogonalized
   Arnoldi to dimension $m$, stopping earlier if the next Arnoldi residual is
   zero. Normalize every nonzero projected eigenvector $y$ so $\|y\|_2=1$ and
   lift it to $u=V_my$. For each Ritz pair $(\theta,u)$, compute the original
   residual $r_u=Au-\theta u$ (on a standard Arnoldi cycle it may be evaluated
   by [[prop-ritz-residual-formula-for-an-arnoldi-ritz-pair]]) and accept the
   pair when $\|r_u\|_2\le\tau$. Accepted pairs are recorded as locked outputs
   and their vectors must be retained at every later restart. If at least $r$
   pairs have been accepted, return `converged`.

2. If the projected Arnoldi space is exactly invariant and fewer than $r$ pairs
   have been accepted, return `invariant-subspace-breakdown`. If the restart
   counter satisfies $c=N_{\max}$, return `budget-exhausted`.

3. For a thick restart, form a target block from every locked vector and the
   additional wanted Ritz vectors selected by the target rule. Apply exact
   exact column-pivoted QR as in
   [[def-full-reduced-and-column-pivoted-computational-qr-factorisations]] to
   this block; if its rank is too small to retain all
   locked and selected directions, return `rank-loss`. With the resulting
   orthonormal basis $U$, compute the residual block
   $R_U=(I-UU^*)AU$. Apply exact column-pivoted QR as in
   [[def-full-reduced-and-column-pivoted-computational-qr-factorisations]] to
   $R_U$, breaking pivot
   ties by original column order, to obtain an ordered orthonormal basis $F$ of
   its range. If $U$ has $q$ columns, retain only the first
   $\min(\dim\operatorname{range}(R_U),m-q)$ columns of $F$, so $[U,F]$ has at
   most $m$ columns. Restart from $[U,F]$ and extend by block Arnoldi, fully
   reorthogonalizing each new $Aq$ against all current columns, until the basis
   has dimension $m$ or the exact residual vanishes. If the retained subspace
   is invariant before dimension $m$ and fewer than $r$ pairs are accepted,
   return `invariant-subspace-breakdown`.

4. For an implicit restart, use this branch only when no pair is locked. Set
   $p=m-r$ and request a shift list $\mu_1,\ldots,\mu_p$ from the shift rule;
   if it reports a list of the wrong length, return `shift-count-unavailable`.
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
