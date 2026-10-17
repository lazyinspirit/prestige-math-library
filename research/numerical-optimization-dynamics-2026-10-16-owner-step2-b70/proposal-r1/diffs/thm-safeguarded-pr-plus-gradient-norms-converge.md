--- items/thm-safeguarded-pr-plus-gradient-norms-converge.md
+++ items/thm-safeguarded-pr-plus-gradient-norms-converge.md
@@ -31,13 +31,19 @@
 
 ## Statement
 
-Let $D,f,x_0,L_0,N,L$ satisfy the hypotheses of [[cor-uniform-descent-angle-implies-gradient-vanishing]]. Consider an infinite run of the safeguarded PR+ method in [[alg-nonlinear-conjugate-gradient-methods]], with every gradient nonzero and every accepted step a strong Wolfe step with $0<c_1<c_2<1/2$. Then
+Let $D,f,x_0,L_0,N,L$ satisfy the hypotheses of [[cor-uniform-descent-angle-implies-gradient-vanishing]]. Consider an infinite sequence following the PR+ coefficient recurrence and
+candidate-or-restart direction selection of
+[[alg-nonlinear-conjugate-gradient-methods]], with its fixed $\sigma,C>0$,
+$d_0=-g_0$, every gradient nonzero, feasible updates
+$x_{k+1}=x_k+t_kd_k$, and every $t_k$ a strong Wolfe step with
+$0<c_1<c_2<1/2$. Then
 $$ \|\nabla f(x_k)\|_2\longrightarrow0. $$
-This claim is conditional on successful line searches at every iteration. Raw PR+ without the stated safeguard is not covered.
+This claim concerns the infinite recurrence with successful updates at every
+index, not an infinite execution of the finite-$K$ algorithm. Raw PR+ without the stated safeguard is not covered.
 
 ## Facts & Assumptions
 
-**Given:** The smoothness and lower-bound hypotheses of [[cor-uniform-descent-angle-implies-gradient-vanishing]], an infinite successful safeguarded PR+ run, and $0<c_1<c_2<1/2$.
+**Given:** The smoothness and lower-bound hypotheses of [[cor-uniform-descent-angle-implies-gradient-vanishing]], an infinite successful safeguarded PR+ recurrence sequence, and $0<c_1<c_2<1/2$.
 
 [F1] [[lem-safeguarded-pr-plus-uniform-angle]]: every nonzero safeguarded PR+ direction is descending and has $\cos\theta_k\ge\min\{1,\sigma/C\}>0$.
 
@@ -47,6 +53,6 @@
 
 **Given:** The hypotheses and notation in the Statement.
 
-1.1 Set $\delta_{\rm PR}=\min\{1,\sigma/C\}>0$. By [F1], every search direction has descent angle at least $\delta_{\rm PR}$, including a direction reset to $-g_k$. [given, F1, algebra]
+1.1 Set $\delta_{\rm PR}=\min\{1,\sigma/C\}>0$. By [F1], every search direction has descent-angle cosine at least $\delta_{\rm PR}$, including a direction reset to $-g_k$. [given, F1, algebra]
 
 2.1 Strong Wolfe implies Wolfe by [[def-wolfe-and-strong-wolfe-conditions]]. All hypotheses of [F2] therefore hold with this $\delta_{\rm PR}$, and [F2] gives $\|\nabla f(x_k)\|_2\to0$. [given, F2, step 1.1] ∎
