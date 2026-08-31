---
id: ex-a-nearly-covered-sparse-pair-at-small-parameters
kind: example
title: "A nearly covered sparse pair at small parameters"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-a-sparse-graph-without-a-large-sparse-pair-has-a-large-nearly-covered-sparse-pair]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Claim 5.2.1"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Example

For $y=2^{-8}$ and $x=2^{-9}$, suppose a graph $G$ of order $2^{40}$ satisfies
the sparse-graph, non-$2y^4$-sparsity, and no-large-sparse-pair hypotheses of
the nearly covered sparse-pair lemma. Its conclusion asks for a set $B$ of size at least
$2^8$ and a set $A$ of size at least $(1-3\cdot2^{-8})2^{40}$ such that $A$ is
$2^{-16}$-sparse to $B$ and every vertex of $B$ has at least
$2^{-18}|A|$ neighbours in $A$.

## Facts & Assumptions

**Given:** The parameters $y=2^{-8}$, $x=2^{-9}$, a graph $G$ with
$|V(G)|=2^{40}$, and all hypotheses of the cited lemma.

[L1] Under those hypotheses, the lemma produces disjoint sets $A,B$ with
$|B|\ge y^4|V(G)|$, $|A|\ge (1-3y)|V(G)|$, $A$ $y^2$-sparse to $B$, and every
vertex of $B$ having at least $x^2|A|$ neighbours in $A$
([[lem-a-sparse-graph-without-a-large-sparse-pair-has-a-large-nearly-covered-sparse-pair]]).

## Verification

**Proof technique:** arithmetic unpacking.

1.1 Substituting $y=2^{-8}$ and $|V(G)|=2^{40}$ into [L1] gives $y^4|V(G)|=2^{-32}\cdot2^{40}=2^8$ and $(1-3y)|V(G)|=(1-3\cdot2^{-8})2^{40}$. [L1, algebra]

2.1 The same substitution gives $y^2=2^{-16}$ and $x^2=2^{-18}$, so the sparsity and neighbourhood conclusions in [L1] become exactly the numerical conditions stated above. [step 1.1, L1, algebra] ∎
