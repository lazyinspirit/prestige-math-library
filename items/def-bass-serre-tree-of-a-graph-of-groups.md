---
id: def-bass-serre-tree-of-a-graph-of-groups
kind: definition
title: "The Bass-Serre tree of a graph of groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-coset, def-fundamental-group-of-a-graph-of-groups-relative-to-a-maximal-tree, cor-vertex-groups-embed-in-the-graph-of-groups-fundamental-group]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-29
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
pipeline_run: null
---

## Definition

Let $\mathcal G$ be a graph of groups on $X$, let $T$ be a maximal subtree, and
write $\Gamma=\pi_1(\mathcal G,T)$.
By [[cor-vertex-groups-embed-in-the-graph-of-groups-fundamental-group]], regard
each vertex group $G_v$ as a subgroup of $\Gamma$. For an oriented edge $e$,
the injective boundary map identifies $G_e$ with a subgroup of $G_{o(e)}$ and
hence of $\Gamma$. The cosets below use these canonical embeddings.

The **Bass-Serre tree** $\widetilde X$ has:

- vertices the left cosets $\Gamma/G_v$ for vertices $v$ of $X$,
- edges the left cosets $\Gamma/G_e$ for oriented edges $e$ of $X$.

For an oriented edge $e$, define incidence and edge reversal by

$$o(\gamma G_e)=\gamma G_{o(e)},\qquad t(\gamma G_e)=\gamma e\,G_{t(e)},\qquad \overline{\gamma G_e}=\gamma e\,G_{\bar e}.$$

These are independent of the chosen representative $\gamma$: replacing
$\gamma$ by $\gamma h$ with $h\in G_e$ leaves the origin coset unchanged
because $G_e\le G_{o(e)}$, and leaves the terminus coset unchanged because the
edge relation identifies $eh$ with $e\,\alpha_{\bar e}(h)$ inside $\Gamma$.
The same relation makes the reversal formula independent of the representative,
and applying reversal twice gives
$\gamma e\bar eG_e=\gamma G_e$.
