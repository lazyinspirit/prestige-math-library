---
id: thm-redei-tournament-hamilton-path
kind: theorem
title: "Redei's theorem: every nonempty tournament has a directed Hamilton path"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-tournament, def-directed-walk-trail-path-cycle-and-strong-connectivity, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
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

Every nonempty finite tournament has a directed path containing every vertex
exactly once.

## Facts & Assumptions

**Given:** A nonempty finite tournament $T$.

[F1] Between each pair of distinct tournament vertices exactly one of the two possible arcs occurs ([[def-tournament]]).

[F2] A directed path follows each displayed arc and has no repeated vertex ([[def-directed-walk-trail-path-cycle-and-strong-connectivity]]).

[L1] Induction proves a statement for every natural number from a base case and an induction step ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction on $n=|V(T)|$.

1.1 If $n=1$, the one-vertex directed path contains every vertex. [F2, base]

1.2 Assume every tournament on $n-1$ vertices has a directed Hamilton path, where $n>1$. Remove a vertex $x$. The remaining tournament has, by the induction hypothesis, a directed Hamilton path $v_1,v_2,\ldots,v_{n-1}$. [F1, ih]

2.1 If $xv_1$ is an arc, prepend $x$. If no arc $xv_j$ exists, [F1] gives $v_jx$ for every $j$, so append $x$. Otherwise let $j$ be the least index with arc $xv_j$; then $j>1$ and minimality plus [F1] gives the arc $v_{j-1}x$. Insert $x$ between $v_{j-1}$ and $v_j$. [step 1.2, F1, cases]

3.1 In every case the resulting list follows directed arcs and contains each vertex of $T$ exactly once, so it is a directed Hamilton path. [step 1.2, step 2.1, F2]

4.1 The base case and induction step prove Redei's theorem for every nonempty finite tournament. [step 1.1, step 1.2, step 3.1, L1, discharge-induction] ∎
