---
id: post-qft-regulated-polynomial-model
kind: postulate
domain: physics
library: physics
title: Adopted finite-regulator polynomial model
status: published
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 1
deps:
  - def-qft-regulated-polynomial-hamiltonian
  - def-qft-framework-units
  - def-countable-choice
dependency_roles:
  def-qft-regulated-polynomial-hamiltonian: mathematical-premise
  def-qft-framework-units: formulation-prerequisite
  def-countable-choice: mathematical-premise
physical_scope: "One fixed finite family of dimensionless coordinate-momentum maps with a real coercive polynomial potential. The energy scale is a primitive model input. No site geometry, additional state-space construction, continuum field model, infinite-volume, Lorentz-invariance, or empirical-measurement claim is made."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Quantum Field Theory, author-hosted lecture notes, Chapter 3, Interacting Fields, especially the real-scalar polynomial interaction"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html"
      locator: "Complete Chapter 3 HTML; scalar polynomial interactions and the explicit phi-four model."
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §2.3"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Printed pp.76–83, quadratic forms and self-adjoint realizations."
verification:
  sources_checked:
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    by: "Completed delegated workflow source/scope reviewers and adjudicators; owner accepted existing evidence"
---

## Postulate

Assume Countable Choice ([[def-countable-choice]]) as in
[[def-qft-regulated-polynomial-hamiltonian]]; it supplies the stated
Hilbert-space construction and is not a physical measurement assumption. Fix
one finite nonempty label set $J$ with $N:=|J|\ge1$, an enumeration of $J$ by
$\{1,\ldots,N\}$, and dimensionless real coordinates
$q=(q_1,\ldots,q_N)\in\mathbb R^N$. Each label indexes one coordinate; no
spatial geometry or limit in $N$ is part of these data. The coordinate space,
Hilbert space, and polynomial differential expression are those of
[[def-qft-regulated-polynomial-hamiltonian]]:
$H_N=L^2(\mathbb R^N,dq;\mathbb C)$, with inner product linear in its first
variable, $D_0=C_c^\infty(\mathbb R^N;\mathbb C)$, and

$$h_0u=-\sum_{j=1}^N a_j\partial_j^2u+V(q)u,\qquad u\in D_0,$$

where $a_j>0$ and $V$ is a real polynomial. Require fixed constants $c>0$ and
$C_0\ge0$ such that

$$V(q)\ge c|q|^2-C_0\qquad(q\in\mathbb R^N).$$

For $j=1,\ldots,N$ define dimensionless linear maps
$Q_j,P_j:D_0\to D_0$ by
$$Q_ju(q):=q_ju(q),\qquad P_ju(q):=-i\partial_ju(q).$$
For maps preserving $D_0$, write $[A,B]u:=A(Bu)-B(Au)$. For every
$u\in D_0$ these maps obey
$$[Q_i,Q_j]u=0,\qquad [P_i,P_j]u=0,\qquad [Q_i,P_j]u=i\delta_{ij}u,$$
where $\delta_{ij}=1$ if $i=j$ and $0$ otherwise. In this finite-coordinate
model, the mixed identity follows from
$-iq_i\partial_j u+i\partial_j(q_i u)=i\delta_{ij}u$; the other two vanish
by commutativity of coordinate multiplication and mixed derivatives. A
**bosonic mode** means one such
coordinate-momentum pair with these commutation relations on $D_0$; this names
the algebraic commutation convention and adds no state-space construction
beyond $H_N$. A **polynomial interaction term** means a
monomial of total degree at least three in $V$; the model is interacting in
this finite-coordinate sense exactly when at least one such term has nonzero
coefficient. This terminology asserts no continuum field interaction or
scattering construction.

Define $V(Q):D_0\to D_0$ by $(V(Q)u)(q):=V(q)u(q)$. Then
$$h_0u=\sum_{j=1}^N a_jP_j^2u+V(Q)u\qquad(u\in D_0).$$
All terms here are dimensionless, and the physical energy unit enters only
through the scale $E_*$ below.

For this physical model, take $q_j$, $a_j$, $c$, $C_0$, and the coefficients
of $V$ to be dimensionless. Adopt a positive energy scale $E_*$ in joules as
primitive finite-regulator data, and use $\hbar$ in joule-seconds under
[[def-qft-framework-units]]. When the mathematical supplier
[[thm-qft-self-adjoint-regulated-interaction]] constructs its specified
self-adjoint form realization $h$ of $h_0$, the model Hamiltonian is
$H_{\rm phys}:=E_*h$ on that supplied domain. This postulate adopts the
finite-regulator polynomial data; it does not assert that the initial
differential expression is self-adjoint or choose an operator domain by
itself.

The finite label set and polynomial are held fixed. A finite spatial regulator
is not thereby Lorentz invariant, and this model asserts no continuum or
infinite-volume limit, no convergence of a perturbation series, and no
reported observation. Its parameters are selected model inputs, not measured
values.
