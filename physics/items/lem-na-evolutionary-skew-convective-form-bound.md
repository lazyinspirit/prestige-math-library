---
id: lem-na-evolutionary-skew-convective-form-bound
kind: lemma
title: "Continuity, energy cancellation, and Sobolev bounds for skew convection"
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  [
    def-na-evolutionary-skew-convective-form,
    def-na-stokes-zero-mean-pressure-and-velocity-spaces,
    def-wkp-zero-as-a-sobolev-closure,
    thm-poincare-inequality-for-w-one-p-zero,
    thm-gagliardo-nirenberg-sobolev-inequality-for-p-one,
    thm-holder-inequality-for-integrals,
    cor-vector-valued-ftc-and-lipschitz-bound,
    def-countable-choice
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Endre Süli and Tabea Tscherpel, Fully discrete finite element
        approximation of unsteady flows of implicitly constituted incompressible
        fluids, arXiv:1804.02264v1"
      url: https://arxiv.org/pdf/1804.02264
      locator: "§§3.1–3.2, skew-symmetric convective form and its cancellation on
        equal velocity slots; the Newtonian estimates are derived locally here."
    - title: "Xiaoming He, Introduction and Basic Implementation for Finite Element
        Methods, Chapter 9: Finite elements for 2D unsteady Navier–Stokes
        equations"
      url: https://bpb-us-e2.wpmucdn.com/sites.mst.edu/dist/a/189/files/2023/09/Finite_Elements_Chapter_9.pdf
      locator: "§1, pp. 7–13, weak convection and its trilinear form; all bounds used
        here are proved locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. For $d\in\{2,3\}$ and $V=H^1_0(D;\mathbb R^d)$ on a bounded Lipschitz domain, the form in [[def-na-evolutionary-skew-convective-form]] is a continuous real trilinear map $V^3\to\mathbb R$, is skew in its last two slots, and satisfies
$$|c(a;b,w)|\le C_D\|a\|_{L^2}^{1/2}\|\nabla a\|_{L^2}^{1/2}\|\nabla b\|_{L^2}\|\nabla w\|_{L^2}.$$
Consequently, if $u\in L^\infty(0,T;L^2)\cap L^2(0,T;V)$, then $c(u;u,\cdot)\in L^{4/3}(0,T;V^*)$. If $\operatorname{div}u=0$ and $d=2$, the sharper estimate
$$|c(u;u,w)|\le C_D\|u\|_{L^2}\|\nabla u\|_{L^2}\|\nabla w\|_{L^2}$$
holds. If $\operatorname{div}a=0$, the skew form agrees with the advective form $\int_D(a\cdot\nabla)b\cdot w$.

## Facts & Assumptions

**Given:** Countable Choice, a bounded connected Lipschitz domain $D\subset\mathbb R^d$, $d=2$ or $3$, the zero-boundary space $V$, and $a,b,w\in V$.

[F1] $V=H^1_0(D;\mathbb R^d)$ is the Sobolev closure of compactly supported smooth fields; its gradient seminorm is a norm equivalent to the full $H^1$ norm on bounded $D$. ([[def-na-stokes-zero-mean-pressure-and-velocity-spaces]], [[thm-poincare-inequality-for-w-one-p-zero]])

[F2] Under Countable Choice, the endpoint Sobolev inequality is $\|z\|_{d/(d-1)}\le C_d\|\nabla z\|_1$ for compactly supported smooth scalar functions on $\mathbb R^d$. Holder controls products and finite-measure inclusions. ([[thm-gagliardo-nirenberg-sobolev-inequality-for-p-one]], [[thm-holder-inequality-for-integrals]])

[F3] The form is defined by the skew difference in its definition. ([[def-na-evolutionary-skew-convective-form]])

[F4] For $z\in H^1_0(D)$ in dimension two, linewise fundamental-theorem estimates and the $H^1_0$ closure give $\|z\|_4^2\le C_D\|z\|_2\|\nabla z\|_2$. ([[def-wkp-zero-as-a-sobolev-closure]], [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]])

[F5] The one-dimensional vector-valued fundamental theorem applies on each horizontal and vertical line for the smooth compactly supported field. ([[cor-vector-valued-ftc-and-lipschitz-bound]])

[A1] Countable Choice selects the zero-boundary smooth approximation sequence used to pass inequalities to $H^1_0$. ([[def-countable-choice]], [[def-wkp-zero-as-a-sobolev-closure]])

## Proof

1.1 For real $\psi\in C_c^\infty(D)$ extended by zero, in $d=3$ apply [F2] to $\psi^4$: $\|\psi\|_6^4\le C\int|\psi|^3|\nabla\psi|\le C\|\psi\|_6^3\|\nabla\psi\|_2$. In $d=2$ apply it to $\psi^3$: $\|\psi\|_6^3\le C\int|\psi|^2|\nabla\psi|\le C\|\psi\|_4^2\|\nabla\psi\|_2\le C|D|^{1/6}\|\psi\|_6^2\|\nabla\psi\|_2$. Divide by the indicated power of $\|\psi\|_6$ when nonzero; the zero case is immediate. Thus $\|\psi\|_6\le C_D\|\nabla\psi\|_2$ in both dimensions. Choose smooth approximants by [A1]; applying the bound to their differences and identifying their $L^6$ and $L^2$ limits gives the same bound on $H^1_0(D)$, componentwise also for vector fields. Holder interpolation then gives $\|a\|_3\le\|a\|_2^{1/2}\|a\|_6^{1/2}\le C_D\|a\|_2^{1/2}\|\nabla a\|_2^{1/2}$, with $\|b\|_6+\|w\|_6\le C_D(\|\nabla b\|_2+\|\nabla w\|_2)$. [A1, F1, F2, algebra]

1.2 Setting $w=b$ in [F3] makes its two integrands identical, hence $c(a;b,b)=0$ for all $a,b\in V$. Trilinearity follows from linearity of the weak gradient and integral. [F3, algebra]

1.3 For a scalar $\psi\in C_c^\infty(D)$, extend by zero to $\mathbb R^2$. The one-dimensional fundamental theorem [F5] on horizontal and vertical lines gives $|\psi(x,y)|^2\le2\int_{\mathbb R}|\psi(s,y)\partial_x\psi(s,y)|\,ds$ and $|\psi(x,y)|^2\le2\int_{\mathbb R}|\psi(x,t)\partial_y\psi(x,t)|\,dt$. Multiplying, integrating, and applying Holder [F2] yields $\|\psi\|_4^4\le4\|\psi\|_2^2\|\partial_x\psi\|_2\|\partial_y\psi\|_2\le2\|\psi\|_2^2\|\nabla\psi\|_2^2$. Countable Choice [A1] selects a smooth sequence converging in $H^1$ to any $H^1_0$ input, so the estimate passes by norm convergence; componentwise Holder gives [F4] for vector fields. [A1, F1, F2, F4, F5]

2.1 Apply Holder with exponents $3,2,6$ from [F2] to each integral in [F3]. This gives $|c(a;b,w)|\le\frac12\|a\|_3(\|\nabla b\|_2\|w\|_6+\|\nabla w\|_2\|b\|_6)$, so step 1.1 proves the stated bound and continuity. [F2, F3, step 1.1]

3.1 If $\operatorname{div}a=0$, [A1] selects smooth compactly supported sequences $b_k\to b$ and $w_k\to w$ in $H^1_0$. For every $k$, the distributional definition of $\operatorname{div}a=0$ gives $\int_Da\cdot\nabla(b_k\cdot w_k)=0$. Expanding by the product rule gives $\int_D(a\cdot\nabla w_k)\cdot b_k=-\int_D(a\cdot\nabla b_k)\cdot w_k$. The trilinear bound in step 2.1 passes both sides to the limit, and substitution into [F3] yields $c(a;b,w)=\int_D(a\cdot\nabla b)\cdot w$. [A1, F1, F3, step 2.1, algebra]

4.1 The bound in the Statement with $a=b=u$ gives $\|c(u;u,\cdot)\|_{V^*}\le C_D\|u\|_2^{1/2}\|\nabla u\|_2^{3/2}$. The continuous quadratic map $v\mapsto c(v;v,\cdot)$ sends simple-function approximants of the Bochner $V$ representative of $u$ to simple $V^*$-valued approximants, proving strong measurability. Raising to $4/3$ and integrating in time is finite because $\|u\|_2$ is essentially bounded and $\nabla u\in L^2(0,T;L^2)$. If additionally $\operatorname{div}u=0$ in $d=2$, step 3.1 and [F4] yield $|c(u;u,w)|=|\int_D(u\cdot\nabla w)\cdot u|\le C_D\|u\|_2\|\nabla u\|_2\|\nabla w\|_2$, which is an $L^2(0,T;V^*)$ bound. [F1, F2, F4, step 2.1, step 3.1, algebra] ∎
