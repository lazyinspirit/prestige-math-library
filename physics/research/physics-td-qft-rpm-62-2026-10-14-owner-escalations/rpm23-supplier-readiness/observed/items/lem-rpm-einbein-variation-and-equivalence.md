---
id: lem-rpm-einbein-variation-and-equivalence
kind: lemma
title: "Positive-einbein variation and massive/null sector equations"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-rpm-spacetime-observer-and-worldline, thm-rpm-proper-time-parametrization, lem-rpm-length-action-first-variation, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, lem-gr-connection-conditions-in-chart-components, def-covariant-derivative-along-a-curve, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, thm-integration-by-parts, lem-smooth-bump-between-concentric-euclidean-balls, thm-monotonicity-of-the-integral, thm-monotone-change-of-variable-for-riemann-integrals, thm-clairaut-schwarz-mixed-partials]
dependency_roles:
  def-rpm-spacetime-observer-and-worldline: mathematical-premise
  thm-rpm-proper-time-parametrization: mathematical-premise
  lem-rpm-length-action-first-variation: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  lem-gr-connection-conditions-in-chart-components: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-monotone-change-of-variable-for-riemann-integrals: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
sources:
  references:
    - title: "David Tong, String Theory, complete lecture notes, §1.1.2 relativistic particle and einbein"
      url: "https://www.damtp.cam.ac.uk/user/tong/string/string1.pdf"
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, Ch. 3 §3.3"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement

Let $a<b$, let $x:[a,b]\to M$ be a $C^2$ curve with parameter $s$ and $T=dx/ds$, fix $c>0$, let $e(s)>0$ be smooth, and let $m\ge0$ be constant. Take independent $C^2$ fixed-endpoint variations of $x$ and smooth interior variations of $e$. For the action

$$S_e[x,e]=\frac12\int_a^b\!\left(e^{-1}g(T,T)-em^2c^2\right)ds,$$

independent fixed-endpoint variations in $x$ and interior variations in $e$ give

$$g(T,T)+e^2m^2c^2=0,\qquad D_s(T/e)=0.$$

On the future timelike massive branch $m>0$, this constraint uniquely gives $e=\ell/(mc)$, $T/e=mU$, and the action reduces to $-mc\int\ell ds$; in proper-time gauge $s=\tau$, $e=1/m$. On the nonzero future null branch $m=0$, $P:=T/e$ is nonzero future null and $D_sP=0$; if $d\lambda=e\,ds$, then $dx/d\lambda=P$ and $D_\lambda P=0$. There is no null proper-time gauge, and the scale of $P$ remains initial data. Under an orientation-preserving $C^1$ diffeomorphism $s=\phi(r)$ between the parameter intervals, with $T_r=\phi'T$ and $e_r=\phi'e$, the einbein action is invariant.

## Facts & Assumptions

**Given:** A smooth metric-compatible torsion-free connection, $e>0$, $m\ge0$, and the fixed-endpoint variation class in the Statement.

[F1] The connection is metric-compatible and torsion-free ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[F2] For a future timelike tangent, $\ell=\sqrt{-g(T,T)}>0$ and $U=cT/\ell$ ([[thm-rpm-proper-time-parametrization]]).

[F3] Smooth parameter derivatives may pass through the compact integral ([[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]).

[F4] Integration by parts gives $\int u v'= [uv]_a^b-\int u'v$ under its stated differentiability and integrability hypotheses ([[thm-integration-by-parts]]).

[F5] A smooth bump can be chosen nonnegative, equal to $1$ near an interior point and supported in a prescribed interval ([[lem-smooth-bump-between-concentric-euclidean-balls]]).

[F6] A continuous function bounded below by $\delta>0$ on a subinterval $[u,v]$ with $u<v$ has integral at least $\delta(v-u)>0$ ([[thm-monotonicity-of-the-integral]]).

[F7] For the reduced massive action $-mc\int\ell ds$, stationarity is equivalent to $D_s(T/\ell)=0$ ([[lem-rpm-length-action-first-variation]]).

[F8] Under a monotone $C^1$ bijective reparametrization, a Riemann integral transforms by its derivative ([[thm-monotone-change-of-variable-for-riemann-integrals]]).

[F9] For a $C^2$ two-parameter map, mixed partial derivatives commute ([[thm-clairaut-schwarz-mixed-partials]]).

[F10] In a chart, torsion-freeness is equivalent to $\Gamma^a{}_{bc}=\Gamma^a{}_{cb}$ ([[lem-gr-connection-conditions-in-chart-components]]).

[F11] The covariant derivative along a curve is the pullback connection $D_sV=(x^*\nabla)_{\partial_s}V$ ([[def-covariant-derivative-along-a-curve]]).

## Proof

1.1 Differentiating the integrand with respect to $e$ gives $C(s)=-\tfrac12e^{-2}g(T,T)-\tfrac12m^2c^2$. If $C$ were nonzero at an interior point, continuity would keep its sign and magnitude at least $\delta>0$ on a smaller interval. A nonnegative bump $\varphi$ from [F5], supported there and equal to $1$ on a subinterval, then gives $|\int C\varphi|\ge\delta(v-u)>0$ by [F6]. The variation $e+\epsilon\varphi$ remains positive for small $|\epsilon|$, contradicting stationarity. Thus $C=0$ throughout the interior and by continuity at the endpoints; multiplying by $-2e^2$ yields the constraint. [given, F3, F5, F6, algebra]

1.2 For a fixed-endpoint variation field $J$, in a chart [F11] gives the difference components as $\Gamma^a{}_{bc}(J^bT^c-T^bJ^c)=0$ by [F10] and [F9], so metric compatibility gives $\delta_xS_e=\int_a^b e^{-1}g(D_sJ,T)ds$. Apply [F4] to $g(J,T/e)$; its boundary term vanishes because $J(a)=J(b)=0$, yielding $\delta_xS_e=-\int_a^bg(J,D_s(T/e))ds$. If $D_s(T/e)$ were nonzero at an interior point, nondegeneracy supplies a coordinate direction with nonzero pairing there; choose its sign and multiply by the nonnegative bump [F5], then realize it by $x_\epsilon=\chi^{-1}(\chi(x)+\epsilon J^{\mathrm{coord}})$ on that support in a chart $\chi$, and keep $x_\epsilon=x$ off the support. On a subinterval where the bump is $1$, [F6] makes the pairing integral strictly positive, so the first variation is nonzero and stationarity forces $D_s(T/e)=0$; conversely this equation makes the variation vanish. [given, F1, F4, F5, F6, F9, F10, F11, algebra]

2.1 If $m>0$ and $T$ is future timelike, the constraint gives $e=\sqrt{-g(T,T)}/(mc)=\ell/(mc)$ because $e,m,c$ are positive. By [F2], $T/e=mU$. Substitution in the action gives $-\int em^2c^2ds=-mc\int\ell ds$, and when $s=\tau$, $\ell=c$ so $e=1/m$. The Euler equation becomes $D_s(T/e)=mcD_s(T/\ell)$, so [F7] identifies it exactly with the reduced action equation. [step 1.1, step 1.2, F2, F7, algebra]

2.2 If $m=0$, the constraint is $g(T,T)=0$; on the stipulated nonzero future branch $P=T/e$ is nonzero future null. The equation in step 1.2 is $D_sP=0$. Define increasing $\lambda$ by $d\lambda=e\,ds$; then $dx/d\lambda=T/e=P$ and $D_\lambda P=e^{-1}D_sP=0$. Since $g(T,T)=0$, the positive timelike density required by the proper-time construction is absent; the null scale is therefore not fixed by a massive normalization. [step 1.1, step 1.2, given, algebra]

3.1 Under $s=\phi(r)$ with $\phi'>0$, $T_r=\phi'T$ and $e_r=\phi'e$. Substitution gives $\tfrac12(e_r^{-1}g(T_r,T_r)-e_rm^2c^2)=\phi'\tfrac12(e^{-1}g(T,T)-em^2c^2)$. By [F8] its integral in $r$ equals the original integral in $s$, proving the stated invariance for every $m\ge0$. [given, F8, algebra] ∎
