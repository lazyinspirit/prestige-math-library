---
id: lem-a-map-at-bounded-distance-from-a-quasi-isometric-embedding-is-a-quasi-isometric-embedding
kind: lemma
title: "A map at bounded distance from a quasi-isometric embedding is one, with the additive constant enlarged"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-coarse-lipschitz-map-and-quasi-isometric-embedding, def-bounded-distance-between-maps, lem-bounded-distance-is-an-equivalence-relation-compatible-with-composition]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
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

A map at bounded distance from a quasi-isometric embedding is one, with the additive constant enlarged.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] A map is $(L,C)$-coarse Lipschitz when $d(f(x),f(x'))\le L\,d(x,x')+C$, and an $(L,C)$-quasi-isometric embedding when in addition $L^{-1}d(x,x')-C\le d(f(x),f(x'))$ ([[def-coarse-lipschitz-map-and-quasi-isometric-embedding]]).

[L1] Two maps into a metric space are at bounded distance when the distance between their values is bounded uniformly ([[def-bounded-distance-between-maps]]).

[L2] Bounded distance is an equivalence relation, is preserved by pre-composition, and is preserved by post-composition with a coarse Lipschitz map ([[lem-bounded-distance-is-an-equivalence-relation-compatible-with-composition]]).


## Proof

**Proof technique:** direct.

1.1 Two applications of the triangle inequality, one at each argument, relate the two maps’ distances up to twice the bound. [F1, L1]

2.1 Enlarging the additive constant by twice the bound gives both inequalities, with the multiplicative constant unchanged. [F1, L2, step 1.1] ∎
