---
id: pthm-rpm-spherical-charge-size-bound
kind: physics-theorem
title: Coulomb-exterior support-radius energy bound
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A conditional static charge-size inequality for a body with the stated rest-frame support radius, an exactly Coulomb vacuum exterior, and total rest energy equal to that exterior field energy plus nonnegative remaining energy. It is not a universal radius theorem for arbitrary charge distributions, and it makes no mass inference for an ideal point charge."
empirical_premises: []
deps:
  - def-inertial-frame-and-inertial-chart
  - def-em-vacuum-energy-flux
  - def-em-si-conventions
  - def-rpm-body-moments
  - pthm-em-coulomb-solution
  - pthm-em-point-self-energy-divergence
  - thm-monotone-convergence-for-the-integral
dependency_roles:
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-em-vacuum-energy-flux: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-rpm-body-moments: formulation-prerequisite
  pthm-em-coulomb-solution: physical-result
  pthm-em-point-self-energy-divergence: physical-result
  thm-monotone-convergence-for-the-integral: mathematical-premise
sources:
  references:
    - title: "Konstantin K. Likharev, Essential Graduate Physics: Classical Electrodynamics, §1.3 Scalar Potential and Electric Field Energy"
      url: https://phys.libretexts.org/Bookshelves/Electricity_and_Magnetism/Essential_Graduate_Physics_-_Classical_Electrodynamics_%28Likharev%29/01%3A_Electric_Charge_Interaction/1.03%3A_Scalar_Potential_and_Electric_Field_Energy
      locator: "Full HTML section §1.3, Eqs. (1.34)–(1.35) Coulomb field/potential and (1.65)–(1.68) field energy with a uniform sphere's interior/exterior calculation; the point-charge interpretation is context only."
verification: {}
---

## Statement

Let an extended static charged body have a nonempty compact rest-frame stress-energy support $\operatorname{supp}_0T$ in the flat-body moment convention of [[def-rpm-body-moments]], total charge $q\in\mathbb R$ coulombs, and finite total rest energy $Mc^2$ with $M>0$ kilograms. Use a momentum-rest inertial frame $(o;e_0,e_1,e_2,e_3)$ of [[def-inertial-frame-and-inertial-chart]], with $p=Mc\,e_0$ and $o$ the stipulated body center. Its rest spatial chart has coordinates $\mathbf x=(x^1,x^2,x^3)$; define $r:=|\mathbf x|:=\sqrt{(x^1)^2+(x^2)^2+(x^3)^2}$, $\widehat{\mathbf r}:=\mathbf x/r$ for $r>0$, and $\overline B_\ell(0):=\{\mathbf x:r\le\ell\}$. Define the body support radius $\ell:=\max_{\mathbf x\in\operatorname{supp}_0T}|\mathbf x|>0$, in metres. Thus the material support lies in $\overline B_\ell(0)$; $\ell$ is its exact radius about $o$, and the exterior region below is defined from this support, not inferred from spherical symmetry. Use the SI constants of [[def-em-si-conventions]], including $c$ in metres per second and $\varepsilon_0>0$. On the open exterior spatial region $\Omega_\ell:=\{\mathbf x\in\mathbb R^3:r>\ell\}$, the static field is assumed to obey
$$\mathbf E(\mathbf x)=\frac{q}{4\pi\varepsilon_0r^2}\widehat{\mathbf r},\qquad \mathbf B=0.$$
Let $u(\mathbf x)$ be the time-independent vacuum energy density of [[def-em-vacuum-energy-flux]] on this exterior region and define $E_{\rm ext}:=\int_{\Omega_\ell}u(\mathbf x)\,d^3x$. Assume the total rest energy is the sum of this exterior field energy and a remaining material-plus-interior contribution $E_{\rm rem}\ge0$. Then
$$Mc^2\ge\frac{q^2}{8\pi\varepsilon_0\ell},\qquad \ell\ge\frac{q^2}{8\pi\varepsilon_0Mc^2}.$$
The exact Coulomb exterior and nonnegative energy accounting are hypotheses. The theorem does not infer an exterior field from spherical symmetry alone. No identification of field energy with an ideal point particle's rest mass is made.

## Facts & Assumptions

**Given:** The static rest-frame body, radius $\ell>0$, total charge $q$, total rest mass $M>0$, exact exterior field stated above, and $Mc^2=E_{\rm ext}+E_{\rm rem}$ with $E_{\rm rem}\ge0$.

[A1] The rest-energy accounting is adopted for this item: $Mc^2=E_{\rm ext}+E_{\rm rem}$ with the remaining material-plus-interior energy $E_{\rm rem}\ge0$.

[A2] The exterior electric field is the Coulomb field of charge $q$ for every $r>\ell$, with no exterior magnetic field; this is an adopted physical condition of the present theorem, not a consequence of spherical symmetry alone. [[pthm-em-coulomb-solution]]

[F1] In vacuum, the electromagnetic energy density is $u=\varepsilon_0|\mathbf E|^2/2+|\mathbf B|^2/(2\mu_0)$, with the positive SI constant $\varepsilon_0$. [[def-em-vacuum-energy-flux]]; [[def-em-si-conventions]]

[F2] For the point-charge Coulomb field centered at spatial coordinate $\mathbf x_0$, the energy in the finite shell $\delta\le|\mathbf x-\mathbf x_0|\le R$ is $q^2(1/\delta-1/R)/(8\pi\varepsilon_0)$. Here $\mathbf x_0=\mathbf 0$, the spatial coordinate of the inertial-frame origin event $o$. [[pthm-em-point-self-energy-divergence]]

[F3] If nonnegative measurable functions $f_n$ increase pointwise to $f$, then $\int f_n$ increases to $\int f$ ([[thm-monotone-convergence-for-the-integral]]).


## Proof

**Proof technique:** direct.

1.1 From [A2] and [F1], the exterior energy density is $u(\mathbf x)=\varepsilon_0|\mathbf E(\mathbf x)|^2/2\ge0$ on $\Omega_\ell$. For each positive integer $n$, set $\delta_n:=\ell+\ell/n$, $R_n:=\ell(n+2)$, and $A_n:=\{\mathbf x:\delta_n\le r\le R_n\}$. These measurable shells increase to $\Omega_\ell$, and their nonnegative energy integrands increase pointwise to $u\,\mathbf 1_{\Omega_\ell}$. By [F3], $E_{\rm ext}=\lim_{n\to\infty}\int_{A_n}u\,d^3x$. Applying [F2] with $\delta=\delta_n$ and $R=R_n$ gives $\int_{A_n}u\,d^3x=q^2(1/\delta_n-1/R_n)/(8\pi\varepsilon_0)$, whose limit is $q^2/(8\pi\varepsilon_0\ell)$, including $q=0$. This applies only under the stated exact exterior-field and energy-accounting hypotheses, not to every spherical profile. [given, A2, F1, F2, F3, algebra]

2.1 By [A1], $Mc^2=E_{\rm ext}+E_{\rm rem}\ge E_{\rm ext}$. Substitute step 1.1 to get $Mc^2\ge q^2/(8\pi\varepsilon_0\ell)$. Since $M,c,\ell,\varepsilon_0$ are positive, multiplication by $\ell$ and division by $Mc^2$ yield $\ell\ge q^2/(8\pi\varepsilon_0Mc^2)$. [given, A1, step 1.1, algebra] ∎

## Remarks

The energy is a field contribution on the exterior region only. Nonnegative interior/material energy and the specified total-energy accounting are load-bearing assumptions. The point-charge divergence result [[pthm-em-point-self-energy-divergence]] explicitly does not identify this field energy with particle rest mass.
