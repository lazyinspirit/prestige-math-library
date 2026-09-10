---
id: lem-rudin-neighborhoods-of-initial-top-slices-contain-tails
kind: lemma
title: Neighborhoods of Rudin initial-top slices contain tails
status: draft
origin: pipeline
deps: [lem-rudin-internal-hull-tail-domination, lem-rudin-box-space-basic-neighborhoods-and-p-space, thm-regularity-of-the-alephs, thm-cofinality-basics, def-axiom-of-choice, prop-cumulative-hierarchy-transitivity-and-growth]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "K. P. Hart, Set-Theoretic Methods in General Topology, Chapter 6 section 3, Lemma 3.1 and Exercises 3–5, printed pp. 37–38; finite top-coordinate cases supplied here"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop/settop.pdf
---

## Statement

Assume AC. For $k<\omega$ put $F_k=\{u\in X_R(B):u(n)=\aleph_n\text{ for every }n\in B\text{ with }n\le k\}$. If $U$ is open in $X_R(B)$ and $F_k\subseteq U$, there is $z\in\prod_{n\in B}\aleph_n$ such that

$$\{u\in X_R(B):z<u\}\subseteq U.$$

The inequality is pointwise. The conclusion includes every point of the Rudin space above $z$, with its own finite uniform cofinality bound; it is not restricted to one cofinality stratum.

## Facts & Assumptions

**Given:** The stated $k,U$; write $X=X_R(B)$ and $t(n)=\aleph_n$.

[F1] For $k\ge2$ and any prescribed finite list of parameters, the internal hull lemma gives $M\prec V_\theta$ and $x\in F_k$ whose tail coordinates have cofinality $\aleph_k$ and are below $\aleph_n$. Each $b<x$ has $z\in M\cap P_B$ with $b<z<x$. If $u\in M\cap P_B$ and $n>k$ with $u(n)<\aleph_n$, then $u(n)<x(n)$ ([[lem-rudin-internal-hull-tail-domination]]).

[F2] At a point $h\in X$, the boxes $(a,h]_X$ with $a<h$ form a local base ([[lem-rudin-box-space-basic-neighborhoods-and-p-space]]).

[F3] Under AC, the positive finite alephs are regular ([[thm-regularity-of-the-alephs]]).

[F4] A subset of an ordinal whose size is smaller than its cofinality is bounded in it ([[thm-cofinality-basics]]).

[F5] $V_\theta$ is transitive ([[prop-cumulative-hierarchy-transitivity-and-growth]]).

[A1] AC supplies the hull and the countable family of local lower bounds used below ([[def-axiom-of-choice]]).

## Proof

1.1 If $k<2$, there are no $n\in B$ with $n\le k$, so $F_k=X$ and $U=X$. The zero function belongs to the displayed product, and its tail in $X$ is contained in $U$. Suppose henceforth $k\ge2$. Apply F1 and A1 with $U,X,B,P_B,t$ among the parameters. The resulting $M$ contains all these objects, and $x\in F_k$. For every finite $S\subseteq\{n\in B:n>k\}$ define $x^S$ by replacing $x(n)$ by $\aleph_n$ on $S$ and leaving it unchanged elsewhere. This point remains in $F_k$: it still has the prescribed initial tops, all unchanged coordinates have cofinality at most $\aleph_k$, and its finitely many new top cofinalities are the finite alephs $\aleph_n$ for $n\in S$, by F3. A finite bound larger than $k$ and every member of $S$ bounds all these cofinalities strictly. Thus $x^S\in X$ and hence $x^S\in U$. [F1, F3, A1]

2.1 There are countably many finite $S$ as in step 1.1: the map $S\mapsto\sum_{n\in S}2^n$ takes them injectively to the natural numbers. For distinct sets, let $d$ be the greatest member of their symmetric difference. The contribution $2^d$ to the difference of their sums exceeds the sum of all possible smaller contributions, since $\sum_{i<d}2^i=2^d-1$ (the identity follows by induction from the zero empty sum). Thus the codes differ. By F2 and A1 choose, for every such $S$, a function $y^S<x^S$ with $(y^S,x^S]_X\subseteq U$. For $n\in B$ put

$$b(n)=\sup\{y^S(n):S\text{ finite as above and }n\notin S\}.$$

The set in braces is nonempty, since $S=\varnothing$ qualifies, and is countable by the coding. Each term is below $x(n)$, because $x^S(n)=x(n)$ whenever $n\notin S$. Every $x(n)$ has uncountable cofinality: on the tail this follows from F1, and on the initial coordinates from F3. F4 therefore gives $b(n)<x(n)$ for every $n$. In particular $b\in P_B$. Apply F1 to obtain $z\in M\cap P_B$ with $b<z<x$. Since $x\le t$, every $z(n)<\aleph_n$, so $z$ is in the product required by the statement. [step 1.1, F1, F2, F3, F4, A1]

3.1 Let $u\in M\cap X$ satisfy $z<u$. Set $S=\{n\in B:n>k\text{ and }u(n)=\aleph_n\}$. The defining Rudin condition gives a finite $q$ with every coordinate cofinality of $u$ below $\aleph_q$. If $n\in S$, F3 gives $\aleph_n=\operatorname{cf}(u(n))<\aleph_q$, so $n<q$. Hence $S$ is finite. For tail coordinates outside $S$, $u(n)<\aleph_n$ and F1 yields $u(n)<x(n)=x^S(n)$. For coordinates in $S$, $u(n)=x^S(n)=\aleph_n$. At initial coordinates $u(n)\le\aleph_n=x^S(n)$. Thus $u\le x^S$. If $n\notin S$, step 2.1 gives $u(n)>z(n)>b(n)\ge y^S(n)$; if $n\in S$, $u(n)=x^S(n)>y^S(n)$. Therefore $u\in(y^S,x^S]_X\subseteq U$. This treats every internal Rudin point above $z$, including those attaining some tail tops. [step 1.1, step 2.1, F1, F3]

4.1 Suppose there were an external $u\in X\setminus U$ with $z<u$. The assertion that such a $u$ exists is true in $V_\theta$: $X,U,z,B$ belong to it, every member of $X$ is in it by F5, and the conditions $u\in X$, $u\notin U$ and $z(n)<u(n)$ for all $n\in B$ use only membership and bounded function-coordinate comparisons. Transitivity makes these conditions absolute, as bounded quantifiers range over all actual members of their bounds and function values are the actual entries. All their parameters belong to $M$, by steps 1.1–2.1. Elementarity F1 therefore gives a witness in $M$ with the same actual properties, contradicting step 3.1. There is no such witness, which proves the full pointwise tail inclusion. QED. [step 1.1, step 2.1, step 3.1, F1, F5]
