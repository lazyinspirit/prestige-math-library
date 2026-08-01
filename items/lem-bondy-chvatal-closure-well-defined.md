---
id: lem-bondy-chvatal-closure-well-defined
kind: lemma
title: "The Bondy-Chvatal closure is independent of the order of eligible edge additions"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-bondy-chvatal-closure, def-graph-adjacency-incidence-neighbourhood-and-degree, thm-induction-principle, def-finite-cardinality]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Applied Combinatorics, Eulerian and Hamiltonian Graphs"
      url: "https://opentext.uleth.ca/Combinatorics/sect_Euler-Hamilton.html"
pipeline_run: null
---

## Statement

For every finite simple graph $G$, all maximal sequences of eligible edge
additions in the Bondy-Chvatal procedure terminate at the same graph.
Consequently $\operatorname{cl}(G)$ is well defined.

## Facts & Assumptions

**Given:** A finite simple graph $G$ on a fixed $n$-vertex set.

[F1] An absent edge $uv$ is eligible when $\deg(u)+\deg(v)\ge n$, and a maximal sequence stops only when no eligible nonedge remains ([[def-bondy-chvatal-closure]]).

[F2] Adding edges cannot decrease any vertex degree ([[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

[L1] Induction proves a statement for all natural numbers from a base case and an induction step ([[thm-induction-principle]]).

[F3] A finite simple graph has finitely many possible edges and hence finitely many nonedges ([[def-finite-cardinality]]).

## Proof

**Proof technique:** induction on the number of nonedges.

1.1 If $G$ has no nonedges, no addition is possible and every maximal sequence terminates at $G$. [F1, F3, base]

1.2 Assume the claimed uniqueness holds for every graph with fewer than $k$ nonedges, and let $G$ have $k>0$ nonedges. Once a nonedge is eligible, it remains eligible after other edges are added because degrees do not decrease. [F1, F2, ih]

2.1 If $G$ has no eligible nonedge, every maximal sequence is empty. Otherwise compare two maximal sequences, whose first added edges are $e$ and $f$. If $e=f$, their tails start at the same graph $G+e$, which has fewer than $k$ nonedges, so the induction hypothesis gives the same terminal graph. [step 1.2, F1, F3, ih, cases]

2.2 If $e\ne f$, persistence from step 1.2 makes $f$ eligible after adding $e$ and $e$ eligible after adding $f$. Thus both first-step graphs can legally reach $G+e+f$. Applying the induction hypothesis inside $G+e$ compares its given tail with the tail beginning by $f$; applying it inside $G+f$ compares its given tail with the tail beginning by $e$. Both therefore have the same terminal graph as a maximal continuation from $G+e+f$. [step 1.2, F3, ih]

3.1 The cases in steps 2.1 and 2.2 establish uniqueness for graphs with $k$ nonedges. By induction, all finite graphs have a unique terminal graph, so the closure is independent of the addition order. [step 1.1, step 2.1, step 2.2, L1, discharge-induction] ∎
