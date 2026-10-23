---
id: post-fd-bgk-relaxation
kind: postulate
title: Conserving homogeneous BGK idealization
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
physical_scope: >-
  Separately adopted, spatially homogeneous, single-species, monatomic BGK
  relaxation model with positive translational temperature, constant
  phenomenological relaxation time, and a dimensionless fast-collision scale.
  It is not the binary Boltzmann collision operator, an inhomogeneous
  hydrodynamic limit, a many-particle derivation, or an empirical claim.
deps:
  - def-fd-conserving-bgk
dependency_roles:
  def-fd-conserving-bgk: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "François Golse and C. David Levermore, Fluid Dynamics from Kinetic Equations"
      url: "https://www.cmls.polytechnique.fr/perso/golse/Exposes/HLslides2.pdf"
      locator: "Lecture 2, section II, 'The BGK Operator', PDF pp. 27–29; local Maxwellian relaxation with positive relaxation time."
    - title: "David Tong, Lectures on Kinetic Theory, Chapter 2"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
      locator: "Section 2.5.1, printed pp. 45–46; the relaxation-time approximation and its explicit non-exactness qualification."
verification:
  precheck: pending
---

## Postulate

Let $f(t,v)\ge0$ be a spatially homogeneous single-species velocity density on $v\in\mathbb R^3$, with $f\,d^3v$ a number density in $\mathrm{m^{-3}}$; thus $f$ has units $\mathrm{s^3\,m^{-6}}$. The primitive parameters are species mass $m>0$ in kilograms and Boltzmann constant $k_B>0$ in joules per kelvin. At each state with finite moments, the derived number density $n=\int_{\mathbb R^3}f\,d^3v>0$, mean velocity $u=n^{-1}\int_{\mathbb R^3}v f\,d^3v$, and positive translational temperature $T=m(3k_Bn)^{-1}\int_{\mathbb R^3}|v-u|^2f\,d^3v$ determine the Maxwellian

$$M[f](v)=n\left(\frac{m}{2\pi k_BT}\right)^{3/2}\exp\left(-\frac{m|v-u|^2}{2k_BT}\right),$$

which has the same number, momentum, and kinetic-energy moments as $f$. This moment-preserving Maxwellian is the one specified by the conserving BGK mathematical definition. A constant relaxation time $\tau>0$ in seconds is a primitive phenomenological parameter of this model. Adopt the homogeneous collision model $Q_{\rm BGK}(f)=(M[f]-f)/\tau$. For the fast-relaxation family, let $\varepsilon>0$ be dimensionless and adopt

$$\partial_t f^\varepsilon=\frac{M[f^\varepsilon]-f^\varepsilon}{\varepsilon\tau},\qquad t\ge0.$$

This is a separate phenomenological relaxation model. It does not replace or follow from the binary Boltzmann postulate, and the relaxation-time form is not asserted to be an exact microscopic collision operator. No empirical premise or measured relaxation time is asserted.

## Postulate references

Planned mathematical definition of the moment-preserving Maxwellian relaxation operator: [[def-fd-conserving-bgk|moment-preserving BGK model]].

[François Golse and C. David Levermore, Fluid Dynamics from Kinetic Equations, Lecture 2, “The BGK Operator”](https://www.cmls.polytechnique.fr/perso/golse/Exposes/HLslides2.pdf)

[David Tong, Lectures on Kinetic Theory, §2.5.1 (relaxation-time approximation and its non-exactness qualification)](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf)
