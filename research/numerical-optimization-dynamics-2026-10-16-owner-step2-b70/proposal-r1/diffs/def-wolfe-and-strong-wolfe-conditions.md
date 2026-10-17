--- items/def-wolfe-and-strong-wolfe-conditions.md
+++ items/def-wolfe-and-strong-wolfe-conditions.md
@@ -11,6 +11,8 @@
   - def-jacobian-matrix-and-gradient
   - def-euclidean-inner-product
   - thm-chain-rule-for-total-derivatives
+  - thm-total-derivative-computes-directional-and-partial-derivatives
+  - thm-cauchy-schwarz-and-the-euclidean-norm
 justified_by: []
 provenance:
   statement: literature-derived
@@ -28,10 +30,13 @@
 
 Let $D\subseteq\mathbb R^n$ be open, let $f:D\to\mathbb R$ be $C^1$
 ([[def-c-one-map-and-local-inverse]]), let $x\in D$, and let
-$p\in\mathbb R^n\setminus\{0\}$. Define the feasible ray
-$T_{x,p}:=\{t\ge0:x+tp\in D\}$ and, for $t\in T_{x,p}$,
-$\phi(t):=f(x+tp)$. Wherever $t$ is an interior point of $T_{x,p}$,
-the chain rule gives
+$p\in\mathbb R^n\setminus\{0\}$. Define the open parameter set $S_{x,p}:=\{t\in\mathbb R:x+tp\in D\}$,
+which contains $0$, the feasible ray $T_{x,p}:=S_{x,p}\cap[0,\infty)$,
+and $\phi(t):=f(x+tp)$ for $t\in S_{x,p}$. At every $t\in S_{x,p}$,
+including $0$, the chain rule gives $\phi'(t)=Df(x+tp)p$.
+By [[thm-total-derivative-computes-directional-and-partial-derivatives]],
+the matrix of $Df$ is the Jacobian, whose scalar-field row is the transpose
+of the gradient. Hence
 $\phi'(t)=\langle\nabla f(x+tp),p\rangle$, using the gradient convention
 of [[def-jacobian-matrix-and-gradient]] and the Euclidean inner product of
 [[def-euclidean-inner-product]]. A direction is a **descent direction** at
@@ -58,4 +63,4 @@
 \cos\theta:=-\frac{\langle\nabla f(x),p\rangle}{\|\nabla f(x)\|_2\|p\|_2}.
 $$
 The denominator is nonzero for a descent direction. The Cauchy–Schwarz
-inequality ensures $0<\cos\theta\le1$.
+inequality [[thm-cauchy-schwarz-and-the-euclidean-norm]] ensures $0<\cos\theta\le1$.
