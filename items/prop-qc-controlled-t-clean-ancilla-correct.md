---
id: prop-qc-controlled-t-clean-ancilla-correct
kind: proposition
title: Clean ancilla controlled T circuit is exact
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - alg-qc-controlled-t-clean-ancilla-circuit
  - def-qc-clifford-t-gate-library
  - def-qc-clean-and-dirty-ancillas
  - def-qc-toffoli-and-fredkin
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - lem-qc-local-gate-wire-embedding
  - def-qc-controlled-unitary-access
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Kliuchnikov, Maslov, and Mosca, Practical approximation of single-qubit unitaries by single-qubit quantum circuits"
      url: https://arxiv.org/pdf/1206.5236
dependency_level: 11
---

## Statement

The procedure of [[alg-qc-controlled-t-clean-ancilla-circuit]] acts on every
computational basis input $|a,b,0\rangle$ as
$|a,b,0\rangle\mapsto\omega^{ab}|a,b,0\rangle$. Consequently it implements
$C(T)$ on the two data bits and returns the clean ancilla to $|0\rangle$,
also when the data is entangled with any finite-dimensional reference register.

## Facts & Assumptions

**Given:** $a,b,t,q\in\{0,1\}$, $\omega=e^{i\pi/4}$, the ordered computational basis, and the displayed chronological gate word.

[F1] [[alg-qc-controlled-t-clean-ancilla-circuit]]: the Toffoli block is $H_t,C_{b,t},T_t^\dagger,C_{a,t},T_t,C_{b,t},T_t^\dagger,C_{a,t},T_b,T_t,H_t,C_{a,b},T_a,T_b^\dagger,C_{a,b}$.

[F2] [[def-qc-clifford-t-gate-library]]: $H$ acts by $H|q\rangle=(|0\rangle+(-1)^q|1\rangle)/\sqrt2$, $T|q\rangle=\omega^q|q\rangle$, and CNOT adds the control bit modulo $2$ to its target.

[F3] [[def-qc-circuit-denotational-semantics]]: the matrix of a chronological circuit is the product of its gate-embedding matrices, with later gates multiplying on the left.

[F4] [[lem-qc-local-gate-wire-embedding]]: a gate occurrence acts on its named ordered wires and as identity on all complementary wires.

[F5] [[def-qc-controlled-unitary-access]]: $C(T)=\operatorname{diag}(I_2,T)$ in the control-first basis.

[F6] [[def-qc-clean-and-dirty-ancillas]]: a clean ancilla is initialized in the specified zero state and must be returned exactly for every allowed data input.

[F7] [[def-qc-toffoli-and-fredkin]]: $T|a,b,t\rangle=|a,b,t\oplus ab\rangle$; applying this action twice restores $t$.

## Proof


1.1 Fix the controls $a,b$ and let $q$ be the target bit immediately after the first $H_t$. The seven phase gates in [F1] contribute exponent $E_{a,b}(q)=-(q\oplus b)+(q\oplus a\oplus b)-(q\oplus a)+b+q\pmod8$. For $(a,b)=00,01,10,11$, the pairs $(E(0),E(1))$ are respectively $(0,0),(1,1),(0,0),(7,3)$. Conjugating these diagonal phases by the final $H_t$ therefore gives, for the four control values, $I,\omega I,I,\omega^7X$ on the target. The last CNOT–$T_a$–$T_b^\dagger$–CNOT block contributes data phase $\omega^{a-(a\oplus b)}$, which is $1,\omega^{-1},1,\omega$ in the same order. The combined action is exactly $|a,b,t\rangle\mapsto|a,b,t\oplus ab\rangle$ with phase $1$ in all eight cases, proving the displayed word is Toffoli in the sense of [F7]. By [F3,F4], these basis actions give the denotational matrix of the displayed chronological circuit. [F1, F2, F3, F4, F7, given, algebra]

2.1 Starting with $t=0$, the first Toffoli sends $|a,b,0\rangle$ to $|a,b,ab\rangle$. The middle $T_t$ multiplies this vector by $\omega^{ab}$; applying the Toffoli action [F7] again gives target $ab\oplus ab=0$. Thus the full circuit sends each basis vector to $\omega^{ab}|a,b,0\rangle$. The matrix product is the chronological circuit action by [F3,F4]. [F1, F3, F4, F7, step 1.1, algebra]

3.1 Every vector on data and a finite-dimensional reference with a clean ancilla has the finite expansion $\sum_{a,b,r}c_{abr}|a,b,r\rangle|0\rangle$. Applying step 2.1 termwise gives $\sum_{a,b,r}c_{abr}\omega^{ab}|a,b,r\rangle|0\rangle$, which is $C(T)$ on the data and identity on the reference, tensored with the restored zero state, by [F5,F6]. This is the asserted correlated-input action. [F5, F6, step 2.1, algebra] ∎

## Finite certificate

The exact arithmetic check at
`research/quantum-computing-algorithms-60-2026-10-15-batch-13-finite-certificates.json`
independently applies the 15-gate word to all eight three-bit basis vectors;
the table records the two unchanged inputs with $ab=1$ as $110\mapsto111$
and $111\mapsto110$, and identity action on the other six, all with phase $1$.

## Unresolved supplier checks

The eight-case word calculation and reference extension are local. The actual
QC07, QC09 and QC10 gate, circuit, ancilla and Toffoli bodies were inspected;
their exact matrices, ordered-wire convention and clean-return interface agree.
This is interface review, not approval of another batch's draft work.
