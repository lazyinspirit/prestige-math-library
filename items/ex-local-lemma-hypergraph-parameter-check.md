---
id: ex-local-lemma-hypergraph-parameter-check
kind: example
title: "Checking the symmetric local-lemma condition for a sparse uniform hypergraph"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-exponential-function-and-e, lem-exponential-factorial-tail-bound, thm-hypergraph-two-colouring-by-first-moment, thm-hypergraph-two-colouring-by-local-lemma]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Sections 5.1-5.2"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
pipeline_run: null
---

## Example

For any natural $q$, form a $5$-uniform hypergraph from $q$ disjoint blocks, each block consisting of two edges that meet in one vertex and are otherwise disjoint. Every edge meets exactly one other edge. The Local Lemma proves the hypergraph two-colourable for every $q$, while the first-moment edge-count criterion applies only when $2q<16$.

## Facts & Assumptions

**Given:** The hypergraph construction in the Example.

[L1] Fewer than $2^{k-1}$ edges is sufficient for first-moment two-colourability ([[thm-hypergraph-two-colouring-by-first-moment]]).

[L2] The Local-Lemma criterion is $e(d+1)\le2^{k-1}$ when every edge meets at most $d$ other edges ([[thm-hypergraph-two-colouring-by-local-lemma]]).

[L3] $e=\sum_{j\ge0}1/j!$, and at $x=1,N=2$ the exponential tail from $j=3$ onward is at most $1/3$ ([[def-real-exponential-function-and-e]], [[lem-exponential-factorial-tail-bound]]).

## Verification

**Proof technique:** direct.

1.1 Every edge has five vertices and meets only its block partner, so $k=5$ and $d=1$. [given]

2.1 By [L3], $e\le1+1+1/2+1/3=17/6<3$, so $2e<6<16$. Hence [L2] gives a proper two-colouring for every $q$, including $q=0$. [step 1.1, L2, L3, algebra]

3.1 The hypergraph has $2q$ edges, so [L1] applies only when $2q<2^4=16$. For $q\ge8$, the Local Lemma still applies while this first-moment criterion does not. [step 1.1, L1, algebra] ∎
