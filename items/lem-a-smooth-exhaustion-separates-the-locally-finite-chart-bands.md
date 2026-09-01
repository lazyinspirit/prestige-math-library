---
id: lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands
kind: lemma
title: "A smooth exhaustion separates the locally finite chart bands"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function,
       thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set,
       def-smooth-manifold,
       lem-smooth-maps-paste-over-an-open-cover]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 6"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 11"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf"
---

## Statement

Let $M^n$ be a noncompact smooth manifold. Then there exist a smooth proper
function $\rho:M\to\mathbb R$, compact bands
$$K_m:=\rho^{-1}\bigl([m-1,m+2]\bigr)\qquad(m\ge 1),$$
and smooth maps $H_m:M\to\mathbb R^{Q_m}$ such that:

1. each $H_m$ is supported in a neighbourhood of $K_m$;
2. the supports of $H_m$ and $H_{m'}$ are disjoint whenever $m\equiv m'\pmod 4$
   and $m\ne m'$;
3. $H_m$ separates points and tangent vectors on $K_m$; and
4. $\|H_m\|\le 2^{-m}$ everywhere.

## Facts & Assumptions

**Given:** A noncompact smooth $n$-manifold $M$.

[L1] The manifold admits a smooth proper exhaustion function $\rho:M\to\mathbb R$ ([[thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function]]).

[L2] A closed set inside an open set admits a smooth cutoff equal to $1$ near the closed set and supported in the open set ([[thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]]).

[F1] A smooth manifold comes with smooth coordinate charts ([[def-smooth-manifold]]).

[L3] Smooth maps that agree on overlaps paste over an open cover ([[lem-smooth-maps-paste-over-an-open-cover]]).

## Proof
**Proof technique:** direct.

1.1 Choose a nonnegative smooth proper exhaustion $\rho$ from [L1]. Let $$K_m:=\rho^{-1}\bigl([m-1,m+2]\bigr)\qquad(m\ge1).$$ Each $K_m$ is compact and the family $(K_m)$ covers $M$. If $m\equiv m'\pmod4$ and $m\ne m'$, the defining intervals are separated by a positive gap. [L1, given, construct]

2.1 Put $O_m:=\rho^{-1}((m-5/4,m+9/4))$. Then $K_m\subseteq O_m$, and $O_m\cap O_{m'}=\varnothing$ for distinct congruent indices modulo $4$. If $K_m=\varnothing$, take $Q_m=1$ and $H_m=0$; all four requirements for this index are then immediate. Henceforth suppose $K_m\ne\varnothing$. [step 1.1, construct]

3.1 For every $p\in K_m$, a chart from [F1] can be shrunk over a Euclidean ball to a coordinate domain $(U,x)$ with $p\in U$, compact closure, and $\overline U\subseteq O_m$. Applying [L2] to $\{p\}\subseteq U$ gives a smooth $\phi:M\to[0,1]$ supported in $U$ and equal to $1$ on an open neighbourhood $V$ of $p$. The collection of all plateau neighbourhoods $V$ obtainable in this way covers $K_m$, so compactness selects finitely many data $(U_{mj},x_{mj},\phi_{mj},V_{mj})$, $1\le j\le r_m$, whose $V_{mj}$ cover $K_m$. [F1, L2, step 2.1, choose]

4.1 For each selected datum define a global block $B_{mj}:M\to\mathbb R^{n+1}$ by $$B_{mj}(q):=\begin{cases}(\phi_{mj}(q),\,\phi_{mj}(q)x_{mj}(q)),&q\in U_{mj},\\0,&q\notin U_{mj}.\end{cases}$$ On the open cover $U_{mj}\cup(M\setminus\operatorname{supp}(\phi_{mj}))$ the two formulas are smooth and agree on the overlap, so [L3] makes $B_{mj}$ smooth. Set $H'_m:=(B_{m1},\ldots,B_{mr_m}):M\to\mathbb R^{r_m(n+1)}$. Its support lies in the finite union of the compact sets $\operatorname{supp}(\phi_{mj})\subseteq O_m$. [F1, L3, step 3.1, construct]

5.1 The map $H'_m$ separates points of $K_m$: if $H'_m(p)=H'_m(q)$, choose $j$ with $p\in V_{mj}$. Equality of the first coordinate of the $j$th block gives $\phi_{mj}(q)=1$, and equality of the remaining coordinates gives $x_{mj}(p)=x_{mj}(q)$, whence $p=q$. It also separates tangent vectors: for $p\in V_{mj}$, the function $\phi_{mj}$ is locally constant with value $1$, so the last $n$ components of $dB_{mj,p}$ are $dx_{mj,p}$, an isomorphism. Thus $dH'_{m,p}$ is injective for every $p\in K_m$. [step 3.1, step 4.1, algebra]

6.1 Compact support makes $H'_m$ bounded. Choose $C_m\ge1$ with $\|H'_m(q)\|\le C_m$ for every $q\in M$, and put $$H_m:=2^{-m}C_m^{-1}H'_m.$$ This positive rescaling preserves support and both separation properties, and it gives $\|H_m\|\le2^{-m}$ everywhere. [step 4.1, step 5.1, choose, construct]

7.1 For a nonempty band, steps 4.1 and 6.1 put $\operatorname{supp}(H_m)$ inside $O_m$; for an empty band, step 2.1 gives empty support. The sets $O_m$ are disjoint for distinct congruent indices modulo $4$, so the corresponding supports are disjoint. Together with steps 1.1, 5.1, and 6.1, this proves all four stated properties. [step 1.1, step 2.1, step 4.1, step 5.1, step 6.1] ∎
