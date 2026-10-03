---
id: lem-blowup-separates-transverse-components
kind: lemma
title: "Blowing up a multiple point separates pairwise transverse components"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-contact-order-regular-components
  - lem-blowup-lowers-contact-order
  - thm-blowup-regular-surface-closed-point-regular
  - lem-blowup-isomorphism-off-center
  - def-strict-transform-closed-subscheme
  - def-effective-cartier-divisor
  - cor-nakayama-generators-modulo-an-ideal
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "19.4.3 separation of the two branches of a node, pp. 389-390"
    - title: "J. S. Milne, Algebraic Geometry v6.10"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
      locator: "Chapter 8 resolution by blowups, pp. 194-197"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $S$ be a regular surface over a field $k$ and
let $p$ be a closed point through which pass $s\ge2$ distinct regular curves
$Y_1,\dots,Y_s$, pairwise meeting transversally at $p$ (contact orders one)
and pairwise disjoint away from $p$. Let
$\pi\colon S'\to S$ be the blowup of $p$ with exceptional curve $E$. Then the
strict transforms $Y_i'$ meet $E$ at $s$ distinct points, no three support
curves meet at a point of $S'$ (in particular at most two components pass
through any point of $E$), and the only new intersections are the transverse
intersections $Y_i'\cap E$ at distinct points. If $s=2$ the two strict
transforms become disjoint.

## Facts & Assumptions

**Given:** A regular surface $S$ over $k$ (a Noetherian scheme of dimension
two regular at every point, in the sense of
[[def-contact-order-regular-components]]), a closed point $p\in S$, distinct
regular curves $Y_1,\dots,Y_s$ through $p$ with $s\ge2$, pairwise of contact
order one at $p$ and pairwise disjoint away from $p$, and the blowup
$\pi\colon S'\to S$ of $p$ with exceptional curve $E$.

[A1] **Choice.** The Axiom of Choice is assumed, as in the statement; the
cited suppliers used below are stated under it
([[def-axiom-of-choice]]).

[F1] [[def-contact-order-regular-components]]: For distinct reduced curves
$Y,Z$ through a closed point $p$ of a regular surface, the total contact
order is the sum of the local lengths $n_p(Y,Z)$ and the definition records
that $n_p(Y,Z)=1$ if and only if $Y$ and $Z$ **meet transversally at $p$**,
meaning $p\in Y\cap Z$, each of $Y$ and $Z$ is regular at $p$, and their
tangent lines are distinct one-dimensional subspaces of the two-dimensional
$k(p)$-vector space $\mathfrak m_p/\mathfrak m_p^2$; in that case the local
contact order is computed in the local-equation form
$n_p(Y,Z)=\operatorname{length}_{\mathcal O_{Y,p}}(\mathcal O_{Y,p}/z\mathcal
O_{Y,p})$ for a local equation $z$ of $Z$.

[F2] [[lem-blowup-lowers-contact-order]]: Let $Y,Z$ be distinct regular
curves through a closed point $p$ of a regular surface with contact order
$n\ge1$, and let $Y',Z'$ be their strict transforms under the blowup of $p$
with exceptional curve $E$. If $n=1$, then $Y'$ and $Z'$ meet $E$ at distinct
points and are disjoint near $E$; if $n>1$, the strict transforms meet at the
point of $E$ corresponding to their common tangent direction with contact
order $n-1$; every intersection of a strict transform with $E$ has order one.

[F3] [[thm-blowup-regular-surface-closed-point-regular]]: For a closed point
$p$ of a regular surface $S$ over $k$, the blowup $S'$ is regular of pure
dimension two, $E$ is an effective Cartier divisor canonically isomorphic to
$\mathbb P^1_{\kappa(p)}$, and, for $A=\mathcal O_{S,p}$ and regular
parameters $x,y$, the base change of the blowup to $\operatorname{Spec}A$ has
the charts $\operatorname{Spec}A[T]/(xT-y)=\operatorname{Spec}A[y/x]$ and
$\operatorname{Spec}A[U]/(yU-x)=\operatorname{Spec}A[x/y]$, glued by
inverting $T$ and $U$ with $U=T^{-1}$, with $E$ cut by $x$ in the first chart
and by $y$ in the second.

[F4] [[lem-blowup-isomorphism-off-center]]: The restriction of the blowup to
the complement of the center is an isomorphism:
$\pi\colon\pi^{-1}(S\smallsetminus\{p\})\to S\smallsetminus\{p\}$ is an
isomorphism of schemes.

[F5] [[def-effective-cartier-divisor]]: A Cartier divisor is effective when
it has a local-equation representation by regular sections, and on each chart
it is cut out by the corresponding local equation, a nonzerodivisor.

[F6] [[def-strict-transform-closed-subscheme]]: The strict transform of a
closed subscheme is the scheme-theoretic closure of its inverse image minus
the exceptional divisor; on a chart where the ideal of $E$ is invertible it
is cut out by the saturation of the inverse-image ideal by the ideal of $E$.

[F7] [[cor-nakayama-generators-modulo-an-ideal]]: Assume the Axiom of Choice.
Let $R$ be a commutative ring, let $I\trianglelefteq R$ satisfy
$I\subseteq J(R)$, and let $M$ be a finitely generated left $R$-module. If
elements $x_1,\dots,x_r\in M$ generate $M/IM$, then they generate $M$.

## Proof

1.1 By [F1], since each pair $Y_i,Y_j$ with $i\ne j$ has contact order $n_p(Y_i,Y_j)=1$, every $Y_i$ is regular at $p$ and the tangent lines $T_i\subseteq\mathfrak m_p/\mathfrak m_p^2$ are pairwise distinct one-dimensional $k(p)$-subspaces; moreover $Y_i\cap Y_j\subseteq\{p\}$ by the hypothesis that the curves are pairwise disjoint away from $p$. [A1, F1, given]

2.1 Fix $i$ and let $u$ be a local equation of $Y_i$ at $p$; then $u\notin\mathfrak m_p^2$, because otherwise the maximal ideal $\mathfrak n=\mathfrak m_p/(u)$ of $B=\mathcal O_{Y_i,p}=A/(u)$, $A=\mathcal O_{S,p}$, would satisfy $\mathfrak n=\mathfrak n^2$, and [F7] applied to the finitely generated $B$-module $\mathfrak n$ with $I=\mathfrak n$ would give $\mathfrak n=0$, contradicting $\dim B=1$ for the closed point $p$ of the one-dimensional curve; hence $u=ax+by+(\text{terms of order at least two})$ for regular parameters $x,y$ of $A$ [F3] and scalars $a,b\in\kappa(p)$ not both zero, and after interchanging $x$ and $y$ we may suppose $b\ne0$. [F3, F7, step 1.1]

3.1 In the chart $\operatorname{Spec}A[T]$ with $T=y/x$ one has $E=V(x)$ and $u=x\cdot w$ with $w=u/x\in A[T]$ satisfying $w\equiv a+bT\pmod x\ne0$; the saturation of $(u)$ by $(x)$ is therefore $(w)$, so $Y_i'$ is cut by $w$ there [F6], and $Y_i'\cap E=V(x,w)=V(x,a+bT)$ is the single point $T=-a/b$ of $E$. In the chart $\operatorname{Spec}A[U]$ with $U=x/y$ one has $E=V(y)$ and $u=y\cdot w'$ with $w'=u/y$ satisfying $w'\equiv aU+b\pmod y$; if $a\ne0$ this cuts the point $U=-b/a$ of $E$, which is the same point as $T=-a/b$ under the gluing $TU=1$, and if $a=0$ it cuts no point of $E$. Hence in every case $Y_i'$ meets $E$ in exactly one point $e_i$, and at that point $E$ and $Y_i'$ have contact order one: in the first chart, where $b\ne0$ and $Y_i'$ is cut by $w$ and $E$ by $x$, the local-equation form of [F1] gives $n_{e_i}(Y_i',E)=\operatorname{length}\bigl(\mathcal O_{Y_i',e_i}/x\,\mathcal O_{Y_i',e_i}\bigr)=\operatorname{length}\bigl(\kappa(p)[T]_{(T+a/b)}/(a+bT)\bigr)=1$. The point $e_i$ is the point of $E$ corresponding to the tangent direction $T_i$ of $Y_i$, since the vanishing locus of the linear form $a+bT$ is exactly that direction. [F1, F3, F5, F6, step 2.1]

4.1 Applying [F2] with $n=1$ to each pair $Y_i,Y_j$, $i\ne j$, the strict transforms meet $E$ at distinct points; with the uniqueness of step 3.1 this says $e_i\ne e_j$ whenever $i\ne j$, so $Y_1',\dots,Y_s'$ meet $E$ at the $s$ distinct points $e_1,\dots,e_s$. [F2, step 3.1]

5.1 For $i\ne j$ the strict transforms $Y_i'$ and $Y_j'$ are disjoint: near $E$ this is [F2] with $n=1$, and outside $E$ the blowup restricts to an isomorphism of $S'\smallsetminus E$ with $S\smallsetminus\{p\}$ by [F4], so a common point of $Y_i'$ and $Y_j'$ outside $E$ would map to a common point of $Y_i$ and $Y_j$ different from $p$, which does not exist; hence $Y_i'\cap Y_j'=\varnothing$, and in particular the two strict transforms are disjoint when $s=2$. [F2, F4, step 1.1, step 4.1]

6.1 Consequently no three of the support curves $E,Y_1',\dots,Y_s$ meet at a point of $S'$: each $Y_i'$ meets $E$ only in $e_i$, the points $e_i$ are distinct, and the $Y_i'$ are pairwise disjoint, so a point of $E$ lies on at most one strict transform and a point outside $E$ lies on at most one curve; every $e_i$ is a transverse intersection of $E$ with $Y_i'$ by step 3.1. The only intersections not present before the blowup are these points $e_i$: the original curves met one another only at $p$, and each such intersection has been separated, while outside $E$ the blowup creates no new intersections because it is an isomorphism there [F4]. [F3, F4, step 3.1, step 5.1]

7.1 Therefore $Y_1',\dots,Y_s'$ meet $E$ at the $s$ distinct points $e_1,\dots,e_s$, no three support curves meet at a point of $S'$, the only new intersections are the transverse intersections $Y_i'\cap E=\{e_i\}$ at distinct points, and $Y_1'$ and $Y_2'$ are disjoint when $s=2$; this proves every clause of the statement. [step 4.1, step 5.1, step 6.1] ∎
