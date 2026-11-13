---
title: Spectral interpolation and lower-order absorption
status: published
research_item: prop-se-fractional-interpolation
dependency_level: 7
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 9: ` Lemma 3.2 proof (d) `; PDF p. 10: ` spectral absorption inequality `; PDF p. 12: ` H¹D–H²D absorption `

## Prerequisites

- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus)
- [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals)
- [math:thm-young-inequality-real-exponents](https://alphabetamath.cc/item/thm-young-inequality-real-exponents)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian)
- [math:thm-tonelli-and-fubini-for-completed-product-measures](https://alphabetamath.cc/item/thm-tonelli-and-fubini-for-completed-product-measures)
- [math:thm-dominated-convergence](https://alphabetamath.cc/item/thm-dominated-convergence)
- [math:thm-complex-lp-completeness-and-almost-everywhere-subsequences](https://alphabetamath.cc/item/thm-complex-lp-completeness-and-almost-everywhere-subsequences)
- [math:thm-fatou-lemma](https://alphabetamath.cc/item/thm-fatou-lemma)
- [math:def-unbounded-integral-against-a-pvm](https://alphabetamath.cc/item/def-unbounded-integral-against-a-pvm)
- [math:lem-unbounded-pvm-integral-is-well-defined-and-closed](https://alphabetamath.cc/item/lem-unbounded-pvm-integral-is-well-defined-and-closed)
- [math:lem-scalar-and-complex-measures-from-a-pvm](https://alphabetamath.cc/item/lem-scalar-and-complex-measures-from-a-pvm)


## Statement

Assume the Axiom of Choice and the exterior Dirichlet scale $H_D^s(\Omega)$, with $A=I-\Delta_D$, from [def-se-dirichlet-scale](item-def-se-dirichlet-scale). For $0<\rho<\tau$ and $f\in H_D^\tau(\Omega)$,
$$\|f\|_{H_D^\rho}\leq \|f\|_{L^2}^{1-\rho/\tau}\|f\|_{H_D^\tau}^{\rho/\tau}.$$
For $0\leq\theta<\tau$ and every $\varepsilon>0$ there is $C_\varepsilon<\infty$, depending only on $\theta,\tau,\varepsilon$, such that every $f\in H_D^\tau(\Omega)$ satisfies
$$\|f\|_{H_D^\theta}^2\leq\varepsilon\|f\|_{H_D^\tau}^2+C_\varepsilon\|f\|_{L^2}^2.$$
This includes $(\theta,\tau)=(1,2)$.

Let $0<T<\infty$. If $f_j$ are strongly measurable $H_D^\tau$-valued functions, uniformly bounded in $L^2(0,T;H_D^\tau)$ and converging to zero in $L^2(0,T;L^2(\Omega))$, then $f_j\to0$ in $L^2(0,T;H_D^\rho)$ for every $0<\rho<\tau$. In particular, the same conclusion holds when the $f_j$ are uniformly bounded in $L^\infty(0,T;H_D^\tau)$ and converge to zero in space-time $L^2$.

## Facts & Assumptions

[F1] The Dirichlet scale has $H_D^0=L^2(\Omega)$ and, for $s\geq0$, $H_D^s=D(A^{s/2})$ with norm $\|A^{s/2}f\|_2$; its operator $A$ is self-adjoint and $A\geq I$ [def-se-dirichlet-scale](item-def-se-dirichlet-scale) [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract) [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian).

[F2] Under Choice, use the spectral-calculus convention $h(A)=h(E_A)$ [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). For $s\geq0$ put $h_s(\lambda)=\max(1,\lambda)^{s/2}$, a finite-valued Borel function on $\mathbb R$; the power convention is $A^{s/2}=h_s(E_A)$ [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian). The unbounded PVM integral definition gives $D(A^{s/2})=\{f\in L^2(\Omega):\int|h_s|^2\,d\mu_f<\infty\}$ [math:def-unbounded-integral-against-a-pvm](https://alphabetamath.cc/item/def-unbounded-integral-against-a-pvm). Its norm theorem gives $\|A^{s/2}f\|_2^2=\int|h_s|^2\,d\mu_f$ on this domain [math:lem-unbounded-pvm-integral-is-well-defined-and-closed](https://alphabetamath.cc/item/lem-unbounded-pvm-integral-is-well-defined-and-closed). Here $\mu_f(B)=\langle E_A(B)f,f\rangle$ is a finite positive measure with total mass $\mu_f(\mathbb R)=\|f\|_2^2$ [math:lem-scalar-and-complex-measures-from-a-pvm](https://alphabetamath.cc/item/lem-scalar-and-complex-measures-from-a-pvm). Choice supplies the countable-choice hypotheses of these PVM inputs.

[F3] Hölder's integral inequality applies to real measurable functions on a measure space for finite conjugate exponents greater than one [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals).

[F4] For conjugate $p,q>1$ and $u,v\geq0$, Young's inequality gives $uv\leq u^p/p+v^q/q$ [math:thm-young-inequality-real-exponents](https://alphabetamath.cc/item/thm-young-inequality-real-exponents).

[F5] The time-space notation uses strongly measurable Bochner-valued maps and the integral of their squared norms; $L^\infty$ means the essential supremum [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces).

[F6] Assuming countable choice, completed-product Tonelli applies to nonnegative measurable functions on two sigma-finite measure spaces, equates product and iterated integrals, and takes product-null sets to null sections almost everywhere. The time interval and the exterior with restricted Lebesgue measure are sigma-finite. [math:thm-tonelli-and-fubini-for-completed-product-measures](https://alphabetamath.cc/item/thm-tonelli-and-fubini-for-completed-product-measures)

[F7] Dominated convergence applies to measurable scalar functions on any measure space with a single integrable majorant. [math:thm-dominated-convergence](https://alphabetamath.cc/item/thm-dominated-convergence)

[F8] Assuming countable choice, complex $L^2$ is complete on every measure space, and norm convergence has an almost-everywhere convergent subsequence of measurable representatives. [math:thm-complex-lp-completeness-and-almost-everywhere-subsequences](https://alphabetamath.cc/item/thm-complex-lp-completeness-and-almost-everywhere-subsequences)

[F9] Fatou's lemma gives $\int\liminf h_k\leq\liminf\int h_k$ for nonnegative measurable functions. [math:thm-fatou-lemma](https://alphabetamath.cc/item/thm-fatou-lemma)

[F10] The stated Axiom of Choice permits the countably many representative selections below and, by restriction to countable families, supplies the countable-choice hypotheses of F6 and F8. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Proof

[F1] The Dirichlet scale has $H_D^0=L^2(\Omega)$ and, for $s\geq0$, $H_D^s=D(A^{s/2})$ with norm $\|A^{s/2}f\|_2$; its operator $A$ is self-adjoint and $A\geq I$ [def-se-dirichlet-scale](item-def-se-dirichlet-scale) [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract) [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian).

[F2] Under Choice, use the spectral-calculus convention $h(A)=h(E_A)$ [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). For $s\geq0$ put $h_s(\lambda)=\max(1,\lambda)^{s/2}$, a finite-valued Borel function on $\mathbb R$; the power convention is $A^{s/2}=h_s(E_A)$ [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian). The unbounded PVM integral definition gives $D(A^{s/2})=\{f\in L^2(\Omega):\int|h_s|^2\,d\mu_f<\infty\}$ [math:def-unbounded-integral-against-a-pvm](https://alphabetamath.cc/item/def-unbounded-integral-against-a-pvm). Its norm theorem gives $\|A^{s/2}f\|_2^2=\int|h_s|^2\,d\mu_f$ on this domain [math:lem-unbounded-pvm-integral-is-well-defined-and-closed](https://alphabetamath.cc/item/lem-unbounded-pvm-integral-is-well-defined-and-closed). Here $\mu_f(B)=\langle E_A(B)f,f\rangle$ is a finite positive measure with total mass $\mu_f(\mathbb R)=\|f\|_2^2$ [math:lem-scalar-and-complex-measures-from-a-pvm](https://alphabetamath.cc/item/lem-scalar-and-complex-measures-from-a-pvm). Choice supplies the countable-choice hypotheses of these PVM inputs.

[F3] Hölder's integral inequality applies to real measurable functions on a measure space for finite conjugate exponents greater than one [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals).

[F4] For conjugate $p,q>1$ and $u,v\geq0$, Young's inequality gives $uv\leq u^p/p+v^q/q$ [math:thm-young-inequality-real-exponents](https://alphabetamath.cc/item/thm-young-inequality-real-exponents).

[F5] The time-space notation uses strongly measurable Bochner-valued maps and the integral of their squared norms; $L^\infty$ means the essential supremum [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces).

[F6] Assuming countable choice, completed-product Tonelli applies to nonnegative measurable functions on two sigma-finite measure spaces, equates product and iterated integrals, and takes product-null sets to null sections almost everywhere. The time interval and the exterior with restricted Lebesgue measure are sigma-finite. [math:thm-tonelli-and-fubini-for-completed-product-measures](https://alphabetamath.cc/item/thm-tonelli-and-fubini-for-completed-product-measures)

[F7] Dominated convergence applies to measurable scalar functions on any measure space with a single integrable majorant. [math:thm-dominated-convergence](https://alphabetamath.cc/item/thm-dominated-convergence)

[F8] Assuming countable choice, complex $L^2$ is complete on every measure space, and norm convergence has an almost-everywhere convergent subsequence of measurable representatives. [math:thm-complex-lp-completeness-and-almost-everywhere-subsequences](https://alphabetamath.cc/item/thm-complex-lp-completeness-and-almost-everywhere-subsequences)

[F9] Fatou's lemma gives $\int\liminf h_k\leq\liminf\int h_k$ for nonnegative measurable functions. [math:thm-fatou-lemma](https://alphabetamath.cc/item/thm-fatou-lemma)

[F10] The stated Axiom of Choice permits the countably many representative selections below and, by restriction to countable families, supplies the countable-choice hypotheses of F6 and F8. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)



**Given:** The scale and Choice in the statement, the indicated exponents and vectors, and, for the convergence claim, the stated sequence on $(0,T)$.

**Goal:** Prove the interpolation and absorption estimates and the time-dependent convergence.

1.1 Put $a=\rho/\tau\in(0,1)$ and $w_s(\lambda)=|h_s(\lambda)|^2=\max(1,\lambda)^s$. For $f\in H_D^\tau$, F2 makes both $1$ and $w_\tau$ integrable against the finite positive measure $\mu_f$, with $\int1\,d\mu_f=\|f\|_2^2$ and $\int w_\tau\,d\mu_f=\|f\|_{H_D^\tau}^2$. On all of $\mathbb R$ one has $w_\rho=w_\tau^a$. Hölder with exponents $1/a$ and $1/(1-a)$ applied to $w_\tau^a$ and $1$ gives $\int w_\rho\,d\mu_f\leq(\int w_\tau\,d\mu_f)^a(\int1\,d\mu_f)^{1-a}$. The domain formula puts $f$ in $H_D^\rho$, and the norm identity and square roots prove the first estimate. For $0\leq s\leq\tau$, the pointwise inequality $w_s\leq w_\tau$ on all of $\mathbb R$ also gives the continuous inclusion $H_D^\tau\hookrightarrow H_D^s$ with norm at most one. [F1, F2, F3, given]

1.2 Let $g\in L^2(0,T;L^2(\Omega))$ be strongly measurable. After setting it and its defining simple approximants $s_m$ to zero on their common exceptional time-null set, take $s_m(t)\to g(t)$ in spatial $L^2$ almost everywhere. Put $h_m(t)=s_m(t)\mathbf1_{\{\|s_m(t)\|_2\leq2\|g(t)\|_2\}}$. The set in this expression is measurable, and $h_m$ is still finite-valued and measurable. If $g(t)=0$, then $h_m(t)=0$; otherwise the cutoff eventually equals one. Thus $h_m(t)\to g(t)$ in $L^2$ almost everywhere and $\|h_m(t)-g(t)\|_2^2\leq9\|g(t)\|_2^2$. F7 gives $h_m\to g$ in Bochner $L^2$. By F10 choose measurable scalar representatives for all spatial $L^2$ values of all the $h_m$, a countable family of finite sets of values. On the measurable time partition defining $h_m$, use those representatives to define a jointly measurable function $U_m(t,x)$. F6 gives $\|U_m\|_{L^2((0,T)\times\Omega)}^2=\int_0^T\|h_m(t)\|_2^2dt$ and $\|U_m-U_l\|_{L^2((0,T)\times\Omega)}^2=\int_0^T\|h_m(t)-h_l(t)\|_2^2dt$. Hence $U_m$ is Cauchy in complex product-space $L^2$. F8 gives a measurable norm limit $U$ and a subsequence $U_{m_k}\to U$ product-almost everywhere. The chosen representatives may be used: their countably many disagreements with representatives from F8 have null union. [F5, F6, F7, F8, F10, construct]

2.1 For $0<\theta<\tau$ put $a=\theta/\tau$, $X=\|f\|_{H_D^\tau}^2$ and $Y=\|f\|_2^2$. Step 1.1 gives $\|f\|_{H_D^\theta}^2\leq X^aY^{1-a}$. Apply Young with $p=1/a$, $q=1/(1-a)$ to $u=(\varepsilon/a)^aX^a$ and $v=(a/\varepsilon)^aY^{1-a}$. This yields $X^aY^{1-a}\leq\varepsilon X+(1-a)(a/\varepsilon)^{a/(1-a)}Y$. For $\theta=0$, the desired inequality holds with $C_\varepsilon=1$. Thus the absorption estimate holds, including $\theta=1$, $\tau=2$. [F1, F4, step 1.1, given]

2.2 The continuous inclusions in step 1.1 carry strong $H_D^\tau$ measurability into strong $H_D^\rho$ and $L^2$ measurability, by applying the bounded inclusion to the defining simple approximants. Applying step 1.1 almost everywhere and then Hölder in time gives $\int_0^T\|f_j(t)\|_{H_D^\rho}^2dt\leq(\int_0^T\|f_j(t)\|_{H_D^\tau}^2dt)^a(\int_0^T\|f_j(t)\|_2^2dt)^{1-a}$. The right side tends to zero by the stated uniform bound and convergence. An essential uniform bound in $H_D^\tau$ gives the required $L^2$ bound because $T<\infty$. This proves the Bochner convergence claims; the space-time formulation will follow from the identification proved next. [F3, F5, step 1.1, given]

2.3 By F6, outside a single time-null set, $U(t,\cdot)$ belongs to spatial $L^2$, all relevant sections are measurable, and $U_{m_k}(t,x)\to U(t,x)$ for almost every $x$. Enlarge this exceptional set by the one where $h_m(t)\not\to g(t)$ in $L^2$. Fix a remaining time $t$ and an integer $r$. Apply F9 in space to $|U_{m_k}(t,x)-U_r(t,x)|^2$. Since the corresponding $L^2$ classes are $h_{m_k}(t)-h_r(t)$, this gives $\|U(t,\cdot)-U_r(t,\cdot)\|_2^2\leq\liminf_k\|h_{m_k}(t)-h_r(t)\|_2^2=\|g(t)-h_r(t)\|_2^2$. Letting $r\to\infty$ shows that the class of $U(t,\cdot)$ equals $g(t)$. A final application of F6 proves $\|U\|_{L^2((0,T)\times\Omega)}^2=\int_0^T\|g(t)\|_2^2dt$. Any two jointly measurable representatives of $g$ agree product-almost everywhere, by F6 applied to their disagreement set. Thus this product norm identity is independent of the representative. [F5, F6, F9, step 1.2]

3.1 In the final assertion, the finite interval and the uniform $L^\infty(0,T;H_D^\tau)$ bound give the uniform Bochner $L^2(0,T;H_D^\tau)$ bound. Step 1.1 and the simple-approximation argument in step 2.2 make every $f_j$ strongly measurable into spatial $L^2$ with finite Bochner $L^2$ norm. Steps 1.2 and 2.3 therefore supply its jointly measurable representative and identify its squared product-space norm with $\int_0^T\|f_j(t)\|_2^2dt$. Space-time $L^2$ convergence to zero is consequently exactly the Bochner $L^2(0,T;L^2(\Omega))$ convergence required in step 2.2. This proves the final convergence claim without an additional measurability hypothesis. [F5, step 1.1, step 2.2, step 1.2, step 2.3, given] ∎

## Source notes

The article is cited for attribution to its interpolation and absorption uses on PDF pages 9–10 and 12. The proof above uses the independent suppliers listed in Facts & Assumptions; it does not use the article's assertion as a premise.
