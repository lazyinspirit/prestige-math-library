---
id: post-rpm-bmt-dipole-model
kind: postulate
title: "Classical BMT polarization model"
status: published
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
verification:
  sources_checked:
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    by: "Completed delegated workflow source/scope reviewers and adjudicators; owner accepted existing evidence"
---

## Postulate

Assume $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure, and let $\nabla$ be the metric-selected Levi–Civita connection of [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]. Let $U$ and the prescribed external two-form $F$ be as in [[def-rpm-charge-spin-model]], and let the translational motion obey the adopted action law [[post-rpm-external-charge-action]]. For a $C^1$ spin or polarization vector $s$ along the worldline with $g(s,U)=0$, define $G:=g_s/2$ and $K:=F(s,U)=g(s,F^\sharp(U))$. Adopt the transport law

$$\nabla_U s=\frac{q}{m}\left[G F^\sharp(s)-(G-1)\frac{U}{c^2}K\right].$$

Here $\nabla_U s$ denotes the covariant derivative of the section $s$ along the specified curve, rather than differentiation of an unspecified ambient extension. More generally, for any $C^1$ vector field $V$ along this $C^2$ worldline $z$, define

$$(D_\tau V)^a:=\frac{dV^a}{d\tau}+\Gamma^a{}_{bc}(z(\tau))U^bV^c,\qquad \nabla_U s:=D_\tau s.$$

The components of $V$ are $C^1$ functions of $\tau$ in each smooth chart, and the displayed derivative is continuous. This is the pullback-connection derivative on $z^*TM$. To verify that the component definition is independent of the chart, let $y=y(x)$ and $J^\alpha{}_a:=\partial y^\alpha/\partial x^a$. The connection transformation law gives

$$\Gamma'^\alpha{}_{\beta\gamma}J^\beta{}_bJ^\gamma{}_c=J^\alpha{}_a\Gamma^a{}_{bc}-\partial_bJ^\alpha{}_c.$$

Since $V'^\alpha=J^\alpha{}_aV^a$, the ordinary chain and product rules give $\dot V'^\alpha=J^\alpha{}_a\dot V^a+(\partial_bJ^\alpha{}_c)U^bV^c$. The two transition-derivative terms cancel, leaving $(D_\tau V)'^\alpha=J^\alpha{}_a(D_\tau V)^a$. Thus no smoothness of the curve beyond $C^2$, or of the section beyond $C^1$, is required. Metric compatibility also gives $\frac d{d\tau}g(V,W)=g(D_\tau V,W)+g(V,D_\tau W)$ for $C^1$ sections $V,W$: insert the component formulas and $\partial_bg_{ac}=\Gamma^d{}_{ba}g_{dc}+\Gamma^d{}_{bc}g_{ad}$. These conventions specify the mathematical derivative in the adopted transport law; they add no further physical motion assumption.

This is an ideal classical external-field dipole model with constant $q,m,g_s$. Its flat homogeneous-field specialization is the BMT polarization law in the stated RPM convention. The formula on a curved background, and its use for a spatially varying prescribed field, are separately adopted model assumptions; neither follows from the flat BMT source or from general covariance alone.

The model excludes an electric dipole moment, field-gradient or Stern–Gerlach translational forces, spin backreaction, radiation reaction, collisions and higher multipoles. The parameter $g_s$ is not fixed to $2$ and no measured value is asserted. Using this classical vector to represent a real quantum particle's polarization is a correspondence assumption; the postulate does not construct quantum spin or claim empirical validation.
