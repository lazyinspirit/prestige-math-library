---
id: prop-a-quasi-isometric-embedding-carries-a-quasi-geodesic-to-a-quasi-geodesic
kind: proposition
title: "The composite of a quasi-geodesic with a quasi-isometric embedding is a quasi-geodesic, with computed constants"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-coarse-lipschitz-map-and-quasi-isometric-embedding, lem-composites-of-coarse-lipschitz-maps-and-of-quasi-isometric-embeddings, def-quasi-geodesic-and-quasi-geodesic-metric-space]
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

The composite of a quasi-geodesic with a quasi-isometric embedding is a quasi-geodesic, with computed constants.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] A $(c,b)$-quasi-geodesic is a $(c,b)$-quasi-isometric embedding of a closed real interval, and a space is $(c,b)$-quasi-geodesic when every two of its points are joined by one ([[def-quasi-geodesic-and-quasi-geodesic-metric-space]]).

[L1] A map is $(L,C)$-coarse Lipschitz when $d(f(x),f(x'))\le L\,d(x,x')+C$, and an $(L,C)$-quasi-isometric embedding when in addition $L^{-1}d(x,x')-C\le d(f(x),f(x'))$ ([[def-coarse-lipschitz-map-and-quasi-isometric-embedding]]).

[L2] Composites of coarse Lipschitz maps and of quasi-isometric embeddings are again such, with explicit constants ([[lem-composites-of-coarse-lipschitz-maps-and-of-quasi-isometric-embeddings]]).


## Proof

**Proof technique:** direct.

1.1 A quasi-geodesic is by definition a quasi-isometric embedding of a closed interval. [F1, L1, L2]

2.1 The composition lemma applied to two quasi-isometric embeddings gives the conclusion, with the constants that lemma records. [F1, L2, step 1.1] ∎
