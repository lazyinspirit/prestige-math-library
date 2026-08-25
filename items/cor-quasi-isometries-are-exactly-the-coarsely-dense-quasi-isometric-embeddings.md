---
id: cor-quasi-isometries-are-exactly-the-coarsely-dense-quasi-isometric-embeddings
kind: corollary
title: "A map is a quasi-isometry exactly when it is a quasi-isometric embedding with coarsely dense image"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-coarsely-dense-subset-and-quasi-isometry, thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse]
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

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

A map is a quasi-isometry exactly when it is a quasi-isometric embedding with coarsely dense image.

## Facts & Assumptions

**Given:** The hypotheses of the Statement, including the Axiom of Choice.

[F1] A subset is coarsely dense when every point of the space is within a fixed distance of it, and a quasi-isometry is a coarse Lipschitz map admitting a coarse Lipschitz quasi-inverse ([[def-coarsely-dense-subset-and-quasi-isometry]]).

[L1] Under the Axiom of Choice, a quasi-isometric embedding with coarsely dense image admits a quasi-inverse quasi-isometric embedding ([[thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse]]).


## Proof

**Proof technique:** direct.

1.1 If a map is a quasi-isometric embedding with coarsely dense image, the previous theorem supplies a quasi-inverse quasi-isometric embedding, so the map is a quasi-isometry. [F1, L1]

2.1 Conversely, if $g$ is a quasi-inverse of $f$ and $d_Y(f(g(y)),y)\le R$ for every $y\in Y$, then every target point lies within distance $R$ of $f[X]$, so the image of $f$ is coarsely dense. [F1, step 1.1] ∎
