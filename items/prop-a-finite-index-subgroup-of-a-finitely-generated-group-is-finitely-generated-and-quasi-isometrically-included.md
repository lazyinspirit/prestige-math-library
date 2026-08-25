---
id: prop-a-finite-index-subgroup-of-a-finitely-generated-group-is-finitely-generated-and-quasi-isometrically-included
kind: proposition
title: "A subgroup of finite index in a finitely generated group is finitely generated, and its inclusion is a quasi-isometry"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finitely-generated-group, def-word-length-with-respect-to-a-generating-set, lem-word-length-is-well-defined-and-satisfies-the-length-laws, def-word-metric, def-coarse-lipschitz-map-and-quasi-isometric-embedding, def-coarsely-dense-subset-and-quasi-isometry, def-index, def-coset, lem-coset-partition, def-finite-cardinality]
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
## Statement

A subgroup of finite index in a finitely generated group is finitely generated, and its inclusion is a quasi-isometry.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] A group is finitely generated when some finite subset generates it ([[def-finitely-generated-group]]).

[L1] The word length $|g|_S$ is the least $n$ such that $g$ is a product of $n$ elements of $S\cup S^{-1}$ ([[def-word-length-with-respect-to-a-generating-set]]).

[L2] Word length is defined on every element and satisfies $|gh|_S\le|g|_S+|h|_S$, $|g^{-1}|_S=|g|_S$, and $|g|_S=0$ exactly when $g$ is the identity ([[lem-word-length-is-well-defined-and-satisfies-the-length-laws]]).

[L3] The word metric of $G$ with respect to $S$ is $d_S(g,h)=|g^{-1}h|_S$ ([[def-word-metric]]).

[L4] A map is $(L,C)$-coarse Lipschitz when $d(f(x),f(x'))\le L\,d(x,x')+C$, and an $(L,C)$-quasi-isometric embedding when in addition $L^{-1}d(x,x')-C\le d(f(x),f(x'))$ ([[def-coarse-lipschitz-map-and-quasi-isometric-embedding]]).

[L5] A subset is coarsely dense when every point of the space is within a fixed distance of it, and a quasi-isometry is a coarse Lipschitz map admitting a coarse Lipschitz quasi-inverse ([[def-coarsely-dense-subset-and-quasi-isometry]]).

[L6] $$[G:H]:=|G/H|$$ ([[def-index]]).

[L7] $$gH:=\{gh:h\in H\},\qquad Hg:=\{hg:h\in H\}.$$ ([[def-coset]]).

[L8] For a subgroup $H\le G$, the set of distinct left cosets $\{gH:g\in G\}$ is a partition of $G$: every element belongs to a left coset, every coset is nonempty, and two left cosets are either equal or disjoint. ([[lem-coset-partition]]).

[L9] A set $A$ is **finite** when $A \approx n$ for some $n \in \mathbb{N}$. ([[def-finite-cardinality]]).


## Proof

**Proof technique:** direct.

1.1 Fix a finite left transversal $T$ for $H$ in $G$ that contains the identity; the cosets partition the group and there are finitely many of them. [F1, L6, L7, L8, L9, choose]

2.1 Rewriting a product of ambient generators by pushing transversal representatives to the right expresses each subgroup element in the finite set of products that fall back into the subgroup, so that set generates it. [F1, L1, L2, step 1.1]

3.1 Write each $g\in G$ uniquely as $g=r(g)t(g)$ with $r(g)\in H$ and $t(g)\in T$. If $h=gs$ with $s\in S\cup S^{-1}$ and $g=r(g)t(g)$, $h=r(h)t(h)$, then $$ r(g)^{-1}r(h)=t(g)s\,t(h)^{-1}\in H $$ is one of the finitely many subgroup elements used in step 2.1; so $d_H(r(g),r(h))\le1$ in the word metric of $H$ for the generating set built there. Chaining along a shortest $S$-expression gives $d_H(r(g),r(h))\le d_G(g,h)$, so $r:G\to H$ is Lipschitz. Since $r$ is the identity on $H$ and every $g=r(g)t(g)$ lies within $\max_{t\in T}|t|_S$ of the inclusion of $r(g)$, the composites $r\circ i$ and $i\circ r$ are the identity on $H$ and at bounded distance from the identity on $G$ respectively. Therefore the inclusion $i:H\hookrightarrow G$ is a quasi-isometry with quasi-inverse $r$. [L1, L3, L4, L5, step 1.1, step 2.1] ∎
