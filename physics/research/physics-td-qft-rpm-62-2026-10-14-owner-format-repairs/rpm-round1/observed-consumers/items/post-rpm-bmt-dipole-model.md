---
id: post-rpm-bmt-dipole-model
kind: postulate
title: "Classical BMT polarization model"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "An adopted classical polarization transport law for a charged massive test body in a prescribed external field, with Lorentz-force translation. The curved-spacetime form is an independent model extension; it is not inferred from the flat homogeneous-field BMT paper, from covariance alone or from experiments. No quantum-spin ontology or measured value of the gyromagnetic ratio is asserted."
deps:
  - def-rpm-charge-spin-model
  - post-rpm-external-charge-action
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-countable-choice
dependency_roles:
  def-rpm-charge-spin-model: formulation-prerequisite
  post-rpm-external-charge-action: formulation-prerequisite
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "V. Bargmann, L. Michel and V. L. Telegdi, Precession of the Polarization of Particles Moving in a Homogeneous Electromagnetic Field, Physical Review Letters 2 (1959), 435–437"
      url: "https://www.ihes.fr/~vergne/LouisMichel/publications/PhysRevLett.2.435.pdf"
      locator: "Complete two-page author-hosted copy: the rest-frame torque and polarization four-vector law appear on the first page, with laboratory-frame precession specializations on the second. The original treats homogeneous flat fields; the variable-field curved law adopted here is explicitly a separate extension."
    - title: "András László, General relativity experiment with frozen spin (EDM) rings, PSI Zürich, 20 September 2018, 29-page lecture notes, based on A. László and Z. Zimborás, Classical and Quantum Gravity 35 (2018), 175003"
      url: "https://www.psi.ch/en/media/48911/download"
      locator: "PDF pp. 6–7: the covariant Thomas–Bargmann–Michel–Telegdi transport equation and its Fermi–Walker derivative in a curved background, with a separate electric-dipole term. The source uses the opposite metric signature and field-index convention; the present postulate states its own converted convention and does not import the source as a proof."
verification: {}
---

## Postulate

Assume $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure, and let $\nabla$ be the metric-selected Levi–Civita connection of [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]. Let $U$ and the prescribed external two-form $F$ be as in [[def-rpm-charge-spin-model]], and let the translational motion obey the adopted action law [[post-rpm-external-charge-action]]. For a $C^1$ spin or polarization vector $s$ along the worldline with $g(s,U)=0$, define $G:=g_s/2$ and $K:=F(s,U)=g(s,F^\sharp(U))$. Adopt the transport law

$$\nabla_U s=\frac{q}{m}\left[G F^\sharp(s)-(G-1)\frac{U}{c^2}K\right].$$

This is an ideal classical external-field dipole model with constant $q,m,g_s$. Its flat homogeneous-field specialization is the BMT polarization law in the stated RPM convention. The formula on a curved background, and its use for a spatially varying prescribed field, are separately adopted model assumptions; neither follows from the flat BMT source or from general covariance alone.

The model excludes an electric dipole moment, field-gradient or Stern–Gerlach translational forces, spin backreaction, radiation reaction, collisions and higher multipoles. The parameter $g_s$ is not fixed to $2$ and no measured value is asserted. Using this classical vector to represent a real quantum particle's polarization is a correspondence assumption; the postulate does not construct quantum spin or claim empirical validation.
