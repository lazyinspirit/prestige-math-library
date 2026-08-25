---
id: cor-the-hom-functor-turns-a-coend-into-an-end-and-preserves-ends
kind: corollary
title: "The hom-functor turns a coend into an end and carries an end to an end"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-a-continuous-functor-preserves-ends-and-a-cocontinuous-functor-preserves-coends, thm-an-end-is-a-limit-over-the-twisted-arrow-category, cor-hom-functors-are-continuous-and-send-colimits-to-limits, def-hom-functors-and-hom-bifunctor, def-end-and-coend, def-twisted-arrow-category, def-opposite-category, def-small-locally-small-and-large-category]
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
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Corollary 1.2.8"
      url: "https://arxiv.org/pdf/1501.02503"
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory (TAC Reprints 10), (2.3)"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be small ([[def-small-locally-small-and-large-category]]), let
$\mathcal D$ be locally small, let
$T:\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$ be a functor and let
$X$ be an object of $\mathcal D$ ([[def-hom-functors-and-hom-bifunctor]]).

**From a coend to an end.** Write
$H:\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathbf{Set}$ for the functor
$H(a,b):=\mathcal D(T(b,a),X)$, whose action on a morphism $(g,h)$ of the
product category is precomposition with $T(h,g)$, so that
$H(c,c)=\mathcal D(T(c,c),X)$. If $T$ has a coend
([[def-end-and-coend]]), then the hom-functor turns a coend into an end: $H$
has an end and

$$\mathcal D\Bigl(\int^{c}T(c,c),\,X\Bigr)\;\cong\;\int_{c}\mathcal D\bigl(T(c,c),X\bigr).$$

**From an end to an end.** If $T$ has an end, then $\mathcal D(X,-)$ carries it
to an end of $\mathcal D(X,T(-,-))$, so

$$\mathcal D\Bigl(X,\,\int_{c}T(c,c)\Bigr)\;\cong\;\int_{c}\mathcal D\bigl(X,T(c,c)\bigr).$$

## Facts & Assumptions

**Given:** A small $\mathcal C$, a locally small $\mathcal D$, a functor $T$ on $\mathcal C^{\mathrm{op}}\times\mathcal C$ with values in $\mathcal D$, and an object $X$ of $\mathcal D$.

[F5] A category is **small** when both $\operatorname{Ob}(\mathcal C)$ and $\operatorname{Mor}(\mathcal C)$ are sets. ([[def-small-locally-small-and-large-category]]).

[F1] The objects of $\operatorname{Tw}(\mathcal C)$ are the morphisms of $\mathcal C$, and a morphism $f\to g$ is a pair $(a,b)$ of morphisms of $\mathcal C$ with $bfa=g$ ([[def-twisted-arrow-category]]).

[F2] The opposite category has the same objects and reverses every morphism, $\mathcal C^{\mathrm{op}}(A,B)=\mathcal C(B,A)$, and $(\mathcal C^{\mathrm{op}})^{\mathrm{op}}=\mathcal C$ strictly ([[def-opposite-category]]).

[F4] The hom-assignment sends $(a,b)$ to $\mathcal C(a,b)$, and a morphism of the product category consisting of $h:a'\to a$ and $u:b\to b'$ acts by $\mathcal C(h,u):\mathcal C(a,b)\longrightarrow\mathcal C(a',b'),\qquad f\longmapsto u\circ f\circ h$ ([[def-hom-functors-and-hom-bifunctor]]).

[L4] The wedges over a functor are exactly the cones over its composite with the twisted arrow projection, and the cowedges are the cocones under the composite with the swapped projection, so an end is the limit over the twisted arrow category and a coend a colimit over its opposite ([[thm-an-end-is-a-limit-over-the-twisted-arrow-category]]).

[L1] For every object $X$ of a locally small category and every small diagram $D$ with a colimit there is a natural bijection $\mathcal C(\operatorname*{colim}D,X) \cong\lim_{j\in\mathcal J^{\mathrm{op}}}\mathcal C(D(j),X).$ ([[cor-hom-functors-are-continuous-and-send-colimits-to-limits]]).

[L2] For every object $X$ of a locally small category $\mathcal C$, the covariant hom-functor $\mathcal C(X,-)$ preserves all small limits that exist ([[cor-hom-functors-are-continuous-and-send-colimits-to-limits]]).

[L3] If $F$ preserves $\operatorname{Tw}(\mathcal C)$-limits and $T$ has an end, then $F$ of that end is an end of $FT$, so a functor preserving twisted-arrow limits preserves ends ([[thm-a-continuous-functor-preserves-ends-and-a-cocontinuous-functor-preserves-coends]]).

[F3] An end of $T$ is a terminal object of the category of wedges over $T$ and a coend an initial object of the category of cowedges under $T$; in short, an end is a terminal wedge and a coend an initial cowedge ([[def-end-and-coend]]).

## Proof

**Proof technique:** direct.

1.1 Since $\mathcal C$ is small, $\operatorname{Tw}(\mathcal C)$ is small and so is its opposite, so the coend of $T$ is the colimit of a small diagram; and $(\operatorname{Tw}(\mathcal C)^{\mathrm{op}})^{\mathrm{op}}=\operatorname{Tw}(\mathcal C)$ strictly. Moreover $H$ is a functor, because precomposition with $T(h,g)$ is functorial in $(g,h)$ by the displayed action of [F4] read in $\mathcal D$, and for $f:c\to c'$ its composite with the twisted arrow projection has value $H(c,c')=\mathcal D(T(c',c),X)$, which is $\mathcal D$ applied to the value of the swapped projection at $f$. [F1, F2, F4, F5]

2.1 Apply [L1] to the small diagram whose colimit is the coend, indexed by $\operatorname{Tw}(\mathcal C)^{\mathrm{op}}$: it gives a bijection between $\mathcal D(\int^cT(c,c),X)$ and the limit over $\operatorname{Tw}(\mathcal C)$ of the diagram identified in step 1.1, which is the composite of $H$ with the twisted arrow projection. By [L4] read in the direction from limits to ends, that limit is an end of $H$, so $H$ has an end and the displayed bijection is the first assertion. [F2, F3, L1, L4, step 1.1]

3.1 For the second assertion, [L2] says $\mathcal D(X,-)$ preserves all small limits that exist, and $\operatorname{Tw}(\mathcal C)$-limits are small by step 1.1, so $\mathcal D(X,-)$ preserves them; by [L3] it therefore carries an end of $T$ to an end of $\mathcal D(X,T(-,-))$, which is the displayed bijection. [F3, L2, L3, step 1.1] ∎

## Remarks

The two clauses are not the same statement read twice. The covariant hom-functor is continuous and so preserves ends; the contravariant one turns colimits into limits, and so turns a coend into an end, changing the shape of the universal object rather than preserving it. Only the second clause is an instance of preservation.

Local smallness of $\mathcal D$ is what makes both right-hand sides $\mathbf{Set}$-valued, and smallness of $\mathcal C$ is what makes the diagram indexed by $\operatorname{Tw}(\mathcal C)$ small, which is the hypothesis the published statement about colimits carries. Neither can simply be dropped.
