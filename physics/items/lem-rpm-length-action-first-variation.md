---
id: lem-rpm-length-action-first-variation
kind: lemma
title: "Timelike length action: arbitrary-parameter first variation"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-rpm-spacetime-observer-and-worldline, thm-rpm-proper-time-parametrization, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, lem-gr-connection-conditions-in-chart-components, def-covariant-derivative-along-a-curve, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, thm-integration-by-parts, lem-smooth-bump-between-concentric-euclidean-balls, def-gr-inverse-metric-and-musical-isomorphisms, thm-clairaut-schwarz-mixed-partials, thm-monotone-change-of-variable-for-riemann-integrals, thm-monotonicity-of-the-integral]
dependency_roles:
  def-rpm-spacetime-observer-and-worldline: mathematical-premise
  thm-rpm-proper-time-parametrization: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  lem-gr-connection-conditions-in-chart-components: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-monotone-change-of-variable-for-riemann-integrals: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
sources:
  references:
    - title: "David Tong, General Relativity, author-hosted lecture-note chapter excerpt, §1.1.1 and §1.1.2"
      url: "https://www.davidtong.org/pdfs/teaching/general-relativity/gr1.pdf"
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, Ch. 3 §3.3"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a prescribed smooth time-oriented Lorentzian four-manifold, $a<b$, and $x:[a,b]\to M$ a $C^2$ future timelike curve. Put $T=dx/ds$, $\ell=\sqrt{-g(T,T)}>0$, and for a constant $m>0$ and $c>0$ define the length action $S[x]=-mc\int_a^b\ell(s)\,ds$. Let $H(\epsilon,s)$ be a $C^2$ fixed-endpoint variation through future timelike curves for $\epsilon$ near $0$, with $H(0,s)=x(s)$, $H(\epsilon,a)=x(a)$, $H(\epsilon,b)=x(b)$, and variation field $J=\partial_\epsilon H|_0$. Then

$$\delta S=\left.\frac{d}{d\epsilon}S[H(\epsilon,\cdot)]\right|_{0}=-mc\int_a^b g\!\left(J,D_s\!\left(\frac{T}{\ell}\right)\right)ds.$$

Consequently $x$ is stationary under all such variations exactly when $D_s(T/\ell)=0$, equivalently $D_\tau U=0$ for the proper-time parameter of [[thm-rpm-proper-time-parametrization]]. The length integral has the same value under every orientation-preserving $C^1$ change of variable $s=\phi(r)$ with $\phi:[a',b']\to[a,b]$ a diffeomorphism and $\phi'>0$, namely $\int_{a'}^{b'}\ell_r(r)\,dr=\int_a^b\ell(s)\,ds$ for $T_r(r)=\phi'(r)T(\phi(r))$ and $\ell_r(r)=\sqrt{-g(T_r(r),T_r(r))}$. As a transformation of the stated $C^2$ curve and variation class, require instead that $\phi$ be an orientation-preserving $C^2$ diffeomorphism; then the stationarity equation is covariant, since $D_r(T_r/\ell_r)(r)=\phi'(r)(D_s(T/\ell))(\phi(r))$. This is a local variational statement; it makes no claim about global proper-time maximality, and the square-root action is not defined for a nonzero null tangent.

## Facts & Assumptions

**Given:** The curve, metric, fixed-endpoint variation, and $m,c>0$ in the Statement.

[F1] The Levi–Civita connection “is torsion-free and $g$-compatible” ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[F2] Differentiation under a compact integral is valid when the integrand and its parameter derivative are continuous ([[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]).

[F3] Integration by parts has the endpoint formula $\int_a^b uv'=[uv]_a^b-\int_a^b u'v$ when the functions are differentiable and their derivatives integrable ([[thm-integration-by-parts]]).

[F4] A smooth bump can be chosen equal to $1$ near an interior point and supported in a prescribed larger interval ([[lem-smooth-bump-between-concentric-euclidean-balls]]).

[F5] Nondegeneracy of $g_p$ means $v\mapsto g_p(v,\cdot)$ is an isomorphism, so a nonzero vector pairs nontrivially with some coordinate vector ([[def-gr-inverse-metric-and-musical-isomorphisms]]).

[F6] For a $C^2$ two-parameter map, mixed partial derivatives commute ([[thm-clairaut-schwarz-mixed-partials]]).

[F7] A monotone $C^1$ change of parameter transforms the Riemann integral by its derivative ([[thm-monotone-change-of-variable-for-riemann-integrals]]).

[F8] If a continuous integrable function is at least $\delta>0$ on an interval $[u,v]$ with $u<v$, then its integral there is at least $\delta(v-u)>0$ ([[thm-monotonicity-of-the-integral]]).

[F9] In a chart, metric compatibility gives $\partial_bg_{ac}=\Gamma^d{}_{ba}g_{dc}+\Gamma^d{}_{bc}g_{ad}$, and torsion-freeness is equivalent to $\Gamma^a{}_{bc}=\Gamma^a{}_{cb}$ ([[lem-gr-connection-conditions-in-chart-components]]).

[F10] Along a smooth curve the covariant derivative is the pullback connection $D_sV=(x^*\nabla)_{\partial_s}V$ ([[def-covariant-derivative-along-a-curve]]).

## Proof

1.1 For a $C^1$ field $V$ along a $C^1$ curve $y$, define $D_sV$ in coordinates by $(D_sV)^a=(V^a)'+\Gamma^a{}_{bc}(y)(y^b)'V^c$. At any parameter value replace the coordinate functions of $y$ and $V$ locally by affine functions with the same values and first derivatives. This gives a smooth curve and smooth field with the same values and first derivatives; the displayed formula agrees there with [F10]. In another chart the component formula and its transformation depend only on those values and first derivatives and the smooth chart transition, so the intrinsic smooth derivative in [F10] proves coordinate independence also for the $C^1$ data. The ordinary product rule and the compatibility identity [F9] give $(g(V,W))'=g(D_sV,W)+g(V,D_sW)$ for $C^1$ fields, since differentiating $g_{ab}(y)V^aW^b$ produces exactly the two connection terms. Derivatives at included endpoints are one-sided. Apply this definition also along each parameter curve of $H$; $H\in C^2$ makes its tangent fields $C^1$, so all derivatives below exist and are continuous. [given, F9, F10, construct, algebra]

2.1 Write $T_\epsilon=\partial_sH$ and $J=\partial_\epsilon H|_0$. Differentiating $\ell_\epsilon=\sqrt{-g(T_\epsilon,T_\epsilon)}$ and using metric compatibility gives $\partial_\epsilon\ell|_0=-g(D_\epsilon T,T)/\ell$. In a chart, the difference of the two covariant derivatives is $\Gamma^a{}_{bc}(J^bT^c-T^bJ^c)$; it vanishes because [F9] gives $\Gamma^a{}_{bc}=\Gamma^a{}_{cb}$ and coordinate mixed partials commute by [F6]. Thus $D_\epsilon T=D_sJ$. By [F6], mixed derivatives commute; [F2] permits differentiation through the compact integral, so $\delta S=mc\int_a^b g(D_sJ,T/\ell)\,ds$. [given, F1, F2, F6, F9, step 1.1, algebra]

3.1 Metric compatibility gives $\frac{d}{ds}g(J,T/\ell)=g(D_sJ,T/\ell)+g(J,D_s(T/\ell))$. Integrating and applying [F3], the boundary term vanishes because $J(a)=J(b)=0$, yielding the displayed first-variation formula. [step 1.1, step 2.1, F3, algebra]

4.1 If $D_s(T/\ell)=0$, step 3.1 makes every fixed-endpoint first variation vanish. Conversely, if this continuous vector field is nonzero at an interior point, [F5] gives a local chart component field $Z$ with $g(Z,D_s(T/\ell))$ strictly positive on a smaller interval. Multiply $Z$ by the nonnegative bump [F4], equal to $1$ near that point. Choose the support inside one chart interval and define $H(\epsilon,s)=\chi^{-1}(\chi(x(s))+\epsilon J^{\mathrm{coord}}(s))$ there for a chart $\chi$, with $H=x$ off the support. The compact support makes this a $C^2$ fixed-endpoint variation; timelikeness persists for small $|\epsilon|$ by openness and compactness. The pairing is bounded below by some $\delta>0$ on an interval where the bump equals $1$, so [F8] makes the integral in step 3.1 strictly positive and its prefactor $-mc<0$ makes the variation nonzero, a contradiction. Thus stationarity forces $D_s(T/\ell)=0$ everywhere; a nonzero endpoint value would by continuity give a nonzero interior value. [step 3.1, F4, F5, F8, construct]

5.1 Since $U=cT/\ell$ and $d\tau/ds=\ell/c$, the chain rule gives $D_s(T/\ell)=(\ell/c^2)D_\tau U$, so the two equations are equivalent. For an orientation-preserving $C^1$ diffeomorphism $s=\phi(r)$, $T_r(r)=\phi'(r)T(\phi(r))$ and $\ell_r(r)=\phi'(r)\ell(\phi(r))$; [F7] therefore gives $\int_{a'}^{b'}\ell_r(r)\,dr=\int_a^b\ell(s)\,ds$. If $\phi$ is $C^2$, composition preserves the stated $C^2$ curve and variation classes, and $T_r/\ell_r=(T/\ell)\circ\phi$ gives $$D_r(T_r/\ell_r)(r)=\phi'(r)\,D_s(T/\ell)(\phi(r)).$$ Thus the stationarity equation, and hence stationarity under the mapped fixed-endpoint variations, is covariant for class-preserving reparametrizations. [step 3.1, step 4.1, given, F7, algebra] ∎
