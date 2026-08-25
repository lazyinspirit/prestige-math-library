---
id: thm-sauer-shelah-by-multilinear-polynomials
kind: theorem
title: "A second proof of Sauer–Shelah, from the multilinear polynomial space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sauer-shelah, lem-an-unshattered-set-reduces-a-monomial-on-a-family, lem-every-polynomial-agrees-on-the-cube-with-its-multilinear-reduction, lem-the-multilinear-monomials-of-bounded-degree-are-independent-on-the-cube, def-shattering-and-vc-dimension, def-incidence-vector-of-a-subset, def-dimension, def-linear-combination-and-span, def-binomial-coefficient, def-vector-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §7.4"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Statement

If $\mathcal{F}\subseteq\mathcal{P}([n])$ has VC dimension at most $d$, then

$$\lvert\mathcal{F}\rvert\le\sum_{i=0}^{d}\binom{n}{i}.$$

## Facts & Assumptions

**Given:** a family $\mathcal{F}\subseteq\mathcal{P}([n])$ with $\operatorname{VC}(\mathcal{F})\le d$.

[L1] Over $\mathbb R$, if $T$ is not shattered, then on the incidence vectors of $\mathcal{F}$ the monomial $x_T$ is a linear combination of the monomials $x_S$ for $S\subsetneq T$ ([[lem-an-unshattered-set-reduces-a-monomial-on-a-family]]).

[L2] For $0\le s\le n$, the multilinear monomials of degree at most $s$ span a space of dimension $\sum_{i=0}^{s}\binom{n}{i}$ on the cube ([[lem-the-multilinear-monomials-of-bounded-degree-are-independent-on-the-cube]]).

## Proof

**Proof technique:** direct.

1.1 Let $V$ be the vector space of all functions $\mathcal{F}\to\mathbb{R}$. For $A\subseteq[n]$, put $$q_A(x):=\prod_{i\in A}x_i\prod_{i\notin A}(1-x_i).$$ At an incidence vector $v_B$, this polynomial is $1$ when $B=A$ and $0$ otherwise. Therefore every $g\in V$ is represented on the incidence vectors of $\mathcal F$ by the multilinear polynomial $\sum_{A\in\mathcal F}g(A)q_A$, so the restrictions of all squarefree monomials $x_T$ span $V$. [construct, algebra]

2.1 If $\lvert T\rvert>d$, then $T$ is not shattered. Hence [L1] expresses the restriction of $x_T$ on $\mathcal{F}$ as a combination of the restrictions of the monomials $x_S$ with $S\subsetneq T$. Inducting on $\lvert T\rvert$ shows that every monomial restriction is in the span of those with degree at most $d$. [L1, step 1.1]

3.1 Therefore the restrictions of the monomials $x_T$ with $\lvert T\rvert\le d$ already span $V$. Put $s:=\min\{d,n\}$; no subset of $[n]$ has size above $n$, so this is the same spanning family as the one with $\lvert T\rvert\le s$. By [L2], there are at most $\sum_{i=0}^{s}\binom{n}{i}$ of them. If $d\le n$ this is already $\sum_{i=0}^{d}\binom{n}{i}$; if $d>n$, then $\binom{n}{i}=0$ for $i>n$, so the same sum is also $\sum_{i=0}^{d}\binom{n}{i}$. Hence $\dim V=\lvert\mathcal{F}\rvert$ is at most $\sum_{i=0}^{d}\binom{n}{i}$. This is the same numerical bound as [[thm-sauer-shelah]], proved by a genuinely different route. [L2, step 2.1] ∎

## Remarks

- The shifting proof works with families of sets; this proof works with a span of monomial functions. The shared bound is the conclusion, not the method.
