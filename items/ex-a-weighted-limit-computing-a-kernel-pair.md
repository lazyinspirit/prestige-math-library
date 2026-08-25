---
id: ex-a-weighted-limit-computing-a-kernel-pair
kind: example
title: "A weighted limit computing a kernel pair"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-set-weighted-limit-and-weighted-colimit, prop-a-weighted-limit-in-set-is-the-set-of-natural-transformations-from-the-weight, thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements, def-category-of-elements, def-pullbacks-and-pushouts, def-hom-functors-and-hom-bifunctor, prop-sets-and-functions-form-category-set, def-natural-transformation]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "E. Riehl, Categorical Homotopy Theory, Examples 7.1.2 and 7.1.16"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
pipeline_run: null
---

## Example

Let $\mathcal J$ be the walking arrow, with objects $0$ and $1$ and one
non-identity morphism $u:0\to1$, let $F:\mathcal J\to\mathbf{Set}$ be any
diagram ([[prop-sets-and-functions-form-category-set]]) and let
$W:\mathcal J\to\mathbf{Set}$ be the weight with $W(0)=\{p,q\}$, $W(1)=\{\ast\}$
and $W(u)$ the only function between them.

Then the weighted limit
([[def-set-weighted-limit-and-weighted-colimit]]) is the kernel pair of
$F(u)$, that is the pullback of $F(u)$ along itself
([[def-pullbacks-and-pushouts]]):

$$\{W,F\}=F(0)\times_{F(1)}F(0)=\bigl\{(s,t)\in F(0)\times F(0)\;:\;F(u)(s)=F(u)(t)\bigr\}.$$

## Facts & Assumptions

**Given:** The walking arrow $\mathcal J$, a diagram $F:\mathcal J\to\mathbf{Set}$ and the two-element weight $W$ displayed above.

[F4] Sets as objects and functions as morphisms form a large locally small category $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

[F5] A natural transformation $\alpha:F\Rightarrow G$ is a family $\alpha_A:FA\to GA$ such that every $f:A\to B$ satisfies the naturality equation $Gf\circ\alpha_A=\alpha_B\circ Ff$ ([[def-natural-transformation]]).

[F3] The covariant hom-assignment sends $u:b\to c$ to $u_*:\mathcal C(a,b)\longrightarrow\mathcal C(a,c),\qquad f\longmapsto u\circ f$ ([[def-hom-functors-and-hom-bifunctor]]).

[F1] A weighted limit $\{W,F\}$ is an object that represents the functor sending an object to the set of natural transformations from the weight ([[def-set-weighted-limit-and-weighted-colimit]]).

[F6] The category of elements $\int G$ has objects $(c,x)$ with $c\in\mathcal C$ and $x\in G(c)$; and a morphism $(c,x)\to(d,y)$ given by a morphism $f:c\to d$ in $\mathcal C$ satisfying $G(f)(x)=y$ ([[def-category-of-elements]]).

[F2] For a cospan $X\xrightarrow f Z\xleftarrow gY$, a **pullback** is its limit, an object with projections $p,q$ satisfying $fp=gq$ through which every compatible pair factors uniquely ([[def-pullbacks-and-pushouts]]).

[L1] For a small $\mathcal J$ and set-valued $W$ and $D$, a weighted limit of a set-valued diagram is the set of natural transformations from the weight ([[prop-a-weighted-limit-in-set-is-the-set-of-natural-transformations-from-the-weight]]).

[L2] A weighted limit is an ordinary limit over the category of elements of the weight, and a weighted colimit an ordinary colimit over it ([[thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements]]).

## Verification

**Proof technique:** direct.

1.1 By [L1] the weighted limit is the set of natural transformations $W\Rightarrow F$. By [F5] such a transformation is a pair of functions $\alpha_0:\{p,q\}\to F(0)$ and $\alpha_1:\{\ast\}\to F(1)$ whose naturality equation at $u$ reads $F(u)\circ\alpha_0=\alpha_1\circ W(u)$ as functions $\{p,q\}\to F(1)$; the right-hand side is constant at $\alpha_1(\ast)$, so the equation says $F(u)(\alpha_0(p))=\alpha_1(\ast)=F(u)(\alpha_0(q))$. [F1, F3, F4, F5, L1]

2.1 So a natural transformation is exactly a pair $(s,t):=(\alpha_0(p),\alpha_0(q))$ of elements of $F(0)$ with $F(u)(s)=F(u)(t)$, the remaining datum $\alpha_1(\ast)$ being determined as their common image. That set is the displayed pullback of $F(u)$ along itself, and by [F2] it carries the two projections and the universal property of a pullback. [F2, F5, step 1.1]

3.1 The same answer comes from the category of elements. By [F6] the objects of $\int W$ are $(0,p)$, $(0,q)$ and $(1,\ast)$, and its non-identity morphisms are the two arising from $u$, one $(0,p)\to(1,\ast)$ and one $(0,q)\to(1,\ast)$, since $W(u)$ sends both $p$ and $q$ to $\ast$; so $\int W$ is a cospan. By [L2] the weighted limit is the limit of $F$ composed with the projection, which is the limit of $F(0)\to F(1)\leftarrow F(0)$, the pullback again. [F2, F6, L2, step 2.1] ∎

## Remarks

The weight duplicates the object $0$ of the index category, one copy for each of its two elements, and it is that duplication that turns the ordinary limit of $F$, which is $F(0)$, into a pullback of $F(u)$ along itself. The number of copies is exactly the number of elements of the weight at that object.

Nothing about $F$ is used beyond its being a diagram of sets on the walking arrow. In particular the same weight computes the kernel pair of any function, and it computes the ordinary limit only when $F(u)$ is injective, in which case the pullback is the diagonal.
