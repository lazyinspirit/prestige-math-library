---
id: fs-every-functor-preserves-ends
kind: false-statement
title: "FALSE: every functor preserves the ends that exist in its domain"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-end-and-coend, prop-the-end-of-a-functor-mute-in-its-first-variable-is-the-limit-of-that-functor, thm-a-continuous-functor-preserves-ends-and-a-cocontinuous-functor-preserves-coends, def-preservation-reflection-creation-continuity-and-cocontinuity, prop-preorders-as-categories-and-monotone-maps-as-functors, def-preorder, def-products-and-coproducts, def-subcategory-and-full-subcategory, def-limit-and-colimit-of-a-diagram]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Theorem 1.2.7"
      url: "https://arxiv.org/pdf/1501.02503"
pipeline_run: null
---

## Statement

**False claim:** if $T:\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$
has an end and $G:\mathcal D\to\mathcal E$ is any functor, then $G$ carries
that end to an end of $GT$ ([[def-end-and-coend]],
[[def-preservation-reflection-creation-continuity-and-cocontinuity]]).

## Facts & Assumptions

**Given:** Two witnesses built from finite posets, regarded as categories, with monotone maps as functors.

[F5] A **preorder** is a reflexive transitive relation, a map between preorders is **monotone** when it respects the order, and every partial order is a preorder ([[def-preorder]]).

[L2] A preorder determines a category with at most one morphism between any two objects, and functors between such categories are exactly monotone maps ([[prop-preorders-as-categories-and-monotone-maps-as-functors]]).

[F2] A product of $(A_i)_{i\in I}$ is an object $P$ with projections $p_i$ such that every family $f_i:X\to A_i$ has a unique pairing $\langle f_i\rangle_{i\in I}:X\to P, \qquad p_i\langle f_i\rangle=f_i\quad(i\in I)$ ([[def-products-and-coproducts]]).

[F6] A limit of a diagram is a terminal cone: explicitly, for every cone $(X,\xi)$ there exists a unique morphism $u:X\to L$ such that $\lambda_j u=\xi_j$ for every $j$; a product is the limit of a family on a discrete index category ([[def-limit-and-colimit-of-a-diagram]]).

[F3] A subcategory is **full** when $\mathcal A(A,B)=\mathcal C(A,B)$ for every pair of its objects, so a full subcategory is determined entirely by its objects ([[def-subcategory-and-full-subcategory]]).

[F4] $G$ **preserves $\mathcal J$-limits** if the image under $G$ of every limiting cone over $D:\mathcal J\to\mathcal C$ is limiting over $GD$ ([[def-preservation-reflection-creation-continuity-and-cocontinuity]]).

[F1] An end of $T$ is a terminal object of the category of wedges over $T$ and a coend an initial object of the category of cowedges under $T$; in short, an end is a terminal wedge and a coend an initial cowedge ([[def-end-and-coend]]).

[L1] For $F:\mathcal C\to\mathcal D$ and $F'(c_1,c_2):=F(c_2)$, the end of a functor made mute in its contravariant variable is the ordinary limit of that functor: $\int_cF'(c,c)=\lim F$ ([[prop-the-end-of-a-functor-mute-in-its-first-variable-is-the-limit-of-that-functor]]).

[L3] If $G$ preserves $\operatorname{Tw}(\mathcal C)$-limits and $T$ has an end, then $G$ of that end is an end of $GT$, so a functor preserving twisted-arrow limits preserves ends ([[thm-a-continuous-functor-preserves-ends-and-a-cocontinuous-functor-preserves-coends]]).

## Refutation

**Proof technique:** direct.

1.1 Regard a poset as a category by [L2] and [F5], so that a morphism $a\to b$ exists exactly when $a\le b$ and monotone maps are exactly the functors. Let $\mathcal C$ be the discrete category on two objects and let $F:\mathcal C\to P$ pick out two elements $x$ and $y$ of a poset $P$. By [F2] and [F6] a product of $x$ and $y$ in $P$ is an element below both through which every element below both factors, that is a greatest lower bound; and by [L1] that product is the end of the mute functor $F'$ on $\mathcal C^{\mathrm{op}}\times\mathcal C$, since $F'$ has the same limit. [F1, F2, F5, F6, L1, L2, construct]

2.1 First witness. Let $P$ be the four-element poset $\{\bot,x,y,\top\}$ with $\bot<x<\top$, $\bot<y<\top$ and $x,y$ incomparable, and let $Q$ be the two-element chain $\{0<1\}$. The map $\phi$ with $\phi(\bot)=0$ and $\phi(x)=\phi(y)=\phi(\top)=1$ is monotone, hence a functor by [L2]. The greatest lower bound of $x$ and $y$ in $P$ is $\bot$, so by step 1.1 the end exists and is $\bot$; but the greatest lower bound of $\phi(x)=1$ and $\phi(y)=1$ in $Q$ is $1$, while $\phi(\bot)=0$. So $\phi$ carries the end to an element that is not the end of the composite, and by [F4] it does not preserve it. [F4, L2, step 1.1]

2.2 Second witness, with a full and faithful functor. Let $P'$ be the four-element poset $\{\bot,m,x,y\}$ with $\bot<m$, $m<x$, $m<y$ and $x,y$ incomparable, so that the greatest lower bound of $x$ and $y$ in $P'$ is $m$. Let $Q'$ be the full subposet on $\{\bot,x,y\}$, which by [F3] is a full subcategory, and in which the greatest lower bound of $x$ and $y$ is $\bot$. The inclusion $Q'\to P'$ is monotone, hence a functor, and it carries the end $\bot$ computed in $Q'$ to $\bot$, which is not the end $m$ computed in $P'$. [F3, F4, L2, step 1.1]

3.1 Each witness refutes the displayed claim, and neither uses anything infinite: both posets have four elements and every check is a comparison of two named elements. What is true is [L3]: a functor that preserves $\operatorname{Tw}(\mathcal C)$-limits preserves the ends indexed by $\mathcal C$, and a right adjoint has that property for every $\mathcal C$. Neither witness is a right adjoint. [F1, L3, step 2.1, step 2.2] ∎

## Remarks

The two witnesses fail in opposite directions and that is deliberate. In the first the image of the end is strictly below the end of the image; in the second it is strictly below as well, but the functor is a full and faithful inclusion, so fullness and faithfulness are not what is missing. What is missing in both cases is a hypothesis about limits, and only that.

A poset is the cheapest place to see the failure because a limit there is an order-theoretic infimum and a functor is a monotone map, so the whole question becomes whether a monotone map carries greatest lower bounds to greatest lower bounds. It plainly need not.
