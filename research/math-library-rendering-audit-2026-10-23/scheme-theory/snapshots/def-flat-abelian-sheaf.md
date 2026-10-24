---
id: "def-flat-abelian-sheaf"
kind: "definition"
title: "Flat abelian sheaves"
status: published
origin: pipeline
deps: [def-topological-space, def-left-and-right-flat-modules-over-an-arbitrary-ring, def-tensor-product-of-abelian-sheaves, lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product, def-stalk-of-presheaf, def-bounded-bounded-below-and-bounded-above-complex]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
      locator: "Section 26: Definition 26.2 and Lemmas 26.4, 26.9 and 26.12; Stacks Project Modules, Lemma 17.2"
---

## Definition

Let $X$ be a topological space ([[def-topological-space]]). A sheaf
$\mathcal F$ of abelian groups on $X$ is **flat** when its stalk
$\mathcal F_x$ is a flat $\mathbb Z$-module for every $x\in X$
([[def-left-and-right-flat-modules-over-an-arbitrary-ring]] with $R=\mathbb Z$
and additive notation, so that $-\otimes_{\mathbb Z}\mathcal F_x$ is exact).

Equivalently, by [[lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product]]
and [[def-tensor-product-of-abelian-sheaves]], flatness of $\mathcal F$ means
that the functor $-\otimes_{\mathbb Z}\mathcal F$ on abelian sheaves is exact;
the equivalence with exactness of $\mathcal F\otimes_{\mathbb Z}-$ is proved in
[[lem-flatness-criteria-and-flat-covers-for-abelian-sheaves]].

A bounded-above complex $\mathcal F^\bullet$ of abelian sheaves
([[def-bounded-bounded-below-and-bounded-above-complex]]) is a **complex of
flat sheaves** when each term $\mathcal F^n$ is flat; the bounded-above
complexes of flat sheaves are exactly the source of the flat resolutions
constructed on this page. Since a stalk is a filtered colimit
([[def-stalk-of-presheaf]]), flatness is a stalk-local condition, and the zero
sheaf is flat because its stalks are the zero modules.
