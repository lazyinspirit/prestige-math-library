---
id: cex-aqft-topological-interface-not-symmetry
kind: counterexample
title: "A topological interface between different models is not an internal symmetry"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-defects-and-topological-operators-examples
dependency_level: 2
deps:
  - def-aqft-topological-interface
dependency_roles:
  def-aqft-topological-interface: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
physical_scope: "An exact finite-dimensional 0+1-dimensional transfer model with hbar=1 and zero Hamiltonians; it refutes only the stated universal identification of interfaces with internal symmetries."
sources:
  references:
    - title: "Nils Carqueville, Lecture Notes on 2-Dimensional Defect TQFT"
      url: "https://arxiv.org/pdf/1607.05747"
      locator: "§2.1, PDF pp. 5–8: interface data has a source region and target region, which need not be the same theory; the finite counterexample is proved locally."
verification:
  precheck: pass
---

## Statement refuted

Every topological codimension-one interface between two selected quantum-mechanical models is an invertible internal symmetry of its source model.

## Statement references

[[def-aqft-topological-interface]]

[Carqueville, §2.1, PDF pp. 5–8](https://arxiv.org/pdf/1607.05747)

## Facts & Assumptions

**Given:** The finite-dimensional models and interface constructed in the Counterexample.

[A1] The source model has state space $\mathbb C$ and zero Hamiltonian; the target has state space $\mathbb C^2$ and zero Hamiltonian. Propagation over every interval is the identity, and the interface map is $J(z)=(z,0)$. The allowed boundary vectors are unit vectors $b\in\mathbb C$ and $a\in\mathbb C^2$ with $Z=\langle a,Jb\rangle\ne0$. For any finite ordered source-side list $0<s_1<\cdots<s_k<\tau$ of matrices $A_i\in\operatorname{End}(\mathbb C)$ and target-side list $\tau<t_1<\cdots<t_\ell<T$ of matrices $B_j\in\operatorname{End}(\mathbb C^2)$, the complete normalized correlator is $C_\tau=\langle a,B_\ell\cdots B_1J A_k\cdots A_1b\rangle/Z$, with an empty product interpreted as the identity.

[F1] [[def-aqft-topological-interface]]: a topological interface preserves every declared complete correlator under allowed decorated isotopies, while an invertible symmetry must be an endodefect of the same complete model data, have two-sided identity fusion, and induce observable and combined background/boundary bijections preserving all correlators.

## Counterexample

Use the interval $[0,T]$, $T>0$, with $\hbar=1$. Let the source model have Hilbert space $\mathcal H_-=\mathbb C$ and zero Hamiltonian operator $H_-=0\in\operatorname{End}(\mathcal H_-)$, and let the target model have Hilbert space $\mathcal H_+=\mathbb C^2$ and zero Hamiltonian operator $H_+=0\in\operatorname{End}(\mathcal H_+)$. All matrices on each state space are allowed local observables; propagation over every interval is the identity. The interface is the point insertion $J:\mathbb C\to\mathbb C^2$, $J(z)=(z,0)$. Boundary data are unit vectors $b\in\mathbb C$ and $a\in\mathbb C^2$ satisfying $Z=\langle a,Jb\rangle\ne0$. The complete admissible other insertions are arbitrary finite ordered source-side lists $(s_i,A_i)$, $0<s_1<\cdots<s_k<\tau$, $A_i\in\operatorname{End}(\mathbb C)$, and target-side lists $(t_j,B_j)$, $\tau<t_1<\cdots<t_\ell<T$, $B_j\in\operatorname{End}(\mathbb C^2)$. The time parameters $T$, $\tau$, $s_i$, and $t_j$ have units of inverse energy, both Hamiltonians have units of energy, and the boundary vectors, insertion matrices, and interface map are dimensionless by convention. The normalized correlator for every such input is

$$C_\tau((s_i,A_i)_{i=1}^k;(t_j,B_j)_{j=1}^{\ell})=\frac{\langle a,B_\ell\cdots B_1J A_k\cdots A_1b\rangle}{Z},$$

where an empty list contributes the identity matrix. This defines all declared correlators for arbitrary finite ordered lists on both sides and all admissible boundary vectors.

**Proof technique:** direct.

**Given:** [A1], [F1], and the statement in Statement refuted.

1.1 Regard both models on $[0,T]$, $T>0$, with a point interface at $\tau\in(0,T)$. For the complete source- and target-side lists in [A1], the correlator is $C_\tau=\langle a,B_\ell\cdots B_1J A_k\cdots A_1b\rangle/Z$, because both Hamiltonians vanish. Moving $\tau$ within the gap between the fixed source-side and target-side lists crosses no insertion, leaves their order unchanged, and introduces no nonidentity propagation factor. The numerator and denominator are therefore independent of $\tau$ for every allowed list and boundary pair. This is a topological interface under the full declared input set. [A1, given, algebra]

1.2 The interface is not an endodefect: its source space is $\mathbb C$ and its target space is $\mathbb C^2$, so the two complete model data are distinct. It also has no two-sided inverse. For any linear map $S:\mathbb C^2\to\mathbb C$, the composite $JS$ has rank at most one, whereas $I_{\mathbb C^2}$ has rank two; hence $JS\ne I_{\mathbb C^2}$. [A1, algebra]

2.1 By [F1], topologicality alone does not make this interface an internal symmetry; the explicit topological interface from step 1.1 fails both the same-model and two-sided-inverse conditions in step 1.2. It refutes the universal statement. [F1, step 1.1, step 1.2] ∎
