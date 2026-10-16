---
id: thm-qa-35-code-fingerprint-state-properties
kind: theorem
title: "Fingerprint states are normalized and encode agreement as overlap"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps: ["def-qa-35-code-fingerprint-state", "thm-qc-computational-basis-orthonormal", "lem-qc-tensor-product-basis-and-dimension"]
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
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 16 §§16.1 and 16.6, PDF pp.147–153; private/public-coin SMP and equality lower-bound context (§16.1), quantum fingerprint construction and SWAP-test analysis (§16.6)."
---

## Statement

For every $n\ge1$, every positive-length binary code map $E:\{0,1\}^n\to\{0,1\}^N$ with $N\ge1$, and all $x,y\in\{0,1\}^n$, $|h_x\rangle$ has norm one, uses $\lceil\log_2N\rceil+1$ qubits, and $\langle h_x|h_y\rangle=N^{-1}|\{i<N:E_i(x)=E_i(y)\}|$.

## Facts & Assumptions

**Given:** Integers $n,N\ge1$, a binary code map $E:\{0,1\}^n\to\{0,1\}^N$, and inputs $x,y\in\{0,1\}^n$.

[F1] [[def-qa-35-code-fingerprint-state]]: $|h_x\rangle=N^{-1/2}\sum_{i=0}^{N-1}|i\rangle|E_i(x)\rangle$ in an index register of $\lceil\log_2N\rceil$ qubits and one data qubit.

[F2] [[thm-qc-computational-basis-orthonormal]]: The computational basis vectors of a finite register are orthonormal.

[F3] [[lem-qc-tensor-product-basis-and-dimension]]: The ordered tensor-product basis is orthonormal and has dimension equal to the product of the factor dimensions.

## Proof

**Proof technique:** direct.

1.1 The $N$ summands in [F1] are distinct orthonormal basis vectors by [F2]–[F3], even when code bits repeat, because their index labels differ. Therefore $\|h_x\|^2=N^{-1}\sum_{i<N}1=1$. Its ambient register has $m+1=\lceil\log_2N\rceil+1$ qubits by [F1]. [given, F1, F2, F3, algebra]

2.1 Expanding the inner product using [F1] and orthonormality gives $\langle h_x|h_y\rangle=\frac1N\sum_{i,j<N}\langle i|j\rangle\langle E_i(x)|E_j(y)\rangle=\frac1N\sum_{i<N}\mathbf1_{E_i(x)=E_i(y)}.$ The last sum counts agreeing code coordinates, proving the overlap identity. [step 1.1, F1, F2, F3, algebra] ∎
