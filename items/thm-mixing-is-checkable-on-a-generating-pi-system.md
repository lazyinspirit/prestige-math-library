---
id: thm-mixing-is-checkable-on-a-generating-pi-system
kind: theorem
title: Mixing is checkable on a generating pi-system
deps: [def-strong-and-weak-mixing, lem-finite-measure-sets-are-approximable-by-a-generating-algebra, thm-finite-and-countable-subadditivity-of-measures,
  thm-linearity-of-the-lebesgue-integral-on-l-one]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Einsiedler–Ward Exercise 2.7.3(1)–(2), pp.52–53; local Boolean-algebra extension from a pi-system
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
  scraped: []
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Let $(X,\mathcal A,\mu,T)$ be a measure-preserving probability system and $\mathcal P$ a generating pi-system containing X. Strong mixing is equivalent to $d_n(A,B)\to0$ for $A,B\in\mathcal P$. Weak mixing is equivalent to $N^{-1}\sum_{n<N}|d_n(A,B)|\to0$ for $A,B\in\mathcal P$, where $d_n(A,B)=\mu(A\cap T^{-n}B)-\mu(A)\mu(B)$.

## Facts & Assumptions

[F1] The two properties quantify convergence of correlations or their absolute averages over all measurable pairs [[def-strong-and-weak-mixing]].

[F2] On a finite measure space every measurable set has arbitrarily accurate algebra approximants [[lem-finite-measure-sets-are-approximable-by-a-generating-algebra]].

[F3] The measure of a finite union is at most the sum of its measures [[thm-finite-and-countable-subadditivity-of-measures]].

[F4] Integration of finite linear combinations of integrable functions is linear [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Let $\mathcal C$ consist of finite Boolean combinations of members of $\mathcal P$. Each indicator of an atom of a finite Boolean partition is a product of factors $\mathbf1_P$ and $1-\mathbf1_P$. Expanding the product expresses it as a finite integer linear combination of indicators of intersections of members of $\mathcal P$. Empty intersections are X, which lies in $\mathcal P$, and all other intersections lie in $\mathcal P$ by the pi-system property. Finite sums of these atom indicators express every $\mathbf1_C$, $C\in\mathcal C$, in this way. [given]

2.1 Integration and multiplication of finite sums now express $d_n(C,D)$ as a finite linear combination $\sum_{j,k}a_jb_k d_n(P_j,Q_k)$. In the strong case each summand tends to zero. In the weak case the average of the absolute value is at most $\sum_{j,k}|a_jb_k|N^{-1}\sum_{n<N}|d_n(P_j,Q_k)|$, which tends to zero. The respective test therefore holds on $\mathcal C$. [F1, step 1.1, F4]

3.1 The family $\mathcal C$ is an algebra generating $\mathcal A$. For measurable A,B and $\delta>0$, choose C,D in it with $\mu(A\mathbin\triangle C),\mu(B\mathbin\triangle D)<\delta$. Measure preservation gives $\mu(T^{-n}(B\mathbin\triangle D))=\mu(B\mathbin\triangle D)$ by repeated pullback. Thus the difference of the intersection measures is bounded by the sum of these two errors. Also $|\mu(A)\mu(B)-\mu(C)\mu(D)|\le\mu(A\mathbin\triangle C)+\mu(B\mathbin\triangle D)$, since all masses are at most one. Consequently $|d_n(A,B)-d_n(C,D)|<4\delta$ uniformly in n. [F2, step 2.1, given, F3]

4.1 In the strong case the limsup of $|d_n(A,B)|$ is at most $4\delta$. In the weak case the same bound holds for the limsup of its absolute Cesaro averages. Letting $\delta$ decrease to zero proves the full respective property. Conversely either full property restricts to the pairs in $\mathcal P$ by its definition. [F1, step 2.1, step 3.1] ∎
