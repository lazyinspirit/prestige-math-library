---
title: Static Bohr-frequency evaluation of the jump integral
status: draft
research_item: lem-qec-author-42f4c98e5e20-ule-bohr-reduction
dependency_level: 3
---

## Prerequisites

- [lem-qec-author-42f4c98e5e20-ule-normalization](item-lem-qec-author-42f4c98e5e20-ule-normalization)
- [lem-qec-author-42f4c98e5e20-ule-kernel-operators](item-lem-qec-author-42f4c98e5e20-ule-kernel-operators)
- [physics:def-nrqmx-finite-hermitian-matrix-exponential](https://alphabetamath.cc/physics/item/def-nrqmx-finite-hermitian-matrix-exponential)
- [physics:lem-nrqmx-finite-hermitian-matrix-exponential](https://alphabetamath.cc/physics/item/lem-nrqmx-finite-hermitian-matrix-exponential)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals)
- [math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one)
- [math:thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions](https://alphabetamath.cc/item/thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions)


## Statement

Assume Countable Choice. Work on $\mathbb C^d$, $d\geq1$, with its standard complex inner product, conjugate-transpose adjoint $\dagger$, and induced operator norm. Let $H_S=H_S^\dagger$ have an orthonormal eigenbasis $|m\rangle$, $1\leq m\leq d$, with real eigenvalues $E_m$. Let $X_\alpha=X_\alpha^\dagger$ and $\|X_\alpha\|\leq1$, $1\leq\alpha\leq N$. Use the normalized $N\times N$ frequency and time kernels $h$ and the positive parameter $\gamma$ of the normalization lemma. Assume the entrywise Fourier identities $\int_{\mathbb R}h(u)e^{i\omega u}\,du=2\pi h(\omega)$ at every Bohr frequency $\omega=E_n-E_m$. For real $s,t$, define $U(t,s)=e^{-iH_S(t-s)}$ by the finite-dimensional matrix-exponential series. For $1\leq\lambda\leq N$, the Schrödinger-picture jump $L_\lambda(t)=\sqrt\gamma\sum_{\alpha=1}^N\int_{\mathbb R}h_{\lambda\alpha}(t-s)U(t,s)X_\alpha U(t,s)^\dagger\,ds$ exists absolutely, is independent of $t$, and equals $2\pi\sqrt\gamma\sum_{m,n=1}^d\sum_{\alpha=1}^Nh_{\lambda\alpha}(E_n-E_m)(X_\alpha)_{mn}|m\rangle\langle n|$, where $(X_\alpha)_{mn}$ denotes the matrix entry in the given eigenbasis.

## Facts & Assumptions

[F1] The normalized time kernel $h$ has finite zeroth and first mixed-norm moments, and $\gamma>0$. [lem-qec-author-42f4c98e5e20-ule-normalization](item-lem-qec-author-42f4c98e5e20-ule-normalization)

[F2] Assuming Countable Choice, on a finite-dimensional system, measurable Hermitian couplings of operator norm at most one give absolutely convergent jump integrals for this kernel. [lem-qec-author-42f4c98e5e20-ule-kernel-operators](item-lem-qec-author-42f4c98e5e20-ule-kernel-operators)

[F3] For matrices on $\mathbb C^d$ with the standard complex inner product, the adjoint is the conjugate transpose, the operator norm is the unit-ball supremum, and $e^{zA}=\sum_{k=0}^\infty z^kA^k/k!$ converges absolutely in operator norm for every complex $z$. [physics:def-nrqmx-finite-hermitian-matrix-exponential](https://alphabetamath.cc/physics/item/def-nrqmx-finite-hermitian-matrix-exponential)

[F4] If $A=A^\dagger$ on $\mathbb C^d$ and $r\in\mathbb R$, then $e^{-irA}$ is unitary and depends differentiably, hence continuously, on $r$ in operator norm. This is the supplier with $\hbar=1$. [physics:lem-nrqmx-finite-hermitian-matrix-exponential](https://alphabetamath.cc/physics/item/lem-nrqmx-finite-hermitian-matrix-exponential)

[A1] Assume Countable Choice for the convergence supplier [F2] and the change-of-variables theorem [F7]. [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[F5] For a measurable real function $p$, its positive and negative parts are $p^+=\max\{p,0\}$ and $p^-=\max\{-p,0\}$. For integrable $p$, both parts have finite integral and $\int p=\int p^+-\int p^-$. For a complex integrable $f=p+iq$, the integral is $\int f=\int p+i\int q$, and integrability means finite integral of $|f|$. [math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals)

[F6] The space $L^1(\mu)$ is a complex vector space and its Lebesgue integral is complex-linear. Thus finite sums and constant complex factors commute with the integral of integrable functions. [math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one)

[F7] Assume Countable Choice. For open $U,V\subseteq\mathbb R^n$, a $C^1$ diffeomorphism $T:U\to V$, and nonnegative Lebesgue measurable $a$, the change-of-variables formula is $\int_V a(y)\,dy=\int_U a(T(x))|\det DT(x)|\,dx$. We use $U=V=\mathbb R$ and $T_t(u)=t-u$, for which $T_t^{-1}=T_t$ and $|T_t'|=1$. [math:thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions](https://alphabetamath.cc/item/thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions)

## Proof

**Given:** Countable Choice, the finite-dimensional complex system, Hermitian $H_S$, real times, bounded Hermitian couplings, normalized kernel, and pointwise inversion identities in the Statement. **Goal:** Prove absolute convergence and evaluate $L_\lambda(t)$.

1.1 Put $u=t-s$. Since $H_S^k|m\rangle=E_m^k|m\rangle$, apply the norm-convergent series in [F3] to each eigenvector to obtain $U(t,s)|m\rangle=e^{-iE_mu}|m\rangle$. As $E_m,u$ are real, its adjoint is diagonal with entries $e^{iE_mu}$. By [F4], $U(t,s)$ is unitary for every real $s,t$. [given, F3, F4]

1.2 Fix real $t$ and put $T_t(u)=t-u$. For any complex $f=p+iq\in L^1(\mathbb R)$, apply [F7] to $|f|$ to obtain $\int|f\circ T_t|=\int|f|<\infty$. Apply [F7] separately to the four nonnegative measurable functions $p^+,p^-,q^+,q^-$ in [F5]. Their integrals are finite, and composition with $T_t$ commutes with taking positive and negative parts. Subtract the two real-part identities and the two imaginary-part identities, then combine them by [F5]. This proves $\int_{\mathbb R}f(s)\,ds=\int_{\mathbb R}f(t-u)\,du$ for complex integrable $f$. In particular, reflection introduces no sign in a Lebesgue integral because the Jacobian is used in absolute value. [A1, F5, F7, algebra]

2.1 For each fixed real $t$, put $Y_\alpha^{(t)}(s)=U(t,s)X_\alpha U(t,s)^\dagger$. By [F4] its matrix entries are continuous in $s$, hence measurable. Conjugate-transpose multiplication gives $(Y_\alpha^{(t)}(s))^\dagger=Y_\alpha^{(t)}(s)$. Unitarity gives $\|Uv\|=\|v\|=\|U^\dagger v\|$ for every vector $v$; consequently $\|UX_\alpha U^\dagger v\|\leq\|X_\alpha\|\|v\|$, so the unit-ball supremum in [F3] gives $\|Y_\alpha^{(t)}(s)\|\leq1$. Together with [A1], these meet the hypotheses needed to apply [F2], with the kernel from [F1], proving absolute convergence of each $L_\lambda(t)$. [given, A1, F1, F2, F3, F4, step 1.1]

3.1 Step 1.1 gives $(Y_\alpha^{(t)}(s))_{mn}=(X_\alpha)_{mn}e^{i(E_n-E_m)(t-s)}$. The entrywise integrands are integrable by step 2.1. Apply step 1.2 to each such entry and use [F6] to extract the constant $(X_\alpha)_{mn}$ and commute the finite matrix and coupling sums with their entrywise integrals. The functions $u\mapsto h_{\lambda\alpha}(u)e^{i(E_n-E_m)u}$ are integrable: their modulus is $|h_{\lambda\alpha}(u)|$, bounded by the mixed norm whose integral is finite in [F1]. Thus the coefficient multiplying $|m\rangle\langle n|$ is $\sqrt\gamma\sum_{\alpha=1}^N(X_\alpha)_{mn}\int_{\mathbb R}h_{\lambda\alpha}(u)e^{i(E_n-E_m)u}\,du$. [F1, F5, F6, step 1.1, step 2.1, step 1.2, algebra]

4.1 Apply the stated entrywise Fourier identity at each real $E_n-E_m$ to the coefficient in step 3.1. This gives exactly the finite sum in the Statement, containing no $t$, and proves time independence as well as the claimed formula. The Fourier identities remain explicit hypotheses; no pointwise inversion conclusion is inferred from integrability alone. [given, step 3.1] ∎
