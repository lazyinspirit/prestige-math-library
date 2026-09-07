---
id: def-constraint-graph-regularization
kind: definition
title: "Constraint graph regularization"
status: published
origin: pipeline
deps: [def-constraint-graph-and-labeling-value, lem-expander-size-adjustment-and-laziness]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification; §4 Definitions4.1–4.2, PDF pages13–14, with explicit degree and loop conventions."
      url: "https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf"
---

## Definition

Use the degree-$128$ graphs $H_r$ of [[lem-expander-size-adjustment-and-laziness]], whose unnormalized edge expansion is at least $h_0=7/10$ when $r\ge2$. For a constraint graph $G$ as in [[def-constraint-graph-and-labeling-value]] with $E\ne\varnothing$, remove isolated vertices and replace each vertex of degree $r$ by a cloud of its $r$ incidence ports. Put $H_r$ inside that cloud, with equality on every edge. Keep one external edge for every original edge, joining its two designated ports and carrying its original relation. A loop's two ports are distinct. Call the resulting graph $G_1$.

On the $2|E|$ ports, add a copy of $H_{2|E|}$ with tautological relations, and at each port add $65$ ordinary tautological loops, i.e. $130$ loop slots. Call this $G_2$. Its degree is $129+128+130=387$; $G_1$ has degree $129$. The alphabet is unchanged. For an edgeless input, output the empty graph with value one; positive-degree and nonempty-size claims about $G_1,G_2$ are restricted to $E\ne\varnothing$. Fix an alphabet ordering for plurality tie breaking and for decoding removed isolated vertices.
