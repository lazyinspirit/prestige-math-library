## Statement
For admissible inputs of either cited SCF iteration with finite budget $N$, there are at most $N$ updates and $N+1$ fixed-point residual tests. Under returning spectrum, response, metric and comparison primitives, the procedure terminates with a stated residual, gap, eigensolver or budget status. This is a work/status bound and does not assert contraction, convergence or tolerance attainment.

## Facts & Assumptions
**Given:** Either algorithm's admissible inputs and returning primitives.
[F1] [[alg-undamped-scf-with-gap-and-residual-status]] checks the spectrum/gap, then its residual, then the budget, and updates only at indices below $N$.
[F2] [[alg-relaxed-density-mixing-with-finite-budget]] uses the same index and stopping order for its relaxed residual, with earlier gap/eigensolver returns allowed.

## Proof
1.1 In either loop the entered indices form an initial segment of $0,\ldots,N$. Each entered index permits at most one residual test. Index $N$ returns before an update, and every earlier continuing index makes one update. Induction gives at most $N+1$ residual tests and $N$ updates. Earlier failures shorten the execution. Each pass contains finitely many returning primitives, proving termination with a stated status. [given, F1, F2, induction] ∎
