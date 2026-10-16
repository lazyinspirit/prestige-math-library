---
id: def-qa-17-walk-access-model
kind: definition
title: "Finite row-preparation access model for a Szegedy walk"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - def-qa-17-szegedy-walk
  - def-qa-17-finite-stochastic-kernel
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-reflection
  - def-qc-circuit-cost-model
  - def-qc-uniform-circuit-family
  - def-qc-dirac-notation-conversion
justified_by:
  - thm-qa-17-walk-access-cost
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §18.2"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §8.2"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Definition

For a nonempty finite row-stochastic kernel $(X,P)$, a **row-preparation access model** supplies an explicit bijection $\eta:X\to\{0,\ldots,|X|-1\}$; write $\kappa_x$ for the image of $x$ under this bijection. Every ket $|x\rangle$ below denotes the basis vector $|\kappa_x\rangle$. The model supplies a finite work register $W$ with a specified clean unit vector $|0_W\rangle$ and a unitary $V_P$ on the ordered register product $\mathbb C^X\otimes\mathbb C^X\otimes W$ satisfying

$$V_P\bigl(|x\rangle\otimes|0\rangle\otimes|0_W\rangle\bigr)=\left(|x\rangle\otimes\sum_y\sqrt{P_{xy}}|y\rangle\right)\otimes|0_W\rangle\qquad(x\in X).$$

The state encoding and its description are part of the supplied circuit interface and are included in the circuit description or uniform generator. The model separately declares access and costs for the forward call $V_P$, inverse call $V_P^*$, controlled $V_P$, controlled $V_P^*$, a direct range-reflection call, controlled range-reflection access, the clean-state reflection $R_0$, controlled $R_0$, the swap on the first two registers, and controlled swap access. The clean-state reflection is

$$R_0:=2\bigl(I_X\otimes|0,0_W\rangle\langle0,0_W|\bigr)-I,$$

where the second register and work register are in their specified clean states. When range reflection is implemented from row preparation, the supplied circuit word is $V_PR_0V_P^*$; the access-cost theorem proves that on the clean-work subspace it realizes the logical reflection $2TT^*-I$. The swap acts as $S$ on the first two registers and as the identity on $W$.

Query calls, gate counts, circuit-description bits, uniform-generation time, and precision are separate cost coordinates. A controlled walk implemented factor by factor needs controlled access to each constituent, including the preparation calls, $R_0$, and the swap. A matrix $P$ by itself supplies none of these circuits or efficient costs. For a family of encoded chains, a uniform circuit family is an additional explicit input, not a consequence of the finite matrix definition.
