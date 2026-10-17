--- library/numerical-optimization-inverse-problems-and-uncertainty-quantification/nonlinear-conjugate-gradient-methods.md
+++ library/numerical-optimization-inverse-problems-and-uncertainty-quantification/nonlinear-conjugate-gradient-methods.md
@@ -13,4 +13,4 @@
 examples: []
 ---
 
-This page defines finite-budget Fletcher–Reeves and safeguarded PR+ methods, including zero-gradient exit, restart, and search-failure statuses. Strong Wolfe steps yield a strict FR descent bound and only the claimed gradient liminf result. The PR+ safeguard supplies a uniform angle bound and full gradient-norm convergence. Exact-line-search equivalence with linear CG is restricted to exact arithmetic and SPD quadratics; failed finite searches carry no convergence conclusion.
+This page defines finite-budget Fletcher–Reeves and safeguarded PR+ methods, including zero-gradient exit, restart, and search-failure statuses. For infinite sequences following the stated recurrence and successful strong Wolfe updates, the FR descent bound yields only the claimed gradient liminf result. For such infinite successful recurrence sequences, the PR+ safeguard supplies a uniform angle bound and full gradient-norm convergence. These convergence statements do not assert an infinite execution of the finite-budget procedure. Exact-line-search equivalence with linear CG is restricted to exact arithmetic and SPD quadratics; failed finite searches carry no convergence conclusion.
