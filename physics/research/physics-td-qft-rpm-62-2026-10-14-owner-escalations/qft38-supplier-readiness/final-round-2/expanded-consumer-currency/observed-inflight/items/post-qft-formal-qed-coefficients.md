---
id: post-qft-formal-qed-coefficients
kind: postulate
domain: physics
library: physics
title: Explicit formal QED vertex/free-line convention
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 6
deps:
  - def-qft-framework-units
  - def-qft-qed-formal-ring
  - lem-qft-qed-tree-ward
  - lem-qft-free-time-ordered-kernel
  - def-countable-choice
dependency_roles:
  def-qft-framework-units: formulation-prerequisite
  def-qft-qed-formal-ring: mathematical-premise
  lem-qft-qed-tree-ward: mathematical-premise
  lem-qft-free-time-ordered-kernel: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "Adopted finite/formal QED coefficient convention in the fixed Minkowski and SI-normalization conventions; any distributional free-line realization is conditional on the inspected Countable-Choice-dependent carrier. No convergence, loop renormalization, continuum scattering matrix, LSZ limit, or nonperturbative QED existence is asserted."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Quantum Field Theory, complete author-hosted Cambridge lecture notes, Chapter 6: Quantum Electrodynamics, §§6.4.1–6.5"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html"
      locator: "Complete HTML Chapter 6; QED interaction and tree-current argument, equations 6.569–6.584, and the vertex/free-line table in §6.5. Tong uses signature (+---); the local h=-eta convention is stated explicitly here."
---

## Postulate

Adopt the following coefficient convention for finite formal QED bookkeeping in
the Minkowski, units, and Clifford conventions of
[[def-qft-framework-units]]. In particular,
$\eta=\operatorname{diag}(-1,1,1,1)$, $h=-\eta$,
$\{\gamma^a,\gamma^b\}=2h^{ab}I_4$, and
$\not p:=\gamma^a h_{ab}p^b$. The inverse-length mass is
$\mu=m_{\rm rest,SI}c/\hbar$ and a declared physical charge $q_{\rm SI}$ has
dimensionless value $q_{\rm n}=q_{\rm SI}\sqrt{\mu_0c/\hbar}$.

A **formal coefficient graph** here is a finite directed graph of interaction
vertices and internal lines with a momentum covector assigned to each line and
momentum conservation imposed at each vertex. It records a coefficient at a
fixed finite or formal order; it is not, by this definition, a convergent
amplitude or an operator on a continuum interacting Hilbert space. For a Dirac
species of dimensionless charge $g$, use $D_a=\partial_a-ig a_a$ and adopt the
vertex factor $ig\gamma^a$. For an electron, $g=-e_{\rm n}$, so the vertex is
$-ie_{\rm n}\gamma^a$.

For $\mu>0$ and off-shell momentum $p$ with $h(p,p)-\mu^2\ne0$, set
$$S_0(p)=\frac{\not p+\mu}{h(p,p)-\mu^2}.$$
The adopted fermion-line coefficient is $iS_0(p)$. In Feynman gauge the
auxiliary covariant photon-line coefficient is
$$D^F_{ab}(k)=-\frac{i h_{ab}}{h(k,k)+i0} =\frac{i\eta_{ab}}{h(k,k)+i0}.$$
The symbol $+i0$ denotes the selected Feynman boundary-value convention when a
distributional line is used; it does not define products of singular loop
distributions. The coefficient $D^F_{ab}$ is a calculational tensor factor,
not a declaration of four positive physical photon polarization states.

For the formal matrix realization, use the coefficientwise inverse specified
by the planned interface [[def-qft-qed-formal-ring]]: if $K_0$ is an invertible
finite matrix and $K(z)=K_0+zV$, the formal inverse is the power series in
$z$; no convergence in $z$ is claimed. The planned off-shell/tree identities
of [[lem-qft-qed-tree-ward]] fix the $h=-\eta$ slash and the nonzero-denominator
conditions. When a time-ordered free distribution is needed, use the actual
carrier $H_\mu$ of [[lem-qft-free-time-ordered-kernel]], for which
$(\Box-\mu^2)H_\mu=i\delta_0$ and whose definition has no extra prefactor
$i$. The distributional use of that carrier is conditional on
[[def-countable-choice]]; the formal coefficient factors above are adopted
independently of that optional distributional identification.

## Scope and limits

This postulate fixes vertex, free-line, and finite/formal coefficient
conventions. It does not assert that the formal series converges, that every
diagram is gauge independent, that loop products are defined, or that an exact
interacting continuum QED state space or scattering operator exists. The
corresponding finite/formal and tree-level deductions are separately stated in
[[pthm-qft-qed-formal-ward]].
