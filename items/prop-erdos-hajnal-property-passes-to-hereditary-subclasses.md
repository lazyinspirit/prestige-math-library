---
id: prop-erdos-hajnal-property-passes-to-hereditary-subclasses
kind: proposition
title: "The Erdős–Hajnal property and each of its constants pass to hereditary subclasses"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-erdos-hajnal-property-and-constant]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Erdos-Hajnal properties in graphs and hypergraphs, introduction"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

If $\mathcal D\subseteq\mathcal C$ are hereditary graph classes, then every Erdős–Hajnal constant for $\mathcal C$ is one for $\mathcal D$. In particular, the Erdős–Hajnal property passes from $\mathcal C$ to $\mathcal D$.

## Facts & Assumptions

**Given:** Hereditary graph classes $\mathcal D\subseteq\mathcal C$ and an Erdős–Hajnal constant $\epsilon$ for $\mathcal C$.

[L1] The constant condition says that every nonempty $G$ in the class satisfies $\operatorname{hom}(G)\ge|V(G)|^\epsilon$ ([[def-erdos-hajnal-property-and-constant]]).

## Proof

**Proof technique:** direct.

1.1 Every nonempty $G\in\mathcal D$ also lies in $\mathcal C$, so [L1] gives $\operatorname{hom}(G)\ge|V(G)|^\epsilon$. [given, L1]

2.1 Thus $\epsilon$ is a constant for $\mathcal D$; the existence assertion follows by retaining any constant of $\mathcal C$. [step 1.1, L1] ∎
