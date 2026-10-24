---
id: ex-revised-simplex-degenerate-cycle-prevented-by-bland
kind: example
title: "A degenerate six-pivot cycle prevented by Bland's rule"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - alg-revised-primal-simplex-bland-rule
  - thm-revised-simplex-bland-rule-finite-termination
  - thm-revised-simplex-primal-pivot-objective-ray-optimality
justified_by: []
aliases: []
verification:
  precheck: pass
dependency_level: 5
proof_strategy: direct
sources:
  references:
    - title: "Robert G. Bland, New Finite Pivoting Rules for the Simplex Method, pp. 103–105"
      url: "https://web.ist.utl.pt/mcasquilho/acad/or/ftp/1977MathOR_Bland.pdf"
    - title: "Dimitris Bertsimas and John N. Tsitsiklis, Introduction to Linear Optimization, §3.4 and Example 3.6"
      url: "https://ru.djvu.online/file/akQmg8LVIXoy3"
    - title: "Michel Goemans, MIT 18.310 Lecture Notes: Linear Programming, §2.4"
      url: "https://ocw.mit.edu/courses/18-310-principles-of-discrete-applied-mathematics-fall-2013/11d00f8f0f460a5e59b5e97322a218a9_MIT18_310F13_Ch8.pdf"
---

## Example

Consider the exact minimization problem with $x_1,\ldots,x_7\ge0$ and
$$\tfrac12x_1-\tfrac{11}{2}x_2-\tfrac52x_3+9x_4+x_5=0,\quad\tfrac12x_1-\tfrac32x_2-\tfrac12x_3+x_4+x_6=0,\quad x_1+x_7=1,$$
minimizing $-10x_1+57x_2+9x_3+24x_4$. Start from basis $(5,6,7)$; exact reduced costs and ratio tests below show that the most-negative reduced-cost rule cycles, while Bland's least-index entering and leaving rules terminate.

## Facts & Assumptions

**Given:** The exact seven-variable LP in the Example and the two pivot rules being compared.

[F1] [[alg-revised-primal-simplex-bland-rule]]: On exact full-row-rank standard-form data at a primal-feasible basis, choose the least index $j\notin B$ with $\bar c_j<0$ and solve $A_Bd=a_j$. Among minimum-ratio rows, leave the basic variable of least index.

[F2] [[thm-revised-simplex-primal-pivot-objective-ray-optimality]]: At a primal-feasible basis with nonbasic entering index $j$ and $\bar c_j<0$, put $d=A_B^{-1}a_j$. If some $d_i>0$, the step $\theta=\min_{d_i>0}(x_{B_i}/d_i)$ is finite and nonnegative, every minimizing row gives a valid pivot, the new basic vector is feasible, and the objective change is $\theta\bar c_j\le0$. A primal-feasible basis with all nonbasic reduced costs nonnegative is optimal.

[F3] [[thm-revised-simplex-bland-rule-finite-termination]]: Under its exact-arithmetic, finite-standard-form, full-row-rank hypotheses, the primal run terminates after finitely many pivots at an optimal basis or returns a feasible ray of strictly negative cost.

## Verification


1.1 Initially $B=(5,6,7)$, $x_B=(0,0,1)$, and the only negative reduced cost is $\bar c_1=-10$. For entering $x_1$, $d=(1/2,1/2,1)$ gives ratios $(0,0,1)$ for $(x_5,x_6,x_7)$, so the least-index leaving tie is $x_5$ and $\theta=0$. The next basis is $(1,6,7)$. [given, F1, F2, algebra]

2.1 At $B=(1,6,7)$ the negative reduced costs are $\bar c_2=-53$ and $\bar c_3=-41$. Both rules choose $x_2$. Its direction is $d=(-11,4,11)$; the eligible ratios for $(x_6,x_7)$ are $(0,1/11)$, so $x_6$ leaves at $\theta=0$ and the basis becomes $(1,2,7)$. [F1, F2, step 1.1, algebra]

3.1 At $B=(1,2,7)$ the negative reduced cost is $\bar c_3=-29/2$. Its direction is $d=(1/2,1/2,-1/2)$, so the eligible ratios for $(x_1,x_2)$ are $(0,0)$; the least-index leaving variable is $x_1$, giving $\theta=0$ and basis $(3,2,7)$. [F1, F2, step 2.1, algebra]

4.1 At $B=(3,2,7)$ the negative reduced costs are $\bar c_4=-18$ and $\bar c_5=-15$, so both rules choose $x_4$. Its direction is $d=(-8,2,0)$; the only eligible ratio is $0$ for $x_2$, which leaves and gives basis $(3,4,7)$. [F1, F2, step 3.1, algebra]

5.1 At $B=(3,4,7)$ the only negative reduced cost is $\bar c_5=-21/2$. Its direction is $d=(1/2,1/4,0)$; the eligible ratios for $(x_3,x_4)$ are $(0,0)$, so $x_3$ leaves at $\theta=0$ and the basis becomes $(5,4,7)$. Thus the first five pivots agree under both rules. [F1, F2, step 4.1, algebra]

6.1 At $B=(5,4,7)$, $\bar c_1=-22$ and $\bar c_6=-24$. The most-negative rule chooses $x_6$, whose direction $d=(-9,1,0)$ has only the eligible ratio $0$ for $x_4$. The pivot leaves $x_4$ and returns to $(5,6,7)$ with the same basic vector and objective $0$; repeating the deterministic choices cycles. [F2, step 1.1, step 5.1, algebra]

6.2 At the same basis $(5,4,7)$, Bland chooses $x_1$ because $1<6$. Its direction is $d=(-4,1/2,1)$; the eligible ratios for $(x_4,x_7)$ are $(0,1)$, so $x_4$ leaves and the next basis is $(5,1,7)$, still with $\theta=0$. [F1, F2, step 5.1, algebra]

7.1 At $B=(5,1,7)$ the only negative reduced cost is $\bar c_3=-1$. Its direction is $d=(-2,-1,1)$, so only $x_7$ is eligible and its ratio is $1$. The pivot gives basis $(5,1,3)$ and basic values $(2,1,1)$, hence the full vector is $x=(1,0,1,0,2,0,0)$. [F1, F2, step 6.2, algebra]

8.1 At this final basis the objective is $-10+9=-1$ and the remaining reduced costs for $(x_2,x_4,x_6,x_7)$ are $(30,42,18,1)$, all nonnegative. The basic vector is feasible, so [F2] proves it optimal; [F3] also confirms finite termination. The six-pivot most-negative cycle and Bland's terminating branch are thereby checked with exact rational pivots. [F1, F2, F3, step 7.1, algebra] ∎
