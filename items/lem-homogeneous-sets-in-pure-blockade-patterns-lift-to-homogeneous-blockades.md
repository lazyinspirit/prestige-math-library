---
id: lem-homogeneous-sets-in-pure-blockade-patterns-lift-to-homogeneous-blockades
kind: lemma
title: "Homogeneous sets in pure-blockade patterns lift to complete or anticomplete blockades"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-pattern-graph-of-a-pure-blockade, def-complete-anticomplete-pure-and-x-sparse-blockades, def-blockade-length-and-width]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Huang, Ju, and Zhou, Erdős–Hajnal beyond the five-vertex path, Claim 5.1.2"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Statement

Let $(A_1,\ldots,A_t)$ be a pure blockade of width at least $s>0$, and let
$\varnothing\ne S\subseteq[t]$. If $S$ is a clique in its pattern graph, the blocks indexed
by $S$ form a complete $(|S|,s)$-blockade; if $S$ is a stable set, they form
an anticomplete $(|S|,s)$-blockade.

## Facts & Assumptions

**Given:** A pure blockade $(A_1,\ldots,A_t)$ of width at least $s$ and a
nonempty clique or stable set $S$ in its pattern graph.

[F1] Pattern vertices $i,j$ are adjacent exactly when $A_i$ is complete to $A_j$; the blockade's purity makes the pattern well defined ([[def-pattern-graph-of-a-pure-blockade]]).

[F2] Complete and anticomplete blockades require every distinct pair of blocks to be respectively complete and anticomplete ([[def-complete-anticomplete-pure-and-x-sparse-blockades]]).

[F3] The original blocks are pairwise disjoint and nonempty, and width at least $s$ means every selected block has at least $s$ vertices ([[def-blockade-length-and-width]]).

## Proof

**Proof technique:** cases.

1.1 The selected sequence has $|S|$ pairwise disjoint nonempty blocks of size at least $s$ by [F3]. [F3]

2.1 If $S$ is a clique, each pair of its pattern vertices is adjacent, so [F1] makes every selected pair complete. Thus [F2] makes the sequence a complete $(|S|,s)$-blockade. [assume-case clique, F1, F2, step 1.1]

2.2 If $S$ is a stable set, no selected pattern pair is adjacent. Since the original blockade is pure, [F1] makes every selected pair anticomplete; [F2] therefore gives an anticomplete $(|S|,s)$-blockade. [assume-case stable, F1, F2, step 1.1]

3.1 The clique and stable-set cases exhaust the stated alternatives. [step 2.1, step 2.2, cases-exhaustive] ∎
