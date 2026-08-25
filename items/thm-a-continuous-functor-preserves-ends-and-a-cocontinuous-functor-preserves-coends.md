---
id: thm-a-continuous-functor-preserves-ends-and-a-cocontinuous-functor-preserves-coends
kind: theorem
title: "A functor preserving twisted-arrow limits preserves ends, and dually for coends"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-an-end-is-a-limit-over-the-twisted-arrow-category, def-preservation-reflection-creation-continuity-and-cocontinuity, def-end-and-coend, def-twisted-arrow-category, def-small-locally-small-and-large-category]
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
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Theorem 1.2.7"
      url: "https://arxiv.org/pdf/1501.02503"
pipeline_run: null
---

## Statement

Let $T:\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$ be a functor and
let $F:\mathcal D\to\mathcal E$ be a functor.

**Ends.** If $F$ preserves $\operatorname{Tw}(\mathcal C)$-limits
([[def-preservation-reflection-creation-continuity-and-cocontinuity]],
[[def-twisted-arrow-category]]) and $(e,\omega)$ is an end of $T$
([[def-end-and-coend]]), then $(Fe,F\omega)$ is an end of $FT$; so a functor
preserving twisted-arrow limits preserves ends.

**Coends.** If $F$ preserves $\operatorname{Tw}(\mathcal C)^{\mathrm{op}}$-colimits
and $(q,\rho)$ is a coend of $T$, then $(Fq,F\rho)$ is a coend of $FT$.

**Small index.** If in addition $\mathcal C$ is small
([[def-small-locally-small-and-large-category]]), then every continuous $F$
satisfies the first hypothesis and every cocontinuous $F$ the second, so a
continuous functor carries an end over a small index category to an end and a
cocontinuous functor carries such a coend to a coend.

## Facts & Assumptions

**Given:** Functors $T:\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$ and $F:\mathcal D\to\mathcal E$, and an end or a coend of $T$ where one is assumed.

[L1] The wedges over $T$ are exactly the cones over $T\pi$, by $\xi_f=T(1_c,f)\omega_c$ and $\omega_c=\xi_{1_c}$, so an end is the limit over the twisted arrow category; dually the cowedges under $T$ are the cocones under $T\pi^{\mathrm{sw}}$ and a coend is a colimit over $\operatorname{Tw}(\mathcal C)^{\mathrm{op}}$ ([[thm-an-end-is-a-limit-over-the-twisted-arrow-category]]).

[F1] $F$ **preserves $\mathcal J$-limits** if the image under $F$ of every limiting cone over $D:\mathcal J\to\mathcal C$ is limiting over $FD$; the terms for colimits use cocones ([[def-preservation-reflection-creation-continuity-and-cocontinuity]]).

[F2] A functor is **continuous** if it preserves all small limits and **cocontinuous** if it preserves all small colimits ([[def-preservation-reflection-creation-continuity-and-cocontinuity]]).

[F3] The objects of $\operatorname{Tw}(\mathcal C)$ are the morphisms of $\mathcal C$, and a morphism $f\to g$ is a pair of morphisms of $\mathcal C$ subject to one equation ([[def-twisted-arrow-category]]).

[F4] An end of $T$ is a terminal object of the category of wedges over $T$ and a coend an initial object of the category of cowedges under $T$; in short, an end is a terminal wedge and a coend an initial cowedge ([[def-end-and-coend]]).

[F5] A category is **small** when both $\operatorname{Ob}(\mathcal C)$ and $\operatorname{Mor}(\mathcal C)$ are sets. ([[def-small-locally-small-and-large-category]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the wedge $\omega$ over $T$ with vertex $e$ corresponds to the cone $\xi$ over $T\pi$ with $\xi_f=T(1_c,f)\circ\omega_c$, and $(e,\omega)$ is an end of $T$ exactly when $(e,\xi)$ is a limiting cone; dually the cowedge $\rho$ corresponds to the cocone $\zeta$ under $T\pi^{\mathrm{sw}}$ with $\zeta_f=\rho_c\circ T(f,1_c)$, and $(q,\rho)$ is a coend exactly when $(q,\zeta)$ is a colimiting cocone. [F3, F4, L1]

2.1 Suppose $F$ preserves $\operatorname{Tw}(\mathcal C)$-limits. Then $(Fe,F\xi)$ is a limiting cone over $FT\pi$. Functoriality gives $F\xi_f=F(T(1_c,f))\circ F\omega_c=(FT)(1_c,f)\circ F\omega_c$, so $F\xi$ is exactly the cone that [L1] attaches to the family $F\omega$, which is therefore a wedge over $FT$; being limiting, it makes $(Fe,F\omega)$ an end of $FT$. [F1, L1, step 1.1]

2.2 Suppose $F$ preserves $\operatorname{Tw}(\mathcal C)^{\mathrm{op}}$-colimits. Then $(Fq,F\zeta)$ is a colimiting cocone under $FT\pi^{\mathrm{sw}}$, and $F\zeta_f=F\rho_c\circ(FT)(f,1_c)$ is the cocone that [L1] attaches to $F\rho$; so $F\rho$ is a cowedge under $FT$ and $(Fq,F\rho)$ is a coend of $FT$. [F1, L1, step 1.1]

3.1 If $\mathcal C$ is small then $\operatorname{Tw}(\mathcal C)$ is small, since its objects are the morphisms of $\mathcal C$ and its morphisms form a subclass of a fourfold product of $\operatorname{Mor}(\mathcal C)$ with itself; the opposite of a small category is small. So a continuous $F$, which by [F2] preserves all small limits, preserves $\operatorname{Tw}(\mathcal C)$-limits and step 2.1 applies, and a cocontinuous $F$ preserves $\operatorname{Tw}(\mathcal C)^{\mathrm{op}}$-colimits and step 2.2 applies. [F2, F3, F5, L1, step 2.1, step 2.2] ∎

## Remarks

The hypothesis is stated at the strength the proof uses, preservation of limits indexed by $\operatorname{Tw}(\mathcal C)$, and not as continuity: in this library a continuous functor is one preserving all **small** limits, and $\operatorname{Tw}(\mathcal C)$ is small only when $\mathcal C$ is. A blanket claim that continuous functors preserve all ends would be false for a large index category, and no such claim is made here.

Dropping the hypothesis altogether is not possible: [[fs-every-functor-preserves-ends]] exhibits two finite witnesses, both monotone maps of finite posets, that carry an end to something other than the end of the composite.
