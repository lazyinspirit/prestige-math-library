---
id: def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention
kind: definition
title: Dynkin diagram with edge multiplicity and arrow convention
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-finite-type-cartan-matrix-properties, thm-rank-two-root-system-classification]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §5, the Dynkin diagram, printed pp. 159-161"
landmark: false
verification:
  audited: 2026-09-22
---

## Definition

Let $\Phi\subseteq E$ be a reduced crystallographic root system with base
$\Delta=\{\alpha_1,\dots,\alpha_r\}$ and Cartan matrix $A=(a_{ij})$
([[prop-finite-type-cartan-matrix-properties]]). The **Dynkin diagram** of
$\Phi$ relative to $\Delta$ is the graph with vertex set $\{1,\dots,r\}$,
with $a_{ij}a_{ji}$ edges joining the vertices $i$ and $j$ for $i\ne j$, and
with a decoration of the edges when $a_{ij}a_{ji}\ne0$: if
$a_{ij}a_{ji}=1$ no decoration is used; if $a_{ij}a_{ji}=2$ the two parallel
edges carry a single arrow pointing from the longer root to the shorter root,
that is, toward the vertex $j$ with $|\alpha_j|<|\alpha_i|$; if
$a_{ij}a_{ji}=3$ the three parallel edges carry the same arrow toward the
shorter root. The numbers $a_{ij}a_{ji}\in\{0,1,2,3\}$ are determined by the
Cartan matrix and the arrow direction is determined by which of $a_{ij},a_{ji}$
is larger in absolute value, since $|\alpha_i|^{2}/|\alpha_j|^{2}=a_{ji}/a_{ij}$
whenever $a_{ij}a_{ji}\ne0$
([[thm-rank-two-root-system-classification]]); hence the diagram, with its
multiplicities and arrows, is determined by $A$. Isolated vertices, that is,
simple roots orthogonal to all others, are allowed and correspond to
one-dimensional direct summands.

Conversely the Cartan matrix is recovered from the diagram: a pair with no
edge has $a_{ij}=a_{ji}=0$; a pair joined by $m=a_{ij}a_{ji}$ edges has
$a_{ij},a_{ji}<0$ with product $m$, and the arrow, which records which of
$|a_{ij}|,|a_{ji}|$ is larger, fixes $a_{ij}$ and $a_{ji}$ uniquely.
