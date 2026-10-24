---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/alg-factorable-mccormick-box-relaxation.json
  precheck: n/a
id: alg-factorable-mccormick-box-relaxation
kind: algorithm
title: Finite McCormick convex relaxation construction for factorable box problems
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 5
deps: [alg-interval-dag-box-enclosure-and-bound, def-factorable-box-convex-relaxation-interface, def-mccormick-bilinear-box-envelope, def-outward-rounded-interval-and-ball-operations, lem-mccormick-envelope-equals-graph-convex-hull]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Arnold Neumaier, Complete Search in Continuous Global Optimization and Constraint Satisfaction, §§16 and 18"
      url: "https://optimization-online.org/wp-content/uploads/2003/10/765.pdf"
    - title: "A. Tsoukalas and A. Mitsos, Multivariate McCormick relaxations, §§4–5"
      url: "https://repub.eur.nl/pub/131549/Repub_131549_O-A.pdf"
---

## Definition

Input a bounded factorable optimization problem on a box $B$, its objective DAG $F$, a finite list of inequality-constraint DAGs $G_i$ representing $g_i(x)\le0$, a finite rule table, a precision $p\ge2$, and a dyadic interval format with fixed exponent bounds. For each non-product nonlinear node, the table must supply certified convex and concave graph bounds $\psi^-\le w\le\psi^+$ on its certified operand domain, with proof that they contain the exact graph and that the imposed epigraph/hypograph inequalities form a convex relation. The table must also supply a convex underestimator $\phi_B$ for the objective DAG's final value, verified to satisfy $\phi_B(\iota_B(x))\le f(x)$ for every exact input $x\in B$. All domain hypotheses and interval/coefficient enclosures must be certified. For each interval call, pass the same declared precision and format to [[alg-interval-dag-box-enclosure-and-bound]]. Traverse the union of the objective and constraint DAGs in topological order, using a lifted variable for each node. For an affine node, add its exact affine relation. For a product node $w=uv$, add the four McCormick inequalities from [[def-mccormick-bilinear-box-envelope]] using certified operand bounds; [[lem-mccormick-envelope-equals-graph-convex-hull]] proves this relation is a convex outer enclosure of the product graph. For every other nonlinear node, add its certified convex and concave graph bounds; if its domain hypotheses, interval bounds, graph containment, or convexity cannot be verified, return unsupported-relaxation or inconclusive. For each constraint DAG, require its final lifted value to be at most zero.

Return the resulting convex feasible region $R_B$ and the certified objective underestimator $\phi_B$ only when every lifted relation is convex, every original feasible point has its exact node values in the lifted region, and all coefficient enclosures preserve the declared inequalities. These checks make the construction a relaxation of both the objective and all listed constraints in the sense of [[def-factorable-box-convex-relaxation-interface]]. Optionally pass this relaxation to a finite convex-bound routine. A dual-feasible pair and a verified lower bound on its Lagrangian dual value produce a dual-certificate record; if no such record is available, return bound-unavailable. The procedure asserts no solver convergence or polynomial running-time bound.

## Remarks

For one product node, take certified operand bounds $0\le u,v\le1$. The four inequalities become $w\ge0$, $w\ge u+v-1$, $w\le u$, and $w\le v$. The figure shows the slice $v=1/2$ of this lifted McCormick polytope: the shaded region is $\max(0,u-1/2)\le w\le\min(u,1/2)$, while the orange segment is the exact graph $w=u/2$. The cyan segment is the relaxed fiber at $u=1/2$; its exact product value is $w=1/4$. This is a slice of the three-dimensional convex hull, not the convex hull of the sliced graph. The local hull lemma and the construction's certification requirements are independent of the illustration.

```tikz
\begin{tikzpicture}[x=7cm,y=7cm]
\fill[blue!20,opacity=0.35] (0,0) -- (0.5,0) -- (1,0.5) -- (0.5,0.5) -- (0,0);
\draw[blue!65,thick] (0,0) -- (0.5,0) -- (1,0.5) -- (0.5,0.5) -- (0,0);
\draw[->] (-0.07,0) -- (1.13,0) node[right] {$u$};
\draw[->] (0,-0.07) -- (0,0.69) node[above] {$w$};
\draw[cyan!80,very thick] (0.5,0) -- (0.5,0.5);
\draw[orange,very thick] (0,0) -- (1,0.5);
\fill[cyan!80] (0.5,0) circle (0.6pt);
\fill[cyan!80] (0.5,0.5) circle (0.6pt);
\fill[orange] (0.5,0.25) circle (1pt);
\draw (0.5,-0.01) -- (0.5,0.01);
\draw (1,-0.01) -- (1,0.01);
\draw (-0.01,0.25) -- (0.01,0.25);
\draw (-0.01,0.5) -- (0.01,0.5);
\node[below left] at (0,0) {$0$};
\node[below] at (0.5,-0.01) {$1/2$};
\node[below] at (1,-0.01) {$1$};
\node[left] at (-0.01,0.25) {$1/4$};
\node[left] at (-0.01,0.5) {$1/2$};
\node[above] at (0.74,0.51) {$w\le 1/2$};
\node[above,rotate=45] at (0.24,0.26) {$w\le u$};
\node[below,rotate=45] at (0.79,0.26) {$w\ge u-1/2$};
\node[below] at (0.23,-0.07) {$w\ge0$};
\node[cyan!80,above] at (0.5,0.61) {$u=1/2$};
\end{tikzpicture}
```
