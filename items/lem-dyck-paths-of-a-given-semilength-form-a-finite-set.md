---
id: lem-dyck-paths-of-a-given-semilength-form-a-finite-set
kind: lemma
title: "$\\mathcal{D}_n$ is a finite set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-dyck-path-and-semilength, lem-lattice-paths-are-determined-by-their-step-words, thm-subset-of-a-finite-set, thm-cardinality-of-a-set-of-functions, thm-induction-principle, def-diagonal-lattice-path-and-its-height]
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
    - title: "A. Postnikov (notes by A. Lin), MIT 18.212 Algebraic Combinatorics, Spring 2019"
      url: "https://web.stanford.edu/~lindrew/18.212.pdf"
pipeline_run: null
---

## Statement

For every $n\in\mathbb{N}$ the set $\mathcal{D}_n$ of Dyck paths of semilength
$n$ ([[def-dyck-path-and-semilength]]) is finite and nonempty; more precisely
$\mathcal{D}_n$ has at least one and at most $2^{2n}$ elements.

## Facts & Assumptions

**Given:** a natural number $n$.

[F1] $\mathcal{D}_n$ is the set of diagonal paths of length $2n$ from $(0,0)$ to $(2n,0)$ whose height function satisfies $h(i)\ge0$ for every $i$ with $0\le i\le 2n$ ([[def-dyck-path-and-semilength]]).

[F2] A diagonal path of length $\ell$ from $(0,\alpha)$ is the same datum as a function $h:\{0,\dots,\ell\}\to\mathbb{Z}$ with $h(0)=\alpha$ and $h(i)-h(i-1)\in\{1,-1\}$ for $1\le i\le \ell$ ([[def-diagonal-lattice-path-and-its-height]]).

[L1] For a step set $S$, a point $P$ and $\ell\in\mathbb{N}$, the map sending a lattice path to its step word is a bijection $\mathcal{L}_S(P;\ell)\to S^{\ell}$, and $\mathcal{L}_S(P;\ell)$ is finite with $\lvert\mathcal{L}_S(P;\ell)\rvert=\lvert S\rvert^{\,\ell}$ ([[lem-lattice-paths-are-determined-by-their-step-words]]).

[L2] For finite sets $A$ and $B$, the set $A^{B}$ of functions $B\to A$ is finite and $\lvert A^{B}\rvert = \lvert A\rvert^{\lvert B\rvert}$ ([[thm-cardinality-of-a-set-of-functions]]).

[L3] A subset of a finite set is finite, and a subset $S$ of a finite set $A$ has $\lvert S\rvert\le\lvert A\rvert$ ([[thm-subset-of-a-finite-set]], clauses 1 and 2).

[L4] A property that holds at $0$ and passes from every natural number to its successor holds at every natural number: if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 The set $\mathcal{W}((0,0);2n)$ of all diagonal paths of length $2n$ from the origin is finite with exactly $2^{2n}$ elements, since the step set $\{U,D\}$ has two elements. [L1, L2]

1.2 The word $w$ of length $2n$ with $w_j=U$ for even $j$ and $w_j=D$ for odd $j$ traces a Dyck path: its height function satisfies $h(0)=0$, and if $h(2k)=0$ with $2k<2n$ then $h(2k+1)=1$ and $h(2k+2)=0$, so by induction on $k$ every even index has height $0$ and every odd index height $1$; hence $h\ge0$ throughout and $h(2n)=0$. [F1, F2, L4, construct]

2.1 By [F1] the set $\mathcal{D}_n$ is a subset of the finite set of step 1.1, hence finite with at most $2^{2n}$ elements by [L3]; and it is nonempty by step 1.2, so it has at least one element. [F1, L3, step 1.1, step 1.2] ∎

## Remarks

- **What this lemma is for.** It is the well-definedness obligation behind the
  Catalan numbers: $\lvert\mathcal{D}_n\rvert$ is a natural number only because
  $\mathcal{D}_n$ is finite, and the cardinality notation is defined for finite
  sets alone.

- **The bound $2^{2n}$ is not the point.** It is the crude count of all words of
  length $2n$ over a two-letter alphabet, recorded because it is what makes the
  set finite; the exact count is the subject of the theorems below and is far
  smaller.
