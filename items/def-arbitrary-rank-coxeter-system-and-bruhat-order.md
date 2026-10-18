---
id: def-arbitrary-rank-coxeter-system-and-bruhat-order
kind: definition
title: Arbitrary-rank Coxeter presentations, length, reflections, and Bruhat order
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-free-group, def-group-presentation, def-relators-relations-and-finite-presentations, def-normal-closure, def-quotient-group, def-natural-numbers, thm-well-ordering-principle, def-group, def-hh-coxeter-matrix-word-group-and-length, def-cg-bruhat-order-by-reflection-chains]
justified_by: [thm-arbitrary-rank-finite-parabolics-and-bruhat-subword]
aliases: []
landmark: false
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anders Björner and Francesco Brenti, Combinatorics of Coxeter Groups, GTM 231 (2005)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Chapter 1, §§1.1–1.2 and Chapter 2, §2.1: Coxeter presentation, length, reflections, and reflection-chain Bruhat order."
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters, revised arXiv text (2014)"
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "§§1.1–1.3 and 2.1, PDF pp. 1–4 and 19–20: Coxeter generators, length, reflections, and Bruhat order."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $S$ be any set, possibly infinite, and let $m:S\times S\to\{1,2,3,\ldots\}\cup\{\infty\}$ be a Coxeter matrix: $m(s,s)=1$, and for distinct $s,t$, $m(s,t)=m(t,s)\in\{2,3,\ldots\}\cup\{\infty\}$. Let $F(S)$ be the free group on $S$, let $N$ be the normal closure of
$$
\{s^2:s\in S\}\cup\{(st)^{m(s,t)}:s\ne t,\ m(s,t)<\infty\},
$$
and define $W=F(S)/N$. The image of $s\in S$ in $W$ is also denoted $s$. This is the Coxeter group presented by $(S,m)$.

For $w\in W$, define its length by
$$
\ell(w)=\min\{k\in\mathbb N: w=s_1\cdots s_k\text{ for some }s_1,\ldots,s_k\in S\}.
$$
The set is nonempty because every element of the quotient has a finite word in $S\cup S^{-1}$ and the relators give $s^{-1}=s$; its minimum exists by the well-ordering principle. A word of length $\ell(w)$ for $w$ is a reduced expression; the empty word is the reduced expression of $1$.

Define the reflection set $T=\{x s x^{-1}:x\in W,\ s\in S\}$. Write $u\to v$ if $v=ut$ for a reflection $t\in T$ and $\ell(v)>\ell(u)$. Define the reflection-chain Bruhat order by $u\le v$ if there is a finite chain $u=u_0\to u_1\to\cdots\to u_k=v$; the empty chain is allowed. Length strictly increases on each nonempty chain, so this relation is a partial order. The exact reduced-subword description and finite-interval consequence needed below are established in [[thm-arbitrary-rank-finite-parabolics-and-bruhat-subword]].

When $S$ is finite, the presentation and length agree with [[def-hh-coxeter-matrix-word-group-and-length]], and the reflection-chain order agrees with [[def-cg-bruhat-order-by-reflection-chains]]. No exchange, standard-parabolic, reduced-subword, or interval-finiteness property is included in this definition; those properties are justified separately.
