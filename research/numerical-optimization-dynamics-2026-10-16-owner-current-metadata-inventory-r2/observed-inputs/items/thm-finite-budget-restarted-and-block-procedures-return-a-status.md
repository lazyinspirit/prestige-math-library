---
id: thm-finite-budget-restarted-and-block-procedures-return-a-status
kind: theorem
title: "Finite-budget restarted Arnoldi and block LOBPCG return a status under finite-return primitives"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-thick-and-implicitly-restarted-arnoldi-with-locking
  - alg-block-lobpcg-with-rank-loss-status
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Yousef Saad, Numerical Methods for Large Eigenvalue Problems, second edition, §7.3"
      url: "https://www-users.cse.umn.edu/~saad/eig_book_2ndEd.pdf"
    - title: "Peter Arbenz, Lecture Notes on Solving Large Scale Eigenvalue Problems, §§11.7 and 13.6"
      url: "https://people.inf.ethz.ch/arbenz/ewp/Lnotes/lsevp.pdf"
---

## Statement

Consider any execution of [[alg-thick-and-implicitly-restarted-arnoldi-with-locking]]
or [[alg-block-lobpcg-with-rank-loss-status]] on inputs satisfying that
procedure's stated hypotheses. Assume every invoked target rule returns in
finite work either a valid requested block or `unavailable`, every invoked
shift rule returns in finite work either a shift list of the required length
or `unavailable`, and every projected eigensolve, finite-dimensional
arithmetic, orthogonalization, and rank computation returns its exact value
in finite work. Then the execution returns one of the statuses listed by its
procedure after finitely many operations. In particular, the Arnoldi
procedure performs at most $N_{\max}$ restarts and at most $N_{\max}+1$
Arnoldi cycles, and the LOBPCG procedure performs at most $N_{\max}$ updates.

## Facts & Assumptions

**Given:** A valid finite-dimensional input to either procedure, finite budgets $N_{\max}$, and the finite-return condition in the statement.

[F1] [[alg-thick-and-implicitly-restarted-arnoldi-with-locking]]: each cycle uses at most $m$ Arnoldi steps, each no-lock implicit restart uses $p=m-r$ shifts, locked implicit-mode restarts use the thick fallback, and the restart counter starts at zero and increases once per restart. The procedure either returns when the counter equals $N_{\max}$, reports a listed target/shift status, or reaches an earlier status condition.

[F2] [[alg-block-lobpcg-with-rank-loss-status]]: the iteration counter starts at $k=0$, and iteration $k$ tests $k=N_{\max}$ before an update.

[F3] [[alg-block-lobpcg-with-rank-loss-status]]: every completed projected update increments $k$ once; the rank-revealing orthogonalization processes only the finitely many trial-block columns.

[A1] Each invoked target rule returns a valid requested block or `unavailable`, and each invoked shift rule returns the required shift list or `unavailable`, all in finite work. Every projected eigensolve and other finite-dimensional arithmetic, orthogonalization, or rank computation returns its exact value in finite work; no other primitive failure status is assumed.

## Proof

1.1 For thick or implicit restarted Arnoldi, one cycle has at most $m$ Arnoldi steps. The thick restart processes finite matrices and blocks using finite exact rank-revealing orthogonalization loops, and its block-Arnoldi queue processes at most $m$ basis columns once each; an unavailable target selection, a missing target rule, or a wrong-size or dependent target block returns `rank-loss`. An implicit restart with no locked pairs uses exactly $p=m-r$ shifts and finite QR steps; an unavailable or wrong-length shift list returns `shift-count-unavailable`. The implicit-mode thick fallback with locked pairs uses the same finite target and orthogonalization steps. The Arnoldi projected-solver contract makes its call finite-return; the finite shape, residual and coefficient checks either produce a valid current Ritz list or return one of its two listed projected-solve failure statuses. Under [A1] an exact returned eigensolve passes those checks. Assumption [A1] makes the other invoked rules and projected eigensolves finite-return. Thus each cycle either returns a listed status or reaches its single restart-counter update. [given, F1, A1, algebra]

1.2 For block LOBPCG, every pass through steps 1--4 is finite: its trial block has finitely many columns, its $B$-orthogonalization processes at most those columns, and the projected eigensolve and finite-dimensional operations return in finite work by [A1]. A pass either returns a status or completes one update and increments $k$. [given, F2, F3, A1, algebra]

2.1 The counter begins at $0$ and increases by one before each further cycle. After at most $N_{\max}$ such increments, the next completed cycle reaches the test $c=N_{\max}$ and returns `budget-exhausted` unless an earlier acceptance or breakdown status has already returned. The number of cycles is therefore at most $N_{\max}+1$, so the Arnoldi execution terminates. [F1, step 1.1, induction]

3.1 Starting from $k=0$, no more than $N_{\max}$ updates can occur. After those updates the next pass tests $k=N_{\max}$ and returns `budget-exhausted`, unless convergence or rank loss already returned. Hence the block LOBPCG execution terminates after finitely many operations. [F2, F3, step 1.2, induction] ∎
