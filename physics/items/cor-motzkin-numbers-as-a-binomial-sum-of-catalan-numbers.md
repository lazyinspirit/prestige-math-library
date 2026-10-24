---
id: cor-motzkin-numbers-as-a-binomial-sum-of-catalan-numbers
kind: corollary
title: "$M_n=\\sum_{k\\in\\mathbb{N},\\,2k\\le n}\\binom{n}{2k}C_k$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-motzkin-and-schroder-paths, def-catalan-number, def-dyck-path-and-semilength, def-diagonal-lattice-path-and-its-height, def-binomial-coefficient, thm-sum-rule, thm-product-rule, def-sum-over-a-finite-index-set, lem-lattice-paths-are-determined-by-their-step-words, thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse, def-finite-cardinality, thm-subset-of-a-finite-set]
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
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §10.8, Corollary 10.8.2, equation (10.45)'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Statement

For every $n\in\mathbb{N}$, in $\mathbb{N}$,

$$M_n=\sum_{k\in\mathbb{N},\ 2k\le n}\binom{n}{2k}\,C_k,$$

the sum being over the finite index set $\{\,k\in\mathbb{N} : 2k\le n\,\}$
([[def-sum-over-a-finite-index-set]]), with $M_n$ the Motzkin numbers
([[def-motzkin-and-schroder-paths]]) and $C_k$ the Catalan numbers
([[def-catalan-number]]).

## Facts & Assumptions

**Given:** a natural number $n$.

[F1] $\mathrm{Mot}_n$ is the set of lattice paths of length $n$ with steps in $\{U,D,L\}$ from $(0,0)$ to $(n,0)$ with $h(i)\ge0$ at every index, and $M_n=\lvert\mathrm{Mot}_n\rvert$ is finite ([[def-motzkin-and-schroder-paths]]).

[F2] $\mathcal{D}_k$ corresponds bijectively, through step words, to the ballot words of length $2k$, that is the words over $\{U,D\}$ with equally many letters of each kind in which every prefix has at least as many $U$ as $D$; and $C_k=\lvert\mathcal{D}_k\rvert$ ([[def-dyck-path-and-semilength]], [[def-catalan-number]]).

[F3] For a diagonal path of length $\ell$ from $(0,0)$ with step word $\hat w$ and $\mu(r)$ the number of up steps among the first $r$, the height is $\hat h(r)=2\mu(r)-r$; in particular $\hat h(r)+r$ is even ([[def-diagonal-lattice-path-and-its-height]]).

[L1] For a step set $S$, a point $P$ and $\ell\in\mathbb{N}$, the map sending a lattice path to its step word is a bijection $\mathcal{L}_S(P;\ell)\to S^{\ell}$ ([[lem-lattice-paths-are-determined-by-their-step-words]]).

[L2] For $f:A\to B$: $f$ is a bijection if and only if there is a function $g:B\to A$ with $g\circ f=\Delta_A$ and $f\circ g=\Delta_B$ ([[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]).

[L3] For a finite set $A$ and $j\in\mathbb{N}$, $[A]^{j}$ is the set of $j$-element subsets of $A$, and $\lvert[A]^{j}\rvert=\binom{\lvert A\rvert}{j}$ ([[def-binomial-coefficient]]).

[L4] If $I$ is finite and $(A_i)_{i\in I}$ are pairwise disjoint finite sets then $\bigcup_{i\in I}A_i$ is finite with $\lvert\bigcup_{i\in I}A_i\rvert=\sum_{i\in I}\lvert A_i\rvert$ ([[thm-sum-rule]], clause 2).

[L5] If $A$ and $B$ are finite then $A\times B$ is finite and $\lvert A\times B\rvert=\lvert A\rvert\cdot\lvert B\rvert$ ([[thm-product-rule]], clause 1).

[L6] For a finite index set $S$ and $a:S\to\mathbb{N}$ the sum $\sum_{i\in S}a_i$ is defined ([[def-sum-over-a-finite-index-set]]).

[L7] If $A$ is finite and $f:A\to B$ is a bijection then $B$ is finite and $\lvert B\rvert=\lvert A\rvert$ ([[def-finite-cardinality]]).

[L8] A subset of a finite set is finite ([[thm-subset-of-a-finite-set]], clause 1).

## Proof

**Proof technique:** direct.

1.1 Let $v\in\mathrm{Mot}_n$ have step word $w$, put $A:=\{\,j\in\mathbb{N} : j<n,\ w_j\ne L\,\}$ and let $\hat w$ be the word over $\{U,D\}$ obtained by reading the letters of $w$ at the positions of $A$ in increasing order. A level step leaves the height unchanged, so for every $i\le n$ the height $h(i)$ of $v$ equals the height $\hat h(r)$ of the diagonal path traced by $\hat w$ at $r=\lvert A\cap i\rvert$, the number of non-level positions before $i$; and every $r$ with $0\le r\le\lvert A\rvert$ arises as such a count, taking $i$ to be $n$ or the position immediately after the $r$-th member of $A$. Hence $h(i)\ge0$ for all $i$ if and only if $\hat h(r)\ge0$ for all $r$, and $h(n)=0$ if and only if $\hat h(\lvert A\rvert)=0$. [F1, F3]

1.2 Consequently $\lvert A\rvert$ is even, say $\lvert A\rvert=2k$ with $2k\le n$, since $\hat h(\lvert A\rvert)=0$ and $\hat h(r)+r$ is even by [F3]; and $\hat w$ is then a ballot word of length $2k$, so by [F2] it is the step word of a unique Dyck path of semilength $k$. [F2, F3]

2.1 Let $P_{\hat w}\in\mathcal D_k$ be the unique Dyck path whose step word is $\hat w$, supplied by [F2]. The map $v\mapsto(k,A,P_{\hat w})$ is a bijection from $\mathrm{Mot}_n$ onto the disjoint union over $k$ with $2k\le n$ of $\{k\}\times[\,n\,]^{2k}\times\mathcal{D}_k$. Its inverse takes $(k,A,P)$ to the path of length $n$ whose step word carries the letters of the step word of $P$ at the positions of $A$ in increasing order and the letter $L$ elsewhere: by steps 1.1 and 1.2 that path lies in $\mathrm{Mot}_n$, and the two constructions undo one another, so [L1] and [L2] apply. [F2, L1, L2, step 1.1, step 1.2]

3.1 The index set $\{k:2k\le n\}$ is a subset of the finite set $\{0,\dots,n\}$, hence finite by [L8], and for each of its members $[\,n\,]^{2k}$ is finite with $\binom{n}{2k}$ elements by [L3] while $\mathcal{D}_k$ is finite with $C_k$ elements by [F2]. So [L5] gives $\lvert\{k\}\times[\,n\,]^{2k}\times\mathcal{D}_k\rvert=\binom{n}{2k}C_k$ and [L4] with [L6] adds these over the index set; transporting along the bijection of step 2.1 by [L7] gives the stated identity. At $n=0$ the index set is $\{0\}$ and the single term is $\binom{0}{0}C_0=1$; at $n=1$ it is $\{0\}$ again, giving $1$; at $n=2$ the terms are $1$ and $\binom{2}{2}C_1=1$, giving $2$; at $n=3$ they are $1$ and $\binom{3}{2}C_1=3$, giving $4$; and at $n=4$ they are $1$, $\binom{4}{2}C_1=6$ and $\binom{4}{4}C_2=2$, giving $9$. [F2, L3, L4, L5, L6, L7, L8, step 2.1] ∎

## Remarks

- **A bijective proof, and therefore a second route.** The functional equation of [[thm-motzkin-numbers-by-first-return-decomposition]] determines the same numbers, but nothing of it is used here: this argument deletes the level steps and reads what is left. It is also the identity that makes the Catalan numbers of this page count something other than Dyck paths.

- **Why the parity of $\lvert A\rvert$ is proved and not assumed.** The subword at the non-level positions must return to height $0$, and a diagonal path returns to its starting height only after an even number of steps. Assuming evenness would hide exactly the step that forces the summation index to be $2k$ rather than $k$.
