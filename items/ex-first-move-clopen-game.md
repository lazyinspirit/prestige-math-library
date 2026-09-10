---
id: ex-first-move-clopen-game
kind: example
title: "A clopen game decided by the first move"
status: draft
origin: pipeline
deps: ["def-gale-stewart-games-on-pruned-trees", "def-baire-sequence-space"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Opening definitions of games and strategies"
      url: "https://arxiv.org/html/2401.09659v1"
---
## Example

On $T=\mathbb N^{<\omega}$ let $A=\{x:x(0)=0\}$. Player I wins by the strategy $\sigma(s)=0$ at every even-length position $s$. The payoff is clopen.

## Facts & Assumptions

[F1] Full-position strategies and their winning condition are in [[def-gale-stewart-games-on-pruned-trees]].

[F2] Finite-prefix cylinders form the topology of [[def-baire-sequence-space]].

## Verification

**Given:** The full natural-number tree, payoff $A$, and the constant-zero I strategy.

1.1 Every $s^\frown0$ belongs to the full tree, so $\sigma$ is a legal strategy, including at $s=\varnothing$. We have $A=N_{(0)}$ and $\mathcal N\setminus A=\bigcup_{k\geq1}N_{(k)}$, both open by F2. Hence $A$ is clopen. [given, F1, F2]

2.1 Every branch consistent with $\sigma$ satisfies $x(0)=\sigma(\varnothing)=0$, so belongs to $A$. For example, if II always plays $1$, the unique compatible branch is $(0,1,0,1,\ldots)$ and its first coordinate is $0$. The same first-coordinate calculation holds for every sequence of II moves, proving that $\sigma$ wins. QED. [F1, step 1.1]
