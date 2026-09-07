---
id: lem-cloud-plurality-rounding
kind: lemma
title: "Cloud plurality rounding"
status: published
origin: pipeline
deps: [def-constraint-graph-regularization]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification; §4 proof of Lemma4.1, PDF pages13–14."
      url: "https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf"
---

## Statement

For any labeling of the cloud graph $G_1$ of a nonempty-edge constraint graph $G$, decode each original vertex by its cloud's plurality label, using fixed tie breaking. Let $S$ count the ports disagreeing with that label, and let $U_{\rm int},U_{\rm ext}$ count violated internal equality and external edges. Then
$$U_{\rm int}\ge\frac{h_0}{2}S,\qquad U_G\le U_{\rm ext}+S,\qquad h_0=7/10,$$
where $U_G$ is the decoded violation count in $G$.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] Use the degree-$128$ graphs $H_r$ of the stated convention, whose unnormalized edge expansion is at least $h_0=7/10$ when $r\ge2$. For a constraint graph $G$ as in the stated convention with $E\ne\varnothing$, remove isolated vertices and replace each vertex of degree $r$ by a cloud of its $r$ incidence ports. Put $H_r$ inside that cloud, with equality on every edge. Keep one external edge for every original edge, joining its two designated ports and carrying its original relation. A loop's two ports are distinct. Call the resulting graph $G_1$. On the $2|E|$ ports, add a copy of $H_{2|E|}$ with tautological relations, and at each port add $65$ ordinary tautological loops, i.e. $130$ loop slots. Call this $G_2$. Its degree is $129+128+130=387$; $G_1$ has degree $129$. The alphabet is unchanged. For an edgeless input, output the empty graph with value one; positive-degree and nonempty-size claims about $G_1,G_2$ are restricted to $E\ne\varnothing$. Fix an alphabet ordering for plurality tie breaking and for decoding removed isolated vertices. ([[def-constraint-graph-regularization]]).


## Proof

1.1 In a cloud, every label class other than the chosen largest class has size at most half the cloud: a class larger than half would be the unique largest. Its outgoing boundary therefore has at least $h_0$ times its size in edges. Each such edge violates equality, and summing over these classes counts any edge at most twice. Sum also over clouds to obtain $2U_{\rm int}\ge h_0S$. Empty classes contribute nothing; a singleton cloud has no disagreeing port. [F1]

2.1 Compare the labeling with the labeling constant at its decoded label on each cloud. Every originally violated constraint whose external copy was satisfied must have a changed port at one endpoint. Each changed port is incident to exactly one external edge, so at most $S$ external constraints can newly fail. The constant labeling's external violations equal $U_G$, including original loops whose two incidence ports now carry the same label. This proves $U_G\le U_{\rm ext}+S$, also when $S=0$. [step 1.1, algebra] ∎
