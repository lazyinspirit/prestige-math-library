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

[A1] The source model has state space $\mathbb C$ and zero Hamiltonian; the target has state space $\mathbb C^2$ and zero Hamiltonian. Propagation over every interval is the identity, and the interface map is $J(z)=(z,0)$.

[F1] [[def-aqft-topological-interface]]: a topological interface preserves all declared correlators under allowed motion, while an internal symmetry interface must be an endodefect of the same complete model data and have a two-sided inverse under fusion.

## Counterexample

**Proof technique:** direct.

**Given:** [A1], [F1], and the statement in Statement refuted.

1.1 Regard both models on the time interval $[0,T]$, $T>0$, with a point interface at $\tau\in(0,T)$. For arbitrary boundary vectors $a\in\mathbb C^2$ and $b\in\mathbb C$, its transfer amplitude is $C_\tau=\langle a,e^{-(T-\tau)H_+}J e^{-\tau H_-}b\rangle=\langle a,Jb\rangle$, because both Hamiltonians vanish. With any fixed local matrix insertions on the two sides that are not crossed by the moving point, all propagation factors remain identities and the ordered product is unchanged. Thus every declared correlator is independent of $\tau$. [A1, given, algebra]

1.2 The interface is not an endodefect: its source space is $\mathbb C$ and its target space is $\mathbb C^2$, so the two complete model data are distinct. It also has no two-sided inverse. For any linear map $S:\mathbb C^2\to\mathbb C$, the composite $JS$ has rank at most one, whereas $I_{\mathbb C^2}$ has rank two; hence $JS\ne I_{\mathbb C^2}$. [A1, algebra]

2.1 By [F1], topologicality alone does not make this interface an internal symmetry; the explicit topological interface from step 1.1 fails both the same-model and two-sided-inverse conditions in step 1.2. It refutes the universal statement. [F1, step 1.1, step 1.2] ∎
