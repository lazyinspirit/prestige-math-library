---
id: prop-a-coarse-lipschitz-map-between-finitely-generated-groups-with-word-metrics-is-lipschitz
kind: proposition
title: "A coarse Lipschitz map between word metric spaces of finitely generated groups is Lipschitz"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finitely-generated-group, def-word-length-with-respect-to-a-generating-set, def-word-metric, thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph, def-coarse-lipschitz-map-and-quasi-isometric-embedding, def-lipschitz-holder-contraction]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), 264 pp."
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory (with an appendix by B. Nica), 837 pp."
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---
## Statement

A coarse Lipschitz map between word metric spaces of finitely generated groups is Lipschitz.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] A map is $(L,C)$-coarse Lipschitz when $d(f(x),f(x'))\le L\,d(x,x')+C$, and an $(L,C)$-quasi-isometric embedding when in addition $L^{-1}d(x,x')-C\le d(f(x),f(x'))$ ([[def-coarse-lipschitz-map-and-quasi-isometric-embedding]]).

[L1] The word length $|g|_S$ is the least $n$ such that $g$ is a product of $n$ elements of $S\cup S^{-1}$ ([[def-word-length-with-respect-to-a-generating-set]]).

[L2] The word metric of $G$ with respect to $S$ is $d_S(g,h)=|g^{-1}h|_S$ ([[def-word-metric]]).

[L3] The word metric is a left-invariant metric and coincides with the path metric of the Cayley graph ([[thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph]]).

[L4] A group is finitely generated when some finite subset generates it ([[def-finitely-generated-group]]).

[L5] - $f$ is **Lipschitz** with **constant** $L$, where $L \in \mathbb{R}$ and $L \ge 0$, if $$d_Y\big(f(x), f(x')\big) \;\le\; L \, d_X(x,x') \qquad \text{for all } x, x' \in X.$$ $f$ is *Lipschitz* if it is Lipschitz with some such constant. ([[def-lipschitz-holder-contraction]]).


## Proof

**Proof technique:** direct.

1.1 Two points at distance one differ by a single generator, so their images are at distance at most $L+C$. [F1, L1, L2, L4]

2.1 Chaining along a shortest expression bounds the image distance by $(L+C)$ times the source distance. [L1, L2, L3, step 1.1]

3.1 So the map is Lipschitz with constant $L+C$; the argument uses that the word metric takes integer values and that adjacent points are at distance one, so it does not extend to an arbitrary metric source. [F1, L5, step 2.1] ∎
