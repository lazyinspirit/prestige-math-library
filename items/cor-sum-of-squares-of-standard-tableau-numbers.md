---
id: cor-sum-of-squares-of-standard-tableau-numbers
kind: corollary
title: The sum of squares of the standard tableau numbers
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-young-tableau-standard-tableau-and-shape, thm-robinson-schensted-correspondence]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "David A. Craven, Groups, Geometries and Representation Theory (Spring Term 2013 lecture notes, 42 pp.)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
      locator: "§1.5, printed p. 13: Corollary 1.15, sum over lambda of (f^lambda)^2 = n!; read in the full text."
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups (Oxford Hilary Term 2011 lecture notes, 40 PDF pp.)"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
      locator: "§8, printed p. 30: Corollary 8.10; read in the full text."
    - title: "Jeremy L. Martin, Lecture Notes on Algebraic Combinatorics (263 pp.)"
      url: "https://jeremymartinmath.github.io/CombinatoricsNotes.pdf"
      locator: "§9.10, Corollary 9.10.6; read in the full 263-page notes."
---

## Statement

For every $n\ge0$,
$$\sum_{\lambda\vdash n}(f^\lambda)^2=n!,$$
where $f^\lambda$ is the number of standard $\lambda$-tableaux and
$f^\varnothing=1$, $0!=1$.

## Facts & Assumptions

**Given:** An integer $n\ge0$, the set $X_n$ of words $(w_1,\dots,w_n)$ of pairwise distinct real numbers with $\{w_1,\dots,w_n\}=\{1,\dots,n\}$, and for each partition $\lambda\vdash n$ the number $f^\lambda$ of standard $\lambda$-tableaux.

[L1] The Robinson-Schensted map $w\mapsto(P(w),Q(w))$ is a bijection from $X_n$ onto the set of pairs $(P,Q)$ of standard tableaux of the same shape $\lambda\vdash n$ ([[thm-robinson-schensted-correspondence]]).

[F1] A standard $\lambda$-tableau is a filling of the Young diagram of $\lambda$ by $1,\dots,n$, each once, increasing along rows and columns; $f^\lambda$ is the number of such tableaux, and $f^\varnothing=1$ is the number of fillings of the empty diagram ([[def-young-tableau-standard-tableau-and-shape]]).

[F2] A word of $X_n$ is determined by the function $i\mapsto w_i$, which is a bijection of $\{1,\dots,n\}$; conversely every such bijection gives a word in $X_n$, and $X_0$ consists of the empty word alone ([[thm-robinson-schensted-correspondence]]).

## Proof

**Proof technique:** direct.

1.1 The shapes $\lambda\vdash n$ are pairwise distinct as subsets of the plane, so the sets of pairs of standard tableaux of shape $\lambda$ are pairwise disjoint over $\lambda\vdash n$. [F1, algebra]

1.2 For fixed $\lambda\vdash n$ the pairs $(P,Q)$ of standard $\lambda$-tableaux are exactly the choices of a standard $\lambda$-tableau $P$ followed by an independent choice of a standard $\lambda$-tableau $Q$, so there are $f^\lambda\cdot f^\lambda=(f^\lambda)^2$ of them. [F1, algebra]

2.1 By [L1] the map $w\mapsto(P(w),Q(w))$ is a bijection from $X_n$ onto the disjoint union over $\lambda\vdash n$ of the sets counted in step 1.2; comparing cardinalities and using that the bijections of $\{1,\dots,n\}$ are $n!$-in-number (with $0!=1$) gives $n!=|X_n|=\sum_{\lambda\vdash n}(f^\lambda)^2$. [L1, F2, step 1.1, step 1.2, algebra]

3.1 At $n=0$ the only partition is $\varnothing$ and the sum is the single term $(f^\varnothing)^2=1^2=1=0!$, so the identity holds at the boundary. [F1, F2, given] ∎
