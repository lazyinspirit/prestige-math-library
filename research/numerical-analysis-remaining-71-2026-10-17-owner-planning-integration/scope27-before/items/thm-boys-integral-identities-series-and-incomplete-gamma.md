---
id: thm-boys-integral-identities-series-and-incomplete-gamma
kind: theorem
title: Boys integral, power series, recurrence, and incomplete-gamma representation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-boys-function-and-coulomb-auxiliary-recurrence, def-euler-gamma-function, thm-gaussian-integral, thm-gamma-functional-equation, thm-substitution-for-improper-integrals, thm-integration-by-parts, thm-dominated-convergence]
proof_strategy: direct
axiom_use: None. The arguments use finite integrals, dominated convergence, and a scalar substitution.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Trygve Helgaker, Molecular Integral Evaluation, 10th Sostrup Summer School lecture notes (2008)"
      url: "https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf"
      locator: "Complete 41-page PDF; Boys definition, positivity, series, recurrence, and incomplete-gamma change of variables, pp. 19–21 and 24–25."
    - title: "L. E. McMurchie and E. R. Davidson, One and Two Electron Integrals over Cartesian Gaussian Functions, UCRL-13791 (1976)"
      url: "https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf"
      locator: "Complete 23-page report; §IV.B, pp. 17–18, Boys recurrence and finite numerical branches."
---

## Statement

For every $m\in\mathbb N_0$ and real $T$, the extension in [[def-boys-function-and-coulomb-auxiliary-recurrence]] satisfies
$$0<F_m(T)\le\frac1{2m+1},\qquad F_m(0)=\frac1{2m+1},$$
$$F_m(T)=\sum_{k=0}^{\infty}\frac{(-T)^k}{k!(2m+2k+1)},\qquad \frac{d}{dT}F_m(T)=-F_{m+1}(T).$$
The upper bound in the first display is asserted for $T\ge0$. For $T>0$ the function also satisfies
$$2T F_{m+1}(T)=(2m+1)F_m(T)-e^{-T},\qquad F_m(T)=\frac{\gamma(m+\tfrac12,T)}{2T^{m+1/2}}.$$
The complete Gamma factor at a half-integer is
$$\Gamma(m+\tfrac12)=\frac{(2m)!}{4^m m!}\sqrt\pi.$$

## Facts & Assumptions

**Given:** An integer $m\ge0$, real $T$, and the integral definitions of $F_m$ and $\gamma$ from [[def-boys-function-and-coulomb-auxiliary-recurrence]].

[F1] [[def-boys-function-and-coulomb-auxiliary-recurrence]]: $F_m(T)=\int_0^1t^{2m}e^{-Tt^2}\,dt$ and $\gamma(s,T)=\int_0^T u^{s-1}e^{-u}\,du$ for $s,T>0$.

[F2] [[def-euler-gamma-function]]: for real $s>0$, $\Gamma(s)=\int_0^\infty u^{s-1}e^{-u}\,du$.

[F3] [[thm-gaussian-integral]]: $\int_{-\infty}^{\infty}e^{-x^2}\,dx=\sqrt\pi$.

[F4] [[thm-gamma-functional-equation]]: $\Gamma(s+1)=s\Gamma(s)$ for real $s>0$.

[F5] [[thm-substitution-for-improper-integrals]]: a monotone differentiable substitution on corresponding truncations preserves convergent improper integrals.

[F6] [[thm-integration-by-parts]]: on a compact interval, $\int u v'=uv|_{\partial}-\int u'v$ when the stated integrability hypotheses hold.

[F7] [[thm-dominated-convergence]]: pointwise limits may pass through a Lebesgue integral when one integrable majorant bounds the sequence almost everywhere.

## Proof

1.1 The integrand in [F1] is positive for every real $T$; when $T\ge0$ it is at most $t^{2m}$, whose integral is $1/(2m+1)$. Setting $T=0$ gives equality. On any compact real $T$-interval the exponential power series converges uniformly for $t\in[0,1]$, since its absolute terms are bounded by $\sum_k M^k/k!$ for finite $M$. Integrating the partial sums gives the displayed series. Differentiating under the integral is justified by [F7], because the derivative integrands on that compact interval are bounded by $e^M t^{2m+2}$; hence $F'_m(T)=-F_{m+1}(T)$. [given, F1, F7, algebra]

1.2 On $[0,1]$, integrate by parts [F6] with $u(t)=t^{2m+1}$ and $v'(t)=-2Tt e^{-Tt^2}$, so $v(t)=e^{-Tt^2}$. The boundary increment is $e^{-T}$, while the two integrals are $-2TF_{m+1}(T)$ and $-(2m+1)F_m(T)$. Rearranging gives $2TF_{m+1}=(2m+1)F_m-e^{-T}$. [given, F1, F6, algebra]

1.3 For $T>0$, substitute $u=Tt^2$ in [F1]. Then $dt=\frac12T^{-1/2}u^{-1/2}du$ and $t^{2m}=T^{-m}u^m$, so the integral becomes $\gamma(m+\tfrac12,T)/(2T^{m+1/2})$. The substitution theorem [F5] applies on compact truncations and the nonnegative integrands converge at the endpoints. [given, F1, F5, algebra]

2.1 In [F2], substitute $u=x^2$ for $\Gamma(1/2)$; [F5] and symmetry of the Gaussian integral [F3] give $\Gamma(1/2)=2\int_0^\infty e^{-x^2}dx=\sqrt\pi$. Repeated use of [F4] gives $\Gamma(m+\tfrac12)=\prod_{j=0}^{m-1}(j+\tfrac12)\sqrt\pi$. Multiplying the odd factors yields $(2m)!/(4^m m!)$, proving the half-integer formula, including the empty product when $m=0$. [given, F2, F3, F4, F5, algebra] ∎
