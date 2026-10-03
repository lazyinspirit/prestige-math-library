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
  - thm-exceptional-divisor-normal-cone-proj
  - thm-associated-graded-ring-of-a-regular-local-ring
  - thm-blowup-base-change-flat
  - thm-affine-blowup-standard-charts
  - lem-affine-blowup-algebra-properties
  - lem-blowup-isomorphism-off-center
  - def-strict-transform-closed-subscheme
  - def-effective-cartier-divisor
  - thm-dimension-at-most-embedding-dimension
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - lem-total-transform-strict-plus-exceptional-multiplicity
  - thm-one-dimensional-regular-local-rings-are-dvrs
  - lem-regular-local-quotient-by-parameter-is-regular
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

**Given:** A regular surface $S$ over $k$ (a Noetherian scheme of dimension two regular at every point, in the sense of [[def-contact-order-regular-components]]), a closed point $p\in S$, distinct regular curves $Y_1,\dots,Y_s$ through $p$ with $s\ge2$, pairwise of contact order one at $p$ and pairwise disjoint away from $p$, and the blowup $\pi\colon S'\to S$ of $p$ with exceptional curve $E$.

[A1] **Choice.** The Axiom of Choice is assumed, as in the statement; the cited suppliers used below are stated under it ([[def-axiom-of-choice]]).

[F1] [[def-contact-order-regular-components]]: For distinct reduced curves $Y,Z$ through a closed point $p$ of a regular surface, the total contact order is the sum of the local lengths $n_p(Y,Z)$ and the definition records that $n_p(Y,Z)=1$ if and only if $Y$ and $Z$ **meet transversally at $p$**, meaning $p\in Y\cap Z$, each of $Y$ and $Z$ is regular at $p$, and their tangent lines are distinct one-dimensional subspaces of the two-dimensional $k(p)$-vector space $\mathfrak m_p/\mathfrak m_p^2$; in that case the local contact order is computed in the local-equation form $n_p(Y,Z)=\operatorname{length}_{\mathcal O_{Y,p}}(\mathcal O_{Y,p}/z\mathcal O_{Y,p})$ for a local equation $z$ of $Z$.

[F2] [[lem-blowup-lowers-contact-order]]: Let $Y,Z$ be distinct regular curves through a closed point $p$ of a regular surface with contact order $n\ge1$, and let $Y',Z'$ be their strict transforms under the blowup of $p$ with exceptional curve $E$. If $n=1$, then $Y'$ and $Z'$ meet $E$ at distinct points and are disjoint near $E$; if $n>1$, the strict transforms meet at the point of $E$ corresponding to their common tangent direction with contact order $n-1$; every intersection of a strict transform with $E$ has order one.

[F3] [[thm-affine-blowup-standard-charts]], [[lem-affine-blowup-algebra-properties]], [[thm-blowup-base-change-flat]], [[thm-exceptional-divisor-normal-cone-proj]] and [[thm-associated-graded-ring-of-a-regular-local-ring]]: Localizing the base at $p$ gives the charts $A[(x,y)/x]$ and $A[(x,y)/y]$, with inverse ratio overlap. The exceptional curve is $\operatorname{Proj}\operatorname{gr}_{\mathfrak m}A$, hence $\mathbb P^1_{\kappa(p)}$ after choosing parameters, since $\dim A=2$ at the contact point. The quotient presentations follow from the regular-sequence torsion calculation below.

[F4] [[lem-blowup-isomorphism-off-center]]: The restriction of the blowup to the complement of the center is an isomorphism: $\pi\colon\pi^{-1}(S\smallsetminus\{p\})\to S\smallsetminus\{p\}$ is an isomorphism of schemes.



[F6] [[def-strict-transform-closed-subscheme]]: The strict transform of a closed subscheme is the scheme-theoretic closure of its inverse image minus the exceptional divisor; on a chart where the ideal of $E$ is invertible it is cut out by the saturation of the inverse-image ideal by the ideal of $E$.

[F7] [[thm-dimension-at-most-embedding-dimension]], [[thm-regular-local-rings-are-domains-and-cohen-macaulay]], [[thm-one-dimensional-regular-local-rings-are-dvrs]] and [[lem-regular-local-quotient-by-parameter-is-regular]]: Regular local rings are domains, local dimension is at most embedding dimension, a regular parameter quotient is regular of dimension one less, and a regular hypersurface equation has multiplicity one.

[F8] [[lem-total-transform-strict-plus-exceptional-multiplicity]]: For a reduced curve of multiplicity one at the blown-up point, the strict transform is given by dividing its equation by the exceptional equation; its intersection with $E$ is the divisor of its nonzero linear leading form.

## Proof

1.1 By [F1], since each pair $Y_i,Y_j$ with $i\ne j$ has contact order $n_p(Y_i,Y_j)=1$, every $Y_i$ is regular at $p$ and the tangent lines $T_i\subseteq\mathfrak m_p/\mathfrak m_p^2$ are pairwise distinct one-dimensional $k(p)$-subspaces; moreover $Y_i\cap Y_j\subseteq\{p\}$ by the hypothesis that the curves are pairwise disjoint away from $p$. [A1, F1, given]

2.1 Fix $i$. Its regular prime quotient $A/P$ has cotangent dimension one, so choose $u\in P$ with nonzero cotangent class. The regular one-dimensional quotient $A/(u)$ is a DVR; its prime $P/(u)$ is zero because $(A/(u))/(P/(u))$ still has dimension one. Thus $P=(u)$ and $u$ is a principal equation of the curve germ. Regularity makes its initial form a nonzero linear form $aX+bY$. Choose regular parameters $x,y$ so that $b\ne0$. The $x$-chart is $B=A[T]/(xT-y)$: reducing $xg=(xT-y)h$ modulo $x$ forces $h=xh_1$, and cancellation proves the incidence quotient has no $x$-power torsion. In this ring its strict transform is cut by $w=u/x$, with $w\bmod x=a+bT$. Thus $Y_i'\cap E$ is the single reduced point $T=-a/b$. The other chart $A[U]/(yU-x)$ has equation $w'=u/y$ with $w'\bmod y=aU+b$; it gives the same point if $a\ne0$, and none if $a=0$. This proves there are no other intersections with $E$. At that point the ambient local ring has maximal ideal $(x,T+a/b)$ and prime chain $(0)\subsetneq(x)\subsetneq(x,T+a/b)$; it has dimension and embedding dimension two, so is regular with this cotangent basis, and $w$ has a nonzero coefficient on $T+a/b$. Hence $Y_i'$ is regular there and its tangent line differs from $E$'s. Equivalently its quotient by $x$ is the residue field, giving contact length one. [F1, F3, F6, F7, F8, step 1.1]

3.1 Applying [F2] with $n=1$ to each pair $Y_i,Y_j$, $i\ne j$, the strict transforms meet $E$ at distinct points; with the uniqueness of step 2.1 this says $e_i\ne e_j$ whenever $i\ne j$, so $Y_1',\dots,Y_s'$ meet $E$ at the $s$ distinct points $e_1,\dots,e_s$. [F2, step 2.1]

4.1 For $i\ne j$ the strict transforms $Y_i'$ and $Y_j'$ are disjoint: near $E$ this is [F2] with $n=1$, and outside $E$ the blowup restricts to an isomorphism of $S'\smallsetminus E$ with $S\smallsetminus\{p\}$ by [F4], so a common point of $Y_i'$ and $Y_j'$ outside $E$ would map to a common point of $Y_i$ and $Y_j$ different from $p$, which does not exist; hence $Y_i'\cap Y_j'=\varnothing$, and in particular the two strict transforms are disjoint when $s=2$. [F2, F4, step 1.1, step 3.1]

5.1 Consequently no three of the support curves $E,Y_1',\dots,Y_s'$ meet at a point of $S'$: each $Y_i'$ meets $E$ only in $e_i$, the points $e_i$ are distinct, and the $Y_i'$ are pairwise disjoint, so a point of $E$ lies on at most one strict transform and a point outside $E$ lies on at most one curve; every $e_i$ is a transverse intersection of $E$ with $Y_i'$ by step 2.1. The only intersections not present before the blowup are these points $e_i$: the original curves met one another only at $p$, and each such intersection has been separated, while outside $E$ the blowup creates no new intersections because it is an isomorphism there [F4]. [F3, F4, step 2.1, step 4.1]

6.1 Therefore $Y_1',\dots,Y_s'$ meet $E$ at the $s$ distinct points $e_1,\dots,e_s$, no three support curves meet at a point of $S'$, the only new intersections are the transverse intersections $Y_i'\cap E=\{e_i\}$ at distinct points, and $Y_1'$ and $Y_2'$ are disjoint when $s=2$; this proves every clause of the statement. [step 3.1, step 4.1, step 5.1] ∎
