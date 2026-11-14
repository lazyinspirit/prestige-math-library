---
title: Finite no-jump and ordered-jump expansion
status: published
research_item: lem-qec-prereq-trajectory-dyson-expansion
dependency_level: 1
---

## Prerequisites

- [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)
- [physics:lem-qsm-dt-banach-volterra-dyson](https://alphabetamath.cc/physics/item/lem-qsm-dt-banach-volterra-dyson)
- [physics:cor-finite-dimensional-normed-spaces-are-banach](https://alphabetamath.cc/physics/item/cor-finite-dimensional-normed-spaces-are-banach)
- [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)
- [math:lem-matrix-algebra-is-a-c-star-algebra](https://alphabetamath.cc/item/lem-matrix-algebra-is-a-c-star-algebra)
- [physics:lem-cm-integral-and-ftc-for-continuous-normed-space-curves](https://alphabetamath.cc/physics/item/lem-cm-integral-and-ftc-for-continuous-normed-space-curves)


## Statement

Take the finite-dimensional GKSL data $d,H,L_1,\ldots,L_m$ and channel $\mathcal N_t=e^{t\mathcal L}$ from the finite GKSL interface, with $t\geq0$. The matrix spectral norm means $\|X\|=\sup_{\|v\|_2\leq1}\|Xv\|_2$ on $\mathbb C^d$, where $\|v\|_2=(\sum_i|v_i|^2)^{1/2}$; map norms are induced by this matrix norm. Put $G=-iH-\frac12\sum_aL_a^\dagger L_a$ and $E(u)=e^{uG}$. For $n\geq1$, indices $a_1,\ldots,a_n\in\{1,\ldots,m\}$ and ordered times $0\leq s_1\leq\cdots\leq s_n\leq t$, define $K_{a_1\cdots a_n}(s_1,\ldots,s_n)=E(t-s_n)L_{a_n}E(s_n-s_{n-1})\cdots L_{a_1}E(s_1)$; for $n=0$ put $K_\varnothing=E(t)$. All matrix-valued integrals are taken entrywise. For $n\geq2$, the ordered-integral notation means the nested one-dimensional Riemann integral

$$\int_{0\leq s_1\leq\cdots\leq s_n\leq t}f(s)\,ds_1\cdots ds_n:=\int_0^t\int_0^{s_n}\cdots\int_0^{s_2}f(s_1,\ldots,s_n)\,ds_1\cdots ds_n.$$

For $n=1$ it means $\int_0^t f(s_1)\,ds_1$. Then

$$\mathcal N_t(X)=E(t)XE(t)^\dagger+\sum_{n=1}^\infty\sum_{a_1,\ldots,a_n}\int_{0\leq s_1\leq\cdots\leq s_n\leq t}K_{a_1\cdots a_n}(s)XK_{a_1\cdots a_n}(s)^\dagger\,ds_1\cdots ds_n.$$

The series converges absolutely in the operator norm induced by the matrix spectral norm. Thus $E(t)$ is the no-jump amplitude and $E(t-s)L_aE(s)$ is the single-jump amplitude at time $s$; these names describe terms of this mathematical expansion. If $g=\|G\|$ and $j=\sum_a\|L_a\|^2$, the norm of the sum of all terms with at least $N$ jumps is at most $e^{2gt}\sum_{n=N}^\infty(jt)^n/n!$ for $N\geq1$.

As $t\downarrow0$, $E(t)=I+tG+O(t^2)$ in matrix norm and $\mathcal N_t(X)=E(t)XE(t)^\dagger+t\sum_aL_aXL_a^\dagger+O(t^2)\|X\|$ uniformly in $X$. Consequently the finite amplitudes $E(t)$ and $\sqrt t L_a$ represent the channel through first order, with an $O(t^2)$ induced-norm error; they are not asserted to give the exact channel at finite time.

## Facts & Assumptions

[F1] The finite GKSL interface defines $\mathcal L(X)=-i[H,X]+\sum_a(L_aXL_a^\dagger-\{L_a^\dagger L_a,X\}/2)$ and $\mathcal N_t=e^{t\mathcal L}$ for finite matrices, Hermitian $H$, a finite family of $L_a$, and $t\geq0$. [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)

[F2] On a complex Banach space, a strongly continuous bounded operator family with a continuous norm majorant has a unique solution given by its uniformly convergent iterated Volterra series. [physics:lem-qsm-dt-banach-volterra-dyson](https://alphabetamath.cc/physics/item/lem-qsm-dt-banach-volterra-dyson)

[F3] Every finite-dimensional complex normed space is complete. [physics:cor-finite-dimensional-normed-spaces-are-banach](https://alphabetamath.cc/physics/item/cor-finite-dimensional-normed-spaces-are-banach)

[F4] A bounded operator exponential is norm differentiable, obeys the group law and the bound $\|e^{uA}\|\leq e^{|u|\|A\|}$, and has quadratic remainder at zero. [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)

[F5] On $\mathbb C^d$ with its Euclidean norm, the matrix operator norm in the statement makes $M_d(\mathbb C)$ a complete normed matrix algebra with $\|AB\|\leq\|A\|\|B\|$, $\|A^\dagger\|=\|A\|$, and $\|I\|=1$. [math:lem-matrix-algebra-is-a-c-star-algebra](https://alphabetamath.cc/item/lem-matrix-algebra-is-a-c-star-algebra)

[F6] A continuous curve in a complete normed real space has a norm-Riemann integral, linear in the curve and commuting with bounded real-linear maps; its indefinite integral has derivative equal to the curve. The integral is bounded by interval length times the supremum norm. Complex matrix spaces can be used as real spaces here. [physics:lem-cm-integral-and-ftc-for-continuous-normed-space-curves](https://alphabetamath.cc/physics/item/lem-cm-integral-and-ftc-for-continuous-normed-space-curves)

## Proof

**Given:** The finite matrices and nonnegative time in the statement. Matrix norms below are spectral norms, and map norms are their induced operator norms.

**Goal:** Establish the ordered expansion, its tail bound, and the stated short-time approximation.

1.1 Define $\mathcal A(X)=GX+XG^\dagger$ and $\mathcal J(X)=\sum_aL_aXL_a^\dagger$. Direct expansion of [F1] gives $\mathcal L=\mathcal A+\mathcal J$. By [F5], $\|\mathcal A\|\leq2g$ and $\|\mathcal J\|\leq j$, so $\mathcal L$ is bounded too. The matrix space is Banach by [F5], while $\mathbb C^d$ and the finite-dimensional space of matrix-space linear maps with the induced norm are Banach by [F3]. The entry functional obeys $|X_{ij}|\leq\|X\|$: the $j$th column has Euclidean norm at most $\|X\|$ and each entry has modulus at most that column norm. Conversely $\|X\|\leq\sum_{i,j}|X_{ij}|$, by the triangle inequality applied to $X=\sum_{i,j}X_{ij}E_{ij}$ and $\|E_{ij}\|=1$. These inequalities show that the exponential series in the finite GKSL interface has the same entrywise sum as the spectral-norm exponential here. By [F4], $e^{u\mathcal A}(X)=E(u)XE(u)^\dagger$: for $u\geq0$ both sides solve the same linear differential equation with initial value $X$, by differentiating the right side and using uniqueness in [F2]. For $u<0$ apply the same argument to $-\mathcal A$ and $-G$. In particular $\|e^{u\mathcal A}\|\leq e^{2|u|g}$ by [F4] and [F5]. [given, F1, F2, F3, F4, F5, algebra]

2.1 For fixed $X$ set $Y(t)=e^{-t\mathcal A}e^{t\mathcal L}X$. Differentiation using [F4] yields $Y'(t)=B(t)Y(t)$, $Y(0)=X$, where $B(t)=e^{-t\mathcal A}\mathcal J e^{t\mathcal A}$. On every finite interval $[0,T]$, $B$ is norm-continuous and $\|B(t)\|\leq je^{4Tg}$, so [F2] applies. To obtain the series in map norm as well, apply [F2] on the Banach space of matrix-space linear maps to the coefficient $\Phi\mapsto B(s)\Phi$, with initial map the identity; its norm is bounded by $je^{4Tg}$. The recursion in [F2] nests the earliest time innermost, exactly as in the ordered-integral convention of the statement. By [F6], a fixed bounded linear map commutes with each integral. Thus its iterated integrals, multiplied on the left by $e^{t\mathcal A}$, have integrand $e^{(t-s_n)\mathcal A}\mathcal J e^{(s_n-s_{n-1})\mathcal A}\cdots\mathcal J e^{s_1\mathcal A}X$ on $0\leq s_1\leq\cdots\leq s_n\leq t$; the exponential group law cancels adjacent factors. Expanding the finite sums in $\mathcal J$ and using step 1.1 gives exactly the displayed amplitudes and integrals. [given, F2, F4, F6, step 1.1, algebra]

3.1 The integrals in step 2.1 exist in norm by the Volterra recursion [F2]; moving the fixed linear factors through them and expanding the finite sums uses [F6]. For each matrix entry, the real and imaginary parts of $X\mapsto X_{ij}$ are bounded real-linear functionals by step 1.1, so [F6] identifies these norm integrals with entrywise integrals. The same conclusion holds for the map-valued integrands: apply the bounded evaluation maps $\Phi\mapsto\Phi(X)$ and then matrix-entry functionals. The inequality $\|\int f\|\leq\int\|f\|$ follows by the triangle inequality on each Riemann sum and passage to the limits; $\|f\|$ is continuous. Finally, the nested integral of the constant $1$ is $V_n(t)=t^n/n!$: start with $V_0(t)=1$ and use $V_n(t)=\int_0^t V_{n-1}(u)\,du$ and the polynomial antiderivative, by the fundamental theorem in [F6]. This is the ordered integration weight used below. [F2, F6, step 1.1, step 2.1, algebra]

4.1 For ordered times the nonnegative propagation intervals sum to $t$. Therefore each $n$-jump integrand has induced norm at most $e^{2gt}\prod_{k=1}^n\|L_{a_k}\|^2$. Summing indices gives $e^{2gt}j^n$. Applying the integral norm bound successively and using $V_n(t)=t^n/n!$ from step 3.1 gives the factorial factor. Thus the $n$-jump term has norm at most $e^{2gt}(jt)^n/n!$. The exponential majorant proves absolute induced-norm convergence and the stated tail bound. [given, F5, step 1.1, step 2.1, step 3.1, algebra]

5.1 By [F4], $\|E(t)-I-tG\|\leq t^2g^2e^{tg}/2$. For the one-jump term, write its integrand as $e^{(t-s)\mathcal A}\mathcal J e^{s\mathcal A}$; subtracting $\mathcal J$ and using $\|e^{u\mathcal A}-I\|\leq e^{2ug}-1$ for $u\geq0$ (from the series in [F4] and $\|\mathcal A\|\leq2g$) bounds the difference by $j(e^{2tg}-1)$ for each $s\in[0,t]$. Hence its integral differs from $t\mathcal J$ by at most $tj(e^{2tg}-1)$. Step 4.1 bounds all terms with at least two jumps by $e^{2gt}(jt)^2e^{jt}/2$. Both bounds are $O(t^2)$ as $t\downarrow0$, and $t\mathcal J(X)=\sum_a(\sqrt t L_a)X(\sqrt t L_a)^\dagger$. This proves the approximation and its uniform induced-norm error. [given, F4, step 1.1, step 2.1, step 3.1, step 4.1, algebra] ∎
