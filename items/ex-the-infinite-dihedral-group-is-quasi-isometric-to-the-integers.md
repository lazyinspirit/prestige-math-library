---
id: ex-the-infinite-dihedral-group-is-quasi-isometric-to-the-integers
kind: example
title: "The infinite dihedral group is quasi-isometric to $\\mathbb Z$, and to $\\mathbb Z\\times\\mathbb Z/2$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cayley-graph, def-word-metric, def-bilipschitz-embedding-and-bilipschitz-equivalence, thm-two-finite-generating-sets-of-a-group-give-bilipschitz-equivalent-word-metrics, def-quasi-isometry-type-of-a-finitely-generated-group, def-generalized-dihedral-group, def-group-presentation, thm-von-dyck, prop-equality-of-words-in-a-presentation]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups (Hilary Term 2008), 48 pp."
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, 62 pp."
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
    - title: "D. Kaur and A. Kulshrestha, Characters of real special 2-groups (arXiv:1510.06583v1)"
      url: "https://arxiv.org/pdf/1510.06583"
---
## Example

The infinite dihedral group is quasi-isometric to $\mathbb Z$, and to $\mathbb Z\times\mathbb Z/2$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the Example.

[F1] The Cayley graph of a group $G$ with respect to a subset $S$ has vertex set $G$ and edge set $\{\{g,gs\}:g\in G,\ s\in(S\cup S^{-1})\setminus\{e\}\}$ ([[def-cayley-graph]]).

[L1] The word metric of $G$ with respect to $S$ is $d_S(g,h)=|g^{-1}h|_S$ ([[def-word-metric]]).

[L2] A map is a bilipschitz embedding when $c^{-1}d(x,x')\le d(f(x),f(x'))\le c\,d(x,x')$ for some $c>0$, and a bilipschitz equivalence when it is a bijective such map with bilipschitz inverse ([[def-bilipschitz-embedding-and-bilipschitz-equivalence]]).

[L3] The identity map between the word metrics of two finite generating sets of a group is a bilipschitz equivalence ([[thm-two-finite-generating-sets-of-a-group-give-bilipschitz-equivalent-word-metrics]]).

[L4] A finitely generated group is quasi-isometric to a metric space when its word metric for some, equivalently every, finite generating set is ([[def-quasi-isometry-type-of-a-finitely-generated-group]]).

[L5] The group with presentation ([[def-group-presentation]]).

[L6] If the evaluation of every $r\in R$ under $u$ is $e_H$, then there is a unique homomorphism ([[thm-von-dyck]]).

[L7] Let $u,v\in F(X)$ and put $N=\langle\!\langle R\rangle\!\rangle_{F(X)}$. The words $u$ and $v$ represent the same element of $\langle X\mid R\rangle$ if and only if ([[prop-equality-of-words-in-a-presentation]]).

[L8] $$\operatorname{Dih}(A)=A\rtimes C_2.$$ ([[def-generalized-dihedral-group]]).


## Verification

**Proof technique:** direct.

1.1 Take the two presentations of the infinite dihedral group, by two involutions and by an infinite-order element with an inverting involution. [F1, L5, L6, L7]

2.1 The Cayley graph for the first is a two-way infinite path, isomorphic to that of the integers with generator one; for the second it is the two-way infinite ladder, isomorphic to that of the integers times a group of order two. [F1, L8, step 1.1]

3.1 Isomorphic Cayley graphs give isometric word metrics, and the comparison theorem transports the identification across generating sets, so all three groups are quasi-isometric. [L1, L2, L3, L4, step 2.1] ∎
