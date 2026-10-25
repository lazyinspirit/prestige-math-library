---
id: def-local-path-packings-and-separators
kind: definition
title: "Arc-disjoint, edge-disjoint and internally vertex-disjoint path families and their local separators"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-graph-walk-trail-path-and-cycle, def-directed-walk-trail-path-cycle-and-strong-connectivity, def-graph-deletion-contraction-minor-and-subdivision, def-multigraph-loop-and-digraph]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "D. Hulpke, Graph Theory notes"
      url: "https://www.math.colostate.edu/~hulpke/lectures/m501/notes.pdf"
pipeline_run: null
---

## Definition

For the following definitions, a **directed path occurrence** in a finite
labelled directed graph $(V,A,\operatorname{tail},\operatorname{head})$, where
$V,A$ are finite and $\operatorname{tail},\operatorname{head}:A\to V$, is an
alternating list
$$v_0,a_1,v_1,\ldots,a_\ell,v_\ell$$
with $a_i\in A$, $\operatorname{tail}(a_i)=v_{i-1}$, and
$\operatorname{head}(a_i)=v_i$ for every $i$, whose displayed vertices are
distinct. An **undirected path occurrence** in a finite undirected multigraph
([[def-multigraph-loop-and-digraph]])
is an alternating list
$$v_0,e_1,v_1,\ldots,e_\ell,v_\ell$$
whose displayed vertices are distinct and whose displayed edge $e_i$ has
endpoint set $\{v_{i-1},v_i\}$ for every $i$. Thus each path records its arc or
edge labels, including when parallel labels have the same endpoints. An ordinary
graph uses each edge $e\in E$ as its own label with endpoint set $e$, while an
ordinary digraph uses each ordered-pair arc $(u,v)$ as its own label with
$\operatorname{tail}(u,v)=u$ and $\operatorname{head}(u,v)=v$.

For distinct $s,t\in V$, a family of directed $s$-$t$ path occurrences is
**arc-disjoint** if no arc label occurs in two paths; an **arc separator** is a
set of arc labels whose deletion leaves no directed $s$-$t$ path occurrence.
For an undirected multigraph, replace arc labels by edge labels to obtain
**edge-disjoint** paths and **edge separators**. Deleting labels means removing
exactly those labels while retaining the other incidence data.

An $s$-$t$ path family is **internally vertex-disjoint** if no vertex other than
$s,t$ occurs in two paths. A **vertex separator** is a set
$S\subseteq V\setminus\{s,t\}$ for which deleting $S$, together with every
incident arc or edge label, leaves no $s$-$t$ path occurrence. The local vertex
comparison is used only when the terminals are nonadjacent (or, in the directed
case, when no arc label has tail $s$ and head $t$), so that such a separator can
exist.
