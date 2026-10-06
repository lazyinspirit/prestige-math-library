---
id: def-factorization-of-a-marked-moy-graph
kind: definition
title: "The factorization of a marked MOY graph"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
deps: [def-arc-and-wide-edge-khovanov-rozansky-factorizations]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, arXiv:math/0505056v2 (2006), section 1, printed pp. 4-5; published as Geom. Topol. 12 (2008) 1387-1425"
      url: "https://arxiv.org/pdf/math/0505056v2"
    - title: "Khovanov and Rozansky, Matrix factorizations and link homology, arXiv:math/0401268v2, introduction printed pp. 6-12: fixed-n sl(n) analogue with different potentials and gradings, not the parameter-a formulas of KR II"
      url: "https://arxiv.org/pdf/math/0401268"
    - title: "Tina Kanstrup (notes by Corina Keller and Wai-kit Yeung), Knot homologies and matrix factorizations, ICMS summer school lecture notes (2019), Lecture 2"
      url: "https://webhomes.maths.ed.ac.uk/~djordan/notes/KnotHomologyMatrixFac.pdf"
---

## Definition

Let $\Gamma$ be a finite planar graph in a disk whose edges are either **oriented
arcs** between marks (including boundary points) or **wide (thick) edges**,
each wide edge bounded by four oriented edge-ends, as in the
Khovanov-Rozansky diagrams. Place finitely many marks, with at least one on every internal edge and
every circle of $\Gamma$, place any finite number of marks (possibly none) on
each boundary edge, and label all marks and boundary points by distinct
variables $x_1,\dots,x_r$; the boundary points carry orientations
$\epsilon_p\in\{1,-1\}$. With $C_c$ and $C_t$ the arc and wide-edge
factorizations of [[def-arc-and-wide-edge-khovanov-rozansky-factorizations]],
define

$$C(\Gamma):=\bigotimes_{c}C_c\otimes\bigotimes_{t}C_t,$$

the tensor product taken over $S=\mathbb Q[a,x_1,\dots,x_r]$ with all variables
shared (the tensor product of the two-term factorizations of the local pieces,
with the Koszul sign convention), and view $C(\Gamma)$ as a factorization over
the smaller polynomial ring
$R=\mathbb Q[a,x_p\;:\;p\text{ a boundary point}]$: the variables at internal
marks are **internal** and are forgotten. Its potential is

$$w_{\Gamma}=a\sum_p\epsilon_px_p .$$

The sum is over the boundary points: every internal label occurs at exactly
two edge-ends with opposite signs, whose contributions $+a x_i$ and $-a x_i$
cancel, while a boundary label occurs at exactly one edge-end, and the local
potentials of the arc and wide-edge factorizations add to $w_\Gamma$.

If $\Gamma$ is **closed** (no boundary points), then $w_{\Gamma}=0$ and
$C(\Gamma)$ is a $2$-periodic complex
$C^0(\Gamma)\xrightarrow{d}C^1(\Gamma)\xrightarrow{d}C^0(\Gamma)$ of bigraded
$\mathbb Q[a]$-modules, whose cohomology is denoted $H(\Gamma)$. Each term is a free bigraded $\mathbb Q[a]$-module, generally of infinite
rank. Contractible summands may be removed without changing its cohomology,
but no finite-rank representative over $\mathbb Q[a]$ is asserted: already a
one-mark circle has cohomology $\mathbb Q[x]\{-1,1\}$. For a nonempty closed
graph, the row reduction proved below shows that $a$ acts trivially on $H(\Gamma)$. For the empty graph the empty
tensor product is $\mathbb Q[a]$ in even parity, and $a$ need not act trivially.
Caveats: $C(\Gamma)$ has
infinite rank as an $R$-module whenever internal marks are present; the marks
are auxiliary data, and a marking change alters $C(\Gamma)$ by a chain
homotopy equivalence (proved later on this page); the potential vanishes
exactly for closed graphs, which is why $C(\Gamma)$ is a genuine complex in
that case.
