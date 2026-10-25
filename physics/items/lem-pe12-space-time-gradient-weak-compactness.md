---
id: lem-pe12-space-time-gradient-weak-compactness
kind: lemma
title: Weak compactness of bounded space-time Sobolev gradients
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, thm-poincare-inequality-for-w-one-p-zero, thm-sobolev-spaces-are-banach-spaces, lem-closed-subspace-of-a-banach-space-is-banach, thm-reflexivity-of-lp-for-one-less-p-less-infinity, cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence, thm-closed-subspaces-of-reflexive-spaces-are-reflexive, def-reflexive-banach-space, def-ultrafilter-extension-principle, def-dependent-choice, def-hahn-banach-extension-principle-relative, def-countable-choice, lem-dependent-choice-implies-countable-choice, def-pe12-gelfand-triple, thm-pe12-bochner-lp-completeness, def-strongly-measurable-banach-valued-function, def-bochner-integrable-function, def-product-measure-on-sigma-finite-spaces, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-dominated-convergence, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, thm-ultrafilter-lemma, thm-hahn-banach-dominated-extension]
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, Springer Universitext, 2011
      url: https://www.math.toronto.edu/almut/Brezis.pdf
      locator: Chapter 3 §§3.5–3.6, Theorems 3.18–3.19 and Proposition 3.20, printed pp. 69–73; Chapter 4 §4.3, Theorem 4.10, printed pp. 96–98.
    - title: Tomáš Roubíček, Nonlinear Partial Differential Equations with Applications, 2nd ed., Birkhäuser, 2005
      url: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MC/MCde/Roubicek%20T.%20Nonlinear%20partial%20differential%20equations%20with%20applications%20%282ed.%2C%202005%29%28ISBN%209783034805124%29%28O%29%28457s%29_MCde_.pdf
      locator: §7.3, Lemma 7.7 and proof, printed pp. 208–210, for the compactness-and-weak-limit route.
---

## Statement

Assume the Axiom of Choice. Let
$\Omega\subseteq\mathbb R^d$ be bounded and open, $d\ge1$, let
$1<p<\infty$, and let $0<T<\infty$. Put $V=W_0^{1,p}(\Omega;\mathbb R)$ with gradient norm
$\|v\|_V=\|\nabla v\|_{L^p}$, and suppose $V$ has a continuous inclusion in
a real Hilbert space $H$. If $u_j$ is bounded in $L^p(0,T;V)$ and its image
in $L^p(0,T;H)$ converges strongly to $u$, then a subsequence converges
weakly in $L^p(0,T;V)$ to some $U$, the image of $U$ equals $u$, and
$\nabla u_j\rightharpoonup\nabla U$ in
$L^p((0,T)\times\Omega;\mathbb R^d)$.

## Facts & Assumptions

**Given:** The Axiom of Choice; bounded open $\Omega$, $d\ge1$, $1<p<\infty$, $0<T<\infty$; the continuous inclusion $V\hookrightarrow H$; and a bounded sequence in $L^p(0,T;V)$ converging strongly in $L^p(0,T;H)$.

[F1] $W^{1,p}(\Omega)$ is Banach, $W_0^{1,p}(\Omega)$ is its closed zero-boundary subspace, and Poincaré makes the gradient norm equivalent to the inherited Sobolev norm ([[thm-sobolev-spaces-are-banach-spaces]], [[def-wkp-zero-as-a-sobolev-closure]], [[lem-closed-subspace-of-a-banach-space-is-banach]], [[thm-poincare-inequality-for-w-one-p-zero]]).

[F2] For $1<p<\infty$, real scalar $L^p$ over any measure space is reflexive under Countable Choice ([[thm-reflexivity-of-lp-for-one-less-p-less-infinity]]).

[F3] Under the ultrafilter lemma, Dependent Choice and Hahn–Banach, a real Banach space is reflexive exactly when every bounded sequence has a weakly convergent subsequence ([[cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence]], [[def-reflexive-banach-space]]).

[F4] Under Hahn–Banach, every closed linear subspace of a reflexive Banach space is reflexive ([[thm-closed-subspaces-of-reflexive-spaces-are-reflexive]]).

[F5] The space $L^p(0,T;V)$ is complete when $V$ is Banach ([[thm-pe12-bochner-lp-completeness]]); the inclusion $V\to H$ induces a bounded linear map $L^p(0,T;V)\to L^p(0,T;H)$ by the same continuous embedding ([[def-pe12-gelfand-triple]]).

[F6] For $X=L^p(\Omega;\mathbb R^d)$, finite-valued simple functions are dense in Bochner $L^p(0,T;X)$. To see this, let $s_n\to g$ almost everywhere be the simple sequence from strong measurability. For each integer $m\ge1$, put $A_m=\{t:\|g(t)\|_X\le m\}$; dominated convergence for indicators lets us choose $n_m$ so $|\{t\in A_m:\|s_{n_m}(t)-g(t)\|_X>1/m\}|\le m^{-p-1}$. Restrict $s_{n_m}$ to the complementary good subset of $A_m$ and set it to zero elsewhere. This is an integrable simple function. Its $p$th-power error is at most $T m^{-p}+m^{-1}+\int_{\{\|g\|_X>m\}}\|g\|_X^p$, which tends to zero. For a simple $g(t)=\sum_{\ell=1}^q\mathbf1_{E_\ell}(t)g_\ell$ with disjoint measurable $E_\ell$, choose measurable representatives of each $g_\ell\in L^p(\Omega;\mathbb R^d)$ and set $G(t,x)=\sum_{\ell=1}^q\mathbf1_{E_\ell}(t)g_\ell(x)$. Each summand is product measurable: $g_\ell\circ\pi_\Omega$ is measurable since the inverse image of a measurable set is $(0,T)$ times that set, and $\mathbf1_{E_\ell}\circ\pi_T$ is measurable by the same rectangle argument; their product is measurable coordinatewise. The spaces are finite-measure Lebesgue spaces because $T<\infty$ and $\Omega$ is bounded ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]). Tonelli then gives $\|G\|_{L^p((0,T)\times\Omega)}^p =\sum_\ell|E_\ell|\|g_\ell\|_{L^p(\Omega)}^p$. Thus this correspondence extends by completeness to an isometric map into $L^p((0,T)\times\Omega;\mathbb R^d)$ ([[def-pe12-gelfand-triple]], [[def-strongly-measurable-banach-valued-function]], [[def-bochner-integrable-function]], [[def-product-measure-on-sigma-finite-spaces]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-dominated-convergence]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[A1] Countable Choice is supplied by Dependent Choice. The weak subsequence argument uses the ultrafilter lemma, Dependent Choice and Hahn–Banach; all are supplied from the assumed Axiom of Choice ([[def-axiom-of-choice]], [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]], [[thm-ultrafilter-lemma]], [[thm-hahn-banach-dominated-extension]], [[def-ultrafilter-extension-principle]], [[def-dependent-choice]], [[def-hahn-banach-extension-principle-relative]], [[lem-dependent-choice-implies-countable-choice]], [[def-countable-choice]]). The countable selections in [F6] use this same Countable Choice branch.

## Proof

1.1 If $\Omega=\varnothing$, the closure definition in [F1] gives $V=\{0\}$, so every $u_j$ and its $H$ image is zero. The assumed strong $L^p(0,T;H)$ limit is therefore $u=0$ even when $H$ is nonzero; taking $U=0$ proves all conclusions. [F1, given, algebra]

1.2 Assume $\Omega\ne\varnothing$, put $Q=(0,T)\times\Omega$, and give $Y_0=(L^p(Q;\mathbb R))^d$ its maximum product norm. Each scalar coordinate space is reflexive Banach by [F2], so $Y_0$ is Banach: a Cauchy sequence converges in each coordinate and therefore in the maximum norm. A bounded sequence in $Y_0$ has bounded coordinates; apply [F3] successively to the $d$ coordinates to obtain one subsequence weakly converging in every coordinate. A bounded functional on $Y_0$ is the sum of its restrictions to the coordinate embeddings, so this is weak convergence in $Y_0$. The reverse implication in [F3] makes $Y_0$ reflexive. The Euclidean-vector norm of $Y=L^p(Q;\mathbb R^d)$ and the $Y_0$ product norm are equivalent because the Euclidean norm and the finite-dimensional $\ell^p$ norm on $\mathbb R^d$ are equivalent. Equivalent norms have the same continuous dual and weak convergence, so $Y$ is reflexive as well. [A1, F2, F3, given]

1.3 The gradient map $\Gamma:V\to L^p(\Omega;\mathbb R^d)$, $\Gamma v=\nabla v$, is an isometry for the chosen norm and has closed range: if $\nabla v_n$ converges in $L^p$, then $(v_n)$ is Cauchy in $V$; [F1] gives a limit in $V$ whose gradient is that limit. [F1, given, construct]

1.4 For a finite-valued simple $U(t)=\sum_{\ell=1}^q\mathbf1_{E_\ell}(t)v_\ell$ with $v_\ell\in V$ and disjoint measurable $E_\ell$, apply [F6] to $\Gamma U(t)=\sum_\ell\mathbf1_{E_\ell}(t)\nabla v_\ell$. It supplies the space-time representative and equality of the Bochner and product $L^p$ norms. Simple-function density from [F6] and completeness of $Y$ from [F2] extend this map to an isometry $\Gamma_p:L^p(0,T;V)\to Y$. Its range $S$ is closed: if $\Gamma_pU_n$ converges in $Y$, the isometry makes $U_n$ Cauchy in $L^p(0,T;V)$; completeness [F5] gives $U_n\to U$, and then $\Gamma_pU_n\to\Gamma_pU$. Thus [F4] makes $S$ a reflexive Banach space. [A1, F2, F4, F5, F6, given, construct]

2.1 The sequence $\Gamma_pu_j$ is bounded in $S$. Reflexivity of $S$ and [F3] give a weakly convergent subsequence with limit $G\in S$. Since $G=\Gamma_pU$ for some $U\in L^p(0,T;V)$ and $\Gamma_p$ is an isometry, the same subsequence $u_j$ converges weakly to $U$ in $L^p(0,T;V)$; applying any bounded functional after $\Gamma_p^{-1}$ verifies this assertion. [A1, F3, step 1.4]

3.1 The bounded inclusion in [F5] sends this weak convergence to weak convergence of the $H$-valued images to the image of $U$. By hypothesis those same images converge strongly, hence weakly, to $u$; Hahn–Banach separates distinct points, so $u$ is the image of $U$. Weak convergence in $S$ also implies weak convergence of gradients in $Y$, by restriction of $Y^*$ functionals to $S$. [F5, F6, step 2.1, given, algebra]

4.1 The subsequence therefore has the asserted weak $L^p(V)$ limit, that limit has $H$ image $u$, and its space-time gradient is the weak limit $G=\nabla U$. This proves all conclusions. [step 2.1, step 3.1] ∎
