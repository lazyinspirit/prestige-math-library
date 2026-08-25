---
id: ex-the-twisted-arrow-category-of-the-walking-arrow
kind: example
title: "The twisted arrow category of the walking arrow is a cospan"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-twisted-arrow-category, thm-an-end-is-a-limit-over-the-twisted-arrow-category, def-pullbacks-and-pushouts, def-limit-and-colimit-of-a-diagram]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Exercise 1.7"
      url: "https://arxiv.org/pdf/1501.02503"
pipeline_run: null
---

## Example

Let $\mathcal C$ be the walking arrow, with objects $0$ and $1$ and one
non-identity morphism $u:0\to1$. Then $\operatorname{Tw}(\mathcal C)$
([[def-twisted-arrow-category]]) has the three objects $1_0$, $1_1$ and $u$,
and exactly two non-identity morphisms, one $1_0\to u$ and one $1_1\to u$; so
it is a cospan.

Consequently, for any functor
$T:\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$, the end of $T$ is the
pullback ([[def-pullbacks-and-pushouts]]) of

$$T(0,0)\xrightarrow{\;T(1_0,u)\;}T(0,1)\xleftarrow{\;T(u,1_1)\;}T(1,1),$$

whenever that pullback exists.

## Facts & Assumptions

**Given:** The walking arrow $\mathcal C$ and an arbitrary functor $T$ on $\mathcal C^{\mathrm{op}}\times\mathcal C$.

[F1] The objects of $\operatorname{Tw}(\mathcal C)$ are the morphisms of $\mathcal C$, and for $f:c\to c'$ and $g:d\to d'$ a morphism $f\to g$ is a pair $(a,b)$ with $bfa=g$, where $a:d\to c$ and $b:c'\to d'$; the projection sends $f:c\to c'$ to $(c,c')$ and $(a,b)$ to $(a,b)$ ([[def-twisted-arrow-category]]).

[F2] For a cospan $X\xrightarrow f Z\xleftarrow gY$, a **pullback** is its limit, consisting of an object with two projections whose composites with $f$ and $g$ agree and through which every compatible pair factors by a unique $u:W\to X\times_ZY$ with $pu=a$ and $qu=b$. ([[def-pullbacks-and-pushouts]]).

[F3] A limit of a diagram is a terminal cone ([[def-limit-and-colimit-of-a-diagram]]).

[L1] The wedges over $T$ are exactly the cones over $T\pi$, so an end is the limit over the twisted arrow category ([[thm-an-end-is-a-limit-over-the-twisted-arrow-category]]).

## Verification

**Proof technique:** direct.

1.1 The objects of $\operatorname{Tw}(\mathcal C)$ are the three morphisms $1_0$, $1_1$ and $u$ of $\mathcal C$, by [F1]. [F1, given]

2.1 The morphisms are enumerated by testing, for each ordered pair of objects, whether the required factorisation exists. A morphism $1_0\to u$ needs $a:0\to0$ and $b:0\to1$ with $b\circ 1_0\circ a=u$, and the pair $(1_0,u)$ works and is the only one available. A morphism $1_1\to u$ needs $a:0\to1$ and $b:1\to1$ with $b\circ 1_1\circ a=u$, and the pair $(u,1_1)$ works and is the only one available. A morphism out of $u$ to either identity needs a component in $\mathcal C(1,0)$, which is empty, so there is none; a morphism $1_0\to1_1$ needs a component in $\mathcal C(1,0)$ as well, and a morphism $1_1\to1_0$ needs $b:1\to0$. So apart from identities there are exactly the two morphisms named, both into $u$, and $\operatorname{Tw}(\mathcal C)$ is a cospan. [F1, step 1.1]

3.1 The composite $T\pi$ takes the value $T(0,0)$ at $1_0$, the value $T(1,1)$ at $1_1$ and the value $T(0,1)$ at $u$, and it sends the morphism $(1_0,u)$ to $T(1_0,u)$ and the morphism $(u,1_1)$ to $T(u,1_1)$. By [L1] and [F3] the end of $T$ is the limit of that diagram, which by [F2] is exactly the pullback of the displayed cospan. [F1, F2, F3, L1, step 2.1] ∎

## Remarks

That no morphism runs out of $u$ is the whole reason the shape is a cospan rather than something larger: a morphism out of $u$ would need to move its codomain backwards, and the walking arrow has no morphism $1\to0$.

Read on the hom-bifunctor of the walking arrow, the pullback of step 3.1 is a pullback of one-element sets and has one element; that is consistent with the end of the hom-bifunctor being the set of natural endomorphisms of the identity functor, of which the walking arrow has only the identity.
