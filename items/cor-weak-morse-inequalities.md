---
id: cor-weak-morse-inequalities
kind: corollary
title: "Weak Morse inequalities"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-morse-polynomial-identity, def-morse-numbers-and-morse-polynomial, def-poincare-polynomial-over-a-field, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: coefficient-comparison
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Liviu Nicolaescu, An Invitation to Morse Theory (2nd ed.), Chapter 2 Section 2.3, printed pp. 46-53 (PDF pp. 56-63)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Chapter 12 Section 5, printed pp. 489-493 (PDF pp. 501-505)"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
    - title: "Alexander Ritter, Morse Homology (Cambridge Part III lecture notes), Lecture 21, PDF pp. 96-101"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
dependency_level: 2
---

## Statement

Assume $\mathrm{AC}_\omega$. In the situation of the Morse polynomial identity
([[thm-morse-polynomial-identity]]), $m_k(f)\ge b_k(M;F)$ for every $k$; that
is, the number of critical points of index $k$ is at least the $k$-th Betti
number over $F$.

## Facts & Assumptions

**Given:** A closed smooth $n$-manifold $M$, a Morse function $f:M\to\mathbb R$, a field $F$, and the correction polynomial $Q(t)=\sum_kq_kt^k$ with $q_k\ge0$ of the Morse polynomial identity.

[F1] $M_f(t)=P_{M,F}(t)+(1+t)Q(t)$ with $Q\in\mathbb Z[t]$ of nonnegative coefficients ([[thm-morse-polynomial-identity]]), and the Morse and Betti numbers are the coefficients of $M_f$ and $P_{M,F}$ ([[def-morse-numbers-and-morse-polynomial]], [[def-poincare-polynomial-over-a-field]]).

## Proof

**Proof technique:** coefficient-comparison.

1.1 Comparing the coefficient of $t^k$ in $M_f-P_{M,F}=(1+t)Q$ gives $m_k-b_k=q_k+q_{k-1}$ with $q_{-1}:=0$. [F1, given, algebra]

2.1 Since $q_k\ge0$ and $q_{k-1}\ge0$, step 1.1 gives $m_k-b_k\ge0$, that is $m_k\ge b_k$, for every $k$. [step 1.1, algebra] ∎

## Remarks

- The weak inequalities follow from $m_k-b_k=q_k+q_{k-1}$; the strong inequalities retain the separate condition $q_k\ge0$.
