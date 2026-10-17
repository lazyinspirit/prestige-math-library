--- items/ex-rosenbrock-indefinite-hessian-requires-descent-safeguard.md
+++ items/ex-rosenbrock-indefinite-hessian-requires-descent-safeguard.md
@@ -13,6 +13,7 @@
   - def-jacobian-matrix-and-gradient
   - def-hessian-and-euclidean-critical-point
   - def-euclidean-inner-product
+  - def-krylov-subspace-of-a-matrix-and-start-vector
 proof_strategy: direct
 generation:
   role: example
@@ -34,6 +35,16 @@
 a strong Wolfe interval therefore exists. A finite search budget may still
 return failure before finding a step.
 
+Use the deterministic Krylov procedure which, for a two-dimensional operator
+$A$ and right-hand side $b$, forms $V=[b\ Ab]$ when $M\ge2$.
+If $V$ and $V^TAV$ are invertible, it returns
+$p=V(V^TAV)^{-1}V^Tb$ with iteration count $m=2$; otherwise it returns
+`no-candidate`. On other input dimensions or budgets below two it returns
+`no-candidate`. Its candidate lies in $K_2(A,b)$ by construction.
+Take $M\ge2$, $N\ge1$, $E,Z\ge1$, $\eta_k=\bar\eta=0$,
+$\gamma=2$, $c_1=1/10000$, and $c_2=2/5$, with the shift parameters below.
+
+
 ## Facts & Assumptions
 
 **Given:** The objective and point in the Example, descent threshold $\sigma=1/10$, regularization seed $\lambda_0=3$, a regularization cap $\lambda_{\max}\ge3$, and attempt budget $J\ge1$.
@@ -52,7 +63,7 @@
 
 1.1 Put $r:=y-x^2$. Differentiating gives $g=(-400xr+2(x-1),200r)$ and $H_f=\begin{bmatrix}1200x^2-400y+2&-400x\\-400x&200\end{bmatrix}$. At the given point, $g=(-2,2)$ and $H=\operatorname{diag}(-2,200)$. The quadratic form of $H$ is negative on $(1,0)$ and positive on $(0,1)$, so $H$ is indefinite. [given, F1, F2, algebra]
 
-2.1 The unshifted Newton solve $Hp=-g$ gives $p=(-1,-1/100)$ and $g^Tp=99/50>0$. It is therefore not a descent direction and fails the algorithm's descent check. [given, F3, step 1.1, algebra]
+2.1 For $b=-g=(2,-2)$ and either $A=H$ or $A=H+3I_2$, $\det[b\ Ab]=-808\ne0$, and both operators are invertible. Hence the specified projected solver returns the exact solution $Ap=b$ in $K_2(A,b)$, using $m=2\le M$. The unshifted Newton solve $Hp=-g$ gives $p=(-1,-1/100)$ and $g^Tp=99/50>0$. It is therefore not a descent direction and fails the algorithm's descent check. [given, F3, step 1.1, algebra]
 
 2.2 For shift $\lambda=3$, $H+3I_2=\operatorname{diag}(1,203)$ and the exact shifted solve gives $p=(2,-2/203)$. Its residual is zero, while $g^Tp=-4-4/203<-4$. Also $\|g\|_2=2\sqrt2<3$ and $\|p\|_2<3$, hence $-(1/10)\|g\|_2\|p\|_2>-9/10$ and $g^Tp<-(1/10)\|g\|_2\|p\|_2$. Thus the shifted candidate passes the stated residual and descent tests. [given, F3, step 1.1, algebra]
 
