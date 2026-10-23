---
id: def-fd-kinetic-density
kind: definition
title: Nonnegative kinetic density and moment domain
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-countable-choice
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-lebesgue-measure-is-a-complete-measure
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - def-product-measure-on-sigma-finite-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
dependency_roles:
  def-countable-choice: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  thm-lebesgue-measure-is-a-complete-measure: mathematical-premise
  prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets: mathematical-premise
  def-product-measure-on-sigma-finite-spaces: mathematical-premise
  thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Kinetic Theory, Part 2, §§2.2.2–2.4.2, pp. 23–43"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
    - title: "François Golse, The Boltzmann Equation and Its Hydrodynamic Limits, §§3.1–3.2, pp. 19–25"
      url: "https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf"
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Definition

Adopt Countable Choice, denoted $\mathrm{AC}_\omega$. Let $I\subseteq\mathbb R$ be an open time interval measured in seconds, let $L_1,L_2,L_3>0$ be periods measured in metres, and let
$$\Omega:=\prod_{j=1}^3(\mathbb R/L_j\mathbb Z).$$
Write $C:=\prod_{j=1}^3[0,L_j)$ and let $\pi:\mathbb R^3\to\Omega$ be the quotient map. Define $dx$ on Borel subsets $E\subseteq\Omega$ by
$$dx(E):=\lambda_3(C\cap\pi^{-1}(E)),$$
and use its completion as the spatial measure. Thus $dx$ is the pushforward of three-dimensional Lebesgue measure restricted to the half-open fundamental cell $C$, is not divided by the cell volume, and satisfies $dx(\Omega)=L_1L_2L_3$. Velocity $v\in\mathbb R^3$ is measured in metres per second and $dv$ is three-dimensional Lebesgue measure. Time integration uses Lebesgue measure $dt$ on $I$; product integrals use the corresponding product measures. In this definition $f\,dx\,dv$ is a number count, so a density $f$ has units $\mathrm m^{-3}(\mathrm{m\,s^{-1}})^{-3}$.

Set $v_*:=1\,\mathrm{m\,s^{-1}}$. For $k=2,3$, define the dimensionless polynomial weight $\omega_k(v):=\sum_{j=0}^k(|v|/v_*)^j$. A kinetic density is a finite-valued measurable function $f:I\times\Omega\times\mathbb R^3\to[0,\infty)$ for which, at every $(t,x)$ under discussion,
$$\int_{\mathbb R^3}\omega_3(v)f(t,x,v)\,dv<\infty.$$
Define number density $n:=\int f\,dv$ and mass density $\rho:=mn$ for a fixed particle mass $m>0$ in kilograms. Where $n>0$, define
$$u:=\frac1n\int_{\mathbb R^3}vf\,dv,\qquad c:=v-u,\qquad T:=\frac{m}{3k_Bn}\int_{\mathbb R^3}|c|^2f\,dv,$$
for a fixed Boltzmann constant $k_B>0$ in joules per kelvin. The velocity is $u$ in metres per second and the temperature is $T$ in kelvins. Where also $T>0$, define the candidate monatomic Maxwellian
$$M_{n,u,T}(v):=n\left(\frac{m}{2\pi k_BT}\right)^{3/2} \exp\!\left(-\frac{m|v-u|^2}{2k_BT}\right).$$
Its normalization and moments are established by a separate proposition; this formula is a definition here. At $n=0$, $u$ and $T$ are undefined, and statements using them assume $n>0$. A zero centered second moment gives $T=0$ and does not define the positive-temperature Maxwellian.

Define the pressure tensor, heat-flux vector, and kinetic-energy density by
$$P:=m\int_{\mathbb R^3}c\otimes c\,f\,dv,\qquad q:=\frac m2\int_{\mathbb R^3}|c|^2c\,f\,dv,\qquad E:=\frac m2\int_{\mathbb R^3}|v|^2f\,dv.$$
Here $(a\otimes b)_{ij}=a_i b_j$. The finite absolute third moment makes these integrals finite. Their SI units are respectively pascals, watts per square metre, and joules per cubic metre. This is the monatomic translational model: no internal rotational or vibrational degrees of freedom and no isotropy assumption are included.

## Definition references

[[def-countable-choice]]

[[product-measures-and-the-fubini-tonelli-theorems]]

[Tong, §§2.2.2–2.4.2, full lecture notes](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf)

[Golse, §§3.1–3.2, full chapter](https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf)
