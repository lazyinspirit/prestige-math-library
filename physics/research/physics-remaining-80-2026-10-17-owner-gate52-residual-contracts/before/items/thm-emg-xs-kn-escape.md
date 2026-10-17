---
id: thm-emg-xs-kn-escape
kind: theorem
title: Outer KN escape boundary on the selected ingoing model
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 9
deps:
  - lem-emg-xs-null-barrier
  - prop-emg-xs-kn-horizon-data
  - thm-emg-xs-kn-extension
  - def-emg-causal-solution-and-horizon-vocabulary
  - def-emg-explicit-power-regimes
  - lem-gr-future-causal-classification-by-a-timelike-field
  - thm-derivative-of-exponential
  - thm-chain-rule
  - thm-ftc-first-part
dependency_roles:
  lem-emg-xs-null-barrier: mathematical-premise
  prop-emg-xs-kn-horizon-data: mathematical-premise
  thm-emg-xs-kn-extension: mathematical-premise
  def-emg-causal-solution-and-horizon-vocabulary: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-ftc-first-part: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Section 3.3, equations (3.18)-(3.21): KN roots and advanced coordinates; the full angular cone estimate is supplied separately."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, KN horizon and stationary-limit discussion; the selected escape observable is proved directly here."
---

## Statement

Let $M>0$ and $M^2\ge a^2+q^2>0$ in the selected ingoing KN model. Put
$r_+=M+\sqrt{M^2-a^2-q^2}$. Let $\mathcal E$ be the set of points from
which a future piecewise-$C^1$ causal path reaches arbitrarily large $r$,
using the specified definition
[[def-emg-causal-solution-and-horizon-vocabulary]]. Then
$$\mathcal E=\{p:r(p)>r_+\},\qquad \partial_{\mathcal M_{\mathrm{in}}}\mathcal E=\{p:r(p)=r_+\}.$$
This result concerns the explicit escape observable on the selected ingoing
manifold, including the extremal case. It does not classify all maximal KN
extensions, the inner Cauchy horizon, collapse, or cosmic censorship.

## Facts & Assumptions

**Given:** The selected ingoing KN metric and orientation, with the parameter
range in the Statement.

[F1] [[thm-emg-xs-kn-extension]]: on the full sphere product,
$\Sigma=r^2+a^2\cos^2\theta>0$ and
$N=\partial_v-(1+f_0^2)\partial_r/2$ is a smooth future timelike field.
In polar coordinates the nonzero metric components are
$$g_{vv}=\frac{-\Delta+a^2\sin^2\theta}{\Sigma},\quad g_{vr}=1,\quad g_{v\psi}=-\frac{a(R-\Delta)\sin^2\theta}{\Sigma},\quad g_{r\psi}=-a\sin^2\theta,\quad g_{\psi\psi}=\frac{(R^2-a^2\Delta\sin^2\theta)\sin^2\theta}{\Sigma},\quad g_{\theta\theta}=\Sigma,$$
where $R=r^2+a^2$ and $\Delta=(r-r_+)(r-r_-)$.

[F2] [[prop-emg-xs-kn-horizon-data]]: under the stated hypotheses
$r_\pm=M\pm\sqrt{M^2-a^2-q^2}$ are positive and the outer root is $r_+$.

[F3] [[lem-emg-xs-null-barrier]]: on a collar of $r=r_+$, for future
causal $Z$ and $\tau=v-r$ one has $d\tau(Z)>0$ for $Z\ne0$,
$dr(Z)\le C|r-r_+|d\tau(Z)$, and $dr(Z)\le0$ on the root. Its proof
uses the exact KN metric, including all angular directions. For the zero
vector $d\tau(Z)=0$, so along a future causal curve piece $\tau'\ge0$.

[F4] [[lem-gr-future-causal-classification-by-a-timelike-field]]: for a
nonzero causal vector, future-directedness is equivalent to negative
pairing with a selected future timelike field.

[F5] [[thm-ftc-first-part]]: the derivative of an integral of a continuous
function is its integrand. [[thm-derivative-of-exponential]] and
[[thm-chain-rule]] give the integrating-factor derivative along each smooth
curve piece.

[L1] [[def-emg-causal-solution-and-horizon-vocabulary]], Definition (d): the escape set uses continuous future piecewise-$C^1$ causal paths, with finite $C^1$ subdivisions on compact parameter segments and nonzero future causal piece tangents. A single such path must reach arbitrarily large values of the specified radius; the escape boundary is relative to the selected model, without a conformal completion.

[A1] Square roots are nonnegative real roots, as in
[[def-emg-explicit-power-regimes]]. In KN let
$\Psi=X\partial_Y-Y\partial_X$ be the smooth sphere rotation field; it
coincides with $\partial_\psi$ off the axes.

## Proof

1.1 On a polar chart put
$$\ell=-\partial_r,\qquad n=\frac{R}{\Sigma}\partial_v+\frac{\Delta}{2\Sigma}\partial_r+\frac{a}{\Sigma}\partial_\psi.$$ 
Substitution of [F1]'s six metric entries gives $g(\ell,\ell)=g(n,n)=0$,
$g(\ell,n)=-1$, and
$$g(n,N)=-\frac12\left(\frac{\Delta}{\Sigma}+1+f_0^2\right).$$
The same components give $g(n,\partial_r)=1$ because
$R-a^2\sin^2\theta=\Sigma$, and direct contraction gives
$g(n,\partial_v)=-\Delta/(2\Sigma)$. Since
$N=\partial_v-(1+f_0^2)\partial_r/2$, these yield the displayed
$g(n,N)$. For the null identity, after multiplying by $\Sigma^3$ the
numerator is
$$R^2(-\Delta+a^2s^2)+R\Delta\Sigma-2a^2R(R-\Delta)s^2-a^2\Delta s^2\Sigma+a^2(R^2-a^2\Delta s^2)s^2=0,$$
where $s^2=\sin^2\theta$ and $\Sigma=R-a^2s^2$; the pairing
$g(\ell,n)=-1$ follows from the $rv$ and $r\psi$ terms. The vector $n$
extends smoothly across the polar axes as
$(R/\Sigma)\partial_v+(\Delta/(2\Sigma))\partial_r+(a/\Sigma)\Psi$.
For $r>r_+$, [F2] gives $\Delta>0$, so $g(n,N)<0$; [F4] makes $n$
future null. Its integral curves satisfy $dv/ds=R/\Sigma>0$,
$dr/dv=\Delta/(2R)$ and $d\psi/dv=a/R$. [F1, F2, F4, A1, algebra]

1.2 For a path starting below $r_+$, apply [F3] on its final collar segment
before a proposed first root contact. With $w=r_+-r\ge0$,
$w'\ge-Cw\tau'$, so [F5] and the chain rule make
$(e^{C\tau}w)'\ge0$ on each $C^1$ piece. The fundamental theorem of
calculus makes this product nondecreasing on each piece, and continuity
patches those inequalities across the finite partition. This contradicts
$w$ reaching zero from its positive value at the starting point of that collar segment: use the initial point if already in the collar, or the last crossing of a fixed smaller collar lower boundary otherwise.
If a path starts at the root and has a positive excursion, a component of
$\{r>r_+\}$ has a left endpoint with $r=r_+$. Restrict to an initial portion inside the collar, stopping at the first crossing of $r_++\delta/2$ if necessary, where $\delta$ is a collar width from [F3]. On that portion
$h=e^{-C\tau}(r-r_+)$ has derivative $h'\le0$ by [F3] and [F5], so the
fundamental theorem of calculus on the finitely many smooth pieces makes
$h$ nonincreasing. Continuity from its zero left-end value contradicts
positivity. Therefore no point with $r\le r_+$ can escape.
[F3, F5, L1, algebra]

2.1 Fix any $r_0>r_+$ and initial $v_0,\omega_0$. For $r\ge r_0$, set
$$v(r)=v_0+\int_{r_0}^r\frac{2R(s)}{\Delta(s)}\,ds,\qquad \alpha(r)=\int_{r_0}^r\frac{2a}{\Delta(s)}\,ds.$$
The integrands are smooth on each finite interval $[r_0,r]$ and [F5]
gives their derivatives. Rotate $\omega_0$ about the axis by $\alpha(r)$
to obtain a smooth sphere path, including if it passes through a pole.
The resulting curve has tangent
$$\gamma'(r)=\frac{2R}{\Delta}\partial_v+\partial_r+\frac{2a}{\Delta}\Psi =\frac{2\Sigma}{\Delta}n.$$
Its coefficient is positive because $\Sigma,\Delta>0$, so step 1.1 shows
it is future null. Reparameterizing by $s=r-r_0\in[0,\infty)$ gives the path domain in [L1]. It exists for every finite $r\ge r_0$ and reaches
arbitrarily large radii. Thus every point with $r>r_+$ belongs to $\mathcal E$.
[F2, F5, L1, step 1.1, A1, algebra]

3.1 Step 2.1 includes every point with $r>r_+$ in $\mathcal E$, while the
earlier collar argument excludes every point with $r\le r_+$. The boundary of this open radial
half-space in $\mathbb R_v\times(0,\infty)_r\times S^2$ is exactly
$r=r_+$. This proves the stated boundary under the conditional escape
interface [L1]. [L1, step 1.2, step 2.1, algebra] ∎
## Remarks

The current causal-vocabulary Definition (d) supplies the exact escape observable used here. The cone barrier and outward null paths are
proved for the selected metric and orientation, without a maximal-extension
argument.
