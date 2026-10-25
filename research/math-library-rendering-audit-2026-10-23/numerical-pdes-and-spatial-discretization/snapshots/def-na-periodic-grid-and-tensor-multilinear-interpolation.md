---
id: def-na-periodic-grid-and-tensor-multilinear-interpolation
kind: definition
title: Periodic Cartesian grids and tensor-product multilinear interpolation
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [def-natural-numbers, def-real-numbers, def-semilagrangian-periodic-grid-and-interpolant]
justified_by: []
aliases: []
dependency_level: 1
proof_strategy: not-applicable
axiom_base: Definition only; no choice principle is used.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Kristian Debrabant and Espen R. Jakobsen, Semi-Lagrangian schemes for linear and fully non-linear Hamilton-Jacobi-Bellman equations"
      url: https://arxiv.org/pdf/1403.1217
      locator: "Section 2, conditions (I1)–(I2), printed pp. 2–3: interpolation accuracy and nonnegative nodal weights."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Fix an integer $d\ge1$ and integers $N_j\ge3$, $1\le j\le d$. This is the
unit-period specialization of the periodic tensor-grid definition in
[[def-semilagrangian-periodic-grid-and-interpolant]], with each period
$\ell_j=1$. Put
$h_j=1/N_j$ and define the periodic unit torus as
$\mathbb T^d=\mathbb R^d/\mathbb Z^d$; functions on it are identified with
$\mathbb Z^d$-periodic functions on $\mathbb R^d$. The Cartesian grid has nodes
$$x_i=(i_1h_1,\ldots,i_dh_d)\pmod{\mathbb Z^d},\qquad i_j\in\{0,\ldots,N_j-1\}.$$
Indices on nodal arrays are always reduced modulo $N_j$ in coordinate $j$.

For a nodal array $V=(V_i)$ and $x$ in the cell with lower corner $x_i$, write
$\widetilde x_j=(i_j+\theta_j)h_j$ in a periodic lift, where
$0\le\theta_j\le1$.
Write $I_h$ for the supplier's tensor-product multilinear interpolant. In
the local coordinates above, it is
$$I_hV(x)=\sum_{\epsilon\in\{0,1\}^d} \left(\prod_{j=1}^d\theta_j^{\epsilon_j}(1-\theta_j)^{1-\epsilon_j}\right)V_{i+\epsilon}.$$
At cell faces either adjacent cell formula gives the same value, because the
weight of the opposite face is zero. The formula is periodic and therefore
defines $I_hV$ on $\mathbb T^d$.

In dimension two the four nodal weights on one cell are shown below. The dot is
the evaluation point; the labels are exactly the four factors in the formula.
The diagram fixes the cell convention only; no later proof relies on it.

```tikz
\begin{tikzpicture}[scale=1.1]
  \draw (0,0) rectangle (3,2);
  \fill (1.2,0.8) circle (1.5pt);
  \node[below left] at (0,0) {$V_{00}$};
  \node[below right] at (3,0) {$V_{10}$};
  \node[above left] at (0,2) {$V_{01}$};
  \node[above right] at (3,2) {$V_{11}$};
  \node[below] at (1.5,-0.35) {$(1-\theta_1,\,\theta_1)$};
  \node[left] at (-0.45,1) {$(1-\theta_2,\,\theta_2)$};
  \node[above right] at (1.2,0.8) {$x$};
\end{tikzpicture}
```

## Remarks

For the lower-left node $V_{00}$ the weight is $(1-\theta_1)(1-\theta_2)$;
the other three weights are $\theta_1(1-\theta_2)$,
$(1-\theta_1)\theta_2$, and $\theta_1\theta_2$. In every dimension the
weights are nonnegative and sum to one by
[[lem-periodic-tensor-interpolant-is-convex-and-linf-contracting]]. The next
local lemma proves the smooth interpolation error used by the schemes.
