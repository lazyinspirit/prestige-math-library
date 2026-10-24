---
id: prop-isometries-bilipschitz-equivalences-and-quasi-isometries-form-a-hierarchy
kind: proposition
title: "Every isometry is a bilipschitz equivalence and every bilipschitz equivalence is a quasi-isometry, and two metrics on one set are Lipschitz equivalent exactly when the identity is a bilipschitz equivalence between them"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-coarse-lipschitz-map-and-quasi-isometric-embedding, def-coarsely-dense-subset-and-quasi-isometry, def-bilipschitz-embedding-and-bilipschitz-equivalence, def-isometry-and-metric-embedding, def-equivalent-metrics, thm-metric-equivalence-hierarchy]
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

Every isometry is a bilipschitz equivalence and every bilipschitz equivalence is a quasi-isometry, and two metrics on one set are Lipschitz equivalent exactly when the identity is a bilipschitz equivalence between them.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] A map is a bilipschitz embedding when $c^{-1}d(x,x')\le d(f(x),f(x'))\le c\,d(x,x')$ for some $c>0$, and a bilipschitz equivalence when it is a bijective such map with bilipschitz inverse ([[def-bilipschitz-embedding-and-bilipschitz-equivalence]]).

[L1] A map is $(L,C)$-coarse Lipschitz when $d(f(x),f(x'))\le L\,d(x,x')+C$, and an $(L,C)$-quasi-isometric embedding when in addition $L^{-1}d(x,x')-C\le d(f(x),f(x'))$ ([[def-coarse-lipschitz-map-and-quasi-isometric-embedding]]).

[L2] A subset is coarsely dense when every point of the space is within a fixed distance of it, and a quasi-isometry is a coarse Lipschitz map admitting a coarse Lipschitz quasi-inverse ([[def-coarsely-dense-subset-and-quasi-isometry]]).

[L3] **Isometric embedding and isometry.** A function $f: X \to Y$ is an **isometric embedding** if ([[def-isometry-and-metric-embedding]]).

[L4] - $d$ and $d'$ are **topologically equivalent** if they have the same metric topology: $$\mathcal{T}_d = \mathcal{T}_{d'}.$$ - $d$ and $d'$ are **uniformly equivalent** if for every real $\varepsilon > 0$ there are reals $\delta > 0$ and $\delta' > 0$ such that, for all $x, y \in X$, $$d(x,y) < \delta \;\Longrightarrow\; d'(x,y) < \varepsilon \qquad \text{and} \qquad d'(x,y) < \delta' \;\Longrightarrow\; d(x,y) < \varepsilon.$$ - $d$ and $d'$ are **Lipschitz equivalent** if there are reals $\alpha, \beta > 0$ with $$\alpha\, d(x,y) \;\le\; d'(x,y) \;\le\; \beta\, d(x,y) \qquad \text{for all } x, y \in X.$$ ([[def-equivalent-metrics]]).

[L5] If $d$ and $d'$ are Lipschitz equivalent, they are uniformly equivalent. ([[thm-metric-equivalence-hierarchy]]).


## Proof

**Proof technique:** direct.

1.1 An isometry is a bilipschitz equivalence with multiplicative constant one. [F1, L3]

2.1 If $f:X\to Y$ is a bilipschitz equivalence, then $f$ and $f^{-1}$ are both coarse Lipschitz with additive constant zero, and the composites are the identities; hence $f$ is a quasi-isometry. [F1, L1, L2, step 1.1]

3.1 Two metrics on one set are Lipschitz equivalent exactly when the identity between them is a bilipschitz equivalence; this is a comparison of two definitions written on the same data. [F1, L4, L5, step 2.1] ∎
