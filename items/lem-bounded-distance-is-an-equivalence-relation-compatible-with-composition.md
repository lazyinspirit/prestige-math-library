---
id: lem-bounded-distance-is-an-equivalence-relation-compatible-with-composition
kind: lemma
title: "Bounded distance is an equivalence relation and is preserved by pre-composition and by post-composition with a coarse Lipschitz map"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-coarse-lipschitz-map-and-quasi-isometric-embedding, def-bounded-distance-between-maps]
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

Bounded distance is an equivalence relation and is preserved by pre-composition and by post-composition with a coarse Lipschitz map.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] Two maps into a metric space are at bounded distance when the distance between their values is bounded uniformly ([[def-bounded-distance-between-maps]]).

[L1] A map is $(L,C)$-coarse Lipschitz when $d(f(x),f(x'))\le L\,d(x,x')+C$, and an $(L,C)$-quasi-isometric embedding when in addition $L^{-1}d(x,x')-C\le d(f(x),f(x'))$ ([[def-coarse-lipschitz-map-and-quasi-isometric-embedding]]).


## Proof

**Proof technique:** direct.

1.1 Reflexivity, symmetry and transitivity follow from the metric axioms with the bounds added. [F1]

2.1 Pre-composition changes no value, so it preserves the bound exactly. [F1, step 1.1]

3.1 Post-composition with an $(L,C)$-coarse Lipschitz map multiplies the bound by $L$ and adds $C$; without the coarse Lipschitz hypothesis the bound need not survive. [F1, L1, step 1.1] ∎
