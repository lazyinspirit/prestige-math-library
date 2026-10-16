---
id: ex-qa-order-finding-noncoprime-phase
kind: example
title: A non-coprime phase gives a proper order divisor
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - alg-qa-modular-order-finding
  - thm-qa-modular-order-finding-success
  - thm-qa-rational-reconstruction-correctness
  - thm-qa-phase-estimation-superposition-law
  - thm-qa-phase-estimation-success-and-tail
  - lem-order-characterisation
justified_by: []
axiom_use: "None; this is a finite arithmetic instance of the stated phase mixture."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §9"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "§9, PDF pp. 45–49; non-coprime phase index"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§5, PDF pp. 49–56; order candidate verification"
---

## Example

Let $N=5$ and $x=2$. The powers modulo $5$ are $2,4,3,1$, so the order is $r=4$. Here $n=3$, $m=9$, and $Q=512$. In the Fourier orbit, phase index $k=2$ gives phase $2/4=1/2$, nearest label $y=256$, and reduced phase fraction $1/2$. Its candidate denominator is $q=2$, but $2^2\equiv4\not\equiv1\pmod5$, so the order test rejects it. Phase index $k=1$ gives phase $1/4$, label $y=128$, denominator $q=4$, and $2^4\equiv1\pmod5$, so this candidate is retained. The phase index is sampled from the order-four Fourier mixture, and the minimum rule never calls the rejected proper divisor the order.

## Facts & Assumptions

**Given:** The order-finding instructions, the exact order criterion, and the Fourier phase law.

[F1] The algorithm retains a reconstructed denominator $q$ only after the exact test $x^q\equiv1\pmod N$, and returns the smallest retained denominator ([[alg-qa-modular-order-finding]]).

[F2] A superposition of eigenspaces produces the eigenspace-weighted phase-estimation mixture, and exact grid phases are returned with probability one ([[thm-qa-phase-estimation-superposition-law]], [[thm-qa-phase-estimation-success-and-tail]]).

[F3] A nearest phase label for a reduced phase of denominator $r\le N$ reconstructs that reduced fraction ([[thm-qa-rational-reconstruction-correctness]]).

[F4] If $x$ has order $r$, then $x^q=1$ exactly when $r\mid q$ ([[lem-order-characterisation]]).

[F5] For true order $r$, the repeated algorithm returns the minimum retained candidate; an exact denominator-$r$ sample therefore suffices ([[thm-qa-modular-order-finding-success]]).

## Proof

1.1 Direct multiplication gives $2^1\equiv2$, $2^2\equiv4$, $2^3\equiv3$, and $2^4\equiv1\pmod5$, with no earlier power equal to $1$; thus the order is exactly $4$. The specified register size gives $n=\lceil\log_2 5\rceil=3$, $m=2n+3=9$, and $Q=2^9=512$. [given, F1, algebra]

2.1 For $k=2$, the phase reduces to $1/2$, so the exact grid label is $y=512/2=256$. Applying [F3] with reduced numerator $1$, denominator $2$, and $N=5$ gives reconstructed denominator $q=2$. The verification test is $2^2=4\not\equiv1\pmod5$, hence [F1] rejects this candidate. [F1, F3, step 1.1, algebra]

2.2 The four vectors $|\psi_k\rangle=\frac12\sum_{s=0}^3i^{-ks}|2^s\bmod5\rangle$ are eigenvectors with phases $k/4$: multiplication by $2$ cycles $1,2,4,3$, and shifting the sum multiplies it by $i^k$. The four-term geometric sum gives $|1\rangle=\frac12\sum_{k=0}^3|\psi_k\rangle$, so [F2] assigns weight $1/4$ to each phase and returns its exact grid label. For $k=1$, $y=512/4=128$; [F3] reconstructs denominator $4$, and $2^4=16\equiv1\pmod5$, so [F1] retains it. Thus both the rejected $k=2$ outcome and a successful $k=1$ outcome have positive probability. [F1, F2, F3, step 1.1, algebra]

3.1 By [F4], every retained denominator is a multiple of $4$. The bad denominator $2$ is rejected by step 2.1, while the denominator-$4$ sample in step 2.2 is retained; [F5] then makes the minimum retained value $4$. This example verifies that a reconstructed divisor is never silently reported as the exact order. [F1, F4, F5, step 2.1, step 2.2] ∎
