---
id: thm-periodic-dirichlet-homogenization-on-unit-cube
kind: theorem
title: Periodic scalar Dirichlet homogenization on the unit cube
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-periodic-scalar-diffusion-data
  - def-periodic-cell-problem
  - lem-periodic-cell-corrector-wellposedness
  - def-periodic-cell-correctors-and-effective-tensor
  - thm-periodic-effective-tensor-symmetric-elliptic
  - lem-periodic-averaging-on-cube
  - thm-two-scale-compactness-for-l2-bounded-sequences
  - lem-two-scale-gradient-decomposition-for-h01
  - lem-unit-cube-h01-separability-and-l2-compactness
  - lem-w-one-two-is-a-hilbert-space
  - thm-lax-milgram
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - def-countable-choice
  - def-wkp-zero-as-a-sobolev-closure
  - def-sobolev-space-wkp-and-its-norm
  - def-periodic-zero-mean-cell-space
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-weak-topology-on-a-normed-space
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Grégoire Allaire, Introduction to Homogenization Theory, Lecture 1"
      url: "https://www.cmap.polytechnique.fr/~allaire/homog/lect1.pdf"
      locator: "§1.3.1, PDF pp. 11–16: oscillating-test proof of periodic homogenization."
    - title: "Zhongwei Shen, Lectures on Periodic Homogenization of Elliptic Systems"
      url: "https://arxiv.org/pdf/1710.11257"
      locator: "Chapter 1 §1.3, printed pp. 14–23: two-scale compactness, cell identification, and homogenized equation."
verification:
  precheck: pass
---
## Statement

Let $Q=(0,1)^d$, let $a$ be a measurable $\mathbb Z^d$-periodic scalar coefficient with $0<\lambda\le a\le\Lambda$, and let $f\in L^2(Q)$. For $\epsilon>0$ let $u_\epsilon\in H^1_0(Q)$ be the unique weak solution
$$\int_Qa(x/\epsilon)\nabla u_\epsilon\cdot\nabla v=\int_Qfv\qquad(v\in H^1_0(Q)).$$
Let $u_0\in H^1_0(Q)$ be the unique solution with $A^*$ from [[def-periodic-cell-correctors-and-effective-tensor]] in place of $a(x/\epsilon)I$. Then as $\epsilon\downarrow0$, $u_\epsilon\rightharpoonup u_0$ in $H^1_0(Q)$.

## Facts & Assumptions

**Given:** The measurable periodic scalar ellipticity bounds, the corrector cell equation, two-scale compactness and gradient decomposition, periodic averaging, Lax--Milgram, and Countable Choice.

[F1] [[def-periodic-scalar-diffusion-data]]: $a$ is measurable and periodic, $\lambda\le a\le\Lambda$, and the physical coefficient is $a(x/\epsilon)$.

[F2] [[def-periodic-cell-problem]], [[lem-periodic-cell-corrector-wellposedness]], and [[def-periodic-cell-correctors-and-effective-tensor]]: the mean-zero corrector exists uniquely, depends linearly on its vector argument, and defines the flux average $A^*p$.

[F3] [[thm-periodic-effective-tensor-symmetric-elliptic]]: $A^*$ is symmetric and $\lambda I\le A^*\le\Lambda I$.

[F4] [[lem-unit-cube-h01-separability-and-l2-compactness]]: $H^1_0(Q)$ is Hilbert, separable, satisfies $\|v\|_2\le\|\nabla v\|_2$, and bounded sequences are compact in $L^2$.

[F5] [[thm-lax-milgram]]: bounded coercive forms on a Hilbert space have unique weak solutions.

[F6] [[lem-two-scale-gradient-decomposition-for-h01]]: along any $\epsilon_n\to0$, a bounded $H^1_0$ sequence has a subsequence with two-scale gradient limit $\nabla u+\nabla_yu_1$ and $u_n\rightharpoonup u$ in $H^1_0$.

[F7] [[lem-periodic-averaging-on-cube]] and [[thm-fourier-basis-and-parseval-on-the-n-torus]]: periodic rescalings have uniform $L^2$ bounds and weak cell-mean limits, and Fourier characters are complete in periodic $L^2$.

[F8] [[def-wkp-zero-as-a-sobolev-closure]]: $H^1_0(Q)$ is the norm closure of $C_c^\infty(Q)$, so the homogenized variational identity extends from compactly supported smooth tests.

[F9] [[def-weak-topology-on-a-normed-space]]: weak convergence is convergence under every bounded linear functional.

[F10] [[def-periodic-zero-mean-cell-space]] and [[thm-fourier-basis-and-parseval-on-the-n-torus]]: $V_\#$ is the $H^1$ closure of smooth periodic functions, and Parseval applies to each smooth periodic function and its first derivatives; step 4.2 proves the required rational trigonometric density from these facts.

[F11] [[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]]: $C_c^\infty(Q)$ is dense in $L^2(Q)$.

[F12] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: the section integrals used to define $F_w$ are measurable and obey the iterated-integral identities for the integrable products below.

[A1] [[def-countable-choice]]: Countable Choice supplies the subsequences and the countable dense trigonometric test family; neither full Choice nor Dependent Choice is used.

## Proof




1.1 Equip $H^1_0(Q)$ with gradient norm, equivalent to its Sobolev norm by [F4]. The form $b_\epsilon(u,v)=\int_Qa(x/\epsilon)\nabla u\cdot\nabla v$ is bounded by $\Lambda\|\nabla u\|_2\|\nabla v\|_2$ and coercive with constant $\lambda$; $F(v)=\int_Qfv$ is bounded by $\|f\|_2\|\nabla v\|_2$. Thus [F5] gives a unique $u_\epsilon$. The same argument using [F3] gives a unique $u_0$. Testing with $u_\epsilon$ gives $\|\nabla u_\epsilon\|_2\le\lambda^{-1}\|f\|_2$ (with the zero-gradient case immediate). [F4, F5, F3, F1, algebra]

2.1 Fix any sequence $\epsilon_n\to0$. Apply [F6] to the bounded solutions. Along a subsequence, $u_{\epsilon_n}\rightharpoonup u$ in $H^1_0$, strongly in $L^2$, and $\nabla u_{\epsilon_n}$ two-scale converges to $\nabla u+\nabla_yu_1$ for $u_1\in L^2(Q;V_\#)$. It remains to identify $u$. [F6, F4, step 1.1, A1, algebra]

3.1 Fix $\phi,\eta\in C_c^\infty(Q)$ and a smooth periodic $w(y)$. The oscillating test $v_n(x)=\phi(x)+\epsilon_n\eta(x)w(x/\epsilon_n)$ lies in $H^1_0(Q)$ and has gradient $\nabla\phi+\eta\nabla_yw(x/\epsilon_n)+\epsilon_nw(x/\epsilon_n)\nabla\eta$. The last term contributes a quantity tending to zero by boundedness of $\nabla u_{\epsilon_n}$ and the uniform rescaling bound [F7]. On the other terms, two-scale convergence gives $\int_{Q\times Y}a(y)(\nabla u+\nabla_yu_1)\cdot(\nabla\phi+\eta\nabla_yw)=\int_Qf\phi,$ where the test may contain the measurable factor $a(y)$: approximate each $a(y)$ times a smooth periodic factor in $L^2(Y)$ by smooth Fourier sums and use the uniform rescaling bound [F7] and boundedness of $\nabla u_{\epsilon_n}$. The right side converges because $\epsilon_n\eta w(x/\epsilon_n)\to0$ in $L^2$. [F7, F1, F6, step 2.1, algebra]

4.1 Set $\phi=0$ in step 3.1 and let $\eta\in C_c^\infty(Q)$ be arbitrary. For each smooth periodic $w$, this gives $\int_Q\eta(x)F_w(x)\,dx=0$, where
$$F_w(x):=\int_Ya(y)(\nabla u(x)+\nabla_yu_1(x,y))\cdot\nabla_yw(y)\,dy.$$
For almost every $x$, Cauchy--Schwarz in $y$ gives
$$|F_w(x)|\le\Lambda\|\nabla_yw\|_{L^2(Y)}\bigl(|\nabla u(x)|+\|\nabla_yu_1(x,\cdot)\|_{L^2(Y)}\bigr).$$
The right side belongs to $L^2(Q)$ because $u\in H^1_0(Q)$ and $u_1\in L^2(Q;V_\#)$. The absolute value of the integrand is integrable on $Q\times Y$, so Tonelli applied to its positive and negative parts gives measurability of the section integral [F12]. Thus $F_w\in L^2(Q)$. Since its pairing with every $\eta\in C_c^\infty(Q)$ vanishes, density [F11] implies $F_w=0$ almost everywhere. [step 3.1, F11, F12, algebra]

4.2 For smooth periodic mean-zero $w$, let $\widehat w(k)$ be its Fourier coefficients and $P_Nw=\sum_{|k|\le N}\widehat w(k)e^{2\pi i k\cdot y}$. Periodic integration by parts gives $\widehat{\partial_jw}(k)=2\pi i k_j\widehat w(k)$. Parseval [F10], applied to $w$ and all its first derivatives, yields
$$\|w-P_Nw\|_{H^1(Y)}^2=\sum_{|k|>N}(1+4\pi^2|k|^2)|\widehat w(k)|^2\longrightarrow0.$$
The zero coefficient vanishes, and the symmetric truncation preserves reality. For each finite truncation, approximate its finitely many coefficients by rational real and imaginary parts while imposing $c_{-k}=\overline{c_k}$; this gives a countable family of rational-coefficient, real, mean-zero trigonometric polynomials dense in the smooth periodic mean-zero functions in $H^1(Y)$. If $v\in V_\#$, choose a smooth periodic $w$ arbitrarily close to $v$ in $H^1$ by [F10], then replace $w$ by $w-\int_Yw$; since $\int_Yv=0$, this subtraction still approximates $v$. The rational polynomials are therefore dense in all of $V_\#$. [F10, algebra]

4.3 Use [A1] to take one common full-measure set for the countable dense family from step 4.2, and intersect it with the full-measure set where $u_1(x,\cdot)\in V_\#$ and $\nabla u(x)$ is defined. For each such $x$, the cell functional is continuous in the $H^1$ norm, so the equation extends from that dense family to every $w\in V_\#$. Uniqueness in [F2] yields $u_1(x,\cdot)=\chi_{\nabla u(x)}$ in $V_\#$. [step 4.1, step 4.2, F10, A1, F2, algebra]

5.1 Now use step 3.1 with $w=0$. Step 4.3 and the flux definition [F2] identify its averaged flux as $\int_Ya(\nabla u+\nabla_yu_1)=A^*\nabla u$. Therefore $\int_QA^*\nabla u\cdot\nabla\phi=\int_Qf\phi$ for every $\phi\in C_c^\infty(Q)$. Density [F8] and boundedness of the form extend this to all test functions in $H^1_0(Q)$, so uniqueness in [F5] gives $u=u_0$. [step 3.1, step 4.3, F2, F8, F5, F3, algebra]

6.1 Every sequence $\epsilon_n\to0$ has a subsequence weakly converging to $u_0$ by steps 2.1–5.1. If the family failed to converge weakly to $u_0$, [F9] would give a bounded linear functional and a sequence $\epsilon_n\to0$ whose scalar values stay a fixed positive distance from its value at $u_0$; the subsequence just obtained contradicts that. Thus the full weak convergence holds. [step 2.1, step 5.1, F9, F4, algebra] ∎
