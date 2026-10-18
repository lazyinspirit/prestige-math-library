---
id: thm-na-star-shaped-bogovskii-bounded-right-inverse
kind: theorem
title: "Bounded Bogovskii right inverse on a star-shaped domain"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - lem-na-bogovskii-kernel-support-and-divergence
  - lem-na-bogovskii-fourier-ray-and-derivative-ltwo-bound
  - lem-na-homogeneous-dirichlet-poincare
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - def-countable-choice
  - lem-w-one-two-is-a-hilbert-space
  - def-na-star-shaped-bogovskii-integral
  - lem-na-bogovskii-truncated-derivative-fourier-formula
  - def-wkp-zero-as-a-sobolev-closure
  - cor-cauchy-schwarz-inequality-for-l-two
  - lem-smooth-bump-between-concentric-euclidean-balls
  - def-mollifier-family-generated-by-a-unit-mass-smooth-bump
  - thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
  - thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset
  - lem-mollification-commutes-with-weak-derivatives-in-the-interior
  - thm-l-one-approximate-identities-converge-in-l-p
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ricardo G. Durán, An elementary proof of the continuity from L2_0(Omega) to H1_0(Omega)^n of Bogovskii’s right inverse of the divergence"
      url: https://arxiv.org/pdf/1103.3718
      locator: "Complete 17-page article; adopted proof range: pp. 2–7, formula (1.3), Lemmas 2.1–2.4 and Theorem 2.1; complete source reviewed."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 8, §8.2: continuous Stokes divergence lifting and inf-sup background."
verification:
  precheck: pass
---

## Statement

Let $U\subset\mathbb R^d$ be bounded and open, star-shaped with respect to a ball, and let $\omega$ and $\mathcal B_U$ be as in [[def-na-star-shaped-bogovskii-integral]]. Under Countable Choice there is a bounded linear extension $\mathcal B_U:L^2_0(U)\to H^1_0(U;\mathbb R^d)$ such that
$$\operatorname{div}\mathcal B_U f=f,\qquad \|\nabla\mathcal B_U f\|_2\le C_U\|f\|_2.$$
After translating the ball center to $0$, choose $R_U\ge\sup_{y\in U}|y|$ and define
$$A_j(\phi)=2^{(d-1)/2}\bigl(\rho^{-1}\|\phi\|_1+\rho\|\partial_j^2\phi\|_1\bigr)+2^d|U|\|\partial_j\phi\|_\infty.$$
One valid constant is $C_U=\left(\sum_{k,j=1}^d[A_j(x_k\omega)+R_UA_j(\omega)]^2\right)^{1/2}$.

## Facts & Assumptions

**Given:** Countable Choice; bounded star-shaped $U$, unit-integral $\omega\in C_c^\infty$ supported in the ball of radius $\rho$, and the Bogovskii formula.

[A1] Countable Choice is used to select the L2 approximation sequence and take its H1 limit. ([[def-countable-choice]])

[F1] The formula has compact support in $U$ for compactly supported smooth input and satisfies $\operatorname{div}\mathcal B_Uf=f-\omega\int_Uf$ distributionally. ([[lem-na-bogovskii-kernel-support-and-divergence]])

[F2] Each derivative of the formula is the difference $T_{x_k\omega,j}f-T_{\omega,j}(y_kf)$ in the distributional sense. ([[lem-na-bogovskii-truncated-derivative-fourier-formula]])

[F3] For the restriction to $U$, the Fourier ray estimate and bounded-kernel tail give $\|T_{\phi,j}g\|_{L^2(U)}\le A_j(\phi)\|g\|_{L^2(U)}$ when $g\in C_c^\infty(U)$. ([[lem-na-bogovskii-fourier-ray-and-derivative-ltwo-bound]])

[F4] On bounded $U$, zero-boundary functions satisfy $\|w\|_2\le C_P(U)\|\nabla w\|_2$. ([[lem-na-homogeneous-dirichlet-poincare]])

[F5] Under Countable Choice, $C_c^\infty(U)$ is dense in $L^2(U)$, $H^1(U)$ is Hilbert, and $H^1_0(U)$ is closed. ([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]], [[lem-w-one-two-is-a-hilbert-space]], [[def-wkp-zero-as-a-sobolev-closure]], [[def-countable-choice]])

[F6] Every open ball contains a nonnegative smooth compactly supported function with strictly positive integral; normalizing its integral gives a unit-mass bump. ([[lem-smooth-bump-between-concentric-euclidean-balls]])

[F7] Scaling a unit-mass smooth bump gives a mollifier family with unit mass and support radius $\epsilon$. ([[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]])

[F8] Convolution of a locally integrable function with a smooth compactly supported mollifier is smooth, and its support is contained in the closure of the support sum. ([[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]], [[thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset]])

[F9] Mollification commutes with weak derivatives and an $L^2$ approximate identity converges to the identity in $L^2$, under Countable Choice. ([[lem-mollification-commutes-with-weak-derivatives-in-the-interior]], [[thm-l-one-approximate-identities-converge-in-l-p]], [[def-countable-choice]])

[F10] The L2 Cauchy--Schwarz inequality gives $\int|fg|\le\|f\|_2\|g\|_2$. ([[cor-cauchy-schwarz-inequality-for-l-two]])

## Proof

1.1 First take $f\in C_c^\infty(U)$ with $\int f=0$. After translating the ball center to $0$, both $\omega$ and $x_k\omega$ are supported in $B(0,\rho)\subset U$. For either $\phi=\omega$ or $\phi=x_k\omega$ and any $g\in C_c^\infty(U)$, every point in the support of a truncated $T_{\phi,j}g$ has the form $x=(1-t)y+tz$ with $y\in\operatorname{supp}g$, $z\in\operatorname{supp}\phi$, and $0\le t\le1$. Star-shapedness puts every such segment in $U$; compactness of $\operatorname{supp}g\times\operatorname{supp}\phi\times[0,1]$ shows the resulting support is contained in a compact subset of $U$. Hence the distributional operators in [F2] are supported in $U$ and their ambient $L^2$ norms equal their $L^2(U)$ norms. By [F2]–[F3], for each $k,j$, $\|\partial_j(\mathcal B_Uf)_k\|_2\le[A_j(x_k\omega)+R_UA_j(\omega)]\|f\|_2$, since $|y_k|\le R_U$ on $U$. Squaring and summing the finitely many derivative components gives $\|\nabla\mathcal B_Uf\|_2\le C_U\|f\|_2$. [A1, F2, F3, given, algebra]

2.1 By [F1], this field is supported in a compact subset $K\Subset U$, and step 1.1 puts it in $H^1(\mathbb R^d)$. Choose the normalized bump from [F6] and its scaled mollifier $\rho_\epsilon$ from [F7]. For $\epsilon<\tfrac12\operatorname{dist}(K,\mathbb R^d\setminus U)$, [F8] makes $\rho_\epsilon*\mathcal B_Uf$ smooth with compact support in $U$. Its first derivatives are $\rho_\epsilon*\partial_j(\mathcal B_Uf)$ and converge in $L^2$ together with the field by [F9], so the approximants converge to $\mathcal B_Uf$ in $H^1$. Hence $\mathcal B_Uf\in H^1_0(U)$. The divergence identity in [F1] reduces to $\operatorname{div}\mathcal B_Uf=f$. [A1, F1, F6, F7, F8, F9, choose, step 1.1]

2.2 For arbitrary $f\in L^2_0(U)$, choose $h_n\in C_c^\infty(U)$ with $h_n\to f$ in $L^2$ using [F5], and put $f_n=h_n-\omega\int_Uh_n$. Then $f_n\in C_c^\infty(U)$, $\int f_n=0$, and $\|f_n-f\|_2\le(1+|U|^{1/2}\|\omega\|_2)\|h_n-f\|_2\to0$ by Cauchy–Schwarz and $\int f=0$. [A1, F5, given, F10, step 1.1]

3.1 By step 1.1 applied to differences, $\mathcal B_Uf_n$ is Cauchy in the gradient norm. [F4] makes it Cauchy in $H^1$; completeness and closedness in [F5] give a limit in $H^1_0(U)$. The limit is independent of the approximating sequence by the same bound, so it defines a linear operator and retains the gradient bound. Continuity of divergence $H^1\to L^2$ and step 2.1 give $\operatorname{div}\mathcal B_Uf=f$. [A1, F4, F5, algebra, step 1.1, step 2.1] ∎
