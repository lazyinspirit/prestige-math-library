---
id: def-finite-weighted-network-diffusion-data
kind: definition
title: "Finite weighted network diffusion data"
status: draft
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
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
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

