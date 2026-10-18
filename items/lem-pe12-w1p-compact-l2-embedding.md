---
id: lem-pe12-w1p-compact-l2-embedding
kind: lemma
title: The subcritical W0 one p embedding into L2
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets, cor-sobolev-inequality-for-w-one-p-zero, lem-zero-extension-from-w-one-p-zero, thm-holder-inequality-for-integrals, cor-vector-valued-ftc-and-lipschitz-bound, thm-arzela-ascoli-for-real-ck, lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-countable-choice, def-dependent-choice, def-compactly-embedded-normed-spaces]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, Springer Universitext, 2011
      url: https://www.math.toronto.edu/almut/Brezis.pdf
      locator: Theorem 9.16, Rellich–Kondrachov, PDF pp. 299–300; local bounded-open reduction is proved below.
    - title: Tomáš Roubíček, Nonlinear Partial Differential Equations with Applications, 2nd ed., Birkhäuser, 2005
      url: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MC/MCde/Roubicek%20T.%20Nonlinear%20partial%20differential%20equations%20with%20applications%20%282ed.%2C%202005%29%28ISBN%209783034805124%29%28O%29%28457s%29_MCde_.pdf
      locator: §7.3, compact Sobolev embeddings in evolution compactness; this URL is historically dropped in batch coverage and is not used as a premise.
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume the Axiom of Choice. Let $d\ge1$, let $\Omega\subseteq\mathbb R^d$ be a bounded open set, and let $1<p<\infty$ satisfy $p>\max(1,2d/(d+2))$. Then $W_0^{1,p}(\Omega)$ is continuously and compactly embedded in $L^2(\Omega)$. In particular, the inclusion is dense. No boundary regularity is required.

## Facts & Assumptions

**Given:** The Axiom of Choice; a bounded open set $\Omega\subseteq\mathbb R^d$; $d\ge1$; and $1<p<\infty$ with $p>\max(1,2d/(d+2))$.

[F1] For $d\ge2$, if $1\le r<d$ and $2<dr/(d-r)$, then $W_0^{1,r}(\Omega)$ is compactly embedded in $L^2(\Omega)$ for every bounded open $\Omega$, without boundary regularity ([[cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets]]).

[F2] For $d\ge2$ and $1\le r<d$, the zero-boundary Sobolev inequality is $\|v\|_{L^{r^*}}\le C\|\nabla v\|_{L^r}$, where $r^*=dr/(d-r)$ ([[cor-sobolev-inequality-for-w-one-p-zero]]).

[F3] On a finite-measure set, Hölder gives $\|g\|_{L^s}\le |\Omega|^{1/s-1/r}\|g\|_{L^r}$ when $1\le s<r<\infty$ ([[thm-holder-inequality-for-integrals]]).

[F4] For any open $\Omega$, zero extension maps $W_0^{1,p}(\Omega)$ isometrically into $W^{1,p}(\mathbb R^d)$, with weak gradient the zero extension of $\nabla v$ ([[lem-zero-extension-from-w-one-p-zero]]).

[F5] For every open $\Omega\subseteq\mathbb R^d$, $C_c^\infty(\Omega)$ is dense in $L^2(\Omega)$; if $\Omega\subset\mathbb R$ is bounded, then $|\Omega|<\infty$ and uniform convergence on a fixed compact interval implies $L^2(\Omega)$ convergence ([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F6] For a differentiable real function on a compact interval, the fundamental theorem gives the endpoint difference as the integral of the derivative; Hölder bounds that integral by the interval length to the power $1-1/p$ times the derivative's $L^p$ norm ([[cor-vector-valued-ftc-and-lipschitz-bound]], [[thm-holder-inequality-for-integrals]]).

[F7] Under Countable Choice and Dependent Choice, a uniformly bounded equicontinuous family in $C([a,b];\mathbb R)$ has compact closure in the supremum norm ([[thm-arzela-ascoli-for-real-ck]]).

[F8] $W_0^{1,p}(\Omega)$ is the norm closure of $C_c^\infty(\Omega)$ in $W^{1,p}$, and the Sobolev norm includes the function and weak first derivatives ([[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]]).

[A1] The Axiom of Choice supplies Countable Choice and Dependent Choice; these are used by [F1], [F4], [F5], and [F7] ([[def-axiom-of-choice]], [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]], [[def-countable-choice]], [[def-dependent-choice]]).

[F9] A compact embedding is a continuous inclusion whose image of each
bounded set has compact closure; under the stated choice assumptions this is
equivalent to the sequential subsequence form used below
([[def-compactly-embedded-normed-spaces]]).

## Proof

1.1 If $\Omega=\varnothing$, then $W_0^{1,p}(\Omega)=L^2(\Omega)=\{0\}$ and the conclusion holds. Assume $\Omega\ne\varnothing$. First consider $d=1$. Choose a bounded open interval $I=(a,b)$ with $\overline\Omega\subset I$ and let $L=b-a$. By [F4] and the closure definition [F8], each $v\in W_0^{1,p}(\Omega)$ has zero extension $E_0v|_I\in W_0^{1,p}(I)$: choose $\varphi_m\in C_c^\infty(\Omega)$ converging to $v$ in $W^{1,p}$ and extend each by zero into $C_c^\infty(I)$. Countable Choice selects this approximating sequence. For every such smooth extension $\varphi_m$, [F6] gives $|\varphi_m(x)-\varphi_m(y)|\le |x-y|^{1-1/p}\|\varphi_m'\|_{L^p(I)}$ and $\|\varphi_m\|_{L^\infty([a,b])}\le L^{1-1/p}\|\varphi_m'\|_{L^p(I)}$, because it vanishes near both endpoints. Applying the second inequality to differences shows that $(\varphi_m)$ is uniformly Cauchy; its continuous uniform limit $w$ represents $E_0v|_I$ since $\varphi_m\to E_0v$ in $L^p(I)$. For every $\zeta\in C_c^\infty(I)$, uniform convergence and $\varphi_m'\to E_0(v')$ in $L^p(I)$ give $\int_Iw\zeta'=-\int_IE_0(v')\zeta$. Thus $w'=E_0(v')$ weakly and [F4] gives $\|w'\|_{L^p(I)}=\|v'\|_{L^p(\Omega)}$. Passing to the limit in the two displayed inequalities gives the same Hölder and supremum bounds for $w$. [A1, F4, F6, F8, given, construct]

1.2 Now let $d\ge2$. Put $s_0=\max(1,2d/(d+2))$ and $s_1=\min(p,d)$. The strict hypothesis gives $s_0<s_1$; set $r=(s_0+s_1)/2$. Then $1<r<p$, $r<d$, and $2<r^*=dr/(d-r)$. By finite-measure Hölder [F3], $W_0^{1,p}(\Omega)\hookrightarrow W_0^{1,r}(\Omega)$ continuously: the function and gradient $L^r$ norms are bounded by their $L^p$ norms, and a $C_c^\infty$ approximating sequence in $W^{1,p}$ also converges in $W^{1,r}$. Therefore [F1] gives compactness of $W_0^{1,p}(\Omega)\to L^2(\Omega)$. [A1, F1, F3, F8, given, algebra]

2.1 For a bounded sequence $(v_j)$ in $W_0^{1,p}(\Omega)$, the representatives $w_j$ from step 1.1 are uniformly bounded by $L^{1-1/p}\sup_j\|\nabla v_j\|_p$ and share the modulus $|w_j(x)-w_j(y)|\le |x-y|^{1-1/p}\sup_j\|\nabla v_j\|_p$. Arzelà–Ascoli [F7] gives a uniformly convergent subsequence on the fixed compact interval $[a,b]$. Its restrictions converge in $L^2(\Omega)$ by [F5], proving compactness. For each $v\in W_0^{1,p}(\Omega)$ the same supremum estimate gives $\|v\|_2\le |\Omega|^{1/2}L^{1-1/p}\|\nabla v\|_p\le L^{3/2-1/p}\|\nabla v\|_p$, proving continuity. [A1, F5, F7, step 1.1, given, algebra]

3.1 In the $d\ge2$ branch, for $v\in W_0^{1,p}(\Omega)$, [F2] and [F3] yield the continuous estimate $\|v\|_2\le |\Omega|^{1/2-1/r^*}\|v\|_{r^*}\le C|\Omega|^{1/2-1/r^*+1/r-1/p}\|\nabla v\|_p$, using the Sobolev inequality [F2] with exponent $r$. Thus the inclusion is continuous on the $W_0^{1,p}$ norm. Finally [F5] and the closure definition [F8] give $C_c^\infty(\Omega)\subset W_0^{1,p}(\Omega)$ dense in $L^2(\Omega)$. The preceding arguments prove the complete $d=1$ and $d\ge2$ branches; [F9] then gives the claimed compact embedding in its continuous/sequential sense. [F2, F3, F5, F8, F9, step 1.1, step 2.1, step 1.2, algebra] ∎
