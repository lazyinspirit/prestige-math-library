---
id: thm-ale-one-dimensional-reynolds-transport-identity
kind: theorem
title: "Choice-free one-dimensional ALE Reynolds transport identity"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-ale-moving-domain-map
  - lem-ale-jacobi-geometric-conservation-identity
  - thm-change-of-variables-for-compact-jordan-sets
  - thm-jordan-boundary-criterion
  - thm-lebesgue-criterion-in-rn
  - thm-ftc-second-part
  - thm-continuous-functions-on-compact-jordan-sets-are-integrable
  - cor-mean-value-theorem
  - def-riemann-integral-over-a-jordan-set
  - thm-multidimensional-integral-properties
  - thm-jordan-content-and-indicator-integrability
  - thm-heine-cantor-metric
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "J. Donea, A. Huerta, J.-Ph. Ponthot, and A. Rodríguez-Ferran, Arbitrary Lagrangian–Eulerian Methods, Encyclopedia of Computational Mechanics, Vol. 1, Chapter 14 (2004)"
      url: "https://citeseerx.ist.psu.edu/document?doi=0233bb2f3a26e2c7677cf79adc0caea4811d86bf&repid=rep1&type=pdf"
      locator: "§§2–4, ALE map, relative velocity, and transport form, printed pp. 415–420."
---

## Statement

Let $d=1$ and let $A_t$ be an ALE moving-domain map of [[def-ale-moving-domain-map]], so $\widehat\Omega$ is a finite union of bounded intervals with pairwise disjoint closures and $\partial_\xi A_t>0$. For every $C^1$ scalar field $g$ on the moving closure,

$$\frac{d}{dt}\int_{\Omega(t)}g(x,t)\,dx=\int_{\Omega(t)}\partial_tg(x,t)\,dx+\sum_{x\in\partial\Omega(t)}g(x,t)w_m(x,t)n(x),$$

where $n=-1$ at each left endpoint and $n=+1$ at each right endpoint. This dimension-one branch is choice-free.

## Facts & Assumptions

**Given:** A one-dimensional ALE map, a finite union of bounded reference intervals, and a $C^1$ scalar field $g$ on the moving closure.

[F1] [[def-ale-moving-domain-map]]: in dimension one the reference domain is a finite union of intervals with compact closure, $J=\partial_\xi A_t>0$, and $w_m(A_t(\xi),t)=\partial_tA_t(\xi)$.

[F2] [[lem-ale-jacobi-geometric-conservation-identity]]: $\partial_tJ=J\,\partial_xw_m$.

[F3] [[thm-change-of-variables-for-compact-jordan-sets]]: an injective $C^1$ map with invertible derivative sends a compact Jordan set to a compact Jordan set; for a bounded integrand, the image and pullback are Riemann integrable together, and when they are the formula uses the absolute Jacobian determinant.

[F4] [[thm-ftc-second-part]]: if $H$ is differentiable on a compact interval and $H'$ is integrable, then $\int_a^bH'(x)\,dx=H(b)-H(a)$.

[F5] [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]: every continuous real function on a compact Jordan set is Riemann integrable there.

[F6] [[cor-mean-value-theorem]]: a scalar function continuous on a closed interval and differentiable in its interior has a point where its derivative equals the interval's average rate of change.

[F7] [[def-riemann-integral-over-a-jordan-set]] and [[thm-multidimensional-integral-properties]]: Jordan integrals are integrals of zero extensions on bounding rectangles, where linearity, monotonicity, and the absolute-value estimate hold.

[F8] [[thm-jordan-content-and-indicator-integrability]]: the integral of the indicator of a compact Jordan set is its finite Jordan content.

[F9] [[thm-heine-cantor-metric]]: a continuous function on a compact metric space is uniformly continuous.

[F10] [[thm-jordan-boundary-criterion]]: a bounded set is Jordan measurable exactly when its boundary is null, equivalently has Jordan content zero.

[F11] [[thm-lebesgue-criterion-in-rn]]: a bounded function on a closed bounding rectangle whose discontinuities lie in a null set is Riemann integrable.

## Proof

1.1 Put $\widehat K=\overline{\widehat\Omega}$, $K_t=A_t(\widehat K)=\overline{\Omega(t)}$, and let $B_t=\partial\Omega(t)$ and $\widehat B=\partial\widehat\Omega$. These boundaries are finite endpoint sets, hence compact. Covering each point by intervals of arbitrarily small total length shows that both have Jordan content zero and are compact Jordan sets. By [F10] the boundaries are null and the two open domains are Jordan measurable. [F1, F10, construct]


2.1 For any continuous $h$ on $K_t$, its zero extensions from $\Omega(t)$ and $K_t$ to a nondegenerate closed interval containing $K_t$ in its interior are bounded and can be discontinuous only at $B_t$. By [F11] they are integrable. Their difference is supported on $B_t$ and bounded in absolute value by a constant times $1_{B_t}$; [F8] gives $\int 1_{B_t}=0$, so [F7] shows their integrals agree. The same argument applies on $\widehat K$ and $\widehat\Omega$. The map image in [F3] is compact Jordan, and [F5] makes $g(\cdot,t)$ and $G(\cdot,t)$ integrable on the compact closures. Change of variables on those closures, followed by the open/closed equalities just proved, gives $I(t)=\int_{\widehat K}G(\xi,t)\,d\xi=\int_{\widehat\Omega}G(\xi,t)\,d\xi$, where $G(\xi,t):=g(A_t(\xi),t)J(\xi,t)$. [F3, F5, F7, F8, F11, step 1.1, algebra]


3.1 For small nonzero $h$, apply [F6] to $s\mapsto G(\xi,s)$ between $t$ and $t+h$. The difference quotient equals $\partial_tG(\xi,\theta_\xi)$ at an intermediate time. By [F9], $\partial_tG$ is uniformly continuous on $\widehat K$ times a compact time neighborhood of $t$, so these quotients converge uniformly in $\xi$ to $\partial_tG(\xi,t)$. The latter and each quotient are integrable on $\widehat K$ by [F5]; [F7] and [F8] bound the integral of their difference by its uniform norm times $\operatorname{cont}(\widehat K)$. Since $I(t)=\int_{\widehat K}G(\xi,t)\,d\xi$ by step 2.1, it follows that $I'(t)=\int_{\widehat K}\partial_tG(\xi,t)\,d\xi$. [F5, F6, F7, F8, F9, step 2.1, algebra]


4.1 The chain and product rules together with [F2] give $I'(t)=\int_{\widehat K}J(\partial_tg+\partial_xg\,w_m+g\,\partial_xw_m)(A_t(\xi),t)\,d\xi$. This integrand is continuous on the compact reference closure; [F3] changes variables on the compact closures, and step 2.1 converts the resulting physical-domain integrals to open-domain integrals. Thus $I'(t)=\int_{\Omega(t)}[\partial_tg+\partial_x(gw_m)](x,t)\,dx$. [F1, F2, F3, F5, step 2.1, step 3.1, algebra]


5.1 The function $x\mapsto g(x,t)w_m(x,t)$ is differentiable on each compact image interval and its derivative is continuous, hence integrable there by [F5]. Apply [F4] to obtain $\int_{\alpha_j}^{\beta_j}\partial_x(gw_m)\,dx=g(\beta_j,t)w_m(\beta_j,t)-g(\alpha_j,t)w_m(\alpha_j,t)$. Summing right endpoints with normal $+1$ and left endpoints with normal $-1$ proves the boundary term. No choice axiom is used. [F4, F5, step 4.1, algebra] ∎

