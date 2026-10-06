---
id: ex-degree-d-map-on-a-sphere-has-lefschetz-number-one-plus-minus-d
kind: example
title: "Degree-d self-maps of a sphere have Lefschetz number 1+(-1)^n d"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-algebraic-lefschetz-number, def-degree-of-a-self-map-of-an-oriented-sphere, cor-homology-of-spheres, thm-lefschetz-hopf-index-formula, thm-index-of-a-nondegenerate-fixed-point, def-local-fixed-point-index, def-global-geometric-lefschetz-number, thm-lefschetz-fixed-point-theorem, thm-degree-is-invariant-under-path-homotopy, thm-regular-value-formula-for-degree, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Wong, Lectures on Fixed Point Theory, Mini-Course XV Encontro Brasileiro de Topologia, Rio Claro 2006 (complete notes)"
      url: "https://www.dm.ufscar.br/profs/ebt/history/2006/files/fixed_point.pdf"
      locator: "Lecture II §6, printed p. 15 (Example 6.1: cellular chain computation gives L(f)=1+(-1)^n deg f)"
    - title: "Eleny Ionel, notes by Andrew Lin, Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: "https://web.stanford.edu/~lindrew/math215B.pdf"
      locator: "Lecture 17, printed p. 54 (Example: L of a sphere self-map in terms of its degree)"
dependency_level: 13
---

## Example

Assume AC ([[def-axiom-of-choice]]) and $n\ge1$. Let $f:S^n\to S^n$ be continuous of degree $d$
([[def-degree-of-a-self-map-of-an-oriented-sphere]]). Then
$$L(f)=1+(-1)^n d.$$
In particular, for $n=1$ a circle map of degree $d$ has $L=1-d$, and for $n=2$
every self-map of the sphere has $L=1+d$, so a degree-$d$ map with $d\neq-1$
has a fixed point by [[thm-lefschetz-fixed-point-theorem|the Lefschetz fixed
point theorem]]; for $n=2$ and $d=-1$ the antipodal map is fixed-point-free,
with $L=1-1=0$.

## Verification

**Given:** A continuous map $f:S^n\to S^n$ of degree $d$.

[F1] $H_i(S^n;\mathbb Q)$ is $\mathbb Q$ for $i=0,n$ and vanishes otherwise
([[cor-homology-of-spheres]]); $f_*$ is the identity on $H_0$ and multiplication
by $d$ on $H_n$ ([[def-degree-of-a-self-map-of-an-oriented-sphere]]).

[L1] $L$ is the alternating trace sum over rational homology
([[def-algebraic-lefschetz-number]]), and when $f$ is smooth with isolated fixed
points the index sum equals $L$ on the scope of
[[thm-lefschetz-hopf-index-formula]].

1.1 The trace computation. By [F1] the only nonzero rational homology groups are $H_0$ and $H_n$, with $f_*=\mathrm{id}$ on $H_0$ and $f_*=d$ on $H_n$; the defining alternating sum therefore has exactly the two terms $(-1)^0\operatorname{tr}(\mathrm{id})=1$ and $(-1)^n d$, so $L(f)=1+(-1)^n d$. [given, F1, L1]

2.1 Consequences. For $n=1$ this is $1-d$, vanishing exactly for the degree-one circle maps such as rotations; for $n=2$ it is $1+d$, and this is nonzero exactly when $d\ne-1$, so the fixed-point theorem forces a fixed point in that case; the degree-$-1$ antipodal map has no fixed points and Lefschetz number $1-1=0$, the standard sharpness example. When $f$ is smooth with nondegenerate fixed points the same number is the index sum by [L1], for instance for an integer $d\ge2$ the map $z\mapsto z^d$ extends smoothly to $S^2$, with the coordinate expression $w\mapsto w^d$ at infinity. Its fixed points are $0$, $\infty$, and the $d-1$ solutions of $z^{d-1}=1$. The derivative is zero at $0$ and infinity, and is complex multiplication by $d$ at those roots; hence $I-Df$ has positive real determinant at all $d+1$ points and every local index is $+1$ by [[thm-index-of-a-nondegenerate-fixed-point]]. A nonzero finite target value has $d$ regular preimages of positive orientation, proving the asserted degree $d$ by [[thm-regular-value-formula-for-degree]]. [step 1.1, L1] ∎
