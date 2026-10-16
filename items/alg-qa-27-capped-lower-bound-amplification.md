---
id: alg-qa-27-capped-lower-bound-amplification
kind: algorithm
title: Finite amplification from a supplied success lower bound
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - def-qa-12-prepared-success-subspace
  - alg-qa-12-amplitude-amplification
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-reflection
  - def-qc-projective-measurement
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Andris Ambainis, Variable time amplitude amplification and a faster quantum algorithm for solving systems of linear equations"
      url: "https://arxiv.org/pdf/1010.4458"
---

## Definition

Input a finite-register coherent preparation $U$ with good projection $P$, as in [[def-qa-12-prepared-success-subspace]], and represented rational parameters $0<p_0\le1$ and $0<\beta<1$. The success promise is $p:=\|PU|0\rangle\|^2\ge p_0$. Supply $U^\dagger$ under [[def-qc-inverse-unitary-access]], the reflections $S_0=I-2|0\rangle\langle0|$ and $S_g=I-2P$ under [[def-qc-reflection]], and the controlled versions of all operations used under [[def-qc-controlled-unitary-access]]. The good/bad instrument is the projective measurement $\{P,I-P\}$ of [[def-qc-projective-measurement]]. It may be supplied directly or implemented by preparing an ancillary control in $|+\rangle$, applying controlled $S_g$, applying a Hadamard to the control and measuring it, with outcome $1$ designated good. These implementations and register initialization have their actual declared costs.

By exact rational comparisons compute the least power of two $M$ satisfying $M^2p_0\ge4$, and the least positive integer $R$ satisfying $(3/4)^R\le\beta$. Set $b=\log_2M$. More general exact parameter representations are allowed only when they support these finite comparisons.

For trials $1,\ldots,R$, carry out the following instructions, stopping at the first return.

1. Prepare $U|0\rangle$ on a fresh register and perform the good/bad instrument. On a good outcome, return that register. On a bad outcome, discard it.
2. Draw exactly $b$ fresh independent unbiased random bits, interpret them as an integer $j\in\{0,\ldots,M-1\}$, and prepare $U|0\rangle$ on a fresh register. Apply exactly $j$ iterates $Q=-US_0U^\dagger S_g$ of [[alg-qa-12-amplitude-amplification]], then perform the good/bad instrument. On a good outcome, return that register. On a bad outcome, discard it and proceed to the next trial.

If all $R$ trials fail, return an explicit failure symbol. Preparations, bits and instruments are fresh between attempts. A classical-output specialization may additionally measure and verify the returned output, charging this work separately; it does not replace the good/bad projective instrument when a conditional quantum state is requested.
