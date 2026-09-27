---
id: cor-quasi-isometries-are-exactly-the-coarsely-dense-quasi-isometric-embeddings
kind: corollary
title: "A map is a quasi-isometry exactly when it is a quasi-isometric embedding with coarsely dense image"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-coarsely-dense-subset-and-quasi-isometry, def-coarse-lipschitz-map-and-quasi-isometric-embedding, thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-05-receipts.jsonl (cor-quasi-isometries-are-exactly-the-coarsely-dense-quasi-isometric-embeddings). No independent judge or whole-closure certification.
    delegated_by: owner
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

1.2 Conversely, let $g$ be a coarse Lipschitz quasi-inverse of the coarse Lipschitz map $f$. If $d_Y(f(g(y)),y)\le R$ for every $y\in Y$, then every target point lies within distance $R$ of $f[X]$, so the image of $f$ is coarsely dense. [F1, given]

2.1 Choose coarse Lipschitz bounds $d_Y(fx,fx')\le A_f d_X(x,x')+B_f$ and $d_X(gy,gy')\le A_g d_Y(y,y')+B_g$, enlarging $A_g$ to at least $1$. If $d_X(g(f(x)),x)\le D$ for every $x$, the triangle inequality gives $d_X(x,x')\le2D+A_gd_Y(fx,fx')+B_g$. Thus $d_Y(fx,fx')\ge A_g^{-1}d_X(x,x')-(2D+B_g)/A_g$. Enlarging the multiplicative and additive constants to dominate both this lower bound and the upper bound for $f$ makes $f$ a quasi-isometric embedding. Combined with step 1.2, this proves the converse. AC is used only for the forward implication through [L1]. [F1, L1, step 1.2, algebra] ∎
