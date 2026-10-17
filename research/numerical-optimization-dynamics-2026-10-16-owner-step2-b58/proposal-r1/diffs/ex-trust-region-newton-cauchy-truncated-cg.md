--- items/ex-trust-region-newton-cauchy-truncated-cg.md
+++ items/ex-trust-region-newton-cauchy-truncated-cg.md
@@ -34,6 +34,12 @@
 satisfies the exact inexact-Newton descent safeguard and a strong Wolfe line
 search accepts its full step. The Cauchy and first truncated-CG boundary
 steps coincide and have smaller predicted reduction.
+For the inexact-Newton call take $M\ge2$, $N\ge1$,
+$\eta_k=\bar\eta=0$, $\sigma=1/2$, $J=0$, $E,Z\ge1$,
+$\gamma=2$, and $\lambda_0=\lambda_{\max}=1$; use the deterministic
+two-dimensional projected solver specified in step 1.1 with iteration count
+$m=2$, returning `no-candidate` if its two-dimensional basis or projected matrix is singular
+or if $M<2$.
 
 ## Facts & Assumptions
 
