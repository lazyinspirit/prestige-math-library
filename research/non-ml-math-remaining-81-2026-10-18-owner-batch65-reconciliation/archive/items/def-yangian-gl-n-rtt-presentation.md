---
id: def-yangian-gl-n-rtt-presentation
kind: definition
title: "The type-A RTT Yangian in the rational i-normalization"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-matrix-units, thm-tensor-product-basis-from-bases, def-hh-rational-spectral-r-matrix]
justified_by: [prop-yangian-gl-n-rtt-hopf-structure]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "A. I. Molev, M. L. Nazarov, and G. I. Olshanski, Yangians and classical Lie algebras"
      url: "https://arxiv.org/pdf/hep-th/9409025"
      locator: "§§1.1, 1.4–1.8 and 1.28: the RTT presentation, permutation R-matrix, Yang–Baxter equation, and Hopf structure of Y(gl_N)."
    - title: "A. P. Isaev, Lectures on Quantum Groups and Yang-Baxter Equations"
      url: "https://arxiv.org/pdf/2206.08902"
      locator: "§3.9, PDF pp. 81–83: spectral-parameter RTT algebras, the rational Yangian limit, and the coproduct convention."
    - title: "F. Loebbert, Lectures on Yangian Symmetry"
      url: "https://arxiv.org/pdf/1606.02947"
      locator: "§§3.1–3.3 and 5.1–5.3: the Yangian and Hopf conventions, the RTT realization, Lax operators, monodromy, and periodic transfer matrices."
verification:
  precheck: n/a
---

## Definition

Fix an integer $N\ge2$, the field $\mathbb C$, and the ordered vector-space basis $e_1,\ldots,e_N$ of $V_N=\mathbb C^N$. The matrix units $E_{ij}$ have the convention of [[def-matrix-units]], and $\mathfrak{gl}_N(\mathbb C)$ means $M_N(\mathbb C)$ with the commutator bracket. Tensor products are over $\mathbb C$ and use the fixed finite tensor convention of [[def-hh-rational-spectral-r-matrix]]; the elementary tensors form the basis supplied by [[thm-tensor-product-basis-from-bases]].

Define the flip $P_N\in\operatorname{End}(V_N\otimes V_N)$ by $P_N(e_a\otimes e_b)=e_b\otimes e_a$, and set $R_N(x)=xI+iP_N$, where $i^2=-1$. For $V_N^{\otimes3}$, $P_{12},P_{13},P_{23}$ swap the indicated positions and $R_{ab}(x)=xI+iP_{ab}$. Products mean composition, with the rightmost factor applied first.

Let $t_{ij}^{(r)}$ for $1\le i,j\le N$ and $r\ge1$ be generators, and put $t_{ij}(u)=\delta_{ij}+\sum_{r\ge1}t_{ij}^{(r)}u^{-r}$ and $T_0(u)=\sum_{i,j}E_{ij}^{(0)}\otimes t_{ij}(u)$. On two auxiliary copies of $V_N$, define $T_1(u)=\sum_{i,j}E_{ij}\otimes I\otimes t_{ij}(u)$ and $T_2(v)=\sum_{i,j}I\otimes E_{ij}\otimes t_{ij}(v)$, with the third tensor position the coefficient space. The RTT Yangian $Y_i(\mathfrak{gl}_N)$ is the unital associative $\mathbb C$-algebra on these generators modulo the coefficientwise formal-series relation

$$R_{12}(u-v)T_1(u)T_2(v)=T_2(v)T_1(u)R_{12}(u-v).$$

Here the relation means that every coefficient vanishes after expanding each $t_{ij}$ at $u=v=\infty$.

The normalization is rational and difference-form. At $N=2$ its $R$-family is exactly the existing finite supplier [[def-hh-rational-spectral-r-matrix]]; this definition uses that carrier for the rank-two instance and introduces no second $\mathbb C^2$ model.

The proposed coproduct and counit are $\Delta(t_{ij}(u))=\sum_k t_{ik}(u)\otimes t_{kj}(u)$ and $\epsilon(t_{ij}(u))=\delta_{ij}$. The formal antipode is $S(T_0(u))=T_0(u)^{-1}$. Their well-definedness and Hopf identities are proved in [[prop-yangian-gl-n-rtt-hopf-structure]].
