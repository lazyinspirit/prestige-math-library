---
id: cor-the-four-vertex-path-has-the-erdos-hajnal-property
kind: corollary
title: "The four-vertex path has the Erdős-Hajnal property"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-p-four-free-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order, def-erdos-hajnal-property-and-constant, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, The Erdős-Hajnal Conjecture — A Survey, Section 2"
      url: "https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf"
    - title: "Tung H. Nguyen, Notes on Recent Work on the Erdős-Hajnal Conjecture, Section 1"
      url: "https://web.math.princeton.edu/~tunghn/ehnotes.pdf"
pipeline_run: null
---

## Statement

The graph $P_4$ has the Erdős-Hajnal property.

## Facts & Assumptions

**Given:** The four-vertex path $P_4$.

[L1] Every finite $P_4$-free graph $G$ contains a clique or a stable set of size
at least $\sqrt{|V(G)|}$
([[cor-p-four-free-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order]]).

[L2] A graph $H$ has the Erdős-Hajnal property when the hereditary class of
$H$-free graphs has some positive Erdős-Hajnal constant
([[def-erdos-hajnal-property-and-constant]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], every nonempty $P_4$-free graph $G$ satisfies $\operatorname{hom}(G)\ge \sqrt{|V(G)|}=|V(G)|^{1/2}$, so the class of $P_4$-free graphs has the positive exponent $1/2$. [L1, algebra]

2.1 By [L2], the existence of that positive exponent is exactly the statement that $P_4$ has the Erdős-Hajnal property. [step 1.1, L2] ∎
