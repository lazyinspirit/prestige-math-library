---
id: lem-a-finite-dimensional-algebra-separates-its-simple-modules
kind: lemma
title: "A finite-dimensional algebra separates its split simple modules"
status: draft
origin: pipeline
deps: [thm-schurs-lemma-for-modules, def-direct-sum-of-a-family-of-modules, def-linear-basis, cor-independent-set-is-no-larger-than-a-finite-spanning-set]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Yanqi Lake Lectures on Algebra I, Theorems 11.1.5 and 11.2.2, pp.128 and 130"
      url: "https://www.wwli.asia/downloads/YAlg1.pdf"
---

## Statement

Let $A$ be a finite-dimensional unital $k$-algebra and $(S_i)_{i\in I}$ a family of pairwise nonisomorphic simple left $A$-modules satisfying $\operatorname{End}_A(S_i)=k\operatorname{id}_{S_i}$. Then $I$ is finite, every $S_i$ is finite-dimensional, and the action map $A\to\prod_{i\in I}\operatorname{End}_k(S_i)$ is surjective. The empty product is the zero algebra.

## Facts & Assumptions

**Given:** $A,k,S_i$ as stated; simple modules are nonzero.

[F1] A nonzero map between simple modules is an isomorphism ([[thm-schurs-lemma-for-modules]]).

[F2] Finite direct sums have componentwise actions; the empty sum is zero ([[def-direct-sum-of-a-family-of-modules]]).

[F3] A basis is an independent spanning set ([[def-linear-basis]]).

[F4] An independent set has at most as many elements as a finite spanning set ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]]).

## Proof

1.1 Every submodule $N$ of a finite sum $W$ of simple modules has a complement that is a sum of simple modules of the listed types. Here is the induction proving this assertion. For $W=0$, take complement $0$. Write $W=S\oplus T$, with $S$ simple, and suppose the assertion proved for $T$. If $S\subseteq N$, then $N=S\oplus(N\cap T)$; a complement of $N\cap T$ in $T$ complements $N$. Otherwise $N\cap S=0$, and projection to $T$ identifies $N$ with a submodule $N^{\prime}$ of $T$. Write $T=N^{\prime}\oplus C$ by the induction hypothesis. There is an $A$-linear map $f:N^{\prime}\to S$ with $N=\{(f(t),t):t\in N^{\prime}\}$. Every $(s,t+c)$ equals $(f(t),t)+(s-f(t),c)$, uniquely, so $W=N\oplus(S\oplus C)$. These cases exhaust the possibilities since $N\cap S$ is a submodule of $S$. [F2, given, algebra]

1.2 For each member of a finite selection of the $S_i$, choose $0\ne s_i\in S_i$. Simplicity gives $As_i=S_i$. Images of a finite basis of $A$ span $S_i$. Scanning that list and retaining a vector precisely when it is outside the previous span gives an independent spanning list $e_{i1},\ldots,e_{id_i}$, with $1\le d_i\le\dim_k A$. Only finitely many selections have been made. [F3, F4, given]

2.1 For this finite selection put $W=\bigoplus_i S_i^{d_i}$ and $v=(e_{ij})$. If $Av\ne W$, step 1.1 supplies a nonzero simple summand of a complement, isomorphic to some $S_l$, and projection onto it gives a nonzero $A$-linear $F:W\to S_l$ with $F(Av)=0$. Its restrictions to copies of $S_i$ vanish for $i\ne l$ by Schur, and on the copies of $S_l$ are scalars $c_j$. Since $1v=v$, we have $0=F(v)=\sum_j c_je_{lj}$. Independence gives $c_j=0$ for all $j$, so $F=0$, a contradiction. Therefore $Av=W$. [F1, F3, step 1.1, step 1.2, algebra]

3.1 Given any tuple of $k$-endomorphisms $u_i$, step 2.1 supplies $a\in A$ with $av=(u_i(e_{ij}))$. Then $ae_{ij}=u_i(e_{ij})$ for every basis vector, so $a$ induces $u_i$ on all of $S_i$. Thus the action map for every finite selection is surjective. Lifting a vector-space basis of the target gives an independent list in $A$ (apply the map to any relation). Consequently $\sum_i d_i^2\le\dim_k A$, in particular the size of the selection is at most $\dim_k A$. [F3, F4, step 2.1, algebra]

4.1 If $I$ had more than $\dim_k A$ members, finite induction would select $\dim_k A+1$ distinct indices, contradicting step 3.1. Thus $I$ is finite and that step proves the asserted surjectivity. If $I$ is empty, the unique map onto zero is surjective; if $A=0$, no nonzero unital simple module exists and this is the only case. [step 3.1, F2, given] ∎

## Remarks

The finite simultaneous-density argument supplies the surjectivity used in Yanqi Lake Theorem 11.2.2 without importing its radical or general density machinery.
