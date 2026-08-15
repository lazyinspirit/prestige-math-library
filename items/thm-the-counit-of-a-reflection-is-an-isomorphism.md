---
id: thm-the-counit-of-a-reflection-is-an-isomorphism
kind: theorem
title: "The counit of a reflection is an isomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-reflective-subcategory-and-reflector, def-full-faithful-and-essentially-surjective-functor, def-adjunction-by-unit-counit-and-triangle-identities, def-isomorphism-groupoid-and-connected-category]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
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

[L1] A full inclusion is fully faithful: every map $I(A)\to I(B)$ has a unique preimage under $I$ ([[def-full-faithful-and-essentially-surjective-functor]]).

[L2] The triangle identities give $I(\varepsilon_A)\circ\eta_{I(A)}=1_{I(A)}$ and $\varepsilon_{R(C)}\circ R(\eta_C)=1_{R(C)}$ ([[def-adjunction-by-unit-counit-and-triangle-identities]]).

[L3] A morphism is an isomorphism when it has a two-sided inverse ([[def-isomorphism-groupoid-and-connected-category]]).

## Proof

**Proof technique:** direct.

1.1 By fullness in [L1], there is a unique $\delta_A:A\to RI(A)$ with $I(\delta_A)=\eta_{I(A)}$. The first triangle identity in [L2] and faithfulness give $\varepsilon_A\circ\delta_A=1_A$. [L1, L2]

2.1 Naturality of the counit at $\delta_A$ gives $\delta_A\circ\varepsilon_A=\varepsilon_{RI(A)}\circ RI(\delta_A)$. Since $I(\delta_A)=\eta_{I(A)}$, functoriality gives $RI(\delta_A)=R(\eta_{I(A)})$, and the second triangle identity in [L2] makes the right side $1_{RI(A)}$. Thus $\delta_A$ is a two-sided inverse of $\varepsilon_A$, so [L3] proves the claim. [step 1.1, L2, L3] ∎
