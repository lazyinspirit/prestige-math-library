---
id: lem-cloud-consistency-forces-near-constant-labels
kind: lemma
title: "Cloud violations control distance to plurality labels"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-degree-reduction-by-expander-clouds, lem-cloud-plurality-rounding]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification, §4 proof of Lemma 4.1, pp. 13-14."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
---

## Statement

Let $G$ be a binary constraint graph over the fixed alphabet $\Sigma$ with $E(G)\ne\varnothing$, let $G_1$ be its cloud graph as constructed by the degree-reduction map [[def-degree-reduction-by-expander-clouds]], and let $\tau$ be any labeling of the ports of $G_1$ with corresponding plurality decoding $\sigma=D\tau$. Write $S$ for the number of ports whose label differs from the decoded label $\sigma(v)$ of their original vertex $v$, and let $U_{\rm int}$ and $U_{\rm ext}$ count the equality edges inside clouds and the external edges that are violated by $\tau$. Then
$$U_{\rm int}\ge\frac{7}{20}\,S,\qquad U_G\le U_{\rm ext}+S,$$
where $U_G$ is the number of ordinary edges of $G$ violated by the decoded labeling $\sigma$.

## Facts & Assumptions

**Given:** a binary constraint graph $G$ with $E(G)\ne\varnothing$ over the fixed alphabet, a labeling $\tau$ of its cloud graph $G_1$, the decoded labeling $\sigma=D\tau$, and the counts $S,U_{\rm int},U_{\rm ext},U_G$ above.

[F1] For any labeling of the cloud graph $G_1$ of a nonempty-edge constraint graph $G$, decode each original vertex by its cloud's plurality label, using fixed tie breaking. Let $S$ count the ports disagreeing with that label, and let $U_{\rm int},U_{\rm ext}$ count violated internal equality and external edges. Then $U_{\rm int}\ge(h_0/2)S$ and $U_G\le U_{\rm ext}+S$ with $h_0=7/10$, where $U_G$ is the decoded violation count in $G$ ([[lem-cloud-plurality-rounding]]).

[F2] The cloud graph $G_1$ of the degree-reduction map has one port per incidence, a copy of $H_r$ with equality on every internal edge inside each cloud, one external edge per original edge joining the designated ports, and the same alphabet $\Sigma$; the fixed alphabet ordering is used both for the plurality choice of $D$ and for the tie-breaking in the published rounding bound ([[def-degree-reduction-by-expander-clouds]]).

## Proof

**Proof technique:** direct.

1.1 The cloud graph and the decoding used here are the ones of [F2], with the same alphabet ordering and the same equality and external relations. Substituting $h_0=7/10$ into the first inequality of [F1] gives $U_{\rm int}\ge(7/20)S$. [F1, F2, algebra]

1.2 If some cloud contains no port at all, then it contributes neither ports nor edges to the counts; the second inequality of [F1] is a statement about all clouds simultaneously and covers this case. It gives $U_G\le U_{\rm ext}+S$, including $S=0$ and including the case in which the decoded labeling fails an external edge whose two ports carry labels constant on their clouds. [F1, F2]

2.1 Both displayed inequalities therefore hold for every labeling $\tau$ of the ports of $G_1$, with the constants $7/20$ and $1$ read off from the published rounding argument; no additional hypothesis on $G$ beyond $E(G)\ne\varnothing$ is used. [step 1.1, step 1.2] ∎

## Remarks

- This item is the page-local interface of the published rounding bound: its content is the published argument of [[lem-cloud-plurality-rounding]], cited here with the page's notation, not re-derived. It lets [[thm-degree-reduction-preserves-unsatisfaction]] cite the cloud decoding estimate by ID without restating the construction.
- The hypothesis $E(G)\ne\varnothing$ is inherited from the cloud construction: the edgeless input is handled by the separate empty-output convention of [[def-degree-reduction-by-expander-clouds]], where there are no clouds and both sides of each inequality are zero.
