---
id: thm-monotone-lattice-paths-in-a-rectangle-are-counted-by-a-binomial-coefficient
kind: theorem
title: "$\\lvert\\mathcal{M}((0,0),(m,n))\\rvert=\\binom{m+n}{n}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-monotone-lattice-path, lem-lattice-paths-are-determined-by-their-step-words, def-binomial-coefficient, thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse, def-finite-cardinality]
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
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §10.2'
      url: "https://arxiv.org/pdf/1503.05930"
    - title: "D. Guichard, An Introduction to Combinatorics and Graph Theory, §3.5"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
pipeline_run: null
---

## Statement

For all $m,n\in\mathbb{N}$ the set $\mathcal{M}((0,0),(m,n))$ of monotone lattice
paths from $(0,0)$ to $(m,n)$ ([[def-monotone-lattice-path]]) is finite with

$$\lvert\mathcal{M}((0,0),(m,n))\rvert = \binom{m+n}{n},$$

the binomial coefficient of [[def-binomial-coefficient]]. More generally, if
$a\le c$ and $b\le d$ in $\mathbb{Z}$ and $m,n\in\mathbb{N}$ are the natural
numbers with $m=c-a$ and $n=d-b$, then

$$\lvert\mathcal{M}((a,b),(c,d))\rvert = \binom{m+n}{n}.$$

## Facts & Assumptions

**Given:** natural numbers $m$ and $n$, and integers $a\le c$, $b\le d$ in the second clause.

[F1] A monotone lattice path is a lattice path whose steps lie in the step set $\{E,N\}$ with $E=(1,0)$ and $N=(0,1)$ ([[def-monotone-lattice-path]]).

[F2] For $v\in\mathcal{M}((a,b);\ell)$ with step word $w$ and $\nu(i)=\lvert\{j\in\mathbb{N}:j<i,\ w_j=N\}\rvert$, one has $v(i)=(a+i-\nu(i),\ b+\nu(i))$ for $0\le i\le\ell$; hence $v(\ell)=(c,d)$ if and only if $\nu(\ell)=d-b$ and $\ell=(c-a)+(d-b)$ ([[def-monotone-lattice-path]]).

[L1] For a step set $S$, a point $P$ and $\ell\in\mathbb{N}$, the map sending a lattice path to its step word is a bijection $\mathcal{L}_S(P;\ell)\to S^{\ell}$ ([[lem-lattice-paths-are-determined-by-their-step-words]]).

[L2] For a finite set $A$ and $k\in\mathbb{N}$, $[A]^{k}$ is the set of $k$-element subsets of $A$, it is finite, and $\lvert[A]^{k}\rvert=\binom{\lvert A\rvert}{k}$ ([[def-binomial-coefficient]]).

[L3] For $f:A\to B$: $f$ is a bijection if and only if there is a function $g:B\to A$ with $g\circ f=\Delta_A$ and $f\circ g=\Delta_B$ ([[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]).

[L4] If $A$ is finite and $f:A\to B$ is a bijection then $B$ is finite and $\lvert B\rvert=\lvert A\rvert$ ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 Every member of $\mathcal{M}((0,0),(m,n))$ has length $m+n$, and under the step-word bijection $\Phi$ of [L1] with $S=\{E,N\}$ and $P=(0,0)$ the set $\mathcal{M}((0,0),(m,n))$ corresponds exactly to the set $W$ of words $w\in\{E,N\}^{m+n}$ with $\lvert\{j<m+n : w_j=N\}\rvert=n$. [F1, F2, L1]

2.1 The map $w\mapsto T(w):=\{\,j\in\mathbb{N} : j<m+n,\ w_j=N\,\}$ carries $W$ into the set of $n$-element subsets of $\{0,\dots,m+n-1\}$, and the map sending a subset $T$ to the word $w^{T}$ with $w^{T}_j=N$ for $j\in T$ and $w^{T}_j=E$ otherwise is a two-sided inverse of it, so it is a bijection of $W$ onto that set of subsets. [L2, L3, step 1.1, construct]

3.1 The set $\{0,\dots,m+n-1\}$ has $m+n$ elements, so its $n$-element subsets number $\binom{m+n}{n}$, and transporting along the two bijections of steps 1.1 and 2.1 makes $\mathcal{M}((0,0),(m,n))$ finite of that cardinality. [L2, L4, step 2.1]

4.1 For general endpoints, $v\mapsto v-(a,b)$ is a bijection $\mathcal{M}((a,b),(c,d))\to\mathcal{M}((0,0),(m,n))$: subtracting a constant leaves every difference $v(i)-v(i-1)$ unchanged, sends $(a,b)$ to $(0,0)$ and $(c,d)$ to $(m,n)$, and $v\mapsto v+(a,b)$ inverts it; so the two sets have the same cardinality $\binom{m+n}{n}$. At $m=n=0$ this is one empty path against $\binom{0}{0}=1$; at $n=0$ it is the single all-$E$ path against $\binom{m}{0}=1$; at $n=1$ it is the $m+1$ paths differing in the position of the one $N$ step against $\binom{m+1}{1}=m+1$. [L3, L4, step 3.1, algebra] ∎

## Remarks

- **The general-endpoint clause is not decoration.** Every later count on this page is a count of paths between two points neither of which is the origin, and it is obtained from this clause rather than by repeating the argument.

- **Where the monotonicity is spent.** Only in [F2]: it makes the endpoint determine the numbers of $E$- and $N$-steps and hence the length. A fixed start and a fixed step word always determine one endpoint, for every step set; what can fail for a step set containing negative steps is the converse assertion that the endpoint determines the letter counts used by this binomial count.
