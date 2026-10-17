--- items/thm-fletcher-reeves-liminf-gradient-under-strong-wolfe.md
+++ items/thm-fletcher-reeves-liminf-gradient-under-strong-wolfe.md
@@ -33,9 +33,12 @@
 
 Let $D\subseteq\mathbb R^n$ be open, $f:D\to\mathbb R$ be $C^1$, and $x_0\in D$. Let $L_0=\{x\in D:f(x)\le f(x_0)\}$, and suppose $f$ is bounded below on $L_0$. Suppose an open set $N\subseteq D$ contains every trial segment $x_k+[0,t_k]d_k$ and, for one $L>0$,
 $$ \|\nabla f(u)-\nabla f(v)\|_2\le L\|u-v\|_2\qquad(u,v\in N). $$
-Consider an infinite FR run of [[alg-nonlinear-conjugate-gradient-methods]] with $g_k=\nabla f(x_k)\ne0$, feasible updates $x_{k+1}=x_k+t_kd_k$, and every $t_k$ a strong Wolfe step for constants $0<c_1<c_2<1/2$. Then
+Consider an infinite sequence following the FR recurrence
+$d_0=-g_0$, $d_k=-g_k+(\|g_k\|_2^2/\|g_{k-1}\|_2^2)d_{k-1}$
+from [[alg-nonlinear-conjugate-gradient-methods]], with $g_k=\nabla f(x_k)\ne0$, feasible updates $x_{k+1}=x_k+t_kd_k$, and every $t_k$ a strong Wolfe step for constants $0<c_1<c_2<1/2$. Then
 $$ \liminf_{k\to\infty}\|g_k\|_2=0. $$
-The conclusion is a liminf statement; it does not assert $\|g_k\|_2\to0$.
+This is a theorem about the infinite recurrence and successful updates, not
+an infinite execution of the finite-$K$ algorithm. The conclusion is a liminf statement; it does not assert $\|g_k\|_2\to0$.
 
 ## Facts & Assumptions
 
