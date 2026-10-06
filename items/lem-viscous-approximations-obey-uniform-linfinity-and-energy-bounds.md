---
id: lem-viscous-approximations-obey-uniform-linfinity-and-energy-bounds
kind: lemma
title: Uniform L-infinity, mass and energy bounds for the viscous approximations
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
deps: [thm-viscous-scalar-cauchy-problem-with-smooth-data-has-a-global-classical-solution, prop-viscous-entropy-dissipation-identity, thm-dominated-convergence, thm-monotone-convergence-for-the-integral, thm-integration-by-parts-with-interior-derivatives, def-laplacian-of-a-c2-function, lem-schwartz-cutoffs-from-the-standard-smooth-step, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, def-convex-entropy-entropy-flux-pair, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]
sources:
  references:
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§4, parabolic approximation and L1 bounds, pp. 230--235; mass and energy cutoff identities are proved locally"
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§5.4, Proposition 5.8, (5.27)--(5.28), pp. 41--42 (energy decay with strong spatial decay assumptions); cutoff proof supplied locally"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
---

## Statement

Assume Countable Choice (CC). Let $n\ge1$, $0<\varepsilon\le1$,
$f\in C^2(\mathbb R;\mathbb R^n)$ with $f(0)=0$, and
$u_0\in C_c^\infty(\mathbb R^n)$. Let $u^\varepsilon$ be the viscous solution
constructed in
[[thm-viscous-scalar-cauchy-problem-with-smooth-data-has-a-global-classical-solution]],
so that
$u^\varepsilon\in C([0,T];C_b(\mathbb R^n))\cap C([0,T];L^1(\mathbb R^n))\cap C^{1,2}(\mathbb R^n\times(0,T))$
solves $u^\varepsilon_t+\operatorname{div}_x f(u^\varepsilon)=\varepsilon\Delta u^\varepsilon$
pointwise. Then for every $t\in[0,T]$:

(i) $\|u^\varepsilon(t)\|_\infty\le\|u_0\|_\infty$;

(ii) signed mass is conserved, $\int_{\mathbb R^n}u^\varepsilon(t,x)\,dx=\int_{\mathbb R^n}u_0(x)\,dx$,
while the $L^1$ norm is nonincreasing, $\|u^\varepsilon(t)\|_1\le\|u_0\|_1$ (in
general it is not constant);

(iii) the integrated energy identity
$$\frac12\|u^\varepsilon(t)\|_2^2+\varepsilon\int_0^t\!\!\int_{\mathbb R^n}|\nabla u^\varepsilon|^2\,dx\,ds=\frac12\|u_0\|_2^2,$$
so that $\varepsilon\int_0^T\!\!\int|\nabla u^\varepsilon|^2\le\tfrac12\|u_0\|_2^2$,
uniformly for $0<\varepsilon\le1$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $0<\varepsilon\le1$, $f\in C^2$ with $f(0)=0$, $u_0\in C_c^\infty$, the viscous solution $u^\varepsilon$, a time $t\in[0,T]$, and the constant $L_M:=\sup_{|s|\le\|u_0\|_\infty}|f'(s)|$.

[F1] The constructed solution obeys the range bound $\sup_xu^\varepsilon(t,x)\le\sup_xu_0$ and $\inf_xu^\varepsilon(t,x)\ge\inf_xu_0$, has $A_T:=\sup_{0\le s\le T}\|u^\varepsilon(s)\|_1<\infty$ by its $L^1$-continuous orbit, and solves $u^\varepsilon_t+\operatorname{div}f(u^\varepsilon)=\varepsilon\Delta u^\varepsilon$ pointwise ([[thm-viscous-scalar-cauchy-problem-with-smooth-data-has-a-global-classical-solution]]).

[F2] The viscous entropy balance holds pointwise for every convex $C^2$ entropy: $\partial_t\eta(u^\varepsilon)+\operatorname{div}q(u^\varepsilon)=\varepsilon\Delta\eta(u^\varepsilon)-\varepsilon\eta''(u^\varepsilon)|\nabla u^\varepsilon|^2$ with $q'=\eta'f'$ ([[prop-viscous-entropy-dissipation-identity]], [[def-convex-entropy-entropy-flux-pair]]).

[F3] There are smooth radial cutoffs $0\le\chi_R\le1$ with $\chi_R=1$ on $B_R$, $\chi_R=0$ outside $B_{2R}$, $\chi_R\uparrow1$ as $R\to\infty$, $|D\chi_R|\le C/R$ and $|\Delta\chi_R|\le C/R^2$: use the explicit profile $\chi_R(x)=\sigma((4-|x|^2/R^2)/3)$ from the cited construction. On $0<t<1$, differentiating its defining quotient gives $\sigma'(t)=\sigma(t)(1-\sigma(t))(t^{-2}+(1-t)^{-2})>0$, so the profile is nonincreasing in radius and $\chi_R$ increases with $R$. The derivative scaling gives the stated gradient and Laplacian bounds ([[lem-schwartz-cutoffs-from-the-standard-smooth-step]], [[def-laplacian-of-a-c2-function]]).

[F4] Spatial integration by parts against a compactly supported smooth $\chi$ follows from the one-dimensional theorem, not from a theorem on balls: enclose $\operatorname{supp}\chi$ in the interior of a box, fix all coordinates except $x_i$, and apply [[thm-integration-by-parts-with-interior-derivatives]] on that coordinate interval. The integrands are continuous, their Riemann and Lebesgue integrals agree by [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]], and Fubini ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]) integrates the identity over the remaining coordinates. Boundary terms vanish since $\chi$ vanishes near the box boundary. Summing gives $\int\chi\operatorname{div}Q=-\int Q\cdot\nabla\chi$; applying the same argument twice gives $\int\chi\Delta v=\int v\Delta\chi$ for $Q\in C^1$ and $v\in C^2$. Dominated and monotone convergence justify the indicated cutoff and nonnegative limits ([[thm-dominated-convergence]], [[thm-monotone-convergence-for-the-integral]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

## Proof

**Proof technique:** direct.

1.1 **Supremum bound.** Statement (i) is exactly the range bound of the construction theorem [F1]: $\|u^\varepsilon(t)\|_\infty\le\max\{|\sup_xu_0|,|\inf_xu_0|\}=\|u_0\|_\infty$. [F1]


1.2 **Mass identity with cutoffs.** Multiply the pointwise equation by a cutoff $\chi_R$ of [F3], integrate first from a positive lower time, and then pass that time to zero by $C([0,T];L^1)$ continuity: since $\chi_R$ vanishes outside a compact set, integration by parts is legitimate and gives $\int u^\varepsilon(t)\chi_R-\int u_0\chi_R=\int_0^t\!\!\int\bigl(f(u^\varepsilon)\cdot\nabla\chi_R+\varepsilon u^\varepsilon\Delta\chi_R\bigr)$; by [F1] the right side is bounded in absolute value by $(C L_MR^{-1}+\varepsilon C R^{-2})\int_0^t\|u^\varepsilon(s)\|_1ds\le C_T(R^{-1}+\varepsilon R^{-2})$. [F1, F3, F4]


1.3 **Positive-time energy identity.** Put $M=\|u_0\|_\infty$. Fix $0<s<t\le T$, take the convex entropy $\eta(r)=r^2/2$ and its flux $q(r)=\int_0^r a f'(a)\,da$, and integrate the balance [F2] against $\chi_R$ over $[s,t]\times\mathbb R^n$. This is legitimate on each compact support because $u^\varepsilon\in C^{1,2}$ for positive times. The resulting identity is $$\frac12\int |u^\varepsilon(t)|^2\chi_R+\varepsilon\int_s^t\!\!\int|\nabla u^\varepsilon|^2\chi_R=\frac12\int |u^\varepsilon(s)|^2\chi_R+\int_s^t\!\!\int q(u^\varepsilon)\cdot\nabla\chi_R+\varepsilon\int_s^t\!\!\int\eta(u^\varepsilon)\Delta\chi_R.$$ On the solution range, $|q(u^\varepsilon)|\le L_M M|u^\varepsilon|/2$ and $\eta(u^\varepsilon)\le M|u^\varepsilon|/2$, so both cutoff errors tend to zero by [F1, F3]; the endpoint energies converge by dominated convergence. Since $\chi_R\uparrow1$, monotone convergence applies to the nonnegative dissipation and gives $$\frac12\|u^\varepsilon(t)\|_2^2+\varepsilon\int_s^t\!\!\int|\nabla u^\varepsilon|^2=\frac12\|u^\varepsilon(s)\|_2^2.$$ In particular the dissipation is finite on every positive-time interval. [F1, F2, F3, F4]


2.1 **Signed mass and $L^1$ bound.** In step 1.2 the right side tends to $0$ when $R\to\infty$, while $u^\varepsilon(t)\chi_R\to u^\varepsilon(t)$ and $u_0\chi_R\to u_0$ pointwise with $|u^\varepsilon(t)|\chi_R\le|u^\varepsilon(t)|$ and $|u_0|\chi_R\le|u_0|$, and both majorants are integrable by [F1]; dominated convergence gives $\int u^\varepsilon(t)=\int u_0$, which is signed-mass conservation. For the $L^1$ bound let $\eta_\delta(s)=\sqrt{s^2+\delta^2}-\delta$, a convex $C^2$ function with $0\le\eta_\delta\le|\cdot|$, $\eta_\delta\uparrow|\cdot|$ as $\delta\downarrow0$, and let $q_\delta'=\eta_\delta'f'$ with $q_\delta(0)=0$. Testing the balance [F2] with $\chi_R$, integrating first on a positive-time interval and passing its lower endpoint to zero by the Lipschitz entropy and $L^1$ continuity and using $|q_\delta(s)|\le L_M|s|$ and $\eta_\delta(s)\le|s|$ on the range of [F1], the cutoff terms vanish in the limit $R\to\infty$ exactly as in step 1.2, and dropping the nonpositive dissipation gives $\int\eta_\delta(u^\varepsilon(t))\le\int\eta_\delta(u_0)$; monotone convergence in $\delta\downarrow0$ yields $\|u^\varepsilon(t)\|_1\le\|u_0\|_1$. [F1, F2, F4, step 1.2]


3.1 **Passage to the initial time.** The construction gives $u^\varepsilon\in C([0,T];L^1)$ and $\|u^\varepsilon(s)\|_\infty\le M=\|u_0\|_\infty$. Hence $$\|u^\varepsilon(s)-u_0\|_2^2\le 2M\|u^\varepsilon(s)-u_0\|_1\longrightarrow0\qquad(s\downarrow0),$$ so the endpoint energy in step 1.3 converges to $\frac12\|u_0\|_2^2$. Letting $s\downarrow0$, monotone convergence for the nonnegative space-time dissipation gives the identity in (iii) for every $t>0$; at $t=0$ it is immediate. Dropping the nonnegative final energy yields the stated uniform bound for $0<\varepsilon\le1$. [F1, step 1.3, F4] ∎
