--- items/thm-fr-and-raw-prplus-exact-line-search-match-linear-cg.md
+++ items/thm-fr-and-raw-prplus-exact-line-search-match-linear-cg.md
@@ -14,6 +14,7 @@
   - def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix
   - def-jacobian-matrix-and-gradient
   - def-euclidean-inner-product
+  - def-wolfe-and-strong-wolfe-conditions
 proof_strategy: direct
 provenance:
   statement: literature-derived
@@ -50,6 +51,8 @@
 
 [F4] [[prop-conjugate-gradient-denominators-are-positive-before-convergence]]: if $r_k\ne0$, then $p_k\ne0$ and $p_k^TAp_k>0$.
 
+[F6] [[def-wolfe-and-strong-wolfe-conditions]]: strong Wolfe requires Armijo decrease and an absolute directional-derivative bound, with $0<c_1<c_2<1/2$.
+
 ## Proof
 
 **Given:** The hypotheses and notation in the Statement.
@@ -60,6 +63,8 @@
 
 2.1 For the FR recurrence, $d_k=r_k+\beta_{k-1}d_{k-1}$ and $\beta_{k-1}=\|r_k\|_2^2/\|r_{k-1}\|_2^2$. For the raw PR+ recurrence, [F3] gives $r_k^Tr_{k-1}=0$, so $\beta_{k-1}^{\rm PR+} =\max\!\left\{0,\frac{r_k^T(r_k-r_{k-1})}{\|r_{k-1}\|_2^2}\right\} =\frac{\|r_k\|_2^2}{\|r_{k-1}\|_2^2} =\beta_{k-1}^{\rm FR}.$ Thus either unrestarted direction equals $r_k+\beta_{k-1}p_{k-1}$, the linear-CG direction, closing the induction step. A safeguarded PR+ direction also agrees whenever its safeguard does not restart. [F3, F5, step 1.2, induction, algebra]
 
-3.1 For $k=0$, step 1.1 gives $d_k=p_k\ne0$; for $k\ge1$, step 2.1 gives the same equality. Then [F4] gives $p_k^TAp_k>0$. The restriction of $f$ to $x_k+td_k$ is $f(x_k+td_k)=f(x_k)+t\,g_k^Td_k+\tfrac12t^2d_k^TAd_k.$ Its unique minimizer is $t_k=-g_k^Td_k/(d_k^TAd_k)>0$. For $k=0$, $r_0^Td_0=\|r_0\|_2^2$ by step 1.1. For $k\ge1$, step 1.2 and the recurrence give $r_k^Td_k=\|r_k\|_2^2$. Therefore this is $t_k=\frac{r_k^Tr_k}{p_k^TAp_k}=\alpha_k$ from [F2]. Hence the next iterates and residuals agree. [F2, F4, step 1.1, step 1.2, step 2.1, algebra]
+3.1 For $k=0$, step 1.1 gives $d_k=p_k\ne0$; for $k\ge1$, step 2.1 gives the same equality. Then [F4] gives $p_k^TAp_k>0$. The restriction of $f$ to $x_k+td_k$ is $f(x_k+td_k)=f(x_k)+t\,g_k^Td_k+\tfrac12t^2d_k^TAd_k.$ Its unique minimizer is $t_k=-g_k^Td_k/(d_k^TAd_k)>0$. For $k=0$, $r_0^Td_0=\|r_0\|_2^2$ by step 1.1. For $k\ge1$, step 1.2 and the recurrence give $r_k^Td_k=\|r_k\|_2^2$. Therefore this is $t_k=\frac{r_k^Tr_k}{p_k^TAp_k}=\alpha_k$ from [F2]. At this minimizer, $\phi'(t_k)=g_k^Td_k+t_kd_k^TAd_k=0$, so the strong curvature test holds. Also
+$\phi(t_k)=\phi(0)+\tfrac12t_k g_k^Td_k\le\phi(0)+c_1t_k g_k^Td_k$
+because $t_k g_k^Td_k<0$ and $c_1<1/2$. Thus [F6] and the exact-model branch accept this step; the same calculation applies at every preceding common minimizer invoked in step 1.2, starting with step 1.1, so the induction uses actual accepted steps. Hence the next iterates and residuals agree. [given, F2, F4, F6, step 1.1, step 1.2, step 2.1, algebra]
 
 4.1 After the common step, $r_{k+1}=b-Ax_{k+1}$ is the CG residual and $g_{k+1}=-r_{k+1}$ by step 1.1. If $r_{k+1}=0$, both methods stop at the common exit. Otherwise the FR coefficient equals $\|r_{k+1}\|_2^2/\|r_k\|_2^2$, and the raw PR+ coefficient again equals it by [F3] and [F5]. Thus the next direction also agrees; induction continues until zero residual. [F2, F3, F5, step 1.1, step 3.1, induction] ∎
