---
id: thm-emg-xs-kn-extension
kind: theorem
title: Regular ingoing KN metric, field and sphere axes
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 7
deps:
  - def-emg-xs-kn-data
  - thm-emg-xs-kn-verification
  - def-emg-xs-geometric-electrovac
  - lem-emg-lorentz-hodge-calculus
  - lem-gr-inverse-metric-is-smooth
  - def-gr-smooth-lorentzian-objects
  - def-time-orientation-and-future-causal-sets
dependency_roles:
  def-emg-xs-kn-data: mathematical-premise
  thm-emg-xs-kn-verification: mathematical-premise
  def-emg-xs-geometric-electrovac: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  lem-gr-inverse-metric-is-smooth: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Sections 2.1-2.2 and 3.3, equations (2.21), (3.18)-(3.21): charged rotating coefficients and advanced coordinates regular at roots. Their signature and units are not imported."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.124)-(7.128): rotating horizon and stationary-limit coordinate context; full-sphere regularity is proved here."
---

## Statement

Let $M,a,q\in\mathbb R$ have units of metres. Set
$$\Sigma=r^2+a^2\cos^2\theta,\quad \Delta=r^2-2Mr+a^2+q^2,\quad R=r^2+a^2,$$
and let $S^2=\{(X,Y,Z)\in\mathbb R^3:X^2+Y^2+Z^2=1\}$ have unit round
metric $\gamma$ and outward area form $\omega$. Define the global one-form
$\beta:=X\,dY-Y\,dX$ and the product
$$\mathcal M_{\mathrm{in}}:=\mathbb R_v\times(0,\infty)_r\times S^2,$$
oriented by $dv\wedge dr\wedge\omega$. On this product define
$$\begin{aligned}g_{\mathrm{in}}={}&-\left(1-\frac{2Mr-q^2}{\Sigma}\right)dv^2+2\,dv\,dr-2a\,dr\,\beta-2a\frac{2Mr-q^2}{\Sigma}dv\odot\beta+\Sigma\gamma+a^2\left(1+\frac{2Mr-q^2}{\Sigma}\right)\beta^2,\\\mathcal A_{\mathrm{in}}={}&-\frac{qr}{\Sigma}(dv-a\beta),\qquad \mathcal F_{\mathrm{in}}:=d\mathcal A_{\mathrm{in}},\end{aligned}$$
where $u\odot w=(u\otimes w+w\otimes u)/2$. The time-orientation field
is $$f_0:=1-\frac{2Mr-q^2}{\Sigma},\qquad N:=\partial_v-\frac{1+f_0^2}{2}\partial_r.$$
These formulas define smooth Lorentzian metric and field data on the whole
sphere for every $r>0$, including each positive root of $\Delta$; no
maximal extension, $r=0$ locus, or global uniqueness is asserted. On the
dense pole-free set where $\Delta\ne0$, they are related to the
Boyer-Lindquist data by the advanced coordinate change proved below.

The source-free geometric electrovac equations extend across $\Delta=0$
conditionally on the exact current interface of
[[thm-emg-xs-kn-verification]]: its geometric pole-free equations are used
on the dense complement of the roots and axes, and smoothness then extends
their residuals. That supplier is a current draft theorem and is not claimed
as independently accepted here.

## Facts & Assumptions

**Given:** Real parameters $M,a,q$, $r>0$, the unit sphere, the exact
Boyer-Lindquist KN datum and its current verification interface.

[F1] [[def-emg-xs-kn-data]]: on $\Sigma>0$, $\Delta\ne0$ and
$0<\theta<\pi$, the metric and potential are the displayed BL tensors with
$\mathcal A=-qr\Sigma^{-1}(dx^0-a\sin^2\theta\,d\phi)$; its
well-definedness calculation gives determinant $-\Sigma^2$ in
$(x^0,r,y=\cos\theta,\phi)$ and signature $(-,+,+,+)$. The definition
asserts no axis or root value.

[F2] [[def-emg-xs-geometric-electrovac]]: the selected equations are
$d\mathcal F=0$, $d(\star_g\mathcal F)=0$ and
$\operatorname{Ric}=2Q(\mathcal F)$, with signature $(-,+,+,+)$ and metric
volume form matching the chosen orientation. This definition is not a
field-equation proof.

[F3] [[thm-emg-xs-kn-verification]]: its exact geometric Statement says
those equations hold on every pole-free BL domain with $\Sigma>0$,
$\Delta\ne0$ and $0<\theta<\pi$. The carrier is a draft theorem with an
unaccepted proof; only this exact geometric interface is used conditionally.

[F4] [[lem-emg-lorentz-hodge-calculus]]: the Hodge map is the smooth map
determined by the metric and oriented metric volume form, with
$(\star_gF)_{ab}=\tfrac12(\mathrm{vol}_g)_{abcd}F^{cd}$ on two-forms.

[F5] [[lem-gr-inverse-metric-is-smooth]]: the inverse of a smooth
nondegenerate metric is smooth, so curvature and Hodge residual tensors
built from smooth metric and field data are continuous.

[F6] [[def-gr-smooth-lorentzian-objects]] and
[[def-time-orientation-and-future-causal-sets]]: a smooth Lorentzian metric
with a smooth everywhere timelike field has the time orientation selected
by that field.

[A1] $M,a,q$ are real, $r>0$, and $\Sigma=r^2+a^2Z^2>0$. No sign
condition on $M$ or $\Delta$ is imposed.

## Proof

1.1 The sphere coordinates $X,Y,Z$ and one-form $\beta=X\,dY-Y\,dX$ are
smooth globally. Since $r>0$, $\Sigma=r^2+a^2Z^2>0$; every coefficient in
the displayed product tensors is therefore smooth, and $\mathcal F_{\mathrm{in}}$
is smooth by exterior differentiation. In polar charts,
$\beta=\sin^2\theta\,d\psi$ and
$\gamma=d\theta^2+\sin^2\theta\,d\psi^2$. [A1, algebra]

1.2 Away from the axes and roots, put $\beta=\sin^2\theta\,d\psi$ and
set $$dv=dx^0+\frac R\Delta dr,\qquad d\psi=d\phi+\frac a\Delta dr.$$
This triangular coordinate change has Jacobian determinant $1$. Substitution
in the product metric gives exactly the BL metric in [F1]. Also
$$dv-a\sin^2\theta\,d\psi=dx^0-a\sin^2\theta\,d\phi+\frac{\Sigma}{\Delta}dr.$$
Thus $\mathcal A_{\mathrm{in}}$ differs from the BL potential by the radial
one-form $-qr\Delta^{-1}dr$, whose exterior derivative is zero because its
coefficient depends only on $r$. The two field strengths agree. Finally
$dv\wedge dr\wedge\omega=dx^0\wedge dr\wedge\omega$, so this change
preserves the stated orientation. [F1, A1, algebra]

2.1 On $0<\theta<\pi$, the determinant in coordinates
$(v,r,\theta,\psi)$ is $-\Sigma^2\sin^2\theta$: it is the determinant
$-\Sigma^2$ from [F1], multiplied by $(dy/d\theta)^2=\sin^2\theta$; the
coordinate change in step 1.2 has Jacobian $1$. This determinant is
nonzero when $\Delta\ne0$ and extends by continuity to $\Delta=0$, since
the product metric coefficients are smooth by step 1.1. At a polar axis
$\beta=0$ as a covector on the sphere tangent space; the radial block is
$\begin{pmatrix}-f_0&1\\1&0\end{pmatrix}$ with determinant $-1$, and the
angular block is $\Sigma\gamma$, positive definite. So the metric is
nondegenerate at the axes too. On a large-$r$ pole-free region it has
signature $(-,+,+,+)$ by [F1] and step 1.2. A continuous nondegenerate
symmetric form has locally constant signature; the product manifold is
connected, so this signature holds everywhere. [F1, step 1.1, step 1.2, A1, algebra]

3.1 The field $N$ is smooth and global by the product construction. Direct
contraction gives
$$g_{\mathrm{in}}(N,N)=-(f_0^2+f_0+1)=-\left((f_0+\tfrac12)^2+\tfrac34\right)<0.$$
Thus $N$ is everywhere timelike, and by [F6] it selects the stated smooth
time orientation on the whole product. [F6, step 1.1, step 2.1, algebra]

4.1 By [F3] the Einstein and Maxwell residual tensors vanish on the
pole-free BL domains. The coordinate and field identities in step 1.2 carry
that zero residual to the ingoing formulas on the dense set
$\Delta\ne0$, $0<\theta<\pi$. By steps 1.1, 2.1 and 3.1, the metric and
field are smooth and nondegenerate on the full product; [F4-F5] therefore
make each residual tensor continuous, including at the axes and roots. A
continuous tensor zero on a dense subset is zero on its closure. This proves
the stated conditional equation continuation exactly when the interface [F3]
is established, without extending beyond the selected ingoing model.
[F2, F3, F4, F5, step 1.1, step 1.2, step 2.1, step 3.1, algebra] ∎
## Remarks

Metric, field and orientation regularity are established directly from the
displayed product formulas. The electrovac-equation clause remains conditional
on the current pole-free KN verification draft; it adds no maximality,
uniqueness or empirical claim.
