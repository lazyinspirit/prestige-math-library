--- items/def-wolfe-and-strong-wolfe-conditions.md
+++ items/def-wolfe-and-strong-wolfe-conditions.md
@@ -28,10 +28,10 @@
 
 Let $D\subseteq\mathbb R^n$ be open, let $f:D\to\mathbb R$ be $C^1$
 ([[def-c-one-map-and-local-inverse]]), let $x\in D$, and let
-$p\in\mathbb R^n\setminus\{0\}$. Define the feasible ray
-$T_{x,p}:=\{t\ge0:x+tp\in D\}$ and, for $t\in T_{x,p}$,
-$\phi(t):=f(x+tp)$. Wherever $t$ is an interior point of $T_{x,p}$,
-the chain rule gives
+$p\in\mathbb R^n\setminus\{0\}$. Define the open parameter set $S_{x,p}:=\{t\in\mathbb R:x+tp\in D\}$,
+which contains $0$, the feasible ray $T_{x,p}:=S_{x,p}\cap[0,\infty)$,
+and $\phi(t):=f(x+tp)$ for $t\in S_{x,p}$. At every $t\in S_{x,p}$,
+including $0$, the chain rule gives
 $\phi'(t)=\langle\nabla f(x+tp),p\rangle$, using the gradient convention
 of [[def-jacobian-matrix-and-gradient]] and the Euclidean inner product of
 [[def-euclidean-inner-product]]. A direction is a **descent direction** at
