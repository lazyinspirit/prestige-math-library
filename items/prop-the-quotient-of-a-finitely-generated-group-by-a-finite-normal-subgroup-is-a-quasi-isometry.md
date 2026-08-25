---
id: prop-the-quotient-of-a-finitely-generated-group-by-a-finite-normal-subgroup-is-a-quasi-isometry
kind: proposition
title: "The quotient map by a finite normal subgroup is a quasi-isometry of word metric spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finitely-generated-group, def-word-length-with-respect-to-a-generating-set, lem-word-length-is-well-defined-and-satisfies-the-length-laws, def-word-metric, def-coarse-lipschitz-map-and-quasi-isometric-embedding, def-coarsely-dense-subset-and-quasi-isometry, def-quotient-group, def-normal-subgroup, def-finite-cardinality]
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

The quotient map by a finite normal subgroup is a quasi-isometry of word metric spaces.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] A group is finitely generated when some finite subset generates it ([[def-finitely-generated-group]]).

[L1] The word length $|g|_S$ is the least $n$ such that $g$ is a product of $n$ elements of $S\cup S^{-1}$ ([[def-word-length-with-respect-to-a-generating-set]]).

[L2] Word length is defined on every element and satisfies $|gh|_S\le|g|_S+|h|_S$, $|g^{-1}|_S=|g|_S$, and $|g|_S=0$ exactly when $g$ is the identity ([[lem-word-length-is-well-defined-and-satisfies-the-length-laws]]).

[L3] The word metric of $G$ with respect to $S$ is $d_S(g,h)=|g^{-1}h|_S$ ([[def-word-metric]]).

[L4] A map is $(L,C)$-coarse Lipschitz when $d(f(x),f(x'))\le L\,d(x,x')+C$, and an $(L,C)$-quasi-isometric embedding when in addition $L^{-1}d(x,x')-C\le d(f(x),f(x'))$ ([[def-coarse-lipschitz-map-and-quasi-isometric-embedding]]).

[L5] A subset is coarsely dense when every point of the space is within a fixed distance of it, and a quasi-isometry is a coarse Lipschitz map admitting a coarse Lipschitz quasi-inverse ([[def-coarsely-dense-subset-and-quasi-isometry]]).

[L6] The **quotient group**, or **factor group**, $G/N$ has the left cosets ([[def-quotient-group]]).

[L7] The subgroup $N$ is **normal in $G$** when ([[def-normal-subgroup]]).

[L8] A set $A$ is **finite** when $A \approx n$ for some $n \in \mathbb{N}$. ([[def-finite-cardinality]]).


## Proof

**Proof technique:** direct.

1.1 The image of a finite generating set generates the quotient, so the quotient map does not increase word length and is one-Lipschitz. [F1, L1, L2, L3, L4, L6, L7]

2.1 Let $M=\max\{|n|_S:n\in N\}$, which exists because $N$ is finite. For each coset $\bar g\in G/N$, choose a representative $s(\bar g)\in G$ of minimal word length in that coset, breaking ties lexicographically in the fixed finite alphabet $S\cup S^{-1}$; then the quotient map $q$ satisfies $q(s(\bar g))=\bar g$. If $\bar h=\bar g\,q(t)$ with $t\in S\cup S^{-1}$, then $s(\bar g)^{-1}s(\bar h)t^{-1}\in N$, so $$ |s(\bar g)^{-1}s(\bar h)|_S\le M+1. $$ Chaining along a shortest quotient expression gives $d_G(s(\bar g),s(\bar h))\le (M+1)d_{G/N}(\bar g,\bar h)$, so $s:G/N\to G$ is Lipschitz. [L1, L3, L6, L8, step 1.1, choose]

3.1 For every $g\in G$, the elements $s(q(g))$ and $g$ lie in the same coset, so $s(q(g))^{-1}g\in N$ and therefore $d_G(s(q(g)),g)\le M$. Thus $q\circ s=\operatorname{id}_{G/N}$ and $s\circ q$ is at bounded distance from $\operatorname{id}_G$. Therefore $q$ is a quasi-isometry with quasi-inverse $s$. [L5, step 2.1] ∎
