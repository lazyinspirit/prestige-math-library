---
id: cor-strong-morse-inequalities
kind: corollary
title: "Strong Morse inequalities"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-morse-polynomial-identity, lem-exact-sequence-dimension-inequality, def-morse-numbers-and-morse-polynomial, def-poincare-polynomial-over-a-field, def-countable-choice]
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
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Chapter 12 Section 5, printed pp. 489-493 (PDF pp. 501-505)"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
    - title: "Alexander Ritter, Morse Homology (Cambridge Part III lecture notes), Lecture 21, PDF pp. 96-101"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
    - title: "C. T. C. Wall, Differential Topology, Sections 5.1-5.4, printed pp. 129-148 (PDF pp. 137-151)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
dependency_level: 2
---

## Statement

Assume $\mathrm{AC}_\omega$. In the situation of the Morse polynomial identity
([[thm-morse-polynomial-identity]]), for every $k$
$$\sum_{i=0}^{k}(-1)^{k-i}m_i(f)\ \ge\ \sum_{i=0}^{k}(-1)^{k-i}b_i(M;F),$$
and the difference of the two sides equals the coefficient $q_k$ of the
correction polynomial $Q$; for $k\ge n$ the two sides are equal, the common
value being $(-1)^k\sum_i(-1)^im_i(f)=(-1)^k\sum_i(-1)^ib_i(M;F)$.

## Facts & Assumptions

**Given:** A closed smooth $n$-manifold $M$, a Morse function $f:M\to\mathbb R$, a field $F$, the correction polynomial $Q(t)=\sum_kq_kt^k$ of the Morse polynomial identity with $q_k\ge0$, and the Morse and Betti numbers $m_k=m_k(f)$, $b_k=b_k(M;F)$.

[F1] $M_f(t)=P_{M,F}(t)+(1+t)Q(t)$ with $Q\in\mathbb Z[t]$ having nonnegative coefficients, and $M_f(t)=\sum_{k=0}^nm_k(f)t^k$, $P_{M,F}(t)=\sum_kb_k(M;F)t^k$ ([[thm-morse-polynomial-identity]], [[def-morse-numbers-and-morse-polynomial]], [[def-poincare-polynomial-over-a-field]]).

[F2] The partial sums recover the coefficients: $\sum_{i=0}^{k}(-1)^{k-i}\bigl(\dim A_i+\dim C_i-\dim B_i\bigr)$ is the coefficient $q_k=\dim\ker(A_k\to B_k)\ge0$ of the correction polynomial of a long exact sequence ([[lem-exact-sequence-dimension-inequality]]).

## Proof

**Proof technique:** coefficient-comparison.

1.1 Comparing coefficients in the identity of [F1], the coefficient of $t^k$ in $M_f-P_{M,F}$ is $m_k-b_k$, and the coefficient of $t^k$ in $(1+t)Q$ is $q_k+q_{k-1}$ with $q_{-1}:=0$; hence $m_k-b_k=q_k+q_{k-1}$ for every $k$. [F1, given, algebra]

2.1 Telescoping the identities of step 1.1 over $i=0,\dots,k$ gives $$\sum_{i=0}^{k}(-1)^{k-i}(m_i-b_i)=\sum_{i=0}^{k}(-1)^{k-i}(q_i+q_{i-1})=q_k\ge0,$$ which is the displayed strong inequality and identifies the difference of the two sides with $q_k$. This restates the dimension bookkeeping of [F2] in the present notation. [F2, step 1.1, algebra]

2.2 Since $M_f$ and $P_{M,F}$ have degree at most $n$, the left side $M_f-P_{M,F}=(1+t)Q$ also has all coefficients zero in degrees $>n$. If $q_K\ne0$ for some $K\ge n$, take $K$ maximal with this property; then the coefficient identity of step 1.1 at $k=K+1>n$ reads $0=m_{K+1}-b_{K+1}=q_{K+1}+q_K=0+q_K$, a contradiction. Hence $q_k=0$ for every $k\ge n$. [step 1.1, F1, algebra]

3.1 For $k\ge n$ step 2.1 then gives equality of the two alternating partial sums; all terms with $i>n$ vanish, so the common value alternates in sign with $k$, so the common value is $\sum_{i=0}^{n}(-1)^{k-i}m_i=\sum_{i=0}^{n}(-1)^{k-i}b_i$. [step 2.1, step 2.2, F1] ∎

## Remarks

- **Weak form.** Adding the nonnegative differences in degrees $k$ and $k-1$ gives $m_k-b_k=q_k+q_{k-1}\ge0$; this is recorded separately.
- **Euler case.** At $k=n$ the common value is $(-1)^n\sum_i(-1)^im_i=(-1)^n\sum_i(-1)^ib_i$; the identification of either sum with $(-1)^n\chi(M)$ is the Euler characteristic identity proved below.
