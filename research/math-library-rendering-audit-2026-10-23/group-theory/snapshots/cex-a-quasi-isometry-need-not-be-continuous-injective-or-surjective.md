---
id: cex-a-quasi-isometry-need-not-be-continuous-injective-or-surjective
kind: counterexample
title: "A single map exhibiting a quasi-isometry that is discontinuous, non-injective and non-surjective"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-coarse-lipschitz-map-and-quasi-isometric-embedding, def-coarsely-dense-subset-and-quasi-isometry, lem-integer-part, lem-real-line-is-a-metric-space, thm-metric-continuity-characterisations]
aliases: []
landmark: false
proof_strategy: constructive
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

A quasi-isometry must be continuous, injective, or surjective.

## Facts & Assumptions

**Given:** The proposed claim together with the witness named in the Statement refuted.

[F1] A map is $(L,C)$-coarse Lipschitz when $d(f(x),f(x'))\le L\,d(x,x')+C$, and an $(L,C)$-quasi-isometric embedding when in addition $L^{-1}d(x,x')-C\le d(f(x),f(x'))$ ([[def-coarse-lipschitz-map-and-quasi-isometric-embedding]]).

[L1] A subset is coarsely dense when every point of the space is within a fixed distance of it, and a quasi-isometry is a coarse Lipschitz map admitting a coarse Lipschitz quasi-inverse ([[def-coarsely-dense-subset-and-quasi-isometry]]).

[L2] It is written $\lfloor x \rfloor$ and called the **integer part**, or **floor**, of $x$. ([[lem-integer-part]]).

[L3] Define $d_{\mathbb{R}}: \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ by $d_{\mathbb{R}}(x,y):= |x - y|$. ([[lem-real-line-is-a-metric-space]]).

[L4] - **(a)** $f$ is continuous at every point of $X$ in the $\varepsilon$-$\delta$ sense. ([[thm-metric-continuity-characterisations]]).


## Counterexample

**Proof technique:** constructive.

1.1 Let $f:\mathbb R\to\mathbb R$ be $f(x)=2\lfloor x/2\rfloor$, whose image is the even integers, and let $\iota$ be the inclusion of that image into $\mathbb R$. Then $\iota$ is coarse Lipschitz, $f(2m)=2m$ for every even integer $2m$, and every real $x$ satisfies $|x-f(x)|<2$; so $f$ is a quasi-isometry. [F1, L1, L2, L3, construct]

2.1 It is discontinuous at every even integer, non-injective on each half-open interval $[2m,2m+2)$, and misses every odd integer, so all three failures occur in one map. [L2, L4, step 1.1, discharge-construct] ∎
