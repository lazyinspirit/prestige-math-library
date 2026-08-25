---
id: cor-a-right-adjoint-preserves-ends-and-a-left-adjoint-preserves-coends
kind: corollary
title: "A right adjoint preserves ends and a left adjoint preserves coends"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-a-continuous-functor-preserves-ends-and-a-cocontinuous-functor-preserves-coends, thm-right-adjoints-preserve-limits, cor-left-adjoints-preserve-colimits, def-adjunction-by-unit-counit-and-triangle-identities, def-end-and-coend]
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
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Theorem 1.2.7"
      url: "https://arxiv.org/pdf/1501.02503"
pipeline_run: null
---

## Statement

Let $T:\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$ be a functor and
let $F\dashv G$ be an adjunction with $F:\mathcal D'\to\mathcal D$ and
$G:\mathcal D\to\mathcal D'$
([[def-adjunction-by-unit-counit-and-triangle-identities]]).

If $T$ has an end ([[def-end-and-coend]]), then $G$ carries it to an end of
$GT$. If $T$ has a coend and $H\dashv K$ is an adjunction with
$H:\mathcal D\to\mathcal E$, then $H$ carries that coend to a coend of $HT$.

No smallness hypothesis on $\mathcal C$ is imposed, because the published
preservation theorem imposes none: it applies at every indexing category for
which the diagram and cone categories are legitimate, and
$\operatorname{Tw}(\mathcal C)$ is one such whenever $T\pi$ is a diagram at all.

## Facts & Assumptions

**Given:** A functor $T$ on $\mathcal C^{\mathrm{op}}\times\mathcal C$ and an adjunction whose right or left half is applied to it.

[F1] An adjunction $F\dashv G$ consists of functors $F,G$ with unit and counit satisfying the triangle identities $(\varepsilon F)\circ(F\eta)=1_F,\qquad (G\varepsilon)\circ(\eta G)=1_G.$ The direction $F\dashv G$ means that $F$ is left adjoint to $G$ and $G$ is right adjoint to $F$ ([[def-adjunction-by-unit-counit-and-triangle-identities]]).

[L2] If a diagram $D:\mathcal J\to\mathcal D$ has a limit $(L,\lambda)$ and $F\dashv G$, then $(GL,G\lambda)$ is a limit of $GD$. Thus $G$ preserves every limit that exists, for arbitrary indexing categories for which the displayed diagram and cone categories are legitimate. ([[thm-right-adjoints-preserve-limits]]).

[L3] If $F$ is a left adjoint and a diagram has a colimit, then applying $F$ to a colimiting cocone produces a colimit of the composite. Thus left adjoints preserve every colimit that exists. ([[cor-left-adjoints-preserve-colimits]]).

[L1] If $F$ preserves $\operatorname{Tw}(\mathcal C)$-limits and $T$ has an end, then $F$ of that end is an end of $FT$, so a functor preserving twisted-arrow limits preserves ends; dually a functor preserving $\operatorname{Tw}(\mathcal C)^{\mathrm{op}}$-colimits carries a coend to a coend ([[thm-a-continuous-functor-preserves-ends-and-a-cocontinuous-functor-preserves-coends]]).

[F2] An end of $T$ is a terminal object of the category of wedges over $T$ and a coend an initial object of the category of cowedges under $T$; in short, an end is a terminal wedge and a coend an initial cowedge ([[def-end-and-coend]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the functor $G$ of the adjunction $F\dashv G$ is a right adjoint, and by [L2] a right adjoint preserves every limit that exists, at arbitrary legitimate indexing categories. In particular it preserves $\operatorname{Tw}(\mathcal C)$-limits, and no size hypothesis on $\mathcal C$ is used to say so. [F1, L2]

2.1 So $G$ satisfies the hypothesis of [L1] at the indexing category $\operatorname{Tw}(\mathcal C)$, and therefore carries an end of $T$ to an end of $GT$. [F2, L1, L2, step 1.1]

3.1 Dually, by [L3] a left adjoint preserves every colimit that exists, hence preserves $\operatorname{Tw}(\mathcal C)^{\mathrm{op}}$-colimits, and by the coend clause of [L1] it carries a coend of $T$ to a coend of $HT$. [F2, L1, L3, step 1.1] ∎

## Remarks

The corollary is stated for a right adjoint and a left adjoint separately because the two halves of an adjunction do different things here: the right adjoint is the one that preserves the limit computing an end, and the left adjoint the one that preserves the colimit computing a coend. Applying the wrong half of an adjunction to the wrong universal object gives no information at all.

The hom-functor case is the one used most often below and is recorded separately as [[cor-the-hom-functor-turns-a-coend-into-an-end-and-preserves-ends]], because the covariant hom-functor turns a coend into an **end** rather than preserving a coend, and that change of shape is not an instance of the present corollary.
