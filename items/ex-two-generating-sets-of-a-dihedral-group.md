---
id: ex-two-generating-sets-of-a-dihedral-group
kind: example
title: "The dihedral group of order eight has Cayley graphs that are a cycle of length eight and a cube"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cayley-graph, prop-a-cayley-graph-is-regular-and-is-locally-finite-exactly-when-its-defining-subset-is-finite, cor-dihedral-groups-as-semidirect-products, def-generalized-dihedral-group, def-graph-adjacency-incidence-neighbourhood-and-degree]
aliases: []
landmark: false
proof_strategy: direct
verification:
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

The dihedral group of order eight has Cayley graphs that are a cycle of length eight and a cube.

## Facts & Assumptions

**Given:** The objects and hypotheses in the Example.

[F1] The Cayley graph of a group $G$ with respect to a subset $S$ has vertex set $G$ and edge set $\{\{g,gs\}:g\in G,\ s\in(S\cup S^{-1})\setminus\{e\}\}$ ([[def-cayley-graph]]).

[L1] Every vertex of a Cayley graph has the same degree, and the graph is locally finite exactly when the symmetrised generating set is finite ([[prop-a-cayley-graph-is-regular-and-is-locally-finite-exactly-when-its-defining-subset-is-finite]]).

[L2] For $D=\operatorname{Dih}(C_4)=\langle r,s\rangle$, one has $r^4=s^2=1$, $srs^{-1}=r^{-1}$, and every element is uniquely $r^i$ or $r^is$ for $0\le i<4$ ([[cor-dihedral-groups-as-semidirect-products]]).

[L3] $$\operatorname{Dih}(A)=A\rtimes C_2.$$ ([[def-generalized-dihedral-group]]).

[L4] The **degree** of $v$ is $\deg_G(v):=|N_G(v)|$, equivalently the number of edges incident with $v$. A graph is **$r$-regular** when every vertex has degree $r$; it is **cubic** when it is $3$-regular. ([[def-graph-adjacency-incidence-neighbourhood-and-degree]]).


## Verification

**Proof technique:** direct.

1.1 For the generating set $\{r,s\}$, the four vertices $1,r,r^2,r^3$ form a $4$-cycle under right multiplication by $r^{\pm1}$, and the four vertices $s,rs,r^2s,r^3s$ form another. Right multiplication by $s$ joins $r^i$ to $r^is$ for each $i$. Thus the graph is two $4$-cycles joined at corresponding vertices, which is the cube. [F1, L1, L2, L3, L4]

2.1 For the generating set $\{s,rs\}$ both generators are involutions and they generate because $(rs)s=r$. Alternating them gives the eight-cycle $1,s,r^3,r^3s,r^2,r^2s,r,rs,1$, whose consecutive vertices differ by right multiplication by $s$ or $rs$. These are all eight group elements, and every vertex has only the two displayed neighbours, so this Cayley graph is $C_8$. [F1, L1, L2, L4, step 1.1] ∎
