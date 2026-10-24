---
id: ex-qa-hidden-shift-dihedral-cosets
kind: example
title: Hidden-shift left cosets in a generalized dihedral group
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - thm-qa-hidden-shift-generalized-dihedral-reduction
  - def-generalized-dihedral-group
justified_by: []
aliases: []
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Greg Kuperberg, A Subexponential-Time Quantum Algorithm for the Dihedral Hidden Subgroup Problem"
      url: "https://arxiv.org/pdf/quant-ph/0302112"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---

## Example

Take $A=\mathbb Z/4\mathbb Z$, shift $s=1$, and define injective maps $f(a)=a$ and $g(b)=b-1\pmod4$. Then $f(a)=g(a+1)$ for every $a$. With the generalized-dihedral product law and $H_1=\langle(1,1)\rangle$, the left cosets are $C_0=\{(0,0),(1,1)\}$, $C_1=\{(1,0),(2,1)\}$, $C_2=\{(2,0),(3,1)\}$, and $C_3=\{(3,0),(0,1)\}$.
The function $F(a,0)=f(a)$, $F(a,1)=g(a)$ takes the common value $a$ on $C_a$, so these are exactly its equal-value classes. In particular, right multiplication by $(1,1)$ pairs $(1,0)$ with $(2,1)$.

This convention uses left cosets: the right coset $H_1(1,0)$ is $\{(1,0),(0,1)\}$, whose two $F$-values are $1$ and $3$; it is not the hidden left coset $C_1$.
