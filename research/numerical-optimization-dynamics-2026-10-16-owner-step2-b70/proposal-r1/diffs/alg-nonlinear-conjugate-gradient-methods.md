--- items/alg-nonlinear-conjugate-gradient-methods.md
+++ items/alg-nonlinear-conjugate-gradient-methods.md
@@ -50,4 +50,4 @@
 
 6. For an accepted step, set $x_{k+1}=x_k+t_kd_k$ and evaluate $g_{k+1}$. If $g_{k+1}=0$, return **stationary** with $x_{k+1}$. After the loop, return **iteration-limit** with the last iterate, the accepted trace, and all restart flags. A failure or stationary status returns immediately with the trace so far.
 
-The FR convergence statement below applies only to a run that obtains a strong Wolfe step at every iteration. The safeguarded PR+ convergence statement applies only to an infinite run of successful strong Wolfe steps. A finite search budget can return **search-failure**; it does not certify convergence.
+The FR and safeguarded PR+ convergence statements concern infinite sequences following the respective recurrences and direction rules above, with a successful strong Wolfe update at every index; they do not concern an infinite execution of this finite-$K$ procedure. Each finite execution can realize only a prefix of such a sequence. A finite search budget can return **search-failure**; it does not certify convergence.
