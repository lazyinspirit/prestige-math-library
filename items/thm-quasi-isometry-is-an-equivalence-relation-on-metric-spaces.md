---
id: thm-quasi-isometry-is-an-equivalence-relation-on-metric-spaces
kind: theorem
title: "Being quasi-isometric is reflexive, symmetric and transitive"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-bounded-distance-is-an-equivalence-relation-compatible-with-composition, def-coarsely-dense-subset-and-quasi-isometry, lem-composites-of-coarse-lipschitz-maps-and-of-quasi-isometric-embeddings]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), 264 pp."
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory (with an appendix by B. Nica), 837 pp."
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---
## Statement

Being quasi-isometric is reflexive, symmetric and transitive.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] A subset is coarsely dense when every point of the space is within a fixed distance of it, and a quasi-isometry is a coarse Lipschitz map admitting a coarse Lipschitz quasi-inverse ([[def-coarsely-dense-subset-and-quasi-isometry]]).

[L1] Bounded distance is an equivalence relation, is preserved by pre-composition, and is preserved by post-composition with a coarse Lipschitz map ([[lem-bounded-distance-is-an-equivalence-relation-compatible-with-composition]]).

[L2] Composites of coarse Lipschitz maps and of quasi-isometric embeddings are again such, with explicit constants ([[lem-composites-of-coarse-lipschitz-maps-and-of-quasi-isometric-embeddings]]).

## Proof

**Proof technique:** direct.

1.1 For every metric space $X$, the identity map $\operatorname{id}_X$ is coarse Lipschitz and is its own quasi-inverse, so $X$ is quasi-isometric to itself. [F1]

2.1 If $g$ is a quasi-inverse of a quasi-isometry $f:X\to Y$, then $f$ is a quasi-inverse of $g$, so $Y$ is quasi-isometric to $X$. [F1, step 1.1]

3.1 If $f:X\to Y$ has quasi-inverse $g$ and $h:Y\to Z$ has quasi-inverse $k$, then $h\circ f$ is coarse Lipschitz and $g\circ k$ is a coarse Lipschitz quasi-inverse of it: the composites $$ (g\circ k)\circ(h\circ f)=g\circ(k\circ h)\circ f \quad\text{and}\quad (h\circ f)\circ(g\circ k)=h\circ(f\circ g)\circ k $$ are at bounded distance from the relevant identities by compatibility of bounded distance with composition. Thus quasi-isometry is transitive. [F1, L1, L2, step 2.1] ∎
