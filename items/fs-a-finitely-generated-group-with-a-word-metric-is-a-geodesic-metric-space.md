---
id: fs-a-finitely-generated-group-with-a-word-metric-is-a-geodesic-metric-space
kind: false-statement
title: "FALSE: a nontrivial finitely generated group with a word metric is a geodesic metric space"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-word-metric, def-geodesic-and-geodesic-metric-space, cor-a-finitely-generated-group-with-a-word-metric-is-a-quasi-geodesic-space]
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

a nontrivial finitely generated group with a word metric is a geodesic metric space.

## Facts & Assumptions

**Given:** The proposed claim together with the witness named in the Statement refuted.

[F1] A geodesic of length $L$ in a metric space is an isometric embedding of the interval $[0,L]$, and the space is geodesic when every two points are the endpoints of one ([[def-geodesic-and-geodesic-metric-space]]).

[L1] The word metric of $G$ with respect to $S$ is $d_S(g,h)=|g^{-1}h|_S$ ([[def-word-metric]]).

[L2] A group with the word metric of any generating set is a $(1,1)$-quasi-geodesic space ([[cor-a-finitely-generated-group-with-a-word-metric-is-a-quasi-geodesic-space]]).


## Refutation

**Proof technique:** contradiction.

1.1 The claim asserts that every two elements are the endpoints of an isometric embedding of a real interval. [F1, assume-contra]

2.1 A geodesic between two elements at distance one supplies points at every intermediate real distance, while a word metric takes only integer values. [F1, L1, step 1.1]

3.1 So no nontrivial group with a word metric is geodesic; the correct statement is that it is $(1,1)$-quasi-geodesic. [L2, step 2.1, discharge-contradiction] ∎
