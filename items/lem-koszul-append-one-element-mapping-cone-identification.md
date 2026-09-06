---
id: lem-koszul-append-one-element-mapping-cone-identification
kind: lemma
title: "Koszul Append One Element Mapping Cone Identification"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-koszul-complex-concatenation-tensor-isomorphism, def-mapping-cone-of-a-chain-map]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/0621"
pipeline_run: frontier-31a
---

## Statement

If $y\in R$, then $K(\mathbf x,y;M)$ is chain-isomorphic to the mapping cone of multiplication by $y$ on $K(\mathbf x;M)$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[lem-koszul-complex-concatenation-tensor-isomorphism]], [[def-mapping-cone-of-a-chain-map]].

## Proof

**Proof technique:** direct.

1.1 Split $\bigwedge^p(R^n\oplus Re)$ as $\bigwedge^pR^n\oplus e\wedge\bigwedge^{p-1}R^n$. Send the second summand to the shifted cone summand. [given, algebra]

2.1 The coordinate formula gives $d(e\wedge z)=yz-e\wedge d z$, exactly the cone differential; hence the splitting is a chain isomorphism. [step 1.1, algebra] ∎

