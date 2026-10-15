---
id: post-td-common-bulk-constitutive-law
kind: postulate
title: Common constitutive entropy law for a designated bulk family
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: A separately designated nonrelativistic macroscopic bulk branch of a fixed material law, with fixed species and intensive constitutive parameters, common SI and energy/entropy reference conventions, and omitted interface, surface and long-range interaction terms; exact finite-body or arbitrary gravitating-system extensivity is not asserted.
deps: [def-td-equilibrium-state-domain, def-td-si-quantities, post-td-bulk-additivity, post-td-concave-fundamental-entropy]
dependency_roles:
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  post-td-bulk-additivity: formulation-prerequisite
  post-td-concave-fundamental-entropy: formulation-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapter 2, section 2.6.4 and equations 2.103–2.112
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf
---

## Postulate

In addition to the general tagged bulk family of [[post-td-bulk-additivity]] and its entropy law in [[post-td-concave-fundamental-entropy]], designate a common-constitutive-law bulk branch as follows. Fix a material constitution $c$ with an ordered species list and fixed intensive constitutive parameters. Let $C\subseteq D_c$ be a nonempty open single-phase chart in the fixed dimensionless SI numerical coordinates of [[def-td-equilibrium-state-domain]] and [[def-td-si-quantities]], and assume it is a positive cone: $\lambda x\in C$ for all $x\in C$ and $\lambda>0$. Use the adopted $C^2$ entropy with $S_{c,U}>0$ on this chart.

For every $\lambda>0$, admit scaling of every $x\in C$, so $C\subseteq B_{c,\lambda}$, and retain the distinct scaled-system tag $c^{(\lambda)}$. The image $C^{(\lambda)}:=\delta_\lambda(C)$ is a chart in $D_{c^{(\lambda)}}$. Adopt a coordinate-preserving material-law transport $j_{c,\lambda}:C^{(\lambda)}\to C$ defined in numerical coordinates by $j_{c,\lambda}(y)=y$, and adopt entropy preservation under that transport:

$$S_{c^{(\lambda)}}(y)=S_c(j_{c,\lambda}(y))\qquad(y\in C^{(\lambda)}).$$

The transport identifies the constitutive numerical law used for bodies in this branch; it does not equate their physical identities or material tags. It presumes a common ordered species list, units, internal-energy reference and entropy calibration. Fixed material parameters in this branch exclude a hidden size parameter whose independent variation changes the law. Combined with the existing tagged entropy law, this adopted transport gives the same-function relation

$$S_c(\lambda x)=S_{c^{(\lambda)}}(\delta_\lambda x)=\lambda S_c(x)\qquad(x\in C,\ \lambda>0).$$

This is additional idealized constitutive information for the designated bulk branch. It is not implied by coordinate additivity, SI units, the general tagged relation, or the existence of local equilibrium charts. No empirical proof, finite-size error bound, or assertion for surface-sensitive, interacting long-range or self-gravitating bodies is supplied. Euler and Gibbs–Duhem identities are conditional deductions on this branch, not part of the postulate's source review.
