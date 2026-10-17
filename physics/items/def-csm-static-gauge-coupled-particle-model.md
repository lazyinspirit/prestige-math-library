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
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "David Tong, Electromagnetism, complete author-hosted lecture notes, §3.2"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
    - title: "David Tong, Classical Dynamics, complete author-hosted lecture notes, §4.1.2"
      url: "https://www.damtp.cam.ac.uk/user/tong/dynamics/clas.pdf"
---

## Definition

Let $\Omega\subset\mathbb R^3$ be nonempty, bounded and open with compact
closure, and let $U$ be an open neighborhood of $\overline\Omega$. Let the
static scalar potential be $\varphi:U\to\mathbb R$ and the static vector
potential be $A:U\to\mathbb R^3$, both of class $C^2$. Let $m>0$ kg, and let
$q_{\rm p}\in\mathbb R$ C be the particle's signed charge; this model
parameter is distinct from the exact elementary-charge constant $e$ in
[[def-em-si-conventions]]. Let velocity $v\in\mathbb R^3$ have units
m s$^{-1}$. The adopted
single-particle Lagrangian is the function
$$L:\Omega\times\mathbb R^3\to\mathbb R,\qquad L(x,v)=\tfrac12m|v|^2+q_{\rm p}A(x)\cdot v-q_{\rm p}\varphi(x),$$
with $A$ in T m and $\varphi$ in V, as in
[[def-em-si-conventions]]. Its Legendre momentum is
$$p:=\partial_vL=mv+q_{\rm p}A(x),$$
so for every $(x,p)\in T^*\Omega\cong\Omega\times\mathbb R^3$ the inverse is
$v=(p-q_{\rm p}A(x))/m$. The **mechanical momentum** is
$\pi:=p-q_{\rm p}A(x)=mv$; the **canonical momentum** is the cotangent coordinate
$p$ of [[def-cm12-cotangent-momentum]]. The Legendre transform
$H=p\cdot v-L$, in the convention of
[[def-cm12-hamiltonian]], is therefore
$$H(x,p)=\frac{|p-q_{\rm p}A(x)|^2}{2m}+q_{\rm p}\varphi(x).$$
At fixed $x$, the velocity derivative has linear part $mI_3$, so the
displayed affine momentum map has the explicit inverse
$v=(p-q_{\rm p}A(x))/m$. Substitution into $p\cdot v-L$ cancels the two
$q_{\rm p}A\cdot v$ terms and gives $\tfrac12m|v|^2+q_{\rm p}\varphi$; using the inverse
gives the displayed Hamiltonian. The supplier [[def-cm12-hamiltonian]]
provides the $p\cdot v-L$ convention for its hyperregular $K-U$ mechanical
presentation; the inverse branch for this velocity-linear electromagnetic
coupling is the local calculation above, not a consequence of that supplier's
$K-U$ scope. The units are $[q_{\rm p}A]=$ kg m s$^{-1}$,
$[q_{\rm p}\varphi]=$ J, and
$[H]=$ J.

For a time-independent gauge function $\chi:U\to\mathbb R$ of class $C^3$
(units V s), adopt the
static convention of [[def-em-gauge-transformation]]:
$A_\chi=A+\nabla\chi$ and $\varphi_\chi=\varphi$. The corresponding
canonical-coordinate change is
$T_\chi(x,p)=(x,p+q_{\rm p}\nabla\chi(x))$; the
mechanical momentum is unchanged under this paired transformation. This
definition specifies an external-potential model only and asserts no
existence of a global potential representation on arbitrary regions.
