---
id: thm-qa-33-5-local-hamiltonian-qma-complete
kind: theorem
title: 5-Local Hamiltonian is QMA-complete
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - thm-qa-33-local-hamiltonian-in-qma
  - def-qa-33-qma-completeness
  - def-qa-33-feynman-kitaev-history-hamiltonian
  - lem-qa-33-feynman-propagation-path-gap
  - lem-qa-33-feynman-input-output-penalties
  - lem-qa-33-geometric-soundness-bound
  - lem-qa-33-unary-clock-locality
  - lem-qa-33-algebraic-term-rationalization
  - def-promise-preserving-reduction
  - thm-qa-33-qma-amplification-entangled-witness-soundness
  - thm-qa-33-pure-witness-suffices
  - lem-qa-33-uniform-programmed-circuit-interpreter
justified_by: []
proof_strategy: direct
axiom_use: None; the reduction uses finite circuits, Hamiltonian spectra and projection bounds.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dorit Aharonov and Tomer Naveh, Quantum NP: A Survey"
      url: https://arxiv.org/pdf/quant-ph/0210077
      locator: §4, Theorem 2 and proof, PDF pp. 10–18
    - title: "Julia Kempe, Alexei Kitaev, and Oded Regev, The Complexity of the Local Hamiltonian Problem"
      url: https://arxiv.org/pdf/quant-ph/0406180
      locator: §4, PDF pp. 5–8
---

## Statement

For fixed $k=5$, the rationally encoded local-Hamiltonian promise problem with polynomial term count, polynomial local norm bound, and inverse-polynomial promise gap is QMA-complete under deterministic polynomial-time promise-preserving many-one reductions. The reduction is the unary-clock Feynman–Kitaev construction of [[def-qa-33-feynman-kitaev-history-hamiltonian]], with the overlap correction in [[lem-qa-33-geometric-soundness-bound]] and illegal-clock penalty in [[lem-qa-33-unary-clock-locality]]. It outputs at most 5-local terms, polynomially many terms of polynomial norm, and explicitly computable rational thresholds. Algebraic gate entries are rationalized by [[lem-qa-33-algebraic-term-rationalization]].

## Facts & Assumptions

**Given:** A QMA promise problem and its polynomial-time uniform verifier family.

[F1] [[thm-qa-33-local-hamiltonian-in-qma]]: the finite matrix-encoded 5-local Hamiltonian promise problem belongs to QMA.

[F2] [[def-qa-33-qma-completeness]]: QMA-hardness requires a deterministic polynomial-time promise-preserving map from every QMA promise problem.

[F3] [[def-qa-33-feynman-kitaev-history-hamiltonian]]: unary-clock propagation terms use at most two computation and three clock qubits.

[F4] [[lem-qa-33-feynman-propagation-path-gap]]: the legal propagation kernel has gap at least $2/(T+1)^2$.

[F5] [[lem-qa-33-feynman-input-output-penalties]]: a valid clean history has output energy equal to verifier rejection probability.

[F6] [[lem-qa-33-geometric-soundness-bound]]: after amplification to soundness at most $1/8$, the legal-clock base Hamiltonian has least eigenvalue at least $1/(2(T+1)^3)$ on NO inputs.

[F7] [[lem-qa-33-unary-clock-locality]]: a polynomial clock weight makes the illegal-clock restriction error less than one quarter of the legal soundness gap.

[F8] [[lem-qa-33-algebraic-term-rationalization]]: polynomial-time rational approximations preserve the promise gap with explicit threshold shifts.

[F9] [[thm-qa-33-qma-amplification-entangled-witness-soundness]]: polynomially many repetitions reduce both QMA errors to any inverse-polynomial target.

[F10] [[lem-qa-33-uniform-programmed-circuit-interpreter]]: a polynomial-time classical computation of the terminal predicate has a full-list uniform reversible QC14 implementation with clean initial work.

[F11] [[def-promise-preserving-reduction]]: a deterministic polynomial-time many-one map is promise-preserving when it sends YES inputs to YES inputs and NO inputs to NO inputs.

[F12] [[thm-qa-33-pure-witness-suffices]]: if a witness density operator attains a completeness threshold, some pure-state density operator attains at least the same threshold.

## Proof

1.1 First use [F9] to amplify the source verifier to completeness at least $3/4$ and soundness at most $1/4$. Compile each copy's terminal predicate into a reversible circuit with one accept output, and include its input-copy CNOTs and clean predicate workspace in a fixed polynomial gate envelope $T_1(n)\ge n+1$. Fix a constant $C$ large enough that a second amplification with $r=O(\log(C(T_1(n)+1)^2))$ repetitions, together with its reversible majority predicate, has gate count at most $T_{max}(n):=C(T_1(n)+1)^2$; such a $C$ exists because $\log(C(T_1+1)^2)\le O(\log C+\log(T_1+1))$ and $T_1\log(T_1+1)\le O((T_1+1)^2)$. Put $N_{max}=T_{max}(n)+1$ and $\delta(n)=1/(64N_{max}^3)$. This is a polynomial-time computable rational target, and the second amplification has completeness at least $1-\delta(n)$ and soundness at most $\delta(n)$. For each input $x$, form an input-specific circuit $V_x$ with fresh scratch input wires initially zero, and count the root input register, every copied-input register, all predicate workspace and every other initially zero work wire among the clean ancillas $A$. Its prefix loads $x$ into the root input register using $X=HT^4H$; the CNOT fanout in [F9] then prepares a separate $|x\rangle$ in each verifier-copy input register. Run the amplified verifier gates, and reversibly compute their complete acceptance predicate, specialized to this fixed $x$, into one output qubit. Thus $H_{in}$ enforces zero on each classical-input scratch register at time zero, and the prefix and fanout set every verifier input to this fixed $x$ before verification. The input-specific full gate list is generated in polynomial time from $x$, and the envelope $T_{max}$ includes these prefix, fanout and predicate gates. If the verifier has zero gates, include one idle identity time slot in the Hamiltonian list so its padded length $T\ge1$ without changing acceptance. Construct the unary history Hamiltonian with $H=H_{in}+H_{prop}+H_{out}+J_{clock}H_{clock}$. Every propagation term uses at most two work qubits and a three-bit clock window by [F3]; input, output and clock penalties are at most 2-local. [F3, F9, F10, given, algebra]

2.1 For a YES input, [F12] lets the twice-amplified verifier use a pure witness accepted with probability at least $1-\delta(n)$; let $|\eta\rangle$ be its normalized history. Input, propagation and clock energies vanish; [F5] gives output energy at most $\delta(n)\le1/(64N^3)$ because $T\le T_{max}(n)$. Thus $\lambda_{min}(H)\le a:=\delta(n)$. For a NO input, [F6] gives legal-clock ground energy at least $1/(2N^3)$. The norm of the non-clock sum is at most $K=T+|A|+N$ because each propagation edge has norm at most one, the input sum has norm at most the number $|A|$ of clean ancillas, and $\|H_{out}\|=N$. Choose the explicit integer $J_{clock}=2K+8N^3K^2+1$; then [F7] gives illegal-clock projection error less than $1/(8N^3)$, so $\lambda_{min}(H)\ge3/(8N^3)>b:=1/(4N^3)$. Since $a\le1/(64N^3)$, the promise gap is at least $15/(64N^3)$, inverse polynomial. Each matrix term and its norm bound is computed from the finite gate list and polynomial weights. [F4, F5, F6, F7, F10, F12, step 1.1, algebra]

3.1 The verifier gate alphabet has fixed algebraic matrix entries, so the generated local terms have effectively encoded algebraic entries of polynomial description length. Apply [F8] with $\tau\le(b-a)/8$ and output rationalized terms with thresholds $a+\tau$ and $b-\tau$. The resulting promise gap is at least $3(b-a)/4$, and the number, bit length and norm of the rational terms remain polynomial. This is a deterministic polynomial-time map preserving YES and NO by [F11]; [F2] makes the problem QMA-hard. Membership is [F1], so it is QMA-complete. [F1, F2, F8, F11, step 2.1, algebra] ∎
