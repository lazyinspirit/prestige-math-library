---
id: def-stalk-of-presheaf
kind: definition
title: "The stalk of a presheaf at a point"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-presheaf-on-topological-space, def-neighbourhood-top, def-filtered-category-and-filtered-colimit]
justified_by: [lem-germ-equivalence-relation]
verification:
  audited: 2026-09-04
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Section 11"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Class 3"
      url: "https://math.stanford.edu/~vakil/0506-216/216Ajun2807.pdf"
---

## Definition

Let $\mathcal F$ be a presheaf on a topological space $X$, and let $x\in X$.

The **neighbourhood category of $x$** is the full subcategory
$$\mathcal N_x\subseteq \operatorname{Open}(X)$$
whose objects are the open neighbourhoods of $x$. Its opposite category is
filtered in the sense of
[[def-filtered-category-and-filtered-colimit]]: it is nonempty because $X$
itself is a neighbourhood of $x$, and for neighbourhoods $U,V$ the
intersection $U\cap V$ is again a neighbourhood of $x$ with arrows
$$U\longrightarrow U\cap V,\qquad V\longrightarrow U\cap V$$
in the opposite category.

Because $\mathcal F$ is contravariant, its restriction to the neighbourhood
category determines a covariant diagram on that opposite category. The
**stalk** of $\mathcal F$ at $x$ is the filtered colimit
$$\mathcal F_x:=\varinjlim_{\mathcal N_x^{\operatorname{op}}}\mathcal F(U).$$

Concretely, $\mathcal F_x$ may be described as equivalence classes of pairs
$(U,s)$ with $U$ an open neighbourhood of $x$ and
$s\in\mathcal F(U)$, where $(U,s)\sim(V,t)$ when $s$ and $t$ agree on some
smaller open neighbourhood of $x$. The next lemma verifies that this is an
equivalence relation.
