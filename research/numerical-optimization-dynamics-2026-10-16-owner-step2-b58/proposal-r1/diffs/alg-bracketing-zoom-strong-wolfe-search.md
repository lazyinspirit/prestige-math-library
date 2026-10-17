--- items/alg-bracketing-zoom-strong-wolfe-search.md
+++ items/alg-bracketing-zoom-strong-wolfe-search.md
@@ -27,9 +27,8 @@
 ## Definition
 
 Let $D\subseteq\mathbb R^n$ be open, let $f:D\to\mathbb R$ be $C^1$,
-let $x\in D$, and let $p\in\mathbb R^n$ satisfy
-$\langle\nabla f(x),p\rangle<0$. Fix $0<c_1<c_2<1/2$ and finite
-budgets $E,Z\in\mathbb N$ for expansion and zoom trials. Use the functions
+let $x\in D$, and let $p\in\mathbb R^n$ be arbitrary. Fix $0<c_1<c_2<1/2$ and finite
+budgets $E,Z\in\mathbb N$ for expansion and zoom trials. After the direction check passes, use the functions
 $\phi(t)=f(x+tp)$ and $\phi'(t)=\langle\nabla f(x+tp),p\rangle$ from
 [[def-wolfe-and-strong-wolfe-conditions]]. **Output:** either a positive
 strong Wolfe step, or one of `invalid-direction`, `domain-exit`, and
