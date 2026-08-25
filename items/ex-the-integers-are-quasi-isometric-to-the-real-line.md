---
id: ex-the-integers-are-quasi-isometric-to-the-real-line
kind: example
title: "The inclusion of $\\mathbb Z$ in $\\mathbb R$ is a quasi-isometry that is neither surjective nor a bilipschitz equivalence"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-coarse-lipschitz-map-and-quasi-isometric-embedding, def-coarsely-dense-subset-and-quasi-isometry, def-bilipschitz-embedding-and-bilipschitz-equivalence, def-word-metric, lem-integer-part, lem-real-line-is-a-metric-space]
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
## Example

The inclusion of $\mathbb Z$ in $\mathbb R$ is a quasi-isometry that is neither surjective nor a bilipschitz equivalence.

## Facts & Assumptions

**Given:** The objects and hypotheses in the Example.

[F1] A map is $(L,C)$-coarse Lipschitz when $d(f(x),f(x'))\le L\,d(x,x')+C$, and an $(L,C)$-quasi-isometric embedding when in addition $L^{-1}d(x,x')-C\le d(f(x),f(x'))$ ([[def-coarse-lipschitz-map-and-quasi-isometric-embedding]]).

[L1] A subset is coarsely dense when every point of the space is within a fixed distance of it, and a quasi-isometry is a coarse Lipschitz map admitting a coarse Lipschitz quasi-inverse ([[def-coarsely-dense-subset-and-quasi-isometry]]).

[L2] A map is a bilipschitz embedding when $c^{-1}d(x,x')\le d(f(x),f(x'))\le c\,d(x,x')$ for some $c>0$, and a bilipschitz equivalence when it is a bijective such map with bilipschitz inverse ([[def-bilipschitz-embedding-and-bilipschitz-equivalence]]).

[L3] The word metric of $G$ with respect to $S$ is $d_S(g,h)=|g^{-1}h|_S$ ([[def-word-metric]]).

[L4] It is written $\lfloor x \rfloor$ and called the **integer part**, or **floor**, of $x$. ([[lem-integer-part]]).

[L5] Define $d_{\mathbb{R}}: \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ by $d_{\mathbb{R}}(x,y):= |x - y|$. ([[lem-real-line-is-a-metric-space]]).


## Verification

**Proof technique:** direct.

1.1 The inclusion $\iota:\mathbb Z\to\mathbb R$ preserves distances exactly, so it is a quasi-isometric embedding with constants one and zero. [F1, L3, L5]

2.1 Let $g:\mathbb R\to\mathbb Z$ be the integer-part map. Then $g(n)=n$ for every integer $n$, while every real $x$ satisfies $|x-g(x)|<1$; so $g\circ\iota=\operatorname{id}_{\mathbb Z}$ and $\iota\circ g$ is at bounded distance from $\operatorname{id}_{\mathbb R}$. Therefore $\iota$ is a quasi-isometry. [L1, L4, step 1.1]

3.1 It is not a bilipschitz equivalence because it is not surjective, and a bilipschitz equivalence must in particular be bijective. [L2, step 2.1] ∎
