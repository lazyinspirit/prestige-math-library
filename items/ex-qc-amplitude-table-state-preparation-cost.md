---
id: ex-qc-amplitude-table-state-preparation-cost
kind: example
title: Amplitude-Table State Preparation Input Boundary
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - thm-qc-state-preparation-rotation-level-upper-bound
  - alg-qc-state-preparation
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: John Preskill, Quantum Computation, Chapter 5, Classical and Quantum Circuits
      url: https://www.preskill.caltech.edu/ph219/chap5_15.pdf
    - title: Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits
      url: https://arxiv.org/pdf/quant-ph/0406176
---

## Example

Take $n=2$ and the ordered amplitude table

$$a_{00}=1/2,\qquad a_{01}=i/2,\qquad a_{10}=1/2,\qquad a_{11}=1/2.$$

It has $D=4$ entries. For $b\ge2$, each real and imaginary coordinate is exactly representable by a signed binary fixed-point code with one sign bit and $b-1$ fractional bits; thus the dense classical table contains $2Db=8b$ bits, separate from coherent gates. The prefix procedure uses three rotation nodes, each with angle $\pi/2$, and one nontrivial relative leaf phase. No QRAM query is assumed.

## Facts & Assumptions

**Given:** The explicit two-qubit table, the lexicographic basis order $00,01,10,11$, and the exact prefix-rotation preparation statement.

[F1] For a normalized table, the prefix procedure exactly prepares its ray with the stated gate and clean-work bounds ([[thm-qc-state-preparation-rotation-level-upper-bound]]).

[F2] The procedure defines $r_p=\sqrt{\sum_{x\text{ extends }p}|a_x|^2}$ and, for $r_p>0$, $\theta_p=2\operatorname{atan2}(r_{p1},r_{p0})$. Its $R_y(\theta)$ has first column $(\cos(\theta/2),\sin(\theta/2))^{\mathsf T}$. Leaf phases are $\arg(a_x)-\arg(a_{x_*})$, with $x_*$ the first nonzero leaf; zero relative phases are skipped ([[alg-qc-state-preparation]]).

## Verification

1.1 The norm is $|a_{00}|^2+|a_{01}|^2+|a_{10}|^2+|a_{11}|^2=1/4+1/4+1/4+1/4=1$, so the table is a valid normalized input. Four complex entries with $b$ bits for each of their two real coordinates occupy $8b$ bits. [given, algebra]

2.1 The subtree norms are $r_{\emptyset}=1$, $r_0=r_1=1/\sqrt2$, and $r_{00}=r_{01}=r_{10}=r_{11}=1/2$. Hence $\theta_{\emptyset}=\theta_0=\theta_1=\pi/2$ by the prefix formula in [F2]. [F2, step 1.1, algebra]

3.1 The first rotation gives amplitudes $1/\sqrt2$ on prefixes $0$ and $1$. The controlled $p=0$ rotation splits its branch equally between $|00\rangle$ and $|01\rangle$, and the $p=1$ rotation splits its branch equally between $|10\rangle$ and $|11\rangle$. The resulting vector is $(1/2,1/2,1/2,1/2)$. [F2, step 2.1, algebra]

4.1 Applying the phase $e^{i\arg(a_{01})}=i$ to the $|01\rangle$ branch yields $(1/2,i/2,1/2,1/2)$ exactly. The table's classical bit scan and these controlled gates are separate costs; none is a QRAM access. [F1, F2, step 3.1, given, algebra] ∎
