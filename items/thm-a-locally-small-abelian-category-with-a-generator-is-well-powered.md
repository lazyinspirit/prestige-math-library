---
id: thm-a-locally-small-abelian-category-with-a-generator-is-well-powered
kind: theorem
title: "An AB3 locally small abelian category with a generator is well-powered"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-generator-and-cogenerator-of-a-category, thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree, def-well-powered-and-co-well-powered-category]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Carlos E. Parra, Manuel Saorin, and Simone Virili, Lemma 2.7(2)"
      url: "https://arxiv.org/pdf/2103.14159"
pipeline_run: frontier-22
---

## Statement

Every locally small abelian category satisfying AB3 and having a generator is
well-powered.

## Facts & Assumptions

**Given:** A locally small abelian category $\mathcal A$ satisfying AB3 and a generator $G$.

[L1] In AB3, the canonical coproduct map from copies of a generator onto an object is epic ([[thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree]]).

[L2] Well-powered means that each object admits a set of monomorphisms representing all of its subobject classes ([[def-well-powered-and-co-well-powered-category]]).

[L3] A generator is an object in the sense of [[def-generator-and-cogenerator-of-a-category]].

## Proof

**Proof technique:** direct.

1.1 Fix an object $A$. For each subobject $m:B\rightarrowtail A$, let $S_m\subseteq\mathcal A(G,A)$ be the subset of those maps $u:G\to A$ that factor through $m$. Because $\mathcal A$ is locally small, $\mathcal A(G,A)$ is a set, so its power set $\mathcal P(\mathcal A(G,A))$ is a set as well. [L3, construct]

2.1 For each subset $S\subseteq\mathcal A(G,A)$, use AB3 and [L1] to form the canonical map $$e_S:\coprod_{u\in S} G\to A$$ and let $i_S:I_S\rightarrowtail A$ be its image. If $m:B\rightarrowtail A$ is any subobject, then [L1] applied to $B$ gives an epic canonical map $$\coprod_{v\in\mathcal A(G,B)} G \twoheadrightarrow B.$$ Composing with $m$ produces exactly the family of maps in $S_m$, so the image of the resulting composite is $m$. Hence $i_{S_m}$ represents the same subobject as $m$. [L1, step 1.1, construct]

3.1 The set of monomorphisms $\{\,i_S:I_S\rightarrowtail A \mid S\subseteq\mathcal A(G,A)\,\}$ therefore contains a representative of every subobject class of $A$. By [L2], $\mathcal A$ is well-powered. [L2, step 2.1] ∎
