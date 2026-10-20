---
id: "thm-superposition-for-finite-action-continuity-equations"
kind: theorem
title: "Superposition for finite-action Euclidean continuity equations"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: ["def-continuity-equation-with-finite-action", "lem-spacetime-law-of-a-narrow-probability-curve", "lem-gaussian-regularization-of-continuity-equation", "lem-regularized-continuity-equation-has-characteristic-flow", "lem-lower-semicontinuity-of-path-quadratic-energy", "thm-prokhorov-tightness-theorem-on-polish-spaces", "cor-weakly-convergent-sequences-are-tight", "def-tight-family-of-probability-measures", "def-polish-space", "cor-ascoli-arzela-for-compact-metric-domains", "lem-vector-valued-continuous-curve-space-is-complete", "thm-c-c-is-dense-in-l-p-for-radon-measures", "lem-smooth-compact-tests-dense-in-finite-radon-l2", "def-radon-measure-on-an-lch-space", "thm-borel-probability-measures-on-polish-spaces-are-inner-regular", "thm-disintegration-of-a-joint-law-on-standard-borel-spaces", "def-standard-borel-space", "lem-finite-products-of-standard-borel-spaces-are-standard-borel", "def-product-measure-on-sigma-finite-spaces", "thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique", "def-random-element-and-real-random-variable", "def-law-or-distribution-of-a-random-element", "lem-law-of-a-random-element-is-a-probability-measure", "thm-measurability-of-integration-against-a-kernel", "def-weak-convergence-of-borel-probability-measures", "thm-tonelli-theorem-for-sigma-finite-product-spaces", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "thm-holder-inequality-for-integrals", "thm-monotone-convergence-for-the-integral", "prop-closure-properties-of-measurable-functions-used-by-the-integral", "def-axiom-of-choice", "thm-choice-implies-dependent-implies-countable-choice", "def-countable-choice", "def-dependent-choice"]
justified_by: []
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
proof_strategy: direct
axiom_use: "AC is used for standard-Borel disintegration, Prokhorov extraction, Gaussian regularization and the Countable/Dependent Choice branches of Radon approximation; each use is supplied by the cited item hypotheses."
sources:
  references:
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures, Theorem 8.2.1, PDF pp. 179–182"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
    - title: "Filippo Santambrogio, Optimal Transport for Applied Mathematicians, Chapter 5, §5.3, PDF pp. 176–178"
      url: "https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf"
---
## Statement

Assume AC. Let $T>0$ and let $(\mu_t,v_t)$ be a narrowly continuous finite-action solution of the continuity equation on $[0,T]\times\mathbb R^d$. There is a Borel probability law $\eta$ on $C([0,T];\mathbb R^d)$ such that $(e_t)_\#\eta=\mu_t$ for every $t$, and for $\eta$-almost every path $\gamma$, $\gamma$ is absolutely continuous, $\gamma(0)$ has law $\mu_0$, and $\dot\gamma(t)=v_t(\gamma(t))$ for almost every $t$. Its expected path action equals the Eulerian action:
$$\int\!\int_0^T|\dot\gamma(t)|^2dt\,d\eta(\gamma)=\int_0^T\!\int|v_t(x)|^2d\mu_t(x)dt.$$

## Statement references

[[def-continuity-equation-with-finite-action]]

[[lem-spacetime-law-of-a-narrow-probability-curve]]

[[lem-gaussian-regularization-of-continuity-equation]]

[[lem-regularized-continuity-equation-has-characteristic-flow]]

[[lem-lower-semicontinuity-of-path-quadratic-energy]]

[[thm-prokhorov-tightness-theorem-on-polish-spaces]]

[[cor-weakly-convergent-sequences-are-tight]]

[[def-tight-family-of-probability-measures]]

[[def-polish-space]]

[[cor-ascoli-arzela-for-compact-metric-domains]]

[[lem-vector-valued-continuous-curve-space-is-complete]]

[[thm-c-c-is-dense-in-l-p-for-radon-measures]]

[[lem-smooth-compact-tests-dense-in-finite-radon-l2]]

[[def-radon-measure-on-an-lch-space]]

[[thm-borel-probability-measures-on-polish-spaces-are-inner-regular]]

[[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]]

[[def-standard-borel-space]]

[[lem-finite-products-of-standard-borel-spaces-are-standard-borel]]

[[def-product-measure-on-sigma-finite-spaces]]

[[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

[[def-random-element-and-real-random-variable]]

[[def-law-or-distribution-of-a-random-element]]

[[lem-law-of-a-random-element-is-a-probability-measure]]

[[thm-measurability-of-integration-against-a-kernel]]

[[def-weak-convergence-of-borel-probability-measures]]

[[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[[thm-holder-inequality-for-integrals]]

[[thm-monotone-convergence-for-the-integral]]

[[prop-closure-properties-of-measurable-functions-used-by-the-integral]]

[[def-axiom-of-choice]]

[[thm-choice-implies-dependent-implies-countable-choice]]

[[def-countable-choice]]

[[def-dependent-choice]]

[Ambrosio, Gigli, and Savaré, *Gradient Flows*, Theorem 8.2.1](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

[Santambrogio, *Optimal Transport for Applied Mathematicians*, Chapter 5, §5.3](https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf)

## Facts & Assumptions

**Given:** AC and the narrowly continuous finite-action solution $(\mu_t,v_t)$.

[F1] For every $\varepsilon>0$, the regularized pair has a global flow representation $\mu_t^\varepsilon=(X_t^\varepsilon)_\#\mu_0^\varepsilon$ and its flow paths satisfy $\dot\gamma=v_t^\varepsilon(\gamma)$ almost everywhere. [[lem-gaussian-regularization-of-continuity-equation]] [[lem-regularized-continuity-equation-has-characteristic-flow]]

[F2] A family of probabilities on a Polish space is tight exactly when it is relatively sequentially compact under AC; every weakly convergent sequence of probabilities on a Polish space is tight. [[thm-prokhorov-tightness-theorem-on-polish-spaces]] [[def-tight-family-of-probability-measures]] [[cor-weakly-convergent-sequences-are-tight]] [[def-polish-space]] [[def-axiom-of-choice]]

[F3] The path energy $\mathcal E(\gamma)=\int|\dot\gamma|^2$ (infinite off $AC^2$ paths) is nonnegative and lower semicontinuous on the uniform path space. [[lem-lower-semicontinuity-of-path-quadratic-energy]]

[F9] Weak convergence is convergence of integrals against bounded continuous functions; monotone convergence passes increasing nonnegative integrals to the limit. [[def-weak-convergence-of-borel-probability-measures]] [[thm-monotone-convergence-for-the-integral]]

[F4] Under AC, disintegrating the law of $(t,\gamma(t),\dot\gamma(t))$ over its standard-Borel $(t,\gamma(t))$ marginal gives a Borel conditional probability kernel. Kernel integrals are measurable. [[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]] [[def-standard-borel-space]] [[lem-finite-products-of-standard-borel-spaces-are-standard-borel]] [[thm-measurability-of-integration-against-a-kernel]] [[def-axiom-of-choice]]

[F5] Smooth compactly supported vector fields are dense in $L^2(M;\mathbb R^d)$ for the finite Radon space-time measure M. [[lem-smooth-compact-tests-dense-in-finite-radon-l2]] [[thm-borel-probability-measures-on-polish-spaces-are-inner-regular]] [[def-radon-measure-on-an-lch-space]] [[thm-choice-implies-dependent-implies-countable-choice]] [[def-dependent-choice]]

[F6] Products of finite measures, Tonelli and Fubini, and Holder's inequality justify the displayed path-space and space-time integrals. [[def-product-measure-on-sigma-finite-spaces]] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] [[thm-holder-inequality-for-integrals]]

[F7] The time-space law M is a finite Borel measure with time marginal Lebesgue measure and section integral $dt\,\mu_t(dx)$. [[lem-spacetime-law-of-a-narrow-probability-curve]]

[F8] Borel probabilities on Polish spaces are inner regular, so compact sets can capture arbitrarily high mass. [[thm-borel-probability-measures-on-polish-spaces-are-inner-regular]] [[def-polish-space]]

## Proof
1.1 Set $\varepsilon_n=1/n$ and let $\eta_n$ be the law on $C([0,T];\mathbb R^d)$ of $t\mapsto X_t^{\varepsilon_n}(X_0)$ when $X_0$ has law $\mu_0^{\varepsilon_n}$. By [F1], $(e_t)_\#\eta_n=\mu_t^{\varepsilon_n}$ and $\int\mathcal E(\gamma)d\eta_n(\gamma)=\int_0^T\!\int|v_t^{\varepsilon_n}|^2d\mu_t^{\varepsilon_n}dt\le A,$ where $A=\int_0^T\!\int|v_t|^2d\mu_tdt<\infty$. For every fixed t, $\mu_t^{\varepsilon_n}\Rightarrow\mu_t$: for bounded continuous f, first restrict y to a compact set carrying all but arbitrarily small $\mu_t$-mass using [F8], then use uniform continuity of f on a one-neighborhood of that compact and concentration of the Gaussian kernels at zero. [F1, F7, F8]

1.2 The path space C with the uniform metric is Polish: it is complete by the continuous-curve completeness fact, and rational polygonal paths are countable and dense. By [F2], the sequence of initial laws is tight. Given $\delta>0$, choose compact K with $\mu_0^{\varepsilon_n}(K^c)<\delta/2$ for all n, and choose R so $A/R<\delta/2$. The set $K_R=\{\gamma:\gamma(0)\in K,\ \mathcal E(\gamma)\le R\}$ is closed by [F3] and compact by Arzela–Ascoli: its paths obey $|\gamma(t)-\gamma(s)|\le\sqrt{R|t-s|}$ and $\sup_t|\gamma(t)|\le\sup_{x\in K}|x|+\sqrt{RT}$. Markov's inequality, which follows from $\mathbf1_{\{\mathcal E>R\}}\le\mathcal E/R$, gives $\eta_n(K_R)\ge1-\delta$. Thus $(\eta_n)$ is tight; [F2] gives a weakly convergent subsequence, still denoted $\eta_n$, with Borel probability limit $\eta$. [F2, F3, F7]

2.1 For each t, evaluation $e_t:C\to\mathbb R^d$ is continuous, so weak convergence and the marginal convergence $\mu_t^{\varepsilon_n}\Rightarrow\mu_t$ imply $(e_t)_\#\eta=\mu_t$. By [F3], $\mathcal E$ is nonnegative and lower semicontinuous. For each integer k define $g_k(\gamma)=\min\{k,\inf_{\zeta\in C}[\mathcal E(\zeta)+k\|\gamma-\zeta\|_\infty]\}$. The triangle inequality makes $g_k$ k-Lipschitz, $0\le g_k\le\mathcal E$, and $g_k$ increases with k. If $a<\mathcal E(\gamma)$, lower semicontinuity gives a neighborhood of $\gamma$ where $\mathcal E>a$; outside that neighborhood the term $k\|\gamma-\zeta\|_\infty$ exceeds a for all sufficiently large k. Thus $g_k(\gamma)\uparrow\mathcal E(\gamma)$. By [F9], weak convergence gives $\int g_kd\eta=\lim_n\int g_kd\eta_n\le\liminf_n\int\mathcal E d\eta_n$ for every k. Monotone convergence [F9] yields $\int\mathcal E d\eta\le\liminf_n\int\mathcal E d\eta_n\le A$. In particular $\eta$-almost every path is absolutely continuous with square-integrable derivative. [F2, F3, F9, step 1.1, step 1.2]

3.1 Give $[0,T]\times C$ the probability measure $\lambda=(dt/T)\otimes\eta$ and define the Borel random element $Z(t,\gamma)=(t,\gamma(t),\dot\gamma(t))$, setting the last coordinate to zero wherever the derivative limit is undefined. Measurability follows by expressing the derivative as the limit of measurable difference quotients; it agrees with the path derivative for $\lambda$-almost every pair. The law $\Pi$ of Z has $(t,x)$ marginal $M/T$ by the time-marginal identity in step 2.1. Disintegrate with the velocity as the conditioned coordinate, and put $b(t,x)=\int u\,K_{t,x}(du)$ where defined, zero otherwise. It is Borel by [F4]. Conditional Jensen and step 2.1 give $\int|b|^2dM\le T\int|u|^2d\Pi=\int\!\int_0^T|\dot\gamma(t)|^2dt\,d\eta(\gamma)\le A.$ The factor T cancels because $\Pi$ uses normalized time. [F4, F6, F7, step 2.1]

3.2 Fix a smooth compactly supported vector field $\xi(t,x)$. For a finite partition $P=(t_i)$ of mesh h, set $S_P(\gamma)=\sum_i\xi(t_i,\gamma(t_i))\cdot(\gamma(t_{i+1})-\gamma(t_i)).$ For every $AC^2$ path, bounded derivatives of $\xi$ imply $\left|\int_0^T\xi(t,\gamma(t))\cdot\dot\gamma(t)dt-S_P(\gamma)\right|\le C_\xi\left(h\sqrt T\,\mathcal E(\gamma)^{1/2}+h\mathcal E(\gamma)\right).$ Indeed on each interval $|\xi(t,\gamma_t)-\xi(t_i,\gamma_{t_i})|\le C_\xi(h+|\gamma_t-\gamma_{t_i}|)$, while Cauchy--Schwarz gives $\int_{t_i}^{t_{i+1}}|\dot\gamma|\le\sqrt{hE_i}$ and $|\gamma_t-\gamma_{t_i}|\le\sqrt{hE_i}$; summing yields the bound. Its expectation is uniform over $\eta_n$ and $\eta$ by the action bound. For fixed P with N intervals, $S_P$ is continuous and $|S_P|^2\le N\|\xi\|_\infty^2\sum_i|\gamma(t_{i+1})-\gamma(t_i)|^2$. Pathwise Cauchy--Schwarz gives $\int|\gamma(t_{i+1})-\gamma(t_i)|^2d\eta_n\le(t_{i+1}-t_i)A$, so these sums have uniformly bounded second moments under $\eta_n$ and $\eta$. Thus $S_P$ is uniformly integrable, and weak convergence plus bounded truncations gives $\int S_Pd\eta_n\to\int S_Pd\eta$. Letting h tend to zero proves convergence of the expected path integrals. [F6, step 1.1, step 2.1]

4.1 Under $\eta_n$, the path derivative is $v_t^{\varepsilon_n}(\gamma(t))$; hence its expected $\xi$-pairing is $\int\xi(t,x)\cdot v_t^{\varepsilon_n}(x)d\mu_t^{\varepsilon_n}(x)dt$. By the convolution definitions, $\int\xi\cdot v^{\varepsilon_n}dM^{\varepsilon_n}=\int_0^T\!\int v_t(y)\cdot(\xi_t*\rho_{\varepsilon_n})(y)d\mu_t(y)dt\longrightarrow\int\xi\cdot v\,dM,$ since $\xi_t*\rho_{\varepsilon_n}\to\xi_t$ uniformly and $v\in L^1(M)$ by finite action and Holder. Combining with step 3.2 and the conditional-mean definition of b gives $\int\xi\cdot b\,dM=\int\xi\cdot v\,dM$. Smooth-test density [F5] implies $b=v$ M-almost everywhere. [F1, F5, F6, F7, step 3.1, step 3.2]

5.1 The time marginals of $\eta$ are $\mu_t$, so $\int|v(t,\gamma(t))|^2dt\,d\eta=A$. By step 3.1 the conditional mean of $\dot\gamma$ given $(t,\gamma(t))$ is b, which equals v by step 4.1. Therefore $\int\!\int_0^T|\dot\gamma(t)-v_t(\gamma(t))|^2dt\,d\eta=\int\mathcal E\,d\eta+A-2\int v\cdot b\,dM=\int\mathcal E\,d\eta-A\le0.$ The left side is nonnegative, so it is zero. Thus $\dot\gamma=v_t(\gamma(t))$ for $dt\,d\eta$-almost every pair, and the expected path action equals A. Together with the time marginals this is the claimed superposition law. [F3, step 2.1, step 3.1, step 4.1] ∎
