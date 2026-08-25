---
id: fs-the-word-metric-is-right-invariant
kind: false-statement
title: "FALSE: every word metric is invariant under right translation"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-word-metric, thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph, prop-right-translation-moves-every-point-of-a-word-metric-space-the-same-bounded-distance]
aliases: []
landmark: false
proof_strategy: contradiction
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
## Statement refuted

every word metric is invariant under right translation.

## Facts & Assumptions

**Given:** The proposed claim together with the witness named in the Statement refuted.

[F1] The word metric of $G$ with respect to $S$ is $d_S(g,h)=|g^{-1}h|_S$ ([[def-word-metric]]).

[L1] The word metric is a left-invariant metric and coincides with the path metric of the Cayley graph ([[thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph]]).

[L2] Right translation by a fixed element displaces every point of a word metric space by exactly the word length of that element ([[prop-right-translation-moves-every-point-of-a-word-metric-space-the-same-bounded-distance]]).


## Refutation

**Proof technique:** contradiction.

1.1 The claim asserts $d_S(gk,hk)=d_S(g,h)$ for all $g,h,k$. [F1, L1, assume-contra]

2.1 In the free group on two generators with its free basis, take $g=e$, $h=a$ and $k=b$: the left sides differ, because $d_S(b,ab)=|b^{-1}ab|_S=3$ while $d_S(e,a)=1$. [F1, L2, step 1.1, discharge-contradiction] ∎
