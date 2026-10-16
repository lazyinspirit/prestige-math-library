---
id: def-qc-circuit-syntax-and-register-order
kind: definition
title: "Finite circuit syntax and ordered wire labels"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-register-and-computational-basis
  - def-qc-ordered-bitstring-encoding
justified_by: []
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 5: Classical and Quantum Circuits"
      url: "https://www.preskill.caltech.edu/ph219/chap5_15.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Definition

Write $\mathcal Q_n$ for the ordered tensor product of $n$ copies of the two-level register from [[def-qc-register-and-computational-basis]], with $\mathcal Q_0=\mathbb C$. Fix a finite gate alphabet $G$. Each $g\in G$ has an arity $r(g)\ge1$ and a specified unitary $U_g:\mathcal Q_{r(g)}\to\mathcal Q_{r(g)}$. An operation model states which listed gates may be called and what access or cost is assigned to them; the matrix $U_g$ by itself is only the mathematical gate data.

For $n\ge0$, the circuit wire set is $[n]=\{0,\ldots,n-1\}$ in its displayed order and its state space is $\mathcal Q_n$. The computational basis word $x=(x_0,\ldots,x_{n-1})$ is assigned slot $\operatorname{enc}_n(x)$ from [[def-qc-ordered-bitstring-encoding]], so wire $0$ is the most significant bit and the empty register has its single basis vector in slot $0$.

A gate occurrence on the $n$ wires is a pair $(g,(w_0,\ldots,w_{r(g)-1}))$ with distinct wire labels $w_j\in[n]$; the tuple order is the input and output factor order of the local gate. A layer is a finite ordered list of gate occurrences whose wire supports are pairwise disjoint. A unitary circuit is a finite chronological list $L_1,\ldots,L_d$ of such layers, with $L_1$ applied first and $L_d$ last; $d=0$ is the empty circuit. Its input, output, and terminally measured wires are specified as ordered lists without repetitions in $[n]$. This syntax specifies finite data only; the semantic action of gates on the full register is defined separately.

