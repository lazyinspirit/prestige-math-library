---
id: ex-a-finite-index-subgroup-of-a-free-abelian-group-is-quasi-isometric-to-it
kind: example
title: "The subgroup $2\\mathbb Z\\times\\mathbb Z$ has index two in $\\mathbb Z^2$ and its inclusion is a quasi-isometry"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-a-finite-index-subgroup-of-a-finitely-generated-group-is-finitely-generated-and-quasi-isometrically-included, def-word-metric, def-coarsely-dense-subset-and-quasi-isometry, def-index, def-free-abelian-group]
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
## Example

The subgroup $2\mathbb Z\times\mathbb Z$ has index two in $\mathbb Z^2$ and its inclusion is a quasi-isometry.

## Facts & Assumptions

**Given:** The objects and hypotheses in the Example.

[L1] A subgroup of finite index in a finitely generated group is finitely generated and its inclusion is a quasi-isometry ([[prop-a-finite-index-subgroup-of-a-finitely-generated-group-is-finitely-generated-and-quasi-isometrically-included]]).

[F1] $$[G:H]:=|G/H|$$ ([[def-index]]).

[L2] The word metric of $G$ with respect to $S$ is $d_S(g,h)=|g^{-1}h|_S$ ([[def-word-metric]]).

[L3] A subset is coarsely dense when every point of the space is within a fixed distance of it, and a quasi-isometry is a coarse Lipschitz map admitting a coarse Lipschitz quasi-inverse ([[def-coarsely-dense-subset-and-quasi-isometry]]).

[L4] A **free abelian group on a set $X$** is an abelian group $A(X)$ together with a map $i:X\to A(X)$ such that, for every abelian group $B$ and every function $u:X\to B$, there is a unique group homomorphism $\widehat u:A(X)\to B$ satisfying ([[def-free-abelian-group]]).


## Verification

**Proof technique:** direct.

1.1 The subgroup of pairs with even first coordinate has index two, with transversal the zero pair and the first basis vector. [F1, L4]

2.1 The general proposition applies and makes the inclusion a quasi-isometry. [L1, L3, step 1.1]

3.1 Directly, the inclusion doubles the first coordinate of a word expression at worst, so the constants are two and one. [L2, L3, step 2.1, algebra] ∎
