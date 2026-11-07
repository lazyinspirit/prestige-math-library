---
id: lem-partite-simplex-encoding-of-cyclic-arithmetic-progressions
kind: lemma
title: "Simplex encoding and edge-disjoint trivial progression copies"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-finite-partite-hypergraph-system-and-coordinate-algebras
  - thm-z-mod-p-is-a-field
  - thm-integers-modulo-n-basic-algebra
  - thm-standard-representatives-modulo-n
  - lem-finite-sum-reindexing-and-fubini
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Terence Tao, A variant of the hypergraph removal lemma, arXiv:math/0503572v2"
      url: "https://arxiv.org/pdf/math/0503572v2"
      locator: "The finite encoding following Corollary 1.14, printed p. 6; the linear algebra and edge-disjointness are reconstructed locally."
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics (2006), Chapter 11, §11.6"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "Printed pp. 454–462 (PDF pp. 474–482), simplex-removal framework only; the complete all-order proof is not attributed to the book."
---

## Statement

Let $k\ge3$, let $p>k$ be prime, let $J=\{0,\ldots,k-1\}$, and let $A\subseteq\mathbb F_p=\mathbb Z/p$. Use the $(k-1)$-uniform pattern consisting of the $k$ faces $e_j=J\setminus\{j\}$. On the face omitting $j$, define the event by
$$\lambda_j(\mathbf x)=\sum_{i\ne j}(i-j)x_i\in A.$$
A labelled copy is a tuple $\mathbf x\in\mathbb F_p^k$ satisfying all $k$ face conditions. Put $a=\sum_{i=0}^{k-1}i x_i$ and $r=-\sum_{i=0}^{k-1}x_i$ in $\mathbb F_p$. Then $\lambda_j(\mathbf x)=a+jr$, and every pair $(a,r)\in\mathbb F_p^2$ has exactly $p^{k-2}$ preimages. Consequently, the labelled copies with $r=0$ number $|A|p^{k-2}$, and in each fixed face class no edge lies in more than one such copy.

## Statement references

[Tao, finite encoding following Corollary 1.14](https://arxiv.org/pdf/math/0503572v2)

[Tao and Vu, *Additive Combinatorics*, Chapter 11, §11.6](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)

## Facts & Assumptions

**Given:** An integer $k\ge3$, a prime $p>k$, a set $A\subseteq\mathbb F_p$, and the $k$ face forms $\lambda_j$ in the Statement.

[F1] For a prime $p$, the quotient $\mathbb Z/p$ with its induced addition and multiplication is a field ([[thm-z-mod-p-is-a-field]]).

[F2] The modular operations satisfy $[u]_p+[v]_p=[u+v]_p$ and $[u]_p[v]_p=[uv]_p$ ([[thm-integers-modulo-n-basic-algebra]]).

[F3] The field $\mathbb F_p$ has exactly $p$ elements, represented uniquely by $0,\ldots,p-1$ ([[thm-standard-representatives-modulo-n]]).

[F4] Finite Cartesian products obey $|S\times T|=|S||T|$ and finite sums reindex bijectively ([[lem-finite-sum-reindexing-and-fubini]]).

[F5] The finite partite system uses the product of the coordinate classes and interprets each face condition by its coordinate projection ([[def-finite-partite-hypergraph-system-and-coordinate-algebras]]).

## Proof

1.1 Fix $(a,r)\in\mathbb F_p^2$ and arbitrary $x_2,\ldots,x_{k-1}\in\mathbb F_p$. The equations defining $a$ and $r$ force $$x_1=a-\sum_{i=2}^{k-1}i x_i,\qquad x_0=-r-x_1-\sum_{i=2}^{k-1}x_i.$$ These values satisfy both equations, so each choice of the $k-2$ free coordinates gives one solution and every solution is obtained uniquely this way. By [F3] and [F4], there are exactly $p^{k-2}$ choices. [given, F1, F2, F3, F4, algebra]

1.2 For each $j$, expansion in the field gives $$a+jr=\sum_{i=0}^{k-1}i x_i-j\sum_{i=0}^{k-1}x_i =\sum_{i\ne j}(i-j)x_i=\lambda_j(\mathbf x),$$ since the omitted coefficient at $i=j$ is zero. Thus the face conditions are precisely that all terms $a+jr$ lie in $A$. [given, F1, F2, algebra]

2.1 When $r=0$, every face value is $a$, so the face conditions hold exactly for $a\in A$. Step 1.1 gives $p^{k-2}$ tuples for each such $a$, hence there are $|A|p^{k-2}$ trivial copies, including zero copies when $A=\varnothing$. [step 1.1, step 1.2, F4, algebra]

3.1 Fix $j$ and a tuple of coordinates $(x_i)_{i\ne j}$ in the $j$th face. The equation $r=0$ forces the omitted coordinate to be $x_j=-\sum_{i\ne j}x_i$, so this face tuple extends to at most one trivial copy. This holds for every $j$, which proves edge-disjointness within each fixed face class. [given, step 1.1, algebra] ∎