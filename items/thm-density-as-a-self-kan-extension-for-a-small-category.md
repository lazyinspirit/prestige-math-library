---
id: thm-density-as-a-self-kan-extension-for-a-small-category
kind: theorem
title: "The Yoneda embedding is its own pointwise left Kan extension"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-density-for-a-small-category, thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions, cor-contravariant-yoneda-lemma, def-pointwise-kan-extension-by-the-comma-category-formula, def-yoneda-embedding, def-category-of-elements, def-small-locally-small-and-large-category, prop-size-of-functor-categories]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Theorem 6.5.10"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, Corollary 5.4.4"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be small, and let
$y:\mathcal C\to[\mathcal C^{\mathrm{op}},\mathbf{Set}]$ be the Yoneda embedding.
Then the identity functor on $[\mathcal C^{\mathrm{op}},\mathbf{Set}]$,
together with the identity natural transformation on $y$, is a pointwise left
Kan extension of $y$ along $y$.

Equivalently, for every presheaf $P$, the comma-category colimit computing
$\operatorname{Lan}_y y$ at $P$ is just $P$ itself.

## Facts & Assumptions

**Given:** A small category $\mathcal C$, its Yoneda embedding $y$, and a presheaf $P$ on $\mathcal C$.

[L1] The density theorem expresses $P$ as the colimit of the diagram $\int P\to[\mathcal C^{\mathrm{op}},\mathbf{Set}]$ sending $(c,x)$ to $y(c)$ ([[thm-density-for-a-small-category]]).

[F1] Evaluation at the identity gives a natural bijection between morphisms $y(c)\Rightarrow P$ and elements $x\in P(c)$; under this bijection the comma category $(y\downarrow P)$ is the category of elements of $P$ ([[cor-contravariant-yoneda-lemma]], [[def-category-of-elements]], [[def-yoneda-embedding]]).

[F2] A pointwise left Kan extension at $P$ is computed by the colimit over $(y\downarrow P)$ ([[def-pointwise-kan-extension-by-the-comma-category-formula]]).

[L2] If comma-category colimits and their universal cocones are supplied at every target object, they assemble uniquely into a left Kan extension functor, with unit given by the identity-indexed legs ([[thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], the comma category $(y\downarrow P)$ is canonically the category of elements used in [L1], and under that identification its canonical diagram sends an object $(c,x)$ to the representable presheaf $y(c)$. [F1, L1]

2.1 The colimit given by [L1] is therefore exactly the comma-category colimit required by [F2] to compute the pointwise left Kan extension of $y$ along itself at $P$. That colimit object is $P$. [F2, step 1.1, L1]

3.1 For a natural transformation $\theta:P\Rightarrow Q$, the uniquely forced arrow between the two canonical density colimits is $\theta$ itself, because its composites with all Yoneda legs are the legs indexed by the elements $\theta_c(x)$. Thus the assembled arrow maps are those of the identity functor, and the identity-indexed unit legs are identities. [L1, step 2.1]

4.1 Since these canonical colimits are supplied for every presheaf, [L2] assembles them into a left Kan extension; steps 2.1 and 3.1 identify it with the identity functor and the identity transformation on $y$. By [F2] it is pointwise. [L2, F2, step 2.1, step 3.1] ∎
