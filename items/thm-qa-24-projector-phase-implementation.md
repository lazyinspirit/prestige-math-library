---
id: thm-qa-24-projector-phase-implementation
kind: theorem
title: Projector phase operations from controlled reflections
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-qa-24-pue-svd-data
  - def-qc-reflection
  - def-qc-controlled-unitary-access
  - thm-qc-reflection-unitary-involution
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-circuit-denotational-semantics
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
axiom_use: "None; the construction uses finite-dimensional unitary matrices and exact supplied gates."
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
      locator: "Printed p. 147; PDF p. 155, projector-controlled bit flip and phase rotation."
---

## Statement

Let $\Pi$ be an orthogonal projection on a finite-dimensional space $H$, with reflection $R_\Pi=2\Pi-I$ and $S_\Pi=I-2\Pi=-R_\Pi$. Suppose the control-first call $C(R_\Pi)$ is explicitly supplied, together with an ancilla initialized in $|0\rangle$ and exact one-qubit $H$ and $R_z$ gates. Then the unitary $e^{i\phi R_\Pi}$ is implemented exactly by two controlled-reflection calls and one variable phase rotation, with a constant number of additional one-qubit gates, and the ancilla is returned to $|0\rangle$. If an external branch qubit is present and a branch-controlled $R_z(2\phi)$ is supplied, controlling only that rotation implements the controlled projector phase; the two controlled-reflection calls remain unconditional with respect to the external branch. In QSVT the construction is applied separately to $\Pi_R$ and $\Pi_L$; each projector-phase slot uses two controlled calls to the corresponding reflection. The access and gate costs are charged separately.

## Facts & Assumptions

**Given:** The finite space $H$, an orthogonal projection $\Pi$, the specified controlled-reflection access, and a clean ancilla qubit.

[L1] [[def-qc-reflection]]: $R_\Pi=2\Pi-I$ and $S_\Pi=I-2\Pi=-R_\Pi$; $R_\Pi$ is $+I$ on $\operatorname{ran}\Pi$ and $-I$ on $\ker\Pi$.

[L2] [[def-qc-controlled-unitary-access]]: $C(V)=|0\rangle\langle0|\otimes I_H+|1\rangle\langle1|\otimes V$ is the control-first unitary, and its availability is explicitly declared.

[L3] [[thm-qc-reflection-unitary-involution]]: $C(S_\Pi)=Z_a C(R_\Pi)$, where $Z_a=\operatorname{diag}(1,-1)$ acts on the control ancilla.

[L4] [[def-qc-one-qubit-gate-alphabet-and-rotations]]: $H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ and $R_z(\theta)=\exp(-i\theta Z/2)$ are exact one-qubit gates.

[L5] [[def-qc-circuit-denotational-semantics]]: chronological circuit operations compose in reverse order in the operator product.

## Proof

1.1 Define the ancilla-controlled bit flip $X_\Pi:=H_aC(S_\Pi)H_a$, where $H_a=H\otimes I_H$. On $\operatorname{ran}\Pi$, $S_\Pi=-I$, so [L2] makes $C(S_\Pi)$ act as $Z_a$ on the ancilla; conjugating by $H_a$ gives $X_a$. On $\ker\Pi$, $S_\Pi=I$, so $C(S_\Pi)$ acts as $I$ and $X_\Pi$ is the identity. Thus $X_\Pi$ flips the ancilla exactly on the range of $\Pi$. By [L3], each use of $C(S_\Pi)$ is one supplied call to $C(R_\Pi)$ plus one ancilla $Z_a$ gate. [L1, L2, L3, L4, algebra]

2.1 Apply $X_\Pi$, then $R_z(2\phi)=e^{-i\phi Z_a}$, then $X_\Pi$ again. On $\operatorname{ran}\Pi$, the ancilla operation is $X_a e^{-i\phi Z_a}X_a=e^{i\phi Z_a}$; on $\ker\Pi$ it is $e^{-i\phi Z_a}$. Acting on $|0\rangle$, these give phases $e^{i\phi}$ and $e^{-i\phi}$, respectively, and both branches return the ancilla to $|0\rangle$. The induced system operation is therefore $e^{i\phi}(\Pi)+e^{-i\phi}(I-\Pi)=e^{i\phi(2\Pi-I)}$. [L1, L4, step 1.1, algebra]

3.1 The construction uses two occurrences of $X_\Pi$, hence two controlled-reflection calls by step 1.1, and one variable $R_z(2\phi)$ rotation. Its Hadamard and ancilla-$Z$ gates have constant count per phase slot. Applying the same construction with $\Pi_R$ or $\Pi_L$ gives the two projector-phase operations used by the QSVT sequence; no direct or controlled reflection cost is inferred from the matrix description alone. [L2, L3, L4, L5, step 1.1, step 2.1]

4.1 Let $c$ be an external branch qubit. Replace the middle rotation by its controlled version, leaving both occurrences of $X_\Pi$ unchanged. On branch $c=1$, step 2.1 gives $e^{i\phi R_\Pi}$. On branch $c=0$, the middle operation is identity and the two adjacent $X_\Pi$ operations cancel because $X_\Pi^2=I$; the system operation is identity. Thus this is the controlled projector phase. It uses the same two controlled-reflection calls as the uncontrolled construction and one separately supplied and charged branch-controlled rotation. [L2, L4, step 1.1, step 2.1, algebra] ∎
