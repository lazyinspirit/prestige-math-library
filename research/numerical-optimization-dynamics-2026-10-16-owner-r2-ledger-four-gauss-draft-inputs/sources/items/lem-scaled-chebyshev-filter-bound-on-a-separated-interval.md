---
id: lem-scaled-chebyshev-filter-bound-on-a-separated-interval
kind: lemma
title: "A scaled Chebyshev polynomial suppresses a separated interval"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-chebyshev-polynomials-first-and-second-kind]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §6.11.1, printed pp. 209–210"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
      locator: "Scaled real Chebyshev polynomial on an interval and its value at an exterior point; recurrence and bound verified locally."
    - title: "David Bindel, Matrix Computations (CS 6210), Cornell University, Fall 2012, Lectures 38–39"
      url: "https://www.cs.cornell.edu/~bindel/class/cs6210-f12/notes/lec38-39.pdf"
      locator: "PDF pp. 4–6: scaled Chebyshev filter used in the largest Lanczos Ritz-value estimate."
---

## Statement

Let $a>b>c$ be real numbers, let $k\in\mathbb N$ with $k\ge0$, and put

$$\xi(x):=\frac{2x-b-c}{b-c},\qquad \xi_a:=\xi(a)=1+\frac{2(a-b)}{b-c}>1.$$

Define

$$p_k(x):=\frac{T_k(\xi(x))}{T_k(\xi_a)},$$

where $T_k$ is the $k$th Chebyshev polynomial of the first kind from
[[def-chebyshev-polynomials-first-and-second-kind]]. Then $p_k(a)=1$ and

$$\max_{x\in[c,b]}|p_k(x)|=\frac{1}{T_k(\xi_a)}.$$

## Facts & Assumptions

**Given:** Real numbers $a>b>c$, an integer $k\ge0$, the affine map $\xi$, the exterior point $\xi_a$, and the polynomial $p_k$ in the Statement.

[F1] [[def-chebyshev-polynomials-first-and-second-kind]]: $T_0=1$, $T_1=X$, and $T_{j+1}=2XT_j-T_{j-1}$ for $j\ge1$.

## Proof

1.1 Fix $t\in[-1,1]$, put $s=\sqrt{1-t^2}$ and $z=t+is$. Then $|z|=1$ and $z^{-1}=t-is$. The sequence $S_j=(z^j+z^{-j})/2$ has $S_0=1$, $S_1=t$, and, since $z+z^{-1}=2t$, satisfies $S_{j+1}=2tS_j-S_{j-1}$. By [F1] and induction, $S_j=T_j(t)$. Thus $|T_j(t)|=|\operatorname{Re}(z^j)|\le1$; equality holds at $t=1$. [given, F1, induction, algebra]

1.2 For $\xi_a>1$, recurrence [F1] gives $T_0(\xi_a)=1$ and $T_1(\xi_a)=\xi_a>1$. If $T_j(\xi_a)>T_{j-1}(\xi_a)>0$, then $$T_{j+1}(\xi_a)=2\xi_aT_j(\xi_a)-T_{j-1}(\xi_a)>(2\xi_a-1)T_j(\xi_a)>T_j(\xi_a).$$ Induction proves $T_k(\xi_a)>0$, so the normalizing denominator is nonzero. [given, F1, induction, algebra]

2.1 The affine map $\xi$ is increasing and sends $[c,b]$ onto $[-1,1]$. Step 1.1 therefore gives $\max_{x\in[c,b]}|T_k(\xi(x))|=1$. Since $\xi(a)=\xi_a$, steps 1.2 and 2.1 yield $p_k(a)=1$ and the claimed maximum. [given, step 1.1, step 1.2, algebra] ∎
