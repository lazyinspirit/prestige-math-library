---
id: lem-components-are-anticomplete-and-anticomponents-complete
kind: lemma
title: "Distinct connected components are anticomplete, and distinct anticonnected components are complete"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-edges-between-sets-and-pure-mixed-pairs, cor-connected-components-partition-the-vertex-set, lem-anticonnected-components-are-complement-components, lem-purity-symmetry-and-complementation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Valerio Boncompagni, On hereditary graph classes defined by forbidding Truemper configurations (PhD thesis, 2018)"
      url: "https://etheses.whiterose.ac.uk/id/eprint/23386/1/main.pdf"
pipeline_run: null
---

## Statement

Distinct connected components of a graph are anticomplete to one another. Distinct anticomponents are complete to one another.

## Facts & Assumptions

**Given:** A finite graph $G$.

[L1] Connected components partition the vertices into maximal connected parts ([[cor-connected-components-partition-the-vertex-set]]).

[L2] Anticomponents of $G$ are connected components of $\overline G$ ([[lem-anticonnected-components-are-complement-components]]).

[L3] Complementation swaps anticomplete pairs with complete pairs ([[lem-purity-symmetry-and-complementation]]).

[F1] Anticomplete and complete pairs have respectively no and all cross edges ([[def-edges-between-sets-and-pure-mixed-pairs]]).

## Proof

**Proof technique:** direct.

1.1 No edge joins two distinct connected components, since such an edge would connect them into one component. Thus distinct components are anticomplete. [L1, F1]

2.1 Distinct anticomponents of $G$ are distinct connected components of $\overline G$, so they are anticomplete in $\overline G$ by step 1.1 applied there. [L2, step 1.1]

3.1 Complementing back makes those two sets complete in $G$. [step 2.1, L3] ∎
