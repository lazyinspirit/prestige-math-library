---
id: "lem-regularized-continuity-equation-has-characteristic-flow"
kind: lemma
title: "Regularized continuity equations are represented by characteristic flows"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: ["def-continuity-equation-with-finite-action", "lem-gaussian-regularization-of-continuity-equation", "lem-carath-ode-flow-with-integrable-local-bounds", "thm-borel-probability-measures-on-polish-spaces-are-inner-regular", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "thm-tonelli-theorem-for-sigma-finite-product-spaces", "thm-holder-inequality-for-integrals", "lem-smooth-unit-mass-compact-bump-on-euclidean-space", "def-mollifier-family-generated-by-a-unit-mass-smooth-bump", "thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign", "def-axiom-of-choice", "thm-choice-implies-dependent-implies-countable-choice", "def-countable-choice"]
justified_by: []
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
proof_strategy: direct
axiom_use: "AC is inherited through Gaussian normalization and inner regularity and supplies Countable Choice for the normalized bump, mollifier, and local flow interfaces. Finite action excludes explosion in both time directions without further selection."
sources:
  references:
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures, Propositions 8.1.7–8.1.10, PDF pp. 173–178"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
    - title: "Filippo Santambrogio, Optimal Transport for Applied Mathematicians, Chapter 5, §5.3, PDF pp. 173–178"
      url: "https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf"
---
## Statement

Assume AC. Let $(\mu_t^\varepsilon,v_t^\varepsilon)$ be the Gaussian-regularized solution from the preceding lemma on $[0,T]\times\mathbb R^d$, and write $\mu_t^\varepsilon=p_t^\varepsilon(x)dx$. There is a unique maximal local flow $X_t^\varepsilon(x)$ solving $\dot X_t^\varepsilon(x)=v_t^\varepsilon(X_t^\varepsilon(x))$, $X_0^\varepsilon(x)=x$. For $\mu_0^\varepsilon$-almost every x the path exists on all of $[0,T]$, the map from x to its path is Borel on this full-measure domain, and for every $t\in[0,T]$,
$$\mu_t^\varepsilon=(X_t^\varepsilon)_\#\mu_0^\varepsilon.$$

## Statement references

[[def-continuity-equation-with-finite-action]]

[[lem-gaussian-regularization-of-continuity-equation]]

[[lem-carath-ode-flow-with-integrable-local-bounds]]

[[thm-borel-probability-measures-on-polish-spaces-are-inner-regular]]

[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[[thm-holder-inequality-for-integrals]]

[[lem-smooth-unit-mass-compact-bump-on-euclidean-space]]

[[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]]

[[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]

[[def-axiom-of-choice]]

[[thm-choice-implies-dependent-implies-countable-choice]]

[[def-countable-choice]]

[Ambrosio, Gigli, and Savaré, *Gradient Flows*, Propositions 8.1.7–8.1.10](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

[Santambrogio, *Optimal Transport for Applied Mathematicians*, Chapter 5, §5.3](https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf)

## Facts & Assumptions

**Given:** AC, the positive smooth densities $p_t^\varepsilon$, the locally time-integrably Lipschitz vector field $v_t^\varepsilon$, its distributional continuity equation, and finite action.

[F1] The Gaussian-regularized pair has positive spatially smooth density, solves the continuity equation, and has finite action. [[lem-gaussian-regularization-of-continuity-equation]]

[F2] A Borel field with integrable local magnitude and Lipschitz bounds has a unique maximal local flow; its time maps are diffeomorphisms between their open domains and images, and an interior maximal endpoint requires escape from every compact set. [[lem-carath-ode-flow-with-integrable-local-bounds]]

[F3] A finite Borel probability on a Polish space is inner regular; on a Euclidean open set, compactly supported continuous functions are uniformly approximated by smooth compactly supported functions by convolving their zero extensions with a unit-mass bump of sufficiently small support. [[thm-borel-probability-measures-on-polish-spaces-are-inner-regular]] [[lem-smooth-unit-mass-compact-bump-on-euclidean-space]] [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]] [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]

[F4] Tonelli and Fubini apply to the nonnegative action and integrable first-derivative terms; Holder bounds first moments by the square root of finite second action. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] [[thm-holder-inequality-for-integrals]]

## Proof
1.1 Apply [F2] to $v^\varepsilon$ and denote by $D_t$ the open set of initial points whose trajectories exist from time 0 through t, and by $E_t=X_t^\varepsilon(D_t)$ its open image. Fix $t\in(0,T]$ and $f\in C_c^\infty(E_t)$. For $0\le r\le t$ and $x\in D_{r,t}$, the set of states whose trajectories exist from r to t, define $\psi(r,x)=f(X^\varepsilon(t;r,x))$; extend it by zero outside $D_{r,t}$. Since $\operatorname{supp}f$ is compactly contained in $E_t$, its backward images form a compact subset of the flow domain. Thus $\psi$ has compact spatial support uniformly in r, is continuously differentiable in x, and is absolutely continuous in r locally. The start-time derivative from [F2] and the flow identity give $\partial_r\psi=\nabla f(X(t;r,x))\cdot[-D_xX(t;r,x)v_r^\varepsilon(x)]=-v_r^\varepsilon(x)\cdot\nabla_x\psi$ almost everywhere. [F1, F2, given]

2.1 The weak continuity-equation identity extends from smooth compact tests to compactly supported tests that are $C^1$ in x and absolutely continuous in r with locally integrable time derivative: multiply by a time cutoff, convolve in time and space on a fixed compact neighborhood, and pass to the limit. The terms converge because $p^\varepsilon$ is locally bounded, $p^\varepsilon v^\varepsilon$ is locally integrable in time and space by finite action, and the test and its spatial gradient converge uniformly while its time derivative converges in $L^1$. Apply this extension to $\eta(r)\psi(r,x)$ from step 1.1 for every smooth compactly supported time cutoff $\eta$. The transport equation leaves $\int\eta'(r)F(r)dr=0$, so $F(r)=\int\psi(r,x)d\mu_r^\varepsilon(x)$ is constant on (0,t). Continuity of the flow and of $\mu_r^\varepsilon$ extends the identity to r=0,t, so $\int f(y)d\mu_t^\varepsilon(y)=\int_{D_t}f(X_t^\varepsilon(x))d\mu_0^\varepsilon(x).$ Uniform mollification extends this equality to every $f\in C_c(E_t)$; since both measures are finite, the uniform limit passes through their integrals. Inner regularity [F3] then identifies the finite Borel measures on $E_t$: $\mu_t^\varepsilon|_{E_t}=(X_t^\varepsilon)_\#(\mu_0^\varepsilon|_{D_t}).$ [F1, F3, step 1.1]

3.1 Let $\tau(x)$ be the maximal forward existence time. The measure identity of step 2.1, first for bounded nonnegative truncations of $|v_t^\varepsilon|^2$ and then by monotone convergence, gives $\int\!\int_0^{\min\{T,\tau(x)\}}|v_r^\varepsilon(X_r^\varepsilon(x))|^2dr\,d\mu_0^\varepsilon(x)\le\int_0^T\!\int|v_r^\varepsilon(y)|^2d\mu_r^\varepsilon(y)dr<\infty.$ Tonelli [F4] shows that for $\mu_0^\varepsilon$-almost every x the path has finite squared speed integral up to its maximal endpoint. Holder then makes its total path length finite. Such a path is Cauchy at any finite endpoint; it cannot escape every compact set, contradicting [F2] if an endpoint lies in $(0,T)$. At T it has a finite limit and extends continuously to T. Thus $\mu_0^\varepsilon(D_T)=1$. [F1, F2, F4, step 2.1]

4.1 For each t, step 2.1 identifies $\mu_t^\varepsilon$ on $E_t$ with the pushforward of $\mu_0^\varepsilon|_{D_t}$. Since $D_t\supseteq D_T$ has full $\mu_0^\varepsilon$-measure by step 3.1, this pushforward is a probability supported on $E_t$. Therefore $\mu_t^\varepsilon(E_t)=1$, and the restricted-measure identity is equality on all of $\mathbb R^d$. This proves $\mu_t^\varepsilon=(X_t^\varepsilon)_\#\mu_0^\varepsilon$ for every t, with the unique flow given by [F2]. [F2, F3, step 2.1, step 3.1] ∎
