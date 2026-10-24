---
id: thm-ring-of-integers-free-of-rank-degree
kind: theorem
title: "The ring of integers has rank the degree"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ring-of-integers-of-a-number-field, def-number-field, def-field-norm-and-trace, thm-clearing-denominators-for-an-algebraic-number, cor-integral-elements-form-a-subring, cor-trace-and-norm-of-an-algebraic-integer, thm-invertible-matrix-theorem, lem-subgroups-of-z-are-cyclic]
proof_strategy: direct
verification:
  audited: 2026-10-01
  precheck: pass
sources:
  references:
    - title: "Milne, Proposition 2.29"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

$\mathcal O_K$ is a free $\mathbb Z$-module of rank $[K:\mathbb Q]$.

## Facts & Assumptions

**Given:** A number field $K$.

[F1] By definition, $K/\mathbb Q$ is a finite extension of degree $[K:\mathbb Q]$ ([[def-number-field]]).

[F2] The trace of $a\in K$ is the matrix trace of multiplication by $a$ on the finite-dimensional $\mathbb Q$-space $K$ ([[def-field-norm-and-trace]]).

[F3] Every element of $K$ has a positive integer multiple in $\mathcal O_K$ ([[thm-clearing-denominators-for-an-algebraic-number]]).

[F4] The trace of an algebraic integer in a number field is an integer ([[cor-trace-and-norm-of-an-algebraic-integer]]).

[F5] The integral elements over a nonzero base ring form a subring ([[cor-integral-elements-form-a-subring]]).

[F6] Every additive subgroup of $\mathbb Z$ is $d\mathbb Z$ for a unique $d\geq0$, with $d>0$ the least positive member when the subgroup is nonzero ([[lem-subgroups-of-z-are-cyclic]]).

[F7] A square matrix over a field is invertible exactly when its kernel is zero, and then each right-hand side has a unique solution ([[thm-invertible-matrix-theorem]]).

## Proof

**Proof technique:** direct.

1.1 Put $n=[K:\mathbb Q]$ and choose a $\mathbb Q$-basis $e_1,\ldots,e_n$ of $K$. By [F1], $K$ is an $n$-dimensional $\mathbb Q$-vector space. [F1, given, choose]

1.2 We prove by induction on $m\geq0$ that every additive subgroup $H\leq\mathbb Z^m$ has a finite $\mathbb Z$-basis. For $m=0$, the zero subgroup has the empty basis. Now let $m>0$ and assume the assertion for $m-1$. Project $H$ to its first coordinate. By [F6], the image is either $\{0\}$ or $d\mathbb Z$ for some positive integer $d$. [F6, given]

2.1 Define $B(x,y)=\operatorname{Tr}_{K/\mathbb Q}(xy)$. Multiplication in $K$ gives $m_{(a x+b y)z}=a m_{xz}+b m_{yz}$ for $a,b\in\mathbb Q$, and matrix trace is linear; the same holds in the second variable since $K$ is commutative. Thus $B$ is a bilinear form. [F2, step 1.1, algebra]

2.2 For each $i$, [F3] gives a positive integer $m_i$ such that $u_i:=m_i e_i\in\mathcal O_K$. These elements remain a $\mathbb Q$-basis. Set $M=\sum_{i=1}^n\mathbb Z u_i$. By [F5], $M\subseteq\mathcal O_K$. [F3, F5, step 1.1, choose]

2.3 If the image is zero, $H$ identifies with a subgroup of $\mathbb Z^{m-1}$ and has a finite basis by induction. If the image is $d\mathbb Z$, its kernel $H_0$ identifies with a subgroup of $\mathbb Z^{m-1}$ and has a finite basis $k_1,\ldots,k_r$ by induction. Choose one $h\in H$ whose first coordinate is $d$. [step 1.2, choose]

3.1 If $x\ne0$, take $y=x^{-1}$. Then $B(x,y)=\operatorname{Tr}_{K/\mathbb Q}(1)=n$, because multiplication by $1$ is the identity on the $n$-dimensional space $K$. As $n>0$ in $\mathbb Q$, this proves that the radical of $B$ is zero. [F2, step 1.1, step 2.1, algebra]

3.2 In the nonzero-image case of step 2.3, every $g\in H$ has first coordinate $qd$ for some $q\in\mathbb Z$, so $g-qh\in H_0$; hence $h,k_1,\ldots,k_r$ span $H$. If $a h+\sum_i b_i k_i=0$, its first coordinate gives $ad=0$, hence $a=0$, and the independence of the basis of $H_0$ then gives every $b_i=0$. Thus this spanning list is a basis. The induction uses only one lift for each fixed subgroup at this finite stage, not a choice of lifts for a family. [step 2.3, algebra]

4.1 Let $A=(\operatorname{Tr}_{K/\mathbb Q}(u_i u_j))_{i,j}$. If $A z=0$ for $z\in\mathbb Q^n$, put $x=\sum_j z_j u_j$. Then $\operatorname{Tr}_{K/\mathbb Q}(u_i x)=0$ for every $i$, and bilinearity makes $\operatorname{Tr}_{K/\mathbb Q}(y x)=0$ for every $y\in K$, since the $u_i$ form a $\mathbb Q$-basis. By step 3.1, $x=0$, so $z=0$. Thus $A$ has zero kernel and [F7] makes it invertible. [F2, F7, step 1.1, step 2.1, step 3.1, step 2.2, algebra]

5.1 For each $j$, solve $A v_j=\varepsilon_j$ over $\mathbb Q$, where $\varepsilon_j$ is the $j$th standard coordinate vector, and put $u_j^*=\sum_k(v_j)_k u_k$. By [F7], these solutions exist uniquely and satisfy $\operatorname{Tr}_{K/\mathbb Q}(u_i u_j^*)=\delta_{ij}$ for every $i,j$. [F7, step 4.1, algebra]

6.1 The coordinates of the finitely many $u_j^*$ in the basis $u_1,\ldots,u_n$ are rational. Choose a positive integer $c$ clearing all their denominators. Then $c u_j^*\in M\subseteq\mathcal O_K$ for every $j$. [step 5.1, choose]

7.1 If $x=\sum_i a_i u_i\in\mathcal O_K$, the trace-dual equations give $c a_j=\operatorname{Tr}_{K/\mathbb Q}(x\,c u_j^*)$. The product is integral by [F5], so [F4] makes this trace an integer. Thus every $a_j\in c^{-1}\mathbb Z$, proving $M\subseteq\mathcal O_K\subseteq c^{-1}M$. [F4, F5, step 6.1, algebra]

8.1 Since $u_1/c,\ldots,u_n/c$ is a $\mathbb Z$-basis of $c^{-1}M\cong\mathbb Z^n$, the inclusion in step 7.1 identifies $\mathcal O_K$ with an additive subgroup of $\mathbb Z^n$. By the induction, it has a finite $\mathbb Z$-basis $v_1,\ldots,v_r$. [step 7.1, step 1.2]

9.1 The $v_i$ span $K$ over $\mathbb Q$: their integral span contains $M$, which spans $K$. Their $\mathbb Z$-independence implies $\mathbb Q$-independence after clearing denominators. Thus they are a $\mathbb Q$-basis and $r=n=[K:\mathbb Q]$. This proves the claim. [step 2.2, step 8.1, algebra] ∎
