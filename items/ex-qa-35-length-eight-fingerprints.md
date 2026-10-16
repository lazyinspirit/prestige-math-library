---
id: ex-qa-35-length-eight-fingerprints
kind: example
title: "Finite length-eight fingerprint overlap"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps: ["def-qa-35-code-fingerprint-state", "thm-qa-35-fingerprint-correctness-and-cost", "thm-qa-35-code-fingerprint-state-properties", "thm-qa-35-swap-test-measurement-effect"]
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all distributions, sums, bases, and selection sets are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Harry Buhrman, Richard Cleve, John Watrous, Ronald de Wolf, Quantum Fingerprinting"
      url: https://arxiv.org/pdf/quant-ph/0102001
      locator: "Complete 8-page paper, especially §2, PDF pp.2–4, code fingerprints and swap-test analysis."
---

## Statement

Let four inputs be assigned codewords 00000000, 00001111, 11110000, and 11111111. Distinct codewords have distance at least four. For the first two, the fingerprint overlap is 1/2 and one swap test declares unequal with probability 3/8; equal inputs yield anti probability zero. Each fingerprint uses four qubits.

## Facts & Assumptions

**Given:** Assign $00,01,10,11$ respectively to $u_0=00000000$, $u_1=00001111$, $u_2=11110000$, and $u_3=11111111$.

[F1] [[thm-qa-35-code-fingerprint-state-properties]]: The fingerprint overlap is the fraction of agreeing code coordinates.

[F2] [[thm-qa-35-swap-test-measurement-effect]]: The antisymmetric probability on pure unit states is $(1-|\langle\psi|\phi\rangle|^2)/2$.

## Proof

**Proof technique:** direct finite calculation.

1.1 Direct coordinate comparison gives the six pairwise distances $d(u_0,u_1)=4$, $d(u_0,u_2)=4$, $d(u_0,u_3)=8$, $d(u_1,u_2)=8$, $d(u_1,u_3)=4$, and $d(u_2,u_3)=4$. In particular $u_0,u_1$ agree in their first four positions and differ in the last four; [F1] gives $\langle h_{00}|h_{01}\rangle=4/8=1/2$. [given, F1, algebra]

2.1 By [F2], one swap test declares unequal with probability $(1-(1/2)^2)/2=3/8$. For any equal codeword pair the overlap is one and the same formula gives probability zero. The index needs $\lceil\log_2 8\rceil=3$ qubits and the data bit adds one, so each fingerprint uses four qubits. [step 1.1, F1, F2, algebra] ∎
