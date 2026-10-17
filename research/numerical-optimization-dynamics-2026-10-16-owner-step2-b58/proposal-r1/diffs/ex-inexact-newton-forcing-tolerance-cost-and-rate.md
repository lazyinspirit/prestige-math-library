--- items/ex-inexact-newton-forcing-tolerance-cost-and-rate.md
+++ items/ex-inexact-newton-forcing-tolerance-cost-and-rate.md
@@ -13,6 +13,7 @@
   - lem-geometric-sequence-null
   - def-jacobian-matrix-and-gradient
   - def-hessian-and-euclidean-critical-point
+  - def-krylov-subspace-of-a-matrix-and-start-vector
 proof_strategy: direct
 generation:
   role: example
@@ -30,18 +31,34 @@
 Let $f(x)=x^2/2$, so $F(x)=f'(x)=x$ and $F'(x)=1$. At a nonzero iterate,
 solve the Newton equation approximately from $p^{(0)}=0$ by
 $$
-p^{(j+1)}=p^{(j)}-(1-\tau)(p^{(j)}+x),\qquad 0<\tau<1.
+p^{(j+1)}=p^{(j)}-(1-\omega)(p^{(j)}+x),\qquad 0<\omega<1.
 $$
-Stop at the first $j$ with $\tau^j\le\eta$, where the forcing tolerance
+Stop at the first $j$ with $\omega^j\le\eta$, where the forcing tolerance
 satisfies $0<\eta\le c_2<1/2$. With the exact strong Wolfe search from
 [[alg-bracketing-zoom-strong-wolfe-search]], the unit step is accepted. The
 number $j$ of inner iterations grows as $\eta$ is tightened, while the outer
 error contracts by a factor at most $\eta$; choosing $\eta_k=|x_k|$ gives a
 quadratic outer error bound for $0<|x_0|\le c_2$.
 
+For each finite horizon $N\ge1$, let $j_k$ be the least integer with
+$\omega^{j_k}\le\eta_k$ on the first $N$ steps of the displayed recurrence,
+and choose the single inner budget $M_N\ge\max_{0\le k<N}j_k$.
+Use $M=M_N$, $\bar\eta=c_2$, $\sigma=1/2$, $J=0$, $E,Z\ge1$,
+$\gamma=2$, and $\lambda_0=\lambda_{\max}=1$.
+The deterministic solver on the scalar operator $A=1$ starts at zero and
+performs the displayed iteration until $|p+x|\le\tau$, where $\tau$ is its
+absolute requested residual tolerance, or until $M$ iterations are used;
+it returns that scalar candidate and its iteration count. It returns
+`no-candidate` for other operators. For $b=-x\ne0$ and any $m\ge1$,
+$K_m(1,b)=\mathbb R$, so every returned candidate meets the Krylov input
+contract (and $p^{(0)}=0\in K_0$).
+This realizes every finite prefix. The infinite recurrence and its rate
+claim do not assert realization by one fixed finite inner budget.
+
+
 ## Facts & Assumptions
 
-**Given:** The scalar objective, the fixed $\tau\in(0,1)$, and Wolfe parameters $0<c_1<c_2<1/2$.
+**Given:** The scalar objective, the fixed $\omega\in(0,1)$, and Wolfe parameters $0<c_1<c_2<1/2$.
 
 [F1] [[def-jacobian-matrix-and-gradient]]: for a scalar function the gradient is the vector of first partial derivatives.
 
@@ -55,16 +72,18 @@
 
 [F6] [[lem-geometric-sequence-null]]: if $|r|<1$, then $r^k\to0$.
 
+[F7] [[def-krylov-subspace-of-a-matrix-and-start-vector]]: $K_0(A,b)=\{0\}$ and $K_m(A,b)=\operatorname{span}\{b,Ab,\ldots,A^{m-1}b\}$ for $m\ge1$.
+
 ## Verification
 
 **Given:** The objective and inner iteration of the Example, with $x\ne0$ and $0<\eta\le c_2$.
 
-1.1 The exact scalar identities are $F(x)=x$, $J(x)=1$, and $g(x)=x$ by [F1]–[F2]. Induction on $j$ gives $p^{(j)}=-(1-\tau^j)x$, so the linear residual is $r_j=J(x)p^{(j)}+F(x)=\tau^j x$. [given, F1, F2, induction, algebra]
+1.1 The exact scalar identities are $F(x)=x$, $J(x)=1$, and $g(x)=x$ by [F1]–[F2]. Induction on $j$ gives $p^{(j)}=-(1-\omega^j)x$, so the linear residual is $r_j=J(x)p^{(j)}+F(x)=\omega^j x$. [given, F1, F2, induction, algebra]
 
-1.2 Since $0<\tau<1$, [F6] gives $\tau^j\to0$, so a least $j$ with $\tau^j\le\eta$ exists. As $\eta<1$, $j\ge1$ and minimality gives $\tau^j\le\eta<\tau^{j-1}$. If the requested tolerance is reduced, the set of eligible $j$ can only shrink, so the required inner iteration count cannot decrease. [given, F6, choose, algebra]
+1.2 Since $0<\omega<1$, [F6] gives $\omega^j\to0$, so a least $j$ with $\omega^j\le\eta$ exists. As $\eta<1$, $j\ge1$ and minimality gives $\omega^j\le\eta<\omega^{j-1}$. If the requested tolerance is reduced, the set of eligible $j$ can only shrink, so the required inner iteration count cannot decrease. For any finite $N$, all $j_k$ on its first $N$ nonzero iterates are finite, so their finite maximum defines $M_N$. The specified solver therefore reaches its requested residual tolerance before its budget on that prefix, and [F7] verifies its scalar Krylov membership. [given, F6, F7, choose, algebra]
 
-2.1 At this $j$, $|r_j|=\tau^j|x|\le\eta|x|$, while $g(x)p^{(j)}=-(1-\tau^j)x^2$ and $|g(x)|\,|p^{(j)}|=(1-\tau^j)x^2$. Because $0<\sigma<1$, the descent safeguard passes. [given, F3, step 1.1, step 1.2, algebra]
+2.1 At this $j$, $|r_j|=\omega^j|x|\le\eta|x|$, while $g(x)p^{(j)}=-(1-\omega^j)x^2$ and $|g(x)|\,|p^{(j)}|=(1-\omega^j)x^2$. Because $0<\sigma<1$, the descent safeguard passes. [given, F3, step 1.1, step 1.2, algebra]
 
-3.1 Let $q:=\tau^j\le\eta\le c_2$. The unit step gives $x_+=x+p^{(j)}=qx$. Its objective satisfies $f(x_+)=q^2x^2/2\le x^2(1-2c_1(1-q))/2=f(x)+c_1g(x)p^{(j)}$, because $1+q\ge1>2c_1$. Also $|\phi'(1)|=q(1-q)x^2\le c_2(1-q)x^2=c_2|\phi'(0)|$. Thus both strong Wolfe conditions hold, and [F4] accepts $t=1$. [given, F3, F4, step 2.1, algebra]
+3.1 Let $q:=\omega^j\le\eta\le c_2$. The unit step gives $x_+=x+p^{(j)}=qx$. Its objective satisfies $f(x_+)=q^2x^2/2\le x^2(1-2c_1(1-q))/2=f(x)+c_1g(x)p^{(j)}$, because $1+q\ge1>2c_1$. Also $|\phi'(1)|=q(1-q)x^2\le c_2(1-q)x^2=c_2|\phi'(0)|$. Thus both strong Wolfe conditions hold, and [F4] accepts $t=1$. [given, F3, F4, step 2.1, algebra]
 
-4.1 For fixed $\eta$, $q=\tau^j$ is a constant in $(0,1)$ and $x_{k+1}=qx_k$, so the outer sequence is linearly convergent. If $0<|x_0|\le c_2$ and $\eta_k=|x_k|$, then $\eta_k\le c_2$ at every step and $|x_{k+1}|=\tau^{j_k}|x_k|\le|x_k|^2$. Here $\eta_k=|F(x_k)|$; the local tube in [F5] may contain $[-c_2,c_2]$ because $F(x)=x$ and $J(x)=1$ everywhere. Thus [F5] supplies the same local quadratic-rate conclusion. [given, F5, step 1.2, step 3.1, induction] ∎
+4.1 For fixed $\eta$, $q=\omega^j$ is a constant in $(0,1)$ and $x_{k+1}=qx_k$, so the outer sequence is linearly convergent. If $0<|x_0|\le c_2$ and $\eta_k=|x_k|$, then $\eta_k\le c_2$ at every step and $|x_{k+1}|=\omega^{j_k}|x_k|\le|x_k|^2$. Here $\eta_k=|F(x_k)|$; the local tube in [F5] may contain $[-c_2,c_2]$ because $F(x)=x$ and $J(x)=1$ everywhere. Thus [F5] supplies the same local quadratic-rate conclusion. [given, F5, step 1.2, step 3.1, induction] ∎
