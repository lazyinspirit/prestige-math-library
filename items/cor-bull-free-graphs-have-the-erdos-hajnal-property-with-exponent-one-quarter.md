---
id: cor-bull-free-graphs-have-the-erdos-hajnal-property-with-exponent-one-quarter
kind: corollary
title: "Every bull-free graph has a clique or stable set of size at least $|V(G)|^{1/4}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-alpha-narrow-graphs-have-large-cliques-or-stable-sets, def-erdos-hajnal-property-and-constant, def-real-power, thm-bull-free-graphs-are-two-narrow]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, The Erdős-Hajnal Conjecture: A Survey, Theorem 2.3"
      url: "https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf"
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs, Theorem 1.2"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Statement

Every bull-free finite graph $G$ contains a clique or a stable set of size at
least $|V(G)|^{1/4}$. Equivalently, the hereditary class of bull-free graphs has
Erdős-Hajnal constant $1/4$.

## Facts & Assumptions

**Given:** A bull-free finite graph $G$.

[L1] Every bull-free graph is two-narrow ([[thm-bull-free-graphs-are-two-narrow]]).

[L2] An $\alpha$-narrow graph has a clique or stable set of size at least $|V(G)|^{1/(2\alpha)}$ ([[cor-alpha-narrow-graphs-have-large-cliques-or-stable-sets]]).

[F1] The Erdős-Hajnal property is exactly the existence of a positive power lower bound for the homogeneous number ([[def-erdos-hajnal-property-and-constant]], [[def-real-power]]).

## Proof

**Proof technique:** direct.

1.1 The bull-free theorem [L1] first gives that $G$ is two-narrow. Applying [L2] with $\alpha=2$ then yields a clique or stable set of size at least $|V(G)|^{1/4}$. [L1, L2, algebra]

2.1 This is exactly the graph-level form of an Erdős-Hajnal constant $1/4$ for the class of bull-free graphs, by [F1]. [step 1.1, F1] ∎
