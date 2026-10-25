---
id: thm-revised-simplex-primal-pivot-objective-ray-optimality
kind: theorem
title: "Primal revised-simplex pivot identities and certificates"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-revised-simplex-standard-form-linear-program
  - def-revised-simplex-basis-dictionary
  - def-inequality-constrained-program-and-kkt-geometry
  - thm-convex-kkt-sufficiency-and-normal-cone-certificate
justified_by: []
aliases: []
verification:
  precheck: pass
dependency_level: 3
proof_strategy: direct
sources:
  references:
    - title: "Dimitris Bertsimas and John N. Tsitsiklis, Introduction to Linear Optimization, §§3.1–3.3"
      url: "https://ru.djvu.online/file/akQmg8LVIXoy3"
    - title: "Michel Goemans, MIT 18.310 Lecture Notes: Linear Programming, §§2–3"
      url: "https://ocw.mit.edu/courses/18-310-principles-of-discrete-applied-mathematics-fall-2013/11d00f8f0f460a5e59b5e97322a218a9_MIT18_310F13_Ch8.pdf"
---

## Statement

Let $B$ be a primal-feasible basis for the standard-form problem of [[def-revised-simplex-standard-form-linear-program]] and [[def-revised-simplex-basis-dictionary]], and let $j$ be a nonbasic index with reduced cost $\bar c_j<0$. Put $d=A_B^{-1}a_j$. If $d_i\le0$ for every basic row $i$, then $r_j=1$, $r_B=-d$, and $r_k=0$ for the other nonbasic indices define a feasible ray with $Ar=0$ and $c^{\mathsf T}r=\bar c_j<0$; the LP is unbounded below. If some $d_i>0$, the step $\theta=\min_{d_i>0}(x_{B_i}/d_i)$ is finite and nonnegative, every minimizing row gives a valid pivot, the new basic vector is feasible, and the objective change is $\theta\bar c_j\le0$, strictly negative exactly when $\theta>0$. Finally, if all nonbasic reduced costs are nonnegative at a primal-feasible basis, its basic vector is optimal.

## Facts & Assumptions

**Given:** The standard-form data, a primal-feasible basis $B$, and a nonbasic $j$ with $\bar c_j<0$ when considering a pivot.

[F1] [[def-revised-simplex-standard-form-linear-program]]: Its feasible set is $P(A,b)=\{x\in\mathbb R^n:Ax=b,\ x_j\ge0\text{ for every }j\}$, and a feasible $x$ is optimal if $c^{\mathsf T}x\le c^{\mathsf T}z$ for every $z\in P(A,b)$.

[F2] [[def-revised-simplex-basis-dictionary]]: For every column $j$, its reduced cost is $\bar c_j=c_j-a_j^{\mathsf T}y(B)$, and each basic reduced cost is zero.

[F3] [[def-inequality-constrained-program-and-kkt-geometry]]: The KKT system requires primal feasibility, nonnegative inequality multipliers, complementary products $\lambda_i g_i(x)=0$, and zero Lagrangian gradient.

[F4] [[thm-convex-kkt-sufficiency-and-normal-cone-certificate]]: On an open convex domain, a differentiable convex objective and inequalities with a feasible KKT tuple and nonnegative inequality multipliers certify a global minimum.

## Proof


1.1 Define $r_j=1$, $r_B=-d$, and all other nonbasic components of $r$ to be zero. Since $A_Bd=a_j$, we have $Ar=a_j-A_Bd=0$; also $c^{\mathsf T}r=c_j-c_B^{\mathsf T}A_B^{-1}a_j=\bar c_j$. [F1, F2, algebra]

2.1 If every $d_i\le0$, then $r\ge0$, so $x+\lambda r$ is feasible for every $\lambda\ge0$. Its cost is $c^{\mathsf T}x+\lambda\bar c_j$, which tends to $-\infty$ as $\lambda\to\infty$; this proves the ray branch. [given, F1, step 1.1, algebra]

2.2 If some $d_i>0$, set $\theta=\min_{d_i>0}x_{B_i}/d_i$. Each ratio is nonnegative, the finite nonempty index set has a minimum, and $x_B-\theta d\ge0$: rows with $d_i>0$ satisfy the ratio bound, while rows with $d_i\le0$ do not decrease. The entering component is $\theta\ge0$, so $x+\theta r$ is feasible. [given, F1, step 1.1, choose, algebra]

3.1 For any minimizing row $i$, replacing column $B_i$ by $a_j$ gives a basis: in coordinates of $A_B$, the replacement column is $d$, whose $i$th entry is positive, so expansion along that column gives a nonzero determinant. The unique basic vector of the new basis is $x+\theta r$, because that vector satisfies the constraints and has zero on the remaining nonbasic variables. [F2, step 2.2, algebra]

3.2 The objective change is $c^{\mathsf T}(x+\theta r)-c^{\mathsf T}x=\theta c^{\mathsf T}r=\theta\bar c_j$. Since $\theta\ge0$ and $\bar c_j<0$, it is nonpositive and is zero exactly when $\theta=0$, the degenerate-pivot case. [step 1.1, step 2.2, algebra]

4.1 If $n=0$, the feasible set contains only the empty vector, so its feasible basic vector is optimal. Suppose $n\ge1$. Set $U=\mathbb R^n$, $f(z)=c^{\mathsf T}z$, $h(z)=Az-b$, $g_j(z)=-z_j$, $\nu=-y(B)$, and $\lambda=c-A^{\mathsf T}y(B)$. The open convex domain is $U=\mathbb R^n$, and the affine functions are differentiable and convex. The vector $\lambda$ is the reduced-cost vector, including zero basic coordinates by [F2], so it is nonnegative; $x$ is feasible by hypothesis. For each $j$, either $j$ is nonbasic and $x_j=0$, or $j$ is basic and $\lambda_j=0$, so $\lambda_jg_j(x)=0$. Since $Dg=-I$, the stationarity expression is $\nabla f(x)+A^{\mathsf T}\nu+Dg(x)^{\mathsf T}\lambda=c-A^{\mathsf T}y(B)-\lambda=0$. These are precisely the KKT conditions of [F3], and [F4] proves that $x$ globally minimizes $c^{\mathsf T}z$ over $P(A,b)$. [given, F1, F2, F3, F4, algebra] ∎
