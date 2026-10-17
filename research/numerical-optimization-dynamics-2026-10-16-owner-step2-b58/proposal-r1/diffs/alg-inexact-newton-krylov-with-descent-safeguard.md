--- items/alg-inexact-newton-krylov-with-descent-safeguard.md
+++ items/alg-inexact-newton-krylov-with-descent-safeguard.md
@@ -43,7 +43,7 @@
 matrix-vector products have the convention of
 [[def-matrix-product-and-identity-matrix]]. Use the matrix-free access
 model of [[def-matrix-free-access-model-for-krylov-methods]] for products
-$v\mapsto(H(x)+\lambda I_nv)$.
+$v\mapsto(H(x)+\lambda I_n)v$.
 
 **Linear-solver input:** a fixed deterministic Krylov procedure $K$ which accepts a
 matrix-free linear operator $A$, a right-hand side $b$, a tolerance $\tau\ge0$,
@@ -54,13 +54,14 @@
 status is never trusted: this algorithm recomputes
 the requested residual using the supplied operator. **Other inputs:** $x_0\in U$, outer update budget
 $N\in\mathbb N_0$, forcing values $\eta_k\in[0,\bar\eta]$ for a fixed
-$\bar\eta<1$, descent parameter $\sigma\in(0,1)$, regularization factor
+$0\le\bar\eta<1$, descent parameter $\sigma\in(0,1)$, regularization factor
 $\gamma>1$, initial shift $\lambda_0>0$, shift cap $\lambda_{\max}\ge\lambda_0$,
 regularized-attempt budget $J\in\mathbb N_0$, inner budget $M$, and the
 parameters and finite expansion/zoom budgets of
 [[alg-bracketing-zoom-strong-wolfe-search]]. **Output:** the last valid
 iterate and one of `stationary`, `iteration-budget-exhausted`,
-`no-descent-direction`, or `line-search-failure`.
+`no-descent-direction`, or `line-search-failure`; in the last case also
+return the underlying line-search failure cause.
 
 At iteration $k=0,1,\ldots,N$:
 
@@ -83,8 +84,8 @@
    return `no-descent-direction`. For the stated $\sigma$ and $g_k\ne0$ it
    passes, but the check remains part of the procedure.
 4. Call [[alg-bracketing-zoom-strong-wolfe-search]] at $x_k$ in direction $p$.
-   If it returns failure, return $(x_k,\texttt{line-search-failure})$ with
-   that failure status. Otherwise, for its returned strong Wolfe step $t_k$,
+   If it returns failure, return $(x_k,\texttt{line-search-failure},s)$, where $s$ is
+   the returned line-search failure cause. Otherwise, for its returned strong Wolfe step $t_k$,
    set $x_{k+1}:=x_k+t_kp$ and continue.
 
 The first unregularized system uses the forcing residual
