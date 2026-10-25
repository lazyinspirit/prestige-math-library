---
id: def-qc-oracle-full-list-circuit-family
kind: definition
title: "Oracle-aware full-list quantum circuit family"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-qc-uniform-circuit-family
  - def-qc-circuit-cost-model
  - def-qc-promise-computation-model
  - def-qc-quantum-acceptance-probability
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "John Watrous, Quantum Computational Complexity, Sections III.2 and IV.1"
      url: "https://arxiv.org/pdf/0804.3401"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapters 2 and 13"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition

An **oracle-aware full-list family** has an access specification and a deterministic polynomial-time full-list generator on unary input $1^n$, with the same machine, clock, and final-tape conventions as [[def-qc-uniform-circuit-family]]. The access specification gives, at each length $n$, finitely many named ports $\mathcal O_{n,j}$, each a unitary on a positive number $k_{n,j}$ of qubits. These are mathematical unitary data supplied by the access specification, not matrices computed by the generator. For a parametrized oracle instance, fix that instance throughout a computation and all its repetitions. The generator, printed descriptors, and final classical predicate are independent of the hidden instance: its influence enters only through the granted unitary ports. Any public parameters are fixed explicitly as part of the family specification; oracle comparisons hold them fixed. A port acts only on the wires in its occurrence; there is no persistent private oracle memory, stochastic resampling, or communication between disjoint occurrences through hidden registers.

Each port has a descriptor: a distinct nonempty binary name, its width $k_{n,j}$, and four grant bits for forward, inverse, controlled-forward, and controlled-inverse access. At least one variant is granted. A granted variant has an explicitly specified positive integer query charge $c_{n,j,v}$; an ungranted variant cannot occur. Forward and inverse have arity $k_{n,j}$; controlled variants have arity $k_{n,j}+1$, with the first wire the control and the remaining ordered wires the target. Their mathematical actions are respectively $\mathcal O_{n,j}$, $\mathcal O_{n,j}^{\dagger}$, and the corresponding controlled unitary (identity on control $0$, the indicated unitary on control $1$). Mathematical existence of an inverse or controlled unitary grants no access to it. The descriptors printed by the generator must agree with the supplied access specification at every length; syntactic decoding alone does not decide this semantic condition.

The following is a separate binary format; the original two-bit Clifford+T format of [[def-qc-uniform-circuit-family]] remains unchanged. Use its unary and self-delimiting natural codes. The header gives $n,m$ in unary with $m\ge n$, then the total number $g$ of operation occurrences and the number of port descriptors as self-delimiting naturals. Each descriptor gives the name length as a self-delimiting natural followed by exactly that many name bits, the positive port width in unary, four grant bits in the order above, and one positive self-delimiting charge for each granted variant in that order. Descriptor order fixes port indices starting at zero.

The header and descriptors are followed by exactly $g$ operation records. A three-bit label $000,001,010,011$ denotes respectively ordinary $H,T,T^{\dagger},\mathrm{CNOT}$ and is followed by the same ordered wire-index fields as in the original format. Label $100$ denotes an oracle slot: a self-delimiting port index, a two-bit variant index in the descriptor order, and exactly the variant's arity many ordered self-delimiting wire indices. Every index is below $m$, and wires within each record are distinct. The final output-count and ordered distinct output-wire list use the original format. All other labels, duplicate names, ungranted variants, invalid fields, truncations, and trailing bits are rejected. As in the original code, the decoder is total by returning a malformed-code symbol on rejection. The generator prints this entire description, including every descriptor and every slot, within its explicit polynomial clock. The port count, widths, names, and charges must therefore fit in that printed description; neither an exponentially long list nor an implicit operation subroutine counts as full-list output.

For a fixed length and oracle instance, instantiating the slots gives an ordinary finite unitary circuit with a finite enlarged gate alphabet in the sense underlying [[def-qc-uniform-circuit-family]]. Use the ordered wire embedding and chronological composition of that item. Zero auxiliary initialization, final output measurement, and a separately supplied total polynomial-time classical predicate are exactly those of [[def-qc-promise-computation-model]]; acceptance is the finite coordinate sum in [[def-qc-quantum-acceptance-probability]]. No oracle call is performed by the classical generator or predicate unless a separate classical access interface is declared; here neither is granted one.

In the cost convention of [[def-qc-circuit-cost-model]], $g(C)$ counts all operation occurrences. Write $g_{\rm ord}(C)$ for the number of ordinary records and $N_{j,v}(C)$ for the number of slots for port $j$, variant $v$. Thus $g(C)=g_{\rm ord}(C)+\sum_{j,v}N_{j,v}(C)$. Record the raw call count $q_j(C)=\sum_vN_{j,v}(C)$ and, separately, the declared charged query cost $Q_j(C)=\sum_v c_{n,j,v}N_{j,v}(C)$. A polynomial bound on the binary description length does not imply a polynomial bound on $Q_j$ if charges have large binary values. Ordinary CNOT records incur ordinary gate cost and no query, even if a named port happens to have the same matrix. Oracle records remain query records even when their matrices admit an ordinary implementation; substituting such an implementation is a separate construction and cost claim.

The **ordinary mode** instead uses the exact original full-list code with no ports or query slots. In particular the oracle-aware format does not enlarge the gate library or alter the exact arithmetic convention of the QC14 BQP definition.
