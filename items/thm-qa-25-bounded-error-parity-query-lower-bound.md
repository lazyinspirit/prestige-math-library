---
id: thm-qa-25-bounded-error-parity-query-lower-bound
kind: theorem
title: Bounded-error parity query lower bound
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-promise-problem
  - def-qc-uniform-circuit-family
  - def-qc-coherent-function-oracle
  - thm-qc-reversible-xor-oracle-unitary
proof_strategy: direct
axiom_use: "None; the proof is a finite polynomial argument on the Boolean cube."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Beals, Buhrman, Cleve, Mosca, and de Wolf, Quantum Lower Bounds by Polynomials, §§3.2–4.1"
      url: "https://arxiv.org/pdf/quant-ph/9802049"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 28 §28.1"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, polynomial method discussion"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Any quantum query algorithm that, on every $x\in\{0,1\}^n$, outputs $\operatorname{parity}(x)$ with error at most $1/3$ using the coherent XOR oracle for $x$ makes at least $n/2$ oracle queries.

## Facts & Assumptions

**Given:** The finite parity promise task and the coherent XOR oracle of [[def-qc-coherent-function-oracle]].

[F1] [[def-promise-problem]]: correctness is required on every input in the declared promise.

[F2] Query-model convention: the finite register starts in a fixed input-independent state, each inter-query unitary is independent of $x$, and the output is a designated computational-basis bit measured after the last unitary. A $q$-query algorithm has at most $q$ oracle calls on every input. These are conventions of the query model, not consequences of the circuit-description encoding in [[def-qc-uniform-circuit-family]].

[F3] [[def-qc-coherent-function-oracle]]: $O_x|i,y\rangle=|i,y\oplus x_i\rangle$ on every basis string, with a query charged only for the named oracle.

[F4] [[thm-qc-reversible-xor-oracle-unitary]]: the total XOR oracle permutes the finite basis and is a unitary involution even when the queried function is noninjective.

## Proof

**Given:** A $q$-query algorithm with the stated worst-case error.

1.1 Put $z_i=(-1)^{x_i}\in\{-1,1\}$. On a basis query address $i$, the matrix entries of the XOR target flip are either $(1+z_i)/2$ or $(1-z_i)/2$; the input address and all other bits are unchanged. Thus one oracle call raises the degree of every amplitude polynomial in $z_1,\ldots,z_n$ by at most one. The inter-query unitaries are input-independent by [F2] and take fixed linear combinations of amplitudes. Induction over the $q$ queries shows each final amplitude is a multilinear polynomial of degree at most $q$, replacing any $z_i^2$ by $1$ without increasing degree. [given, F2, F3, F4, algebra, induction]

2.1 The signed output expectation $p(z)=\Pr[y=0]-\Pr[y=1]$ is a sum of squared moduli of final amplitudes with fixed signs, so it is a real multilinear polynomial of degree at most $2q$. If $\chi(z)=\prod_{i=1}^nz_i=(-1)^{\operatorname{parity}(x)}$, the error bound gives $\chi(z)p(z)\ge 1/3$ pointwise. Therefore the uniform average of $\chi p$ is positive. [F1, F2, step 1.1, algebra]

3.1 If $2q<n$, every monomial of $p$ is $z_S=\prod_{i\in S}z_i$ for a proper subset $S\subsetneq[n]$. Under independent uniform signs, $\mathbb E[\chi z_S]=\mathbb E[\prod_{i\notin S}z_i]=0$, since at least one independent sign appears to the first power and has mean zero. Linearity gives $\mathbb E[\chi p]=0$, contradicting step 2.1. Hence $2q\ge n$. [step 2.1, algebra] ∎
