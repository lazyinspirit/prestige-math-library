---
id: lem-induced-simplicial-chain-maps-commute-with-boundaries
kind: lemma
title: "Induced simplicial chain maps commute with boundaries"
status: draft
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-induced-simplicial-chain-map, lem-simplicial-boundary-is-independent-of-oriented-representative]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "Vidit Nanda, Computational Algebraic Topology, Lecture 03: Homology"
      url: "https://people.maths.ox.ac.uk/nanda/cat/Lecture%2003%20Homology.pdf"
---

## Statement

If $f:K \to L$ is simplicial, then
$$\partial f_\#=f_\#\partial$$
on every simplicial chain group.

## Proof

**Given:** A simplicial map $f:K \to L$ and an oriented simplex $[v_0,\dots,v_n]$.

1.1 If $f(v_0),\dots,f(v_n)$ are pairwise distinct, then deleting one vertex before applying $f$ or after applying $f$ produces the same oriented face. Therefore $\partial f_\#[v_0,\dots,v_n]=f_\#\partial[v_0,\dots,v_n]$ term by term. [given]

1.2 If some image vertices repeat, then $f_\#[v_0,\dots,v_n]=0$. In $f_\#\partial[v_0,\dots,v_n]$, the faces whose remaining image vertices still repeat map to $0$, while the two faces obtained by deleting one of a repeated pair map to the same oriented simplex with opposite signs and cancel. Hence $f_\#\partial[v_0,\dots,v_n]=0=\partial f_\#[v_0,\dots,v_n]$. [given]

2.1 Steps 1.1 and 1.2 cover all simplices, so $\partial f_\#=f_\#\partial$. [step 1.1, step 1.2] ∎
