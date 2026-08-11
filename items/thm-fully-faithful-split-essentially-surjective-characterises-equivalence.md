---
id: thm-fully-faithful-split-essentially-surjective-characterises-equivalence
kind: theorem
title: "A functor is an equivalence exactly when it is fully faithful and split essentially surjective, without Choice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-equivalence-and-adjoint-equivalence-of-categories, def-full-faithful-and-essentially-surjective-functor, prop-fully-faithful-functors-reflect-isomorphisms]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "Ahrens, Kapulkin and Shulman, Univalent categories and the Rezk completion, section 6"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/2CF86322C8415DE832BE304B4DC04D09/S0960129514000486a.pdf/div-class-title-univalent-categories-and-the-rezk-completion-div.pdf"
pipeline_run: null
---

## Statement

A functor $F:\mathcal C\to\mathcal D$ is an equivalence exactly when it is fully
faithful and split essentially surjective. No choice principle is needed because
the splitting is part of the data.

## Facts & Assumptions

**Given:** A functor $F:\mathcal C\to\mathcal D$.

[L1] Equivalence and quasi-inverse data are defined in [[def-equivalence-and-adjoint-equivalence-of-categories]].

[L2] Fully faithful and split essentially surjective have the precise hom-bijection and specified-witness meanings in [[def-full-faithful-and-essentially-surjective-functor]].

[L3] A fully faithful functor reflects isomorphisms ([[prop-fully-faithful-functors-reflect-isomorphisms]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $F$ has quasi-inverse $G$, unit $\eta:1_{\mathcal C}\Rightarrow GF$, and counit $\varepsilon:FG\Rightarrow1_{\mathcal D}$. Then $D\mapsto(GD,\varepsilon_D)$ explicitly splits essential surjectivity. [given, L1, L2]

1.2 Conversely, assume $F$ is fully faithful and comes with objects $C_D$ and isomorphisms $\varepsilon_D:FC_D\to D$. Define $GD=C_D$, and for $u:D\to E$ define $G(u)$ as the unique morphism whose image under $F$ is $\varepsilon_E^{-1}u\varepsilon_D$; fullness gives existence and faithfulness gives uniqueness. [given, L2]

2.1 Naturality and invertibility of $\eta$ show faithfulness: if $Ff=Fg$, then $GFf=GFg$, so $\eta_B f=GFf\,\eta_A=GFg\,\eta_A=\eta_B g$ and $f=g$. [step 1.1, L1]

2.2 The defining equation makes $G(1_D)=1_{GD}$ and $G(vu)=G(v)G(u)$ after applying faithful $F$, so $G$ is a functor, and the same equation is precisely naturality of $\varepsilon:FG\Rightarrow1_{\mathcal D}$. [step 1.2, L2]

3.1 Put $\delta_A=\varepsilon_{FA}\circ F(\eta_A)$, an automorphism of $FA$. For $u:FA\to FB$, set $v=\delta_Bu\delta_A^{-1}$ and $h=\eta_B^{-1}G(v)\eta_A$; naturality of $\varepsilon$ gives $Fh=\delta_B^{-1}v\delta_A=u$, so $F$ is full. [step 1.1, step 2.1, L1, L2]

3.2 For each $A$, fullness gives a unique $\eta_A:A\to GFA$ with $F(\eta_A)=\varepsilon_{FA}^{-1}$; faithfulness and naturality of $\varepsilon$ make $\eta$ natural, and [L3] makes each $\eta_A$ an isomorphism because its image is. [step 2.2, L2, L3]

4.1 Thus $(F,G,\eta,\varepsilon)$ is equivalence data. The two constructions prove both directions without making any unrecorded selection. [step 1.1, step 2.1, step 3.1, step 3.2, L1] ∎
