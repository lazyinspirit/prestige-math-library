---
id: cor-viral-implies-polynomial-rodl-for-a-finite-family
kind: corollary
title: "The viral property implies the polynomial Rödl property"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-polynomial-rodl-property-for-a-finite-family, def-viral-property-for-a-finite-family, def-h-free-and-family-free-graph, def-induced-copy-number]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "S. Huang, Y. Ju, and Y. Zhou, Erdős-Hajnal beyond the five-vertex path, §1.1"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Every finite family of graphs with the viral property has the polynomial Rödl
property.

## Facts & Assumptions

**Given:** A finite family $\mathcal F$ of graphs with the viral property.

[L1] A family is viral when some exponent $d\ge1$ makes the induced-copy implication hold for every $\epsilon\in(0,\tfrac12)$ and every nonempty graph ([[def-viral-property-for-a-finite-family]]).

[L2] If a graph is $\mathcal F$-free, then $\operatorname{ind}_H(G)=0$ for every $H\in\mathcal F$ ([[def-h-free-and-family-free-graph]], [[def-induced-copy-number]]).

[L3] The polynomial Rödl property is the same restricted-set conclusion, but only for nonempty $\mathcal F$-free graphs ([[def-polynomial-rodl-property-for-a-finite-family]]).

## Proof

**Proof technique:** direct.

1.1 Choose an exponent $d\ge1$ witnessing the viral property of $\mathcal F$. [L1, choose]

1.2 Let $\epsilon\in(0,\tfrac12)$ and let $G$ be a nonempty $\mathcal F$-free graph. Then [L2] gives $\operatorname{ind}_H(G)=0<(\epsilon^d|V(G)|)^{|V(H)|}$ for every $H\in\mathcal F$. [L2, algebra]

2.1 Applying the viral implication from step 1.1 to the graph $G$ of step 1.2 yields an $\epsilon$-restricted vertex set of size at least $\epsilon^d|V(G)|$. This is exactly the polynomial Rödl conclusion of [L3]. [step 1.1, step 1.2, L1, L3] ∎
