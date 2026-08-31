---
id: cor-the-star-expansion-of-the-four-vertex-path-and-its-complement-have-the-erdos-hajnal-property
kind: corollary
title: "The star-expansion of the four-vertex path and its complement have the Erdős-Hajnal property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property,
       def-standard-complete-bipartite-path-and-cycle-graphs,
       def-graph-isomorphism-and-complement]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, Theorem 6.2"
      url: "https://arxiv.org/html/2102.04994v1"
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Theorem 1.9 discussion"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Let $P_4$ be the four-vertex path, and let $P_4^\star$ be its star-expansion.
Then $\{P_4^\star,\overline{P_4^\star}\}$ has the Erdős-Hajnal property.

## Facts & Assumptions

**Given:** The four-vertex path $P_4$.

[L1] For every forest $F$, the four graphs
$F^\star,(\overline F)^\star,\overline{F^\star},\overline{(\overline F)^\star}$
have the Erdős-Hajnal property as a family
([[thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property]]).

[F1] The path $P_4$ is self-complementary: if its vertices in order are
$1,2,3,4$, then the bijection $1\mapsto 2$, $2\mapsto 4$, $3\mapsto 1$,
$4\mapsto 3$ identifies $P_4$ with $\overline{P_4}$. 

## Proof

**Proof technique:** direct.

1.1 Apply [L1] with $F:=P_4$. Because $P_4$ is a forest, the family $\{P_4^\star,(\overline{P_4})^\star,\overline{P_4^\star}, \overline{(\overline{P_4})^\star}\}$ has the Erdős-Hajnal property. [L1]

2.1 By [F1], $P_4\cong \overline{P_4}$, so $(\overline{P_4})^\star\cong P_4^\star$ and $\overline{(\overline{P_4})^\star}\cong \overline{P_4^\star}$. Hence the four-family in step 1.1 collapses to the two-family $\{P_4^\star,\overline{P_4^\star}\}$. [step 1.1, F1]

3.1 Therefore the star-expansion of $P_4$ and its complement have the Erdős-Hajnal property. [step 2.1] ∎
