---
id: lem-it-finite-superadditive-sequence-limit
kind: lemma
title: Limit formula for linearly bounded superadditive sequences
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the argument is an estimate on a real sequence with finitely many residues modulo each fixed positive integer."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Igor Devetak, The private classical capacity and quantum capacity of a quantum channel, Appendix A discussion of regularization limits"
      url: "https://arxiv.org/pdf/quant-ph/0304127"
    - title: "John Watrous, The Theory of Quantum Information, Appendix A, regularization of channel capacities"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
---

## Statement

Let $(a_n)_{n\ge0}$ be a real sequence with $a_0=0$, $a_{m+n}\ge a_m+a_n$ for all $m,n\ge0$, and $|a_n|\le Cn$ for some finite constant $C$. Then

$$\lim_{n\to\infty}\frac{a_n}{n}=\sup_{k\ge1}\frac{a_k}{k}.$$

## Facts & Assumptions

**Given:** The real sequence and superadditivity and linear boundedness assumptions in the Statement.

[A1] $a_{m+n}\ge a_m+a_n$ for all nonnegative integers $m,n$, and $|a_n|\le Cn$.

## Proof

1.1 Set $\alpha:=\sup_{k\ge1}a_k/k$. The bound in [A1] makes $\alpha$ finite, and the definition of supremum gives $a_n/n\le\alpha$ for every $n\ge1$. Hence $\limsup_{n\to\infty}a_n/n\le\alpha$. [given, A1, algebra]

1.2 Fix $k\ge1$. For each $n$, write $n=qk+r$ with integers $q\ge0$ and $0\le r<k$. Repeated use of superadditivity in [A1] gives $a_n\ge qa_k+a_r$. The finitely many values $a_0,\ldots,a_{k-1}$ have a finite minimum $m_k$, so $a_n/n\ge(q/n)a_k+m_k/n$. As $n\to\infty$, $q/n\to1/k$ and $m_k/n\to0$, yielding $\liminf_{n\to\infty}a_n/n\ge a_k/k$. [given, A1, algebra, choose]

2.1 Since step 1.2 holds for every $k\ge1$, taking the supremum gives $\liminf_{n\to\infty}a_n/n\ge\alpha$. Combining with step 1.1 proves the asserted limit and its value. [step 1.1, step 1.2, algebra] ∎
