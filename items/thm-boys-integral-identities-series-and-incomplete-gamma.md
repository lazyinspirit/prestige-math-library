---
id: thm-boys-integral-identities-series-and-incomplete-gamma
kind: theorem
title: Boys integral, power series, recurrence, and incomplete-gamma representation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-boys-function-and-coulomb-auxiliary-recurrence, def-real-exponential-function-and-e, def-euler-gamma-function, thm-gaussian-integral, thm-gamma-functional-equation, thm-substitution-for-improper-integrals, thm-integration-by-parts, thm-dominated-convergence, lem-mean-value-theorem-on-closed-interval, thm-derivative-of-exponential, lem-derivative-algebra-and-chain-rules]
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

[F5] [[thm-substitution-for-improper-integrals]]: a monotone differentiable surjection between intervals preserves convergent improper integrals when its derivative and the target integrand are locally Riemann integrable and the proper change-of-variable hypotheses hold on every compact truncation. Each singular end is treated separately.

[F6] [[thm-integration-by-parts]]: on a compact interval, $\int u v'=uv|_{\partial}-\int u'v$ when the stated integrability hypotheses hold.

[F7] [[thm-dominated-convergence]]: pointwise limits may pass through a Lebesgue integral when one integrable majorant bounds the sequence almost everywhere.

[F8] [[lem-mean-value-theorem-on-closed-interval]]: a scalar difference quotient equals a derivative value at an intermediate point of the parameter interval.

[F9] [[def-real-exponential-function-and-e]]: $\exp(x)=\sum_{k=0}^{\infty}x^k/k!$ for real $x$, with convergence for every $x$.

[L9] [[thm-derivative-of-exponential]] and [[lem-derivative-algebra-and-chain-rules]]: the exponential is smooth with derivative itself; finite sums, products and polynomial compositions obey the product, power and chain rules. Applying these rules one coordinate or parameter at a time justifies every displayed finite Gaussian derivative.

## Proof

1.1 The integrand in [F1] is positive for every real $T$; when $T\ge0$ it is at most $t^{2m}$, whose integral is $1/(2m+1)$. Setting $T=0$ gives equality. By [F9], on a compact parameter interval $[-M,M]$ the exponential-series partial sums converge pointwise on $[0,1]$ and are bounded in absolute value by $e^M$; [F7] therefore permits integration term by term and gives the displayed series. For a fixed $T$, choose $M>|T|+1$ and $|h|<1$. By [F8] and the chain rule, the difference quotient of $e^{-Tt^2}$ in $T$ is $-t^2e^{-\xi t^2}$ for some $\xi$ between $T$ and $T+h$, so after multiplication by $t^{2m}$ it is bounded by $e^M t^{2m+2}$. Dominated convergence [F7] passes the difference-quotient limit through the integral and gives $F'_m(T)=-F_{m+1}(T)$. [given, F1, F7, F8, F9, algebra, L9]

1.2 On $[0,1]$, integrate by parts [F6] with $u(t)=t^{2m+1}$ and $v'(t)=-2Tt e^{-Tt^2}$, so $v(t)=e^{-Tt^2}$. The boundary increment is $e^{-T}$, while the two integrals are $-2TF_{m+1}(T)$ and $-(2m+1)F_m(T)$. Rearranging gives $2TF_{m+1}=(2m+1)F_m-e^{-T}$. [given, F1, F6, algebra]

1.3 For $T>0$, use the increasing surjection $t=\sqrt{u/T}$ from $(0,T]$ to $(0,1]$. Its derivative is continuous on compact truncations away from zero, as are the integrands, so the proper substitution hypotheses of [F5] hold there. Then $dt=\frac12T^{-1/2}u^{-1/2}du$ and $t^{2m}=T^{-m}u^m$, giving $\gamma(m+\tfrac12,T)/(2T^{m+1/2})$ on passage to the zero endpoint. The original integrand is bounded there, and the transformed one is bounded by a constant times $u^{m-1/2}$, whose exponent is greater than $-1$; both improper integrals therefore converge. [given, F1, F5, algebra]

2.1 In [F2], substitute $u=x^2$ for $\Gamma(1/2)$. This is an increasing differentiable surjection of $(0,\infty)$ onto itself, with continuous derivative and continuous integrands on compact truncations away from zero; hence [F5] applies separately at zero and infinity. The transformed integrand is $2e^{-x^2}$, integrable at both ends by [F3], so symmetry gives $\Gamma(1/2)=2\int_0^\infty e^{-x^2}dx=\sqrt\pi$. Repeated use of [F4] gives $\Gamma(m+\tfrac12)=\prod_{j=0}^{m-1}(j+\tfrac12)\sqrt\pi$. Multiplying the odd factors yields $(2m)!/(4^m m!)$, proving the half-integer formula, including the empty product when $m=0$. [given, F2, F3, F4, F5, algebra] ∎
