---
id: def-qa-binary-field-f2
kind: definition
title: "Binary residue carrier and operations"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-integers-modulo-n
  - def-addition-and-multiplication-modulo-n
  - def-congruence-modulo-an-integer
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6)"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Appendix A.1, PDF p. 205: the binary vector space with entrywise addition modulo two and the notation F_2={0,1}."
---

## Definition

Set
$$
\mathbb F_2:=\mathbb Z/2\mathbb Z=\{[0]_2,[1]_2\},
$$
with addition and multiplication induced by the quotient operations
$$
[r]_2+[s]_2=[r+s]_2,\qquad [r]_2[s]_2=[rs]_2
$$
from [[def-addition-and-multiplication-modulo-n]]. This item fixes the two residue classes and their operations. It does not assert the field axioms; those must be established separately before an argument uses field properties.

## Facts & Assumptions

**Given:** The quotient-set and arithmetic definitions for the modulus $2$.

[F1] [[def-integers-modulo-n]]: two residue classes modulo $2$ are equal exactly when their representatives are congruent modulo $2$.

[F2] [[def-addition-and-multiplication-modulo-n]]: addition and multiplication are the representative-independent operations $[r]_2+[s]_2=[r+s]_2$ and $[r]_2[s]_2=[rs]_2$.

[F3] [[def-congruence-modulo-an-integer]]: $r\equiv s\pmod 2$ means $2$ divides $r-s$.

## Verification



1.1 Every integer $r$ has the form $r=2q+\varepsilon$ for some $q\in\mathbb Z$ and $\varepsilon\in\{0,1\}$. For $r\ge0$, induction starts with $0=2\cdot0+0$; from $r=2q$ obtain $r+1=2q+1$, and from $r=2q+1$ obtain $r+1=2(q+1)+0$. For $r<0$, apply the nonnegative case to $-r=2q+\varepsilon$: if $\varepsilon=0$, then $r=2(-q)$, and if $\varepsilon=1$, then $r=2(-q-1)+1$. By [F3], $r\equiv\varepsilon\pmod2$, so [F1] gives $[r]_2=[\varepsilon]_2$. Hence every quotient class is one of $[0]_2,[1]_2$. [given, F1, F3, induction, algebra]

2.1 The classes $[0]_2$ and $[1]_2$ are distinct: equality would give $0\equiv1\pmod2$ by [F1], hence $2\mid-1$ by [F3], which is impossible because no integer $q$ satisfies $-1=2q$. Together with step 1.1, this proves that the quotient has exactly the two listed classes. [given, F1, F3, step 1.1, algebra]

3.1 Applying [F2] to representatives $0$ and $1$ gives the addition table $[0]+[0]=[0]$, $[0]+[1]=[1]$, $[1]+[0]=[1]$, $[1]+[1]=[0]$, and the multiplication table $[0][0]=[0]$, $[0][1]=[1][0]=[0]$, $[1][1]=[1]$. Since steps 1.1 and 2.1 show that these are all quotient classes, the tables are exhaustive; both operations take values in this carrier and are exactly the quotient operations. [given, F1, F2, F3, step 1.1, step 2.1, algebra] ∎
