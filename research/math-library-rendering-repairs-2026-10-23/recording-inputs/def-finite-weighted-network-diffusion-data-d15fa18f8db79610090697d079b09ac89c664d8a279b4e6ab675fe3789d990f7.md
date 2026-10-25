---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-finite-weighted-network-diffusion-data.json
  precheck: n/a
id: def-finite-weighted-network-diffusion-data
kind: definition
title: "Finite weighted network diffusion data"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-finite-simple-graph
  - def-oriented-incidence-matrix-of-a-graph
  - def-laplacian-matrix-of-a-finite-simple-graph
  - thm-laplacian-is-the-oriented-incidence-product
  - def-matrix-space
  - def-matrix-product-and-identity-matrix
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Fan R. K. Chung, Spectral Graph Theory, Chapter 1: Eigenvalues and the Laplacian of a Graph, CBMS 92 (1997), complete chapter text"
      url: "https://fanchung.ucsd.edu/cbms.pdf"
      locator: "Complete Chapter 1 text; §§1.2 and 1.4, printed pp. 2–14."
    - title: "Ward Whitt, Continuous-Time Markov Chains, full lecture notes (2006)"
      url: "https://www.columbia.edu/~ww2040/4106S11/CTMCchapter121906.pdf"
      locator: "§3.2, Theorems 3.1–3.2 and §3.4, Theorem 3.4, PDF pp. 7–16."
---

## Definition

Let $G=(V,E)$ be a finite simple graph with ordered vertex and edge sets.
Choose an orientation of each edge and let $B\in\mathbb R^{V\times E}$ be
the resulting incidence matrix of
[[def-oriented-incidence-matrix-of-a-graph]]: a column has $-1$ at its tail,
$+1$ at its head, and zero elsewhere. Let $D\subseteq V$ be the vertices with
prescribed Dirichlet values and let $I=V\setminus D$ be the free vertices.
Assign a mass $m_i>0$ to each $i\in I$ and a conductance $c_e\ge0$ to each
$e\in E$. Put

$$M=\operatorname{diag}(m_i)_{i\in I},\qquad C=\operatorname{diag}(c_e)_{e\in E},\qquad L_C=BCB^{\mathsf T}.$$

The matrix $L_C$ is the **conductance-weighted graph stiffness**. Its free
Dirichlet restriction $L_D$ is the principal submatrix $(L_C)_{I,I}$. The
finite weighted network diffusion equation is

$$M u'(t)+L_Du(t)=f(t),$$

where $u(t)\in\mathbb R^I$ and $f(t)\in\mathbb R^I$. If $D=\varnothing$,
this is the closed Neumann network equation. If the boundary values are
instead a nonzero vector $g(t)$, restriction of $L_C(u,g)$ to $I$ gives
$M u'+L_Du=f-(L_C)_{I,D}g$.

When every $c_e=1$, $L_C=BB^{\mathsf T}$ agrees with the ordinary graph
Laplacian by
[[thm-laplacian-is-the-oriented-incidence-product]]. Zero conductances are
allowed and remove those edges from the diffusion coupling; they do not remove
the vertices or masses.


## Remarks

For example, order the vertices as $(v_1,v_2,v_3)$ and the edges as
$(e_1,e_2)$ in the path below, with $D=\{v_3\}$ and $I=\{v_1,v_2\}$.
Circles mark free vertices and the square marks the Dirichlet vertex;
arrows specify the incidence orientation, not the direction of diffusion.

```tikz
\begin{tikzpicture}[>=stealth,thick]
\node[draw,circle,minimum size=9mm] (v1) at (0,0) {$v_1$};
\node[draw,circle,minimum size=9mm] (v2) at (3,0) {$v_2$};
\node[draw,rectangle,minimum size=9mm] (v3) at (6,0) {$v_3$};
\draw[->] (v1) -- node[above] {$e_1,\ c_1$} (v2);
\draw[->] (v2) -- node[above] {$e_2,\ c_2$} (v3);
\node[below=5mm] at (v1) {$m_1>0$};
\node[below=5mm] at (v2) {$m_2>0$};
\node[below=5mm] at (v3) {$v_3\in D$};
\end{tikzpicture}
```

The tail/head convention gives

$$B=\begin{pmatrix}-1&0\\1&-1\\0&1\end{pmatrix},\qquad L_C=\begin{pmatrix}c_1&-c_1&0\\-c_1&c_1+c_2&-c_2\\0&-c_2&c_2\end{pmatrix}.$$

Deleting the row and column of $v_3$ gives

$$L_D=\begin{pmatrix}c_1&-c_1\\-c_1&c_1+c_2\end{pmatrix},\qquad M=\begin{pmatrix}m_1&0\\0&m_2\end{pmatrix}.$$

These matrices follow directly from the definition and do not rely on the
illustration. In particular, the contribution $c_2$ remains on the $v_2$
diagonal of $L_D$, even though $v_3$ is not a free vertex.
