---
id: "ex-product-scalar-topology-is-locally-convex"
kind: "example"
title: "Arbitrary products of the scalar field are locally convex"
status: published
origin: "pipeline"
deps: ["def-topological-vector-space-for-local-convexity", "def-locally-convex-topological-vector-space", "def-product-topology", "thm-product-universal-property", "def-hausdorff-space", "lem-topological-vector-space-translation-scaling-and-absorption", "lem-finite-choice"]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis (17 November 2017)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo B\u00fchler and Dietmar Salamon, Functional Analysis (8 June 2017)"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
pipeline_run: "phase-2-next-20"
proof_strategy: "direct"
---

## Example

For any set $I$ and $\mathbb K=\mathbb R$ or $\mathbb C$, the vector space $\mathbb K^I$ of all functions $I\to\mathbb K$, with pointwise operations and the product topology, is a Hausdorff locally convex TVS. Its zero-neighborhood base consists of
$$N(F,\varepsilon)=\{x:|x_i|<\varepsilon_i\text{ for every }i\in F\},$$
where $F\subseteq I$ is finite and each $\varepsilon_i>0$. The case $I=\varnothing$ is included. No choice principle is needed.

## Facts & Assumptions

**Given:** A set $I$ and $\mathbb K=\mathbb R$ or $\mathbb C$.

[F1] A TVS requires joint addition and scalar multiplication continuity ([[def-topological-vector-space-for-local-convexity]]).

[F2] Local convexity is a convex zero-neighborhood base, and balance means stability under scalars of modulus at most one ([[def-locally-convex-topological-vector-space]]).

[F3] Basic product opens restrict only finitely many coordinates ([[def-product-topology]]).

[F4] Projections are continuous, and componentwise continuity characterizes maps into a product ([[thm-product-universal-property]], clauses 1–2).

[F5] Scalar addition and multiplication are jointly continuous ([[lem-topological-vector-space-translation-scaling-and-absorption]]).

[F6] Hausdorffness means distinct points have disjoint open neighborhoods ([[def-hausdorff-space]]).

[F7] A finite indexed list of nonempty sets permits choice in ZF ([[lem-finite-choice]]).

## Verification

1.1 The function $i\mapsto0$ is a specified element of $\mathbb K^I$, and $(x+y)(i)=x(i)+y(i)$, $(ax)(i)=ax(i)$ and $(-x)(i)=-x(i)$ define functions on $I$. Associativity, commutativity and the zero/inverse laws follow at each coordinate from the scalar field; the two distributive laws, associativity of scalar action and the unit action also follow at each coordinate. Function equality is coordinatewise, so these give every vector-space axiom. [F1, F3]

2.1 The $i$-th component of addition is $(x,y)\mapsto x_i+y_i$, a composite of the continuous coordinate maps and scalar addition. The $i$-th component of scalar multiplication is $(a,x)\mapsto ax_i$, similarly continuous by joint scalar multiplication. Therefore both vector operations are jointly continuous by product universality. This uses neither projection surjectivity nor nonemptiness of an arbitrary product of unrelated factors. [F4, F5, step 1.1]

3.1 Each $N(F,\varepsilon)$ is open, being a finite intersection of inverse images of open scalar disks, and contains zero. If $x,y$ are in it and $0\le t\le1$, then $|(1-t)x_i+ty_i|\le(1-t)|x_i|+t|y_i|<\varepsilon_i$ for $0<t<1$, with $t=0,1$ immediate. If $|a|\le1$, then $|ax_i|\le|x_i|<\varepsilon_i$, including $a=0$. Thus these neighborhoods are convex and balanced. Given any basic zero-neighborhood, choose a positive radius inside each of its finitely many coordinate neighborhoods, by finite choice after listing those coordinates. The resulting $N(F,\varepsilon)$ is contained in it. Hence these sets form a base and the TVS is locally convex. For $F=\varnothing$, the set is the whole space. [F2, F3, F4, F7, step 2.1]

4.1 If $x\ne y$, some coordinate $i$ has $d=|x_i-y_i|>0$. The inverse images of the disks of radius $d/3$ about $x_i,y_i$ are open neighborhoods of $x,y$. They are disjoint, since a common scalar value would imply $d<2d/3$ by the triangle inequality. Thus the space is Hausdorff. For $I=\varnothing$, its only element is the empty function; its only zero-neighborhood is the whole singleton, the vector operations are constant, and the Hausdorff assertion is vacuous. [F3, F4, F6, step 3.1] ∎