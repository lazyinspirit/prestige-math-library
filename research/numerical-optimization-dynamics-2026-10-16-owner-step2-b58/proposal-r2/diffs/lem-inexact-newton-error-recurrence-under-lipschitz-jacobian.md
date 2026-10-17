--- items/lem-inexact-newton-error-recurrence-under-lipschitz-jacobian.md
+++ items/lem-inexact-newton-error-recurrence-under-lipschitz-jacobian.md
@@ -29,14 +29,15 @@
 
 ## Statement
 
-Let $U\subseteq\mathbb R^n$ be open, $F:U\to\mathbb R^n$ be $C^1$, and
+Let $n\ge0$ be an integer, let $U\subseteq\mathbb R^n$ be open, $F:U\to\mathbb R^n$ be $C^1$, and
 $x_*\in U$ satisfy $F(x_*)=0$ with $J_*:=DF(x_*)$ invertible. Suppose a
-closed Euclidean ball $K=\overline B_2(x_*,R)\subseteq U$ is convex and
+closed Euclidean ball $K=\overline B_2(x_*,R)\subseteq U$ with $R>0$ is convex and
 $$
 \|J(u)-J(v)\|_{\rm op}\le L\|u-v\|_2\qquad(u,v\in K),
 $$
 where $J(x):=DF(x)$ and
-$\|A\|_{\rm op}:=\sup_{\|v\|_2=1}\|Av\|_2$. Let
+$\|A\|_{\rm op}:=\sup_{\|v\|_2=1}\|Av\|_2$ for $n\ge1$;
+for $n=0$ set the norm of the unique linear map to $0$. Let
 $\|v\|_*:=\|J_*v\|_2$ and fix $\bar\eta\in[0,1)$. There are constants
 $r_0>0$, $C_F>0$, and $C\ge0$ such that, whenever
 $\|x-x_*\|_2\le r_0$, $0\le\eta\le\bar\eta$, and $p,r\in\mathbb R^n$
@@ -70,10 +71,12 @@
 
 **Given:** The hypotheses and notation in the Statement.
 
-1.1 Put $K_*:=\|J_*^{-1}\|_{\rm op}$. The inverse identity gives $\|e\|_2=\|J_*^{-1}J_*e\|_2\le K_*\|e\|_*$, and the operator-norm definition gives $\|e\|_*\le\|J_*\|_{\rm op}\|e\|_2$. By [F3], choose a smaller radius $r_1\le R$ and $M>0$ such that every $J(x)$ on $\overline B_2(x_*,r_1)$ is invertible and $\|J(x)^{-1}\|_{\rm op}\le M$. Decrease $r_1$ if necessary so $r_1\le1$, and set $r_0:=r_1$. [given, F1, F2, F3, F5, F6, choose]
+1.1 If $n=0$, the space $\mathbb R^0$ is a singleton. Its unique linear map is invertible, and $x=x_*=p=r=F(x)=0$ in this space. Take $r_0=R$, $C_F=1$, and $C=0$. Every claimed estimate is $0\le0$, so the assertion holds. For the remainder assume $n\ge1$, so the imported positive-dimensional Newton lemmas and operator-norm comparisons apply. [given, algebra]
 
-2.1 Let $e:=x-x_*$. By [F4] and $\|J(x)-J_*\|_{\rm op}\le L\|e\|_2$, $\|F(x)-J_*e\|_2\le\|F(x)-J(x)e\|_2+\|(J(x)-J_*)e\|_2\le\frac{3L}{2}\|e\|_2^2$. Since $\|e\|_2\le K_*\|e\|_*$ and $\|e\|_*\le\|J_*\|_{\rm op}r_0$, this gives $\|F(x)\|_2\le\left(1+\frac{3L}{2}K_*^2\|J_*\|_{\rm op}r_0\right)\|e\|_*=:C_F\|e\|_*$. [given, F4, F6, step 1.1, algebra]
+1.2 Put $K_*:=\|J_*^{-1}\|_{\rm op}$. The inverse identity gives $\|e\|_2=\|J_*^{-1}J_*e\|_2\le K_*\|e\|_*$, and the operator-norm definition gives $\|e\|_*\le\|J_*\|_{\rm op}\|e\|_2$. By [F3], choose a smaller radius $r_1\le R$ and $M>0$ such that every $J(x)$ on $\overline B_2(x_*,r_1)$ is invertible and $\|J(x)^{-1}\|_{\rm op}\le M$. Decrease $r_1$ if necessary so $r_1\le1$, and set $r_0:=r_1$. [given, F1, F2, F3, F5, F6, choose]
 
-3.1 The linear residual equation and steps 1.1–2.1 imply $\|p\|_2\le M\|J(x)p\|_2\le M(1+\eta)\|F(x)\|_2\le M(1+\bar\eta)C_F\|e\|_*$. [step 1.1, step 2.1, given, algebra]
+2.1 Let $e:=x-x_*$. By [F4] and $\|J(x)-J_*\|_{\rm op}\le L\|e\|_2$, $\|F(x)-J_*e\|_2\le\|F(x)-J(x)e\|_2+\|(J(x)-J_*)e\|_2\le\frac{3L}{2}\|e\|_2^2$. Since $\|e\|_2\le K_*\|e\|_*$ and $\|e\|_*\le\|J_*\|_{\rm op}r_0$, this gives $\|F(x)\|_2\le\left(1+\frac{3L}{2}K_*^2\|J_*\|_{\rm op}r_0\right)\|e\|_*=:C_F\|e\|_*$. [given, F4, F6, step 1.2, algebra]
 
-4.1 Put $e_+:=x+p-x_*$. From $J(x)p=-F(x)+r$, $J_*e_+=J_*e-F(x)+r+(J_*-J(x))p$. Step 1.1 and [F4] give $\|F(x)-J_*e\|_2\le(3L/2)\|e\|_2^2\le(3L/2)K_*^2\|e\|_*^2$, so $\|r\|_2\le\eta\|F(x)\|_2\le\eta\|e\|_*+(3\eta L K_*^2/2)\|e\|_*^2$. Also $\|J_*-J(x)\|_{\rm op}\le LK_*\|e\|_*$ and step 3.1 bounds $\|p\|_2\le M(1+\bar\eta)C_F\|e\|_*$. The triangle inequality and $\eta\le\bar\eta$ yield $\|e_+\|_*\le\eta\|e\|_*+\left(\frac{3(1+\bar\eta)LK_*^2}{2}+LK_*M(1+\bar\eta)C_F\right)\|e\|_*^2$. Set $C$ equal to this nonnegative coefficient; this is the claimed recurrence, and step 1.1 supplies invertibility. [given, F4, step 1.1, step 3.1, algebra] ∎
+3.1 The linear residual equation and steps 1.2–2.1 imply $\|p\|_2\le M\|J(x)p\|_2\le M(1+\eta)\|F(x)\|_2\le M(1+\bar\eta)C_F\|e\|_*$. [step 1.2, step 2.1, given, algebra]
+
+4.1 Put $e_+:=x+p-x_*$. From $J(x)p=-F(x)+r$, $J_*e_+=J_*e-F(x)+r+(J_*-J(x))p$. Step 1.2 and [F4] give $\|F(x)-J_*e\|_2\le(3L/2)\|e\|_2^2\le(3L/2)K_*^2\|e\|_*^2$, so $\|r\|_2\le\eta\|F(x)\|_2\le\eta\|e\|_*+(3\eta L K_*^2/2)\|e\|_*^2$. Also $\|J_*-J(x)\|_{\rm op}\le LK_*\|e\|_*$ and step 3.1 bounds $\|p\|_2\le M(1+\bar\eta)C_F\|e\|_*$. The triangle inequality and $\eta\le\bar\eta$ yield $\|e_+\|_*\le\eta\|e\|_*+\left(\frac{3(1+\bar\eta)LK_*^2}{2}+LK_*M(1+\bar\eta)C_F\right)\|e\|_*^2$. Set $C$ equal to this nonnegative coefficient; this is the claimed recurrence, and step 1.2 supplies invertibility. [given, F4, step 1.2, step 3.1, algebra] ∎
