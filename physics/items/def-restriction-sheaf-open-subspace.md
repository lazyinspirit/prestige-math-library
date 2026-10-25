---
id: def-restriction-sheaf-open-subspace
kind: definition
title: "Restriction of a sheaf to an open subspace"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-inverse-image-presheaf-and-sheaf]
verification:
  audited: 2026-09-05
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Lemma 6.21.9"
      url: "https://stacks.math.columbia.edu/tag/008C"
    - title: "Ravi Vakil, The Rising Sea, Exercise 2.7.D"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Definition

Let $j:U\hookrightarrow X$ be the inclusion of an open subspace, and let
$\mathcal F$ be a sheaf on $X$. The **restriction of $\mathcal F$ to $U$** is
the inverse image sheaf
$$
\mathcal F|_U:=j^{-1}\mathcal F.
$$

For an open set $W \subseteq U$, one may identify $(\mathcal F|_U)(W)$ with
$\mathcal F(W)$: because $U$ is open in $X$, the set $W$ is also open in $X$,
and in the neighbourhood-colimit defining $j^{-1}\mathcal F$ the open set $W$
itself is a neighbourhood of $j(W)=W$.
