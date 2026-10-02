---
id: def-levi-pseudoconvex-domain
kind: definition
title: "Levi pseudoconvex domains"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-levi-form-and-strict-plurisubharmonicity]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-10-02
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, §2.3 and §2.5"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, §3.3.1"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Definition

Fix an integer $m\ge1$. Use the one-based coordinate, vector-component
and Wirtinger-operator aliases of
[[def-levi-form-and-strict-plurisubharmonicity]]: for $1\le j\le m$,
$z_j$ and $v_j$ denote the canonical coordinate and vector component with
index $j-1$, and $\partial_{z_j}$ denotes the canonical Wirtinger operator
with index $j-1$. All coordinates, vector components and derivatives below
use these aliases.

Let $\Omega\subseteq\mathbb C^m$ be a domain with $C^2$ boundary. We say that
$\Omega$ is **Levi pseudoconvex** when for every boundary point $p\in\partial\Omega$
there are a neighbourhood $U$ of $p$ and a function $\rho\in C^2(U,\mathbb R)$ such that

$$\Omega\cap U=\{z\in U:\rho(z)<0\},\qquad d\rho(p)\ne0,$$

and

$$\mathcal L_\rho(p;v)\ge0$$

for every complex tangent vector $v\in\mathbb C^m$ satisfying

$$\sum_{j=1}^m \frac{\partial\rho}{\partial z_j}(p)\,v_j=0.$$
