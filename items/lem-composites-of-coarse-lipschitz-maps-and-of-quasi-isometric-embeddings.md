---
id: lem-composites-of-coarse-lipschitz-maps-and-of-quasi-isometric-embeddings
kind: lemma
title: "Composites of coarse Lipschitz maps and of quasi-isometric embeddings are again such, with explicit constants"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-coarse-lipschitz-map-and-quasi-isometric-embedding]
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

Composites of coarse Lipschitz maps and of quasi-isometric embeddings are again such, with explicit constants.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] A map is $(L,C)$-coarse Lipschitz when $d(f(x),f(x'))\le L\,d(x,x')+C$, and an $(L,C)$-quasi-isometric embedding when in addition $L^{-1}d(x,x')-C\le d(f(x),f(x'))$ ([[def-coarse-lipschitz-map-and-quasi-isometric-embedding]]).


## Proof

**Proof technique:** direct.

1.1 Substituting the inequality for the inner map into the one for the outer map bounds the composite above with constants $L_1L_2$ and $L_2C_1+C_2$. [F1, algebra]

2.1 The same substitution on the lower bounds gives the other inequality, with the constants recorded rather than absorbed. [F1, step 1.1] ∎
