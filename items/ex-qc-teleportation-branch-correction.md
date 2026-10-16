---
id: ex-qc-teleportation-branch-correction
kind: example
title: Teleportation branch and Pauli correction
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - thm-qc-teleportation-correctness-and-resource-count
  - thm-qc-teleportation-bell-expansion
  - thm-qc-teleportation-equiprobable-outcomes
  - def-qc-pauli-matrices
justified_by: []
proof_strategy: direct
axiom_use: "None; the two amplitudes and four measurement labels are handled by finite algebra."
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
      locator: "§10.3, equations (138)–(140), PDF pp.83–84."
---

## Example

Let $|\psi\rangle=\alpha|0\rangle+\beta|1\rangle$ with
$|\alpha|^2+|\beta|^2=1$. On input $|\psi\rangle_A$ and shared resource
$|\Phi^+\rangle_{BC}$, compute the four post-gate measurement branches and
verify the correction on wire $C$ for each label $(a,b)$.

## Facts & Assumptions

**Given:** The normalized input, the ordered wires $A,B,C$, and the teleportation gates, measurement, and correction.

[A1] $\alpha,\beta\in\mathbb C$ and $|\alpha|^2+|\beta|^2=1$.

[F1] [[thm-qc-teleportation-bell-expansion]] gives the post-gate expansion $\frac12\sum_{a,b}|ab\rangle\otimes X^bZ^a|\psi\rangle$.

[F2] [[thm-qc-teleportation-equiprobable-outcomes]] proves that each outcome label has probability $1/4$.

[F3] [[def-qc-pauli-matrices]] gives $X|0\rangle=|1\rangle$, $X|1\rangle=|0\rangle$, $Z|0\rangle=|0\rangle$, and $Z|1\rangle=-|1\rangle$.

## Verification

1.1 Expanding the input with the Bell resource and applying CNOT $A\to B$ gives $2^{-1/2}(\alpha|000\rangle+\alpha|011\rangle+\beta|110\rangle+\beta|101\rangle)$. Applying $H_A$ and grouping by $AB$ yields $\frac12\bigl(|00\rangle(\alpha|0\rangle+\beta|1\rangle)+|01\rangle(\alpha|1\rangle+\beta|0\rangle)+|10\rangle(\alpha|0\rangle-\beta|1\rangle)+|11\rangle(\alpha|1\rangle-\beta|0\rangle)\bigr)$, which is [F1]'s expansion. [given, A1, F1, algebra]

2.1 For each label, the receiver vector is respectively $\psi$, $X\psi$, $Z\psi$, and $XZ\psi$ by [F3]. Each has the same norm as $\psi$, since $X$ swaps its two coordinates and $Z$ changes only the sign of the second. Thus each projected branch has squared norm $\frac14\|\psi\|^2=1/4$, agreeing with the probability in [F2]. [step 1.1, A1, F2, F3, algebra]

2.2 For label $00$, the correction is $I$ and leaves $\alpha|0\rangle+\beta|1\rangle$ unchanged. For $01$, it is $X$, and $X(\alpha|1\rangle+\beta|0\rangle)=\alpha|0\rangle+\beta|1\rangle$. For $10$, it is $Z$, and $Z(\alpha|0\rangle-\beta|1\rangle)=\alpha|0\rangle+\beta|1\rangle$. [step 1.1, F3, algebra]

3.1 For label $11$, the branch is $\alpha|1\rangle-\beta|0\rangle=XZ|\psi\rangle$ and the correction is $ZX$. Hence $ZX(XZ|\psi\rangle)=Z(XX)Z|\psi\rangle=Z^2|\psi\rangle=|\psi\rangle$ using [F3]; this fixed order has no residual phase. Together the four calculations return the input on every branch. [step 2.2, F3, algebra] ∎
