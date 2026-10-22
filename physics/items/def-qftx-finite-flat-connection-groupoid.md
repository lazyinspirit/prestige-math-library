---
id: def-qftx-finite-flat-connection-groupoid
kind: definition
title: "Finite flat connection groupoid on a cell complex"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
deps:
  - def-qftx-finite-groupoid-integration
  - thm-qftx-cw-fundamental-group-presentation
justified_by: []
aliases: []
domain: mathematics
library: mathematics
dependency_roles:
  def-qftx-finite-groupoid-integration: mathematical-premise
  thm-qftx-cw-fundamental-group-presentation: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "No choice principle is used; all cell sets and the gauge group are finite."
proof_strategy: direct
sources:
  references:
    - title: "Gregory W. Moore and Vivek Saxena, TASI Lectures on Topological Field Theories and Differential Cohomology"
      url: "https://arxiv.org/pdf/2510.07408"
      locator: "§§12–13, PDF pp. 50–53, for action groupoids, bundle automorphisms, finite gauge fields, and the weight 1/|Aut|."
    - title: "Daniel S. Freed and Frank Quinn, Chern-Simons Theory with Finite Gauge Group"
      url: "https://www.math.ru.nl/~mueger/TQFT/FQ.pdf"
      locator: "§1 and §2, PDF pp. 2–3 and 7–11, for principal finite-group bundles, their gauge groupoids, and the automorphism-weighted finite sum."
    - title: "Robbert Dijkgraaf and Edward Witten, Topological Gauge Theories and Group Cohomology"
      url: "https://www.ias.edu/sites/default/files/sns/%5B126%5DCommMathPhys129-1990.pdf"
      locator: "§6, PDF pp. 22–23, for finite-group bundles classified by homomorphisms up to conjugation and the weighted partition sum."
    - title: "John C. Baez, An Introduction to Spin Foam Models of BF Theory and Quantum Gravity"
      url: "https://arxiv.org/pdf/gr-qc/9905087"
      locator: "§7, PDF pp. 29–30, Remark 2, for the finite-group BF sum over flat bundles and the distinction from continuous-group integrals."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Let $K$ be a finite connected CW complex and $G$ a finite group. Choose an orientation of each 1-cell and, for each 2-cell, its based attaching word in the finite edge presentation of $\pi_1(K)$; the choice of base paths is part of that presentation. A **flat edge assignment** is a label $g_e\in G$ for every oriented 1-cell with $g_{\bar e}=g_e^{-1}$, such that each attaching word has holonomy $1$. If a word traverses edges $e_1,\ldots,e_m$ in that order with exponents $\epsilon_j\in\{1,-1\}$, its holonomy is $g_{e_m}^{\epsilon_m}\cdots g_{e_1}^{\epsilon_1}$.

Write $\operatorname{Flat}(K,G)$ for the finite set of flat assignments and $K_0$ for the vertices. The finite vertex gauge group $G^{K_0}$ acts by

$$(h\cdot g)_e=h_{t(e)}g_eh_{s(e)}^{-1},$$

where $s(e)$ and $t(e)$ are the source and target vertices. The **finite flat connection groupoid** $\mathcal C_G(K)$ is the action groupoid $\operatorname{Flat}(K,G)//G^{K_0}$: its objects are flat assignments and its arrows $g\to g'$ are the $h\in G^{K_0}$ with $h\cdot g=g'$. Its untwisted finite BF partition function is the groupoid cardinality

$$Z_G(K):=|\mathcal C_G(K)|=\sum_{[g]\in\operatorname{Flat}(K,G)/G^{K_0}}\frac{1}{|\operatorname{Stab}(g)|} =\frac{|\operatorname{Flat}(K,G)|}{|G|^{|K_0|}}.$$

This is a finite combinatorial model; it has no continuous Lie-algebra-valued connection integral or additional cocycle phase.

For a finite disconnected CW complex, define $\mathcal C_G(K)$ to be the product of the groupoids of its connected components; for the empty complex use the terminal groupoid.

## Definition references

[[def-qftx-finite-groupoid-integration]]

[[thm-qftx-cw-fundamental-group-presentation]]

## Facts & Assumptions

**Given:** A finite connected CW complex $K$, its finite edge-and-2-cell presentation, and a finite group $G$.

[F1] [[def-qftx-finite-groupoid-integration]]: a finite action groupoid has cardinality $\sum_{[g]}1/|\operatorname{Aut}(g)|$, and its invariant-function integrals are finite.

[F2] [[thm-qftx-cw-fundamental-group-presentation]]: the oriented non-tree edges generate $\pi_1(K)$ and the 2-cell attaching words give its relators; cells of dimension at least three do not change this presentation.

## Proof

1.1 Reversing an edge replaces $g_e$ by $g_e^{-1}$, and the gauge formula sends the reverse label to $(h_{t(e)}g_eh_{s(e)}^{-1})^{-1}=h_{s(e)}g_e^{-1}h_{t(e)}^{-1}$. For a closed attaching word based at a vertex $v$, the transformed holonomy is $h_v\operatorname{Hol}(w)h_v^{-1}$. Thus the inverse-edge rule and the flatness equations are preserved by every vertex gauge transformation. [given, F2, algebra]

2.1 For $h,k\in G^{K_0}$, applying $k$ and then $h$ sends an edge label to $h_{t(e)}k_{t(e)}g_ek_{s(e)}^{-1}h_{s(e)}^{-1}=(hk)_{t(e)}g_e(hk)_{s(e)}^{-1}$. The identity vertex labeling acts as the identity, so this is a group action and its action groupoid has the composition and inverses stated in the Definition. [given, step 1.1, algebra]

3.1 There are at most $|G|^{|E(K)|}$ edge assignments and exactly $|G|^{|K_0|}$ gauge transformations, so the action groupoid is finite. Products over the finitely many connected components are finite groupoids as well; the empty product is terminal. By [F1], the connected groupoid cardinality is the orbit sum of reciprocal stabilizer sizes. [given, F1, step 2.1]

4.1 For an orbit represented by $g$, the map $G^{K_0}/\operatorname{Stab}(g)\to G^{K_0}\cdot g$, $h\operatorname{Stab}(g)\mapsto h\cdot g$, is a bijection: equality of images is equivalent to $h_2^{-1}h_1\in\operatorname{Stab}(g)$. Hence $|G^{K_0}\cdot g|/|G^{K_0}|=1/|\operatorname{Stab}(g)|$. Summing over the disjoint orbits gives the final ratio in the Definition. [given, step 3.1, algebra] ∎
