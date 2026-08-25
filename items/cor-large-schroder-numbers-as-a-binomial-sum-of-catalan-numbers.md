---
id: cor-large-schroder-numbers-as-a-binomial-sum-of-catalan-numbers
kind: corollary
title: "$R_n=\\sum_{k=0}^{n}\\binom{n+k}{2k}C_k$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-motzkin-and-schroder-paths, def-catalan-number, def-dyck-path-and-semilength, def-diagonal-lattice-path-and-its-height, def-binomial-coefficient, thm-sum-rule, thm-product-rule, def-sum-over-a-finite-index-set, lem-lattice-paths-are-determined-by-their-step-words, thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse, def-finite-cardinality]
justified_by: []
aliases: []
landmark: false
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
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §10.8, Corollary 10.8.2, equation (10.46)'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Statement

For every $n\in\mathbb{N}$, in $\mathbb{N}$,

$$R_n=\sum_{k=0}^{n}\binom{n+k}{2k}\,C_k,$$

the sum being over the finite index set $\{0,1,\dots,n\}$
([[def-sum-over-a-finite-index-set]]), with $R_n$ the large Schröder numbers
([[def-motzkin-and-schroder-paths]]) and $C_k$ the Catalan numbers
([[def-catalan-number]]).

## Facts & Assumptions

**Given:** a natural number $n$.

[F1] $\mathrm{Sch}_n$ is the set of lattice paths with steps in $\{U,D,L_2\}$ from $(0,0)$ to $(2n,0)$ with $h(i)\ge0$ at every index; such a path with $k$ up steps has $k$ down steps, $n-k$ level steps and $n+k$ steps in all, with $0\le k\le n$; and $R_n=\lvert\mathrm{Sch}_n\rvert$ is finite ([[def-motzkin-and-schroder-paths]]).

[F2] $\mathcal{D}_k$ corresponds bijectively, through step words, to the ballot words of length $2k$, that is the words over $\{U,D\}$ with equally many letters of each kind in which every prefix has at least as many $U$ as $D$; and $C_k=\lvert\mathcal{D}_k\rvert$ ([[def-dyck-path-and-semilength]], [[def-catalan-number]]).

[F3] For a diagonal path of length $\ell$ from $(0,0)$ with step word $\hat w$ and $\mu(r)$ the number of up steps among the first $r$, the height is $\hat h(r)=2\mu(r)-r$ ([[def-diagonal-lattice-path-and-its-height]]).

[L1] For a step set $S$, a point $P$ and $\ell\in\mathbb{N}$, the map sending a lattice path to its step word is a bijection $\mathcal{L}_S(P;\ell)\to S^{\ell}$ ([[lem-lattice-paths-are-determined-by-their-step-words]]).

[L2] For $f:A\to B$: $f$ is a bijection if and only if there is a function $g:B\to A$ with $g\circ f=\Delta_A$ and $f\circ g=\Delta_B$ ([[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]).

[L3] For a finite set $A$ and $j\in\mathbb{N}$, $[A]^{j}$ is the set of $j$-element subsets of $A$, and $\lvert[A]^{j}\rvert=\binom{\lvert A\rvert}{j}$ ([[def-binomial-coefficient]]).

[L4] If $I$ is finite and $(A_i)_{i\in I}$ are pairwise disjoint finite sets then $\bigcup_{i\in I}A_i$ is finite with $\lvert\bigcup_{i\in I}A_i\rvert=\sum_{i\in I}\lvert A_i\rvert$ ([[thm-sum-rule]], clause 2).

[L5] If $A$ and $B$ are finite then $A\times B$ is finite and $\lvert A\times B\rvert=\lvert A\rvert\cdot\lvert B\rvert$ ([[thm-product-rule]], clause 1).

[L6] For a finite index set $S$ and $a:S\to\mathbb{N}$ the sum $\sum_{i\in S}a_i$ is defined ([[def-sum-over-a-finite-index-set]]).

[L7] If $A$ is finite and $f:A\to B$ is a bijection then $B$ is finite and $\lvert B\rvert=\lvert A\rvert$ ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 Let $v\in\mathrm{Sch}_n$ with $k$ up steps. By [F1] it has exactly $n+k$ steps, of which $2k$ are not level, so **the number of positions available to the non-level steps is $n+k$ and depends on $k$**; that dependence is the whole difference from the Motzkin case, where the number of positions is $n$ for every $k$. Let $A$ be the set of non-level positions, a $2k$-element subset of $\{0,\dots,n+k-1\}$, and let $\hat w$ be the word over $\{U,D\}$ read off the letters of the step word of $v$ at the positions of $A$ in increasing order. A level step leaves the height unchanged, so the height of $v$ at any index equals the height of the diagonal path traced by $\hat w$ after the corresponding number of non-level steps, and every such number arises; hence the height condition on $v$ says exactly that $\hat h\ge0$ throughout and $\hat h(2k)=0$, so $\hat w$ is a ballot word of length $2k$ and by [F2] the step word of a unique Dyck path of semilength $k$. [F1, F2, F3]

2.1 For each $k$ with $0\le k\le n$ the map just described is a bijection from the set of $v\in\mathrm{Sch}_n$ having exactly $k$ up steps onto $[\,n+k\,]^{2k}\times\mathcal{D}_k$, where $[\,n+k\,]^{2k}$ is the set of $2k$-element subsets of $\{0,\dots,n+k-1\}$. Its inverse takes $(A,P)$ to the path whose step word has length $n+k$, carries the letters of the step word of $P$ at the positions of $A$ in increasing order and the letter $L_2$ elsewhere: that word has $k$ up steps, $k$ down steps and $n-k$ level steps, hence horizontal extent $2k+2(n-k)=2n$, and by step 1.1 its heights are nonnegative and it ends at height $0$, so it lies in $\mathrm{Sch}_n$ and has exactly $k$ up steps. The two constructions undo one another, so [L1] and [L2] apply. [F1, F2, L1, L2, step 1.1]

3.1 The sets of $v\in\mathrm{Sch}_n$ with exactly $k$ up steps, for $0\le k\le n$, are pairwise disjoint with union $\mathrm{Sch}_n$ by [F1]. Each is finite with $\binom{n+k}{2k}C_k$ elements, by step 2.1 with [L3], [L5] and [L7], and adding them over the finite index set $\{0,\dots,n\}$ with [L4] and [L6] gives the stated identity. At $n=0$ the single term is $\binom{0}{0}C_0=1$; at $n=1$ the terms are $\binom{1}{0}C_0=1$ and $\binom{2}{2}C_1=1$, giving $2$; at $n=2$ they are $1$, $\binom{3}{2}C_1=3$ and $\binom{4}{4}C_2=2$, giving $6$; and at $n=3$ they are $1$, $\binom{4}{2}C_1=6$, $\binom{5}{4}C_2=10$ and $\binom{6}{6}C_3=5$, giving $22$. [F1, L3, L4, L5, L6, L7, step 2.1] ∎

## Remarks

- **The binomial coefficient is $\binom{n+k}{2k}$ and not $\binom{n}{2k}$.** A
  Schröder path of half-length $n$ with $k$ up steps has $n+k$ steps, because a
  level step covers two units of horizontal extent while an up or a down step
  covers one. So the positions the non-level steps may occupy are $n+k$ in number,
  and that number moves with $k$. In the Motzkin case every step has width $1$, the
  number of positions is $n$ for every $k$, and the coefficient is $\binom{n}{2k}$.

- **The same deletion, twice.** The argument is the level-step deletion of
  [[cor-motzkin-numbers-as-a-binomial-sum-of-catalan-numbers]]; only the count of
  available positions changes. Splitting by the number of up steps is what makes
  that count available, and it is why the sum here is indexed by $k$ from $0$ to
  $n$ rather than by the condition $2k\le n$.
