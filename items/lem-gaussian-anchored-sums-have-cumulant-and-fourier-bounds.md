---
dependency_level: 0
id: lem-gaussian-anchored-sums-have-cumulant-and-fourier-bounds
kind: lemma
title: Gaussian anchored bounded sums have uniform cumulant and Fourier bounds
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-axiom-of-choice
  - thm-dominated-convergence
  - thm-identity-theorem-holomorphic-functions
  - cor-locally-uniformly-convergent-holomorphic-series
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-factorization-of-expectations-for-independent-variables
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - lem-characteristic-function-of-a-multivariate-normal-law
  - thm-nondegenerate-multivariate-normal-law-has-density
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: A. Yu. Zaitsev, Estimates of quantiles of smooth conditional distributions and the multidimensional invariance principle, Siberian Mathematical Journal 37 (1996), §§1–2; Gaussian convolution specialization proved here
      url: https://www.mathnet.ru/links/e53bf45963ae71225e3a783f93f9e434/smj483.pdf
---

## Statement

Assume AC. Fix $0<\gamma\le1$. Let $1\le d\le4$, $s>0$, $B>0$, and let $X_1,\ldots,X_m,Z$ be independent centered random vectors in $\mathbb R^d$, where $m\ge0$, $|X_j|\le B$ almost surely, and $Z\sim N_d(0,G)$. Suppose $S=Z+\sum_jX_j$ has covariance $sI_d$ and $G\ge\gamma sI_d$ in quadratic form order. There is an absolute constant $C_0\ge1$ such that, with $\tau=C_0B$, the logarithmic moment generating function
$$K(z)=\log\mathbb E e^{z\cdot S},\qquad K(0)=0,$$
has a single analytic branch on the complex Euclidean ball $\tau|z|<1$, and
$$|\partial_u\partial_v^2K(z)|\le\tau s|u||v|^2\qquad(u,v\in\mathbb R^d,\ \tau|z|<1).$$
Here $z\cdot S$ uses the complex bilinear dot product and $|z|^2=\sum_i|z_i|^2$. Every real exponential tilt $\mathbb P_h(d\omega)=e^{h\cdot S-K(h)}\mathbb P(d\omega)$ is defined, and its characteristic function satisfies
$$|\varphi_h(t)|:=|\mathbb E_h e^{it\cdot S}|\le e^{-\gamma s|t|^2/2}\qquad(t,h\in\mathbb R^d),$$
where $K(h)=\log\mathbb E e^{h\cdot S}$ for real $h$, also outside the analytic ball. Put $\kappa=\tau/\sqrt s$. For every fixed $a>0$ and integer $N\ge1$ there is a finite $C_{a,N,\gamma}$, uniform in $1\le d\le4$, such that, if $0<\kappa\le1$,
$$(2\pi)^{-d}\int_{|t|\ge a/\tau}|\varphi_h(t)|\,dt\le C_{a,N,\gamma}\kappa^Ns^{-d/2},$$
$$(2\pi)^{-d}\int_{|t|\ge a/\tau}|t\cdot v||\varphi_h(t)|\,dt\le C_{a,N,\gamma}\kappa^N|v|s^{-(d+1)/2}.$$
All assertions hold with the same $C_0$, $B$, $s$, and $\gamma$ for $AS$, where $A$ is any real $k\times d$ matrix with $1\le k\le d$ and $AA^T=I_k$. This includes every coordinate prefix, every orthogonal change of coordinates, and their compositions. In particular it covers the normalized joint sum and difference of two independent children by applying the assertion in their joint dimension, provided that dimension is at most four and the joint input satisfies the stated covariance assumptions.

## Facts & Assumptions

**Given:** The hypotheses of the Statement; all vector norms are Euclidean, and all matrix orders are orders of real quadratic forms.

[F1] Finite products of integrable functions of independent variables factor in expectation. [[thm-factorization-of-expectations-for-independent-variables]].

[F2] Dominated convergence interchanges limits and integrals under an integrable absolute majorant. [[thm-dominated-convergence]].

[F3] Absolute Fubini and nonnegative Tonelli apply to the probability and Lebesgue integrals below. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]].

[F4] A positive definite Gaussian law has density $q_G(x)=(2\pi)^{-d/2}(\det G)^{-1/2}e^{-x^TG^{-1}x/2}$ and a Gaussian with covariance $G$ has characteristic function $e^{-t^TGt/2}$. [[thm-nondegenerate-multivariate-normal-law-has-density]], [[lem-characteristic-function-of-a-multivariate-normal-law]].

[F6] Locally uniformly convergent holomorphic series are holomorphic, the one-variable identity theorem extends equality from a real interval, and linear changes of Lebesgue variables have their determinant Jacobian. [[cor-locally-uniformly-convergent-holomorphic-series]], [[thm-identity-theorem-holomorphic-functions]], [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]].

[F5] Euclidean Cauchy–Schwarz bounds $|u\cdot x|\le|u||x|$, and its integral version follows by integrating $(f-cg)^2\ge0$ and minimizing in real $c$. [[thm-cauchy-schwarz-and-the-euclidean-norm]].

[A1] AC is assumed and inherited by the Gaussian suppliers. [[def-axiom-of-choice]].

## Proof

1.1 Fix one centered bounded summand $X$ with covariance $D$, and put $M(z)=\mathbb E e^{z\cdot X}$. Its exponential series converges uniformly on every bounded complex set because $|X|\le B$, and the expectation of its absolute series is bounded by $e^{B|z|}$; thus termwise integration defines an entire function and its derivatives are the expectations of the corresponding polynomial factors times the exponential. Fix an absolute $b>0$ with $e^b-1\le1/2$. If $B|z|<b$, then $|M(z)-1|\le e^{B|z|}-1\le1/2$, so the convergent power series for $\log(1+(M(z)-1))$ supplies a single analytic logarithm vanishing at zero. [A1, given, F2, F5, F6]

1.2 Completing the square in the density in [F4] shows $\mathbb E e^{h\cdot Z}=e^{h^TGh/2}$ for real $h$ and that its real tilt is $N_d(Gh,G)$. The same integral for complex $z$ converges absolutely on bounded complex sets: $e^{\operatorname{Re}(z)\cdot x}$ times the Gaussian density is a constant times a translated Gaussian density, which dominates its polynomial derivatives on smaller bounded sets. Its exponential series or differentiated integral therefore gives an entire function, and the real identity extends to complex arguments. To justify that last extension without a several-variable identity theorem, fix all but the first coordinate real and apply the one-variable identity theorem, then successively free each remaining coordinate. Thus the Gaussian cumulant is $z^TGz/2$ and has zero third derivative. [F2, F4, F6, algebra]

2.1 On this ball, writing subscripts for directional derivatives, the bounds $|e^{z\cdot X}|\le e^b$, $|u\cdot X|\le B|u|$, and $\mathbb E(v\cdot X)^2=v^TDv$ give $|M_u|\le e^bB|u|$, $|M_v|\le e^b\sqrt{v^TDv}$, $|M_{vv}|\le e^bv^TDv$, $|M_{uv}|\le e^bB|u|\sqrt{v^TDv}$, and $|M_{uvv}|\le e^bB|u|v^TDv$. These inequalities also hold when $D$ is singular: a direction with zero second moment has $v\cdot X=0$ almost surely. [step 1.1, F5]

2.2 Every real tilt exists because all bounded-summand moment generating functions and the Gaussian one are finite and strictly positive. Its density with respect to the original independent joint law factors as the product of the separately normalized tilt densities. Hence those summands remain independent under the tilt. Step 1.2 shows that the Gaussian factor retains covariance $G$, while each other factor has a characteristic function of modulus at most one because $|e^{it\cdot X_j}|=1$. Factorization and [F4] therefore give $|\varphi_h(t)|\le e^{-t^TGt/2}\le e^{-\gamma s|t|^2/2}$ for every real $h,t$. [step 1.2, F1, F4]

3.1 Direct differentiation gives $(\log M)_{uvv}=M_{uvv}/M-(M_uM_{vv}+2M_vM_{uv})/M^2+2M_uM_v^2/M^3$. Since $|M|\ge1/2$, step 2.1 bounds this by $CB|u|v^TDv$ for one absolute finite $C$. Choose $C_0$ so that $C_0\ge C$ and $1/C_0<b$, and set $\tau=C_0B$. Each bounded summand therefore has the asserted derivative bound on $\tau|z|<1$, using its own covariance. [step 1.1, step 2.1, algebra, choose]

3.2 Substitute $u=\sqrt s\,t$ in each requested tail integral, using the constant Jacobian $s^{-d/2}$. For $|u|\ge a/\kappa$, $e^{-\gamma|u|^2/2}\le e^{-\gamma a^2/(4\kappa^2)}e^{-\gamma|u|^2/4}$. For every fixed $N$, the function $z\mapsto z^Ne^{-\gamma a^2z^2/4}$ is bounded on $z\ge1$ by differentiation, so the extracted exponential is at most $C_{a,N,\gamma}\kappa^N$. The integral of $e^{-\gamma|u|^2/4}$ is finite by the normal density normalization in [F4]; its product with $|u|$ is integrable as well, since $|u|e^{-\gamma|u|^2/8}$ is bounded and the remaining Gaussian is integrable. Using $|u\cdot v|\le|u||v|$ gives the two tail bounds, with an additional $s^{-1/2}|v|$ in the weighted bound. Taking the maximum of these constants over $d=1,2,3,4$ makes them uniform. [step 2.2, F3, F4, F5, F6, algebra]

4.1 By independence [F1], the moment generating function of $S$ is the product of the factors in steps 1.1 and 1.2. On $\tau|z|<1$, its logarithm is the sum of the analytic logarithms just constructed, with value zero at zero. Since the covariances add and $\sum_j\operatorname{cov}(X_j)\le sI_d$, summing step 3.1 gives $|K_{uvv}(z)|\le\tau|u|\sum_jv^T\operatorname{cov}(X_j)v\le\tau s|u||v|^2$. This proves the analytic assertion, including the empty bounded sum. [step 3.1, step 1.2, F1, algebra]

5.1 If $AA^T=I_k$, the operator norm of $A$ is one: $A^T$ is an isometry and $|Ax|=\sup_{|v|=1}|v\cdot Ax|\le|x|$ by [F5]. Thus $AX_j$ remains bounded by $B$ and centered, its sum has covariance $sAA^T=sI_k$, and $AZ$ is Gaussian with covariance $AGA^T\ge\gamma sI_k$ by [F4]. Independence is preserved by applying measurable maps separately. All earlier steps therefore apply to $AS$ with the same $C_0$. The map $(x,y)\mapsto((x+y)/\sqrt2,(x-y)/\sqrt2)$ is orthogonal because it preserves $|x|^2+|y|^2$ by expansion; consequently its coordinate prefixes have the required row isometry property. This proves all assertions. [step 4.1, step 2.2, step 3.2, F4, F5, algebra] ∎
