---
id: lem-yangian-fundamental-evaluation-intertwiner
kind: lemma
title: "The rational R-matrix intertwines two fundamental evaluation orders"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-yangian-evaluation-module, prop-yangian-gl-n-rtt-hopf-structure, thm-yangian-evaluation-module-well-defined, prop-yangian-rational-r-matrix-yang-baxter-and-invertibility]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. I. Molev, M. L. Nazarov, and G. I. Olshanski, Yangians and classical Lie algebras"
      url: "https://arxiv.org/pdf/hep-th/9409025"
      locator: "§§1.4–1.8 and 1.16–1.19: the Yang R-matrix, RTT presentation, and evaluation homomorphism."
    - title: "L. D. Faddeev, How Algebraic Bethe Ansatz Works for Integrable Model"
      url: "https://arxiv.org/pdf/hep-th/9605187"
      locator: "§3, equations (31)–(39): the fundamental Lax operator and local RLL relation."
    - title: "A. P. Isaev, Lectures on Quantum Groups and Yang-Baxter Equations"
      url: "https://arxiv.org/pdf/2206.08902"
      locator: "§§3.9, 3.13: rational Yangian R-matrices and spectral-parameter intertwining relations."
---

## Statement

Let $N\ge2$, $a,b\in\mathbb C$, and let $W_a=W_b=V_N^\vee$ carry the evaluation actions with parameters $a$ and $b$ from [[def-yangian-evaluation-module]]. On the same ordered space $W_a\otimes W_b$, write $\rho_\Delta$ for the coproduct action and $\rho_{\Delta^{\mathrm{op}}}$ for the action obtained by using $\Delta^{\mathrm{op}}=\sigma\circ\Delta$, where $\sigma(x\otimes y)=y\otimes x$. Their auxiliary generating matrices are respectively $T_{0a}(u)T_{0b}(u)$ and $T_{0b}(u)T_{0a}(u)$. Identify the indexed dual bases with the standard basis when defining $R_{ab}=R_N(a-b)=(a-b)I+iP_N$ on this space. For every generating-series coefficient,

$$\rho_{\Delta}(t_{ij}(u))R_{ab}=R_{ab}\rho_{\Delta^{\mathrm{op}}}(t_{ij}(u)).$$

Thus $R_{ab}$ is an intertwining linear map; it is an isomorphism when $a-b\notin\{i,-i\}$. At the two exceptional differences the same intertwining identity holds, but the map is singular as described in [[prop-yangian-rational-r-matrix-yang-baxter-and-invertibility]].

## Facts & Assumptions

**Given:** The Hopf coproduct, the two evaluation modules, and the rational spectral $R$-matrix with its spectral Yang–Baxter equation.

[F1] [[prop-yangian-gl-n-rtt-hopf-structure]]: $\Delta(T(u))=T^{[1]}(u)T^{[2]}(u)$ is a coassociative coproduct; applying the tensor flip to $\Delta$ reverses the two matrix factors.

[F2] [[thm-yangian-evaluation-module-well-defined]]: for any $\mathfrak{gl}_N$-module and parameter $c$, $t_{ij}(u)=\delta_{ij}-i\rho(E_{ij})/(u-c)$ defines a Yangian action; on $V_N^\vee$ its auxiliary Lax matrix is $R_N(u-c)$.

[F3] [[prop-yangian-rational-r-matrix-yang-baxter-and-invertibility]]: $R_{12}(x)R_{13}(x+y)R_{23}(y)=R_{23}(y)R_{13}(x+y)R_{12}(x)$, and $R_N(d)$ is invertible exactly when $d\notin\{i,-i\}$.

[F4] [[def-yangian-evaluation-module]]: $V_N^\vee(a)$ has the dual-natural action and its auxiliary series is $I+iP_N/(u-a)$, whose polynomial Lax matrix is $R_N(u-a)$.

## Proof

1.1 On the same ordered space $W_a\otimes W_b$, the coproduct action has auxiliary matrix $T_0(u)=T_{0a}(u)T_{0b}(u)$ by [F1]. The opposite coproduct reverses those two matrix factors, giving $T_{0b}(u)T_{0a}(u)$. Multiplying both by the scalar $(u-a)(u-b)$ gives the polynomial products $L_{0a}(u-a)L_{0b}(u-b)$ and $L_{0b}(u-b)L_{0a}(u-a)$, since [F2] and [F4] give $L_{0c}(u-c)=R_{0c}(u-c)$ for $c=a,b$. [given, F1, F2, F4, algebra]

2.1 Apply the spectral Yang–Baxter identity [F3] on auxiliary space $0$ and quantum spaces $a,b$, using their indexed-basis identifications and spectral points $u,a,b$. It gives $L_{0a}(u-a)L_{0b}(u-b)R_{ab}(a-b)=R_{ab}(a-b)L_{0b}(u-b)L_{0a}(u-a)$. Since $(u-a)(u-b)$ is nonzero and invertible in the scalar Laurent-series field at infinity, cancel it from the two polynomial Lax products in step 1.1. The resulting identity is the claimed intertwining relation for $T_0(u)$, and equality of its matrix entries gives it for each $t_{ij}(u)$ coefficient. [given, F2, F3, step 1.1, algebra]

3.1 If $a-b\notin\{i,-i\}$, [F3] makes $R_{ab}$ invertible, so the intertwiner is an isomorphism. At $a-b=i$ its kernel is antisymmetric, and at $a-b=-i$ its kernel is symmetric, by [F3]; the identity in step 2.1 still holds because the Yang–Baxter identity is polynomial and no inverse was used. [given, F3, step 2.1, algebra] ∎
