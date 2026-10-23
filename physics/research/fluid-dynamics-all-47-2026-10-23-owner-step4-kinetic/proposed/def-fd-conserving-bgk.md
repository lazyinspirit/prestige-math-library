---
id: def-fd-conserving-bgk
kind: definition
title: Single-species BGK relaxation operator
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-fd-kinetic-density
  - prop-fd-maxwellian-moments
dependency_roles:
  def-fd-kinetic-density: mathematical-premise
  prop-fd-maxwellian-moments: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Kinetic Theory, Part 2, §2.5.1, pp. 45–46"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
    - title: "Nicola Zamponi, From the Boltzmann Equation to Hydrodynamic Models,
        §3.2, pp. 11–12"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/lecture_no\
        tes/LectureNotes-Prague-2017.pdf"
verification:
  precheck: pending
---

## Definition

Adopt Countable Choice $\mathrm{AC}_\omega$, as in the kinetic-density framework. Fix the particle mass $m>0$ in kilograms, Boltzmann constant $k_B>0$ in joules per kelvin, and velocity Lebesgue measure $dv$ from the kinetic-density definition. Put $v_*=1\,\mathrm{m\,s^{-1}}$ and $\omega_3(v)=\sum_{j=0}^3(|v|/v_*)^j$. Here $v\in\mathbb R^3$ is measured in metres per second, and $f$ is a number density in velocity space with units $\mathrm{s^3\,m^{-6}}$. For a finite-valued nonnegative measurable velocity density $f:\mathbb R^3\to[0,\infty)$ with finite absolute third moment $\int\omega_3(v)f(v)\,dv<\infty$, set $n:=\int f\,dv$. Where $n>0$, set $u:=n^{-1}\int vf\,dv$ and $T:=m(3k_Bn)^{-1}\int|v-u|^2f\,dv$; then $n$ has units $\mathrm{m^{-3}}$, $u$ has units $\mathrm{m\,s^{-1}}$, and $T$ has units kelvins. Define the admissible BGK input domain
$$\mathcal D_{\rm BGK}:=\left\{f:\int\omega_3f\,dv<\infty,\ f\ge0\text{ finite-valued measurable},\ n>0,\ \int|v-u|^2f\,dv>0\right\}.$$
Fix a relaxation time $\tau>0$ measured in seconds. For $f\in\mathcal D_{\rm BGK}$, the temperature $T$ is strictly positive, $\theta:=k_BT/m$ has units $\mathrm{m^2\,s^{-2}}$, and the moment-matched Maxwellian $M[f]$ and relaxation operator are defined by the following formulas; $M[f]$ has the same units as $f$:
$$M[f](v):=n(2\pi\theta)^{-3/2}\exp(-|v-u|^2/(2\theta)),\qquad Q_{\rm BGK}(f):=\frac{M[f]-f}{\tau}.$$
The displayed formula defines the single-species Bhatnagar–Gross–Krook (BGK) relaxation operator pointwise on $\mathcal D_{\rm BGK}$, with $Q_{\rm BGK}(f)$ in units of $f$ per second. The corresponding accelerated homogeneous model with dimensionless parameter $\epsilon>0$ is $\partial_t f=Q_{\rm BGK}(f)/\epsilon$. Outside $\mathcal D_{\rm BGK}$ this item assigns no BGK operator. This is a prescribed relaxation model. It is distinct from the binary collision operator and does not by itself assert a derivation from microscopic mechanics or an inhomogeneous hydrodynamic limit.

## Definition references

[Tong, §2.5.1, full lecture notes](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf)

[Zamponi, §3.2, full lecture notes](https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/lecture_notes/LectureNotes-Prague-2017.pdf)
