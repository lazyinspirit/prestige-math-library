---
id: thm-coordinate-map-for-a-finite-dimensional-normed-space
kind: theorem
title: "A chosen algebraic basis identifies a finite-dimensional normed space with a coordinate space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-linear-basis, thm-unique-coordinates-with-respect-to-an-ordered-basis,
       def-topological-isomorphism-of-normed-spaces, thm-all-norms-on-rn-are-equivalent,
       thm-complex-numbers-are-the-real-coordinate-plane,
       rem-real-and-complex-normed-space-convention]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
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
the complex case by [[rem-real-and-complex-normed-space-convention]]. Let
$e:n\to X$ be an ordered basis ([[def-linear-basis]]), and write $e_j:=e(j)$.
Give $\mathbb K^n$ its coordinate $\ell^1$ norm

$$\|(a_0,\dots,a_{n-1})\|_1:=\sum_{j<n}|a_j|.$$

Define

$$T:\mathbb K^n\to X,\qquad T(a_0,\dots,a_{n-1})=\sum_{j<n} a_j e_j.$$

Then $T$ is a topological isomorphism of normed spaces in the sense of
[[def-topological-isomorphism-of-normed-spaces]].

## Facts & Assumptions

**Given:** A normed space $X$ over $\mathbb K\in\{\mathbb R,\mathbb C\}$ and an
ordered basis $e:n\to X$.

[L1] An ordered basis is a finite list whose image is a basis
([[def-linear-basis]]), and
[[thm-unique-coordinates-with-respect-to-an-ordered-basis]] identifies its span
with exactly the vectors of the form $\sum_{j<n} a_j e_j$, with those
coordinates unique.

[L2] A topological isomorphism of normed spaces is a bounded linear bijection
whose inverse is bounded ([[def-topological-isomorphism-of-normed-spaces]]).

[L3] For $m\ge1$, every norm on $\mathbb R^m$ is equivalent to the Euclidean
norm ([[thm-all-norms-on-rn-are-equivalent]]).

[L4] The map $\Phi:\mathbb C\to\mathbb R^2$, $\Phi(a+bi)=(a,b)$, is a bijection
with the stated coordinate arithmetic
([[thm-complex-numbers-are-the-real-coordinate-plane]]).

[L5] The complex case is read with the same norm axioms and with scalar
absolute value replaced by the complex modulus
([[rem-real-and-complex-normed-space-convention]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], every $x\in X$ has exactly one coordinate list $a=(a_0,\dots,a_{n-1})\in\mathbb K^n$ with $x=\sum_{j<n} a_j e_j$. Therefore the displayed map $T$ is well defined, surjective, and injective. [L1]

1.2 $T$ is linear, because finite sums and scalar multiplication distribute over the coordinate formula: $T(\lambda a+b)=\sum_{j<n}(\lambda a_j+b_j)e_j=\lambda\sum_{j<n}a_je_j+\sum_{j<n}b_je_j =\lambda T(a)+T(b)$. [given, algebra]

1.3 In the complex case $\mathbb K=\mathbb C$, write $\Psi:\mathbb C^n\to\mathbb R^{2n}$ for the coordinatewise real-imaginary-part map from [L4]. Define $$N_{\mathbb R}(u,v):=\|T(u_0+iv_0,\dots,u_{n-1}+iv_{n-1})\|.$$ By [L4] and [L5] this is a real norm on $\mathbb R^{2n}$. If $n=0$ the inverse is again bounded trivially. If $n\ge1$, [L3] applied to $\mathbb R^{2n}$ gives $c>0$ with $$c\|(u,v)\|_2\le N_{\mathbb R}(u,v)$$ for every $(u,v)\in\mathbb R^{2n}$. Also $|u_j+iv_j|\le |u_j|+|v_j|\le \sqrt2\,(u_j^2+v_j^2)^{1/2}$, so $$\|(u_0+iv_0,\dots,u_{n-1}+iv_{n-1})\|_1\le \sqrt{2n}\,\|(u,v)\|_2.$$ Hence $$\|a\|_1\le \frac{\sqrt{2n}}{c}\,\|T(a)\| \qquad (a\in\mathbb C^n),$$ which is the boundedness of $T^{-1}$. [L3, L4, L5, algebra]

2.1 Put $C:=\sum_{j<n}\|e_j\|$, a finite real. Then $$\|T(a)\|=\left\|\sum_{j<n}a_je_j\right\|\le\sum_{j<n}|a_j|\,\|e_j\| \le C\sum_{j<n}|a_j|=C\|a\|_1,$$ so $T$ is bounded. [step 1.2, given, algebra]

2.2 In the real case $\mathbb K=\mathbb R$, the pullback $N(a):=\|T(a)\|$ is a norm on $\mathbb R^n$: definiteness uses step 1.1, and the triangle and homogeneity axioms come from the norm axioms on $X$ and the linearity of $T$. If $n=0$, then $\mathbb R^0=\{0\}$ and the inverse of $T$ is the zero map, hence bounded. If $n\ge1$, [L3] gives $c>0$ with $c\|a\|_1\le N(a)=\|T(a)\|$ for every $a\in\mathbb R^n$, so $\|T^{-1}x\|_1\le c^{-1}\|x\|$ for every $x\in X$. Thus $T^{-1}$ is bounded in the real case. [step 1.1, step 1.2, L3, choose]

3.1 Steps 1.1, 1.2, 1.3, 2.1, and 2.2 verify the three clauses of [L2]. Therefore $T$ is a topological isomorphism of normed spaces. [L2, step 1.1, step 1.2, step 1.3, step 2.1, step 2.2] ∎

## Remarks

- The proof uses the coordinate $\ell^1$ norm because it makes the boundedness
  of $T$ immediate. Any other standard coordinate norm would do, and on a fixed
  finite-dimensional coordinate space all of them are equivalent.
- The finite-dimensional language in the title is implemented here by the actual
  datum the page uses: a chosen ordered basis of finite length.
