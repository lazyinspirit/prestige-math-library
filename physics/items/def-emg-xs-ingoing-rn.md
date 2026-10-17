---
id: def-emg-xs-ingoing-rn
kind: definition
title: Selected ingoing RN extension and time orientation
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-emg-xs-rn-data
  - def-gr-smooth-lorentzian-objects
  - def-time-orientation-and-future-causal-sets
  - lem-gr-future-causal-classification-by-a-timelike-field
dependency_roles:
  def-emg-xs-rn-data: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.106)-(7.113): RN metric, dyonic field, roots and extremal regime; the selected extension is local here."
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Section 2.1, equations (2.1)-(2.8): RN seed and null-coordinate form. Their (+---) and natural-unit conventions are not imported."
---

## Definition

Let $M,q_e,q_m\in\mathbb R$ be length parameters. Set
$Q^2:=q_e^2+q_m^2$ and
$$f(r):=1-\frac{2M}{r}+\frac{Q^2}{r^2}.$$
The selected ingoing RN manifold is
$$\mathcal M_{\mathrm{in}}:=\mathbb R_v\times(0,\infty)_r\times S^2,$$
where $v,r$ have units of metres, $S^2$ has unit round metric $\gamma$ and
outward area form $\omega$, and the signature is $(-,+,+,+)$. Orient the
product by $dv\wedge dr\wedge\omega$. Define
$$g_{\mathrm{in}}=-f(r)\,dv^2+2\,dv\,dr+r^2\gamma,\qquad \mathcal F_{\mathrm{in}}=-\frac{q_e}{r^2}\,dv\wedge dr+q_m\omega.$$
These are smooth on every $r>0$, including every positive root of $f$; the
domain excludes $r=0$. This is an extension of the static RN metric and field,
not a maximal extension or a specification of a source at the excluded
centre.

For the time orientation, define the global smooth fields
$$\ell:=-\partial_r,\qquad n:=\partial_v+\frac{f(r)}2\partial_r,\qquad N:=\ell+n=\partial_v+\left(\frac{f(r)}2-1\right)\partial_r.$$
The chosen future timelike field is $N$; the future cone is the component of
the timelike cone containing it. The well-definedness proof shows that $N$ is
timelike and that $\ell,n$ are future null. On $f\ne0$, the substitution
$v=t+r_*(r)$ with $r_*'=1/f$ identifies the metric and two-form with the
static dyonic RN formulas of [[def-emg-xs-rn-data]]. This coordinate
identification does not assert agreement of time orientations on the
interior static components: on $f>0$ the selected orientation agrees with
$\partial_t$, while on $f<0$ it is the opposite of the separate choice
$\partial_r$ made by that static definition.

## Facts & Assumptions

**Given:** Real length parameters $M,q_e,q_m$, the unit round oriented sphere,
and signature $(-,+,+,+)$.

[F1] [[def-emg-xs-rn-data]]: on each open $J\subset(0,\infty)$ where $f\ne0$,
the static metric is $-f\,dt^2+f^{-1}dr^2+r^2\gamma$ and the two-form is
$-q_e r^{-2}dt\wedge dr+q_m\omega$; its independently selected time
orientation is $\partial_t$ on $f>0$ and $\partial_r$ on $f<0$. This is a
current draft definition, used only through these exact formulas.

[F2] [[def-gr-smooth-lorentzian-objects]]: a smooth Lorentzian metric together
with a smooth everywhere timelike vector field specifies a time orientation.
[[def-time-orientation-and-future-causal-sets]] defines the future cone as
the closure of the timelike component containing that field.

[F3] [[lem-gr-future-causal-classification-by-a-timelike-field]]: for a
nonzero causal vector $Z$, future-directedness is equivalent to
$g(Z,N)<0$ for the chosen future timelike field $N$.

[A1] The coordinate domain is $r>0$. No positive-mass or nonzero-charge
hypothesis is imposed. The finite component calculations below use no choice
principle.

## Proof

1.1 In product coordinates the $v,r$ block is
$$\begin{pmatrix}-f&1\\1&0\end{pmatrix},$$
with determinant $-1$ and inverse
$$\begin{pmatrix}0&1\\1&f\end{pmatrix}.$$
Its eigenvalues have opposite signs because their product is negative. The
sphere block $r^2\gamma$ is positive definite for $r>0$, so $g_{\mathrm{in}}$
is a smooth nondegenerate Lorentzian metric on the stated product. The
two-form is smooth since $r^{-2}$ is smooth on $(0,\infty)$ and $\omega$ is
global. [F1, A1, algebra]

1.2 The product fields $\partial_v,\partial_r$ are global and smooth, hence
so are $\ell,n,N$. Direct contraction gives
$g(\ell,\ell)=g(n,n)=0$, $g(\ell,n)=-1$,
$g(N,N)=-2$, and $g(\ell,N)=g(n,N)=-1$. Thus $N$ is an everywhere timelike
field and fixes the asserted time orientation; [F3] then makes both nonzero
null fields $\ell,n$ future-directed. [F2, F3, A1, algebra]

1.3 On any component where $f\ne0$, substitute $dv=dt+f^{-1}dr$ into
$-f\,dv^2+2\,dv\,dr$. The mixed terms cancel and the radial coefficient
is $f^{-1}$, giving $-f\,dt^2+f^{-1}dr^2$. Also
$dv\wedge dr=dt\wedge dr$, so $\mathcal F_{\mathrm{in}}$ becomes the
static two-form in [F1]. The substitution is defined separately on each
component where $f\ne0$; it does not extend $r_*$ through a root. [F1, A1, algebra]

2.1 On $f>0$, $\partial_t=\partial_v$ and
$g(\partial_v,N)=-1-f/2<0$, so the exterior orientations agree. On $f<0$,
the static-coordinate vector is
$\partial_r|_t=\partial_r|_v+f^{-1}\partial_v$, and
$g(\partial_r|_t,N)=1/2-1/f>0$; hence the static definition's
$\partial_r|_t$ is past-directed under the selected ingoing orientation.
This proves the stated convention boundary and makes no identification of
the two interior time orientations. [F1, F3, step 1.2, algebra] ∎
## Remarks

The future orientation is chosen by the smooth global field $N$. The static
metric and field formulas agree on every $f\ne0$ component, while their
separate interior time-orientation convention is not inherited across the
ingoing extension. No global event-horizon or maximal-extension conclusion is
part of this definition.
