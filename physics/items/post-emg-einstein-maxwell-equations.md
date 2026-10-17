---
id: post-emg-einstein-maxwell-equations
kind: postulate
title: "Equation-based Einstein–Maxwell model"
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 2
deps:
  - def-emg-geometry-units
  - def-emg-lorentzian-forms
  - post-emg-covariant-maxwell
dependency_roles:
  def-emg-geometry-units: formulation-prerequisite
  def-emg-lorentzian-forms: mathematical-premise
  post-emg-covariant-maxwell: formulation-prerequisite
physical_scope: >
  A parameterized equation-based adoption for a named smooth classical matter
  model on the selected oriented, time-oriented Lorentzian four-manifold. Each
  use identifies the model, its fields, exact equations and constraints, and
  its current and stress maps. This postulate does not assume a matter action,
  assert existence of solutions, include singular sources or establish
  empirical validity.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, General Relativity, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§3.2.5, PDF pp. 120–124 (printed pp. 113–117), curved Maxwell action and equations; §4.1, PDF pp. 148–151 (printed pp. 141–144), Einstein–Hilbert variation; §4.5.3, PDF pp. 190–193 (printed pp. 183–186), Maxwell and scalar stress tensors. Source units and signs are converted to the local SI conventions."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Ch. 4, equations (4.54)–(4.72), Einstein–Hilbert and matter variations; equations (4.69)–(4.72) define general Hilbert stress-energy and discuss the WEC. Carroll's electromagnetic tensor is separately given in Ch. 1, equation (1.111), in Gaussian units. No source units or signs are adopted."
verification:
  precheck: n/a
---

## Postulate

Let $M$ be the smooth, boundaryless, oriented and time-oriented Lorentzian
four-manifold of [[def-emg-geometry-units]], with metric $g$ of signature
$(-,+,+,+)$ and the curvature convention of
[[def-emg-lorentzian-forms]]. Let $U\subseteq M$ be open. Take a smooth real
two-form $F$ on $U$. For each application, fix one explicitly named smooth
classical matter-model instance
$$\mathcal M=(\mathcal C_m,\mathcal E_m,\mathsf J_m,\mathsf T_m).$$
For each admitted pair $(g,F)$, $\mathcal C_m[g,F]$ is a specified set of
smooth matter-field configurations on $U$, including their field bundles and
regularity; $\mathcal E_m[g,F;\Psi]$ is the explicit system of equations and
constraints that defines the admissible configurations; and
$\mathsf J_m[g,F;\Psi]$ and $\mathsf T_m[g,F;\Psi]$ are specified maps from
those configurations to, respectively, smooth vector fields and smooth
symmetric covariant two-tensors on $U$. For an admissible configuration
$\Psi\in\mathcal C_m[g,F]$, set $j:=\mathsf J_m[g,F;\Psi]$ and
$T^m:=\mathsf T_m[g,F;\Psi]$. A consuming item must name the selected model and
state the exact field variables, equations, constraints, regularity, and
additional domain or initial-data hypotheses it uses. Those matter equations
and constraints are premises of that model instance; they are not supplied or
proved by this postulate. In particular, arbitrary independent smooth $j$ and
$T^m$ are not a matter-model instance merely because their types match.

There is also a named zero-matter instance $\mathcal M_0$: its configuration
set is the singleton $\{*\}$, it has no matter-field variables or additional
constraints, and $\mathsf J_0(*)=0$, $\mathsf T_0(*)=0$. Whenever a use sets
$j=0$ and $T^m=0$ without additional matter fields, it is this source-free
instance.

For an admissible $\Psi$, adopt $dF=0$ and
$\nabla_aF^{ab}=-\mu_0j^b$ under the adopted convention of
[[post-emg-covariant-maxwell]]. This equation-based postulate then adds the
gravitational field law below, independently of any matter action.

Define the Einstein tensor by $G_{ab}:=\operatorname{Ric}_{ab}
-\tfrac12 Rg_{ab}$, using the curvature contractions of
[[def-emg-lorentzian-forms]], and define the smooth-field electromagnetic
stress tensor by

$$T^{\mathrm{EM}}_{ab}:=\frac1{\mu_0}\left(F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd}\right).$$

For constant cosmological parameter $\Lambda\in\mathbb R$ and
$\kappa_E:=8\pi G_N/c^4$, adopt the additional equation-based gravitational
field law

$$G_{ab}+\Lambda g_{ab}=\kappa_E\left(T^{\mathrm{EM}}_{ab}+T^m_{ab}\right).$$

Here $c>0$, $G_N>0$, and $\mu_0>0$ have the SI roles and units fixed in
[[def-emg-geometry-units]]; in length coordinates, $G_{ab}$ and
$\Lambda g_{ab}$ have units $\mathrm{m^{-2}}$, $T^{\mathrm{EM}}$ and $T^m$
have units $\mathrm{J\,m^{-3}}$, and $\kappa_E$ has units
$\mathrm{m\,J^{-1}}$. The source-free and sourced Maxwell equations remain
smooth-field postulates: point or sheet sources, distribution-valued products,
material excitation laws, and a global potential are outside this scope.

This is an equation-based adoption. It does not assume or imply the existence
of a matter action and is not derived from an action principle. The sources give
formulations in their own conventions; they motivate comparison but do not
establish a physical law or a solution-existence theorem.
