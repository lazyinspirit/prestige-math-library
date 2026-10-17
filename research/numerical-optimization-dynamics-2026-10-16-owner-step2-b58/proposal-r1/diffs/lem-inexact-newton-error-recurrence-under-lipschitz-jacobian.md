--- items/lem-inexact-newton-error-recurrence-under-lipschitz-jacobian.md
+++ items/lem-inexact-newton-error-recurrence-under-lipschitz-jacobian.md
@@ -29,9 +29,9 @@
 
 ## Statement
 
-Let $U\subseteq\mathbb R^n$ be open, $F:U\to\mathbb R^n$ be $C^1$, and
+Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, $F:U\to\mathbb R^n$ be $C^1$, and
 $x_*\in U$ satisfy $F(x_*)=0$ with $J_*:=DF(x_*)$ invertible. Suppose a
-closed Euclidean ball $K=\overline B_2(x_*,R)\subseteq U$ is convex and
+closed Euclidean ball $K=\overline B_2(x_*,R)\subseteq U$ with $R>0$ is convex and
 $$
 \|J(u)-J(v)\|_{\rm op}\le L\|u-v\|_2\qquad(u,v\in K),
 $$
