---
id: cor-total-critical-point-lower-bound
kind: corollary
title: "Total critical point lower bound"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [cor-weak-morse-inequalities, def-morse-numbers-and-morse-polynomial, def-poincare-polynomial-over-a-field, def-perfect-morse-function-over-a-field, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: termwise-sum
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
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Chapter 4 Section 4.4, printed pp. 88-91 (PDF pp. 98-100)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
dependency_level: 3
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a closed smooth $n$-manifold, $f$ a
Morse function and $F$ a field. Then
$$\#\operatorname{Crit}(f)=\sum_{k=0}^nm_k(f)\ \ge\ \sum_{k=0}^nb_k(M;F)=P_{M,F}(1),$$
and equality holds if and only if $f$ is $F$-perfect.

## Facts & Assumptions

**Given:** A closed smooth $n$-manifold $M$, a Morse function $f:M\to\mathbb R$, and a field $F$.

[F1] The Morse numbers satisfy $m_k(f)=0$ for $k\notin\{0,\dots,n\}$ and $M_f(1)=\sum_{k=0}^nm_k(f)=\#\operatorname{Crit}(f)$ ([[def-morse-numbers-and-morse-polynomial]]).

[F2] The $F$-Betti numbers are $b_k(M;F)=\dim_FH_k(M;F)$ and $P_{M,F}(1)=\sum_kb_k(M;F)$ ([[def-poincare-polynomial-over-a-field]]).

[F3] In the situation of the Morse polynomial identity, $m_k(f)\ge b_k(M;F)$ for every $k$ ([[cor-weak-morse-inequalities]]).

[F4] $f$ is $F$-perfect exactly when $m_k(f)=b_k(M;F)$ for every $k$ ([[def-perfect-morse-function-over-a-field]]).

## Proof

**Proof technique:** termwise-sum.

1.1 Summing the weak inequalities of [F3] over $k=0,\dots,n$ gives $\sum_{k=0}^nm_k(f)\ge\sum_{k=0}^nb_k(M;F)$, and both sums are finite. By [F1] the left side is $M_f(1)=\#\operatorname{Crit}(f)$ and by [F2] the right side is $P_{M,F}(1)$. [F1, F2, F3, given, algebra]

2.1 Each difference $m_k(f)-b_k(M;F)$ is nonnegative by [F3]; a finite sum of nonnegative integers vanishes exactly when every summand does. Hence equality in step 1.1 holds if and only if $m_k(f)=b_k(M;F)$ for all $k$, which by [F4] is precisely $F$-perfectness of $f$. [F3, F4, step 1.1, algebra] ∎

## Remarks

- The bound is the coarsest numerical obstruction supplied by the page: it uses only the total number of critical points and the total Betti number, and it is attained exactly in the perfect case. The Euler characteristic identity refines the alternating version of this count.
