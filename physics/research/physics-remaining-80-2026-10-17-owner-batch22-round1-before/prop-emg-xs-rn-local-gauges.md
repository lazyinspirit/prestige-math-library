---
id: prop-emg-xs-rn-local-gauges
kind: proposition
title: Dyonic RN gauges and global exactness obstruction
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - def-emg-xs-rn-data
  - lem-emg-lorentz-hodge-calculus
  - thm-stokes-theorem-for-smooth-singular-chains
dependency_roles:
  def-emg-xs-rn-data: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.106)-(7.113): RN metric, dyonic field and charge flux."
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Section 2.1, equations (2.1)-(2.2): RN seed field and gauge context; the patch and Stokes arguments are given here."
---

## Statement

Let $J\subset(0,\infty)$ be nonempty and open, and suppose
$f(r)=1-2M/r+(q_e^2+q_m^2)/r^2\ne0$ on $J$. On the static dyonic RN
product $\mathbb R_t\times J\times S^2$, orient by $dt\wedge dr\wedge\omega$
and use the field $\mathcal F=-q_e r^{-2}dt\wedge dr+q_m\omega$. For every
sphere $S_r$,
$$\int_{S_r}\mathcal F=4\pi q_m,\qquad \int_{S_r}\star_g\mathcal F=4\pi q_e.$$
On the north and south patches it has smooth potentials
$$\mathcal A_N=-\frac{q_e}{r}dt+q_m(1-\cos\theta)d\phi,\qquad \mathcal A_S=-\frac{q_e}{r}dt-q_m(1+\cos\theta)d\phi,$$
with $d\mathcal A_N=d\mathcal A_S=\mathcal F$ and
$\mathcal A_S-\mathcal A_N=-2q_m d\phi$ on the overlap. A global smooth
real one-form potential on this sphere-containing product exists exactly
when $q_m=0$. No circle-bundle normalization or charge quantization is
imposed.

## Facts & Assumptions

**Given:** The static RN metric, field, orientation and sphere patches.

[F1] [[def-emg-xs-rn-data]]: on $f\ne0$,
$g=-fdt^2+f^{-1}dr^2+r^2\gamma$ and
$\mathcal F=-q_e r^{-2}dt\wedge dr+q_m\omega$, where
$\omega=\sin\theta\,d\theta\wedge d\phi$ is the outward unit-sphere area
form.

[F2] [[lem-emg-lorentz-hodge-calculus]]: the Hodge map is defined by the
metric, orientation and inverse metric and is smooth on the stated
nondegenerate Lorentzian chart.

[F3] [[thm-stokes-theorem-for-smooth-singular-chains]]: for a finite smooth
singular chain $c$ and smooth form $\eta$,
$\int_c d\eta=\int_{\partial c}\eta$.

[A1] $J$ is nonempty; $q_e,q_m,M$ are real length parameters. In a polar chart,
$x=r\sin\theta\cos\phi$, $y=r\sin\theta\sin\phi$,
$z=r\cos\theta$. The oriented sphere is a finite smooth singular
2-cycle. Potentials are used only on their named patches; $J$ contains only
radii with $f\ne0$. The coordinates $t,r,x,y,z$ have length units and
angles are dimensionless.

## Proof

1.1 Pulling [F1]'s $\mathcal F$ back to $S_r$ removes the electric term and
leaves $q_m\omega$. Since
$$\int_{S^2}\omega=\int_0^{2\pi}\int_0^\pi\sin\theta\,d\theta\,d\phi=4\pi,$$
the first flux is $4\pi q_m$. The inverse static metric has
$g^{tt}=-1/f$, $g^{rr}=f$, and the oriented volume form is
$r^2\sin\theta\,dt\wedge dr\wedge d\theta\wedge d\phi$. In the component
formula of [F2],
$(dt\wedge dr)^{tr}=g^{tt}g^{rr}=-1$ and
$\omega^{\theta\phi}=1/(r^4\sin\theta)$. The oriented volume component is
$\epsilon_{\theta\phi tr}=r^2\sin\theta$, so that formula gives
$$\star_g(dt\wedge dr)=-r^2\omega,\qquad \star_g\omega=r^{-2}dt\wedge dr,$$
for either sign of $f$. Therefore
$\star_g\mathcal F=q_e\omega+q_m r^{-2}dt\wedge dr$; its sphere pullback
integrates to $4\pi q_e$. [F1, F2, A1, algebra]

1.2 On $U_N=\{r+z>0\}$ and $U_S=\{r-z>0\}$, respectively,
$$ (1-\cos\theta)d\phi=\frac{x\,dy-y\,dx}{r(r+z)},\qquad (1+\cos\theta)d\phi=\frac{x\,dy-y\,dx}{r(r-z)}.$$
The denominators are nonzero on the indicated patches, so both one-forms
are smooth there. Differentiation gives
$d[(1-\cos\theta)d\phi]=d[-(1+\cos\theta)d\phi]=\omega$ and
$d(-q_e r^{-1}dt)=-q_e r^{-2}dt\wedge dr$. Thus both potentials
differentiate to [F1]. Subtracting them gives
$\mathcal A_S-\mathcal A_N=-2q_m d\phi$ on the overlap.
[F1, A1, algebra]

2.1 If a global smooth one-form $\mathcal A$ with $d\mathcal A=\mathcal F$
existed and $q_m\ne0$, apply [F3] to the oriented sphere cycle $S_r$:
$$4\pi q_m=\int_{S_r}\mathcal F=\int_{S_r}d\mathcal A =\int_{\partial S_r}\mathcal A=0,$$
since $\partial S_r=0$. This contradiction rules out a global potential
when $q_m\ne0$. [F1, F3, step 1.1, A1, algebra]

3.1 If $q_m=0$, the one-form $\mathcal A=-q_e r^{-1}dt$ is smooth and
global on $\mathbb R_t\times J\times S^2$, and its exterior derivative is
$\mathcal F$. This proves the exact criterion. [F1, A1, algebra] ∎
## Remarks

The two-form is globally defined even when its local potentials do not
combine into one global real one-form. No regular source at $r=0$ or
quantization condition follows.
