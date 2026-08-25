---
id: thm-motzkin-numbers-by-first-return-decomposition
kind: theorem
title: "$M(x)=1+x\\,M(x)+x^{2}M(x)^{2}$, and $2x^{2}M(x)=1-x-(1-2x-3x^{2})^{1/2}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-motzkin-and-schroder-paths, def-catalan-generating-function, lem-lattice-paths-are-determined-by-their-step-words, thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse, thm-sum-rule, thm-product-rule, def-sum-over-a-finite-index-set, prop-coefficient-extraction-linearity-and-extensionality, cor-unique-formal-root-with-constant-one, def-formal-exponential-logarithm-and-powers, thm-formal-power-series-ring-and-polynomial-embedding, def-finite-cardinality, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §10.9, Theorem 10.9.2, equation (10.49)'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Statement

In $\mathbb{Q}\llbracket x\rrbracket$ the Motzkin generating function
([[def-motzkin-and-schroder-paths]]) satisfies

$$M=1+x\,M+x^{2}M^{2},$$

and, with $(1-2x-3x^{2})^{1/2}$ the formal binomial power of
[[def-formal-exponential-logarithm-and-powers]],

$$2x^{2}M=1-x-(1-2x-3x^{2})^{1/2},$$

the series $1-x-2x^{2}M$ being the unique element of
$1+x\mathbb{Q}\llbracket x\rrbracket$ whose square is $1-2x-3x^{2}$
([[cor-unique-formal-root-with-constant-one]]).

## Facts & Assumptions

**Given:** a natural number $n$, and the Motzkin paths and numbers of [[def-motzkin-and-schroder-paths]].

[F1] $\mathrm{Mot}_m$ is the set of lattice paths of length $m$ with steps in $\{U,D,L\}$, where $U=(1,1)$, $D=(1,-1)$ and $L=(1,0)$, from $(0,0)$ to $(m,0)$ with $h(i)\ge0$ for every $i\le m$; each such path advances the first coordinate by $1$ at every step; $M_m=\lvert\mathrm{Mot}_m\rvert$ is finite; $M_0=1$ and $M_1=1$; and $M(x)=\sum_{m\ge0}M_mx^{m}$ ([[def-motzkin-and-schroder-paths]]).

[F2] A natural number written where a rational is expected denotes its image under an injective embedding preserving addition, multiplication and finite sums, and $\mathbb{Q}\llbracket x\rrbracket$ is a commutative $\mathbb{Q}$-algebra ([[def-catalan-generating-function]]).

[L1] For a step set $S$, a point $P$ and $\ell\in\mathbb{N}$, the map sending a lattice path to its step word is a bijection $\mathcal{L}_S(P;\ell)\to S^{\ell}$ ([[lem-lattice-paths-are-determined-by-their-step-words]]).

[L2] For $f:A\to B$: $f$ is a bijection if and only if there is a function $g:B\to A$ with $g\circ f=\Delta_A$ and $f\circ g=\Delta_B$ ([[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]).

[L3] If $A$ and $B$ are finite and disjoint then $\lvert A\cup B\rvert=\lvert A\rvert+\lvert B\rvert$; and if $I$ is finite and $(A_i)_{i\in I}$ are pairwise disjoint finite sets then $\lvert\bigcup_{i\in I}A_i\rvert=\sum_{i\in I}\lvert A_i\rvert$ ([[thm-sum-rule]], clauses 1 and 2).

[L4] If $A$ and $B$ are finite then $A\times B$ is finite and $\lvert A\times B\rvert=\lvert A\rvert\cdot\lvert B\rvert$ ([[thm-product-rule]], clause 1).

[L5] For a finite index set $S$ and $a:S\to\mathbb{N}$ the sum $\sum_{i\in S}a_i$ is defined, and $\sum_{i\in\varnothing}a_i=0$ ([[def-sum-over-a-finite-index-set]], clause (c)).

[L6] $[x^{m}](f+g)=[x^{m}]f+[x^{m}]g$; $f=g$ if and only if $[x^{m}]f=[x^{m}]g$ for every $m$; $[x^{m}](x^{k}f)=[x^{m-k}]f$ for $k\le m$ and $0$ for $k>m$; and $[x^{m}](fg)=\sum_{i=0}^{m}[x^{i}]f\,[x^{m-i}]g$ ([[prop-coefficient-extraction-linearity-and-extensionality]]).

[L7] For a commutative $\mathbb{Q}$-algebra $R$, $u\in xR\llbracket x\rrbracket$ and $k\ge1$, there is a unique $v\in1+xR\llbracket x\rrbracket$ with $v^{k}=1+u$, namely $v=(1+u)^{1/k}$ ([[cor-unique-formal-root-with-constant-one]]).

[L8] For $u\in xR\llbracket x\rrbracket$ and $c\in R$ the formal binomial power is $(1+u)^{c}:=\exp(c\log(1+u))$ ([[def-formal-exponential-logarithm-and-powers]]).

[L9] The coefficientwise sum and Cauchy product make $\mathbb{Q}\llbracket x\rrbracket$ a commutative ring ([[thm-formal-power-series-ring-and-polynomial-embedding]]).

[L10] If $A$ is finite and $f:A\to B$ is a bijection then $B$ is finite and $\lvert B\rvert=\lvert A\rvert$ ([[def-finite-cardinality]]).

[L11] Every nonempty subset $S\subseteq\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

## Proof

**Proof technique:** direct.

1.1 First-return decomposition. Let $v\in\mathrm{Mot}_{n+1}$ with step word $w$ and heights $h$. Its first step is not $D$, since $h(1)\ge0$ would fail, so it is $L$ or $U$. If it is $L$ then $h(1)=0$ and the path of length $n$ with step word $w_1\cdots w_{n}$ has heights $h(1+j)$, so it lies in $\mathrm{Mot}_n$. If it is $U$ then $h(1)=1$; the set of positive indices $j\le n+1$ with $h(j)=0$ contains $n+1$, so by [L11] it has a least element $\tau\ge2$, and $h(\tau-1)\ge1$ by minimality while $h(\tau)=0$, so the step at $\tau$ is $D$ and $h(\tau-1)=1$; putting $i:=\tau-2$, the path $P$ of length $i$ with step word $w_1\cdots w_{i}$ has heights $h(1+j)-1\ge0$ ending at $h(\tau-1)-1=0$, so $P\in\mathrm{Mot}_i$, and the path $Q$ of length $n-1-i$ with step word $w_{\tau}\cdots w_{n}$ has heights $h(\tau+j)\ge0$ ending at $0$, so $Q\in\mathrm{Mot}_{n-1-i}$, with $0\le i\le n-1$ because $\tau\le n+1$. Conversely, prepending $L$ to a member of $\mathrm{Mot}_n$, and sending $(i,P,Q)$ to the path with step word $U$, that of $P$, $D$, that of $Q$, produce members of $\mathrm{Mot}_{n+1}$ whose first-return data are the ones started from; the two constructions are two-sided inverses, so by [L1] and [L2] the set $\mathrm{Mot}_{n+1}$ is in bijection with the disjoint union of $\mathrm{Mot}_n$ and the sets $\{i\}\times\mathrm{Mot}_i\times\mathrm{Mot}_{n-1-i}$ for $0\le i\le n-1$. [F1, L1, L2, L11]

2.1 Counting the two sides of step 1.1 with [F1], [L3], [L4], [L5] and [L10] gives, in $\mathbb{N}$, $$M_{n+1}=M_n+\sum_{i=0}^{n-1}M_iM_{n-1-i},$$ the sum being over the finite index set $\{0,\dots,n-1\}$. At $n=0$ that index set is empty and the sum is $0$, so $M_1=M_0=1$, which is correct because a path of length $1$ beginning with $U$ cannot return to height $0$. At $n=1$ it gives $M_2=M_1+M_0M_0=2$, at $n=2$ it gives $M_3=M_2+M_0M_1+M_1M_0=4$, and at $n=3$ it gives $M_4=M_3+M_0M_2+M_1M_1+M_2M_0=9$. [F1, L3, L4, L5, L10, step 1.1]

3.1 Comparing coefficients gives the functional equation. At the index $0$: $[x^{0}](1+xM+x^{2}M^{2})=1$ by [L6], and $[x^{0}]M=M_0=1$. At an index $n+1$: $[x^{n+1}](xM)=[x^{n}]M=M_n$, while $[x^{n+1}](x^{2}M^{2})$ is $[x^{n-1}](M^{2})=\sum_{i=0}^{n-1}M_iM_{n-1-i}$ when $n\ge1$ and $0$ when $n=0$, by the shift and Cauchy-product clauses of [L6]; in both cases this matches the sum of step 2.1, so $[x^{n+1}](1+xM+x^{2}M^{2})=M_{n+1}=[x^{n+1}]M$. Extensionality in [L6] gives $M=1+xM+x^{2}M^{2}$. [F1, F2, L6, L9, step 2.1]

4.1 Rearranging step 3.1 in the commutative ring $\mathbb{Q}\llbracket x\rrbracket$ gives $x^{2}M^{2}+(x-1)M+1=0$, and hence $$\bigl(1-x-2x^{2}M\bigr)^{2}=(x-1)^{2}+4x^{2}\bigl(x^{2}M^{2}+(x-1)M\bigr)=(x-1)^{2}-4x^{2}=1-2x-3x^{2}.$$ The series $1-x-2x^{2}M$ has coefficient $1$ at the index $0$, so it lies in $1+x\mathbb{Q}\llbracket x\rrbracket$, and $1-2x-3x^{2}=1+u$ with $u=-2x-3x^{2}\in x\mathbb{Q}\llbracket x\rrbracket$; by the uniqueness clause of [L7] with $k=2$ it is therefore the series $(1-2x-3x^{2})^{1/2}$ of [L8], which gives $2x^{2}M=1-x-(1-2x-3x^{2})^{1/2}$. No division by $2x^{2}$ occurs, and none is available: that series has coefficient $0$ at the index $0$ and is not a unit. [L6, L7, L8, L9, step 3.1] ∎

## Remarks

- **The route is the page's own, run on a third step set.** No combinatorial class, no symbolic-method operator and no fixed-point theorem is used; the argument is the first-return decomposition of [[lem-first-return-decomposition-of-a-nonempty-dyck-path]] with a level step added, and the added case is the whole difference between the Dyck recurrence and this one. The source reaches the same equation from an infinite continued fraction, which needs machinery this page does not build, so the proof here is local while the statement is the source's.

- **Where the level step shows in the equation.** It contributes the summand $xM$, and the pair of a $U$ with its matching $D$ contributes the factor $x^{2}$: two units of length for one pair. The convolution index therefore stops at $n-1$ and not at $n$, which is exactly the point at which the Schröder equation differs.
