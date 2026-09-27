---
id: "def-k-flat-complex-of-abelian-sheaves"
kind: "definition"
title: "K-flat complexes of abelian sheaves in the bounded-above setting"
status: draft
origin: pipeline
deps: [def-topological-space, def-tensor-product-of-abelian-sheaves, def-exactness-of-a-complex-at-a-degree-and-acyclic-complex, def-bounded-bounded-below-and-bounded-above-complex, def-cochain-complex-in-an-abelian-category, def-quasi-isomorphism, def-flat-abelian-sheaf, def-cohomology-object-of-a-cochain-complex]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
      locator: "Definition 26.2 and Lemma 26.4; the bounded-above variant of K-flatness"
---

## Definition

Let $X$ be a topological space. A bounded-above cochain complex
$\mathcal K^\bullet$ of abelian sheaves on $X$
([[def-cochain-complex-in-an-abelian-category]],
[[def-bounded-bounded-below-and-bounded-above-complex]]) is **K-flat** in the
bounded-above sense used on this page when for every acyclic bounded-above
complex $\mathcal F^\bullet$ of abelian sheaves, acyclicity being exactness in
every degree ([[def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]],
[[def-cohomology-object-of-a-cochain-complex]]), the tensor-product total
complex
$$\operatorname{Tot}(\mathcal F^\bullet\otimes_{\mathbb Z}\mathcal K^\bullet)$$
of [[def-tensor-product-of-abelian-sheaves]] is acyclic.

This is the bounded-above variant of the K-flat complexes of the Stacks
Project (Definition 26.2), restricted to the complexes between which the
tensor-product total complex of [[def-tensor-product-of-abelian-sheaves]] is
defined; no unbounded total complex is used on this page. The two facts that
make the notion useful are proved on this page: a bounded-above complex of flat
sheaves ([[def-flat-abelian-sheaf]]) is K-flat
([[lem-abelian-sheaves-admit-bounded-above-flat-resolutions]]), and tensoring
with a K-flat complex preserves quasi-isomorphisms
([[def-quasi-isomorphism]], [[lem-k-flat-abelian-sheaf-complexes-preserve-quasi-isomorphisms]]).
