---
id: lem-kak-integration-formula-for-k-bi-invariant-functions-on-sl2-r
kind: lemma
title: KAK integration formula for K-bi-invariant functions on SL2(R)
status: draft
origin: pipeline
deps:
  - def-iwasawa-and-minimal-parabolic-data-for-sl2-r
  - thm-iwasawa-decomposition-for-sl2-r
  - def-left-haar-integral-and-left-haar-measure
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-countable-choice
  - lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  - def-axiom-of-choice
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "AC is used for normalized Haar probability on K through the Iwasawa data and supplies AC_omega for the nonnegative C1 change-of-variables theorem. The real spectral decomposition and finite sign adjustment use no additional choice."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Lemma 7.4.14 and Exercise 7.4.15(1), printed pp. 302–304: K-bi-invariant L¹ and L² radial criteria (the source gives a proof sketch)"
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and use the conventions of [[def-iwasawa-and-minimal-parabolic-data-for-sl2-r]]. Fix the left Haar measure $dg$ of [[thm-iwasawa-decomposition-for-sl2-r]], so in NAK coordinates it is $e^{-s}\,dx\,ds\,dk$ with normalized Haar probability $dk$ on $K$. Write $a_t=\operatorname{diag}(e^{t/2},e^{-t/2})$ for $t\ge0$.

For every continuous nonnegative $K$-bi-invariant function $\psi:G\to[0,\infty)$, the following equality holds for extended nonnegative integrals:
$$\int_G\psi(g)\,dg=2\pi\int_0^\infty\psi(a_t)\sinh(t)\,dt.$$

Consequently, for every continuous complex-valued $K$-bi-invariant function $\varphi$ and $p\in\{1,2\}$,
$$\int_G|\varphi(g)|^p\,dg=2\pi\int_0^\infty|\varphi(a_t)|^p\sinh(t)\,dt,$$
with extended values; thus $\varphi\in L^p(G)$ exactly when the radial integral is finite. If $\varphi\in L^1(G)$, the same formula holds for the absolutely convergent complex integral of $\varphi$. More generally, if $\varphi$ is continuous and satisfies $\varphi(k_1gk_2)=\chi_1(k_1)\chi_2(k_2)\varphi(g)$ for continuous unitary characters $\chi_i:K\to S^1$, then $|\varphi|$ is $K$-bi-invariant and the same $L^1$ and $L^2$ criteria apply.

## Facts & Assumptions

**Given:** AC; $G=\mathrm{SL}_2(\mathbb R)$, $K=\mathrm{SO}(2)$, $a_t$, and $n_x$ as in [[def-iwasawa-and-minimal-parabolic-data-for-sl2-r]]; and the normalized left Haar measure of [[thm-iwasawa-decomposition-for-sl2-r]].

[F1] Every self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal eigenbasis ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[F2] In NAK coordinates the fixed Haar measure is $dg=e^{-s}\,dx\,ds\,dk$, where $dk$ is normalized probability on $K$ ([[thm-iwasawa-decomposition-for-sl2-r]]).

[F3] A $C^1$ diffeomorphism between open Euclidean sets changes variables for every nonnegative Lebesgue-measurable integrand ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F4] AC implies AC$_\omega$, the hypothesis of [F3] ([[def-axiom-of-choice]], [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]], [[def-countable-choice]]).

[F5] For $p\in\{1,2\}$, $\varphi\in L^p(G)$ means $\int_G|\varphi|^p\,dg<\infty$ ([[def-complex-haar-lp-spaces-and-compactly-supported-functions]], [[def-left-haar-integral-and-left-haar-measure]]).

## Proof

**Given:** The group and Haar measure above, and the continuous functions appearing in the Statement.

**Proof technique:** direct.

1.1 Let $g\in G$ and put $A=g^Tg$. This is a positive definite symmetric endomorphism of $\mathbb R^2$, so [F1] gives an orthonormal eigenbasis with eigenvalues $\lambda_+\ge\lambda_->0$. Since $\lambda_+\lambda_-=\det(g^Tg)=1$, one has $\lambda_+\ge1$ and $\lambda_-=\lambda_+^{-1}$. Choose the eigenbasis matrix $U\in\mathrm{SO}(2)$, changing the sign of one basis vector if needed, and set $t=\log\lambda_+\ge0$ and $S=U a_t U^T$. Then $S^2=A$ and $\det S=1$. The matrix $k=gS^{-1}$ satisfies $k^Tk=S^{-1}AS^{-1}=I$ and $\det k=1$, so $k\in K$ and $g=kUa_tU^T$ is a KAK factorization. Moreover $\operatorname{tr}(g^Tg)=e^t+e^{-t}=2\cosh t$, so this nonnegative parameter $t$ is uniquely determined by $g$. [F1, algebra]

2.1 For a nonnegative continuous $K$-bi-invariant $\psi$, [F2] and $\int_Kdk=1$ give $\int_G\psi(g)\,dg=\int_{\mathbb R}\int_{\mathbb R}\psi(n_xa_s)e^{-s}\,dx\,ds$. Set $y=e^s>0$ and $z=x+iy$. Direct multiplication gives $\operatorname{tr}((n_xa_s)^T(n_xa_s))=(x^2+y^2+1)/y$. Define $w=(z-i)/(z+i)$ and $\rho=|w|<1$. Then $1-\rho^2=4y/(x^2+(y+1)^2)$ and $1+\rho^2=2(x^2+y^2+1)/(x^2+(y+1)^2)$. For $r=2\operatorname{artanh}\rho\ge0$, this gives $\cosh r=(1+\rho^2)/(1-\rho^2)=(x^2+y^2+1)/(2y)$. The unique KAK parameter of $n_xa_s$ therefore equals $r$ by step 1.1, so $\psi(n_xa_s)=\psi(a_r)$. Since $e^{-s}ds=dy/y^2$, the integral reduces to $\int_{y>0}\psi(a_{r(x,y)})\,dx\,dy/y^2$. [F2, step 1.1, algebra]

3.1 The inverse Cayley map is $z=i(1+w)/(1-w)$; it satisfies $\operatorname{Im}z=(1-|w|^2)/|1-w|^2$ and $|dz/dw|^2=4/|1-w|^4$. Hence $dx\,dy/y^2=4\,du\,dv/(1-|w|^2)^2$ for $w=u+iv$. On the disk with the nonnegative real radius removed, $w=\rho e^{i\theta}$ is a $C^1$ diffeomorphism from $(0,1)\times(0,2\pi)$ with Jacobian $\rho$; the omitted radius is a countable union of compact subsegments on which the weight is bounded, and the origin is a singleton, so both have zero weighted measure. By [F3]–[F4], and with $r=2\operatorname{artanh}\rho$ so $d\rho=(1-\rho^2)dr/2$, one has $4\rho\,d\rho\,d\theta/(1-\rho^2)^2=2\rho\,dr\,d\theta/(1-\rho^2)=\sinh(r)\,dr\,d\theta$. The integrand is independent of $\theta$, whose interval has length $2\pi$. This proves the extended radial identity, including the zero function and the endpoint $r=0$, which contributes no atom. [F3, F4, step 2.1, algebra]

4.1 Apply the nonnegative identity to $|\varphi|^p$ for $p=1,2$ to obtain both extended $L^p$ formulas and their finiteness criteria by [F5]. When $\varphi\in L^1$, its real and imaginary positive and negative parts are continuous nonnegative $K$-bi-invariant functions; applying the identity to those four parts and recombining gives the absolutely convergent formula for $\varphi$. For the character-equivariant case, $|\chi_i(k)|=1$, hence $|\varphi(k_1gk_2)|=|\varphi(g)|$, and the same $L^p$ conclusions follow. [F5, step 2.1, step 3.1, algebra] ∎
