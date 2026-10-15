---
id: pthm-rpm-spherical-charge-size-bound
kind: physics-theorem
title: Spherical charge exterior-energy size bound
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A conditional static spherical-body energy inequality when its vacuum exterior is exactly Coulomb and its total rest energy includes that exterior field energy plus nonnegative remaining energy. It is not a universal radius theorem for arbitrary charge distributions, and it makes no mass inference for an ideal point charge."
empirical_premises: []
deps:
  - def-em-vacuum-energy-flux
  - def-em-si-conventions
  - def-rpm-body-moments
  - pthm-em-coulomb-solution
  - pthm-em-point-self-energy-divergence
dependency_roles:
  def-em-vacuum-energy-flux: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-rpm-body-moments: formulation-prerequisite
  pthm-em-coulomb-solution: physical-result
  pthm-em-point-self-energy-divergence: physical-result
sources:
  references:
    - title: "Konstantin K. Likharev, Essential Graduate Physics: Classical Electrodynamics, §1.3 Scalar Potential and Electric Field Energy"
      url: https://phys.libretexts.org/Bookshelves/Electricity_and_Magnetism/Essential_Graduate_Physics_-_Classical_Electrodynamics_%28Likharev%29/01%3A_Electric_Charge_Interaction/1.03%3A_Scalar_Potential_and_Electric_Field_Energy
      locator: "Full HTML section §1.3, Eqs. (1.34)–(1.35) Coulomb field/potential and (1.65)–(1.68) field energy with a uniform sphere's interior/exterior calculation; the point-charge interpretation is context only."
verification: {}
---

## Statement

Let an extended static spherical charged body have radius $\ell>0$ metres, total charge $q\in\mathbb R$ coulombs, and finite total rest energy $Mc^2$ with $M>0$ kilograms. Use the flat-body moment convention of [[def-rpm-body-moments]] in its rest frame and the SI constants of [[def-em-si-conventions]], including $c$ in metres per second and $\varepsilon_0>0$. Its vacuum exterior field is assumed to be exactly
$$\mathbf E(r)=\frac{q}{4\pi\varepsilon_0r^2}\widehat{\mathbf r},\qquad \mathbf B=0,\qquad r\ge\ell.$$
Let $u$ be the vacuum energy density of [[def-em-vacuum-energy-flux]] and define $E_{\rm ext}:=\int_{|x|\ge\ell}u(x)\,d^3x$. Assume the total rest energy is the sum of this exterior field energy and a remaining material-plus-interior contribution $E_{\rm rem}\ge0$. Then
$$Mc^2\ge\frac{q^2}{8\pi\varepsilon_0\ell},\qquad \ell\ge\frac{q^2}{8\pi\varepsilon_0Mc^2}.$$
The exact Coulomb exterior and nonnegative energy accounting are hypotheses. The theorem does not infer an exterior field from spherical symmetry alone. No identification of field energy with an ideal point particle's rest mass is made.

## Facts & Assumptions

**Given:** The static rest-frame body, radius $\ell>0$, total charge $q$, total rest mass $M>0$, exact exterior field stated above, and $Mc^2=E_{\rm ext}+E_{\rm rem}$ with $E_{\rm rem}\ge0$.

[A1] The rest-energy accounting is adopted for this item: $Mc^2=E_{\rm ext}+E_{\rm rem}$ with the remaining material-plus-interior energy $E_{\rm rem}\ge0$.

[A2] The exterior electric field is the Coulomb field of charge $q$ for every $r\ge\ell$, with no exterior magnetic field; this is an adopted physical condition of the present theorem, not a consequence of spherical symmetry alone. [[pthm-em-coulomb-solution]]

[F1] In vacuum, the electromagnetic energy density is $u=\varepsilon_0|\mathbf E|^2/2+|\mathbf B|^2/(2\mu_0)$, with the positive SI constant $\varepsilon_0$. [[def-em-vacuum-energy-flux]]; [[def-em-si-conventions]]

[F2] For the Coulomb field, the energy in the shell $\delta\le r\le R$ is $q^2(1/\delta-1/R)/(8\pi\varepsilon_0)$, and its limit as $R\to\infty$ is $q^2/(8\pi\varepsilon_0\delta)$. [[pthm-em-point-self-energy-divergence]]


## Proof

**Proof technique:** direct.

1.1 From [A2] and [F1], the exterior energy density is $u(r)=\varepsilon_0|\mathbf E(r)|^2/2$. On any shell $\ell\le r\le R$, [F2] therefore gives $E_{\rm ext}(\ell,R)=q^2(1/\ell-1/R)/(8\pi\varepsilon_0)$. Taking $R\to\infty$ in this exact expression yields $E_{\rm ext}=q^2/(8\pi\varepsilon_0\ell)$, including $q=0$. This applies only under the stated exact exterior-field and energy-accounting hypotheses, not to every spherical profile. [given, A2, F1, F2, algebra]

2.1 By [A1], $Mc^2=E_{\rm ext}+E_{\rm rem}\ge E_{\rm ext}$. Substitute step 1.1 to get $Mc^2\ge q^2/(8\pi\varepsilon_0\ell)$. Since $M,c,\ell,\varepsilon_0$ are positive, multiplication by $\ell$ and division by $Mc^2$ yield $\ell\ge q^2/(8\pi\varepsilon_0Mc^2)$. [given, A1, step 1.1, algebra] ∎

## Remarks

The energy is a field contribution on the exterior region only. Nonnegative interior/material energy and the specified total-energy accounting are load-bearing assumptions. The point-charge divergence result [[pthm-em-point-self-energy-divergence]] explicitly does not identify this field energy with particle rest mass.
