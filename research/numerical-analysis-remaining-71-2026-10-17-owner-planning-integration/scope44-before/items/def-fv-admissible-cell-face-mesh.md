---
id: def-fv-admissible-cell-face-mesh
kind: definition
title: Finite-volume cell-face meshes and geometric regularity
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
aliases: []
deps: []
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "R. Eymard, T. Gallouët, and R. Herbin, Finite Volume Methods, Handbook of Numerical Analysis, Vol. VII, 2000; complete updated author text"
      url: "https://raphaeleh.github.io/PUBLI/bookevol.pdf"
      locator: "Chapter 9 §9.2, Definition 9.1, printed pp. 37–39: convex cells, faces, centers, adjacency, and mesh size."
    - title: "Jérôme Droniou, Finite volume schemes for diffusion equations: introduction to and review of modern methods, 2014"
      url: "https://arxiv.org/pdf/1407.1567"
      locator: "§1.1, Definition 1.1, PDF pp. 3–4: cells, faces, centers, normals, and mesh size."
verification:
  precheck: n/a
---

## Definition

Let $d\ge1$ and let $\Omega\subset\mathbb R^d$ be a nonempty bounded connected open polyhedral set, meaning the interior of a finite union of bounded polytopes. A convex polytope is a bounded intersection of finitely many closed half-spaces with nonempty interior. A **cell-face mesh** $\mathcal T=(\mathcal K,\mathcal F)$ consists of finitely many nonempty open convex polytopes $K\subset\Omega$ with disjoint interiors and $\overline\Omega=\bigcup_{K\in\mathcal K}\overline K$, together with the relative interiors of their $(d-1)$-dimensional faces. Each interior face $F\in\mathcal F_{\rm int}$ is incident to exactly two cells $K,L$ and is denoted $F=K|L$; each boundary face $F\in\mathcal F_{\rm bdy}$ is incident to one cell and is contained in $\partial\Omega$. In dimension one a face is an endpoint and has measure $|F|=1$.

Write $|K|$ for the $d$-dimensional volume of $K$, $|F|$ for the $(d-1)$-dimensional measure of $F$, $n_{K,F}$ for the unit normal outward from $K$, $x_K$ for a chosen point in $K$, and $x_F$ for the centroid of $F$. For every incident pair set $d_{K,F}=\operatorname{dist}(x_K,F)>0$. The **cell adjacency graph** has one vertex for each cell and an edge for each interior face. A mesh is **boundary anchored** if every cell has a finite path in this graph to a cell incident to a boundary face; such a path can be chosen simple, with no repeated cells.

For a family $(\mathcal T_h)$, put $h=\max_{K\in\mathcal K}\operatorname{diam}K$. The family is **uniformly regular** if there are fixed constants $c,C>0$ and $N_0\in\mathbb N$ such that, for every mesh and each of its cells and faces,
$$ c h^d\le |K|\le C h^d,\qquad c h^{d-1}\le |F|\le C h^{d-1},\qquad c h\le d_{K,F}\le C h, $$
and each cell has at most $N_0$ faces. A family is **refining** if $h\to0$. These bounds are invoked only where explicitly assumed; a cell-face mesh alone is not asserted to be uniformly regular or orthogonal.

The finite-volume convention is that a face flux $Q_{K,F}$ is signed outward from $K$. If $F=K|L$ is an interior face, local conservation requires the single shared-flux identity $Q_{K,F}+Q_{L,F}=0$. The mesh drawing below labels the center-to-center vector and the outward normal; no orthogonality is part of this general mesh definition.

```tikz
\begin{tikzpicture}[scale=1]
  \draw[thick] (0,0) -- (2,0) -- (2,2) -- (0,2) -- cycle;
  \draw[thick] (2,0) -- (4.3,0.5) -- (4.3,2.5) -- (2,2) -- cycle;
  \draw[thick] (2,0) -- (2,2);
  \node at (1,1) {$K$};
  \node at (3.15,1.25) {$L$};
  \node at (2,1.45) {$F=K|L$};
  \fill (1,1) circle (2pt) node[below left] {$x_K$};
  \fill (3.15,1.25) circle (2pt) node[below right] {$x_L$};
  \draw[->,blue,thick] (1,1) -- (3.15,1.25) node[midway,below] {$x_L-x_K$};
  \draw[->,red,thick] (2,1) -- (2.8,1) node[right] {$n_{K,F}$};
  \draw[->,red,thick] (2,1.8) -- (1.2,1.8) node[left] {$n_{L,F}$};
\end{tikzpicture}
```

The cell-face mesh definition and the diagram fix only the objects, incidences, normals, and orientation. A two-point flux approximation adds a separate orthogonality condition; the hybrid mimetic method is formulated on the general cell-face geometry specified here.
