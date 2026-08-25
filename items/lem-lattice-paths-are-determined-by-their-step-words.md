---
id: lem-lattice-paths-are-determined-by-their-step-words
kind: lemma
title: "For each start point the step word is a bijection onto $S^n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-lattice-path-and-step-set, thm-cardinality-of-a-set-of-functions, thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse, thm-induction-principle, def-nat-power]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §10.1'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Statement

Let $S$ be a step set, $P\in\mathbb{Z}\times\mathbb{Z}$ and $n\in\mathbb{N}$.
The map sending a lattice path to its step word is a bijection

$$\Phi : \mathcal{L}_S(P;n) \longrightarrow S^{n},$$

whose inverse sends $w$ to the path $v_w$ traced by $w$ from $P$
([[def-lattice-path-and-step-set]]). Consequently $\mathcal{L}_S(P;n)$ is finite
with

$$\lvert\mathcal{L}_S(P;n)\rvert = \lvert S\rvert^{\,n},$$

the power being the natural-number exponentiation of [[def-nat-power]].

## Facts & Assumptions

**Given:** a step set $S$, a point $P\in\mathbb{Z}\times\mathbb{Z}$ and a natural number $n$.

[F1] A lattice path of length $n$ with steps in $S$ from $P$ is a function $v:\{0,1,\dots,n\}\to\mathbb{Z}\times\mathbb{Z}$ with $v(0)=P$ and $v(i)-v(i-1)\in S$ for every $i$ with $1\le i\le n$; its step word is the word $w\in S^{n}$ with $w_{i-1}=v(i)-v(i-1)$; and the path traced by $w\in S^n$ from $P$ satisfies $v_{w}(0)=P$ and $v_{w}(i)=v_{w}(i-1)+w_{i-1}$ for $1\le i\le n$ ([[def-lattice-path-and-step-set]]).

[L1] For $f:A\to B$: $f$ is a bijection if and only if there is a function $g:B\to A$ with $g\circ f=\Delta_A$ and $f\circ g=\Delta_B$, and such a $g$ is then unique ([[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]).

[L2] For finite sets $A$ and $B$, the set $A^{B}$ of functions $B\to A$ is finite and $\lvert A^{B}\rvert = \lvert A\rvert^{\lvert B\rvert}$ ([[thm-cardinality-of-a-set-of-functions]]).

[L3] A property that holds at $0$ and passes from every natural number to its successor holds at every natural number: if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 For $v\in\mathcal{L}_S(P;n)$ and each $i$ with $1\le i\le n$ the difference $v(i)-v(i-1)$ lies in $S$, so $\Phi(v)$ is a function $\{0,\dots,n-1\}\to S$, that is an element of $S^{n}$; for $n=0$ the domain is empty and $\Phi(v)$ is the empty word. [F1]

2.1 Given $w\in S^{n}$, the traced path $v_w$ lies in $\mathcal{L}_S(P;n)$ and its step word has $j$-th letter $v_w(j+1)-v_w(j)=w_j$, so $\Phi(v_w)=w$; conversely, given $v\in\mathcal{L}_S(P;n)$ with $w=\Phi(v)$, both $v$ and $v_w$ take the value $P$ at the index $0$ and both satisfy $u(i)=u(i-1)+w_{i-1}$ for $1\le i\le n$, so the set of indices at which they agree contains $0$ and contains $i$ whenever it contains $i-1$, whence they agree throughout and $v_w=v$. Thus $w\mapsto v_w$ is a two-sided inverse of $\Phi$ and $\Phi$ is a bijection. [F1, L1, L3, step 1.1]

3.1 Since $S$ is finite and $\{0,\dots,n-1\}$ is finite with $n$ elements, $S^{n}$ is finite with $\lvert S^{n}\rvert=\lvert S\rvert^{\,n}$, and transporting along the bijection of step 2.1 gives that $\mathcal{L}_S(P;n)$ is finite with the same cardinality. At $n=0$ both sides are $1$, one empty path against the one empty word, and this holds also for $S=\varnothing$; for $S=\varnothing$ and $n\ge1$ both sides are $0$. [L2, step 2.1] ∎

## Remarks

- **What the lemma is for.** Every count on this page is obtained by counting
  words and transporting the answer along this bijection, so the correspondence
  is proved once here and cited rather than re-established.

- **The start point is fixed throughout.** The map $\Phi$ forgets $P$, and a step
  word alone therefore determines a path only after a start point has been named.
