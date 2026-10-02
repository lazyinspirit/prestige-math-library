---
id: lem-maximal-distributional-dbar-operator-is-closed
kind: lemma
title: "The maximal distributional dbar operator is closed and densely defined"
status: published
origin: pipeline
deps:
  - def-weighted-l2-spaces-dbar-forms
  - def-wirtinger-operators-in-several-complex-variables
  - def-weak-derivative-of-a-locally-integrable-function
  - def-densely-defined-closed-and-closable-operator
  - def-adjoint-of-a-densely-defined-unbounded-operator
  - lem-unbounded-adjoint-is-well-defined-and-closed
  - thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz
  - thm-metric-sequential-closure
  - thm-choice-implies-dependent-implies-countable-choice
  - def-countable-choice
  - def-axiom-of-choice
  - thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
  - def-mollifier-family-generated-by-a-unit-mass-smooth-bump
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. VIII §3, printed pp. 369-372: closed distributional extensions and the boundary-adjoint warning"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables"
      url: https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf
      locator: "§3.3.3, printed pp. 81-83: the maximal distributional dbar"
    - title: "Mohammad Jabbari, Several Complex Variables course notes"
      url: https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf
      locator: "§§4.1.1-4.1.3, PDF pp. 67-84: maximal closed extension and adjoint formula"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice (AC). Let $\Omega\subseteq\mathbb C^n$ be open with $n\ge1$, let $0\le q\le n$, let $\varphi\in C^2(\Omega;\mathbb R)$, let $\bar\partial_q:\operatorname{Dom}\bar\partial_q\subseteq L^2_{0,q}(\Omega,e^{-\varphi})\to L^2_{0,q+1}(\Omega,e^{-\varphi})$ be the maximal distributional $\bar\partial$ of degree $q$, and let $\bar\partial_\varphi^*$ be the Hilbert adjoint of $\bar\partial_{q-1}$, all with the conventions of [[def-weighted-l2-spaces-dbar-forms]], including its one-based relabeling of the canonical coordinates.

1. $\operatorname{Dom}\bar\partial_q$ is dense in $L^2_{0,q}$, and $\bar\partial_q$ is closed.
2. For $1\le q\le n$ and every $\psi\in C_c^\infty(\Omega)$ of bidegree $(0,q)$, $\psi$ lies in $\operatorname{Dom}\bar\partial_\varphi^*$, and $\bar\partial_\varphi^*\psi$ is the compactly supported form with $C^1$ coefficients
$$(\bar\partial_\varphi^*\psi)_K=\sum_{j=1}^n\Bigl(\psi_{jK}\frac{\partial\varphi}{\partial z_j}-\frac{\partial\psi_{jK}}{\partial z_j}\Bigr),\qquad \psi_{jK}:=0\ \text{when }j\in K .$$
3. $\bar\partial_\varphi^*$ is closed.

## Facts & Assumptions

**Given:** The Axiom of Choice; an open set $\Omega\subseteq\mathbb C^n$ with $n\ge1$; an integer $0\le q\le n$; and a real function $\varphi\in C^2(\Omega;\mathbb R)$.

[F1] The weighted $(0,q)$-space is $L^2_{0,q}(\Omega,e^{-\varphi}):=\{u:\ u\text{ measurable},\ \|u\|_\varphi<\infty\}/\sim$ for the pairing $\langle u,v\rangle_\varphi=\int_\Omega\sum_{|J|=q}u_J\overline{v_J}\,e^{-\varphi}\,dV$ ([[def-weighted-l2-spaces-dbar-forms]]).

[F2] The **maximal domain** is $\operatorname{Dom}\bar\partial_q:=\{u\in L^2_{0,q}:\ \bar\partial u\text{ is represented by an element of }L^2_{0,q+1}\}$, where $\bar\partial u=\sum_{|J|=q}\sum_j\frac{\partial u_J}{\partial\bar z_j}\,d\bar z_j\wedge d\bar z^J$ is the distributional derivative; for $u\in\operatorname{Dom}\bar\partial_q$ the form $\bar\partial_q u$ is that representing element ([[def-weighted-l2-spaces-dbar-forms]]).

[F3] The weighted adjoint satisfies $\langle\bar\partial_{q-1}u,v\rangle_\varphi=\langle u,\bar\partial_\varphi^*v\rangle_\varphi$ for all $u\in\operatorname{Dom}\bar\partial_{q-1}$ and $v\in\operatorname{Dom}\bar\partial_\varphi^*$, its formal density is $(\bar\partial_\varphi^*v)_K=-e^{\varphi}\sum_j\partial_{z_j}(e^{-\varphi}v_{jK})=\sum_j\bigl(v_{jK}\partial_{z_j}\varphi-\partial_{z_j}v_{jK}\bigr)$ whenever $v\in\operatorname{Dom}\bar\partial_\varphi^*$, and coefficients are extended to non-increasing tuples by antisymmetry, with $v_{jK}=0$ when $j\in K$ ([[def-weighted-l2-spaces-dbar-forms]]).

[F4] Test forms are dense in the weighted space: every $u\in L^2_{0,q}$ is the $\|\cdot\|_\varphi$-limit of a sequence of forms in $C_c^\infty(\Omega)$ ([[def-weighted-l2-spaces-dbar-forms]]).

[F5] Every coefficient of every $u\in L^2_{0,q}$ is locally integrable for Lebesgue measure on $\Omega$ ([[def-weighted-l2-spaces-dbar-forms]]).

[F6] Every smooth compactly supported $(0,q)$-form has its smooth $\bar\partial$ in $L^2_{0,q+1}$, hence lies in $\operatorname{Dom}\bar\partial_q$ ([[def-weighted-l2-spaces-dbar-forms]]).

[F7] A weak derivative is characterized by the test identity $\int_\Omega u\,D^\alpha\chi=(-1)^{|\alpha|}\int_\Omega v\chi$ for every real test function $\chi\in C_c^\infty(\Omega)$ ([[def-weak-derivative-of-a-locally-integrable-function]]).

[F9] An operator is densely defined when its domain is dense, and closed when its graph is a closed subset of $H\oplus H$ ([[def-densely-defined-closed-and-closable-operator]]).

[F10] A vector $y\in H$ lies in the adjoint domain exactly when $x\mapsto\langle Tx,y\rangle$ is bounded on the domain, and then $T^*y$ is the unique $w$ with $\langle Tx,y\rangle=\langle x,w\rangle$ for all $x$ in the domain ([[def-adjoint-of-a-densely-defined-unbounded-operator]]).

[F11] The published same-space adjoint theorem is not used for this operator between distinct form-degree Hilbert spaces; closedness is established directly in step 2.2.

[F12] On every measure space the complex $L^2$ pairing satisfies $|\langle f,g\rangle|\le\|f\|_2\|g\|_2$, also for finite tuples ([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

[F13] In a metric space a set is closed exactly when it is sequentially closed ([[thm-metric-sequential-closure]]).

[F14] AC implies the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

[F15] AC states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F16] The Wirtinger operator is $\partial_{\bar z_j}=\tfrac12(\partial_{x_j}+i\partial_{y_j})$ ([[def-wirtinger-operators-in-several-complex-variables]]).

[F17] For a compactly supported smooth unit-mass bump $b$ on Euclidean space, $b_\varepsilon(x)=\varepsilon^{-2n}b(x/\varepsilon)$ is its mollifier family, and convolution of a locally integrable function with $b_\varepsilon$ is smooth ([[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]], [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]).

**Choice use.** AC is the ambient hypothesis recorded in the Statement, and $\mathrm{AC}_\omega$ is the countable instance consumed by the density interface [F4], by the adjoint definition [F10], and by the sequential characterization [F13]; [F14] is the exact implication supplying it. The proof selects no family: the test forms, the limiting form $v$ and the formal expression are given.

## Proof

**Proof technique:** direct.

1.1 By [F6] every smooth compactly supported $(0,q)$-form lies in $\operatorname{Dom}\bar\partial_q$, and by [F4] these forms are dense in $L^2_{0,q}$; hence $\operatorname{Dom}\bar\partial_q$ contains a dense subset and is itself dense in $L^2_{0,q}$, which is the definition of $\bar\partial_q$ being densely defined in the sense of [F9]. The density interface [F4] is where the countable instance $\mathrm{AC}_\omega$ of [F14] is consumed. [F4, F6, F9, F14, given]

1.2 Let $u\in\operatorname{Dom}\bar\partial_q$ and $g=\bar\partial_q u$. The unweighted distributional identity of [F2] extends from smooth compactly supported test forms to $C_c^1$ test forms. Indeed extend a $C_c^1$ test $h$ by zero to Euclidean space and convolve with a nonnegative unit-mass smooth bump as in [F17]. For sufficiently small $\varepsilon$ these smooth tests have supports in a fixed compact subset of $\Omega$, and $h*b_\varepsilon\to h$ together with every first derivative uniformly: differentiate under the integral in the expression $\int b_\varepsilon(y)h(x-y)dy$ and use uniform continuity of $h$ and its first derivatives. Local integrability of $u$ and $g$ then passes both sides of the test identity to the limit. For a smooth $(0,q+1)$-form $\psi$ of compact support, use the $C_c^2$ test coefficients $e^{-\varphi}\overline{\psi_L}$. The coefficient sum in [F2], with its antisymmetric wedge signs, and the product rule give $$\langle g,\psi\rangle_\varphi=\langle u,\partial^*\psi\rangle_\varphi,\qquad (\partial^*\psi)_K=\sum_j(\psi_{jK}\varphi_j-\partial_{z_j}\psi_{jK}).$$ Only $g$ as a whole is assumed locally integrable; no individual weak derivative of a coefficient of $u$ is assumed to be a function. [F1, F2, F3, F5, F7, F16, F17, given, algebra]

1.3 The operator $\bar\partial_q$ is closed. Let $u_k\in\operatorname{Dom}\bar\partial_q$ with $u_k\to u$ in $L^2_{0,q}$ and $g_k:=\bar\partial_q u_k\to v$ in $L^2_{0,q+1}$. On every compact $K\subseteq\Omega$, the positive minimum $c_K$ of $e^{-\varphi}$ gives $\|u_k-u\|_{L^2(K)}\le c_K^{-1/2}\|u_k-u\|_\varphi\to0$, and the same bound holds for $g_k-v$. Cauchy-Schwarz on $K$ therefore gives local $L^1$ convergence. Against any ordinary smooth compactly supported test form, both sides of the unweighted distributional identity for $\bar\partial u_k=g_k$ pass to the limit, since the test and its first derivatives are bounded. Thus $\bar\partial u=v$ as distributions, so [F2] gives $u\in\operatorname{Dom}\bar\partial_q$ and $\bar\partial_q u=v$. (For $q=n$ the operator is zero on the entire space and the conclusion is immediate.) The graph is sequentially closed in the metric direct sum of the two form-degree spaces, hence closed by [F13]. [F1, F2, F5, F7, F9, F12, F13, F14, given, algebra]

2.1 Let $\psi\in C_c^\infty(\Omega)$ have bidegree $(0,q)$ with $1\le q\le n$, and let $\partial^*\psi$ be the formal expression of [F3]. Then $\partial^*\psi$ has compact support contained in $\operatorname{supp}\psi$ and coefficients in $C^1(\Omega)$ because $\varphi\in C^2$ and $\psi\in C_c^\infty$, so $\partial^*\psi\in L^2_{0,q-1}$; moreover step 1.1 makes $\bar\partial_{q-1}$ densely defined, and step 1.2 gives $\langle\bar\partial_{q-1}u,\psi\rangle_\varphi=\langle u,\partial^*\psi\rangle_\varphi$ for every $u\in\operatorname{Dom}\bar\partial_{q-1}$, so by [F12] the functional $u\mapsto\langle\bar\partial_{q-1}u,\psi\rangle_\varphi$ is bounded on the domain with norm at most $\|\partial^*\psi\|_\varphi$. By the characterization [F10] we therefore have $\psi\in\operatorname{Dom}\bar\partial_\varphi^*$ and $\bar\partial_\varphi^*\psi=\partial^*\psi$; the countable choice used by the adjoint definition is supplied through [F14]. [F3, F10, F12, F14, step 1.1, step 1.2, given, algebra]

2.2 The adjoint $\bar\partial_\varphi^*$ is closed even though its source and target Hilbert spaces have different form degrees. Let $v_m\in\operatorname{Dom}\bar\partial_\varphi^*$ satisfy $v_m\to v$ in $L^2_{0,q}$ and $\bar\partial_\varphi^*v_m\to w$ in $L^2_{0,q-1}$. For every $u\in\operatorname{Dom}\bar\partial_{q-1}$ the adjoint identity [F3] and continuity of the two inner products give $\langle\bar\partial_{q-1}u,v\rangle_\varphi=\lim_m\langle u,\bar\partial_\varphi^*v_m\rangle_\varphi=\langle u,w\rangle_\varphi$. Thus $v$ lies in the adjoint domain and $\bar\partial_\varphi^*v=w$ by its definition [F3]. The graph is sequentially closed and hence closed by [F13]. [F3, F12, F13, step 1.1, given]

3.1 Conclusion: $\operatorname{Dom}\bar\partial_q$ is dense and $\bar\partial_q$ is closed by steps 1.1 and 1.3; every compactly supported smooth $(0,q)$-test form lies in $\operatorname{Dom}\bar\partial_\varphi^*$ with the formal weighted expression of [F3] by step 2.1; and $\bar\partial_\varphi^*$ is closed by step 2.2. This is exactly the content of the three claims of the Statement, and the ambient hypothesis is the AC recorded in the Statement and cited as [F15]. [F3, F15, step 1.1, step 2.1, step 1.3, step 2.2] ∎
