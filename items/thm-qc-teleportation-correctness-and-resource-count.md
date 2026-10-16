---
id: thm-qc-teleportation-correctness-and-resource-count
kind: theorem
title: Teleportation correctness and resources
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - alg-qc-teleportation
  - thm-qc-teleportation-bell-expansion
  - thm-qc-teleportation-equiprobable-outcomes
  - thm-qc-teleportation-correction-identity
  - thm-qc-teleportation-reference-stability
  - def-qc-teleportation-protocol-resource-count
justified_by: []
proof_strategy: direct
axiom_use: "None; all outcome and resource lists are finite and explicit."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §6.3.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "Chapter 6, §6.3.1, Theorem 6.47, Corollary 6.49, and Example 6.50."
    - title: "Richard Cleve, Quantum Information Processing course notes for QIC 710 / CS 768 / PHYS 767 / CO 681 / AMATH 871 / PMATH 871, version dated October 13, 2026"
      url: "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf"
      locator: "§10.2–10.3, equations (139)–(140), PDF pp.84–85."
---

## Statement

For every normalized qubit input, the procedure [[alg-qc-teleportation]] has
four outcomes, each of probability $1/4$. Conditioned on outcome $(a,b)$, the
receiver's byproduct is $X^bZ^a|\psi\rangle$ and the prescribed correction
returns $|\psi\rangle$ exactly. The same corrected branch identity holds when
the input is entangled with any finite reference. Under the separate resource
record [[def-qc-teleportation-protocol-resource-count]], the procedure uses one
preshared Bell-pair resource and two classical bits sent from Alice to Bob;
it sends no qubit during the protocol and makes no optimality claim.

## Facts & Assumptions

**Given:** A normalized input qubit, the shared Bell pair, and the procedure's
ordered measurement and correction instructions.

[A1] The input qubit vector is normalized.

[F1] [[alg-qc-teleportation]] uses the resource $|\Phi^+\rangle_{BC}$, applies CNOT then $H_A$, measures ordered wires $A,B$, sends $(a,b)$, and applies $X_C^b$ then $Z_C^a$.

[F2] [[thm-qc-teleportation-equiprobable-outcomes]] proves $\Pr[(a,b)]=1/4$ for every label.

[F3] [[thm-qc-teleportation-correction-identity]] proves that the byproduct $X^bZ^a$ is inverted by $Z^aX^b$.

[F4] [[thm-qc-teleportation-reference-stability]] proves the corrected output equals the input jointly with every finite reference.

[F5] [[def-qc-teleportation-protocol-resource-count]] records the shared pair, two classical bits, zero transmitted qubits, gate occurrences, and measurement record as distinct resources.

[F6] [[thm-qc-teleportation-bell-expansion]] gives each measured branch vector as $\frac12|ab\rangle\otimes X^bZ^a|\psi\rangle$.

## Proof

1.1 By [F2], each of the four possible labels has probability $1/4$, so every branch has positive probability and the conditional branch is defined. The Bell expansion [F6] identifies its receiver vector as $X^bZ^a|\psi\rangle$. [given, A1, F1, F2, F6]

2.1 Applying the correction from [F1] to the byproduct in step 1.1 gives $Z^aX^bX^bZ^a|\psi\rangle=|\psi\rangle$ by [F3]. Hence every branch has the exact corrected output. [step 1.1, F1, F3]

3.1 For a joint input with any finite reference, the same branchwise output statement is the conclusion of [F4]. This verifies the protocol preserves the full input-reference vector, not only its reduced input state. [step 2.1, F4]

4.1 The resource record [F5] separates one preshared Bell-pair use, the two classical bits sent from Alice to Bob, zero qubits sent after the pair is available, the two Alice gates, the two-bit Alice measurement record, and up to two conditional Bob Pauli gates. These are counts of the stated procedure only; no lower bound or physical preparation claim follows. [F1, F5] ∎
