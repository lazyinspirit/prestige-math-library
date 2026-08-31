---
id: cor-the-six-vertex-prime-h-graphs-have-the-erdos-hajnal-property
kind: corollary
title: "The two six-vertex prime $\\mathcal H$-graphs have the Erdős-Hajnal property"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-left-six-vertex-prime-h-graph, def-right-six-vertex-prime-h-graph, cor-the-bull-graph-has-the-erdos-hajnal-property, thm-leaf-deletion-preserves-virality-of-a-finite-family, cor-single-graph-erdos-hajnal-polynomial-rodl-and-viral-equivalence, prop-erdos-hajnal-property-is-complement-invariant]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. IV. New graphs with the Erdős-Hajnal property, Theorem 1.4"
      url: "https://arxiv.org/pdf/2307.06455"
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Figure 2 discussion"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Statement

Both the left and the right six-vertex prime $\mathcal H$-graphs have the
Erdős-Hajnal property.

## Facts & Assumptions

**Given:** The left and right six-vertex prime $\mathcal H$-graphs.

[L1] The bull graph has the Erdős-Hajnal property
([[cor-the-bull-graph-has-the-erdos-hajnal-property]]).

[L2] For a single graph, the Erdős-Hajnal property is equivalent to virality
([[cor-single-graph-erdos-hajnal-polynomial-rodl-and-viral-equivalence]]).

[L3] Deleting a leaf from each of two forbidden graphs preserves virality
([[thm-leaf-deletion-preserves-virality-of-a-finite-family]]).

[L4] A graph and its complement have the same Erdős-Hajnal constants
([[prop-erdos-hajnal-property-is-complement-invariant]]).

[F1] In the left six-vertex prime $\mathcal H$-graph, deleting $\ell_1$ or
$\ell_2$ leaves a bull: after deleting $\ell_1$, the triangle is
$t_1t_2t_3$ with leaves $\ell_2,\ell_3$, and after deleting $\ell_2$, the same
triangle has leaves $\ell_1,\ell_3$.

[F2] The right six-vertex prime $\mathcal H$-graph is the complement of the
left one by definition.

## Proof

**Proof technique:** direct.

1.1 By [L1] and the direction $(1)\Rightarrow(3)$ in [L2], the singleton family consisting only of the bull graph is viral. [L1, L2]

2.1 Let $L$ be the left six-vertex prime $\mathcal H$-graph. By [F1], if we delete $\ell_1$ from one copy of $L$ and $\ell_2$ from another, both modified singleton families are the viral family $\{\text{bull}\}$. Applying [L3] with the same graph $L$ in both leaf-deletion slots shows that the singleton family $\{L\}$ is viral. Using the direction $(3)\Rightarrow(1)$ in [L2], we conclude that $L$ has the Erdős-Hajnal property. [step 1.1, L2, L3, F1]

3.1 Let $R$ be the right six-vertex prime $\mathcal H$-graph. By [F2], we have $R=\overline L$, so [L4] transfers the Erdős-Hajnal property from $L$ to $R$. [step 2.1, L4, F2]

4.1 Therefore both six-vertex prime $\mathcal H$-graphs have the Erdős-Hajnal property. [step 2.1, step 3.1] ∎
