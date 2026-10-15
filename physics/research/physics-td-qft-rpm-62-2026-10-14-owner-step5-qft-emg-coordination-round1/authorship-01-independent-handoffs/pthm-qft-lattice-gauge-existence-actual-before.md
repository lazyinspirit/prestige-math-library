---
id: pthm-qft-lattice-gauge-existence
kind: physics-theorem
domain: physics
library: physics
title: Finite-regulator physical Gauss-sector existence and dynamics
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 6
deps:
  - post-qft-compact-lattice-gauge-model
  - def-qft-compact-lattice-gauge-data
  - lem-qft-lattice-physical-evolution
  - lem-qft-lattice-gauss-projection
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  post-qft-compact-lattice-gauge-model: physical-assumption
  def-qft-compact-lattice-gauge-data: mathematical-premise
  lem-qft-lattice-physical-evolution: mathematical-premise
  lem-qft-lattice-gauss-projection: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: "Conditional exact existence and unitary evolution on the nonzero physical Gauss sector of the adopted fixed finite-graph rotor/CAR regulator, with its exact Hamiltonian domain and full Axiom of Choice. No continuum limit, continuum QED existence, or empirical validity is asserted."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John B. Kogut, An Introduction to Lattice Gauge Theory and Spin Systems, Reviews of Modern Physics 51 (1979), §VI.C"
      url: "https://chimera.roma1.infn.it/ENZO/FC/ESTRATTI/DUALITY/kogut1979.pdf"
      locator: "Complete 55-page review; printed pp. 694–696, angular link variables, integer electric spectrum, Hamiltonian and local gauge generator."
    - title: "Patrick Emonts and Erez Zohar, Gauss Law, Minimal Coupling and Fermionic PEPS for Lattice Gauge Theories, SciPost Physics Lecture Notes 12 (2020), §§2.1–2.2"
      url: "https://arxiv.org/html/1807.01294"
      locator: "Full-text HTML lecture notes; compact U(1) rotor and the physical Gauss sector. The exact finite-graph domains and dynamics are proved from local suppliers."
empirical_premises: []
---

## Statement

Assume the fixed finite-graph model adopted by
[[post-qft-compact-lattice-gauge-model]]: a finite nonempty oriented graph,
$s\ge1$ finite CAR modes per vertex, fixed backgrounds
$b_x\in\{0,\ldots,s\}$, link electric operators $E_e$, the joint Gauss
operators $G_x$, and $H=H_0+V_B+V_F$ on the exact maximal domain
$D(H_0)$ of [[def-qft-compact-lattice-gauge-data]]. Assume the Axiom of Choice
and a constant $\hbar>0$ in joule-seconds. Then the physical sector
$$\mathcal H_{\rm phys}=\bigcap_{x\in V}\ker G_x$$
is nonzero. The restriction $H_{\rm phys}:=H|_{D(H)\cap\mathcal H_{\rm phys}}$
is self-adjoint, and
$$\mathcal U_{\rm phys}(t)=e^{-itH_{\rm phys}/\hbar},\qquad t\in\mathbb R,$$
is a strongly continuous unitary group on $\mathcal H_{\rm phys}$ with the
exact derivative domain $D(H)\cap\mathcal H_{\rm phys}$. This is an exact
fixed-regulator result conditional on the stated mathematical suppliers; it
asserts no continuum dynamics or continuum QED construction.

## Facts & Assumptions

**Given:** Full AC, the adopted finite-graph model, its CAR/Fourier conventions, the self-adjoint gauge-sector construction, and $\hbar>0$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. In particular it supplies the Countable Choice assumption in the finite-graph definition.

[L1] [[def-countable-choice]]: Countable Choice selects one element from each set in a sequence of nonempty sets. The finite-graph definition uses this weaker assumption for its conditional Fock/CAR construction.

[F1] [[post-qft-compact-lattice-gauge-model]]: the physical model adopts the finite oriented graph, compact rotor links, finite CAR matter, fixed backgrounds, and exact Hamiltonian/domain of [[def-qft-compact-lattice-gauge-data]]. Its CAR inputs remain draft suppliers; the postulate does not call them independently accepted.

[F2] [[lem-qft-lattice-gauss-projection]]: on the current draft interface the maximal diagonal Gauss operators have a nonzero joint kernel; for each allowed background, the zero-link Fourier vector tensored with an occupation vector having $b_x$ occupied modes at each vertex is a normalized vector in that kernel. The carrier and its complete conditional proof have a current Step-1 ready record; that record is not proof acceptance.

[F3] [[lem-qft-lattice-physical-evolution]]: for the same model data and full AC, $H$ is self-adjoint on $D(H_0)$, $e^{-itH/\hbar}$ is strongly continuous, commutes with the gauge action and physical projection, and its restriction to the physical sector has self-adjoint generator on $D(H)\cap\mathcal H_{\rm phys}$. This current mathematical carrier is draft with a complete conditional proof and a Step-1 ready record, not independent proof acceptance.

## Proof

**Given:** [A1], [L1], [F1]–[F3], and $\hbar>0$.

1.1 To check the weaker choice hypothesis in [L1], let $(X_n)_{n\in\mathbb N}$ be any sequence of nonempty sets. Apply [A1] to the family $\{X_n:n\in\mathbb N\}$ and obtain a choice function $g$ on that family; then $f(n):=g(X_n)$ belongs to $X_n$ for every $n$. Thus full AC supplies the Countable Choice input required by [F1]–[F3]. [A1, L1, given, construct]

1.2 The hypotheses in [F1] identify the adopted Hamiltonian, background range and maximal domain with the exact finite-graph data used by [F2] and [F3]; no continuum or spatial embedding data are needed for those mathematical suppliers. [F1, F2, F3, given]

1.3 For every vertex $x$, the allowed range $0\le b_x\le s$ lets us occupy exactly $b_x$ of its $s$ modes, including zero or all modes at the endpoints. Tensor the resulting normalized finite occupation vector with the Fourier basis vector having every link label $n_e=0$. Every link contribution to each Gauss multiplier then vanishes, including the cancelling outgoing and incoming terms of a self-loop; the matter term is $-(b_x-b_x)=0$. Thus $\gamma_x=0$ at each vertex, so [F2] places this nonzero vector in $\mathcal H_{\rm phys}$. [F1, F2, construct]

2.1 By [F3], $H$ is self-adjoint on exactly $D(H_0)$ and its unitary group preserves the physical projection. Restricting that group to the nonzero closed range $\mathcal H_{\rm phys}$ therefore gives the stated strongly continuous unitary group; [F3] gives its exact derivative domain and self-adjoint restricted Hamiltonian. The units in [F1] make $tH/\hbar$ dimensionless. [A1, F1, F3, step 1.2, step 1.3, algebra] ∎
