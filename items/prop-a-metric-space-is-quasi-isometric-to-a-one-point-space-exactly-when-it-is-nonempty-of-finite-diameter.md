---
id: prop-a-metric-space-is-quasi-isometric-to-a-one-point-space-exactly-when-it-is-nonempty-of-finite-diameter
kind: proposition
title: "The nonempty metric spaces quasi-isometric to a one-point space are exactly those of finite diameter"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-coarse-lipschitz-map-and-quasi-isometric-embedding, def-coarsely-dense-subset-and-quasi-isometry, def-metric-bounded-diameter]
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

The nonempty metric spaces quasi-isometric to a one-point space are exactly those of finite diameter.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] A subset is coarsely dense when every point of the space is within a fixed distance of it, and a quasi-isometry is a coarse Lipschitz map admitting a coarse Lipschitz quasi-inverse ([[def-coarsely-dense-subset-and-quasi-isometry]]).

[L1] A map is $(L,C)$-coarse Lipschitz when $d(f(x),f(x'))\le L\,d(x,x')+C$, and an $(L,C)$-quasi-isometric embedding when in addition $L^{-1}d(x,x')-C\le d(f(x),f(x'))$ ([[def-coarse-lipschitz-map-and-quasi-isometric-embedding]]).

[L2] **Bounded subset.** $A$ is **bounded** if $A = \emptyset$ or there are $x_0 \in X$ and a real $r > 0$ with $A \subseteq B(x_0, r)$. ([[def-metric-bounded-diameter]]).


## Proof

**Proof technique:** direct.

1.1 Let $X$ be nonempty and bounded, so $X\subseteq B(x_0,r)$ for some $x_0\in X$ and $r>0$. The constant map $c:X\to\{\ast\}$ and the map $s:\{\ast\}\to X$ with $s(\ast)=x_0$ are coarse Lipschitz; one has $c\circ s=\operatorname{id}_{\{\ast\}}$, and for every $x\in X$ the distance between $s(c(x))=x_0$ and $x$ is less than $r$. Hence $c$ is a quasi-isometry. [F1, L1, L2, choose]

2.1 Conversely, if $c:X\to\{\ast\}$ is a quasi-isometry and $s:\{\ast\}\to X$ is a quasi-inverse, then for some $r>0$ every $x\in X$ satisfies $d_X(s(c(x)),x)=d_X(s(\ast),x)<r$. Thus $X\subseteq B(s(\ast),r)$ and is bounded, hence has finite diameter. [F1, L2, step 1.1] ∎
