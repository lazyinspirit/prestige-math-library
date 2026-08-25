---
id: thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse
kind: theorem
title: "A quasi-isometric embedding with coarsely dense image has a quasi-inverse quasi-isometric embedding"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-coarse-lipschitz-map-and-quasi-isometric-embedding, def-bounded-distance-between-maps, def-coarsely-dense-subset-and-quasi-isometry, def-axiom-of-choice]
aliases: []
landmark: true
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

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

A quasi-isometric embedding with coarsely dense image has a quasi-inverse quasi-isometric embedding.

## Facts & Assumptions

**Given:** The hypotheses of the Statement, including the Axiom of Choice.

[F1] A subset is coarsely dense when every point of the space is within a fixed distance of it, and a quasi-isometry is a coarse Lipschitz map admitting a coarse Lipschitz quasi-inverse ([[def-coarsely-dense-subset-and-quasi-isometry]]).

[L1] A map is $(L,C)$-coarse Lipschitz when $d(f(x),f(x'))\le L\,d(x,x')+C$, and an $(L,C)$-quasi-isometric embedding when in addition $L^{-1}d(x,x')-C\le d(f(x),f(x'))$ ([[def-coarse-lipschitz-map-and-quasi-isometric-embedding]]).

[L2] Two maps into a metric space are at bounded distance when the distance between their values is bounded uniformly ([[def-bounded-distance-between-maps]]).

[A1] > Every family of nonempty sets has a choice function >. ([[def-axiom-of-choice]]).


## Proof

**Proof technique:** direct.

1.1 Let $f:X\to Y$ be an $(L,C)$-quasi-isometric embedding whose image is $R$-coarsely dense. By the definition of coarse density, for every $y\in Y$ the set $\{x\in X:d_Y(f(x),y)\le R\}$ is nonempty, so the Axiom of Choice gives a map $g:Y\to X$ with $d_Y(f(g(y)),y)\le R$ for every $y\in Y$. [F1, L1, A1, choose]

2.1 For $y,y'\in Y$, the upper inequality for $f$ gives $$ L^{-1}d_X(g(y),g(y'))-C\le d_Y(f(g(y)),f(g(y')))\le d_Y(y,y')+2R, $$ so $d_X(g(y),g(y'))\le L\,d_Y(y,y')+L(C+2R)$. Likewise $$ d_Y(y,y')\le d_Y(y,f(g(y)))+d_Y(f(g(y)),f(g(y')))+d_Y(f(g(y')),y') $$ is at most $2R+L\,d_X(g(y),g(y'))+C$, so $g$ is a quasi-isometric embedding. [L1, step 1.1]

3.1 By step 1.1 the composite $f\circ g$ is at bounded distance at most $R$ from $\operatorname{id}_Y$. Also $$ L^{-1}d_X(g(f(x)),x)-C\le d_Y(f(g(f(x))),f(x))\le R, $$ so $d_X(g(f(x)),x)\le L(C+R)$ for every $x\in X$; hence $g\circ f$ is at bounded distance from $\operatorname{id}_X$. Therefore $g$ is a coarse Lipschitz quasi-inverse of $f$. [F1, L2, step 1.1, step 2.1] ∎
