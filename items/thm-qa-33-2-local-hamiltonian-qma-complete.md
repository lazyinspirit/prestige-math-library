---
id: thm-qa-33-2-local-hamiltonian-qma-complete
kind: theorem
title: 2-Local Hamiltonian is QMA-complete
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - thm-qa-33-local-hamiltonian-in-qma
  - def-qa-33-qma-completeness
  - lem-qa-33-kkr-legal-clock-restriction
  - lem-qa-33-kkr-one-qubit-propagation-restriction
  - lem-qa-33-kkr-two-qubit-propagation-restriction
  - lem-qa-33-kkr-initial-state-restriction
  - lem-qa-33-algebraic-term-rationalization
  - def-promise-preserving-reduction
  - thm-qa-33-qma-amplification-entangled-witness-soundness
  - thm-qa-33-pure-witness-suffices
  - lem-polynomial-time-computations-have-logspace-uniform-circuits
  - def-logspace-uniform-circuit-family
  - lem-qa-33-finite-dimensional-unitary-synthesis
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-cnot-and-control-target-order
justified_by: []
proof_strategy: direct
axiom_use: None; the proof uses four finite-dimensional projection restrictions and a polynomial-time reduction.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Julia Kempe, Alexei Kitaev, and Oded Regev, The Complexity of the Local Hamiltonian Problem"
      url: https://arxiv.org/pdf/quant-ph/0406180
      locator: Theorem 1 and §5, restrictions 1–4, PDF pp. 8–18
    - title: "Dorit Aharonov and Tomer Naveh, Quantum NP: A Survey"
      url: https://arxiv.org/pdf/quant-ph/0210077
      locator: §4, Feynman–Kitaev reductions, PDF pp. 10–18
---

## Statement

For fixed $k=2$, the rationally encoded $k$-Local Hamiltonian promise problem with polynomially many terms of polynomial norm and inverse-polynomial promise gap is QMA-complete. Hardness uses KKR's direct circuit-to-Hamiltonian reduction: penalize illegal unary clocks, incorrect one-qubit propagation, incorrect controlled-phase propagation, and nonzero initialized ancillas in that order. Every displayed summand is at most 2-local. If the four projection errors are each below $1/64$, the amplified NO ground energy is at least $3/4-4/64=11/16$, while YES energy is at most $1/4$. The resulting gap is at least $7/16$ before rationalization; [[lem-qa-33-algebraic-term-rationalization]] yields a rational instance with inverse-polynomial encoding and preserved gap. Membership is [[thm-qa-33-local-hamiltonian-in-qma]].

## Facts & Assumptions

**Given:** A QMA promise verifier on input $x$ with polynomially bounded circuit size.

[F1] [[thm-qa-33-local-hamiltonian-in-qma]]: rationally encoded fixed-locality Hamiltonian is in QMA using generated local measurements.

[F2] [[def-qa-33-qma-completeness]]: QMA-completeness is membership plus hardness under deterministic promise-preserving reductions.

[F3] [[lem-qa-33-kkr-legal-clock-restriction]]: a polynomial clock penalty restricts to legal unary clocks with error below $1/64$.

[F4] [[lem-qa-33-kkr-one-qubit-propagation-restriction]]: a polynomial $J_1$ restricts legal histories to correct one-qubit propagation with error below $1/64$.

[F5] [[lem-qa-33-kkr-two-qubit-propagation-restriction]]: a polynomial $J_2$ restricts to all correct propagation with error below $1/64$.

[F6] [[lem-qa-33-kkr-initial-state-restriction]]: a polynomial $J_{in}$ restricts to clean ancillas with error below $1/64$ and gives the output energy bounds.

[F7] [[lem-qa-33-algebraic-term-rationalization]]: rationalization shifts each energy threshold by at most the chosen total norm error.

[F8] [[thm-qa-33-qma-amplification-entangled-witness-soundness]]: the verifier can be amplified with polynomial overhead to completeness at least $3/4$ and soundness at most $1/4$.

[F9] [[lem-polynomial-time-computations-have-logspace-uniform-circuits]] supplies polynomial-size Boolean circuits for a fixed polynomial-time predicate; the size, type, predecessor and output queries of [[def-logspace-uniform-circuit-family]] enumerate their complete lists in polynomial time.

[F12] [[lem-qa-33-finite-dimensional-unitary-synthesis]] supplies an exact Toffoli decomposition over QC14 by its parity-phase construction. The exact one-qubit matrices of [[def-qc-one-qubit-gate-alphabet-and-rotations]] give $Z=T^4$, $X=HT^4H$, and CNOT has the control-first action of [[def-qc-cnot-and-control-target-order]].

[F10] [[def-promise-preserving-reduction]]: a deterministic polynomial-time many-one map is promise-preserving when it sends YES inputs to YES inputs and NO inputs to NO inputs.

[F11] [[thm-qa-33-pure-witness-suffices]]: if a witness density operator attains a completeness threshold, some pure-state density operator attains at least the same threshold.

## Proof

1.1 By [F8], amplify the verifier to completeness at least $3/4$ and soundness at most $1/4$ using polynomially many repetitions. On each YES input, [F11] lets the amplified verifier attain its completeness threshold with a pure witness. For each source input $x$, make the amplified circuit input-specific: replace its classical input register and every parallel-copy input register by fresh zero-initialized scratch wires, count all of them among the clean ancillas $A$, and prefix the circuit with $X=HT^4H$ on each root input bit where $x_i=1$. Then use the CNOT fanout prescribed by [F8] to load the same basis string $x$ into each separate copy register. Use [F9] to enumerate Boolean circuits for the terminal predicates and the final majority predicate, specializing their classical input bits to $x$. Implement these exactly: compute each Boolean node into a fresh zero bit in topological order, using $X$ and CNOT for constants and NOT, Toffoli for AND, and two CNOTs and a Toffoli for $a\lor b=a\oplus b\oplus ab$; repeated input ports are handled by copying their common input. Copy the final accept bit to a fresh output and reverse the node computations. By [F12] every gate in this predicate computation is an exact QC14 word. Count all its zero-initialized work wires in $A$. Thus no approximate quantum interpreter is invoked and there is no predicate-compilation acceptance error. Thus the input-penalized history starts with all input scratch registers zero, and the prefix and fanout set every verifier input to this particular $x$ before verification. Replace each CNOT by the exact identity $CNOT=(I\otimes H)CZ(I\otimes H)$; $Z=T^4$, and $CZ$ has exact matrix $\operatorname{diag}(1,1,1,-1)$. If there are no controlled-$Z$ gates, add two cancelling $CZ$ gates on two fresh clean work qubits; their product is identity. For each designated $CZ$ on wires $f,s$ at time $t$, insert $Z_f,Z_s$ at times $t-2,t-1$ before it and $Z_f,Z_s$ at $t+1,t+2$ after it. These commute with $CZ$ and each wire has two $Z$ factors, so the computation is unchanged. Let $T_2\ge1$ count the resulting controlled-$Z$ gates; choose polynomial $L\ge5$ larger than every one-qubit segment plus its four inserted $Z$ steps, including the input-loading prefix, pad each segment with exact idle identity matrices on a fixed work wire to exactly $L-1$ one-qubit steps, placing all padding between its prescribed initial and final $Z$ steps so that the two $Z$ steps on each side of every $CZ$ stay adjacent to that gate, and set $T=(T_2+1)L-1$. Thus controlled-$Z$ gates occur at $lL$, every other step is a one-qubit unitary, and all clock indices required by the KKR terms exist. The identities are matrix entries of the reduction's finite Hamiltonian list and do not alter the verifier computation. The padded length remains polynomial. [F8, F9, F11, F12, given, algebra]

1.2 Set $\epsilon_0=\epsilon_1=\epsilon_2=\epsilon_{in}=1/64$. First choose $J_{in}$ with effective gap $J_{in}/(T+1)>2K_{in}+K_{in}^2/\epsilon_{in}$, where $K_{in}$ bounds the compressed output term. Next choose $J_2$ so $J_2g_2>2K_2+K_2^2/\epsilon_2$, with $K_2$ bounding $H_{out}+J_{in}H_{in}$. Then choose $J_1$ so $J_1g_1>2K_1+K_1^2/\epsilon_1$, where $K_1$ bounds $H_{out}+J_{in}H_{in}+J_2H_{prop2}$. Finally choose $J_{clock}>2K_{clock}+K_{clock}^2/\epsilon_0$, where $K_{clock}$ bounds all preceding weighted terms. The gaps $g_1,g_2$ are inverse polynomial by [F4]–[F5]; each $K_i$ is polynomial in the verifier length and earlier weights. Choose each next integer also larger than $T^2$ times the previous weight. All four remain polynomial and satisfy $J_{in}\ll J_2\ll J_1\ll J_{clock}$. [F3, F4, F5, F6, F9, algebra]

1.3 Apply the four restrictions in order. The illegal-clock term, one-qubit edge terms, KKR controlled-phase checks, and input penalty each lose less than $1/64$ from the least eigenvalue by [F3]–[F6]. On YES the valid clean history has energy equal to rejection probability, at most $1/4$, so the full Hamiltonian has least eigenvalue at most $1/4$ by the projection-lemma upper bounds. On NO the final clean-history subspace has least output energy at least $3/4$; the four lower-bound errors sum to less than $4/64$, so the full least eigenvalue is greater than $11/16$. [F3, F4, F5, F6, algebra]

2.1 All terms of $H_{clock}$ are pair projectors. A one-qubit propagation check couples one work qubit and a clock projector. Each $H_{qubit,t}$ summand couples one work qubit and one clock bit, and each $H_{time,t}$ summand acts on one or two clock bits. Input and output terms couple one work and one clock qubit. Thus every summand is at most 2-local, and the number and norms are polynomial because there are polynomially many clock pairs and all four weights are polynomial. Choose rational thresholds $a=1/4$, $b=11/16$; the strict bound in step 1.3 places every NO instance above $b$. Apply [F7] with $\tau\le(b-a)/8$ and shifted thresholds; this preserves at least $3(b-a)/4>0$ gap and gives a polynomial-time rational encoding. The verifier generator and all arithmetic are deterministic polynomial time, so [F10] makes this a promise-preserving reduction from every QMA problem. Membership is [F1]. [F1, F2, F7, F10, step 1.1, step 1.2, step 1.3, algebra] ∎
