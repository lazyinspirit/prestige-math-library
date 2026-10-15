---
id: thm-tdmath-finite-inequality-alternative
kind: theorem
title: Finite inequality alternative by Fourier–Motzkin elimination
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: [def-complete-ordered-field, def-vector-space, def-finite-sum, lem-finite-sum-laws]
dependency_roles:
  def-complete-ordered-field: mathematical-premise
  def-vector-space: mathematical-premise
  def-finite-sum: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stanford EE464, Fourier–Motzkin Elimination lecture notes"
      url: "https://lall.stanford.edu/ee464/lectures/fourier_motzkin.pdf?download=1"
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §VI.B"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
---

## Statement

Let $m,n\in\mathbb N$ be finite, let $c_j\in\mathbb R^n$ and $h_j\in\mathbb R$ for $0\le j<m$. The finite system

$$c_j\cdot b\ge h_j\qquad(0\le j<m)$$

has a solution $b\in\mathbb R^n$ if and only if every $\lambda\in\mathbb R^m$ with $\lambda_j\ge0$ and $\sum_{j<m}\lambda_jc_j=0$ satisfies $\sum_{j<m}\lambda_jh_j\le0$. Dot products and sums are finite. This includes empty rows, empty variables, and an empty inequality family.

## Facts & Assumptions

[A1] The finite row data in the Statement: $m,n$ are nonnegative integers, and each row is $(c_j,h_j)$ with real coefficients.

[F1] [[def-complete-ordered-field]] and [[def-vector-space]]: real coordinates form an ordered field and the usual coordinate operations are defined.

[F2] [[def-finite-sum]] and [[lem-finite-sum-laws]]: finite sums obey distributivity and are invariant under reindexing.

## Proof

**Given:** [A1]–[F2].

1.1 If $b$ solves the system and $\lambda_j\ge0$ with $\sum_j\lambda_jc_j=0$, multiply row $j$ by $\lambda_j$ and add the finitely many inequalities. The left side is $(\sum_j\lambda_jc_j)\cdot b=0$ by [F2]; hence $0\ge\sum_j\lambda_jh_j$. This proves necessity. [A1, F1, F2, algebra]

1.2 For sufficiency, prove by induction on $n$ the alternative: if the finite system has no solution, there is a nonnegative combination of its rows whose coefficient vector is zero and whose right side is positive. If $n=0$, every row has zero left side; infeasibility means some $h_j>0$, and that single row is the certificate. If $m=0$, the system is feasible, so this case cannot occur under the induction claim's antecedent. [A1, F1]

1.3 Let $n>0$ and assume the alternative for $n-1$ variables. Write $c_j=(a_j,\alpha_j)$ with $a_j\in\mathbb R^{n-1}$ and split the row indices into $P=\{j:\alpha_j>0\}$, $N=\{j:\alpha_j<0\}$, and $Z=\{j:\alpha_j=0\}$. Retain each row $(a_j,h_j)$ for $j\in Z$. For every $p\in P$ and $q\in N$, add the reduced row $((-\alpha_q)a_p+\alpha_p a_q,\;(-\alpha_q)h_p+\alpha_p h_q)$. Every multiplier used is positive. [A1, F1, algebra]

1.4 The reduced system in $u\in\mathbb R^{n-1}$ is feasible exactly when the original is. Indeed, a solution $(u,t)$ implies every retained inequality; adding row $p$ multiplied by $-\alpha_q>0$ to row $q$ multiplied by $\alpha_p>0$ cancels $t$ and gives each pair row. Conversely, if $u$ satisfies the reduced system, rows in $P$ impose finitely many lower bounds $t\ge(h_p-a_p\cdot u)/\alpha_p$, and rows in $N$ impose finitely many upper bounds $t\le(h_q-a_q\cdot u)/\alpha_q$. Each pair row is exactly the inequality that its lower bound is no greater than its upper bound. If both sets are nonempty, their finite maximum lower bound is at most their finite minimum upper bound, so choose $t$ between them. If only lower bounds occur choose their maximum; if only upper bounds occur choose their minimum; if neither occurs choose $t=0$. Thus the original system has a solution. [A1, F1, F2, algebra]

2.1 If the original system is infeasible, step 1.4 makes the reduced system infeasible. By induction there are nonnegative multipliers on reduced rows with zero combined first $n-1$ coordinates and positive combined right side. Lift each retained zero-row multiplier to its original row; lift each pair-row multiplier $\mu_{pq}$ to coefficients $-\alpha_q\mu_{pq}$ on row $p$ and $\alpha_p\mu_{pq}$ on row $q$. All lifted coefficients are nonnegative. Every pair lift has last coordinate $(-\alpha_q)\alpha_p+\alpha_p\alpha_q=0$; the total first coordinates vanish by the reduced certificate, and its right side remains positive. This is the required certificate for the original system and completes the induction. [A1, step 1.2, step 1.3, step 1.4, algebra]

3.1 If the stated multiplier condition holds, the certificate from step 2.1 cannot exist, because it would have zero combined left coefficient and positive combined right side. Therefore the system is feasible. Together with step 1.1 this proves both directions, including the empty-variable base case in step 1.2, the zero/positive/negative sign partition and bound reconstruction in steps 1.3–1.4, and the lifted certificate in step 2.1. [A1, step 1.1, step 1.2, step 1.3, step 1.4, step 2.1] ∎

