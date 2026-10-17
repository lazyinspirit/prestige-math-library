---
id: thm-emg-xs-rn-crossing
kind: theorem
title: Regular RN crossings and local bifurcation extension
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 7
deps:
  - def-emg-xs-ingoing-rn
  - thm-emg-xs-rn-verification
  - def-emg-explicit-power-regimes
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - thm-ftc-first-part
  - def-gr-killing-field
dependency_roles:
  def-emg-xs-ingoing-rn: mathematical-premise
  thm-emg-xs-rn-verification: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  def-gr-killing-field: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.110)-(7.113), printed pp. 201-203 (PDF pp. 207-209): RN roots and extremal regime; the local Kruskal construction is proved here."
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Section 2.1, equations (2.2)-(2.8), and §3.3, equation (3.19): RN null form and coordinate-root regularity context; no maximal extension is imported."
---

## Statement

Let $M>0$, $Q^2=q_e^2+q_m^2>0$, and $M^2\ge Q^2$ in the selected ingoing
RN model [[def-emg-xs-ingoing-rn]]. Every positive root $r_H$ of $f$ is a
regular crossing: the metric is nondegenerate and the two-form is smooth
there. If $M^2>Q^2$, set
$$r_+=M+\sqrt{M^2-Q^2},\qquad \kappa:=\frac12 f'(r_+)>0.$$
For every auxiliary length $\ell_*>0$, there is a smooth local extension
chart on $(-\varepsilon,\varepsilon)^2\times S^2$ with dimensionless
coordinates $U,V$ and
$$UV=-K(r),\qquad K(r):=\frac{r-r_+}{\ell_*}e^{2\kappa h(r)},\qquad K'(r_+)=\ell_*^{-1},$$
where $h$ is smooth. The metric and two-form have smooth coefficients on
the whole chart, including both null axes. The sphere $U=V=0$ is a regular
bifurcation sphere: the extended Killing field $\partial_v$ vanishes there.
On the dense set $UV\ne0$, the source-free RN equations of the current
[[thm-emg-xs-rn-verification]] draft apply; their residual tensors therefore
vanish on the axes as well, conditionally on that exact draft interface and
its proof status. At extremality $M^2=Q^2$, the ingoing chart remains regular
at $r_H=M$, but the simple-root construction is not asserted because
$\kappa=0$.

## Facts & Assumptions

**Given:** $M>0$, $Q^2>0$, $M^2\ge Q^2$, the selected ingoing RN data, and
a fixed $\ell_*>0$ with units of length.

[F1] [[def-emg-xs-ingoing-rn]]: the $v,r$ metric block has determinant $-1$,
its global two-form is smooth for $r>0$, and the time orientation is selected
by $N=\partial_v+(f/2-1)\partial_r$.

[F2] [[def-emg-explicit-power-regimes]]: for a positive real $x$,
$x^{1/2}$ is the unique positive square root; at $x=0$ the rational regime
sets $0^{1/2}=0$. This current batch-2 definition is draft material, used
only for that exact real-root convention.

[F3] [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]:
a smooth map between open Euclidean sets whose derivative is invertible at a
point has a smooth local inverse.

[F4] [[thm-ftc-first-part]]: if an integrand is continuous, its oriented
integral from a fixed endpoint is differentiable with derivative equal to the
integrand.

[F5] [[def-gr-killing-field]]: a smooth vector field is Killing when its Lie
derivative of the metric vanishes.

[L1] [[thm-emg-xs-rn-verification]]: its current draft states
$d\mathcal F=d(\star_g\mathcal F)=0$ and
$\operatorname{Ric}=2Q(\mathcal F)$ on each static RN component with $f\ne0$.
The geometric statement is used conditionally on that exact interface; the
carrier and its typed foundation chain remain draft and have not received
independent acceptance. Its separate formal SI normalization is not used here.

[A1] The auxiliary $\ell_*$ sets the coordinate scale only. In the
subextremal case choose the local radial interval to exclude the inner root.

## Proof

1.1 In the ingoing chart the $v,r$ block is
$\begin{pmatrix}-f&1\\1&0\end{pmatrix}$, with determinant $-1$ for every
$r>0$. Its inverse is $\begin{pmatrix}0&1\\1&f\end{pmatrix}$, so the
block has one positive and one negative eigenvalue. The sphere block
$r^2\gamma$ is positive definite, and the two-form in [F1] is smooth.
Therefore every positive root is a regular crossing without using a static
coordinate at that root. [F1, given, algebra]

1.2 Assume $M^2>Q^2$. Put $s=\sqrt{M^2-Q^2}$. Since $Q^2>0$,
$s^2=M^2-Q^2<M^2$ and $s,M\ge0$, so $s<M$ and $r_-=M-s>0$. Set
$r_+=M+s$, $d=r_+-r_->0$, and $x=r-r_+$. Then
$$f(r)=\frac{(r-r_+)(r-r_-)}{r^2}=x b(r),\qquad b(r):=\frac{r-r_-}{r^2},\qquad 2\kappa=b(r_+)=\frac d{r_+^2}>0.$$
The explicit algebraic factorization
$$2\kappa-b(r)= \frac{(r-r_+)(d r-r_+r_-)}{r_+^2r^2}$$
shows that
$$p(r):=\frac1{f(r)}-\frac1{2\kappa(r-r_+)} =\frac{d r-r_+r_-}{2\kappa r_+^2(r-r_-)}$$
is smooth near $r_+$ after shrinking the interval so $r-r_-\ne0$.
Define $h(r):=\int_{r_+}^{r}p(s)\,ds$. By [F4], $h'=p$; repeated
differentiation of this identity shows $h$ is smooth, and $h(r_+)=0$.
[F2, F4, A1, algebra, construct]

2.1 Define
$$K(r):=\frac{r-r_+}{\ell_*}e^{2\kappa h(r)}.$$
It is smooth and $K'(r_+)=\ell_*^{-1}>0$. By [F3], it has a smooth local
inverse $r=\rho(z)$ near $z=0$. After shrinking again, $K'(r)>0$ and
$$\frac{f(r)K'(r)}{K(r)}=2\kappa\qquad(r\ne r_+),$$
which follows by differentiating $K$ and using the definition of $h$.
The identity extends in the equivalent form $fK'=2\kappa K$ to $r=r_+$.
[F3, step 1.2, algebra]

3.1 For the original ingoing region define $V=e^{\kappa v}$ and
$U=-K(r)e^{-\kappa v}$. The Jacobian of $(v,r)\mapsto(U,V)$ is
$\kappa K'(r)>0$, so this is a smooth local coordinate change across the
future crossing. Since $UV=-K(r)$, the inverse radial coordinate is
$r=\rho(UV)$. Differentiation gives
$$dv=\frac{dV}{\kappa V},\qquad dr=-\frac{V}{K'(r)}dU-\frac{U}{K'(r)}dV.$$
Substitute these in $-f\,dv^2+2\,dv\,dr$; the $dV^2$ coefficient cancels
by $fK'=2\kappa K$ and $K=-UV$, leaving
$$-\frac1{\kappa K'(\rho(UV))} (dU\otimes dV+dV\otimes dU).$$
This coefficient is smooth and nonzero at $U=V=0$. The sphere term
$\rho(UV)^2\gamma$ is smooth and positive definite, so the radial block
retains Lorentz signature throughout a small rectangle. To make this a local
extension chart, choose $\varepsilon>0$ so $\rho(UV)>0$ for
$(U,V)\in(-\varepsilon,\varepsilon)^2$. The original ingoing model maps
the open subset whose image satisfies $V>0$, $|U|,|V|<\varepsilon$ smoothly
and bijectively onto that open half-rectangle, by the nonzero Jacobian above.
Adjoin the full rectangle and identify that half with the old subset. A
sequence in the overlap tending inside the new rectangle but outside the
half-rectangle can only approach $V=0$; there $v=\kappa^{-1}\log V$
tends to $-\infty$, so it has no limit at any finite old point. The other
edges lie outside the open rectangle. Thus the local gluing separates the
new points from all old points, and the displayed coordinates and metric
give a smooth Hausdorff local extension. [F1, step 2.1, algebra]

4.1 The electric two-form transforms as
$$-\frac{q_e}{r^2}dv\wedge dr =-\frac{q_e}{\kappa r^2K'(r)}dU\wedge dV,$$
whose coefficient is smooth because $r_+>0$, $\kappa>0$, and $K'(r_+)>0$;
$q_m\omega$ is unchanged. Since
$dv\wedge dr=(\kappa K'(r))^{-1}dU\wedge dV$ with positive coefficient,
the product orientation extends as $dU\wedge dV\wedge\omega$.
Thus the two-form extends smoothly over both axes. The vector field transforms to
$$\partial_v=\kappa(V\partial_V-U\partial_U).$$
The extended metric coefficients depend only on $UV$, which is invariant
under this vector field; also $\mathcal L_{\partial_v}dU=-\kappa dU$ and
$\mathcal L_{\partial_v}dV=\kappa dV$, so the radial metric tensor is
invariant. By [F5] the extended field is Killing. It vanishes at $U=V=0$,
where the induced sphere metric is $r_+^2\gamma$. [F1, F5, step 3.1, algebra]

5.1 On each quadrant $UV\ne0$, define
$$t:=\frac{1}{2\kappa}\log\left|\frac VU\right|,\qquad r=\rho(UV).$$
These are smooth coordinates there: $r=\rho(UV)$ and the logarithmic ratio
independently determine the product and quotient of the nonzero coordinates,
so their Jacobian is nonzero. Differentiating gives
$$dr=-\frac{V\,dU+U\,dV}{K'(r)},\qquad dt=\frac{1}{2\kappa}\left(\frac{dV}{V}-\frac{dU}{U}\right),\qquad dt\wedge dr=\frac{1}{\kappa K'(r)}dU\wedge dV.$$
Put $\alpha=dU/U$ and $\eta=dV/V$. Since $UV=-K(r)$, the displayed
differentials give $dr=(K/K')(\alpha+\eta)$ and
$dt=(\eta-\alpha)/(2\kappa)$. Substituting in the static radial metric
$-fdt^2+f^{-1}dr^2$ of [F1], and using $fK'=2\kappa K$ from step 2.1,
the $\alpha\otimes\alpha$ and $\eta\otimes\eta$ coefficients cancel
and each cross coefficient is $f/(2\kappa^2)=K/(\kappa K')$. Therefore
the radial tensor is
$$\frac{K}{\kappa K'}(\alpha\otimes\eta+\eta\otimes\alpha) =-\frac1{\kappa K'}(dU\otimes dV+dV\otimes dU),$$
using $K=-UV$. The sphere term remains $r^2\gamma$. The two-form satisfies
$-q_e r^{-2}dt\wedge dr+q_m\omega
=-q_e(\kappa r^2K')^{-1}dU\wedge dV+q_m\omega$, exactly its expression
from step 4.1. Thus each quadrant is a static RN chart with $f\ne0$.
Since $\kappa K'(r)>0$, its orientation agrees with
$dt\wedge dr\wedge\omega$. The exact static-domain interface [L1] makes
the geometric Einstein and Maxwell residuals vanish on all four quadrants.
The metric, field and inverse metric are smooth on the full extension chart,
so the residual tensors are continuous; a continuous tensor vanishing on a
dense subset vanishes on its closure. This proves the stated conditional
equation extension to both axes and the bifurcation sphere.
[F1, L1, step 2.1, step 3.1, step 4.1, algebra]

6.1 If $M^2=Q^2$, then $r_H=M$ and
$f(r)=(1-M/r)^2$. The determinant and smooth field in [F1] remain regular
there and $f'(M)=0$, so $\kappa=0$. The construction in steps 1.2-3.1
requires $\kappa>0$ and makes no extremal bifurcation-chart claim. [F1, given, step 1.1, step 1.2, step 3.1, algebra] ∎
## Remarks

The smooth crossing and local chart are properties of the specified ingoing
model. The field-equation extension remains conditional on the current RN
verification draft and its unresolved upstream proof status; no maximality or
uniqueness statement follows.
