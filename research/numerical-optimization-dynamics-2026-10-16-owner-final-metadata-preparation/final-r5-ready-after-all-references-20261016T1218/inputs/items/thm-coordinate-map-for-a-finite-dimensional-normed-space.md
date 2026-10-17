---
verification:
  repair: research/quantum-computing-algorithms-60-2026-10-15-owner/published-repairs/thm-coordinate-map-for-a-finite-dimensional-normed-space.json
id: thm-coordinate-map-for-a-finite-dimensional-normed-space
kind: theorem
title: "A chosen algebraic basis identifies a finite-dimensional normed space with a coordinate space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-norm-and-normed-space, lem-of-abs-value, lem-of-triangle-inequality, def-finite-sum, lem-finite-sum-laws, def-linear-basis, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-topological-isomorphism-of-normed-spaces, thm-all-norms-on-rn-are-equivalent, thm-complex-numbers-are-the-real-coordinate-plane, def-complex-norm-and-complex-normed-space, def-realification-of-a-complex-vector-space, lem-complex-modulus-of-real-embedding-equals-real-absolute-value, lem-complex-norm-realification-is-a-real-norm, lem-complex-coordinate-l1-is-a-norm]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Daniel Daners, Introduction to Functional Analysis"
      url: "https://www.maths.usyd.edu.au/u/athomas/FunctionalAnalysis/daners-functional-analysis-2017.pdf"
    - title: "Tomasz Kochanek, Functional analysis, Lecture 1"
      url: "https://www.impan.pl/~tkoch/FA_lecturenotes/lecture1.pdf"
pipeline_run: frontier-29
---

## Statement

Let $X$ be a normed space over $\mathbb K \in \{\mathbb R,\mathbb C\}$, read in
the real case by [[def-norm-and-normed-space]] and the complex case by [[def-complex-norm-and-complex-normed-space]]. Let
$e:n\to X$ be an ordered basis ([[def-linear-basis]]), and write $e_j:=e(j)$.
Give $\mathbb K^n$ its coordinate $\ell^1$ norm

$$\|(a_0,\dots,a_{n-1})\|_1:=\sum_{j<n}|a_j|.$$

Define

$$T:\mathbb K^n\to X,\qquad T(a_0,\dots,a_{n-1})=\sum_{j<n} a_j e_j.$$

Then $T$ is a topological isomorphism of normed spaces in the sense of
[[def-topological-isomorphism-of-normed-spaces]].

## Facts & Assumptions

**Given:** A normed space $X$ over $\mathbb K\in\{\mathbb R,\mathbb C\}$ and an ordered basis $e:n\to X$.

[L1] An ordered basis is a finite list whose image is a basis ([[def-linear-basis]]), and [[thm-unique-coordinates-with-respect-to-an-ordered-basis]] identifies its span with exactly the vectors of the form $\sum_{j<n} a_j e_j$, with those coordinates unique.

[L2] A topological isomorphism of normed spaces is a bounded linear bijection whose inverse is bounded ([[def-topological-isomorphism-of-normed-spaces]]).

[L3] For $m\ge1$, every norm on $\mathbb R^m$ is equivalent to the Euclidean norm, and any two norms on $\mathbb R^m$ are equivalent ([[thm-all-norms-on-rn-are-equivalent]]).

[L4] The map $\Phi:\mathbb C\to\mathbb R^2$, $\Phi(a+bi)=(a,b)$, is a bijection with the stated coordinate arithmetic ([[thm-complex-numbers-are-the-real-coordinate-plane]]).

[L5] Complex norms have full complex absolute homogeneity ([[def-complex-norm-and-complex-normed-space]]). Their realifications carry the same norm and metric ([[def-realification-of-a-complex-vector-space]], [[lem-complex-modulus-of-real-embedding-equals-real-absolute-value]], [[lem-complex-norm-realification-is-a-real-norm]]). The coordinate $\ell^1$ function is a complex norm, including $n=0$ ([[lem-complex-coordinate-l1-is-a-norm]]).

[F1] Real absolute value is definite, multiplicative and subadditive ([[lem-of-abs-value]], [[lem-of-triangle-inequality]]).

[F2] Finite real sums distribute over addition and scaling and preserve inequalities ([[def-finite-sum]], [[lem-finite-sum-laws]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], every $x\in X$ has exactly one coordinate list $a=(a_0,\dots,a_{n-1})\in\mathbb K^n$ with $x=\sum_{j<n} a_j e_j$. Therefore the displayed map $T$ is well defined, surjective, and injective. [L1]

1.2 $T$ is linear, because finite sums and scalar multiplication distribute over the coordinate formula: $T(\lambda a+b)=\sum_{j<n}(\lambda a_j+b_j)e_j=\lambda\sum_{j<n}a_je_j+\sum_{j<n}b_je_j =\lambda T(a)+T(b)$. [given, algebra]

2.1 In the complex case, [L5] makes both $P(a):=\|a\|_1$ and $N(a):=\|T(a)\|$ real norms on $(\mathbb C^n)_{\mathbb R}$: for $N$, separation uses injectivity in step 1.1, and homogeneity and the triangle inequality use step 1.2 and the norm on $X$. The coordinate map $\Psi(a)=(\operatorname{Re}a_0,\operatorname{Im}a_0,\ldots,\operatorname{Re}a_{n-1},\operatorname{Im}a_{n-1})$ is a real-linear bijection by [L4], so $P\circ\Psi^{-1}$ and $N\circ\Psi^{-1}$ are real norms on $\mathbb R^{2n}$. If $n\ge1$, the pairwise equivalence clause of [L3] gives a positive real $c$ such that $cP(a)\le N(a)$ for every $a$. Thus $\|T^{-1}x\|_1\le c^{-1}\|x\|$. If $n=0$, both spaces consist only of zero by [L1], and the inverse is bounded with bound zero. [L1, L3, L4, L5, step 1.1, step 1.2, algebra]

2.2 Put $C:=\sum_{j<n}\|e_j\|$, a finite real. Then $$\|T(a)\|=\left\|\sum_{j<n}a_je_j\right\|\le\sum_{j<n}|a_j|\,\|e_j\| \le C\sum_{j<n}|a_j|=C\|a\|_1,$$ so $T$ is bounded. [step 1.2, given, algebra]

2.3 In the real case $\mathbb K=\mathbb R$, the coordinate $P(a)=\sum_{j<n}|a_j|$ is a real norm: absolute-value definiteness, multiplicativity, and the triangle inequality give the three axioms by finite summation, including the empty list. The pullback $N(a):=\|T(a)\|$ is a norm on $\mathbb R^n$: definiteness uses step 1.1, and the triangle and homogeneity axioms come from the norm axioms on $X$ and the linearity of $T$. If $n=0$, then $\mathbb R^0=\{0\}$ and the inverse of $T$ is the zero map, hence bounded. If $n\ge1$, [L3] gives $c>0$ with $c\|a\|_1\le N(a)=\|T(a)\|$ for every $a\in\mathbb R^n$, so $\|T^{-1}x\|_1\le c^{-1}\|x\|$ for every $x\in X$. Thus $T^{-1}$ is bounded in the real case. [step 1.1, step 1.2, L3, F1, F2, choose]

3.1 Steps 1.1, 1.2, 2.1, 2.2, and 2.3 verify the three clauses of [L2]. Therefore $T$ is a topological isomorphism of normed spaces. [L2, step 1.1, step 1.2, step 2.1, step 2.2, step 2.3] ∎

## Remarks

- The proof uses the coordinate $\ell^1$ norm because it makes the boundedness of $T$ immediate. Any other standard coordinate norm would do, and on a fixed finite-dimensional coordinate space all of them are equivalent.
- The finite-dimensional language in the title is implemented here by the actual datum the page uses: a chosen ordered basis of finite length.
