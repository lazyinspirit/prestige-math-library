---
id: alg-h2-matrix-vector-multiplication
kind: algorithm
title: "Nested-basis H² matrix-vector multiplication"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-hlr-and-h2-block-matrix-representations
  - def-h2-nested-cluster-bases-and-interaction-lists
justified_by: []
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
    - title: "Steffen Börm, Lars Grasedyck, and Wolfgang Hackbusch, Hierarchical Matrices, MiS Lecture Note 21 (2003; revised June 2006), Chapter 9, §§9.1–9.2"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-2103.pdf"
    - title: "Ralf Hiptmair, AdvNumCSE Lecture Document, Chapter 2, “Local Low-Rank Compression of Non-Local Operators” (ETH Zürich, AT’23), §2.4.6"
      url: "https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf"
---

## Definition

**Input:** An H² representation $\widetilde A$ with row bases $U_\tau$, column bases $V_\sigma$, transfer matrices from [[def-h2-nested-cluster-bases-and-interaction-lists]], and a vector $x\in\mathbb F^J$.

**Procedure:**

1. Initialize an upward coefficient vector $z_\sigma$ for each column cluster. At each leaf $\sigma$, set $z_\sigma=V_\sigma^*x|_\sigma$. At each internal cluster $\sigma$ with children $\sigma_1,\sigma_2$, set $z_\sigma=\sum_{j=1}^2(E^V_{\sigma_j})^*z_{\sigma_j}$.
2. Initialize a downward coefficient vector $w_\tau=0$ for each row cluster and an output vector $y=0$. For each admissible leaf $(\tau,\sigma)$, add $S_{\tau\sigma}z_\sigma$ to $w_\tau$. For each near leaf $(\tau,\sigma)$, add $D_{\tau\sigma}x|_\sigma$ to $y|_\tau$.
3. Traverse the row tree from root to leaves. For each parent $\tau$ and child $\tau_i$, add $E^U_{\tau_i}w_\tau$ to $w_{\tau_i}$. At each row leaf $\tau$, add $U_\tau w_\tau$ to $y|_\tau$. Return $y$.

The upward and downward traversals follow the finite cluster trees; block and cluster contributions are accumulated in exact arithmetic.

## Remarks

The diagram shows one child-to-parent column transfer, one admissible interaction $(\tau,\sigma)$, and one parent-to-child row transfer. Here $\sigma_j$ and $\tau_i$ are depicted as cluster leaves so that the endpoint basis operations are visible. Arrows into $z_\sigma$, $w_\tau$, $w_{\tau_i}$, and the output denote contributions to be added, including contributions from branches and interactions not drawn. The separate bottom arrow shows a dense near block $(\eta,\rho)$, which contributes directly to the output restriction and bypasses the coefficient passes.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
\node (zs) at (0,0) {$z_\sigma$};
\node (wt) at (6,0) {$w_\tau$};
\node (zj) at (0,-1.8) {$z_{\sigma_j}$};
\node (wi) at (6,-1.8) {$w_{\tau_i}$};
\node (xj) at (0,-3.6) {$x|_{\sigma_j}$};
\node (yi) at (6,-3.6) {$y|_{\tau_i}$};
\draw[->] (xj) -- node[left] {$V_{\sigma_j}^*$} (zj);
\draw[->] (zj) -- node[left] {$(E^V_{\sigma_j})^*$} (zs);
\draw[->] (zs) -- node[above] {$S_{\tau\sigma}$} (wt);
\draw[->] (wt) -- node[right] {$E^U_{\tau_i}$} (wi);
\draw[->] (wi) -- node[right] {$U_{\tau_i}$} (yi);
\node at (0,0.7) {upward column pass};
\node at (6,0.7) {downward row pass};
\node (xr) at (0,-5) {$x|_\rho$};
\node (ye) at (6,-5) {$y|_\eta$};
\draw[->] (xr) -- node[above] {$D_{\eta\rho}$ (near block)} (ye);
\end{tikzpicture}
```

This is a contribution-flow illustration, rather than a claim that the two endpoint restrictions alone determine the output. The procedure above specifies all sums and remains independent of the diagram.
