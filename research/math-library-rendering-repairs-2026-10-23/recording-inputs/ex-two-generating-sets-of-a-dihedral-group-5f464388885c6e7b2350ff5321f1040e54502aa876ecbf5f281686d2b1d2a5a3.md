---
id: ex-two-generating-sets-of-a-dihedral-group
kind: example
title: "The dihedral group of order eight has Cayley graphs that are a cycle of length eight and a cube"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cayley-graph, prop-a-cayley-graph-is-regular-and-is-locally-finite-exactly-when-its-defining-subset-is-finite, cor-dihedral-groups-as-semidirect-products, def-generalized-dihedral-group, def-graph-adjacency-incidence-neighbourhood-and-degree]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
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


## Remarks

The two drawings show the same eight group elements with different generating sets. Edges are undirected, as in [F1]: a label $r^{\pm1}$ means that either direction is right multiplication by $r$ or $r^{-1}$; labels $s$ and $rs$ are involutions. The left drawing has the two $4$-cycles from step 1.1 and four $s$-edges; the right drawing follows the alternating cycle of step 2.1. Each edge has length one in its respective word metric. The verification above is independent of these illustrations.

```tikz
\begin{tikzpicture}[scale=0.85, every node/.style={font=\small}]
\begin{scope}
\node at (0,3.3) {$S=\{r,s\}$};
\node[circle,fill,inner sep=1.5pt,label=above left:{$1$}] (a) at (-2.5,2.5) {};
\node[circle,fill,inner sep=1.5pt,label=above right:{$r$}] (b) at (2.5,2.5) {};
\node[circle,fill,inner sep=1.5pt,label=below right:{$r^2$}] (c) at (2.5,-2.5) {};
\node[circle,fill,inner sep=1.5pt,label=below left:{$r^3$}] (d) at (-2.5,-2.5) {};
\node[circle,fill,inner sep=1.5pt,label=above right:{$s$}] (e) at (-1,1) {};
\node[circle,fill,inner sep=1.5pt,label=above left:{$rs$}] (f) at (1,1) {};
\node[circle,fill,inner sep=1.5pt,label=below left:{$r^2s$}] (g) at (1,-1) {};
\node[circle,fill,inner sep=1.5pt,label=below right:{$r^3s$}] (h) at (-1,-1) {};
\draw (a) -- node[above] {$r^{\pm1}$} (b);
\draw (b) -- node[right] {$r^{\pm1}$} (c);
\draw (c) -- node[below] {$r^{\pm1}$} (d);
\draw (d) -- node[left] {$r^{\pm1}$} (a);
\draw (e) -- node[below] {$r^{\pm1}$} (f);
\draw (f) -- node[left] {$r^{\pm1}$} (g);
\draw (g) -- node[above] {$r^{\pm1}$} (h);
\draw (h) -- node[right] {$r^{\pm1}$} (e);
\draw[dashed] (a) -- node[below left] {$s$} (e);
\draw[dashed] (b) -- node[below right] {$s$} (f);
\draw[dashed] (c) -- node[above right] {$s$} (g);
\draw[dashed] (d) -- node[above left] {$s$} (h);
\end{scope}
\begin{scope}[xshift=8cm]
\node at (0,3.3) {$S=\{s,rs\}$};
\node[circle,fill,inner sep=1.5pt,label=above:{$1$}] (v0) at (0,2.5) {};
\node[circle,fill,inner sep=1.5pt,label=above right:{$s$}] (v1) at (1.8,1.8) {};
\node[circle,fill,inner sep=1.5pt,label=right:{$r^3$}] (v2) at (2.5,0) {};
\node[circle,fill,inner sep=1.5pt,label=below right:{$r^3s$}] (v3) at (1.8,-1.8) {};
\node[circle,fill,inner sep=1.5pt,label=below:{$r^2$}] (v4) at (0,-2.5) {};
\node[circle,fill,inner sep=1.5pt,label=below left:{$r^2s$}] (v5) at (-1.8,-1.8) {};
\node[circle,fill,inner sep=1.5pt,label=left:{$r$}] (v6) at (-2.5,0) {};
\node[circle,fill,inner sep=1.5pt,label=above left:{$rs$}] (v7) at (-1.8,1.8) {};
\draw[dashed] (v0) -- node[below left] {$s$} (v1);
\draw (v1) -- node[below left] {$rs$} (v2);
\draw[dashed] (v2) -- node[above left] {$s$} (v3);
\draw (v3) -- node[above left] {$rs$} (v4);
\draw[dashed] (v4) -- node[above right] {$s$} (v5);
\draw (v5) -- node[above right] {$rs$} (v6);
\draw[dashed] (v6) -- node[below right] {$s$} (v7);
\draw (v7) -- node[below right] {$rs$} (v0);
\end{scope}
\end{tikzpicture}
```
