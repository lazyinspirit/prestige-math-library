---
id: def-quotient-graph-of-groups-from-a-tree-action
kind: definition
title: "The quotient graph of groups attached to a tree action"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-homomorphism, def-quotient-graph-of-an-action-without-inversions]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
pipeline_run: null
---

## Definition

Let a group $G$ act without inversions on a simplicial tree $T$, and let
$X=G\backslash T$ be the quotient graph from
[[def-quotient-graph-of-an-action-without-inversions]]. Choose one lift
$\widetilde v$ of each quotient vertex $v$. For each geometric quotient edge,
choose one orientation $e$ and a lift $\widetilde e$ with origin
$\widetilde{o(e)}$, and choose $g_e\in G$ satisfying
$t(\widetilde e)=g_e\widetilde{t(e)}$. For the opposite orientation set
$$\widetilde{\bar e}:=g_e^{-1}\overline{\widetilde e},\qquad g_{\bar e}:=g_e^{-1}.$$
Then $o(\widetilde{\bar e})=\widetilde{t(e)}$ and
$t(\widetilde{\bar e})=g_{\bar e}\widetilde{o(e)}$, so both orientations
start at the chosen lift of their origin.

The resulting **quotient graph of groups** has:

- vertex group $G_v=\operatorname{Stab}_G(\widetilde v)$,
- for each chosen orientation $e$, edge group
  $G_e=G_{\bar e}:=\operatorname{Stab}_G(\widetilde e)$,
- boundary map $\alpha_e:G_e\hookrightarrow G_{o(e)}$ by inclusion,
- boundary map $\alpha_{\bar e}:G_e\to G_{t(e)}$ given by
  $h\mapsto g_e^{-1}hg_e$.

Different choices of lifts change this data by conjugation.
