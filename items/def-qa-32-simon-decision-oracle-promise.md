---
id: def-qa-32-simon-decision-oracle-promise
kind: definition
title: Simon injectivity decision promise with XOR-oracle access
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: quantum-complexity-classes-and-oracle-separations
dependency_level: 15
deps:
  - def-promise-problem
  - def-finite-field-and-its-order
  - def-qc-ordered-bitstring-encoding
  - thm-qc-bitstring-index-is-bijection
  - def-qc-coherent-function-oracle
  - thm-qc-reversible-xor-oracle-unitary
  - def-qc-circuit-cost-model
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 3, Sections 3.1–3.3"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 1, Section 1.6"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Watrous, Quantum Computational Complexity, Sections I and V"
      url: "https://arxiv.org/pdf/0804.3401"
---

## Definition

Fix $n\ge1$ and put $V_n=\{0,1\}^n$, with coordinatewise addition $\oplus$ over $\mathbb F_2$ and cardinality $N=2^n$. For $s,y\in V_n$, define the dot product $s\cdot y=\sum_{j=0}^{n-1}s_jy_j\pmod 2$. A table code consists of a unary header $1^n0$ followed by the $n$-bit words $f(x)$ in lexicographic order of $x\in V_n$; this identifies function instances with binary strings as in [[def-promise-problem]], [[def-finite-field-and-its-order]], and [[def-qc-ordered-bitstring-encoding]].

The YES promise set $Y_n$ consists of table codes of injective maps $f:V_n\to V_n$. The NO promise set $N_n$ consists of codes for which there is a nonzero $s\in V_n$ such that, for every $x,y\in V_n$,

$$ f(x)=f(y)\quad\Longleftrightarrow\quad y=x\ \text{or}\ y=x\oplus s. $$

The sets are disjoint: every NO function has a collision between the distinct inputs $x$ and $x\oplus s$. Its mask is unique, since two different nonzero masks would give a third distinct input in the same fiber. Classical query access returns $f(x)$ at a chosen address. Quantum query access is the coherent XOR oracle $U_f|x,z\rangle=|x,z\oplus f(x)\rangle$ of [[def-qc-coherent-function-oracle]], which is unitary and involutive by [[thm-qc-reversible-xor-oracle-unitary]]. Each call is one query; query charges remain separate from ordinary gate costs by [[def-qc-circuit-cost-model]]. In the query model the table is not supplied as gate data; the table code fixes the promised function only.
