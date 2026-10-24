---
id: thm-large-schroder-numbers-by-first-return-decomposition
kind: theorem
title: "$R(x)=1+x\\,R(x)+x\\,R(x)^{2}$, and $2x\\,R(x)=1-x-(1-6x+x^{2})^{1/2}$"
status: published
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
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §10.9, Theorem 10.9.2, equation (10.50)'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Statement

In $\mathbb{Q}\llbracket x\rrbracket$ the generating function of the large
Schröder numbers ([[def-motzkin-and-schroder-paths]]) satisfies

$$R=1+x\,R+x\,R^{2},$$

and, with $(1-6x+x^{2})^{1/2}$ the formal binomial power of
[[def-formal-exponential-logarithm-and-powers]],

$$2x\,R=1-x-(1-6x+x^{2})^{1/2},$$

the series $1-x-2xR$ being the unique element of
$1+x\mathbb{Q}\llbracket x\rrbracket$ whose square is $1-6x+x^{2}$
([[cor-unique-formal-root-with-constant-one]]).

## Facts & Assumptions

**Given:** a natural number $n$, and the Schröder paths and numbers of [[def-motzkin-and-schroder-paths]].

[F1] $\mathrm{Sch}_m$ is the set of lattice paths with steps in $\{U,D,L_2\}$, where $U=(1,1)$, $D=(1,-1)$ and $L_2=(2,0)$, from $(0,0)$ to $(2m,0)$ with $h(i)\ge0$ at every index; such a path with $k$ up steps has $k$ down steps, $m-k$ level steps and $m+k$ steps in all, with $0\le k\le m$; $R_m=\lvert\mathrm{Sch}_m\rvert$ is finite; $R_0=1$ and $R_1=2$, the two paths of half-length $1$ having step words $L_2$ and $UD$; and $R(x)=\sum_{m\ge0}R_mx^{m}$ ([[def-motzkin-and-schroder-paths]]).

[F2] A natural number written where a rational is expected denotes its image under an injective embedding preserving addition, multiplication and finite sums, and $\mathbb{Q}\llbracket x\rrbracket$ is a commutative $\mathbb{Q}$-algebra ([[def-catalan-generating-function]]).

[L1] For a step set $S$, a point $P$ and $\ell\in\mathbb{N}$, the map sending a lattice path to its step word is a bijection $\mathcal{L}_S(P;\ell)\to S^{\ell}$ ([[lem-lattice-paths-are-determined-by-their-step-words]]).

[L2] For $f:A\to B$: $f$ is a bijection if and only if there is a function $g:B\to A$ with $g\circ f=\Delta_A$ and $f\circ g=\Delta_B$ ([[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]).

[L3] If $A$ and $B$ are finite and disjoint then $\lvert A\cup B\rvert=\lvert A\rvert+\lvert B\rvert$; and if $I$ is finite and $(A_i)_{i\in I}$ are pairwise disjoint finite sets then $\lvert\bigcup_{i\in I}A_i\rvert=\sum_{i\in I}\lvert A_i\rvert$ ([[thm-sum-rule]], clauses 1 and 2).

[L4] If $A$ and $B$ are finite then $A\times B$ is finite and $\lvert A\times B\rvert=\lvert A\rvert\cdot\lvert B\rvert$ ([[thm-product-rule]], clause 1).

[L5] For a finite index set $S$ and $a:S\to\mathbb{N}$ the sum $\sum_{i\in S}a_i$ is defined ([[def-sum-over-a-finite-index-set]]).

[L6] $[x^{m}](f+g)=[x^{m}]f+[x^{m}]g$; $f=g$ if and only if $[x^{m}]f=[x^{m}]g$ for every $m$; $[x^{m}](x^{k}f)=[x^{m-k}]f$ for $k\le m$ and $0$ for $k>m$; and $[x^{m}](fg)=\sum_{i=0}^{m}[x^{i}]f\,[x^{m-i}]g$ ([[prop-coefficient-extraction-linearity-and-extensionality]]).

[L7] For a commutative $\mathbb{Q}$-algebra $R'$, $u\in xR'\llbracket x\rrbracket$ and $k\ge1$, there is a unique $v\in1+xR'\llbracket x\rrbracket$ with $v^{k}=1+u$, namely $v=(1+u)^{1/k}$ ([[cor-unique-formal-root-with-constant-one]]).

[L8] For $u\in xR'\llbracket x\rrbracket$ and $c\in R'$ the formal binomial power is $(1+u)^{c}:=\exp(c\log(1+u))$ ([[def-formal-exponential-logarithm-and-powers]]).

[L9] The coefficientwise sum and Cauchy product make $\mathbb{Q}\llbracket x\rrbracket$ a commutative ring ([[thm-formal-power-series-ring-and-polynomial-embedding]]).

[L10] If $A$ is finite and $f:A\to B$ is a bijection then $B$ is finite and $\lvert B\rvert=\lvert A\rvert$ ([[def-finite-cardinality]]).

[L11] Every nonempty subset $S\subseteq\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

## Proof

**Proof technique:** direct.

1.1 First-return decomposition. Let $v\in\mathrm{Sch}_{n+1}$, of length $\ell$, with step word $w$ and heights $h$. Its first step is not $D$, so it is $L_2$ or $U$. If it is $L_2$ then translating the remaining path by $(-2,0)$ gives a member of $\mathrm{Sch}_{n}$, since its endpoints become $(0,0)$ and $(2n,0)$ and its heights are unchanged. If it is $U$ then $h(1)=1$; the set of positive indices $j\le\ell$ with $h(j)=0$ contains $\ell$, so by [L11] it has a least element $\tau\ge2$, and $h(\tau-1)\ge1$ by minimality while $h(\tau)=0$, so the step at $\tau$ lowers the height and is therefore $D$, with $h(\tau-1)=1$. Translating the portion of $v$ from the index $1$ to the index $\tau-1$ by $(-1,-1)$ gives a path from $(0,0)$ whose heights are $h(1+j)-1\ge0$ and which returns to height $0$; its numbers of up and down steps are therefore equal, so its horizontal extent is even, say $2i$, and it lies in $\mathrm{Sch}_i$. Since the $D$ step at $\tau$ has width $1$, the first coordinate at $\tau$ is $2i+2$, so translating the portion from $\tau$ to $\ell$ by $(-2i-2,0)$ gives a member of $\mathrm{Sch}_{n-i}$, and $0\le i\le n$. Conversely, prepending $L_2$ to a member of $\mathrm{Sch}_n$, and sending $(i,P,Q)$ to the path with step word $U$, that of $P$, $D$, that of $Q$, produce members of $\mathrm{Sch}_{n+1}$ whose first-return data are the ones started from, because the heights strictly inside the first block are at least $1$; the two constructions are two-sided inverses, so by [L1] and [L2] the set $\mathrm{Sch}_{n+1}$ is in bijection with the disjoint union of $\mathrm{Sch}_n$ and the sets $\{i\}\times\mathrm{Sch}_i\times\mathrm{Sch}_{n-i}$ for $0\le i\le n$. [F1, L1, L2, L11]

2.1 **The index range is where this differs from the Motzkin case.** A $U$ and its matching $D$ have width $1$ each, so together they consume two units of horizontal extent and therefore exactly **one** unit of half-length; the inner and outer blocks then carry half-lengths $i$ and $n-i$ with $i+(n-i)=n$, so the convolution index runs over all of $\{0,\dots,n\}$ and not only over $\{0,\dots,n-1\}$. Counting the two sides of step 1.1 with [F1], [L3], [L4], [L5] and [L10] gives, in $\mathbb{N}$, $$R_{n+1}=R_n+\sum_{i=0}^{n}R_iR_{n-i},$$ the sum being over the finite index set $\{0,\dots,n\}$. At $n=0$ the sum has the single term $R_0R_0=1$, so $R_1=R_0+1=2$, matching the two paths with step words $L_2$ and $UD$. At $n=1$ it gives $R_2=R_1+R_0R_1+R_1R_0=6$, at $n=2$ it gives $R_3=R_2+R_0R_2+R_1R_1+R_2R_0=22$, and at $n=3$ it gives $R_4=R_3+R_0R_3+R_1R_2+R_2R_1+R_3R_0=90$. [F1, L3, L4, L5, L10, step 1.1]

3.1 Comparing coefficients gives the functional equation. At the index $0$: $[x^{0}](1+xR+xR^{2})=1$ by [L6], and $[x^{0}]R=R_0=1$. At an index $n+1$: $[x^{n+1}](xR)=[x^{n}]R=R_n$ and $[x^{n+1}](xR^{2})=[x^{n}](R^{2})=\sum_{i=0}^{n}R_iR_{n-i}$ by the shift and Cauchy-product clauses of [L6], and the sum of the two is $R_{n+1}$ by step 2.1. Extensionality in [L6] gives $R=1+xR+xR^{2}$. [F1, F2, L6, L9, step 2.1]

4.1 Rearranging step 3.1 in the commutative ring $\mathbb{Q}\llbracket x\rrbracket$ gives $xR^{2}+(x-1)R+1=0$, and hence $$\bigl(1-x-2xR\bigr)^{2}=(x-1)^{2}+4x\bigl(xR^{2}+(x-1)R\bigr)=(x-1)^{2}-4x=1-6x+x^{2}.$$ The series $1-x-2xR$ has coefficient $1$ at the index $0$, so it lies in $1+x\mathbb{Q}\llbracket x\rrbracket$, and $1-6x+x^{2}=1+u$ with $u=-6x+x^{2}\in x\mathbb{Q}\llbracket x\rrbracket$; by the uniqueness clause of [L7] with $k=2$ it is therefore $(1-6x+x^{2})^{1/2}$ as defined in [L8], which gives $2xR=1-x-(1-6x+x^{2})^{1/2}$. No division by $2x$ occurs, and none is available. [L6, L7, L8, L9, step 3.1] ∎

## Remarks

- **One index range, and it is the whole content.** Everything else in this proof is the Motzkin argument with the level step widened. The Motzkin convolution stops at $n-1$ because a $U$ with its $D$ costs two units of the index, and the Schröder convolution runs to $n$ because in half-length it costs one. A proof that copied the Motzkin range would give a false equation whose first wrong value is $R_1$.

- **What the source proves and what is proved here.** The statement is the source's, in the cleared form; its derivation there goes through a continued fraction, and the first-return argument above is written locally, exactly as in the Motzkin case.
