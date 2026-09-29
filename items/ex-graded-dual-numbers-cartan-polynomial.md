---
id: ex-graded-dual-numbers-cartan-polynomial
kind: example
title: "The graded dual numbers have Cartan polynomial 1+v²"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
deps:
  - def-graded-grothendieck-group-shift-module-and-cartan-map
  - thm-graded-projective-and-simple-classes-have-shift-orbit-bases
  - def-polynomial-ring-over-a-commutative-ring
  - def-quotient-ring
  - thm-polynomial-ring-is-a-commutative-ring
  - def-left-right-and-two-sided-ideal
  - thm-quotient-ring-multiplication-well-defined-iff-ideal
  - thm-quotient-ring-laws
  - thm-polynomial-division-algorithm-over-a-field
  - def-algebra-over-a-commutative-ring
  - def-graded-ring-module-bimodule-and-internal-shift
  - def-grothendieck-group-of-an-essentially-small-abelian-category
  - thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules
  - lem-finite-dimensional-graded-algebras-have-graded-projective-covers
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, §2.2"
      url: "https://arxiv.org/pdf/0909.4844"
generation:
  role: example
pipeline_run: frontier-36-complete
---

## Statement

Let $k$ be any field and let $A=k[\varepsilon]/(\varepsilon^2)$ with $\deg\varepsilon=2$. Put $S=A/(\varepsilon)$ in degree zero and $R=\mathbb Z[v,v^{-1}]$, with $v[M]=[M\{1\}]$ and $M\{r\}_d=M_{d-r}$. Then $K_0^{\mathrm{gr}}(A)=R[A]$ and $G_0^{\mathrm{gr}}(A)=R[S]$, and the graded Cartan map sends $[A]$ to $(1+v^2)[S]$.

## Facts & Assumptions

**Given:** A field $k$, the quotient algebra $A=k[\varepsilon]/(\varepsilon^2)$, and the grading with $\deg\varepsilon=2$. The simple module $S=A/(\varepsilon)$ is concentrated in degree zero.

[F1] The polynomial ring $k[x]$ consists of finitely supported coefficient sequences with coefficientwise addition and convolution multiplication ([[def-polynomial-ring-over-a-commutative-ring]]).

[F2] For a field $F$, every $f\in F[x]$ and nonzero $g\in F[x]$ have unique $q,r$ with $f=qg+r$ and either $r=0$ or $\deg r<\deg g$ ([[thm-polynomial-division-algorithm-over-a-field]]).

[F3] The coefficientwise operations make $k[x]$ a commutative ring with its constants embedded as a unital subring ([[thm-polynomial-ring-is-a-commutative-ring]]).

[F4] A two-sided ideal is an additive subgroup closed under multiplication on both sides; in a commutative ring the left, right and two-sided ideal conditions agree ([[def-left-right-and-two-sided-ideal]]).

[F5] The quotient ring $k[x]/I$ is formed from additive cosets with multiplication $(f+I)(g+I)=fg+I$ ([[def-quotient-ring]]).

[F6] This quotient multiplication is well defined if and only if $I$ is a two-sided ideal ([[thm-quotient-ring-multiplication-well-defined-iff-ideal]]).

[F7] When $I$ is a two-sided ideal, the cosets form a ring with identity $1+I$ ([[thm-quotient-ring-laws]]).

[F8] A $k$-algebra is a unital ring with a unital map from $k$ whose image is central ([[def-algebra-over-a-commutative-ring]]).

[F9] A graded $k$-algebra has a decomposition $A=\bigoplus_iA_i$ with $A_iA_j\subseteq A_{i+j}$ and $1_A\in A_0$ ([[def-graded-ring-module-bimodule-and-internal-shift]]).

[F10] The internal shift is $(M\{r\})_d=M_{d-r}$ and is invertible ([[def-graded-ring-module-bimodule-and-internal-shift]]).

[F11] A finite direct sum of shifts of the regular graded module is projective in $\operatorname{GrMod}_0(A)$ ([[thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules]]).

[F12] A finite graded projective cover is a degree-zero epimorphism whose kernel is superfluous among graded submodules ([[lem-finite-dimensional-graded-algebras-have-graded-projective-covers]]).

[F13] $G_0^{\mathrm{gr}}(A)$ uses short-exact-sequence relations, $K_0^{\mathrm{gr}}(A)$ uses split relations, and $c_A^{\mathrm{gr}}([P])=[P]$ ([[def-graded-grothendieck-group-shift-module-and-cartan-map]]).

[F14] A short exact sequence $0\to X\to Y\to Z\to0$ imposes $[Y]=[X]+[Z]$ in $G_0$ ([[def-grothendieck-group-of-an-essentially-small-abelian-category]]).

[F15] The Laurent action is $v^r[M]=[M\{r\}]$ and $v^r[P]=[P\{r\}]$ ([[def-graded-grothendieck-group-shift-module-and-cartan-map]]).

[F16] A graded-simple module is a nonzero finite-dimensional graded module with no proper nonzero graded submodule ([[thm-graded-projective-and-simple-classes-have-shift-orbit-bases]]).

[F17] Representatives of graded-simple shift orbits and their finite graded projective covers give Laurent bases for $G_0^{\mathrm{gr}}(A)$ and $K_0^{\mathrm{gr}}(A)$ ([[thm-graded-projective-and-simple-classes-have-shift-orbit-bases]]).

## Proof

**Proof technique:** direct.

1.1 Let $x$ denote the polynomial variable and $I=(x^2)=x^2k[x]$. It is an additive subgroup, and multiplication by any polynomial sends $x^2q$ to another multiple of $x^2$ on either side; thus it is a two-sided ideal by [F3, F4]. The coefficient of $x^2$ in $x^2$ is $1\ne0$, so [F2] gives every $f\in k[x]$ a unique division remainder $a+bx$ modulo $I$. Hence each element of $A=k[x]/I$ has a unique form $a+b\varepsilon$, and $\{1,\varepsilon\}$ is a $k$-basis with $\varepsilon^2=0$. By [F5] and [F6] the coset multiplication is well defined, and [F7] makes $A$ a unital ring. The composite $k\to k[x]\to A$ is unital and multiplicative: the first map is the constant-polynomial homomorphism [F3], and the quotient map preserves sums, products, and identity by the coset operations in [F5] and [F7]. The quotient is commutative because $k[x]$ is commutative, so this map has central image. Thus [F8] makes $A$ a two-dimensional unital $k$-algebra. Define $A_0=k1$, $A_2=k\varepsilon$, and $A_d=0$ for $d\notin\{0,2\}$. The multiplication rules $1\cdot1=1$, $1\cdot\varepsilon=\varepsilon\cdot1=\varepsilon$, and $\varepsilon^2=0$ verify [F9]. The quotient $S=A/(\varepsilon)$ is one-dimensional over $k$ and concentrated in degree zero. [F1, F2, F3, F4, F5, F6, F7, F8, F9, given, construct, algebra]

2.1 Let $T$ be any nonzero finite-dimensional graded-simple left $A$-module, with graded-simple as in [F16]. The submodule $\varepsilon T$ is graded since $\varepsilon$ is homogeneous. If $\varepsilon T\ne0$, simplicity gives $\varepsilon T=T$, whence $T=\varepsilon T=\varepsilon^2T=0$, a contradiction; thus $\varepsilon T=0$. The action factors through $A/(\varepsilon)=k$, so each homogeneous component $T_d$ is a graded submodule. Simplicity forces exactly one component to be nonzero. That component has dimension one over $k$, since if its dimension exceeded one, the span of any nonzero vector would be a proper nonzero graded submodule. Hence $T\cong S\{r\}$ for its unique nonzero degree $r$. This also proves $S$ is graded-simple. Distinct $r$ give distinct supports, so there is exactly one graded-simple shift orbit, represented by $S$. [F9, F10, F16, step 1.1, given, choose, algebra]

2.2 The regular graded module $A=A\{0\}$ is a finite direct sum of shifts of itself, so [F11] makes it projective in $\operatorname{GrMod}_0(A)$. It is finite-dimensional by step 1.1, hence is a finite graded projective. [F11, step 1.1, given]

3.1 The quotient map $\pi:A\twoheadrightarrow S$ is degree-zero and has kernel $k\varepsilon$. If a graded submodule $N\le A$ satisfies $N+k\varepsilon=A$, then taking degree-zero components gives $N_0=A_0=k1$, since $(k\varepsilon)_0=0$. Thus $1\in N$, so $N=A$. By [F12], $\pi$ is a finite graded projective cover of $S$. To verify indecomposability directly, suppose $A=U\oplus V$ for nonzero graded submodules. Since $\pi$ is nonzero, one restriction, say $\pi|_U$, is nonzero; its image is a nonzero graded submodule of the graded-simple $S$, hence is all of $S$. Therefore every element of $A$ differs from an element of $U$ by an element of $\ker\pi$, so $U+\ker\pi=A$. Superfluity forces $U=A$, contradicting $V\ne0$. Thus $A$ is graded-indecomposable. [F9, F12, F16, step 1.1, step 2.1, step 2.2, given, algebra]

4.1 Apply [F17] to the unique simple shift orbit from step 2.1 and its cover $A\twoheadrightarrow S$ from step 3.1. It gives $[S]$ as an $R$-basis of $G_0^{\mathrm{gr}}(A)$ and $[A]$ as an $R$-basis of $K_0^{\mathrm{gr}}(A)$. [F13, F17, step 2.1, step 3.1, construct]

5.1 Identify $S$ with $k$ via the quotient map. Define $j:S\{2\}\to A$ by $j(\lambda)=\lambda\varepsilon$. It is degree-zero because the degree-zero element of $S$ lies in degree two after shifting, and $\varepsilon$ has degree two. For $a=\alpha+\beta\varepsilon\in A$ and $\lambda\in k$, the quotient action on $S$ gives $j(a\lambda)=\alpha\lambda\varepsilon$, while $a\,j(\lambda)=(\alpha+\beta\varepsilon)\lambda\varepsilon=\alpha\lambda\varepsilon$ because $\varepsilon^2=0$; hence $j$ is $A$-linear. It is injective since $\varepsilon\ne0$ by the unique normal form, and its image is $k\varepsilon=\ker\pi$. Thus $0\to S\{2\}\xrightarrow{j}A\xrightarrow{\pi}S\to0$ is exact. By [F14], $[A]=[S\{2\}]+[S]$ in $G_0^{\mathrm{gr}}(A)$. Now [F10] and [F15] give $[S\{2\}]=v^2[S]$, while [F13] says the graded Cartan map sends $[A]$ to this same class in $G_0^{\mathrm{gr}}(A)$. Therefore $c_A^{\mathrm{gr}}([A])=(1+v^2)[S]$, as claimed. [F10, F13, F14, F15, step 1.1, step 4.1, given, construct, algebra] ∎
