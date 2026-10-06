---
id: lem-logarithmic-caccioppoli-estimate-for-positive-supersolutions
kind: lemma
title: "Logarithmic Caccioppoli estimate for positive supersolutions"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
deps: [def-weak-subsolution-and-supersolution-of-a-divergence-form-equation, lem-positive-part-is-an-admissible-weak-test-by-truncation, thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions, thm-young-inequality-real-exponents, thm-holder-inequality-for-integrals, def-sobolev-space-wkp-and-its-norm, thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions, lem-weak-stability-of-sobolev-derivatives, lem-weak-leibniz-rule-with-a-smooth-factor, lem-smooth-bump-between-concentric-euclidean-balls, lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound, thm-monotone-convergence-for-the-integral, def-countable-choice, def-axiom-of-choice]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brian Krummel, DeGiorgi-Nash lecture notes (15 March 2016; complete 9-page notes)"
      url: "https://www2.math.upenn.edu/~qze/notes/ELLIPTIC%20PDE/weakHarnack.pdf"
      locator: "The logarithmic estimate (14)-(15) in the Moser iteration, printed pp. 1-9 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete author scan, 118 sheets reproducing the 223 printed pages of the manuscript, two logical pages per sheet)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 17, general remark (a) for the logarithmic test and the proof of Lemma 4, display (1), printed pp. 206-207"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and the Axiom of Choice. Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be open, let $A$ and $L_0$ be as in [[thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions]], and let $u\in H^1(\Omega;\mathbb R)$ satisfy $u>0$ a.e. on $\Omega$ and
$$a_0(u,v)\ge0\qquad\text{for every }v\in H^1_0(\Omega),\ v\ge0\ a.e.,$$
i.e. $u$ is a positive weak supersolution of $L_0u=0$ ([[def-weak-subsolution-and-supersolution-of-a-divergence-form-equation]]).
Then for every $\eta\in C_c^\infty(\Omega)$ and every $\varepsilon>0$,
$$\int_\Omega\eta^2\,|D\log(u+\varepsilon)|^2dx\le\frac{4M_a^2}{\theta}\int_\Omega|D\eta|^2dx,$$
and consequently, for concentric balls $B_r(x_0)\Subset B_R(x_0)\Subset\Omega$,
$$\int_{B_r(x_0)}\frac{|Du|^2}{u^2}dx\le C(n,\theta,M_a)\frac{|B_R(x_0)|}{(R-r)^2},$$
the second inequality being the monotone limit $\varepsilon\downarrow0$ of the first. No lower bound on $u$ is assumed away from its positivity.

## Facts & Assumptions

**Given:** Countable Choice and the Axiom of Choice; an open $\Omega\subseteq\mathbb R^n$, $n\ge2$; a measurable symmetric coefficient field $A$ with $\theta|\xi|^2\le\langle A\xi,\xi\rangle\le M_a^2|\xi|^2$ a.e.; a class $u\in H^1(\Omega;\mathbb R)$ with $u>0$ a.e. and $a_0(u,v)\ge0$ for every nonnegative $v\in H^1_0(\Omega)$; $\eta\in C_c^\infty(\Omega)$; $\varepsilon>0$.

[F1] Assume Countable Choice. The scalar map $F_\varepsilon(t):=(\max\{t,0\}+\varepsilon)^{-1}$ is globally Lipschitz. Its composition with $u$ lies in $H^1_{\mathrm{loc}}(\Omega)$ and, since $u>0$ a.e., equals $(u+\varepsilon)^{-1}$ with derivative $D((u+\varepsilon)^{-1})=-(u+\varepsilon)^{-2}Du$ ([[thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions]], [[def-sobolev-space-wkp-and-its-norm]]).

[F2] Assume Countable Choice. Products with smooth compactly supported cutoffs: $\eta^2w_\varepsilon\in H^1_0(\Omega)$ with $D(\eta^2w_\varepsilon)=2\eta w_\varepsilon D\eta+\eta^2Dw_\varepsilon$, because $\eta w_\varepsilon$ is compactly supported and lies in $H^1_0$ ([[lem-weak-leibniz-rule-with-a-smooth-factor]], [[lem-positive-part-is-an-admissible-weak-test-by-truncation]]).

[F3] Matrix Cauchy-Schwarz and Young: for the positive definite field $A$, $|a^{ij}\xi_j\zeta_i|\le(a^{ij}\xi_j\xi_i)^{1/2}(a^{ij}\zeta_i\zeta_j)^{1/2}\le M_a|\zeta|(a^{ij}\xi_j\xi_i)^{1/2}$; and $2M_aXY\le\tfrac12\theta X^2+\tfrac{2M_a^2}{\theta}Y^2$ for $X,Y\ge0$, $\theta>0$ ([[thm-young-inequality-real-exponents]], [[thm-holder-inequality-for-integrals]]).

[F4] Bumps: for $0<r<R$ there is $\eta\in C_c^\infty(B_R(x_0))$ with $\eta=1$ on $B_r(x_0)$ and $|D\eta|\le C_U/(R-r)$ for a universal $C_U$; the explicit radial construction gives this bound ([[lem-smooth-bump-between-concentric-euclidean-balls]], [[lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound]]).

## Proof

**Proof technique:** direct; insert the regularised reciprocal test function, expand, and absorb the cross term by Young's inequality with the ellipticity constant.

1.1 The test function and the supersolution inequality. By [F1] and [F2], $v_\varepsilon:=\eta^2(u+\varepsilon)^{-1}$ is a nonnegative element of $H^1_0(\Omega)$ with $D_iv_\varepsilon=2\eta(u+\varepsilon)^{-1}D_i\eta-\eta^2(u+\varepsilon)^{-2}D_iu$. Testing the supersolution inequality with $v_\varepsilon$ gives $0\le a_0(u,v_\varepsilon)=2\int_\Omega\eta(u+\varepsilon)^{-1}a^{ij}D_juD_i\eta\,dx-\int_\Omega\eta^2(u+\varepsilon)^{-2}a^{ij}D_juD_iu\,dx$. Taking absolute values in the cross term yields $\int_\Omega\eta^2(u+\varepsilon)^{-2}a^{ij}D_juD_iu\,dx\le2\int_\Omega|\eta|(u+\varepsilon)^{-1}|a^{ij}D_juD_i\eta|\,dx$, which is valid even when the allowed cutoff $\eta$ changes sign. [given, F1, F2]

2.1 Ellipticity and absorption. Write $C:=\bigl(\int_\Omega\eta^2(u+\varepsilon)^{-2}a^{ij}D_juD_iu\,dx\bigr)^{1/2}$ and $B:=\bigl(\int_\Omega|D\eta|^2dx\bigr)^{1/2}$. By step 1.1 and [F3], $C^2\le2M_aBC$, so $C\le2M_aB$ if $C>0$ (and the same bound is trivial otherwise). Since also $\theta\int_\Omega\eta^2|D\log(u+\varepsilon)|^2dx=\theta\int_\Omega\eta^2(u+\varepsilon)^{-2}|Du|^2dx\le C^2$, we obtain $\int_\Omega\eta^2|D\log(u+\varepsilon)|^2dx\le\frac{4M_a^2}{\theta}\int_\Omega|D\eta|^2dx$, the first displayed estimate. [step 1.1, F3, algebra]

3.1 The ball form. Let $0<r<R$ with $B_R(x_0)\Subset\Omega$ and choose the bump $\eta$ of [F4]; then $\int_\Omega\eta^2|D\log(u+\varepsilon)|^2\,dx\ge\int_{B_r(x_0)}|Du|^2(u+\varepsilon)^{-2}dx$ and $\int_\Omega|D\eta|^2dx\le C_U^2|B_R(x_0)|(R-r)^{-2}$, so $\int_{B_r(x_0)}|Du|^2(u+\varepsilon)^{-2}dx\le4C_U^2M_a^2\theta^{-1}|B_R(x_0)|(R-r)^{-2}$. Since $(u+\varepsilon)^{-2}\uparrow u^{-2}$ as $\varepsilon\downarrow0$, the monotone convergence theorem applied to the nonnegative integrands $|Du|^2(u+\varepsilon)^{-2}$ yields $\int_{B_r(x_0)}|Du|^2u^{-2}dx\le C(n,\theta,M_a)|B_R(x_0)|(R-r)^{-2}$ with $C(n,\theta,M_a):=4C_U^2M_a^2/\theta$; no lower bound on $u$ is used beyond positivity, and only the declared choice principles are used. [step 2.1, F4, algebra] ∎
