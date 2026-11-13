---
title: The constant projection and centering decomposition
status: draft
research_item: prop-expander-prereq-constant-projection
dependency_level: 1
---

## Prerequisites

- [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)
- [math:def-orthogonal-projection](https://alphabetamath.cc/item/def-orthogonal-projection)


## Statement

Let $V$ be a finite nonempty set, $n=|V|$, and let $\mathbb C^V$ have the inner product $\langle f,g\rangle=\sum_{x\in V}\overline{f(x)}g(x)$. Write $\mathbf1$ for the function identically equal to $1$, $I$ for the identity operator, $J=\mathbf1\mathbf1^*$, $P=J/n$, and $Q=I-P$. Here $\mathbf1^*f=\sum_{x\in V}f(x)$. The constant subspace is $C=\{c\mathbf1:c\in\mathbb C\}$, and $\mathbf1^\perp=\{f:\langle\mathbf1,f\rangle=0\}$.

Then $P$ is the orthogonal projection onto $C$ and $Q$ is the orthogonal projection onto $\mathbf1^\perp$. For every $f\in\mathbb C^V$, $f=Pf+Qf$ and $f^*Jf=|\sum_{x\in V}f(x)|^2$.

If a linear operator $A$ is self-adjoint and satisfies $A\mathbf1=d\mathbf1$ for some $d\in\mathbb C$, both $C$ and $\mathbf1^\perp$ are invariant under $A$, meaning that $A$ maps each subspace into itself, and $A-dP$ vanishes on $C$. For a nonregular operator, meaning here one for which $A\mathbf1$ is not a scalar multiple of $\mathbf1$, such invariance is not assumed.

## Statement references

[def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)

[math:def-orthogonal-projection](https://alphabetamath.cc/item/def-orthogonal-projection)

## Facts & Assumptions

[F1] On $\mathbb C^V$, the stated inner product is conjugate-linear in its first argument and linear in its second; the conjugate transpose gives the adjoint, so a self-adjoint $A$ satisfies $\langle u,Av\rangle=\langle Au,v\rangle$ ([def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)).

[F2] In a finite-dimensional inner product space, the orthogonal projection onto a subspace $W$ assigns to each vector its unique $W$ component in a decomposition with the other component in $W^\perp$ ([math:def-orthogonal-projection](https://alphabetamath.cc/item/def-orthogonal-projection)).

## Proof

**Given:** A finite nonempty $V$, the operators and subspaces in the statement, and, for the final assertion, a self-adjoint $A$ with $A\mathbf1=d\mathbf1$.

**Goal:** Establish the projection, quadratic-form and invariance assertions.

1.1 For $f\in\mathbb C^V$, put $s=\sum_{x\in V}f(x)$. Matrix multiplication gives $Jf=s\mathbf1$ and $Pf=(s/n)\mathbf1\in C$. Since $\langle\mathbf1,\mathbf1\rangle=n$, we have $\langle\mathbf1,f-Pf\rangle=s-(s/n)n=0$. Thus $Qf=f-Pf\in\mathbf1^\perp$ and $f=Pf+Qf$. Moreover $C^\perp=\mathbf1^\perp$, since $\langle c\mathbf1,g\rangle=\overline c\langle\mathbf1,g\rangle$. The decomposition therefore identifies $P$ as the orthogonal projection onto $C$. [F1, F2, given, algebra]

2.1 The same decomposition identifies $Q$ as the orthogonal projection onto $\mathbf1^\perp$: its remainder $f-Qf=Pf$ lies in $C$, which is orthogonal to $\mathbf1^\perp$. Also $f^*Jf=\langle f,Jf\rangle=\overline{s}s=|s|^2$. [F1, F2, step 1.1, algebra]

3.1 If $c\in\mathbb C$, then $A(c\mathbf1)=cd\mathbf1\in C$. If $f\in\mathbf1^\perp$, self-adjointness gives $\langle\mathbf1,Af\rangle=\langle A\mathbf1,f\rangle=\overline d\langle\mathbf1,f\rangle=0$; hence $Af\in\mathbf1^\perp$. Finally $P(c\mathbf1)=c\mathbf1$, so $(A-dP)(c\mathbf1)=0$. These deductions use the stated eigenvector and self-adjoint hypotheses; no invariance is asserted for nonregular operators. [F1, step 1.1, given, algebra] ∎
