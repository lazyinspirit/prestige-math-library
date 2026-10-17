--- items/thm-inexact-newton-local-forcing-rates.md
+++ items/thm-inexact-newton-local-forcing-rates.md
@@ -12,6 +12,9 @@
   - def-c-one-map-and-local-inverse
   - def-jacobian-matrix-and-gradient
   - def-hessian-and-euclidean-critical-point
+  - thm-total-derivative-computes-directional-and-partial-derivatives
+  - thm-continuous-partial-derivatives-imply-total-differentiability
+  - thm-symmetry-of-higher-mixed-partials
 proof_strategy: direct
 provenance:
   statement: literature-derived
@@ -28,9 +31,9 @@
 
 ## Statement
 
-Let $U\subseteq\mathbb R^n$ be open, let $F:U\to\mathbb R^n$ be $C^1$, and
+Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, let $F:U\to\mathbb R^n$ be $C^1$, and
 let $x_*\in U$ satisfy $F(x_*)=0$ with $J_*:=DF(x_*)$ invertible. Suppose
-$J=DF$ is $L$-Lipschitz on a closed ball about $x_*$ contained in $U$. Fix
+$J=DF$ is $L$-Lipschitz on a closed ball of positive radius about $x_*$ contained in $U$. Fix
 $\bar\eta\in[0,1)$. Consider any sequence
 $$x_{k+1}=x_k+p_k,\qquad J(x_k)p_k+F(x_k)=r_k,\qquad \|r_k\|_2\le\eta_k\|F(x_k)\|_2,$$
 with $0\le\eta_k\le\bar\eta$. Define
@@ -45,7 +48,8 @@
 
 The fixed bound $\bar\eta<1$ gives linear convergence. Since $J_*$ is
 invertible, these rates in $\|\cdot\|_*$ are equivalent to the same local
-rates in the Euclidean norm. For $F=\nabla f$, $J(x)=\nabla^2 f(x)$, so the
+rates in the Euclidean norm. For $F=\nabla f$ with $f\in C^2(U)$ (all ordered partial derivatives
+through order two exist and are continuous), $J(x)=\nabla^2 f(x)$, so the
 residual is the inexact Newton residual
 $\nabla^2 f(x_k)p_k+\nabla f(x_k)$, using the Hessian convention of
 [[def-hessian-and-euclidean-critical-point]]. This theorem concerns the
@@ -62,6 +66,12 @@
 
 [F3] [[def-hessian-and-euclidean-critical-point]]: for a scalar field, the Hessian is the matrix of second partial derivatives; the gradient is defined from first partials by [[def-jacobian-matrix-and-gradient]].
 
+[F4] [[thm-total-derivative-computes-directional-and-partial-derivatives]]: the matrix of a total derivative is the Jacobian, with column $j$ equal to the $j$th partial derivative.
+
+[F5] [[thm-continuous-partial-derivatives-imply-total-differentiability]]: continuous coordinate partial derivatives on an open set give total differentiability.
+
+[F6] [[thm-symmetry-of-higher-mixed-partials]]: for a $C^k$ scalar field, $k\ge2$, every iterated derivative of order $k$ is unchanged by permutations of its coordinate differentiations.
+
 ## Proof
 
 **Given:** The hypotheses and notation in the Statement.
@@ -74,4 +84,4 @@
 
 3.2 If $\eta_k\le C_\eta\|F(x_k)\|_2$, [F1] and step 2.1 yield $\|x_{k+1}-x_*\|_*\le\bigl(C_\eta C_F+C\bigr)\|x_k-x_*\|_*^2$, which is quadratic convergence in the $*$ norm. [given, F1, step 2.1, algebra]
 
-4.1 In the specialization $F=\nabla f$, [F3] identifies $J(x)$ with the Hessian in the stated convention. Invertibility gives $K_*^{-1}\|e\|_2\le\|e\|_*\le\|J_*\|_{\rm op}\|e\|_2$ for every $e$. These fixed comparison constants transfer the linear, superlinear, and quadratic bounds from the $*$ norm to the Euclidean norm. The fixed-$\bar\eta$ geometric estimate of step 2.1 is linear convergence. [given, F3, step 2.1, algebra] ∎
+4.1 In the specialization $F=\nabla f$ with $f\in C^2(U)$, each $F_i=\partial_i f$ has continuous first partials. By [F5] it is totally differentiable, and by [F4] the matrix of $DF$ has entries $J_{ij}=\partial_j(\partial_i f)$. By [F6] these equal $\partial_i(\partial_j f)$, the entries of the Hessian in [F3]. Thus $J(x)=\nabla^2f(x)$. Invertibility gives $K_*^{-1}\|e\|_2\le\|e\|_*\le\|J_*\|_{\rm op}\|e\|_2$ for every $e$. These fixed comparison constants transfer the linear, superlinear, and quadratic bounds from the $*$ norm to the Euclidean norm. The fixed-$\bar\eta$ geometric estimate of step 2.1 is linear convergence. [given, F3, F4, F5, F6, step 2.1, algebra] ∎
