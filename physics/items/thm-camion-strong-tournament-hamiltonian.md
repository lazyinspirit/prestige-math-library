---
id: thm-camion-strong-tournament-hamiltonian
kind: theorem
title: "Camion's theorem: every strongly connected tournament on at least three vertices has a directed Hamilton cycle"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-tournament, def-directed-walk-trail-path-cycle-and-strong-connectivity, lem-tournament-cycle-insertion, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Tournament"
      url: "https://encyclopediaofmath.org/wiki/Tournament"
    - title: "Robin Wilson, Introduction to Graph Theory"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/wilsongraph.pdf"
pipeline_run: null
---

## Statement

Every strongly connected finite tournament on at least three vertices has a
directed Hamilton cycle.

## Facts & Assumptions

**Given:** A strongly connected finite tournament $T$ with at least three vertices.

[F1] A tournament has no directed loops, and every two distinct vertices are joined by exactly one directed arc ([[def-tournament]]).

[F2] Strong connectivity gives a directed path for every ordered pair, and a directed cycle has at least three distinct vertices ([[def-directed-walk-trail-path-cycle-and-strong-connectivity]]).

[L1] An outside vertex with both an in-neighbour and an out-neighbour on a directed cycle can be inserted to make a longer directed cycle ([[lem-tournament-cycle-insertion]]).

[F3] A nonempty finite set of cycle lengths has a greatest member ([[def-finite-cardinality]]).

## Proof

**Proof technique:** contradiction.

1.1 Strong connectivity gives a positive directed closed walk. Choose one of minimum positive length. It cannot have length one or two by [F1], and minimality prevents a repeated internal vertex, so it is a directed cycle of length at least three. By finiteness, choose a directed cycle $C$ of greatest length. [given, F1, F2, F3]

2.1 Assume for contradiction that $C$ omits at least one vertex. By [L1] and maximality, every vertex outside $C$ either sends arcs to every vertex of $C$ or receives arcs from every vertex of $C$. Call these two classes $A$ and $B$, respectively. [step 1.1, L1, F1, assume-contra]

3.1 Strong connectivity forces both $A$ and $B$ to be nonempty: if $A$ were empty no outside vertex could reach $C$, while if $B$ were empty $C$ could not reach an outside vertex. A shortest directed path from $C$ to a vertex of $A$ begins by entering $B$ and at some first transition contains an arc $b a$ with $b\in B$ and $a\in A$. [step 2.1, F2, cases]

4.1 Choose any cycle arc $c_i c_{i+1}$. Since $b\in B$ and $a\in A$, the arcs $c_i b$, $ba$, and $a c_{i+1}$ all occur. Replacing $c_i c_{i+1}$ by this three-arc path produces a directed cycle containing every vertex of $C$ together with $a,b$, contradicting the maximality of $C$. [step 1.1, step 2.1, step 3.1, F1, F2]

5.1 The supposition in step 2.1 is impossible. Hence $C$ contains every vertex of $T$ and is a directed Hamilton cycle. [step 2.1, step 4.1, discharge-contradiction] ∎
