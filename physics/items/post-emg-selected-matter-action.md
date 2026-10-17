---
id: post-emg-selected-matter-action
kind: postulate
title: "Selected invariant matter-action contract"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 5
deps:
  - def-emg-geometry-units
  - def-gr-hilbert-stress-energy-tensor
  - lem-emg-matter-noether-exchange
dependency_roles:
  def-emg-geometry-units: formulation-prerequisite
  def-gr-hilbert-stress-energy-tensor: mathematical-premise
  lem-emg-matter-noether-exchange: formulation-prerequisite
physical_scope: >
  One actually selected smooth classical matter functional with compact
  variations in a fixed principal U(1)-bundle sector and the stated normalized
  connection convention. Its Hilbert tensor and current are defined by the
  stated first-variation convention. No existence claim is made for arbitrary
  matter, and no measured matter model or coupled PDE solution is asserted.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, General Relativity, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§4.5.2–§4.5.3, PDF pp. 190–193 (printed pp. 183–186), Hilbert stress and scalar/Maxwell matter examples. The action and compact variation assumptions here are stated explicitly."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Ch. 5, equations (5.33)–(5.38), PDF pp. 143–147 (printed pp. 137–140), the on-shell diffeomorphism-invariance argument for stress conservation. The charged connection term is separately conditional here."
verification:
  precheck: n/a
---

## Postulate

For the action-based Einstein–Maxwell branch, choose one actual smooth matter
configuration space $\mathcal C$ on the spacetime of
[[def-emg-geometry-units]], a smooth right principal $U(1)$ bundle
$\pi:P\to M$, and a real differentiable functional $S_m[g,\omega,\Psi]$ on
its declared domain, where $\Psi\in\mathcal C$ and $\omega$ is a smooth
principal connection on that fixed bundle. Use a supplied cover and fixed
transition data with normalized real local connection representatives $a_i$;
on phase-lift neighborhoods their convention is
$a_j=a_i+df_{ij}$ when $g_{ij}=e^{if_{ij}}$. With the fixed normalization
$\kappa_0>0$ of [[def-emg-geometry-units]], the local expression for $\omega$
in a circle coordinate $z\in U(1)$ is $-iz^{-1}dz+a_i$. Define the physical local
potentials $A_i:=\kappa_0a_i$. They obey
$A_j=A_i+\kappa_0df_{ij}$, and their local exterior derivatives patch to the
global physical curvature $F$, with $F|_{U_i}=dA_i=\kappa_0da_i$ and
$dF=0$. A global real potential is not assumed. The field class, transition
data, gauge action, matter equations, and compact variation class must be
specified for the chosen matter model.

More precisely, use the matter-field and differentiability definitions in
[[lem-emg-matter-noether-exchange]]: supply a smooth finite-dimensional
fiber bundle $E\to M$, take $\mathcal C=\Gamma^\infty(E)$, and specify a
real functional domain $\mathcal D$ of metric, fixed-sector connection and
section triples. Compact variations are jointly smooth curves in
$\mathcal D$ fixed off a common compact set. Require the freezing of any
two components to remain admissible, admit every compact metric and
connection direction, and require the derivative to depend real-linearly
only on the three tangent directions and to split into the three partial
variations. For each compact real gauge path and each horizontal-lifted
compact base flow, supply the jointly smooth matter-bundle
diffeomorphisms, their inverses on a common interval, and the admissible
transported sections specified in that lemma. These are part of the selected
model data; an arbitrary section bundle has no such transport by default.

If the selected matter model is given by a global physical potential
$A\in\Omega^1(M)$, use the trivial principal bundle $P=M\times U(1)$ with its
global trivialization and normalized representative $a=A/\kappa_0$; its
principal connection is locally $-iz^{-1}dz+a$. This is the trivial-bundle
global-potential branch, and the model may admit any real coupling when its
gauge transformations are specified by compactly supported real lifts. A
nontrivial bundle sector instead uses the stated local transition data and the
model's compatible matter-field transition rules.

The functional is invariant under compactly supported gauge transformations
of the fixed bundle sector and under orientation-preserving diffeomorphisms,
with the connection and matter fields transported together. In particular,
for every smooth compactly supported real gauge parameter $\chi$ with units
Wb, its group map is $g_\chi=e^{i\chi/\kappa_0}$; it acts by
$a_i\mapsto a_i+\kappa_0^{-1}d\chi$ and hence by
$A_i\mapsto A_i+d\chi$, together with the model's specified matter-field
transformation. For a compactly supported
vector field $\xi$, transport by the induced horizontal lift gives the
physical connection variation $\alpha_a=\xi^bF_{ba}$ used by
[[lem-emg-matter-noether-exchange]].

Adopt matter-field stationarity as part of this selected model:
$\delta_\Psi S_m=0$ for every admissible compactly supported matter variation.
For compactly supported inverse-metric variations $q^{ab}=\delta g^{ab}$ and
fixed-sector compact physical connection variations $\alpha\in\Omega^1(M)$,
vary the local potentials by $A_i(s)=A_i+s\alpha|_{U_i}$, equivalently the
normalized representatives by $a_i(s)=a_i+s\kappa_0^{-1}\alpha|_{U_i}$.
The transition data remain fixed, this is a variation of the same bundle
connection sector, and $\delta F=d\alpha$. Require the remaining first
variation to have the form

$$\delta S_m=-\frac1{2c}\int_M T^m_{ab}q^{ab}\,\mathrm{vol}_g +\frac1c\int_M j^a\alpha_a\,\mathrm{vol}_g,$$

where $T^m$ is a smooth symmetric covariant two-tensor, the Hilbert
stress-energy tensor in the convention of
[[def-gr-hilbert-stress-energy-tensor]], and $j$ is a smooth vector current.
Here $\alpha$ is the physical-potential variation, not the normalized
representative variation; the factor $\kappa_0^{-1}$ above makes the two
conventions explicit. These normalization, connection-variation, and
invariance hypotheses are exactly the formulation interface used by
[[lem-emg-matter-noether-exchange]]. That conditional mathematical result does
not assert that such an action exists for arbitrary proposed matter.

This postulate selects a differentiable action branch and its variation
conventions. It does not determine a unique action, assert a local or global
solution of its Euler–Lagrange equations, extend the model to singular sources,
or establish empirical validity. The separate equation-based model does not
depend on this action assumption.
