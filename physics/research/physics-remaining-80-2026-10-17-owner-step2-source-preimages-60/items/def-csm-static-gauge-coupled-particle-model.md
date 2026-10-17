---
id: def-csm-static-gauge-coupled-particle-model
kind: definition
title: "Static electromagnetic coupling and typed canonical momentum"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 1
deps:
  - def-csm-phase-space-reference
  - def-cm12-hamiltonian
  - def-cm12-cotangent-momentum
  - def-cm01-units
  - def-em-si-conventions
  - def-em-gauge-transformation
dependency_roles:
  def-csm-phase-space-reference: formulation-prerequisite
  def-cm12-hamiltonian: formulation-prerequisite
  def-cm12-cotangent-momentum: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-gauge-transformation: formulation-prerequisite
physical_scope: "Single nonrelativistic charged particle in a bounded spatial region with prescribed static C2 electromagnetic potentials; excludes source dynamics, field energy, radiation and quantum effects."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Electromagnetism, complete author-hosted lecture notes, §3.2"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
    - title: "David Tong, Classical Dynamics, complete author-hosted lecture notes, §4.1.2"
      url: "https://www.damtp.cam.ac.uk/user/tong/dynamics/clas.pdf"
---

## Definition

Let $\Omega\subset\mathbb R^3$ be nonempty, bounded and open with compact
closure. Let static scalar and vector potentials $\varphi$ and $A$ extend as
$C^2$ functions to a neighborhood of $\overline\Omega$. Let $m>0$ kg, charge
$e\in\mathbb R$ C, and velocity $v\in\mathbb R^3$ m s$^{-1}$. Adopt the
single-particle Lagrangian
$$L(x,v)=\tfrac12m|v|^2+eA(x)\cdot v-e\varphi(x),$$
with $A$ in T m and $\varphi$ in V, as in
[[def-em-si-conventions]]. Its Legendre momentum is
$$p:=\partial_vL=mv+eA(x),$$
so for every $(x,p)\in T^*\Omega\cong\Omega\times\mathbb R^3$ the inverse is
$v=(p-eA(x))/m$. The **mechanical momentum** is
$\pi:=p-eA(x)=mv$; the **canonical momentum** is the cotangent coordinate
$p$ of [[def-cm12-cotangent-momentum]]. The Legendre transform
$H=p\cdot v-L$, in the convention of
[[def-cm12-hamiltonian]], is therefore
$$H(x,p)=\frac{|p-eA(x)|^2}{2m}+e\varphi(x).$$
Indeed, substituting $p=mv+eA$ into $p\cdot v-L$ cancels the two
$eA\cdot v$ terms and leaves $\tfrac12m|v|^2+e\varphi$; substituting the
inverse $v=(p-eA)/m$ gives the displayed Hamiltonian.
The units are $[eA]=$ kg m s$^{-1}$, $[e\varphi]=$ J, and $[H]=$ J.

For a time-independent $C^3$ gauge function $\chi$ (units V s), adopt the
static convention of [[def-em-gauge-transformation]]:
$A_\chi=A+\nabla\chi$ and $\varphi_\chi=\varphi$. The corresponding
canonical-coordinate change is $T_\chi(x,p)=(x,p+e\nabla\chi(x))$; the
mechanical momentum is unchanged under this paired transformation. This
definition specifies an external-potential model only and asserts no
existence of a global potential representation on arbitrary regions.
