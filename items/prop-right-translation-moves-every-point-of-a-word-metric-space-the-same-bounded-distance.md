---
id: prop-right-translation-moves-every-point-of-a-word-metric-space-the-same-bounded-distance
kind: proposition
title: "Right translation by a fixed element displaces every point of a word metric space by exactly the word length of that element"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-word-length-with-respect-to-a-generating-set, def-word-metric, thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph]
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

Right translation by a fixed element displaces every point of a word metric space by exactly the word length of that element.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] The word metric of $G$ with respect to $S$ is $d_S(g,h)=|g^{-1}h|_S$ ([[def-word-metric]]).

[L1] The word length $|g|_S$ is the least $n$ such that $g$ is a product of $n$ elements of $S\cup S^{-1}$ ([[def-word-length-with-respect-to-a-generating-set]]).

[L2] The word metric is a left-invariant metric and coincides with the path metric of the Cayley graph ([[thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph]]).

## Proof

**Proof technique:** direct.

1.1 Left invariance gives $d_S(h,hg)=|g|_S$ for every $h$, so right translation by $g$ displaces every point by the same amount. [F1, L1, L2]

2.1 Hence right translation by $g$ is at bounded distance $|g|_S$ from the identity map, and it is the identity exactly when that displacement is zero. [F1, L1, L2, step 1.1] ∎
