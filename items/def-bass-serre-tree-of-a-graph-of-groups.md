---
id: def-bass-serre-tree-of-a-graph-of-groups
kind: definition
title: "The Bass-Serre tree of a graph of groups"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-coset, def-fundamental-group-of-a-graph-of-groups-relative-to-a-maximal-tree, cor-vertex-groups-embed-in-the-graph-of-groups-fundamental-group, def-path-group-of-a-graph-of-groups]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  repair: research/frontier-42-coxeter-32-codex-davis26-bass-serre-repair.json
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

These are independent of the chosen representative $\gamma$. Every other representative is $\gamma\alpha_e(a)$ for some $a\in G_e$, where $G_e$ in the coset denotes its origin image $\alpha_e(G_e)$. The origin coset is unchanged because $\alpha_e(a)\in G_{o(e)}$. The path-group relation

$$e\,\alpha_{\bar e}(a)\,\bar e=\alpha_e(a)$$

of [[def-path-group-of-a-graph-of-groups]] is equivalent to $\alpha_e(a)e=e\alpha_{\bar e}(a)$. Hence $\gamma\alpha_e(a)e=\gamma e\alpha_{\bar e}(a)$, which has the same coset modulo $G_{t(e)}$ and the same coset modulo the opposite edge image $\alpha_{\bar e}(G_e)$. Thus both the terminus and edge-reversal formulas are independent of the representative. Applying reversal twice gives $\gamma e\bar eG_e=\gamma G_e$.
