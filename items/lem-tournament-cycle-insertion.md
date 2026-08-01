---
id: lem-tournament-cycle-insertion
kind: lemma
title: "A tournament vertex having an in-neighbour and an out-neighbour on a directed cycle can be inserted into that cycle"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-tournament, def-directed-walk-trail-path-cycle-and-strong-connectivity]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
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

Let $C$ be a directed cycle in a tournament, and let $x$ be a vertex outside
$C$. If some vertex of $C$ sends an arc to $x$ and $x$ sends an arc to some
vertex of $C$, then the tournament has a directed cycle whose vertex set is
$V(C)\cup\{x\}$.

## Facts & Assumptions

**Given:** A directed cycle $C=(c_1,c_2,\ldots,c_k,c_1)$ and an outside vertex $x$ satisfying the two incidence hypotheses.

[F1] Between $x$ and each $c_i$, exactly one arc direction occurs ([[def-tournament]]).

[F2] A directed cycle follows its cyclic sequence of arcs and has distinct vertices before returning to its start ([[def-directed-walk-trail-path-cycle-and-strong-connectivity]]).

## Proof

**Proof technique:** constructive.

1.1 Mark a cycle vertex $c_i$ with $I$ when $c_i x$ is an arc and with $O$ when $xc_i$ is an arc. Both marks occur by hypothesis, and [F1] gives exactly one mark at each cycle vertex. Therefore somewhere around the cyclic order an $I$-marked vertex $c_i$ is followed by an $O$-marked vertex $c_{i+1}$. [given, F1, F2]

2.1 Replace the cycle arc $c_ic_{i+1}$ by the two arcs $c_ix$ and $xc_{i+1}$. All other cycle arcs remain unchanged, and $x$ is new, so the resulting closed directed walk is a directed cycle on $V(C)\cup\{x\}$. [step 1.1, F2, construct]

3.1 This explicitly constructs the required enlarged directed cycle. [step 2.1, discharge-construct] ∎
