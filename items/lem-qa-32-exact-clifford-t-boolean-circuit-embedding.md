---
id: lem-qa-32-exact-clifford-t-boolean-circuit-embedding
kind: lemma
title: Boolean circuits compile exactly into the QC14 gate alphabet
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: quantum-complexity-classes-and-oracle-separations
dependency_level: 13
deps:
  - alg-qc-reversible-embedding
  - thm-qc-reversible-embedding-cost
  - def-qc-clifford-t-gate-library
  - def-qc-elementary-circuit-resources
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-uniform-circuit-family
  - def-boolean-circuit-size-depth-fanin-and-basis
justified_by: []
proof_strategy: direct
axiom_use: "None; the compilation is a finite gate replacement and uses no choice."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 5: Classical and Quantum Circuits, Sections 5.2.2–5.2.3"
      url: "https://www.preskill.caltech.edu/ph219/chap5_15.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Sections 2.1.2–2.3"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let a finite Boolean DAG in the basis of [[def-boolean-circuit-size-depth-fanin-and-basis]] have $n$ ordered input bits, $m$ ordered output ports, $S$ non-input nodes and $E$ input-port uses counted with multiplicity. There is a deterministic compiler which, from its explicit topological list, emits a valid QC14 circuit over exactly $H,T,T^\dagger,\mathrm{CNOT}$ with the first $n$ wires as data, $m$ zero-initialized target wires, at most $S+E$ clean value wires and one additional clean scratch wire. For every $x\in\{0,1\}^n$ and $y\in\{0,1\}^m$, its unitary satisfies

$$ |x,y,0^{S+E+1}\rangle\longmapsto |x,y\oplus f(x),0^{S+E+1}\rangle, $$

where $f(x)$ is the ordered Boolean output. It uses at most $27(6S+4E+m)$ QC14 gate occurrences, and the full self-delimiting circuit list is produced in time polynomial in the Boolean-DAG description length. The same action holds on superpositions by linearity.

## Facts & Assumptions

**Given:** The explicit Boolean DAG, the reversible embedding procedure, and the exact QC14 gate matrices. Construct the full gate list and verify its action, clean workspace, and polynomial generation cost.

[F1] [[alg-qc-reversible-embedding]]: evaluate every Boolean node into a fresh zero value bit, copy the ordered output ports into the target, and reverse the node-evaluation list.

[F2] [[thm-qc-reversible-embedding-cost]]: the reversible embedding implements the displayed XOR action using at most $6S+4E+m$ occurrences of $X$, CNOT, and Toffoli, with at most $S+E$ clean work bits.

[F3] [[def-qc-clifford-t-gate-library]]: $T=\operatorname{diag}(1,\omega)$, $\omega=e^{i\pi/4}$, $T^4=Z$, $H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$, and CNOT maps $|a,b\rangle$ to $|a,b\oplus a\rangle$ with the first wire as control; the QC14 circuit alphabet contains no implicit Toffoli or extra controlled-$T$ gate.

[F4] [[def-qc-circuit-syntax-and-register-order]] and [[def-qc-circuit-denotational-semantics]]: a circuit is a finite chronological list of layers, each containing gates with pairwise disjoint wire supports. Any chronological gate list defines such a circuit by placing each gate in its own singleton layer; its matrix is the chronological product with later gates on the left.

[F5] [[def-qc-uniform-circuit-family]]: a full-list QC14 description has unary input and total-wire counts, a self-delimiting gate count, exact gate labels and wire indices, and an ordered output tuple.

## Proof

1.1 For $a,b,c\in\{0,1\}$ set $d=a+b+c-(a\oplus b)-(a\oplus c)-(b\oplus c)+(a\oplus b\oplus c)$, with ordinary integer addition and subtraction. If exactly $k$ of $a,b,c$ equal $1$, then $d=0$ for $k=0,1,2$ and $d=4$ for $k=3$. Thus $d=4abc$. [given, F3, algebra]

2.1 Use one clean scratch bit $r$. Apply $T$ to each of the three data bits. For each of the three pair parities, compute that XOR into $r$ with two CNOTs, apply $T^\dagger$ to $r$, and undo the same two CNOTs. Compute $a\oplus b\oplus c$ into $r$ with three CNOTs, apply $T$, and undo those three CNOTs. Each parity routine restores $r$ to zero and leaves the data bits unchanged. The total phase on $|a,b,c\rangle$ is $\omega^d=(-1)^{abc}$, so this circuit is CCZ; it uses seven $T$ or $T^\dagger$ gates and eighteen CNOTs. [given, F3, step 1.1, construct, algebra]

3.1 Conjugate this CCZ circuit by $H$ on the third data wire. If $ab=0$, CCZ is the identity on that wire; if $ab=1$, it applies $Z=T^4$, and direct multiplication of the displayed matrices gives $HZH=X$. The result is therefore $|a,b,c\rangle\mapsto|a,b,c\oplus ab\rangle$, the Toffoli action. The scratch wire is still zero, and the replacement uses $2+7+18=27$ QC14 gates. [F3, step 2.1, algebra]

4.1 Replace each $X$ in the reversible embedding by $HT^4H$, which equals $X$ because $T^4=Z$ and $HZH=X$; this uses six QC14 gates. Leave each CNOT unchanged and replace each Toffoli by step 3.1. [F2, F3, step 3.1, algebra]

5.1 By [F2], the original macro list has at most $6S+4E+m$ occurrences. Each macro replacement has the same action on its data wires, returns the added scratch to zero, and uses at most $27$ gates, so the compiled list has at most $27(6S+4E+m)$ gates and at most $S+E+1$ clean work wires. The exact matrix identity on every computational-basis input extends by linearity to superpositions. [F2, F3, step 4.1, algebra]

6.1 Traverse the explicit topological DAG once to produce the finite macro list of [F1], then replace each macro by its fixed gate sequence and fixed scratch-wire indices. Put each emitted gate in its own singleton layer, which satisfies the disjoint-support condition in [F4] and preserves the chronological product. Serialize this gate sequence using [F5], with the target wires as the ordered output tuple. The traversal and each replacement emit a constant number of records per node, port use, or output; every encoded wire index has $O(\log(n+S+E+m+2))$ bits. The unary wire header and all self-delimiting records consequently have polynomial total length and can be written in polynomial time. All gate-wire tuples have distinct entries, the input, target and work blocks are disjoint, and the output indices are distinct. Thus the singleton-layer circuit and its full-list code satisfy [F4]–[F5], with the action established in step 5.1. [F1, F4, F5, step 5.1, construct] ∎
