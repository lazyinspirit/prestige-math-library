---
id: lem-qa-33-uniform-programmed-circuit-interpreter
kind: lemma
title: Uniform interpretation of an input-generated quantum circuit
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - lem-polynomial-time-computations-have-logspace-uniform-circuits
  - def-logspace-uniform-circuit-family
  - def-qc-uniform-circuit-family
  - def-qc-circuit-syntax-and-register-order
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-cnot-and-control-target-order
  - def-qc-circuit-cost-model
  - lem-qa-33-finite-dimensional-unitary-synthesis
justified_by: []
proof_strategy: direct
axiom_use: None; the construction uses finite reversible circuits, uniform enumeration, and a finite union bound on operator errors.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
      locator: Chapter 6 §6.1, Theorem 6.7, PDF pp. 120–121 (book pp. 104–105), logspace-uniform circuit construction
    - title: "John Watrous, The Theory of Quantum Information"
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
      locator: Chapter 3, finite circuit composition and unitary gates
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: Chapter 2, §§2.1–2.3, finite circuit model and gate lists
---

## Statement

Use the fixed QC14 alphabet $\{H,T,T^\dagger,\mathrm{CNOT}\}$. Let $M$ be one fixed deterministic polynomial-time classical machine that, on each binary input $x$ of length $n$, outputs a valid circuit description $P_x$ of at most $L(n)$ gate records on at most $W(n)$ data wires, where $L,W$ are fixed polynomials. Encode the output as exactly $L(n)$ fixed-width records: each record is either blank, a one-qubit label $H,T,T^\dagger$ with one wire address, or a CNOT label with an ordered pair of distinct wire addresses; unused address fields are zero. Let $\delta(n)$ be any inverse-polynomial rational tolerance produced by a fixed polynomial-time machine from $1^n$, with polynomial bit length. There is a full-list uniform QC14 family generated from $1^n$ which on classical basis input $x$ and data state $|\psi\rangle$ outputs a state within operator error $\delta(n)$, up to a global scalar, of
$$|x\rangle\otimes P_x|\psi\rangle\otimes|M(x)\rangle\otimes|0^w\rangle$$
for a polynomially bounded work width $w(n)$. Its size and generator time are polynomial in $n$ and $1/\delta(n)$. The program and arithmetic registers are terminal unmeasured wires; their presence changes the data-register outcome law from executing $P_x$ by at most $2\delta(n)$. This lemma converts a polynomial-time input-dependent compiler into the input-length-uniform verifier model.

## Facts & Assumptions

**Given:** The fixed machine $M$, the bounds $L,W$, its valid padded gate-record output, the polynomial-time rational tolerance $\delta(n)$, a classical basis input $x$, and a data state.

[F1] [[lem-polynomial-time-computations-have-logspace-uniform-circuits]]: each fixed polynomial-time Boolean computation has a polynomial-size logspace-uniform Boolean circuit family.

[F2] [[def-qc-uniform-circuit-family]]: a QC14 family is generated from unary input length by a deterministic polynomial-time procedure that emits the complete gate list.

[F3] [[def-qc-circuit-syntax-and-register-order]]: the finite circuit syntax specifies ordered wires and gate operands.

[F4] [[def-logspace-uniform-circuit-family]]: a logspace-uniform circuit family has deterministic logarithmic-space SIZE, TYPE, predecessor, and output queries, so its polynomial-size records can be enumerated in polynomial time.

[F5] [[lem-qa-33-finite-dimensional-unitary-synthesis]]: every fixed-dimensional unitary with polynomial-time Cauchy entries can be compiled over QC14 to any inverse-polynomial operator precision; its construction gives an exact Toffoli decomposition from $H,T,T^\dagger,\mathrm{CNOT}$.

[F6] [[def-qc-one-qubit-gate-alphabet-and-rotations]]: $H,T,T^\dagger$ are the exact one-qubit gates of the QC14 alphabet.

[F7] [[def-qc-cnot-and-control-target-order]]: CNOT flips its named target exactly when its named control is one.

[F8] [[def-qc-circuit-cost-model]]: gate count, wire count, and full-list generator time are separate circuit costs that must each be bounded.

## Proof

1.1 Let $r(n)=3+2\lceil\log_2\max\{2,W(n)\}\rceil$ be a fixed record width, with three type bits and two address fields, and let $B(n)=L(n)r(n)$ be the padded program bit length. For each bit position $1\le i\le B(n)$, define a fixed polynomial-time machine $M'(x,i)$ that runs $M(x)$ and returns the $i$th bit of its padded record string. Apply [F1] to $M'$. The uniform generator can specialize the index input $i$ to each constant $1,\ldots,B(n)$, enumerate every Boolean gate record using [F4]'s logarithmic-space size/type/predecessor queries, and concatenate the $B(n)$ circuits. The resulting multi-output Boolean circuit computes the entire gate program; it has polynomial size and is generated in polynomial time from $1^n$. [F1, F2, F3, F4, given, algebra]

1.2 Allocate one clean value wire per Boolean node and traverse the circuit's topological order. A constant zero leaves its target zero; a constant one applies $X=HT^4H$; a NOT node writes $1\oplus a$ by $X$ followed by CNOT; an AND node writes $ab$ into a zero target with Toffoli; and an OR node writes $a\oplus b\oplus ab=a\lor b$ with two CNOTs and one Toffoli. If both input ports name the same source, one CNOT copies that source for either AND or OR. Copy each designated circuit output into its separate program bit by CNOTs, then reverse all node computations to return their value wires to zero. The exact Toffoli circuit is supplied by [F5]'s construction. [F3, F5, F6, F7, algebra]

2.1 For each record position $t$ and each candidate gate/address tuple, compute into a clean condition bit the conjunction that all type and address fields match that tuple. Bitwise comparison uses $X$ on negative controls and an AND tree of Toffoli gates; reverse it after the controlled operation. Apply the fixed controlled target $I\oplus G$ to this bit and the one or two selected data wires, where $G$ is the candidate gate $H,T,T^\dagger$, or CNOT. The target dimension is at most $2^3$ and its matrix is fixed, so [F5] produces a QC14 template with operator error $\xi$ up to one global phase on the full target. For a valid record exactly one candidate condition is true; the exact product of all candidate templates at position $t$ is therefore the specified gate, while a blank record applies identity. [F3, F5, F6, F7, step 1.1, algebra]

3.1 Put $P_0(n)=L(n)(3W(n)+W(n)(W(n)-1))$ and $P(n)=\max\{1,P_0(n)\}$; there are at most $P_0(n)$ candidate templates, including the case $P_0(n)=0$. Choose $\xi=\delta(n)/(2P(n))$. Each comparison and its inverse are exact, so conjugating a template error preserves its operator norm; the global phases of the templates multiply the entire unconditional interpreter by one scalar. Telescoping the $P_0(n)$ unitary replacements bounds the implemented program's operator error by $P_0(n)\xi\le\delta(n)/2$; when $P_0(n)=0$ there are no replacements and the error is zero. The reversible program generator is exact on every basis input and leaves $x$ unchanged; its program bits can be included among the terminal unmeasured wires. Thus the full circuit implements $P_x$ to error at most $\delta(n)$ for every classical $x$. [F2, F4, F5, step 1.2, step 2.1, algebra]

4.1 If two output unitaries differ by operator norm at most $\delta$, then for every unit input vector their output vectors differ in norm by at most $\delta$; for any accepting projection $P$, the acceptance probabilities differ by at most $2\delta$, since $|\langle Pv,v\rangle-\langle Pw,w\rangle|\le\|v-w\|(\|v\|+\|w\|)\le2\delta.$ This also holds for mixed inputs by finite linearity. The polynomial bounds on $L,W$ and $1/\delta$ make the complete full-list generator and circuit size polynomial in the separate coordinates of [F8]. No nonstandard axiom is used. [F2, F8, step 3.1, algebra] ∎
