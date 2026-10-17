--- items/ex-rosenbrock-newton-step-satisfies-strong-wolfe.md
+++ items/ex-rosenbrock-newton-step-satisfies-strong-wolfe.md
@@ -13,6 +13,7 @@
   - def-jacobian-matrix-and-gradient
   - def-hessian-and-euclidean-critical-point
   - def-euclidean-inner-product
+  - def-krylov-subspace-of-a-matrix-and-start-vector
 proof_strategy: direct
 generation:
   role: example
@@ -31,6 +32,16 @@
 unshifted Newton solve, descent threshold $\sigma=1/10$, and strong Wolfe
 parameters $c_1=1/10000$, $c_2=2/5$. The initial unit trial satisfies both
 strong Wolfe inequalities, so the bracketing search returns $t=1$.
+
+Use the deterministic Krylov procedure which, for a two-dimensional operator
+$A$ and right-hand side $b$, forms $V=[b\ Ab]$ when $M\ge2$.
+If $V$ and $V^TAV$ are invertible, it returns
+$p=V(V^TAV)^{-1}V^Tb$ with iteration count $m=2$; otherwise it returns
+`no-candidate`. On other input dimensions or budgets below two it returns
+`no-candidate`. Its candidate lies in $K_2(A,b)$ by construction.
+Take $M\ge2$, $N\ge1$, $E,Z\ge1$, $J=0$, $\eta_k=\bar\eta=0$,
+$\gamma=2$, and $\lambda_0=\lambda_{\max}=1$.
+
 
 ## Facts & Assumptions
 
@@ -52,7 +63,7 @@
 
 1.1 Put $r:=y-x^2$. Direct differentiation using [F1]–[F2] gives $\nabla f=(-400xr+2(x-1),200r)$ and $H_f=\begin{bmatrix}1200x^2-400y+2&-400x\\-400x&200\end{bmatrix}$. At $(-6/5,1)$, $r=-11/25$, $g=(-1078/5,-88)$, and $H=\begin{bmatrix}1330&480\\480&200\end{bmatrix}$. [given, F1, F2, algebra]
 
-1.2 Solving $Hp=-g$ gives $p=(11/445,847/2225)$; substitution into the matrix product verifies the equation exactly. Hence the recomputed unshifted residual is zero and $g^Tp=-86394/2225<-38$. Also $\|g\|_2<234$ and $\|p\|_2<41/100$, so $g^Tp<-38<-(1/10)(234)(41/100)<-\sigma\|g\|_2\|p\|_2$. The descent safeguard accepts this direction. [given, F3, algebra]
+1.2 With $b=-g$, direct calculation gives $\det[b\ Hb]=-14221856/5\ne0$ and $\det H=35600\ne0$. Thus $V$ and $V^THV$ are invertible. The specified solver returns $p\in K_2(H,b)$ with $V^T(Hp-b)=0$; since $V$ is invertible, $Hp=b$. Solving $Hp=-g$ gives $p=(11/445,847/2225)$; substitution into the matrix product verifies the equation exactly. Hence the recomputed unshifted residual is zero and $g^Tp=-86394/2225<-38$. Also $\|g\|_2<234$ and $\|p\|_2<41/100$, so $g^Tp<-38<-(1/10)(234)(41/100)<-\sigma\|g\|_2\|p\|_2$. The descent safeguard accepts this direction. [given, F3, algebra]
 
 2.1 The full trial is $(x_1,y_1)=(-523/445,3072/2225)$, with $y_1-x_1^2=-121/198025$. Thus $f(x_0,y_0)=121/5$, while $f(x_1,y_1)=(968/445)^2+100(121/198025)^2<5$. Since $\phi'(0)=g^Tp>-39$, the Armijo right side is greater than $121/5-39/10000>24$; therefore the full trial satisfies Armijo. [given, F1, F5, step 1.2, algebra]
 
