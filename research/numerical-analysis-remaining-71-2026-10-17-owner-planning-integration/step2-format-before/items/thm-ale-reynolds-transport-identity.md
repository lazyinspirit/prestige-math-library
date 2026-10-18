---
id: thm-ale-reynolds-transport-identity
kind: theorem
title: "Reynolds transport identity on an ALE moving domain"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-ale-moving-domain-map
  - lem-ale-jacobi-geometric-conservation-identity
  - def-countable-choice
  - def-bounded-piecewise-c-one-euclidean-domain
  - thm-change-of-variables-for-compact-jordan-sets
  - thm-continuous-functions-on-compact-jordan-sets-are-integrable
  - thm-jordan-boundary-criterion
  - thm-lebesgue-criterion-in-rn
  - thm-divergence-theorem-for-bounded-piecewise-c-one-domains
  - cor-mean-value-theorem
  - def-riemann-integral-over-a-jordan-set
  - thm-multidimensional-integral-properties
  - thm-jordan-content-and-indicator-integrability
  - thm-heine-cantor-metric
  - lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "J. Donea, A. Huerta, J.-Ph. Ponthot, and A. Rodríguez-Ferran, Arbitrary Lagrangian–Eulerian Methods, Encyclopedia of Computational Mechanics, Vol. 1, Chapter 14 (2004)"
      url: "https://citeseerx.ist.psu.edu/document?doi=0233bb2f3a26e2c7677cf79adc0caea4811d86bf&repid=rep1&type=pdf"
      locator: "§3, fundamental ALE equation, and §4, ALE conservation equations, printed pp. 417–420."
---

## Statement

Assume Countable Choice and $d\ge2$. Let $A_t$ be the ALE moving-domain map of [[def-ale-moving-domain-map]], and let $g(x,t)$ and its first derivatives be continuous on the moving closure. Then, for each $t\in(0,T)$,

$$\frac{d}{dt}\int_{\Omega(t)}g(x,t)\,dx=\int_{\Omega(t)}\partial_tg(x,t)\,dx+\int_{\partial\Omega(t)}g(x,t)w_m(x,t)\cdot n(x,t)\,dS.$$

Here $n$ is the outward normal from the transported finite piecewise-$C^1$ boundary presentation. This is a continuous transport identity; no discrete high-dimensional geometric conservation estimate follows from it.

## Facts & Assumptions

**Given:** Assume Countable Choice, an ALE moving-domain map $A_t$, its Jacobian $J$, its mesh velocity $w_m$, and a scalar field $g$ with the stated space-time regularity.

[A1] [[def-countable-choice]]: Countable Choice, written $\mathrm{AC}_\omega$, is the axiom that every countable family of nonempty sets has a choice function.

[F1] [[def-ale-moving-domain-map]]: $A_t$ is a $C^2$ orientation-preserving diffeomorphism, $J=\det D_\xi A_t>0$, and $w_m(A_t(\xi),t)=\partial_tA_t(\xi)$.

[F2] [[lem-ale-jacobi-geometric-conservation-identity]]: $\partial_tJ=J\,\operatorname{div}_xw_m$.

[F3] [[def-bounded-piecewise-c-one-euclidean-domain]]: the boundary has a specified finite set of compact $C^1$ faces and a compact edge set, with overlaps and edges surface-null and an outward normal on each face off the edges.

[F4] [[thm-change-of-variables-for-compact-jordan-sets]]: an injective $C^1$ map with invertible derivative sends a compact Jordan set to a compact Jordan set; for a bounded integrand, the change-of-variables formula applies when the image integrand (equivalently its pullback) is Riemann integrable.

[F5] [[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]]: under $\mathrm{AC}_\omega$, a $C^1$ vector field on a specified finite piecewise-$C^1$ domain satisfies $\int_\Omega\operatorname{div}F=\int_{\partial\Omega}F\cdot n\,dS$.

[F6] [[cor-mean-value-theorem]]: a scalar function continuous on a closed interval and differentiable in its interior has a point where its derivative equals the interval's average rate of change.

[F7] [[def-riemann-integral-over-a-jordan-set]] and [[thm-multidimensional-integral-properties]]: Jordan integrals are integrals of zero extensions on bounding rectangles, where linearity, monotonicity, and the absolute-value estimate hold.

[F8] [[thm-jordan-content-and-indicator-integrability]]: the integral of the indicator of a compact Jordan set is its finite Jordan content.

[F9] [[thm-heine-cantor-metric]]: a continuous function on a compact metric space is uniformly continuous.

[F10] [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]: every continuous real function on a compact Jordan set is Riemann integrable there.

[F11] [[thm-jordan-boundary-criterion]]: a bounded set is Jordan measurable exactly when its boundary is null, equivalently has Jordan content zero.

[F12] [[thm-lebesgue-criterion-in-rn]]: a bounded function on a closed bounding rectangle whose discontinuities lie in a null set is Riemann integrable.

[F13] [[lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]]: under $\mathrm{AC}_\omega$, a bounded Borel Riemann-integrable function on a nondegenerate closed box is Lebesgue integrable with the same integral. The volume integral in [F5] uses Lebesgue measure.

## Proof

1.1 Put $\widehat K=\overline{\widehat\Omega}$, $K_t=A_t(\widehat K)=\overline{\Omega(t)}$, and let $B_t=\partial\Omega(t)$ and $\widehat B=\partial\widehat\Omega$. Cover each compact face in either finite boundary presentation by finitely many smaller regular $C^1$ graph charts with bounded base and bounded graph derivative. For a base grid of side $\delta$, each chart needs at most $C\delta^{-(d-1)}$ base cubes; the Lipschitz bound places each graph portion in an axis-parallel $d$-cube of side $C'\delta$. The total covering volume is at most $C''\delta$, which tends to zero. Since there are finitely many faces, both boundaries are compact Jordan sets of content zero. By [F11] they are null and the open domains are Jordan measurable; by the compact-image conclusion in [F4], $K_t$ is compact Jordan. [F1, F4, F11, construct]

1.2 For any continuous $h$ on $K_t$, its zero extensions from $\Omega(t)$ and $K_t$ to a nondegenerate closed rectangle containing $K_t$ in its interior are bounded and have discontinuities only on $B_t$, a null set, so [F12] makes them integrable. Their difference is supported on $B_t$ and bounded in absolute value by a constant times $1_{B_t}$. By [F8], $\int 1_{B_t}=0$, and [F7] shows the two integrals agree. The same argument applies to $\widehat K$ and $\widehat\Omega$. By [F10], continuous integrands on the compact closures are integrable, so [F4] applies to the compact closures. Consequently, for $G(\xi,t):=g(A_t(\xi),t)J(\xi,t)$, $I(t):=\int_{\Omega(t)}g\,dx=\int_{\widehat K}G(\xi,t)\,d\xi=\int_{\widehat\Omega}G(\xi,t)\,d\xi$. [F4, F7, F8, F10, F12, step 1.1, algebra]

2.1 For small nonzero $h$, apply [F6] to $s\mapsto G(\xi,s)$ between $t$ and $t+h$. The difference quotient equals $\partial_tG(\xi,\theta_\xi)$ at an intermediate time. By [F9], $\partial_tG$ is uniformly continuous on $\widehat K$ times a compact time neighborhood of $t$, so these quotients converge uniformly in $\xi$ to $\partial_tG(\xi,t)$. The derivative and difference quotients are continuous on the compact Jordan set $\widehat K$, hence integrable by [F10]. [F7] and [F8] bound the integral of their difference by its uniform norm times $\operatorname{cont}(\widehat K)$. Since $I(t)=\int_{\widehat K}G(\xi,t)\,d\xi$ by step 1.2, $I'(t)=\int_{\widehat K}\partial_tG(\xi,t)\,d\xi$. The chain and product rules then give $I'(t)=\int_{\widehat K}J(\partial_tg+\nabla_xg\cdot w_m)+g\partial_tJ\,d\xi$. [F6, F7, F8, F9, F10, step 1.2, algebra]

3.1 Substitute [F2] into step 2.1 and use $\nabla_xg\cdot w_m+g\operatorname{div}_xw_m=\operatorname{div}_x(gw_m)$. The resulting integrand is continuous on the moving closure. Apply [F4] to the compact closures and use the open/closed integral equality from step 1.2 to obtain $I'(t)=\int_{\Omega(t)}(\partial_tg+\operatorname{div}_x(gw_m))\,dx$. [F2, F4, F10, step 1.2, step 2.1, algebra]

4.1 Set $f=\operatorname{div}_x(gw_m)$ and choose a nondegenerate closed box $Q$ containing $K_t$ in its interior. The field $gw_m$ is $C^1$ on the moving closure, so $f$ is continuous and bounded there. Its zero extension $\widetilde f$ from the open set $\Omega(t)$ to $Q$ is Borel: each strict superlevel is a relatively open subset of $\Omega(t)$, together with $Q\setminus\Omega(t)$ when the level is negative. Step 1.2 gives its Riemann integrability. By [A1] and [F13], its Riemann integral over $Q$ equals its Lebesgue integral, which is the Lebesgue integral of $f$ over $\Omega(t)$. Thus the Jordan volume integral in step 3.1 is exactly the volume integral used by [F5]. Apply [F5] to $gw_m$ on the finite piecewise-$C^1$ presentation [F3] to obtain $\int_{\Omega(t)}\operatorname{div}_x(gw_m)\,dx=\int_{\partial\Omega(t)}gw_m\cdot n\,dS$. Substitution into step 3.1 proves the asserted identity. Countable Choice is used through [F5] and [F13]. [A1, F3, F5, F13, step 1.2, step 3.1] ∎
