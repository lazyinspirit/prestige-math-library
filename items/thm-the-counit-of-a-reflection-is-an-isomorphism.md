---
id: thm-the-counit-of-a-reflection-is-an-isomorphism
kind: theorem
title: "The counit of a reflection is an isomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-reflective-subcategory-and-reflector, def-full-faithful-and-essentially-surjective-functor, def-adjunction-by-unit-counit-and-triangle-identities, def-isomorphism-groupoid-and-connected-category, def-subcategory-and-full-subcategory]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, lemma 4.5.12"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Let $R:\mathcal C\to\mathcal A$ be a reflector onto a full subcategory, with inclusion $I:\mathcal A\to\mathcal C$, unit $\eta$, and counit $\varepsilon:RI\Rightarrow1_{\mathcal A}$. Then every component
$$\varepsilon_A:RI(A)\to A$$
is an isomorphism.

## Facts & Assumptions

**Given:** A reflection $R\dashv I$ as in [[def-reflective-subcategory-and-reflector]] and an object $A\in\mathcal A$.

[L1] A functor $F$ is **faithful** when every induced $F_{A,B}:\mathcal C(A,B)\to\mathcal D(FA,FB)$ is injective, **full** when every $F_{A,B}$ is surjective, and **fully faithful** when every $F_{A,B}$ is bijective ([[def-full-faithful-and-essentially-surjective-functor]]).

[L4] A subcategory $\mathcal A$ of $\mathcal C$ is **full** when $\mathcal A(A,B)=\mathcal C(A,B)$ for every pair of its objects ([[def-subcategory-and-full-subcategory]]).

[L2] The triangle identities give $I(\varepsilon_A)\circ\eta_{I(A)}=1_{I(A)}$ and $\varepsilon_{R(C)}\circ R(\eta_C)=1_{R(C)}$ ([[def-adjunction-by-unit-counit-and-triangle-identities]]).

[L3] A morphism is an isomorphism when it has a two-sided inverse ([[def-isomorphism-groupoid-and-connected-category]]).

## Proof

**Proof technique:** direct.

1.1 Since $\mathcal A$ is a full subcategory of $\mathcal C$, [L4] gives $\mathcal A(A,B)=\mathcal C(A,B)=\mathcal C(I(A),I(B))$ for all $A,B\in\mathcal A$, and the inclusion $I$ acts on those hom-sets as the identity; so every $I_{A,B}$ is bijective and [L1] makes $I$ fully faithful. By its surjectivity there is $\delta_A:A\to RI(A)$ with $I(\delta_A)=\eta_{I(A)}$, and by its injectivity that $\delta_A$ is unique. The first triangle identity in [L2] gives $I(\varepsilon_A\circ\delta_A)=I(\varepsilon_A)\circ\eta_{I(A)}=1_{I(A)}=I(1_A)$, so faithfulness gives $\varepsilon_A\circ\delta_A=1_A$. [L1, L2, L4]

2.1 Naturality of the counit at $\delta_A$ gives $\delta_A\circ\varepsilon_A=\varepsilon_{RI(A)}\circ RI(\delta_A)$. Since $I(\delta_A)=\eta_{I(A)}$, functoriality gives $RI(\delta_A)=R(\eta_{I(A)})$, and the second triangle identity in [L2] makes the right side $1_{RI(A)}$. Thus $\delta_A$ is a two-sided inverse of $\varepsilon_A$, so [L3] proves the claim. [step 1.1, L2, L3] ∎
