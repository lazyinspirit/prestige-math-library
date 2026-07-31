---
id: lem-congruence-is-an-equivalence-relation
kind: lemma
title: "Congruence modulo every integer is an equivalence relation on $\\mathbb Z$"
status: published
origin: session
deps: [def-congruence-modulo-an-integer, def-equivalence-relation, lem-divisibility-basic]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modular Arithmetic"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf"
pipeline_run: null
---

## Statement

For every integer $n$, the relation $a\equiv b\pmod n$ on $\mathbb Z$
([[def-congruence-modulo-an-integer]]) is an equivalence relation
([[def-equivalence-relation]]). For $n=0$ it is equality, and for $n=1$ it is
the universal relation.

## Facts & Assumptions

**Given:** An integer $n$ and integers $a,b,c$.

[F1] $a\equiv b\pmod n$ means $n\mid(a-b)$ ([[def-congruence-modulo-an-integer]]).

[L1] Divisibility is reflexive and linear: $d\mid u$ and $d\mid v$ imply $d\mid ux+vy$ for all integers $x,y$; also $d\mid u$ implies $d\mid -u$ ([[lem-divisibility-basic]]).

[F2] An equivalence relation is reflexive, symmetric and transitive ([[def-equivalence-relation]]).

## Proof

**Proof technique:** direct.

1.1 Reflexivity: $a-a=0=n\cdot0$, so $n\mid(a-a)$ and $a\equiv a\pmod n$. [F1, algebra]

1.2 Symmetry: if $a\equiv b\pmod n$, then $n\mid(a-b)$, hence $n\mid-(a-b)=b-a$, so $b\equiv a\pmod n$. [F1, L1]

1.3 Transitivity: if $a\equiv b\pmod n$ and $b\equiv c\pmod n$, then $n\mid(a-b)$ and $n\mid(b-c)$, hence $n\mid(a-b)+(b-c)=a-c$, so $a\equiv c\pmod n$. [F1, L1, algebra]

2.1 Steps 1.1, 1.2 and 1.3 establish the three clauses in [F2], so congruence modulo $n$ is an equivalence relation. [step 1.1, step 1.2, step 1.3, F2]

3.1 When $n=0$, [F1] reads $0\mid(a-b)$, which is equivalent to $a=b$; when $n=1$, it always holds because $a-b=1\cdot(a-b)$. [F1, algebra] ∎
