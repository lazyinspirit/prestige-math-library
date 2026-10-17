---
id: thm-revised-simplex-bland-rule-finite-termination
kind: theorem
title: "Bland-rule finite termination and optimal-basis existence"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-revised-simplex-basis-dictionary
  - lem-revised-simplex-basic-feasible-extreme-point-equivalence
  - thm-revised-simplex-primal-pivot-objective-ray-optimality
  - alg-revised-primal-simplex-bland-rule
justified_by: []
aliases: []
verification:
  precheck: pass
dependency_level: 4
proof_strategy: direct
sources:
  references:
    - title: "Robert G. Bland, New Finite Pivoting Rules for the Simplex Method, Theorem 1.1, pp. 103–105"
      url: "https://web.ist.utl.pt/mcasquilho/acad/or/ftp/1977MathOR_Bland.pdf"
    - title: "Dimitris Bertsimas and John N. Tsitsiklis, Introduction to Linear Optimization, §3.4"
      url: "https://ru.djvu.online/file/akQmg8LVIXoy3"
    - title: "Michel Goemans, MIT 18.310 Lecture Notes: Linear Programming, §2.4.2"
      url: "https://ocw.mit.edu/courses/18-310-principles-of-discrete-applied-mathematics-fall-2013/11d00f8f0f460a5e59b5e97322a218a9_MIT18_310F13_Ch8.pdf"
---

## Statement

For exact arithmetic and a finite standard-form LP with full-row-rank $A$, the primal algorithm of [[alg-revised-primal-simplex-bland-rule]], started from any primal-feasible basis, terminates after finitely many pivots at an optimal basis or returns a feasible ray of strictly negative cost. If the feasible set is nonempty and the objective is bounded below, an optimal basis exists and is returned. The number of pivots is at most the number of possible bases, hence at most $\binom{n}{m}$; this is a finiteness bound, not a polynomial-time claim. Every pivot may be degenerate, so the objective need not decrease strictly at each step.

## Facts & Assumptions

**Given:** Exact standard-form data with $A$ of full row rank, a primal-feasible basis, and the deterministic least-index entering and leaving rules.

[F1] [[def-revised-simplex-basis-dictionary]]: In particular, $\bar c_{B_i}=0$ for each basic index.

[F2] [[thm-revised-simplex-primal-pivot-objective-ray-optimality]]: The objective change is $\theta\bar c_j\le0$, strictly negative exactly when $\theta>0$.

[F3] [[alg-revised-primal-simplex-bland-rule]]: Otherwise choose the least index $j\notin B$ with $\bar c_j<0$ and solve $A_Bd=a_j$.

[F4] [[lem-revised-simplex-basic-feasible-extreme-point-equivalence]]: In particular, every nonempty $P(A,b)$ has a basic feasible solution.

## Proof


1.1 Every pivot in [F3] uses a negative reduced cost and a nonnegative ratio, so [F2] makes the objective nonincreasing. If a basis repeats, the deterministic rule repeats the same future pivots and produces a cycle; the objective returns to its initial value, forcing every pivot decrease to be zero. Since each entering reduced cost is strictly negative, every pivot in the cycle has $\theta=0$, so the represented feasible vector stays fixed throughout the cycle. [F2, F3, algebra]

2.1 Let $T$ be the indices that enter in this cycle and let $q=\max T$. Because the basis returns, $q$ also leaves. Choose a tableau $P$ where $q$ enters and a tableau $Q$ where $q$ leaves. At $P$, its reduced cost $r_q^P<0$ and $r_j^P\ge0$ for every $j<q$: a basic reduced cost is zero, and a lower-index eligible nonbasic variable would have been chosen instead. At $Q$, the entering variable $t$ is in $T$, is not the basic variable $q$, and therefore satisfies $t<q$. [F1, F3, step 1.1]

3.1 At $Q$, put $d=A_{B_Q}^{-1}a_t$ and define the entering direction $z_t=1$, $z_{B_Q}=-d$, with other nonbasic coordinates zero. Then $Az=0$, $c^{\mathsf T}z=r_t^Q<0$, and $z_q<0$ because $q$ leaves through a row with positive pivot coefficient. If $r^P=c-A^{\mathsf T}y^P$ is the reduced-cost vector at $P$, then $r^P\cdot z=c^{\mathsf T}z<0$ since $Az=0$. [F1, F2, F3, step 2.1, algebra]

4.1 For every $j>q$, $r_j^Pz_j=0$: if $j$ is basic at $P$ then $r_j^P=0$, while if it is nonbasic at $P$, maximality of $q$ means it never enters during the cycle and it is nonbasic at $Q$, where $z_j=0$. Also $r_q^Pz_q>0$. Thus the negative sum $r^P\cdot z$ forces some $j<q$ with $r_j^Pz_j<0$; because $r_j^P\ge0$, this gives $r_j^P>0$ and $z_j<0$. Such a $j$ is nonbasic at $P$, basic at $Q$, and has $d_j>0$. Its value is zero at $P$ and stays zero during the degenerate cycle, so at $Q$ it ties with $q$ at ratio zero. [F1, step 1.1, step 2.1, step 3.1, algebra]

5.1 Since $j<q$ is an eligible leaving variable with the same minimum ratio as $q$, [F3] would choose $j$ to leave at $Q$, contradicting the choice of $q$. Therefore no basis repeats. [F3, step 4.1]

6.1 There are at most $\binom{n}{m}$ possible column bases, so the algorithm terminates after at most that many visited bases. At termination [F2] gives either an optimal basis or an unbounded ray. If the objective is bounded below, the ray branch is impossible. If the feasible set is nonempty, [F4] supplies a starting basis; hence a finite optimum is attained at an optimal basis found by the algorithm. The combinatorial bound does not imply polynomial-time complexity. [F2, F4, step 5.1, algebra] ∎
