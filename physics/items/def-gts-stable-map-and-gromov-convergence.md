---
id: def-gts-stable-map-and-gromov-convergence
kind: definition
title: Stable almost-complex maps and Gromov convergence
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-gts-symplectic-and-almost-complex-curve-data
dependency_roles:
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Aleksey Zinger, Notes on J-Holomorphic Maps, arXiv:1706.00331v1
      url: https://arxiv.org/pdf/1706.00331v1
      locator: Printed pp. 3–5, stable-map criterion, Definition 1.1 and Theorem 1.2 statement. The fixed-source rescaling and energy-convergence predicate is used here; no reading or import of the Section 5.3 compactness proof is asserted.
    - title: Urs Frauenfelder and Kai Zehmisch, Gromov compactness for holomorphic discs with totally real boundary conditions
      url: https://arxiv.org/pdf/1403.6139v2
      locator: §§1.3–1.5, printed pp. 3–4, stable maps and Gromov convergence
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $(X,J)$ be a smooth almost-complex manifold. A nodal closed Riemann surface $C$ is a connected compact complex curve whose only singularities are ordinary nodes; its normalization is a finite disjoint union of smooth compact Riemann surfaces, and each node identifies two distinct marked points on that normalization. If the normalization has components $C_1,\ldots,C_N$ and $C$ has $E$ nodes, its arithmetic genus is $g_a(C)=\sum_{i=1}^N g(C_i)+E-N+1$. A stable $J$-holomorphic map is a continuous map $u:C\to X$ whose pullback to each normalized component is smooth and $J$-holomorphic, whose values agree at both branches of every node, and whose automorphism group preserving the map and nodes is finite. Equivalently, every constant genus-zero component has at least three nodal special points and every constant genus-one component has at least one; constant components of genus at least two already have finite automorphism group.

Fix a smooth Riemannian metric $g$ on $X$. For a smooth map $v:(S,j_S)\to X$, set $E_g(v)=\frac12\int_S|dv|^2_{g,h}\,d\mathrm{vol}_h$, where $h$ is any metric in the conformal class of $j_S$; in real source dimension two this is independent of $h$. For a nodal map, $E_g(v)$ is the sum of these energies over its normalized components.

Let $(\Sigma,j)$ be a fixed connected compact closed Riemann surface and let $u_i:(\Sigma,j)\to X$ be smooth $J$-holomorphic maps. A candidate limit domain $C_\infty$ is obtained from $(\Sigma,j)$ by attaching finitely many rooted trees of spheres at pairwise distinct points $z_1,\ldots,z_\ell$; every edge is a node and $g_a(C_\infty)=g(\Sigma)$. Let $u_\infty:C_\infty\to X$ be a stable $J$-holomorphic map. The sequence **Gromov-converges** to $u_\infty$ exactly when the following rescaling and energy data exist.

1. There are $h_i\in\operatorname{Aut}(\Sigma,j)$ such that $u_i\circ h_i$ converges in $C^\infty$ on every compact subset of $\Sigma\setminus\{z_1,\ldots,z_\ell\}$ to the base-component map $u_{\infty,0}$.

2. For each root sphere attached at $z_a$, choose a coordinate disk $U_a\subset\Sigma$ about $z_a$ and increasing open sets $V_{a,i}\subset\mathbb C$ with $V_{a,i}\subset V_{a,i+1}$ and $\bigcup_iV_{a,i}=\mathbb C$. There are biholomorphic embeddings $\psi_{a,i}:V_{a,i}\to U_a$ whose images shrink to $z_a$, and $u_i\circ h_i\circ\psi_{a,i}$ converges in $C^\infty$ on compact subsets away from node points to the root-sphere map, using $\mathbb P^1=\mathbb C\cup\{\infty\}$ with its parent node at $\infty$.

3. For each child sphere attached at a node of a sphere component, choose analogous expanding coordinate domains and biholomorphic rescalings into a coordinate disk about that node in the parent sphere. Compose each child rescaling with all rescalings from its ancestors. The resulting maps converge in $C^\infty$ on compact subsets of each child sphere away from its nodes; this rule is repeated recursively through every finite sphere tree. At each node the two limiting component maps take the same value in $X$. These nested exhaustions specify every rescaling and every component of the limit.

4. With $\mu_{u_i\circ h_i}=\frac12|d(u_i\circ h_i)|^2_{g,h}\,d\mathrm{vol}_h$, the reparametrized energy measures satisfy $\mu_{u_i\circ h_i}\rightharpoonup\mu_{u_{\infty,0}}+\sum_{a=1}^{\ell}\bigl(\sum_{v\in T_a}E_g(u_{\infty,v})\bigr)\delta_{z_a}$. In particular, $E_g(u_i)\to\sum_vE_g(u_{\infty,v})$ over the base and every sphere vertex, so no energy is lost on any intervening neck. Unstable constant sphere components may be contracted after convergence; this preserves the arithmetic genus, component energies and matched values.

This is a definition of fixed-source closed-domain convergence, not a compactness theorem. It includes the rescaling and no-neck content of Zinger's Definition 1.1 and Theorem 1.2; it asserts no bordered-domain or varying-source result.

## Definition references

[[def-gts-symplectic-and-almost-complex-curve-data]]

## Component-tree convention

Each vertex below represents one normalized component with its map; an edge represents a node whose two target values agree. The drawing is schematic and is not a compactness argument.

```tikz
\begin{tikzpicture}[baseline=(current bounding box.center), every node/.style={draw,rounded corners,align=center}]
  \node (s) at (0,0) {\(\Sigma_0\)\\\(u_0\)};
  \node (b1) at (-2,-1.4) {\(S^2_1\)\\\(u_1\)};
  \node (b2) at (2,-1.4) {\(S^2_2\)\\\(u_2\)};
  \draw (s) -- node[left,draw=none] {node} (b1);
  \draw (s) -- node[right,draw=none] {node} (b2);
\end{tikzpicture}
```
