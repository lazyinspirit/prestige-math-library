---
id: cor-a-bijective-quasi-isometry-between-finitely-generated-groups-is-a-bilipschitz-equivalence
kind: corollary
title: "A bijective quasi-isometry between word metric spaces of finitely generated groups is a bilipschitz equivalence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-coarse-lipschitz-map-and-quasi-isometric-embedding, def-coarsely-dense-subset-and-quasi-isometry, def-bilipschitz-embedding-and-bilipschitz-equivalence, prop-a-coarse-lipschitz-map-between-finitely-generated-groups-with-word-metrics-is-lipschitz, def-lipschitz-holder-contraction]
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

A bijective quasi-isometry between word metric spaces of finitely generated groups is a bilipschitz equivalence.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] A subset is coarsely dense when every point of the space is within a fixed distance of it, and a quasi-isometry is a coarse Lipschitz map admitting a coarse Lipschitz quasi-inverse ([[def-coarsely-dense-subset-and-quasi-isometry]]).

[L1] A coarse Lipschitz map between word metric spaces of finitely generated groups is Lipschitz ([[prop-a-coarse-lipschitz-map-between-finitely-generated-groups-with-word-metrics-is-lipschitz]]).

[L2] A map is $(L,C)$-coarse Lipschitz when $d(f(x),f(x'))\le L\,d(x,x')+C$, and an $(L,C)$-quasi-isometric embedding when in addition $L^{-1}d(x,x')-C\le d(f(x),f(x'))$ ([[def-coarse-lipschitz-map-and-quasi-isometric-embedding]]).

[L3] A map is a bilipschitz embedding when $c^{-1}d(x,x')\le d(f(x),f(x'))\le c\,d(x,x')$ for some $c>0$, and a bilipschitz equivalence when it is a bijective such map with bilipschitz inverse ([[def-bilipschitz-embedding-and-bilipschitz-equivalence]]).

[L4] - $f$ is **Lipschitz** with **constant** $L$, where $L \in \mathbb{R}$ and $L \ge 0$, if $$d_Y\big(f(x), f(x')\big) \;\le\; L \, d_X(x,x') \qquad \text{for all } x, x' \in X.$$ $f$ is *Lipschitz* if it is Lipschitz with some such constant. ([[def-lipschitz-holder-contraction]]).


## Proof

**Proof technique:** direct.

1.1 Let $f:G\to H$ be a bijective quasi-isometry, and let $g:H\to G$ be a coarse Lipschitz quasi-inverse. If $d_G(g(f(x)),x)\le R$ for every $x\in G$ and $g$ is $(A,B)$-coarse Lipschitz, then for $y=f(x)$ and $y'=f(x')$ one has $$ d_G(f^{-1}(y),f^{-1}(y'))=d_G(x,x')\le A\,d_H(y,y')+(B+2R). $$ So the set-theoretic inverse $f^{-1}$ is coarse Lipschitz. [F1, L2]

2.1 Both $f$ and $f^{-1}$ are therefore coarse Lipschitz, hence Lipschitz by the previous proposition. [L1, L4, step 1.1]

3.1 If $f$ has Lipschitz constant $L$ and $f^{-1}$ has Lipschitz constant $M$, then $$ M^{-1}d_G(x,x')\le d_H(f(x),f(x'))\le L\,d_G(x,x') $$ for all $x,x'\in G$, so $f$ is a bilipschitz equivalence. [L3, L4, step 2.1] ∎
