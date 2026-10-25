---
id: thm-fullness-and-faithfulness-of-a-right-adjoint-read-off-the-counit
kind: theorem
title: 'Fullness and faithfulness of a right adjoint are detected by its counit'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-adjunction-hom-set-bijection-under-local-smallness, def-full-faithful-and-essentially-surjective-functor, def-monomorphism-and-epimorphism, def-split-monomorphism-and-split-epimorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Lemma 4.6.11'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Saunders Mac Lane, Categories for the Working Mathematician, 2nd ed., Chapter IV.3'
      url: 'https://doi.org/10.1007/978-1-4757-4721-8'
pipeline_run: null
---

## Statement

Let $F\dashv G:\mathcal D\to\mathcal C$ be an adjunction between locally small categories, with counit $\varepsilon:FG\Rightarrow1_{\mathcal D}$.

1. $G$ is faithful if and only if every $\varepsilon_d$ is an epimorphism.
2. $G$ is full if and only if every $\varepsilon_d$ is a split monomorphism.
3. $G$ is fully faithful if and only if $\varepsilon$ is a natural isomorphism.

Dually, $F$ is faithful exactly when every unit component is monic, full exactly when every unit component is split epic, and fully faithful exactly when the unit is a natural isomorphism.

## Facts & Assumptions

**Given:** The adjunction in the Statement, with unit $\eta$ and counit $\varepsilon$.

[F1] A functor is faithful when every induced hom-set map is injective, full when every such map is surjective, and fully faithful when every such map is bijective ([[def-full-faithful-and-essentially-surjective-functor]]).

[F2] A morphism $e:A\to B$ is epic when $re=se$ implies $r=s$ for every parallel pair $r,s:B\to X$ ([[def-monomorphism-and-epimorphism]]).

[F3] A morphism $e:A\to B$ is a split monomorphism when there is $r:B\to A$ with $r\circ e=1_A$ ([[def-split-monomorphism-and-split-epimorphism]]).

[L1] Transposition gives natural bijections $\mathcal D(Fc,d)\cong\mathcal C(c,Gd)$ ([[thm-the-adjunction-hom-set-bijection-under-local-smallness]]).

## Proof

**Proof technique:** direct.

1.1 If $G$ is faithful and $r\varepsilon_d=s\varepsilon_d$, then $G(r)G(\varepsilon_d)=G(s)G(\varepsilon_d)$; composing with $\eta_{Gd}$ and using the triangle identity gives $G(r)=G(s)$, hence $r=s$. Thus each $\varepsilon_d$ is epic. [F1, F2, L1]

1.2 Conversely, if every $\varepsilon_d$ is epic and $G(r)=G(s)$, naturality gives $r\varepsilon_d=\varepsilon_eFG(r)=\varepsilon_eFG(s)=s\varepsilon_d$, so $r=s$. Hence $G$ is faithful. [F1, F2]

1.3 If $G$ is full, lift $\eta_{Gd}:Gd\to GFGd$ to $q_d:d\to FGd$ with $G(q_d)=\eta_{Gd}$. Naturality of $\varepsilon$ and the first triangle identity give $q_d\varepsilon_d=\varepsilon_{FGd}FG(q_d)=\varepsilon_{FGd}F(\eta_{Gd})=1_{FGd}$, so $\varepsilon_d$ is split monic. [F1, F3]

2.1 Conversely, choose $q_d$ with $q_d\varepsilon_d=1_{FGd}$. Then $G(q_d)$ is the inverse of $G(\varepsilon_d)$, whose right inverse is $\eta_{Gd}$ by the triangle identity, so $G(q_d)=\eta_{Gd}$. For $h:Gd\to Ge$, the morphism $r:=\varepsilon_eF(h)q_d:d\to e$ satisfies $G(r)=G(\varepsilon_e)GF(h)\eta_{Gd}=h$, using naturality of $\eta$ and the triangle identity. Thus $G$ is full. [F1, F3, L1, step 1.3]

3.1 A fully faithful $G$ makes $\varepsilon_d$ both epic and split monic by steps 1.1 and 1.3; if $q_d\varepsilon_d=1$, epicity gives $\varepsilon_dq_d=1$, so $\varepsilon_d$ is an isomorphism. Conversely, an invertible counit is epic and split monic, so steps 1.2 and 2.1 make $G$ fully faithful. [step 1.1, step 1.2, step 1.3, step 2.1, F2, F3]

4.1 Passing to opposite categories exchanges the counit with the unit, faithful with faithful, epic with monic, and split monic with split epic, proving the dual assertions. [step 3.1] ∎
