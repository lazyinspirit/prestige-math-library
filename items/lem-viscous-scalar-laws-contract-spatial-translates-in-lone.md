---
id: lem-viscous-scalar-laws-contract-spatial-translates-in-lone
kind: lemma
title: Viscous solutions contract spatial translates in L-one
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
deps: [thm-viscous-scalar-cauchy-problem-with-smooth-data-has-a-global-classical-solution, def-abs-value, thm-dominated-convergence, thm-integration-by-parts-with-interior-derivatives, thm-chain-rule, thm-algebra-of-derivatives, def-laplacian-of-a-c2-function, lem-viscous-approximations-obey-uniform-linfinity-and-energy-bounds, def-l-p-space-as-a-quotient-by-null-functions, lem-schwartz-cutoffs-from-the-standard-smooth-step, def-countable-choice, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]
sources:
  references:
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§4, parabolic comparison estimates for the translation modulus, pp. 230--235"
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§5.2, pp. 34--40 (viscous travelling waves and entropy selection; spatial-translate contraction is proved locally)"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) for the analytic prerequisites used below.

Let $n\ge1$, $0<\varepsilon\le1$, let $f\in C^2(\mathbb R;\mathbb R^n)$ satisfy
$f(0)=0$, and let $u_0\in C_c^\infty(\mathbb R^n)$. Let $u^\varepsilon$ be the
mild viscous solution with initial datum $u_0$ from
[[thm-viscous-scalar-cauchy-problem-with-smooth-data-has-a-global-classical-solution]].
Then for every $h\in\mathbb R^n$ and $t\in[0,T]$,
$$\|u^\varepsilon(\cdot+h,t)-u^\varepsilon(\cdot,t)\|_1\le\|u_0(\cdot+h)-u_0(\cdot)\|_1.$$
The estimate depends on $f$ only through a bound for $|f'|$ on the solution
range. Thus it is uniform for any family of such fluxes with a common derivative
bound on that range and the same initial datum
([[def-abs-value]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $0<\varepsilon\le1$, $f\in C^2$ with $f(0)=0$, $u_0\in C_c^\infty$, the viscous solution $u^\varepsilon$, a shift $h\in\mathbb R^n$, and a spatial cutoff family $\chi_R(x)=\chi(x/R)$ with $\chi\in C_c^\infty$, $0\le\chi\le1$, $\chi=1$ on $B_1$ and $\chi_R\to1$ pointwise.

[F1] The viscous solution is a classical solution with $u^\varepsilon\in C([0,T];C_b)\cap C([0,T];L^1)\cap C^{1,2}(\mathbb R^n\times(0,T))$, its range is the initial range, and it is bounded in $L^1$ uniformly on $[0,T]$ ([[thm-viscous-scalar-cauchy-problem-with-smooth-data-has-a-global-classical-solution]], [[lem-viscous-approximations-obey-uniform-linfinity-and-energy-bounds]]).

[F2] Coordinate chain and product rules give the calculus identities for $C^{1,2}$ functions ([[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-laplacian-of-a-c2-function]]). For compactly supported smooth tests, spatial integration by parts follows by enclosing the support in a box, applying [[thm-integration-by-parts-with-interior-derivatives]] in each coordinate with the others fixed, identifying the continuous slice integrals with Lebesgue integrals ([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]), and using [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]; boundary terms vanish. Applying this twice transfers the Laplacian to the test function.

[F3] Dominated convergence on compact sets and in the cutoff limit, and continuity in $C([0,T];L^1)$ permitting the limits $R\to\infty$ and $s\downarrow0$ ([[thm-dominated-convergence]], [[def-l-p-space-as-a-quotient-by-null-functions]]). The smooth cutoffs with $|D\chi_R|\le C/R$ and $|\Delta\chi_R|\le C/R^2$ are supplied by [[lem-schwartz-cutoffs-from-the-standard-smooth-step]].

## Proof

**Proof technique:** direct.

1.1 **The translate difference solves a linear equation.** Fix $h$ and put $w(t,x)=u^\varepsilon(t,x+h)-u^\varepsilon(t,x)$, so that $w\in C([0,T];L^1)\cap C^{1,2}$ by [F1]. Define $a(t,x)=\int_0^1f'(su^\varepsilon(t,x+h)+(1-s)u^\varepsilon(t,x))\,ds$; then $a$ is $C^1$ and bounded by $L_M=\sup_{|s|\le\|u_0\|_\infty}|f'(s)|$, and $f(u^\varepsilon(t,x+h))-f(u^\varepsilon(t,x))=a(t,x)w(t,x)$. Subtracting the two pointwise viscous equations and using the chain rule gives $w_t+\operatorname{div}(aw)=\varepsilon\Delta w$. [F1, F2]


2.1 **The modulus balance.** For $\delta>0$ let $\eta_\delta(r)=\sqrt{r^2+\delta^2}$, so that $\eta_\delta\in C^\infty$, $\eta_\delta\ge|r|$, $|\eta_\delta'|\le1$, and $\eta_\delta(r)-r\eta_\delta'(r)=\delta^2/\eta_\delta(r)$, $\eta_\delta''(r)=\delta^2/\eta_\delta(r)^3$. On compact subsets of $\mathbb R^n\times(0,T)$, using step 1.1 and [F2], $\partial_t\eta_\delta(w)+\operatorname{div}(a\eta_\delta(w))-\varepsilon\Delta\eta_\delta(w)=\eta_\delta'(w)\bigl(w_t+a\cdot\nabla w-\varepsilon\Delta w\bigr)+(\operatorname{div}a)\eta_\delta(w)-\varepsilon\eta_\delta''(w)|\nabla w|^2=\frac{\delta^2}{\eta_\delta(w)}\operatorname{div}a-\varepsilon\frac{\delta^2|\nabla w|^2}{\eta_\delta(w)^3}$. [F2, step 1.1]


3.1 **The limit $\delta\downarrow0$.** The second term of step 2.1 is nonpositive, and the first is bounded in absolute value by $\delta\,|\operatorname{div}a|$, which tends to $0$ in $L^1_{\mathrm{loc}}$ as $\delta\downarrow0$ because $\operatorname{div}a$ is bounded on compact sets; since $\eta_\delta(w)\to|w|$ pointwise and $|\eta_\delta(w)|\le|w|+\delta$, dominated convergence gives the distributional inequality $\partial_t|w|+\operatorname{div}(a|w|)\le\varepsilon\Delta|w|$ on $\Pi_T$. [F1, F3, step 2.1]


4.1 **Cutoff estimate.** Test step 3.1 with $\chi_R(x)$ times a nonnegative smooth time test. In distributions in time this gives $\frac{d}{dt}\int|w(t)|\chi_R\le C(L_MR^{-1}+\varepsilon R^{-2})\|w(t)\|_1$. Approximating the indicator of $(s,t)$ by smooth time cutoffs and using the $L^1$ continuity of $w$ gives, for all $0<s<t<T$, $\int|w(t)|\chi_R\le\int|w(s)|\chi_R+C(L_MR^{-1}+\varepsilon R^{-2})\int_s^t\|w(r)\|_1dr$. The time integral is finite by [F1]. Dominated convergence as $R\to\infty$ yields $\|w(t)\|_1\le\|w(s)\|_1$; continuity includes $t=T$. [F1, F2, F3, step 3.1]


5.1 **Conclusion.** Letting $s\downarrow0$ in step 4.1 and using the $C([0,T];L^1)$ continuity of $w$ and $w(0,\cdot)=u_0(\cdot+h)-u_0(\cdot)$ gives $\|u^\varepsilon(\cdot+h,t)-u^\varepsilon(\cdot,t)\|_1=\|w(t)\|_1\le\|w(0)\|_1=\|u_0(\cdot+h)-u_0(\cdot)\|_1$ for every $t\in[0,T]$. Every constant used depends on $f$ only through $L_M$, the bound for $|f'|$ on the solution range, so the estimate is uniform over such flux families. [step 4.1, F1, F3] ∎
