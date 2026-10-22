---
id: ex-gr-fx01-2
kind: example
title: "Boost normalization and affine focusing"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
physical_scope: "Pure mathematical normalization example; no field equation or empirical claim is used."
deps:
  - def-gr-fx-null-screen-geometry
  - prop-gr-fx-null-raychaudhuri
  - lem-gr-fx-null-focal-boundary-exclusion
dependency_roles:
  def-gr-fx-null-screen-geometry: mathematical-premise
  prop-gr-fx-null-raychaudhuri: mathematical-premise
  lem-gr-fx-null-focal-boundary-exclusion: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "E. Gourgoulhon and J. L. Jaramillo, A 3+1 perspective on null hypersurfaces and isolated horizons, Physics Reports 423 (2006), arXiv:gr-qc/0503113v2: §§2.6-2.7 and 5.1, 5.5-5.8"
      url: "https://arxiv.org/pdf/gr-qc/0503113"
    - title: "Edward Witten, Light Rays, Singularities, and All That, Clay Mathematics Institute lecture notes, full 106-page PDF: §§5.4-5.5 and 8.5"
      url: "https://www.claymath.org/wp-content/uploads/2022/03/WittenLectures.pdf"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice and Dependent Choice for the Lorentzian and causal
suppliers. Let $(M,g,N)$ be a smooth time-oriented Lorentzian four-manifold, and let
$S\subset M$ be a smooth embedded two-manifold without boundary with positive
induced metric. Let $U\subseteq S$ be nonempty and open and carry a smooth normalized
future null normal pair $(\ell_0,k_0)$, so $g(\ell_0,\ell_0)=g(k_0,k_0)=0$
and $g(\ell_0,k_0)=-2$. Let $F:U\times J\to M$ be a smooth null geodesic
hypersurface congruence from $U$ with initial tangent
$\partial_\lambda F(p,0)=\ell_0(p)$. Write $\theta_0(p):=\theta(p,0)$ for
the initial optical expansion along the generator from $p$. For
$f\in C^\infty(U,\mathbb R)$, define
$\widehat f(p,\lambda):=f(p)$ on the parameter domain and set
$\ell':=e^{\widehat f}\partial_\lambda F$; the initial companion is
$k'_0=e^{-f}k_0$. Then $\widehat\theta_0=e^f\theta_0$, so the sign of the
initial expansion is independent of this positive normalization. Along the
generator from $p$, the new affine parameter is
$\lambda'=e^{-f(p)}\lambda$; optical expansion, shear and Ricci contraction
scale so that the null Raychaudhuri equation is unchanged. Define
$I^+(S):=\bigcup_{s\in S}I^+(s)$,
$J^+(S):=\bigcup_{s\in S}J^+(s)$, and
$E^+(S):=J^+(S)\setminus I^+(S)$, where $I^+(s)$ and $J^+(s)$ use future
timelike and future causal reachability. A focal event and the exclusion from
$E^+(S)$ of points sufficiently close after the event are independent of
the chosen constant-along-generator boost. On any generator with
$\theta_0(p)<0$ and $\operatorname{Ric}(\ell,\ell)\ge0$ throughout the
comparison interval, the bound $\lambda_*(p):=2/|\theta_0(p)|$ rescales to
$\lambda'_* = e^{-f(p)}\lambda_*(p)$.

## Statement references

[[def-gr-fx-null-screen-geometry]]

[[prop-gr-fx-null-raychaudhuri]]

[[lem-gr-fx-null-focal-boundary-exclusion]]

## Facts & Assumptions

**Given:** Countable Choice and Dependent Choice; the time-oriented Lorentzian manifold, spacelike surface $S$, nonempty open section $U\subseteq S$, smooth normalized future null normal pair, its smooth null geodesic hypersurface congruence, and the smooth boost factor $f$ extended constantly along each generator as in the Statement.

[F1] Under a normal-frame boost, $\chi_\ell$, $\theta_\ell$ and $\sigma_\ell$ scale by $e^f$; the optical map and expansion are defined on the positive screen ([[def-gr-fx-null-screen-geometry]]).

[F2] The affine screen equation is $\theta'=-\theta^2/2-|\sigma|^2-\operatorname{Ric}(\ell,\ell)$ and the bound is $2/|\theta(0)|$ when $\theta(0)<0$ and $\operatorname{Ric}(\ell,\ell)\ge0$, provided the congruence and generator exist through that comparison parameter ([[prop-gr-fx-null-raychaudhuri]]).

[F3] The focal event is geometric and every point of the normal generator sufficiently just beyond it lies in $I^+(S)$, hence outside $E^+(S)$ ([[lem-gr-fx-null-focal-boundary-exclusion]]).

[A1] $f$ is constant as a function of affine parameter on each generator; without this restriction $e^f\ell$ need not be affine.

[A2] Countable Choice and Dependent Choice are assumed, retaining the hypotheses of the focal-boundary supplier used in [F3] ([[lem-gr-fx-null-focal-boundary-exclusion]]).

## Proof

**Given:** [F1]–[F3] and [A1]–[A2].

1.1 Since $e^f>0$, the boost preserves the future null rays, and $g(\ell',k')=e^fe^{-f}g(\ell,k)=-2$. The boost law in [F1] gives $\widehat\theta_0=e^f\theta_0$, so $\widehat\theta_0$ has the same sign as $\theta_0$. The new tangent is $\ell'=d/d\lambda'$, while $\ell=d/d\lambda$; solving $d\lambda/d\lambda'=e^f$ with both parameters zero at the initial section gives $\lambda'=e^{-f}\lambda$ because $f$ is constant along the generator. [A1, F1, algebra]

2.1 On the open parameter domain where $e^{f(p)}\lambda'\in J$, put
$\widehat F(p,\lambda'):=F(p,e^{f(p)}\lambda')$. For $X\in T_pS$,
differentiation at fixed $\lambda'$ gives
$$d_p\widehat F(X)=d_pF(X)+e^{f(p)}\lambda'(Xf)\ell.$$
The added term vanishes in the screen quotient, so at corresponding points
$\widehat A_{\lambda'}=A_{e^{f(p)}\lambda'}$. The screen metric is
unchanged because the null line is unchanged. Along the fixed generator,
$f(p)$ is constant, and differentiation with the screen connection gives
$$\widehat A'_{\lambda'}=e^{f(p)}A'_{e^{f(p)}\lambda'},\qquad \widehat B=\widehat A'\widehat A^{-1}=e^{f(p)}B.$$
Taking trace and trace-free part yields $\widehat\theta=e^f\theta$ and
$\widehat\sigma=e^f\sigma$. Therefore
$d\widehat\theta/d\lambda'=e^{2f}d\theta/d\lambda$ and
$|\widehat\sigma|^2=e^{2f}|\sigma|^2$. Tensoriality gives
$\operatorname{Ric}(\ell',\ell')=e^{2f}\operatorname{Ric}(\ell,\ell)$.
Multiplying the Raychaudhuri equation in [F2] by $e^{2f}$ proves its form is
unchanged. For a generator from $p$ with $\theta_0(p)<0$ and
$\operatorname{Ric}(\ell,\ell)\ge0$ through the comparison interval, the
bound rescales as
$$\lambda'_*(p)=\frac2{|\widehat\theta_0(p)|}=e^{-f(p)}\frac2{|\theta_0(p)|}=e^{-f(p)}\lambda_*(p).$$
[F1, F2, step 1.1, algebra]

3.1 By step 2.1, $\widehat A_{\lambda'}=A_{e^{f(p)}\lambda'}$, so its rank-loss event is the same point of $M$ and its parameter value is multiplied by $e^{-f(p)}$. Under [A2], [F3] applies: the geometric statement that points just beyond that event lie in $I^+(S)$ is unchanged by relabeling the affine parameter. Thus only the numerical affine label changes; the causal-boundary conclusion does not. [A2, F1, F3, step 1.1, step 2.1, algebra] ∎

## Remarks

This is a normalization calculation for a constant-along-generator boost. No field equation, energy condition, or empirical input is used.
