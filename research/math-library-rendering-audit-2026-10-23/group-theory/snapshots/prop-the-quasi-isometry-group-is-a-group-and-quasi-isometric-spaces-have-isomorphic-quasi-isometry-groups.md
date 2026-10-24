---
id: prop-the-quasi-isometry-group-is-a-group-and-quasi-isometric-spaces-have-isomorphic-quasi-isometry-groups
kind: proposition
title: "Quasi-isometries modulo bounded distance form a group, and a quasi-isometry induces an isomorphism of these groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-bounded-distance-is-an-equivalence-relation-compatible-with-composition, def-coarsely-dense-subset-and-quasi-isometry, def-quasi-isometry-group-of-a-metric-space, def-group, def-group-isomorphism-and-automorphism, def-equivalence-relation]
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

Quasi-isometries modulo bounded distance form a group, and a quasi-isometry induces an isomorphism of these groups.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] The quasi-isometry group of a metric space is the set of quasi-isometries of it modulo bounded distance ([[def-quasi-isometry-group-of-a-metric-space]]).

[L1] Bounded distance is an equivalence relation, is preserved by pre-composition, and is preserved by post-composition with a coarse Lipschitz map ([[lem-bounded-distance-is-an-equivalence-relation-compatible-with-composition]]).

[L2] A subset is coarsely dense when every point of the space is within a fixed distance of it, and a quasi-isometry is a coarse Lipschitz map admitting a coarse Lipschitz quasi-inverse ([[def-coarsely-dense-subset-and-quasi-isometry]]).

[L3] A **group** is a monoid $(G,*,e)$ in which every element is invertible. ([[def-group]]).

[L4] Group isomorphisms, automorphisms and the set $\operatorname{Aut}(G)$. ([[def-group-isomorphism-and-automorphism]]).

[L5] A binary relation $\sim$ on $A$ is an **equivalence relation** when it is reflexive on $A$, symmetric and transitive, that is, when it is ([[def-equivalence-relation]]).


## Proof

**Proof technique:** direct.

1.1 Composition is well defined on bounded-distance classes, by the compatibility lemma. [F1, L1, L5]

2.1 Associativity is inherited from composition of maps, the class of the identity is neutral, and the class of any chosen quasi-inverse is a two-sided inverse, because the composites are at bounded distance from the identities by definition of quasi-isometry. [F1, L2, L3, step 1.1]

3.1 If $f:X\to Y$ has quasi-inverse $g:Y\to X$, then $[h]\mapsto[f\circ h\circ g]$ is a homomorphism $QI(X)\to QI(Y)$ whose inverse is $[k]\mapsto[g\circ k\circ f]$; the compatibility lemma shows both are well defined on bounded-distance classes. [F1, L1, L4, step 2.1] ∎
