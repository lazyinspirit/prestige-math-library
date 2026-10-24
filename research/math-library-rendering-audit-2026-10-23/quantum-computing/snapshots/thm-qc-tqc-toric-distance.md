---
id: thm-qc-tqc-toric-distance
kind: theorem
title: Toric code distance is L
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-qc-tqc-toric-checks
  - lem-qc-tqc-toric-cycle-quotient
  - def-qc-tqc-toric-logical-loops
  - thm-qc-tqc-toric-code-dimension
  - def-qc-stabilizer-distance
  - def-qc-stabilizer-syndrome-and-logical-operators
  - def-qc-local-operator-support-and-weight
  - thm-qc-pauli-commutator-is-symplectic-pairing
justified_by: []
proof_strategy: direct
axiom_use: "None; the lower bound counts edges across finitely many disjoint cuts."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Alexei Kitaev, Fault-tolerant quantum computation by anyons"
      url: https://arxiv.org/pdf/quant-ph/9707021
    - title: "Eric Dennis, Alexei Kitaev, Andrew Landahl, and John Preskill, Topological quantum memory"
      url: https://arxiv.org/pdf/quant-ph/0110143
    - title: "John Preskill, Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
---

## Statement

For the periodic $L\times L$ toric stabilizer code with $L\ge3$, the
minimum weight of a normalizer Pauli outside the scalar-phase stabilizer is
$d(S)=L$.

## Facts & Assumptions

**Given:** $L\ge3$, the toric checks on $2L^2$ edge qubits, their binary Pauli support convention, and their logical Pauli quotient.

[F1] [[def-qc-tqc-toric-checks]]: stars are X on incident primal edges and plaquettes are Z on face-boundary edges.

[F2] [[lem-qc-tqc-toric-cycle-quotient]]: a primal or dual cycle is a boundary exactly when both winding parities vanish; every nonboundary cycle has nonzero winding in one of the two coordinate directions.

[F3] [[def-qc-stabilizer-syndrome-and-logical-operators]]: the binary label of a Pauli records its X and Z supports, and normalizer Paulis are those commuting with all checks; logical classes are modulo phases and stabilizers.

[F4] [[thm-qc-pauli-commutator-is-symplectic-pairing]]: a Pauli commutes with a check exactly when their binary symplectic pairing is zero.

[F5] [[def-qc-tqc-toric-logical-loops]]: $\bar Z_1$ is a nontrivial logical Pauli supported on the $L$ horizontal edges $h_{i,0}$.

[F6] [[def-qc-stabilizer-distance]]: when the code encodes at least one qubit, distance is the minimum weight in $N(S)\setminus Z_nS$.

[F7] [[def-qc-local-operator-support-and-weight]]: the weight of a Pauli is the number of edge qubits on which it is nonidentity.

[F8] [[thm-qc-tqc-toric-code-dimension]]: the code has dimension $4$ and encodes two qubits.

## Proof

1.1 Let $E=i^aX^xZ^z$ be a Pauli in the normalizer. Commuting with every star forces the Z-support $z$ to have even incidence at every primal vertex; commuting with every plaquette forces the X-support $x$ to have even incidence at every dual vertex, by [F1] and [F4]. Thus $z$ is a primal cycle and $x$ is a dual cycle. [given, F1, F3, F4, construct]

2.1 If both cycles were boundaries, their supports would be products of plaquette and star checks respectively, so $E$ would be a scalar-phase stabilizer. Hence a nontrivial logical Pauli has at least one nonboundary cycle by [F2] and [F3]. That cycle has a nonzero winding parity. For a horizontal winding, each of the $L$ disjoint vertical cuts is crossed an odd number of times; for a vertical winding, each of the $L$ disjoint horizontal cuts is crossed an odd number of times. In either case its support contains at least one distinct edge from each cut, hence at least $L$ edges. The Pauli support contains the support of each nonzero X or Z chain, even when both bits occur on one qubit, so [F7] gives $\operatorname{wt}(E)\ge L$. [F1, F2, F3, F7, step 1.1, algebra]

3.1 The operator $\bar Z_1$ from [F5] has exactly $L$ distinct edge factors and is logically nontrivial. Thus the set defining [F6] is nonempty and contains a weight-$L$ element. The code encodes two qubits by [F8], so [F6] applies; combining this upper bound with step 2.1 gives $d(S)=L$. [F5, F6, F8, step 2.1, algebra] ∎

