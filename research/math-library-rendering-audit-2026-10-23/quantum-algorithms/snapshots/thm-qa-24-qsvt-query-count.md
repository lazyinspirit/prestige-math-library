---
id: thm-qa-24-qsvt-query-count
kind: theorem
title: QSVT signal and reflection query counts
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - alg-qa-24-qsvt
  - thm-qa-24-projector-phase-implementation
  - def-qc-circuit-cost-model
  - def-qc-controlled-unitary-access
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
axiom_use: "None; the proof counts a finite sequence of declared operations."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Lemma 19 and Figure 1"
      url: https://arxiv.org/pdf/1806.01838
      locator: "PDF pp. 20–21."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §29.3"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Printed p. 147; PDF p. 155, alternating sequence and query count."
---

## Statement

For degree $d\ge0$, one un-controlled QSVT sequence makes exactly $d$ signal calls: $\lceil d/2\rceil$ calls to $U$ and $\lfloor d/2\rfloor$ calls to $U^*$, beginning with $U$ when $d>0$. It applies exactly $d+1$ projector-phase operations, with $\lceil(d+1)/2\rceil$ about $\Pi_R$ and $\lfloor(d+1)/2\rfloor$ about $\Pi_L$. By [[thm-qa-24-projector-phase-implementation]], each phase operation uses two controlled calls to the corresponding reflection and one variable one-qubit phase rotation, plus a constant number of one-qubit gates. A coherent control of one sequence against the identity requires no controlled signal call when $d$ is even and one controlled signal call when $d$ is odd. Selecting between the two phase lists $\Phi$ and $-\Phi$ uses the same unconditioned signal list in both branches and controls only the phase rotations. Phase generation, inverse access, and finite-gate compilation retain their separately declared costs. At $d=0$ there is no signal or controlled-signal call.

## Facts & Assumptions

**Given:** An integer degree $d\ge0$ and the finite procedure in [[alg-qa-24-qsvt]].

[F1] [[alg-qa-24-qsvt]]: the procedure applies one initial phase about $\Pi_R$, then $d$ alternating signal calls, switching sides after each call and applying one phase at the new side.

[F2] [[thm-qa-24-projector-phase-implementation]]: each projector-phase operation uses two controlled-reflection calls and one variable $R_z$ rotation; an external branch controls only that rotation while leaving both reflection calls unconditional with respect to the branch.

[F3] [[def-qc-controlled-unitary-access]]: a controlled unitary call is an explicitly supplied operation and is charged separately from its uncontrolled call.

[F4] [[def-qc-circuit-cost-model]]: signal queries, controlled calls, one-qubit gates, depth, width, ancillas, and classical generation costs are separate coordinates.

## Proof


1.1 The loop in [F1] executes once for each integer $j=d-1,\ldots,0$, hence it makes exactly $d$ signal calls. The side starts at $R$, so the first call is $U$ and directions alternate; therefore the counts are $\lceil d/2\rceil$ forward calls and $\lfloor d/2\rfloor$ inverse calls. If $d=0$, the loop is empty. [F1, given, algebra]

1.2 For a controlled sequence against identity, use the externally controlled projector-phase implementation in [F2] at every phase slot. On the zero branch each phase is then the identity, so the alternating signal calls cancel in adjacent $UU^*$ or $U^*U$ pairs. If $d$ is even all signal calls pair and cancel; if $d$ is odd, one forward $U$ call remains, which is made controlled while the other signal calls pair and cancel. On the zero branch that controlled call is also identity, while the one branch executes the original sequence. Thus this variant requires zero extra controlled signal calls for even $d$ and one controlled $U$ call for odd $d$, whose availability is explicit by [F3]. [F1, F2, F3, algebra]

2.1 For a branch selector between $\Phi$ and $-\Phi$, let control value $0$ select $\Phi$ and value $1$ select $-\Phi$. At a slot with phase $\phi$ about $\Pi$, use the clean-ancilla toggle $X_\Pi$ from step 1.1 of [F2], then unconditional $R_z(2\phi)$, then a control-one-controlled $R_z(-4\phi)$, and then $X_\Pi$ again. The middle rotation is $R_z(2\phi)$ in branch $0$ and $R_z(-2\phi)$ in branch $1$; because $X_\Pi$ flips the ancilla on $\operatorname{ran}\Pi$ and leaves it unchanged on $\ker\Pi$, the system phases are respectively $e^{i\phi(2\Pi-I)}$ and $e^{-i\phi(2\Pi-I)}$. The same unconditioned signal call occurs between each pair of phase slots, so the signal list is shared and this selector adds no controlled signal query. [F1, F2, F3, algebra]

2.2 There is one phase at the initial $R$ side and one after each of the $d$ signal calls, for $d+1$ slots. Their sides alternate beginning at $R$, giving $\lceil(d+1)/2\rceil$ right-projector slots and $\lfloor(d+1)/2\rfloor$ left-projector slots. [F1, step 1.1, algebra]

3.1 Apply [F2] to each slot counted in step 2.2. The total controlled-reflection calls are $2\lceil(d+1)/2\rceil$ for $\Pi_R$ and $2\lfloor(d+1)/2\rfloor$ for $\Pi_L$, unchanged for the paired selector. A single unconditioned sequence has $d+1$ variable rotations; the $\Phi/-\Phi$ selector instead uses $d+1$ unconditional rotations $R_z(2\phi_j)$ and $d+1$ separately charged branch-controlled rotations $R_z(-4\phi_j)$, with constant one-qubit overhead per slot. [F2, step 2.1, step 2.2, algebra]

4.1 The counts above describe only the listed operations. By [F4], the cost of supplied $U$, $U^*$, controlled calls, phase gates, ancilla wires, classical phase generation, and finite-gate compilation are recorded in their applicable separate coordinates; none is inferred from the matrix $A$ alone. [F3, F4, step 1.2, step 2.1] ∎

