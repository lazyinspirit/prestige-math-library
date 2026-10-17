--- items/thm-nonlinear-cg-finite-budget-terminates.md
+++ items/thm-nonlinear-cg-finite-budget-terminates.md
@@ -9,6 +9,7 @@
 deps:
   - alg-nonlinear-conjugate-gradient-methods
   - alg-bracketing-zoom-strong-wolfe-search
+  - lem-bracketing-zoom-finite-budget-checked-return
 proof_strategy: direct
 provenance:
   statement: ai-altered
@@ -35,11 +36,11 @@
 
 [F1] [[alg-nonlinear-conjugate-gradient-methods]]: the outer loop ranges over $k=0,\ldots,K-1$ and can accept at most one update per iteration.
 
-[F2] [[alg-bracketing-zoom-strong-wolfe-search]]: the expansion loop uses at most $E$ trials.
+[F2] [[lem-bracketing-zoom-finite-budget-checked-return]]: a bounded call uses at most $E$ expansion trial evaluations.
 
-[F3] [[alg-bracketing-zoom-strong-wolfe-search]]: a called zoom loop uses at most $Z$ trials.
+[F3] [[lem-bracketing-zoom-finite-budget-checked-return]]: at most one zoom call occurs, with at most $Z$ trial evaluations.
 
-[F4] [[alg-bracketing-zoom-strong-wolfe-search]]: each trial evaluates $\phi(t)$ and $\phi'(t)$, and a bounded call returns either a checked step or a failure status.
+[F4] [[lem-bracketing-zoom-finite-budget-checked-return]]: each evaluated trial evaluates $\phi(t)$ and $\phi'(t)$, and a bounded call terminates with either a checked positive feasible strong Wolfe step or a failure status.
 
 [F5] [[alg-nonlinear-conjugate-gradient-methods]]: the algorithm evaluates the initial gradient once.
 
