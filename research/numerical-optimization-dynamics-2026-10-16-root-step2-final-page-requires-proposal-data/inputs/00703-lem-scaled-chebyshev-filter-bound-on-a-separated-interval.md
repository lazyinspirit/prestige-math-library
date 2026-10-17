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
deps: [def-chebyshev-polynomials-first-and-second-kind,
       def-real-polynomial-degree-leading-coefficient-and-monic,
       thm-of-square-roots]
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
[[def-chebyshev-polynomials-first-and-second-kind]]. Then $p_k$ is a real
polynomial of degree exactly $k$, $p_k(a)=1$, and

$$\max_{x\in[c,b]}|p_k(x)|=\frac{1}{T_k(\xi_a)}.$$

## Facts & Assumptions

**Given:** Real numbers $a>b>c$, an integer $k\ge0$, the affine map $\xi$, the exterior point $\xi_a$, and the polynomial $p_k$ in the Statement.

[F1] [[def-chebyshev-polynomials-first-and-second-kind]]: $T_0=1$, $T_1=X$, and $T_{j+1}=2XT_j-T_{j-1}$ for $j\ge1$.

[F2] [[def-real-polynomial-degree-leading-coefficient-and-monic]]: the degree
and leading coefficient of a nonzero formal real polynomial are determined by
its highest nonzero coefficient.

[F3] [[thm-of-square-roots]]: every nonnegative real has a nonnegative square
root.

## Proof

1.1 Fix $t\in[-1,1]$. Since $1-t^2\ge0$, choose $s\ge0$ with $s^2=1-t^2$ by [F3], and put $z=t+is$. Then $z\overline z=t^2+s^2=1$, so $z^{-1}=\overline z=t-is$ and $z+z^{-1}=2t$. The sequence $S_j=(z^j+z^{-j})/2$ is real, has $S_0=1$ and $S_1=t$, and satisfies $S_{j+1}=2tS_j-S_{j-1}$. By [F1] and induction, $S_j=T_j(t)$. Since $S_j=\operatorname{Re}(z^j)$ and $z\overline z=1$, $|z^j|^2=1$, so $|T_j(t)|\le1$. Equality holds at $t=1$, where $s=0$ and $z=1$. [given, F1, F3, induction, algebra]

1.2 For $\xi_a>1$, recurrence [F1] gives $T_0(\xi_a)=1$ and $T_1(\xi_a)=\xi_a>1$. If $T_j(\xi_a)>T_{j-1}(\xi_a)>0$, then $$T_{j+1}(\xi_a)=2\xi_aT_j(\xi_a)-T_{j-1}(\xi_a)>(2\xi_a-1)T_j(\xi_a)>T_j(\xi_a).$$ Induction proves $T_k(\xi_a)>0$, so the normalizing denominator is nonzero. [given, F1, induction, algebra]

1.3 The recurrence gives $T_0=1$ of degree $0$ and $T_1=X$ of degree $1$ with leading coefficient $1$. If $j\ge1$, $T_j$ has degree $j$ and leading coefficient $2^{j-1}$, and $T_{j-1}$ has degree $j-1$ (with $T_0$ having degree $0$ when $j=1$), then $2XT_j$ has degree $j+1$ and leading coefficient $2^j$, while subtracting $T_{j-1}$ cannot change that highest-degree term. By [F1], induction gives $\deg T_k=k$ and leading coefficient $2^{k-1}$ for every $k\ge1$. [F1, F2, induction, algebra]

2.1 The affine map $\xi$ is increasing, has nonzero slope $2/(b-c)$, and sends $[c,b]$ onto $[-1,1]$. For $k\ge1$, step 1.3 shows that $T_k(\xi(x))$ has degree $k$; step 1.2 shows division by $T_k(\xi_a)>0$ preserves that degree. For $k=0$, $p_0=1$ has degree $0$. Step 1.1 bounds the numerator on $[c,b]$ by $1$ in absolute value and attains $1$ at $x=b$, since $\xi(b)=1$. Since $\xi(a)=\xi_a$, steps 1.2 and 1.3 give $p_k(a)=1$ and prove the maximum formula. [given, step 1.1, step 1.2, step 1.3, algebra] ∎
