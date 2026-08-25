---
id: fs-a-quasi-isometry-is-continuous-or-bijective
kind: false-statement
title: "FALSE: every quasi-isometry is continuous, or bijective"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-coarsely-dense-subset-and-quasi-isometry, def-coarse-lipschitz-map-and-quasi-isometric-embedding, lem-integer-part, lem-real-line-is-a-metric-space]
aliases: []
landmark: false
proof_strategy: contradiction
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
## Statement refuted

every quasi-isometry is continuous, or bijective.

## Facts & Assumptions

**Given:** The proposed claim together with the witness named in the Statement refuted.

[F1] A subset is coarsely dense when every point of the space is within a fixed distance of it, and a quasi-isometry is a coarse Lipschitz map admitting a coarse Lipschitz quasi-inverse ([[def-coarsely-dense-subset-and-quasi-isometry]]).

[L1] A map is $(L,C)$-coarse Lipschitz when $d(f(x),f(x'))\le L\,d(x,x')+C$, and an $(L,C)$-quasi-isometric embedding when in addition $L^{-1}d(x,x')-C\le d(f(x),f(x'))$ ([[def-coarse-lipschitz-map-and-quasi-isometric-embedding]]).

[L2] It is written $\lfloor x \rfloor$ and called the **integer part**, or **floor**, of $x$. ([[lem-integer-part]]).

[L3] Define $d_{\mathbb{R}}: \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ by $d_{\mathbb{R}}(x,y):= |x - y|$. ([[lem-real-line-is-a-metric-space]]).


## Refutation

**Proof technique:** contradiction.

1.1 The claim asserts that every quasi-isometry is continuous, or that every quasi-isometry is bijective. [F1, assume-contra]

2.1 The map $f(x)=2\lfloor x/2\rfloor$ is a quasi-isometry of $\mathbb R$: the inclusion of the even integers is a coarse Lipschitz quasi-inverse, since $f(2m)=2m$ and every real $x$ satisfies $|x-f(x)|<2$. But $f$ is not bijective, and it is not continuous at any even integer. So it refutes both readings at once. [F1, L1, L2, L3, step 1.1, discharge-contradiction] ∎
